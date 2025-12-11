"use client";

import { MessageSquare, MoreVertical } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  name: string;
  username: string;
  avatar: string;
  bio: string;
}

export default function MessageItem({ name, username, avatar, bio }: Props) {
  const router = useRouter();

  return (
    <div className="w-full bg-white shadow-sm rounded-xl px-5 py-5 flex items-start justify-between">
      <div className="flex items-start space-x-4">
        <Image
          src={avatar}
          alt={name}
          width={48}
          height={48}
          className="rounded-full object-cover"
        />

        <div>
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-gray-500 text-sm -mt-1">{username}</p>

          <p className="text-gray-700 text-sm mt-2 leading-snug">
            {bio}
          </p>
        </div>
      </div>

      <div className="flex flex-col space-y-4 items-center justify-center">
        <button
          onClick={() => router.push(`/messages/chat/${username}`)}
          className="p-2 rounded-full hover:bg-gray-100 transition"
        >
          <MessageSquare className="w-5 h-5 text-gray-600" />
        </button>

        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <MoreVertical className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
