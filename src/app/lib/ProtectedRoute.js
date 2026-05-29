"use client";

import { useAuth } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }

    setLoading(false);
  }, [user, router]);

  // Loader show
  if (loading) {
    return <Loader />;
  }

  // if there is user the page will show
  return user ? children : null;
}