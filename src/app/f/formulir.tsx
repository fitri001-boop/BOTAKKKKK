"use client";
import React from "react";

// ✅ Definisikan tipe Field
interface BaseField {
  id: string;
  label: string;
  colSpan?: number;
}

interface TextAreaField extends BaseField {
  type: "textarea";
}

interface SelectField extends BaseField {
  type: "select";
  options: string[];
}

interface InputField extends BaseField {
  type: "text" | "email" | "date" | "number";
}

type Field = TextAreaField | SelectField | InputField;

interface Section {
  title: string;
  fields: Field[];
}

export default function Page() {
  const sections: Section[] = [
    {
      title: "Data Diri",
      fields: [
        { id: "nis", label: "NIS", type: "text" },
        { id: "nisn", label: "NISN", type: "text" },
        { id: "email", label: "Email dari Sekolah", type: "email" },
        { id: "nama", label: "Nama Lengkap (sesuai Ijazah)", type: "text" },
        {
          id: "gender",
          label: "Pilih Jenis Kelamin",
          type: "select",
          options: ["Laki-laki", "Perempuan"],
        },
        { id: "tempatLahir", label: "Tempat Lahir", type: "text" },
        { id: "tanggalLahir", label: "Tanggal Lahir", type: "date" },
        { id: "agama", label: "Agama", type: "text" },
        { id: "alamat", label: "Alamat", type: "textarea", colSpan: 2 },
        { id: "provinsi", label: "Provinsi", type: "text" },
        { id: "kota", label: "Kota/Kabupaten", type: "text" },
        { id: "kecamatan", label: "Kecamatan", type: "text" },
        { id: "wa", label: "No. Whatsapp", type: "text" },
      ],
    },
    {
      title: "Asal Sekolah",
      fields: [
        { id: "namaSekolah", label: "Nama Asal Sekolah", type: "text" },
        { id: "provSekolah", label: "Provinsi Asal Sekolah", type: "text" },
        { id: "kotaSekolah", label: "Kota/Kabupaten Asal Sekolah", type: "text" },
        { id: "kecSekolah", label: "Kecamatan Asal Sekolah", type: "text" },
        { id: "alamatSekolah", label: "Alamat Asal Sekolah", type: "textarea", colSpan: 2 },
      ],
    },
  ];

  const parents: Section[] = [
    {
      title: "Data Ayah/Wali",
      fields: [
        { id: "ayahNama", label: "Nama Ayah/Wali", type: "text" },
        { id: "ayahProfesi", label: "Profesi Ayah/Wali", type: "text" },
        { id: "ayahWa", label: "No Whatsapp Ayah/Wali", type: "text" },
        { id: "ayahUsia", label: "Usia Ayah/Wali (Tahun)", type: "number" },
        { id: "ayahAlamat", label: "Alamat Ayah/Wali", type: "textarea" },
      ],
    },
    {
      title: "Data Ibu/Wali",
      fields: [
        { id: "ibuNama", label: "Nama Ibu/Wali", type: "text" },
        { id: "ibuProfesi", label: "Profesi Ibu/Wali", type: "text" },
        { id: "ibuWa", label: "No Whatsapp Ibu/Wali", type: "text" },
        { id: "ibuUsia", label: "Usia Ibu/Wali (Tahun)", type: "number" },
        { id: "ibuAlamat", label: "Alamat Ibu/Wali", type: "textarea" },
      ],
    },
  ];

  const renderField = (field: Field) => {
    if (field.type === "textarea") {
      return (
        <textarea
          id={field.id}
          rows={3}
          className="p-3 border-2 border-gray-400 w-full rounded-lg shadow-xl resize-y"
        />
      );
    } else if (field.type === "select") {
      return (
        <select
          id={field.id}
          className="p-3 border-2 border-gray-400 w-full rounded-lg shadow-xl"
        >
          <option value="">{field.label}</option>
          {field.options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      );
    }
    return (
      <input
        type={field.type}
        id={field.id}
        className="p-3 border-2 border-gray-400 w-full rounded-lg shadow-xl"
      />
    );
  };

  return (
    <div className="bg-gray-200 px-10 pb-10">
      <h2 className="font-bold text-center pt-10 text-2xl">
        Formulir Pendaftaran Siswa Baru
      </h2>
      <div className="h-auto w-full max-w-6xl mx-auto p-7 mt-8 rounded-2xl bg-white space-y-12 shadow-xl">
        {/* Section umum */}
        {sections.map((section, idx) => (
          <div key={idx} className="zoom border-2 border-gray-300 rounded-2xl p-6">
            <span className="ml-4 text-gray-700 text-lg font-semibold">
              {section.title}
            </span>
            <div className="grid grid-cols-2 gap-6 mt-4">
              {section.fields.map((field) => (
                <div
                  key={field.id}
                  className={field.colSpan === 2 ? "col-span-2" : "col-span-1"}
                >
                  <label className="block mb-2 text-gray-700">{field.label}</label>
                  {renderField(field)}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Data Orang Tua */}
        <div className="flex gap-6">
          {parents.map((section, idx) => (
            <div key={idx} className="zoom flex-1 border-2 border-gray-300 rounded-2xl p-6">
              <span className="ml-4 text-gray-700 text-lg font-semibold">
                {section.title}
              </span>
              <div className="flex flex-col gap-4 mt-4">
                {section.fields.map((field) => (
                  <div key={field.id}>
                    <label className="block mb-2 text-gray-700">{field.label}</label>
                    {renderField(field)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="w-full h-12 text-white bg-blue-700 rounded-2xl font-semibold">
          Kirim Data
        </button>
      </div>
    </div>
  );
}
