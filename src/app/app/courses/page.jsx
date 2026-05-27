'use client'

import { useState } from 'react'
import courses from '@/data/courses.json'
import CourseCard from '@/components/CourseCard'

const CoursesPage = () => {
  const [search, setSearch] = useState('')

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase())
  )
   return (
    <div className="max-w-7xl mx-auto py-20 px-4">
      <h1 className="text-5xl font-bold mb-10">All Courses</h1>

      <input
        type="text"
        placeholder="Search Course"
        className="input input-bordered w-full mb-10"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="grid md:grid-cols-3 gap-8">
        {filteredCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}

export default CoursesPage