import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Assests/rlogo.jpg";

export default function Intro() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleEnter = () => navigate("/home");

    // Disable scroll while intro is visible
    document.body.style.overflow = "hidden";

    window.addEventListener("click", handleEnter);
    window.addEventListener("keydown", handleEnter);
    window.addEventListener("touchstart", handleEnter);

    return () => {
      document.body.style.overflow = "auto"; // Re-enable scroll after leaving intro
      window.removeEventListener("click", handleEnter);
      window.removeEventListener("keydown", handleEnter);
      window.removeEventListener("touchstart", handleEnter);
    };
  }, [navigate]);

  return (
    <div className="fixed inset-0 z-[9999] flex h-screen w-screen items-center justify-center bg-black">
      
      {/* Soft Glow */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#1f1f1f] opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-[#1a1a1a] opacity-40 blur-3xl" />

      {/* Center Logo */}
      <div className="relative flex flex-col items-center gap-4 animate-[fadeInUp_1s_ease-out]">
        <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-2xl shadow-black/50">
          <img
            src={logo}
            alt="Revanth Creative Studio logo"
            className="h-24 w-24 rounded-full object-contain"
          />
        </div>

        <p className="text-xs uppercase tracking-[0.4em] text-[var(--accent)]">
          Revanth Creative Studio
        </p>

        <p className="font-display text-2xl text-white md:text-3xl">
          Photography & Visual Stories
        </p>

        <p className="mt-6 text-xs uppercase tracking-[0.35em] text-[var(--ink-soft)] opacity-20">
          Tap / Click anywhere to enter
        </p>
      </div>
    </div>
  );
}
