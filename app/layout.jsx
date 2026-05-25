import './globals.css'
import { Analytics } from '@vercel/analytics/next'

export const metadata = {
  title: 'Colborne Auto Detailing | Premium Mobile Detailing Halifax',
  description: 'Premium mobile auto detailing in Halifax, Nova Scotia. Professional detailing delivered to your home, workplace, or apartment.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
