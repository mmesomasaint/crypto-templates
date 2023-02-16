import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { BsStar } from 'react-icons/bs'
import { DiGoogleCloudPlatform } from 'react-icons/di'
import {FaBtc, FaEthereum} from 'react-icons/fa'

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
                  <button className='text-base font-medium leading-none px-6 py-3 border border-[#FF198D] bg-[#FF198D] text-white rounded-sm shadow-sm'>
                    Explore More &rarr;
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
                  <h4 className='text-white text-sm font-light leading-normal text-center mb-[2px]'>
                    ABOUT US
                  </h4>
                  <div className='flex gap-0 items-center justify-start'>
                    <div className='border w-[5px] h-[5px] rounded-full border-white' />
                    <div className='border-t border-t-white w-7 flex-grow' />
                    <div className='border w-[5px] h-[5px] rounded-full border-white' />
                    <div className='border-t border-t-white w-7 flex-grow' />
                    <div className='border w-[5px] h-[5px] rounded-full border-white' />
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
                        <p className='text-2xl font-semibold text-white leading-none col-span-2'>BTC</p>
                        <p className='text-xs font-light text-white leading-none'>Bitcoin</p>
                        <div className='flex gap-2 items-center justify-start'>
                          <span className='text-[#FF198D] text-xs font-light leading-tight'>&uarr;</span>
                          <span className='text-[#FF198D] text-xs font-light leading-tight'>2.65%</span>
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
                        <p className='text-2xl font-semibold text-white leading-none col-span-2'>ETH</p>
                        <p className='text-xs font-light text-white leading-none'>Ethereum</p>
                        <div className='flex gap-2 items-center justify-start'>
                          <span className='text-[#FF198D] text-xs font-light leading-tight'>&uarr;</span>
                          <span className='text-[#FF198D] text-xs font-light leading-tight'>1.50%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-10'>
                  <button className='py-3 px-6 text-base font-normal text-white bg-[#FF198D] rounded-md shadow-sm'>Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
