import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import Button from '../ui/Button'

export default function Navbar() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate('/login')
  }

  return (
    <nav className="h-16 border-b border-gray-200 bg-white px-6 flex items-center justify-between">
      <Link to="/" className="text-lg font-bold text-indigo-600">
        MyApp
      </Link>

      <div className="flex items-center gap-6">
        <Link to="/" className="text-sm text-gray-600 hover:text-gray-900">Home</Link>
        {user && (
          <Link to="/dashboard" className="text-sm text-gray-600 hover:text-gray-900">Dashboard</Link>
        )}
      </div>

      <div className="flex items-center gap-3">
        {user ? (
          <>
            <span className="text-sm text-gray-500">{user.email}</span>
            <Button variant="outline" size="sm" onClick={handleSignOut}>Sign Out</Button>
          </>
        ) : (
          <Button size="sm" onClick={() => navigate('/login')}>Sign In</Button>
        )}
      </div>
    </nav>
  )
}