const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
        <img
          src="/images/hero-image.jpg"
          alt=""
          className="w-[200px] h-[200px] rounded-full object-cover "
        />
        <p className="text-slate-600">All rights reserved. 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
