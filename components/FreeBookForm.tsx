import React from 'react';

const FreeBookForm = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-pink-200 rounded-full p-6 md:p-12 my-12 mx-auto max-w-6xl">
      <div className="flex-1 text-center md:text-left md:mr-8">
        <h1 className="text-4xl md:text-5xl font-bold text-black">
          Get Your <span className="underline text-pink-500">FREE</span> Book
        </h1>
        <p className="mt-4 text-black text-sm md:text-base">
          Teach your toddler music even though you never learned music yourself.
          Get your <strong>FREE</strong> starter book and teach your little one music most efficiently.
        </p>
      </div>
      <form className="flex flex-col mt-8 md:mt-0 w-full max-w-md md:w-auto" action="#" method="POST">
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Full Name"
          className="mt-2 p-2 rounded-lg text-lg"
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="E-mail"
          className="mt-2 p-2 rounded-lg text-lg"
          required
        />
        <button
          type="submit"
          className="mt-4 bg-red-500 text-white rounded-full py-2 px-6 hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default FreeBookForm;
