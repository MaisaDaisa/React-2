import React from 'react'

const index = ({imgSrc, name, sales, revenue}) => {
  return (
    <div className='flex flex-row gap-10 items-center justify-between'>
        <div className='flex flex-row flex-nowrap justify-start items-center gap-2'>
            <img src={imgSrc} alt="Profile" className='w-8 h-8 rounded-full'/>
            <p className='text-sm font-semibold'>{name}</p>
        </div>
        <p className='text-sm font-normal text-unselected-text'>{sales}+ sales</p>
        <p className='text-sm font-normal text-unselected-text'>${revenue} revenue</p>
    </div>
  )
}

export default index