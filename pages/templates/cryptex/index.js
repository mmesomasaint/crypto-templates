import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { BsFillBagFill, BsFillPersonFill, BsFillHeartFill } from 'react-icons/bs'
import { MdOutlineArrowForwardIos } from 'react-icons/md'

export default function Home() {
  return (
    <div>
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
                    <Link href='/templates/cryptex'>Home</Link>
                  </span>
                  <span className='font-normal text-xl leading-none text-white hover:text-gray-300'>
                    <Link href='/templates/cryptex/discover'>Discover</Link>
                  </span>
                  <span className='font-normal text-xl leading-none text-white hover:text-gray-300'>
                    <Link href='/templates/cryptex/shop'>Shop</Link>
                  </span>
                  <span className='font-normal text-xl leading-none text-white hover:text-gray-300'>
                    <Link href='/templates/cryptex/about'>About</Link>
                  </span>
                  <span className='font-normal text-xl leading-none text-white hover:text-gray-300'>
                    <Link href='/templates/cryptex/contact'>Contact</Link>
                  </span>
                  <span className='font-normal text-xl leading-none text-white hover:text-gray-300'>
                    <Link href='/templates/cryptex/blog'>Blog</Link>
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
      <main>
        <div className='max-w-[90rem] mx-auto'>
          <section>
            <div className="h-fit md:h-[40rem] w-full bg-[url('/imgs/cryptex/showcase.jpg')] bg-no-repeat bg-cover bg-center">
              <div className='flex justify-center items-center h-full'>
                <div className='w-full h-fit text-center pt-0 md:pt-10 py-16 md:py-0'>
                  <h1 className='block w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] mx-auto text-5xl font-bold leading-tight text-white mb-4'>
                    Create <span className='text-primary'>Digital Items</span>,
                    Sell Them Yourself Or Keep Collecting
                  </h1>
                  <p className='block w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] mx-auto text-xl lg:text-base font-normal leading-tight text-white mb-8'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus tempus dui nec euismod congue. Nulla id libero
                    dignissim, convallis odio
                  </p>
                  <div className='flex justify-center gap-8 items-center'>
                    <button className='flex justify-start items-center gap-3 px-6 py-3 border-2 border-primary bg-transparent shadow-sm rounded-full'>
                      <span className='text-xl lg:text-lg font-medium leading-none text-white'>
                        Explore More
                      </span>
                      <span className='w-fit mx-auto'>
                        <MdOutlineArrowForwardIos className='text-xl text-white z-20' />
                      </span>
                    </button>
                    <button className='text-xl lg:text-lg font-medium leading-none px-6 py-3 border-2 border-primary bg-transparent text-white shadow-sm rounded-full'>
                      Create Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*End of showcase section*/}
          <section>
            <div className="h-fit w-full bg-[url('/imgs/cryptex/blue-cubes.jpg')] bg-no-repeat bg-cover bg-center">
              <div className='w-full h-full bg-zinc-900 bg-opacity-70'>
                <div className='w-[80%] mx-auto py-32'>
                  <h2 className='text-5xl font-semibold leading-none text-white text-center mb-14'>
                    Popular Item
                  </h2>
                  <div className='grid grid-cols-4 place-items-stretch gap-10'>
                    <div className='p-3 bg-zinc-900 rounded-md transition duration-300 group hover:glow-cpt-primary'>
                      <div className='flex justify-start items-center gap-3'>
                        <div className="w-8 h-8 rounded-full bg-[url('/imgs/cryptex/avatar-1.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className=''>
                          <div className='text-sm font-medium text-white'>
                            Alija Amil
                          </div>
                          <div className='text-xs font-light text-white'>
                            @AlijaAmil
                          </div>
                        </div>
                      </div>
                      <div className='relative'>
                        <Image
                          src='/imgs/cryptex/house-sun.jpg'
                          width={300}
                          height={300}
                          alt='house-sun'
                          className='rounded-md my-5'
                        />
                        <div className='w-fit absolute -bottom-5 left-0 right-0 mx-auto rounded-full bg-black py-2 px-4 flex justify-start items-center gap-3'>
                          <span className='text-white text-sm font-medium'>
                            256h
                          </span>
                          <span className='text-white text-sm font-medium'>
                            59m
                          </span>
                          <span className='text-white text-sm font-medium'>
                            17s
                          </span>
                        </div>
                      </div>
                      <div className='flex justify-between items-center gap-5 mt-10'>
                        <button className='text-base lg:text-sm font-medium px-4 py-2 transition duration-300 group-hover:bg-primary border border-primary bg-transparent text-white shadow-sm rounded-full'>
                          Create Account
                        </button>
                        <div className='flex justify-start items-center gap-2'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                          <span className='text-gray-300 text-sm font-normal'>320</span>
                        </div>
                      </div>
                    </div>
                    <div className='p-3 bg-zinc-900 rounded-md transition duration-300 group hover:glow-cpt-primary'>
                      <div className='flex justify-start items-center gap-3'>
                        <div className="w-8 h-8 rounded-full bg-[url('/imgs/cryptex/avatar-2.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className=''>
                          <div className='text-sm font-medium text-white'>
                            Alija Amil
                          </div>
                          <div className='text-xs font-light text-white'>
                            @AlijaAmil
                          </div>
                        </div>
                      </div>
                      <div className='relative'>
                        <Image
                          src='/imgs/cryptex/pattern.jpg'
                          width={300}
                          height={300}
                          alt='house-sun'
                          className='rounded-md my-5'
                        />
                        <div className='w-fit absolute -bottom-5 left-0 right-0 mx-auto rounded-full bg-black py-2 px-4 flex justify-start items-center gap-3'>
                          <span className='text-white text-sm font-medium'>
                            256h
                          </span>
                          <span className='text-white text-sm font-medium'>
                            59m
                          </span>
                          <span className='text-white text-sm font-medium'>
                            17s
                          </span>
                        </div>
                      </div>
                      <div className='flex justify-between items-center gap-5 mt-10'>
                        <button className='text-base lg:text-sm font-medium px-4 py-2 transition duration-300 group-hover:bg-primary border border-primary bg-transparent text-white shadow-sm rounded-full'>
                          Create Account
                        </button>
                        <div className='flex justify-start items-center gap-2'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                          <span className='text-gray-300 text-sm font-normal'>320</span>
                        </div>
                      </div>
                    </div>
                    <div className='p-3 bg-zinc-900 rounded-md transition duration-300 group hover:glow-cpt-primary'>
                      <div className='flex justify-start items-center gap-3'>
                        <div className="w-8 h-8 rounded-full bg-[url('/imgs/cryptex/avatar-3.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className=''>
                          <div className='text-sm font-medium text-white'>
                            Alija Amil
                          </div>
                          <div className='text-xs font-light text-white'>
                            @AlijaAmil
                          </div>
                        </div>
                      </div>
                      <div className='relative'>
                        <Image
                          src='/imgs/cryptex/leafs.jpg'
                          width={300}
                          height={300}
                          alt='house-sun'
                          className='rounded-md my-5'
                        />
                        <div className='w-fit absolute -bottom-5 left-0 right-0 mx-auto rounded-full bg-black py-2 px-4 flex justify-start items-center gap-3'>
                          <span className='text-white text-sm font-medium'>
                            256h
                          </span>
                          <span className='text-white text-sm font-medium'>
                            59m
                          </span>
                          <span className='text-white text-sm font-medium'>
                            17s
                          </span>
                        </div>
                      </div>
                      <div className='flex justify-between items-center gap-5 mt-10'>
                        <button className='text-base lg:text-sm font-medium px-4 py-2 transition duration-300 group-hover:bg-primary border border-primary bg-transparent text-white shadow-sm rounded-full'>
                          Create Account
                        </button>
                        <div className='flex justify-start items-center gap-2'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                          <span className='text-gray-300 text-sm font-normal'>320</span>
                        </div>
                      </div>
                    </div>
                    <div className='p-3 bg-zinc-900 rounded-md transition duration-300 group hover:glow-cpt-primary'>
                      <div className='flex justify-start items-center gap-3'>
                        <div className="w-8 h-8 rounded-full bg-[url('/imgs/cryptex/avatar-3.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className=''>
                          <div className='text-sm font-medium text-white'>
                            Alija Amil
                          </div>
                          <div className='text-xs font-light text-white'>
                            @AlijaAmil
                          </div>
                        </div>
                      </div>
                      <div className='relative'>
                        <Image
                          src='/imgs/cryptex/house-sun.jpg'
                          width={300}
                          height={300}
                          alt='house-sun'
                          className='rounded-md my-5'
                        />
                        <div className='w-fit absolute -bottom-5 left-0 right-0 mx-auto rounded-full bg-black py-2 px-4 flex justify-start items-center gap-3'>
                          <span className='text-white text-sm font-medium'>
                            256h
                          </span>
                          <span className='text-white text-sm font-medium'>
                            59m
                          </span>
                          <span className='text-white text-sm font-medium'>
                            17s
                          </span>
                        </div>
                      </div>
                      <div className='flex justify-between items-center gap-5 mt-10'>
                        <button className='text-base lg:text-sm font-medium px-4 py-2 transition duration-300 group-hover:bg-primary border border-primary bg-transparent text-white shadow-sm rounded-full'>
                          Create Account
                        </button>
                        <div className='flex justify-start items-center gap-2'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                          <span className='text-gray-300 text-sm font-normal'>320</span>
                        </div>
                      </div>
                    </div>
                    <div className='p-3 bg-zinc-900 rounded-md transition duration-300 group hover:glow-cpt-primary'>
                      <div className='flex justify-start items-center gap-3'>
                        <div className="w-8 h-8 rounded-full bg-[url('/imgs/cryptex/avatar-4.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className=''>
                          <div className='text-sm font-medium text-white'>
                            Alija Amil
                          </div>
                          <div className='text-xs font-light text-white'>
                            @AlijaAmil
                          </div>
                        </div>
                      </div>
                      <div className='relative'>
                        <Image
                          src='/imgs/cryptex/flame-sun.jpg'
                          width={300}
                          height={300}
                          alt='house-sun'
                          className='rounded-md my-5'
                        />
                        <div className='w-fit absolute -bottom-5 left-0 right-0 mx-auto rounded-full bg-black py-2 px-4 flex justify-start items-center gap-3'>
                          <span className='text-white text-sm font-medium'>
                            256h
                          </span>
                          <span className='text-white text-sm font-medium'>
                            59m
                          </span>
                          <span className='text-white text-sm font-medium'>
                            17s
                          </span>
                        </div>
                      </div>
                      <div className='flex justify-between items-center gap-5 mt-10'>
                        <button className='text-base lg:text-sm font-medium px-4 py-2 transition duration-300 group-hover:bg-primary border border-primary bg-transparent text-white shadow-sm rounded-full'>
                          Create Account
                        </button>
                        <div className='flex justify-start items-center gap-2'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                          <span className='text-gray-300 text-sm font-normal'>320</span>
                        </div>
                      </div>
                    </div>
                    <div className='p-3 bg-zinc-900 rounded-md transition duration-300 group hover:glow-cpt-primary'>
                      <div className='flex justify-start items-center gap-3'>
                        <div className="w-8 h-8 rounded-full bg-[url('/imgs/cryptex/avatar-4.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className=''>
                          <div className='text-sm font-medium text-white'>
                            Alija Amil
                          </div>
                          <div className='text-xs font-light text-white'>
                            @AlijaAmil
                          </div>
                        </div>
                      </div>
                      <div className='relative'>
                        <Image
                          src='/imgs/cryptex/pattern.jpg'
                          width={300}
                          height={300}
                          alt='house-sun'
                          className='rounded-md my-5'
                        />
                        <div className='w-fit absolute -bottom-5 left-0 right-0 mx-auto rounded-full bg-black py-2 px-4 flex justify-start items-center gap-3'>
                          <span className='text-white text-sm font-medium'>
                            256h
                          </span>
                          <span className='text-white text-sm font-medium'>
                            59m
                          </span>
                          <span className='text-white text-sm font-medium'>
                            17s
                          </span>
                        </div>
                      </div>
                      <div className='flex justify-between items-center gap-5 mt-10'>
                        <button className='text-base lg:text-sm font-medium px-4 py-2 transition duration-300 group-hover:bg-primary border border-primary bg-transparent text-white shadow-sm rounded-full'>
                          Create Account
                        </button>
                        <div className='flex justify-start items-center gap-2'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                          <span className='text-gray-300 text-sm font-normal'>320</span>
                        </div>
                      </div>
                    </div>
                    <div className='p-3 bg-zinc-900 rounded-md transition duration-300 group hover:glow-cpt-primary'>
                      <div className='flex justify-start items-center gap-3'>
                        <div className="w-8 h-8 rounded-full bg-[url('/imgs/cryptex/avatar-2.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className=''>
                          <div className='text-sm font-medium text-white'>
                            Alija Amil
                          </div>
                          <div className='text-xs font-light text-white'>
                            @AlijaAmil
                          </div>
                        </div>
                      </div>
                      <div className='relative'>
                        <Image
                          src='/imgs/cryptex/leafs.jpg'
                          width={300}
                          height={300}
                          alt='house-sun'
                          className='rounded-md my-5'
                        />
                        <div className='w-fit absolute -bottom-5 left-0 right-0 mx-auto rounded-full bg-black py-2 px-4 flex justify-start items-center gap-3'>
                          <span className='text-white text-sm font-medium'>
                            256h
                          </span>
                          <span className='text-white text-sm font-medium'>
                            59m
                          </span>
                          <span className='text-white text-sm font-medium'>
                            17s
                          </span>
                        </div>
                      </div>
                      <div className='flex justify-between items-center gap-5 mt-10'>
                        <button className='text-base lg:text-sm font-medium px-4 py-2 transition duration-300 group-hover:bg-primary border border-primary bg-transparent text-white shadow-sm rounded-full'>
                          Create Account
                        </button>
                        <div className='flex justify-start items-center gap-2'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                          <span className='text-gray-300 text-sm font-normal'>320</span>
                        </div>
                      </div>
                    </div>
                    <div className='p-3 bg-zinc-900 rounded-md transition duration-300 group hover:glow-cpt-primary'>
                      <div className='flex justify-start items-center gap-3'>
                        <div className="w-8 h-8 rounded-full bg-[url('/imgs/cryptex/avatar-3.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className=''>
                          <div className='text-sm font-medium text-white'>
                            Alija Amil
                          </div>
                          <div className='text-xs font-light text-white'>
                            @AlijaAmil
                          </div>
                        </div>
                      </div>
                      <div className='relative'>
                        <Image
                          src='/imgs/cryptex/flame-sun.jpg'
                          width={300}
                          height={300}
                          alt='house-sun'
                          className='rounded-md my-5'
                        />
                        <div className='w-fit absolute -bottom-5 left-0 right-0 mx-auto rounded-full bg-black py-2 px-4 flex justify-start items-center gap-3'>
                          <span className='text-white text-sm font-medium'>
                            256h
                          </span>
                          <span className='text-white text-sm font-medium'>
                            59m
                          </span>
                          <span className='text-white text-sm font-medium'>
                            17s
                          </span>
                        </div>
                      </div>
                      <div className='flex justify-between items-center gap-5 mt-10'>
                        <button className='text-base lg:text-sm font-medium px-4 py-2 transition duration-300 group-hover:bg-primary border border-primary bg-transparent text-white shadow-sm rounded-full'>
                          Create Account
                        </button>
                        <div className='flex justify-start items-center gap-2'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                          <span className='text-gray-300 text-sm font-normal'>320</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End of Design Section */}
        </div>
      </main>
    </div>
  )
}
