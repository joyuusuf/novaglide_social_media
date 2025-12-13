"use client";

import DiscoverSearch from "../../../components/DiscoverSearch";
import DiscoverCard from "../../../components/DiscoverCard";

export default function DiscoverPage() {
    const users = [
        {
            name: "Mide Yuusuf",
            username: "@mide_yuusuf",
            avatar: "/users/mide.png",
            bio: "💻 Developer | 📖 Lifelong learner | 🎨 Creator Building meaningful projects, exploring tech, and sharing knowledge along the way.",
            location: "Ibadan, Nigeria",
            followers: 2000,
            following: false,
        },
        {
            name: "Yemi Yuusuf",
            username: "@yemi_",
            avatar: "/users/richard.png",
            bio: "🌐 Dreamer | 📚 Learner | 🚀 Doer Exploring life one step at a time.✨ Staying curious. Creating with purpose.",
            location: "Ibadan, Nigeria",
            followers: 2,
            following: true,
        },
        {
            name: "Lade Heemah",
            username: "@heemah",
            avatar: "/users/alexa.png",
            bio: "👗 Fashion Designer | 🎨 Creative Mind | ✂️ Crafting unique styles and bringing ideas to life with passion and flair.",
            location: "Lagos, Nigeria",
            followers: 2,
            following: true,
        },
    ];

    return (
        <main
            className="min-h-screen bg-cover bg-center px-6 py-8"
            style={{ backgroundImage: "url('/bg.png')" }}
        >
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-semibold text-gray-900">Discover People</h1>
                <p className="text-gray-500 mt-1">
                    Connect with amazing people and grow your network
                </p>

                <div className="mt-8">
                    <DiscoverSearch />
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {users.map((u, i) => (
                        <DiscoverCard key={i} {...u} />
                    ))}
                </div>
            </div>
        </main>
    );
}
