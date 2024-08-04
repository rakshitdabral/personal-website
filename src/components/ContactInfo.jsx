import React from 'react';

function ContactInfo() {
  return (
    <div className="flex flex-col flex-1 justify-center w-full max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <h2 className="flex flex-col w-full text-5xl font-extrabold tracking-tighter leading-none max-md:max-w-full max-md:text-4xl">
          <div className="flex flex-wrap gap-4 items-start w-full whitespace-nowrap max-md:max-w-full max-md:text-4xl">
            <span className="text-black max-md:text-4xl">Let's</span>
            <span className="max-md:text-4xl">talk</span>
            <span className="text-black max-md:text-4xl">for</span>
          </div>
          <span className="mt-3 text-black max-md:max-w-full max-md:text-4xl">
            Something special
          </span>
        </h2>
        <p className="mt-5 text-base tracking-wide leading-6 text-zinc-500 max-md:max-w-full">
        By pushing the boundaries of AI/ML technologies, I aim to build intelligent systems that deliver exceptional value and satisfaction.
        </p>
      </div>
      <div className="flex flex-col mt-10 w-full md:text-xl sm:text-sm lg:text-3xl font-semibold tracking-tight leading-none text-black whitespace-nowrap max-md:max-w-full">
        <p className="max-md:max-w-full ">rakshitdabral1@gmail.com</p>
        <p className="mt-4 max-md:max-w-full">(+91  8218819454)</p>
      </div>
    </div>
  );
}

export default ContactInfo;