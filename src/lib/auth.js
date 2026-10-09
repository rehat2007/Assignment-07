import dns from "node:dns";
dns.setServers(["1.1.1.1", "1.0.0.1"]);

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const mongoUrl = process.env.MONGO_DB_URL;

if (!mongoUrl) {
throw new Error("MONGO_DB_URL is not defined");
}

const client = new MongoClient(mongoUrl);
await client.connect();

const db = client.db();

export const auth = betterAuth({
database: mongodbAdapter(db, {
client,
}),

emailAndPassword: {
    enabled: true,
},

socialProviders: {
    google: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },

    github: {
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
},
});
