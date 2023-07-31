import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import {ModalProvider} from "@/components/modal-provider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tunai',
  description: 'Tunai is a simple, fast, secure and Turkish way to use ai.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
            <ModalProvider />
            {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
