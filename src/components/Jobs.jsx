import React from 'react'
import jobData from '../../data.json'
import { JobList } from './JobList'


export const Jobs = ({filterTag, filter}) => {


    return (
        <div className='container mx-auto'>

            { (filter.length === 0) &&
            
            
                jobData.map( jobs => (
                    <JobList
                        key={jobs.id}
                        isNew={jobs.new}
                            {...jobs}
                            filterTag={filterTag}
                    />
                ))

                }

             
            </div>
    )
}
