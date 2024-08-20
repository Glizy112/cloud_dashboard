import React from 'react'
import { Box, TextField } from '@mui/material'
import { Search } from '@mui/icons-material'

const Searchbar = () => {
  return (
    <div className='w-1/2 px-1 py-1 border-2 border-slate-300 rounded-md items-center text-center'>
        <Search color={'rgba(203,213,225,0.5)'}/>
        <input
            name='searchbar'
            placeholder='Search anything...'
            className='mx-2 w-5/6 outline-none'
        />
    </div>
  )
}

export default Searchbar