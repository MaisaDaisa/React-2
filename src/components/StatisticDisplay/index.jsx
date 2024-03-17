import React from 'react'
import './StatisticDisplay.css'

const index = ({value, title}) => {
  return (
    <div className='statistic-background p-3 rounded-md w-60'>
        <h2 className="text-white text-2xl font-semibold font-['Manrope'] leading-normal mt-3"> {value} </h2>
        <h4 className="text-white text-xs font-normal font-['Manrope'] leading-normal mt-2">{title}</h4>
    </div>
  )
}

export default index