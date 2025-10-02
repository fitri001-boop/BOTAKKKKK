import React from "react";
import Tugasnav from '@/component/Tugasnav/page'

export default function page() {
  return (
    <div className="bg-[#000923] h-auto w-full px-30 py-8 space-y-5">
        <Tugasnav />
      <div className="text-white">
        <h2 className="font-bold text-2xl ">Dasbor Monitor Jaringan</h2>
        <p className="font-light text-sm">
          Status koneksi internet dan perangkat lokal secara real-time
        </p>
      </div>
      <div className="w-full h-17 flex items-center  rounded-md text-white p-3 bg-white/5 backdrop-blur-md gap-5">
        Rentang IP Lokal (CIDR):
        <div className=" bg-white/20 h-10 p-3 w-60 rounded-[5px] flex items-center">
          192.168.0.0/21
        </div>
        <div className=" bg-blue-800 iy h-10 p-3 w-60 rounded-[5px] flex items-center justify-center">
          🔎︎ Mulai Scan Lokal
        </div>
      </div>

      <div className="flex gap-6 text-white">
        <div className=" bg-[#011d0d] iy h-20 p-3 w-70 rounded-[5px] flex items-center gap-3">
          <div className="text-2xl bg-white/5 rounded-full p-2">⚡</div>
          <div>
            <p className="text-gray-400 font-light text-sm">Status Online</p>
            <p className="font-bold text-xl text-[#51FF0D]">Online</p>
          </div>
        </div>

        <div className=" bg-white/5 iy h-20 p-3 w-70 rounded-[5px] flex items-center gap-3">
          <div className="text-2xl bg-white/5 rounded-full p-2">🛡️</div>
          <div>
            <p className="text-gray-400 font-light text-sm">Packet Loss</p>
            <p className="font-bold text-xl">
              100 <span className="font-light text-sm">%</span>
            </p>
          </div>
        </div>

        <div className=" bg-white/5 iy h-20 p-3 w-70 rounded-[5px] flex items-center gap-3">
          <div className="text-2xl bg-white/5 rounded-full p-2">🚀</div>
          <div>
            <p className="text-gray-400 font-light text-sm">Latensi Internet</p>
            <p className="font-bold text-xl ">
              45 <span className="font-light text-sm">ms</span>
            </p>
          </div>
        </div>

        <div className=" bg-white/5  iy h-20 p-3 w-70 rounded-[5px] flex items-center gap-3">
          <div className="text-2xl bg-white/5 rounded-full p-2">👁️</div>
          <div>
            <p className="text-gray-400 font-light text-sm">
              Perangkat Lokal Aktif
            </p>
            <p className="font-bold text-xl">0/0</p>
          </div>
        </div>
      </div>
      <div className="flex gap-6">
        <div className=" bg-white/5 iy text-white h-70 p-3 w-193 rounded-[5px] flex items-center justify-center">
          <h2 className="-translate-x-40 -translate-y-8 w-auto absolute font-bold text-3xl">
            God Always See
          </h2>
          <h2 className="-translate-x-46 -translate-y-2 w-auto absolute text-sm">
            His timing is always perfect.
          </h2>
          <h2 className="-translate-x-5 rotate-45 -translate-y-3 w-auto absolute text-2xl">
            👀
          </h2>
          <h2 className="-translate-x-65 rotate-330 -translate-y-18 w-auto absolute text-2xl">
            👀
          </h2>
          <div className="tenor-gif-embed h-full w-full rounded-2xl" data-postid="17377589" data-share-method="host" data-aspect-ratio="2.96296" data-width="100%"><a href="https://tenor.com/view/graph-chart-coordinates-fourier1-gif-17377589">Graph Chart GIF</a>from <a href="https://tenor.com/search/graph-gifs">Graph GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
        </div>

        <div className=" bg-white/5  text-white mt-5 iy h-23  p-4 w-82 space-y-4 rounded-[5px] r">
          <p className="font-semibold ">Top 20 Pengguna Internet</p>
          <p className="text-center font-light text-xs text-gray-400">Tidak ada Pengguna Internet</p>
        </div>
      </div>
      <div className="w-full h-30 iy bg-white/5 rounded-[5px] ">

      </div>
    </div>
  );
}
