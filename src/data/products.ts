
export interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
  description: string;
  category: string;
  featured?: boolean;
  bestseller?: boolean;
  newArrival?: boolean;
  attributes: {
    length?: string;
    texture?: string;
    weight?: string;
    color?: string;
    material?: string;
  };
}

export const products: Product[] = [
  {
    id: 1,
    name: "Brazilian Straight Bundle",
    price: 149.99,
    images: [
      "https://images.unsplash.com/photo-1580253852046-84c260fa9880?q=80&w=1160&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583518589806-8e0e10f9b0f0?q=80&w=1164&auto=format&fit=crop"
    ],
    description: "Our premium Brazilian straight bundles are 100% human hair that's soft, silky, and tangle-free. These bundles have been carefully sourced and crafted to ensure maximum quality and durability. Perfect for achieving that sleek, polished look that turns heads.",
    category: "straight",
    featured: true,
    bestseller: true,
    attributes: {
      length: "18 inches",
      texture: "Straight",
      weight: "100g",
      color: "Natural Black",
      material: "100% Human Hair"
    }
  },
  {
    id: 2,
    name: "Indian Body Wave Bundle",
    price: 159.99,
    images: [
      "https://images.unsplash.com/photo-1576278089809-47159a55756e?q=80&w=1171&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564432587396-7b8750a5dd0d?q=80&w=1074&auto=format&fit=crop"
    ],
    description: "Experience the versatility of our Indian Body Wave bundles. This hair maintains its pattern even after washing and can be styled straight or curly. Each bundle is carefully selected to ensure premium quality and natural movement.",
    category: "wavy",
    featured: true,
    attributes: {
      length: "20 inches",
      texture: "Body Wave",
      weight: "100g",
      color: "Natural Black",
      material: "100% Human Hair"
    }
  },
  {
    id: 3,
    name: "Peruvian Deep Wave Bundle",
    price: 179.99,
    images: [
      "https://images.unsplash.com/photo-1563406151259-48b7f12e31c8?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513171920216-2640edb5c0cd?q=80&w=1287&auto=format&fit=crop"
    ],
    description: "Our Peruvian Deep Wave bundles offer luxurious, bouncy curls that add volume and dimension to any style. The hair is soft, manageable and holds curls exceptionally well even after washing. Perfect for creating dramatic, head-turning looks.",
    category: "curly",
    bestseller: true,
    attributes: {
      length: "22 inches",
      texture: "Deep Wave",
      weight: "100g",
      color: "Natural Black",
      material: "100% Human Hair"
    }
  },
  {
    id: 4,
    name: "Malaysian Kinky Curly Bundle",
    price: 189.99,
    images: [
      "https://images.unsplash.com/photo-1626374090269-25ca583f8779?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1624553685592-decef564f2c1?q=80&w=1471&auto=format&fit=crop"
    ],
    description: "Get that natural, textured look with our Malaysian Kinky Curly bundles. These bundles mimic natural African American hair texture and blend seamlessly for a natural-looking result. The hair is soft, bouncy and holds its pattern well after washing.",
    category: "curly",
    newArrival: true,
    attributes: {
      length: "16 inches",
      texture: "Kinky Curly",
      weight: "100g",
      color: "Natural Black",
      material: "100% Human Hair"
    }
  },
  {
    id: 5,
    name: "Brazilian Loose Wave Bundle",
    price: 169.99,
    images: [
      "https://images.unsplash.com/photo-1562770781-458d73e50044?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591884445259-4b897276a4c5?q=80&w=1287&auto=format&fit=crop"
    ],
    description: "Our Brazilian Loose Wave bundles provide an elegant, relaxed wave pattern that offers both volume and movement. This versatile texture can be worn as is or styled differently for a variety of looks. Each bundle is carefully inspected to ensure premium quality.",
    category: "wavy",
    featured: true,
    attributes: {
      length: "24 inches",
      texture: "Loose Wave",
      weight: "100g",
      color: "Natural Black",
      material: "100% Human Hair"
    }
  },
  {
    id: 6,
    name: "Cambodian Straight Bundle",
    price: 199.99,
    images: [
      "https://images.unsplash.com/photo-1630271902818-cb5f65e6a3bd?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622574657146-a9640df4753e?q=80&w=1287&auto=format&fit=crop"
    ],
    description: "Cambodian hair is known for its luxurious quality and these straight bundles are no exception. Extra silky and ultra-smooth, these bundles offer a natural sheen and exceptional manageability. Perfect for creating sleek, glamorous styles.",
    category: "straight",
    newArrival: true,
    attributes: {
      length: "20 inches",
      texture: "Straight",
      weight: "100g",
      color: "Natural Black",
      material: "100% Human Hair"
    }
  },
  {
    id: 7,
    name: "Frontals & Closures Bundle",
    price: 249.99,
    images: [
      "https://images.unsplash.com/photo-1560250979-37ecf092f355?q=80&w=1135&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515473588193-e3ba2755af0a?q=80&w=1365&auto=format&fit=crop"
    ],
    description: "Complete your look with our premium frontals and closures. Hand-tied and carefully constructed to create a natural hairline and seamless blend. Our frontals and closures are made with the same high-quality hair as our bundles for a perfect match.",
    category: "accessories",
    bestseller: true,
    attributes: {
      length: "18 inches",
      texture: "Various",
      weight: "50g",
      color: "Natural Black",
      material: "100% Human Hair"
    }
  },
  {
    id: 8,
    name: "Premium Wig Cap",
    price: 12.99,
    images: [
      "https://images.unsplash.com/photo-1595624871930-6e8537998592?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613316114835-87f8e998950e?q=80&w=1287&auto=format&fit=crop"
    ],
    description: "Our premium wig caps provide the perfect foundation for your custom wigs or installations. Made with breathable, stretchable material for all-day comfort and a secure fit.",
    category: "accessories",
    attributes: {
      color: "Beige",
      material: "Nylon Mesh"
    }
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getBestsellerProducts = (): Product[] => {
  return products.filter(product => product.bestseller);
};

export const getNewArrivalProducts = (): Product[] => {
  return products.filter(product => product.newArrival);
};

export const getFilteredProducts = (category?: string): Product[] => {
  if (!category || category === 'all') return products;
  return products.filter(product => product.category === category);
};
