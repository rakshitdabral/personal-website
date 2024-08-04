import Logo from "../components/Logo";

const Footer = () => {
  return (
    <div className="px-4 py-4 md:px-16 md:py-5 lg:px-20 lg:py-6 bg-black">
      <footer className="text-white px-8 flex justify-between items-start">
        <Logo></Logo>
        <div>
          <p className='font-display font-semibold text-white'>@2024 built with love </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
