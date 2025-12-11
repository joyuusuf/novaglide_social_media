"use client";

import Image from "next/image";
import { MessageCircle, Heart, Repeat2 } from "lucide-react";

export default function SocialPost() {
  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm max-w-2xl w-full">
        {/* Header */}
        <div className="flex items-center gap-3 p-4">
          <Image
            src="/avatar.jpg" // Replace with your avatar in public folder
            width={45}
            height={45}
            alt="profile"
            className="rounded-full object-cover"
          />

          <div className="flex flex-col leading-tight">
            <p className="font-semibold text-gray-900 text-[15px]">
              John Warren
            </p>
            <p className="text-gray-500 text-[13px] -mt-[2px]">@john_warren · 9 days ago</p>
          </div>
        </div>

        {/* Content */}
        <p className="px-4 text-[15px] text-gray-800 leading-snug pb-4">
          We’re a small <span className="text-blue-600">#team</span> with a big vision — working day
          and night to turn dreams into products, and{" "}
          <span className="text-blue-600">#products</span> into something people love.
        </p>

        {/* Background Image */}
        <div className="w-full relative">
          <Image
            src="/story1.jpg" // your background image
            alt="team"
            width={900}
            height={600}
            className="w-full h-auto object-cover rounded-b-xl"
            priority
          />
        </div>

        {/* Reactions */}
        <div className="flex items-center gap-8 px-4 py-4 text-gray-500 text-[14px]">
          <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition">
            <MessageCircle size={18} />
            <span>12</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-green-500 transition">
            <Repeat2 size={18} />
            <span>7</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-red-500 transition">
            <Heart size={18} />
            <span>27</span>
          </div>
        </div>
      </div>
    </div>
  );
}
