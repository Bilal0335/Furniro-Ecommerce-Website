// "use client";
// import { IProduct } from "@/app/utils/Types";
// import { Button } from "@/components/ui/button";
// import { Minus, Plus } from "lucide-react";
// import Image from "next/image";
// import { useState } from "react";
// import { FaStar } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { addtocart } from "../../Redux/features/cartSlice";

import Image, { StaticImageData } from "next/image";

// const star = [
//   <FaStar key={1} />,
//   <FaStar key={2} />,
//   <FaStar key={3} />,
//   <FaStar key={4} />,
//   <FaStar key={5} />
// ];

// const SLugProduct = ({ params }: { params: { slug: string } }) => {
//   const dispatch = useDispatch();
//   const product: IProduct[] = useSelector((state: any) => state.product);
//   // Find the product based on slug
//   const item: any = product.find((item) => item.slug === params.slug);

//   // usestate
//   const [cartItem, setcartItem] = useState({
//     id: item.id,
//     title: item.title,
//     image: item.image,
//     slug: item.slug,
//     price: item.price,
//     size: item.size,
//     color: item.color[0],
//     qty: item.qty,
//     discount: item.discount,
//     description: item.description
//   });

//   // If no product is found, display a "Product not found" message
//   if (!item) {
//     return <h1 className="mt-36 text-red-500">Product not found</h1>;
//   }

//   return (
//     <div className="mt-28 flex justify-around">
//       {/* <h1>{item.title}</h1> */}
//       <div className="space-y-3  w-[200px] flex flex-col items-center justify-center">
//         {/* Render the product images if they exist */}
//         {Array.isArray(item.image) &&
//           item.image.map((img: any, index: any) => (
//             <Image
//               key={index}
//               src={img}
//               alt={item.title}
//               width={100}
//               height={100}
//               className="rounded-md "
//             />
//           ))}
//       </div>

//       <div className="relative w-[500px] rounded-md flex justify-center">
//         <Image
//           src={item.image[0]}
//           alt={cartItem.title}
//           fill
//           className="object-contain"
//         />
//       </div>

//       <div className=" w-[500px] space-y-2">
//         <h1 className="text-xl font-bold lg:text-3xl">{cartItem.title}</h1>
//         <div className="flex text-yellow-400">
//           {/* Render stars for product rating */}
//           {star.map((icon, index) => (
//             <span key={index}>{icon}</span>
//           ))}
//         </div>
//         <p className="font-bold  ">{cartItem.price * cartItem.qty} </p>
//         <span className="text-gray-400 line-through">
//           {cartItem.discount > 0 &&
//             (cartItem.price - (cartItem.price * cartItem.discount) / 100) *
//               cartItem.qty}{" "}
//         </span>
//         <span className="bg-red-400 rounded-[10px]">
//           {cartItem.discount > 0 && <div>{`-${cartItem.discount}%`}</div>}
//         </span>

//         <p>{cartItem.description}</p>
//         {/* color */}
//         <p>SELECT COLOR</p>
//         <div className="space-x-3">
//           {item.color.map((item: any, i: any) => (
//             <button
//               key={i}
//               className="rounded-full active:outline w-[37px] h-[37px]"
//               style={{ backgroundColor: item }}
//               onClick={() => setcartItem({ ...cartItem, color: item })}
//             ></button>
//           ))}
//         </div>
//         {/* size */}
//         {/* size */}
//         <p>SELECT SIZE</p>
//         <div className="space-x-3">
//           {item.size.map((items: any, i: any) => {
//             return (
//               <button
//                 key={i}
//                 className="rounded-[16px] w-[70px] h-[37px] bg-gray-500 active:outline"
//                 onClick={() => setcartItem({ ...cartItem, size: items })}
//               >
//                 {items}
//               </button>
//             );
//           })}
//         </div>

//         {/* INC AND DEC */}
//         <div className="flex justify-start items-center pt-10">
//           <button
//             onClick={() =>
//               setcartItem({
//                 ...cartItem,
//                 qty: cartItem.qty <= 1 ? 1 : --cartItem.qty
//               })
//             }
//           >
//             {" "}
//             <Minus />
//           </button>
//           <span> {cartItem.qty}</span>
//           <button
//             onClick={() => setcartItem({ ...cartItem, qty: ++cartItem.qty })}
//           >
//             {" "}
//             <Plus />
//           </button>
//           {/* add to cart */}
//           <Button
//             onClick={() => dispatch(addtocart(cartItem))}
//             className="lg:w-[300px]"
//           >
//             Add to cart
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SLugProduct;
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

const SlugPage = ({ params }: { params: { slug: string } }) => {
  const items = products.find(
    (p) => p.slug.toLowerCase() === params.slug.toLowerCase()
  );
  console.log(items);
  if (!items) {
    return <h1 className="text-red-500">Product not found</h1>;
  }

  return (
    <div className="mt-52 mb-40">
      <div>
        <div>
          <Image src={items.image[0]} alt="image" width={100} height={100} />
          <Image src={items.image[0]} alt="image" width={100} height={100} />
          <Image src={items.image[0]} alt="image" width={100} height={100} />
        </div>
        <div>
          <Image src={items.image[0]} alt="image" width={100} height={100} />
        </div>
        <div>
          <h1>{items.title}</h1>
          <p>{stars}</p>
          <div>
            <span className="font-bold">Price: {items.price}</span>
            <span className="font-bold line-through text-gray-500">
              {items.discount}
            </span>
          </div>
          <p>{items.description}</p>
          <p className="text-gray-400">Selct Color</p>
          <div className="space-x-3">
            <button className="w-[37px] h-[37px] rounded-full bg-red-400"></button>
            <button className="w-[37px] h-[37px] rounded-full bg-blue-400"></button>
            <button className="w-[37px] h-[37px] rounded-full bg-yellow-400"></button>
          </div>
          <p className="text-gray-400">Selct Size</p>
          <div className="space-x-3">
            <button className="w-[70px] h-[37px] rounded-[16px] bg-gray-500">XL</button>
            <button className="w-[70px] h-[37px] rounded-[16px] bg-gray-500">L</button>
            <button className="w-[70px] h-[37px] rounded-[16px] bg-gray-500">XS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlugPage;
