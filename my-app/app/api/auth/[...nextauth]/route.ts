// app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import type { JWT } from "next-auth/jwt";
import type { Session, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";

const prisma = new PrismaClient();

export const authOptions = {
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: {},
				password: {},
			},
			async authorize(credentials) {
				const user = await prisma.user.findUnique({
					where: { email: credentials?.email },
				});

				if (!user || !(await compare(credentials!.password, user.password))) {
					throw new Error("Invalid credentials");
				}

				return { id: user.id, name: user.name, email: user.email };
			},
		}),
	],
	session: {
		strategy: "jwt" as const,
	},
	callbacks: {
		async jwt({ token, user }: { token: JWT; user?: User }) {
			if (user) token.id = user.id;
			return token;
		},
		async session({ session, token }: { session: Session; token: JWT }) {
			if (token && session.user) {
				session.user.id = token.id as string;
			}
			return session;
		},
	},
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
