import Link from 'next/link'

const CourseCard = ({ course }) => {
  return (
    <div className="card bg-slate-800 shadow-xl">
      <figure>
        <img src={course.image} alt={course.title} />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{course.title}</h2>
         <p>Instructor: {course.instructor}</p>
        <p>Rating: {course.rating}</p>

        <div className="card-actions justify-end">
          <Link
            href={`/courses/${course.id}`}
            className="btn btn-primary"
          >
            View Details
          </Link>
        </div>
      </div>
        </div>
  )
}

export default CourseCard