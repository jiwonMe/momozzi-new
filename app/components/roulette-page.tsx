"use client";

import { useState } from 'react';
import { Restaurant } from "../types/restaurant";
import RouletteWheel from './roulette-wheel';
import RestaurantList from './restaurant-list';

interface RoulettePageProps {
  initialRestaurants: Restaurant[];
}

export default function RoulettePage({ initialRestaurants }: RoulettePageProps) {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  const handleSpin = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    console.log('Selected restaurant:', restaurant);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="flex justify-center items-center">
        <RouletteWheel
          restaurants={initialRestaurants}
          onSpin={handleSpin}
        />
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          등록된 맛집 목록
        </h2>
        <RestaurantList 
          restaurants={initialRestaurants} 
          selectedId={selectedRestaurant?.id}
        />
      </div>
    </div>
  );
}