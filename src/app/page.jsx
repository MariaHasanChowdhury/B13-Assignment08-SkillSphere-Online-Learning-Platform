import Hero from "@/components/Hero";
import courses from "@/data/courses.json";
import CourseCard from "@/components/CourseCard";
import InstructorCard from "@/components/InstructorCard";
import LearningTips from "@/components/LearningTips";

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
      <section className="bg-slate-800 py-20 px-4">
        <div className="max-w-7xl mx-auto">
           <h2 className="text-3xl font-bold mb-10 text-center">
             📌 Learning Tips
          </h2>

          <LearningTips />
        </div>
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
      {/* Top Instructors */}
      <section className="bg-slate-800 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">
           🏆 Top Instructors
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
      <InstructorCard
        instructor={{
          name: "John Doe",
          skill: "Web Development",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
        }}
      />

     

      <InstructorCard
        instructor={{
          name: "Sarah Smith",
          skill: "UI/UX Design",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
        }}
      />

      <InstructorCard
        instructor={{
          name: "Alex Johnson",
          skill: "Marketing",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
        }}
      />

      <InstructorCard
        instructor={{
          name: "Michael Brown",
          skill: "Artificial Intelligence",
          image: "https://randomuser.me/api/portraits/men/68.jpg",
        }}
      />
    </div>
  </div>
</section>
    </div>
  );
}