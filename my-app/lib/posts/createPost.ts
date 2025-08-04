import { prisma } from '../prisma'

export async function createPost({ title, content, authorId }: {
  title: string
  content: string
  authorId: number

}) {
  return prisma.post.create({
    data: { title, content, authorId }
  })
}
