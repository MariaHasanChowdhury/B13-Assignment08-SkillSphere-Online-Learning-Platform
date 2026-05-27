"use client";

import { useAuth } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = {
      name: "Demo User",
      email: e.target.email.value,
      photo: "",
    };

    login(user);
    toast.success("Login Successful");
    router.push("/");
  };

  return (
    <form onSubmit={handleLogin}>
      <input name="email" className="input" placeholder="Email" />
      <input name="password" className="input" placeholder="Password" />
      <button className="btn btn-primary">Login</button>
    </form>
  );
}