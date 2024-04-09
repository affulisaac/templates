import NextAuth from 'next-auth';
import authOptions from '../../../../services/authOptions';

export const handler = NextAuth(authOptions) as never;

export { handler as GET, handler as POST };
