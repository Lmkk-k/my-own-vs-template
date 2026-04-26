import Navbar from './Navbar'
import Footer from './Footer'

export default function PageWrapper({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 px-6 py-8 max-w-7xl mx-auto w-full">
        {children}
      </main>
      <Footer />
    </div>
  )
}