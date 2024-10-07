import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[20%] w-screen aspect-video px-16 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/3'>{overview}</p>
        <div className='mt-10'>
            <button className='bg-white p-4 px-10 text-black text-lg rounded-lg hover:bg-opacity-80 '>▶️ Play</button>
            <button className='mx-2 bg-gray-500 p-4 px-10 text-white text-lg rounded-lg bg-opacity-60'>🛈 More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;