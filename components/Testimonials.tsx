import React from 'react';

const Testimonials = () => {
  const StarRating = () => (
    <div className="flex justify-center mb-4">
      {[...Array(5)].map((_, i) => (
        <img
          key={i}
          src="/images/TestimonialStar.png" 
          alt="star"
          className="h-6 w-6" // Adjust the size as needed(static atm)
        />
      ))}
    </div>
  );

  return (
    <section className="flex flex-col items-center justify-center pt-14 px-11 pb-48 relative z-10">
      <h2 className="text-5xl font-bold text-center mb-16">What People Say About Us</h2>
      <div className="flex flex-row items-center justify-center gap-24 z-20 text-lg text-gray-600 font-montserrat">
        {/* First Testimonial */}
        <figure className="rounded-lg bg-gray-900 shadow-xl p-8 text-black text-center">
          <blockquote className="leading-relaxed mb-4">
            “Hurley Piano’s approach incorporates a variety of strategies including the use of current technology. Hurley Piano is open to work collaboratively with other professionals with kids with ASD.”
          </blockquote>
          <StarRating />
          <figcaption>
            <strong>Christine Gaharan</strong>
            <p className="text-sm">Occupational Therapist</p>
          </figcaption>
        </figure>
        
        {/* Second Testimonial */}
        <figure className="rounded-lg bg-gray-900 shadow-xl p-8 text-black text-center">
          <blockquote className="leading-relaxed mb-4">
            “Richard Hurley’s approach to music instruction emphasize the collaboration with parents and other professionals to deliver a program of instruction that is consistent and highly individualized to meet the needs of each learner”
          </blockquote>
          <StarRating />
          <figcaption>
            <strong>Laura B Moon</strong>
            <p className="text-sm">Owner, KTL Behavioral Therapy and Consultation</p>
          </figcaption>
        </figure>
        {/* ... Additional testimonials */}
      </div>
      {/* Additional elements like background shapes can be added here if needed */}
    </section>
  );
};

export default Testimonials;
