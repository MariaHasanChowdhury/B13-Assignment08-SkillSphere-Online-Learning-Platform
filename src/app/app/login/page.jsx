'use client'

import Link from 'next/link'
import toast from 'react-hot-toast'

const LoginPage = () => {
  const handleLogin = e => {
    e.preventDefault()

    toast.success('Login Successful')
  }
   return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleLogin}
        className="bg-slate-800 p-10 rounded-xl w-[400px]"
      >
        <h1 className="text-4xl font-bold mb-6 text-center">
          Login
        </h1>

        <input
          type="email"
           placeholder="Email"
          className="input input-bordered w-full mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full mb-4"
        />
         <button className="btn btn-primary w-full">
          Login
        </button>

        <p className="mt-4 text-center">
          New Here?
          <Link className="text-indigo-400 ml-2" href="/register">
            Register
          </Link>
        </p>
      </form>
    </div>
     )
}

export default LoginPage
