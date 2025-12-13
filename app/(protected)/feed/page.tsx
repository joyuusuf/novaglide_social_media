"use client";

import Stories from "@/components/Stories";
import SocialPost from "@/components/SocialPost";
import PostsContainer from "@/components/PostsContainer";
import NewPostContainer from "@/components/newPostContainer";

export default function SocialFeedPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Stories at the top, centered */}
      <section className="w-full flex justify-center overflow-x-auto scrollbar-none">
        <div className="flex gap-4 px-3 py-4 min-w-max">
          <Stories />
        </div>
      </section>

      {/* Social post input */}
      <section className="w-full flex justify-center">
        <div className="w-full max-w-2xl">
          <SocialPost />
        </div>
      </section>

      {/* Existing posts */}
      <section className="w-full flex justify-center flex-col gap-4">
        <div className="w-full max-w-2xl">
          <PostsContainer />
        </div>
      </section>

      {/* New post input */}
      <section className="w-full flex justify-center">
        <div className="w-full max-w-2xl">
          <NewPostContainer />
        </div>
      </section>
    </div>
  );
}
