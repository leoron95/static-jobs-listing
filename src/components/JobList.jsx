
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
        {/* <div className='flex'> */}

        
        <div
            className={`flex flex-col md:flex-row   justify-between  container 
            mx-auto py-[20px] animate__animated animate__fadeIn  my-10 shadow-lg   relative bg-white rounded-[5px]  ${featured ? 'border-l-[5px] border-l-[#5ba4a4]' : '' }`}
            >

                {/* <div className='flex flex-col justify-between flex-shrink-1 md:flex-row'> */}

                

            <div className={`flex mt-3 flex-shrink-0  ${featured ? 'md:px-[31px]' : 'md:px-9'}`}>
                
                <div className=' flex flex-col md:w-[90px]  w-[50px] mr-4 absolute translate-x-3 -translate-y-14  md:relative md:-translate-x-0 md:-translate-y-0 '>

                <img src={logo} alt={`${company} logo`}/>
                </div>

                <div className='justify-between ml-4 job-details'>
                    <div className='flex company'>

                        <h1 className='text-[#5ba4a4] font-bold text-[11px]'>{company}</h1>

                        {
                            (isNew)
                            
                            &&
                            
                            <div className='job-news flex ml-[15px] bg-[#5ba4a4] text-white rounded-[30px] text-[10px] w-11 font-bold'>
                                <h5 className='self-center mx-auto '>NEW!</h5>
                            </div>
                        }

                        {
                            (featured)

                            &&

                            <div className='job-news flex ml-[7px] bg-black text-white rounded-[30px] text-[10px] w-[70px] font-bold'>
                                <h5 className='self-center mx-auto '>FEATURED</h5>
                            </div>
                        }

                        
                    </div>

                    <div className='flex my-[10px] font-bold hover:text-[#5ba4a4] cursor-pointer'>
                            <h1>{position}</h1>
                    </div>

                    <div className='flex justify-between text-[#7b8e8e] font-medium text-[13px] mb-4'>
                        <span>{postedAt}</span>
                        <span className='mx-2' >&#8226;</span>
                        <span>{contract}</span>
                        <span className='mx-2'>&#8226;</span>
                        <span>{location}</span>
                    </div>

                </div>
                
            </div>
            
            


        <div>
            <div className='flex mb-3 ml-3 mr-3 '>
                <div className='flex flex-wrap flex-grow-0  md:justify-end  border-t-[1px] border-t-[#7b8e8e] md:border-0 lg:mt-[25px] '>

                

                {
                    jobTags.map((tag, index) => (
                        <button value={tag} key={index} onClick={()=> filterTag(tag)} className='bg-[#eef6f6] text-[#5ba4a4] rounded-[5px] text-xs  font-bold hover:bg-[#5ba4a4] hover:text-white cursor-pointer mr-4 mb-4 pt-2 pb-[6px] px-2 my-2 ' >
                            {tag}
                        </button>
                    ))
                }
        </div>
            </div> 
                </div>
                    </div>
                    {/* </div> */}
                    {/* </div> */}
        
            </>
    )
}
