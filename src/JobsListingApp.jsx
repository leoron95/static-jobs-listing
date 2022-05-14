import React, { useState } from 'react'
import './index.css'
import { Header } from './components/Header'
import { Jobs } from './components/Jobs'
import  {JobsBar}  from './components/JobsBar'




export const JobsListingApp = () => {

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

    // console.log(jobFilter(filter));

    return (
        <>

            <div className=' flex mx-auto justify-center'>

                <Header/>

                {
                  (filter.length > 0 ) && ( <JobsBar  filter={filter} clearAll={clearAll} clearFilter={clearFilter}/>)
                }

            </div>
                <div className={`${filter.length === 0 ? 'mt-52' : ''}`}>
                  <Jobs filterTag={filterTag} filter={filter}  />

                </div>

        </>
    )
}
