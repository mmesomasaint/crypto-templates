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
} from 'react-icons/bs'
import {
  MdPhotoLibrary,
  MdAddToPhotos,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md'

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
                  <MdOutlineKeyboardArrowDown className='text-white text-xl' />
                </div>
                <div className='flex justify-start items-center gap-2 px-4 py-2 group cursor-pointer border border-gray-500 hover:border-[#16F24D]'>
                  <span className='text-lg font-medium leading-none text-white group-hover:text-[#16F24D]'>
                    Pixel
                  </span>
                  <MdOutlineKeyboardArrowDown className='text-white text-xl' />
                </div>
                <div className='flex justify-start items-center gap-2 px-4 py-2 group cursor-pointer border border-gray-500 hover:border-[#16F24D]'>
                  <span className='text-lg font-medium leading-none text-white group-hover:text-[#16F24D]'>
                    Music
                  </span>
                  <MdOutlineKeyboardArrowDown className='text-white text-xl' />
                </div>
              </div>
            </div>
            <div className='grid grid-cols-4 gap-10 place-items-stretch'>
              <div className='group border border-gray-500 hover:border-[#16F24D] rounded-md hover:glow-nft-primary'>
                <div className='relative backdrop-blur bg-[#26292E] group-hover:bg-black flex flex-col justify-center items-center gap-4 p-2 h-full rounded-md'>
                  <div className='w-full'>
                    <Image
                      src='/imgs/nft-market/abstract-art.jpg'
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
                      src='/imgs/nft-market/fantasy.jpg'
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
                      src='/imgs/nft-market/fantasy.jpg'
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
                      src='/imgs/nft-market/abstract-art.jpg'
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
        </div>
      </main>
    </div>
  )
}
