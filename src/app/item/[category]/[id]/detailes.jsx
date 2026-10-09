"use client";

import { authClient } from "@/lib/auth-client";

const Detailes = ({ product }) => {
if (!product) {
return ( <div className="min-h-screen bg-[#f0f5f0] flex items-center justify-center p-4"> <p className="text-gray-600">পণ্যের তথ্য লোড হচ্ছে...</p> </div>
);
}

const formatPrice = (price) =>

new Intl.NumberFormat("bn-BD", {
maximumFractionDigits: 2,
}).format(price);

const minPrice = Math.min(
...product.markets.map((market) => market.min)
);

const maxPrice = Math.max(
...product.markets.map((market) => market.max)
);

const averagePrice =
product.markets.reduce(
(total, market) => total + (market.min + market.max) / 2,
0
) / product.markets.length;

const changeIsUp = product.change?.dir === "up";

return ( <main className="min-h-screen bg-[#f0f5f0] px-3 py-6 sm:px-5 sm:py-8"> <div className="mx-auto max-w-5xl">
{/* Breadcrumb */} <nav className="mb-6 flex flex-wrap items-center gap-2 text-xs text-[#66716a]"> <span>হোম</span> <span>›</span> <span>{product.categoryNameBn}</span> <span>›</span> <span className="text-[#303a33]">{product.nameBn}</span> </nav>

    {/* Product Header */}
    <section className="mb-4 flex flex-col gap-4 rounded-xl border border-[#e1e9e1] bg-[#fbfdfb] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f0] text-3xl sm:h-16 sm:w-16">
          {product.image || product.categoryIcon || "🍚"}
        </div>

        <div className="min-w-0">
          <h1 className="text-xl font-bold text-[#202b23] sm:text-2xl">
            {product.nameBn}
          </h1>

          <p className="mt-1 text-xs text-[#7a847d]">
            প্রতি কেজি · {product.categoryNameBn}
          </p>

          <p className="mt-2 text-xs text-[#424d45]">
            গতকালের তুলনায় আজকের দামের পরিবর্তন ·{" "}
            <span
              className={
                changeIsUp ? "text-red-600" : "text-green-600"
              }
            >
              {changeIsUp ? "+" : "-"}
              {formatPrice(product.change?.pct || 0)}%
            </span>
          </p>
        </div>
      </div>

      {/* Today's Price */}
      <div className="flex shrink-0 items-center justify-between gap-4 rounded-xl bg-[#f0f5f0] px-4 py-3 sm:min-w-24 sm:flex-col sm:gap-1 sm:text-center">
        <div>
          <p className="text-xs text-[#7a847d]">আজকের দাম</p>
          <p className="text-2xl font-bold text-[#202b23]">
            {formatPrice(product.today)}
          </p>
          <p className="text-xs text-[#7a847d]">
            টাকা / কেজি
          </p>
        </div>

        <p
          className={`text-xs font-semibold ${
            changeIsUp ? "text-red-600" : "text-green-600"
          }`}
        >
          {changeIsUp ? "▲" : "▼"}{" "}
          {formatPrice(product.change?.pct || 0)}%
        </p>
      </div>
    </section>

    {/* Price Summary */}
    <section className="rounded-xl border border-[#e1e9e1] bg-[#fbfdfb] p-4 sm:p-5">
      <h2 className="mb-3 text-sm font-bold text-[#263229]">
        দামের সারসংক্ষেপ
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {/* Minimum Price */}
        <div className="rounded-xl border border-[#e1e9e1] p-4">
          <p className="text-xs text-[#58645b]">সর্বনিম্ন দাম</p>
          <p className="mt-1 text-xl font-bold text-[#079447]">
            {formatPrice(minPrice)}{" "}
            <span className="text-xs font-normal">টাকা</span>
          </p>
          <p className="mt-1 text-[11px] text-[#7a847d]">
            সবচেয়ে কম দামের বাজার
          </p>
        </div>

        {/* Average Price */}
        <div className="rounded-xl border border-[#e1e9e1] p-4">
          <p className="text-xs text-[#58645b]">সর্বাধিক দাম</p>
          <p className="mt-1 text-xl font-bold text-[#e34848]">
            {formatPrice(maxPrice)}{" "}
            <span className="text-xs font-normal">টাকা</span>
          </p>
          <p className="mt-1 text-[11px] text-[#7a847d]">
            সবচেয়ে বেশি দামের বাজার
          </p>
        </div>

        {/* Current Price */}
        <div className="rounded-xl border border-[#e1e9e1] p-4">
          <p className="text-xs text-[#58645b]">গড় দাম</p>
          <p className="mt-1 text-xl font-bold text-[#079447]">
            {formatPrice(averagePrice)}{" "}
            <span className="text-xs font-normal">টাকা</span>
          </p>
          <p className="mt-1 text-[11px] text-[#7a847d]">
            সব বাজারের গড় মূল্য
          </p>
        </div>
      </div>

      {/* Market Prices */}
      <h2 className="mb-3 mt-5 text-sm font-bold text-[#263229]">
        বাজারভিত্তিক আজকের দাম
      </h2>

      <div className="overflow-hidden rounded-xl border border-[#e1e9e1]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-xs">
            <thead className="bg-[#f8fbf8] text-[#7a847d]">
              <tr>
                <th className="px-3 py-4 font-semibold sm:px-4">
                  বাজার
                </th>
                <th className="px-3 py-4 font-semibold sm:px-4">
                  বিভাগ
                </th>
                <th className="px-3 py-4 text-right font-semibold sm:px-4">
                  সর্বনিম্ন
                </th>
                <th className="px-3 py-4 text-right font-semibold sm:px-4">
                  সর্বাধিক
                </th>
                <th className="px-3 py-4 text-right font-semibold sm:px-4">
                  গড়
                </th>
              </tr>
            </thead>

            <tbody>
              {product.markets.map((market, index) => {
                const marketAverage =
                  (market.min + market.max) / 2;

                return (
                  <tr
                    key={`${market.market}-${index}`}
                    className={`border-t border-[#dce5dc] ${
                      index % 2 === 0
                        ? "bg-[#fbfdfb]"
                        : "bg-[#f0f5f0]"
                    }`}
                  >
                    <td className="whitespace-nowrap px-3 py-3.5 font-medium text-[#303a33] sm:px-4">
                      {market.market}
                    </td>

                    <td className="whitespace-nowrap px-3 py-3.5 text-[#566159] sm:px-4">
                      {market.division}
                    </td>

                    <td className="whitespace-nowrap px-3 py-3.5 text-right text-[#303a33] sm:px-4">
                      {formatPrice(market.min)} টাকা
                    </td>

                    <td className="whitespace-nowrap px-3 py-3.5 text-right text-[#303a33] sm:px-4">
                      {formatPrice(market.max)} টাকা
                    </td>

                    <td className="whitespace-nowrap px-3 py-3.5 text-right font-semibold text-[#202b23] sm:px-4">
                      {formatPrice(marketAverage)} টাকা
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <p className="mt-3 text-[11px] text-[#7a847d]">
        মূল্য প্রতি কেজিতে দেখানো হয়েছে। বাজারভেদে দাম পরিবর্তিত হতে পারে।
      </p>
    </section>
  </div>
</main>


);
};

export default Detailes;
