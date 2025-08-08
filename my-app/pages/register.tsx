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
      <div className="min-h-screen flex items-center justify-center col-span-6 bg-taupe-50">
         <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-6 border border-taupe-200"
         >
            <h2 className="text-3xl font-bold text-center text-taupe-900">Join TravelTales</h2>

            {message && (
               <p className={`text-center text-sm p-3 rounded-lg ${
                  message.includes('🎉') 
                     ? 'bg-green-50 text-green-700' 
                     : 'bg-red-50 text-red-700'
               }`}>
                  {message}
               </p>
            )}

            <label className="block">
               <span className="text-sm font-medium text-taupe-700">Name</span>
               <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full border border-taupe-300 p-3 rounded-lg focus:ring-2 focus:ring-taupe-500 focus:border-taupe-500 transition-colors"
                  required
               />
            </label>
            <label className="block">
               <span className="text-sm font-medium text-taupe-700">Username</span>
               <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 w-full border border-taupe-300 p-3 rounded-lg focus:ring-2 focus:ring-taupe-500 focus:border-taupe-500 transition-colors"
                  required
               />
            </label>
            <label className="block">
               <span className="text-sm font-medium text-taupe-700">Password</span>
               <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 w-full border border-taupe-300 p-3 rounded-lg focus:ring-2 focus:ring-taupe-500 focus:border-taupe-500 transition-colors"
                  required
               />
            </label>
            <label className="block">
               <span className="text-sm font-medium text-taupe-700">Email</span>
               <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full border border-taupe-300 p-3 rounded-lg focus:ring-2 focus:ring-taupe-500 focus:border-taupe-500 transition-colors"
                  required
               />
            </label>
            <label className="block">
               <span className="text-sm font-medium text-taupe-700">Birthday</span>
               <input
                  type="date"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  className="mt-1 w-full border border-taupe-300 p-3 rounded-lg focus:ring-2 focus:ring-taupe-500 focus:border-taupe-500 transition-colors"
                  required
               />
            </label>
            
            <button
               type="submit"
               className="w-full bg-taupe-900 text-taupe-50 p-3 rounded-lg hover:bg-taupe-700 transition-colors font-semibold"
            >
               Create Account
            </button>
         </form>
      </div>
   );
}
