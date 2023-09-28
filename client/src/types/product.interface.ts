export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface IGetProductsApiResponse {
  products: IProduct[];
  total: number;
  limit: number;
  skip: number;
}
