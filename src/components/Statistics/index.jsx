import React from 'react'
import StatisticsDisplay from './../StatisticDisplay/index.jsx'

const index = () => {
  return (
    <div className='flex flex-col gap-8 flex-start'>
        <h3 className="text-neutral-600 text-lg font-semibold leading-loose">In the last 30 days,</h3>
        <div className='flex flex-row justify-between w-full gap-3'>
            <StatisticsDisplay title='Art sales' value='30,000' />
            <StatisticsDisplay title='New artists' value='250' />
            <StatisticsDisplay title='Revenue generated' value='$400,000' />
        </div>
    </div>
  )
}

export default index