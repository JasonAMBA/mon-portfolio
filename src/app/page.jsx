"use client"
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}
