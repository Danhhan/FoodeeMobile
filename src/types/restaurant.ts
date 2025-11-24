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
