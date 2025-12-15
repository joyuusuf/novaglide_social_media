"use client";
import ConnectionsTabs from "../../../components/ConnectionsTabs";

export default function ConnectionsPage() {
  return (
    <main
      className="min-h-screen bg-cover bg-center px-2 sm:px-4 md:px-6 lg:px-8 py-8"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <header className="mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Connections
          </h1>
          <p className="text-gray-500 mt-1 text-sm sm:text-base">
            Manage your network and discover new connections
          </p>
        </header>

        {/* Sticky Tabs Wrapper */}
        <div className="sticky top-20 z-10 bg-white rounded-xl shadow p-4 sm:p-6">
          <ConnectionsTabs />
        </div>

        {/* Optional Spacer */}
        <div className="mt-8 sm:mt-12"></div>
      </div>
    </main>
  );
}
