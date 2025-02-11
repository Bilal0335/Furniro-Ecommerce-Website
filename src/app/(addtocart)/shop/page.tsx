"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Product } from "@/app/interface";
import Link from "next/link";

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

function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    getData().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="p-2 px-10 rounded-lg mt-28 mb-10">
      <h2 className="mx-auto py-1 text-3xl font-bold text-center mb-8">
        Our Shops
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative bg-gray-50 p-3 rounded-lg hover:shadow-xl"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative w-full h-60">
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
                  <button className="bg-white text-yellow-500 font-bold py-2 px-4 mx-auto">
                    Add to Cart
                  </button>
                </div>
              )}
            </div>
            <Link href={`/shop/${product.slug}`} className="cursor-pointer">
            <h3 className="text-xl font-bold mt-4">{product.title}</h3>
            </Link>
            <p className="text-gray-600 line-clamp-2 overflow-hidden">
              {product.description}
            </p>
            <p className="text-lg font-bold mb-4">Rp {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
