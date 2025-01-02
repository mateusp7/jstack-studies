import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

interface IPutParams {
  params: {
    contactId: string;
  };
}

export async function PUT(request: NextRequest, { params }: IPutParams) {
  const { name, email } = await request.json();
  const { contactId } = params;

  if (!name || !email) {
    return NextResponse.json(
      { error: 'Name and Email are required' },
      { status: 400 }
    );
  }

  const emailAlreadyInUse = await db.contact.findUnique({
    where: {
      email: email.toLowerCase(),
      AND: {
        id: {
          not: contactId,
        },
      },
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

  const contact = await db.contact.update({
    where: {
      id: contactId,
    },
    data: {
      name,
      email,
    },
  });

  return NextResponse.json({ contact }, { status: 200 });
}
