export interface Product {
    _id: string;
    description: string;
    imageUrl: string;
    price: number;
    slug: string;
    dicountPercentage?: number;
    isNew?: boolean; 
    title:string
  }
  
export type IProduct = {
  _id: string;
  title: string;
  slug: string;
  price: number;
  description: string;
  category?: string;
  isNew?: boolean;
  size?: string[];
  color?: string[];
  qty?: number;
  dicountPercentage?: number;
  imageUrl: string;
};