"use client";

import Link from "next/link";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
    const [loading, setLoading] = useState(false);
    const [socialLoading, setSocialLoading] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        console.log(data);

        if (data.password !== data.confirmPassword) {
            setError("পাসওয়ার্ড দুটি একই নয়");
            setLoading(false);
            return;
        }

        try {
            const { data: signUpData, error } =
                await authClient.signUp.email({
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    image: data.image,
                });

            if (error) {
                setError(
                    error.message || "অ্যাকাউন্ট তৈরি করা যায়নি"
                );
                console.log(error.message);
                return;
            }

            router.push("/");
        } catch {
            setError("কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।");
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
                callbackURL: "/",
                newUserCallbackURL: "/",
                errorCallbackURL: "/signup",
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
                callbackURL: "/",
                errorCallbackURL: "/signup",
            });
        } catch (err) {
            setError("GitHub দিয়ে লগইন করতে সমস্যা হয়েছে।");
            setSocialLoading("");
        }
    };

    return (
        <main className="min-h-screen bg-[#f1f6f2] px-4 py-8 sm:py-12">
            <div className="mx-auto flex w-full max-w-md flex-col items-center">

                {/* Heading */}
                <div className="mb-6 text-center">
                    <h1 className="text-2xl font-bold text-[#26352b] sm:text-3xl">
                        অ্যাকাউন্ট তৈরি করুন
                    </h1>

                    <p className="mt-2 text-xs text-[#7a847d] sm:text-sm">
                        বিনামূল্যে সাইন আপ করে সব সুবিধা উপভোগ করুন
                    </p>
                </div>

                {/* Form Card */}
                <div className="w-full rounded-xl border border-[#dce5de] bg-white p-5 shadow-sm sm:p-6">

                    <form onSubmit={handleRegister} className="space-y-4">

                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-1.5 block text-sm font-medium text-[#111111]"
                            >
                                নাম
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="যেমন: রহিম উদ্দিন"
                                required
                                className="h-11 w-full rounded-md border border-[#dce5de] px-3 text-sm text-black outline-none transition placeholder:text-[#9aa39d] focus:border-[#079447] focus:ring-2 focus:ring-[#079447]/10"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-1.5 block text-sm font-medium text-[#37423b]"
                            >
                                ইমেইল
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                required
                                className="h-11 w-full rounded-md border border-[#dce5de] px-3 text-sm text-black outline-none transition placeholder:text-[#9aa39d] focus:border-[#079447] focus:ring-2 focus:ring-[#079447]/10"
                            />
                        </div>

                        {/* Image URL */}
                        <div>
                            <label
                                htmlFor="image"
                                className="mb-1.5 block text-sm font-medium text-[#37423b]"
                            >
                                প্রোফাইল ছবির URL
                            </label>

                            <input
                                id="image"
                                name="image"
                                type="url"
                                placeholder="https://example.com/profile.jpg"
                                className="h-11 w-full rounded-md border border-[#dce5de] px-3 text-sm text-black outline-none transition placeholder:text-[#9aa39d] focus:border-[#079447] focus:ring-2 focus:ring-[#079447]/10"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="mb-1.5 block text-sm font-medium text-[#090a0a]"
                            >
                                পাসওয়ার্ড
                            </label>

                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="কমপক্ষে ৮ অক্ষর"
                                minLength={8}
                                required
                                className="h-11 w-full rounded-md border border-[#dce5de] px-3 text-sm text-black outline-none transition placeholder:text-[#9aa39d] focus:border-[#079447] focus:ring-2 focus:ring-[#079447]/10"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="mb-1.5 block text-sm font-medium text-[#37423b]"
                            >
                                পাসওয়ার্ড নিশ্চিত করুন
                            </label>

                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                placeholder="আবার লিখুন"
                                minLength={8}
                                required
                                className="h-11 w-full rounded-md border border-[#dce5de] px-3 text-sm text-black outline-none transition placeholder:text-[#9aa39d] focus:border-[#079447] focus:ring-2 focus:ring-[#079447]/10"
                            />
                        </div>

                        {/* Error */}
                        {error && (
                            <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">
                                {error}
                            </p>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="h-11 w-full rounded-md bg-[#079447] text-sm font-semibold text-white transition hover:bg-[#067c3b] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading
                                ? "অ্যাকাউন্ট তৈরি হচ্ছে..."
                                : "অ্যাকাউন্ট তৈরি করুন"}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="my-4 flex items-center gap-3">
                        <div className="h-px flex-1 bg-[#e2e8e3]" />

                        <span className="text-xs text-[#8a938d]">
                            অথবা
                        </span>

                        <div className="h-px flex-1 bg-[#e2e8e3]" />
                    </div>

                    {/* Social Login */}
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {/* Google signup */}
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

                        {/* GitHub signup */}
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

                    {/* Login */}
                    <p className="mt-4 text-center text-xs text-[#7a847d]">
                        অ্যাকাউন্ট আছে?{" "}

                        <Link
                            href="/signin"
                            className="font-medium text-[#079447] hover:underline"
                        >
                            সাইন ইন করুন
                        </Link>
                    </p>
                </div>

                {/* Bottom Text */}
                <Link href={'/'} className="mt-5 text-xs text-[#929a95] hover:text-green-600">
                    ← হোম পেজে ফিরে যান
                </Link>
            </div>
        </main>
    );
};

export default RegisterPage;

