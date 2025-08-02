"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to the PPM Tool</h1>
      <p className="mb-6 text-lg text-gray-600">
        Your central place for portfolio management
      </p>
      <Link href="/dashboard">
        <a className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
          Go to Dashboard
        </a>
      </Link>
    </main>
  );
}