import React from "react";

export default function page() {
  return (
    <div className="bg-gray-200 pb-5 h-auto">
      <h2 className="font-bold text-center pt-10 text-2xl">
        Formulir Pendaftaran Siswa Baru
      </h2>
      <div className="h-auto overflow-hidden w-219 p-7 mx-auto max-w-6xl mt-8 rounded-2xl bg-white space-y-12 shadow-2xs">
        {/* data diri */}
        <div className="zoom border-2 my-8 border-gray-300 h-auto w-205 rounded-2xl">
          <span className="-z-10 ml-10 top-3 bg-transparent text-gray-700 text-lg font-semibold">
            Data Diri
          </span>
          <div className="grid grid-cols-2">
            <div className="  p-6 h-auto w-80">
              <label className="font-light block w-auto text-left">NIS</label>
              <input
                type="text"
                className="p-5 border-gray-400 h-10 w-90 border-2 rounded-lg shadow-2xl"
              />
            </div>

            <div className=" p-6 h-auto w-80">
              <label className="font-light block w-auto text-left">NISN</label>
              <input
                type="text"
                className="p-5 border-gray-400 h-10 w-90 border-2 rounded-lg shadow-2xl"
              />
            </div>

            <div className=" p-6 h-auto w-80">
              <label className="font-light block w-auto text-left ">
                Email dari Sekolah
              </label>
              <input
                type="text"
                className="p-5 border-gray-400 h-10 w-90 border-2 rounded-lg shadow-2xl"
              />
            </div>

            <div className=" p-6 h-auto w-80">
              <label className="font-light block w-auto text-left ">
                Nama Lengkap (sesuai Ijazah)
              </label>
              <input
                type="text"
                className="p-5 border-gray-400 h-10 w-90 border-2 rounded-lg shadow-2xl"
              />
            </div>

            <div className=" p-6 h-auto w-80">
              <label className="font-light block w-auto text-left ">
                Jenis Kelamin
              </label>
              <select className="p-5 border-gray-400 h-10 w-90 border-2 rounded-lg shadow-2xl">
                <option value="laki-laki"> Laki-laki</option>
                <option value="Perempuan"> Perempuan</option>
              </select>
            </div>

            <div className=" p-6 h-auto w-80">
              <label className="font-light block w-auto text-left ">
                Tempat Lahir
              </label>
              <input
                type="text"
                className="p-5 border-gray-400 h-10 w-90 border-2 rounded-lg shadow-2xl"
              />
            </div>

            <div className=" p-6 h-auto w-80">
              <label className="font-light block w-auto text-left ">
                Tanggal Lahir
              </label>
              <input
                type="date"
                className="p-5 border-gray-400 h-10 w-90 border-2 rounded-lg shadow-2xl"
              />
            </div>

            <div className=" p-6 h-auto w-80">
              <label className="font-light block w-auto text-left ">
                Agama
              </label>
              <input
                type="text"
                className="p-5 border-gray-400 h-10 w-90 border-2 rounded-lg shadow-2xl"
              />
            </div>

            <div className=" p-6 h-auto w-80 col-span-2">
              <label className="font-light block w-auto text-left ">
                Alamat
              </label>
              <textarea
                className="p-5 border-gray-400 h-10 w-193 border-2 rounded-lg shadow-2xl resize-y"
                rows={3}
              />
            </div>

            <div className=" p-6 h-auto w-80">
              <label className="font-light block w-auto text-left ">
                Provinsi
              </label>
              <input
                type="text"
                className="p-5 border-gray-400 h-10 w-90 border-2 rounded-lg shadow-2xl"
              />
            </div>

            <div className=" p-6 h-auto w-80">
              <label className="font-light block w-auto text-left ">
                Kota/Kabupaten
              </label>
              <input
                type="text"
                className="p-5 border-gray-400 h-10 w-90 border-2 rounded-lg shadow-2xl"
              />
            </div>

            <div className=" p-6 h-auto w-80">
              <label className="font-light block w-auto text-left ">
                Kecamatan
              </label>
              <input
                type="text"
                className="p-5 border-gray-400 h-10 w-90 border-2 rounded-lg shadow-2xl"
              />
            </div>

            <div className=" p-6 h-auto w-80">
              <label className="font-light block w-auto text-left ">
                No. Whatsapp
              </label>
              <input
                type="text"
                className="p-5 border-gray-400 h-10 w-90 border-2 rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* asal sekolah */}
        <div className="zoom border-2 my-8 border-gray-300 h-auto w-205 rounded-2xl">
          <span className="-z-20 ml-10  top-250 bg-transparent text-gray-700 text-lg font-semibold">
            Asal Sekolah
          </span>
          <div className="grid grid-cols-2">
            <div className=" p-6 h-auto w-80">
              <label className="font-light block w-auto text-left">Nama Asal Sekolah</label>
              <input
                type="text"
                className="p-5 border-gray-400 h-10 w-90 border-2 rounded-lg shadow-2xl"
              />
            </div>

            <div className=" p-6 h-auto w-80">
              <label className="font-light block w-auto text-left">Provinsi Asal Sekolah</label>
              <input
                type="text"
                className="p-5 border-gray-400 h-10 w-90 border-2 rounded-lg shadow-2xl"
              />
            </div>

            <div className=" p-6 h-auto w-80">
              <label className="font-light block w-auto text-left ">
                Kota/Kabupaten Asal Sekolah
              </label>
              <input
                type="text"
                className="p-5 border-gray-400 h-10 w-90 border-2 rounded-lg shadow-2xl"
              />
            </div>

            <div className=" p-6 h-auto w-80">
              <label className="font-light block w-auto text-left ">
                Kecamatan Asal Sekolah
              </label>
              <input
                type="text"
                className="p-5 border-gray-400 h-10 w-90 border-2 rounded-lg shadow-2xl"
              />
            </div>

            <div className=" p-6 h-auto w-80 col-span-2">
              <label className="font-light block w-auto text-left ">
                Alamat Asal Sekolah
              </label>
              <textarea
                className="p-5 border-gray-400 h-10 w-193 border-2 rounded-lg shadow-2xl resize-y"
                rows={3}
              />
            </div>
          </div>
        </div>

        {/*data ortu  */}
        <div className="flex gap-5 w-auto">
          <div className="zoom border-2 mt-8 border-gray-300 h-auto w-100 rounded-2xl">
            <span className="-z-10 ml-10 top-354 bg-transparent text-gray-700 text-lg font-semibold">
              Data Ayah/Wali
            </span>
            <div className="flex flex-col ">
              <div className=" p-6 h-auto w-80">
                <label className="font-light block w-auto text-left">Nama Ayah/Wali</label>
                <input
                  type="text"
                  className="p-5 border-gray-400 h-10 w-90 border-2 items-start rounded-lg shadow-2xl"
                />
              </div>

              <div className=" p-6 h-auto w-80">
                <label className="font-light block w-auto text-left">
                  Profesi Ayah/Wali
                </label>
                <input
                  type="text"
                  className="p-5 border-gray-400 h-10 w-90 border-2 rounded-lg shadow-2xl"
                />
              </div>

              <div className=" p-6 h-auto w-80">
                <label className="font-light block w-auto text-left ">
                  No Whatsapp Ayah/Wali
                </label>
                <input
                  type="text"
                  className="p-5 border-gray-400 h-10 w-90 border-2 rounded-lg shadow-2xl"
                />
              </div>

              <div className=" p-6 h-auto w-80">
                <label className="font-light block w-auto text-left ">
                  Usia Ayah/Wali (Tahun)
                </label>
                <input
                  type="number"
                  className="p-5 border-gray-400 h-10 w-90 border-2 rounded-lg shadow-2xl"
                />
              </div>

              <div className=" p-6 h-auto w-80 col-span-2">
                <label className="font-light block w-auto text-left ">
                  Alamat Ayah/Wali
                </label>
                <textarea
                  className="p-5 border-gray-400 h-10 w-90 border-2 rounded-lg shadow-2xl resize-y"
                  rows={3}
                />
              </div>
            </div>
          </div>

          <div className="zoom border-2 mt-8 border-gray-300 h-auto w-100 rounded-2xl">
            <span className="-z-10 ml-10 top-354 bg-transparent text-gray-700 text-lg font-semibold">
              Data Ibu/Wali
            </span>
            <div className="flex flex-col ">
              <div className=" p-6 h-auto w-80">
                <label className="font-light block w-auto text-left">Nama Ibu/Wali</label>
                <input
                  type="text"
                  className="p-5 border-gray-400 h-10 w-90 border-2 rounded-lg shadow-2xl"
                />
              </div>

              <div className=" p-6 h-auto w-80">
                <label className="font-light block w-auto text-left">
                  Profesi Ibu/Wali
                </label>
                <input
                  type="text"
                  className="p-5 border-gray-400 h-10 w-90 border-2 rounded-lg shadow-2xl"
                />
              </div>

              <div className=" p-6 h-auto w-80">
                <label className="font-light block w-auto text-left ">
                  No Whatsapp Ibu/Wali
                </label>
                <input
                  type="text"
                  className="p-5 border-gray-400 h-10 w-90 border-2 rounded-lg shadow-2xl"
                />
              </div>

              <div className=" p-6 h-auto w-80">
                <label className="font-light block w-auto text-left ">
                  Usia Ibu/Wali (Tahun)
                </label>
                <input
                  type="number"
                  className="p-5 border-gray-400 h-10 w-90 border-2 rounded-lg shadow-2xl"
                />
              </div>

              <div className=" p-6 h-auto w-80 col-span-2">
                <label className="font-light block w-auto text-left ">
                  Alamat ibu/Wali
                </label>
                <textarea
                  className="p-5 border-gray-400 h-10 w-90 border-2 rounded-lg shadow-2xl resize-y"
                  rows={1}
                />
              </div>
            </div>
          </div>
        </div>
        {/* button */}
        <button type="submit" className="w-205 block items-center justify-center text-white h-10 bg-blue-700 rounded-2xl">Kirim Data</button>
      </div>
    </div>
  );
}
