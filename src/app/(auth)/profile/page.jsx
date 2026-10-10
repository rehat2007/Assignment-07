"use client";

import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function ProfilePage() {

    const { data: session, isPending } = authClient.useSession();
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (!isPending && !session) {
            router.replace("/signin");
        }
    }, [isPending, session, router]);

if (isPending || !session?.user) {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#f1f6f1]">
            <p className="text-[#697169]">
                প্রোফাইল লোড হচ্ছে...
            </p>
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

    const handleUpdateName = async (e) => {
        e.preventDefault();

        if (!name.trim()) {
            toast.error("নাম লিখুন।");
            return;
        }

        setLoading(true);

        try {
            const { error } = await authClient.updateUser({
                name: name.trim(),
            });

            if (error) {
                toast.error("নাম আপডেট করা যায়নি।");
                return;
            }

            toast.success("নাম সফলভাবে আপডেট হয়েছে।");
            setName("");

        } catch (err) {
            toast.error("কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।");
        } finally {
            setLoading(false);
        }
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

                    <form onSubmit={handleUpdateName} className="space-y-3 px-1 sm:px-4">
                        <p className="text-sm font-medium text-[#202620]">
                            নাম
                        </p>

                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder=""
                            className="w-full rounded-lg border border-[#dce4dc] bg-transparent px-3 py-2 text-sm text-[#202620] outline-none transition focus:border-[#07883f] focus:ring-2 focus:ring-[#07883f]/10"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-lg bg-[#07883f] px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#07883f]/30 transition hover:bg-[#067735] focus:outline-none focus:ring-2 focus:ring-[#07883f] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading ? "আপডেট হচ্ছে..." : "আপডেট"}
                        </button>
                    </form>
                </section>
            </div>
        </main>
    );
}