import Head from 'next/head'
import { useCallback, useState } from 'react'
import { MdDarkMode } from 'react-icons/md'
import { RxHamburgerMenu } from 'react-icons/rx'
import { BsGithub } from 'react-icons/bs'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const handleIsOpen = useCallback(() => setIsOpen((open) => !open), [])
  const handleDarkMode = useCallback(() => setDarkMode((dark) => !dark), [])

  return (
    <div className={darkMode ? 'dark' : undefined}>
      <Head>
        <title>Crypto Templates</title>
        <meta name='description' content='Best templates for crypto websites' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex flex-col min-h-screen justify-start gap-0'>
        <header className='bg-[#D98E04] dark:bg-[#012340]'>
          <div className='relative flex justify-between items-center max-w-[90rem] mx-auto p-4'>
            <div>
              <span className=''>
                <h1 className='leading-none text-lg md:text-2xl font-medium border-2 p-1 md:p-3 border-white dark:border-[#D98E04] text-white dark:text-[#D98E04]'>
                  Crypto Templates
                </h1>
              </span>
            </div>
            <div className='flex gap-10 justify-between items-center'>
              <div
                className={`${
                  isOpen ? 'flex absolute top-[100%] left-0' : 'hidden'
                } md:static md:flex flex-col md:flex-row pb-5 md:pb-0 px-5 md:px-0 gap-x-1 gap-y-8 md:gap-x-8 items-start justify-evenly md:items-center w-full bg-[#D98E04] dark:bg-[#012340] md:bg-transparent`}
              >
                <a
                  href='#home'
                  className='text-lg font-medium text-white dark:text-[#D98E04] capitalize'
                >
                  Home
                </a>
                <a
                  href='#templates'
                  className='text-lg font-medium text-white dark:text-[#D98E04] capitalize'
                >
                  Templates
                </a>
                <a
                  href='#about'
                  className='text-lg font-medium text-white dark:text-[#D98E04] capitalize'
                >
                  About
                </a>
                <a
                  href='#contact'
                  className='text-lg font-medium text-white dark:text-[#D98E04] capitalize'
                >
                  Contact
                </a>
              </div>

              <div className='flex justify-evenly items-center gap-5'>
                <RxHamburgerMenu
                  className='md:hidden text-white dark:text-[#D98E04] text-2xl'
                  onClick={handleIsOpen}
                />
                <BsGithub className='text-white dark:text-[#D98E04] text-2xl' />
                <MdDarkMode
                  className={`text-white dark:text-[#D98E04] text-2xl`}
                  onClick={handleDarkMode}
                />
              </div>
            </div>
          </div>
        </header>

        <main className='flex-grow bg-white dark:bg-gray-600 w-full h-full'>
          <div className=' max-w-[90rem] mx-auto'>
            <div className="h-[25rem] w-full bg-[url('/imgs/coins-charts.jpg')] bg-no-repeat bg-cover bg-center md:bg-right">
              <div className='bg-gradient-to-t from-transparent dark:from-[#023047] via-[rgba(140,78,3,0.75)] dark:via-[rgba(2,48,71,0.75)] w-full h-full'>
                <div className='w-[80%] lg:w-[50%] mx-auto bg-transparent h-full flex justify-center items-center'>
                  <h1 className='w-full text-5xl font-bold text-white dark:text-white text-center leading-tight'>
                    <span>
                      Crypto Templates
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer id='contact' className='bg-white dark:bg-gray-400'>
          Footer
        </footer>
      </div>
    </div>
  )
}
