import React from 'react'
import AllDoctors from '../../Components/AllDoctors/AllDoctors'
import { useLoaderData } from 'react-router'

const Home = () => {
    const allDoctorsData = useLoaderData();
  return (
    <div className='max-w-7xl mx-auto'>
        <AllDoctors allDoctorsData={allDoctorsData}></AllDoctors>
    </div>
  )
}

export default Home