export const getAllProducts = () =>
  fetch(`${import.meta.env.VITE_API_URL}/products`).then((res) => res.json());

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface ProductsData {
  products: Product[];
}
