import React from 'react'
import { Button, Divider } from '@mui/material'
import { WatchLater } from '@mui/icons-material'

const DateSelect = () => {
  return (
    <div className='flex items-center'>
        <WatchLater/>
        <div className='mx-1 h-6 border border-black'/>
        <select defaultValue={2} className='outline-none'>
                <option value={2}> Last 2 days </option>
                <option value={7}> Last 7 days </option>
                <option value={14}> Last 14 days </option>
        </select>
    </div>
  )
}

export default DateSelect