"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import Toast from "@/components/ui/Toast";

export default function LoginCard() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const isFormValid = email.trim() && password.trim();

  const hashPassword = async (value: string) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(value);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hashBuffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) {
      setToast({
        message: "Please enter your email and password",
        type: "error",
      });
      return;
    }

    setLoading(true);

    const hashedPassword = await hashPassword(password);
    console.log({ email, password: hashedPassword });

    setTimeout(() => {
      setLoading(false);
      setToast({
        message: "Login successful",
        type: "success",
      });

      setTimeout(() => router.push("/"), 2000);
    }, 2000);
  };

  const handleGoogleLogin = () => {
    setGoogleLoading(true);

    setTimeout(() => {
      setGoogleLoading(false);
      setToast({
        message: "Signed in with Google",
        type: "success",
      });

      setTimeout(() => router.push("/"), 1500);
    }, 2000);
  };

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-xl">
        <h2 className="text-center text-sm font-semibold text-slate-800">
          Sign in to
        </h2>
        <p className="mb-4 text-center text-xs text-slate-500">
          Welcome back! Please sign in to continue
        </p>

        {/* Google sign in */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={googleLoading}
          className="mb-4 flex w-full items-center justify-center gap-2 rounded-md border border-gray-200 py-2 text-sm font-medium text-slate-700 transition hover:bg-gray-50 disabled:opacity-60"
        >
          {googleLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              <svg width="18" height="18" viewBox="0 0 48 48">
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.02 1.54 7.4 2.83l5.42-5.42C33.45 3.89 29.15 2 24 2 14.73 2 6.98 7.3 3.69 14.96l6.63 5.15C11.96 14.03 17.51 9.5 24 9.5z"
                />
                <path
                  fill="#4285F4"
                  d="M46.5 24.5c0-1.57-.14-2.78-.44-4H24v7.57h12.7c-.26 2.06-1.67 5.16-4.8 7.25l7.36 5.7c4.3-3.97 6.24-9.82 6.24-16.52z"
                />
                <path
                  fill="#FBBC05"
                  d="M10.32 28.11A14.55 14.55 0 0 1 9.5 24c0-1.43.25-2.81.8-4.11l-6.63-5.15A23.9 23.9 0 0 0 2 24c0 3.84.92 7.47 2.67 10.7l5.65-6.59z"
                />
                <path
                  fill="#34A853"
                  d="M24 46c6.48 0 11.92-2.13 15.9-5.78l-7.36-5.7c-1.97 1.38-4.62 2.33-8.54 2.33-6.49 0-12.03-4.53-13.99-10.64l-5.65 6.59C7 40.7 14.73 46 24 46z"
                />
              </svg>
              Sign in with Google
            </>
          )}
        </button>

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

          {/* Password */}
          <div className="relative flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="Password here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-gray-200 px-3 py-2 pr-10 text-sm outline-none focus:border-slate-400"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-slate-500"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          <button
            type="submit"
            disabled={!isFormValid || loading}
            className="mt-2 flex w-full items-center justify-center rounded-md bg-gradient-to-r from-slate-700 to-slate-900 py-2 text-sm font-medium text-white transition disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Continue →"}
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-slate-500">
          Don&apos;t have an account?{" "}
          <span
            className="cursor-pointer font-medium text-slate-800"
            onClick={() => router.push("/signUp")}
          >
            Sign up
          </span>
        </p>
      </div>
    </>
  );
}
