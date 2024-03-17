import React from 'react'
import Searchbar from '../../SearchBar/Searchbar'
import Statistics from '../../Statistics'
import TableSection from '../TableSection'

const MiddleSection = () => {
  return (
    <div className='flex flex-col flex-start p-8 gap-20 pt-16'>
        <Searchbar customClassName="p-4" placeholder="Search artists, projects" textSize="text-md"/>
        <Statistics />
        <TableSection />
    </div>
  )
}

export default MiddleSection