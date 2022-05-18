import React, { useState } from 'react'
import jobData from '../../data.json'
import { filterJobs } from '../helper/filterJobs'
import { JobList } from './JobList'
import { JobsBar } from './JobsBar'

export const Jobs = () => {

const [filter, setfilter] = useState([])

const filterTag = (tag) => {
    if(!filter.includes(tag) ) {

        setfilter(prevValue => [...prevValue, tag])
    }
}
    const clearAll = () => {
        setfilter([])
    }

    const clearFilter = (tag) => {
        setfilter(filter.filter(item => item !== tag))
    }

    return (
        <div className={`w-4/5 max-w-md md:max-w-[720px] md:w-full lg:max-w-[960px] xl:max-w-full xl:w-[1200px]  2xl:max-w-full mx-auto animate__animated animate__fadeIn   `}>

            <div className={`-translate-y-9 ${filter.length === 0 ? 'mb-10' : ''} `}>
            {
            (filter.length > 0 ) && 
            (
            <JobsBar 
                filter={filter} 
                clearAll={clearAll} 
                clearFilter={clearFilter}
            />
            )
        }
            </div>

        <div>
        
{ 
            jobData.map( (jobs) => {

                const jobTags = [jobs.role, jobs.level, ...(jobs.languages) || [], ...(jobs.tools) || []]

                const job = filterJobs(jobTags, filter)


                return filter.length === 0 ? 
                (
                <JobList
                    key={jobs.id}
                    isNew={jobs.new}
                    filterTag={filterTag}
                    jobTags={jobTags}
                    {...jobs}
                />
            )

            :

            ( job && 
                (
                    <JobList
                    key={jobs.id}
                    isNew={jobs.new}
                    filterTag={filterTag}
                    jobTags={jobTags}
                    {...jobs}
                />
            ))

            })}
</div>
            </div>
    )
}