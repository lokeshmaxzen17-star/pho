import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Work from "./pages/Work";
import Service from "./pages/Service";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Footer from "../src/pages/Footer";

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 pb-20">
        <Hero/>
        <Work />
        <Service />
        <About />
        <Contact /> 
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Intro Screen */}
        <Route path="/" element={<Intro />} />

        {/* Main Website */}
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
