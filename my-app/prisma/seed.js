import { PrismaClient } from '@prisma/client'
import { create } from 'domain'

console.log('Attempting to create PrismaClient...')

const prisma = new PrismaClient({
   log: ['query', 'info', 'warn', 'error'],
})

async function main() {
   console.log('Starting seed...')

   try {
      const user = await prisma.user.create({
         data: {
            email: 'test@example.com',
            name: 'Test User',
            username: 'testuser',
            id: 'test-user-id', // Use a unique ID or let Prisma generate it
            age: 30, 
            createdAt: new Date(),
         }
      })

      console.log('✅ Created user:', user)
   } catch (error) {
      console.error('❌ Failed to create user:', error)
      throw error
   }
}

main()
   .catch((e) => {
      console.error('❌ Seed error:', e)
      process.exit(1)
   })
   .finally(async () => {
      await prisma.$disconnect()
   })