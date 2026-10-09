"use client";

import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {

    const { data: session, isPending } = authClient.useSession();
    const router = useRouter();

    useEffect(() => {
        if (!isPending && !session) {
            router.replace("/signin");
        }
    }, [isPending, session, router]);

    if (isPending || !session) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#f1f6f1]">
                <p className="text-[#697169]">প্রোফাইল লোড হচ্ছে...</p>
            </main>
        );
    }

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/signin");
                },
            },
        });
    };

    return (
        <main className="min-h-screen bg-[#f1f6f1] px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
                {/* Page Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold tracking-tight text-[#202620] sm:text-3xl">
                        আমার প্রোফাইল
                    </h1>

                    <p className="mt-1 text-sm text-[#697169] sm:text-base">
                        আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
                    </p>
                </div>

                {/* Profile Card */}
                <section className="rounded-2xl border border-[#dce4dc] bg-[#fbfdfb] p-5 shadow-sm sm:p-6">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        {/* User Info */}
                        <div className="flex items-center gap-4">
                            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-[#eef2ee]">
                                <Image
                                    src={session?.user?.image || "/default-avatar.png"}
                                    fill
                                    alt="Profile"
                                    className="object-cover"
                                />
                            </div>

                            <div className="min-w-0">
                                <h2 className="truncate text-lg font-semibold text-[#202620] sm:text-xl">
                                    {session.user.name}
                                </h2>

                                <p className="truncate text-sm text-[#697169] sm:text-base">
                                    {session.user.email}
                                </p>
                            </div>
                        </div>

                        {/* Logout Button */}
                        <button
                            onClick={handleSignOut}
                            type="button"
                            className="w-full rounded-lg border border-[#ff3b30] px-4 py-2 text-sm font-medium text-[#ef3027] transition hover:bg-[#fff1f0] active:scale-[0.98] sm:w-auto"
                        >
                            সাইন আউট
                        </button>
                    </div>
                </section>

                {/* Information Card */}
                <section className="mt-6 rounded-2xl border border-[#dce4dc] bg-[#fbfdfb] p-5 shadow-sm sm:p-6">
                    <h2 className="mb-8 text-lg font-semibold text-[#202620]">
                        তথ্য
                    </h2>

                    <form className="space-y-4">
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block text-sm font-medium text-[#3f4740]"
                            >
                                নাম
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                defaultValue=""
                                className="h-10 w-full rounded-lg border border-[#dce4dc] bg-[#fbfdfb] px-3 text-sm text-[#202620] outline-none transition placeholder:text-[#9ca59d] focus:border-[#079447] focus:ring-2 focus:ring-[#079447]/10"
                            />
                        </div>

                        <button
                            type="submit"
                            className="h-10 w-full rounded-lg bg-[#079447] px-4 text-sm font-semibold text-white shadow-[0_3px_0_#057536] transition hover:bg-[#078b42] active:translate-y-[2px] active:shadow-none"
                        >
                            আপডেট
                        </button>
                    </form>
                </section>
            </div>
        </main>
    );
}