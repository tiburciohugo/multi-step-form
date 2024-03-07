import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white w-full px-4 flex justify-end bottom-0 absolute py-6 text-sm lg:relative lg:self-end lg:max-w-lg lg:p-0 lg:mx-auto lg:mt-3">
      <button
        type="submit"
        form="personalInfo"
        className="bg-marine-blue text-white rounded-lg px-4 py-2 hover:opacity-90"
      >
        Next Step
      </button>
    </footer>
  );
}
