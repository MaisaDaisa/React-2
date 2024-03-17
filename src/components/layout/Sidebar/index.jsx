import React from 'react'
import Logo from './../../../assets/images/Logo.svg'
import Dashboard from './../../../assets/images/category.svg'
import Artists from './../../../assets/images/profile.svg'
import Projects from './../../../assets/images/gallery.svg'
import Sales from './../../../assets/images/receipt-2.svg'
import Setting from './../../../assets/images/setting-2.svg'
import Logout from './../../../assets/images/logout.svg'
import SidebarNavLink from "../../SidebarNavLinks";

const Sidebar = () => {
  return (
    <div className='flex flex-start flex-col min-h-dvh max-h-max sidebar-background gap-24 pt-12 px-6'> 
      <div className='mr-12'>
        <img src={Logo} alt=""  className='w-full'/> 
      </div>
      <div className='flex flex-start flex-col gap-5'>
        <SidebarNavLink source={Dashboard} title='Dashboard' />
        <SidebarNavLink source={Artists} title='Artists' />
        <SidebarNavLink source={Projects} title='Projects' />
        <SidebarNavLink source={Sales} title='Sales' />
      </div>
      <div className='flex flex-start flex-col gap-5 ml-2'>
        <SidebarNavLink source={Setting} title='Settings' givenClassName='default' allowHover={false}/>
        <SidebarNavLink source={Logout} title='Logout' givenClassName='logout-red' allowHover={false}/>
      </div>
      <div></div>
    </div>
  )
}

export default Sidebar