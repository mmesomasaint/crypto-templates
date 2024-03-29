import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useCallback } from 'react'
import {
  BsFillBagFill,
  BsFillPersonFill,
  BsFillHeartFill,
  BsCheck,
} from 'react-icons/bs'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { TbBrandTelegram } from 'react-icons/tb'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = useCallback(() => setIsOpen((open) => !open), [])

  return (
    <div>
      <Head>
        <title>Cryptex</title>
        <meta
          name='description'
          content='create, exchange or collect digital items'
        />
        <link rel='icon' href='/imgs/cryptex/favicon.ico' />
      </Head>
      <header className='absolute w-full bg-gradient-to-b from-zinc-900 via-zinc-900 to-black'>
        <div className='relative max-w-[90rem] mx-auto'>
          <div className='w-[98%] lg:w-[90%] xl:w-[98%] lg:w-[90%] xl:w-[80%] mx-auto py-4 md:py-7'>
            <div className='flex justify-between items-center gap-6'>
              <div className=''>
                <Image
                  src='/imgs/cryptex/logo.png'
                  width={50}
                  height={30}
                  alt='logo'
                />
              </div>
              <div className='flex justify-between items-center gap-7'>
                <div
                  className={`${
                    isOpen ? 'flex bg-black' : 'hidden'
                  } w-full lg:w-fit flex-col lg:flex-row absolute z-10 top-[99%] left-0 lg:static lg:bg-transparent lg:flex justify-evenly items-start lg:items-center gap-7 px-[1%] py-5 lg:p-0`}
                >
                  <span className='font-normal text-xl leading-none text-white hover:text-gray-300'>
                    <Link href='/templates/cryptex'>Home</Link>
                  </span>
                  <span className='font-normal text-xl leading-none text-white hover:text-gray-300'>
                    <Link href='/templates/cryptex/discover'>Discover</Link>
                  </span>
                  <span className='font-normal text-xl leading-none text-primary scale-105 underline underline-offset-[6px]'>
                    <Link href='/templates/cryptex/shop'>Shop</Link>
                  </span>
                  <span className='font-normal text-xl leading-none text-white hover:text-gray-300'>
                    <Link href='/templates/cryptex/about'>About</Link>
                  </span>
                  <span className='font-normal text-xl leading-none text-white hover:text-gray-300'>
                    <Link href='/templates/cryptex/contact'>Contact</Link>
                  </span>
                  <span className='font-normal text-xl leading-none text-white hover:text-gray-300'>
                    <Link href='/templates/cryptex/blog'>Blog</Link>
                  </span>
                </div>
              </div>
              <div className='flex justify-center items-center gap-7'>
                <div className='block lg:hidden'>
                  <GiHamburgerMenu
                    className='text-3xl text-white'
                    onClick={handleOpen}
                  />
                </div>
                <button className='text-white text-base md:text-lg py-2 md:py-3 px-4 md:px-6 font-medium leading-none bg-transparent border-2 border-primary rounded-full'>
                  Connect Wallet
                </button>
                <div className='hidden xs:flex justify-center items-center gap-5'>
                  <BsFillBagFill className='text-white text-lg md:text-xl' />
                  <BsFillPersonFill className='text-white text-lg md:text-xl' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className='max-w-[90rem] mx-auto'>
          <section>
            <div className="h-fit md:h-[30rem] w-full bg-[url('/imgs/cryptex/showcase.jpg')] bg-no-repeat bg-cover bg-center">
              <div className='flex justify-center items-center h-full'>
                <div className='w-full h-fit text-center pt-40 md:pt-20 py-16 md:py-0'>
                  <h1 className='block w-[90%] sm:w-[60%] lg:w-[50%] xl:w-[35%] mx-auto text-4xl md:text-5xl font-bold leading-tight text-white mb-4'>
                    Buy/Sell <span className='text-primary'>Digital Items</span>
                    , With The Best Tools
                  </h1>
                  <p className='block w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[40%] mx-auto text-lg md:text-xl lg:text-base font-normal leading-tight text-white mb-8'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className='text-center'>
                    <span className='text-gray-300 font-normal text-lg md:text-xl'>
                      Home
                    </span>
                    <span className='mx-2 text-gray-300 font-normal text-lg md:text-xl'>
                      {' '}
                      &gt;{' '}
                    </span>
                    <span className='text-primary font-normal text-lg md:text-xl'>
                      Shop
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*End of showcase section*/}
          <section>
            <div className="h-fit w-full bg-[url('/imgs/cryptex/spiral.jpg')] bg-no-repeat bg-cover bg-center">
              <div className='w-full h-full bg-zinc-900 bg-opacity-70'>
                <div className='w-[98%] lg:w-[90%] xl:w-[80%] mx-auto py-24 md:py-32'>
                  <h2 className='text-4xl md:text-5xl font-semibold leading-none text-white text-center mb-14'>
                    Our Top Sellers
                  </h2>
                  <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 place-items-stretch gap-7 lg:gap-14'>
                    <div className='rounded-full p-2 transition duration-300 bg-stone-700 hover:bg-gradient-to-r hover:from-stone-700 hover:via-stone-700 hover:to-black hover:glow-cpt-primary'>
                      <div className='flex justify-start items-center gap-4'>
                        <div className='relative rounded-full w-fit'>
                          <div className="w-14 h-14 rounded-full bg-[url('/imgs/cryptex/avatar-1.jpg')] bg-no-repeat bg-center bg-cover" />
                          <div className='absolute rounded-full bottom-0 -right-2 w-5 h-5 bg-teal-500 flex justify-center items-center'>
                            <BsCheck className='text-white text-base' />
                          </div>
                        </div>
                        <div className='flex flex-col justify-between items-start gap-1'>
                          <span className='text-white text-base font-normal'>
                            James Smith
                          </span>
                          <span className='text-white text-base font-normal'>
                            126.64 ETH
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='rounded-full p-2 transition duration-300 bg-stone-700 hover:bg-gradient-to-r hover:from-stone-700 hover:via-stone-700 hover:to-black hover:glow-cpt-primary'>
                      <div className='flex justify-start items-center gap-4'>
                        <div className='relative rounded-full w-fit'>
                          <div className="w-14 h-14 rounded-full bg-[url('/imgs/cryptex/avatar-3.jpg')] bg-no-repeat bg-center bg-cover" />
                          <div className='absolute rounded-full bottom-0 -right-2 w-5 h-5 bg-teal-500 flex justify-center items-center'>
                            <BsCheck className='text-white text-base' />
                          </div>
                        </div>
                        <div className='flex flex-col justify-between items-start gap-1'>
                          <span className='text-white text-base font-normal'>
                            Treymayne Harris
                          </span>
                          <span className='text-white text-base font-normal'>
                            186.66 ETH
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='rounded-full p-2 transition duration-300 bg-stone-700 hover:bg-gradient-to-r hover:from-stone-700 hover:via-stone-700 hover:to-black hover:glow-cpt-primary'>
                      <div className='flex justify-start items-center gap-4'>
                        <div className='relative rounded-full w-fit'>
                          <div className="w-14 h-14 rounded-full bg-[url('/imgs/cryptex/avatar-2.jpg')] bg-no-repeat bg-center bg-cover" />
                          <div className='absolute rounded-full bottom-0 -right-2 w-5 h-5 bg-teal-500 flex justify-center items-center'>
                            <BsCheck className='text-white text-base' />
                          </div>
                        </div>
                        <div className='flex flex-col justify-between items-start gap-1'>
                          <span className='text-white text-base font-normal'>
                            James Smith
                          </span>
                          <span className='text-white text-base font-normal'>
                            126.64 ETH
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='rounded-full p-2 transition duration-300 bg-stone-700 hover:bg-gradient-to-r hover:from-stone-700 hover:via-stone-700 hover:to-black hover:glow-cpt-primary'>
                      <div className='flex justify-start items-center gap-4'>
                        <div className='relative rounded-full w-fit'>
                          <div className="w-14 h-14 rounded-full bg-[url('/imgs/cryptex/avatar-3.jpg')] bg-no-repeat bg-center bg-cover" />
                          <div className='absolute rounded-full bottom-0 -right-2 w-5 h-5 bg-teal-500 flex justify-center items-center'>
                            <BsCheck className='text-white text-base' />
                          </div>
                        </div>
                        <div className='flex flex-col justify-between items-start gap-1'>
                          <span className='text-white text-base font-normal'>
                            Tony Johnson
                          </span>
                          <span className='text-white text-base font-normal'>
                            126.64 ETH
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='rounded-full p-2 transition duration-300 bg-stone-700 hover:bg-gradient-to-r hover:from-stone-700 hover:via-stone-700 hover:to-black hover:glow-cpt-primary'>
                      <div className='flex justify-start items-center gap-4'>
                        <div className='relative rounded-full w-fit'>
                          <div className="w-14 h-14 rounded-full bg-[url('/imgs/cryptex/avatar-2.jpg')] bg-no-repeat bg-center bg-cover" />
                          <div className='absolute rounded-full bottom-0 -right-2 w-5 h-5 bg-teal-500 flex justify-center items-center'>
                            <BsCheck className='text-white text-base' />
                          </div>
                        </div>
                        <div className='flex flex-col justify-between items-start gap-1'>
                          <span className='text-white text-base font-normal'>
                            Ryan Evans
                          </span>
                          <span className='text-white text-base font-normal'>
                            226.64 ETH
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='rounded-full p-2 transition duration-300 bg-stone-700 hover:bg-gradient-to-r hover:from-stone-700 hover:via-stone-700 hover:to-black hover:glow-cpt-primary'>
                      <div className='flex justify-start items-center gap-4'>
                        <div className='relative rounded-full w-fit'>
                          <div className="w-14 h-14 rounded-full bg-[url('/imgs/cryptex/avatar-4.jpg')] bg-no-repeat bg-center bg-cover" />
                          <div className='absolute rounded-full bottom-0 -right-2 w-5 h-5 bg-teal-500 flex justify-center items-center'>
                            <BsCheck className='text-white text-base' />
                          </div>
                        </div>
                        <div className='flex flex-col justify-between items-start gap-1'>
                          <span className='text-white text-base font-normal'>
                            Steven Statten
                          </span>
                          <span className='text-white text-base font-normal'>
                            255.52 ETH
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='rounded-full p-2 transition duration-300 bg-stone-700 hover:bg-gradient-to-r hover:from-stone-700 hover:via-stone-700 hover:to-black hover:glow-cpt-primary'>
                      <div className='flex justify-start items-center gap-4'>
                        <div className='relative rounded-full w-fit'>
                          <div className="w-14 h-14 rounded-full bg-[url('/imgs/cryptex/avatar-1.jpg')] bg-no-repeat bg-center bg-cover" />
                          <div className='absolute rounded-full bottom-0 -right-2 w-5 h-5 bg-teal-500 flex justify-center items-center'>
                            <BsCheck className='text-white text-base' />
                          </div>
                        </div>
                        <div className='flex flex-col justify-between items-start gap-1'>
                          <span className='text-white text-base font-normal'>
                            Jeff Choata
                          </span>
                          <span className='text-white text-base font-normal'>
                            126.64 ETH
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='rounded-full p-2 transition duration-300 bg-stone-700 hover:bg-gradient-to-r hover:from-stone-700 hover:via-stone-700 hover:to-black hover:glow-cpt-primary'>
                      <div className='flex justify-start items-center gap-4'>
                        <div className='relative rounded-full w-fit'>
                          <div className="w-14 h-14 rounded-full bg-[url('/imgs/cryptex/avatar-4.jpg')] bg-no-repeat bg-center bg-cover" />
                          <div className='absolute rounded-full bottom-0 -right-2 w-5 h-5 bg-teal-500 flex justify-center items-center'>
                            <BsCheck className='text-white text-base' />
                          </div>
                        </div>
                        <div className='flex flex-col justify-between items-start gap-1'>
                          <span className='text-white text-base font-normal'>
                            Steven Craig
                          </span>
                          <span className='text-white text-base font-normal'>
                            234.77 ETH
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='rounded-full p-2 transition duration-300 bg-stone-700 hover:bg-gradient-to-r hover:from-stone-700 hover:via-stone-700 hover:to-black hover:glow-cpt-primary'>
                      <div className='flex justify-start items-center gap-4'>
                        <div className='relative rounded-full w-fit'>
                          <div className="w-14 h-14 rounded-full bg-[url('/imgs/cryptex/avatar-2.jpg')] bg-no-repeat bg-center bg-cover" />
                          <div className='absolute rounded-full bottom-0 -right-2 w-5 h-5 bg-teal-500 flex justify-center items-center'>
                            <BsCheck className='text-white text-base' />
                          </div>
                        </div>
                        <div className='flex flex-col justify-between items-start gap-1'>
                          <span className='text-white text-base font-normal'>
                            Jacob Detten
                          </span>
                          <span className='text-white text-base font-normal'>
                            226.74 ETH
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='rounded-full p-2 transition duration-300 bg-stone-700 hover:bg-gradient-to-r hover:from-stone-700 hover:via-stone-700 hover:to-black hover:glow-cpt-primary'>
                      <div className='flex justify-start items-center gap-4'>
                        <div className='relative rounded-full w-fit'>
                          <div className="w-14 h-14 rounded-full bg-[url('/imgs/cryptex/avatar-4.jpg')] bg-no-repeat bg-center bg-cover" />
                          <div className='absolute rounded-full bottom-0 -right-2 w-5 h-5 bg-teal-500 flex justify-center items-center'>
                            <BsCheck className='text-white text-base' />
                          </div>
                        </div>
                        <div className='flex flex-col justify-between items-start gap-1'>
                          <span className='text-white text-base font-normal'>
                            Shawn Busbae
                          </span>
                          <span className='text-white text-base font-normal'>
                            443.64 ETH
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='rounded-full p-2 transition duration-300 bg-stone-700 hover:bg-gradient-to-r hover:from-stone-700 hover:via-stone-700 hover:to-black hover:glow-cpt-primary'>
                      <div className='flex justify-start items-center gap-4'>
                        <div className='relative rounded-full w-fit'>
                          <div className="w-14 h-14 rounded-full bg-[url('/imgs/cryptex/avatar-1.jpg')] bg-no-repeat bg-center bg-cover" />
                          <div className='absolute rounded-full bottom-0 -right-2 w-5 h-5 bg-teal-500 flex justify-center items-center'>
                            <BsCheck className='text-white text-base' />
                          </div>
                        </div>
                        <div className='flex flex-col justify-between items-start gap-1'>
                          <span className='text-white text-base font-normal'>
                            Jacob Elder
                          </span>
                          <span className='text-white text-base font-normal'>
                            643.64 ETH
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='rounded-full p-2 transition duration-300 bg-stone-700 hover:bg-gradient-to-r hover:from-stone-700 hover:via-stone-700 hover:to-black hover:glow-cpt-primary'>
                      <div className='flex justify-start items-center gap-4'>
                        <div className='relative rounded-full w-fit'>
                          <div className="w-14 h-14 rounded-full bg-[url('/imgs/cryptex/avatar-3.jpg')] bg-no-repeat bg-center bg-cover" />
                          <div className='absolute rounded-full bottom-0 -right-2 w-5 h-5 bg-teal-500 flex justify-center items-center'>
                            <BsCheck className='text-white text-base' />
                          </div>
                        </div>
                        <div className='flex flex-col justify-between items-start gap-1'>
                          <span className='text-white text-base font-normal'>
                            Bruce White
                          </span>
                          <span className='text-white text-base font-normal'>
                            176.25 ETH
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ENd of top-sellers section */}
          <section>
            <div className="h-fit w-full bg-[url('/imgs/cryptex/blue-cubes.jpg')] bg-no-repeat bg-cover bg-center">
              <div className='w-full h-full bg-zinc-900 bg-opacity-70'>
                <div className='w-[98%] lg:w-[90%] xl:w-[80%] mx-auto py-24 md:py-32'>
                  <h2 className='text-4xl md:text-5xl font-semibold leading-none text-white text-center mb-14'>
                    Popular Item
                  </h2>
                  <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-center xs:place-items-stretch gap-5 md:gap-10'>
                    <div className='p-3 bg-zinc-900 rounded-md transition duration-300 group hover:glow-cpt-primary'>
                      <div className='flex justify-start items-center gap-3'>
                        <div className="w-8 h-8 rounded-full bg-[url('/imgs/cryptex/avatar-1.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className=''>
                          <div className='text-sm font-medium text-white'>
                            Alija Amil
                          </div>
                          <div className='text-xs font-light text-white'>
                            @AlijaAmil
                          </div>
                        </div>
                      </div>
                      <div className='relative'>
                        <Image
                          src='/imgs/cryptex/house-sun.jpg'
                          width={300}
                          height={300}
                          alt='house-sun'
                          className='rounded-md my-5'
                        />
                        <div className='w-fit absolute -bottom-5 left-0 right-0 mx-auto rounded-full bg-black py-2 px-4 flex justify-start items-center gap-3'>
                          <span className='text-white text-sm font-medium'>
                            256h
                          </span>
                          <span className='text-white text-sm font-medium'>
                            59m
                          </span>
                          <span className='text-white text-sm font-medium'>
                            17s
                          </span>
                        </div>
                      </div>
                      <div className='flex justify-between items-center gap-5 mt-10'>
                        <button className='text-base lg:text-sm font-medium px-4 py-2 transition duration-300 group-hover:bg-primary border border-primary bg-transparent text-white shadow-sm rounded-full'>
                          Price A Bid
                        </button>
                        <div className='flex justify-start items-center gap-2'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                          <span className='text-gray-300 text-sm font-normal'>
                            320
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='p-3 bg-zinc-900 rounded-md transition duration-300 group hover:glow-cpt-primary'>
                      <div className='flex justify-start items-center gap-3'>
                        <div className="w-8 h-8 rounded-full bg-[url('/imgs/cryptex/avatar-2.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className=''>
                          <div className='text-sm font-medium text-white'>
                            Alija Amil
                          </div>
                          <div className='text-xs font-light text-white'>
                            @AlijaAmil
                          </div>
                        </div>
                      </div>
                      <div className='relative'>
                        <Image
                          src='/imgs/cryptex/pattern.jpg'
                          width={300}
                          height={300}
                          alt='house-sun'
                          className='rounded-md my-5'
                        />
                        <div className='w-fit absolute -bottom-5 left-0 right-0 mx-auto rounded-full bg-black py-2 px-4 flex justify-start items-center gap-3'>
                          <span className='text-white text-sm font-medium'>
                            256h
                          </span>
                          <span className='text-white text-sm font-medium'>
                            59m
                          </span>
                          <span className='text-white text-sm font-medium'>
                            17s
                          </span>
                        </div>
                      </div>
                      <div className='flex justify-between items-center gap-5 mt-10'>
                        <button className='text-base lg:text-sm font-medium px-4 py-2 transition duration-300 group-hover:bg-primary border border-primary bg-transparent text-white shadow-sm rounded-full'>
                          Price A Bid
                        </button>
                        <div className='flex justify-start items-center gap-2'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                          <span className='text-gray-300 text-sm font-normal'>
                            320
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='p-3 bg-zinc-900 rounded-md transition duration-300 group hover:glow-cpt-primary'>
                      <div className='flex justify-start items-center gap-3'>
                        <div className="w-8 h-8 rounded-full bg-[url('/imgs/cryptex/avatar-3.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className=''>
                          <div className='text-sm font-medium text-white'>
                            Alija Amil
                          </div>
                          <div className='text-xs font-light text-white'>
                            @AlijaAmil
                          </div>
                        </div>
                      </div>
                      <div className='relative'>
                        <Image
                          src='/imgs/cryptex/leafs.jpg'
                          width={300}
                          height={300}
                          alt='house-sun'
                          className='rounded-md my-5'
                        />
                        <div className='w-fit absolute -bottom-5 left-0 right-0 mx-auto rounded-full bg-black py-2 px-4 flex justify-start items-center gap-3'>
                          <span className='text-white text-sm font-medium'>
                            256h
                          </span>
                          <span className='text-white text-sm font-medium'>
                            59m
                          </span>
                          <span className='text-white text-sm font-medium'>
                            17s
                          </span>
                        </div>
                      </div>
                      <div className='flex justify-between items-center gap-5 mt-10'>
                        <button className='text-base lg:text-sm font-medium px-4 py-2 transition duration-300 group-hover:bg-primary border border-primary bg-transparent text-white shadow-sm rounded-full'>
                          Price A Bid
                        </button>
                        <div className='flex justify-start items-center gap-2'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                          <span className='text-gray-300 text-sm font-normal'>
                            320
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='p-3 bg-zinc-900 rounded-md transition duration-300 group hover:glow-cpt-primary'>
                      <div className='flex justify-start items-center gap-3'>
                        <div className="w-8 h-8 rounded-full bg-[url('/imgs/cryptex/avatar-3.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className=''>
                          <div className='text-sm font-medium text-white'>
                            Alija Amil
                          </div>
                          <div className='text-xs font-light text-white'>
                            @AlijaAmil
                          </div>
                        </div>
                      </div>
                      <div className='relative'>
                        <Image
                          src='/imgs/cryptex/house-sun.jpg'
                          width={300}
                          height={300}
                          alt='house-sun'
                          className='rounded-md my-5'
                        />
                        <div className='w-fit absolute -bottom-5 left-0 right-0 mx-auto rounded-full bg-black py-2 px-4 flex justify-start items-center gap-3'>
                          <span className='text-white text-sm font-medium'>
                            256h
                          </span>
                          <span className='text-white text-sm font-medium'>
                            59m
                          </span>
                          <span className='text-white text-sm font-medium'>
                            17s
                          </span>
                        </div>
                      </div>
                      <div className='flex justify-between items-center gap-5 mt-10'>
                        <button className='text-base lg:text-sm font-medium px-4 py-2 transition duration-300 group-hover:bg-primary border border-primary bg-transparent text-white shadow-sm rounded-full'>
                          Price A Bid
                        </button>
                        <div className='flex justify-start items-center gap-2'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                          <span className='text-gray-300 text-sm font-normal'>
                            320
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='p-3 bg-zinc-900 rounded-md transition duration-300 group hover:glow-cpt-primary'>
                      <div className='flex justify-start items-center gap-3'>
                        <div className="w-8 h-8 rounded-full bg-[url('/imgs/cryptex/avatar-4.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className=''>
                          <div className='text-sm font-medium text-white'>
                            Alija Amil
                          </div>
                          <div className='text-xs font-light text-white'>
                            @AlijaAmil
                          </div>
                        </div>
                      </div>
                      <div className='relative'>
                        <Image
                          src='/imgs/cryptex/flame-sun.jpg'
                          width={300}
                          height={300}
                          alt='house-sun'
                          className='rounded-md my-5'
                        />
                        <div className='w-fit absolute -bottom-5 left-0 right-0 mx-auto rounded-full bg-black py-2 px-4 flex justify-start items-center gap-3'>
                          <span className='text-white text-sm font-medium'>
                            256h
                          </span>
                          <span className='text-white text-sm font-medium'>
                            59m
                          </span>
                          <span className='text-white text-sm font-medium'>
                            17s
                          </span>
                        </div>
                      </div>
                      <div className='flex justify-between items-center gap-5 mt-10'>
                        <button className='text-base lg:text-sm font-medium px-4 py-2 transition duration-300 group-hover:bg-primary border border-primary bg-transparent text-white shadow-sm rounded-full'>
                          Price A Bid
                        </button>
                        <div className='flex justify-start items-center gap-2'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                          <span className='text-gray-300 text-sm font-normal'>
                            320
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='p-3 bg-zinc-900 rounded-md transition duration-300 group hover:glow-cpt-primary'>
                      <div className='flex justify-start items-center gap-3'>
                        <div className="w-8 h-8 rounded-full bg-[url('/imgs/cryptex/avatar-4.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className=''>
                          <div className='text-sm font-medium text-white'>
                            Alija Amil
                          </div>
                          <div className='text-xs font-light text-white'>
                            @AlijaAmil
                          </div>
                        </div>
                      </div>
                      <div className='relative'>
                        <Image
                          src='/imgs/cryptex/pattern.jpg'
                          width={300}
                          height={300}
                          alt='house-sun'
                          className='rounded-md my-5'
                        />
                        <div className='w-fit absolute -bottom-5 left-0 right-0 mx-auto rounded-full bg-black py-2 px-4 flex justify-start items-center gap-3'>
                          <span className='text-white text-sm font-medium'>
                            256h
                          </span>
                          <span className='text-white text-sm font-medium'>
                            59m
                          </span>
                          <span className='text-white text-sm font-medium'>
                            17s
                          </span>
                        </div>
                      </div>
                      <div className='flex justify-between items-center gap-5 mt-10'>
                        <button className='text-base lg:text-sm font-medium px-4 py-2 transition duration-300 group-hover:bg-primary border border-primary bg-transparent text-white shadow-sm rounded-full'>
                          Price A Bid
                        </button>
                        <div className='flex justify-start items-center gap-2'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                          <span className='text-gray-300 text-sm font-normal'>
                            320
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='p-3 bg-zinc-900 rounded-md transition duration-300 group hover:glow-cpt-primary'>
                      <div className='flex justify-start items-center gap-3'>
                        <div className="w-8 h-8 rounded-full bg-[url('/imgs/cryptex/avatar-2.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className=''>
                          <div className='text-sm font-medium text-white'>
                            Alija Amil
                          </div>
                          <div className='text-xs font-light text-white'>
                            @AlijaAmil
                          </div>
                        </div>
                      </div>
                      <div className='relative'>
                        <Image
                          src='/imgs/cryptex/leafs.jpg'
                          width={300}
                          height={300}
                          alt='house-sun'
                          className='rounded-md my-5'
                        />
                        <div className='w-fit absolute -bottom-5 left-0 right-0 mx-auto rounded-full bg-black py-2 px-4 flex justify-start items-center gap-3'>
                          <span className='text-white text-sm font-medium'>
                            256h
                          </span>
                          <span className='text-white text-sm font-medium'>
                            59m
                          </span>
                          <span className='text-white text-sm font-medium'>
                            17s
                          </span>
                        </div>
                      </div>
                      <div className='flex justify-between items-center gap-5 mt-10'>
                        <button className='text-base lg:text-sm font-medium px-4 py-2 transition duration-300 group-hover:bg-primary border border-primary bg-transparent text-white shadow-sm rounded-full'>
                          Price A Bid
                        </button>
                        <div className='flex justify-start items-center gap-2'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                          <span className='text-gray-300 text-sm font-normal'>
                            320
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='p-3 bg-zinc-900 rounded-md transition duration-300 group hover:glow-cpt-primary'>
                      <div className='flex justify-start items-center gap-3'>
                        <div className="w-8 h-8 rounded-full bg-[url('/imgs/cryptex/avatar-3.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className=''>
                          <div className='text-sm font-medium text-white'>
                            Alija Amil
                          </div>
                          <div className='text-xs font-light text-white'>
                            @AlijaAmil
                          </div>
                        </div>
                      </div>
                      <div className='relative'>
                        <Image
                          src='/imgs/cryptex/flame-sun.jpg'
                          width={300}
                          height={300}
                          alt='house-sun'
                          className='rounded-md my-5'
                        />
                        <div className='w-fit absolute -bottom-5 left-0 right-0 mx-auto rounded-full bg-black py-2 px-4 flex justify-start items-center gap-3'>
                          <span className='text-white text-sm font-medium'>
                            256h
                          </span>
                          <span className='text-white text-sm font-medium'>
                            59m
                          </span>
                          <span className='text-white text-sm font-medium'>
                            17s
                          </span>
                        </div>
                      </div>
                      <div className='flex justify-between items-center gap-5 mt-10'>
                        <button className='text-base lg:text-sm font-medium px-4 py-2 transition duration-300 group-hover:bg-primary border border-primary bg-transparent text-white shadow-sm rounded-full'>
                          Price A Bid
                        </button>
                        <div className='flex justify-start items-center gap-2'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                          <span className='text-gray-300 text-sm font-normal'>
                            320
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End of grid */}
                  <div className='text-center mt-14'>
                    <button className='text-xl lg:text-lg font-medium leading-none px-6 py-3 bg-primary text-white shadow-sm rounded-full'>
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End of Design Section */}
          <section>
            <div className='bg-zinc-900'>
              <div className='w-[98%] lg:w-[90%] xl:w-[80%] mx-auto py-24 md:py-32'>
                <h2 className='text-4xl md:text-5xl font-semibold leading-none text-white text-center mb-14'>
                  Featured Assets
                </h2>
                <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-center md:place-items-stretch gap-7 md:gap-14'>
                  <div className='p-3 bg-gray-900 rounded-md transition duration-300 group hover:glow-cpt-primary'>
                    <div>
                      <Image
                        src='/imgs/cryptex/house-sun.jpg'
                        width={300}
                        height={300}
                        alt='house-sun'
                        className='rounded-md'
                      />
                    </div>
                    <div className='flex justify-between items-center gap-5 mt-3'>
                      <div className='flex justify-start items-center gap-2'>
                        <div className="w-8 h-8 rounded-md bg-[url('/imgs/cryptex/avatar-4.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className='relative rounded-md w-fit'>
                          <div className="w-8 h-8 rounded-md bg-[url('/imgs/cryptex/avatar-1.jpg')] bg-no-repeat bg-center bg-cover" />
                          <div className='absolute rounded-full bottom-0 -right-1 w-3 h-3 bg-teal-500 border border-white flex justify-center items-center'>
                            <BsCheck className='text-white text-base' />
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-start items-center gap-2'>
                        <div className='w-8 h-8 rounded-full bg-stone-900 flex justify-center items-center'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                        </div>
                        <span className='text-gray-300 text-sm font-normal'>
                          320 Likes
                        </span>
                      </div>
                    </div>
                    <div className='text-white transition duration-300 group-hover:text-primary text-lg font-medium mt-3'>
                      Scarecrow in Daylight
                    </div>
                    <div className='rounded-md bg-black flex justify-between items-center p-3 mt-3'>
                      <span className='text-white text-sm font-normal leading-none'>
                        Current Bid
                      </span>
                      <span className='text-white group-hover:text-primary text-sm font-normal leading-none'>
                        BID 50 ETH
                      </span>
                    </div>
                  </div>
                  <div className='p-3 bg-gray-900 rounded-md transition duration-300 group hover:glow-cpt-primary'>
                    <div>
                      <Image
                        src='/imgs/cryptex/leafs.jpg'
                        width={300}
                        height={300}
                        alt='leafs'
                        className='rounded-md'
                      />
                    </div>
                    <div className='flex justify-between items-center gap-5 mt-3'>
                      <div className='flex justify-start items-center gap-2'>
                        <div className="w-8 h-8 rounded-md bg-[url('/imgs/cryptex/avatar-3.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className='relative rounded-md w-fit'>
                          <div className="w-8 h-8 rounded-md bg-[url('/imgs/cryptex/avatar-2.jpg')] bg-no-repeat bg-center bg-cover" />
                          <div className='absolute rounded-full bottom-0 -right-1 w-3 h-3 bg-teal-500 border border-white flex justify-center items-center'>
                            <BsCheck className='text-white text-base' />
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-start items-center gap-2'>
                        <div className='w-8 h-8 rounded-full bg-stone-900 flex justify-center items-center'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                        </div>
                        <span className='text-gray-300 text-sm font-normal'>
                          320 Likes
                        </span>
                      </div>
                    </div>
                    <div className='text-white transition duration-300 group-hover:text-primary text-lg font-medium mt-3'>
                      Super Neophormism
                    </div>
                    <div className='rounded-md bg-black flex justify-between items-center p-3 mt-3'>
                      <span className='text-white text-sm font-normal leading-none'>
                        Current Bid
                      </span>
                      <span className='text-white group-hover:text-primary text-sm font-normal leading-none'>
                        BID 50 ETH
                      </span>
                    </div>
                  </div>
                  <div className='p-3 bg-gray-900 rounded-md transition duration-300 group hover:glow-cpt-primary'>
                    <div>
                      <Image
                        src='/imgs/cryptex/pattern.jpg'
                        width={300}
                        height={300}
                        alt='pattern'
                        className='rounded-md'
                      />
                    </div>
                    <div className='flex justify-between items-center gap-5 mt-3'>
                      <div className='flex justify-start items-center gap-2'>
                        <div className="w-8 h-8 rounded-md bg-[url('/imgs/cryptex/avatar-4.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className='relative rounded-md w-fit'>
                          <div className="w-8 h-8 rounded-md bg-[url('/imgs/cryptex/avatar-3.jpg')] bg-no-repeat bg-center bg-cover" />
                          <div className='absolute rounded-full bottom-0 -right-1 w-3 h-3 bg-teal-500 border border-white flex justify-center items-center'>
                            <BsCheck className='text-white text-base' />
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-start items-center gap-2'>
                        <div className='w-8 h-8 rounded-full bg-stone-900 flex justify-center items-center'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                        </div>
                        <span className='text-gray-300 text-sm font-normal'>
                          320 Likes
                        </span>
                      </div>
                    </div>
                    <div className='text-white transition duration-300 group-hover:text-primary text-lg font-medium mt-3'>
                      AI generated pattern
                    </div>
                    <div className='rounded-md bg-black flex justify-between items-center p-3 mt-3'>
                      <span className='text-white text-sm font-normal leading-none'>
                        Current Bid
                      </span>
                      <span className='text-white group-hover:text-primary text-sm font-normal leading-none'>
                        BID 50 ETH
                      </span>
                    </div>
                  </div>
                  <div className='p-3 bg-gray-900 rounded-md transition duration-300 group hover:glow-cpt-primary'>
                    <div>
                      <Image
                        src='/imgs/cryptex/leafs-2.jpg'
                        width={300}
                        height={300}
                        alt='leafs-2'
                        className='rounded-md'
                      />
                    </div>
                    <div className='flex justify-between items-center gap-5 mt-3'>
                      <div className='flex justify-start items-center gap-2'>
                        <div className="w-8 h-8 rounded-md bg-[url('/imgs/cryptex/avatar-1.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className='relative rounded-md w-fit'>
                          <div className="w-8 h-8 rounded-md bg-[url('/imgs/cryptex/avatar-2.jpg')] bg-no-repeat bg-center bg-cover" />
                          <div className='absolute rounded-full bottom-0 -right-1 w-3 h-3 bg-teal-500 border border-white flex justify-center items-center'>
                            <BsCheck className='text-white text-base' />
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-start items-center gap-2'>
                        <div className='w-8 h-8 rounded-full bg-stone-900 flex justify-center items-center'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                        </div>
                        <span className='text-gray-300 text-sm font-normal'>
                          320 Likes
                        </span>
                      </div>
                    </div>
                    <div className='text-white transition duration-300 group-hover:text-primary text-lg font-medium mt-3'>
                      Super Creative Nature
                    </div>
                    <div className='rounded-md bg-black flex justify-between items-center p-3 mt-3'>
                      <span className='text-white text-sm font-normal leading-none'>
                        Current Bid
                      </span>
                      <span className='text-white group-hover:text-primary text-sm font-normal leading-none'>
                        BID 50 ETH
                      </span>
                    </div>
                  </div>
                  <div className='p-3 bg-gray-900 rounded-md transition duration-300 group hover:glow-cpt-primary'>
                    <div>
                      <Image
                        src='/imgs/cryptex/flame-sun.jpg'
                        width={300}
                        height={300}
                        alt='flame-sun'
                        className='rounded-md'
                      />
                    </div>
                    <div className='flex justify-between items-center gap-5 mt-3'>
                      <div className='flex justify-start items-center gap-2'>
                        <div className="w-8 h-8 rounded-md bg-[url('/imgs/cryptex/avatar-3.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className='relative rounded-md w-fit'>
                          <div className="w-8 h-8 rounded-md bg-[url('/imgs/cryptex/avatar-1.jpg')] bg-no-repeat bg-center bg-cover" />
                          <div className='absolute rounded-full bottom-0 -right-1 w-3 h-3 bg-teal-500 border border-white flex justify-center items-center'>
                            <BsCheck className='text-white text-base' />
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-start items-center gap-2'>
                        <div className='w-8 h-8 rounded-full bg-stone-900 flex justify-center items-center'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                        </div>
                        <span className='text-gray-300 text-sm font-normal'>
                          320 Likes
                        </span>
                      </div>
                    </div>
                    <div className='text-white transition duration-300 group-hover:text-primary text-lg font-medium mt-3'>
                      Night Sunset Flame
                    </div>
                    <div className='rounded-md bg-black flex justify-between items-center p-3 mt-3'>
                      <span className='text-white text-sm font-normal leading-none'>
                        Current Bid
                      </span>
                      <span className='text-white group-hover:text-primary text-sm font-normal leading-none'>
                        BID 50 ETH
                      </span>
                    </div>
                  </div>
                  <div className='p-3 bg-gray-900 rounded-md transition duration-300 group hover:glow-cpt-primary'>
                    <div>
                      <Image
                        src='/imgs/cryptex/leafs.jpg'
                        width={300}
                        height={300}
                        alt='leafs'
                        className='rounded-md'
                      />
                    </div>
                    <div className='flex justify-between items-center gap-5 mt-3'>
                      <div className='flex justify-start items-center gap-2'>
                        <div className="w-8 h-8 rounded-md bg-[url('/imgs/cryptex/avatar-2.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className='relative rounded-md w-fit'>
                          <div className="w-8 h-8 rounded-md bg-[url('/imgs/cryptex/avatar-1.jpg')] bg-no-repeat bg-center bg-cover" />
                          <div className='absolute rounded-full bottom-0 -right-1 w-3 h-3 bg-teal-500 border border-white flex justify-center items-center'>
                            <BsCheck className='text-white text-base' />
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-start items-center gap-2'>
                        <div className='w-8 h-8 rounded-full bg-stone-900 flex justify-center items-center'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                        </div>
                        <span className='text-gray-300 text-sm font-normal'>
                          320 Likes
                        </span>
                      </div>
                    </div>
                    <div className='text-white transition duration-300 group-hover:text-primary text-lg font-medium mt-3'>
                      Leaves From Life
                    </div>
                    <div className='rounded-md bg-black flex justify-between items-center p-3 mt-3'>
                      <span className='text-white text-sm font-normal leading-none'>
                        Current Bid
                      </span>
                      <span className='text-white group-hover:text-primary text-sm font-normal leading-none'>
                        BID 50 ETH
                      </span>
                    </div>
                  </div>
                  <div className='p-3 bg-gray-900 rounded-md transition duration-300 group hover:glow-cpt-primary'>
                    <div>
                      <Image
                        src='/imgs/cryptex/flame-sun.jpg'
                        width={300}
                        height={300}
                        alt='flame-sun'
                        className='rounded-md'
                      />
                    </div>
                    <div className='flex justify-between items-center gap-5 mt-3'>
                      <div className='flex justify-start items-center gap-2'>
                        <div className="w-8 h-8 rounded-md bg-[url('/imgs/cryptex/avatar-4.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className='relative rounded-md w-fit'>
                          <div className="w-8 h-8 rounded-md bg-[url('/imgs/cryptex/avatar-3.jpg')] bg-no-repeat bg-center bg-cover" />
                          <div className='absolute rounded-full bottom-0 -right-1 w-3 h-3 bg-teal-500 border border-white flex justify-center items-center'>
                            <BsCheck className='text-white text-base' />
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-start items-center gap-2'>
                        <div className='w-8 h-8 rounded-full bg-stone-900 flex justify-center items-center'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                        </div>
                        <span className='text-gray-300 text-sm font-normal'>
                          320 Likes
                        </span>
                      </div>
                    </div>
                    <div className='text-white transition duration-300 group-hover:text-primary text-lg font-medium mt-3'>
                      Twilight Fracture City
                    </div>
                    <div className='rounded-md bg-black flex justify-between items-center p-3 mt-3'>
                      <span className='text-white text-sm font-normal leading-none'>
                        Current Bid
                      </span>
                      <span className='text-white group-hover:text-primary text-sm font-normal leading-none'>
                        BID 50 ETH
                      </span>
                    </div>
                  </div>
                  <div className='p-3 bg-gray-900 rounded-md transition duration-300 group hover:glow-cpt-primary'>
                    <div>
                      <Image
                        src='/imgs/cryptex/house-sun.jpg'
                        width={300}
                        height={300}
                        alt='house-sun'
                        className='rounded-md'
                      />
                    </div>
                    <div className='flex justify-between items-center gap-5 mt-3'>
                      <div className='flex justify-start items-center gap-2'>
                        <div className="w-8 h-8 rounded-md bg-[url('/imgs/cryptex/avatar-2.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className='relative rounded-md w-fit'>
                          <div className="w-8 h-8 rounded-md bg-[url('/imgs/cryptex/avatar-4.jpg')] bg-no-repeat bg-center bg-cover" />
                          <div className='absolute rounded-full bottom-0 -right-1 w-3 h-3 bg-teal-500 border border-white flex justify-center items-center'>
                            <BsCheck className='text-white text-base' />
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-start items-center gap-2'>
                        <div className='w-8 h-8 rounded-full bg-stone-900 flex justify-center items-center'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                        </div>
                        <span className='text-gray-300 text-sm font-normal'>
                          320 Likes
                        </span>
                      </div>
                    </div>
                    <div className='text-white transition duration-300 group-hover:text-primary text-lg font-medium mt-3'>
                      Dream Sequence Night
                    </div>
                    <div className='rounded-md bg-black flex justify-between items-center p-3 mt-3'>
                      <span className='text-white text-sm font-normal leading-none'>
                        Current Bid
                      </span>
                      <span className='text-white group-hover:text-primary text-sm font-normal leading-none'>
                        BID 50 ETH
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End of featured section */}
          <section>
            <div className="h-fit w-full bg-[url('/imgs/cryptex/dark-red.jpg')] bg-no-repeat bg-cover bg-center">
              <div className='w-full h-full bg-zinc-900 bg-opacity-70'>
                <div className='w-[98%] lg:w-[90%] xl:w-[80%] mx-auto py-24 md:py-32'>
                  <h2 className='text-4xl md:text-5xl font-semibold leading-none text-white text-center mb-7 md:mb-14'>
                    Best Place To Collect NFT
                  </h2>
                  <p className='text-lg md:text-2xl font-normal leading-normal text-white text-center w-full xs:w-[70%] mx-auto mb-7 md:mb-14'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean mollis ligula sed diam sollicitudin, aliquam
                    fermentum sapien consectetur. Donec consectetur et ex at
                    vulputate consectetur adipiscing elit. Aenean mollis ligula
                    sed diam sollicitudin, aliquam
                  </p>
                  <div className='flex flex-col xs:flex-row justify-center gap-8 items-center'>
                    <button className='flex justify-start items-center gap-3 px-4 md:px-6 py-2 md:py-3 border-2 border-primary bg-transparent tramsition duration-300 hover:bg-primary shadow-sm rounded-full'>
                      <span className='text-lg md:text-xl lg:text-lg font-medium leading-none text-white'>
                        Create
                      </span>
                      <span className='w-fit mx-auto'>
                        <MdOutlineArrowForwardIos className='text-xl text-white z-20' />
                      </span>
                    </button>
                    <button className='text-lg md:text-xl lg:text-lg font-medium leading-none px-4 md:px-6 py-2 md:py-3 border-2 border-primary bg-transparent tramsition duration-300 hover:bg-primary text-white shadow-sm rounded-full'>
                      Connect Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End of collect section */}
          <section>
            <div className='bg-zinc-900'>
              <div className='w-[98%] lg:w-[90%] xl:w-[80%] mx-auto py-24 md:py-32'>
                <h2 className='text-4xl md:text-5xl font-semibold leading-none text-white text-center mb-14'>
                  Popular Collection
                </h2>
                <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 place-items-stretch gap-7 md:gap-14'>
                  <div className=''>
                    <div className='relative w-fit border-[3px] border-white'>
                      <Image
                        src='/imgs/cryptex/pattern.jpg'
                        width={500}
                        height={500}
                        alt='pattern'
                      />
                      <div className='absolute -bottom-12 left-0 right-0 mx-auto rounded-full w-fit border-[3px] border-primary'>
                        <div className="w-24 h-24 rounded-full bg-[url('/imgs/cryptex/avatar-3.jpg')] bg-no-repeat bg-center bg-cover" />
                      </div>
                    </div>
                    <div className='mt-14'>
                      <h3 className='text-white font-light text-3xl leading-none text-center mb-4'>
                        Todd MacWilliams
                      </h3>
                      <p className='text-sm font-normal text-white text-center'>
                        By <span className='text-primary'>Shape Master</span>
                      </p>
                    </div>
                  </div>
                  <div className=''>
                    <div className='relative w-fit border-[3px] border-white'>
                      <Image
                        src='/imgs/cryptex/leafs.jpg'
                        width={500}
                        height={500}
                        alt='leafs'
                      />
                      <div className='absolute -bottom-12 left-0 right-0 mx-auto rounded-full w-fit border-[3px] border-primary'>
                        <div className="w-24 h-24 rounded-full bg-[url('/imgs/cryptex/avatar-4.jpg')] bg-no-repeat bg-center bg-cover" />
                      </div>
                    </div>
                    <div className='mt-14'>
                      <h3 className='text-white font-light text-3xl leading-none text-center mb-4'>
                        Todd MacWilliams
                      </h3>
                      <p className='text-sm font-normal text-white text-center'>
                        By <span className='text-primary'>Bit Coin</span>
                      </p>
                    </div>
                  </div>
                  <div className=''>
                    <div className='relative w-fit border-[3px] border-white'>
                      <Image
                        src='/imgs/cryptex/leafs-2.jpg'
                        width={500}
                        height={500}
                        alt='leafs 2'
                      />
                      <div className='absolute -bottom-12 left-0 right-0 mx-auto rounded-full w-fit border-[3px] border-primary'>
                        <div className="w-24 h-24 rounded-full bg-[url('/imgs/cryptex/avatar-2.jpg')] bg-no-repeat bg-center bg-cover" />
                      </div>
                    </div>
                    <div className='mt-14'>
                      <h3 className='text-white font-light text-3xl leading-none text-center mb-4'>
                        Todd MacWilliams
                      </h3>
                      <p className='text-sm font-normal text-white text-center'>
                        By <span className='text-primary'>Art</span>
                      </p>
                    </div>
                  </div>
                  <div className=''>
                    <div className='relative w-fit border-[3px] border-white'>
                      <Image
                        src='/imgs/cryptex/flame-sun.jpg'
                        width={500}
                        height={500}
                        alt='flame sun'
                      />
                      <div className='absolute -bottom-12 left-0 right-0 mx-auto rounded-full w-fit border-[3px] border-primary'>
                        <div className="w-24 h-24 rounded-full bg-[url('/imgs/cryptex/avatar-2.jpg')] bg-no-repeat bg-center bg-cover" />
                      </div>
                    </div>
                    <div className='mt-14'>
                      <h3 className='text-white font-light text-3xl leading-none text-center mb-4'>
                        Todd MacWilliams
                      </h3>
                      <p className='text-sm font-normal text-white text-center'>
                        By <span className='text-primary'>Shape Master</span>
                      </p>
                    </div>
                  </div>
                  <div className=''>
                    <div className='relative w-fit border-[3px] border-white'>
                      <Image
                        src='/imgs/cryptex/house-sun.jpg'
                        width={500}
                        height={500}
                        alt='house sun'
                      />
                      <div className='absolute -bottom-12 left-0 right-0 mx-auto rounded-full w-fit border-[3px] border-primary'>
                        <div className="w-24 h-24 rounded-full bg-[url('/imgs/cryptex/avatar-3.jpg')] bg-no-repeat bg-center bg-cover" />
                      </div>
                    </div>
                    <div className='mt-14'>
                      <h3 className='text-white font-light text-3xl leading-none text-center mb-4'>
                        Todd MacWilliams
                      </h3>
                      <p className='text-sm font-normal text-white text-center'>
                        By <span className='text-primary'>Bit Coin</span>
                      </p>
                    </div>
                  </div>
                  <div className=''>
                    <div className='relative w-fit border-[3px] border-white'>
                      <Image
                        src='/imgs/cryptex/leafs.jpg'
                        width={500}
                        height={500}
                        alt='leafs'
                      />
                      <div className='absolute -bottom-12 left-0 right-0 mx-auto rounded-full w-fit border-[3px] border-primary'>
                        <div className="w-24 h-24 rounded-full bg-[url('/imgs/cryptex/avatar-1.jpg')] bg-no-repeat bg-center bg-cover" />
                      </div>
                    </div>
                    <div className='mt-14'>
                      <h3 className='text-white font-light text-3xl leading-none text-center mb-4'>
                        Todd MacWilliams
                      </h3>
                      <p className='text-sm font-normal text-white text-center'>
                        By <span className='text-primary'>Art</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End of popular collection section */}
          <section>
            <div className='bg-black'>
              <div className='w-[98%] lg:w-[90%] xl:w-[80%] mx-auto py-24 md:py-32'>
                <h2 className='text-4xl md:text-5xl font-semibold leading-none text-white text-center mb-14'>
                  Latest Post of NFTs
                </h2>
                <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 place-items-center place-content-center gap-10'>
                  <div className='rounded-md group'>
                    <div className='relative w-fit rounded-t-md'>
                      <Image
                        src='/imgs/cryptex/bg-colored.jpg'
                        width={500}
                        height={500}
                        alt='colored bg'
                        className='rounded-t-md transition duration-300 group-hover:rounded-md'
                      />
                      <div className='text-base font-light text-white transition duration-300 group-hover:text-yellow-700 absolute top-5 left-5 z-10'>
                        New Post
                      </div>
                    </div>
                    <div className='bg-zinc-900 transition duration-300 group-hover:bg-gray-900 p-4 rounded-b-md'>
                      <p className='text-base font-normal text-white transition duration-300 group-hover:text-primary mb-4'>
                        Pencil Drawing Text Stock Images In HD and Millions
                      </p>
                      <div className='flex justify-between items-center gap-5'>
                        <p className='text-xs font-light text-white'>
                          Dec 14, 2021
                        </p>
                        <p className='text-xs font-normal text-primary underline underline-offset-2'>
                          Read More
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='rounded-md group'>
                    <div className='relative w-fit rounded-t-md'>
                      <Image
                        src='/imgs/cryptex/peeling-woman.jpg'
                        width={500}
                        height={500}
                        alt='woman peeling'
                        className='rounded-t-md transition duration-300 group-hover:rounded-md'
                      />
                      <div className='text-base font-light text-white transition duration-300 group-hover:text-yellow-700 absolute top-5 left-5 z-10'>
                        New Post
                      </div>
                    </div>
                    <div className='bg-zinc-900 transition duration-300 group-hover:bg-gray-900 p-4 rounded-b-md'>
                      <p className='text-base font-normal text-white transition duration-300 group-hover:text-primary mb-4'>
                        Pencil Drawing Text Stock Images In HD and Millions
                      </p>
                      <div className='flex justify-between items-center gap-5'>
                        <p className='text-xs font-light text-white'>
                          Dec 14, 2021
                        </p>
                        <p className='text-xs font-normal text-primary underline underline-offset-2'>
                          Read More
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='rounded-md grop0'>
                    <div className='relative w-fit rounded-t-md'>
                      <Image
                        src='/imgs/cryptex/bg-paint.jpg'
                        width={500}
                        height={500}
                        alt='paint bg'
                        className='rounded-t-md transition duration-300 group-hover:rounded-md'
                      />
                      <div className='text-base font-light text-white transition duration-300 group-hover:text-yellow-700 absolute top-5 left-5 z-10'>
                        New Post
                      </div>
                    </div>
                    <div className='bg-zinc-900 transition duration-300 group-hover:bg-gray-900 p-4 rounded-b-md'>
                      <p className='text-base font-normal text-white transition duration-300 group-hover:text-primary mb-4'>
                        Pencil Drawing Text Stock Images In HD and Millions
                      </p>
                      <div className='flex justify-between items-center gap-5'>
                        <p className='text-xs font-light text-white'>
                          Dec 14, 2021
                        </p>
                        <p className='text-xs font-normal text-primary underline underline-offset-2'>
                          Read More
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End of Latest Post section */}
        </div>
      </main>
      {/* End of Main */}
      <footer>
        <div className='max-w-[90rem] mx-auto'>
          <section>
            <div className='bg-stone-900'>
              <div className='w-[98%] lg:w-[90%] xl:w-[80%] mx-auto pt-24 lg:pt-32 pb-16'>
                <div className='grid grid-cols-1 lg:grid-cols-3 place-items-stretch gap-20 lg:gap-10'>
                  <div className='w-full xs:w-[70%] lg:w-full'>
                    <h3 className='text-xl font-medium leading-none text-white mb-8'>
                      Newsletter
                    </h3>
                    <p className='text-base font-light text-white mb-10'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean mollis ligula sed diam sollicitudin, aliquam
                      fermentum
                    </p>
                    <div className='flex justify-start items-stretch gap-0'>
                      <input
                        type='email'
                        placeholder='Email'
                        className='bg-white rounded-l-md py-3 px-2 text-zinc-900 flex-grow'
                      />
                      <button className='relative -left-2 bg-primary py-4 px-6 rounded-md'>
                        <TbBrandTelegram className='text-white text-2xl' />
                      </button>
                    </div>
                  </div>
                  <div className='col-span-full lg:col-span-2'>
                    <div className='grid grid-cols-1 xs:grid-cols-4 gap-10 xs:gap-5 place-items-stretch'>
                      <div className=''>
                        <h3 className='text-xl font-medium leading-none text-white mb-8'>
                          Market Place
                        </h3>
                        <div className='flex flex-col gap-3 items-start justify-start'>
                          <p className='text-base font-light text-white'>
                            Market Art
                          </p>
                          <p className='text-base font-light text-white'>
                            All NFTs
                          </p>
                          <p className='text-base font-light text-white'>Art</p>
                          <p className='text-base font-light text-white'>
                            Music
                          </p>
                          <p className='text-base font-light text-white'>
                            Trending Cards
                          </p>
                        </div>
                      </div>
                      <div className=''>
                        <h3 className='text-xl font-medium leading-none text-white mb-8'>
                          My Account
                        </h3>
                        <div className='flex flex-col gap-3 items-start justify-start'>
                          <p className='text-base font-light text-white'>
                            Authors
                          </p>
                          <p className='text-base font-light text-white'>
                            Collection
                          </p>
                          <p className='text-base font-light text-white'>
                            Author Profile
                          </p>
                          <p className='text-base font-light text-white'>
                            Create Collection
                          </p>
                        </div>
                      </div>
                      <div className=''>
                        <h3 className='text-xl font-medium leading-none text-white mb-8'>
                          Resources
                        </h3>
                        <div className='flex flex-col gap-3 items-start justify-start'>
                          <p className='text-base font-light text-white'>
                            Helps & Support
                          </p>
                          <p className='text-base font-light text-white'>
                            Live Auctions
                          </p>
                          <p className='text-base font-light text-white'>
                            Item Details
                          </p>
                          <p className='text-base font-light text-white'>
                            Activity
                          </p>
                        </div>
                      </div>
                      <div className=''>
                        <h3 className='text-xl font-medium leading-none text-white mb-8'>
                          Company
                        </h3>
                        <div className='flex flex-col gap-3 items-start justify-start'>
                          <p className='text-base font-light text-white'>
                            About Us
                          </p>
                          <p className='text-base font-light text-white'>
                            Our Blog
                          </p>
                          <p className='text-base font-light text-white'>
                            Discover
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End of Footer Body Section */}
          <section>
            <div className='bg-zinc-900'>
              <div className='w-[98%] lg:w-[90%] xl:w-[80%] mx-auto py-7'>
                <p className='text-white text-base font-normal text-center'>
                  Copyright &copy; 2021 by Cryptex
                  <span className='mx-4 block xs:inline'>&middot;</span>
                  Designed by{' '}
                  <span className='text-primary font-medium'>
                    Mmesoma Saint
                  </span>
                  <span className='mx-4 block xs:inline'>&middot;</span>
                  All Rights Reserved
                </p>
              </div>
            </div>
          </section>
          {/* End of footer base section */}
        </div>
      </footer>
      {/* End of Footer */}
    </div>
  )
}
