"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { CiHeart, CiShare2, CiSliderHorizontal } from "react-icons/ci";
import Link from "next/link";
import Swal from "sweetalert2";
import { addTocart } from "@/app/actions/actions";
import { IProduct } from "@/app/interface";

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

function ProductSection() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [noOfElements, setNoOfElements] = useState(4);
  const [isComplete, setIsComplete] = useState(false);

  const slice = products.slice(0, noOfElements);

  // Load More function
  const loadMore = () => {
    if (noOfElements + 4 >= products.length) {
      setNoOfElements(products.length);
      setIsComplete(true);
    } else {
      setNoOfElements((prev) => prev + 4);
    }
  };

  // Show Less function
  const showLess = () => {
    setNoOfElements(4);
    setIsComplete(false);
  };

  useEffect(() => {
    getData().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  // Handle Add to Cart
  const handleTocart = (e: React.MouseEvent, product: IProduct) => {
    e.preventDefault();
    addTocart(product); // Ensure this function is defined elsewhere

    if (typeof window !== "undefined") {
      Swal.fire({
        position: "top-right",
        icon: "success",
        title: `${product.title} added to cart`,
        showConfirmButton: false,
        timer: 1000
      });
    }
  };

  return (
    <div className="p-2 px-10 rounded-lg">
      <h2 className="mx-auto py-1 text-3xl font-bold text-center mb-8">
        Our Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
        {slice.map((product, index) => (
          <div
            key={index}
            className="relative bg-gray-50 p-3 rounded-lg hover:shadow-xl"
          >
            <div
              className="relative w-full h-60"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {loading ? (
                <div className="w-full h-60 bg-gray-200 animate-pulse rounded-lg"></div>
              ) : (
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  className="object-cover rounded-lg"
                  priority={index === 0}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KG..."
                />
              )}

              {hoveredIndex === index && (
                <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 bg-gray-900 bg-opacity-40 rounded-lg">
                  <button
                    className="bg-white text-yellow-500 font-bold py-2 px-4 mx-auto"
                    onClick={(e) => handleTocart(e, product)}
                  >
                    Add to Cart
                  </button>
                  <div className="flex justify-around items-center mx-auto">
                    <button className="text-white flex items-center gap-2">
                      <CiShare2 className="w-6 h-6" />
                      Share
                    </button>
                    <button className="text-white flex items-center gap-2">
                      <CiSliderHorizontal className="w-6 h-6" />
                      Compare
                    </button>
                    <button className="text-white flex items-center gap-2">
                      <CiHeart className="w-6 h-6" />
                      Like
                    </button>
                  </div>
                </div>
              )}
            </div>

            <Link href={`/shop/${product.slug}`}>
              <h3 className="text-xl font-bold mt-4">{product.title}</h3>
              <p
                className="text-gray-600 line-clamp-3 overflow-hidden"
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2
                }}
              >
                {product.description}
              </p>

              <p className="text-lg font-bold mb-4">Rp {product.price}</p>
            </Link>
          </div>
        ))}
      </div>

      {/* Show More & Show Less Buttons */}
      <div className="flex justify-center items-center mt-10 mx-auto gap-4">
        {!isComplete && noOfElements < products.length && (
          <button
            className="text-white px-4 py-2 rounded-md text-lg font-bold bg-yellow-600 hover:bg-yellow-800"
            onClick={loadMore}
          >
            Show More
          </button>
        )}

        {isComplete && (
          <button
            className="text-white px-4 py-2 rounded-md text-lg font-bold bg-yellow-600 hover:bg-yellow-800"
            onClick={showLess}
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductSection;
