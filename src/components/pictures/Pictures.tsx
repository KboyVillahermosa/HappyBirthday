import React from 'react'
import './Pictures.css'


const Pictures:React.FC = () => {
  return (
    <>
    <section id='pic'>
    <div className="fixed inset-0 -z-10 overflow-hidden">
    <svg
      aria-hidden="true"
      className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
    >
      <defs>
        <pattern
          x="50%"
          y={-1}
          id="e813992c-7d03-4cc4-a2bd-151760b470a0"
          width={200}
          height={200}
          patternUnits="userSpaceOnUse"
        >
          <path d="M100 200V.5M.5 .5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
        <path
          d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
          strokeWidth={0}
        />
      </svg>
      <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
    </svg>
  </div>
    <div className="pic-title">
        <h1 className='mb-4 text-4xl font-extrabold uppercase leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"'><span className='text-[#FFE700]'>You </span> <span className='text-[#00FF9C]'>are</span> <span className='text-[#F5004F]'>so </span><span className='text-[#7E3AF2]'>Pretty</span></h1>
    </div>
    <div className="pic-header">
        
        <div className="pic-content">
            <img src="/pretty1.jpg" alt="" />
        </div>
        <div className="pic-content">
            <img src="/pretty2.jpg" alt="" />
        </div>
        <div className="pic-content">
            <img src="/pretty3.jpg" alt="" />
        </div>
        <div className="pic-content">
            <img src="/pretty4.jpg" alt="" />
        </div>
        <div className="pic-content">
            <img src="/pretty5.jpg" alt="" />
        </div>
        <div className="pic-content">
            <img src="/pretty6.jpg" alt="" />
        </div>
        <div className="pic-content">
            <img src="/pretty7.jpg" alt="" />
        </div>
        <div className="pic-content">
            <img src="/pretty8.jpg" alt="" />
        </div>
        <div className="pic-content">
            <img src="/new1.jpg" alt="" />
        </div>
        <div className="pic-content">
            <img src="/new2.jpg" alt="" />
        </div>
        <div className="pic-content">
            <img src="/new3.jpg" alt="" />
        </div>
        <div className="pic-content">
            <img src="/new4.jpg" alt="" />
        </div>
        <div className="pic-content">
            <img src="/new5.jpg" alt="" />
        </div>
        <div className="pic-content">
            <img src="/new6.jpg" alt="" />
        </div>
        <div className="pic-content">
            <img src="/new7.jpg" alt="" />
        </div>
    </div>
    </section>
    </>
  )
}

export default Pictures