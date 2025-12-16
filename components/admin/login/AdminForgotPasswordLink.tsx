"use client";

export default function AdminForgotPasswordLink() {
  return (
    <div className="text-center">
      <a
        href="#"
        className="text-sm text-green-600 hover:text-green-500 focus:outline-none focus:underline"
        onClick={(e) => e.preventDefault()} // Placeholder
      >
        Forgot password?
      </a>
    </div>
  );
}