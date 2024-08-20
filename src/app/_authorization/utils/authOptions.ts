import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import type { NextAuthOptions } from "next-auth";
import type { Adapter } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

declare module "next-auth" {
	interface Session {
		accessToken?: string;
		idToken?: string;
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		accessToken?: string;
		idToken?: string;
	}
}

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
	session: {
		strategy: "jwt",
	},
	secret: process.env.NEXTAUTH_SECRET,
	adapter: PrismaAdapter(prisma) as Adapter,
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID as string,
			clientSecret: process.env.GOOGLE_SECRET as string,
			authorization: {
				params: {
					// prompt: "consent",
					// access_type: "offline",
					// response_type: "code",
					scope: "openid email profile",
				},
			},
		}),
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				phone: { label: "Phone", type: "phone", placeholder: "+7 9XX XXX-XX-XX" },
				password: { label: "Password", type: "text" },
			},
			async authorize(credentials, req) {
				const user = { id: "1", name: "Andrew", email: "andalt11@gmail.com" };

				if (credentials?.phone === "79534007470" && credentials.password === "123456") {
					return user;
				}

				return null;
			},
		}),
	],
	callbacks: {
		async session({ session, token }) {
			session.accessToken = token.accessToken;
			session.idToken = token.idToken;
			return session;
		},
		async jwt({ token, account }) {
			if (account) {
				token.accessToken = account.access_token;
				token.idToken = account.id_token;
			}
			return token;
		},
		async signIn() {
			try {
				return true;
			} catch (error) {
				console.error("Error in signIn callback:", error);
				return false;
			}
		},
	},
};
