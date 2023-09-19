import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <h1 className='p-4 bg-secondary text-[40px] text-contrast'>home page</h1>
  )
}
