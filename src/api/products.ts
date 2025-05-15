
import { supabase } from "@/integrations/supabase/client";
import type { Product, Category } from "@/types/supabase";

export async function getCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("name");
  
  if (error) {
    console.error("Error fetching categories:", error);
    throw new Error("Failed to fetch categories");
  }
  
  return data || [];
}

export async function getProducts(categorySlug?: string): Promise<Product[]> {
  let query = supabase
    .from("products")
    .select(`
      *,
      category:categories(*),
      images:product_images(*),
      attributes:product_attributes(*)
    `);
    
  if (categorySlug) {
    // First, get the category ID from the slug
    const { data: categoryData } = await supabase
      .from("categories")
      .select("id")
      .eq("slug", categorySlug)
      .single();
      
    if (categoryData) {
      query = query.eq("category_id", categoryData.id);
    }
  }
  
  const { data, error } = await query.order("created_at", { ascending: false });
  
  if (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
  
  return data || [];
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      images:product_images(*),
      attributes:product_attributes(*)
    `)
    .eq("featured", true)
    .limit(3);
  
  if (error) {
    console.error("Error fetching featured products:", error);
    throw new Error("Failed to fetch featured products");
  }
  
  return data || [];
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      category:categories(*),
      images:product_images(*),
      attributes:product_attributes(*)
    `)
    .eq("slug", slug)
    .maybeSingle();
  
  if (error) {
    console.error("Error fetching product:", error);
    throw new Error("Failed to fetch product");
  }
  
  return data;
}

export async function getProductById(id: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      category:categories(*),
      images:product_images(*),
      attributes:product_attributes(*)
    `)
    .eq("id", id)
    .maybeSingle();
  
  if (error) {
    console.error("Error fetching product:", error);
    throw new Error("Failed to fetch product");
  }
  
  return data;
}
