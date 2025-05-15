
// Types for our Supabase database tables
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string | null;
  category_id: string | null;
  featured: boolean;
  bestseller: boolean;
  new_arrival: boolean;
  created_at: string;
  updated_at: string;
  // Relations
  images?: ProductImage[];
  attributes?: ProductAttribute[];
  category?: Category;
}

export interface ProductImage {
  id: string;
  product_id: string;
  image_url: string;
  display_order: number;
  created_at: string;
}

export interface ProductAttribute {
  id: string;
  product_id: string;
  name: string;
  value: string;
  created_at: string;
}
