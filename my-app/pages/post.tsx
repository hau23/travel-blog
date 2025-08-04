'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function PostPage() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
        credentials: 'include',
      })

      if (!res.ok) {
        const { error } = await res.json()
        throw new Error(error || 'Something went wrong')
      }

      // Redirect to home or clear form
      router.push('/') // or `router.refresh()` to stay on page
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Post a Travel Blog</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border p-2 rounded"
        />

        <textarea
          placeholder="Your travel story..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="border p-2 h-40 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Posting...' : 'Post Blog'}
        </button>

        {error && <p className="text-red-500">{error}</p>}
      </form>
    </main>
  )
}
