"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";

export default function AuthToast() {
    const { data: session, isPending } = authClient.useSession();
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (!session || isPending) return;

        const authType = searchParams.get("auth");

        if (authType === "signup") {
            toast.success("সাইন আপ সম্পন্ন হয়েছে।");
        } else if (authType === "login") {
            toast.success("সাইন ইন সম্পন্ন হয়েছে।");
        } else {
            return;
        }

        router.replace("/", { scroll: false });
    }, [session, isPending, searchParams, router]);

    return null;
}