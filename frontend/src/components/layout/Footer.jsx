export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-4">
      <p className="text-sm text-gray-400 text-center">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </p>
    </footer>
  )
}