import MessageItem from "./MessageItem";

const users = [
  {
    name: "John Warren",
    username: "@john_warren",
    avatar: "/users/john.png",
    bio: "🌐 Dreamer | 📚 Learner | 🚀 Doer Exploring life one step at a time.✨ Staying curious. Creating with purpose."
  },
  {
    name: "Richard Hendricks",
    username: "@Richard_Hendricks",
    avatar: "/users/richard.png",
    bio: "🌐 Dreamer | 📚 Learner | 🚀 Doer Exploring life one step at a time.✨ Staying curious. Creating with purpose."
  },
  {
    name: "Alexa james",
    username: "@alexa_james",
    avatar: "/users/alexa.png",
    bio: "🌐 Dreamer | 📚 Learner | 🚀 Doer Exploring life one step at a time.✨ Staying curious. Creating with purpose."
  }
];

export default function MessageList() {
  return (
    <div className="space-y-4">
      {users.map((u, i) => (
        <MessageItem key={i} {...u} />
      ))}
    </div>
  );
}
