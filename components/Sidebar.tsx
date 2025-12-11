"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  Home,
  MessageSquare,
  Users,
  Compass,
  User,
  Plus,
  LogOut,
} from "lucide-react";

const navItems = [
  { label: "Feed", icon: Home, path: "/" },
  { label: "Messages", icon: MessageSquare, path: "/messages" },
  { label: "Connections", icon: Users, path: "/connections" },
  { label: "Discover", icon: Compass, path: "/discover" },
  { label: "Profile", icon: User, path: "/profile" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <aside className="flex h-screen w-[260px] flex-col justify-between border-r bg-white px-4 py-5">
      
      {/* Top */}
      <div>
        {/* Logo */}
        <div className="mb-8 flex items-center gap-2 px-2 font-semibold text-blue-600">
          <span>⚡</span>
          <span>pingup</span>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          {navItems.map(({ label, icon: Icon, path }) => {
            const isActive = pathname === path;

            return (
              <button
                key={label}
                onClick={() => router.push(path)}
                className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition
                  ${
                    isActive
                      ? "bg-[#EEF2FF] text-[#432DD7]"
                      : "text-gray-600 hover:bg-gray-100"
                  }
                `}
              >
                <Icon size={16} className={isActive ? "text-[#432DD7]" : ""} />
                {label}
              </button>
            );
          })}
        </nav>

        {/* Create post */}
        <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-[#432DD7] py-2 text-sm font-medium text-white">
          <Plus size={16} />
          Create Post
        </button>
      </div>

      {/* Bottom profile */}
      <div className="flex items-center justify-between border-t pt-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gray-300" />
          <span className="text-sm font-medium text-gray-700">
            John Warren
          </span>
        </div>
        <LogOut size={16} className="cursor-pointer text-gray-500" />
      </div>
    </aside>
  );
}
