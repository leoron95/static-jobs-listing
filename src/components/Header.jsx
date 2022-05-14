import React from 'react'

export const Header = () => {
    return (
        <header 
        className='
            bg-[#5ba4a4]
            w-full 
            h-[150px]
           flex
            absolute
           '>

            {/* <div className= 'bg-[url(../../images/bg-header-desktop.svg)] w-full h-[150px] '  ></div> */}
            {/* <div className= 'md:bg-[url(../../images/bg-header-mobile.svg)]  h-[150px] '  ></div> */}
            <img src="../../images/bg-header-desktop.svg" alt="" className='w-full h-[150px] absolute ' />
            


        </header>
        
    )
}
