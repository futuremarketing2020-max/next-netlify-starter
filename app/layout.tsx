import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Me vs Me UC - Customer Dashboard',
  description: 'Customer portal for Me vs Me UC resources',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
