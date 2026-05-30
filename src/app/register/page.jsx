"use client";

import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAuth } from "@/providers/AuthProvider";

export default function RegisterPage() {
  const router = useRouter();
  const { login } = useAuth();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    if (!name || !email || !password) {
      toast.error("All fields are required");
      return;
    }

    const newUser = {
      name,
      email,
      photo:
        photo ||
        "https://i.ibb.co/4pDNDk1/avatar.png",
    };

    login(newUser);

    toast.success("Registration Successful");
    router.push("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <form
        onSubmit={handleRegister}
        className="bg-slate-800 p-10 rounded-2xl w-full max-w-md shadow-xl"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">
          Register
        </h1>

        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Full Name
          </label>

          <input
            name="name"
            type="text"
            placeholder="Enter your full name"
            className="input input-bordered w-full text-black"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Email Address
          </label>

          <input
            name="email"
            type="email"
            placeholder="example@gmail.com"
            className="input input-bordered w-full text-black"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Profile Photo URL
          </label>

          <input
            name="photo"
            type="text"
            placeholder="https://example.com/photo.jpg"
            className="input input-bordered w-full text-black"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-medium">
            Password
          </label>

          <input
            name="password"
            type="password"
            placeholder="Minimum 6 characters"
            className="input input-bordered w-full text-black"
          />
        </div>

        <button className="btn btn-primary w-full">
          Register
        </button>

        <p className="mt-6 text-center">
          Already have an account?
          <Link
            href="/login"
            className="text-indigo-400 ml-2"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}