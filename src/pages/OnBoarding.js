import React, { useState } from "react";
import Nav from "../components/Nav";

// TODO -> move to different file and export them
const professions = {
  "full-stack-dev": { value: "Full Stack Development", id: "full_stack_id" },
  "front-end-dev": { value: "Front End Development", id: "front_end_id" },
  "back-end-dev": { value: "Back End Development", id: "back_end_id" },
  "ui-ux-designer": { value: "UI/UX Designer", id: "ui_ux_id" },
  "data-scientist": { value: "Data Scientist", id: "data_scientist_id" },
  "mobile-app-dev": { value: "Mobile App Developer", id: "mobile_dev_id" },
  "network-engineer": { value: "Network Engineer", id: "network_engineer_id" },
  "security-analyst": { value: "Security Analyst", id: "security_analyst_id" },
  "cloud-architect": { value: "Cloud Architect", id: "cloud_architect_id" },
  "game-developer": { value: "Game Developer", id: "game_dev_id" },
};

const OnBoarding = () => {
  const [formData, setFormData] = useState({
    user_id: "",
    first_name: "",
    dob_day: "",
    dob_month: "",
    dob_year: "",
    show_gender: false,
    gender_identity: "man",
    profession_interest: [],
    about: "",
    photo_url: "",
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // For checkboxes (multiple professions selections)
    if (type === "checkbox" && name === "profession_interest") {
      const updatedProfessions = checked
        ? [...formData.profession_interest, value]
        : formData.profession_interest.filter(
            (profession) => profession !== value
          );
      setFormData((prevFormData) => ({
        ...prevFormData,
        profession_interest: updatedProfessions,
      }));
    } else if (type === "checkbox" && name === "show_gender" && checked) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        show_gender: value,
      }));
    } else if (type === "radio" && name === "gender_identity" && checked) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        gender_identity: value,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO -> remove this for loop, only for debug
    // console.log("You just submitted");
    // for (const entry of Object.entries(formData)) {
    //   const [key, value] = entry;
    //   console.log(`For key ${key} | value is ${value}`);
    // }
    // TODO -> validate the form by some needed conditinos
    let validatedForm = true;
    if (validatedForm) {
      resetForm();
    }
  };

  const resetForm = () => {
    setFormData({
      user_id: "",
      first_name: "",
      dob_day: "",
      dob_month: "",
      dob_year: "",
      show_gender: false,
      gender_identity: "man",
      profession_interest: [],
      about: "",
      photo_url: "",
    });
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
              value={formData.first_name}
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
                value={formData.dob_day}
                onChange={handleChange}
              />
              <input
                id="dob_month"
                type="number"
                name="dob_month"
                placeholder="MM"
                required={true}
                value={formData.dob_month}
                onChange={handleChange}
              />
              <input
                id="dob_year"
                type="number"
                name="dob_year"
                placeholder="YYYY"
                required={true}
                value={formData.dob_year}
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
                checked={formData.gender_identity === "man"}
              />
              <label htmlFor="man-gender-identity">Man</label>
              <input
                id="woman-gender-identity"
                type="radio"
                name="gender_identity"
                value="woman"
                onChange={handleChange}
                checked={formData.gender_identity === "woman"}
              />
              <label htmlFor="woman-gender-identity">Woman</label>
              <input
                id="more-gender-identity"
                type="radio"
                name="gender_identity"
                value="more"
                onChange={handleChange}
                checked={formData.gender_identity === "more"}
              />
              <label htmlFor="more-gender-identity">More</label>
            </div>
            <label htmlFor="show-gender">Show gender on my profile</label>
            <input
              id="show-gender"
              type="checkbox"
              name="show_gender"
              onChange={handleChange}
              checked={formData.show_gender}
            />

            <label>Searching for</label>
            <div className="multiple-professions-container">
              {Object.keys(professions).map((professionKey) => (
                <div key={professionKey}>
                  <input
                    type="checkbox"
                    id={professionKey}
                    name="profession_interest"
                    value={professionKey}
                    checked={formData.profession_interest.includes(
                      professionKey
                    )}
                    onChange={handleChange}
                  />
                  <label htmlFor={professionKey}>
                    {professions[professionKey].value}
                  </label>
                </div>
              ))}
            </div>

            <label htmlFor="about">About me</label>
            <input
              id="about"
              type="text"
              name="about"
              required={true}
              placeholder="I like to code!"
              value={formData.about}
              onChange={handleChange}
            />

            {/* submit */}

            <input type="submit" />
          </section>
          {/* photo section */}
          <section>
            {/* TODO -> make an option to upload the photo */}
            <label htmlFor="photo_url">Profile Photo</label>
            <input
              type="url"
              name="photo_url"
              id="photo_url"
              onChange={handleChange}
              value={formData.photo_url}
              required={true}
            />
            {/* TODO -> make photo preview after uploading */}
            <div className="photo-container">
              {formData.photo_url !== "" && (
                <img
                  src={formData.photo_url}
                  alt="profile picture is missing"
                />
              )}
            </div>
          </section>
        </form>
      </div>
    </>
  );
};

export default OnBoarding;
