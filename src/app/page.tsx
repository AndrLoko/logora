"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <header className="shadow-md py-4 px-6 flex justify-between items-center bg-gray-800">
        <div className="flex">
          <Image src="/logo.png" alt="Logo" width={30} height={30} className="mr-3"/>
          <h1 className="text-[20px] font-bold text-white">Logora</h1>
        </div>
        <div>
          <a href="/login" className="mr-4 hover:text-blue-400">Log In</a>
          <a href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Sign Up
          </a>
        </div>
      </header>

      {/* Main Section */}
      <main
        className="relative flex flex-col items-center justify-center text-center py-16 px-6 bg-cover bg-center h-screen"
        style={{ backgroundImage: "url(/hero-img.jpg)", backgroundSize: "cover", height: "50vh" }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url(/hero-img.jpg)",
            filter: "blur(5px)", 
            zIndex: "-1",
            backgroundSize: "cover",
          }}
        ></div>

        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold px-4 py-2 rounded-lg"
        >
          Welcome to Logora
        </motion.h2>
        <p className="mt-4 max-w-2xl text-lg px-4 py-2 rounded-lg">
          Your digital journal to track progress, assignments, and schedules.
        </p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="/register"
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Get Started
        </motion.a>
      </main>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-12 bg-gray-800 shadow-md">
        {[
          { icon: "📊", title: "Grades", desc: "Track your academic progress in real-time" },
          { icon: "📅", title: "Schedule", desc: "Stay updated with upcoming classes" },
          { icon: "📖", title: "Homework", desc: "All assignments in one place" }
        ].map((item, index) => (
          <motion.div key={index} className="text-center p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-blue-400">{item.icon} {item.title}</h3>
            <p className="mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* User Reviews */}
      <section className="py-12 px-6 mt-20 mb-20">
        <h2 className="text-3xl font-bold text-center">User Reviews</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Alex", "Maria", "John"].map((name, i) => (
            <motion.div key={i} className="bg-gray-800 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              <h3 className="font-semibold text-lg">{name}</h3>
              <p className="text-gray-400 mt-2">Great platform! Makes studying so much easier.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 px-6 bg-gray-800">
        <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4">
          {["How do I sign up?", "Can I check my grades?", "Is there a mobile app?"].map((question, i) => (
            <details key={i} className="bg-gray-700 p-4 rounded-lg shadow-md">
              <summary className="font-semibold cursor-pointer">{question}</summary>
              <p className="mt-2 text-gray-400">Yes! Just sign up and start using Logora right away.</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-auto">
        <p>© 2025 Logora. All rights reserved.</p>
        <p className="mt-2">📧 support@logora.com</p>
      </footer>
    </div>
  );
}
