"use client";

import React, { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [loading, setLoading] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Check if passwords match
    if (name === "password" || name === "confirmPassword") {
      const pwd = name === "password" ? value : formData.password;
      const confirmPwd =
        name === "confirmPassword" ? value : formData.confirmPassword;
      setPasswordsMatch(pwd === confirmPwd || confirmPwd === "");
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!formData.agreeToTerms) {
      setError("Please agree to the terms and conditions");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Signup failed");
        return;
      }

      setSuccess("Account created successfully! Redirecting to login...");
      
      // Redirect to login after success
      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error("Signup error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-14 px-4 lg:px-0">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column - Branding */}
          <div className="hidden md:flex w-full bg-linear-to-br from-green-600 to-green-800 flex-col justify-center items-center text-white">
            {/* Lottie Animation */}
            <div className="w-full">
              <DotLottieReact
                src="https://lottie.host/9d56db40-b969-4f34-b3e3-04f63080a3fa/wQdSpHYhCt.lottie"
                loop
                autoplay
              />
            </div>

            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Join Us</h2>
              <p className="text-green-100 text-lg mb-8">
                Start your journey with our recruitment platform
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🚀</span>
                  <p className="text-green-100">Quick and easy registration</p>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🔒</span>
                  <p className="text-green-100">Secure and private account</p>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">💼</span>
                  <p className="text-green-100">
                    Build your professional profile
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            {/* Logo */}
            <div className="mb-8">
              <Image
                src="/img/logo.png"
                alt="Pointman Logo"
                width={100}
                height={100}
                className="h-12 w-auto"
              />
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Create Account
            </h1>
            <p className="text-gray-600 mb-8">
              Join our recruitment community today
            </p>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}

            {success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent ${
                    passwordsMatch
                      ? "border-gray-300 focus:ring-green-500"
                      : "border-red-300 focus:ring-red-500"
                  }`}
                  required
                />
                {!passwordsMatch && formData.confirmPassword && (
                  <p className="text-red-600 text-sm mt-1">
                    Passwords do not match
                  </p>
                )}
              </div>

              {/* Terms */}
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="mt-1 cursor-pointer"
                  required
                />
                <span className="ml-2 text-sm text-gray-600">
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-green-600 hover:text-green-700 font-semibold"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-green-600 hover:text-green-700 font-semibold"
                  >
                    Privacy Policy
                  </a>
                </span>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || !passwordsMatch}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-200 disabled:opacity-50"
              >
                {loading ? "Creating Account..." : "Sign Up"}
              </button>
            </form>

            <p className="text-center text-gray-600 text-sm mt-8">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-green-600 hover:text-green-700 font-semibold"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
