"use client";

import Link from "next/link";
import { useAuth } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      toast.error("All fields are required");
      return;
    }

    const user = {
      name: "Demo User",
      email,
      photo: "https://i.ibb.co/4pDNDk1/avatar.png",
    };

    login(user);

    toast.success("Login Successful");

    router.push("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <form
        onSubmit={handleLogin}
        className="bg-slate-800 p-10 rounded-2xl w-full max-w-md"
      >
        <h1 className="text-4xl font-bold mb-6 text-center">
          Login
        </h1>

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="input input-bordered w-full mb-4"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="input input-bordered w-full mb-4"
        />

        <button className="btn btn-primary w-full">
          Login
        </button>

        <button
          type="button"
          onClick={() =>
             toast("Google Login Coming Soon 🚀")
          }
          className="btn btn-outline w-full mt-4"
        >
          Continue with Google
        </button>

        <p className="mt-4 text-center">
          New here?
          <Link
            href="/register"
            className="text-indigo-400 ml-2"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}