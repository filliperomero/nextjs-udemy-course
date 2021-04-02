import NextAuth from 'next-auth';
import Providers from 'next-auth/providers'

import { findOneDocument } from '../../../lib/mongoUltil'
import { verifyPassword } from '../../../lib/auth'

export default NextAuth({
  session: {
    jwt: true,
    maxAge: 1 * 24 * 60 * 60 // 1 Day
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const { email, password } = credentials;

        const user = await findOneDocument('users', { email })

        if (!user) throw new Error('User not found')

        if (!(await verifyPassword(password, user.password))) {
          throw new Error('Password does not match')
        }

        return { email: user.email }
      }
    })
  ]
});