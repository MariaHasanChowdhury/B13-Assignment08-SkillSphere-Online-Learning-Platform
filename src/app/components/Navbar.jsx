'use client'

import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="navbar bg-slate-900 px-8">
      <div className="flex-1">
        <Link href="/" className="text-2xl font-bold text-indigo-400">
          SkillSphere
        </Link>
      </div>
       <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/profile">My Profile</Link>
        <Link className="btn btn-primary" href="/login">
          Login
        </Link>
      </div>
    </div>
  )
}

export default Navbar