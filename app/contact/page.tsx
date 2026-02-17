'use client'

import { useState } from "react";

export default function contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email.includes("@")) {
      setError("Please enter a valid email address (must contain @).");
      return;
    }

    // For now, just simulate sending
    setSuccess("Message sent");
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <main className="min-h-screen bg-[#6E8480] p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">Contact Me</h1>

      <div className="bg-white/10 p-6 rounded-md max-w-2xl mb-6 w-full mx-auto text-center">
        <p className="text-white mb-4">
          Feel free to reach out to me through any of the following methods:
        </p>
        <ul className="list-none pl-5 text-white space-y-2">
          <li>Email: isaacsantos0902@gmail.com</li>
          <li>GitHub: https://github.com/IsaacSantos1</li>
          <li>LinkedIn: https://www.linkedin.com/in/isaac-santos-4370b02b3</li>
        </ul>
      </div>

      <div className="bg-white/10 p-6 rounded-md max-w-2xl w-full mx-auto text-center">
        <h2 className="text-xl font-semibold text-white mb-4">Send a message</h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-left mx-auto" style={{maxWidth: 540}}>
          <div>
            <label className="block text-sm text-white mb-1 text-center">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded bg-white/5 text-white border border-white/20"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm text-white mb-1 text-center">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded bg-white/5 text-white border border-white/20"
              placeholder="you@example.com"
              aria-describedby="emailHelp"
            />
          </div>

          <div>
            <label className="block text-sm text-white mb-1 text-center">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 rounded bg-white/5 text-white border border-white/20 h-32"
              placeholder="Write your message here"
            />
          </div>

          {error && <p className="text-sm text-rose-400">{error}</p>}
          {success && <p className="text-sm text-teal-200">{success}</p>}

          <div className="flex gap-3">
            <button
              type="submit"
              className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded"
            >
              Send
            </button>
            <button
              type="button"
              onClick={() => {
                setName("");
                setEmail("");
                setMessage("");
                setError("");
                setSuccess("");
              }}
              className="px-4 py-2 bg-white/10 text-white rounded"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}