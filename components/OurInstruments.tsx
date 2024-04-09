import React from 'react';

// Define an interface for each instrument
interface Instrument {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  bgGradient: string;
}

// Array of instruments with type annotation
const instruments: Instrument[] = [
  {
    id: 1,
    title: 'Piano',
    description: 'Unlock melodies, cultivate skill, and express emotions through piano mastery.',
    imageSrc: '/images/InstrumentsPiano.png',
    bgGradient: 'from-white to-[#e8f6ff]',
  },
  {    
    id: 2,
    title: 'GUITAR',
    description: 'Strum, pick, chord, melody: Guitar mastery begins with disciplined practice.',
    imageSrc: '/images/InstrumentsGuitar.png',
    bgGradient: 'from-white to-[#f9eaff]',
  },
  {
    id: 3,
    title: 'DRUM',
    description: 'Rhythm unleashed: Explore beats, fills, and grooves in dynamic drumming.',
    imageSrc: '/images/InstrumentsDrums.png',
    bgGradient: 'from-white to-[#fff4de]',
  },
  // ...other instruments
];

// Define an interface for the props of InstrumentsCard component
interface InstrumentsCardProps {
  title: string;
  description: string;
  imageSrc: string;
  bgGradient: string;
}

const InstrumentsCard: React.FC<InstrumentsCardProps> = ({ title, description, imageSrc, bgGradient }) => {
  return (
    <div
      className={`rounded-lg shadow-md overflow-hidden flex flex-col items-center justify-center p-8 bg-gradient-to-b ${bgGradient}`}
      role="figure"
    >
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src={imageSrc}
        alt={`Instrument image of ${title}`}
      />
      <h3 className="text-lg font-bold uppercase mt-4">{title}</h3>
      <p className="text-base text-center mt-2">{description}</p>
    </div>
  );
};

const Instruments: React.FC = () => {
  return (
    <section aria-labelledby="instruments-heading" className="flex flex-col items-center justify-center py-16 relative">
      <h2 id="instruments-heading" className="text-4xl font-bold leading-snug text-center mb-10">
        We Offer Multiple Choices of Instruments
      </h2>
      <div className="flex flex-row items-start justify-start gap-8 mb-10">
        {instruments.map((instrument) => (
          <InstrumentsCard key={instrument.id} {...instrument} />
        ))}
      </div>
      {/* Vector image if needed */}
    </section>
  );
};

export default Instruments;
