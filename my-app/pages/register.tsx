'use client';

import { useState } from 'react';

export default function RegisterPage() {
   const [name, setName] = useState('');
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [email, setEmail] = useState('');
   const [birthday, setBirthday] = useState('');
   const [message, setMessage] = useState('');

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      const res = await fetch('/api/register', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ name, username, password, email,  birthday }),
      });

      if (res.ok) {
         setMessage('🎉 Registration successful!');
         setName('');
         setUsername('');
         setPassword('');
         setEmail('');
         setBirthday('');
      } else {
         const error = await res.json();
         setMessage(`❌ Error: ${error.error}`);
      }
   };

   return (
      <div className="min-h-screen flex items-center justify-center col-span-6 bg-gray-100">
         <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4"
         >
            <h2 className="text-2xl font-bold text-center">Register</h2>

            {message && <p className="text-center text-sm">{message}</p>}

            <label className="block">
               <span className="text-sm font-medium">Name</span>
               <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full border p-2 rounded"
                  required
               />
            </label>
            <label className="block">
               <span className="text-sm font-medium">Username</span>
               <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 w-full border p-2 rounded"
                  required
               />
            </label>
            <label className="block">
               <span className="text-sm font-medium">Password</span>
               <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 w-full border p-2 rounded"
                  required
               />
            </label>
            <label className="block">
               <span className="text-sm font-medium">Email</span>
               <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full border p-2 rounded"
                  required
               />
            </label>
            <label className="block">
               <span className="text-sm font-medium">Birthday</span>
               <input
                  type="date"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  className="mt-1 w-full border p-2 rounded"
                  required
               />
               <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
               >
                  Register
               </button>
            </label>
         </form>
      </div>
   );
}
