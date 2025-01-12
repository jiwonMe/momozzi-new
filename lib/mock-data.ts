import { Restaurant } from '@/app/types/restaurant';

export const mockRestaurants: Restaurant[] = [
  {
    id: '1',
    name: '맛있는 김치찌개',
    category: '한식',
    location: '강남구 역삼동',
    rating: 4.5,
    priceRange: '₩₩'
  },
  {
    id: '2',
    name: '정통 스시',
    category: '일식',
    location: '서초구 서초동',
    rating: 4.8,
    priceRange: '₩₩₩'
  },
  {
    id: '3',
    name: '양념치킨',
    category: '치킨',
    location: '강남구 삼성동',
    rating: 4.3,
    priceRange: '₩'
  },
  {
    id: '4',
    name: '파스타 하우스',
    category: '양식',
    location: '강남구 청담동',
    rating: 4.6,
    priceRange: '₩₩'
  },
  {
    id: '5',
    name: '마라탕',
    category: '중식',
    location: '강남구 역삼동',
    rating: 4.2,
    priceRange: '₩'
  }
];