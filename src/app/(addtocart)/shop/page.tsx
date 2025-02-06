import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import Link from "next/link";

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
    discount: 0
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
    discount: 0
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
    discount: 0
  }
];

const stars = "⭐⭐⭐⭐⭐"; // Define the stars variable

const ProductPage = () => {
  return (
    <div className="mt-28 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 mb-7">
        {products.map((item) => {
          return (
            <div key={item.id} className="bg-white p-4 shadow-lg rounded-lg ">
              <Link href={`/shop/${item.slug}`}>
                {item.image && Array.isArray(item.image) && (
                  <Image
                    src={item.image[0]}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="w-full h-auto rounded-lg"
                  />
                )}
              </Link>
              <h2 className="font-bold text-lg mt-2">{item.title}</h2>
              {/* Stars */}
              <p className="flex text-yellow-400">{stars}</p>
              <div className="flex space-x-3 mt-2">
                <p className="font-bold text-lg">{item.price}</p>
                {item.discount !== 0 && (
                  <p className="font-bold text-gray-400 line-through">
                    {item.discount}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductPage;
