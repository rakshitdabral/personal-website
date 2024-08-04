import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import SocialIcons from './SocialIcons';



function ContactForm() {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_rgd5ndm', 'template_wr5o30w', form.current, {
          publicKey: '8YkAwYeCgPpGcxjDF',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col items-start w-full max-md:max-w-full">
      <label htmlFor="name" className="sr-only">Your name</label>
      <input
        id="name"
        type="text"
        name="to_name"
        className="flex flex-col max-w-full text-base tracking-tight leading-none text-zinc-500 w-[500px] self-stretch px-6 py-5 w-full rounded min-h-[56px] max-md:px-5 max-md:max-w-full"
        placeholder="Your name"
      />
      <label htmlFor="email" className="sr-only">Email</label>
      <input
        id="email"
        type="email"
        name="from_name"
        className="flex flex-col mt-5 max-w-full text-base tracking-tight leading-none whitespace-nowrap text-zinc-500 w-[500px] self-stretch px-6 py-5 w-full rounded min-h-[56px] max-md:px-5 max-md:max-w-full"
        placeholder="Email"
      />
      <label htmlFor="website" className="sr-only">Your website (If exists)</label>
      <input
        id="website"
        type="url"
        className="flex flex-col mt-5 max-w-full text-base tracking-tight leading-none text-zinc-500 w-[500px] self-stretch px-6 py-5 w-full rounded min-h-[56px] max-md:px-5 max-md:max-w-full"
        placeholder="Your website (If exists)"
      />
      <label htmlFor="message" className="sr-only">How can I help?</label>
      <textarea
        id="message"
        name="message" 
        className="flex flex-col mt-5 max-w-full text-base tracking-tight leading-5 text-zinc-500 w-[500px] flex-1 shrink px-6 py-4 w-full rounded min-h-[140px] max-md:px-5 max-md:max-w-full"
        placeholder="How can I help?*"
      ></textarea>
      <div className="flex flex-wrap gap-5 items-start mt-5 max-md:max-w-full">
        <button type="submit"  value="Send" className="gap-2 self-stretch px-5 py-4 text-xl font-semibold tracking-wide leading-tight text-white bg-black rounded min-h-[56px]">
          Get In Touch
        </button>
        
        <div className="flex flex-wrap gap-5 items-start mt-5 max-md:max-w-full">
            <SocialIcons />
          </div>
      </div>
    </form>
  );
}

export default ContactForm;