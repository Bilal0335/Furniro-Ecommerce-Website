import Image from "next/image";
import p1 from "../../public/image/p1.png";
import p2 from "../../public/image/p2.png";
const BeautifulRoom = () => {
  return (
    <div className="h-auto bg-[#FCF8F3] mt-10 flex flex-col lg:flex-row items-center justify-around p-6 mb-7">
      <div className="text-center lg:text-left px-6 lg:px-0">
        <h1 className="text-[32px] sm:text-[36px] md:text-[40px] font-bold w-[90%] md:w-[422px]">
          50+ Beautiful rooms inspiration
        </h1>
        <p className="text-[14px] sm:text-[16px] mt-4 md:mt-6 w-[90%] md:w-[368px]">
          Our designer already made a lot of beautiful prototypes of rooms that
          inspire you.
        </p>
        <button className="w-[70%] md:w-[176px] h-[48px] bg-[#B88E2F] text-[#FFFFFF] mt-8">
          Explore More
        </button>
      </div>

      <div className="flex flex-wrap justify-center lg:flex-nowrap mt-8 lg:mt-0">
        <div className="mx-4">
          <Image
            src={p1}
            alt="beautiful-room-1"
            width={404}
            height={582}
            className="w-full lg:w-[404px] lg:h-[582px] object-cover"
          />
        </div>

        <div className="mx-4 mt-8 lg:mt-0">
          <Image
            src={p2}
            alt="beautiful-room-2"
            width={372}
            height={486}
            className="w-full lg:w-[372px] lg:h-[486px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BeautifulRoom;
