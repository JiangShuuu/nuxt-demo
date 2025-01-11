import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import { NuxtAuthHandler } from '#auth'

export default NuxtAuthHandler({
  // A secret string you define, to ensure correct encryption
  secret: process.env.AUTH_SECRET,
  providers: [
    // @ts-expect-error Use .default here for it to work during SSR.
    GithubProvider.default({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    // @ts-expect-error Use .default here for it to work during SSR.
    GoogleProvider.default({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    })
  ],
  callbacks: {
    /* on before signin */
    async signIn({ user, account, profile, email, credentials }) {
      console.log('signIn', user, account, profile, email, credentials)
      return true
    },
    /* on redirect to another url */
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    /* on session retrival */
    async session({ session, user, token }) {
      return session
    },
    /* on JWT token creation or mutation */
    async jwt({ token, user, account, profile, isNewUser }) {
      return token
    }
  },
  pages: {
    signIn: '/login/success',
    signOut: '/login',
    // error: '/login',
    // verifyRequest: '/login',
    // newUser: '/login'
  }
})
