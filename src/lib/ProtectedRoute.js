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
    } else {
      setLoading(false);
    }
  }, [user, router]);

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return null;
  }

  return children;
}