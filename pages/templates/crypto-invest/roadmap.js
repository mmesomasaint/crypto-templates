import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useCallback } from 'react'
import {
  BsStar,
  BsPatchCheckFill,
  BsCurrencyExchange,
  BsInstagram,
  BsTwitter,
} from 'react-icons/bs'
import { DiGoogleCloudPlatform } from 'react-icons/di'
import {
  FaBtc,
  FaEthereum,
  FaBitcoin,
  FaLinkedinIn,
  FaFacebookF,
  FaPinterestP,
} from 'react-icons/fa'
import { FiTrendingUp } from 'react-icons/fi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdSecurity, MdOutlineArrowForwardIos } from 'react-icons/md'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { CgPerformance } from 'react-icons/cg'
import { RiCustomerService2Fill } from 'react-icons/ri'
import { TbBrandTelegram } from 'react-icons/tb'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = useCallback(() => setIsOpen((open) => !open), {})

  return (
    <div className='bg-black'>
      <Head>
        <title>Crypto Invest</title>
        <meta
          name='description'
          content='Investment in crypto has never been easier'
        />
        <link rel='icon' href='/imgs/crypto-invest/favicon.ico' />
      </Head>
      <header className='relative bg-[#0F69E5]'>
        <div className='max-w-[90rem] w-[90%] xl:w-[80%] mx-auto'>
          <div className='flex justify-between gap-10 items-center w-full'>
            <div className='py-3'>
              <Image
                src='/imgs/crypto-invest/logo.png'
                width={130}
                height={30}
                alt='company logo'
              />
            </div>
            <div className='flex justify-between gap-12 items-center'>
              <div className='block lg:hidden'>
                <GiHamburgerMenu
                  className='text-3xl text-white'
                  onClick={handleOpen}
                />
              </div>
              <div
                className={`${
                  isOpen ? 'flex' : 'hidden'
                } bg-[#0F69E5] lg:bg-transparent w-full left-0 top-[100%] lg:w-auto absolute lg:static flex-col lg:flex-row gap-6 px-[5%] py-8 lg:py-0 lg:px-0 lg:flex items-start lg:justify-evenly lg:gap-8 lg:items-center`}
              >
                <span className='text-xl lg:text-base font-medium leading-none text-white hover:scale-110'>
                  <Link href='/'>Home</Link>
                </span>
                <span className='text-xl lg:text-base font-medium leading-none text-white hover:scale-110'>
                  <Link href='/templates/crypto-invest/about'>About</Link>
                </span>
                <span className='text-xl lg:text-base font-medium leading-none text-white hover:scale-110'>
                  <Link href='/templates/crypto-invest/service'>Service</Link>
                </span>
                <span className='text-xl lg:text-base font-medium leading-none text-white hover:scale-110'>
                  <Link href='/templates/crypto-invest/token-sale'>
                    Token Sale
                  </Link>
                </span>
                <span className='text-xl lg:text-base font-medium leading-none text-[#FF198D] scale-110'>
                  <Link href='/templates/crypto-invest/roadmap'>Road Map</Link>
                </span>
                <span className='text-xl lg:text-base font-medium leading-none text-white hover:scale-110'>
                  <Link href='/templates/crypto-invest/pages'>Pages</Link>
                </span>
                <span className='text-xl lg:text-base font-medium leading-none text-white hover:scale-110'>
                  <Link href='/templates/crypto-invest/contact'>Contact</Link>
                </span>
                <span className='text-xl lg:text-base font-medium leading-none text-white hover:scale-110'>
                  <Link href='/templates/crypto-invest/blog'>Blog</Link>
                </span>
              </div>
              <div>
                <button className='text-xl lg:text-base font-medium leading-none px-4 py-2 bg-[#FF198D] text-white rounded-sm shadow-sm'>
                  Try Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className='max-w-[90rem] mx-auto'>
          <div className="h-fit md:h-[20rem] w-full bg-[url('/imgs/crypto-invest/roadmap.jpg')] bg-no-repeat bg-cover bg-center">
            <div className='flex justify-center items-center bg-[rgba(0,0,0,0.35)] h-full'>
              <div className='w-full h-fit text-center py-16 md:py-0'>
                <h1 className='block w-[90%] xl:w-[80%] mx-auto text-6xl font-bold leading-tight text-white mb-4'>
                  Our Strategy & Project Plan
                </h1>
                <p className='block w-[90%] xl:w-[80%] mx-auto text-xl lg:text-base font-normal leading-tight text-white mb-8'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus tempus dui nec euismod congue. Nulla id libero
                  dignissim, convallis odio
                </p>
              </div>
            </div>
          </div>
          <div className='py-24 bg-black'>
            <div className='w-[90%] xl:w-[80%] mx-auto text-center'>
              <p className='text-4xl lg:text-3xl font-normal leading-tight text-white w-full mb-16'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                tempus dui nec euismod congue.
              </p>
              <div className='grid grid-cols-1 sm:grid-cols-11 place-items-stretch gap-0'>
                <div className='sm:col-start-5 sm:col-end-8'>
                  <div className='flex justify-center items-center w-32 mx-auto h-32 p-10 border-2 border-[#FF198D] rounded-full glow'>
                    <h2 className='text-3xl font-extrabold leading-none text-white'>
                      Start
                    </h2>
                  </div>
                </div>
                <div className='col-start-0 col-end-2 sm:col-start-6'>
                  <div className='flex justify-center items-center'>
                    <div className='border border-[#FF198D] h-16 w-fit' />
                  </div>
                </div>
                <div className='col-start-0 col-end-2 sm:col-start-3 sm:col-end-6 sm:place-self-end'>
                  <div className='group relative flex flex-col h-[11rem] w-full max-w-[23rem] sm:max-w-[15rem] sm:w-[15rem] mx-auto'>
                    <div className='flex flex-grow justify-between items-center gap-10 group-hover:hidden'>
                      <div className='h-full flex-grow transform skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-transparent bg-transparent rounded-tl-md' />
                      <div className='h-full flex-grow transform -skew-x-1 -skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-[#FF198D] bg-[#FF198D] rounded-tr-md' />
                    </div>
                    <div className='flex flex-grow justify-between items-center gap-10 group-hover:hidden'>
                      <div className='h-full flex-grow transform -skew-x-1 -skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-[#FF198D] bg-[#FF198D] rounded-bl-md' />
                      <div className='h-full flex-grow transform skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-transparent bg-transparent rounded-br-md' />
                    </div>
                    <div className='absolute inset-[5px] scale-y-[1.09] lg:scale-y-[1.080] scale-x-[1.057] sm:scale-x-[1.060] lg:scale-x-[1.066] z-10 bg-black rounded-md'>
                      <div className='w-full h-full group-hover:bg-[#0F69E5] group-hover:scale-[1.02] group-hover:bg-opacity-20 text-white p-0 group-hover:p-4 rounded-md'>
                        <div className='grid grid-cols-3 group-hover:grid-cols-4 place-content-center group-hover:place-items-start h-full gap-5 group-hover:gap-0'>
                          <div className='col-span-1 group-hover:col-span-4 h-fit'>
                            <p className='text-6xl group-hover:text-3xl font-bold font-fill-transparent font-outline-white font-outline-1 leading-none'>
                              01
                            </p>
                          </div>
                          <div className='col-span-2 group-hover:col-start-2 group-hover:col-end-5'>
                            <div className='mb-5'>
                              <p className='w-fit rounded-md text-xs font-light px-2 py-1 leading-none bg-[#0F69E5] bg-opacity-20 group-hover:bg-transparent text-[#FF198D] group-hover:text-white mb-2'>
                                january, 2022
                              </p>
                              <h2 className='text-xl font-medium leading-none text-white group-hover:text-[#FF198D] text-left'>
                                Legal Review
                              </h2>
                            </div>
                            <p className='text-xs font-light leading-normal text-white text-left'>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-start-0 col-end-2 sm:col-start-6'>
                  <div className='grid grid-cols-2 gap-0 place-items-stretch h-full'>
                    <div className='h-full flex justify-center items-start border-r border-r-[#FF198D]'>
                      <div className='hidden sm:block border border-[#FF198D] h-fit flex-grow mt-5' />
                    </div>
                    <div className='h-full border-l border-l-[#FF198D]' />
                  </div>
                </div>
                <div className='col-start-0 col-end-2 sm:col-start-6'>
                  <div className='grid grid-cols-2 gap-0 place-items-stretch h-full'>
                    <div className='h-full border-r border-r-[#FF198D]' />
                    <div className='h-full flex justify-center items-start border-l border-l-[#FF198D]'>
                      <div className='hidden sm:block border border-[#FF198D] h-fit flex-grow mt-5' />
                    </div>
                  </div>
                </div>
                <div className='col-start-1 col-end-2 sm:col-start-7 sm:col-end-10 sm:place-self-start my-6 sm:my-0'>
                  <div className='group relative flex flex-col h-[11rem] w-full max-w-[23rem] sm:max-w-[15rem] sm:w-[15rem] mx-auto'>
                    <div className='flex flex-grow justify-between items-center gap-10 group-hover:hidden'>
                      <div className='h-full flex-grow transform skew-x-1 skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-[#FF198D] bg-[#FF198D] rounded-tl-md' />
                      <div className='h-full flex-grow transform -skew-x-1 -skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-transparent bg-transparent' />
                    </div>
                    <div className='flex flex-grow justify-between items-center gap-10 group-hover:hidden'>
                      <div className='h-full flex-grow transform -skew-x-1 -skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-transparent bg-transparent' />
                      <div className='h-full flex-grow transform skew-x-1 skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-[#FF198D] bg-[#FF198D] rounded-br-md' />
                    </div>
                    <div className='absolute inset-[5px] scale-y-[1.09] lg:scale-y-[1.080] scale-x-[1.057] sm:scale-x-[1.060] lg:scale-x-[1.066] z-10 bg-black rounded-md'>
                      <div className='w-full h-full group-hover:bg-[#0F69E5] group-hover:scale-[1.02] group-hover:bg-opacity-20 text-white p-0 group-hover:p-4 rounded-md'>
                        <div className='grid grid-cols-3 group-hover:grid-cols-4 place-content-center group-hover:place-items-start h-full gap-5 group-hover:gap-0'>
                          <div className='col-span-1 group-hover:col-span-4 h-fit'>
                            <p className='text-6xl group-hover:text-3xl font-bold font-fill-transparent font-outline-white font-outline-1 leading-none'>
                              02
                            </p>
                          </div>
                          <div className='col-span-2 group-hover:col-start-2 group-hover:col-end-5'>
                            <div className='mb-5'>
                              <p className='w-fit rounded-md text-xs font-light px-2 py-1 leading-none bg-[#0F69E5] bg-opacity-20 group-hover:bg-transparent text-[#FF198D] group-hover:text-white mb-2'>
                                january, 2022
                              </p>
                              <h2 className='text-xl font-medium leading-none text-white group-hover:text-[#FF198D] text-left'>
                                STMX Wallet
                              </h2>
                            </div>
                            <p className='text-xs font-light leading-normal text-white text-left'>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-start-1 col-end-2 sm:col-start-1 sm:col-end-6'>
                  <div className='grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-6 gap-6 xl:gap-0'>
                    <div className='col-start-1 col-end-2 sm:col-start-1 sm:col-end-4 sm:place-self-end'>
                      <div className='group relative flex flex-col h-[11rem] w-full max-w-[23rem] sm:max-w-[15rem] sm:w-[15rem] mx-auto'>
                        <div className='flex flex-grow justify-between items-center gap-10 group-hover:hidden'>
                          <div className='h-full flex-grow transform skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-transparent bg-transparent rounded-tl-md' />
                          <div className='h-full flex-grow transform -skew-x-1 -skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-[#FF198D] bg-[#FF198D] rounded-tr-md' />
                        </div>
                        <div className='flex flex-grow justify-between items-center gap-10 group-hover:hidden'>
                          <div className='h-full flex-grow transform -skew-x-1 -skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-[#FF198D] bg-[#FF198D] rounded-bl-md' />
                          <div className='h-full flex-grow transform skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-transparent bg-transparent rounded-br-md' />
                        </div>
                        <div className='absolute inset-[5px] scale-y-[1.09] lg:scale-y-[1.080] scale-x-[1.057] sm:scale-x-[1.060] lg:scale-x-[1.066] z-10 bg-black rounded-md'>
                          <div className='w-full h-full group-hover:bg-[#0F69E5] group-hover:scale-[1.02] group-hover:bg-opacity-20 text-white p-0 group-hover:p-4 rounded-md'>
                            <div className='grid grid-cols-3 group-hover:grid-cols-4 place-content-center group-hover:place-items-start h-full gap-5 group-hover:gap-0'>
                              <div className='col-span-1 group-hover:col-span-4 h-fit'>
                                <p className='text-6xl group-hover:text-3xl font-bold font-fill-transparent font-outline-white font-outline-1 leading-none'>
                                  03
                                </p>
                              </div>
                              <div className='col-span-2 group-hover:col-start-2 group-hover:col-end-5'>
                                <div className='mb-5'>
                                  <p className='w-fit rounded-md text-xs font-light px-2 py-1 leading-none bg-[#0F69E5] bg-opacity-20 group-hover:bg-transparent text-[#FF198D] group-hover:text-white mb-2'>
                                    january, 2022
                                  </p>
                                  <h2 className='text-xl font-medium leading-none text-white group-hover:text-[#FF198D] text-left'>
                                    Legal Review
                                  </h2>
                                </div>
                                <p className='text-xs font-light leading-normal text-white text-left'>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-start-1 sm:col-start-1 xl:col-start-4 col-end-2 sm:col-end-4 xl:col-end-7 sm:place-self-end'>
                      <div className='group relative flex flex-col h-[11rem] w-full max-w-[23rem] sm:max-w-[15rem] sm:w-[15rem] mx-auto'>
                        <div className='flex flex-grow justify-between items-center gap-10 group-hover:hidden'>
                          <div className='h-full flex-grow transform skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-transparent bg-transparent rounded-tl-md' />
                          <div className='h-full flex-grow transform -skew-x-1 -skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-[#FF198D] bg-[#FF198D] rounded-tr-md' />
                        </div>
                        <div className='flex flex-grow justify-between items-center gap-10 group-hover:hidden'>
                          <div className='h-full flex-grow transform -skew-x-1 -skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-[#FF198D] bg-[#FF198D] rounded-bl-md' />
                          <div className='h-full flex-grow transform skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-transparent bg-transparent rounded-br-md' />
                        </div>
                        <div className='absolute inset-[5px] scale-y-[1.09] lg:scale-y-[1.080] scale-x-[1.057] sm:scale-x-[1.060] lg:scale-x-[1.066] z-10 bg-black rounded-md'>
                          <div className='w-full h-full group-hover:bg-[#0F69E5] group-hover:scale-[1.02] group-hover:bg-opacity-20 text-white p-0 group-hover:p-4 rounded-md'>
                            <div className='grid grid-cols-3 group-hover:grid-cols-4 place-content-center group-hover:place-items-start h-full gap-5 group-hover:gap-0'>
                              <div className='col-span-1 group-hover:col-span-4 h-fit'>
                                <p className='text-6xl group-hover:text-3xl font-bold font-fill-transparent font-outline-white font-outline-1 leading-none'>
                                  04
                                </p>
                              </div>
                              <div className='col-span-2 group-hover:col-start-2 group-hover:col-end-5'>
                                <div className='mb-5'>
                                  <p className='w-fit rounded-md text-xs font-light px-2 py-1 leading-none bg-[#0F69E5] bg-opacity-20 group-hover:bg-transparent text-[#FF198D] group-hover:text-white mb-2'>
                                    january, 2022
                                  </p>
                                  <h2 className='text-xl font-medium leading-none text-white group-hover:text-[#FF198D] text-left'>
                                    Legal Review
                                  </h2>
                                </div>
                                <p className='text-xs font-light leading-normal text-white text-left'>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-start-0 col-end-2 sm:col-start-6'>
                  <div className='grid grid-cols-2 gap-0 place-items-stretch h-full'>
                    <div className='h-full flex justify-center items-start border-r border-r-[#FF198D]'>
                      <div className='hidden sm:block border border-[#FF198D] h-fit flex-grow mt-5' />
                    </div>
                    <div className='h-full border-l border-l-[#FF198D]' />
                  </div>
                </div>
                <div className='col-start-0 col-end-2 sm:col-start-6'>
                  <div className='grid grid-cols-2 gap-0 place-items-stretch h-full'>
                    <div className='h-full border-r border-r-[#FF198D]' />
                    <div className='h-full flex justify-center items-start border-l border-l-[#FF198D]'>
                      <div className='hidden sm:block border border-[#FF198D] h-fit flex-grow mt-5' />
                    </div>
                  </div>
                </div>
                <div className='col-start-1 col-end-2 sm:col-start-7 sm:col-end-10 sm:place-self-start my-6 sm:my-0'>
                  <div className='group relative flex flex-col h-[11rem] w-full max-w-[23rem] sm:max-w-[15rem] sm:w-[15rem] mx-auto'>
                    <div className='flex flex-grow justify-between items-center gap-10 group-hover:hidden'>
                      <div className='h-full flex-grow transform skew-x-1 skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-[#FF198D] bg-[#FF198D] rounded-tl-md' />
                      <div className='h-full flex-grow transform -skew-x-1 -skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-transparent bg-transparent' />
                    </div>
                    <div className='flex flex-grow justify-between items-center gap-10 group-hover:hidden'>
                      <div className='h-full flex-grow transform -skew-x-1 -skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-transparent bg-transparent' />
                      <div className='h-full flex-grow transform skew-x-1 skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-[#FF198D] bg-[#FF198D] rounded-br-md' />
                    </div>
                    <div className='absolute inset-[5px] scale-y-[1.09] lg:scale-y-[1.080] scale-x-[1.057] sm:scale-x-[1.060] lg:scale-x-[1.066] z-10 bg-black rounded-md'>
                      <div className='w-full h-full group-hover:bg-[#0F69E5] group-hover:scale-[1.02] group-hover:bg-opacity-20 text-white p-0 group-hover:p-4 rounded-md'>
                        <div className='grid grid-cols-3 group-hover:grid-cols-4 place-content-center group-hover:place-items-start h-full gap-5 group-hover:gap-0'>
                          <div className='col-span-1 group-hover:col-span-4 h-fit'>
                            <p className='text-6xl group-hover:text-3xl font-bold font-fill-transparent font-outline-white font-outline-1 leading-none'>
                              05
                            </p>
                          </div>
                          <div className='col-span-2 group-hover:col-start-2 group-hover:col-end-5'>
                            <div className='mb-5'>
                              <p className='w-fit rounded-md text-xs font-light px-2 py-1 leading-none bg-[#0F69E5] bg-opacity-20 group-hover:bg-transparent text-[#FF198D] group-hover:text-white mb-2'>
                                january, 2022
                              </p>
                              <h2 className='text-xl font-medium leading-none text-white group-hover:text-[#FF198D] text-left'>
                                Legal Review
                              </h2>
                            </div>
                            <p className='text-xs font-light leading-normal text-white text-left'>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-start-0 col-end-2 sm:col-start-3 sm:col-end-6 sm:place-self-end'>
                  <div className='group relative flex flex-col h-[11rem] w-full max-w-[23rem] sm:max-w-[15rem] sm:w-[15rem] mx-auto'>
                    <div className='flex flex-grow justify-between items-center gap-10 group-hover:hidden'>
                      <div className='h-full flex-grow transform skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-transparent bg-transparent rounded-tl-md' />
                      <div className='h-full flex-grow transform -skew-x-1 -skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-[#FF198D] bg-[#FF198D] rounded-tr-md' />
                    </div>
                    <div className='flex flex-grow justify-between items-center gap-10 group-hover:hidden'>
                      <div className='h-full flex-grow transform -skew-x-1 -skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-[#FF198D] bg-[#FF198D] rounded-bl-md' />
                      <div className='h-full flex-grow transform skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-transparent bg-transparent rounded-br-md' />
                    </div>
                    <div className='absolute inset-[5px] scale-y-[1.09] lg:scale-y-[1.080] scale-x-[1.057] sm:scale-x-[1.060] lg:scale-x-[1.066] z-10 bg-black rounded-md'>
                      <div className='w-full h-full group-hover:bg-[#0F69E5] group-hover:scale-[1.02] group-hover:bg-opacity-20 text-white p-0 group-hover:p-4 rounded-md'>
                        <div className='grid grid-cols-3 group-hover:grid-cols-4 place-content-center group-hover:place-items-start h-full gap-5 group-hover:gap-0'>
                          <div className='col-span-1 group-hover:col-span-4 h-fit'>
                            <p className='text-6xl group-hover:text-3xl font-bold font-fill-transparent font-outline-white font-outline-1 leading-none'>
                              06
                            </p>
                          </div>
                          <div className='col-span-2 group-hover:col-start-2 group-hover:col-end-5'>
                            <div className='mb-5'>
                              <p className='w-fit rounded-md text-xs font-light px-2 py-1 leading-none bg-[#0F69E5] bg-opacity-20 group-hover:bg-transparent text-[#FF198D] group-hover:text-white mb-2'>
                                january, 2022
                              </p>
                              <h2 className='text-xl font-medium leading-none text-white group-hover:text-[#FF198D] text-left'>
                                Legal Review
                              </h2>
                            </div>
                            <p className='text-xs font-light leading-normal text-white text-left'>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-start-0 col-end-2 sm:col-start-6'>
                  <div className='grid grid-cols-2 gap-0 place-items-stretch h-full'>
                    <div className='h-full flex justify-center items-start border-r border-r-[#FF198D]'>
                      <div className='hidden sm:block border border-[#FF198D] h-fit flex-grow mt-5' />
                    </div>
                    <div className='h-full border-l border-l-[#FF198D]' />
                  </div>
                </div>
                <div className='col-start-0 col-end-2 sm:col-start-6'>
                  <div className='grid grid-cols-2 gap-0 place-items-stretch h-full'>
                    <div className='h-full border-r border-r-[#FF198D]' />
                    <div className='h-full flex justify-center items-start border-l border-l-[#FF198D]'>
                      <div className='hidden sm:block border border-[#FF198D] h-fit flex-grow mt-5' />
                    </div>
                  </div>
                </div>
                <div className='col-start-1 col-end-3 sm:col-start-7 sm:col-end-13 my-6 sm:my-0'>
                  <div className='grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-6 gap-6 xl:gap-0'>
                    <div className='col-start-1 col-end-3 sm:col-start-1 sm:col-end-4 sm:place-self-start'>
                      <div className='group relative flex flex-col h-[11rem] w-full max-w-[23rem] sm:max-w-[15rem] sm:w-[15rem] mx-auto'>
                        <div className='flex flex-grow justify-between items-center gap-10 group-hover:hidden'>
                          <div className='h-full flex-grow transform skew-x-1 skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-[#FF198D] bg-[#FF198D] rounded-tl-md' />
                          <div className='h-full flex-grow transform -skew-x-1 -skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-transparent bg-transparent' />
                        </div>
                        <div className='flex flex-grow justify-between items-center gap-10 group-hover:hidden'>
                          <div className='h-full flex-grow transform -skew-x-1 -skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-transparent bg-transparent' />
                          <div className='h-full flex-grow transform skew-x-1 skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-[#FF198D] bg-[#FF198D] rounded-br-md' />
                        </div>
                        <div className='absolute inset-[5px] scale-y-[1.09] lg:scale-y-[1.080] scale-x-[1.057] sm:scale-x-[1.060] lg:scale-x-[1.066] z-10 bg-black rounded-md'>
                          <div className='w-full h-full group-hover:bg-[#0F69E5] group-hover:scale-[1.02] group-hover:bg-opacity-20 text-white p-0 group-hover:p-4 rounded-md'>
                            <div className='grid grid-cols-3 group-hover:grid-cols-4 place-content-center group-hover:place-items-start h-full gap-5 group-hover:gap-0'>
                              <div className='col-span-1 group-hover:col-span-4 h-fit'>
                                <p className='text-6xl group-hover:text-3xl font-bold font-fill-transparent font-outline-white font-outline-1 leading-none'>
                                  07
                                </p>
                              </div>
                              <div className='col-span-2 group-hover:col-start-2 group-hover:col-end-5'>
                                <div className='mb-5'>
                                  <p className='w-fit rounded-md text-xs font-light px-2 py-1 leading-none bg-[#0F69E5] bg-opacity-20 group-hover:bg-transparent text-[#FF198D] group-hover:text-white mb-2'>
                                    january, 2022
                                  </p>
                                  <h2 className='text-xl font-medium leading-none text-white group-hover:text-[#FF198D] text-left'>
                                    Legal Review
                                  </h2>
                                </div>
                                <p className='text-xs font-light leading-normal text-white text-left'>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-start-1 xl:col-start-4 col-end-3 sm:col-end-4 xl:col-end-7 sm:place-self-start'>
                      <div className='group relative flex flex-col h-[11rem] w-full max-w-[23rem] sm:max-w-[15rem] sm:w-[15rem] mx-auto'>
                        <div className='flex flex-grow justify-between items-center gap-10 group-hover:hidden'>
                          <div className='h-full flex-grow transform skew-x-1 skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-[#FF198D] bg-[#FF198D] rounded-tl-md' />
                          <div className='h-full flex-grow transform -skew-x-1 -skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-transparent bg-transparent' />
                        </div>
                        <div className='flex flex-grow justify-between items-center gap-10 group-hover:hidden'>
                          <div className='h-full flex-grow transform -skew-x-1 -skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-transparent bg-transparent' />
                          <div className='h-full flex-grow transform skew-x-1 skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-[#FF198D] bg-[#FF198D] rounded-br-md' />
                        </div>
                        <div className='absolute inset-[5px] scale-y-[1.09] lg:scale-y-[1.080] scale-x-[1.057] sm:scale-x-[1.060] lg:scale-x-[1.066] z-10 bg-black rounded-md'>
                          <div className='w-full h-full group-hover:bg-[#0F69E5] group-hover:scale-[1.02] group-hover:bg-opacity-20 text-white p-0 group-hover:p-4 rounded-md'>
                            <div className='grid grid-cols-3 group-hover:grid-cols-4 place-content-center group-hover:place-items-start h-full gap-5 group-hover:gap-0'>
                              <div className='col-span-1 group-hover:col-span-4 h-fit'>
                                <p className='text-6xl group-hover:text-3xl font-bold font-fill-transparent font-outline-white font-outline-1 leading-none'>
                                  08
                                </p>
                              </div>
                              <div className='col-span-2 group-hover:col-start-2 group-hover:col-end-5'>
                                <div className='mb-5'>
                                  <p className='w-fit rounded-md text-xs font-light px-2 py-1 leading-none bg-[#0F69E5] bg-opacity-20 group-hover:bg-transparent text-[#FF198D] group-hover:text-white mb-2'>
                                    january, 2022
                                  </p>
                                  <h2 className='text-xl font-medium leading-none text-white group-hover:text-[#FF198D] text-left'>
                                    Legal Review
                                  </h2>
                                </div>
                                <p className='text-xs font-light leading-normal text-white text-left'>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit.
                                </p>
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
          </div>
          <div className='py-24 bg-black'>
            <div className='w-[90%] xl:w-[80%] mx-auto text-center'>
              <div className='w-fit mx-auto'>
                <h4 className='text-white text-2xl md:text-lg font-light leading-normal'>
                  BLOG
                </h4>
                <div className='flex gap-0 items-center justify-start'>
                  <div className='border w-[10px] md:w-[8px] h-[10px] md:h-[8px] rounded-full border-white' />
                  <div className='border-t border-t-white w-12 md:w-8 flex-grow' />
                  <div className='border w-[10px] md:w-[8px] h-[10px] md:h-[8px] rounded-full border-white' />
                  <div className='border-t border-t-white w-12 md:w-8 flex-grow' />
                  <div className='border w-[10px] md:w-[8px] h-[10px] md:h-[8px] rounded-full border-white' />
                </div>
              </div>
              <div className='mt-4 mb-7'>
                <h2 className='text-5xl lg:text-4xl font-semibold text-[#0F69E5] leading-tight'>
                  Our blog & News
                </h2>
              </div>
              <p className='text-xl lg:text-base font-normal leading-tight text-white w-full lg:w-[50%] mx-auto mb-16'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                tempus dui nec euismod congue.
              </p>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-stretch'>
                <div className='flex flex-col group bg-[#0F69E5] bg-opacity-40 rounded-md h-fit sm:h-[22rem]'>
                  <div className='relative'>
                    <div className='absolute group-hover:static bottom-0 group-hover:top-0 flex justify-center items-center group-hover:items-end gap-6 w-full px-5 group-hover:py-5 group-hover:border-b  border-b-black'>
                      <p className='w-fit rounded-md text-base sm:text-xs font-normal px-2 py-1 leading-none bg-[#0F69E5] text-white'>
                        january, 2022
                      </p>
                      <p className='w-fit rounded-md text-base sm:text-xs font-normal px-2 py-1 leading-none bg-[#0F69E5] text-white'>
                        by admin
                      </p>
                    </div>
                    <div className='hidden group-hover:block px-5 py-5 group-hover:border-b  border-b-black'>
                      <p className='text-lg sm:text-sm font-normal text-white text-center leading-normal'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus tempus dui nec euismod congue. Nulla id libero
                        dignissim, convallis odio id, scelerisque nisl.
                        Curabitur augue quam, fringilla quis dictum sed
                      </p>
                    </div>
                    <Image
                      src='/imgs/crypto-invest/chart.jpg'
                      width={1000}
                      height={1000}
                      alt='investment chart'
                      className='rounded-md group-hover:hidden'
                    />
                  </div>
                  <div className='flex-grow flex flex-col justify-center items-center gap-5 group-hover:gap-8 px-5 py-5 sm:py-0 h-full'>
                    <h2 className='text-white group-hover:text-[#FF198D] text-2xl sm:text-lg font-medium'>
                      BCB Bots & Rebuild Implicit
                    </h2>
                    <div className='flex justify-center items-center mx-auto w-10 h-10 rounded-full border border-[#FF198D] bg-transparent group-hover:bg-[#FF198D]'>
                      <HiArrowNarrowRight className='text-2xl text-[#FF198D] group-hover:text-white' />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col group bg-[#0F69E5] bg-opacity-40 rounded-md h-fit sm:h-[22rem]'>
                  <div className='relative'>
                    <div className='absolute group-hover:static bottom-0 group-hover:top-0 flex justify-center items-center group-hover:items-end gap-6 w-full px-5 group-hover:py-5 group-hover:border-b  border-b-black'>
                      <p className='w-fit rounded-md text-base sm:text-xs font-normal px-2 py-1 leading-none bg-[#0F69E5] text-white'>
                        january, 2022
                      </p>
                      <p className='w-fit rounded-md text-base sm:text-xs font-normal px-2 py-1 leading-none bg-[#0F69E5] text-white'>
                        by admin
                      </p>
                    </div>
                    <div className='hidden group-hover:block px-5 py-5 group-hover:border-b  border-b-black'>
                      <p className='text-lg sm:text-sm font-normal text-white text-center leading-normal'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus tempus dui nec euismod congue. Nulla id libero
                        dignissim, convallis odio id, scelerisque nisl.
                        Curabitur augue quam, fringilla quis dictum sed
                      </p>
                    </div>
                    <Image
                      src='/imgs/crypto-invest/mac-screen.jpg'
                      width={1000}
                      height={1000}
                      alt='mac screen'
                      className='rounded-md group-hover:hidden'
                    />
                  </div>
                  <div className='flex-grow flex flex-col justify-center items-center gap-5 group-hover:gap-8 px-5 py-5 sm:py-0 h-full'>
                    <h2 className='text-white group-hover:text-[#FF198D] text-2xl sm:text-lg font-medium'>
                      Launch Your Own Cryptocurrency
                    </h2>
                    <div className='flex justify-center items-center mx-auto w-10 h-10 rounded-full border border-[#FF198D] bg-transparent group-hover:bg-[#FF198D]'>
                      <HiArrowNarrowRight className='text-2xl text-[#FF198D] group-hover:text-white' />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col group bg-[#0F69E5] bg-opacity-40 rounded-md h-fit sm:h-[22rem]'>
                  <div className='relative'>
                    <div className='absolute group-hover:static bottom-0 group-hover:top-0 flex justify-center items-center group-hover:items-end gap-6 w-full px-5 group-hover:py-5 group-hover:border-b  border-b-black'>
                      <p className='w-fit rounded-md text-base sm:text-xs font-normal px-2 py-1 leading-none bg-[#0F69E5] text-white'>
                        january, 2022
                      </p>
                      <p className='w-fit rounded-md text-base sm:text-xs font-normal px-2 py-1 leading-none bg-[#0F69E5] text-white'>
                        by admin
                      </p>
                    </div>
                    <div className='hidden group-hover:block px-5 py-5 group-hover:border-b  border-b-black'>
                      <p className='text-lg sm:text-sm font-normal text-white text-center leading-normal'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus tempus dui nec euismod congue. Nulla id libero
                        dignissim, convallis odio id, scelerisque nisl.
                        Curabitur augue quam, fringilla quis dictum sed
                      </p>
                    </div>
                    <Image
                      src='/imgs/crypto-invest/bitcoin.jpg'
                      width={1000}
                      height={1000}
                      alt='bitcoin'
                      className='rounded-md group-hover:hidden'
                    />
                  </div>
                  <div className='flex-grow flex flex-col justify-center items-center gap-5 group-hover:gap-8 px-5 py-5 sm:py-0 h-full'>
                    <h2 className='text-white group-hover:text-[#FF198D] text-2xl sm:text-lg font-medium'>
                      International Reporting of Crypto
                    </h2>
                    <div className='flex justify-center items-center mx-auto w-10 h-10 rounded-full border border-[#FF198D] bg-transparent group-hover:bg-[#FF198D]'>
                      <HiArrowNarrowRight className='text-2xl text-[#FF198D] group-hover:text-white' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-black'>
            <div className='relative top-[8rem] max-w-[90rem] w-[90%] xl:w-[80%] mx-auto'>
              <div className="h-fit w-full bg-[url('/imgs/crypto-invest/bitty.jpg')] bg-no-repeat bg-cover bg-left rounded-md shadow-2xl">
                <div className='sm:pt-12 sm:pl-12 sm:pb-4 p-7'>
                  <div className='w-full sm:w-[40%] p-4'>
                    <h2 className='text-4xl font-medium text-[#FF198D] leading-none mb-5'>
                      Sign Up To Learn More
                    </h2>
                    <p className='font-normal text-sm leading-normal text-white mb-9'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus tempus
                    </p>
                    <div className=''>
                      <button className='p-2 text-white text-sm font-normal bg-[#0F69E5] flex justify-start items-center gap-2 rounded-md'>
                        <span>Request a demo</span>
                        <MdOutlineArrowForwardIos />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='max-w-[90rem] mx-auto'>
            <div className="h-fit lg:h-[37rem] w-full bg-[url('/imgs/crypto-invest/footcase.jpg')] bg-no-repeat bg-cover bg-center">
              <div className='bg-gradient-to-b from-[rgba(0,0,0,0.79)] to-[rgba(0,0,0,0.25)] w-full h-full'>
                <div className='pt-[15rem] w-[90%] xl:w-[80%] mx-auto h-full'>
                  <div className='mb-20'>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-stretch gap-10'>
                      <div className='col-span-2 lg:col-span-1 flex flex-col items-start gap-5'>
                        <div>
                          <Image
                            src='/imgs/crypto-invest/logo.png'
                            width={170}
                            height={50}
                            alt='logo'
                          />
                        </div>
                        <p className='font-normal text-xl md:text-sm leading-normal text-white'>
                          dolor sit amet, consectetur adipiscing elit. Vivamus
                          tempus
                        </p>
                        <div className='flex jusitfy-start items-center gap-3'>
                          <div className='w-8 h-8 rounded-sm flex justify-center items-center bg-white group hover:bg-[#FF198D]'>
                            <FaFacebookF className='text-xl lg:text-base text-[#FF198D] group-hover:text-white' />
                          </div>
                          <div className='w-8 h-8 rounded-sm flex justify-center items-center bg-white group hover:bg-[#FF198D]'>
                            <BsTwitter className='text-xl lg:text-base text-[#FF198D] group-hover:text-white' />
                          </div>
                          <div className='w-8 h-8 rounded-sm flex justify-center items-center bg-white group hover:bg-[#FF198D]'>
                            <BsInstagram className='text-xl lg:text-base text-[#FF198D] group-hover:text-white' />
                          </div>
                          <div className='w-8 h-8 rounded-sm flex justify-center items-center bg-white group hover:bg-[#FF198D]'>
                            <FaPinterestP className='text-xl lg:text-base text-[#FF198D] group-hover:text-white' />
                          </div>
                        </div>
                      </div>
                      <div className='col-span-2'>
                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 place-items-stretch'>
                          <div className=''>
                            <h2 className='text-2xl md:text-lg font-medium text-white leading-none mb-5'>
                              Quick Links
                            </h2>
                            <div className='flex flex-col gap-3 text-white font-normal text-lg md:text-xs'>
                              <span>blog</span>
                              <span>about us</span>
                              <span>blog</span>
                              <span>team</span>
                              <span>page</span>
                              <span>single</span>
                            </div>
                          </div>
                          <div className=''>
                            <h2 className='text-2xl md:text-lg font-medium text-white leading-none mb-5'>
                              Quick Links
                            </h2>
                            <div className='flex flex-col gap-3 text-white font-normal text-lg md:text-xs'>
                              <span>home</span>
                              <span>pricing</span>
                              <span>token</span>
                              <span>sale</span>
                              <span>test</span>
                              <span>FAQ</span>
                            </div>
                          </div>
                          <div className=''>
                            <h2 className='text-2xl md:text-lg font-medium text-white leading-none mb-5'>
                              Categories
                            </h2>
                            <div className='flex flex-col gap-3 text-white font-normal text-lg md:text-xs'>
                              <span>github.io</span>
                              <span>redeem code</span>
                              <span>launch time</span>
                              <span>product catalog</span>
                              <span>design</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-span-2 lg:col-span-1'>
                        <h2 className='text-2xl md:text-lg font-medium text-white leading-none mb-5'>
                          Subscribe To Our Newsletter
                        </h2>
                        <div className='flex flex-col sm:flex-row gap-3 sm:gap-0 justify-start items-start sm:items-stretch'>
                          <input
                            type='email'
                            placeholder='Enter your email'
                            className='w-full sm:w-fit flex-grow p-5 pr-0 rounded-r-lg sm:rounded-r-none rounded-l-lg bg-[#0F69E5] bg-opacity-20 text-lg md:text-xs'
                          />
                          <button className='flex justify-start items-center gap-2 p-2 bg-[#FF198D] rounded-l-lg sm:rounded-l-none rounded-r-lg'>
                            <span className='text-lg md:text-xs font-normal text-white'>
                              Send
                            </span>
                            <TbBrandTelegram className='text-white text-lg md:text-xs' />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col md:flex-row md:justify-between items-center gap-5 pb-8 lg:pb-0 text-center md:text-left'>
                    <span className='text-lg md:text-sm font-normal text-white order-last md:order-none'>
                      &copy; 2023, Crypto Invest Inc{' '}
                      <span className='mx-3'>&middot;</span> All Rights Reserved
                    </span>
                    <span className='text-lg md:text-sm font-normal text-white'>
                      Designed by mmesoma saint{' '}
                      <span className='mx-3'>&middot;</span> Terms & Services
                    </span>
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
