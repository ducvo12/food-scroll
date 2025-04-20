"use client";

import { Heart, X } from "lucide-react";

interface SwipeButtonsProps {
  onLike: () => void;
  onDislike: () => void;
}

export default function SwipeButtons({ onLike, onDislike }: SwipeButtonsProps) {
  return (
    <div className="flex justify-center gap-16 mt-8">
      <button
        onClick={onDislike}
        className="bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        aria-label="Dislike"
      >
        <X className="w-8 h-8 text-red-500" />
      </button>
      <button
        onClick={onLike}
        className="bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        aria-label="Like"
      >
        <Heart className="w-8 h-8 text-green-500" />
      </button>
    </div>
  );
}
