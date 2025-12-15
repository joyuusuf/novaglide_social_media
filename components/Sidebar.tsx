"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  Home,
  MessageSquare,
  Users,
  Compass,
  User,
  Plus,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { label: "Feed", icon: Home, path: "/feed" },
  { label: "Messages", icon: MessageSquare, path: "/messages" },
  { label: "Connections", icon: Users, path: "/connections" },
  { label: "Discover", icon: Compass, path: "/discover" },
  { label: "Profile", icon: User, path: "/profile" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleNavigate = (path: string) => {
    router.push(path);
    setOpen(false); // close mobile overlay
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:flex-col fixed z-50 h-screen w-64 bg-white border-r px-4 py-5 justify-between">
        {/* Top nav + Logo */}
        <div>
          <div className="flex items-center gap-2 font-semibold text-blue-600 mb-8">
            <span>⚡</span>
            <span>NovaGlide</span>
          </div>

          <nav className="space-y-1">
            {navItems.map(({ label, icon: Icon, path }) => {
              const isActive = pathname === path;
              return (
                <button
                  key={label}
                  onClick={() => handleNavigate(path)}
                  className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition
                    ${
                      isActive
                        ? "bg-[#EEF2FF] text-[#432DD7]"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                >
                  <Icon size={16} />
                  {label}
                </button>
              );
            })}
          </nav>

          <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-[#432DD7] py-2 text-sm font-medium text-white">
            <Plus size={16} />
            Create Post
          </button>
        </div>

        {/* Bottom profile */}
        <div className="flex items-center justify-between border-t pt-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gray-300" />
            <span className="text-sm font-medium text-gray-700">Mide Yuusuf</span>
          </div>
          <LogOut size={16} className="cursor-pointer text-gray-500" />
        </div>
      </aside>

      {/* Mobile Footer Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden justify-around items-center bg-white border-t shadow py-2">
        {navItems.map(({ icon: Icon, path }) => {
          const isActive = pathname === path;
          return (
            <button
              key={path}
              onClick={() => handleNavigate(path)}
              className={`flex flex-col items-center text-sm transition
                ${isActive ? "text-[#432DD7]" : "text-gray-500"}`}
            >
              <Icon size={24} />
            </button>
          );
        })}
      </nav>

      {/* Mobile top menu button for extra options (optional) */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center md:hidden bg-white border-b shadow px-4 py-2">
        <div className="flex items-center gap-2 font-semibold text-blue-600">
          <span>⚡</span>
          <span>NovaGlide</span>
        </div>
        <button onClick={() => setOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile overlay sidebar */}
      {open && (
        <aside
          className="fixed inset-0 z-40 bg-white w-64 p-4 md:hidden flex flex-col justify-between shadow"
          onClick={() => setOpen(false)}
        >
          <button className="self-end">
            <X size={24} />
          </button>
          <nav className="space-y-1 mt-4">
            {navItems.map(({ label, icon: Icon, path }) => {
              const isActive = pathname === path;
              return (
                <button
                  key={label}
                  onClick={() => handleNavigate(path)}
                  className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition
                    ${
                      isActive
                        ? "bg-[#EEF2FF] text-[#432DD7]"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                >
                  <Icon size={16} />
                  {label}
                </button>
              );
            })}
          </nav>
        </aside>
      )}
    </>
  );
}
