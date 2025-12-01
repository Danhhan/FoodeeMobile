import { IFoodSize, IFoodIngredient } from '@/types/food';

// Mock sizes
export const FOOD_SIZES: IFoodSize[] = [
  { id: 'small', name: '10"', price: 12.99, isAvailable: true },
  { id: 'medium', name: '14"', price: 16.99, isAvailable: true },
  { id: 'large', name: '16"', price: 19.99, isAvailable: true },
];

// Mock ingredients
export const FOOD_INGREDIENTS: IFoodIngredient[] = [
  { id: 'salt', name: 'Salt', icon: 'salt' },
  { id: 'chicken', name: 'Chicken', icon: 'chicken' },
  { id: 'onion', name: 'Onion', icon: 'onion' },
  { id: 'garlic', name: 'Garlic', icon: 'garlic' },
  { id: 'peppers', name: 'Peppers', icon: 'peppers' },
  { id: 'ginger', name: 'Ginger', icon: 'ginger' },
  { id: 'broccoli', name: 'Broccoli', icon: 'broccoli' },
  { id: 'orange', name: 'Orange', icon: 'orange' },
  { id: 'walnut', name: 'Walnut', icon: 'walnut' },
];
