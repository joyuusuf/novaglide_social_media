"use client";

import { useState } from "react";
import ConnectionCard from "./ConnectionCard";
import { Users, UserCheck, UserPlus, User } from "lucide-react";

export default function ConnectionsTabs() {
  const [active, setActive] = useState("followers");

  const followers = [
    {
      name: "Richard Hendricks",
      username: "@Richard_Hendricks",
      avatar: "/users/richard.png",
      bio: "🌐 Dreamer | 📚 Learner | 🚀 Doer Exploring life one step at a time.✨ D...",
    },
    {
      name: "Alexa james",
      username: "@alexa_james",
      avatar: "/users/alexa.png",
      bio: "🌐 Dreamer | 📚 Learner | 🚀 Doer Exploring life one step at a time.✨ D...",
    },
  ];

  const following: string | any[] = []; // later populated
  const pending: string | any[] = [];
  const connections: string | any[] = [];

  const tabs = [
    { id: "followers", count: followers.length, label: "Followers", icon: User },
    { id: "following", count: following.length, label: "Following", icon: UserCheck },
    { id: "pending", count: pending.length, label: "Pending", icon: UserPlus },
    { id: "connections", count: connections.length, label: "Connections", icon: Users },
  ];

  const renderData = () => {
    switch (active) {
      case "followers": return followers;
      case "following": return following;
      case "pending": return pending;
      case "connections": return connections;
      default: return followers;
    }
  };

  const ActiveData = renderData();

  return (
    <div>
      {/* Top Stats */}
      <div className="grid grid-cols-4 gap-4 text-center">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className="bg-white shadow-sm rounded-xl py-4 cursor-pointer"
            onClick={() => setActive(tab.id)}
          >
            <p className="text-2xl font-semibold text-gray-900">{tab.count}</p>
            <p className="text-gray-500 text-sm">{tab.label}</p>
          </div>
        ))}
      </div>

      {/* Button Tabs */}
      <div className="flex items-center gap-4 mt-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition border
              ${
                active === tab.id
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-700 border-gray-200"
              }
            `}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Cards */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {ActiveData.length === 0 && (
          <p className="text-gray-500 text-sm">No data found...</p>
        )}

        {ActiveData.map((user, i) => (
          <ConnectionCard key={i} {...user} />
        ))}
      </div>
    </div>
  );
}
