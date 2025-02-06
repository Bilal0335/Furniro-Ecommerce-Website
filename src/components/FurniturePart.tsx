import Image from "next/image";
import React from "react";
import f1 from "../../public/image/f1.png";
import f2 from "../../public/image/f2.png";
import f3 from "../../public/image/f3.png";
import f4 from "../../public/image/f4.png";
import f5 from "../../public/image/f5.png";
import f6 from "../../public/image/f6.png";
import f7 from "../../public/image/f7.png";

const FurniturePart = () => {
  return (
    <div className="h-auto mt-24 px-6 md:px-16 lg:px-32 mb-12">
      <h3 className="text-center text-[18px] sm:text-[20px] font-semibold">
        Share your setup with
      </h3>
      <h1 className="text-center text-[30px] sm:text-[40px] font-bold mt-2">
        #FuniroFurniture
      </h1>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-8">
        {/* Left Section */}
        <div className="flex flex-col items-center lg:items-start gap-5 w-full lg:w-1/3">
          <Image
            src={f1}
            alt="last-1"
            width={451}
            height={312}
            className="mb-5 object-cover"
          />
          <Image
            src={f2}
            alt="last-2"
            width={451}
            height={312}
            className="object-cover"
          />
        </div>

        {/* Center Image */}
        <div className="flex justify-center w-full lg:w-1/3">
          <Image
            src={f3}
            alt="last-3"
            width={295}
            height={392}
            className="object-cover"
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center lg:items-start gap-5 w-full lg:w-1/3">
          <Image
            src={f4}
            alt="last-4"
            width={420}
            height={348}
            className="mb-5 pt-8 lg:pt-32 object-cover"
          />
          <div className="flex justify-between gap-5 w-full">
            <Image
              src={f5}
              alt="last-5"
              width={178}
              height={242}
              className="object-cover"
            />
            <Image src={f7} alt="last-7" className="object-contain mt-[7px]" />
          </div>
        </div>

        {/* Last Image */}
        <div className="flex justify-center w-full lg:w-1/3">
          <Image
            src={f6}
            alt="last-6"
            width={425}
            height={433}
            className="object-cover mt-5 -z-50"
          />
        </div>
      </div>
    </div>
  );
};

export default FurniturePart;
