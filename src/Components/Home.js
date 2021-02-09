import React from "react";
import { useTranslation } from "react-i18next";
import useStyles from "./HomeClasses";

const Home = (props) => {
  const { data } = props;
  if (data) {
    var { fio, description, occupation } = data;
    var { city } = data.address;
    var networks = data.social.map((el) => (
      <li key={el.name}>
        <a href={el.url}>
          <i className={el.className}></i>
        </a>
      </li>
    ));
  }
  const homeClasses = useStyles();
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <section className={homeClasses.home} id="home">
      <div className="banner-text">
        <h1 className="responsive-headline">I'm {fio}.</h1>
        <h3>
          I'm a {city} based <span>{occupation}</span>. {description}.
        </h3>
        <ul className="social">{networks}</ul>
      </div>
      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </section>
  );
};
export default Home;
