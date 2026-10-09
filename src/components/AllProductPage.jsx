"use client"

import convertToBanglaNumber from "@/utils/ConvertToBanglaNumber";
import Link from 'next/link';
import { authClient } from "@/lib/auth-client";

const Allproducts = ({ allProduct }) => {

  const { data: session, isPending } = authClient.useSession();

  return (
    <section className="w-full bg-[#f3f8f4] px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="mb-3 flex flex-col gap-1.5">
          <h2 className="text-sm font-bold text-[#252a27] sm:text-base">
            সব পণ্
          </h2>
          <p className="text-xs py-1 text-gray-400">
            মোট {convertToBanglaNumber(allProduct.length)} টি পণ্য দেখানো হচ্ছে
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {allProduct.map((product) => (
            <Link
              href={
                session
                  ? `/item/${product.category}/${product.id}`
                  : "/signin"
              }
              key={product.id}
              className="
                group
                rounded-xl
                border
                border-transparent
                bg-[#fdfefd]
                p-2.5
                shadow-[0_1px_4px_rgba(0,0,0,0.02)]
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:border-green-500
                hover:shadow-[0_4px_12px_rgba(34,197,94,0.10)]
              "
            >
              {/* Top part */}
              <div className="flex items-start justify-between gap-2">

                {/* Product information */}
                <div className="flex min-w-0 items-center gap-2">

                  {/* Image */}
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#f5f8f5]
                      text-xl
                      transition-transform
                      duration-200
                      group-hover:scale-105
                    "
                  >
                    {product.image}
                  </div>

                  {/* Name */}
                  <div className="min-w-0">
                    <h3 className="truncate text-[11px] font-bold text-[#303632] sm:text-xs">
                      {product.nameBn}
                    </h3>

                    <p className="mt-0.5 truncate text-[8px] text-gray-500 sm:text-[9px]">
                      {product.categoryNameBn}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom part */}
              <div className="mt-2 flex items-end justify-between">

                {/* Price */}
                <div>
                  <p className="text-[7px] text-gray-500 sm:text-[8px]">
                    আজকের বাজার দাম
                  </p>

                  <p className="mt-0.5 text-[12px] font-bold text-[#252a27] sm:text-sm">
                    {product.today}
                  </p>
                </div>

                {/* Percentage */}
                <span
                  className={`
    inline-flex
    items-center
    gap-0.5
    rounded-full
    bg-[#f2f8f3]
    px-1.5
    py-0.5
    text-[7px]
    sm:text-[8px]
    ${product.change.dir === "down"
                      ? "text-red-500"
                      : "text-green-500"
                    }
  `}
                >
                  <span className="text-[6px]">{product.change.dir === "down" ? '▲' : '▼'}</span>
                  {product.change.pct}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Allproducts

