import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../user/shared/Navbar";

const CreateForm = () => {
  let navigate = useNavigate();
  const nextStep = () => {
    navigate("/userrole/:roleid/dashboard/doctor/");
  };

  return (
    <>
      <div className="dashboard__Container">
        <Navbar />
        <main>
          <div className="dashboard__Main-Content">
            {/* Replace with your content */}
            <div className="dashboard__Main-Inner-Content">
              <div>
                <div className="dashboard__Grid-Box">
                  <div className="dashboard__Grid-Cols">
                    <form action="#" method="POST">
                      <div className="form__Box-Shadow">
                        <div className="form__Box-Space">
                          <div className="form__Grid--Cols-6">
                            <div className="form__Cols--Span-6">
                              <label
                                htmlFor="form-title"
                                className="form__Label-Heading"
                              >
                                Form Title
                              </label>
                              <input
                                type="text"
                                name="form-title"
                                id="form-title"
                                autoComplete="given-name"
                                className="form__Input"
                              />
                            </div>
                            <div className="form__Cols--Span-6 form__Gap-1">
                              <button
                                type="submit"
                                className="form__Btn-Green"
                              >
                                Create Form
                              </button>
                            </div>
                          </div>
                          <div className="form__Grid--Cols-6">
                            <div className="form__Cols--Span-6">
                              <label
                                htmlFor="question-type"
                                className="form__Label-Heading"
                              >
                                Question Type
                              </label>
                              <select
                                id="question-type"
                                name="question-type"
                                autoComplete="question-type-name"
                                className="form__Select"
                              >
                                <option>Select Question Type</option>
                                <option>Radio Type</option>
                                <option>Checkbox Type</option>
                                <option>Text Area [Input will be text]</option>
                              </select>
                            </div>
                          </div>
                          <div className="form__Grid--Rows-none">
                            <div className="form__Cols--Span-6">
                              <label
                                htmlFor="question-title"
                                className="form__Label-Heading"
                              >
                                Question Title
                              </label>
                              <input
                                type="text"
                                name="question-title"
                                id="question-title"
                                autoComplete="given-name"
                                className="form__Input"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-6 gap-6">
                            <div className="form__Cols--Span-3">
                              <label
                                htmlFor="question-choice-1"
                                className="form__Label-Heading"
                              >
                                Question Choices
                              </label>
                              <input
                                type="text"
                                name="question-choice-1"
                                id="question-choice-1"
                                autoComplete="given-name"
                                className="form__Input"
                              />
                            </div>
                            <div className="form__Cols--Span-3">
                              <label
                                htmlFor="question-choice-2"
                                className="form__Label-Heading"
                              >
                                Question Choices
                              </label>
                              <input
                                type="text"
                                name="question-choice-2"
                                id="question-choice-2"
                                autoComplete="given-name"
                                className="form__Input"
                              />
                            </div>
                            <div className="form__Cols--Span-3">
                              <label
                                htmlFor="question-choice-3"
                                className="form__Label-Heading"
                              >
                                Question Choices
                              </label>
                              <input
                                type="text"
                                name="question-choice-3"
                                id="question-choice-3"
                                autoComplete="given-name"
                                className="form__Input"
                              />
                            </div>
                            <div className="form__Cols--Span-3">
                              <label
                                htmlFor="question-choice-4"
                                className="form__Label-Heading"
                              >
                                Question Choices
                              </label>
                              <input
                                type="text"
                                name="question-choice-4"
                                id="question-choice-4"
                                autoComplete="given-name"
                                className="form__Input"
                              />
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

export default CreateForm;
