//create and list articles

import { NextResponse } from 'next/server'
import { PrismaClient } from "@prisma/client"
import { getServerSession } from 'next-auth' // Optional
import { authOptions } from "../auth/[...nextauth]/route"

const prisma = new PrismaClient()

// GET all articles
export async function GET() {
  const posts = await prisma.post.findMany({
    include: { author: true },
    orderBy: { createdAt: 'desc' }
  })
  return NextResponse.json(posts)
}

// POST new article
export async function POST(req: Request) {
  const session = await getServerSession(authOptions) // Optional
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json()
  const { title, content } = body

  if (!title || !content) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const posts = await prisma.post.create({
    data: {
      title,
      content,
      authorId: session.user.id
    }
  })

  return NextResponse.json(posts)
}
