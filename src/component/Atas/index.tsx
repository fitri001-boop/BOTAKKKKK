import React from "react";
import Image from 'next/image'

export default function index() {
  return (
    <div>
      <div className="flex w-full bg-blue-600 h-auto justify-between items-center text-white pl-3">
        <div className="text-xl font-bold">( ˶ˆᗜˆ˵ ) ༄˖°.🍂.ೃ࿔*:･ ⋆🐾°</div>
        <div className=" flex justify-end text-white p-3 gap-8 items-center">
          <div className="border-2 border-white rounded-sm h-4 w-3">
            <div className="w-3 h-3 bg-green-600 text-white top-3 right-82 -mt-2 ml-1 font-light text-xs text-center flex items-center justify-center">
              4
            </div>
          </div>
          <div className="border-2 border-white rounded-sm h-4 w-3">
            <div className="w-3 h-3 bg-orange-300 text-white top-3 right-70 -mt-2 ml-1 font-light text-xs p-1 text-center flex items-center justify-center">
              6
            </div>
          </div>
          <div className="border-2 border-white rounded-sm h-4 w-3">
            <div className="w-3 h-3 bg-red-600 text-white top-3 right-60 -mt-2 ml-1 font-light text-xs text-center flex items-center justify-center">
              9
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="rounded-full flex border-white border-2 w-8 h-8 ">
              <Image
                src="/Asset/cici.jpg"
                alt="image"
                width={100}
                height={100}
                className="rounded-full h-7 w-10 object-cover mr-3"
              />
            </div>
            <p className="text-white right-10">Marhua Syafitri</p>
          </div>
          <div className="border-2 border-white h-4 w-3"></div>
        </div>
      </div>

    </div>
  )
}
