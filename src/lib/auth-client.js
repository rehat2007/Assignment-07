import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "https://assignment-07-onml-git-main-my-team-fc5e.vercel.app/",
});

export const { signIn, signUp, useSession } = authClient;