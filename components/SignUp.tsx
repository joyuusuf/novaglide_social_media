"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2, X } from "lucide-react";

type ToastType = "success" | "error";
type ToastMessage = { id: number; message: string; type: ToastType };

export default function SignUpCard() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [error, setError] = useState("");

  const passwordStrength = useMemo(() => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 1) return { label: "Weak", color: "bg-red-500" };
    if (score === 2) return { label: "Fair", color: "bg-yellow-500" };
    if (score === 3) return { label: "Good", color: "bg-blue-500" };

    return { label: "Strong", color: "bg-green-600" };
  }, [password]);

  const isFormValid =
    fullName.trim() &&
    email.trim() &&
    password &&
    confirmPassword &&
    password === confirmPassword &&
    (passwordStrength.label === "Good" || passwordStrength.label === "Strong");

  const addToast = (message: string, type: ToastType) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (!isFormValid) {
  //     addToast("Please fill all fields correctly", "error");
  //     return;
  //   }

  //   // Mark that user interacted
  //   sessionStorage.setItem("signUpInteracted", "true");

  //   setLoading(true);

  //   setTimeout(() => {
  //     setLoading(false);
  //     addToast("Account created successfully!", "success");
  //     router.push("/signIn");
  //   }, 4000);
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName,
        email,
        password,
      }),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.message);
      return;
    }

    sessionStorage.setItem("signUpInteracted", "true");
    router.push("/signIn");
  };

  const handleGoogleSignup = () => {
    // Mark that user interacted
    sessionStorage.setItem("signUpInteracted", "true");

    setGoogleLoading(true);

    setTimeout(() => {
      setGoogleLoading(false);
      addToast("Signed up with Google!", "success");
      router.push("/signIn");
    }, 4000);
  };


  return (
    <div className="relative w-full max-w-sm rounded-xl bg-white p-6 shadow-xl">
      {/* Toast Container */}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`relative w-72 overflow-hidden rounded-md shadow-lg bg-white animate-slide-in`}
          >
            <div className="flex items-center justify-between px-4 py-3">
              <p
                className={`text-sm font-medium ${toast.type === "success" ? "text-green-700" : "text-red-700"
                  }`}
              >
                {toast.message}
              </p>
              <button
                onClick={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
                className="text-slate-400 hover:text-slate-600"
              >
                <X size={16} />
              </button>
            </div>
            <div className="h-1 w-full bg-gray-200">
              <div
                className={`h-full ${toast.type === "success" ? "bg-green-600" : "bg-red-600"
                  } origin-right animate-shrink`}
                style={{ animationDuration: "4000ms" }}
              />
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-center text-sm font-semibold text-slate-800">
        Create your account
      </h2>
      <p className="mb-4 text-center text-xs text-slate-500">
        Join NovaGlide and start connecting
      </p>

      {/* Google signup */}
      <button
        type="button"
        onClick={handleGoogleSignup}
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
            Sign up with Google
          </>
        )}
      </button>

      <div className="mb-4 flex items-center gap-2">
        <div className="h-px w-full bg-gray-200" />
        <span className="text-xs text-slate-400">or</span>
        <div className="h-px w-full bg-gray-200" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full name */}
        <div>
          <label className="mb-1 block text-xs text-slate-600">Full name</label>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-1 block text-xs text-slate-600">Email address</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
          />
        </div>

        {/* Password */}
        <div>
          <label className="mb-1 block text-xs text-slate-600">Password</label>
          <div className="relative flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
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

          {password && (
            <div className="mt-2">
              <div className="h-1.5 w-full rounded-full bg-gray-200">
                <div
                  className={`h-1.5 rounded-full transition-all ${passwordStrength.color}`}
                  style={{
                    width:
                      passwordStrength.label === "Weak"
                        ? "25%"
                        : passwordStrength.label === "Fair"
                          ? "50%"
                          : passwordStrength.label === "Good"
                            ? "75%"
                            : "100%",
                  }}
                />
              </div>
              <p className="mt-1 text-xs text-slate-600">
                Password strength: <span className="font-medium">{passwordStrength.label}</span>
              </p>
            </div>
          )}
        </div>

        {/* Confirm password */}
        <div>
          <label className="mb-1 block text-xs text-slate-600">Confirm password</label>
          <div className="relative flex items-center">
            <input
              type={showConfirmPassword ? "text" : "password"}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
              className="w-full rounded-md border border-gray-200 px-3 py-2 pr-10 text-sm outline-none focus:border-slate-400"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-slate-500"
            >
              {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {confirmPassword && password !== confirmPassword && (
            <p className="mt-1 text-xs text-red-500">Passwords do not match</p>
          )}
        </div>

        <button
          type="submit"
          disabled={!isFormValid || loading}
          className="mt-2 flex w-full items-center justify-center cursor-pointer rounded-md bg-gradient-to-r from-slate-700 to-slate-900 py-2 text-sm font-medium text-white transition disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Create account →"}
        </button>
      </form>

      <p className="mt-4 text-center text-xs text-slate-500">
        Already have an account?{" "}
        <span
          onClick={() => router.push("/signIn")}
          className="cursor-pointer font-medium text-slate-800 hover:underline"
        >
          Sign in
        </span>
      </p>
    </div>
  );
}
