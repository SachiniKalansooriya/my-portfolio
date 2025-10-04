import './globals.css'
import { Cinzel } from 'next/font/google'

const cinzel = Cinzel({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cinzel'
})

export const metadata = {
  title: 'Sachini — Portfolio',
  description: 'Portfolio of Sachini Kalansooriya'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-[#0f1724] text-white ${cinzel.variable}`}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
