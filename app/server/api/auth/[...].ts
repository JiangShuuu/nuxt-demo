import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

import { NuxtAuthHandler } from '#auth'

export default NuxtAuthHandler({
  // A secret string you define, to ensure correct encryption
  secret: useRuntimeConfig().authSecret,
  providers: [
    // @ts-expect-error Use .default here for it to work during SSR.
    GithubProvider.default({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // @ts-expect-error Use .default here for it to work during SSR.
    GoogleProvider.default({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // @ts-expect-error
    CredentialsProvider.default({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials: {username: string, password: string}) {
        console.log('credentials', credentials)
        return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
      }
    })
  ],

  session: {
    strategy: 'jwt',
  },
  
  callbacks: {
    /* on before signin */
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    /* on JWT token creation or mutation */
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.accessToken = user.token;
        const decodedToken = jwtDecode(user.token);
        token.user = decodedToken;
      }
      return token;
    },
    /* on session retrival */
    async session({ session, user, token }) {
      console.log('session', {session, user, token})
      session.accessToken = token.accessToken;
      session.user.id = token.user.extra_data.id;
      session.user.name = token.user.extra_data.name;
      session.user.role = token.user.extra_data.role;
      return session
    },
  },

  // wip: not working
  pages: {
    // signIn: '/login/success',
    // signOut: '/login',
    error: '/login',
    // verifyRequest: '/login',
    // newUser: '/login'
  }
})
