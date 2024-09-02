import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
    
    <div className='text-center text-2xl pt-10 border-t'>
    <Title text1={'CONTACT'} text2={'US'}/>
    </div>

    <div className='my-20 flex flex-col justify-center md:flex-row gap-10 md-28'>
    <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
    <div className='flex flex-col justify-center items-start gap-6'>
     <p className='font-semibold text-xl text-gray-600'>Our Store</p>
     <p className='text-gray-500'>No 45, Pallikaranai, <br /> Chennai - 600100..</p>
     <p className='text-gray-500'>ph: +91 7358047810 <br />email: muruganmanoj590@gmail.com</p>
     <p className='font-semibold text-xl text-gray-600'>Carrers at forever</p>
     <p className='text-gray-500'>Learn more about our company and products.</p>
     <p className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Products</p>
    </div>
    
    </div>

    <NewsLetterBox />
    </div>
  )
}

export default Contact