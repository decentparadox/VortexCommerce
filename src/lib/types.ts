export type Image = {
    url: string;
    alt: string;
  };

  
  export type ProductOption = {
    id: string;
    name: string;
    values: string[];
  };
  
  export type Product = {
    handle: string;
    id: string;
    title: string;
    availableForSale: boolean;
    selectedOptions: {
      name: string;
      value: string;
    }[];
    featuredImage: Image;
    priceRange: Money;
    quantity: number;
  };
  
  export type Money = {
    amount: number;
    currencyCode: string;
  };