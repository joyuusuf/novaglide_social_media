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
    <div className="bg-white shadow-sm rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full">
      {/* Avatar */}
      <div className="flex-shrink-0">
        <Image
          src={avatar}
          alt={name}
          width={50}
          height={50}
          className="rounded-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col min-w-0">
        <h3 className="font-semibold text-gray-900 truncate">{name}</h3>
        <p className="text-gray-500 text-sm truncate -mt-1">{username}</p>
        <p className="text-gray-700 text-sm mt-2 leading-snug break-words">{bio}</p>

        <button
          onClick={() => router.push(`/profile/${username}`)}
          className="mt-4 w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg text-sm font-medium text-center"
        >
          View Profile
        </button>
      </div>
    </div>
  );
}
