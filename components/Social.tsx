"use client";

import Image from "next/image";
import { MessageCircle, Heart, Repeat2 } from "lucide-react";

interface SocialPostProps {
  text: string;
  hashtags: string[];
  date: string;
}

export default function SocialPost({ text, hashtags, date }: SocialPostProps) {
  return (
    <div className="w-full bg-white border-b border-gray-200 py-6 px-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Image
          src="/avatar.jpg" // Your avatar in public folder
          width={40}
          height={40}
          alt="avatar"
          className="rounded-full object-cover"
        />

        <div>
          <p className="font-semibold text-gray-900 text-[15px]">John Warren</p>
          <p className="text-gray-500 text-[13px]">@john_warren · {date}</p>
        </div>
      </div>

      {/* Content */}
      <p className="text-[15px] text-gray-800 leading-relaxed mt-3">{text}</p>

      {/* Hashtags */}
      <div className="flex flex-wrap gap-1 mt-2">
        {hashtags.map((tag, index) => (
          <span key={index} className="text-blue-600 text-[14px]">
            #{tag}
          </span>
        ))}
      </div>

      {/* Reactions */}
      <div className="flex items-center gap-8 mt-4 text-gray-500 text-[14px]">
        <div className="flex items-center gap-2 hover:text-blue-500 cursor-pointer">
          <MessageCircle size={18} />
          <span>0</span>
        </div>

        <div className="flex items-center gap-2 hover:text-green-500 cursor-pointer">
          <Repeat2 size={18} />
          <span>12</span>
        </div>

        <div className="flex items-center gap-2 hover:text-red-500 cursor-pointer">
          <Heart size={18} />
          <span>7</span>
        </div>
      </div>
    </div>
  );
}
