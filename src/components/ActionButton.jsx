import React from 'react'

const ActionButton = ({ title, outlined, handleClick }) => {
  return (
    <button 
        className={
            outlined ? 'h-9 px-8 rounded-lg outline outline-2 outline-blue-800 bg-white items-center'
            : 'h-10 px-8 rounded-lg outline-none bg-blue-800 ml-3 items-center'
        }
        onClick={handleClick}
    >
        <p 
            className={
                outlined ? 'text-base font-medium capitalize text-blue-800'
                : 'text-base font-medium capitalize text-white'
            }
        >{title}</p>
    </button>
  )
}

export default ActionButton