import React from 'react';

const EasyLearning = () => {
  // We assume a default mobile-first approach where styles are for mobile
  // and then we override them for larger screens.
  const isMobile = window.innerWidth < 768; // Example breakpoint for mobile

  const containerStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'start',
    gap: '10px',
    padding: isMobile ? '20px' : '50px',
    backgroundColor: 'grey', // Placeholder color
  };

  const headingStyle = {
    textAlign: 'center',
    color: 'black',
    marginBottom: '20px',
    fontSize: isMobile ? '20px' : '29px',
  };

  const subheadingStyle = {
    textAlign: 'center',
    color: 'black',
    marginBottom: '20px',
    fontSize: isMobile ? '12px' : '14px',
  };

  const offeringContainerStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  };

  const offeringStyle = {
    backgroundColor: 'white', // Placeholder color
    borderRadius: '10px',
    width: isMobile ? '100%' : '300px',
    margin: '10px',
    padding: '20px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    textAlign: 'center',
  };

  const offeringImageStyle = {
    width: '50px',
    height: '50px',
    marginBottom: '10px',
  };

  // Dummy data for the offerings
  const offerings = [
    // ... Your offerings data
  ];

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Why Hurley Piano?</h1>
      <h2 style={subheadingStyle}>We offer unique music lessons</h2>
      <div style={offeringContainerStyle}>
        {offerings.map((offering) => (
          <div key={offering.id} style={offeringStyle}>
            <img style={offeringImageStyle} src={offering.icon} alt={offering.title} />
            <h3>{offering.title}</h3>
            <p style={{ color: 'grey', fontSize: '14px' }}>
              {offering.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EasyLearning;
