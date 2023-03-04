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
  const handleOpen = useCallback(() => setIsOpen((open) => !open), [])

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
                <span className='text-xl lg:text-base font-medium leading-none text-white hover:scale-110'>
                  <Link href='/templates/crypto-invest/roadmap'>Road Map</Link>
                </span>
                <span className='text-xl lg:text-base font-medium leading-none text-white hover:scale-110'>
                  <Link href='/templates/crypto-invest/pages'>Pages</Link>
                </span>
                <span className='text-xl lg:text-base font-medium leading-none text-[#FF198D] scale-110'>
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
          <div className="h-fit md:h-[20rem] w-full bg-[url('/imgs/crypto-invest/contact.jpg')] bg-no-repeat bg-cover bg-center">
            <div className='flex justify-center items-center bg-[rgba(0,0,0,0.35)] h-full'>
              <div className='w-full h-fit text-center py-16 md:py-0'>
                <h1 className='block w-[90%] xl:w-[80%] mx-auto text-6xl font-bold leading-tight text-white mb-4'>
                  Contact Us
                </h1>
                <p className='block w-[90%] xl:w-[80%] mx-auto text-xl lg:text-base font-normal leading-tight text-white mb-8'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus tempus dui nec euismod congue. Nulla id libero
                  dignissim, convallis odio
                </p>
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
