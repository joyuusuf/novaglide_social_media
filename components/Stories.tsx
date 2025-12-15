"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Plus, Loader2, Send, X } from "lucide-react";

interface Story {
  id: number;
  images: string[];
  time: string;
  loading?: boolean;
  user: {
    name: string;
    avatar: string;
  };
}

const STORY_DURATION = 4000;

export default function Stories() {
  const [stories, setStories] = useState<Story[]>([]);
  const [activeStory, setActiveStory] = useState<Story | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const [showAvatar, setShowAvatar] = useState(false);
  const [cubeDir, setCubeDir] = useState<"next" | "prev">("next");

  const startY = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  /* ---------------- Upload ---------------- */

  const handleAddStory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const images = Array.from(files).map((f) =>
      URL.createObjectURL(f)
    );

    const newStory: Story = {
      id: Date.now(),
      images,
      time: "Just now",
      loading: true,
      user: {
        name: "John Warren",
        avatar: "/avatar.jpg",
      },
    };

    setStories((p) => [newStory, ...p]);

    setTimeout(() => {
      setStories((p) =>
        p.map((s) =>
          s.id === newStory.id ? { ...s, loading: false } : s
        )
      );
    }, 3000);
  };

  /* ---------------- Auto progress ---------------- */

  useEffect(() => {
    if (!activeStory || paused) return;

    intervalRef.current = setInterval(() => {
      setProgress((p) => p + 100 / (STORY_DURATION / 100));
    }, 100);

    useEffect(() => {
  if (!activeStory || paused) return;

  intervalRef.current = setInterval(() => {
    setProgress((p) => p + 100 / (STORY_DURATION / 100));
  }, 100);

  return () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
}, [activeStory, paused]);
  }, [activeStory, paused]);

  useEffect(() => {
    if (!activeStory) return;

    if (progress >= 100) {
      if (activeIndex < activeStory.images.length - 1) {
        goNext();
      } else {
        closeStory();
      }
    }
  }, [progress]);

  const closeStory = () => {
    setActiveStory(null);
    setActiveIndex(0);
    setProgress(0);
    setPaused(false);
  };

  /* ---------------- Navigation ---------------- */

  const goNext = () => {
    setCubeDir("next");
    setActiveIndex((i) => i + 1);
    setProgress(0);
  };

  const goPrev = () => {
    if (activeIndex === 0) return;
    setCubeDir("prev");
    setActiveIndex((i) => i - 1);
    setProgress(0);
  };

  /* ---------------- Touch gestures ---------------- */

  const handleTouchStart = (e: React.TouchEvent) => {
    startY.current = e.touches[0].clientY;
    setPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientY - startY.current;
    setPaused(false);
    if (diff > 120) closeStory();
  };

  return (
    <>
      {/* Stories row */}
      <div className="flex gap-3 px-3 py-4">
        {/* Create */}
        <label className="cursor-pointer rounded-xl border-2 border-dashed border-gray-300
                          flex flex-col items-center justify-center text-gray-600
                          h-[160px] w-[110px] sm:h-[180px] sm:w-[120px] md:h-[200px] md:w-[140px]">
          <Plus size={22} />
          <span className="mt-2 text-sm">Create</span>
          <input
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={handleAddStory}
          />
        </label>

        {stories.map((story) => (
          <div
            key={story.id}
            onClick={() => {
              if (!story.loading) {
                setActiveStory(story);
                setActiveIndex(0);
                setProgress(0);
              }
            }}
            className="relative cursor-pointer overflow-hidden rounded-xl shadow
                       h-[160px] w-[110px] sm:h-[180px] sm:w-[120px] md:h-[200px] md:w-[140px]"
          >
            <Image
              src={story.images[0]}
              alt="story"
              fill
              className={`object-cover ${story.loading ? "blur-sm" : ""}`}
            />

            {story.images.length > 1 && (
              <span className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 rounded-full">
                {story.images.length}
              </span>
            )}

            {story.loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <Loader2 className="animate-spin text-white" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Story Viewer */}
      {activeStory && (
        <div
          className="fixed inset-0 z-50 bg-black text-white"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={() => setPaused(true)}
          onMouseUp={() => setPaused(false)}
        >
          {/* Progress */}
          <div className="absolute top-3 left-3 right-3 flex gap-1 z-20">
            {activeStory.images.map((_, i) => (
              <div key={i} className="flex-1 h-1 bg-white/30 rounded">
                <div
                  className="h-full bg-white"
                  style={{
                    width:
                      i < activeIndex
                        ? "100%"
                        : i === activeIndex
                        ? `${progress}%`
                        : "0%",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Header */}
          <div className="absolute top-6 left-4 right-4 flex items-center justify-between z-20">
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => setShowAvatar(true)}
            >
              <Image
                src={activeStory.user.avatar}
                alt="avatar"
                width={36}
                height={36}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-medium">{activeStory.user.name}</p>
                <p className="text-xs text-white/70">{activeStory.time}</p>
              </div>
            </div>
            <X onClick={closeStory} className="cursor-pointer" />
          </div>

          {/* Cube animation image */}
          <div
            key={activeIndex}
            className={`absolute inset-0 transition-transform duration-500
              ${cubeDir === "next" ? "animate-cube-next" : "animate-cube-prev"}`}
          >
            <Image
              src={activeStory.images[activeIndex]}
              alt="story"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Tap zones */}
          <div className="absolute left-0 top-0 h-full w-1/2" onClick={goPrev} />
          <div className="absolute right-0 top-0 h-full w-1/2" onClick={goNext} />

          {/* Reactions */}
          <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-4 text-xl">
            {["❤️", "😂", "😮", "😢", "🔥"].map((r) => (
              <button key={r} className="active:scale-125 transition">
                {r}
              </button>
            ))}
          </div>

          {/* Reply */}
          <div className="absolute bottom-6 left-4 right-4 flex gap-2">
            <input
              placeholder="Reply..."
              className="flex-1 rounded-full px-4 py-2 text-black"
            />
            <button className="rounded-full bg-white text-black p-2">
              <Send size={18} />
            </button>
          </div>

          {/* Avatar viewer */}
          {showAvatar && (
            <div
              className="absolute inset-0 bg-black flex items-center justify-center z-50"
              onClick={() => setShowAvatar(false)}
            >
              <Image
                src={activeStory.user.avatar}
                alt="avatar"
                width={240}
                height={240}
                className="rounded-full"
              />
            </div>
          )}
        </div>
      )}

     
     
    </>
  );
}
