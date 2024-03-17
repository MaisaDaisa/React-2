import React from 'react'

const SidebarNav = ({source, title, givenClassName, allowHover} ) => {
  return (
    <a href="#" className={`${givenClassName} flex gap-4 text-2xl text-unselected-text rounded-md p-2 ${ allowHover === false ? " " : "hover:text-default hover:bg-nature-green"}`}>
        <img src={source} alt={source} />
        <p className={givenClassName}>{title}</p>
    </a>
  )
}

export default SidebarNav