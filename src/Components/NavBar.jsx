import React from 'react'
import bellIcon from '/bellIcon.svg'
import coinIcon from '/coinIcon.svg'
import dropDownIcon from '/dropDownIcon.svg'
import jobIcon from '/jobIcon.svg'
import messageIcon from '/messageIcon.svg'
import avatarImg from '/avatar.png'



const Navbar = () => {
    const navigationItems = [
      { name: 'Jobs', icon: jobIcon },
      { name: 'Payment', icon: coinIcon },
      { name: 'Message', icon: messageIcon }
    ];
  
    return (
      <div className='flex items-center justify-between px-[40px] py-[24px]'>
        {/* logo */}
        <div className='logo w-20 h-12 md:w-[100px] md:h-[61px] px-[9px] py-7 flex items-center justify-center  bg-[#E7E7E7] '>
          <h1 className=' text-lg sm:text-xl text-[#DC4A2D] font-bold'>Logo</h1>
        </div>
        {/* navigation */}
        <div className='flex gap-[80px] border-[#D1D1D1] border-2 p-2 rounded-[36px]'>
          {navigationItems.map((item, index) => {
            return (
              <div
                key={index}
                className={item.name === 'Jobs' 
                  ? 'flex items-center gap-2 px-4 py-2 bg-[#DC4A2D] text-white rounded-[50px]'
                  : 'flex items-center gap-2 px-4 py-2'
                }
              >
                <img src={item.icon} alt={item.name} width={20} height={20} />
                <p className={item.name === 'Jobs' ? 'text-[20px] text-white' : 'text-[20px] text-[#B0B0B0]'}>
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
  
        {/* profile */}
        <div className='flex gap-4'>
          <img src={bellIcon} width={23} height={25} className='object-contain cursor-pointer' alt='notification'/>
          <img src={avatarImg} width={40} height={40} className='object-contain cursor-pointer' alt='companylogo'/>
          <img src={dropDownIcon} width={20} height={20} className='object-contain cursor-pointer' alt='dropdown menu'/>
        </div>
      </div>
    );
  };
  
  export default Navbar;