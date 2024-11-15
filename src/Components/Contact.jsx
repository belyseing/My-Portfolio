import React from "react";

function Contact() {
  return (
    <div className="text-white max-w-2xl mx-auto p-6 bg-gray-950 shadow-lg rounded-lg mt-10">
      <h2 className="font-bold text-2xl mb-6 text-center">
        Contact <span className="text-yellow-400">Me</span>!
      </h2>
      <form className="space-y-4  text-gray-300">
        <div className="flex gap-6">
          <div className="flex-1">
            <label htmlFor="FirstName" className="block mb-1">
              First Name
            </label>
            <input
              type="text"
              id="First Name"
              name="Firstname"
              required
              className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          <div className="flex-1">
            <label htmlFor="LastName" className="block mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="Last Name"
              name="LastName"
              className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex-1">
            <label htmlFor="Phone" className="block mb-1">
              Mobile Phone
            </label>
            <input
              type="tel"
              id="Phone"
              name="Phone"
              required
              pattern="[0-9]{10}"
              placeholder="1234567890"
              className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>
          <div className="flex-1 pt-1">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="Message" className="block mb-1">
            Your Message
          </label>
          <textarea
            name="Message"
            id="Message"
            className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:ring-yellow-500 focus:border-yellow-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-6 mt-4 bg-yellow-600 hover:bg-yellow-500 text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        >
          Send Message
        </button>
      </form>
    </div>
    
    
  );
}

export default Contact;
