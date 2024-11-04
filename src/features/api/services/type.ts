export interface GetProducts {
  title: string;
  message: string;
  data: Data;
}

export interface Data {
  pagination: Pagination;
  docs: Product[];
}

export interface Pagination {
  total: number;
  page: number;
  limit: number;
  perviousPage: boolean;
  nextPage: boolean;
}

export interface Product {
  _id: string;
  slug: string;
  brand: Brand;
  title: string;
  price: number;
  strikePrice: number;
  offPercent: number;
  images: string[];
  variantType: string;
  ratings: number;
  totalRatings: number;
  ratedBy: number;
}

export interface Brand {
  _id: string;
  slug: string;
  name: string;
}
