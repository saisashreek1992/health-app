import React from "react";
import { useNavigate } from "react-router-dom";
import { Stepper } from "react-form-stepper";
import Navbar from "../../../user/shared/Navbar";

const CreatePatient = () => {
  let navigate = useNavigate();

  const nextStep = () => {
    navigate("/userrole/:roleid/dashboard/doctor/enrol/healthinfo/");
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
                    <form action="#" method="POST">
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
                                type="tel"
                                name="phone"
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
                                type="text"
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
                                type="email"
                                name="mail"
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
                                type="date"
                                name="dob"
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
                                id="gender"
                                name="gender"
                                autoComplete="gender-name"
                                className="form__Select"
                              >
                                <option>Select Patient Gender</option>
                                <option>Male</option>
                                <option>Fe-Male</option>
                                <option>Other</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="form__Btn-Bg">
                          <button
                            onClick={nextStep}
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
