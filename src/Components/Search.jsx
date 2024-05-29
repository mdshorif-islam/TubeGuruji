
import { useState } from 'react';
import banner from './../assets/Images/banner.jpg'
import { IoSearch } from "react-icons/io5";
function Search() {
  const tags=[
    {
        id:1,
        name:'All',
    },
    {
        id:2,
        name:'React',
    },
    {
        id:3,
        name:'React Native',
    },
    {
        id:4,
        name:'Angular',
    },
    {
        id:5,
        name:'UI/UX',
    },
]

const [activeIndex, setActiveIndex]=useState(0);

  return (
    <div className='flex justify-center mt-7 flex-col px-16 md:px-40'>
      <img src={banner} className='rounded-2xl ' alt="" />
      <div className='  bg-slate-100 shadow-lg p-5 rounded-lg mt-[-20px]  mx-28 flex items-center'>
      <IoSearch className=' text-[20px] text-gray-500' />
        <input type="text" placeholder='Search'
        className=' outline-none ml-2' />
      </div>
      <div className='flex  gap-10 justify-center mt-5 '>
      {tags.map((item,index)=>(
                <ul onClick={()=>setActiveIndex(index)} className={`${index==activeIndex?' bg-red-500 text-white': null} p-2 pb-3 rounded-sm md:rounded-full md:px-4 hover:scale-110 hover:border-[2px] border-red-500 transition-all duration-100 ease-in-out`}>
                  <li className=' cursor-pointer'>{item.name}</li>
                </ul>
            ))}
      </div>
    </div>
  )
}

export default Search