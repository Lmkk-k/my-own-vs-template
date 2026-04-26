import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Footer from './Footer'

export default function DashboardLayout({ children, links = [] }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar links={links} />
        <main className="flex-1 px-6 py-8 overflow-auto">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}