import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {
  BsSearch,
  BsFillPlayFill,
  BsMusicNoteBeamed,
  BsPaletteFill,
  BsFillBarChartLineFill,
  BsFillHeartFill,
  BsCashCoin,
} from 'react-icons/bs'
import {
  MdPhotoLibrary,
  MdAddToPhotos,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { GiWallet } from 'react-icons/gi'

export default function Home() {
  return (
    <div>
      <Head>
        <title>NFT Market</title>
        <meta
          name='description'
          content='create, sell or collect digital items'
        />
        <link rel='icon' href='/imgs/nft-market/favicon.ico' />
      </Head>
      <header className='absolute w-full w-transparent'>
        <div className='max-w-[90rem] w-[80%] mx-auto py-9'>
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
              <div className='flex justify-evenly items-center gap-7'>
                <span className='font-normal text-lg leading-none text-[#16F24D] scale-105 underline underline-offset-[6px] glow-nft-primary'>
                  <Link href='/templates/nft-market'>Home</Link>
                </span>
                <span className='font-normal text-lg leading-none text-white hover:text-[#16F24D] hover:glow-nft-primary'>
                  <Link href='/templates/nft-market/collection'>
                    Collection
                  </Link>
                </span>
                <span className='font-normal text-lg leading-none text-white hover:text-[#16F24D] hover:glow-nft-primary'>
                  <Link href='/templates/nft-market/about'>About Us</Link>
                </span>
                <span className='font-normal text-lg leading-none text-white hover:text-[#16F24D] hover:glow-nft-primary'>
                  <Link href='/templates/nft-market/nft'>NFT</Link>
                </span>
                <span className='font-normal text-lg leading-none text-white hover:text-[#16F24D] hover:glow-nft-primary'>
                  <Link href='/templates/nft-market/blog'>Blog</Link>
                </span>
                <span className='font-normal text-lg leading-none text-white hover:text-[#16F24D] hover:glow-nft-primary'>
                  <Link href='/templates/nft-market/contact'>Contact</Link>
                </span>
                <div className='relative'>
                  <input
                    type='text'
                    placeholder='Search Here'
                    className='pl-10 py-3 text-base text-white bg-white bg-opacity-30 focus:outline-none focus-within:text-black rounded-md leading-none'
                  />
                  <div className='absolute top-0 w-fit h-full flex items-center ml-3 pointer-events-none'>
                    <BsSearch className='text-white text-lg text-opacity-70' />
                  </div>
                </div>
                <button className='text-base py-4 px-7 font-medium leading-none bg-[#16F24D] rounded-md hover:glow-nft-primary'>
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className='max-w-[90rem] mx-auto bg-[#212429]'>
          <div className="h-fit md:h-[50rem] w-full bg-[url('/imgs/nft-market/main-sm.jpeg')] bg-no-repeat bg-cover bg-bottom">
            <div className='bg-[rgba(0,0,255,0.35)] w-full h-full'>
              <div className='bg-[rgba(0,0,0,0.55)] w-full h-full'>
                <div className='flex gap-1 justify-center items-center w-[80%] mx-auto h-full'>
                  <div className='w-full h-fit pt-16'>
                    <h5 className='text-[#16F24D] text-2xl font-semibold capitalize mb-4'>
                      Welcome to NFT Market
                    </h5>
                    <div className='w-full h-full grid grid-cols-7 gap-10 place-content-center'>
                      <div className='col-span-4'>
                        <h1 className='text-5xl font-bold leading-normal text-white'>
                          Create, Sell or Collect Digital Items.
                        </h1>
                        <p className='my-7 text-gray-400 text-2xl font-normal leading-tight'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aenean mollis ligula sed diam sollicitudin,
                          aliquam fermentum sapien consectetur. Donec
                          consectetur et ex at vulputate
                        </p>
                        <div className='mb-7 flex justify-start items-center gap-7'>
                          <button className='text-black text-base py-4 px-7 font-medium leading-none bg-[#16F24D] rounded-md hover:glow-nft-primary'>
                            Explore More
                          </button>
                          <div className='flex justify-start items-center gap-4'>
                            <div className='w-8 h-8 bg-white bg-opacity-30 hover:shadow-up-2x rounded-full flex justify-center items-center'>
                              <BsFillPlayFill className='text-[#16F24D] text-xl' />
                            </div>
                            <p className='text-[#16F24D] text-base'>
                              Watch Video
                            </p>
                          </div>
                        </div>
                        <div className='flex justify-start items-center gap-7'>
                          <div className='bg-white hover:bg-[#16F24D] hover:bg-opacity-30 bg-opacity-30 group rounded-md flex justify-center items-center w-24 h-24'>
                            <div className='flex flex-col items-center justify-center gap-4 w-full h-full group-hover:bg-white group-hover:bg-opacity-30 rounded-md '>
                              <p className='block text-base font-semibold leading-none group-hover:text-[#16F24D] text-white'>
                                2.99k
                              </p>
                              <p className='block text-base font-normal leading-none group-hover:font-semibold text-[#16F24D] group-hover:text-white'>
                                Live Auction
                              </p>
                            </div>
                          </div>
                          <div className='bg-white hover:bg-[#16F24D] hover:bg-opacity-30 bg-opacity-30 group rounded-md flex justify-center items-center w-24 h-24'>
                            <div className='flex flex-col items-center justify-center gap-4 w-full h-full group-hover:bg-white group-hover:bg-opacity-30 rounded-md '>
                              <p className='block text-base font-semibold leading-none group-hover:text-[#16F24D] text-white'>
                                99.15M
                              </p>
                              <p className='block text-base font-normal leading-none group-hover:font-semibold text-[#16F24D] group-hover:text-white'>
                                NFT Store
                              </p>
                            </div>
                          </div>
                          <div className='bg-white hover:bg-[#16F24D] hover:bg-opacity-30 bg-opacity-30 group rounded-md flex justify-center items-center w-24 h-24'>
                            <div className='flex flex-col items-center justify-center gap-4 w-full h-full group-hover:bg-white group-hover:bg-opacity-30 rounded-md '>
                              <p className='block text-base font-semibold leading-none group-hover:text-[#16F24D] text-white'>
                                2.99k
                              </p>
                              <p className='block text-base font-normal leading-none group-hover:font-semibold text-[#16F24D] group-hover:text-white'>
                                Collection
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-span-3'>
                        <div className='relative w-full h-full'>
                          <div className='absolute z-10 -top-[7rem] flex justify-center items-center bg-transparent w-full'>
                            <Image
                              src='/imgs/nft-market/silver-hand.png'
                              width={350}
                              height={350}
                              alt='silver hand'
                            />
                          </div>
                          <div className='relative w-fit'>
                            <div className='absolute z-20 bg-transparent grid grid-cols-5 gap-3 place-items-stretch w-full h-full items-end p-5'>
                              <div className='col-span-2 grid grid-cols-3 gap-1'>
                                <div className="w-10 h-10 rounded-full bg-[url('/imgs/nft-market/avatar-1.jpg')] bg-no-repeat bg-center bg-cover" />
                                <div className='col-span-2 flex flex-col items-start justify-center gap-1'>
                                  <p className='text-base font-normal leading-none text-white'>
                                    MD Name Is
                                  </p>
                                  <p className='text-base font-extralight leading-none text-white'>
                                    ETH 15.99
                                  </p>
                                </div>
                              </div>
                              <div className='col-span-3 border border-[#16F24D] bg-white bg-opacity-30 rounded-md w-full flex justify-center items-center'>
                                <div className='w-fit h-fit py-3'>
                                  <span className='text-lg font-medium text-white leading-none'>
                                    365<span className='mx-2'>:</span>10
                                    <span className='mx-2'>:</span>65
                                    <span className='mx-2'>:</span>13
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
                            <Image
                              src='/imgs/nft-market/pattern.jpeg'
                              width={500}
                              height={500}
                              alt='pattern'
                              className='rounded-md'
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
          <div className='py-24 w-[80%] mx-auto'>
            <div className='grid grid-cols-6 gap-7 place-items-stretch'>
              <div className='w-32 h-32 group border border-gray-500 hover:border-[#16F24D] rounded-md'>
                <div className='backdrop-blur bg-[#26292E] hover:bg-black flex flex-col justify-center items-center gap-4 h-full rounded-md'>
                  <BsPaletteFill className='text-[#16F24D] text-6xl' />
                  <p className='text-lg font-medium leading-none text-white border border-transparent group-hover:border-[#16F24D] group-hover:text-[#16F24D] p-1 rounded-md'>
                    Art NFT
                  </p>
                </div>
              </div>
              <div className='w-32 h-32 group border border-gray-500 hover:border-[#16F24D] rounded-md'>
                <div className='backdrop-blur bg-[#26292E] hover:bg-black flex flex-col justify-center items-center gap-4 h-full rounded-md'>
                  <BsMusicNoteBeamed className='text-[#16F24D] text-6xl' />
                  <p className='text-lg font-medium leading-none text-white border border-transparent group-hover:border-[#16F24D] group-hover:text-[#16F24D] p-1 rounded-md'>
                    Music NFT
                  </p>
                </div>
              </div>
              <div className='w-32 h-32 group border border-gray-500 hover:border-[#16F24D] rounded-md'>
                <div className='backdrop-blur bg-[#26292E] hover:bg-black flex flex-col justify-center items-center gap-4 h-full rounded-md'>
                  <BsFillBarChartLineFill className='text-[#16F24D] text-6xl' />
                  <p className='text-lg font-medium leading-none text-white border border-transparent group-hover:border-[#16F24D] group-hover:text-[#16F24D] p-1 rounded-md'>
                    Current NFT
                  </p>
                </div>
              </div>
              <div className='w-32 h-32 group border border-gray-500 hover:border-[#16F24D] rounded-md'>
                <div className='backdrop-blur bg-[#26292E] hover:bg-black flex flex-col justify-center items-center gap-4 h-full rounded-md'>
                  <MdPhotoLibrary className='text-[#16F24D] text-6xl' />
                  <p className='text-lg font-medium leading-none text-white border border-transparent group-hover:border-[#16F24D] group-hover:text-[#16F24D] p-1 rounded-md'>
                    Photo NFT
                  </p>
                </div>
              </div>
              <div className='w-32 h-32 group border border-gray-500 hover:border-[#16F24D] rounded-md'>
                <div className='backdrop-blur bg-[#26292E] hover:bg-black flex flex-col justify-center items-center gap-4 h-full rounded-md'>
                  <MdAddToPhotos className='text-[#16F24D] text-6xl' />
                  <p className='text-lg font-medium leading-none text-white border border-transparent group-hover:border-[#16F24D] group-hover:text-[#16F24D] p-1 rounded-md'>
                    Create NFT
                  </p>
                </div>
              </div>
              <div className='w-32 h-32 group border border-gray-500 hover:border-[#16F24D] rounded-md'>
                <div className='backdrop-blur bg-[#26292E] hover:bg-black flex flex-col justify-center items-center gap-4 h-full rounded-md'>
                  <BsPaletteFill className='text-[#16F24D] text-6xl' />
                  <p className='text-lg font-medium leading-none text-white border border-transparent group-hover:border-[#16F24D] group-hover:text-[#16F24D] p-1 rounded-md'>
                    Art NFT
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='py-24 w-[80%] mx-auto'>
            <div className='flex justify-between items-end gap-7 mb-5'>
              <h2 className='text-5xl font-semibold leading-none text-white'>
                NFT Gallery
              </h2>
              <div className='flex justify-evenly items-center gap-4'>
                <div className='flex justify-start items-center gap-2 px-4 py-2 group cursor-pointer border border-gray-500 hover:border-[#16F24D]'>
                  <span className='text-lg font-medium leading-none text-white group-hover:text-[#16F24D]'>
                    Art
                  </span>
                  <MdOutlineKeyboardArrowDown className='text-white text-xl' />
                </div>
                <div className='flex justify-start items-center gap-2 px-4 py-2 group cursor-pointer border border-gray-500 hover:border-[#16F24D]'>
                  <span className='text-lg font-medium leading-none text-white group-hover:text-[#16F24D]'>
                    3D Shape
                  </span>
                  <MdOutlineKeyboardArrowRight className='text-white text-xl' />
                </div>
                <div className='flex justify-start items-center gap-2 px-4 py-2 group cursor-pointer border border-gray-500 hover:border-[#16F24D]'>
                  <span className='text-lg font-medium leading-none text-white group-hover:text-[#16F24D]'>
                    Pixel
                  </span>
                  <MdOutlineKeyboardArrowRight className='text-white text-xl' />
                </div>
                <div className='flex justify-start items-center gap-2 px-4 py-2 group cursor-pointer border border-gray-500 hover:border-[#16F24D]'>
                  <span className='text-lg font-medium leading-none text-white group-hover:text-[#16F24D]'>
                    Music
                  </span>
                  <MdOutlineKeyboardArrowRight className='text-white text-xl' />
                </div>
              </div>
            </div>
            <div className='grid grid-cols-4 gap-10 place-items-stretch'>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
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
                    <BsFillHeartFill className='text-gray-500 group-hover:text-red-700 text-base group-hover:text-xs flex-shrink-0' />
                    <p className='hidden group-hover:block text-xs font-light text-gray-500'>
                      126
                    </p>
                  </div>
                </div>
              </div>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
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
                    <BsFillHeartFill className='text-gray-500 group-hover:text-red-700 text-base group-hover:text-xs flex-shrink-0' />
                    <p className='hidden group-hover:block text-xs font-light text-gray-500'>
                      126
                    </p>
                  </div>
                </div>
              </div>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
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
                    <BsFillHeartFill className='text-gray-500 group-hover:text-red-700 text-base group-hover:text-xs flex-shrink-0' />
                    <p className='hidden group-hover:block text-xs font-light text-gray-500'>
                      126
                    </p>
                  </div>
                </div>
              </div>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
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
                    <BsFillHeartFill className='text-gray-500 group-hover:text-red-700 text-base group-hover:text-xs flex-shrink-0' />
                    <p className='hidden group-hover:block text-xs font-light text-gray-500'>
                      126
                    </p>
                  </div>
                </div>
              </div>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
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
                    <BsFillHeartFill className='text-gray-500 group-hover:text-red-700 text-base group-hover:text-xs flex-shrink-0' />
                    <p className='hidden group-hover:block text-xs font-light text-gray-500'>
                      126
                    </p>
                  </div>
                </div>
              </div>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded- hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
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
                    <BsFillHeartFill className='text-gray-500 group-hover:text-red-700 text-base group-hover:text-xs flex-shrink-0' />
                    <p className='hidden group-hover:block text-xs font-light text-gray-500'>
                      126
                    </p>
                  </div>
                </div>
              </div>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
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
                    <BsFillHeartFill className='text-gray-500 group-hover:text-red-700 text-base group-hover:text-xs flex-shrink-0' />
                    <p className='hidden group-hover:block text-xs font-light text-gray-500'>
                      126
                    </p>
                  </div>
                </div>
              </div>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
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
                    <BsFillHeartFill className='text-gray-500 group-hover:text-red-700 text-base group-hover:text-xs flex-shrink-0' />
                    <p className='hidden group-hover:block text-xs font-light text-gray-500'>
                      126
                    </p>
                  </div>
                </div>
              </div>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
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
                    <BsFillHeartFill className='text-gray-500 group-hover:text-red-700 text-base group-hover:text-xs flex-shrink-0' />
                    <p className='hidden group-hover:block text-xs font-light text-gray-500'>
                      126
                    </p>
                  </div>
                </div>
              </div>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
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
                    <BsFillHeartFill className='text-gray-500 group-hover:text-red-700 text-base group-hover:text-xs flex-shrink-0' />
                    <p className='hidden group-hover:block text-xs font-light text-gray-500'>
                      126
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[30rem] w-full bg-[url('/imgs/nft-market/game-room.jpg')] bg-no-repeat bg-cover bg-center" />
          <div className='py-24 w-[80%] mx-auto h-fit'>
            <h2 className='text-5xl font-semibold leading-none text-white text-center'>
              Create, Sell Your NFT
            </h2>
            <div className='w-fit mx-auto p-2 bg-[#212429] my-[10rem] relative'>
              <div className='absolute -top-32 -right-[2rem] flex items-end gap-2'>
                <div className='relative -bottom-8 bg-[#212429] rounded-md p-2'>
                  <Image
                    src='/imgs/nft-market/abstract.jpg'
                    width={240}
                    height={250}
                    alt='abstract'
                    className='rounded-md border border-white'
                  />
                </div>
                <div className='group w-[23rem] h-fit border border-gray-500 hover:border-[#16F24D] rounded-md hover:glow-nft-primary'>
                  <div className='relative backdrop-blur bg-[#26292E] group-hover:bg-black flex flex-col justify-start items-start gap-2 p-2 h-full rounded-md overflow-x-hidden'>
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
                      <h4 className='block text-white group-hover:text-[#16F24D] text-xl font-medium'>
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
              <div className='absolute -bottom-[10.6rem] -left-[2rem] flex items-end gap-2'>
                <div className='relative -top-16 bg-[#212429] rounded-md p-2 flex-shrink-0'>
                  <Image
                    src='/imgs/nft-market/abstract.jpg'
                    width={240}
                    height={250}
                    alt='abstract'
                    className='rounded-md border border-white'
                  />
                </div>
                <div className='group flex-shrink-0 w-[23rem] h-fit border border-gray-500 hover:border-[#16F24D] rounded-md hover:glow-nft-primary'>
                  <div className='relative backdrop-blur bg-[#26292E] group-hover:bg-black flex flex-col justify-start items-start gap-2 p-2 h-full rounded-md overflow-x-hidden'>
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
                      <h4 className='block text-white group-hover:text-[#16F24D] text-xl font-medium'>
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
              <div className='flex items-end gap-3'>
                <Image
                  src='/imgs/nft-market/sailing-ship.jpg'
                  width={400}
                  height={400}
                  alt='sailing-ship'
                  className='rounded-md border border-white flex-shrink-0'
                />
                <div className='group flex-shrink-0 w-[23rem] h-fit border border-gray-500 hover:border-[#16F24D] rounded-md hover:glow-nft-primary'>
                  <div className='relative backdrop-blur bg-[#26292E] group-hover:bg-black flex flex-col justify-start items-start gap-2 p-2 h-full rounded-md overflow-x-hidden'>
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
                      <h4 className='block text-white group-hover:text-[#16F24D] text-xl font-medium'>
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
          <div className='py-24 w-[80%] mx-auto h-fit'>
            <h2 className='text-5xl font-semibold leading-none text-white text-center'>
              Popular Collection in NFT
            </h2>
            <div className='grid grid-cols-4 place-items-stretch gap-5 py-20'>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
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
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
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
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
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
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
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
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
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
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
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
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
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
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
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
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
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
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
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
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
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
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
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
        </div>
      </main>
    </div>
  )
}
