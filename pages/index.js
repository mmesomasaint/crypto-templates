import Head from 'next/head'
import { useCallback, useState } from 'react'
import { MdDarkMode } from 'react-icons/md'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const handleDarkMode = useCallback(() => setDarkMode((dark) => !dark), [])

  return (
    <div className={darkMode && 'dark'}>
      <Head>
        <title>Crypto Templates</title>
        <meta name='description' content='Best templates for crypto websites' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header>
        <div className='flex justify-end items-center px-5 bg-white dark:bg-gray-900'>
          <MdDarkMode
            className={`text-[#023047] dark:text-white text-2xl`}
            onClick={handleDarkMode}
          />
        </div>
      </header>

      <main className='bg-white dark:bg-gray-600'>
        Main
      </main>

      <footer className='bg-white dark:bg-gray-400'>
        Footer
      </footer>
    </div>
  )
}
