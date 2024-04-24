import React, { useState } from "react";
import Nav from "../components/Nav";
import { useDropzone } from "react-dropzone";
import { professions } from "./Onboarding";

export const OnBoarding = () => {
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
    avatar: null,
  });
  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setFormData((prevFormData) => ({ ...formData, avatar: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

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
            <div
              {...getRootProps()}
              style={{
                border: "1px solid black",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <input {...getInputProps()} />
              {!formData.avatar &&
                ((<p>Drag & drop an image here, or click to select one</p>),
                (
                  <div>
                    {formData.photo_url !== "" && (
                      <img
                        src={formData.photo_url}
                        alt="profile picture is missing"
                      />
                    )}
                  </div>
                ))}
              {/* TODO -> make an option to upload the photo */}
              {/* <label htmlFor="avatar">Profile Photo</label>
            <input
              type="url"
              name="avatar"
              id="avatar"
              onChange={handleChange}
              value={formData.avatar}
              required={true}
              /> */}
            </div>

            {/* TODO -> make photo preview after uploading */}
          </section>
        </form>
      </div>
    </>
  );
};
