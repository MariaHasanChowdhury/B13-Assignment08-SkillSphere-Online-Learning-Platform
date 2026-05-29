'use client'

import Link from 'next/link'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/providers/AuthProvider'

const RegisterPage = () => {
  const router = useRouter()
  const { login } = useAuth()

  const handleRegister = (e) => {
    e.preventDefault()

    const name = e.target.name.value
    const email = e.target.email.value
    const photo = e.target.photo.value
    const password = e.target.password.value

    // simple validation
    if (!name || !email || !password) {
      toast.error("All fields are required")
      return
    }

    // fake register (because no backend yet)
    const newUser = { name, email, photo }

    login(newUser)

    toast.success('Registration Successful')

    router.push('/')
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleRegister}
        className="bg-slate-800 p-10 rounded-xl w-[400px]"
      >
        <h1 className="text-4xl font-bold mb-6 text-center">
          Register
        </h1>

        <input
          name="name"
          type="text"
          placeholder="Name"
          className="input input-bordered w-full mb-4"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="input input-bordered w-full mb-4"
        />

        <input
          name="photo"
          type="text"
          placeholder="Photo URL"
          className="input input-bordered w-full mb-4"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="input input-bordered w-full mb-4"
        />

        <button className="btn btn-primary w-full">
          Register
        </button>

        <p className="mt-4 text-center">
          Already have account?
          <Link className="text-indigo-400 ml-2" href="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  )
}

export default RegisterPage