"use client";

export default function SignUpCardSkeleton() {
  // Left content skeleton
  const LeftContentSkeleton = () => (
    <section className="max-w-xl space-y-4 animate-pulse flex flex-col justify-center h-full">
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

  return (
    <div className="flex w-full max-w-7xl gap-12">
      {/* Left skeleton */}
      <div className="hidden lg:flex flex-1">
        <LeftContentSkeleton />
      </div>

      {/* Right skeleton */}
      <div className="flex-1 max-w-sm rounded-xl bg-white p-6 shadow-xl animate-pulse">
        {/* Toast placeholders */}
        <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
          <div className="w-72 h-16 bg-gray-200 rounded-md shadow-lg" />
          <div className="w-72 h-16 bg-gray-200 rounded-md shadow-lg" />
        </div>

        {/* Heading */}
        <div className="h-4 w-1/3 mx-auto mb-2 bg-gray-300 rounded"></div>
        <div className="h-3 w-2/3 mx-auto mb-4 bg-gray-200 rounded"></div>

        {/* Google signup button */}
        <div className="mb-4 h-10 w-full bg-gray-200 rounded-md flex items-center justify-center gap-2">
          <div className="h-4 w-4 bg-gray-300 rounded-full animate-spin"></div>
          <div className="h-3 w-20 bg-gray-300 rounded"></div>
        </div>

        {/* OR divider */}
        <div className="mb-4 flex items-center gap-2">
          <div className="h-px w-full bg-gray-200" />
          <div className="h-3 w-10 bg-gray-300 rounded" />
          <div className="h-px w-full bg-gray-200" />
        </div>

        <form className="space-y-4">
          <div className="h-12 w-full bg-gray-200 rounded-md"></div>
          <div className="h-12 w-full bg-gray-200 rounded-md"></div>
          <div className="h-12 w-full bg-gray-200 rounded-md relative">
            <div className="absolute inset-y-0 right-3 w-6 h-6 bg-gray-300 rounded-full"></div>
          </div>
          <div className="h-1.5 w-full rounded-full bg-gray-200">
            <div className="h-1.5 rounded-full w-1/2 bg-gray-300" />
          </div>
          <div className="h-12 w-full bg-gray-200 rounded-md relative">
            <div className="absolute inset-y-0 right-3 w-6 h-6 bg-gray-300 rounded-full"></div>
          </div>
          <div className="h-10 w-full bg-gray-300 rounded-md mt-2 flex items-center justify-center">
            <div className="h-4 w-4 bg-gray-300 rounded-full animate-spin" />
          </div>
        </form>

        <div className="mt-4 h-3 w-1/2 mx-auto bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}
