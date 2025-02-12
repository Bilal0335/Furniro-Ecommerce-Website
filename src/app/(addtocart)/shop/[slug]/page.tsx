"use client";

import { IProduct } from "@/app/interface";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

async function getData() {
  const query = `  
  *[_type=="product"]{  
    description,  
    "imageUrl":productImage.asset->url,  
    price,  
    _id,  
    'slug':slug.current,  
    dicountPercentage,  
    isNew,  
    title  
  }  
  `;
  return await client.fetch(query);
}

const Description = ({ description }: { description: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded(!isExpanded);

  return (
    <div>
      <p>{isExpanded ? description : `${description.substring(0, 200)}...`}</p>
      <button onClick={toggleReadMore} className="text-blue-500">
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

const SlugPage = ({ params }: { params: { slug: string } }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setProducts(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <h1 className="text-gray-500">Loading...</h1>;
  }

  const items = products.find(
    (p: IProduct) => p.slug.toLowerCase() === params.slug.toLowerCase()
  );

  if (!items) {
    return <h1 className="text-red-500">Product not found</h1>;
  }

  const stars = Array(5)
    .fill(0)
    .map((_, index) => <FaStar key={index} />);

  return (
    <div className="mt-40 mb-40 flex justify-center items-center space-x-10">
      {/* Image Gallery */}
      <div className="space-y-3 w-[120px] flex flex-col justify-center items-center">
        {[...Array(3)].map((_, index) => (
          <Image
            key={index}
            src={items.imageUrl}
            className="w-[80px] h-[80px] object-cover rounded-md"
            alt="image"
            width={60}
            height={60}
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="w-[450px] p-4 bg-white rounded-lg">
        <Image
          src={items.imageUrl}
          alt="image"
          width={350}
          height={350}
          className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="w-[400px] space-y-2 p-3">
        <h1 className="text-xl font-bold lg:text-3xl">{items.title}</h1>
        <p className="flex justify-start items-center text-yellow-400">
          {stars}
        </p>

        {/* Price Section */}
        <div className="flex space-x-3">
          <span className="font-bold">Price: {items.price}</span>
          {items.dicountPercentage !== 0 && (
            <span className="font-bold line-through text-gray-500">
              {items.dicountPercentage}
            </span>
          )}
        </div>

        {/* Read More / Read Less for Description */}
        <Description description={items.description} />

        {/* Size Selection */}
        <p className="text-gray-400">Size</p>
        <div className="space-x-3">
          {["L", "XL", "XS"].map((size, index) => (
            <button
              key={index}
              className="w-[50px] h-[45px] rounded-[6px] bg-[#F9F1E7] hover:bg-[#B88E2F] transition duration-300 hover:text-white hover:font-semibold"
            >
              {size}
            </button>
          ))}
        </div>

        {/* Color Selection */}
        <p className="text-gray-400">Color</p>
        <div className="space-x-3">
          {["bg-blue-400", "bg-black", "bg-yellow-700"].map((color, index) => (
            <button
              key={index}
              className={`w-[37px] h-[37px] rounded-full ${color} 
                hover:ring-2 hover:ring-gray-500 
                active:scale-90 transition-all duration-200`}
            ></button>
          ))}
        </div>

        {/* Quantity Control */}
        <div className="flex justify-start items-center pt-3">
          <button className="w-10">
            <Minus />
          </button>
          <span className="w-4">1</span>
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
