import React from 'react'
import { Button } from '@mui/material'
import { Add, AddOutlined } from '@mui/icons-material'

const AddButton = ({ handleClick }) => {
  return (
    <div className='bg-white'>
        <Button variant={'outlined'} sx={{border: '1px solid #d1d5db', borderRadius: '6px'}} onClick={handleClick}>
            <p className='text-gray-500 font-medium capitalize'>Add Widget</p>
            <AddOutlined className='text-gray-500' fontSize='small' sx={{ml: 1}}/>
        </Button>
    </div>
  )
}

export default AddButton