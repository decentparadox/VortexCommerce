export type Image = {
    url: string;
    altText: string;
    width: number;
    height: number;
  };
export type Product = {
    variants: ProductVariant[];
    images: Image[];
  };
  
  export type ProductOption = {
    id: string;
    name: string;
    values: string[];
  };
  
  export type ProductVariant = {
    id: string;
    title: string;
    availableForSale: boolean;
    selectedOptions: {
      name: string;
      value: string;
    }[];
    price: Money;
  };
  
  export type Money = {
    amount: string;
    currencyCode: string;
  };