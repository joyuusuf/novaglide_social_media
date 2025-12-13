"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

type ToastProps = {
  message: string;
  type?: "success" | "error";
  duration?: number;
  onClose: () => void;
};

export default function Toast({
  message,
  type = "success",
  duration = 4000,
  onClose,
}: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className="fixed right-4 top-4 z-50 w-[280px] overflow-hidden rounded-md bg-white shadow-lg animate-slide-in">
      {/* Content */}
      <div className="flex items-center justify-between px-4 py-3">
        <p
          className={`text-sm font-medium ${
            type === "success" ? "text-green-700" : "text-red-700"
          }`}
        >
          {message}
        </p>

        <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
          <X size={16} />
        </button>
      </div>

      {/* Progress bar (right → left) */}
      <div className="h-1 w-full bg-gray-200">
        <div
          className={`h-full ${
            type === "success" ? "bg-purple-500" : "bg-red-600"
          } origin-right animate-shrink`}
          style={{ animationDuration: `${duration}ms` }}
        />
      </div>
    </div>
  );
}
