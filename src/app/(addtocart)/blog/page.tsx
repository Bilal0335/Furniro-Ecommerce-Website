// import LogoImage from "../../../../public/image/logo.png";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import ShopImage from "../../../../public/image/shop.jpg";
import Blog1 from "../../../../public/image/blog1.jpg";
import Blog2 from "../../../../public/image/blog2.jpg";
import Blog3 from "../../../../public/image/blog3.jpg";
import Blog5 from "../../../../public/image/card1.png";
import Blog4 from "../../../../public/image/card2.png";
// import Services from "../components/Services";
const Blog = () => {
  return (
    <div>
      <div className="mt-7 relative">
        <div className="flex justify-center relative">
          <Image
            src={ShopImage}
            alt="Shop Image"
            className="rounded-lg mb-5 w-[1440px] h-[316px]"
          />
          {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center items-center flex justify-center flex-col">
            <Image src={LogoImage} alt="logo" />
            <h1 className="text-5xl font-medium">Blog</h1>
            <div className="flex items-center justify-center gap-6 mt-2">
              <span>Home</span>
              <span>
                <IoIosArrowForward />
              </span>
              <span className="text-[#333333]">Blog</span>
            </div>
          </div> */}
        </div>
      </div>
      <div className="flex justify-center items-start p-10">
        <div>
          <Image src={Blog1} alt="blog 1" />
          <br />
          <br />
          <Image src={Blog2} alt="blog 1" />
          <br />
          <br />
          <Image src={Blog3} alt="blog 1" />
        </div>
        <div>
          <Image src={Blog5} alt="blog 1" />
          <br />
          <br />
          <Image src={Blog4} alt="blog 1" />
        </div>
      </div>
      <div className="flex justify-center items-start space-x-6 py-10 mb-7">
        <p className="bg-[#B88E2F] rounded-md p-4 w-[60px] h-[60px] text-center text-xl">
          1
        </p>
        <p className="bg-[#F9F1E7] rounded-md p-4 w-[60px] h-[60px] text-center text-xl">
          2
        </p>
        <p className="bg-[#F9F1E7] rounded-md p-4 w-[60px] h-[60px] text-center text-xl">
          3
        </p>
        <p className="bg-[#F9F1E7] rounded-md p-4 w-[60px] h-[60px] text-center text-xl flex justify-center items-center">
          Next
        </p>
      </div>
      {/* <Services /> */}
    </div>
  );
};

export default Blog;
