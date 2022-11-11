import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import OrangeCherry from '../components/cherry'
export default function Home() {
  return (
    <div className='bg-teal-100 h-screen w-screen'>
      <h1 className='text-7xl text-red-600'>hi</h1>
      <h2>aa</h2>
      {/* <OrangeCherry /> */}
        <div className='transition-all duration-75 scale-[0.8] ' id="earth" >
            {/* <div className='w-1/2 h-1/2 absolute'></div> */}
            <OrangeCherry/>
        </div>
    </div>
  )
}
