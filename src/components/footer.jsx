import React from 'react'

const Footer = () => {
  return (
     <footer className="w-full border-t border-gray-200 bg-[#f8faf8]">
      <div
        className="
          mx-auto
          flex
          max-w-6xl
          flex-col
          items-center
          justify-between
          gap-3
          px-4
          py-4
          text-center
          sm:flex-row
          sm:gap-4
          sm:px-6
          sm:py-5
          sm:text-left
          lg:px-1
        "
      >
        {/* Left Text */}
        <p className="text-[9px] leading-relaxed text-gray-600 sm:text-[10px]">
          বাজার দর — প্রতিদিনের পণ্যের দাম জানুন।
        </p>

        {/* Right Text */}
        <p className="text-[9px] leading-relaxed text-gray-600 sm:text-[10px]">
          সকল দাম সহায়ক; বাজার অবস্থার উপর ভিত্তি করে পরিবর্তিত হয়।
        </p>
      </div>
    </footer>
  )
}

export default Footer