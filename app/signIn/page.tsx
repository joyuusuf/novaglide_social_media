"use client"
import Image from "next/image";
import LoginCard from "@/components/LoginCard";
import SignUpCardSkeleton from "@/components/ui/SignUpCardSkeleton";
import { useState, useEffect } from "react";

// Left content skeleton
function LeftContentSkeleton() {
  return (
    <section className="max-w-xl space-y-4 animate-pulse">
      <div className="mb-6 h-6 w-32 bg-gray-300 rounded"></div>
      <div className="mb-6 flex items-center gap-3">
        <div className="flex -space-x-2">
          <div className="h-7 w-7 rounded-full bg-gray-300" />
          <div className="h-7 w-7 rounded-full bg-gray-400" />
          <div className="h-7 w-7 rounded-full bg-gray-500" />
        </div>
        <div className="h-3 w-24 bg-gray-300 rounded"></div>
      </div>
      <div className="h-10 w-3/4 bg-gray-300 rounded"></div>
      <div className="h-16 w-full bg-gray-300 rounded"></div>
      <div className="h-12 w-1/2 bg-gray-300 rounded"></div>
    </section>
  );
}

export default function SignIn() {

  const [loadingSkeleton, setLoadingSkeleton] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => setLoadingSkeleton(false), 1200);
      return () => clearTimeout(timer);
    }, []);
  
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/smbg.png"
        alt="Background gradient"
        fill
        priority
        className="object-cover"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
          
           {/* Left content */}
          {loadingSkeleton ? <LeftContentSkeleton /> : (
            <section className="max-w-xl">
              <div className="mb-10 flex items-center gap-2 text-blue-600 font-semibold">
                <span className="text-lg">⚡</span>
                <span>NovaGlide</span>
              </div>

              <div className="mb-6 flex items-center gap-3 text-sm text-gray-700">
                <div className="flex -space-x-2">
                  <div className="h-7 w-7 rounded-full bg-gray-300" />
                  <div className="h-7 w-7 rounded-full bg-gray-400" />
                  <div className="h-7 w-7 rounded-full bg-gray-500" />
                </div>
                <span className="text-xs">
                  Used by over <strong>12k+</strong> Users
                </span>
              </div>

              <h1 className="text-hero font-bold leading-tight text-slate-900">
                More than just friends <br />
                truly connect
              </h1>

              <p className="mt-4 max-w-md text-base text-slate-600">
                connect with global community <br />
                on NovaGlide.
              </p>
            </section>
          )}

          {/* Right card */}
          {/* <div className="flex justify-center lg:justify-end">
            <LoginCard />
          </div> */}

           {/* Right card */}
                    <div className="flex justify-center lg:justify-end">
                      {loadingSkeleton ? <SignUpCardSkeleton /> : <LoginCard />}
                    </div>
        </div>
      </div>
    </main>
  );
}
