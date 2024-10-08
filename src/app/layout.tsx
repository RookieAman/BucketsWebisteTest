import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '900'],
  style: ['normal'],
  variable: '--font-montserrat',
})
const champBlack = localFont({
  src: [
    {
      path: '../../public/fonts/Champ-Black.ttf',
      weight: '700',
    },
  ],
  variable: '--font-champBlack',
})

export const metadata: Metadata = {
  title: 'Buckets Chocolate',
  description: 'Coming soon',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${montserrat.variable} ${champBlack.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
