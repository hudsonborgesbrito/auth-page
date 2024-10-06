import { NextAuthConfig } from "next-auth";
import Facebook from "next-auth/providers/facebook";
import Google from "next-auth/providers/google";

export const authConfig: NextAuthConfig = {
  providers: [Google, Facebook]
};