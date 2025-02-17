"use client";

import { IProduct } from "@/app/interface";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";

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
  const [counter, setCounter] = useState(1);

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

  const item = products.find(
    (p: IProduct) => p.slug.toLowerCase() === params.slug.toLowerCase()
  );

  if (!item) {
    return <h1 className="text-red-500">Product not found</h1>;
  }

  const increment = () => setCounter(counter + 1);
  const decrement = () => {
    if (counter > 1) setCounter(counter - 1);
  };

  const handleTocart = (e: React.MouseEvent, product: IProduct) => {
    e.preventDefault();
    // Add product to cart logic here (Replace with your cart function)
    console.log("Added to cart:", product);

    if (typeof window !== "undefined") {
      Swal.fire({
        position: "top-right",
        icon: "success",
        title: `${product.title} added to cart`,
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  const stars = Array(5)
    .fill(0)
    .map((_, index) => <FaStar key={index} className="text-yellow-400" />);

  return (
    <div className="mt-40 mb-40 flex justify-center items-center space-x-10">
      {/* Image Gallery */}
      <div className="space-y-3 w-[120px] flex flex-col justify-center items-center">
        {[...Array(3)].map((_, index) => (
          <Image
            key={index}
            src={item.imageUrl}
            className="w-[80px] h-[80px] object-cover rounded-md"
            alt="Product Thumbnail"
            width={80}
            height={80}
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="w-[450px] p-4 bg-white rounded-lg">
        <Image
          src={item.imageUrl}
          alt="Product Image"
          width={350}
          height={350}
          className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="w-[400px] space-y-2 p-3">
        <h1 className="text-xl font-bold lg:text-3xl">{item.title}</h1>
        <p className="flex justify-start items-center">{stars}</p>

        {/* Price Section */}
        <div className="flex space-x-3">
          <span className="font-bold">Price: ${item.price}</span>
          {item.dicountPercentage !== 0 && (
            <span className="font-bold line-through text-gray-500">
              ${item.dicountPercentage}
            </span>
          )}
        </div>

        {/* Read More / Read Less for Description */}
        <Description description={item.description} />

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
          <button className="w-10" onClick={decrement}>
            <Minus />
          </button>
          <span className="w-4">{counter}</span>
          <button className="w-10" onClick={increment}>
            <Plus />
          </button>
          <Button onClick={(e) => handleTocart(e, item)}>Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default SlugPage;
