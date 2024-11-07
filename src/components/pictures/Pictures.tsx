import React from 'react'
import './Pictures.css'


const Pictures:React.FC = () => {
  return (
    <>
    
    <div className="pic-title">
        <h1 className='mb-4 text-4xl font-extrabold uppercase leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"'>You are so Pretty</h1>
    </div>
    <div className="pic-header">
        <div className="pic-content">
            <img src="/public/pretty1.jpg" alt="" />
        </div>
        <div className="pic-content">
            <img src="/public/pretty2.jpg" alt="" />
        </div>
        <div className="pic-content">
            <img src="/public/pretty3.jpg" alt="" />
        </div>
        <div className="pic-content">
            <img src="/public/pretty4.jpg" alt="" />
        </div>
        <div className="pic-content">
            <img src="/public/pretty5.jpg" alt="" />
        </div>
        <div className="pic-content">
            <img src="/public/pretty6.jpg" alt="" />
        </div>
        <div className="pic-content">
            <img src="/public/pretty7.jpg" alt="" />
        </div>
        <div className="pic-content">
            <img src="/public/pretty8.jpg" alt="" />
        </div>
    </div>
    </>
  )
}

export default Pictures