import courses from '@/data/courses.json'

const CourseDetails = ({ params }) => {
  const course = courses.find(c => c.id == params.id)

  return (
    <div className="max-w-5xl mx-auto py-20 px-4">
      <img
        src={course.image}
        alt={course.title}
        className="rounded-xl mb-8"
      />

      <h1 className="text-5xl font-bold mb-4">
        {course.title}
      </h1>
      <p className="mb-4">{course.description}</p>

      <div className="space-y-2">
        <p>Instructor: {course.instructor}</p>
        <p>Duration: {course.duration}</p>
        <p>Level: {course.level}</p>
      </div>

      <div className="mt-10">
        <h2 className="text-3xl font-bold mb-4">
          Course Curriculum
        </h2>

        <ul className="space-y-3 list-disc ml-6">
          <li>Introduction</li>
          <li>Fundamentals</li>
          <li>Project Building</li>
          <li>Deployment</li>
        </ul>
      </div>
    </div>
  )
}

export default CourseDetails