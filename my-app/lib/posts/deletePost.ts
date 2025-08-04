import { prisma } from '../prisma'

export async function deletePost(id: number) {
  return prisma.post.delete({
    where: { id }
  })
}
