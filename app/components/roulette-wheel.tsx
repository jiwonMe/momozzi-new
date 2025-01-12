"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Restaurant } from "../types/restaurant";
import { Utensils } from "lucide-react";

interface RouletteWheelProps {
  restaurants: Restaurant[];
  onSpin: (restaurant: Restaurant) => void;
}

export default function RouletteWheel({ restaurants, onSpin }: RouletteWheelProps) {
  const [spinning, setSpinning] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);

  const spinWheel = () => {
    if (spinning || restaurants.length === 0) return;
    
    setSpinning(true);
    setScale(1); // Reset scale at start
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    const duration = 3000; // 3 seconds spin
    
    // Set new rotation value (add 5 full rotations)
    setRotation(prev => prev + 360 * 5);
    
    // Animate through restaurants quickly
    let currentIndex = 0;
    const interval = setInterval(() => {
      setSelectedRestaurant(restaurants[currentIndex % restaurants.length]);
      currentIndex++;
    }, 100);

    // Stop at the randomly selected restaurant
    setTimeout(() => {
      clearInterval(interval);
      const selected = restaurants[randomIndex];
      setSelectedRestaurant(selected);
      setSpinning(false);
      setScale(1.1); // Scale up when selected
      onSpin(selected);
    }, duration);
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <motion.div
        className="w-64 h-64 rounded-full bg-primary flex items-center justify-center"
        animate={{ 
          rotate: rotation,
          scale: scale
        }}
        transition={{ 
          rotate: {
            duration: 3,
            ease: "easeInOut"
          },
          scale: {
            duration: 0.3,
            ease: "easeOut"
          }
        }}
      >
        <div className="text-center">
          <Utensils className="w-12 h-12 mb-2 mx-auto text-primary-foreground" />
          <h3 className="text-xl font-bold text-primary-foreground">
            {selectedRestaurant?.name || "맛집 룰렛"}
          </h3>
          {selectedRestaurant && (
            <p className="text-sm text-primary-foreground/80">
              {selectedRestaurant.category}
            </p>
          )}
        </div>
      </motion.div>

      <button
        onClick={spinWheel}
        disabled={spinning}
        className={`px-8 py-3 rounded-full bg-accent text-accent-foreground font-semibold
          transition-all transform hover:scale-105 active:scale-95
          ${spinning ? 'opacity-50 cursor-not-allowed' : 'hover:bg-accent/90'}`}
      >
        {spinning ? '돌리는 중...' : '룰렛 돌리기'}
      </button>
    </div>
  );
}