import React from "react";
import { useNavigate } from "react-router-dom";
import { Stepper } from "react-form-stepper";
import Navbar from "../../../user/shared/Navbar";

const PatientHealthInfo = () => {
  let navigate = useNavigate();

  const nextStep = () => {
    navigate("/userrole/:roleid/dashboard/doctor/enrol/personalinfo/");
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
                activeStep={1}
              />
              <div className="dashboard__Grid-Box">
                <div className="dashboard__Grid-Cols">
                  <form action="#" method="POST">
                    <div className="form__Box-Shadow">
                      <div className="form__Box-Space">
                        <div className="form__Grid--Cols-6">
                          <div className="form__Cols--Span-6">
                            <label
                              htmlFor="height"
                              className="form__Label-Heading"
                            >
                              Patient Height
                            </label>
                            <input
                              type="text"
                              name="height"
                              id="hight"
                              autoComplete="given-name"
                              className="form__Input"
                            />
                          </div>
                          <div className="form__Cols--Span-6">
                            <label
                              htmlFor="weight"
                              className="form__Label-Heading"
                            >
                              Patient Weight
                            </label>
                            <input
                              type="text"
                              name="weight"
                              id="weight"
                              autoComplete="given-name"
                              className="form__Input"
                            />
                          </div>
                          <div className="form__Cols--Span-6">
                            <label
                              htmlFor="caretaker-name"
                              className="form__Label-Heading"
                            >
                              Caretakers Full Name
                            </label>
                            <input
                              type="text"
                              name="caretaker-name"
                              id="caretaker-name"
                              autoComplete="given-name"
                              className="form__Input"
                            />
                          </div>
                          <div className="form__Cols--Span-6">
                            <label
                              htmlFor="relation"
                              className="form__Label-Heading"
                            >
                              Caretakers Relation
                            </label>
                            <select
                              id="relation"
                              name="relation"
                              autoComplete="relation-name"
                              className="form__Select"
                            >
                              <option>Select Caretakers Relation</option>
                              <option>Father</option>
                              <option>Mother</option>
                              <option>Son</option>
                              <option>Daughter</option>
                              <option>Son-In-Law</option>
                              <option>Daughter-In-Law</option>
                            </select>
                          </div>
                          <div className="form__Cols--Span-6">
                            <label
                              htmlFor="caretaker-number"
                              className="form__Label-Heading"
                            >
                              Caretakers Phone Number
                            </label>
                            <input
                              type="tel"
                              name="caretaker-number"
                              id="caretaker-number"
                              autoComplete="given-name"
                              className="form__Input"
                            />
                          </div>
                          <div className="form__Cols--Span-6">
                            <label
                              htmlFor="pref-time"
                              className="form__Label-Heading"
                            >
                              Caretakers Preferred Time
                            </label>
                            <input
                              type="time"
                              name="pref-time"
                              id="pref-time"
                              autoComplete="given-name"
                              className="form__Input"
                            />
                          </div>
                          <div className="form__Cols--Span-6">
                            <label
                              htmlFor="health-plan"
                              className="form__Label-Heading"
                            >
                              Health Plan
                            </label>
                            <select
                              id="health-plan"
                              name="health-plan"
                              autoComplete="health-plan-name"
                              className="form__Select"
                            >
                              <option>Select Health Plan</option>
                              <option>Plan A</option>
                              <option>Plan B</option>
                              <option>Plan C</option>
                              <option>Plan D</option>
                            </select>
                          </div>
                          <div className="form__Cols--Span-6">
                            <label
                              htmlFor="plan-date"
                              className="form__Label-Heading"
                            >
                              Health Plan Date (Start + End)
                            </label>
                            <input
                              type="date"
                              name="plan-date"
                              id="plan-date"
                              autoComplete="given-name"
                              className="form__Input"
                            />
                          </div>
                          <div className="form__Cols--Span-6">
                            <label
                              htmlFor="patient-team"
                              className="form__Label-Heading"
                            >
                              Patient Team
                            </label>
                            <select
                              id="patient-team"
                              name="patient-team"
                              autoComplete="patient-team-name"
                              className="form__Select"
                            >
                              <option>Select Patient Team</option>
                              <option>Team A</option>
                              <option>Team B</option>
                              <option>Team C</option>
                              <option>Team D</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="form__Btn-Bg">
                        <div className="text-right">
                          <button
                            onClick={nextStep}
                            type="submit"
                            className="form__Btn-Submit"
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
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

export default PatientHealthInfo;
