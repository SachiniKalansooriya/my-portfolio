import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Sachini — Portfolio',
  description: 'Portfolio of Sachini Kalansooriya'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#f8f8ff] text-gray-900">
        <header className="sticky top-0 z-50 backdrop-blur-md border-b bg-black">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold">Sachini</div>
            <nav className="flex space-x-4">
              <Link href="/" className="px-4 py-2 rounded-md text-white hover:bg-gray-100 hover:text-gray-900">Home</Link>
              <Link href="/education" className="px-4 py-2 rounded-md text-white hover:bg-gray-100 hover:text-gray-900">Education</Link>
              <Link href="/skills" className="px-4 py-2 rounded-md text-white hover:bg-gray-100 hover:text-gray-900">Skills</Link>
              <Link href="/projects" className="px-4 py-2 rounded-md text-white hover:bg-gray-100 hover:text-gray-900">Projects</Link>
              <Link href="/contact" className="px-4 py-2 rounded-md text-white hover:bg-gray-100 hover:text-gray-900">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="min-h-[calc(100vh-80px)]">{children}</main>
      </body>
    </html>
  )
}
