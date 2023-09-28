import api from "./axios";

const ENDPOINT = "/products";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string;
  images: string[];
};

type GetProductsApiResponse = {
  products: Product[];
  total: number;
  limit: number;
  skip: number;
};

export async function getAllProducts() {
  const { data } = await api.get(`${ENDPOINT}`);
  console.log("services", data?.data);
  return data;
}

export async function getSingleProduct(id: number) {
  const { data } = await api.get(`${ENDPOINT}/${id}`);
  return data;
}

export async function searchProducts(searchTxt: Product) {
  const { data } = await api.get(`${ENDPOINT}/search?q=${searchTxt}`);
  return data;
}

export async function getAllProductCategories() {
  const { data } = await api.get(`${ENDPOINT}/categories`);
  return data;
}

export async function getProductsOfCategory(categoryName: string) {
  const { data } = await api.get(`${ENDPOINT}/category/${categoryName}`);
  return data;
}
