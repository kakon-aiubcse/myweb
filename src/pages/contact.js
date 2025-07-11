import React, { useState, useEffect } from "react";
import Header from "./header";
import Spinner from "./component/spinner";
import { useRouter } from "next/router";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const isRootPage = router.pathname === "/";

  useEffect(() => {
    // Simulate load, or use actual data fetch
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 👈 Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);

  if (loading && !isRootPage) {
    return <Spinner />;
  }

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
      <div
        className="flex bg-slate-50 h-[589px] space-x-10 overflow-hidden p-20
      xs:flex xs:bg-slate-50 xs:min-h-screen xs:p-2 xs:flex-col xs:space-y-10 xs:overflow-y-auto"
      >
        <div
          className="relative w-1/2 h-full flex flex-col items-center justify-center bg-gray-100 border border-gray-300 rounded-lg
        xs:relative xs:w-full xs:h-1/2 xs:flex xs:flex-col xs:items-center xs:justify-center xs:bg-gray-100 xs:border xs:border-gray-300 xs:rounded-md"
        >
          <div className="relative w-full h-1/2 xs:relative xs:w-full xs:h-36 xs:top-0">
            <img
              src="/mine2.png"
              alt="Background"
              className="object-cover w-full h-full rounded-t-lg"
            />
          </div>
          <div className="relative w-full h-1/2 flex flex-col justify-center items-center bg-slate-950 text-slate-100 p-6 rounded-b-lg xs:text-[20px]">
            <h2 className="text-2xl font-semibold">Thanks for your wishes.</h2>
            <p className="mt-2 text-center">
              Feel free to send a message to me.
            </p>
          </div>
        </div>

        <div
          className="relative w-1/2 h-full flex items-center justify-center bg-white border border-gray-300 rounded-lg shadow-lg
        xs:relative xs:w-full  xs:right-10 xs:top-[-10px]"
        >
          <div className="max-w-md w-full p-8  xs:relative xs:p-4 xs:top-[-15px]">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6 xs:text-[35px] xs:text-sky-700">
              Send Message!
            </h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  placeholder="Your name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Share your thoughts with me"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-sky-500 text-white py-2 rounded-md hover:bg-slate-600 hover:text-rose-500 transition duration-200"
              >
                Submit
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
