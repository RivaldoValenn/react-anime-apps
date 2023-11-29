import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className="border border-slate-100 bg-transparent rounded-lg px-10 py-2 opacity-50 text-white w-full"
      placeholder="Search for anime"
    />
  );
});

export default Input;
