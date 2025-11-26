export interface IRestaurant {
  id: string;
  name: string;
  image: any;
  categories: string;
  rating: number;
  deliveryFee: string;
  deliveryTime: string;
}

export interface ICategory {
  id: string;
  name: string;
  image: any;
}

export interface IFood {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating?: number;
  isPopular?: boolean;
  preparationTime?: string;
}
