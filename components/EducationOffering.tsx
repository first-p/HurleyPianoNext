import React from 'react';

// Data for the offerings with their respective icon paths
const offerings = [
  {
    id: 1,
    title: 'FREE BOOK',
    description: 'Teach your toddler music even though you never learned music yourself. Get your FREE starter book and teach your little one music most efficiently.',
    icon: '/images/BookIcon.png',
    bgColor: 'white',
  },
  {
    id: 2,
    title: 'INNOVATIVE IDEAS',
    description: 'Innovation is synonymous with Hurley Piano because what others have failed to think of, we have already made standard.',
    icon: '/images/IdeasIcon.png',
    bgColor: 'white',
  },
  {
    id: 3,
    title: 'VIDEO LESSONS',
    description: 'We’re on a mission to bring music into more homes and communities around the world. Everyone should have access to music education.',
    icon: '/images/VideoIcon.png',
    bgColor: 'white',
  },
  {
    id: 4,
    title: 'LEARNING RESOURCES',
    description: 'We have dozens of printable learning resources to reinforce lesson content such as flashcard games, board games, and holiday music theory packets.',
    icon: '/images/LearningIcon.png',
    bgColor: 'white',
  },
  {
    id: 5,
    title: 'INTERACTIVE GAMES',
    description: 'Enhance music theory skills through our engaging online games, improving rhythm, note recognition, sight reading, and more.',
    icon: '/images/GameIcon.png',
    bgColor: 'white',
  },
  {
    id: 6,
    title: 'PRACTICE TOOLS',
    description: 'Enhance music theory skills through our engaging online games, improving rhythm, note recognition, sight reading, and more.',
    icon: '/images/PracticeIcon.png',
    bgColor: 'white',
  },
];

const EducationOffering = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '1rem', fontSize: '2rem' }}>
        Why Hurley Piano?
      </h1>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '1rem', fontSize: '1.5rem' }}>
        We offer unique music lessons
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
        {offerings.map((offering) => (
          <div key={offering.id} style={{ backgroundColor: offering.bgColor, borderRadius: '10px', width: '100%', maxWidth: '300px', margin: '0 auto', padding: '1.5rem', boxShadow: '0 2px 5px rgba(0,0,0,0.2)', textAlign: 'center' }}>
            <img src={offering.icon} alt={`${offering.title} icon`} style={{ width: '50px', height: '50px', marginBottom: '1rem' }} />
            <h3 style={{ color: '#333', fontSize: '1.2rem' }}>{offering.title}</h3>
            <p style={{ color: '#666', fontSize: '0.875rem' }}>
              {offering.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationOffering;
