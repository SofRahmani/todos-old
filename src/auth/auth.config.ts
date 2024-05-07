import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth"
import { env } from '@/env'

export default { providers: [Google({ clientId: env.GOOGLE_CLIENT_ID, clientSecret: env.GOOGLE_CLIENT_SECRET })] } satisfies NextAuthConfig