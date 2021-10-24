import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialProvider from 'next-auth/providers/credentials';
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: 'auth/signin',
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name;

      session.user.uid = token.sub;
      return session;
    },
  },
});
