import Link from "next/link";
export default function Login() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            type="submit"
            className="bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition"
          >
            Sign In
          </button>

          <p className="text-sm text-center mt-4">
            Don’t have an account?{" "}
            <Link href="/register" className="text-pink-500 hover:underline">
                Sign up
            </Link>
        </p>

        </form>
      </div>
    </main>
  );
}
