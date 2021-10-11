import React from "react";
import "./GeneralComponent.css";
import { green, yellow, red } from "@mui/material/colors";
import Radio from "@mui/material/Radio";

const Acceptance = () => {

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
                      <h6 className="labelH"> Topic: HW only delivery</h6>
                      <br />

                      <small className="formText">
                        In case of HW only scope, HW should be tested and
                        inspected before payment
                      </small>
                    </div>
                  </div>
                  <div className="row row-cols-md-12">
                    <div className="col">
                      <legend className="option">
                        Select applicable option :
                      </legend>
                      <small className="form-text">
                        If HW only accepted on dlivery without inspection or
                        testing then RED. If HW acceptance after installation
                        and functioning with warranty commitment GREEN
                      </small>
                      <br />
                      <br />
                      <p>if not applicable,then choose grey button</p>
                    </div>
                    <div className="col">
                      <legend className="offer">Offer</legend>

                      <div className="radio ">
                        
                        
                      <Radio
                          {...controlProps("delivey","a")}
                          sx={{
                            color: green[800],
                            "&.Mui-checked": {
                              color: green[600],
                            },
                          }}
                        />

                        <Radio
                          {...controlProps("delivey","b")}
                          sx={{
                            color: yellow[800],
                            "&.Mui-checked": {
                              color: yellow[600],
                            },
                          }}
                        />

                        <Radio
                          {...controlProps("delivey","c")}
                          sx={{
                            color: red[800],
                            "&.Mui-checked": {
                              color: red[600],
                            },
                          }}
                        />

                        <Radio {...controlProps("delivey","d")} color="default" />
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
                      <label className="labelH">Topic: SW acceptance</label>

                      <small className="formText">
                        SW, in particular upgrades, to be accepted only after
                        installation
                      </small>
                    </div>
                  </div>
                  <div className="row row-cols-md-12">
                    <div className="col">
                      <legend className="option">
                        Select applicable option :
                      </legend>
                      <small className="form-text">
                        If SW accepted without dedicated field testing required
                        then RED. If SW accepted only after lab or test
                        environment then YELLOW. If SW accepted after mass
                        installation and commissioning GREEN.
                      </small>
                      <br />
                      <br />
                      <p>if not applicable,then choose grey button</p>
                    </div>
                    <div className="col">
                      <legend className="offer">Offer</legend>
                      
                      <Radio
                          {...controlProps("sw","a")}
                          sx={{
                            color: green[800],
                            "&.Mui-checked": {
                              color: green[600],
                            },
                          }}
                        />

                        <Radio
                          {...controlProps("sw","b")}
                          sx={{
                            color: yellow[800],
                            "&.Mui-checked": {
                              color: yellow[600],
                            },
                          }}
                        />

                        <Radio
                          {...controlProps("sw","c")}
                          sx={{
                            color: red[800],
                            "&.Mui-checked": {
                              color: red[600],
                            },
                          }}
                        />

                        <Radio {...controlProps("sw","d")} color="default" />
                        
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
            
            <hr />

            <div className="row row-cols-md-12">
              <div className="col-md-7">
                <div className="container">
                  <div className="row row-cols-md-12">
                    <div className="form-group">
                      <label className="labelH">
                        Topic: Objective Acceptance Criteria
                      </label>

                      <small className="formText">
                        subjective criteria may trigger acceptance even if scope
                        is not delivered
                      </small>
                    </div>
                  </div>
                  <div className="row row-cols-md-12">
                    <div className="col">
                      <legend className="option">
                        Select applicable option :
                      </legend>
                      <small className="form-text">
                        If the acceptance is subect to meeting specific criteria
                        GREEN. If the main body uses subjective language but
                        refers to annexes with objective acceptance criteria
                        then YELLOW. If no defined acceptance process including
                        appropriate criteria are agreed and included in contract
                        before signature, then score RED or If services are paid
                        without the need for express acceptance then RED.
                      </small>
                      <br />
                      <br />
                      <p>if not applicable,then choose grey button</p>
                    </div>
                    <div className="col">
                      <legend className="offer">Offer</legend>
                      <div className ="radio">
                      
                      <Radio
                          {...controlProps("objective","a")}
                          sx={{
                            color: green[800],
                            "&.Mui-checked": {
                              color: green[600],
                            },
                          }}
                        />

                        <Radio
                          {...controlProps("objective","b")}
                          sx={{
                            color: yellow[800],
                            "&.Mui-checked": {
                              color: yellow[600],
                            },
                          }}
                        />

                        <Radio
                          {...controlProps("objective","c")}
                          sx={{
                            color: red[800],
                            "&.Mui-checked": {
                              color: red[600],
                            },
                          }}
                        />

                        <Radio {...controlProps("objective","d")} color="default" />

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
          </form>

         
        </div>
      </div>
    </div>
  );
};

export default Acceptance; 
