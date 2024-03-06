import React from "react";
import PersonalInfoForm from "./personalInfoForm";

export default function PersonalInfo() {
  return (
    <div className="bg-white absolute w-[90%] rounded-xl mx-auto left-0 right-0 top-[12%] h-auto">
      <div className="px-6 py-2">
        <h1 className="text-2xl font-bold py-2 text-marine-blue mt-2">
          Personal info
        </h1>

        <p className="font-medium text-gray-400">
          Please provide your name, email <br /> address, and phone number.
        </p>

        <PersonalInfoForm />
      </div>
    </div>
  );
}
