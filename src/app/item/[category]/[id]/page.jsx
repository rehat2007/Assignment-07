import { getProductById } from "@/lib/api";
import Detailes from "./detailes";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

const Page = async ({ params }) => {
const { id } = await params;

// Check the user's session on the server
const session = await auth.api.getSession({
    headers: await headers(),
});

// Redirect unauthenticated users
if (!session) {
    redirect("/signin");
}

// Fetch product data after authentication
const product = await getProductById(id);

return <Detailes product={product} />;

};

export default Page;
