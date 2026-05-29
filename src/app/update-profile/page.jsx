"use client";

import { useState } from "react";
import { useAuth } from "@/providers/AuthProvider";
import toast from "react-hot-toast";

export default function UpdateProfile() {
  const { user, login } = useAuth();

  const [name, setName] = useState(user?.name || "");
  const [photo, setPhoto] = useState(user?.photo || "");

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedUser = { ...user, name, photo };
    login(updatedUser);

    toast.success("Profile Updated");
  };

  return (
    <form
      onSubmit={handleUpdate}
      className="max-w-md mx-auto py-20 space-y-4"
    >
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input input-bordered w-full"
        placeholder="Name"
      />

      <input
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
        className="input input-bordered w-full"
        placeholder="Photo URL"
      />

      <button className="btn btn-primary w-full">
        Update
      </button>
    </form>
  );
}