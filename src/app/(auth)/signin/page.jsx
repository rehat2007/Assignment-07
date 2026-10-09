"use client";

import Link from "next/link";
import { toast } from "sonner";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
    const [loading, setLoading] = useState(false);
    const [socialLoading, setSocialLoading] = useState("");
    const [error, setError] = useState("");

    // Email and password login
    const handleLogin = async (e) => {
        e.preventDefault();

        setError("");
        setLoading(true);

        const formData = new FormData(e.target);

        const email = formData.get("email");
        const password = formData.get("password");

        try {
            const { data, error } = await authClient.signIn.email({
                email: email,
                password: password,
                callbackURL: "/?auth=login",
            });

            if (error) {
                toast.error("ইমেইল অথবা পাসওয়ার্ড সঠিক নয়।");
                return;
            }

            console.log("Login successful:", data);

        } catch (err) {
            toast.error("লগইন করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
        } finally {
            setLoading(false);
        }
    };

    // Google Login
    const handleGoogleLogin = async () => {
        setError("");
        setSocialLoading("google");

        try {
            await authClient.signIn.social({
                provider: "google",
                callbackURL: "/?auth=login",
            });
        } catch (err) {
            setError("Google দিয়ে লগইন করতে সমস্যা হয়েছে।");
            setSocialLoading("");
        }
    };

    // GitHub Login
    const handleGithubLogin = async () => {
        setError("");
        setSocialLoading("github");

        try {
            await authClient.signIn.social({
                provider: "github",
                callbackURL: "/?auth=login",
            });
        } catch (err) {
            setError("GitHub দিয়ে লগইন করতে সমস্যা হয়েছে।");
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
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                required
                                autoComplete="email"
                                className="w-full rounded-md border border-[#dce4dc] px-3 py-2.5 text-sm"
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
                                name="password"
                                type="password"
                                placeholder="পাসওয়ার্ড লিখুন"
                                required
                                autoComplete="current-password"
                                className="w-full rounded-md border border-[#dce4dc] px-3 py-2.5 text-sm"
                            />
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="mt-4 rounded-md border border-red-200 bg-red-50 px-3 py-2.5 text-xs text-red-600">
                                {error}
                            </div>
                        )}

                        {/* Login Button */}
                        <button
                            type="submit"
                            disabled={loading || socialLoading !== ""}
                            className="mt-4 w-full rounded-md bg-[#07883f] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#067936] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {loading
                                ? "সাইন ইন হচ্ছে..."
                                : "সাইন ইন"}
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

                        {/* Google Login */}
                        <button
                            type="button"
                            onClick={handleGoogleLogin}
                            disabled={loading || socialLoading !== ""}
                            className="flex items-center justify-center gap-2 rounded-md border border-[#dce4dc] bg-white px-3 py-2.5 text-xs font-medium text-[#303832] transition hover:bg-[#f7f9f7] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            <span className="text-sm font-bold text-[#4285F4]">
                                G
                            </span>

                            {socialLoading === "google"
                                ? "অপেক্ষা করুন..."
                                : "Google দিয়ে চালিয়ে যান"}
                        </button>

                        {/* GitHub Login */}
                        <button
                            type="button"
                            onClick={handleGithubLogin}
                            disabled={loading || socialLoading !== ""}
                            className="flex items-center justify-center gap-2 rounded-md border border-[#dce4dc] bg-white px-3 py-2.5 text-xs font-medium text-[#303832] transition hover:bg-[#f7f9f7] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {/* Keep your existing GitHub SVG here */}

                            {socialLoading === "github"
                                ? "অপেক্ষা করুন..."
                                : "GitHub দিয়ে চালিয়ে যান"}
                        </button>
                    </div>

                    {/* Register Link */}
                    <p className="mt-5 text-center text-xs text-[#727b75]">
                        অ্যাকাউন্ট নেই?{" "}

                        <Link
                            href="/signup"
                            className="font-medium text-[#07883f] transition hover:text-[#056d32] hover:underline"
                        >
                            সাইন আপ করুন
                        </Link>
                    </p>
                </div>

                {/* Back to Home */}
                <Link
                    href="/"
                    className="mt-5 text-xs text-[#929a95] hover:text-green-600"
                >
                    ← হোম পেজে ফিরে যান
                </Link>
            </div>
        </main>
    );
}

