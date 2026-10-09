"use client";

import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";


const Navbar = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    const { data: session, isPending } = authClient.useSession();

    return (
        <nav className="border-b border-gray-200 bg-white">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 py-10 sm:px-6 lg:px-2">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-15 w-15 items-center justify-center rounded-xl bg-green-600 text-white lg:h-10 lg:w-10">
                        <Image
                            src="/logo-icon.png"
                            width={500}
                            height={500}
                            alt="বাজার দর লোগো"
                            className="h-6 w-6"
                        />
                    </div>

                    <div className="leading-loose lg:leading-tight">
                        <h1 className="text-lg font-bold text-gray-900">
                            বাজার দর
                        </h1>

                        <p className="text-[10px] text-gray-500">
                            {date}
                        </p>
                    </div>
                </Link>

                {/* Navigation */}
                <div className="flex flex-col items-center gap-1 md:flex-row md:gap-3 lg:gap-5">
                    {isPending ? (
                        <div className="text-sm text-gray-500">
                            Loading...
                        </div>
                    ) : session ? ( 
                        <Link
                            href="/profile"
                            className="rounded-full border-2 border-green-600 p-0.5 transition hover:border-green-700 hover:scale-105"
                        >
                            <Image
                                src={session.user.image || "/default-avatar.png"}
                                width={40}
                                height={40}
                                alt={session.user.name || "User profile"}
                                className="h-9 w-9 rounded-full object-cover"
                            />
                        </Link>
                    ) : (
                        <>
                            <Link
                                href="/signin"
                                className="text-sm font-medium text-gray-700 transition hover:text-green-600"
                            >
                                সাইন ইন
                            </Link>

                            <Link
                                href="/signup"
                                className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-green-700"
                            >
                                সাইন আপ
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


