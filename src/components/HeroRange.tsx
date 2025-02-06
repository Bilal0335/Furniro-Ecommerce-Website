import React from "react";
import Image1 from "../../public/image/browse1.jpg";
import Image2 from "../../public/image/browse2.jpg";
import Image3 from "../../public/image/browse3.jpg";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"]
});

const HeroRange = () => {
  return (
    <div className={`${poppins.className} bg-[#FFFFFF] mt-4 heroRange`}>
      {/* main div */}
      <div className="container mx-auto px-4">
        {/* text */}
        <div className="text-center mb-9">
          <h3 className="font-bold text-[24px] md:text-[32px]">
            Browse The Range
          </h3>
          <p className="font-normal text-[16px] md:text-[20px] text-[#666666]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        {/* image grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* image 1 */}
          <div className="group flex flex-col items-center overflow-hidden">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={Image1}
                alt="Dining"
                className="w-full h-auto transform transition duration-300 group-hover:scale-110"
              />
            </div>
            <p className="text-center mt-5 font-semibold text-[20px] lg:text-[24px] text-[#333333]">
              Dining
            </p>
          </div>
          {/* image 2 */}
          <div className="group flex flex-col items-center overflow-hidden">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={Image2}
                alt="Living"
                className="w-full h-auto transform transition duration-300 group-hover:scale-110"
              />
            </div>
            <p className="text-center mt-5 font-semibold text-[20px] lg:text-[24px] text-[#333333]">
              Living
            </p>
          </div>
          {/* image 3 */}
          <div className="group flex flex-col items-center overflow-hidden">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={Image3}
                alt="Bedroom"
                className="w-full h-auto transform transition duration-300 group-hover:scale-110"
              />
            </div>
            <p className="text-center mt-5 font-semibold text-[20px] lg:text-[24px] text-[#333333]">
              Bedroom
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRange;
