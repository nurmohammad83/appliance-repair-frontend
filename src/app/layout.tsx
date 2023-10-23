import './globals.css'
import type { Metadata } from 'next'
import AppFooter from '@/components/view/AppFooter/AppFooter'
import Providers from '@/app/lib/Providers'

export const metadata: Metadata = {
  title: 'ProTechFixers',
  description: 'Created by Nur Mohammad',
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
