import React from 'react'

export const JobsBar = ({filter , clearAll, clearFilter}) => {

    return (
        <div className=' container mx-auto relative py-[20px] bg-white flex items-center justify-between mt-28  shadow-lg   pl-[35px] pr-[55px] rounded-[5px] '>

            <div className='flex'>
            
            {
                filter.map( (tag, index) => (
                    <div key={index} className='mr-[30px] '>
                        <div  className='container bg-[#effafa] items-center flex w-fit'>
                        <span className='bg-[#effafa] text-[#5ba4a4] rounded-[5px] text-[11px] items-center font-bold mr-[5px] flex '>
                            {tag}
                        </span>
            
            
                        <button onClick={() => clearFilter(tag)}>
                            <i className='fa-solid fa-xmark bg-[#5ba4a4] text-white hover:bg-black text-base w-[20px]  flex text-[15px] justify-center rounded-r-[5px] cursor-pointer' ></i>
                        </button>
                    </div>
                    </div>
        
                    
                    ))
            }
            </div>


            <div className='flex justify-end'>
            <button onClick={clearAll}>
                    <p className='text-[12px] text-[#5ba4a4] font-bold cursor-pointer hover:underline '>
                        Clear
                    </p>
                </button>
            </div>
                
            </div>
    )
}
