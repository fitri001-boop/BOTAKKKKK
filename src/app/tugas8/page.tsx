import card from "@material-tailwind/react/theme/components/card";
import React from "react";
import Image from "next/image";

export default function page() {
  const card = [
    { id: 1, logo: "📖", nama: "Jurnal Mengajar" },
    { id: 2, logo: "❤︎", nama: "Nilai" },
    { id: 3, logo: "❀", nama: "Akademik" },
    { id: 4, logo: "❄", nama: "Prestasi" },
    { id: 5, logo: "🧸", nama: "Rapor" },
  ];

  const data = [
    {
      id: 1,
      nama: "JENNIFER FORTUNE",
      suka: "0 orang suka",
      text: "tabe, ada yang liat kunci motor ku?",
      waktu: "2 hari lalu",
    },
    {
      id: 2,
      nama: "JENNIFER FORTUNE",
      suka: "0 orang suka",
      text: "tabe, ada yang liat kunci motor ku?",
      waktu: "2 hari lalu",
    },
    {
      id: 3,
      nama: "JENNIFER FORTUNE",
      suka: "0 orang suka",
      text: "tabe, ada yang liat kunci motor ku?",
      waktu: "2 hari lalu",
    },
    {
      id: 4,
      nama: "JENNIFER FORTUNE",
      suka: "0 orang suka",
      text: "tabe, ada yang liat kunci motor ku?",
      waktu: "2 hari lalu",
    },
    {
      id: 5,
      nama: "JENNIFER FORTUNE",
      suka: "0 orang suka",
      text: "tabe, ada yang liat kunci motor ku?",
      waktu: "2 hari lalu",
    },
  ];

  return (
    <div className="bg-white h-screen space-y-3 p-3">
      <div className="flex justify-between ">
        <h1>SMK TELKOM MAKASSAR</h1>
        <h1>SMK TELKOM MAKASSAR</h1>
      </div>

      <div className="flex gap-3">
        <div className="h-40 w-1/2 rounded-xl bg-white shadow-xl ">
          <div className="bg-gray-200 h-10 rounded-t-xl flex justify-between px-5 py-2 shadow-sm text-blue-950 text-sm col-span-2 font-bold">
            <h1>Jurnal Mengajar</h1>
            <div className="flex gap-3">
              <select
                id="pilihan"
                className="block w-30 h-7 bg-white shadow-sm text-sm px-4 rounded-lg focus:outline-none text-gray-700"
              >
                <option value="" className="rounded-md">
                  -- Pilih --
                </option>
                <option value="1" className="rounded-md">
                  XI RPL 4
                </option>
                <option value="2" className="rounded-md">
                  XI RPL 3
                </option>
                <option value="3" className="rounded-md">
                  XI RPL 2
                </option>
                <option value="3" className="rounded-md">
                  XI RPL 1
                </option>
              </select>
              <input
                type="date"
                className="px-3 bg-white shadow-md font-light w-50 rounded-md h-7"
              />
            </div>
          </div>
          <div className="flex">
            <div className="flex-col h-full w-1/2 flex gap-2 text-blue-950 p-2 justify-center items-center">
              <h1 className="font-bold w-full text-center">Status Kehadiran</h1>
              <div className="flex gap-40">
                <div className="text-center">
                  <h1 className="font-extrabold text-3xl">0</h1>
                  <span className="font-medium text-xs">Hadir</span>
                </div>
                <div className="text-center">
                  <h1 className="font-extrabold text-3xl">0</h1>
                  <span className="font-medium text-xs">Tidak Hadir</span>
                </div>
              </div>
            </div>

            <div className="h-20 border-1 translate-y-4 rounded-2xl border-gray-400"></div>

            <div className="flex-col h-full w-1/2 flex gap-2 text-blue-950 p-2 justify-center items-center">
              <h1 className="font-bold w-full text-center">Status Kehadiran</h1>
              <div className="flex gap-40">
                <div className="text-center">
                  <h1 className="font-extrabold text-3xl">0</h1>
                  <span className="font-medium text-xs">Hadir</span>
                </div>
                <div className="text-center">
                  <h1 className="font-extrabold text-3xl">0</h1>
                  <span className="font-medium text-xs">Tidak Hadir</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ini kotak kecil */}
        <div className="shadow-2xl h-40 w-[290px] rounded-2xl relative overflow-hidden">
          <Image
            src="/Asset/mee.png"
            alt="image"
            width={300}
            height={300}
            className=" absolute z-10 top-8 left-45 w-25 h-35 object-cover"
          />
          <div>
            <Image
              src="/Asset/putih.jpg"
              alt="image"
              width={300}
              height={300}
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>

          {/* Teks overlay */}
          <h2 className="absolute bottom-22 text-md left-15 font-bold text-blue-950">
            Guru Terbaik
          </h2>
          <h2 className="absolute bottom-14 text-xs left-12 italic text-gray-500">
            Belum ada guru terbaik
          </h2>
        </div>
      </div>

      {/* chat panjang */}
      <div className="shadow-xl h-132 w-90 rounded-2xl absolute translate-x-246 top-12.5">
        <div className="relative">
          <div className="bg-gray-200 shadow-sm h-10 rounded-t-xl">
            <h1 className="px-5 py-2 text-blue-950 text-sm font-bold">
              Sapa Guru
            </h1>
          </div>
          <div className="h-122 w-90 p-3  overflow-scroll">
            {data.map((ilmu) => (
              <div className="flex flex-col mb-2 ">
                <div key={ilmu.id} className="bg-gray-300 h-25 rounded-sm">
                  <h2 className="text-[12px] font-semibold text-gray-500 p-2">
                    {ilmu.nama}
                  </h2>
                  <div className="border-[0.5px] translate-x-2 w-75 rounded-2xl border-gray-400"></div>
                  <h2 className="text-[10px] font-bold text-gray-500 p-2">
                    {ilmu.text}?
                  </h2>
                  <div className="border-[0.5px] translate-x-2 w-75 rounded-2xl border-gray-400"></div>
                  <div className="flex justify-between">
                    <div className="flex">
                      <h2 className="text-[15px] font-bold text-gray-500 pl-2 pt-1">
                        ❤︎
                      </h2>
                      <h2 className="text-[10px] text-gray-500 p-2">
                        {ilmu.suka}
                      </h2>
                    </div>
                    <h2 className="text-[10px] text-gray-500 p-2">
                      {ilmu.waktu}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute w-80 left-3 bottom-10">
            <div className="flex">
              <input
                type="text"
                placeholder="Ketik Sesuatu..."
                className="absolute py-1 px-3 rounded-md bg-gray-200 shadow-xl w-70 text-sm border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none"
              />

              <h1 className="right-3 shadow-2xl text-3xl w-5 h-5 absolute text-black">❀</h1>
            </div>
          </div>
        </div>
      </div>

      {/* bagan besar */}
      <div className="flex gap-3">
        <div className="h-90 w-176 rounded-2xl bg-white shadow-xl">
          <div className="bg-gray-200 shadow-sm h-10 rounded-t-xl">
            <h1 className="px-5 py-2 text-blue-950 text-sm font-bold">
              Aplikasi
            </h1>
          </div>
          <div className="h-80 flex justify-center items-center">
            {card.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-center items-center h-20 w-25 gap-2"
              >
                <div className="h-10 w-10 bg-blue-950 shadow-xl rounded-md flex justify-center items-center">
                  <div className="text-lg text-white">{item.logo}</div>
                </div>
                <h1 className="text-center font-bold text-xs">{item.nama}</h1>
              </div>
            ))}
          </div>
        </div>

        <div className="shadow-xl h-90 w-64 rounded-2xl ">
          <div className="bg-gray-200 shadow-sm h-10 rounded-t-xl">
            <h1 className="px-5 py-2 text-blue-950 text-sm font-bold">News</h1>
          </div>
          <div className="w-64 p-2 mt-1 h-40 overflow-hidden">
            <Image
              src="/Asset/coll photo.jpg"
              alt="image"
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
          <p className="text-[10px] px-2 mb-2">
            Seorang wisudawan tampil percaya diri dengan toga dan kacamata
            putih, menghadirkan sentuhan modern di momen kelulusan.
          </p>

          <div className="border-1 translate-x-5 w-55 rounded-2xl border-gray-200"></div>
        </div>
      </div>
    </div>
  );
}
