
const Banner = () => {
    const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });
    return (
        <section className="w-full bg-[#F1F5F1] px-4 py-5 sm:px-6 lg:px-8">
            <div className=" mx-auto flex w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-[#DDE5DE]  bg-[#FAFCFA] px-5 py-5 sm:px-7 sm:py-6  md:flex-row md:items-center md:justify-between  lg:px-10 " >
                {/* Left Content */}
                <div className="w-full md:max-w-2xl">

                    {/* Date */}
                    <span className=" inline-block rounded-full bg-[#E2F2E7] px-3 py-1 text-[10px] font-semibold text-[#168A45] sm:text-xs  " >
                        {date}
                    </span>

                    {/* Heading */}
                    <h1 className="  mt-2 text-2xl font-extrabold leading-tight tracking-tight text-[#26332B]  sm:text-3xl lg:text-[30px] ">
                        আজকের বাজারের দাম এক নজরে
                    </h1>

                    {/* Description */}
                    <p className=" mt-3 max-w-2xl text-[11px] leading-5 text-[#6D756F] sm:text-xs sm:leading-6 " >
                        চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও অন্যান্য পণ্যের
                        দাম — বাজারভিত্তিক বিস্তারিত তথ্য, দর, পরিবর্তন-
                        সম্পর্কিত আরও বিস্তারিত এক নজরে।
                    </p>

                    {/* Button */}
                    <button className="  mt-4 rounded-md bg-[#008C3A] px-4 py-2.5 text-[11px] font-bold text-white shadow-sm transition duration-200 hover:bg-[#007A32] hover:shadow-md active:scale-95 sm:text-xs " >
                        সব পণ্য দেখুন
                    </button>
                </div>


                {/* Fruit Illustration */}
                <div className="  mt-6 flex h-36 w-full  items-center justify-center   md:mt-0 md:h-40 md:w-52 lg:w-60 "  >
                    <div className="relative h-32 w-40">
                        {/* Ground Shadow */}
                        <div className="  absolute bottom-0 left-1/2 h-4 w-36 -translate-x-1/2 rounded-[50%] bg-[#DDE2DD]" />

                        {/* Green Fruit */}
                        <div className="  absolute left-[62px] top-[10px]  h-12 w-12 rounded-full bg-[#16B957] " >
                            {/* Stem */}
                            <div className=" absolute -top-5 left-1/2   h-6 w-1  -translate-x-1/2  rotate-[25deg]  rounded-full bg-[#158B48] " />

                            {/* Leaf */}
                            <div className="  absolute -top-5 left-1 h-2 w-6 -rotate-[25deg]  rounded-full border-t-2  border-[#158B48] " />
                        </div>
                        {/* Red Fruit */}
                        <div className=" absolute left-[22px] top-[22px]  h-11 w-11  rounded-full  bg-[#F04444] ">
                            <div className=" absolute left-2 top-2  h-2.5 w-2.5  rounded-fullbg-[#FF7777] " />
                        </div>
                        {/* Orange Fruit */}
                        <div className=" absolute left-[45px] top-[40px] h-8 w-8 rounded-full bg-[#FF8A00] " />
                        {/* Purple Fruit */}
                        <div className=" absolute left-[17px] top-[47px]  h-7 w-7 rounded-full bg-[#9B4DFF] " />
                        {/* Right Orange Fruit */}
                        <div className=" absolute right-[15px] top-[45px] h-8 w-8 rounded-full bg-[#FF9D00] " />
                        {/* Basket */}
                        <div className="absolute bottom-[6px] left-1/2  h-14 w-28  -translate-x-1/2  overflow-hidden rounded-b-lg  bg-[#B85C16] ">
                            {/* Basket top */}
                            <div className="absolute -top-1 left-0 h-4 w-full rounded-full bg-[#9E490E] " />
                            {/* Basket Lines */}
                            <div className=" absolute left-4 top-2 h-12 w-0.5 rotate-[4deg] bg-[#853A0A] opacity-70 " />
                            <div className=" absolute left-10 top-2 h-12 w-0.5 bg-[#853A0A] opacity-70 " />
                            <div className=" absolute right-10 top-2 h-12 w-0.5  bg-[#853A0A]  opacity-70" />
                            <div className=" absolute right-4 top-2 h-12 w-0.5 -rotate-[4deg] bg-[#853A0A] opacity-70" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;

