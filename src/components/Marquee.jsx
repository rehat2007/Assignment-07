import convertToBanglaNumber from "@/utils/ConvertToBanglaNumber";
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"


const Marquee = ({ product }) => {
    const productData = [...product];

    return (
        <div className="w-full border-b border-gray-200 overflow-x-auto bg-white">
            <MarqueeText duration={20}>
            <div className="flex min-w-max items-center">
                {productData.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className="flex items-center gap-2 border-r border-gray-300 px-4 py-2 text-[11px]"
                        >
                            <span >
                                {item.categoryIcon}
                            </span>
                            <span className="text-gray-700">
                                {item.nameBn}
                            </span>

                            <span className="font-medium text-gray-700">
                                {`${convertToBanglaNumber(item.today)} টাকা/কেজি`}
                            </span>

                            <span className={ item.change.dir === "down"  ? "text-red-500" : "text-green-500"}>
                             {`${item.change.dir === "down"  ?" ▲ ":" ▼ "} ${convertToBanglaNumber(item.change.pct)}%`}
                            </span>
                        </div>
                    );
                })}
            </div>
            </MarqueeText>
        </div>
    );
};

export default Marquee;

