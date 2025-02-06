import { StaticImageData } from "next/image";
//   Product data types
export type IProduct = {
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

//   cart data types
export type Cart = {
  id: number;
  title: string;
  image?: string[] | StaticImageData | string;
  slug: string;
  price: number;
  size: string[];
  color: string[];
  qty: number;
  discount?: number;
  uuid: string | number | undefined;
};
