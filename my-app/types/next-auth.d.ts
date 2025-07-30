// types/next-auth.d.ts
import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      username?: string | null
      password?: string | null
      birthday?: DateTime | null
      createdAt?: DateTime | null
    }
  }

  interface User {
      id: string
      name?: string | null
      email?: string | null
      username?: string | null
      password?: string | null
      birthday?: DateTime | null
      createdAt?: DateTime | null
  }
}
