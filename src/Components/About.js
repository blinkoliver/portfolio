import React from "react";
import { useTranslation } from "react-i18next";

const About = (props) => {
  const { data } = props;
  if (data) {
    var { name, bio, image, phone, email, resumeDownload } = data;
    var { street, city, state, zip } = data.address;
  }
  const { t } = useTranslation();

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={image}
            alt="Tim Baker Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>{t("about_me")}</h2>
          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city} {state}, {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={resumeDownload} className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
