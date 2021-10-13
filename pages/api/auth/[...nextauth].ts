import type { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

/**
 * See all Next Auth configurations options at:
 * https://next-auth.js.org/configuration
 */
const options: NextAuthOptions = {
  theme: 'light',
  debug: process.env.NODE_ENV === 'development',
  providers: [
    Providers.Twitter({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
      scope: 'read:user',
    }),
  ],
  secret: process.env.SECRET,
  callbacks: {
    async jwt(token, user, account, profile, isNewUser) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      
      if (account?.params) {
        token.username = account.params.screen_name
      }

      return token;
    },
    async session(session, ...args) {

      const extraInfo = args[0]

      session.user = {
        ...session.user,
        username: extraInfo.username
      };

      return session;
    },
  },
};

export default NextAuth(options);
