import { jwtHelpers } from "@/helpers/jwtHelpers";
import { getNewAccessToken } from "@/services/getNewAccessToken";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: "pro-tech-fixer",
      name: "Credentials",
      type: "credentials",
      credentials: {
        username: {
          label: "Email",
          type: "email",
          placeholder: "Enter Your Email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const res = await fetch("http://localhost:4000/api/v1/auth/login", {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const { data } = await res.json();
          const verifyToken: any = jwtHelpers.verifyToken(
            data?.accessToken,
            process.env.JWT_SECRET!
          );

          if (res.ok && data) {
            return {
              ...data,
              ...verifyToken,
            };
          }
        } catch (error: any) {
          console.log(error);
          throw new Error(error.message);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // console.log(token, "token auth option");
      // console.log(user, "user auth option");
      return {
        ...token,
        ...user,
      };
    },
    async session({ session, token }: { session: any; token: any }) {
      console.log(session, "session auth option");
      console.log(token, "token auth option inside session");
      const verifiedToken = jwtHelpers.verifyToken(
        token?.accessToken,
        process.env.JWT_SECRET!
      );
      if (!verifiedToken) {
        console.log("token expired so new token generated");
        const { data } = await getNewAccessToken(token?.accessToken);
        token.accessToken = data?.accessToken;
      }
      return {
        ...session,
        ...token,
      };
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    error: "/",
  },
};
