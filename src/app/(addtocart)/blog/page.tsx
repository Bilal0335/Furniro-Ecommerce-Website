import Image from "next/image";
import ShopImage from "../../../../public/image/blog22.jpg";
import Blog1 from "../../../../public/image/blog1.jpg";
import Blog2 from "../../../../public/image/blog2.jpg";
import Blog3 from "../../../../public/image/blog3.jpg";
import Blog5 from "../../../../public/image/card1.png";
import Blog4 from "../../../../public/image/card2.png";
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
    </div>
  );
};

export default Blog;
