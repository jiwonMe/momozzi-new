"use client";

import { motion } from "framer-motion";
import { Restaurant } from "../types/restaurant";
import { MapPin, Star, DollarSign } from "lucide-react";

interface RestaurantCardProps {
  restaurant: Restaurant;
  isSelected?: boolean;
}

export default function RestaurantCard({ restaurant, isSelected }: RestaurantCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        scale: isSelected ? 1.02 : 1,
        borderColor: isSelected ? 'hsl(var(--primary))' : 'transparent'
      }}
      className={`bg-card p-6 rounded-lg shadow-lg border-2 transition-colors
        ${isSelected ? 'border-primary' : 'border-transparent'}`}
    >
      <h3 className="text-2xl font-bold text-card-foreground mb-2">
        {restaurant.name}
      </h3>
      <div className="flex flex-col gap-2 text-muted-foreground">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>{restaurant.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-yellow-500" />
          <span>{restaurant.rating.toFixed(1)}</span>
        </div>
        <div className="flex items-center gap-2">
          <DollarSign className="w-4 h-4" />
          <span>{restaurant.priceRange}</span>
        </div>
      </div>
    </motion.div>
  );
}