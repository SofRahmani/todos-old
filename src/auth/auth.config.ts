import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github"
import type { NextAuthConfig } from "next-auth"
import { env } from '@/env'

export default { providers: [
  Google({ clientId: env.AUTH_GOOGLE_ID, clientSecret: env.AUTH_GOOGLE_SECRET }),
  GitHub({ clientId: env.AUTH_GITHUB_ID, clientSecret: env.AUTH_GITHUB_SECRET })
]} satisfies NextAuthConfig