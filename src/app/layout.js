import './globals.css'
import { Inter } from 'next/font/google'
import Header from "./components/Header"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Oh my food',
  description: 'Randomly generate recipes based on the products in your fridge',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
        <body className={inter.className}>
          <div className='flex flex-col min-h-screen'>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </body>
    </html>
  )
}
