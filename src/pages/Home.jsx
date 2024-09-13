import React from 'react'

export default function Home() {
  return (
    <div>
         <div className="min-h-screen flex flex-col items-center text-white bg-slate-950 justify-center no-scroll p-6">
        <h1 className="text-3xl text-amber-600 font-bold mb-8  responsive-text">Welcome</h1>

        <div className="flex flex-col items-center text-center justify-center font-extrabold p-3 space-y-4 max-w-lg">
          <p className="responsive-text">Join us on this exciting journey.<br /> Mine <br /><span className='md:text-lg text-xxs'> Multi-Layered Autonomous Blockcahain Utility Token</span>  <br /> $MCT <br /> Join the evolution</p>
        </div>

        <button
          onClick=""
          className="outline outline-amber-600  text-amber-600 my-20 py-2 px-16 rounded-full hover:bg-gray-800 "
        > <span className='text-xl px-2 font-extrabold yeseva-one-regular'>
            Start
          </span>

        </button>
      </div>
    </div>
  )
}
