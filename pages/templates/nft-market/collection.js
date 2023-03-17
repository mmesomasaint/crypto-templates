import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useCallback } from 'react'
import {
  BsSearch,
  BsFillHeartFill,
  BsTwitter,
  BsInstagram,
} from 'react-icons/bs'
import { AiOutlineShareAlt, AiOutlineMail } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

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
            isOpen && 'bg-[#212429] md:bg-transparent'
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
                    isOpen ? 'flex bg-[#212429] md:bg-transparent' : 'hidden'
                  } w-full md:w-fit flex-col md:flex-row absolute z-10 top-[99%] left-0 md:static md:flex justify-evenly items-start md:items-center gap-7 px-[1%] py-5 md:p-0`}
                >
                  <span className='font-normal text-lg leading-none text-white hover:text-[#16F24D] transition duration-300 hover:glow-nft-primary'>
                    <Link href='/templates/nft-market'>Home</Link>
                  </span>
                  <span className='font-normal text-lg leading-none text-[#16F24D] scale-105 underline underline-offset-[6px] glow-nft-primary text-white hover:text-[#16F24D] transition duration-300 hover:glow-nft-primary'>
                    <Link href='/templates/nft-market/collection'>
                      Collection
                    </Link>
                  </span>
                  <span className='font-normal text-lg leading-none text-white hover:text-[#16F24D] transition duration-300 hover:glow-nft-primary'>
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
                      Stacked Art Collections
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='py-16'>
            <div className='max-w-[90rem] w-[80%] xl:w-[70%] mx-auto'>
              <div className='h-fit w-full bg-black group border border-[#16F24D] rounded-md glow-nft-primary'>
                <div className='p-5 sm:p-10'>
                  <div className='grid grid-cols-1 lg:grid-cols-2 place-items-stretch gap-10'>
                    <div className='p-2'>
                      <h2 className='text-2xl font-semibold text-white leading-none mb-5'>
                        Sale Period Ends
                      </h2>
                      <div className='flex gap-2 sm:gap-4 items-center justify-evenly sm:justify-start'>
                        <div className='flex flex-col items-center justify-center gap-2'>
                          <div className='p-2 backdrop-blur bg-[#16F24D] bg-opacity-30 rounded-md flex justify-center items-center'>
                            <p className='text-xl sm:text-3xl font-bold leading-none text-white'>
                              00
                            </p>
                          </div>
                          <p className='text-base sm:text-lg font-medium text-white leading-none'>
                            Days
                          </p>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-2'>
                          <div className='p-2 backdrop-blur bg-[#16F24D] bg-opacity-30 rounded-md flex justify-center items-center'>
                            <p className='text-xl sm:text-3xl font-bold leading-none text-white'>
                              24
                            </p>
                          </div>
                          <p className='text-base sm:text-lg font-medium text-white leading-none'>
                            Hours
                          </p>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-2'>
                          <div className='p-2 backdrop-blur bg-[#16F24D] bg-opacity-30 rounded-md flex justify-center items-center'>
                            <p className='text-xl sm:text-3xl font-bold leading-none text-white'>
                              21
                            </p>
                          </div>
                          <p className='text-base sm:text-lg font-medium text-white leading-none'>
                            Min
                          </p>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-2'>
                          <div className='p-2 backdrop-blur bg-[#16F24D] bg-opacity-30 rounded-md flex justify-center items-center'>
                            <p className='text-xl sm:text-3xl font-bold leading-none text-white'>
                              34
                            </p>
                          </div>
                          <p className='text-base sm:text-lg font-medium text-white leading-none'>
                            Sec
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='p-2'>
                      <div className='grid grid-cols-2 place-items-stretch gap-5 mb-8 sm:mb-4'>
                        <div className='text-white text-base lg:text-sm font-normal'>
                          <div className='mb-1'>nec euismod</div>
                          <div> consectetur adipiscing</div>
                        </div>
                        <div className='text-white text-base lg:text-sm font-normal'>
                          <div className='mb-1'>nec euismod</div>
                          <div> consectetur adipiscing</div>
                        </div>
                        <div className='text-white text-base lg:text-sm font-normal'>
                          <div className='mb-1'>nec euismod</div>
                          <div> consectetur adipiscing</div>
                        </div>
                        <div className='text-white text-base lg:text-sm font-normal'>
                          <div className='mb-1'>nec euismod</div>
                          <div> consectetur adipiscing</div>
                        </div>
                      </div>
                      <div>
                        <button className='text-xl lg:text-base font-medium leading-normal px-4 py-2 border border-[#16F24D] text-[#16F24D] rounded-md shadow-sm'>
                          Request for the proper token
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='py-12 w-[98%] xl:w-[80%] mx-auto h-fit'>
            <h2 className='text-5xl font-semibold leading-none text-white text-center'>
              Live Auction
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center sm:place-items-stretch gap-10 py-20'>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md transition duration-300 hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] transition duration-300 group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
                  <div className='h-[220px] flex items-center justify-center overflow-hidden rounded-md'>
                    <div className='h-fit'>
                      <Image
                        src='/imgs/nft-market/nft-demon.jpg'
                        width={320}
                        height={150}
                        alt='nft demon'
                        className='rounded-md'
                      />
                    </div>
                  </div>
                  <div className='w-full flex justify-between items-start gap-7'>
                    <div className=''>
                      <h4 className='block text-white text-base font-medium'>
                        3D Shape Artiste
                      </h4>
                      <p className='block text-gray-500 text-sm font-normal'>
                        8.20 ETH
                      </p>
                    </div>
                    <div className='text-right'>
                      <p className='block text-sm font-normal text-[#16F24D]'>
                        120 : 12 : 33 : 12
                      </p>
                    </div>
                  </div>
                  <div className='w-full flex justify-between items-center gap-7'>
                    <div className='flex justify-start items-center gap-3'>
                      <div className=' w-6 h-6 flex justify-center items-center rounded-full border border-gray-500 transition duration-300 group-hover:border-[#16F24D]'>
                        <BsFillHeartFill className='text-gray-500 transition duration-300 group-hover:text-[#16F24D] text-sm flex-shrink-0' />
                      </div>
                      <div className=' w-6 h-6 flex justify-center items-center rounded-full border border-gray-500 transition duration-300 group-hover:border-[#16F24D]'>
                        <AiOutlineShareAlt className='text-gray-500 transition duration-300 group-hover:text-[#16F24D] text-sm flex-shrink-0' />
                      </div>
                    </div>
                    <button className='border border-gray-500 transition duration-300 group-hover:border-[#16F24D] rounded-md py-1 px-5 text-gray-500 group-hover:text-[#16F24D]'>
                      Price a Bid
                    </button>
                  </div>
                </div>
              </div>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md transition duration-300 hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] transition duration-300 group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
                  <div className='h-[220px] flex items-center justify-center overflow-hidden rounded-md'>
                    <div className='h-fit'>
                      <Image
                        src='/imgs/nft-market/hispanic-woman.jpg'
                        width={320}
                        height={150}
                        alt='hispanic woman'
                        className='rounded-md'
                      />
                    </div>
                  </div>
                  <div className='w-full flex justify-between items-start gap-7'>
                    <div className=''>
                      <h4 className='block text-white text-base font-medium'>
                        3D Shape Artiste
                      </h4>
                      <p className='block text-gray-500 text-sm font-normal'>
                        8.20 ETH
                      </p>
                    </div>
                    <div className='text-right'>
                      <p className='block text-sm font-normal text-[#16F24D]'>
                        120 : 12 : 33 : 12
                      </p>
                    </div>
                  </div>
                  <div className='w-full flex justify-between items-center gap-7'>
                    <div className='flex justify-start items-center gap-3'>
                      <div className=' w-6 h-6 flex justify-center items-center rounded-full border border-gray-500 transition duration-300 group-hover:border-[#16F24D]'>
                        <BsFillHeartFill className='text-gray-500 transition duration-300 group-hover:text-[#16F24D] text-sm flex-shrink-0' />
                      </div>
                      <div className=' w-6 h-6 flex justify-center items-center rounded-full border border-gray-500 transition duration-300 group-hover:border-[#16F24D]'>
                        <AiOutlineShareAlt className='text-gray-500 transition duration-300 group-hover:text-[#16F24D] text-sm flex-shrink-0' />
                      </div>
                    </div>
                    <button className='border border-gray-500 transition duration-300 group-hover:border-[#16F24D] rounded-md py-1 px-5 text-gray-500 group-hover:text-[#16F24D]'>
                      Price a Bid
                    </button>
                  </div>
                </div>
              </div>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md transition duration-300 hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] transition duration-300 group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
                  <div className='h-[220px] flex items-center justify-center overflow-hidden rounded-md'>
                    <div className='h-fit'>
                      <Image
                        src='/imgs/nft-market/purple-cabbage.jpg'
                        width={320}
                        height={150}
                        alt='nft demon'
                        className='rounded-md block'
                      />
                    </div>
                  </div>
                  <div className='w-full flex justify-between items-start gap-7'>
                    <div className=''>
                      <h4 className='block text-white text-base font-medium'>
                        3D Shape Artiste
                      </h4>
                      <p className='block text-gray-500 text-sm font-normal'>
                        8.20 ETH
                      </p>
                    </div>
                    <div className='text-right'>
                      <p className='block text-sm font-normal text-[#16F24D]'>
                        120 : 12 : 33 : 12
                      </p>
                    </div>
                  </div>
                  <div className='w-full flex justify-between items-center gap-7'>
                    <div className='flex justify-start items-center gap-3'>
                      <div className=' w-6 h-6 flex justify-center items-center rounded-full border border-gray-500 transition duration-300 group-hover:border-[#16F24D]'>
                        <BsFillHeartFill className='text-gray-500 transition duration-300 group-hover:text-[#16F24D] text-sm flex-shrink-0' />
                      </div>
                      <div className=' w-6 h-6 flex justify-center items-center rounded-full border border-gray-500 transition duration-300 group-hover:border-[#16F24D]'>
                        <AiOutlineShareAlt className='text-gray-500 transition duration-300 group-hover:text-[#16F24D] text-sm flex-shrink-0' />
                      </div>
                    </div>
                    <button className='border border-gray-500 transition duration-300 group-hover:border-[#16F24D] rounded-md py-1 px-5 text-gray-500 group-hover:text-[#16F24D]'>
                      Price a Bid
                    </button>
                  </div>
                </div>
              </div>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md transition duration-300 hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] transition duration-300 group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
                  <div className='h-[220px] flex items-center justify-center overflow-hidden rounded-md'>
                    <div className='h-fit'>
                      <Image
                        src='/imgs/nft-market/lotus-flower.jpg'
                        width={320}
                        height={150}
                        alt='nft demon'
                        className='rounded-md block'
                      />
                    </div>
                  </div>
                  <div className='w-full flex justify-between items-start gap-7'>
                    <div className=''>
                      <h4 className='block text-white text-base font-medium'>
                        3D Shape Artiste
                      </h4>
                      <p className='block text-gray-500 text-sm font-normal'>
                        8.20 ETH
                      </p>
                    </div>
                    <div className='text-right'>
                      <p className='block text-sm font-normal text-[#16F24D]'>
                        120 : 12 : 33 : 12
                      </p>
                    </div>
                  </div>
                  <div className='w-full flex justify-between items-center gap-7'>
                    <div className='flex justify-start items-center gap-3'>
                      <div className=' w-6 h-6 flex justify-center items-center rounded-full border border-gray-500 transition duration-300 group-hover:border-[#16F24D]'>
                        <BsFillHeartFill className='text-gray-500 transition duration-300 group-hover:text-[#16F24D] text-sm flex-shrink-0' />
                      </div>
                      <div className=' w-6 h-6 flex justify-center items-center rounded-full border border-gray-500 transition duration-300 group-hover:border-[#16F24D]'>
                        <AiOutlineShareAlt className='text-gray-500 transition duration-300 group-hover:text-[#16F24D] text-sm flex-shrink-0' />
                      </div>
                    </div>
                    <button className='border border-gray-500 transition duration-300 group-hover:border-[#16F24D] rounded-md py-1 px-5 text-gray-500 group-hover:text-[#16F24D]'>
                      Price a Bid
                    </button>
                  </div>
                </div>
              </div>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md transition duration-300 hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] transition duration-300 group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
                  <div className='h-[220px] flex items-center justify-center overflow-hidden rounded-md'>
                    <div className='h-fit'>
                      <Image
                        src='/imgs/nft-market/eye.jpg'
                        width={320}
                        height={150}
                        alt='nft demon'
                        className='rounded-md block'
                      />
                    </div>
                  </div>
                  <div className='w-full flex justify-between items-start gap-7'>
                    <div className=''>
                      <h4 className='block text-white text-base font-medium'>
                        3D Shape Artiste
                      </h4>
                      <p className='block text-gray-500 text-sm font-normal'>
                        8.20 ETH
                      </p>
                    </div>
                    <div className='text-right'>
                      <p className='block text-sm font-normal text-[#16F24D]'>
                        120 : 12 : 33 : 12
                      </p>
                    </div>
                  </div>
                  <div className='w-full flex justify-between items-center gap-7'>
                    <div className='flex justify-start items-center gap-3'>
                      <div className=' w-6 h-6 flex justify-center items-center rounded-full border border-gray-500 transition duration-300 group-hover:border-[#16F24D]'>
                        <BsFillHeartFill className='text-gray-500 transition duration-300 group-hover:text-[#16F24D] text-sm flex-shrink-0' />
                      </div>
                      <div className=' w-6 h-6 flex justify-center items-center rounded-full border border-gray-500 transition duration-300 group-hover:border-[#16F24D]'>
                        <AiOutlineShareAlt className='text-gray-500 transition duration-300 group-hover:text-[#16F24D] text-sm flex-shrink-0' />
                      </div>
                    </div>
                    <button className='border border-gray-500 transition duration-300 group-hover:border-[#16F24D] rounded-md py-1 px-5 text-gray-500 group-hover:text-[#16F24D]'>
                      Price a Bid
                    </button>
                  </div>
                </div>
              </div>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md transition duration-300 hover:glow-nft-primary'>
                <div className='backdrop-blur bg-[#26292E] group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
                  <div className='h-[220px] flex items-center justify-center overflow-hidden rounded-md'>
                    <div className='h-fit'>
                      <Image
                        src='/imgs/nft-market/chameleon.jpg'
                        width={320}
                        height={150}
                        alt='chameleon'
                        className='rounded-md block'
                      />
                    </div>
                  </div>
                  <div className='w-full flex justify-between items-start gap-7'>
                    <div className=''>
                      <h4 className='block text-white text-base font-medium'>
                        3D Shape Artiste
                      </h4>
                      <p className='block text-gray-500 text-sm font-normal'>
                        8.20 ETH
                      </p>
                    </div>
                    <div className='text-right'>
                      <p className='block text-sm font-normal text-[#16F24D]'>
                        120 : 12 : 33 : 12
                      </p>
                    </div>
                  </div>
                  <div className='w-full flex justify-between items-center gap-7'>
                    <div className='flex justify-start items-center gap-3'>
                      <div className=' w-6 h-6 flex justify-center items-center rounded-full border border-gray-500 transition duration-300 group-hover:border-[#16F24D]'>
                        <BsFillHeartFill className='text-gray-500 transition duration-300 group-hover:text-[#16F24D] text-sm flex-shrink-0' />
                      </div>
                      <div className=' w-6 h-6 flex justify-center items-center rounded-full border border-gray-500 transition duration-300 group-hover:border-[#16F24D]'>
                        <AiOutlineShareAlt className='text-gray-500 transition duration-300 group-hover:text-[#16F24D] text-sm flex-shrink-0' />
                      </div>
                    </div>
                    <button className='border border-gray-500 transition duration-300 group-hover:border-[#16F24D] rounded-md py-1 px-5 text-gray-500 group-hover:text-[#16F24D]'>
                      Price a Bid
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='py-16 w-[98%] xl:w-[80%] mx-auto'></div>
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
