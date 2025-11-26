import { IFood } from '@/types/restaurant';

export interface IRestaurant {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  deliveryFee: string;
  deliveryTime: string;
  categories: string[];
  foods: IFood[];
}

export const mockFoodItems: IFood[] = [
  {
    id: '1',
    name: 'Burger Ferguson',
    description: 'Delicious beef burger with fresh vegetables',
    price: 12.99,
    image: 'food-1.png',
    category: 'Burgers',
    rating: 4.5,
    isPopular: true,
    preparationTime: '15 min',
  },
  {
    id: '2',
    name: 'Chicken Deluxe',
    description: 'Grilled chicken with special sauce',
    price: 14.5,
    image: 'food-2.png',
    category: 'Chicken',
    rating: 4.3,
    preparationTime: '20 min',
  },
  {
    id: '3',
    name: 'Spicy Pizza',
    description: 'Hot pizza with pepperoni and jalapeños',
    price: 18.99,
    image: 'food-3.png',
    category: 'Pizza',
    rating: 4.7,
    isPopular: true,
    preparationTime: '25 min',
  },
  {
    id: '4',
    name: 'Caesar Salad',
    description: 'Fresh salad with caesar dressing',
    price: 9.99,
    image: 'food-4.png',
    category: 'Salads',
    rating: 4.2,
    preparationTime: '10 min',
  },
  {
    id: '5',
    name: 'Fish & Chips',
    description: 'Crispy fish with golden fries',
    price: 16.5,
    image: 'food-5.png',
    category: 'Seafood',
    rating: 4.4,
    preparationTime: '18 min',
  },
  {
    id: '6',
    name: 'Pasta Carbonara',
    description: 'Creamy pasta with bacon and parmesan',
    price: 15.99,
    image: 'food-6.png',
    category: 'Pasta',
    rating: 4.6,
    isPopular: true,
    preparationTime: '22 min',
  },
];

export const mockRestaurant: IRestaurant = {
  id: 'rest-1',
  name: 'Spicy Restaurant',
  description:
    'Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
  image: 'restaurant-1.jpg',
  rating: 4.5,
  deliveryFee: 'Free',
  deliveryTime: '20 min',
  categories: [
    'All',
    'Burgers',
    'Pizza',
    'Chicken',
    'Salads',
    'Seafood',
    'Pasta',
  ],
  foods: mockFoodItems,
};
