"use client";

import MainLayout from "@/app/(protected)/layout"
import Stories from "@/components/Stories";
import SocialPost from "@/components/SocialPost";
import PostsContainer from "@/components/PostsContainer";
import NewPostContainer from "@/components/newPostContainer";

export default function SocialFeedPage() {
  return (
    // <MainLayout>
    <>
      {/* Centered feed wrapper */}
      <div className="w-full flex justify-center px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="w-full max-w-[680px] flex flex-col gap-6 sm:gap-8">
          {/* Stories */}
          <section className="w-full overflow-x-auto scrollbar-none">
            <div className="flex gap-3 py-4 min-w-max">
              <Stories />
            </div>
          </section>

          {/* Create post */}
          <section className="w-full">
            <SocialPost />
          </section>

          {/* Feed */}
          <section className="w-full flex flex-col gap-4">
            <PostsContainer />
          </section>

          {/* New post */}
          <section className="w-full">
            <NewPostContainer />
          </section>
        </div>
      </div>
      </>
    // </MainLayout>
  );
}
