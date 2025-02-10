export interface Product {
    _id: string;
    description: string;
    imageUrl: string;
    price: number;
    slug: string;
    dicountPercentage?: number; // Optional (if some products don't have a discount)
    isNew?: boolean; // Optional (if some products don't have this field)
    title:string
  }
  