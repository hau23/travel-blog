import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, password, username, birthday } = body;

  if (!name || !email || !password ||!username || !birthday ) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return NextResponse.json({ error: 'User already exists' }, { status: 409 });
  }

  const hashedPassword = await hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        username,
        password: hashedPassword,
        birthday: new Date(birthday),
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to register user' }, { status: 500 });
  }
}