"use client";
import ConnectionsTabs from "../../components/ConnectionsTabs";

export default function ConnectionsPage() {
  return (
    <main
      className="min-h-screen bg-cover bg-center px-4 py-8"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-900">Connections</h1>
        <p className="text-gray-500 mt-1">
          Manage your network and discover new connections
        </p>

        <div className="mt-8">
          <ConnectionsTabs />
        </div>
      </div>
    </main>
  );
}
