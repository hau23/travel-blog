// app/api/me/route.ts

import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/route.ts"
import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session || !session.user?.id) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: {
      id: true,
      name: true,
      email: true,
      username: true,
      birthday: true,
      createdAt: true,
    },
  })

  return NextResponse.json(user)
}
