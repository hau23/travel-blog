import { prisma } from '../prisma'

export async function updatePost(id: number, data: {
  title?: string
  content?: string
}) {
  return prisma.post.update({
    where: { id },
    data
  })
}
// Note: The `id` parameter should be a number, and the `data` object can contain optional fields to update.