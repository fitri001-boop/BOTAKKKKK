import React from 'react';

type TextBoxProps = {
  value: string;
  onChange: (v: string) => void;
};

export default function TextBox({ value, onChange }: TextBoxProps) {
  return (
    <div className="flex justify-center mt-10">
      <div className="font-semibold text-md">
        <input
          type="text"
          placeholder="Text here !!"
          className="bg-[#FAF9F6] p-2 h-10 w-60 rounded-full text-gray-800"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}