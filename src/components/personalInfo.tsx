import React from "react";
import PersonalInfoForm from "./personalInfoForm";

export default function PersonalInfo() {
  return (
    <div className="absolute left-0 right-0 top-[12%] mx-auto h-auto w-[90%] max-w-5xl rounded-xl bg-white lg:relative">
      <div className="px-6 py-2 max-w-xl">
        <h1 className="mt-2 py-2 text-2xl font-bold text-marine-blue">
          Personal info
        </h1>

        <p className="font-medium text-gray-400">
          Please provide your name, email address, and phone number.
        </p>

        <PersonalInfoForm />
      </div>
    </div>
  );
}
