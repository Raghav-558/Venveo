import React from 'react'

const CustomButton = ({ buttonText, myClass }) => {
  return (
    <button className={`${myClass}  bg-neon hover:bg-black hover:text-white transtion-all duration-300`}>
      {buttonText}
    </button>
  )
}

export default CustomButton
