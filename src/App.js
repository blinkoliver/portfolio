import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";

const App = () => {
  const [resumeData, setResumeData] = useState({});
  const getResumeData = () => {
    fetch("/resumeData.json")
      .then((response) => response.json())
      .then((json) => setResumeData(json));
  };
  useEffect(() => {
    getResumeData();
  }, []);

  return (
    <div className="App">
      <section>
        <Header data={resumeData.main} />
        <About data={resumeData.main} />
        <Resume data={resumeData.resume} />
        <Portfolio data={resumeData.portfolio} />
        <Testimonials data={resumeData.testimonials} />
        <Contact data={resumeData.main} />
        <Footer data={resumeData.main} />
      </section>
    </div>
  );
};

export default App;
