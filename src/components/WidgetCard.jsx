import React from 'react'
import { Box, Button } from '@mui/material'
import { AddOutlined, CancelOutlined, CancelSharp, DeleteOutlined } from '@mui/icons-material'

const WidgetCard = (props) => {
  return (
    <Box 
        display={'flex'}
        key={props?.addItem ? props?.idx : props?.item.id} 
        p={2} 
        alignItems={props?.addItem ? 'center' : 'flex-start'}
        //textAlign={'center'}
        justifyContent={props?.addItem ? 'center' : 'flex-start'} 
        boxShadow={'2px 4px 10px 2px #f1f5f9'} 
        height={240} 
        borderRadius={4} 
        sx={{bgcolor: 'white'}}
    >
        {   !props?.addItem ?
            <div className='w-full h-full text-center'>
                <div className='flex flex-row justify-between items-center'>
                    <h1 className='text-base font-bold text-black'>{props?.item.name}</h1>
                    <button onClick={props?.handleDelete}>
                        <CancelSharp className='text-red-600 cursor-pointer' fontSize='medium'/>
                    </button>
                </div>
                <p className='text-base font-medium text-gray-700 m-12'> {props?.item.text} </p>
            </div>
            :
            <div className='bg-white'>
                <Button variant={'outlined'} sx={{border: '1px solid #d1d5db', borderRadius: '6px'}} onClick={props?.handleClick}>
                    <AddOutlined className='text-gray-500' fontSize='small' sx={{ml: 1}}/>
                    <p className='text-gray-500 font-medium capitalize'>Add Widget</p>
                </Button>
            </div>
        }
    </Box>
  )
}

export default WidgetCard