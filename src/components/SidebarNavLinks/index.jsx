import React from 'react'

const SidebarNav = ({source, title, givenClassName} ) => {
  return (
    <a href="#" className={`${givenClassName} flex gap-4 text-2xl unselected-text`}>
        <img src={source} alt={source} />
        <p className={givenClassName}>{title}</p>
    </a>
  )
}

export default SidebarNav