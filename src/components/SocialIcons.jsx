import React from 'react';
import Instagram from "../assets/instagram.svg";
const socialIcons = [
  { src: Instagram, link: "https://www.instagram.com/_vincetq/" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ae18bc3c634cf3e691965d66ae63f4481345209bb5979e8c17197d2097807adf?apiKey=e15faf82bcea411dbb8425c5f7311fda&&apiKey=e15faf82bcea411dbb8425c5f7311fda", alt: "Social icon 3" },

];

function SocialIcons() {
  return (
    <>
      {socialIcons.map((icon, index) => (
        <a target="_blank" key={index} href={icon.link} className="p-5 aspect-square border border-2 rounded-md border-black hover:invert bg-white">
        <img className="w-5 h-5" src={icon.src} />
      </a>
      ))}
    </>
  );
}

export default SocialIcons;