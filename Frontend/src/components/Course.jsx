import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards';
import { Link } from 'react-router-dom';

function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl font-semibold md:text-4xl'>We're delighted to have you <span className='text-pink-500'> here!</span> </h1>
            <p className='mt-12'>
Welcome to Libretto Course, your gateway to a
 world of knowledge and discovery. Our curated selection 
 of courses is designed to inspire and educate,
  offering you the tools to expand your horizons and achieve your goals. 
  Whether you're looking to develop new skills, delve into a passion project, 
  or simply enrich your mind, Libretto Course has something for everyone. Join us on this journey of lifelong learning and unlock your
 full potential with our expertly crafted content. 
            </p>

            <Link to='/'>
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
                Back
                </button>
            </Link>


        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
            {
                list.map((item)=>(
                    <Cards key={item.id} item={item}/>
                ))
            }
        </div>

      </div>
    </>
  );
}

export default Course
