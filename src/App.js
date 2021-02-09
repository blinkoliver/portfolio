import React, { useState, useEffect } from "react";
import { CssBaseline, Container } from "@material-ui/core";
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";
import useStyles from "./AppClasses";

const App = () => {
  const [resumeData, setResumeData] = useState({});
  const getResumeData = () => {
    fetch("/resumeData.json")
      .then((response) => response.json())
      .then((json) => setResumeData(json));
  };
  const appClasses = useStyles();
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  useEffect(() => {
    getResumeData();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Container className={appClasses.container}>
        <CssBaseline />
        <Header data={resumeData.main} />
        <Home data={resumeData.main} />
        <About data={resumeData.main} />
        <Resume data={resumeData.resume} />
        <Portfolio data={resumeData.portfolio} />
        <Testimonials data={resumeData.testimonials} />
        <Contact data={resumeData.main} />
        <Footer data={resumeData.main} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
