"use client";

import Link from "next/link";
import { useAuth } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
  const { user } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto py-20 text-center px-4">
      <img
        src={
          user.photo ||
          "https://i.ibb.co/4pDNDk1/avatar.png"
        }
        alt={user.name}
        className="w-32 h-32 rounded-full mx-auto object-cover"
      />

      <h1 className="text-3xl font-bold mt-4">
        {user.name}
      </h1>

      <p className="text-gray-400 mt-2">
        {user.email}
      </p>

      <Link
        href="/update-profile"
        className="btn btn-primary mt-6"
      >
        Update Profile
      </Link>
    </div>
  );
}