import React from 'react';

// Variants of the Hero rectangle
const heroVariants = [
  {
    title: 'Teaching Neurodiverse Kids To Play An Instrument',
    description: "From piano, guitar, and drums, we've got you covered! Connect with us today.",
    imageSrc: '/images/HeroImage1.png', 
    imageAlt: 'Child playing piano',
  },
  // The other variants are no longer needed for now (see commented out code for other variants)
];

const Hero = () => {
  // Directly using the first variant
  const { title, description, imageSrc, imageAlt } = heroVariants[0];

  return (
    <section aria-labelledby="hero-title" className="flex flex-row justify-between items-center p-4">
      <div className="text-left space-y-4">
        <h1 id="hero-title" className="text-5xl font-bold font-inria-serif">{title}</h1>
        <p className="text-xl">{description}</p>
        <div>
          <button aria-label="Book Free Consultation" className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2">
            Book Free Consultation
          </button>
          <button aria-label="Send Us Email" className="bg-transparent text-blue-500 py-2 px-4 rounded-md border border-blue-500">
            Send Us Email
          </button>
        </div>
      </div>
      <img className="w-1/3 h-auto" src={imageSrc} alt={imageAlt} />
    </section>
  );
};

export default Hero;

// import React from 'react';

// // Variants of the Hero rectangle that should oscillate
// export const heroVariants = [
//   {
//     title: 'Teaching Neurodiverse Kids To Play An Instrument',
//     description: "From piano, guitar, and drums, we've got you covered! Still hesitant?",
//     imageSrc: '/images/HeroImage1.png', 
//     imageAlt: 'Child playing piano',
//   },
//   {
//     title: 'Your child is a STAR',
//     description: 'At HurleyPiano, we recognize every child as a star, bringing light into our lives, despite parental biases.',
//     imageSrc: '/images/HeroImage2.png', 
//     imageAlt: 'Happy child with colorful paint',
//   },
//   {
//     title: 'Bring Music into More Homes and Communities',
//     description: "We're on a mission to bring music into more homes and communities around the world.",
//     imageSrc: '/images/HeroImage3.png', 
//     imageAlt: 'Children playing guitar',
//   },
// ];

// // Define a type for the props
// type HeroProps = {
//   variantIndex: number;
// };

// const Hero: React.FC<HeroProps> = ({ variantIndex }) => {
//   const { title, description, imageSrc, imageAlt } = heroVariants[variantIndex];

//   return (
//     <section aria-labelledby="hero-title" className="flex flex-row justify-between items-center p-4">
//       <div className="text-left space-y-4">
//         <h1 id="hero-title" className="text-5xl font-bold font-inria-serif">{title}</h1>
//         <p className="text-xl">{description}</p>
//         <div>
//           <button aria-label="Book Free Consultation" className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2">
//             Book Free Consultation
//           </button>
//           <button aria-label="Send Us Email" className="bg-transparent text-blue-500 py-2 px-4 rounded-md border border-blue-500">
//             Send Us Email
//           </button>
//         </div>
//       </div>
//       <img className="w-1/2 h-auto" src={imageSrc} alt={imageAlt} />
//     </section>
//   );
// };

// export default Hero;
