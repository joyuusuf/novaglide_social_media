"use client";

import Image from "next/image";
import { useState } from "react";
import { Plus } from "lucide-react";

interface Story {
  id: number;
  image: string;
  time: string;
}

export default function Stories() {
  const [stories, setStories] = useState<Story[]>([
    // Example existing stories (you can remove or replace)
    {
      id: 1,
      image: "/story1.jpg", // add in public folder
      time: "3 hours ago",
    },
    {
      id: 2,
      image: "/story2.jpg",
      time: "3 hours ago",
    },
    {
      id: 3,
      image: "/story3.jpg",
      time: "3 hours ago",
    },
  ]);

  // Handle new story creation
  const handleAddStory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    const newStory = {
      id: Date.now(),
      image: imageUrl,
      time: "Just now",
    };

    setStories((prev) => [newStory, ...prev]);
  };

  return (
    <div className="w-full overflow-x-auto scrollbar-none">
      <div className="flex items-start gap-4 px-3 py-4">

        {/* Create Story */}
        <label
          htmlFor="uploadStory"
          className="h-48 w-32 cursor-pointer rounded-xl border-2 border-dashed border-gray-300 bg-white flex flex-col items-center justify-center text-sm text-gray-600"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
            <Plus size={22} />
          </div>
          <span className="mt-2 font-medium">Create Story</span>

          <input
            id="uploadStory"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleAddStory}
          />
        </label>

        {/* Render Stories */}
        {stories.map((story) => (
          <div
            key={story.id}
            className="relative h-48 w-32 shrink-0 rounded-xl overflow-hidden shadow-sm"
          >
            <Image
              src={story.image}
              alt="story"
              fill
              className="object-cover"
            />

            {/* Avatar */}
            <div className="absolute left-2 top-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-white">
              <Image
                src="/avatar.jpg" // add avatar to public folder
                alt="avatar"
                width={30}
                height={30}
                className="rounded-full"
              />
            </div>

            {/* Time */}
            <p className="absolute bottom-2 left-2 text-xs font-medium text-white drop-shadow-md">
              {story.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
