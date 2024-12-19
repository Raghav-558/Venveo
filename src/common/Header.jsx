import React, { useState, useEffect } from 'react'
import logo from '../assets/images/logo.webp'
import { NAV_LIST } from '../utils/helper'
import { ButtonArrow, SearchIcon } from '../utils/icons'

const Header = ({ myClass }) => {
  const [open, setOpen] = useState()
  useEffect(() => {
    const handleOverflow = () => {
      if (open && window.innerWidth < 770) {
        document.body.classList.add('overflow-hidden')
      } else {
        document.body.classList.remove('overflow-hidden')
      }
    }
    handleOverflow()
    window.addEventListener('resize', handleOverflow)
    return () => {
      window.removeEventListener('resize', handleOverflow)
    }
  }, [open])
  return (
    <div className='max-w-[1358px] mx-auto pt-[30px] max-lg:pt-6 max-sm:pt-4 max-lg:flex max-lg:items-center max-lg:justify-between'>
      <div className=' max-w-max'>
        <a href='#logo' className='relative z-10'>
          <img
            src={logo}
            alt='venveo-logo'
            className='h-[90px] max-lg:h-14 max-sm:h-16'
          />
        </a>
      </div>
      <div className={`flex items-center ${myClass} max-lg:hidden `}>
        <div className='bg-white relative z-10 py-7 flex item-center gap-[42px] max-lg:gap-5  pl-[41.79px] pr-[29.5px]'>
          {NAV_LIST.map((obj, i) => (
            <select
              key={i}
              name='venveo'
              id='myLink'
              className='text-[15px] leading-[15px] font-maisonMedium outline-none cursior-pointer'
            >
              <option value={obj.title}>{obj.title}</option>
              <option value={obj.OptionOne}>{obj.OptionOne}</option>
              <option value={obj.OptionTwo}>{obj.OptionTwo}</option>
              <option value={obj.OptionThree}>{obj.OptionThree}</option>
            </select>
          ))}
          <div>
            <a href='#search' className='search-icon group'>
              <SearchIcon
                myclass='group-hover:fill-dark-green transition-all duration-300'
                stroke='group-hover:stroke-dark-green transition-all duration-300'
              />
            </a>
          </div>
        </div>
        <button className='flex items-center leading-[15px] font-semibold py-[32.5px] px-[31.63px] bg-neon gap-[5px] text-[15px] font-maisonDemi transition-all duration-300 hover:bg-black hover:text-neon right-arrow'>
          Let's Talk <ButtonArrow/>
        </button>
      </div>
      <div
        className={`lg:hidden z-30 cursor-pointer`}
        onClick={() => setOpen(!open)}
      >
        <div
          className={`flex flex-col gap-3 items-center ${
            open
              ? '!gap-0 transition-all duration-300'
              : 'transition-all duration-300'
          }`}
        >
          <div
            className={`h-[2px] bg-white w-8 transition-all duration-300 rounded-lg ${
              open ? 'rotate-[50deg] origin-center' : ''
            } `}
          ></div>
          <div
            className={`h-[2px] bg-white w-8 transition-all duration-300 rounded-lg ${
              open ? '-rotate-[53deg] origin-center' : ''
            } `}
          ></div>
        </div>
      </div>
      <div
        className={`w-full h-full bg-darkGreen transition-all duration-500 left-0 lg:-top-full z-20 fixed flex flex-col bg-white justify-center items-center ${
          open ? 'top-0 left-0' : '-top-full'
        }`}
      >
        <div className='relative z-10 flex flex-col item-center justify-center text-center gap-7'>
          {NAV_LIST.map((obj, i) => (
            <select
              key={i}
              name='venveo'
              id='myLink'
              className='text-[15px] text-black leading-[15px] font-maisonMedium outline-none max-lg:mx-auto bg-transparent cursior-pointer'>
              <option value={obj.title}>{obj.title}</option>
              <option value={obj.OptionOne}>{obj.OptionOne}</option>
              <option value={obj.OptionTwo}>{obj.OptionTwo}</option>
              <option value={obj.OptionThree}>{obj.OptionThree}</option>
            </select>
          ))}
          <a href='#search' className='search-icon group max-lg:mx-auto'>
            <SearchIcon
              myclass='group-hover:fill-dark-green transition-all duration-300'
              stroke='group-hover:stroke-dark-green transition-all duration-300'
            />
          </a>
          <button className='bg-neon flex items-center max-lg:py-[20.5px] py-[32.5px] px-[31.63px] bg-lemon gap-[5px] text-[15px] font-maisonDemi leading-[15px] font-semibold transition-all duration-300 hover:bg-black hover:text-neon right-arrow'>
            Let's Talk <ButtonArrow/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
