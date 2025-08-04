import { prisma } from '../prisma'

export async function getPost(id: number) {
  return prisma.post.findUnique({
    where: { id },
    include: { author: true }
  })
}
