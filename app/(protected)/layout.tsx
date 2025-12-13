"use client";

import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import SkeletonLoader from "@/components/ui/SignUpCardSkeleton";

interface ProtectedLayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: ProtectedLayoutProps) {
  const isLoading = false; // Replace with real user/session loading logic

  return (
    <div className="flex min-h-screen">
      {/* Fixed sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64">
        <Sidebar />
      </aside>

      {/* Main content with left padding to avoid overlapping sidebar */}
      <main className="flex-1 p-4 ml-64">
        {isLoading ? <SkeletonLoader /> : children}
      </main>
    </div>
  );
}
