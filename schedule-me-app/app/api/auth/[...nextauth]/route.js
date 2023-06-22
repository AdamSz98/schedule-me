import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import jwt_decode from "jwt-decode";

export const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const { email, password } = credentials;
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/users/login`,
          {
            email,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const token = res.data;
        const userInfo = jwt_decode(token);

        if (res.status == 200 && token) {
          return {
            accessToken: token,
            user: userInfo,
          };
        } else return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token.user;
      session.accessToken = token.accessToken;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/account/login",
  },
  secret: process.env.NEXT_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
