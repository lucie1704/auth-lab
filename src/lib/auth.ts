import { prisma } from '@/src/lib/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [],
  secret: process.env.NEXTAUTH_SECRET,
};
