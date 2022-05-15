import React from 'react'
import './index.css'
import { Header } from './components/Header'
import { Jobs } from './components/Jobs'

export const JobsListingApp = () => {


    return (
        <>
            <div className=' flex mx-auto justify-center'>
                <Header/>
            </div>
                <Jobs />
        </>
    )
}
