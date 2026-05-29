import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-7xl font-bold text-indigo-400">
        404
      </h1>

      <p className="mt-4 text-xl text-gray-300">
        Oops! Page Not Found
      </p>

      <p className="mt-2 text-gray-400">
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="btn btn-primary mt-8"
      >
        Go Home
      </Link>
    </div>
  );
}