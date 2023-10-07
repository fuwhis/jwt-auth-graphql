import api from "./axios";

const ENDPOINT = "/products";

export async function getAllProducts() {
  const { data } = await api.get(`${ENDPOINT}`);
  console.log("services", data?.data);
  return data;
}

export async function getSingleProduct(id: number) {
  const { data } = await api.get(`${ENDPOINT}/${id}`);
  return data;
}

export async function searchProducts(searchTxt: string) {
  const { data } = await api.get(`${ENDPOINT}/search?q=${searchTxt}`);
  console.log(data)
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
