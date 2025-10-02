"use client";
import { useState } from "react";
import "./globals.css";

export default function SatuNama() {
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");

  const handleSubmit = () => {
    const clean = nama.trim();
    if (clean) {
      setPesan(`Halo ${clean}, aku Fitri..salam kenal🤞`);
    } else {
      setPesan("Nama kosong, isi dulu ya 😅");
    }
  };

  return (
    <div className="table-wrapper">
       <p>Welcome.... Kenalan Yukkk</p>
      <table className="my-table">
        <thead>
          <tr>
            <th>🌼🌼🌼</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Masukkan nama..."
              />
            </td>
          </tr>
        </tbody>
      </table>

      <button className="add-button" onClick={handleSubmit}>
        Kirim
      </button>

      {pesan && <p className="pesan-output">{pesan}</p>}
    </div>
  );
}
