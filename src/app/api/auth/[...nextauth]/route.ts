import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import { Session } from "next-auth";

const handler = NextAuth({
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
      }
      return token; 
    },

    async session({ session, token }: { session: Session; token: any }) {
      if (session?.user) {
        session.user.id = token.id;
        session.user.name = token.name;
      }
      return session;
    },

    async redirect({ url, baseUrl }) {
      if (url === "/login") {
        return baseUrl;
      }
      return baseUrl;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
