import Image from 'next/image'
import NavBar from '@/components/navbar'
import Link from 'next/link'


export default function Home() {
  return (
    <div  className=" w-auto h-auto lg:bg-[url('/bg.png')] bg-[url('/bg.png')] leading-[23px] bg-cover"> 

    <NavBar />

    <div className='border-b md:py-[62px] py-[58px]  border-[#4A2672]' />

    <div className='2xl:pr-32 px-6 pt-9 flex flex-col items-end justify-end '>

      <Image
        className=""
        height={400}
        width={700}
        src="/hero-text.svg"
        alt="title"
      />

      <div>
        <Image
          className="hidden lg:block"
          height={20}
          width={255}
          src="/pink-line.svg"
          alt="title"
        />
        <Image
          className="hidden lg:hidden sm:block"
          height={20}
          width={250}
          src="/pink-line.svg"
          alt="title"
        />
        <Image
          className=" sm:hidden lg:hidden"
          height={20}
          width={127}
          src="/pink-line.svg"
          alt="title"
        />
      </div>

    </div>

    <div className='flex  flex-col md:flex-row  justify-between pt-6'>

      <div className='px-6  2xl:pl-56   flex flex-col md:items-start items-center justify-center '>

        <Image
          className="hidden md:block"
          height={400}
          width={700}
          src="/title.svg"
          alt="title"
        />
        <Image
          className=" md:hidden"
          height={400}
          width={700}
          src="/titleM.svg"
          alt="title"
        />

        <div className='font-[400] text-center md:text-left py-2 texxt-[13px] md:text-[20px] leading-[33.5px] text-white'>
          Participate in getlinked tech Hackathon 2023 stand <br className='hidden md:block'/> a chance to win a Big prize
        </div>

        <Link href="/signup" className="bg-gradient-to-r from-[#FE34B9] to-[#903AFF] rounded-[4px] font-[400] text-[16px]  text-white px-14 mt-7 py-[12px]">
          Register
        </Link>

        <div className=' md:mt-24 mt-6 mb-9 '>

          <Image
            className=""
            height={400}
            width={300}
            src="/time.svg"
            alt="title"
          />

        </div>

      </div>

      <div className='hidden md:block px-6 '>

        <Image
          className="mix-blend-luminosity"
          height={400}
          width={800}
          src="/man2.svg"
          alt="title"
        />
        <div className=' absolute top-[600px] md:top-[230px] md:ml-[70px]'>

          <Image
            className=""
            height={400}
            width={632}
            src="/world-star.svg"
            alt="title"
          />

        </div>

      </div>

      <div className='md:hidden  -mt-6'>

        <Image
          className="mix-blend-plus-lighter"
          height={400}
          width={800}
          src="/man1.png"
          alt="title"
        />

      </div>


    </div>

    </div>
    
  )
}
