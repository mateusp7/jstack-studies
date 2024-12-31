import { type NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const searchParams = request.nextUrl.searchParams
  const cookies = request.cookies
  // console.log({searchParams})

  // console.log(headers().get('Content-Type'));

  console.log(cookies.get('cookie-do-mateus')?.value);

  const response = NextResponse.json(
    {
      create: true,
    },
    {
      status: 201,
    }
  );

  // response.cookies.set('cookie-do-mateus', 'valor do meu cookie')

  return response
}
