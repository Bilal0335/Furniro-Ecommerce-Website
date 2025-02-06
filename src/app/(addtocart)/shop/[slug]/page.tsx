"use client";

import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { FaStar } from "react-icons/fa";

type IProduct = {
  id: number;
  title: string;
  image?: string[] | StaticImageData | string;
  slug: string;
  price: number;
  category: string;
  description: string;
  size: string[];
  color: string[];
  qty: number;
  discount?: number;
};

const products: IProduct[] = [
  {
    id: 1,
    title: "Sytherine",
    slug: "sytherine",
    description: "Stylish cafe chair",
    price: 2500000,
    image: ["/image/image-1.png"],
    category: "Furniture",
    size: ["L", "XL", "XS"],
    color: ["Blue", "Black", "Brown"],
    qty: 1,
    discount: 0,
  },
  {
    id: 2,
    title: "Chair",
    slug: "will-executive-chair",
    description: "Will Executive chair",
    price: 1500000,
    image: ["/image/image-2.png"],
    category: "Furniture",
    size: ["L", "XL", "XS"],
    color: ["Blue", "Black", "Brown"],
    qty: 1,
    discount: 0,
  },
  {
    id: 3,
    title: "Lotto",
    slug: "luxury-big-sofa",
    description: "Luxury big sofa",
    price: 7000000,
    image: ["/image/image-3.png"],
    category: "Furniture",
    size: ["L", "XL", "XS"],
    color: ["Blue", "Black", "Brown"],
    qty: 1,
    discount: 0,
  },
];

const stars = Array(5)
  .fill(0)
  .map((_, index) => <FaStar key={index} />);

const SlugPage = ({ params }: { params: { slug: string } }) => {
  const items = products.find(
    (p) => p.slug.toLowerCase() === params.slug.toLowerCase()
  );

  if (!items) {
    return <h1 className="text-red-500">Product not found</h1>;
  }

  const productImage =
    Array.isArray(items.image) && items.image.length > 0
      ? items.image[0]
      : "/default-image.png"; // Provide a fallback image

  return (
    <div className="mt-40 mb-40 flex justify-around items-center">
      <div className="space-y-3 w-[200px] flex-col justify-center items-center flex">
        <Image
          src={productImage}
          className="w-[70%] rounded-md"
          alt="image"
          width={100}
          height={100}
        />
        <Image
          src={productImage}
          className="w-[70%] rounded-md"
          alt="image"
          width={100}
          height={100}
        />
        <Image
          src={productImage}
          className="w-[70%] rounded-md"
          alt="image"
          width={100}
          height={100}
        />
      </div>
      <div className="w-[600px] flex items-center justify-center p-4 bg-white rounded-lg">
        <Image
          src={productImage}
          alt="image"
          width={100}
          height={100}
          className="w-[80%] rounded-lg shadow-lg transition-transform duration-300 hover:scale-110"
        />
      </div>

      <div className="lg:w-[500px] space-y-2 p-3 sm:p-0 mt-3 sm:mt-0 order-3">
        <h1 className="text-xl font-bold lg:text-3xl">{items.title}</h1>
        <p className="flex justify-start items-center text-yellow-400">
          {stars}
        </p>
        <div className="flex space-x-3">
          <span className="font-bold">Price: {items.price}</span>
          {items.discount !== 0 && (
            <span className="font-bold line-through text-gray-500">
              {items.discount}
            </span>
          )}
        </div>
        <p>{items.description}</p>
        <p className="text-gray-400">Select Color</p>
        <div className="space-x-3">
          <button className="w-[37px] h-[37px] rounded-full bg-red-400"></button>
          <button className="w-[37px] h-[37px] rounded-full bg-blue-400"></button>
          <button className="w-[37px] h-[37px] rounded-full bg-yellow-400"></button>
        </div>
        <p className="text-gray-400">Select Size</p>
        <div className="space-x-3">
          {items.size.map((size) => (
            <button
              key={size}
              className="w-[70px] h-[37px] rounded-[16px] bg-gray-500"
            >
              {size}
            </button>
          ))}
        </div>
        {/* Quantity control */}
        <div className="flex justify-start items-center pt-10">
          <button className="w-10">
            <Minus />
          </button>
          <span className="w-4">{items.qty}</span>
          <button className="w-10">
            <Plus />
          </button>
          <Button>Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default SlugPage;
