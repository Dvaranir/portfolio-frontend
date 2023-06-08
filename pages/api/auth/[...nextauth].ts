import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export default NextAuth({
    providers: [
      CredentialsProvider({
         
          id: 'credentials',
          name: 'Credentials',
          type: "credentials",
          
          credentials: {
            username: { label: "Email", type: "text", placeholder: "example@mail.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {

            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/authenticate`, {
              email: credentials?.username,
              password: credentials?.password
            })

            const jwt = response.data.token

            if(jwt){
              return jwt
            }else{
              console.log(response);
              return null;
            }
          }
        })
    ],
    session: {
      strategy: "jwt",
    },
    callbacks: {
      async jwt({ token, user }) {
        return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
    },
  });