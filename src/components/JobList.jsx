
import React from 'react'

export const JobList = ({
    company,
    logo,
    isNew,
    featured,
    position,
    postedAt,
    contract,
    location,
    filterTag,
    jobTags
}) => {

    return (
        <>
        
        <div
            className={` container 
            mx-auto py-[20px] pr-[50px] bg-white flex items-center justify-between my-5 shadow-lg  relative rounded-[5px] ${featured ? 'border-l-[5px] border-l-[#5ba4a4]' : '' }`}
            >

            <div className={`flex ${featured ? 'px-[31px]' : 'px-9'}`}>
                <img src={logo} alt="" className='mr-4 w-[75px]' />

                <div className='job-details flex-row justify-between'>
                    <div className='company flex '>

                        <h1 className='text-[#5ba4a4] font-bold text-[11px]'>{company}</h1>

                        {
                            (isNew)
                            
                            &&
                            
                            <div className='job-news flex ml-[15px] bg-[#5ba4a4] text-white rounded-[30px] text-[9px] w-10 font-bold'>
                                <h5 className='mx-auto self-center '>NEW!</h5>
                            </div>
                        }

                        {
                            (featured)

                            &&

                            <div className='job-news flex ml-[7px] bg-black text-white rounded-[30px] text-[9px] w-16 font-bold'>
                                <h5 className='mx-auto self-center '>FEATURED</h5>
                            </div>
                        }

                        
                    </div>

                    <div className='position flex my-[10px] font-bold hover:text-[#5ba4a4] cursor-pointer'>
                            <h1>{position}</h1>
                    </div>

                    <div className='flex justify-between text-[#7b8e8e] font-medium text-[13px]'>
                        <span>{postedAt}</span>
                        <span className='mx-2' >&#8226;</span>
                        <span>{contract}</span>
                        <span className='mx-2'>&#8226;</span>
                        <span>{location}</span>
                    </div>

                </div>
                
            </div>
            
            
            <div className='mb-[10px] '>

                {
                    jobTags.map((tag, index) => (
                        <button value={tag} key={index} onClick={()=> filterTag(tag)} className='bg-[#effafa] text-[#5ba4a4] rounded-[5px] text-[11px]  font-bold hover:bg-[#5ba4a4] hover:text-white cursor-pointer mx-[5px] py-[8px] px-[5px]' >
                            {tag}
                        </button>
                    ))
                }

            </div> 
            </div>
        
            </>
    )
}
