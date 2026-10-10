import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL:process.env.BETTER_AUTH_URL,
      trustedOrigins: [
        "http://localhost:3000",
        "https://your-project.vercel.app",
    ],
});

export const { signIn, signUp, useSession } = authClient;