import './globals.css'
import Header from '../components/Header'

export const metadata = {
  title: 'Sachini — Portfolio',
  description: 'Portfolio of Sachini Kalansooriya'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0f1724] text-white">
        <Header />

        <main className="min-h-[calc(100vh-80px)]">{children}</main>
      </body>
    </html>
  )
}
