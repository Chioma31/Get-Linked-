import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <h1 className='p-4 bg-secondary text-[30px] text-accent'>This is home</h1>
  )
}