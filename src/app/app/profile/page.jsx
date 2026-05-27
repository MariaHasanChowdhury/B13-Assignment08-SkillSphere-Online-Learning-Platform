"use client";

import { useAuth } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/login");
  }, [user]);

  if (!user) return null;

  return (
    <div className="max-w-3xl mx-auto py-20 text-center">
      <img
        src={user.photo || "https://i.ibb.co/placeholder.png"}
        className="w-32 h-32 rounded-full mx-auto"
      />

      <h1 className="text-3xl mt-4">{user.name}</h1>
      <p>{user.email}</p>

      <a href="/update-profile" className="btn btn-primary mt-5">
        Update Profile
      </a>
    </div>
  );
}