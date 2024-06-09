import React from 'react'
import banner from '../../public/Banner.png'

const Banner = () => {
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
            <div className='w-full order-2 md:order-1 md:w1/2 mt-12 md:mt-32'>
           <div className='space-y-12'>
           <h1 className='text-4xl font-bold'>Hello, Welcomes here to learn something <span className='text-pink-500'>new everyday!!!</span></h1>
            <p className='text-xl'>
            Welcome to Libretto, your sanctuary for timeless stories and boundless imagination.
             Dive into a curated collection of literary treasures that inspire, educate, and entertain. At Libretto,
             every page is a journey, and every book is a gateway to new worlds. Discover your next great read and let your adventure begin.
            </p>

            <label className="input input-bordered flex items-center gap-2">
  Email
  <input type="text" className="grow" placeholder="libretto@site.com" />
</label>
           </div>
           <button className="btn mt-6 btn-active btn-secondary">Secondary</button>
            </div>
            <div className='order-1 w-full md:w1/2'>
                <img src={banner} className='w-90 h-90 md:pt-20' alt="" />
            </div>
        </div>
      
    </>
  )
}

export default Banner
