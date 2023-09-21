
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState,Fragment } from 'react';



const navigation = [
  { name: 'Timeline', href: '/', to: 'home' },
  { name: 'Overview', href: '/about', to: 'about' },
  { name: 'FAQs', href: '/info', to: 'create' },
  { name: 'Contact', href: '/help', to: 'help' },
];



function NavBar () {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpening = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };


  return (
    <div className="px-6 pb-5 2xl:px-56 top-0 z-40 fixed w-full">

      <nav className="flex pt-11  items-center   justify-between" aria-label="Global">

        <div className=" py-2" aria-label="Global">

          <a href="/" >
            <Image
              className=" "
              height={100}
              width={180}
              src="/logo.svg"
              alt=" Logo"
            />

          </a>

        </div>

        <div className="flex items-center lg:hidden">
          {/* <button
          className="flex flex-col h-12 w-12 border-2 border-black rounded justify-center items-center group"
          onClick={() => setIsOpen(!isOpen)}
          >
          <div  onClick={() => setMobileMenuOpen(true)}>
            <div className={`${genericHamburgerLine} ${
              isOpen
                  ? " rotate-45 translate-y-3  group-hover:opacity-100"
                  : " group-hover:opacity-100"
              }`}
            />
            <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : " group-hover:opacity-100"}`} />
            <div className={`${genericHamburgerLine} ${
              isOpen
                  ? "-rotate-45 -translate-y-3  group-hover:opacity-100"
                  : " group-hover:opacity-100"
              }`}
            />
          </div>
          
          </button> */}

          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <div className='text-black' onClick={handleOpening}>
              {mobileMenuOpen
            ? (<XMarkIcon className="h-18 w-10 text-[#fefefe]" aria-hidden="true" />)
            : (<Bars3Icon className="h-18 w-10 text-[#fefefe]" aria-hidden="true" />)}
          </div>
          </button>
        </div>

        <div className="hidden font-[400] text-[18px] lg:flex items-center text-lg lg:min-w-0 gap-7">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              to={item.to}
              activeClass="active"
              smooth
              offset={-100}
              duration={900}
              className="text-white m-2 p-2"
            >
              {item.name}
            </Link>
          ))}

          <Link href="/signup" className="bg-gradient-to-r from-[#FE34B9] to-[#903AFF] rounded-[4px] font-[400] text-[18px]  text-white ml-16 px-12 py-[11px]">
            Register
          </Link>

        </div>

      </nav>
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel focus="true" className="fixed inset-0 z-10 mb-72 overflow-y-auto text-white bg-[#150E28] px-6 py-6 xl:hidden">
          <Transition.Child
            enter="ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="flex h-9 items-center justify-between">
              <div className="flex">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  {/* <Image
                    className="h-16"
                    height={80}
                    width={160}
                    src="/jaiye.png"
                    alt=" Logo"
                  /> */}
                </a>
              </div>
              <div className="flex">
                {/* <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                   onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="sr-only">Close menu</span>
                  <div onClick={() => setMobileMenuOpen(false)} >
                    <div className={`${genericHamburgerLine} ${
                      isOpen
                          ? "rotate-45 translate-y-3  group-hover:opacity-100"
                          : " group-hover:opacity-100"
                      }`}
                    />
                    <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : " group-hover:opacity-100"}`} />
                    <div className={`${genericHamburgerLine} ${
                      isOpen
                          ? "-rotate-45 -translate-y-3  group-hover:opacity-100"
                          : " group-hover:opacity-100"
                      }`}
                    />
                  </div>
                </button> */}
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Open main menu</span>
                  <div className='text-black' onClick={handleOpening} >
                    <XMarkIcon className="h-18 w-10 text-[#fefefe]" aria-hidden="true" />
                  </div>
                </button>
              </div>
            </div>
            <div className="mt-6 flow-root">
              <div className=" px-3">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      activeClass="active"
                      to={item.to}
                      spy
                      smooth
                      offset={-100}
                      duration={900}
                      className="-mx-3 block rounded-lg py-2 px-3 text-3xl font-[500] text-[18px] leading-7 text-primary hover:bg-gray-400/10"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <Link href="/signup" className="bg-gradient-to-r from-[#FE34B9] to-[#903AFF] rounded-[4px] font-[400] text-[16px]  text-white px-14 mt-7 py-[12px]">
                  Register
                </Link>

              </div>
            </div>
          </Transition.Child>
          </Dialog.Panel>
        </Dialog>
    </Transition.Root>
      
    </div> 
  )
}

export default NavBar



