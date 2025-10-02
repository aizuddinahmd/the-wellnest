"use client";

import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Oops!</h1>
      <p>Sorry, something went wrong.</p>
      <Link href="/admin" className="mt-4 text-blue-600 underline">
        Go back home
      </Link>
    </div>
  );
}
