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
                  <span className='font-normal text-lg leading-none text-[#16F24D] scale-105 underline underline-offset-[6px] glow-nft-primary'>
                    <Link href='/templates/nft-market'>Home</Link>
                  </span>
                  <span className='font-normal text-lg leading-none text-white hover:text-[#16F24D] transition duration-300 hover:glow-nft-primary'>
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
          <div className="h-fit md:h-[50rem] w-full bg-[url('/imgs/nft-market/main-sm.jpeg')] bg-no-repeat bg-cover bg-bottom">
            <div className='bg-[rgba(0,0,255,0.35)] w-full h-full'>
              <div className='bg-[rgba(0,0,0,0.55)] w-full h-full'>
                <div className='flex gap-1 justify-center items-center w-[98%] xl:w-[80%] mx-auto h-full'>
                  <div className='w-full h-fit pt-32 md:pt-16'>
                    <h5 className='text-[#16F24D] text-xl lg:text-2xl text-center md:text-left font-semibold capitalize mb-4'>
                      Welcome to NFT Market
                    </h5>
                    <div className='w-full h-full grid grid-cols-1 md:grid-cols-7 gap-10 place-content-center'>
                      <div className='col-span-full md:col-span-4'>
                        <h1 className='text-5xl md:text-4xl lg:text-5xl font-bold leading-normal text-white text-center md:text-left'>
                          Create, Sell or Collect Digital Items.
                        </h1>
                        <p className='my-7 text-gray-400 text-2xl md:text-lg lg:text-2xl text-center md:text-left font-normal leading-tight w-[80%] md:w-full mx-auto md:mx-auto'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aenean mollis ligula sed diam sollicitudin,
                          aliquam fermentum sapien consectetur. Donec
                          consectetur et ex at vulputate
                        </p>
                        <div className='mb-7 flex justify-center md:justify-start items-center gap-7'>
                          <button className='text-black text-base md:text-sm lg:text-base py-4 px-7 font-medium leading-none bg-[#16F24D] rounded-md transition duration-300 hover:glow-nft-primary'>
                            Explore More
                          </button>
                          <div className='flex justify-start items-center gap-4'>
                            <div className='w-8 h-8 bg-white bg-opacity-30 hover:shadow-up-2x rounded-full flex justify-center items-center'>
                              <BsFillPlayFill className='text-[#16F24D] text-xl' />
                            </div>
                            <p className='text-[#16F24D] text-base md:text-sm lg:text-base'>
                              Watch Video
                            </p>
                          </div>
                        </div>
                        <div className='flex justify-center md:justify-start items-center gap-3 sm:gap-7'>
                          <div className='bg-white transition duration-300 hover:bg-[#16F24D] hover:bg-opacity-30 bg-opacity-30 group rounded-md flex justify-center items-center w-24 md:w-20 lg:w-24 h-24 md:h-20 lg:h-24'>
                            <div className='flex flex-col items-center justify-center gap-4 w-full h-full group-hover:bg-white transition duration-300 group-hover:bg-opacity-30 rounded-md '>
                              <p className='block text-base md:text-sm lg:text-base font-semibold leading-none transition duration-300 group-hover:text-[#16F24D] text-white'>
                                2.99k
                              </p>
                              <p className='block text-base md:text-sm lg:text-base font-normal leading-none transition duration-300 group-hover:font-semibold text-[#16F24D] group-hover:text-white'>
                                Live Auction
                              </p>
                            </div>
                          </div>
                          <div className='bg-white hover:bg-[#16F24D] transition duration-300 hover:bg-opacity-30 bg-opacity-30 group rounded-md flex justify-center items-center w-24 md:w-20 lg:w-24 h-24 md:h-20 lg:h-24'>
                            <div className='flex flex-col items-center justify-center gap-4 w-full h-full group-hover:bg-white transition duration-300 group-hover:bg-opacity-30 rounded-md '>
                              <p className='block text-base md:text-sm lg:text-base font-semibold leading-none transition duration-300 group-hover:text-[#16F24D] text-white'>
                                99.15M
                              </p>
                              <p className='block text-base md:text-sm lg:text-base font-normal leading-none transition duration-300 group-hover:font-semibold text-[#16F24D] group-hover:text-white'>
                                NFT Store
                              </p>
                            </div>
                          </div>
                          <div className='bg-white hover:bg-[#16F24D] transition duration-300 hover:bg-opacity-30 bg-opacity-30 group rounded-md flex justify-center items-center w-24 md:w-20 lg:w-24 h-24 md:h-20 lg:h-24'>
                            <div className='flex flex-col items-center justify-center gap-4 w-full h-full group-hover:bg-white transition duration-300 group-hover:bg-opacity-30 rounded-md '>
                              <p className='block text-base md:text-sm lg:text-base font-semibold leading-none transition duration-300 group-hover:text-[#16F24D] text-white'>
                                2.99k
                              </p>
                              <p className='block text-base md:text-sm lg:text-base font-normal leading-none transition duration-300 group-hover:font-semibold text-[#16F24D] group-hover:text-white'>
                                Collection
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-span-full md:col-span-3'>
                        <div className='relative w-full h-full'>
                          <div className='absolute z-10 -top-[7rem] flex justify-center items-center bg-transparent w-full'>
                            <Image
                              src='/imgs/nft-market/silver-hand.png'
                              width={350}
                              height={350}
                              alt='silver hand'
                            />
                          </div>
                          <div className='relative w-fit mt-24 md:mt-0 mx-auto md:mx-0'>
                            <div className='absolute z-20 bg-transparent grid grid-cols-5 gap-2 lg:gap-3 place-items-stretch w-full h-full items-end p-2 lg:p-5'>
                              <div className='col-span-2 grid grid-cols-3 gap-4 lg:gap-1'>
                                <div className="w-10 h-10 rounded-full bg-[url('/imgs/nft-market/avatar-1.jpg')] bg-no-repeat bg-center bg-cover" />
                                <div className='col-span-2 flex flex-col items-start justify-center gap-1'>
                                  <p className='text-base md:text-xs lg:text-base font-normal leading-none text-white'>
                                    MD Name Is
                                  </p>
                                  <p className='text-base md:text-xs lg:text-base font-extralight leading-none text-white'>
                                    ETH 15.99
                                  </p>
                                </div>
                              </div>
                              <div className='col-span-3 border border-[#16F24D] bg-white bg-opacity-30 rounded-md w-full flex justify-center items-center'>
                                <div className='w-fit h-fit py-3 md:py-1 lg:py-3'>
                                  <span className='text-lg md:text-sm lg:text-lg font-medium text-white leading-none'>
                                    365
                                    <span className='mx-2 md:mx-1 lg:mx-2'>
                                      :
                                    </span>
                                    10
                                    <span className='mx-2 md:mx-1 lg:mx-2'>
                                      :
                                    </span>
                                    65
                                    <span className='mx-2 md:mx-1 lg:mx-2'>
                                      :
                                    </span>
                                    13
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className='absolute -bottom-[7rem] right-20'>
                              <Image
                                src='/imgs/nft-market/latest-time.png'
                                width={120}
                                height={120}
                                alt='latest time'
                                className='rounded-md'
                              />
                            </div>
                            <div className='w-full mb-32 md:mb-0'>
                              <Image
                                src='/imgs/nft-market/pattern.jpeg'
                                width={500}
                                height={500}
                                alt='pattern'
                                className='w-[400px] md:w-[500px] rounded-md'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='py-12 w-[98%] xl:w-[80%] mx-auto'>
            <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-7 place-items-center'>
              <div className='w-32 h-32 group border border-gray-500 transition duration-300 hover:border-[#16F24D] rounded-md'>
                <div className='backdrop-blur bg-[#26292E] transition duration-300 hover:bg-black flex flex-col justify-center items-center gap-4 h-full rounded-md'>
                  <BsPaletteFill className='text-[#16F24D] text-6xl' />
                  <p className='text-lg font-medium leading-none text-white border border-transparent transition duration-300 group-hover:border-[#16F24D] group-hover:text-[#16F24D] p-1 rounded-md'>
                    Art NFT
                  </p>
                </div>
              </div>
              <div className='w-32 h-32 group border border-gray-500 transition duration-300 hover:border-[#16F24D] rounded-md'>
                <div className='backdrop-blur bg-[#26292E] transition duration-300 hover:bg-black flex flex-col justify-center items-center gap-4 h-full rounded-md'>
                  <BsMusicNoteBeamed className='text-[#16F24D] text-6xl' />
                  <p className='text-lg font-medium leading-none text-white border border-transparent transition duration-300 group-hover:border-[#16F24D] group-hover:text-[#16F24D] p-1 rounded-md'>
                    Music NFT
                  </p>
                </div>
              </div>
              <div className='w-32 h-32 group border border-gray-500 transition duration-300 hover:border-[#16F24D] rounded-md'>
                <div className='backdrop-blur bg-[#26292E] transition duration-300 hover:bg-black flex flex-col justify-center items-center gap-4 h-full rounded-md'>
                  <BsFillBarChartLineFill className='text-[#16F24D] text-6xl' />
                  <p className='text-lg font-medium leading-none text-white border border-transparent transition duration-300 group-hover:border-[#16F24D] group-hover:text-[#16F24D] p-1 rounded-md'>
                    Current NFT
                  </p>
                </div>
              </div>
              <div className='w-32 h-32 group border border-gray-500 transition duration-300 hover:border-[#16F24D] rounded-md'>
                <div className='backdrop-blur bg-[#26292E] transition duration-300 hover:bg-black flex flex-col justify-center items-center gap-4 h-full rounded-md'>
                  <MdPhotoLibrary className='text-[#16F24D] text-6xl' />
                  <p className='text-lg font-medium leading-none text-white border border-transparent transition duration-300 group-hover:border-[#16F24D] group-hover:text-[#16F24D] p-1 rounded-md'>
                    Photo NFT
                  </p>
                </div>
              </div>
              <div className='w-32 h-32 group border border-gray-500 transition duration-300 hover:border-[#16F24D] rounded-md'>
                <div className='backdrop-blur bg-[#26292E] transition duration-300 hover:bg-black flex flex-col justify-center items-center gap-4 h-full rounded-md'>
                  <MdAddToPhotos className='text-[#16F24D] text-6xl' />
                  <p className='text-lg font-medium leading-none text-white border border-transparent transition duration-300 group-hover:border-[#16F24D] group-hover:text-[#16F24D] p-1 rounded-md'>
                    Create NFT
                  </p>
                </div>
              </div>
              <div className='w-32 h-32 group border border-gray-500 transition duration-300 hover:border-[#16F24D] rounded-md'>
                <div className='backdrop-blur bg-[#26292E] transition duration-300 hover:bg-black flex flex-col justify-center items-center gap-4 h-full rounded-md'>
                  <BsPaletteFill className='text-[#16F24D] text-6xl' />
                  <p className='text-lg font-medium leading-none text-white border border-transparent transition duration-300 group-hover:border-[#16F24D] group-hover:text-[#16F24D] p-1 rounded-md'>
                    Art NFT
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='py-12 w-[98%] xl:w-[80%] mx-auto'>
            <div className='flex flex-col md:flex-row justify-between items-center md:items-end gap-7 md:gap-3 lg:gap-7 mb-5'>
              <h2 className='text-5xl font-semibold leading-none text-white'>
                NFT Gallery
              </h2>
              <div className='flex flex-wrap justify-evenly items-center gap-4 sm:gap-2 lg:gap-4'>
                <div className='relative flex justify-start items-center gap-2 px-4 py-2 group cursor-pointer border border-gray-500 hover:border-[#16F24D] rounded-md'>
                  <span className='text-base lg:text-lg font-medium leading-none text-white group-hover:text-[#16F24D]'>
                    Art
                  </span>
                  <MdOutlineKeyboardArrowDown className='text-white text-lg lg:text-xl' />
                  <div className='absolute left-0 top-[calc(100%_+_1px)] z-10 hidden group-hover:block w-fit p-2 lg:p-4 rounded-md border border-gray-500 backdrop-blur-sm'>
                    <div className='flex flex-col justify-start items-start gap-3'>
                      <p className='transition duration-300 border-b border-white hover:border-[#16F24D] text-white hover:text-[#16F24D] text-sm lg:text-base font-light pr-10 pb-1 whitespace-nowrap'>
                        Visual Art
                      </p>
                      <p className='transition duration-300 border-b border-white hover:border-[#16F24D] text-white hover:text-[#16F24D] text-sm lg:text-base font-light pr-10 pb-1 whitespace-nowrap'>
                        Photo Art
                      </p>
                      <p className='transition duration-300 border-b border-white hover:border-[#16F24D] text-white hover:text-[#16F24D] text-sm lg:text-base font-light pr-10 pb-1 whitespace-nowrap'>
                        Digital Art
                      </p>
                      <p className='transition duration-300 border-b border-white hover:border-[#16F24D] text-white hover:text-[#16F24D] text-sm lg:text-base font-light pr-10 pb-1 whitespace-nowrap'>
                        Man Art
                      </p>
                      <p className='transition duration-300 border-b border-white hover:border-[#16F24D] text-white hover:text-[#16F24D] text-sm lg:text-base font-light pr-10 pb-1 whitespace-nowrap'>
                        Logo Art
                      </p>
                    </div>
                  </div>
                </div>
                <div className='flex justify-start items-center gap-2 px-4 py-2 group cursor-pointer border border-gray-500 hover:border-[#16F24D] rounded-md'>
                  <span className='text-base lg:text-lg font-medium leading-none text-white group-hover:text-[#16F24D]'>
                    3D Shape
                  </span>
                  <MdOutlineKeyboardArrowRight className='text-white text-lg lg:text-xl' />
                </div>
                <div className='flex justify-start items-center gap-2 px-4 py-2 group cursor-pointer border border-gray-500 hover:border-[#16F24D] rounded-md'>
                  <span className='text-base lg:text-lg font-medium leading-none text-white group-hover:text-[#16F24D]'>
                    Pixel
                  </span>
                  <MdOutlineKeyboardArrowRight className='text-white text-lg lg:text-xl' />
                </div>
                <div className='flex justify-start items-center gap-2 px-4 py-2 group cursor-pointer border border-gray-500 hover:border-[#16F24D] rounded-md'>
                  <span className='text-base lg:text-lg font-medium leading-none text-white group-hover:text-[#16F24D]'>
                    Music
                  </span>
                  <MdOutlineKeyboardArrowRight className='text-white text-lg lg:text-xl' />
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 place-items-center sm:place-items-stretch'>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md transition duration-300 hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] transition duration-300 group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
                  <div className='w-full'>
                    <Image
                      src='/imgs/nft-market/fluid-nft.jpg'
                      width={260}
                      height={120}
                      alt='fantasy'
                      className='rounded-md'
                    />
                  </div>
                  <div className='text-center py-1'>
                    <h4 className='block text-white text-xl font-medium'>
                      Joybangla Jitbe Abar
                    </h4>
                    <p className='block text-white text-lg font-normal'>
                      Item: 236
                    </p>
                    <p className='block text-gray-500'>
                      ETH-<span className='text-[#16F24D]'>16.21</span>
                    </p>
                  </div>
                  <div className='absolute bottom-3 right-3 w-7 h-7 group-hover:w-fit rounded-full border group-hover:border-none border-gray-500 flex justify-center items-center gap-1'>
                    <BsFillHeartFill className='text-gray-500 transition duration-300 group-hover:text-red-700 text-base group-hover:text-xs flex-shrink-0' />
                    <p className='hidden transition duration-300 group-hover:block text-xs font-light text-gray-500'>
                      126
                    </p>
                  </div>
                </div>
              </div>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md transition duration-300 hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] transition duration-300 group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
                  <div className='w-full'>
                    <Image
                      src='/imgs/nft-market/boy-nft.jpg'
                      width={260}
                      height={120}
                      alt='fantasy'
                      className='rounded-md'
                    />
                  </div>
                  <div className='text-center py-1'>
                    <h4 className='block text-white text-xl font-medium'>
                      Joybangla Jitbe Abar
                    </h4>
                    <p className='block text-white text-lg font-normal'>
                      Item: 236
                    </p>
                    <p className='block text-gray-500'>
                      ETH-<span className='text-[#16F24D]'>16.21</span>
                    </p>
                  </div>
                  <div className='absolute bottom-3 right-3 w-7 h-7 group-hover:w-fit rounded-full border group-hover:border-none border-gray-500 flex justify-center items-center gap-1'>
                    <BsFillHeartFill className='text-gray-500 transition duration-300 group-hover:text-red-700 text-base group-hover:text-xs flex-shrink-0' />
                    <p className='hidden transition duration-300 group-hover:block text-xs font-light text-gray-500'>
                      126
                    </p>
                  </div>
                </div>
              </div>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md transition duration-300 hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] transition duration-300 group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
                  <div className='w-full'>
                    <Image
                      src='/imgs/nft-market/alien-forest-illustration.jpg'
                      width={260}
                      height={120}
                      alt='fantasy'
                      className='rounded-md'
                    />
                  </div>
                  <div className='text-center py-1'>
                    <h4 className='block text-white text-xl font-medium'>
                      Joybangla Jitbe Abar
                    </h4>
                    <p className='block text-white text-lg font-normal'>
                      Item: 236
                    </p>
                    <p className='block text-gray-500'>
                      ETH-<span className='text-[#16F24D]'>16.21</span>
                    </p>
                  </div>
                  <div className='absolute bottom-3 right-3 w-7 h-7 group-hover:w-fit rounded-full border group-hover:border-none border-gray-500 flex justify-center items-center gap-1'>
                    <BsFillHeartFill className='text-gray-500 transition duration-300 group-hover:text-red-700 text-base group-hover:text-xs flex-shrink-0' />
                    <p className='hidden transition duration-300 group-hover:block text-xs font-light text-gray-500'>
                      126
                    </p>
                  </div>
                </div>
              </div>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md transition duration-300 hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] transition duration-300 group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
                  <div className='w-full'>
                    <Image
                      src='/imgs/nft-market/fluid-nft.jpg'
                      width={260}
                      height={120}
                      alt='fantasy'
                      className='rounded-md'
                    />
                  </div>
                  <div className='text-center py-1'>
                    <h4 className='block text-white text-xl font-medium'>
                      Joybangla Jitbe Abar
                    </h4>
                    <p className='block text-white text-lg font-normal'>
                      Item: 236
                    </p>
                    <p className='block text-gray-500'>
                      ETH-<span className='text-[#16F24D]'>16.21</span>
                    </p>
                  </div>
                  <div className='absolute bottom-3 right-3 w-7 h-7 group-hover:w-fit rounded-full border group-hover:border-none border-gray-500 flex justify-center items-center gap-1'>
                    <BsFillHeartFill className='text-gray-500 transition duration-300 group-hover:text-red-700 text-base group-hover:text-xs flex-shrink-0' />
                    <p className='hidden transition duration-300 group-hover:block text-xs font-light text-gray-500'>
                      126
                    </p>
                  </div>
                </div>
              </div>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md transition duration-300 hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] transition duration-300 group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
                  <div className='w-full'>
                    <Image
                      src='/imgs/nft-market/moon-nft.jpg'
                      width={260}
                      height={120}
                      alt='fantasy'
                      className='rounded-md'
                    />
                  </div>
                  <div className='text-center py-1'>
                    <h4 className='block text-white text-xl font-medium'>
                      Joybangla Jitbe Abar
                    </h4>
                    <p className='block text-white text-lg font-normal'>
                      Item: 236
                    </p>
                    <p className='block text-gray-500'>
                      ETH-<span className='text-[#16F24D]'>16.21</span>
                    </p>
                  </div>
                  <div className='absolute bottom-3 right-3 w-7 h-7 group-hover:w-fit rounded-full border group-hover:border-none border-gray-500 flex justify-center items-center gap-1'>
                    <BsFillHeartFill className='text-gray-500 transition duration-300 group-hover:text-red-700 text-base group-hover:text-xs flex-shrink-0' />
                    <p className='hidden transition duration-300 group-hover:block text-xs font-light text-gray-500'>
                      126
                    </p>
                  </div>
                </div>
              </div>
              <div className='group border border-gray-500 transition duration-300 hover:border-[#16F24D] rounded- transition duration-300 hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] transition duration-300 group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
                  <div className='w-full'>
                    <Image
                      src='/imgs/nft-market/snow-nft.jpg'
                      width={260}
                      height={120}
                      alt='fantasy'
                      className='rounded-md'
                    />
                  </div>
                  <div className='text-center py-1'>
                    <h4 className='block text-white text-xl font-medium'>
                      Joybangla Jitbe Abar
                    </h4>
                    <p className='block text-white text-lg font-normal'>
                      Item: 236
                    </p>
                    <p className='block text-gray-500'>
                      ETH-<span className='text-[#16F24D]'>16.21</span>
                    </p>
                  </div>
                  <div className='absolute bottom-3 right-3 w-7 h-7 group-hover:w-fit rounded-full border group-hover:border-none border-gray-500 flex justify-center items-center gap-1'>
                    <BsFillHeartFill className='text-gray-500 transition duration-300 group-hover:text-red-700 text-base group-hover:text-xs flex-shrink-0' />
                    <p className='hidden transition duration-300 group-hover:block text-xs font-light text-gray-500'>
                      126
                    </p>
                  </div>
                </div>
              </div>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md transition duration-300 hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] transition duration-300 group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
                  <div className='w-full'>
                    <Image
                      src='/imgs/nft-market/urban-nft.jpg'
                      width={260}
                      height={120}
                      alt='fantasy'
                      className='rounded-md'
                    />
                  </div>
                  <div className='text-center py-1'>
                    <h4 className='block text-white text-xl font-medium'>
                      Joybangla Jitbe Abar
                    </h4>
                    <p className='block text-white text-lg font-normal'>
                      Item: 236
                    </p>
                    <p className='block text-gray-500'>
                      ETH-<span className='text-[#16F24D]'>16.21</span>
                    </p>
                  </div>
                  <div className='absolute bottom-3 right-3 w-7 h-7 group-hover:w-fit rounded-full border group-hover:border-none border-gray-500 flex justify-center items-center gap-1'>
                    <BsFillHeartFill className='text-gray-500 transition duration-300 group-hover:text-red-700 text-base group-hover:text-xs flex-shrink-0' />
                    <p className='hidden transition duration-300 group-hover:block text-xs font-light text-gray-500'>
                      126
                    </p>
                  </div>
                </div>
              </div>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md transition duration-300 hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] transition duration-300 group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
                  <div className='w-full'>
                    <Image
                      src='/imgs/nft-market/house-nft.jpg'
                      width={260}
                      height={120}
                      alt='fantasy'
                      className='rounded-md'
                    />
                  </div>
                  <div className='text-center py-1'>
                    <h4 className='block text-white text-xl font-medium'>
                      Joybangla Jitbe Abar
                    </h4>
                    <p className='block text-white text-lg font-normal'>
                      Item: 236
                    </p>
                    <p className='block text-gray-500'>
                      ETH-<span className='text-[#16F24D]'>16.21</span>
                    </p>
                  </div>
                  <div className='absolute bottom-3 right-3 w-7 h-7 group-hover:w-fit rounded-full border group-hover:border-none border-gray-500 flex justify-center items-center gap-1'>
                    <BsFillHeartFill className='text-gray-500 transition duration-300 group-hover:text-red-700 text-base group-hover:text-xs flex-shrink-0' />
                    <p className='hidden transition duration-300 group-hover:block text-xs font-light text-gray-500'>
                      126
                    </p>
                  </div>
                </div>
              </div>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md transition duration-300 hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] transition duration-300 group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
                  <div className='w-full'>
                    <Image
                      src='/imgs/nft-market/room-nft.jpg'
                      width={260}
                      height={120}
                      alt='fantasy'
                      className='rounded-md'
                    />
                  </div>
                  <div className='text-center py-1'>
                    <h4 className='block text-white text-xl font-medium'>
                      Joybangla Jitbe Abar
                    </h4>
                    <p className='block text-white text-lg font-normal'>
                      Item: 236
                    </p>
                    <p className='block text-gray-500'>
                      ETH-<span className='text-[#16F24D]'>16.21</span>
                    </p>
                  </div>
                  <div className='absolute bottom-3 right-3 w-7 h-7 group-hover:w-fit rounded-full border group-hover:border-none border-gray-500 flex justify-center items-center gap-1'>
                    <BsFillHeartFill className='text-gray-500 transition duration-300 group-hover:text-red-700 text-base group-hover:text-xs flex-shrink-0' />
                    <p className='hidden transition duration-300 group-hover:block text-xs font-light text-gray-500'>
                      126
                    </p>
                  </div>
                </div>
              </div>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md transition duration-300 hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] transition duration-300 group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
                  <div className='w-full'>
                    <Image
                      src='/imgs/nft-market/fluid-nft.jpg'
                      width={260}
                      height={120}
                      alt='fantasy'
                      className='rounded-md'
                    />
                  </div>
                  <div className='text-center py-1'>
                    <h4 className='block text-white text-xl font-medium'>
                      Joybangla Jitbe Abar
                    </h4>
                    <p className='block text-white text-lg font-normal'>
                      Item: 236
                    </p>
                    <p className='block text-gray-500'>
                      ETH-<span className='text-[#16F24D]'>16.21</span>
                    </p>
                  </div>
                  <div className='absolute bottom-3 right-3 w-7 h-7 group-hover:w-fit rounded-full border group-hover:border-none border-gray-500 flex justify-center items-center gap-1'>
                    <BsFillHeartFill className='text-gray-500 transition duration-300 group-hover:text-red-700 text-base group-hover:text-xs flex-shrink-0' />
                    <p className='hidden transition duration-300 group-hover:block text-xs font-light text-gray-500'>
                      126
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[30rem] w-full bg-[url('/imgs/nft-market/game-room.jpg')] bg-no-repeat bg-cover bg-center" />
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
          <div className='py-12 w-[98%] xl:w-[80%] mx-auto h-fit'>
            <h2 className='text-5xl font-semibold leading-none text-white text-center'>
              Popular Collection in NFT
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 place-items-center sm:place-items-stretch gap-5 py-20'>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md transition duration-300 hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] transition duration-300 group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
                  <div className='w-full relative'>
                    <Image
                      src='/imgs/nft-market/house-nft.jpg'
                      width={260}
                      height={150}
                      alt='house'
                      className='rounded-md h-[150px]'
                    />
                    <div className="bg-[url('/imgs/nft-market/avatar-1.jpg')] bg-center bg-cover bg-no-repeat rounded-full w-16 h-16 absolute -bottom-8 z-10 left-0 right-0 mx-auto" />
                    <div className='absolute -bottom-6 right-0 w-fit rounded-full flex justify-center items-center gap-1'>
                      <BsFillHeartFill className='text-gray-500 text-xs flex-shrink-0' />
                      <p className='text-xs font-light text-gray-500'>120</p>
                    </div>
                  </div>
                  <div className='pt-6 w-full flex justify-between items-center gap-7'>
                    <div className=''>
                      <h4 className='block text-white text-base font-medium'>
                        David Rossetti
                      </h4>
                      <p className='block text-gray-500 text-sm font-normal'>
                        Owner In: 10+
                      </p>
                    </div>
                    <div className='text-right'>
                      <p className='block text-sm font-normal text-[#16F24D]'>
                        Price: 24.66
                      </p>
                      <p className='block text-sm font-normal text-gray-500'>
                        4 in Stock
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md transition duration-300 hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] transition duration-300 group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
                  <div className='w-full relative'>
                    <Image
                      src='/imgs/nft-market/game-room.jpg'
                      width={260}
                      height={150}
                      alt='game room'
                      className='rounded-md h-[150px]'
                    />
                    <div className="bg-[url('/imgs/nft-market/black-model.jpg')] bg-center bg-cover bg-no-repeat rounded-full w-16 h-16 absolute -bottom-8 z-10 left-0 right-0 mx-auto" />
                    <div className='absolute -bottom-6 right-0 w-fit rounded-full flex justify-center items-center gap-1'>
                      <BsFillHeartFill className='text-gray-500 text-xs flex-shrink-0' />
                      <p className='text-xs font-light text-gray-500'>120</p>
                    </div>
                  </div>
                  <div className='pt-6 w-full flex justify-between items-center gap-7'>
                    <div className=''>
                      <h4 className='block text-white text-base font-medium'>
                        David Rossetti
                      </h4>
                      <p className='block text-gray-500 text-sm font-normal'>
                        Owner In: 10+
                      </p>
                    </div>
                    <div className='text-right'>
                      <p className='block text-sm font-normal text-[#16F24D]'>
                        Price: 24.66
                      </p>
                      <p className='block text-sm font-normal text-gray-500'>
                        4 in Stock
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md transition duration-300 hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] transition duration-300 group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
                  <div className='w-full relative'>
                    <Image
                      src='/imgs/nft-market/purple-cabbage.jpg'
                      width={260}
                      height={150}
                      alt='purple cabbage'
                      className='rounded-md h-[150px]'
                    />
                    <div className="bg-[url('/imgs/nft-market/black-model.jpg')] bg-center bg-cover bg-no-repeat rounded-full w-16 h-16 absolute -bottom-8 z-10 left-0 right-0 mx-auto" />
                    <div className='absolute -bottom-6 right-0 w-fit rounded-full flex justify-center items-center gap-1'>
                      <BsFillHeartFill className='text-gray-500 text-xs flex-shrink-0' />
                      <p className='text-xs font-light text-gray-500'>120</p>
                    </div>
                  </div>
                  <div className='pt-6 w-full flex justify-between items-center gap-7'>
                    <div className=''>
                      <h4 className='block text-white text-base font-medium'>
                        David Rossetti
                      </h4>
                      <p className='block text-gray-500 text-sm font-normal'>
                        Owner In: 10+
                      </p>
                    </div>
                    <div className='text-right'>
                      <p className='block text-sm font-normal text-[#16F24D]'>
                        Price: 24.66
                      </p>
                      <p className='block text-sm font-normal text-gray-500'>
                        4 in Stock
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md transition duration-300 hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] transition duration-300 group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
                  <div className='w-full relative'>
                    <Image
                      src='/imgs/nft-market/alien-forest-illustration.jpg'
                      width={260}
                      height={150}
                      alt='alien-forest-illustration'
                      className='rounded-md h-[150px]'
                    />
                    <div className="bg-[url('/imgs/nft-market/avatar-1.jpg')] bg-center bg-cover bg-no-repeat rounded-full w-16 h-16 absolute -bottom-8 z-10 left-0 right-0 mx-auto" />
                    <div className='absolute -bottom-6 right-0 w-fit rounded-full flex justify-center items-center gap-1'>
                      <BsFillHeartFill className='text-gray-500 text-xs flex-shrink-0' />
                      <p className='text-xs font-light text-gray-500'>120</p>
                    </div>
                  </div>
                  <div className='pt-6 w-full flex justify-between items-center gap-7'>
                    <div className=''>
                      <h4 className='block text-white text-base font-medium'>
                        David Rossetti
                      </h4>
                      <p className='block text-gray-500 text-sm font-normal'>
                        Owner In: 10+
                      </p>
                    </div>
                    <div className='text-right'>
                      <p className='block text-sm font-normal text-[#16F24D]'>
                        Price: 24.66
                      </p>
                      <p className='block text-sm font-normal text-gray-500'>
                        4 in Stock
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md transition duration-300 hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] transition duration-300 group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
                  <div className='w-full relative'>
                    <Image
                      src='/imgs/nft-market/lotus-flower.jpg'
                      width={260}
                      height={150}
                      alt='lotus'
                      className='rounded-md h-[150px]'
                    />
                    <div className="bg-[url('/imgs/nft-market/black-model.jpg')] bg-center bg-cover bg-no-repeat rounded-full w-16 h-16 absolute -bottom-8 z-10 left-0 right-0 mx-auto" />
                    <div className='absolute -bottom-6 right-0 w-fit rounded-full flex justify-center items-center gap-1'>
                      <BsFillHeartFill className='text-gray-500 text-xs flex-shrink-0' />
                      <p className='text-xs font-light text-gray-500'>120</p>
                    </div>
                  </div>
                  <div className='pt-6 w-full flex justify-between items-center gap-7'>
                    <div className=''>
                      <h4 className='block text-white text-base font-medium'>
                        David Rossetti
                      </h4>
                      <p className='block text-gray-500 text-sm font-normal'>
                        Owner In: 10+
                      </p>
                    </div>
                    <div className='text-right'>
                      <p className='block text-sm font-normal text-[#16F24D]'>
                        Price: 24.66
                      </p>
                      <p className='block text-sm font-normal text-gray-500'>
                        4 in Stock
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md transition duration-300 hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] transition duration-300 group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
                  <div className='w-full relative'>
                    <Image
                      src='/imgs/nft-market/fluid-nft.jpg'
                      width={260}
                      height={150}
                      alt='fluid'
                      className='rounded-md h-[150px]'
                    />
                    <div className="bg-[url('/imgs/nft-market/avatar-1.jpg')] bg-center bg-cover bg-no-repeat rounded-full w-16 h-16 absolute -bottom-8 z-10 left-0 right-0 mx-auto" />
                    <div className='absolute -bottom-6 right-0 w-fit rounded-full flex justify-center items-center gap-1'>
                      <BsFillHeartFill className='text-gray-500 text-xs flex-shrink-0' />
                      <p className='text-xs font-light text-gray-500'>120</p>
                    </div>
                  </div>
                  <div className='pt-6 w-full flex justify-between items-center gap-7'>
                    <div className=''>
                      <h4 className='block text-white text-base font-medium'>
                        David Rossetti
                      </h4>
                      <p className='block text-gray-500 text-sm font-normal'>
                        Owner In: 10+
                      </p>
                    </div>
                    <div className='text-right'>
                      <p className='block text-sm font-normal text-[#16F24D]'>
                        Price: 24.66
                      </p>
                      <p className='block text-sm font-normal text-gray-500'>
                        4 in Stock
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md transition duration-300 hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] transition duration-300 group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
                  <div className='w-full relative'>
                    <Image
                      src='/imgs/nft-market/st-texture.jpg'
                      width={260}
                      height={150}
                      alt='texture'
                      className='rounded-md h-[150px]'
                    />
                    <div className="bg-[url('/imgs/nft-market/avatar-1.jpg')] bg-center bg-cover bg-no-repeat rounded-full w-16 h-16 absolute -bottom-8 z-10 left-0 right-0 mx-auto" />
                    <div className='absolute -bottom-6 right-0 w-fit rounded-full flex justify-center items-center gap-1'>
                      <BsFillHeartFill className='text-gray-500 text-xs flex-shrink-0' />
                      <p className='text-xs font-light text-gray-500'>120</p>
                    </div>
                  </div>
                  <div className='pt-6 w-full flex justify-between items-center gap-7'>
                    <div className=''>
                      <h4 className='block text-white text-base font-medium'>
                        David Rossetti
                      </h4>
                      <p className='block text-gray-500 text-sm font-normal'>
                        Owner In: 10+
                      </p>
                    </div>
                    <div className='text-right'>
                      <p className='block text-sm font-normal text-[#16F24D]'>
                        Price: 24.66
                      </p>
                      <p className='block text-sm font-normal text-gray-500'>
                        4 in Stock
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md transition duration-300 hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] transition duration-300 group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
                  <div className='w-full relative'>
                    <Image
                      src='/imgs/nft-market/urban-nft.jpg'
                      width={260}
                      height={150}
                      alt='urban'
                      className='rounded-md h-[150px]'
                    />
                    <div className="bg-[url('/imgs/nft-market/black-model.jpg')] bg-center bg-cover bg-no-repeat rounded-full w-16 h-16 absolute -bottom-8 z-10 left-0 right-0 mx-auto" />
                    <div className='absolute -bottom-6 right-0 w-fit rounded-full flex justify-center items-center gap-1'>
                      <BsFillHeartFill className='text-gray-500 text-xs flex-shrink-0' />
                      <p className='text-xs font-light text-gray-500'>120</p>
                    </div>
                  </div>
                  <div className='pt-6 w-full flex justify-between items-center gap-7'>
                    <div className=''>
                      <h4 className='block text-white text-base font-medium'>
                        David Rossetti
                      </h4>
                      <p className='block text-gray-500 text-sm font-normal'>
                        Owner In: 10+
                      </p>
                    </div>
                    <div className='text-right'>
                      <p className='block text-sm font-normal text-[#16F24D]'>
                        Price: 24.66
                      </p>
                      <p className='block text-sm font-normal text-gray-500'>
                        4 in Stock
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md transition duration-300 hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] transition duration-300 group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
                  <div className='w-full relative'>
                    <Image
                      src='/imgs/nft-market/ship-nft.jpg'
                      width={260}
                      height={150}
                      alt='ship'
                      className='rounded-md h-[150px]'
                    />
                    <div className="bg-[url('/imgs/nft-market/avatar-1.jpg')] bg-center bg-cover bg-no-repeat rounded-full w-16 h-16 absolute -bottom-8 z-10 left-0 right-0 mx-auto" />
                    <div className='absolute -bottom-6 right-0 w-fit rounded-full flex justify-center items-center gap-1'>
                      <BsFillHeartFill className='text-gray-500 text-xs flex-shrink-0' />
                      <p className='text-xs font-light text-gray-500'>120</p>
                    </div>
                  </div>
                  <div className='pt-6 w-full flex justify-between items-center gap-7'>
                    <div className=''>
                      <h4 className='block text-white text-base font-medium'>
                        David Rossetti
                      </h4>
                      <p className='block text-gray-500 text-sm font-normal'>
                        Owner In: 10+
                      </p>
                    </div>
                    <div className='text-right'>
                      <p className='block text-sm font-normal text-[#16F24D]'>
                        Price: 24.66
                      </p>
                      <p className='block text-sm font-normal text-gray-500'>
                        4 in Stock
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md transition duration-300 hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] transition duration-300 group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
                  <div className='w-full relative'>
                    <Image
                      src='/imgs/nft-market/snow-nft.jpg'
                      width={260}
                      height={150}
                      alt='snow'
                      className='rounded-md h-[150px]'
                    />
                    <div className="bg-[url('/imgs/nft-market/black-model.jpg')] bg-center bg-cover bg-no-repeat rounded-full w-16 h-16 absolute -bottom-8 z-10 left-0 right-0 mx-auto" />
                    <div className='absolute -bottom-6 right-0 w-fit rounded-full flex justify-center items-center gap-1'>
                      <BsFillHeartFill className='text-gray-500 text-xs flex-shrink-0' />
                      <p className='text-xs font-light text-gray-500'>120</p>
                    </div>
                  </div>
                  <div className='pt-6 w-full flex justify-between items-center gap-7'>
                    <div className=''>
                      <h4 className='block text-white text-base font-medium'>
                        David Rossetti
                      </h4>
                      <p className='block text-gray-500 text-sm font-normal'>
                        Owner In: 10+
                      </p>
                    </div>
                    <div className='text-right'>
                      <p className='block text-sm font-normal text-[#16F24D]'>
                        Price: 24.66
                      </p>
                      <p className='block text-sm font-normal text-gray-500'>
                        4 in Stock
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md transition duration-300 hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] transition duration-300 group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
                  <div className='w-full relative'>
                    <Image
                      src='/imgs/nft-market/halloween.jpg'
                      width={260}
                      height={150}
                      alt='house'
                      className='rounded-md h-[150px]'
                    />
                    <div className="bg-[url('/imgs/nft-market/avatar-1.jpg')] bg-center bg-cover bg-no-repeat rounded-full w-16 h-16 absolute -bottom-8 z-10 left-0 right-0 mx-auto" />
                    <div className='absolute -bottom-6 right-0 w-fit rounded-full flex justify-center items-center gap-1'>
                      <BsFillHeartFill className='text-gray-500 text-xs flex-shrink-0' />
                      <p className='text-xs font-light text-gray-500'>120</p>
                    </div>
                  </div>
                  <div className='pt-6 w-full flex justify-between items-center gap-7'>
                    <div className=''>
                      <h4 className='block text-white text-base font-medium'>
                        David Rossetti
                      </h4>
                      <p className='block text-gray-500 text-sm font-normal'>
                        Owner In: 10+
                      </p>
                    </div>
                    <div className='text-right'>
                      <p className='block text-sm font-normal text-[#16F24D]'>
                        Price: 24.66
                      </p>
                      <p className='block text-sm font-normal text-gray-500'>
                        4 in Stock
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md transition duration-300 hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] transition duration-300 group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
                  <div className='w-full relative'>
                    <Image
                      src='/imgs/nft-market/boy-nft.jpg'
                      width={260}
                      height={150}
                      alt='boy'
                      className='rounded-md h-[150px]'
                    />
                    <div className="bg-[url('/imgs/nft-market/black-model.jpg')] bg-center bg-cover bg-no-repeat rounded-full w-16 h-16 absolute -bottom-8 z-10 left-0 right-0 mx-auto" />
                    <div className='absolute -bottom-6 right-0 w-fit rounded-full flex justify-center items-center gap-1'>
                      <BsFillHeartFill className='text-gray-500 text-xs flex-shrink-0' />
                      <p className='text-xs font-light text-gray-500'>120</p>
                    </div>
                  </div>
                  <div className='pt-6 w-full flex justify-between items-center gap-7'>
                    <div className=''>
                      <h4 className='block text-white text-base font-medium'>
                        David Rossetti
                      </h4>
                      <p className='block text-gray-500 text-sm font-normal'>
                        Owner In: 10+
                      </p>
                    </div>
                    <div className='text-right'>
                      <p className='block text-sm font-normal text-[#16F24D]'>
                        Price: 24.66
                      </p>
                      <p className='block text-sm font-normal text-gray-500'>
                        4 in Stock
                      </p>
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
          <div className='py-12 w-[98%] xl:w-[80%] mx-auto h-fit'>
            <h2 className='text-5xl font-semibold leading-none text-white text-center'>
              NFT Top Creator
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center sm:place-items-stretch gap-10 py-20'>
              <div className='flex justify-start items-center gap-3 p-3 rounded-md border border-gray-700'>
                <div className="bg-[url('/imgs/nft-market/black-model.jpg')] bg-center bg-cover bg-no-repeat rounded-full w-16 h-16" />
                <div className='flex flex-col justify-start items-stretch flex-grow gap-y-3'>
                  <div className='flex justify-between items-center gap-7'>
                    <h3 className='text-xl text-white font-light leading-none'>
                      Jame W Cottrell
                    </h3>
                    <div className='rounded-full bg-yellow-700 w-6 h-6 flex justify-center items-center'>
                      <FaMedal className='text-sm text-red-900' />
                    </div>
                  </div>
                  <div className='flex justify-between items-center gap-7'>
                    <div className='flex justify-start items-center gap-2'>
                      <div className='w-4 h-4 rounded-full bg-[#16F24D] flex justify-center items-center'>
                        <FaEthereum className='text-white text-xs' />
                      </div>
                      <p className='text-sm text-gray-500 font-light'>123.99</p>
                    </div>
                    <p className='text-right text-base text-gray-500 font-light'>
                      Item: 235.99
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex justify-start items-center gap-3 p-3 rounded-md border border-gray-700'>
                <div className="bg-[url('/imgs/nft-market/avatar-1.jpg')] bg-center bg-cover bg-no-repeat rounded-full w-16 h-16" />
                <div className='flex flex-col justify-start items-stretch flex-grow gap-y-3'>
                  <div className='flex justify-between items-center gap-7'>
                    <h3 className='text-xl text-white font-light leading-none'>
                      Jame W Cottrell
                    </h3>
                    <div className='rounded-full bg-yellow-700 w-6 h-6 flex justify-center items-center'>
                      <FaMedal className='text-sm text-red-900' />
                    </div>
                  </div>
                  <div className='flex justify-between items-center gap-7'>
                    <div className='flex justify-start items-center gap-2'>
                      <div className='w-4 h-4 rounded-full bg-[#16F24D] flex justify-center items-center'>
                        <FaEthereum className='text-white text-xs' />
                      </div>
                      <p className='text-sm text-gray-500 font-light'>123.99</p>
                    </div>
                    <p className='text-right text-base text-gray-500 font-light'>
                      Item: 235.99
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex justify-start items-center gap-3 p-3 rounded-md border border-gray-700'>
                <div className="bg-[url('/imgs/nft-market/avatar-1.jpg')] bg-center bg-cover bg-no-repeat rounded-full w-16 h-16" />
                <div className='flex flex-col justify-start items-stretch flex-grow gap-y-3'>
                  <div className='flex justify-between items-center gap-7'>
                    <h3 className='text-xl text-white font-light leading-none'>
                      Jame W Cottrell
                    </h3>
                    <div className='rounded-full bg-yellow-700 w-6 h-6 flex justify-center items-center'>
                      <FaMedal className='text-sm text-red-900' />
                    </div>
                  </div>
                  <div className='flex justify-between items-center gap-7'>
                    <div className='flex justify-start items-center gap-2'>
                      <div className='w-4 h-4 rounded-full bg-[#16F24D] flex justify-center items-center'>
                        <FaEthereum className='text-white text-xs' />
                      </div>
                      <p className='text-sm text-gray-500 font-light'>123.99</p>
                    </div>
                    <p className='text-right text-base text-gray-500 font-light'>
                      Item: 235.99
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex justify-start items-center gap-3 p-3 rounded-md border border-gray-700'>
                <div className="bg-[url('/imgs/nft-market/black-model.jpg')] bg-center bg-cover bg-no-repeat rounded-full w-16 h-16" />
                <div className='flex flex-col justify-start items-stretch flex-grow gap-y-3'>
                  <div className='flex justify-between items-center gap-7'>
                    <h3 className='text-xl text-white font-light leading-none'>
                      Jame W Cottrell
                    </h3>
                    <div className='rounded-full bg-yellow-700 w-6 h-6 flex justify-center items-center'>
                      <FaMedal className='text-sm text-red-900' />
                    </div>
                  </div>
                  <div className='flex justify-between items-center gap-7'>
                    <div className='flex justify-start items-center gap-2'>
                      <div className='w-4 h-4 rounded-full bg-[#16F24D] flex justify-center items-center'>
                        <FaEthereum className='text-white text-xs' />
                      </div>
                      <p className='text-sm text-gray-500 font-light'>123.99</p>
                    </div>
                    <p className='text-right text-base text-gray-500 font-light'>
                      Item: 235.99
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex justify-start items-center gap-3 p-3 rounded-md border border-gray-700'>
                <div className="bg-[url('/imgs/nft-market/black-model.jpg')] bg-center bg-cover bg-no-repeat rounded-full w-16 h-16" />
                <div className='flex flex-col justify-start items-stretch flex-grow gap-y-3'>
                  <div className='flex justify-between items-center gap-7'>
                    <h3 className='text-xl text-white font-light leading-none'>
                      Jame W Cottrell
                    </h3>
                    <div className='rounded-full bg-yellow-700 w-6 h-6 flex justify-center items-center'>
                      <FaMedal className='text-sm text-red-900' />
                    </div>
                  </div>
                  <div className='flex justify-between items-center gap-7'>
                    <div className='flex justify-start items-center gap-2'>
                      <div className='w-4 h-4 rounded-full bg-[#16F24D] flex justify-center items-center'>
                        <FaEthereum className='text-white text-xs' />
                      </div>
                      <p className='text-sm text-gray-500 font-light'>123.99</p>
                    </div>
                    <p className='text-right text-base text-gray-500 font-light'>
                      Item: 235.99
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex justify-start items-center gap-3 p-3 rounded-md border border-gray-700'>
                <div className="bg-[url('/imgs/nft-market/avatar-1.jpg')] bg-center bg-cover bg-no-repeat rounded-full w-16 h-16" />
                <div className='flex flex-col justify-start items-stretch flex-grow gap-y-3'>
                  <div className='flex justify-between items-center gap-7'>
                    <h3 className='text-xl text-white font-light leading-none'>
                      Jame W Cottrell
                    </h3>
                    <div className='rounded-full bg-yellow-700 w-6 h-6 flex justify-center items-center'>
                      <FaMedal className='text-sm text-red-900' />
                    </div>
                  </div>
                  <div className='flex justify-between items-center gap-7'>
                    <div className='flex justify-start items-center gap-2'>
                      <div className='w-4 h-4 rounded-full bg-[#16F24D] flex justify-center items-center'>
                        <FaEthereum className='text-white text-xs' />
                      </div>
                      <p className='text-sm text-gray-500 font-light'>123.99</p>
                    </div>
                    <p className='text-right text-base text-gray-500 font-light'>
                      Item: 235.99
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex justify-start items-center gap-3 p-3 rounded-md border border-gray-700'>
                <div className="bg-[url('/imgs/nft-market/avatar-1.jpg')] bg-center bg-cover bg-no-repeat rounded-full w-16 h-16" />
                <div className='flex flex-col justify-start items-stretch flex-grow gap-y-3'>
                  <div className='flex justify-between items-center gap-7'>
                    <h3 className='text-xl text-white font-light leading-none'>
                      Jame W Cottrell
                    </h3>
                    <div className='rounded-full bg-yellow-700 w-6 h-6 flex justify-center items-center'>
                      <FaMedal className='text-sm text-red-900' />
                    </div>
                  </div>
                  <div className='flex justify-between items-center gap-7'>
                    <div className='flex justify-start items-center gap-2'>
                      <div className='w-4 h-4 rounded-full bg-[#16F24D] flex justify-center items-center'>
                        <FaEthereum className='text-white text-xs' />
                      </div>
                      <p className='text-sm text-gray-500 font-light'>123.99</p>
                    </div>
                    <p className='text-right text-base text-gray-500 font-light'>
                      Item: 235.99
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex justify-start items-center gap-3 p-3 rounded-md border border-gray-700'>
                <div className="bg-[url('/imgs/nft-market/black-model.jpg')] bg-center bg-cover bg-no-repeat rounded-full w-16 h-16" />
                <div className='flex flex-col justify-start items-stretch flex-grow gap-y-3'>
                  <div className='flex justify-between items-center gap-7'>
                    <h3 className='text-xl text-white font-light leading-none'>
                      Jame W Cottrell
                    </h3>
                    <div className='rounded-full bg-yellow-700 w-6 h-6 flex justify-center items-center'>
                      <FaMedal className='text-sm text-red-900' />
                    </div>
                  </div>
                  <div className='flex justify-between items-center gap-7'>
                    <div className='flex justify-start items-center gap-2'>
                      <div className='w-4 h-4 rounded-full bg-[#16F24D] flex justify-center items-center'>
                        <FaEthereum className='text-white text-xs' />
                      </div>
                      <p className='text-sm text-gray-500 font-light'>123.99</p>
                    </div>
                    <p className='text-right text-base text-gray-500 font-light'>
                      Item: 235.99
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex justify-start items-center gap-3 p-3 rounded-md border border-gray-700'>
                <div className="bg-[url('/imgs/nft-market/avatar-1.jpg')] bg-center bg-cover bg-no-repeat rounded-full w-16 h-16" />
                <div className='flex flex-col justify-start items-stretch flex-grow gap-y-3'>
                  <div className='flex justify-between items-center gap-7'>
                    <h3 className='text-xl text-white font-light leading-none'>
                      Jame W Cottrell
                    </h3>
                    <div className='rounded-full bg-yellow-700 w-6 h-6 flex justify-center items-center'>
                      <FaMedal className='text-sm text-red-900' />
                    </div>
                  </div>
                  <div className='flex justify-between items-center gap-7'>
                    <div className='flex justify-start items-center gap-2'>
                      <div className='w-4 h-4 rounded-full bg-[#16F24D] flex justify-center items-center'>
                        <FaEthereum className='text-white text-xs' />
                      </div>
                      <p className='text-sm text-gray-500 font-light'>123.99</p>
                    </div>
                    <p className='text-right text-base text-gray-500 font-light'>
                      Item: 235.99
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex justify-start items-center gap-3 p-3 rounded-md border border-gray-700'>
                <div className="bg-[url('/imgs/nft-market/avatar-1.jpg')] bg-center bg-cover bg-no-repeat rounded-full w-16 h-16" />
                <div className='flex flex-col justify-start items-stretch flex-grow gap-y-3'>
                  <div className='flex justify-between items-center gap-7'>
                    <h3 className='text-xl text-white font-light leading-none'>
                      Jame W Cottrell
                    </h3>
                    <div className='rounded-full bg-yellow-700 w-6 h-6 flex justify-center items-center'>
                      <FaMedal className='text-sm text-red-900' />
                    </div>
                  </div>
                  <div className='flex justify-between items-center gap-7'>
                    <div className='flex justify-start items-center gap-2'>
                      <div className='w-4 h-4 rounded-full bg-[#16F24D] flex justify-center items-center'>
                        <FaEthereum className='text-white text-xs' />
                      </div>
                      <p className='text-sm text-gray-500 font-light'>123.99</p>
                    </div>
                    <p className='text-right text-base text-gray-500 font-light'>
                      Item: 235.99
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex justify-start items-center gap-3 p-3 rounded-md border border-gray-700'>
                <div className="bg-[url('/imgs/nft-market/black-model.jpg')] bg-center bg-cover bg-no-repeat rounded-full w-16 h-16" />
                <div className='flex flex-col justify-start items-stretch flex-grow gap-y-3'>
                  <div className='flex justify-between items-center gap-7'>
                    <h3 className='text-xl text-white font-light leading-none'>
                      Jame W Cottrell
                    </h3>
                    <div className='rounded-full bg-yellow-700 w-6 h-6 flex justify-center items-center'>
                      <FaMedal className='text-sm text-red-900' />
                    </div>
                  </div>
                  <div className='flex justify-between items-center gap-7'>
                    <div className='flex justify-start items-center gap-2'>
                      <div className='w-4 h-4 rounded-full bg-[#16F24D] flex justify-center items-center'>
                        <FaEthereum className='text-white text-xs' />
                      </div>
                      <p className='text-sm text-gray-500 font-light'>123.99</p>
                    </div>
                    <p className='text-right text-base text-gray-500 font-light'>
                      Item: 235.99
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex justify-start items-center gap-3 p-3 rounded-md border border-gray-700'>
                <div className="bg-[url('/imgs/nft-market/black-model.jpg')] bg-center bg-cover bg-no-repeat rounded-full w-16 h-16" />
                <div className='flex flex-col justify-start items-stretch flex-grow gap-y-3'>
                  <div className='flex justify-between items-center gap-7'>
                    <h3 className='text-xl text-white font-light leading-none'>
                      Jame W Cottrell
                    </h3>
                    <div className='rounded-full bg-yellow-700 w-6 h-6 flex justify-center items-center'>
                      <FaMedal className='text-sm text-red-900' />
                    </div>
                  </div>
                  <div className='flex justify-between items-center gap-7'>
                    <div className='flex justify-start items-center gap-2'>
                      <div className='w-4 h-4 rounded-full bg-[#16F24D] flex justify-center items-center'>
                        <FaEthereum className='text-white text-xs' />
                      </div>
                      <p className='text-sm text-gray-500 font-light'>123.99</p>
                    </div>
                    <p className='text-right text-base text-gray-500 font-light'>
                      Item: 235.99
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='pt-24 pb-52 w-[98%] xl:w-[80%] mx-auto h-fit'>
            <div className='grid grid-cols-2 lg:grid-cols-7 place-items-stretch gap-16 items-start'>
              <div className='col-span-full lg:col-span-3 h-fit text-center lg:text-left'>
                <h2 className='text-4xl font-semibold leading-tight text-white'>
                  Discover Unique and
                  <span className='text-[#16F24D]'> Digital Art </span>
                </h2>
                <p className='my-7 text-gray-300 text-base font-light'>
                  But in certain circumstances owing to the claim of duty or
                  obligations of a business it will frequently occur that
                  pleasures have to be repudiated and annoyances accepted.
                </p>
                <div className='flex justify-center lg:justify-start items-center gap-7'>
                  <button className='my-7 py-2 px-5 font-normal text-lg text-gray-300 hover:text-[#16F24D] border border-gray-700 transition duration-300 hover:border-[#16F24D] bg-transparent hover:bg-black rounded-md'>
                    Explore Items
                  </button>
                  <button className='my-7 py-2 px-5 font-normal text-lg text-gray-300 hover:text-[#16F24D] border border-gray-700 transition duration-300 hover:border-[#16F24D] bg-transparent hover:bg-black rounded-md'>
                    Connect Wallet
                  </button>
                </div>
              </div>
              <div className='col-span-full lg:col-span-4'>
                <div className='relative w-fit mx-0 sm:mx-[6%] md:mx-[13%] lg:mx-0'>
                  <div className='p-2 rounded-md bg-[#212429] z-10'>
                    <Image
                      src='/imgs/nft-market/beach-abstract.jpg'
                      width={300}
                      height={400}
                      alt='beach abstract'
                      className='w-[180px] sm:max-w-none sm:w-[300px] rounded-md'
                    />
                  </div>
                  <div className='p-2 rounded-md bg-[#212429] absolute -top-1 -right-[60%] sm:-right-[75%] z-30'>
                    <Image
                      src='/imgs/nft-market/beach-abstract.jpg'
                      width={200}
                      height={200}
                      alt='beach abstract'
                      className='w-[100px] sm:max-w-none sm:w-[200px] rounded-md'
                    />
                  </div>
                  <div className='p-2 rounded-md bg-[#212429] absolute -bottom-[40%] -right-[50%] z-20'>
                    <Image
                      src='/imgs/nft-market/fluid-pattern.jpg'
                      width={300}
                      height={400}
                      alt='fluid pattern'
                      className='w-[180px] sm:max-w-none sm:w-[300px] rounded-md'
                    />
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
