import './globals.css'
import { Inter, Cinzel, Libre_Baskerville, Satisfy } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter'
})

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cinzel'
})

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-libre-baskerville'
})

const satisfy = Satisfy({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-satisfy'
})

export const metadata = {
  title: 'Sachini Kalansooriya',
  description: 'Portfolio of Sachini Kalansooriya'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-[#0f1724] text-white ${inter.variable} ${cinzel.variable} ${libreBaskerville.variable} ${satisfy.variable} font-sans`}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
