import React from "react";
import "./GeneralComponent.css";
import { green, yellow, red } from "@mui/material/colors";
import Radio from "@mui/material/Radio";

const Delivery = () => {

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
                        Topic: Equipment delivery terms
                      </label>
                      <br />

                      <small className="formText">
                        The delivery terms with deadlines should be clear
                      </small>
                    </div>
                  </div>
                  <div className="row row-cols-md-12">
                    <div className="col">
                      <legend className="option">
                        Select applicable option :
                      </legend>
                      <small className="form-text">
                        If no delivery terms specified then RED. If Incoterms
                        are modified or incomplete, then RED. If Incoterms are
                        supplemented, then YELLOW. If Customer has
                        responsibility for Warehousing or custom clearence or
                        special permits for the Equipments RED. If Incoterms Ex
                        Works RED. . FCA, or DDP - score as GREEN.
                      </small>
                      <br />
                      <br />
                      <p>if not applicable,then choose grey button</p>
                    </div>
                    <div className="col">
                      <legend className="offer">Offer</legend>

                      <div className="radio ">
                      <Radio
                          {...controlProps("equipment", "a")}
                          sx={{
                            color: green[800],
                            "&.Mui-checked": {
                              color: green[600],
                            },
                          }}
                        />

                        <Radio
                          {...controlProps("equipment", "b")}
                          sx={{
                            color: yellow[800],
                            "&.Mui-checked": {
                              color: yellow[600],
                            },
                          }} 
                        /> 

                        <Radio value ="red"
                          {...controlProps("equipment", "c")}
                          sx={{
                            color: red[800],
                            "&.Mui-checked": {
                              color: red[600],
                            },
                          }}
                        />

                        <Radio {...controlProps("equipment", "d")} color="default" />


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
                      <label className="labelH">Topic: Warehousing</label>

                      <small className="formText">
                        If Warehousing cost is on customer the Customer must
                        make provisions for the cost including the upkeep or
                        risk associated with storage. Specially relevant for
                        perishale goods
                      </small>
                    </div>
                  </div>
                  <div className="row row-cols-md-12">
                    <div className="col">
                      <legend className="option">
                        Select applicable option :
                      </legend>
                      <small className="form-text">
                        If customer warehouse is required by Vendor , then RED.
                      </small>
                      <br />
                      <br />
                      <p>if not applicable,then choose grey button</p>
                    </div>
                    <div className="col">
                      <legend className="offer">Offer</legend>
                      <div className="radio ">
                        
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
                      <label className="labelH">Topic: Software delivery</label>

                      <small className="formText">
                        For efficiency reasons and to avoid additonal cost
                        claims it is necessary that (unless specificially
                        excluded) all SW must be delivered installed and
                        accepted. The vendor responsibility should be to ensure
                        that all SW are delivered, configured, installed,
                        working and accepted as per the timelines
                      </small>
                    </div>
                  </div>
                  <div className="row row-cols-md-12">
                    <div className="col">
                      <legend className="option">
                        Select applicable option :
                      </legend>
                      <small className="form-text">
                        E-delivery without any physical delivery, then RED.
                        Complete installation of the software then YELLOW.
                        Complete installation, commissioning and acceptance of
                        the software then GREEN.
                      </small>
                      <br />
                      <br />
                      <p>if not applicable,then choose grey button</p>
                    </div>
                    <div className="col">
                      <legend className="offer">Offer</legend>
                      <div className="radio ">
                      <Radio
                          {...controlProps("wherehouse", "a")}
                          sx={{
                            color: green[800],
                            "&.Mui-checked": {
                              color: green[600],
                            },
                          }}
                        />

                        <Radio
                          {...controlProps("wherehouse", "b")}
                          sx={{
                            color: yellow[800],
                            "&.Mui-checked": {
                              color: yellow[600],
                            },
                          }} 
                        /> 

                        <Radio value ="red"
                          {...controlProps("wherehouse", "c")}
                          sx={{
                            color: red[800],
                            "&.Mui-checked": {
                              color: red[600],
                            },
                          }}
                        />

                        <Radio {...controlProps("wherehouse", "d")} color="default" />

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

export default Delivery;
