"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { Plus, Loader2 } from "lucide-react";

interface Story {
  id: number;
  image: string;
  time: string;
  loading?: boolean;
}

export default function Stories() {
  const [stories, setStories] = useState<Story[]>([
    { id: 1, image: "/story1.jpg", time: "3 hours ago" },
    { id: 2, image: "/story2.jpg", time: "3 hours ago" },
    { id: 3, image: "/story3.jpg", time: "3 hours ago" },
  ]);

  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleAddStory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    const newStory = { id: Date.now(), image: imageUrl, time: "Just now", loading: true };
    setStories((prev) => [newStory, ...prev]);

    // Simulate 4-second upload
    setTimeout(() => {
      setStories((prev) =>
        prev.map((s) => (s.id === newStory.id ? { ...s, loading: false } : s))
      );
    }, 4000);
  };

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll-fast multiplier
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => setIsDragging(false);

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={containerRef}
        className="flex items-center gap-4 px-3 py-4 overflow-x-auto scrollbar-none cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Create Story */}
        <label
          htmlFor="uploadStory"
          className="h-48 w-32 cursor-pointer rounded-xl border-2 border-dashed border-gray-300 bg-white flex flex-col items-center justify-center text-sm text-gray-600 shrink-0"
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
              className={`object-cover transition-all ${
                story.loading ? "blur-sm" : "blur-0"
              }`}
            />

            {story.loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <Loader2 className="h-8 w-8 animate-spin text-white" />
              </div>
            )}

            {/* Avatar */}
            <div className="absolute left-2 top-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-white">
              <Image
                src="/avatar.jpg"
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
