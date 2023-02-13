import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

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
      <header className='bg-[#084F8C]'>
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
                <span className='text-base font-medium leading-none text-[#F61E8C] scale-110'>
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
                <button className='text-base font-medium leading-none px-4 py-2 bg-[#F61E8C] text-white rounded-sm shadow-sm'>
                  Try Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}