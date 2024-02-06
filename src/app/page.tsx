"use client";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Projects from "./components/projects";
import Welcome from "./components/welcome";

export default function Home() {
  return (
    <main>
      <Welcome />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
