import Image from 'next/image'
import NavBar from '@/components/navbar'
import Link from 'next/link'


export default function Home() {
  return (
    <>
    
      <div  className=" w-auto h-auto lg:bg-[url('/bg.png')] bg-[url('/bg.png')] leading-[23px]  bg-cover"> 

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

      <div className='border-b   border-[#4A2672]' />

      <div  className=" w-auto h-auto lg:bg-[url('/bg.png')] bg-[url('/bg.png')] leading-[23px]  bg-cover">

        <div className=' flex gap-40 justify-evenly pt-14 items-center  px-6 pb-5 2xl:pr-60 2xl:pl-[300px]'>

          <Image
            className=" "
            height={400}
            width={480}
            src="/intro.png"
            alt=" intro image"
          />

          <div className=' text-white w-[520px] '>

            <p className=' font-[700]  text-[35px] leading-[43px] '>
              Introduction to getlinked <div className='text-[#D434FE]'>tech Hackathon 1.0</div>
            </p>
            <p className=' font-[400] mt-5  text-[16px] leading-[28px] '>
              Our tech hackathon is a melting pot of visionaries, and its purpose is as
              clear as day: to shape the future. Whether you're a coding genius, a 
              design maverick, or a concept wizard, you'll have the chance to transform 
              your ideas into reality. Solving real-world problems, pushing the boundaries
              of technology, and creating solutions that can change the world,
              that's what we're all about!
            </p>
          </div>
        </div>
      </div>

      <div className='border-b   border-[#4A2672]' />

      <div  className=" w-auto h-auto lg:bg-[url('/bg.png')] bg-[url('/bg.png')] leading-[23px]  bg-cover">

        <div className=' flex gap-40 justify-evenly  items-center  px-6 2xl:px-56'>

          <div className=' text-white w-[520px] '>

            <p className=' font-[700]  text-[35px] leading-[43px] '>
              Rules and  <div className='text-[#D434FE]'>Guidelines</div>
            </p>
            <p className=' font-[400] mt-5  text-[16px] leading-[28px] '>
              Our tech hackathon is a melting pot of visionaries, and its purpose is as
              clear as day: to shape the future. Whether you're a coding genius, a 
              design maverick, or a concept wizard, you'll have the chance to transform 
              your ideas into reality. Solving real-world problems, pushing the boundaries
              of technology, and creating solutions that can change the world,
              that's what we're all about!
            </p>

          </div>

          <Image
            className=" "
            height={400}
            width={600}
            src="/rules.png"
            alt=" rules image"
          />

        </div>
        
      </div>

      <div className='border-b   border-[#4A2672]' />

      <div  className=" w-auto h-auto lg:bg-[url('/bg.png')] bg-[url('/bg.png')] leading-[23px]  bg-cover">

        <div className=' flex gap-40 pt-14 pb-20 justify-evenly  items-center  px-6 2xl:px-56'>

          <Image
            className=" "
            height={400}
            width={600}
            src="/judging.png"
            alt=" rules image"
          />

          <div className=' text-white w-[520px] '>

            <p className=' font-[700]  text-[35px] leading-[43px] '>
            Judging Criteria <div className='text-[#D434FE]'>Key attributes </div>
            </p>

            <p className=' font-[500] mt-5  text-[14px] leading-[28px] '>
              <span className='text-[#FF26B9] font-[700] pr-1  text-[16px] leading-[28px]'>
                Innovation and Creativity :
              </span>
                Evaluate the uniqueness and creativity of the
                solution. Consider whether it addresses a real-world problem in a novel 
                way or introduces innovative features.
            </p>

            <p className=' font-[500] mt-5  text-[14px] leading-[28px] '>
              <span className='text-[#FF26B9] font-[700] pr-1  text-[16px] leading-[28px]'>
                Functionality: 
              </span>
                Assess how well the solution works. Does it perform its 
                intended functions effectively and without major issues? Judges would
                consider the completeness and robustness of the solution.
            </p>

            <p className=' font-[500] mt-5  text-[14px] leading-[28px] '>
              <span className='text-[#FF26B9] font-[700] pr-1  text-[16px] leading-[28px]'>
                Impact and Relevance:
              </span>
                Determine the potential impact of the solution 
                in the real world. Does it address a significant problem, and is it relevant 
                to the target audience? Judges would assess the potential social, 
                economic, or environmental benefits.
            </p>

            <p className=' font-[500] mt-5  text-[14px] leading-[28px] '>
              <span className='text-[#FF26B9] font-[700] pr-1  text-[16px] leading-[28px]'>
                Technical Complexity: 
              </span>
                Evaluate the technical sophistication of the solution. 
                Judges would consider the complexity of the code, the use of advanced 
                technologies or algorithms, and the scalability of the solution.
            </p>

            <p className=' font-[500] mt-5  text-[14px] leading-[28px] '>
              <span className='text-[#FF26B9] font-[700] pr-1  text-[16px] leading-[28px]'>
                Adherence to Hackathon Rules:  
              </span>
                Judges will Ensure that the team adhered 
                to the rules and guidelines of the hackathon, including deadlines, use of 
                specific technologies or APIs, and any other competition-specific requirements.
            </p>

            <div className='pt-14'>

              <Link href="/readmore" className="bg-gradient-to-r from-[#FE34B9] to-[#903AFF] rounded-[4px] font-[400] text-[16px]  text-white px-14  py-[12px]">
                Read more
              </Link>

            </div>

          </div>

        </div>
        
      </div>

      <div className='border-b   border-[#4A2672]' />

      <div  className=" w-auto h-auto lg:bg-[url('/bg.png')] bg-[url('/bg.png')] leading-[23px]  bg-cover">

        <div className=' flex gap-40 pt-14 pb-20 justify-evenly  items-center  px-6 2xl:px-56'>

          <div className=' text-white w-[520px] '>

            <p className=' font-[700]  text-[35px] leading-[43px] '>
            Frequently Ask <div className='text-[#D434FE]'>Question </div>
            </p>

            <p className=' font-[400] mt-5  text-[16px] leading-[28px] '>
              We got answers to the questions that you might
              want to ask about getlinked Hackathon 1.0
            </p>

            <div className=' w-[393px]'>

              <p className='border-b pb-2 border-[#D434FE] font-[500] mt-5  text-[14px] leading-[28px] '>
                Can I work on a project I started before the hackathon?
                <span className='text-[#FF26B9] font-[500] pl-6  text-[20px] '>
                  +
                </span>
              </p>

              <p className='border-b pb-2 border-[#D434FE] font-[500] mt-5  text-[14px] leading-[28px] '>
                What happens if I need help during the hackathon?
                <span className='text-[#FF26B9] font-[500] pl-[51px]  text-[20px] '>
                  +
                </span>
              </p>

              <p className='border-b pb-2 border-[#D434FE] font-[500] mt-5  text-[14px] leading-[28px] '>
                What happens if I don't have an idea for a project?
                <span className='text-[#FF26B9] font-[500] pl-[54px]    text-[20px] '>
                  +
                </span>
              </p>

              <p className='border-b pb-2 border-[#D434FE] font-[500] mt-5  text-[14px] leading-[28px] '>
                Can I join a team or do I have to come with one?
                <span className='text-[#FF26B9] font-[500] pl-[69px]    text-[20px] '>
                  +
                </span>
              </p>

              <p className='border-b pb-2 border-[#D434FE] font-[500] mt-5  text-[14px] leading-[28px] '>
                What happens after the hackathon ends
                <span className='text-[#FF26B9] font-[500] pl-[118px]      text-[20px] '>
                  +
                </span>
              </p>

              <p className='border-b pb-2 border-[#D434FE] font-[500] mt-5  text-[14px] leading-[28px] '>
                Can I work on a project I started before the hackathon?
                <span className='text-[#FF26B9] font-[500] pl-6  text-[20px] '>
                  +
                </span>
              </p>

            </div>

          </div>

          <Image
            className=" "
            height={400}
            width={600}
            src="/faq.png"
            alt=" rules image"
          />

        </div>
        
      </div>

      <div className='border-b   border-[#4A2672]' />

      <div  className=" w-auto h-auto lg:bg-[url('/bg.png')] bg-[url('/bg.png')] leading-[23px]  bg-cover">

        <div className=' flex items-center flex-col text-white'>

        <p>Timeline</p>
        <p>Here is the breakdown of the time we anticipate using for the upcoming event.</p>

        </div>
        <div>@media only screen and </div>
        
      </div>

    </>
  )
}
