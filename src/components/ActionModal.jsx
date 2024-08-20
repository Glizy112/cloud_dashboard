import React, { useState } from 'react'
import { Modal, Box, Typography, Checkbox } from '@mui/material'
import { CancelSharp, AddOutlined } from '@mui/icons-material';
import data from '../data.json';
import ActionButton from './ActionButton';

const style = {
    position: 'absolute',
    top: '50%',
    right: '-20%',
    float: 'end',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: '100%',
    bgcolor: 'background.paper',
    borderRadius: 4,
    //border: '2px solid #000',
    boxShadow: 24,
};

const ActionModal = (props) => {

  const [selected, setSelected] = useState(1);

  const handleSelect =(id)=> {
    setSelected(id);
  }

  return (
    <div>
        <Modal
            open={props?.isOpen}
            onClose={props?.onClose}
        >
            <>
                <Box sx={style}>
                    <div className='flex flex-row justify-between items-center p-4 bg-blue-800'>
                        <p className='text-base font-medium text-white'> Add Widget </p>
                        <button onClick={props?.onClose}>
                            <CancelSharp className='text-white cursor-pointer' fontSize='medium'/>
                        </button>
                    </div>
                    <p className='text-base font-medium m-4'>Personalize your dashboard by adding the following widget</p>
                    <div className='flex flex-row items-start mx-4 my-6'>
                        {
                            props?.data.map(item=> (
                                <div key={item.id} className='flex flex-col items-center mr-8 cursor-pointer' onClick={()=> handleSelect(item.id)}>
                                    <p 
                                        className={
                                            selected===item.id ? 'text-base font-semibold text-blue-800'
                                            : 'text-base font-semibold text-gray-500'
                                        }
                                    > {item.name} </p>
                                    {
                                        selected === item.id && <div className='w-12 border-2 border-blue-800'/>
                                    }
                                </div>
                            ))
                        }
                    </div>
                    {/* Widgets Section Starts */}
                    <div className='mx-4 my-6 items-center'>
                        {
                            selected &&
                            props?.data?.filter(item=> item.id===selected)[0]?.widgets?.map(i=> (
                                <div key={i.id} className='w-full flex flex-row items-center p-1 my-2 border border-gray-500 rounded'>
                                    <Checkbox/>
                                    <p className='text-base font-medium text-gray-600 mx-2'> {i.name} </p>
                                </div>
                            ))
                        }
                        {/* <div className='w-1/2 h-20 flex flex-row justify-center items-center p-1 my-2 border border-gray-500 rounded'>
                            <AddOutlined className='text-gray-500' fontSize='small'/>
                            <p className='text-base font-medium text-gray-600 mx-2'> Add Widget </p>
                        </div> */}
                    </div>
                    {/* Widgets Section Ends */}
                    <div className='absolute bottom-6 right-8 flex flex-row items-center'>
                        <ActionButton title="Cancel" outlined={true} handleClick={props?.onClose}/>
                        <ActionButton title="Confirm" outlined={false} handleClick={props?.onClose}/>
                    </div>
                </Box>
            </>
        </Modal>
    </div>
  )
}

export default ActionModal