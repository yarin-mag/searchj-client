import React from "react";
import Nav from "../components/Nav";

const OnBoarding = () => {
  const handleChange = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Nav minimal={true} setShowModal={() => {}} showModal={false} />
      <div className="on-boarding">
        <h2>CREATE ACCOUNT</h2>
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="first_name">First Name</label>
            <input
              id="first_name"
              type="text"
              name="first_name"
              placeholder="First Name"
              required={true}
              value={""}
              onChange={handleChange}
            />

            <label>Birthday</label>
            <div className="multiple-input-container">
              <input
                id="dob_day"
                type="number"
                name="dob_day"
                placeholder="DD"
                required={true}
                value={""}
                onChange={handleChange}
              />
              <input
                id="dob_month"
                type="number"
                name="dob_month"
                placeholder="MM"
                required={true}
                value={""}
                onChange={handleChange}
              />
              <input
                id="dob_year"
                type="number"
                name="dob_year"
                placeholder="YYYY"
                required={true}
                value={""}
                onChange={handleChange}
              />
            </div>

            <label>Gender</label>
            <div className="multiple-input-container">
              <input
                id="man-gender-identity"
                type="radio"
                name="gender_identity"
                value="man"
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor="man-gender-identity">Man</label>
              <input
                id="woman-gender-identity"
                type="radio"
                name="gender_identity"
                value="woman"
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor="woman-gender-identity">Woman</label>
              <input
                id="more-gender-identity"
                type="radio"
                name="gender_identity"
                value="more"
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor="more-gender-identity">More</label>
            </div>
            <label htmlFor="show-gender">Show gender on my profile</label>
            <input
              id="show-gender"
              type="checkbox"
              name="show_gender"
              onChange={handleChange}
              checked={false}
            />

            <label>Show Me</label>
            <div className="multiple-input-container">
              <input
                id="front-end-dev-profession-interest"
                type="radio"
                name="profession_interest"
                value="Front End Development"
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor="front-end-profession-interest">
                Front End Development
              </label>
              <input
                id="back-end-dev-profession-interest"
                type="radio"
                name="profession_interest"
                value="Back End Development"
                onChange={handleChange}
                checked={true}
              />
              <label htmlFor="back-end-dev-profession-interest">
                Back End Development
              </label>
              <input
                id="full-stack-dev-profession-interest"
                type="radio"
                name="profession_interest"
                value="Full Stack Development"
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor="full-stack-dev-profession-interest">
                Full Stack Development
              </label>
            </div>

            <label htmlFor="about">About me</label>
            <input
              id="about"
              type="text"
              name="about"
              required={true}
              placeholder="I like to code!"
              value={""}
              onChange={handleChange}
            />

            {/* submit */}

            <input type="submit" />
          </section>
          {/* photo section */}
          <section>
            <label htmlFor="photo">Profile Photo</label>
            <input
              type="url"
              name="url"
              id="url"
              onChange={handleChange}
              required={true}
            />
            {/* preview photo */}
            <div className="photo-container"></div>
          </section>
        </form>
      </div>
    </>
  );
};

export default OnBoarding;
