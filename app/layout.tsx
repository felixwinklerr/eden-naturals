import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Eden Protein - Protein Wie die Natur es Meinte',
  description: 'Nur 2 Zutaten • Löst sich ohne Shaker • Keine E-Nummern. Premium Protein aus Luxemburg.',
  keywords: 'Protein, Whey, Vegan Protein, Clean Protein, Luxemburg',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={inter.variable} suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  )
}
