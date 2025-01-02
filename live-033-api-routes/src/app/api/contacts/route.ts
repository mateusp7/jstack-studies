import { type NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  const contacts = await db.contact.findMany();
  return NextResponse.json({ contacts });
}

export async function POST(request: NextRequest) {
  const { name, email } = await request.json();

  if (!name || !email) {
    return NextResponse.json(
      { error: 'Name and Email are required' },
      { status: 400 }
    );
  }

  const emailAlreadyInUse = await db.contact.findUnique({
    where: {
      email: email.toLowerCase(),
    },
    select: {
      id: true,
      email: true,
    },
  });

  if (emailAlreadyInUse) {
    return NextResponse.json(
      { error: 'This email already in use' },
      { status: 409 }
    );
  }

  const contact = await db.contact.create({
    data: {
      email,
      name,
    },
  });

  return NextResponse.json(
    {
      contact,
    },
    {
      status: 201,
    }
  );
}
