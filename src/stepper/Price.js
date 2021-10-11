import React from "react";
import "./GeneralComponent.css";
import { green, yellow, red } from "@mui/material/colors";
import Radio from "@mui/material/Radio";

const Price = () => {

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
                        Topic: Hardware Pricing

                      </label>
                      <br />

                      <small className="formText">
                      Important for customer to not to get restrictions on which item to buy and how much. Discounts if any should also be per unit not bundled or lumpsum or tied with volume conditions
                      </small>
                    </div>
                  </div>
                  <div className="row row-cols-md-12">
                    <div className="col">
                      <legend className="option">
                        Select applicable option :
                      </legend>
                      <small className="form-text">
                      If prices are not listed at lowest unit or plug in level, then RED. If listed as assemblies, then YELLOW. If disocunts are linked to volume or similier conditions then RED If comply to ideal GREEN
                      </small>
                      <br />
                      <br />
                      <p>if not applicable,then choose grey button</p>
                    </div>
                    <div className="col">
                      <legend className="offer">Offer</legend>

                      <div className="radio ">

                      <Radio
                          {...controlProps("pricing", "a")}
                          sx={{
                            color: green[800],
                            "&.Mui-checked": {
                              color: green[600],
                            },
                          }}
                        />

                        <Radio
                          {...controlProps("pricing", "b")}
                          sx={{
                            color: yellow[800],
                            "&.Mui-checked": {
                              color: yellow[600],
                            },
                          }} 
                        /> 

                        <Radio value ="red"
                          {...controlProps("pricing", "c")}
                          sx={{
                            color: red[800],
                            "&.Mui-checked": {
                              color: red[600],
                            },
                          }}
                        />

                        <Radio {...controlProps("pricing", "d")} color="default" />
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
                      <label className="labelH">Topic: Software - Operating</label>

                      
                      <small className="formText">
                      Software business model means software is separated into operating SW and application SW.
                      </small>
                    </div>
                  </div>
                  <div className="row row-cols-md-12">
                    <div className="col">
                      <legend className="option">Select applicable option :</legend>
                      <small
                        className="form-text">
                            If there is no price for SW separate from HW, then RED. If Application SW is bundled with operating SW, then RED
                        </small>
                        <br />
                        <br />
                        <p>if not applicable,then choose grey button</p>
                      
                    </div>
                    <div className="col">
                      <legend className="offer">
                        Offer
                      </legend>
                      <div className="radio ">

                      <Radio
                          {...controlProps("model", "a")}
                          sx={{
                            color: green[800],
                            "&.Mui-checked": {
                              color: green[600],
                            },
                          }}
                        />

                        <Radio
                          {...controlProps("model", "b")}
                          sx={{
                            color: yellow[800],
                            "&.Mui-checked": {
                              color: yellow[600],
                            },
                          }} 
                        /> 

                        <Radio value ="red"
                          {...controlProps("model", "c")}
                          sx={{
                            color: red[800],
                            "&.Mui-checked": {
                              color: red[600],
                            },
                          }}
                        />

                        <Radio {...controlProps("model", "d")} color="default" />
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
                      Topic: Software - Application

                      </label>

                      <small className="formText" >
                      Software should be priced as such to avoid any hidden charges by the Vendor later on in the form of special application or feature which can increase the TCO for Customer
                      </small>
                    </div>
                  </div>
                  <div className="row row-cols-md-12">
                    <div className="col">
                      <legend className="option">Select applicable option :</legend>
                      <small
                        className="form-text"
                      >
                        If SW, SW application, SW release all priced seperately then RED. If all SW and HW are priced together or SW priced all inclusive (Releases, features and licenses) GREEN     </small>

                        <br />
                        <br />
                        <p>if not applicable,then choose grey button</p>
                    </div>
                    <div className="col">
                      <legend className="offer">
                        Offer
                      </legend>
                      <div className="radio ">
                      <Radio
                          {...controlProps("software", "a")}
                          sx={{
                            color: green[800],
                            "&.Mui-checked": {
                              color: green[600],
                            },
                          }}
                        />

                        <Radio
                          {...controlProps("software", "b")}
                          sx={{
                            color: yellow[800],
                            "&.Mui-checked": {
                              color: yellow[600],
                            },
                          }} 
                        /> 

                        <Radio value ="red"
                          {...controlProps("software", "c")}
                          sx={{
                            color: red[800],
                            "&.Mui-checked": {
                              color: red[600],
                            },
                          }}
                        />

                        <Radio {...controlProps("software", "d")} color="default" />
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

            <div className="row row-cols-md-12">
              <div className="col-md-7">
                <div className="container">
                  <div className="row row-cols-md-12">
                    <div className="form-group">
                      <label className="labelH">
                      Topic: Turnkey/Civil Works

                      </label>

                      <small className="formText">
                      The vendor should not be allowed to charge extra for the completion of the scope quoting "specifications" and scope creep clauses. This will increase the TCO
                      </small>
                    </div>
                  </div>
                  <div className="row row-cols-md-12">
                    <div className="col">
                      <legend className="option">Select applicable option :</legend>
                      <small
                        className="form-text"
                      >
                          Vendor provide a list of exclusions from the completion of scope which are / should be considered essentials for the completion of scope RED. Prices are all inclusive and vendor agrees to it: GREEN. Scope will be defined alongwith the prices later on between the Parties YELLOW
                        </small>
                        <br />
                        <br />
                        <p>if not applicable,then choose grey button</p>
                    </div>
                    <div className="col">
                      <legend className="offer">
                        Offer
                      </legend>
                      <div className="radio ">
                        
                        <Radio
                          {...controlProps("civil", "a")}
                          sx={{
                            color: green[800],
                            "&.Mui-checked": {
                              color: green[600],
                            },
                          }}
                        />

                        <Radio
                          {...controlProps("civil", "b")}
                          sx={{
                            color: yellow[800],
                            "&.Mui-checked": {
                              color: yellow[600],
                            },
                          }} 
                        /> 

                        <Radio value ="red"
                          {...controlProps("civil", "c")}
                          sx={{
                            color: red[800],
                            "&.Mui-checked": {
                              color: red[600],
                            },
                          }}
                        />

                        <Radio {...controlProps("civil", "d")} color="default" />
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
                      <label className="labelH">Topic: Discounts
</label>

                      
                      <small className="formText" >
                      All discounts should be applied unit price based with no expiry. Discounts subject to volume or value or tied to conditions create obligations for further Purchase Orders on customer

                      </small>
                    </div>
                  </div>
                  <div className="row row-cols-md-12">
                    <div className="col">
                      <legend className="option">Select applicable option :</legend>
                      <small
                        className="form-text"
                      >
                          If Discounts are linked to volume, quantity conditions or claw back then RED. If applied purely to future orders, then RED. If based on unit prices with no expiry date GREEN.
                       </small>
                        <br />
                        <br />
                        <p>if not applicable,then choose grey button</p>
                    </div>
                    <div className="col">
                      <legend className="offer">
                        Offer
                      </legend>
                      <div className=" radio">

                      <Radio
                          {...controlProps("discount", "a")}
                          sx={{
                            color: green[800],
                            "&.Mui-checked": {
                              color: green[600],
                            },
                          }}
                        />

                        <Radio
                          {...controlProps("discount", "b")}
                          sx={{
                            color: yellow[800],
                            "&.Mui-checked": {
                              color: yellow[600],
                            },
                          }} 
                        /> 

                        <Radio value ="red"
                          {...controlProps("discount", "c")}
                          sx={{
                            color: red[800],
                            "&.Mui-checked": {
                              color: red[600],
                            },
                          }}
                        />

                        <Radio {...controlProps("discount", "d")} color="default" />
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

            <div className="row row-cols-md-12">
              <div className="col-md-7">
                <div className="container">
                  <div className="row row-cols-md-12">
                    <div className="form-group">
                      <label className="labelH">
                      Topic: Currency
                      </label>

                      <small className="formText" >
                      Currency must be the local currency of the customer and all risks should be borne by the Contractor.
                      </small>
                    </div>
                  </div>
                  <div className="row row-cols-md-12">
                    <div className="col">
                      <legend className="option">Select applicable option :</legend>
                      <small
                        className="form-text"
                      >
                          Obligaton on Customer to pay in currency other than approved currency then RED. Any other currency other than approved by Finance, then GREEN.
                       </small>
                        <br />
                        <br />
                        <p>if not applicable,then choose grey button</p>
                    </div>
                    <div className="col">
                      <legend className="offer">
                        Offer
                      </legend>
                      <div className=" radio">

                      <Radio
                          {...controlProps("currency", "a")}
                          sx={{
                            color: green[800],
                            "&.Mui-checked": {
                              color: green[600],
                            },
                          }}
                        />

                        <Radio
                          {...controlProps("currency", "b")}
                          sx={{
                            color: yellow[800],
                            "&.Mui-checked": {
                              color: yellow[600],
                            },
                          }} 
                        /> 

                        <Radio value ="red"
                          {...controlProps("currency", "c")}
                          sx={{
                            color: red[800],
                            "&.Mui-checked": {
                              color: red[600],
                            },
                          }}
                        />

                        <Radio {...controlProps("currency", "d")} color="default" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <textarea
                  rows="4"
                  name="free_text"
                  class="form-control"
                ></textarea>
                <small className="text-muted ">* free text</small>
              </div>
            </div>
            <hr />

            <div className="row row-cols-md-12">
              <div className="col-md-7">
                <div className="container">
                  <div className="row row-cols-md-12">
                    <div className="form-group">
                      <label className="labelH">
                        {" "}
                        Topic: Best Customer Clause, (MFN)

                      </label>

                      <small className="formText" >
                      Vendor must provide the it is offering best prices to Customer for the scope.
                      </small>
                    </div>
                  </div>
                  <div className="row row-cols-md-12">
                    <div className="col">
                      <legend className= "option">Select applicable option :</legend>
                      <small
                        className="form-text"
                      >
                          If there No "best customer clause", then RED.
                         </small>
                        <br />
                        <br />
                        <p>if not applicable,then choose grey button</p>
                    </div>
                    <div className="col">
                      <legend clasName="offer">
                        Offer
                      </legend>
                      <div className="radio ">
                        
                      <Radio
                          {...controlProps("bcc", "a")}
                          sx={{
                            color: green[800],
                            "&.Mui-checked": {
                              color: green[600],
                            },
                          }}
                        />

                        <Radio
                          {...controlProps("bcc", "b")}
                          sx={{
                            color: yellow[800],
                            "&.Mui-checked": {
                              color: yellow[600],
                            },
                          }} 
                        /> 

                        <Radio value ="red"
                          {...controlProps("bcc", "c")}
                          sx={{
                            color: red[800],
                            "&.Mui-checked": {
                              color: red[600],
                            },
                          }}
                        />

                        <Radio {...controlProps("bcc", "d")} color="default" />
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

export default Price;
