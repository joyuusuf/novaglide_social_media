"use client";

import { ReactNode, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Home, MessageSquare, Users, Compass, User, Plus, LogOut, Menu, X } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const navItems = [
  { label: "Feed", icon: Home, path: "/feed" },
  { label: "Messages", icon: MessageSquare, path: "/messages" },
  { label: "Connections", icon: Users, path: "/connections" },
  { label: "Discover", icon: Compass, path: "/discover" },
  { label: "Profile", icon: User, path: "/profile" },
];

export default function MainLayout({ children }: LayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleNavigate = (path: string) => {
    router.push(path);
    setOpen(false); // close mobile sidebar
  };

  return (
    <div className="flex">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:flex-col fixed z-50 h-screen w-64 bg-white border-r px-4 py-5 justify-between">
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
                    ${isActive ? "bg-[#EEF2FF] text-[#432DD7]" : "text-gray-600 hover:bg-gray-100"}`}
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

        <div className="flex items-center justify-between border-t pt-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gray-300" />
            <span className="text-sm font-medium text-gray-700">Mide Yuusuf</span>
          </div>
          <LogOut size={16} className="cursor-pointer text-gray-500" />
        </div>
      </aside>

      {/* Mobile Top Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center md:hidden bg-white border-b shadow px-4 py-2">
        <div className="flex items-center gap-2 font-semibold text-blue-600">
          <span>⚡</span>
          <span>NovaGlide</span>
        </div>
        <button onClick={() => setOpen(true)}>
          <Menu size={24} />
        </button>
      </header>

      {/* Mobile Sidebar Overlay */}
      {open && (
        <aside className="fixed inset-0 z-50 md:hidden bg-white w-64 p-4 flex flex-col justify-between shadow">
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2 font-semibold text-blue-600">
                <span>⚡</span>
                <span>NovaGlide</span>
              </div>
              <button onClick={() => setOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <nav className="space-y-1">
              {navItems.map(({ label, icon: Icon, path }) => {
                const isActive = pathname === path;
                return (
                  <button
                    key={label}
                    onClick={() => handleNavigate(path)}
                    className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition
                      ${isActive ? "bg-[#EEF2FF] text-[#432DD7]" : "text-gray-600 hover:bg-gray-100"}`}
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

          <div className="flex items-center justify-between border-t pt-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gray-300" />
              <span className="text-sm font-medium text-gray-700">Mide Yuusuf</span>
            </div>
            <LogOut size={16} className="cursor-pointer text-gray-500" />
          </div>
        </aside>
      )}

      {/* Main Content */}
      <main className="flex-1 w-full md:ml-64 pt-16 md:pt-0">{children}</main>
    </div>
  );
}
