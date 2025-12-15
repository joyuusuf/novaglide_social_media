"use client";

import { useState } from "react";
import ConnectionCard from "./ConnectionCard";
import { Users, UserCheck, UserPlus, User } from "lucide-react";

export default function ConnectionsTabs() {
  const [active, setActive] = useState("followers");

  const followers = [
    {
      name: "Layo",
      username: "layo_",
      avatar: "/avatar.jpg",
      bio: " Dreamer |  Learner |  Doer Exploring life one step at a time.",
    },
    {
      name: "Lade_",
      username: "lade",
      avatar: "/avatar.jpg",
      bio: " Dreamer |  Fashionista| Doer Exploring life one step at a time.",
    },
  ];

  const following: any[] = [];
  const pending: any[] = [];
  const connections: any[] = [];

  const tabs = [
    { id: "followers", count: followers.length, label: "Followers", icon: User },
    { id: "following", count: following.length, label: "Following", icon: UserCheck },
    { id: "pending", count: pending.length, label: "Pending", icon: UserPlus },
    { id: "connections", count: connections.length, label: "Connections", icon: Users },
  ];

  const ActiveData = (() => {
    switch (active) {
      case "followers": return followers;
      case "following": return following;
      case "pending": return pending;
      case "connections": return connections;
      default: return followers;
    }
  })();

  return (
    <div className="w-full max-w-[900px] mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
      {/* Top Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mt-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className="bg-white shadow-sm rounded-xl py-4 cursor-pointer hover:shadow-md transition"
            onClick={() => setActive(tab.id)}
          >
            <p className="text-2xl font-semibold text-gray-900">{tab.count}</p>
            <p className="text-gray-500 text-sm">{tab.label}</p>
          </div>
        ))}
      </div>

      {/* Button Tabs - horizontal scroll on mobile */}
      <div className="flex items-center gap-3 mt-6 overflow-x-auto px-1 sm:px-0 scrollbar-none">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition border
              ${active === tab.id
                ? "bg-black text-white border-black"
                : "bg-white text-gray-700 border-gray-200"
              }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Connection Cards - responsive */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {ActiveData.length === 0 ? (
          <p className="text-gray-500 text-center w-full">No data found...</p>
        ) : (
          ActiveData.map((user, i) => <ConnectionCard key={i} {...user} />)
        )}
      </div>
    </div>
  );
}
