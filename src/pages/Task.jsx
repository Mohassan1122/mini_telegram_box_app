import React from 'react'
import { Link } from 'react-router-dom';
import { SiTelegram } from "react-icons/si";

function Task() {
  return (
    <div>
      <div className="min-h-screen flex flex-col mt-16 items-center text-white bg-slate-950 no-scroll p-6">
        <div className='mb-12'>
          <p className="items-center text-center yeseva-one-regular leading-tight text-sm text-gray-300">Complete the task to earn moe $MCT token, all task carried out will be checked and validated, as it might be criteria for airdrop claiming </p>
        </div>

        <div className="flex flex-col items-center text-center justify-center font-extrabold">
          <div className="flex justify-between text-center space-x-3 yeseva-one-regular">
            <div className="text-4xl text-amber-500">
              <span className=""><SiTelegram /></span>
            </div>
            <div className="text-xs">
              <span className="">Join MCT Telegram Channel</span>
            </div>
            <div className="text-amber-500 text-xs">
              <span className="">0.008MCT</span>
            </div>
            <div className="text-green-400">
            <Link to="https://web.telegram.org/a/" className='text-sm'>Start</Link>
              
            </div>
          </div>

          <div className="flex justify-between mt-6 text-center space-x-3 yeseva-one-regular">
            <div className="text-4xl text-amber-500">
              <span className=""><SiTelegram /></span>
            </div>
            <div className="text-xs">
              <span className="">Join MCT Telegram Group</span>
            </div>
            <div className="text-amber-500 text-xs">
              <span className="">0.008MCT</span>
            </div>
            <div className="text-green-400">
               <Link to="https://web.telegram.org/a/" className='text-sm'>Start</Link>
            </div>
          </div>

          <div className="flex justify-between mt-6 text-center space-x-3 yeseva-one-regular">
            <div className="text-4xl text-amber-500">
              <span className=""><SiTelegram /></span>
            </div>
            <div className="text-xs">
              <span className="">Join MCT twitter handle</span>
            </div>
            <div className="text-amber-500 text-xs">
              <span className="">0.008MCT</span>
            </div>
            <div className="text-green-400">
               <Link to="https://web.telegram.org/a/" className='text-sm'>Start</Link>
            </div>
          </div>

          <div className="flex justify-between mt-6 text-center space-x-3 yeseva-one-regular">
            <div className="text-4xl text-amber-500">
              <span className=""><SiTelegram /></span>
            </div>
            <div className="text-xs">
              <span className="">Like,Repost MCT twiter post</span>
            </div>
            <div className="text-amber-500 text-xs">
              <span className="">0.008MCT</span>
            </div>
            <div className="text-green-400">
               <Link to="https://web.telegram.org/a/" className='text-sm'>Start</Link>
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}

export default Task