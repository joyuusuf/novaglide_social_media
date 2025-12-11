"use client";

import { useState } from "react";

export default function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-xl">
      <h2 className="text-center text-sm font-semibold text-slate-800">
        Sign in to
      </h2>
      <p className="mb-6 text-center text-xs text-slate-500">
        Welcome back! Please sign in to continue
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block text-xs text-slate-600">
            Email address
          </label>
          <input
            type="email"
            required
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
          />
        </div>

        <div>
          <input
            type="password"
            required
            placeholder="Password here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
          />
        </div>

        <button
          type="submit"
          className="mt-2 w-full rounded-md bg-gradient-to-r from-slate-700 to-slate-900 py-2 text-sm font-medium text-white transition hover:opacity-90"
        >
          Continue →
        </button>
      </form>

      <p className="mt-4 text-center text-xs text-slate-500">
        Don&apos;t have an account?{" "}
        <span className="cursor-pointer font-medium text-slate-800">
          Sign up
        </span>
      </p>
    </div>
  );
}
