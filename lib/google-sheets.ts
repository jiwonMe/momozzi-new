import { Restaurant } from '@/app/types/restaurant';
import { mockRestaurants } from './mock-data';

export async function getRestaurants(): Promise<Restaurant[]> {
  // Return mock data instead of fetching from Google Sheets
  return mockRestaurants;
}