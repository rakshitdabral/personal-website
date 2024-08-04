import React from 'react';
import AboutMeParagraph from './AboutMeParagraph';
import AboutMeTitle from './AboutMeTitle';
function AboutMeContent() {
  const paragraphs = [
    "I am a dedicated AI/ML student with a strong foundation in machine learning, deep learning, and artificial intelligence. My journey in this field commenced in 2021, and since then, I have actively engaged in diverse projects to solidify my expertise. Possessing a versatile skill set, I am proficient in both frontend and backend development. I thrive on challenges and am passionate about crafting innovative solutions through coding. My portfolio showcases a range of projects that demonstrate my ability to tackle complex problems and deliver impactful results."
  ];

  return (
    <article className="flex flex-col self-stretch my-auto min-h-[572px] min-w-[240px] w-[610px] max-md:max-w-full">
      <AboutMeTitle />
      <div className="flex flex-col justify-center mt-5 max-w-full text-base tracking-wide leading-6 text-zinc-500 w-[610px]">
        {paragraphs.map((paragraph, index) => (
          <AboutMeParagraph key={index} content={paragraph} />
        ))}
      </div>
    </article>
  );
}

export default AboutMeContent;