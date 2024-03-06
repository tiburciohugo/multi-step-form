import React from "react";

export default function PersonalInfoForm() {
  return (
    <form id="personalInfo" className="py-4 mt-2">
      <div className="flex-col flex pb-3">
        <label className="text-marine-blue text-sm" htmlFor="name">
          Name
        </label>
        <input
          className="border-2 border-gray w-full py-2 px-4 rounded-md mt-1"
          type="text"
          id="name"
          name="name"
          placeholder="e. g. Stephen King"
        />
      </div>
      <div className="flex-col flex pb-3">
        <label className="text-marine-blue text-sm" htmlFor="email">
          Email address
        </label>
        <input
          className="border-2 border-gray w-full py-2 px-4 rounded-md mt-1"
          type="text"
          id="email"
          name="email"
          placeholder="e. g. stephenking@lorem.com"
        />
      </div>
      <div className="flex-col flex pb-3">
        <label className="text-marine-blue text-sm" htmlFor="phone">
          Phone Number
        </label>
        <input
          className="border-2 border-gray w-full py-2 px-4 rounded-md mt-1"
          type="text"
          id="phone"
          name="phone"
          placeholder="e. g. +1 234 567 890"
        />
      </div>
    </form>
  );
}
