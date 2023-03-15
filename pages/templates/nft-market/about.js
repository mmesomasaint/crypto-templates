import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useCallback } from 'react'
import {
  BsSearch,
  BsFillPlayFill,
  BsMusicNoteBeamed,
  BsPaletteFill,
  BsFillBarChartLineFill,
  BsFillHeartFill,
  BsCashCoin,
  BsTwitter,
  BsInstagram,
  BsTelephone,
} from 'react-icons/bs'
import {
  MdPhotoLibrary,
  MdAddToPhotos,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md'
import {
  AiOutlineCloudUpload,
  AiOutlineShareAlt,
  AiOutlineMail,
} from 'react-icons/ai'
import { GiWallet, GiHamburgerMenu } from 'react-icons/gi'
import { FaEthereum, FaMedal, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { GoLocation, GoPrimitiveDot } from 'react-icons/go'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = useCallback(() => setIsOpen((open) => !open), [])

  return (
    <div className='bg-[#212429]'>
      <Head>
        <title>NFT Market</title>
        <meta
          name='description'
          content='create, sell or collect digital items'
        />
        <link rel='icon' href='/imgs/nft-market/favicon.ico' />
      </Head>
      <header className='absolute w-full w-transparent'>
        <div
          className={`relative max-w-[90rem] mx-auto ${
            isOpen && 'bg-[#212429] sm:bg-transparent'
          }`}
        >
          <div className='w-[98%] xl:w-[80%] mx-auto py-9'>
            <div className='flex justify-between items-center gap-6'>
              <div className=''>
                <Image
                  src='/imgs/nft-market/logo.png'
                  width={50}
                  height={30}
                  alt='logo'
                />
              </div>
              <div className='flex justify-between items-center gap-7'>
                <div className='block lg:hidden'>
                  <GiHamburgerMenu
                    className='text-3xl text-white'
                    onClick={handleOpen}
                  />
                </div>
                <div
                  className={`${
                    isOpen ? 'flex bg-[#212429] sm:bg-transparent' : 'hidden'
                  } w-full md:w-fit flex-col md:flex-row absolute top-[99%] left-0 md:static md:flex justify-evenly items-start md:items-center gap-7 px-[1%] py-5 md:p-0`}
                >
                  <span className='font-normal text-lg leading-none text-white hover:text-[#16F24D] transition duration-300 hover:glow-nft-primary'>
                    <Link href='/templates/nft-market'>Home</Link>
                  </span>
                  <span className='font-normal text-lg leading-none text-white hover:text-[#16F24D] transition duration-300 hover:glow-nft-primary'>
                    <Link href='/templates/nft-market/collection'>
                      Collection
                    </Link>
                  </span>
                  <span className='font-normal text-lg leading-none text-[#16F24D] scale-105 underline underline-offset-[6px] glow-nft-primary'>
                    <Link href='/templates/nft-market/about'>About</Link>
                  </span>
                  <span className='font-normal text-lg leading-none text-white hover:text-[#16F24D] transition duration-300 hover:glow-nft-primary'>
                    <Link href='/templates/nft-market/nft'>NFT</Link>
                  </span>
                  <span className='font-normal text-lg leading-none text-white hover:text-[#16F24D] transition duration-300 hover:glow-nft-primary'>
                    <Link href='/templates/nft-market/blog'>Blog</Link>
                  </span>
                  <span className='font-normal text-lg leading-none text-white hover:text-[#16F24D] transition duration-300 hover:glow-nft-primary'>
                    <Link href='/templates/nft-market/contact'>Contact</Link>
                  </span>
                  <div className='relative hidden lg:block'>
                    <input
                      type='text'
                      placeholder='Search Here'
                      className='pl-10 py-3 text-base text-white bg-white bg-opacity-30 focus:outline-none focus-within:text-black rounded-md leading-none'
                    />
                    <div className='absolute top-0 w-fit h-full flex items-center ml-3 pointer-events-none'>
                      <BsSearch className='text-white text-lg text-opacity-70' />
                    </div>
                  </div>
                  <div className='lg:hidden'>
                    <BsSearch className='text-white text-lg lg:text-xl' />
                  </div>
                </div>
                <button className='text-base py-4 px-7 font-medium leading-none bg-[#16F24D] rounded-md transition duration-300 hover:glow-nft-primary'>
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className='max-w-[90rem] mx-auto'>
          <div className="h-fit md:h-[30rem] w-full bg-[url('/imgs/nft-market/main-sm.jpeg')] bg-no-repeat bg-cover bg-bottom">
            <div className='bg-[rgba(0,0,255,0.35)] w-full h-full'>
              <div className='bg-[rgba(0,0,0,0.55)] w-full h-full'>
                <div className='flex gap-1 justify-center items-center w-[98%] xl:w-[80%] mx-auto h-full'>
                  <div className='w-full h-fit pt-32 md:pt-16 pb-16 md:pb-0'>
                    <h5 className='text-[#16F24D] text-xl lg:text-2xl text-center font-semibold capitalize mb-4'>
                      Welcome To NFT Market
                    </h5>
                    <h1 className='text-white text-5xl lg:text-6xl text-center font-bold capitalize mb-4'>
                      About Us
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='py-16 w-[98%] xl:w-[80%] mx-auto'>
            <h2 className='text-4xl lg:text-5xl font-semibold leading-tight text-white text-center'>
              Why Choose Our Product
            </h2>
            <div className='grid grid-cols-7 gap-10 place-items-stretch mt-10'>
              <div className='col-span-full md:col-span-3'>
                <div className='flex justify-center items-center relative border-2 border-[#16F24D] rounded-md w-fit mx-auto'>
                  <div className='bg-[#16F24D] w-20 h-20 rounded-full flex justify-center items-center absolute inset-0 mx-auto my-auto z-10'>
                    <BsFillPlayFill className='text-white text-8xl' />
                  </div>
                  <Image
                    src='/imgs/nft-market/color-model.jpg'
                    width={350}
                    height={350}
                    alt='color model'
                    className='rounded-md'
                  />
                </div>
              </div>
              <div className='col-span-full md:col-span-4'>
                <p className='text-gray-300 text-lg font-normal mb-10'>
                  Written in this book is a treatise on the Theory of Ethics
                  very popular during the renaissance. The first line of Lorem
                  Ipsum "Lorem Ipsum Dolor Sit Amet".
                </p>
                <div className='flex flex-col justify-start items-start gap-5 mb-10'>
                  <div className='flex justify-start items-center gap-2'>
                    <GoPrimitiveDot className='text-[#16F24D] text-base' />
                    <p className='text-gray-300 text-lg font-normal'>
                      Except to obtain some advantage from it
                    </p>
                  </div>
                  <div className='flex justify-start items-center gap-2'>
                    <GoPrimitiveDot className='text-[#16F24D] text-base' />
                    <p className='text-gray-300 text-lg font-normal'>
                      Nullam at eros quis nibh iaculis pelle nullaestibulum
                    </p>
                  </div>
                  <div className='flex justify-start items-center gap-2'>
                    <GoPrimitiveDot className='text-[#16F24D] text-base' />
                    <p className='text-gray-300 text-lg font-normal'>
                      Nulo obtain some at eros quis nibh iaculis
                    </p>
                  </div>
                  <div className='flex justify-start items-center gap-2'>
                    <GoPrimitiveDot className='text-[#16F24D] text-base' />
                    <p className='text-gray-300 text-lg font-normal'>
                      Nullam at eros quis nibh iaculis pellentesque eget from
                    </p>
                  </div>
                  <div className='flex justify-start items-center gap-2'>
                    <GoPrimitiveDot className='text-[#16F24D] text-base' />
                    <p className='text-gray-300 text-lg font-normal'>
                      Except to obtain some teros iaculis some advantage from it
                    </p>
                  </div>
                </div>
                <div className='flex justify-center items-center p-8 bg-black border-2 border-[#16F24D] text-white w-[60%] rounded-md'>
                  <span className='text-3xl font-bold leading-none'>
                    25-35-56
                  </span>
                  <span className='text-4xl font-semibold leading-none mx-2'>|</span>
                  <span className='text-2xl font-semibold leading-none'>
                    Live Time
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='py-12 w-[98%] xl:w-[80%] mx-auto h-fit'>
            <h2 className='text-5xl font-semibold leading-none text-white text-center'>
              Create, Sell Your NFT
            </h2>
            <div className='w-fit mx-auto p-2 bg-[#212429] my-[1rem] lg:my-[10rem] relative flex flex-col lg:block'>
              <div className='lg:absolute -top-32 -right-[2rem] flex flex-wrap justify-center sm:justify-start items-end gap-2 my-3 lg:my-0'>
                <div className='lg:relative -bottom-8 bg-[#212429] rounded-md p-0 lg:p-2'>
                  <Image
                    src='/imgs/nft-market/abstract.jpg'
                    width={240}
                    height={250}
                    alt='abstract'
                    className='rounded-md border border-white'
                  />
                </div>
                <div className='group w-fit sm:w-[23rem] h-fit border border-gray-500 hover:border-[#16F24D] rounded-md transition duration-300 hover:glow-nft-primary'>
                  <div className='relative backdrop-blur bg-[#26292E] transition duration-300 group-hover:bg-black flex flex-col justify-start items-start gap-2 p-2 h-full rounded-md overflow-x-hidden'>
                    <div className='absolute -right-12 rotate-45 -top-12 z-10'>
                      <Image
                        src='/imgs/nft-market/chip.png'
                        width={120}
                        height={120}
                        alt='chip'
                      />
                    </div>
                    <GiWallet className='text-[#16F24D] text-5xl' />
                    <div className=''>
                      <h4 className='block text-white transition duration-300 group-hover:text-[#16F24D] text-xl font-medium'>
                        Jitbe Abar yigrit
                      </h4>
                      <p className='block text-gray-300 text-xs font-light'>
                        Nulla nulla magna, pretium porttitor lobortis ut, auctor
                        at felis. Phasellus id lorem a velit venenatis
                        vestibulum. Aliquam eget cursus lacus. Curabitur rutrum
                        diam orci, ac aliquet ex congue vel. Maecenas sit amet
                        vulputate erat. Donec at est pharetra
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='lg:absolute -bottom-[10.6rem] -left-[2rem] flex flex-wrap justify-center sm:justify-start items-end gap-2 my-3 lg:my-0'>
                <div className='lg:relative -top-16 bg-[#212429] rounded-md p-0 lg:p-2 flex-shrink-0'>
                  <Image
                    src='/imgs/nft-market/abstract.jpg'
                    width={240}
                    height={250}
                    alt='abstract'
                    className='rounded-md border border-white'
                  />
                </div>
                <div className='group flex-shrink sm:flex-shrink-0 w-fit sm:w-[23rem] h-fit border border-gray-500 hover:border-[#16F24D] rounded-md transition duration-300 hover:glow-nft-primary'>
                  <div className='relative backdrop-blur bg-[#26292E] transition duration-300 group-hover:bg-black flex flex-col justify-start items-start gap-2 p-2 h-full rounded-md overflow-x-hidden'>
                    <div className='absolute -right-12 rotate-45 -top-12 z-10'>
                      <Image
                        src='/imgs/nft-market/chip.png'
                        width={120}
                        height={120}
                        alt='chip'
                      />
                    </div>
                    <BsCashCoin className='text-[#16F24D] text-5xl' />
                    <div className=''>
                      <h4 className='block text-white transition duration-300 group-hover:text-[#16F24D] text-xl font-medium'>
                        Jitbe Abar yigrit
                      </h4>
                      <p className='block text-gray-300 text-xs font-light'>
                        Nulla nulla magna, pretium porttitor lobortis ut, auctor
                        at felis. Phasellus id lorem a velit venenatis
                        vestibulum. Aliquam eget cursus lacus. Curabitur rutrum
                        diam orci, ac aliquet ex congue vel. Maecenas sit amet
                        vulputate erat. Donec at est pharetra
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-wrap justify-center md:justify-start items-end gap-3 my-3 lg:my-0 order-first'>
                <Image
                  src='/imgs/nft-market/sailing-ship.jpg'
                  width={400}
                  height={400}
                  alt='sailing-ship'
                  className='w-[240px] sm:w-[350px] lg:w-[400px] rounded-md border border-white flex-shrink-0'
                />
                <div className='group flex-shrink-0 w-fit sm:w-[23rem] h-fit border border-gray-500 hover:border-[#16F24D] rounded-md transition duration-300 hover:glow-nft-primary'>
                  <div className='relative backdrop-blur bg-[#26292E] transition duration-300 group-hover:bg-black flex flex-col justify-start items-start gap-2 p-2 h-full rounded-md overflow-x-hidden'>
                    <div className='absolute -right-12 rotate-45 -top-12 z-10'>
                      <Image
                        src='/imgs/nft-market/chip.png'
                        width={120}
                        height={120}
                        alt='chip'
                      />
                    </div>
                    <AiOutlineCloudUpload className='text-[#16F24D] text-5xl' />
                    <div className=''>
                      <h4 className='block text-white transition duration-300 group-hover:text-[#16F24D] text-xl font-medium'>
                        Jitbe Abar yigrit
                      </h4>
                      <p className='block text-gray-300 text-xs font-light'>
                        Nulla nulla magna, pretium porttitor lobortis ut, auctor
                        at felis. Phasellus id lorem a velit venenatis
                        vestibulum. Aliquam eget cursus lacus. Curabitur rutrum
                        diam orci, ac aliquet ex congue vel. Maecenas sit amet
                        vulputate erat. Donec at est pharetra
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='py-16 bg-[#171A1F]'>
            <div className='w-[98%] xl:w-[80%] mx-auto'>
              <div className='grid grid-cols-3 sm:grid-cols-9 place-items-center gap-10'>
                <div className=''>
                  <Image
                    src='/imgs/nft-market/microsoft.png'
                    width={50}
                    height={50}
                    alt='microsoft logo'
                  />
                </div>
                <div className=''>
                  <Image
                    src='/imgs/nft-market/electronics-arts.png'
                    width={50}
                    height={50}
                    alt='electronics arts logo'
                  />
                </div>
                <div className=''>
                  <Image
                    src='/imgs/nft-market/huawei.png'
                    width={50}
                    height={50}
                    alt='huawei logo'
                  />
                </div>
                <div className=''>
                  <Image
                    src='/imgs/nft-market/ibm.png'
                    width={50}
                    height={50}
                    alt='ibm logo'
                  />
                </div>
                <div className=''>
                  <Image
                    src='/imgs/nft-market/pinterest.png'
                    width={50}
                    height={50}
                    alt='pinterest logo'
                  />
                </div>
                <div className=''>
                  <Image
                    src='/imgs/nft-market/linkedin.png'
                    width={50}
                    height={50}
                    alt='linkedin logo'
                  />
                </div>
                <div className=''>
                  <Image
                    src='/imgs/nft-market/snapchat.png'
                    width={50}
                    height={50}
                    alt='snapchat logo'
                  />
                </div>
                <div className=''>
                  <Image
                    src='/imgs/nft-market/tencent.png'
                    width={50}
                    height={50}
                    alt='tencent logo'
                  />
                </div>
                <div className=''>
                  <Image
                    src='/imgs/nft-market/twitch.png'
                    width={50}
                    height={50}
                    alt='twitch logo'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className='max-w-[90rem] mx-auto'>
          <div className='pt-24 w-[98%] xl:w-[80%] mx-auto'>
            <div className='flex flex-col justify-start items-center gap-10'>
              <div className='w-32 h-32 bg-[#16F24D] bg-opacity-20 rounded-full'>
                <div className='w-full h-full rounded-full bg-white bg-opacity-20 flex justify-center items-center'>
                  <Image
                    src='/imgs/nft-market/logo.png'
                    width={80}
                    height={80}
                    alt='logo'
                  />
                </div>
              </div>
              <p className='text-base font-light text-gray-300 w-[70%] text-center'>
                Nam ornare justo sit amet laoreet egestas. Etiam vel diam quis
                erat egestas accumsan et id purus. Suspendisse potenti.
                Vestibulum vehicula dapibus tellus, et varius libero maximus
                eget. Quisque quis nisl tellus. Nullam at eros quis nibh iaculis
                pellentesque eget ac nullaestibulum
              </p>
              <div className='flex justify-center items-center gap-7'>
                <div className='w-10 h-10 bg-[#212429] group hover:bg-black border border-gray-700 transition duration-300 hover:border-[#16F24D] rounded-full flex justify-center items-center'>
                  <FaFacebookF className='text-base text-white transition duration-300 group-hover:text-[#16F24D]' />
                </div>
                <div className='w-10 h-10 bg-[#212429] group hover:bg-black border border-gray-700 transition duration-300 hover:border-[#16F24D] rounded-full flex justify-center items-center'>
                  <FaLinkedinIn className='text-base text-white transition duration-300 group-hover:text-[#16F24D]' />
                </div>
                <div className='w-10 h-10 bg-[#212429] group hover:bg-black border border-gray-700 transition duration-300 hover:border-[#16F24D] rounded-full flex justify-center items-center'>
                  <BsInstagram className='text-base text-white transition duration-300 group-hover:text-[#16F24D]' />
                </div>
                <div className='w-10 h-10 bg-[#212429] group hover:bg-black border border-gray-700 transition duration-300 hover:border-[#16F24D] rounded-full flex justify-center items-center'>
                  <BsTwitter className='text-base text-white transition duration-300 group-hover:text-[#16F24D]' />
                </div>
                <div className='w-10 h-10 bg-[#212429] group hover:bg-black border border-gray-700 transition duration-300 hover:border-[#16F24D] rounded-full flex justify-center items-center'>
                  <AiOutlineMail className='text-base text-white transition duration-300 group-hover:text-[#16F24D]' />
                </div>
              </div>
            </div>
          </div>
          <div className='py-7'>
            <div className='py-7 bg-[#171A1F]'>
              <div className='w-[98%] xl:w-[80%] mx-auto'>
                <div className='flex flex-wrap justify-center items-center gap-10'>
                  <span className='font-normal text-lg leading-none text-white'>
                    <Link href='/templates/nft-market'>Home</Link>
                  </span>
                  <span className='font-normal text-lg leading-none text-white'>
                    <Link href='/templates/nft-market/collection'>
                      Collection
                    </Link>
                  </span>
                  <span className='font-normal text-lg leading-none text-white'>
                    <Link href='/templates/nft-market/about'>About Us</Link>
                  </span>
                  <span className='font-normal text-lg leading-none text-white'>
                    <Link href='/templates/nft-market/nft'>NFT</Link>
                  </span>
                  <span className='font-normal text-lg leading-none text-white'>
                    <Link href='/templates/nft-market/blog'>Blog</Link>
                  </span>
                  <span className='font-normal text-lg leading-none text-white'>
                    <Link href='/templates/nft-market/contact'>Contact</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='pb-7 w-[98%] xl:w-[80%] mx-auto'>
            <p className='text-center text-gray-300 text-base font-light'>
              &copy;2023 copyright by
              <span className='text-[#16F24D]'> mmesoma saint</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
