import NextAuth from "next-auth"
import { authConfig } from "./lib/auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import db from "./lib/db"


export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/login"
  },
  callbacks:{
    async jwt({token, user}) {
      if(user){
        console.log("User jwt callback: "+ user);
      }
      return token;
    },
    async session({session, token}){
      if(token){
        console.log("set the token data to session: "+ session);
      }
      return session;
    
    },
    redirect(){
      return "/login";
    }
  }
});