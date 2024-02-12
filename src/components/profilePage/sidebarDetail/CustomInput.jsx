import React from "react";

function CustomInput({ label, type, placeholder = "" }) {
  return (
    <div className="relative mx-2 mt-10 grow">
      <label className="absolute px-2 text-sm font-thin bg-white right-3 bottom-11 text-neutral-500">
        {label}
      </label>
      <input
        className="w-full p-3 border rounded-lg outline-none focus:border-neutral-400"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default CustomInput;
