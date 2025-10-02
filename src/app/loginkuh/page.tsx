import React from "react";

export default function page() {
  return (
    <div className="flex items-center flex-col  min-h-screen ">
      <div className=" flex flex-col items-center gap-4 mt-10">
        <div className=" top-20 w-50 h-37">
          <div className="flex">
            <div className="bg-red-400 h-10 w-10 rounded-4xl "></div>
            <div className="bg-blue-600 h-10 w-10 rounded-4xl"></div>
            <h1 className="text-3xl font-bold p-5 h-5 w-2">
              ini halaman login
            </h1>
          </div>
          <div className="flex ">
            <div className="bg-yellow-400 h-10 w-10 rounded-4xl "></div>
            <div className="bg-green-400 h-10 w-10 rounded-4xl"></div>
          </div>
          <div className="flex ">
            <div className="bg-green-400 h-10 w-10 rounded-4xl "></div>
          </div>
        </div>

        <input
          type="text"
          placeholder="Heii isi nama di sini..."
          className="focus:outline-none p-3 bg-yellow-300 rounded-4xl w-50 h-10 justify-center items-center border-1"
        />

        <input
          type="text"
          placeholder="Password lu di sini..."
          className="focus:outline-none p-3 bg-green-300 rounded-4xl w-50 h-10 justify-center items-center border-1"
        />

        <button className="w-35 h-auto bg-blue-600 px-4 py-1 rounded-3xl mt-2">
          kirim
        </button>
      </div>
    </div>
  );
}
