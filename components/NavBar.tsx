 import React from 'react';

const NavBar = () => {
  return (
    <header className="self-stretch overflow-hidden flex flex-row flex-wrap items-center justify-center py-4 px-0 z-[0] text-left text-mini text-gray-700 font-montserrat">
      <nav className="w-full flex items-center justify-center">
        <div className="flex items-center justify-between w-full max-w-screen-xl">
          <img
            className="w-[145px] h-[73px] object-cover"
            alt="Hurley Piano Logo"
            src="/images/HurleyPianoLogo.png"
          />
          <div className="flex items-center justify-between w-[487px]">
            <a href="/" className="text-cornflowerblue-200 font-bold">Home</a>
            <a href="/music-lessons" className="font-semibold">Music Lessons</a>
            <a href="/about" className="font-semibold">About</a>
            <a href="/blog" className="font-semibold">Blog</a>
            <a href="/contact" className="font-semibold">Contact</a>
          </div>
          <div className="flex items-start justify-between w-[238px] text-white font-open-sans">
            <a href="/book-now" className="relative flex items-center justify-center w-[136px] h-[35px] bg-cornflowerblue-100 rounded-xl uppercase font-extrabold text-decoration:underline">
              BOOK NOW
            </a>
            <a href="/sign-in" className="relative flex items-center justify-center w-[93px] h-[35px] bg-cornflowerblue-300 rounded-xl border border-cornflowerblue-100 uppercase font-extrabold text-decoration:underline">
              SIGN IN
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
