import React from 'react';
import AboutMeContent from '../components/AboutMeContent';
import ProfileImage from '../components/ProfileImage';
function AboutMe() {
  return (
    <main className="flex overflow-hidden justify-center items-center px-20 py-16 max-md:px-5">
      <section className="flex overflow-hidden flex-wrap gap-5 justify-between items-center self-stretch px-8 my-auto min-w-[240px] w-[1280px] max-md:px-5">
        <ProfileImage />
        <AboutMeContent />
      </section>
    </main>
  );
}

export default AboutMe;