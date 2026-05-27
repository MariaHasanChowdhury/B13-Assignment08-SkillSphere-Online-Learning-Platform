import Hero from "@/components/Hero";
import courses from "@/data/courses.json";
import CourseCard from "@/components/CourseCard";

export default function Home() {
  const topCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div>
      <Hero />

      {/* Popular Courses */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-6">🔥 Popular Courses</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {topCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Learning Tips */}
      <section className="bg-slate-800 py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">📌 Learning Tips</h2>
        <p>Study daily, build projects, practice consistently 🚀</p>
      </section>

      {/* Trending */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-6">🔥 Trending Courses</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {courses.slice(3, 6).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}