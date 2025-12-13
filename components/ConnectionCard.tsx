"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  name: string;
  username: string;
  avatar: string;
  bio: string;
}

export default function ConnectionCard({ name, username, avatar, bio }: Props) {
  const router = useRouter();

  return (
    <div className="bg-white shadow-sm rounded-xl p-5 flex items-start space-x-4">
      <Image
        src="/avatar.jpg"
        alt={name}
        width={50}
        height={50}
        className="rounded-full object-cover"
      />

      <div className="flex-1">
        <h3 className="font-semibold text-gray-900">{name}</h3>
        <p className="text-gray-500 text-sm -mt-1">{username}</p>

        <p className="text-gray-700 text-sm mt-2 leading-snug truncate">
          {bio}
        </p>

        <button
          onClick={() => router.push(`/profile/${username}`)}
          className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg text-sm font-medium"
        >
          View Profile
        </button>
      </div>
    </div>
  );
}
