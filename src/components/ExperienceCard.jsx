import React from 'react';

function ExperienceCard({ company, role, period, description, logoSrc }) {
  return (
    <article className="flex flex-col px-6 py-8 w-full rounded max-md:px-5 max-md:max-w-full hover:bg-zinc-800">
      <header className="flex gap-7 rounded flex-wrap justify-between w-full font-semibold text-center max-md:max-w-full">
        <div className="flex gap-5 items-center   lg:text-2xl   text-white   ">
          <img loading="lazy" src={logoSrc} alt={`${company} logo`} className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square" />
          <h3 className="self-stretch my-auto">{role} at {company}</h3>
        </div>
        <time className="my-auto text-base tracking-tight leading-none text-zinc-300">{period}</time>
      </header>
      <p className="mt-7 text-base tracking-wide leading-6 text-zinc-300 max-md:max-w-full">
        {description}
      </p>
    </article>
  );
}

export default ExperienceCard;