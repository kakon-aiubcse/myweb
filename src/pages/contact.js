import React from "react";

const ContactPage = () => {
  return (
    <>
      <div className="flex bg-slate-50 h-[589px] space-x-10 overflow-hidden p-20">
        {/* First Div (Image and Words) */}
        <div className="relative w-1/2 h-full flex flex-col items-center justify-center bg-gray-100 border border-gray-300 rounded-lg">
          {/* Image Section */}
          <div className="relative w-full h-1/2">
            <img
              src="/mine2.png"
              alt="Background"
              className="object-cover w-full h-full rounded-t-lg"
            />
          </div>
          {/* Text Section */}
          <div className="relative w-full h-1/2 flex flex-col justify-center items-center bg-orange-600 text-slate-100 p-6 rounded-b-lg">
            <h2 className="text-2xl font-semibold">Thanks for your wishes.</h2>
            <p className="mt-2 text-center">
              Feel free to send a message to me
            </p>
          </div>
        </div>
        {/* Second Div (Contact Form) */}
        <div className="relative w-1/2 h-full flex items-center justify-center bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="max-w-md w-full p-8">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Connect here!
            </h1>
            <form className="space-y-4">
              <div>
                <input
                  placeholder="Enter your name"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Share your thoughts with me"
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>
              <button
                type="button"
                className="w-full bg-rose-500 text-white py-2 rounded-md hover:bg-slate-600 hover:text-rose-500 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
