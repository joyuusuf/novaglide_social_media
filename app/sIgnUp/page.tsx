import Image from "next/image";
import SignUpCard from "@/components/SignUp";

export default function SignUpPage() {
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

          {/* Right card */}
          <div className="flex justify-center lg:justify-end">
            <SignUpCard/>
          </div>
        </div>
      </div>
    </main>
  );
}
