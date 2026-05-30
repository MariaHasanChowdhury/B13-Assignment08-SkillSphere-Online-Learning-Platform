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

    if (!name) {
      toast.error("Name is required");
      return;
    }

    const updatedUser = {
      ...user,
      name,
      photo,
    };

    login(updatedUser);

    toast.success("Profile Updated Successfully");
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <form
        onSubmit={handleUpdate}
        className="bg-slate-800 p-10 rounded-2xl w-full max-w-md shadow-xl"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">
          Update Profile
        </h1>

        <div className="flex justify-center mb-6">
          <img
            src={
              photo ||
              "https://ui-avatars.com/api/?name=User"
            }
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-2 border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Full Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            placeholder="Enter your full name"
            className="input input-bordered w-full text-black"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-medium">
            Profile Photo URL
          </label>

          <input
            type="text"
            value={photo}
            onChange={(e) =>
              setPhoto(e.target.value)
            }
            placeholder="https://example.com/photo.jpg"
            className="input input-bordered w-full text-black"
          />
        </div>

        <button className="btn btn-primary w-full">
          Update Profile
        </button>
      </form>
    </div>
  );
}