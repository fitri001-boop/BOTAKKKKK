'use client'

import React, { useState } from "react";
import Ujian from "@/app/ujian/Ujian/ujian_544241131"
import TextBox from "../ujian/box";

export default function page() {
  // ➜ keep the typed text here
  const [text, setText] = useState("");

  

  return (
    <div className="bg-white h-screen flex justify-center items-center">
        <Ujian />
      <div className=" grid justify-center items-center grid-rows-2 h-130 w-300 ">
        <div className="flex gap-5 ml-25">
          <div className="border-2 h-60 w-50 rounded-2xl shadow-xl/20 flex justify-center items-center">card 1</div>
          <div className="border-2 h-60 w-50 rounded-2xl shadow-xl/20 flex justify-center items-center">card 1</div>
        </div>
        <div className="flex gap-5">
          <div className="border-2 h-60 w-50 rounded-2xl shadow-xl/20 flex justify-center items-center">card 1</div>
          <div className="border-2 h-60 w-50 rounded-2xl shadow-xl/20 flex justify-center items-center">card 1</div>
          <div className="border-2 h-60 w-50 rounded-2xl shadow-xl/20 flex justify-center items-center">card 1</div>
        </div>
      </div>

        {/* ➜ Pass state & setter to TextBox */}
        <TextBox value={text} onChange={setText} />
    </div>
  );
}

