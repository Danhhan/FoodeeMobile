import { IBanner, ICategory, IRestaurant } from '@/types/store';

export const restaurants: IRestaurant[] = [
  {
    id: '1',
    name: 'Rose Garden Restaurant',
    image: require('@/assets/images/restaurant-1.jpg'),
    categories: 'Burger - Chicken - Rice - Wings',
    rating: 4.8,
    deliveryFee: 'free',
    deliveryTime: '20 min',
  },
  {
    id: '2',
    name: 'Golden Spoon Bistro',
    image: require('@/assets/images/restaurant-1.jpg'),
    categories: 'Pizza - Pasta - Salad',
    rating: 4.5,
    deliveryFee: '$2.99',
    deliveryTime: '25 min',
  },
  {
    id: '3',
    name: 'Ocean Breeze Seafood',
    image: require('@/assets/images/restaurant-1.jpg'),
    categories: 'Seafood - Sushi - Asian',
    rating: 4.9,
    deliveryFee: 'free',
    deliveryTime: '30 min',
  },
  {
    id: '4',
    name: 'Taco Fiesta',
    image: require('@/assets/images/restaurant-1.jpg'),
    categories: 'Mexican - Tacos - Burritos',
    rating: 4.6,
    deliveryFee: '$1.99',
    deliveryTime: '15 min',
  },
  {
    id: '5',
    name: 'The Burger House',
    image: require('@/assets/images/restaurant-1.jpg'),
    categories: 'Burger - Fries - Shakes',
    rating: 4.7,
    deliveryFee: 'free',
    deliveryTime: '18 min',
  },
  {
    id: '6',
    name: 'Pasta Paradise',
    image: require('@/assets/images/restaurant-1.jpg'),
    categories: 'Italian - Pasta - Pizza',
    rating: 4.4,
    deliveryFee: '$3.50',
    deliveryTime: '28 min',
  },
];

export const categories: ICategory[] = [
  { id: 'all', name: 'All', image: require('@/assets/images/fire.png') },
  {
    id: 'hotdog',
    name: 'Hot Dog',
    image: require('@/assets/images/hot-dog.png'),
  },
  {
    id: 'burger',
    name: 'Burger',
    image: require('@/assets/images/burger.png'),
  },

  {
    id: 'pizza',
    name: 'Pizza',
    image: require('@/assets/images/burger.png'),
  },
  {
    id: 'sushi',
    name: 'Sushi',
    image: require('@/assets/images/burger.png'),
  },
  {
    id: 'pasta',
    name: 'Pasta',
    image: require('@/assets/images/burger.png'),
  },
];

export const mockBanners: IBanner[] = [
  {
    id: 'restaurant_offer',
    title: 'Order from these restaurants and save',
    buttonText: 'Browse offer',
    backgroundColor: '#C8C4E8',
    imageUrl: require('@/assets/images/banner-1.png'),
    action: {
      type: 'navigate',
      route: '/restaurants/offers',
    },
    priority: 1,
  },
  {
    id: 'convenience_items',
    title: 'Have cleaning supplies and\nother convinence items\ndelivered',
    buttonText: 'Shop convenience',
    backgroundColor: '#A8E6CF',
    imageUrl: require('@/assets/images/banner-1.png'),
    action: {
      type: 'navigate',
      route: '/convenience',
    },
    priority: 2,
  },
];
