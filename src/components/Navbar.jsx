import React from 'react'
import { Container, Box, Link, Breadcrumbs, Button } from '@mui/material'
import { ArrowDownwardOutlined, ChevronRightOutlined, Notifications, NotificationsActive } from '@mui/icons-material'
import Searchbar from './Searchbar'

const Navbar = () => {
  return (
        <div className='w-full flex p-4 bg-white border border-black justify-between items-center'>
            <div className='flex w-1/2'>
              <Breadcrumbs separator=">" aria-label='breadcrumb'>
                <Link key="1" color="inherit" href="/">Home</Link>
                <Link key="2" color="inherit" href="/">Dashboard</Link>
              </Breadcrumbs>
            </div>
            <div className='flex w-1/2 items-center'>
              <Searchbar/>
              <NotificationsActive color={"#9ca3af"} className='mx-10'/>
              <Button variant={"text"} sx={{display: 'flex', mx: 4}}>
                <span className='flex'>
                  <p className='capitalize'> Admin </p> 
                  <ChevronRightOutlined color='#9ca3af' sx={{rotate: '90deg', ml: 2}}/> 
                </span>
              </Button>
                
            </div>
        </div>
  )
}

export default Navbar