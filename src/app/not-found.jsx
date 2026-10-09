
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#f4faf5] px-5 py-12">
            <div className="w-full max-w-2xl text-center">

                {/* 404 Illustration */}
                <div className="relative mx-auto mb-8 flex items-center justify-center">
                    <div className="absolute h-64 w-64 rounded-full bg-[#e4f4e7] blur-3xl opacity-70" />

                    <div className="relative flex items-center justify-center gap-1 sm:gap-3">
                        <span className="text-8xl font-extrabold tracking-tight text-[#168746] sm:text-9xl">
                            4
                        </span>

                        <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-[12px] border-[#bce4c7] bg-white sm:h-36 sm:w-36">
                            <span className="text-5xl text-[#168746] sm:text-6xl">
                                🌱
                            </span>
                        </div>

                        <span className="text-8xl font-extrabold tracking-tight text-[#168746] sm:text-9xl">
                            4
                        </span>
                    </div>

                    <span className="absolute -left-1 bottom-0 text-3xl sm:left-10">
                        🌿
                    </span>

                    <span className="absolute -right-2 bottom-0 text-3xl sm:right-10">
                        🌿
                    </span>
                </div>

                {/* Error Message */}
                <h1 className="mb-4 text-2xl font-bold text-[#174b32] sm:text-4xl">
                    পেজটি পাওয়া যায়নি!
                </h1>

                <p className="mx-auto mb-8 max-w-lg text-sm leading-7 text-[#61766a] sm:text-base">
                    আপনি যে পেজটি খুঁজছেন, সেটি হয়তো সরিয়ে ফেলা হয়েছে,
                    নাম পরিবর্তন করা হয়েছে অথবা এটির অস্তিত্ব নেই।
                </p>

                {/* Home Button */}
                <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#07883f] px-7 py-3.5 font-semibold text-white shadow-lg shadow-green-900/15 transition hover:-translate-y-0.5 hover:bg-[#067535] focus:outline-none focus:ring-2 focus:ring-[#07883f] focus:ring-offset-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.8}
                        stroke="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m2.25 12 9.204-9.204a.75.75 0 0 1 1.06 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125h4.125v-6.75h4.5V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75"
                        />
                    </svg>

                    হোম পেজে ফিরুন
                </Link>

                <p className="mt-12 text-xs text-[#8ba092]">
                    দুঃখিত, এই পেজটি খুঁজে পাওয়া যায়নি।
                </p>
            </div>
        </main>
    );
}