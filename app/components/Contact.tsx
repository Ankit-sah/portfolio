// pages/contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto  h-full cursor-default  overflow-y-auto scrollbar-none  text-neutral-700  p-20">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form className="space-y-4">
        {/* Add your form fields here */}
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" className="border p-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" className="border p-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" className="border p-2"></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
