import React from 'react'
import bellIcon from '/bellIcon.svg'
import coinIcon from '/coinIcon.svg'
import dropDownIcon from '/dropDownIcon.svg'
import jobIcon from '/jobIcon.svg'
import messageIcon from '/messageIcon.svg'
import avatarImg from '/avatar.png'



function Nav() {
  return (
    <div className='w-[1664px] bg-zinc-800 flex items-center relative h-[61px] top-6 left-10'>
        <div className='logo w-[100px] h-[61px] px-[9px] py-7 flex items-center justify-center  bg-[#E7E7E7] '>
            <h3 className='w-[47px] h-[27px] text-xl text-left font-bold text-[#DC4A2D]'>Logo</h3>
        </div>
        <div className="links rounded-[36px] border-[#D1D1D1] p-6 border-[0.5px] w-[538px] h-[74px] bg-zinc-100 flex items-center justify-between">
            <div className='jobs rounded-[49px] bg-[#DC4A2D] w-[109px] h-[58px] border-2 border-[#FCB4A5] top-2 left-2 flex items-center justify-center'>
                <img src={jobIcon} alt="" />
                <h3 className='w-[47px] h-[27px] font-medium text-xl text-left text-white'>Jobs</h3>
            </div>
            <div className='messages w-32 h-[27px]'>
                <img src={messageIcon} alt="" />
                <h3 className=' h-[27px] w-24 font-medium text-xl text-left text-[#B0B0B0]'>Messages</h3>
            </div>
            <div className='payments  w-32 h-[27px]'>
                <img src={coinIcon} alt="" />
                <h3 className=' h-[27px] w-24 font-medium text-xl text-left text-[#B0B0B0]'>Payments</h3>
            </div>
        </div>
        <div className="rightMost w-[100px] h-[61px] p-[10px] flex items-center justify-center">
            <img className='bellIcon' src={bellIcon} alt="" />
            <div className="avatar w-[66px] h-10">
                <img className='avatarIcon' src={avatarImg} alt="" />
                <img className='dropDownIcon' src={dropDownIcon} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Nav


// width: 109px;
// height: 58px;
// top: 8px;
// left: 8px;
// gap: 0px;
// border-radius: 49px 0px 0px 0px;
// border: 2px 0px 0px 0px;
// opacity: 0px;

// border: 2px solid #FCB4A5
