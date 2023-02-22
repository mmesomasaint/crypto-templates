import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { BsStar, BsPatchCheckFill, BsCurrencyExchange } from 'react-icons/bs'
import { DiGoogleCloudPlatform } from 'react-icons/di'
import { FaBtc, FaEthereum, FaBitcoin } from 'react-icons/fa'
import { FiTrendingUp } from 'react-icons/fi'
import { MdSecurity } from 'react-icons/md'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { CgPerformance } from 'react-icons/cg'
import { RiCustomerService2Fill } from 'react-icons/ri'
import Styles from '../../../styles/cryto-invest.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Crypto Invest</title>
        <meta
          name='description'
          content='Investment in crypto has never been easier'
        />
        <link rel='icon' href='/imgs/crypto-invest/favicon.ico' />
      </Head>
      <header className='bg-[#0F69E5]'>
        <div className='max-w-[90rem] w-[80%] mx-auto'>
          <div className='flex justify-between gap-10 items-center w-full'>
            <div>
              <Image
                src='/imgs/crypto-invest/logo.png'
                width={160}
                height={60}
                alt='company logo'
              />
            </div>
            <div className='flex justify-between gap-12 items-center'>
              <div className='flex justify-evenly gap-8 items-center'>
                <span className='text-base font-medium leading-none text-[#FF198D] scale-110'>
                  <Link href='/'>Home</Link>
                </span>
                <span className='text-base font-medium leading-none text-white hover:scale-110'>
                  <Link href='/templates/crypto-invest/about'>About</Link>
                </span>
                <span className='text-base font-medium leading-none text-white hover:scale-110'>
                  <Link href='/templates/crypto-invest/service'>Service</Link>
                </span>
                <span className='text-base font-medium leading-none text-white hover:scale-110'>
                  <Link href='/templates/crypto-invest/project-plan'>
                    Project Plan
                  </Link>
                </span>
                <span className='text-base font-medium leading-none text-white hover:scale-110'>
                  <Link href='/templates/crypto-invest/contact'>Contact</Link>
                </span>
                <span className='text-base font-medium leading-none text-white hover:scale-110'>
                  <Link href='/templates/crypto-invest/career'>Career</Link>
                </span>
                <span className='text-base font-medium leading-none text-white hover:scale-110'>
                  <Link href='/templates/crypto-invest/blog'>Blog</Link>
                </span>
              </div>
              <div>
                <button className='text-base font-medium leading-none px-4 py-2 bg-[#FF198D] text-white rounded-sm shadow-sm'>
                  Try Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className='max-w-[90rem] mx-auto'>
          <div className="h-fit md:h-[37rem] w-full bg-[url('/imgs/crypto-invest/showcase.jpg')] bg-no-repeat bg-cover bg-center">
            <div className='flex justify-center items-center h-full'>
              <div className='w-full h-fit text-center'>
                <h1 className='block w-[30%] mx-auto text-6xl font-bold leading-tight text-white mb-4'>
                  World Number One ICO Platform
                </h1>
                <p className='block w-[40%] mx-auto text-base font-normal leading-tight text-white mb-8'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus tempus dui nec euismod congue. Nulla id libero
                  dignissim, convallis odio
                </p>
                <div className='flex justify-center gap-8 items-center'>
                  <button className='flex justify-start items-center gap-3 px-6 py-3 border border-[#FF198D] bg-[#FF198D] rounded-sm shadow-sm'>
                    <span className='text-base font-medium leading-none text-white'>
                      Explore More
                    </span>
                    <span className='w-fit mx-auto'>
                      <HiArrowNarrowRight className='text-xl text-white z-20' />
                    </span>
                  </button>
                  <button className='text-base font-medium leading-none px-6 py-3 border border-[#FF198D] text-white rounded-sm shadow-sm'>
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='py-24 bg-black'>
            <div className=' w-[80%] mx-auto grid grid-cols-5 place-items-stretch gap-10'>
              <div className='col-span-3'></div>
              <div className='col-span-2'>
                <div className='w-fit'>
                  <h4 className='text-white text-lg font-light leading-normal'>
                    ABOUT US
                  </h4>
                  <div className='flex gap-0 items-center justify-start'>
                    <div className='border w-[8px] h-[8px] rounded-full border-white' />
                    <div className='border-t border-t-white w-8 flex-grow' />
                    <div className='border w-[8px] h-[8px] rounded-full border-white' />
                    <div className='border-t border-t-white w-8 flex-grow' />
                    <div className='border w-[8px] h-[8px] rounded-full border-white' />
                  </div>
                </div>
                <div className='mt-4 mb-7'>
                  <h2 className='text-4xl font-semibold text-[#0F69E5] leading-tight'>
                    We Have a World-Class Team Of Expert
                  </h2>
                </div>
                <p className='text-sm font-light leading-tight text-white'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus tempus dui nec euismod congue. Nulla id libero
                  dignissim, convallis odio id, scelerisque nisl
                </p>
                <div className='my-8'>
                  <div className='p-2 flex justify-start gap-2 items-center w-fit bg-[#FF198D] bg-opacity-20 mb-3'>
                    <div className='w-4 h-4 bg-[#0F69E5] flex justify-center items-center'>
                      <BsStar className='text-xs text-white' />
                    </div>
                    <p className='text-sm text-white leading-none '>
                      Rewards mechanism
                    </p>
                  </div>
                  <div className='p-2 flex justify-start gap-2 items-center w-fit bg-[#FF198D] bg-opacity-20'>
                    <div className='w-4 h-4 bg-[#0F69E5] flex justify-center items-center'>
                      <DiGoogleCloudPlatform className='text-xs text-white' />
                    </div>
                    <p className='text-sm text-white leading-none '>
                      Decentralized platform
                    </p>
                  </div>
                </div>
                <p className='text-base text-[#FF198D] leading-tight font-medium'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus tempus dui nec euismod congue
                </p>
                <div className='my-8 flex justify-start items-center gap-8'>
                  <div className='py-3 px-2 bg-[#FF198D] bg-opacity-20 w-fit rounded-md'>
                    <div className='flex justify-start items-start gap-3'>
                      <div className='flex justify-center items-center w-8 h-8 rounded-full bg-yellow-500'>
                        <FaBtc className='text-white text-base' />
                      </div>
                      <div className='flex-grow grid grid-cols-2 place-items-stretch gap-x-5 gap-y-2'>
                        <p className='text-2xl font-semibold text-white leading-none col-span-2'>
                          BTC
                        </p>
                        <p className='text-xs font-light text-white leading-none'>
                          Bitcoin
                        </p>
                        <div className='flex gap-2 items-center justify-start'>
                          <span className='text-[#FF198D] text-xs font-light leading-tight'>
                            &uarr;
                          </span>
                          <span className='text-[#FF198D] text-xs font-light leading-tight'>
                            2.65%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='py-3 px-2 bg-[#FF198D] bg-opacity-20 w-fit rounded-md'>
                    <div className='flex justify-start items-start gap-3'>
                      <div className='flex justify-center items-center w-8 h-8 rounded-full border border-[#0F69E5] bg-white'>
                        <FaEthereum className='text-[#0F69E5] text-base' />
                      </div>
                      <div className='flex-grow grid grid-cols-2 place-items-stretch gap-x-5 gap-y-2'>
                        <p className='text-2xl font-semibold text-white leading-none col-span-2'>
                          ETH
                        </p>
                        <p className='text-xs font-light text-white leading-none'>
                          Ethereum
                        </p>
                        <div className='flex gap-2 items-center justify-start'>
                          <span className='text-[#FF198D] text-xs font-light leading-tight'>
                            &uarr;
                          </span>
                          <span className='text-[#FF198D] text-xs font-light leading-tight'>
                            1.50%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-10'>
                  <button className='py-3 px-6 text-base font-normal text-white bg-[#FF198D] rounded-md shadow-sm'>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='py-24 bg-black'>
            <div className='w-[80%] mx-auto text-center'>
              <div className='w-fit mx-auto'>
                <h4 className='text-white text-lg font-light leading-normal'>
                  SERVICE
                </h4>
                <div className='flex gap-0 items-center justify-start'>
                  <div className='border w-[8px] h-[8px] rounded-full border-white' />
                  <div className='border-t border-t-white w-8 flex-grow' />
                  <div className='border w-[8px] h-[8px] rounded-full border-white' />
                  <div className='border-t border-t-white w-8 flex-grow' />
                  <div className='border w-[8px] h-[8px] rounded-full border-white' />
                </div>
              </div>
              <div className='mt-4 mb-7'>
                <h2 className='text-4xl font-semibold text-[#0F69E5] leading-tight'>
                  Our Service to Provide You
                </h2>
              </div>
              <p className='text-base font-normal leading-tight text-white w-[50%] mx-auto mb-14'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                tempus dui nec euismod congue. Nulla id libero dignissim,
                convallis odio id, scelerisque nisl
              </p>
              <div className='grid grid-cols-3 gap-10 place-items-stretch'>
                <div className='relative flex flex-col h-[11rem]'>
                  <div className='flex flex-grow justify-between items-center gap-16'>
                    <div className='h-full flex-grow transform skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-[#0F69E5] bg-[#0F69E5] rounded-tl-md' />
                    <div className='h-full flex-grow transform -skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-[#0F69E5] bg-[#0F69E5] rounded-tr-md' />
                  </div>
                  <div className='flex flex-grow justify-between items-center gap-16'>
                    <div className='h-full flex-grow transform -skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-[#0F69E5] bg-[#0F69E5] rounded-bl-md' />
                    <div className='h-full flex-grow transform skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-[#0F69E5] bg-[#0F69E5] rounded-br-md' />
                  </div>
                  <div className='group absolute inset-[5px] scale-y-[1.08] scale-x-[1.045] z-10 bg-black rounded-md'>
                    <div className='w-full h-full group-hover:bg-[#0F69E5] group-hover:bg-opacity-20 text-white p-6'>
                      <div className='flex flex-col group-hover:flex-row justify-center group-hover:justify-start items-start group-hover:items-center gap-7'>
                        <div className='w-fit h-fit rounded-full border border-opacity-40 p-1 border-[#FF198D] scale-105 group-hover:scale-100'>
                          <div className='flex justify-center items-center group-hover:w-8 w-12 group-hover:h-8 h-12 border border-[#FF198D] group-hover:bg-[#FF198D] rounded-full'>
                            <MdSecurity className='text-2xl text-white' />
                          </div>
                        </div>
                        <h1 className='group-hover:text-xl text-2xl font-medium leading-tight text-[#0F69E5] group-hover:text-[#FF198D]'>
                          Secure Currency
                        </h1>
                      </div>
                      <div className='hidden group-hover:block mt-1 mb-3'>
                        <p className='text-xs font-light leading-normal text-white text-left'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vivamus tempus dui nec euismod congue. Nulla id
                          libero.
                        </p>
                      </div>
                      <div className='absolute top-10 right-10 transform -rotate-45 group-hover:static group-hover:rotate-0'>
                        <HiArrowNarrowRight className='text-xl text-[#FF198D] z-20' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='relative flex flex-col h-[11rem]'>
                  <div className='flex flex-grow justify-between items-center gap-16'>
                    <div className='h-full flex-grow transform skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-[#0F69E5] bg-[#0F69E5] rounded-tl-md' />
                    <div className='h-full flex-grow transform -skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-[#0F69E5] bg-[#0F69E5] rounded-tr-md' />
                  </div>
                  <div className='flex flex-grow justify-between items-center gap-16'>
                    <div className='h-full flex-grow transform -skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-[#0F69E5] bg-[#0F69E5] rounded-bl-md' />
                    <div className='h-full flex-grow transform skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-[#0F69E5] bg-[#0F69E5] rounded-br-md' />
                  </div>
                  <div className='group absolute inset-[5px] scale-y-[1.08] scale-x-[1.045] z-10 bg-black rounded-md'>
                    <div className='w-full h-full group-hover:bg-[#0F69E5] group-hover:bg-opacity-20 text-white p-6'>
                      <div className='flex flex-col group-hover:flex-row justify-center group-hover:justify-start items-start group-hover:items-center gap-7'>
                        <div className='w-fit h-fit rounded-full border border-opacity-40 p-1 border-[#FF198D] scale-105 group-hover:scale-100'>
                          <div className='flex justify-center items-center group-hover:w-8 w-12 group-hover:h-8 h-12 border border-[#FF198D] group-hover:bg-[#FF198D] rounded-full'>
                            <CgPerformance className='text-2xl text-white' />
                          </div>
                        </div>
                        <h1 className='group-hover:text-xl text-2xl font-medium leading-tight text-[#0F69E5] group-hover:text-[#FF198D]'>
                          Value Performance
                        </h1>
                      </div>
                      <div className='hidden group-hover:block mt-1 mb-3'>
                        <p className='text-xs font-light leading-normal text-white text-left'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vivamus tempus dui nec euismod congue. Nulla id
                          libero.
                        </p>
                      </div>
                      <div className='absolute top-10 right-10 transform -rotate-45 group-hover:static group-hover:rotate-0'>
                        <HiArrowNarrowRight className='text-xl text-[#FF198D] z-20' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='relative flex flex-col h-[11rem]'>
                  <div className='flex flex-grow justify-between items-center gap-16'>
                    <div className='h-full flex-grow transform skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-[#0F69E5] bg-[#0F69E5] rounded-tl-md' />
                    <div className='h-full flex-grow transform -skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-[#0F69E5] bg-[#0F69E5] rounded-tr-md' />
                  </div>
                  <div className='flex flex-grow justify-between items-center gap-16'>
                    <div className='h-full flex-grow transform -skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-[#0F69E5] bg-[#0F69E5] rounded-bl-md' />
                    <div className='h-full flex-grow transform skew-y-1 scale-x-[1.06] scale-y-[1.05] border border-[#0F69E5] bg-[#0F69E5] rounded-br-md' />
                  </div>
                  <div className='group absolute inset-[5px] scale-y-[1.08] scale-x-[1.045] z-10 bg-black rounded-md'>
                    <div className='w-full h-full group-hover:bg-[#0F69E5] group-hover:bg-opacity-20 text-white p-6'>
                      <div className='flex flex-col group-hover:flex-row justify-center group-hover:justify-start items-start group-hover:items-center gap-7'>
                        <div className='w-fit h-fit rounded-full border border-opacity-40 p-1 border-[#FF198D] scale-105 group-hover:scale-100'>
                          <div className='flex justify-center items-center group-hover:w-8 w-12 group-hover:h-8 h-12 border border-[#FF198D] group-hover:bg-[#FF198D] rounded-full'>
                            <FaBitcoin className='text-2xl text-white' />
                          </div>
                        </div>
                        <h1 className='group-hover:text-xl text-2xl font-medium leading-tight text-[#0F69E5] group-hover:text-[#FF198D]'>
                          Bitcoin Escrow Service
                        </h1>
                      </div>
                      <div className='hidden group-hover:block mt-1 mb-3'>
                        <p className='text-xs font-light leading-normal text-white text-left'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vivamus tempus dui nec euismod congue. Nulla id
                          libero.
                        </p>
                      </div>
                      <div className='absolute top-10 right-10 transform -rotate-45 group-hover:static group-hover:rotate-0'>
                        <HiArrowNarrowRight className='text-xl text-[#FF198D] z-20' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='py-24 bg-black'>
            <div className='w-[80%] mx-auto text-center'>
              <div className='w-fit mx-auto'>
                <h4 className='text-white text-lg font-light leading-normal'>
                  TOKEN
                </h4>
                <div className='flex gap-0 items-center justify-start'>
                  <div className='border w-[8px] h-[8px] rounded-full border-white' />
                  <div className='border-t border-t-white w-8 flex-grow' />
                  <div className='border w-[8px] h-[8px] rounded-full border-white' />
                  <div className='border-t border-t-white w-8 flex-grow' />
                  <div className='border w-[8px] h-[8px] rounded-full border-white' />
                </div>
              </div>
              <div className='mt-4 mb-7'>
                <h2 className='text-4xl font-semibold text-[#0F69E5] leading-tight'>
                  Benefits of ICO Token Holder
                </h2>
              </div>
              <p className='text-base font-normal leading-tight text-white w-[50%] mx-auto mb-14'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                tempus dui nec euismod congue.
              </p>
              <div className='grid grid-cols-2 gap-24 place-items-stretch'>
                <div className='grid grid-cols-2 gap-5 place-items-stretch'>
                  <div className='group relative flex flex-col h-[12rem]'>
                    <div className='flex flex-grow justify-between items-center gap-5'>
                      <div className='h-full flex-grow transform skew-y-1 scale-x-[1.06] scale-y-[1.02] border border-[#0F69E5] bg-[#0F69E5] bg-opacity-70 border-opacity-70 rounded-tl-full' />
                      <div className='h-full flex-grow transform -skew-y-1 scale-x-[1.06] scale-y-[1.02] border border-[#0F69E5] bg-[#0F69E5] bg-opacity-70 border-opacity-70 rounded-tr-full' />
                    </div>
                    <div className='flex flex-grow justify-between items-center gap-16'>
                      <div className='h-full flex-grow transform -skew-y-1 scale-x-[1.06] scale-y-[1.02] border border-[#0F69E5] bg-[#0F69E5] bg-opacity-70 border-opacity-70 rounded-bl-full' />
                      <div className='h-full flex-grow transform skew-y-1 scale-x-[1.06] scale-y-[1.02] border border-[#0F69E5] bg-[#0F69E5] bg-opacity-70 border-opacity-70 group-hover:rounded-br-full rounded-br-md' />
                    </div>
                    <div className='absolute inset-[5px] scale-y-[1.08] scale-x-[1.045] group-hover:scale-[1.12] z-10 bg-black rounded-full'>
                      <div className='flex flex-col gap-5 justify-center items-center w-full h-full group-hover:bg-[#0F69E5] group-hover:bg-opacity-20 text-white p-6'>
                        <div className='flex flex-col justify-center items-center gap-4'>
                          <div className='group-hover:border border-[#0F69E5]'>
                            <div className='group-hover:backdrop-blur'>
                              <BsPatchCheckFill className='text-4xl group-hover:text-2xl text-white' />
                            </div>
                          </div>
                          <h1 className='text-lg font-medium leading-tight text-[#0F69E5] group-hover:text-[#FF198D]'>
                            Confirmation
                          </h1>
                        </div>
                        <div className='hidden group-hover:block w-full'>
                          <p className='text-xs font-light leading-normal text-white text-left text-center'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                          </p>
                        </div>
                        <div className='w-fit mx-auto'>
                          <HiArrowNarrowRight className='text-3xl group-hover:text-xl text-[#FF198D] z-20' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='group relative flex flex-col h-[12rem]'>
                    <div className='flex flex-grow justify-between items-center gap-5'>
                      <div className='h-full flex-grow transform skew-y-1 scale-x-[1.06] scale-y-[1.02] border border-[#0F69E5] bg-[#0F69E5] bg-opacity-70 border-opacity-70 rounded-tl-full' />
                      <div className='h-full flex-grow transform -skew-y-1 scale-x-[1.06] scale-y-[1.02] border border-[#0F69E5] bg-[#0F69E5] bg-opacity-70 border-opacity-70 rounded-tr-full' />
                    </div>
                    <div className='flex flex-grow justify-between items-center gap-16'>
                      <div className='h-full flex-grow transform -skew-y-1 scale-x-[1.06] scale-y-[1.02] border border-[#0F69E5] bg-[#0F69E5] bg-opacity-70 border-opacity-70 group-hover:rounded-bl-full rounded-bl-md' />
                      <div className='h-full flex-grow transform skew-y-1 scale-x-[1.06] scale-y-[1.02] border border-[#0F69E5] bg-[#0F69E5] bg-opacity-70 border-opacity-70 rounded-br-full' />
                    </div>
                    <div className='absolute inset-[5px] scale-y-[1.08] scale-x-[1.045] group-hover:scale-[1.12] z-10 bg-black rounded-full'>
                      <div className='flex flex-col gap-5 justify-center items-center w-full h-full group-hover:bg-[#0F69E5] group-hover:bg-opacity-20 text-white p-6'>
                        <div className='flex flex-col justify-center items-center gap-4'>
                          <div className='group-hover:border border-[#0F69E5]'>
                            <div className='group-hover:backdrop-blur'>
                              <BsCurrencyExchange className='text-4xl group-hover:text-2xl text-white' />
                            </div>
                          </div>
                          <h1 className='text-lg font-medium leading-tight text-[#0F69E5] group-hover:text-[#FF198D]'>
                            General Ecosystem
                          </h1>
                        </div>
                        <div className='hidden group-hover:block w-full'>
                          <p className='text-xs font-light leading-normal text-white text-left text-center'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                          </p>
                        </div>
                        <div className='w-fit mx-auto'>
                          <HiArrowNarrowRight className='text-3xl group-hover:text-xl text-[#FF198D] z-20' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='group relative flex flex-col h-[12rem]'>
                    <div className='flex flex-grow justify-between items-center gap-5'>
                      <div className='h-full flex-grow transform skew-y-1 scale-x-[1.06] scale-y-[1.02] border border-[#0F69E5] bg-[#0F69E5] bg-opacity-70 border-opacity-70 rounded-tl-full' />
                      <div className='h-full flex-grow transform -skew-y-1 scale-x-[1.06] scale-y-[1.02] border border-[#0F69E5] bg-[#0F69E5] bg-opacity-70 border-opacity-70 group-hover:rounded-tr-full rounded-tr-md' />
                    </div>
                    <div className='flex flex-grow justify-between items-center gap-16'>
                      <div className='h-full flex-grow transform -skew-y-1 scale-x-[1.06] scale-y-[1.02] border border-[#0F69E5] bg-[#0F69E5] bg-opacity-70 border-opacity-70 rounded-bl-full' />
                      <div className='h-full flex-grow transform skew-y-1 scale-x-[1.06] scale-y-[1.02] border border-[#0F69E5] bg-[#0F69E5] bg-opacity-70 border-opacity-70 rounded-br-full' />
                    </div>
                    <div className='absolute inset-[5px] scale-y-[1.08] scale-x-[1.045] group-hover:scale-[1.12] z-10 bg-black rounded-full'>
                      <div className='flex flex-col gap-5 justify-center items-center w-full h-full group-hover:bg-[#0F69E5] group-hover:bg-opacity-20 text-white p-6'>
                        <div className='flex flex-col justify-center items-center gap-4'>
                          <div className='group-hover:border border-[#0F69E5]'>
                            <div className='group-hover:backdrop-blur'>
                              <FiTrendingUp className='text-4xl group-hover:text-2xl text-white' />
                            </div>
                          </div>
                          <h1 className='text-lg font-medium leading-tight text-[#0F69E5] group-hover:text-[#FF198D]'>
                            Enjoy The Profit
                          </h1>
                        </div>
                        <div className='hidden group-hover:block w-full'>
                          <p className='text-xs font-light leading-normal text-white text-left text-center'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                          </p>
                        </div>
                        <div className='w-fit mx-auto'>
                          <HiArrowNarrowRight className='text-3xl group-hover:text-xl text-[#FF198D] z-20' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='group relative flex flex-col h-[12rem]'>
                    <div className='flex flex-grow justify-between items-center gap-5'>
                      <div className='h-full flex-grow transform skew-y-1 scale-x-[1.06] scale-y-[1.02] border border-[#0F69E5] bg-[#0F69E5] bg-opacity-70 border-opacity-70 group-hover:rounded-tl-full rounded-tl-md' />
                      <div className='h-full flex-grow transform -skew-y-1 scale-x-[1.06] scale-y-[1.02] border border-[#0F69E5] bg-[#0F69E5] bg-opacity-70 border-opacity-70 rounded-tr-full' />
                    </div>
                    <div className='flex flex-grow justify-between items-center gap-16'>
                      <div className='h-full flex-grow transform -skew-y-1 scale-x-[1.06] scale-y-[1.02] border border-[#0F69E5] bg-[#0F69E5] bg-opacity-70 border-opacity-70 rounded-bl-full' />
                      <div className='h-full flex-grow transform skew-y-1 scale-x-[1.06] scale-y-[1.02] border border-[#0F69E5] bg-[#0F69E5] bg-opacity-70 border-opacity-70 rounded-br-full' />
                    </div>
                    <div className='absolute inset-[5px] scale-y-[1.08] scale-x-[1.045] group-hover:scale-[1.12] z-10 bg-black rounded-full'>
                      <div className='flex flex-col gap-5 justify-center items-center w-full h-full group-hover:bg-[#0F69E5] group-hover:bg-opacity-20 text-white p-6'>
                        <div className='flex flex-col justify-center items-center gap-4'>
                          <div className='group-hover:border border-[#0F69E5]'>
                            <div className='group-hover:backdrop-blur'>
                              <RiCustomerService2Fill className='text-4xl group-hover:text-2xl text-white' />
                            </div>
                          </div>
                          <h1 className='text-lg font-medium leading-tight text-[#0F69E5] group-hover:text-[#FF198D]'>
                            Customer Support
                          </h1>
                        </div>
                        <div className='hidden group-hover:block w-full'>
                          <p className='text-xs font-light leading-normal text-white text-left text-center'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                          </p>
                        </div>
                        <div className='w-fit mx-auto'>
                          <HiArrowNarrowRight className='text-3xl group-hover:text-xl text-[#FF198D] z-20' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='text-left'>
                  <div className='mb-3'>
                    <h2 className='text-4xl font-semibold text-[#FF198D] leading-tight'>
                      Token Allocation Summary
                    </h2>
                  </div>
                  <p className='text-sm font-normal leading-tight text-white w-full mb-7'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus tempus dui nec euismod congue. Nulla id libero
                    dignissim, convallis odio id, scelerisque nisl. Curabitur
                    augue quam, fringilla quis dictum sed
                  </p>
                  <div className='grid grid-cols-2 gap-20 place-items-stretch'>
                    <div className=''>
                      <div className='relative'>
                        <div className='relative flex flex-col z-20 gap-10 h-[15rem]'>
                          <div className='flex flex-grow justify-start items-center gap-0'>
                            <div className='h-full flex-grow transform skew-x-2 scale-x-[1.05] scale-y-[1.06] border border-[#0F69E5] bg-[#0F69E5] rounded-tl-full' />
                            <div className='h-full flex-grow transform -skew-x-2 scale-x-[1.05] scale-y-[1.06] border border-[#0F69E5] bg-[#0F69E5] rounded-tr-full' />
                          </div>
                          <div className='flex flex-grow justify-start items-center gap-0'>
                            <div className='h-full flex-grow transform -skew-x-2 scale-x-[1.05] scale-y-[1.05] border border-[#0F69E5] bg-[#0F69E5] rounded-bl-full' />
                            <div className='h-full flex-grow transform skew-x-2 scale-x-[1.05] scale-y-[1.05] border border-[#0F69E5] bg-[#0F69E5] rounded-br-full' />
                          </div>
                          <div className='absolute inset-0 scale-y-[1] scale-x-[1.02] z-30 bg-black rounded-full p-6'>
                            <div className={Styles.chartEighty}>
                              <div className='w-full h-full rounded-full bg-black flex justify-center items-center'>
                                <p className='text-white text-5xl font-semibold leading-none'>
                                  80&#37;
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='absolute inset-0 top-[30%] flex flex-col z-10 gap-10 h-[15rem]'>
                          <div className='flex flex-grow justify-start items-center gap-0'>
                            <div className='h-full flex-grow transform skew-x-2 scale-x-[1.05] scale-y-[1.06] border border-[#0F69E5] bg-[#0F69E5] rounded-tl-full' />
                            <div className='h-full flex-grow transform -skew-x-2 scale-x-[1.05] scale-y-[1.06] border border-[#0F69E5] bg-[#0F69E5] rounded-tr-full' />
                          </div>
                          <div className='flex flex-grow justify-start items-center gap-0'>
                            <div className='h-full flex-grow transform -skew-x-2 scale-x-[1.05] scale-y-[1.05] border border-[#0F69E5] bg-[#0F69E5] rounded-bl-full' />
                            <div className='h-full flex-grow transform skew-x-2 scale-x-[1.05] scale-y-[1.05] border border-[#0F69E5] bg-[#0F69E5] rounded-br-full' />
                          </div>
                          <div className='absolute inset-0 scale-y-[1] scale-x-[1.02] z-30 bg-black rounded-full'>
                            <div className='w-full h-full p-5 flex justify-center items-end'>
                              <div className='flex flex-col items-center gap-1 text-sm font-normal leading-tight text-white w-fit'>
                                <p>Token Offer</p>
                                <p>70,000.00</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=''>
                      <div className='relative'>
                        <div className='relative flex flex-col z-20 gap-10 h-[15rem]'>
                          <div className='flex flex-grow justify-start items-center gap-0'>
                            <div className='h-full flex-grow transform skew-x-2 scale-x-[1.05] scale-y-[1.06] border border-[#0F69E5] bg-[#0F69E5] rounded-tl-full' />
                            <div className='h-full flex-grow transform -skew-x-2 scale-x-[1.05] scale-y-[1.06] border border-[#0F69E5] bg-[#0F69E5] rounded-tr-full' />
                          </div>
                          <div className='flex flex-grow justify-start items-center gap-0'>
                            <div className='h-full flex-grow transform -skew-x-2 scale-x-[1.05] scale-y-[1.05] border border-[#0F69E5] bg-[#0F69E5] rounded-bl-full' />
                            <div className='h-full flex-grow transform skew-x-2 scale-x-[1.05] scale-y-[1.05] border border-[#0F69E5] bg-[#0F69E5] rounded-br-full' />
                          </div>
                          <div className='absolute inset-0 scale-y-[1] scale-x-[1.02] z-30 bg-black rounded-full p-6'>
                            <div className={Styles.chartSeventy}>
                              <div className='w-full h-full rounded-full bg-black flex justify-center items-center'>
                                <p className='text-white text-5xl font-semibold leading-none'>
                                  70&#37;
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='absolute inset-0 top-[30%] flex flex-col z-10 gap-10 h-[15rem]'>
                          <div className='flex flex-grow justify-start items-center gap-0'>
                            <div className='h-full flex-grow transform skew-x-2 scale-x-[1.05] scale-y-[1.06] border border-[#0F69E5] bg-[#0F69E5] rounded-tl-full' />
                            <div className='h-full flex-grow transform -skew-x-2 scale-x-[1.05] scale-y-[1.06] border border-[#0F69E5] bg-[#0F69E5] rounded-tr-full' />
                          </div>
                          <div className='flex flex-grow justify-start items-center gap-0'>
                            <div className='h-full flex-grow transform -skew-x-2 scale-x-[1.05] scale-y-[1.05] border border-[#0F69E5] bg-[#0F69E5] rounded-bl-full' />
                            <div className='h-full flex-grow transform skew-x-2 scale-x-[1.05] scale-y-[1.05] border border-[#0F69E5] bg-[#0F69E5] rounded-br-full' />
                          </div>
                          <div className='absolute inset-0 scale-y-[1] scale-x-[1.02] z-30 bg-black rounded-full'>
                            <div className='w-full h-full p-5 flex justify-center items-end'>
                              <div className='flex flex-col items-center gap-1 text-sm font-normal leading-tight text-white w-fit'>
                                <p>UTO Bounties</p>
                                <p>15,500.00</p>
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
        </div>
      </main>
    </div>
  )
}
