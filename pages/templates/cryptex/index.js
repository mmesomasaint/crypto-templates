import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {
  BsFillBagFill,
  BsFillPersonFill,
  BsFillHeartFill,
  BsCheck,
} from 'react-icons/bs'
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md'

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
                          Price A Bid
                        </button>
                        <div className='flex justify-start items-center gap-2'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                          <span className='text-gray-300 text-sm font-normal'>
                            320
                          </span>
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
                          Price A Bid
                        </button>
                        <div className='flex justify-start items-center gap-2'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                          <span className='text-gray-300 text-sm font-normal'>
                            320
                          </span>
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
                          Price A Bid
                        </button>
                        <div className='flex justify-start items-center gap-2'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                          <span className='text-gray-300 text-sm font-normal'>
                            320
                          </span>
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
                          Price A Bid
                        </button>
                        <div className='flex justify-start items-center gap-2'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                          <span className='text-gray-300 text-sm font-normal'>
                            320
                          </span>
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
                          Price A Bid
                        </button>
                        <div className='flex justify-start items-center gap-2'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                          <span className='text-gray-300 text-sm font-normal'>
                            320
                          </span>
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
                          Price A Bid
                        </button>
                        <div className='flex justify-start items-center gap-2'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                          <span className='text-gray-300 text-sm font-normal'>
                            320
                          </span>
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
                          Price A Bid
                        </button>
                        <div className='flex justify-start items-center gap-2'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                          <span className='text-gray-300 text-sm font-normal'>
                            320
                          </span>
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
                          Price A Bid
                        </button>
                        <div className='flex justify-start items-center gap-2'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                          <span className='text-gray-300 text-sm font-normal'>
                            320
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End of grid */}
                  <div className='text-center mt-14'>
                    <button className='text-xl lg:text-lg font-medium leading-none px-6 py-3 bg-primary text-white shadow-sm rounded-full'>
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End of Design Section */}
          <section>
            <div className='bg-black'>
              <div className='w-[80%] mx-auto py-32'>
                <h2 className='text-5xl font-semibold leading-none text-white text-center mb-14'>
                  Trending Artwork
                </h2>
                <div className='grid grid-cols-3 place-items-stretch gap-14'>
                  <div className='bg-gray-900 rounded-md p-3'>
                    <div className='relative mb-8'>
                      <Image
                        src='/imgs/cryptex/bg-paint.jpg'
                        width={350}
                        height={350}
                        alt='background paint'
                        className='rounded-md'
                      />
                      <div className='absolute top-2 right-2 p-2 bg-black flex justify-start items-center gap-3 rounded-full border border-gray-300'>
                        <BsFillHeartFill className='text-base text-yellow-800' />
                        <span className='text-gray-300 text-xs font-normal'>
                          128
                        </span>
                      </div>
                      <div className='bg-black flex justify-center items-center gap-3 pr-3 rounded-full absolute -bottom-4 left-0 right-0 w-fit mx-auto'>
                        <div className="w-10 h-10 rounded-full bg-[url('/imgs/cryptex/avatar-3.jpg')] bg-no-repeat bg-center bg-cover" />
                        <span className='text-base font-normal text-gray-300'>
                          @albonisin
                        </span>
                      </div>
                    </div>
                    <div className='my-6 text-white font-medium text-xl leading-none'>
                      Walking On Air
                    </div>
                    <div className='rounded-md bg-black flex justify-between items-center p-3'>
                      <span className='text-white text-base font-medium leading-none'>
                        120 ETH 20/40
                      </span>
                      <span className='text-white text-base font-medium leading-none'>
                        BID 50 ETH
                      </span>
                    </div>
                  </div>
                  <div className='bg-gray-900 rounded-md p-3'>
                    <div className='relative mb-8'>
                      <Image
                        src='/imgs/cryptex/peeling-woman.jpg'
                        width={350}
                        height={350}
                        alt='background paint'
                        className='rounded-md'
                      />
                      <div className='absolute top-2 right-2 p-2 bg-black flex justify-start items-center gap-3 rounded-full border border-gray-300'>
                        <BsFillHeartFill className='text-base text-yellow-800' />
                        <span className='text-gray-300 text-xs font-normal'>
                          128
                        </span>
                      </div>
                      <div className='bg-black flex justify-center items-center gap-3 pr-3 rounded-full absolute -bottom-4 left-0 right-0 w-fit mx-auto'>
                        <div className="w-10 h-10 rounded-full bg-[url('/imgs/cryptex/avatar-2.jpg')] bg-no-repeat bg-center bg-cover" />
                        <span className='text-base font-normal text-gray-300'>
                          @albonisin
                        </span>
                      </div>
                    </div>
                    <div className='my-6 text-white font-medium text-xl leading-none'>
                      Walking On Air
                    </div>
                    <div className='rounded-md bg-black flex justify-between items-center p-3'>
                      <span className='text-white text-base font-medium leading-none'>
                        120 ETH 20/40
                      </span>
                      <span className='text-white text-base font-medium leading-none'>
                        BID 50 ETH
                      </span>
                    </div>
                  </div>
                  <div className='bg-gray-900 rounded-md p-3'>
                    <div className='relative mb-8'>
                      <Image
                        src='/imgs/cryptex/bg-colored.jpg'
                        width={350}
                        height={350}
                        alt='background paint'
                        className='rounded-md'
                      />
                      <div className='absolute top-2 right-2 p-2 bg-black flex justify-start items-center gap-3 rounded-full border border-gray-300'>
                        <BsFillHeartFill className='text-base text-yellow-800' />
                        <span className='text-gray-300 text-xs font-normal'>
                          128
                        </span>
                      </div>
                      <div className='bg-black flex justify-center items-center gap-3 pr-3 rounded-full absolute -bottom-4 left-0 right-0 w-fit mx-auto'>
                        <div className="w-10 h-10 rounded-full bg-[url('/imgs/cryptex/avatar-1.jpg')] bg-no-repeat bg-center bg-cover" />
                        <span className='text-base font-normal text-gray-300'>
                          @albonisin
                        </span>
                      </div>
                    </div>
                    <div className='my-6 text-white font-medium text-xl leading-none'>
                      Walking On Air
                    </div>
                    <div className='rounded-md bg-black flex justify-between items-center p-3'>
                      <span className='text-white text-base font-medium leading-none'>
                        120 ETH 20/40
                      </span>
                      <span className='text-white text-base font-medium leading-none'>
                        BID 50 ETH
                      </span>
                    </div>
                  </div>
                </div>
                <div className='flex justify-center items-center gap-10 mt-14'>
                  <div className='w-10 h-10 rounded-full bg-gray-500 transition duration-300 hover:bg-primary hover:glow-white flex justify-center items-center'>
                    <MdOutlineArrowBackIos className='text-white text-xl' />
                  </div>
                  <div className='w-10 h-10 rounded-full bg-gray-500 transition duration-300 hover:bg-primary hover:glow-white flex justify-center items-center'>
                    <MdOutlineArrowForwardIos className='text-white text-xl' />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End of Trending Section */}
          <section>
            <div className='bg-zinc-900'>
              <div className='w-[80%] mx-auto py-32'>
                <h2 className='text-5xl font-semibold leading-none text-white text-center mb-14'>
                  Our Top Sellers
                </h2>
                <div className='grid grid-cols-3 place-items-stretch gap-14'>
                  <div className='rounded-full p-2 transition duration-300 bg-stone-700 hover:bg-gradient-to-r hover:from-stone-700 hover:via-stone-700 hover:to-black hover:glow-cpt-primary'>
                    <div className='flex justify-start items-center gap-4'>
                      <div className='relative rounded-full w-fit'>
                        <div className="w-14 h-14 rounded-full bg-[url('/imgs/cryptex/avatar-1.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className='absolute rounded-full bottom-0 -right-2 w-5 h-5 bg-teal-500 flex justify-center items-center'>
                          <BsCheck className='text-white text-base' />
                        </div>
                      </div>
                      <div className='flex flex-col justify-between items-start gap-1'>
                        <span className='text-white text-base font-normal'>
                          James Smith
                        </span>
                        <span className='text-white text-base font-normal'>
                          126.64 ETH
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='rounded-full p-2 transition duration-300 bg-stone-700 hover:bg-gradient-to-r hover:from-stone-700 hover:via-stone-700 hover:to-black hover:glow-cpt-primary'>
                    <div className='flex justify-start items-center gap-4'>
                      <div className='relative rounded-full w-fit'>
                        <div className="w-14 h-14 rounded-full bg-[url('/imgs/cryptex/avatar-3.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className='absolute rounded-full bottom-0 -right-2 w-5 h-5 bg-teal-500 flex justify-center items-center'>
                          <BsCheck className='text-white text-base' />
                        </div>
                      </div>
                      <div className='flex flex-col justify-between items-start gap-1'>
                        <span className='text-white text-base font-normal'>
                          Treymayne Harris
                        </span>
                        <span className='text-white text-base font-normal'>
                          186.66 ETH
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='rounded-full p-2 transition duration-300 bg-stone-700 hover:bg-gradient-to-r hover:from-stone-700 hover:via-stone-700 hover:to-black hover:glow-cpt-primary'>
                    <div className='flex justify-start items-center gap-4'>
                      <div className='relative rounded-full w-fit'>
                        <div className="w-14 h-14 rounded-full bg-[url('/imgs/cryptex/avatar-2.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className='absolute rounded-full bottom-0 -right-2 w-5 h-5 bg-teal-500 flex justify-center items-center'>
                          <BsCheck className='text-white text-base' />
                        </div>
                      </div>
                      <div className='flex flex-col justify-between items-start gap-1'>
                        <span className='text-white text-base font-normal'>
                          James Smith
                        </span>
                        <span className='text-white text-base font-normal'>
                          126.64 ETH
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='rounded-full p-2 transition duration-300 bg-stone-700 hover:bg-gradient-to-r hover:from-stone-700 hover:via-stone-700 hover:to-black hover:glow-cpt-primary'>
                    <div className='flex justify-start items-center gap-4'>
                      <div className='relative rounded-full w-fit'>
                        <div className="w-14 h-14 rounded-full bg-[url('/imgs/cryptex/avatar-3.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className='absolute rounded-full bottom-0 -right-2 w-5 h-5 bg-teal-500 flex justify-center items-center'>
                          <BsCheck className='text-white text-base' />
                        </div>
                      </div>
                      <div className='flex flex-col justify-between items-start gap-1'>
                        <span className='text-white text-base font-normal'>
                          Tony Johnson
                        </span>
                        <span className='text-white text-base font-normal'>
                          126.64 ETH
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='rounded-full p-2 transition duration-300 bg-stone-700 hover:bg-gradient-to-r hover:from-stone-700 hover:via-stone-700 hover:to-black hover:glow-cpt-primary'>
                    <div className='flex justify-start items-center gap-4'>
                      <div className='relative rounded-full w-fit'>
                        <div className="w-14 h-14 rounded-full bg-[url('/imgs/cryptex/avatar-2.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className='absolute rounded-full bottom-0 -right-2 w-5 h-5 bg-teal-500 flex justify-center items-center'>
                          <BsCheck className='text-white text-base' />
                        </div>
                      </div>
                      <div className='flex flex-col justify-between items-start gap-1'>
                        <span className='text-white text-base font-normal'>
                          Ryan Evans
                        </span>
                        <span className='text-white text-base font-normal'>
                          226.64 ETH
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='rounded-full p-2 transition duration-300 bg-stone-700 hover:bg-gradient-to-r hover:from-stone-700 hover:via-stone-700 hover:to-black hover:glow-cpt-primary'>
                    <div className='flex justify-start items-center gap-4'>
                      <div className='relative rounded-full w-fit'>
                        <div className="w-14 h-14 rounded-full bg-[url('/imgs/cryptex/avatar-4.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className='absolute rounded-full bottom-0 -right-2 w-5 h-5 bg-teal-500 flex justify-center items-center'>
                          <BsCheck className='text-white text-base' />
                        </div>
                      </div>
                      <div className='flex flex-col justify-between items-start gap-1'>
                        <span className='text-white text-base font-normal'>
                          Steven Statten
                        </span>
                        <span className='text-white text-base font-normal'>
                          255.52 ETH
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='rounded-full p-2 transition duration-300 bg-stone-700 hover:bg-gradient-to-r hover:from-stone-700 hover:via-stone-700 hover:to-black hover:glow-cpt-primary'>
                    <div className='flex justify-start items-center gap-4'>
                      <div className='relative rounded-full w-fit'>
                        <div className="w-14 h-14 rounded-full bg-[url('/imgs/cryptex/avatar-1.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className='absolute rounded-full bottom-0 -right-2 w-5 h-5 bg-teal-500 flex justify-center items-center'>
                          <BsCheck className='text-white text-base' />
                        </div>
                      </div>
                      <div className='flex flex-col justify-between items-start gap-1'>
                        <span className='text-white text-base font-normal'>
                          Jeff Choata
                        </span>
                        <span className='text-white text-base font-normal'>
                          126.64 ETH
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='rounded-full p-2 transition duration-300 bg-stone-700 hover:bg-gradient-to-r hover:from-stone-700 hover:via-stone-700 hover:to-black hover:glow-cpt-primary'>
                    <div className='flex justify-start items-center gap-4'>
                      <div className='relative rounded-full w-fit'>
                        <div className="w-14 h-14 rounded-full bg-[url('/imgs/cryptex/avatar-4.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className='absolute rounded-full bottom-0 -right-2 w-5 h-5 bg-teal-500 flex justify-center items-center'>
                          <BsCheck className='text-white text-base' />
                        </div>
                      </div>
                      <div className='flex flex-col justify-between items-start gap-1'>
                        <span className='text-white text-base font-normal'>
                          Steven Craig
                        </span>
                        <span className='text-white text-base font-normal'>
                          234.77 ETH
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='rounded-full p-2 transition duration-300 bg-stone-700 hover:bg-gradient-to-r hover:from-stone-700 hover:via-stone-700 hover:to-black hover:glow-cpt-primary'>
                    <div className='flex justify-start items-center gap-4'>
                      <div className='relative rounded-full w-fit'>
                        <div className="w-14 h-14 rounded-full bg-[url('/imgs/cryptex/avatar-2.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className='absolute rounded-full bottom-0 -right-2 w-5 h-5 bg-teal-500 flex justify-center items-center'>
                          <BsCheck className='text-white text-base' />
                        </div>
                      </div>
                      <div className='flex flex-col justify-between items-start gap-1'>
                        <span className='text-white text-base font-normal'>
                          Jacob Detten
                        </span>
                        <span className='text-white text-base font-normal'>
                          226.74 ETH
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='rounded-full p-2 transition duration-300 bg-stone-700 hover:bg-gradient-to-r hover:from-stone-700 hover:via-stone-700 hover:to-black hover:glow-cpt-primary'>
                    <div className='flex justify-start items-center gap-4'>
                      <div className='relative rounded-full w-fit'>
                        <div className="w-14 h-14 rounded-full bg-[url('/imgs/cryptex/avatar-4.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className='absolute rounded-full bottom-0 -right-2 w-5 h-5 bg-teal-500 flex justify-center items-center'>
                          <BsCheck className='text-white text-base' />
                        </div>
                      </div>
                      <div className='flex flex-col justify-between items-start gap-1'>
                        <span className='text-white text-base font-normal'>
                          Shawn Busbae
                        </span>
                        <span className='text-white text-base font-normal'>
                          443.64 ETH
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='rounded-full p-2 transition duration-300 bg-stone-700 hover:bg-gradient-to-r hover:from-stone-700 hover:via-stone-700 hover:to-black hover:glow-cpt-primary'>
                    <div className='flex justify-start items-center gap-4'>
                      <div className='relative rounded-full w-fit'>
                        <div className="w-14 h-14 rounded-full bg-[url('/imgs/cryptex/avatar-1.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className='absolute rounded-full bottom-0 -right-2 w-5 h-5 bg-teal-500 flex justify-center items-center'>
                          <BsCheck className='text-white text-base' />
                        </div>
                      </div>
                      <div className='flex flex-col justify-between items-start gap-1'>
                        <span className='text-white text-base font-normal'>
                          Jacob Elder
                        </span>
                        <span className='text-white text-base font-normal'>
                          643.64 ETH
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='rounded-full p-2 transition duration-300 bg-stone-700 hover:bg-gradient-to-r hover:from-stone-700 hover:via-stone-700 hover:to-black hover:glow-cpt-primary'>
                    <div className='flex justify-start items-center gap-4'>
                      <div className='relative rounded-full w-fit'>
                        <div className="w-14 h-14 rounded-full bg-[url('/imgs/cryptex/avatar-3.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className='absolute rounded-full bottom-0 -right-2 w-5 h-5 bg-teal-500 flex justify-center items-center'>
                          <BsCheck className='text-white text-base' />
                        </div>
                      </div>
                      <div className='flex flex-col justify-between items-start gap-1'>
                        <span className='text-white text-base font-normal'>
                          Bruce White
                        </span>
                        <span className='text-white text-base font-normal'>
                          176.25 ETH
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ENd of top-sellers section */}
          <section>
            <div className='bg-zinc-900'>
              <div className='w-[80%] mx-auto py-32'>
                <h2 className='text-5xl font-semibold leading-none text-white text-center mb-14'>
                  Featured Assets
                </h2>
                <div className='grid grid-cols-4 place-items-stretch gap-14'>
                  <div className='p-3 bg-gray-900 rounded-md transition duration-300 group hover:glow-cpt-primary'>
                    <div>
                      <Image
                        src='/imgs/cryptex/house-sun.jpg'
                        width={300}
                        height={300}
                        alt='house-sun'
                        className='rounded-md'
                      />
                    </div>
                    <div className='flex justify-between items-center gap-5 mt-3'>
                      <div className='flex justify-start items-center gap-2'>
                        <div className="w-8 h-8 rounded-md bg-[url('/imgs/cryptex/avatar-4.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className='relative rounded-md w-fit'>
                          <div className="w-8 h-8 rounded-md bg-[url('/imgs/cryptex/avatar-1.jpg')] bg-no-repeat bg-center bg-cover" />
                          <div className='absolute rounded-full bottom-0 -right-1 w-3 h-3 bg-teal-500 border border-white flex justify-center items-center'>
                            <BsCheck className='text-white text-base' />
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-start items-center gap-2'>
                        <div className='w-8 h-8 rounded-full bg-stone-900 flex justify-center items-center'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                        </div>
                        <span className='text-gray-300 text-sm font-normal'>
                          320 Likes
                        </span>
                      </div>
                    </div>
                    <div className='text-white transition duration-300 group-hover:text-primary text-lg font-medium mt-3'>
                      Scarecrow in Daylight
                    </div>
                    <div className='rounded-md bg-black flex justify-between items-center p-3 mt-3'>
                      <span className='text-white text-sm font-normal leading-none'>
                        Current Bid
                      </span>
                      <span className='text-white group-hover:text-primary text-sm font-normal leading-none'>
                        BID 50 ETH
                      </span>
                    </div>
                  </div>
                  <div className='p-3 bg-gray-900 rounded-md transition duration-300 group hover:glow-cpt-primary'>
                    <div>
                      <Image
                        src='/imgs/cryptex/leafs.jpg'
                        width={300}
                        height={300}
                        alt='leafs'
                        className='rounded-md'
                      />
                    </div>
                    <div className='flex justify-between items-center gap-5 mt-3'>
                      <div className='flex justify-start items-center gap-2'>
                        <div className="w-8 h-8 rounded-md bg-[url('/imgs/cryptex/avatar-3.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className='relative rounded-md w-fit'>
                          <div className="w-8 h-8 rounded-md bg-[url('/imgs/cryptex/avatar-2.jpg')] bg-no-repeat bg-center bg-cover" />
                          <div className='absolute rounded-full bottom-0 -right-1 w-3 h-3 bg-teal-500 border border-white flex justify-center items-center'>
                            <BsCheck className='text-white text-base' />
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-start items-center gap-2'>
                        <div className='w-8 h-8 rounded-full bg-stone-900 flex justify-center items-center'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                        </div>
                        <span className='text-gray-300 text-sm font-normal'>
                          320 Likes
                        </span>
                      </div>
                    </div>
                    <div className='text-white transition duration-300 group-hover:text-primary text-lg font-medium mt-3'>
                      Super Neophormism
                    </div>
                    <div className='rounded-md bg-black flex justify-between items-center p-3 mt-3'>
                      <span className='text-white text-sm font-normal leading-none'>
                        Current Bid
                      </span>
                      <span className='text-white group-hover:text-primary text-sm font-normal leading-none'>
                        BID 50 ETH
                      </span>
                    </div>
                  </div>
                  <div className='p-3 bg-gray-900 rounded-md transition duration-300 group hover:glow-cpt-primary'>
                    <div>
                      <Image
                        src='/imgs/cryptex/pattern.jpg'
                        width={300}
                        height={300}
                        alt='pattern'
                        className='rounded-md'
                      />
                    </div>
                    <div className='flex justify-between items-center gap-5 mt-3'>
                      <div className='flex justify-start items-center gap-2'>
                        <div className="w-8 h-8 rounded-md bg-[url('/imgs/cryptex/avatar-4.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className='relative rounded-md w-fit'>
                          <div className="w-8 h-8 rounded-md bg-[url('/imgs/cryptex/avatar-3.jpg')] bg-no-repeat bg-center bg-cover" />
                          <div className='absolute rounded-full bottom-0 -right-1 w-3 h-3 bg-teal-500 border border-white flex justify-center items-center'>
                            <BsCheck className='text-white text-base' />
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-start items-center gap-2'>
                        <div className='w-8 h-8 rounded-full bg-stone-900 flex justify-center items-center'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                        </div>
                        <span className='text-gray-300 text-sm font-normal'>
                          320 Likes
                        </span>
                      </div>
                    </div>
                    <div className='text-white transition duration-300 group-hover:text-primary text-lg font-medium mt-3'>
                      AI generated pattern
                    </div>
                    <div className='rounded-md bg-black flex justify-between items-center p-3 mt-3'>
                      <span className='text-white text-sm font-normal leading-none'>
                        Current Bid
                      </span>
                      <span className='text-white group-hover:text-primary text-sm font-normal leading-none'>
                        BID 50 ETH
                      </span>
                    </div>
                  </div>
                  <div className='p-3 bg-gray-900 rounded-md transition duration-300 group hover:glow-cpt-primary'>
                    <div>
                      <Image
                        src='/imgs/cryptex/leafs-2.jpg'
                        width={300}
                        height={300}
                        alt='leafs-2'
                        className='rounded-md'
                      />
                    </div>
                    <div className='flex justify-between items-center gap-5 mt-3'>
                      <div className='flex justify-start items-center gap-2'>
                        <div className="w-8 h-8 rounded-md bg-[url('/imgs/cryptex/avatar-1.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className='relative rounded-md w-fit'>
                          <div className="w-8 h-8 rounded-md bg-[url('/imgs/cryptex/avatar-2.jpg')] bg-no-repeat bg-center bg-cover" />
                          <div className='absolute rounded-full bottom-0 -right-1 w-3 h-3 bg-teal-500 border border-white flex justify-center items-center'>
                            <BsCheck className='text-white text-base' />
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-start items-center gap-2'>
                        <div className='w-8 h-8 rounded-full bg-stone-900 flex justify-center items-center'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                        </div>
                        <span className='text-gray-300 text-sm font-normal'>
                          320 Likes
                        </span>
                      </div>
                    </div>
                    <div className='text-white transition duration-300 group-hover:text-primary text-lg font-medium mt-3'>
                      Super Creative Nature
                    </div>
                    <div className='rounded-md bg-black flex justify-between items-center p-3 mt-3'>
                      <span className='text-white text-sm font-normal leading-none'>
                        Current Bid
                      </span>
                      <span className='text-white group-hover:text-primary text-sm font-normal leading-none'>
                        BID 50 ETH
                      </span>
                    </div>
                  </div>
                  <div className='p-3 bg-gray-900 rounded-md transition duration-300 group hover:glow-cpt-primary'>
                    <div>
                      <Image
                        src='/imgs/cryptex/flame-sun.jpg'
                        width={300}
                        height={300}
                        alt='flame-sun'
                        className='rounded-md'
                      />
                    </div>
                    <div className='flex justify-between items-center gap-5 mt-3'>
                      <div className='flex justify-start items-center gap-2'>
                        <div className="w-8 h-8 rounded-md bg-[url('/imgs/cryptex/avatar-3.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className='relative rounded-md w-fit'>
                          <div className="w-8 h-8 rounded-md bg-[url('/imgs/cryptex/avatar-1.jpg')] bg-no-repeat bg-center bg-cover" />
                          <div className='absolute rounded-full bottom-0 -right-1 w-3 h-3 bg-teal-500 border border-white flex justify-center items-center'>
                            <BsCheck className='text-white text-base' />
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-start items-center gap-2'>
                        <div className='w-8 h-8 rounded-full bg-stone-900 flex justify-center items-center'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                        </div>
                        <span className='text-gray-300 text-sm font-normal'>
                          320 Likes
                        </span>
                      </div>
                    </div>
                    <div className='text-white transition duration-300 group-hover:text-primary text-lg font-medium mt-3'>
                      Night Sunset Flame
                    </div>
                    <div className='rounded-md bg-black flex justify-between items-center p-3 mt-3'>
                      <span className='text-white text-sm font-normal leading-none'>
                        Current Bid
                      </span>
                      <span className='text-white group-hover:text-primary text-sm font-normal leading-none'>
                        BID 50 ETH
                      </span>
                    </div>
                  </div>
                  <div className='p-3 bg-gray-900 rounded-md transition duration-300 group hover:glow-cpt-primary'>
                    <div>
                      <Image
                        src='/imgs/cryptex/leafs.jpg'
                        width={300}
                        height={300}
                        alt='leafs'
                        className='rounded-md'
                      />
                    </div>
                    <div className='flex justify-between items-center gap-5 mt-3'>
                      <div className='flex justify-start items-center gap-2'>
                        <div className="w-8 h-8 rounded-md bg-[url('/imgs/cryptex/avatar-2.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className='relative rounded-md w-fit'>
                          <div className="w-8 h-8 rounded-md bg-[url('/imgs/cryptex/avatar-1.jpg')] bg-no-repeat bg-center bg-cover" />
                          <div className='absolute rounded-full bottom-0 -right-1 w-3 h-3 bg-teal-500 border border-white flex justify-center items-center'>
                            <BsCheck className='text-white text-base' />
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-start items-center gap-2'>
                        <div className='w-8 h-8 rounded-full bg-stone-900 flex justify-center items-center'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                        </div>
                        <span className='text-gray-300 text-sm font-normal'>
                          320 Likes
                        </span>
                      </div>
                    </div>
                    <div className='text-white transition duration-300 group-hover:text-primary text-lg font-medium mt-3'>
                      Leaves From Life
                    </div>
                    <div className='rounded-md bg-black flex justify-between items-center p-3 mt-3'>
                      <span className='text-white text-sm font-normal leading-none'>
                        Current Bid
                      </span>
                      <span className='text-white group-hover:text-primary text-sm font-normal leading-none'>
                        BID 50 ETH
                      </span>
                    </div>
                  </div>
                  <div className='p-3 bg-gray-900 rounded-md transition duration-300 group hover:glow-cpt-primary'>
                    <div>
                      <Image
                        src='/imgs/cryptex/flame-sun.jpg'
                        width={300}
                        height={300}
                        alt='flame-sun'
                        className='rounded-md'
                      />
                    </div>
                    <div className='flex justify-between items-center gap-5 mt-3'>
                      <div className='flex justify-start items-center gap-2'>
                        <div className="w-8 h-8 rounded-md bg-[url('/imgs/cryptex/avatar-4.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className='relative rounded-md w-fit'>
                          <div className="w-8 h-8 rounded-md bg-[url('/imgs/cryptex/avatar-3.jpg')] bg-no-repeat bg-center bg-cover" />
                          <div className='absolute rounded-full bottom-0 -right-1 w-3 h-3 bg-teal-500 border border-white flex justify-center items-center'>
                            <BsCheck className='text-white text-base' />
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-start items-center gap-2'>
                        <div className='w-8 h-8 rounded-full bg-stone-900 flex justify-center items-center'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                        </div>
                        <span className='text-gray-300 text-sm font-normal'>
                          320 Likes
                        </span>
                      </div>
                    </div>
                    <div className='text-white transition duration-300 group-hover:text-primary text-lg font-medium mt-3'>
                      Twilight Fracture City
                    </div>
                    <div className='rounded-md bg-black flex justify-between items-center p-3 mt-3'>
                      <span className='text-white text-sm font-normal leading-none'>
                        Current Bid
                      </span>
                      <span className='text-white group-hover:text-primary text-sm font-normal leading-none'>
                        BID 50 ETH
                      </span>
                    </div>
                  </div>
                  <div className='p-3 bg-gray-900 rounded-md transition duration-300 group hover:glow-cpt-primary'>
                    <div>
                      <Image
                        src='/imgs/cryptex/house-sun.jpg'
                        width={300}
                        height={300}
                        alt='house-sun'
                        className='rounded-md'
                      />
                    </div>
                    <div className='flex justify-between items-center gap-5 mt-3'>
                      <div className='flex justify-start items-center gap-2'>
                        <div className="w-8 h-8 rounded-md bg-[url('/imgs/cryptex/avatar-2.jpg')] bg-no-repeat bg-center bg-cover" />
                        <div className='relative rounded-md w-fit'>
                          <div className="w-8 h-8 rounded-md bg-[url('/imgs/cryptex/avatar-4.jpg')] bg-no-repeat bg-center bg-cover" />
                          <div className='absolute rounded-full bottom-0 -right-1 w-3 h-3 bg-teal-500 border border-white flex justify-center items-center'>
                            <BsCheck className='text-white text-base' />
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-start items-center gap-2'>
                        <div className='w-8 h-8 rounded-full bg-stone-900 flex justify-center items-center'>
                          <BsFillHeartFill className='text-gray-300 transition duration-300 group-hover:text-primary text-base' />
                        </div>
                        <span className='text-gray-300 text-sm font-normal'>
                          320 Likes
                        </span>
                      </div>
                    </div>
                    <div className='text-white transition duration-300 group-hover:text-primary text-lg font-medium mt-3'>
                      Dream Sequence Night
                    </div>
                    <div className='rounded-md bg-black flex justify-between items-center p-3 mt-3'>
                      <span className='text-white text-sm font-normal leading-none'>
                        Current Bid
                      </span>
                      <span className='text-white group-hover:text-primary text-sm font-normal leading-none'>
                        BID 50 ETH
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End of featured section */}
        </div>
      </main>
    </div>
  )
}
