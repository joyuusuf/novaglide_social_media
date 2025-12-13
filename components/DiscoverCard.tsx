"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  name: string;
  username: string;
  avatar: string;
  bio: string;
  location: string;
  followers: number;
  following: boolean;
}

export default function DiscoverCard({
  name,
  username,
  avatar,
  bio,
  location,
  followers,
  following,
}: Props) {
  const router = useRouter();
  const [isFollowing, setFollowing] = useState(following);

  const toggleFollow = () => setFollowing(!isFollowing);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center">
      <Image
        src={avatar}
        alt={name}
        width={80}
        height={80}
        className="rounded-full object-cover"
      />

      <h3 className="font-semibold text-gray-900 mt-4">{name}</h3>
      <p className="text-gray-500 text-sm -mt-1">{username}</p>

      <p className="text-gray-700 text-sm text-center mt-3 leading-snug">
        {bio}
      </p>

      {/* location + followers */}
      <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-600">
        <span className="px-3 py-1 border border-gray-300 rounded-full">
          {location}
        </span>

        <span className="px-3 py-1 border border-gray-300 rounded-full">
          {followers} Followers
        </span>
      </div>

      {/* Follow / Following button */}
      <button
        onClick={toggleFollow}
        className={`mt-6 w-full py-2 rounded-lg text-sm font-medium transition ${
          isFollowing
            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
            : "bg-blue-600 text-white"
        }`}
      >
        {isFollowing ? "Following" : "Follow"}
      </button>

      {/* Message button */}
      <button
        onClick={() => router.push(`/messages/chat/${username}`)}
        className="mt-3 w-full border border-gray-300 py-2 rounded-lg flex justify-center items-center hover:bg-gray-50 transition"
      >
        <MessageCircle className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  );
}
