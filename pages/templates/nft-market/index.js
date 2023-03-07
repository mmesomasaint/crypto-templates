import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {BsSearch} from 'react-icons/bs'

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
        <div className='max-w-[90rem] w-[80%] mx-auto py-7'>
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
                <span className='font-normal text-lg leading-none text-[#16F24D] scale-105 underline underline-offset-[6px]'>
                  <Link href='/templates/nft-market'>Home</Link>
                </span>
                <span className='font-normal text-lg leading-none text-white'>
                  <Link href='/templates/nft-market'>Collection</Link>
                </span>
                <span className='font-normal text-lg leading-none text-white'>
                  <Link href='/templates/nft-market'>About Us</Link>
                </span>
                <span className='font-normal text-lg leading-none text-white'>
                  <Link href='/templates/nft-market'>NFT</Link>
                </span>
                <span className='font-normal text-lg leading-none text-white'>
                  <Link href='/templates/nft-market'>Blog</Link>
                </span>
                <span className='font-normal text-lg leading-none text-white'>
                  <Link href='/templates/nft-market'>Contact</Link>
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
                <button className='text-base py-4 px-7 font-medium leading-none bg-[#16F24D] rounded-md'>
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
