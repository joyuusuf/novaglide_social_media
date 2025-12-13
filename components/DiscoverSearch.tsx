"use client";

import { Search } from "lucide-react";
import { useState } from "react";

export default function DiscoverSearch() {
  const [query, setQuery] = useState("");

  return (
    <div className="bg-white shadow-sm border border-gray-200 rounded-xl flex items-center px-4 py-3">
      <Search className="w-5 h-5 text-gray-500" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search people by name, username, bio, or location..."
        className="w-full bg-transparent outline-none px-3 text-gray-700"
      />
    </div>
  );
}
