import React from "react";
import Image from "next/image";
import Tugasnav from '@/component/Tugasnav/page'

export default function page() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* navbar */}
      <Tugasnav />
      {/* home */}
      <div className="p-3 h-auto w-auto space-y-5">
        <h3 className="font-bold text-xl ml-5">
          Wiggets <span className="font-light text-xs">Preview Page</span>
        </h3>
        <div className="flex gap-4">
          {/* biru */}
          <div className="space-y-5">
            <div className=" bg-white h-20 w-80 flex">
              <div className="h-full bg-blue-400 w-20 flex justify-center items-center">
                <div className="border-2 border-white h-8 w-6"></div>
              </div>
              <div className="flex-col pl-5 pt-2 space-y-1">
                <p className="text-xs block">MASSAGES</p>
                <p className="font-bold text-md">1,410</p>
              </div>
            </div>

            <div className=" bg-blue-400 h-20 w-80 flex">
              <div className="h-full bg-blue-600 w-20 flex justify-center items-center">
                <div className="border-2 border-white rounded-sm h-8 w-6"></div>
              </div>
              <div className="flex-col pt-2 space-y-1 w-50">
                <p className="text-sm pl-5 font-medium text-white block">
                  BOOKMARKS
                </p>
                <p className="font-bold pl-5 text-white text-sm">41,410</p>
                <div className="h-[2px] w-60 bg-blue-950">
                  <div className="h-[2px] w-40 bg-white"></div>
                </div>
                <p className="font-extralight pl-5 text-white text-xs">
                  70% Incrase in 30 Days
                </p>
              </div>
            </div>

            <div>
              <div className=" bg-blue-400 h-25 w-80 flex">
                <div className="flex-col space-y-3 pl-5 pt-4">
                  <p className="text-4xl text-white font-bold">150</p>
                  <p className="font-light text-white text-sm">New Orders</p>
                </div>
                <div className="border-2 border-blue-300 mt-7 ml-40 h-13 w-10 "></div>
              </div>
              <div className="bg-blue-500 w-full h-6 flex items-center justify-center gap-5">
                <div className=" text-white text-md ">More Info</div>
                <div className="border-2 border-white rounded-sm h-3 w-3"></div>
              </div>
            </div>

            <div className=" bg-transparent h-20 w-80 flex">
              <div className="h-10 text-gray-500 border-t-2 border-gray-400 bg-white w-full flex p-2 justify-between items-center">
                <div>Expandable</div>
                <div className="border-2 border-gray-400 rounded-sm h-3 w-3"></div>
              </div>
            </div>

            <div className=" bg-transparent h-20 w-80 flex">
              <div className="h-10 text-gray-500 shadow-lg  bg-gray-300 w-full flex p-2 justify-between items-center">
                <div>Expandable</div>
                <div className="border-2 border-gray-400 rounded-sm h-3 w-3"></div>
              </div>
            </div>

            <div className=" bg-white h-50 w-80 flex border-t-3 border-blue-500">
              <div className="grid grid-cols-2 gap-3 justify-items-stretch p-3 w-full h-25 ">
                <div className="text-gray-500">Direct Chat</div>
                <div className="flex gap-3 justify-end">
                  <div className="rounded-full bg-blue-400 h-5 w-5 flex justify-center items-center text-sm text-white">
                    3
                  </div>
                  <div className="border-2 mt-1 border-gray-400 rounded-sm h-3 w-3"></div>
                  <div className="border-2 mt-1 border-gray-400 rounded-sm h-3 w-3"></div>
                  <div className="border-2 mt-1 border-gray-400 rounded-sm h-3 w-3"></div>
                </div>
                <div className="font-bold col-span-2 text-sm text-gray-600">
                  <div className="text-xs font-semibold flex justify-between">
                    <div>Marhua Syafitri</div>
                    <div className="text-[10px] text-gray-500 font-light ">
                      26 Agustus 16.65 WITA
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <Image
                        src="/Asset/cici.jpg"
                        alt="image"
                        width={100}
                        height={100}
                        className="rounded-full mt-1 h-10 w-10 border-2 border-gray-400 object-cover mr-3"
                      />{" "}
                    </div>
                    <div className="w-60 rounded-md flex items-center self-baseline-last h-8 bg-gray-400">
                      <div
                        className="mt-[15px] -ml-3 w-0 h-0 
                        border-t-[8px] border-t-transparent 
                        border-b-[8px] border-b-transparent 
                        border-r-[15px] border-r-gray-400 "
                      ></div>
                      <div className="rotate-y-360  text-right pl-2 text-white">
                        halo main yukk
                      </div>
                    </div>
                  </div>

                  <div className=" rotate-y-180 flex place-items-baseline justify-between pt-2">
                    <div className="rotate-y-180 text-xs font-semibold">
                      Fatimah Azzahra
                    </div>
                    <div className="text-[10px] rotate-y-180 text-gray-500 font-light ">
                      26 Aguts 16.70 WITA
                    </div>
                  </div>
                  <div className="flex rotate-y-180 items-start justify-between">
                    <div>
                      <Image
                        src="/Asset/cici.jpg"
                        alt="image"
                        width={100}
                        height={100}
                        className="rounded-full mt-1 h-10 w-10 border-2 border-gray-400 object-cover mr-3"
                      />{" "}
                    </div>
                    <div className="w-60 rounded-md flex justify-between items-center self-baseline-last h-8 bg-blue-500">
                      <div
                        className="mt-[15px] -ml-3 w-0 h-0 
                        border-t-[8px] border-t-transparent 
                        border-b-[8px] border-b-transparent 
                        border-r-[15px] border-r-blue-500 "
                      ></div>
                      <div className="rotate-y-180 text-right pl-2 text-white">
                        halo hahahahah yuk yuk yuk
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* hijau */}
          <div className="space-y-5">
            <div className=" bg-white h-20 w-80 flex">
              <div className="h-full bg-green-400 w-20 flex justify-center items-center">
                <div className="border-2 border-white h-8 w-6"></div>
              </div>
              <div className="flex-col pl-5 space-y-1 pt-2">
                <p className="text-xs block">BOOKMARKS</p>
                <p className="font-bold text-md">410</p>
              </div>
            </div>

            <div className=" bg-green-400 h-20 w-80 flex">
              <div className="h-full bg-green-600 w-20 flex justify-center items-center">
                <div className="border-2 border-white h-8 w-6"></div>
              </div>
              <div className="flex-col pt-2 space-y-1 w-50">
                <p className="text-sm pl-5 font-medium text-white block">
                  LIKES
                </p>
                <p className="font-bold pl-5 text-white text-sm">41,410</p>
                <div className="h-[2px] w-60 bg-green-950">
                  <div className="h-[2px] w-40 bg-white"></div>
                </div>
                <p className="font-extralight pl-5 text-white text-xs">
                  70% Incrase in 30 Days
                </p>
              </div>
            </div>

            <div>
              <div className=" bg-green-400 h-25 w-80 flex">
                <div className="flex-col space-y-3 pl-5 pt-4">
                  <p className="text-4xl text-white font-bold">53%</p>
                  <p className="font-light text-white text-sm">Bounce Rate</p>
                </div>
                <div className="border-2 border-green-300 mt-7 ml-40 h-13 w-10 "></div>
              </div>
              <div className="bg-green-500 w-full h-6 flex items-center justify-center gap-5">
                <div className=" text-white text-md ">More Info</div>
                <div className="border-2 border-white rounded-sm h-3 w-3"></div>
              </div>
            </div>

            <div className="flex-col bg-white h-20 w-80">
              <div className="">
                <div className="h-10 text-gray-500 border-t-2 border-green-500 bg-white w-full flex p-2 justify-between items-center">
                  <div>Expandable</div>
                  <div className="border-2 border-gray-400 rounded-sm h-3 w-3"></div>
                </div>
                <div className="pl-2 mt-4 text-gray-500 text-xs">
                  The body of the box
                </div>
              </div>
            </div>

            <div className="flex-col border-2 border-green-500 bg-white h-20 w-80">
              <div className="">
                <div className="h-10 bg-green-500  text-white w-full flex p-2 justify-between items-center">
                  <div>Expandable</div>
                  <div className="border-2 border-white rounded-sm h-3 w-3"></div>
                </div>
                <div className="pl-2 mt-3 text-gray-500 text-xs">
                  The body of the box
                </div>
              </div>
            </div>

            <div className=" bg-white h-50 w-80 flex border-t-3 border-green-500">
              <div className="grid grid-cols-2 gap-3 justify-items-stretch p-3 w-full h-25 ">
                <div className="text-gray-500">Direct Chat</div>
                <div className="flex gap-3 justify-end">
                  <div className="rounded-full bg-green-400 h-5 w-5 flex justify-center items-center text-sm text-white">
                    3
                  </div>
                  <div className="border-2 mt-1 border-gray-400 rounded-sm h-3 w-3"></div>
                  <div className="border-2 mt-1 border-gray-400 rounded-sm h-3 w-3"></div>
                  <div className="border-2 mt-1 border-gray-400 rounded-sm h-3 w-3"></div>
                </div>
                <div className="font-bold col-span-2 text-sm text-gray-600">
                  <div className="text-xs font-semibold flex justify-between">
                    <div>Marhua Syafitri</div>
                    <div className="text-[10px] text-gray-500 font-light ">
                      26 Agustus 16.65 WITA
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <Image
                        src="/Asset/cici.jpg"
                        alt="image"
                        width={100}
                        height={100}
                        className="rounded-full mt-1 h-10 w-10 border-2 border-gray-400 object-cover mr-3"
                      />{" "}
                    </div>
                    <div className="w-60 rounded-md flex items-center self-baseline-last h-8 bg-gray-400">
                      <div
                        className="mt-[15px] -ml-3 w-0 h-0 
                        border-t-[8px] border-t-transparent 
                        border-b-[8px] border-b-transparent 
                        border-r-[15px] border-r-gray-400 "
                      ></div>
                      <div className="rotate-y-360  text-right pl-2 text-white">
                        halo main yukk
                      </div>
                    </div>
                  </div>

                  <div className=" rotate-y-180 flex place-items-baseline justify-between pt-2">
                    <div className="rotate-y-180 text-xs font-semibold">
                      Fatimah Azzahra
                    </div>
                    <div className="text-[10px] rotate-y-180 text-gray-500 font-light ">
                      26 Aguts 16.70 WITA
                    </div>
                  </div>
                  <div className="flex rotate-y-180 items-start justify-between">
                    <div>
                      <Image
                        src="/Asset/cici.jpg"
                        alt="image"
                        width={100}
                        height={100}
                        className="rounded-full mt-1 h-10 w-10 border-2 border-gray-400 object-cover mr-3"
                      />{" "}
                    </div>
                    <div className="w-60 rounded-md flex justify-between items-center self-baseline-last h-8 bg-green-500">
                      <div
                        className="mt-[15px] -ml-3 w-0 h-0 
                        border-t-[8px] border-t-transparent 
                        border-b-[8px] border-b-transparent 
                        border-r-[15px] border-r-green-500"
                      ></div>
                      <div className="rotate-y-180 text-right pl-2 text-white">
                        halo hahahahah yuk yuk yuk
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* orange */}
          <div className="space-y-5">
            <div className=" bg-white h-20 w-80 flex">
              <div className="h-full bg-orange-400 w-20 flex justify-center items-center">
                <div className="border-2 border-white h-8 w-6"></div>
              </div>
              <div className="flex-col space-y-1 pl-5 pt-2">
                <p className="text-xs block">UPLOADS</p>
                <p className="font-bold text-md">13,648</p>
              </div>
            </div>

            <div className=" bg-orange-400 h-20 w-80 flex">
              <div className="h-full bg-orange-600 w-20 flex justify-center items-center">
                <div className="border-2 border-white h-8 w-6"></div>
              </div>
              <div className="flex-col pt-2 space-y-1 w-50">
                <p className="text-sm pl-5 font-medium text-white block">
                  EVENTS
                </p>
                <p className="font-bold pl-5 text-white text-sm">41,410</p>
                <div className="h-[2px] w-60 bg-orange-500">
                  <div className="h-[2px] w-40 bg-white"></div>
                </div>
                <p className="font-extralight pl-5 text-white text-xs">
                  70% Incrase in 30 Days
                </p>
              </div>
            </div>

            <div>
              <div className=" bg-orange-400 h-25 w-80 flex">
                <div className="flex-col space-y-3 pl-5 pt-4">
                  <p className="text-4xl text-white font-bold">44</p>
                  <p className="font-light text-white text-sm">User Registrations</p>
                </div>
                <div className="border-2 border-orange-300 mt-7 ml-30 h-13 w-10 "></div>
              </div>
              <div className="bg-orange-500 w-full h-6 flex items-center justify-center gap-5">
                <div className=" text-white text-md ">More Info</div>
                <div className="border-2 border-white rounded-sm h-3 w-3"></div>
              </div>
            </div>

            <div className="flex-col bg-white h-20 w-80">
              <div className="">
                <div className="h-10 text-gray-500 border-t-2 border-orange-500 bg-white w-full flex p-2 justify-between items-center">
                  <div>Expandable</div>
                  <div className="border-2 border-gray-400 rounded-sm h-3 w-3"></div>
                </div>
                <div className="pl-2 mt-4 text-gray-500 text-xs">
                  The body of the box
                </div>
              </div>
            </div>

            <div className="flex-col border-2 border-orange-500 bg-white h-20 w-80">
              <div className="">
                <div className="h-10 bg-orange-500  text-white w-full flex p-2 justify-between items-center">
                  <div>Expandable</div>
                  <div className="border-2 border-white rounded-sm h-3 w-3"></div>
                </div>
                <div className="pl-2 mt-3 text-gray-500 text-xs">
                  The body of the box
                </div>
              </div>
            </div>

            <div className=" bg-white h-50 w-80 flex border-t-3 border-orange-500">
              <div className="grid grid-cols-2 gap-3 justify-items-stretch p-3 w-full h-25 ">
                <div className="text-gray-500">Direct Chat</div>
                <div className="flex gap-3 justify-end">
                  <div className="rounded-full bg-orange-400 h-5 w-5 flex justify-center items-center text-sm text-white">
                    3
                  </div>
                  <div className="border-2 mt-1 border-gray-400 rounded-sm h-3 w-3"></div>
                  <div className="border-2 mt-1 border-gray-400 rounded-sm h-3 w-3"></div>
                  <div className="border-2 mt-1 border-gray-400 rounded-sm h-3 w-3"></div>
                </div>
                <div className="font-bold col-span-2 text-sm text-gray-600">
                  <div className="text-xs font-semibold flex justify-between">
                    <div>Marhua Syafitri</div>
                    <div className="text-[10px] text-gray-500 font-light ">
                      26 Agustus 16.65 WITA
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <Image
                        src="/Asset/cici.jpg"
                        alt="image"
                        width={100}
                        height={100}
                        className="rounded-full mt-1 h-10 w-10 border-2 border-gray-400 object-cover mr-3"
                      />{" "}
                    </div>
                    <div className="w-60 rounded-md flex items-center self-baseline-last h-8 bg-gray-400">
                      <div
                        className="mt-[15px] -ml-3 w-0 h-0 
                        border-t-[8px] border-t-transparent 
                        border-b-[8px] border-b-transparent 
                        border-r-[15px] border-r-gray-400 "
                      ></div>
                      <div className="rotate-y-360  text-right pl-2 text-white">
                        halo main yukk
                      </div>
                    </div>
                  </div>

                  <div className=" rotate-y-180 flex place-items-baseline justify-between pt-2">
                    <div className="rotate-y-180 text-xs font-semibold">
                      Fatimah Azzahra
                    </div>
                    <div className="text-[10px] rotate-y-180 text-gray-500 font-light ">
                      26 Aguts 16.70 WITA
                    </div>
                  </div>
                  <div className="flex rotate-y-180 items-start justify-between">
                    <div>
                      <Image
                        src="/Asset/cici.jpg"
                        alt="image"
                        width={100}
                        height={100}
                        className="rounded-full mt-1 h-10 w-10 border-2 border-gray-400 object-cover mr-3"
                      />{" "}
                    </div>
                    <div className="w-60 rounded-md flex justify-between items-center self-baseline-last h-8 bg-orange-500">
                      <div
                        className="mt-[15px] -ml-3 w-0 h-0 
                        border-t-[8px] border-t-transparent 
                        border-b-[8px] border-b-transparent 
                        border-r-[15px] border-r-orange-500"
                      ></div>
                      <div className="rotate-y-180 text-right pl-2 text-white">
                        halo hahahahah yuk yuk yuk
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* merah */}
          <div className="space-y-5">
            <div className=" bg-white h-20 w-80 flex">
              <div className="h-full bg-red-400 w-20 flex justify-center items-center">
                <div className="border-2 border-white h-8 w-6"></div>
              </div>
              <div className="flex-col space-y-1 pl-5 pt-2">
                <p className="text-xs block">LIKES</p>
                <p className="font-bold text-md">193,139</p>
              </div>
            </div>

            <div className=" bg-red-400 h-20 w-80 flex">
              <div className="h-full bg-red-600 w-20 flex justify-center items-center">
                <div className="border-2 border-white h-8 w-6"></div>
              </div>
              <div className="flex-col pt-2 space-y-1 w-50">
                <p className="text-sm pl-5 font-medium text-white block">
                  COMMENTS
                </p>
                <p className="font-bold pl-5 text-white text-sm">41,410</p>
                <div className="h-[2px] w-60 bg-red-950">
                  <div className="h-[2px] w-40 bg-white"></div>
                </div>
                <p className="font-extralight pl-5 text-white text-xs">
                  70% Incrase in 30 Days
                </p>
              </div>
            </div>

            <div>
              <div className=" bg-red-400 h-25 w-80 flex">
                <div className="flex-col space-y-3 pl-5 pt-4">
                  <p className="text-4xl text-white font-bold">65</p>
                  <p className="font-light text-white text-sm w-auto">Unique Visitors</p>
                </div>
                <div className="border-2 border-red-300 mt-7 ml-35 h-13 w-10 "></div>
              </div>
              <div className="bg-red-500 w-full h-6 flex items-center justify-center gap-5">
                <div className=" text-white text-md ">More Info</div>
                <div className="border-2 border-white rounded-sm h-3 w-3"></div>
              </div>
            </div>

            <div className="flex-col bg-white h-20 w-80">
              <div className="">
                <div className="h-10 text-gray-500 border-t-2 border-red-500 bg-white w-full flex p-2 justify-between items-center">
                  <div>Expandable</div>
                  <div className="border-2 border-gray-400 rounded-sm h-3 w-3"></div>
                </div>
                <div className="pl-2 mt-4 text-gray-500 text-xs">
                  The body of the box
                </div>
              </div>
            </div>

            <div className="flex-col border-2 border-red-500 bg-white h-20 w-80">
              <div className="">
                <div className="h-10 bg-red-500  text-white w-full flex p-2 justify-between items-center">
                  <div>Expandable</div>
                  <div className="border-2 border-white rounded-sm h-3 w-3"></div>
                </div>
                <div className="pl-2 mt-3 text-gray-500 text-xs">
                  The body of the box
                </div>
              </div>
            </div>

            <div className=" bg-white h-50 w-80 flex border-t-3 border-red-500">
              <div className="grid grid-cols-2 gap-3 justify-items-stretch p-3 w-full h-25 ">
                <div className="text-gray-500">Direct Chat</div>
                <div className="flex gap-3 justify-end">
                  <div className="rounded-full bg-red-400 h-5 w-5 flex justify-center items-center text-sm text-white">
                    3
                  </div>
                  <div className="border-2 mt-1 border-gray-400 rounded-sm h-3 w-3"></div>
                  <div className="border-2 mt-1 border-gray-400 rounded-sm h-3 w-3"></div>
                  <div className="border-2 mt-1 border-gray-400 rounded-sm h-3 w-3"></div>
                </div>
                <div className="font-bold col-span-2 text-sm text-gray-600">
                  <div className="text-xs font-semibold flex justify-between">
                    <div>Marhua Syafitri</div>
                    <div className="text-[10px] text-gray-500 font-light ">
                      26 Agustus 16.65 WITA
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <Image
                        src="/Asset/cici.jpg"
                        alt="image"
                        width={100}
                        height={100}
                        className="rounded-full mt-1 h-10 w-10 border-2 border-gray-400 object-cover mr-3"
                      />{" "}
                    </div>
                    <div className="w-60 rounded-md flex items-center self-baseline-last h-8 bg-gray-400">
                      <div
                        className="mt-[15px] -ml-3 w-0 h-0 
                        border-t-[8px] border-t-transparent 
                        border-b-[8px] border-b-transparent 
                        border-r-[15px] border-r-gray-400 "
                      ></div>
                      <div className="rotate-y-360  text-right pl-2 text-white">
                        halo main yukk
                      </div>
                    </div>
                  </div>

                  <div className=" rotate-y-180 flex place-items-baseline justify-between pt-2">
                    <div className="rotate-y-180 text-xs font-semibold">
                      Fatimah Azzahra
                    </div>
                    <div className="text-[10px] rotate-y-180 text-gray-500 font-light ">
                      26 Aguts 16.70 WITA
                    </div>
                  </div>
                  <div className="flex rotate-y-180 items-start justify-between">
                    <div>
                      <Image
                        src="/Asset/cici.jpg"
                        alt="image"
                        width={100}
                        height={100}
                        className="rounded-full mt-1 h-10 w-10 border-2 border-gray-400 object-cover mr-3"
                      />{" "}
                    </div>
                    <div className="w-60 rounded-md flex justify-between items-center self-baseline-last h-8 bg-red-500">
                      <div
                        className="mt-[15px] -ml-3 w-0 h-0 
                        border-t-[8px] border-t-transparent 
                        border-b-[8px] border-b-transparent 
                        border-r-[15px] border-r-red-500"
                      ></div>
                      <div className="rotate-y-180 text-right pl-2 text-white">
                        halo hahahahah yuk yuk yuk
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
