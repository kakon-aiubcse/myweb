import React, { useState } from "react";
import Header from "./header";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/submitmsg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred.");
    }
  };

  return (
    <>
      <Header />
      <div className="flex bg-slate-50 h-[589px] space-x-10 overflow-hidden p-20">
        <div className="relative w-1/2 h-full flex flex-col items-center justify-center bg-gray-100 border border-gray-300 rounded-lg">
          <div className="relative w-full h-1/2">
            <img
              src="/mine2.png"
              alt="Background"
              className="object-cover w-full h-full rounded-t-lg"
            />
          </div>
          <div className="relative w-full h-1/2 flex flex-col justify-center items-center bg-orange-600 text-slate-100 p-6 rounded-b-lg">
            <h2 className="text-2xl font-semibold">Thanks for your wishes.</h2>
            <p className="mt-2 text-center">Feel free to send a message</p>
          </div>
        </div>
        <div className="relative w-1/2 h-full flex items-center justify-center bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="max-w-md w-full p-8">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Connect here!
            </h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  placeholder="Enter your name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Share your thoughts with me"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-rose-500 text-white py-2 rounded-md hover:bg-slate-600 hover:text-rose-500 transition duration-200"
              >
                Send Message
              </button>
            </form>
            {status && <p className="text-center mt-4">{status}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
