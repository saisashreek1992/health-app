import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../user/shared/Navbar";

const UploadDietChart = () => {
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
                                htmlFor="calories-low-value"
                                className="form__Label-Heading"
                              >
                                Calories Range (Lower Value)
                              </label>
                              <input
                                type="text"
                                name="calories-low-value"
                                id="calories-low-value"
                                autoComplete="given-name"
                                className="form__Input"
                              />
                            </div>
                            <div className="form__Cols--Span-6">
                              <label
                                htmlFor="calories-high-value"
                                className="form__Label-Heading"
                              >
                                Calories Range (Upper Value)
                              </label>
                              <input
                                type="text"
                                name="calories-high-value"
                                id="calories-high-value"
                                autoComplete="given-name"
                                className="form__Input"
                              />
                            </div>
                            <div className="form__Cols--Span-6">
                              <label
                                htmlFor="carbohydrates-low-value"
                                className="form__Label-Heading"
                              >
                                Carbohydrates Range (Lower Value)
                              </label>
                              <input
                                type="text"
                                name="carbohydrates-low-value"
                                id="carbohydrates-low-value"
                                autoComplete="given-name"
                                className="form__Input"
                              />
                            </div>
                            <div className="form__Cols--Span-6">
                              <label
                                htmlFor="carbohydrates-high-value"
                                className="form__Label-Heading"
                              >
                                Carbohydrates Range (Upper Value)
                              </label>
                              <input
                                type="text"
                                name="carbohydrates-high-value"
                                id="carbohydrates-high-value"
                                autoComplete="given-name"
                                className="form__Input"
                              />
                            </div>
                            <div className="form__Cols--Span-6">
                              <label
                                htmlFor="protiens"
                                className="form__Label-Heading"
                              >
                                Protiens
                              </label>
                              <input
                                type="text"
                                name="protiens"
                                id="protiens"
                                autoComplete="given-name"
                                className="form__Input"
                              />
                            </div>
                            <div className="form__Cols--Span-6">
                              <label
                                htmlFor="fats"
                                className="form__Label-Heading"
                              >
                                Fats
                              </label>
                              <input
                                type="text"
                                name="fats"
                                id="protiens"
                                autoComplete="given-name"
                                className="form__Input"
                              />
                            </div>
                            <div className="form__Cols--Span-6">
                              <label
                                htmlFor="food-type"
                                className="form__Label-Heading"
                              >
                                Select Food Type
                              </label>
                              <select
                                id="food-type"
                                name="food-type"
                                autoComplete="food-type-name"
                                className="form__Select"
                              >
                                <option>Select Food Type</option>
                                <option>Vegetarian</option>
                                <option>Non-Vegetarian</option>
                                <option>Eggtarian</option>
                              </select>
                            </div>
                            <div className="form__Cols--Span-6">
                              <label
                                htmlFor="cuisine-type"
                                className="form__Label-Heading"
                              >
                                Select Cuisine Type
                              </label>
                              <select
                                id="cuisine-type"
                                name="cuisine-type"
                                autoComplete="cuisine-type-name"
                                className="form__Select"
                              >
                                <option>Select Cuisine Type</option>
                                <option>Cuisine A</option>
                                <option>Cuisine B</option>
                                <option>Cuisine C</option>
                                <option>Cuisine D</option>
                              </select>
                            </div>
                            <div className="form__Cols--Span-6">
                              <label htmlFor="dietchart" className="form__Label-Heading">Select Diet Chart File</label>
                              <input
                                type="file"
                                name="dietchart"
                                id="dietchart"
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

export default UploadDietChart;
