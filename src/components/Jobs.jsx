import React, { useState } from 'react'
import jobData from '../../data.json'
import { filterJobs } from '../helper/filterJobs'
import { JobList } from './JobList'
import { JobsBar } from './JobsBar'


export const Jobs = () => {

const [filter, setfilter] = useState([])

const filterTag = (tag) => {
    if(!filter.includes(tag) ) {

  // add tag to filter array
        setfilter(prevValue => [...prevValue, tag])
    }
}

  // clear filters array
    const clearAll = () => {
        setfilter([])
    }

  // Clear selected filter from array
    const clearFilter = (tag) => {
        setfilter(filter.filter(item => item !== tag))
    }


    return (
        <div className={`${filter.length === 0 ? 'mt-52' : ''}`}>

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

{ 
            jobData.map( (jobs) => {

                const jobTags = [jobs.role, jobs.level, ...(jobs.languages) || [], ...(jobs.tools) || []]

                const job = filterJobs(jobTags, filter)
                console.log(jobTags);

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
    )
}
