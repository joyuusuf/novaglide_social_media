"use client";

import MessageList from "../../../components/MessageList";

export default function MessagesPage() {
  return (
    <main
      className="min-h-screen bg-cover bg-center px-4 py-8"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-900">Messages</h1>
        <p className="text-gray-500 mt-1">
          Talk to your friends and family
        </p>

        <div className="mt-6">
          <MessageList/>
        </div>
      </div>
    </main>
  );
}
