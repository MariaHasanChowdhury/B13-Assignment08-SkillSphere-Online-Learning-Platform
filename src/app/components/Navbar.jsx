"use client";

import Link from "next/link";
import { useAuth } from "@/providers/AuthProvider";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <div className="navbar bg-slate-900 px-8">
      <Link href="/" className="text-xl text-indigo-400">
        SkillSphere
      </Link>

      <div className="flex gap-4 items-center">
        <Link href="/">Home</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/profile">Profile</Link>

        {user ? (
          <>
            <img
              src={user.photo || "https://i.ibb.co/placeholder.png"}
              className="w-8 h-8 rounded-full"
              alt="user"
            />
            <button onClick={logout} className="btn btn-sm">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </>
        )}
      </div>
    </div>
  );
}