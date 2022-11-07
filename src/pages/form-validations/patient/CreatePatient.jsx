import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stepper } from "react-form-stepper";
import Navbar from "../../../user/shared/Navbar";

const CreatePatient = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [dob, setDob] = useState('')
  const [gender, setGender] = useState('')
  let navigate = useNavigate();

  const nextStep = () => {
    navigate("/userrole/:roleid/dashboard/doctor/enrol/healthinfo/",{state:{number,name,email,dob,gender}});
  };

  return (
    <>
      <div className="dashboard__Container">
        
        <Navbar />
        <main>
          <div className="dashboard__Main-Content">
            {/* Replace with your content */}
            <div className="dashboard__Main-Inner-Content">
              <Stepper
                steps={[
                  { label: "CreatePatient" },
                  { label: "PatientHealthInfo" },
                  { label: "PatientPersonalInfo" },
                ]}
                activeStep={0}
              />
              <div>
                <div className="dashboard__Grid-Box">
                  <div className="dashboard__Grid-Cols">
                    <form onSubmit={nextStep}>
                      <div className="form__Box-Shadow">
                        <div className="form__Box-Space">
                          <div className="form__Grid--Cols-2">
                            <div className="form__Cols--Span-2">
                              <label className="form__Label-Heading">
                                Photo
                              </label>
                              <div className="form__Flex-ImgBox">
                                <span className="form__Flex-SpanBox">
                                  <svg
                                    className="form__Flex-Svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                  </svg>
                                </span>
                                <button
                                  type="button"
                                  className="form__Flex-Btn"
                                >
                                  Change
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="form__Grid--Cols-6">
                            <div className="form__Cols--Span-6">
                              <label
                                htmlFor="phone"
                                className="form__Label-Heading"
                              >
                                Patient Phone Number
                              </label>
                              <input
                                onChange={(e)=>setNumber(e.target.value)}
                                type="tel"
                                name="phone"
                                required
                                id="phone"
                                autoComplete="given-name"
                                className="form__Input"
                              />
                            </div>
                            <div className="form__Cols--Span-6">
                              <label
                                htmlFor="full-name"
                                className="form__Label-Heading"
                              >
                                Patient Full Name
                              </label>
                              <input
                                onChange={(e)=>setName(e.target.value)}
                                type="text"
                                required
                                name="full-name"
                                id="full-name"
                                autoComplete="given-name"
                                className="form__Input"
                              />
                            </div>
                            <div className="form__Cols--Span-6">
                              <label
                                htmlFor="email"
                                className="form__Label-Heading"
                              >
                                Patient Email
                              </label>
                              <input
                                onChange={(e)=>setEmail(e.target.value)}
                                type="email"
                                name="mail"
                                required
                                id="mail"
                                autoComplete="given-name"
                                className="form__Input"
                              />
                            </div>
                            <div className="form__Cols--Span-6">
                              <label
                                htmlFor="dob"
                                className="form__Label-Heading"
                              >
                                Patient D.O.B
                              </label>
                              <input
                                onChange={(e)=>setDob(e.target.value)}
                                type="date"
                                name="dob"
                                required
                                id="dob"
                                autoComplete="given-name"
                                className="form__Input"
                              />
                            </div>
                            <div className="form__Cols--Span-6">
                              <label
                                htmlFor="gender"
                                className="form__Label-Heading"
                              >
                                Patient Gender
                              </label>
                              <select
                                onChange={(e)=>setGender(e.target.value)}
                                id="gender"
                                name="gender"
                                required
                                autoComplete="gender-name"
                                className="form__Select"
                              >
                                <option>Select Patient Gender</option>
                                <option value='male'>Male</option>
                                <option value='fe-male'>Fe-Male</option>
                                <option value='other'>Other</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="form__Btn-Bg">
                          <button
                          
                            type="submit"
                            className="form__Btn-Submit"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
};

export default CreatePatient;
