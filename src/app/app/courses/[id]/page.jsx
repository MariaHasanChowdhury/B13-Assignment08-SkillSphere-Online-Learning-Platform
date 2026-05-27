import courses from "@/data/courses.json";
import ProtectedRoute from "@/lib/ProtectedRoute";

export default function CourseDetails({ params }) {
  const course = courses.find((c) => c.id == params.id);

  return (
    <ProtectedRoute>
      <div className="max-w-5xl mx-auto py-20 px-4">
        <img src={course.image} className="rounded-xl mb-8" />

        <h1 className="text-5xl font-bold">{course.title}</h1>
        <p>{course.description}</p>
      </div>
    </ProtectedRoute>
  );
}