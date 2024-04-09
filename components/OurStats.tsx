import React from 'react';

const OurStats = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-100 to-blue-300 rounded-xl shadow-lg p-10 my-12 mx-auto flex justify-center items-center">
        <section
        className="w-full py-5 px-24 text-center text-[30px] text-mediumblue font-montserrat"
        role="contentinfo" // Role for accessibility
        >
        <h2 className="text-5xl font-bold mb-6 text-black">Hurley Piano Music School</h2>
        <div className="flex flex-row items-center justify-center gap-32">
            {/* Stat Item */}
            <div className="flex flex-col items-center">
            <span className="font-bold text-4xl">15</span>
            <span className="text-base text-black"><strong>YEARS</strong> SINCE 2009</span>
            </div>

            {/* Stat Item */}
            <div className="flex flex-col items-center">
            <span className="font-bold text-4xl">400+</span>
            <span className="text-base text-black">STUDENTS</span>
            </div>

            {/* Stat Item */}
            <div className="flex flex-col items-center">
            <span className="font-bold text-4xl">22,000</span>
            <span className="text-base text-black">CLASSES TAUGHT</span>
            </div>

            {/* Stat Item */}
            <div className="flex flex-col items-center">
            <span className="font-bold text-4xl">55</span>
            <span className="text-base text-black">EVENTS</span>
            </div>
        </div>
        </section>
    </div>

  );
};

export default OurStats;
