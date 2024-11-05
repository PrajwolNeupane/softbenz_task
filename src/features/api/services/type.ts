export interface GetProducts {
  title: string;
  message: string;
  data: Data;
}

export interface GetProduct {
  title: string;
  message: string;
  data: SingleProduct;
}

export interface NewCartResponse {
  title: string;
  message: string;
  data: NewCart;
}

export interface CartProduct {
  product: string;
  quantity: number;
  variantType: string;
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

export interface SingleProduct {
  _id: string;
  slug: string;
  category: Category;
  brand: Brand;
  title: string;
  ingredient: string;
  howToUse: string;
  description: string;
  price: number;
  strikePrice: number;
  offPercent: number;
  minOrder: number;
  maxOrder: number;
  status: boolean;
  images: string[];
  colorAttributes: any[];
  sizeAttributes: string[];
  variantType: string;
  sizeVariants: SizeVariant[];
  ratings: number;
  totalRatings: number;
  ratedBy: number;
  metaRobots: string;
  isBestSeller: boolean;
  isFeatured: boolean;
  isNonBeauty: boolean;
  isPublished: boolean;
  searchWords: string;
  isDeleted: boolean;
  colorVariants: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  noneText: string;
  breadCrums: BreadCrum[];
  wished: boolean;
}

export interface Category {
  _id: string;
  slug: string;
  title: string;
  level: number;
  parentId: string;
}

export interface SizeVariant {
  variantName: string;
  price: number;
  strikePrice: number;
  offPercent: number;
  minOrder: number;
  maxOrder: number;
  status: boolean;
  images: string[];
  productCode: string;
  _id: string;
}

export interface BreadCrum {
  title: string;
  slug: string;
}

export interface NewCart {
  orderId: string;
  orderStatus: string;
  paymentMethod: string;
  paymentStatus: string;
  subTotal: number;
  totalAmount: number;
  voucherCode: string;
  voucherAmount: number;
  deliveryAddress: string;
  deliveryCharge: number;
  isDeleted: boolean;
  _id: string;
  items: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface CartItem {
  product: { _id: string; slug: string; title: string; images: string[] };
  variantType: string;
  noneText: string;
  selectedVariantName: string;
  quantity: number;
  price: number;
  strikePrice: number;
  offPercent: number;
  minOrder: number;
  maxOrder: number;
  subTotal: number;
  reviewGiven: boolean;
  _id: string;
}
