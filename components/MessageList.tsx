"use client";

import { MessageItem } from "./MessageItem";

const users = [
  {
    name: "John Warren",
    username: "@john_warren",
    avatar: "/avatar.jpg",
    bio: "🌐 Dreamer | 📚 Learner | 🚀 Doer Exploring life one step at a time.✨ Staying curious. Creating with purpose."
  },
  {
    name: "Richard Hendricks",
    username: "@Richard_Hendricks",
    avatar: "/avatar.jpg",
    bio: "🌐 Dreamer | 📚 Learner | 🚀 Doer Exploring life one step at a time.✨ Staying curious. Creating with purpose."
  },
  {
    name: "Alexa James",
    username: "@alexa_james",
    avatar: "/avatar.jpg",
    bio: "🌐 Dreamer | 📚 Learner | 🚀 Doer Exploring life one step at a time.✨ Staying curious. Creating with purpose."
  }
];

export default function MessageList() {
  return (
  <>
    

      {/* Message items */}
      <div className="space-y-6">
        {users.map((user, i) => (
          <div
            key={i}
            className="transform transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <MessageItem {...user} />
          </div>
        ))}
      </div>
    </>
  );
}
