import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { BsFillBagFill, BsFillPersonFill } from 'react-icons/bs'

export default function Home() {
  return (
    <div className='bg-black'>
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
          <div className='w-[98%] xl:w-[80%] mx-auto py-7'>
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
                  className={`w-full md:w-fit flex-col md:flex-row absolute z-10 top-[99%] left-0 md:static md:flex justify-evenly items-start md:items-center gap-7 px-[1%] py-5 md:p-0`}
                >
                  <span className='font-normal text-xl leading-none text-primary scale-105 underline underline-offset-[6px]'>
                    <Link href='/templates/nft-market'>Home</Link>
                  </span>
                  <span className='font-normal text-xl leading-none text-white hover:text-gray-300'>
                    <Link href='/templates/nft-market/discover'>Discover</Link>
                  </span>
                  <span className='font-normal text-xl leading-none text-white hover:text-gray-300'>
                    <Link href='/templates/nft-market/shop'>Shop</Link>
                  </span>
                  <span className='font-normal text-xl leading-none text-white hover:text-gray-300'>
                    <Link href='/templates/nft-market/about'>About</Link>
                  </span>
                  <span className='font-normal text-xl leading-none text-white hover:text-gray-300'>
                    <Link href='/templates/nft-market/contact'>Contact</Link>
                  </span>
                  <span className='font-normal text-xl leading-none text-white hover:text-gray-300'>
                    <Link href='/templates/nft-market/blog'>Blog</Link>
                  </span>
                </div>
              </div>
              <div className='flex justify-center items-center gap-7'>
                <button className='text-white text-lg py-3 px-6 font-medium leading-none bg-transparent border-2 border-primary rounded-full'>
                  Connect Wallet
                </button>
                <div className='flex justify-center items-center gap-5'>
                  <BsFillBagFill className='text-white text-xl' />
                  <BsFillPersonFill className='text-white text-xl' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
