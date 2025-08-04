//show account information
'use client'; 
import { useSession } from "next-auth/react";

/*
type User = {
  name: string;
  email: string;
  username: string;
  birthday: string;
};

export default function AccountPage() 
  const [user, setUser] = useState<User | null>(null);
  const [message, setMessage] = useState('');

  const fetchUser = async () => {
    const res = await fetch('/api/register');
    if (res.ok) {
      const data = await res.json();
      setUser(data);
      setMessage('User data fetched successfully!');
    } else {
      setMessage('Failed to fetch user data.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center">Account Information</h2>
        {message && <p className="text-center text-sm">{message}</p>}
        <button onClick={fetchUser} className="w-full bg-blue-500 text-white p-2 rounded">
          Fetch User Data
        </button>
        {user && (
          <div className="mt-4">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Birthday:</strong> {new Date(user.birthday).toLocaleDateString()}</p>
          </div>
        )}
      </div>
    </div>
  );
}
*/

export default function AccountPage() {
  const { data: session, status } = useSession()

  const paddedId = session?.user?.id
  ? String(session.user.id).padStart(6, '0') 
  : '000000';

  if (status === 'loading') return <p>Loading...</p>
  if (!session) return <p>You are not logged in</p>

  return (
    <div>
      <h1>Welcome, {session.user?.name}</h1>
      <p>Email: {session.user?.email}</p>
      <p>User ID: {paddedId}</p>
      <p>Post: {session.post?.post}</p>
    </div>

  )
}

