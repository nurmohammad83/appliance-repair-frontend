import './globals.css'
import type { Metadata } from 'next'
import Providers from './lib/Providers'
import AppFooter from '@/components/view/AppFooter/AppFooter'

export const metadata: Metadata = {
  title: 'ProTechFixers',
  description: 'Created by Nur',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <AppFooter />
        </Providers>
      </body>
    </html>
  )
}
