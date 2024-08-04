import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import SocialIcons from '../components/SocialIcons';

function ContactSection() {
  return (
    <section className="flex overflow-hidden flex-col justify-center px-20 py-16 bg-white max-md:px-5">
      <div className="flex overflow-hidden flex-wrap justify-between px-8 max-w-full w-[1280px] max-md:px-5">
        <div className="flex overflow-hidden flex-col flex-1 shrink justify-center py-5 basis-0 min-w-[240px] max-md:max-w-full">
          <ContactForm />
          
        </div>
        <div className="flex overflow-hidden flex-col flex-1 shrink justify-center py-5 basis-0 min-w-[240px] max-md:max-w-full">
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;