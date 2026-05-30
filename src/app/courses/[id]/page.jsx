import courses from "@/data/courses.json";
import ProtectedRoute from "@/lib/ProtectedRoute";

export default async function CourseDetails({ params }) {
  const { id } = await params;

  const course = courses.find(
    (c) => c.id === Number(id)
  );

  if (!course) {
    return (
      <h1 className="text-center text-3xl py-20">
        Course Not Found
      </h1>
    );
  }

  return (
    <ProtectedRoute>
      <div className="max-w-5xl mx-auto py-20 px-4">
        <img
          src={course.image}
          alt={course.title}
          className="rounded-xl mb-8 w-full"
        />

        <h1 className="text-5xl font-bold mb-4">
          {course.title}
        </h1>

        <p className="mb-6">
          {course.description}
        </p>

        <div className="space-y-2 mb-10">
          <p>Instructor: {course.instructor}</p>
          <p>Duration: {course.duration}</p>
          <p>Level: {course.level}</p>
          <p>Rating: {course.rating}</p>
        </div>

        <h2 className="text-3xl font-bold mb-4">
          Course Curriculum
        </h2>

        <ul className="list-disc ml-6 space-y-2">
          <li>Introduction</li>
          <li>Core Fundamentals</li>
          <li>Real Project Building</li>
          <li>Deployment</li>
        </ul>
      </div>
    </ProtectedRoute>
  );
}