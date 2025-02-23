export default function Footer() {
  return (
    <footer className="bg-gray-900 py-6 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">© {new Date().getFullYear()} Addy. All rights reserved.</p>
      </div>
    </footer>
  )
}
