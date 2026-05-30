"use client";

import Link from "next/link";
import { useAuth } from "../providers/AuthProvider";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <div className="navbar bg-slate-900 px-4 md:px-8">
      {/* Left Side */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-800 rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/courses">Courses</Link>
            </li>

            <li>
              <Link href="/profile">Profile</Link>
            </li>

            {!user && (
              <>
                <li>
                  <Link href="/login">Login</Link>
                </li>

                <li>
                  <Link href="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-indigo-400"
        >
          SkillSphere
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/courses">Courses</Link>
          </li>

          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end gap-3">
        {user ? (
          <>
            <img
              src={
                user.photo ||
                "https://i.ibb.co/4pDNDk1/avatar.png"
              }
              className="w-10 h-10 rounded-full object-cover"
              alt="user"
            />

            <button
              onClick={logout}
              className="btn btn-sm btn-primary"
            >
              Logout
            </button>
          </>
        ) : (
          <div className="hidden lg:flex gap-3">
            <Link
              href="/login"
              className="btn btn-sm"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="btn btn-sm btn-primary"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}