import AuthContext from '@/contexts/auth-context'
import './globals.css'
import React from 'react'
import TanstackQueryContext from '@/contexts/tanstack-query-context'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <TanstackQueryContext>
        <AuthContext>
          <body className="text-gray-900 bg-white dark:bg-gray-800 dark:text-gray-100">
            {children}
          </body>
        </AuthContext>
      </TanstackQueryContext>
    </html>
  )
}
