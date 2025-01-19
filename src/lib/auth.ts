import { prisma } from '@/src/lib/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { Account } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import TwitterProvider from 'next-auth/providers/twitter';
import { ExtendedJWT, ExtendedSession } from './types/next-auth';

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
      authorization: {
        params: { scope: 'read:user user:email repo' },
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      authorization: {
        params: { scope: 'openid profile email' },
      },
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID || '',
      clientSecret: process.env.TWITTER_CLIENT_SECRET || '',
    }),
  ],
  callbacks: {
    async signIn({
      account,
      profile,
    }: {
      account?: Account | null;
      profile?: any;
    }) {
      // refuse la connexion si le compte n'est pas vérifié
      if (account?.provider === 'google') {
        return profile.email_verified;
      }
      return true;
    },

    async jwt({
      token,
      account,
      profile,
    }: {
      token: ExtendedJWT;
      account?: Account | null;
      profile?: any;
    }) {
      if (account?.access_token) {
        token.accessToken = account.access_token;
        token.provider = account.provider;
      }

      return token;
    },

    async session({
      session,
      token,
    }: {
      session: ExtendedSession;
      token: ExtendedJWT;
    }) {
      if (token?.accessToken) {
        session.accessToken = token.accessToken;
      }

      if (token?.provider) {
        session.provider = token.provider;
      }

      return session;
    },
  },
  pages: {
    signIn: '/signin',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};
