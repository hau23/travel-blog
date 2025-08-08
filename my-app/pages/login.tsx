'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    // Simulated login (replace this with actual backend call)
    if (result?.ok) {
      router.push('/account'); // redirect after login
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="flex items-center justify-center flex-col col-span-6 bg-taupe-50 min-h-screen">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm border border-taupe-200">
        <h2 className="text-3xl font-bold mb-6 text-center text-taupe-900">Welcome Back</h2>

        {error && <p className="text-red-500 text-sm mb-4 bg-red-50 p-3 rounded-lg">{error}</p>}

        <label className="block mb-2 text-sm font-medium text-taupe-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-taupe-300 rounded-lg mb-4 focus:ring-2 focus:ring-taupe-500 focus:border-taupe-500 transition-colors"
          placeholder="you@example.com"
          required
        />

        <label className="block mb-2 text-sm font-medium text-taupe-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-taupe-300 rounded-lg mb-6 focus:ring-2 focus:ring-taupe-500 focus:border-taupe-500 transition-colors"
          placeholder="••••••••"
          required
        />

        <button
          type="submit"
          className="w-full bg-taupe-900 text-taupe-50 py-3 rounded-lg hover:bg-taupe-700 transition-colors font-semibold"
        >
          Log In
        </button>
        
        <div className="text-center mt-6">
          <p className="text-sm text-taupe-600">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="text-taupe-700 hover:text-taupe-900 font-medium underline">
              Register here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
