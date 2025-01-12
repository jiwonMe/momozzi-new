"use client";

import { Restaurant } from "../types/restaurant";
import RestaurantCard from "./restaurant-card";

interface RestaurantListProps {
  restaurants: Restaurant[];
  selectedId?: string;
}

export default function RestaurantList({ restaurants, selectedId }: RestaurantListProps) {
  return (
    <div className="grid gap-4">
      {restaurants.map((restaurant) => (
        <RestaurantCard 
          key={restaurant.id} 
          restaurant={restaurant}
          isSelected={restaurant.id === selectedId}
        />
      ))}
    </div>
  );
}