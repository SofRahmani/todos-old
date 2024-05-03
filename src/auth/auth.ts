import { env } from "@/env";
import NextAuth from "next-auth";
import authConfig from "./auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const {
  handlers,
  auth: baseAuth,
  signIn,
  signOut
} = NextAuth({
  session: {
    strategy: "database",
  },
  adapter: PrismaAdapter(prisma),
  ...authConfig,
});
