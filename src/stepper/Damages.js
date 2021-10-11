import React from "react";
import "./GeneralComponent.css";
import { green, yellow, red } from "@mui/material/colors";
import Radio from "@mui/material/Radio";

const Damages = () => {
  const [selectedValue, setSelectedValue] = React.useState(" ");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (key, item) => ({
    checked: selectedValue === `${key}-${item}`,
    onChange: handleChange,
    value: `${key}-${item}`,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <div className="wrapper">
      <div className="innerWrapper">
        <div className="container">
          <form>
            <div className="row row-cols-md-12">
              <div className="col-md-7">
                <div className="container">
                  <div className="row row-cols-md-12">
                    <div className="form-group">
                      <label className="labelH">
                        {" "}
                        Topic: Liquidated damages
                      </label>
                      <br />

                      <small className="formText">
                        Liquidated damages should be reasonable to cover for the
                        losses against the late deliveries. It should not be
                        sole remedy
                      </small>
                    </div>
                  </div>
                  <div className="row row-cols-md-12">
                    <div className="col">
                      <legend className="option">
                        Select applicable option :
                      </legend>
                      <small className="form-text">
                        RED if LD cap is less than 20% . RED if LD is only
                        remedy available GREEN if ideal case is in place.
                      </small>
                      <br />
                      <br />
                      <p>if not applicable,then choose grey button</p>
                    </div>
                    <div className="col">
                      <legend className="offer">Offer</legend>

                      <div className="radio ">
                        <Radio
                          {...controlProps("damage", "a")}
                          sx={{
                            color: green[800],
                            "&.Mui-checked": {
                              color: green[600],
                            },
                          }}
                        />

                        <Radio
                          {...controlProps("damage", "b")}
                          sx={{
                            color: yellow[800],
                            "&.Mui-checked": {
                              color: yellow[600],
                            },
                          }}
                        />

                        <Radio
                          value="red"
                          {...controlProps("damage", "c")}
                          sx={{
                            color: red[800],
                            "&.Mui-checked": {
                              color: red[600],
                            },
                          }}
                        />

                        <Radio
                          {...controlProps("damage", "d")}
                          color="default"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <textarea
                  rows="4"
                  name="free_text"
                  className="form-control"
                ></textarea>
                <small className="text-muted">* free text</small>
              </div>
            </div>
            <hr />

            <div className="row row-cols-md-12">
              <div className="col-md-7">
                <div className="container">
                  <div className="row row-cols-md-12">
                    <div className="form-group">
                      <label className="labelH">
                        Topic: Consequential and Indirect damage provisions
                      </label>

                      <small className="formText">
                        As a party cannot always foresee the damage of small
                        mistakes to customer business and these damages may not
                        be insureable, it is necessary (and common practice) to
                        exclude them. If there is no exclusion, then the case
                        has to be escalated before agreement with customer.
                      </small>
                    </div>
                  </div>
                  <div className="row row-cols-md-12">
                    <div className="col">
                      <legend className="option">
                        Select applicable option :
                      </legend>
                      <small className="form-text">
                        RED if there is no exclusion for consequential or
                        indirect damages. GREEN if the ideal case is in place.
                      </small>
                      <br />
                      <br />
                      <p>if not applicable,then choose grey button</p>
                    </div>
                    <div className="col">
                      <legend className="offer">Offer</legend>
                      <div className="radio ">
                        <Radio
                          {...controlProps("indirect", "a")}
                          sx={{
                            color: green[800],
                            "&.Mui-checked": {
                              color: green[600],
                            },
                          }}
                        />

                        <Radio
                          {...controlProps("indirect", "b")}
                          sx={{
                            color: yellow[800],
                            "&.Mui-checked": {
                              color: yellow[600],
                            },
                          }}
                        />

                        <Radio
                          value="red"
                          {...controlProps("indirect", "c")}
                          sx={{
                            color: red[800],
                            "&.Mui-checked": {
                              color: red[600],
                            },
                          }}
                        />

                        <Radio
                          {...controlProps("indirect", "d")}
                          color="default"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <textarea
                  rows="4"
                  name="free_text"
                  className="form-control"
                ></textarea>
                <small className="text-muted">* free text</small>
              </div>
            </div>
            <hr />

            <div className="row row-cols-md-12">
              <div className="col-md-7">
                <div className="container">
                  <div className="row row-cols-md-12">
                    <div className="form-group">
                      <label className="labelH">Topic: Liability cap</label>

                      <small className="formText">
                        The risk/reward balance should be reasonable.
                      </small>
                    </div>
                  </div>
                  <div className="row row-cols-md-12">
                    <div className="col">
                      <legend className="option">
                        Select applicable option :
                      </legend>
                      <small className="form-text">
                        RED if cap less than 100% of contract sum. RED if there
                        are major exclusions other than IPR/gross negligence to
                        the cap. GREEN if the ideal case is in place.
                      </small>
                      <br />
                      <br />
                      <p>if not applicable,then choose grey button</p>
                    </div>
                    <div className="col">
                      <legend className="offer">Offer</legend>
                      <div className="radio ">
                        <Radio
                          {...controlProps("cap", "a")}
                          sx={{
                            color: green[800],
                            "&.Mui-checked": {
                              color: green[600],
                            },
                          }}
                        />

                        <Radio
                          {...controlProps("cap", "b")}
                          sx={{
                            color: yellow[800],
                            "&.Mui-checked": {
                              color: yellow[600],
                            },
                          }}
                        />

                        <Radio
                          value="red"
                          {...controlProps("cap", "c")}
                          sx={{
                            color: red[800],
                            "&.Mui-checked": {
                              color: red[600],
                            },
                          }}
                        />

                        <Radio {...controlProps("cap", "d")} color="default" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <textarea
                  rows="4"
                  name="free_text"
                  className="form-control"
                ></textarea>
                <small className="text-muted ">* free text</small>
              </div>
            </div>
            <hr />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Damages;
