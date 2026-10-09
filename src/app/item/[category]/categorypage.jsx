"use client";

import convertToBanglaNumber from "@/utils/ConvertToBanglaNumber";
import { useState } from "react";

const Categorypage = ({ category }) => {
console.log(category);

const [sortOrder, setSortOrder] = useState("default");

const sortedPrices = [...category].sort((a, b) => {
    console.log("category :", category);

    if (sortOrder === "low") return a.today - b.today;
    if (sortOrder === "high") return b.today - a.today;

    return a.id - b.id;
});

return (
    <main className="min-h-screen bg-[#F0F5F0] px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
            {/* Header */}
            <header className="flex items-center gap-4 rounded-2xl border border-[#DFE7DF] bg-[#FAFCFA] px-5 py-5 sm:px-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F0F5F0] text-3xl">
                    {category[0]?.categoryIcon}
                </div>

                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-[#202B23] sm:text-3xl">
                        {category[0]?.categoryNameBn}
                    </h1>
                    <p className="mt-1 text-sm text-[#68736B] sm:text-base">
                        {convertToBanglaNumber(category.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
                    </p>
                </div>
            </header>

            {/* Sorting */}
            <section className="mt-6 flex min-h-[68px] items-center justify-end gap-3 rounded-2xl border border-[#DFE7DF] bg-[#FAFCFA] px-4 py-3 sm:px-6">
                <label htmlFor="sort" className="text-sm text-[#68736B] sm:text-base">
                    সাজান
                </label>

                <select
                    id="sort"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="cursor-pointer rounded-lg border border-[#CDD6CE] bg-[#FAFCFA] px-3 py-2 text-sm text-[#273329] outline-none transition focus:border-[#829B85] focus:ring-2 focus:ring-[#DDE9DD]"
                >
                    <option value="default">ডিফল্ট</option>
                    <option value="low">কম দাম</option>
                    <option value="high">বেশি দাম</option>
                </select>
            </section>

            {/* Product Count */}
            <p className="my-4 text-sm text-[#68736B] sm:text-base">
                মোট {convertToBanglaNumber(category.length)}টি পণ্য দেখানো হচ্ছে
            </p>

            {/* Rice Cards */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {sortedPrices.map((rice) => (
                    <article
                        key={rice.id}
                        className="rounded-2xl border border-[#DFE7DF] bg-[#FAFCFA] p-4 transition duration-200  hover:border-green-500 hover:shadow-sm sm:p-4"
                    >
                        {/* Product Information */}
                        <div className="flex items-center gap-3">
                            <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-xl bg-[#F0F5F0] text-2xl">
                                {rice.image}
                            </div>

                            <div className="min-w-0">
                                <h2 className="text-base font-bold text-[#202B23] sm:text-lg">
                                    {rice.nameBn}
                                </h2>
                                <p className="mt-0.5 text-sm text-[#68736B]">
                                    প্রতি {rice.unit === "kg" ? "কেজি" : rice.unit}
                                </p>
                            </div>
                        </div>

                        {/* Price and Change */}
                        <div className="mt-3 flex items-end justify-between gap-3">
                            <div>
                                <p className="text-xs text-[#68736B] sm:text-sm">
                                    আজকের দাম
                                </p>

                                <p className="mt-1 text-xl font-bold leading-tight text-[#202B23]">
                                    {convertToBanglaNumber(rice.today)} টাকা
                                </p>
                            </div>

                            <span
                                className={`mb-0.5 inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
                                    rice.change.dir === "up"
                                        ? "bg-[#F0F5F0] text-[#E53935]"
                                        : rice.change.dir === "down"
                                            ? "bg-[#EDF6EF] text-[#159447]"
                                            : "bg-[#F0F5F0] text-[#273329]"
                                }`}
                            >
                                {rice.change.dir === "up"
                                    ? "▲"
                                    : rice.change.dir === "down"
                                        ? "▼"
                                        : "—"}

                                {convertToBanglaNumber(Math.abs(rice.change.pct))}%
                            </span>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    </main>
);


};

export default Categorypage;
