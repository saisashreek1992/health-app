import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Stepper } from 'react-form-stepper';
import Navbar from "../../../user/shared/Navbar";

const PatientPersonalInfo = () => {
    let navigate = useNavigate();

    const nextStep = () => {
        navigate('/userrole/:roleid/dashboard/doctor/');
      };

  return (
    <>
      <div className="dashboard__Container">
        <Navbar />
        <main>
          <div className="dashboard__Main-Content">
            {/* Replace with your content */}
            <div className="dashboard__Main-Inner-Content">
              <Stepper steps={[{ label: 'CreatePatient' }, { label: 'PatientHealthInfo' }, { label: 'PatientPersonalInfo' }]} activeStep={4} />
              <div className="dashboard__Grid-Box">
                <div className="dashboard__Grid-Cols">
                  <form action="#" method="POST">
                    <div className="form__Box-Shadow">
                      <div className="form__Box-Space">
                        <div className="form__Grid--Cols-6">
                          <div className="form__Cols--Span-6">
                            <label
                              htmlFor="amount"
                              className="form__Label-Heading"
                            >
                              Amount To Be Paid
                            </label>
                            <input
                              type="text"
                              name="amount"
                              id="amount"
                              autoComplete="given-name"
                              className="form__Input"
                            />
                          </div>
                          <div className="form__Cols--Span-6">
                            <label
                              htmlFor="payment-mode"
                              className="form__Label-Heading"
                            >
                              Payment Mode
                            </label>
                            <select
                              id="payment-mode"
                              name="payment-mode"
                              autoComplete="payment-mode-name"
                              className="form__Select"
                            >
                              <option>Select Payment Mode</option>
                              <option>Cash</option>
                              <option>Card</option>
                              <option>Online</option>
                            </select>
                          </div>
                          <div className="form__Cols--Span-6">
                            <label
                              htmlFor="payment-date"
                              className="form__Label-Heading"
                            >
                              Payment Date
                            </label>
                            <input
                              type="date"
                              name="payment-date"
                              id="payment-date"
                              autoComplete="given-name"
                              className="form__Input"
                            />
                          </div>
                          <div className="form__Cols--Span-6">
                            <label
                              htmlFor="ref-id"
                              className="form__Label-Heading"
                            >
                              Ref. Id
                            </label>
                            <input
                              type="text"
                              name="ref-id"
                              id="ref-id"
                              autoComplete="given-name"
                              className="form__Input"
                            />
                          </div>
                          <div className="form__Cols--Span-6">
                            <label
                              htmlFor="next-date"
                              className="form__Label-Heading"
                            >
                              Next Payment Date
                            </label>
                            <input
                              type="date"
                              name="next-date"
                              id="next-date"
                              autoComplete="given-name"
                              className="form__Input"
                            />
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
                            Finish
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
  )
}

export default PatientPersonalInfo