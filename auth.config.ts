import NextAuth, { Session } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import Credentials from 'next-auth/providers/credentials'

export const { handlers, auth, signIn, signOut, unstable_update } = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        console.log(credentials)

        const res = await fetch(`${process.env.BASE_URL}/auth/signin`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: credentials?.email,
            password: credentials?.password,
          }),
        })

        const user = await res.json()

        if (user) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      console.log({ account, token, user })

      return { ...token, ...user }
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      session.user = token.accessToken

      return session
    },
  },
  secret: process.env.AUTH_SECRET,
})
