"use client";
import React from "react";

export default function ProdukList() {
  // Data produk (bisa kamu ganti-ganti)
  const produk = [
    { id: 1, nama: "Laptop Asus", harga: 7500000, stok: 10 },
    { id: 2, nama: "Headset Razer", harga: 1200000, stok: 5 },
    { id: 3, nama: "Keyboard Logitech", harga: 850000, stok: 8 },
    { id: 4, nama: "Mouse Gaming", harga: 450000, stok: 15 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-6">Daftar Produk</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {produk.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-xl p-5 hover:scale-105 transition-transform"
          >
            <h2 className="text-lg font-semibold">{item.nama}</h2>
            <p className="text-gray-600">Harga: Rp {item.harga.toLocaleString()}</p>
            <p className="text-gray-600">Stok: {item.stok}</p>
            <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Beli
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
