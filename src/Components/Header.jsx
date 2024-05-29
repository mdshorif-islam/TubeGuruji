import logo from './../assets/Images/logo.png';
import {IoLogoYoutube}  from "react-icons/io5";

function Header() {
  return (
    <div className='flex justify-between items-center'>
        <img src={logo} className='w-[180px] cursor-pointer' alt="" />
        <ul className='flex gap-5 md:gap-12'>
            <li className='hover:font-bold cursor-pointer'>Home</li>
            <li className='hover:font-bold cursor-pointer'>About Us</li>
            <li className='hover:font-bold cursor-pointer'>Contact Us</li>
        </ul>
        <button className=' focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 flex items-center'>Subscribe <IoLogoYoutube className='ml-3 text-[20px]'></IoLogoYoutube>  </button>
    </div>
  )
}

export default Header