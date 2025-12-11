"use client";

import Image from "next/image";
import { MessageCircle, Heart, Repeat2 } from "lucide-react";

interface SocialPostProps {
  date: string;
  text?: string;
  image?: string;
}

export default function NewSocial({ date, text, image }: SocialPostProps) {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl shadow-sm mb-6">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center gap-3">
          <Image
            src="/avatar.jpg"
            width={42}
            height={42}
            alt="avatar"
            className="rounded-full object-cover"
          />

          <div className="flex flex-col">
            <p className="font-semibold text-gray-900 text-[15px]">John Warren</p>
            <p className="text-gray-500 text-[13px]">@john_warren · {date}</p>
          </div>
        </div>

        {/* Text */}
        {text && (
          <p className="text-[15px] text-gray-800 leading-relaxed mt-3">{text}</p>
        )}
      </div>

      {/* Image */}
      {image && (
        <div className="w-full">
          <Image
            src={image}
            alt="post image"
            width={900}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      {/* Reactions */}
      <div className="flex items-center gap-8 px-4 py-4 text-gray-500 text-[14px]">
        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition">
          <MessageCircle size={18} />
          <span>0</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:text-green-500 transition">
          <Repeat2 size={18} />
          <span>12</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:text-red-500 transition">
          <Heart size={18} />
          <span>7</span>
        </div>
      </div>
    </div>
  );
}
