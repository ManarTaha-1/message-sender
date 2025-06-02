import { createFileRoute, redirect } from '@tanstack/react-router'
import { useAuth } from '../contexts/AuthContext'

export const Route = createFileRoute('/')({
  beforeLoad: () => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
    if (!isAuthenticated) {
      throw redirect({
        to: '/login',
      })
    }
  },
  component: HomePage,
})

function HomePage() {
  const { logout } = useAuth()

  return (
    <div className="px-4 py-8">
      <div className="">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 text-center mx-auto">
            Welcome to Message Sender
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Hello, developer</span>
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors cursor-pointer">
              Logout
            </button>
          </div>
        </header>
      </div>
    </div>
  )
}
