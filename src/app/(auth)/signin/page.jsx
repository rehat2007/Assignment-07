"use client";

import Link from "next/link";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [socialLoading, setSocialLoading] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        setError("");
        setLoading(true);

        try {
            const { data, error } = await authClient.signIn.email({
                email,
                password,
                callbackURL: "/",
            });

            if (error) {
                setError(error.message || "ইমেইল অথবা পাসওয়ার্ড সঠিক নয়।");
                return;
            }

            console.log("Login successful:", data);
        } catch (err) {
            setError("লগইন করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
        } finally {
            setLoading(false);
        }
    };

    const handleSocialLogin = async (provider) => {
        setError("");
        setSocialLoading(provider);

        try {
            await authClient.signIn.social({
                provider,
                callbackURL: "/",
            });
        } catch (err) {
            setError("সোশ্যাল লগইন করতে সমস্যা হয়েছে।");
        } finally {
            setSocialLoading("");
        }
    };

    return (
        <main className="min-h-screen bg-[#f2f6f2] px-4 py-10 sm:px-6">
            <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-md flex-col items-center justify-center">
                
                {/* Header */}
                <div className="mb-5 text-center">
                    <h1 className="text-2xl font-bold tracking-tight text-[#1d2921] sm:text-3xl">
                        সাইন ইন
                    </h1>

                    <p className="mt-1.5 text-xs text-[#7b847d] sm:text-sm">
                        বাজারদর গাইড, বাজার করুন ও সহজেই পণ্য অ্যাক্সেস করুন
                    </p>
                </div>

                {/* Login Card */}
                <div className="w-full rounded-xl border border-[#dce4dc] bg-white p-5 shadow-sm sm:p-6">
                    
                    <form onSubmit={handleLogin}>
                        
                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-xs font-medium text-[#28332c]"
                            >
                                ইমেইল
                            </label>

                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                required
                                autoComplete="email"
                                className="w-full rounded-md border border-[#dce4dc] bg-white px-3 py-2.5 text-sm text-[#28332c] outline-none transition placeholder:text-[#9ba39d] focus:border-[#07883f] focus:ring-2 focus:ring-[#07883f]/10"
                            />
                        </div>

                        {/* Password */}
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="mb-2 block text-xs font-medium text-[#28332c]"
                            >
                                পাসওয়ার্ড
                            </label>

                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="কমপক্ষে ৮ অক্ষর"
                                required
                                autoComplete="current-password"
                                className="w-full rounded-md border border-[#dce4dc] bg-white px-3 py-2.5 text-sm text-[#28332c] outline-none transition placeholder:text-[#9ba39d] focus:border-[#07883f] focus:ring-2 focus:ring-[#07883f]/10"
                            />
                        </div>

                        {/* Error */}
                        {error && (
                            <div className="mt-4 rounded-md border border-red-200 bg-red-50 px-3 py-2.5 text-xs text-red-600">
                                {error}
                            </div>
                        )}

                        {/* Login Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-4 w-full rounded-md bg-[#07883f] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_2px_3px_rgba(0,0,0,0.2)] transition hover:bg-[#067936] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {loading ? "সাইন ইন হচ্ছে..." : "সাইন ইন"}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="my-4 flex items-center gap-3">
                        <div className="h-px flex-1 bg-[#dfe5e0]" />

                        <span className="text-[11px] text-[#858d87]">
                            অথবা
                        </span>

                        <div className="h-px flex-1 bg-[#dfe5e0]" />
                    </div>

                    {/* Social Login */}
                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        
                        {/* Google */}
                        <button
                            type="button"
                            onClick={() => handleSocialLogin("google")}
                            disabled={socialLoading !== ""}
                            className="flex items-center justify-center gap-2 rounded-md border border-[#dce4dc] bg-white px-3 py-2.5 text-xs font-medium text-[#303832] transition hover:bg-[#f7f9f7] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            <span className="text-sm font-bold text-[#4285F4]">
                                G
                            </span>

                            {socialLoading === "google"
                                ? "অপেক্ষা করুন..."
                                : "Google দিয়ে চালিয়ে যান"}
                        </button>

                        {/* GitHub */}
                        <button
                            type="button"
                            onClick={() => handleSocialLogin("github")}
                            disabled={socialLoading !== ""}
                            className="flex items-center justify-center gap-2 rounded-md border border-[#dce4dc] bg-white px-3 py-2.5 text-xs font-medium text-[#303832] transition hover:bg-[#f7f9f7] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                className="h-4 w-4 fill-[#24292f]"
                                aria-hidden="true"
                            >
                                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.56 9.56 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.579.688.481A10.001 10.001 0 0 0 22 12C22 6.477 17.523 2 12 2Z" />
                            </svg>

                            {socialLoading === "github"
                                ? "অপেক্ষা করুন..."
                                : "GitHub দিয়ে চালিয়ে যান"}
                        </button>
                    </div>

                    {/* Register */}
                    <p className="mt-5 text-center text-xs text-[#727b75]">
                        অ্যাকাউন্ট নেই?{" "}
                        <Link
                            href="/register"
                            className="font-medium text-[#07883f] transition hover:text-[#056d32] hover:underline"
                        >
                            সাইন আপ করুন
                        </Link>
                    </p>
                </div>

                {/* Back */}
                <Link
                    href="/"
                    className="mt-5 text-xs text-[#8a928c] transition hover:text-[#07883f]"
                >
                    ← হোম পেজে ফিরে যান
                </Link>
            </div>
        </main>
    );
}