import React from "react";
import "./GeneralComponent.css";
import { green, yellow, red } from "@mui/material/colors";
import Radio from "@mui/material/Radio";

const GeneralComponent = () => {
  const [selectedValue, setSelectedValue] = React.useState(" ");

  const handleChange = (event, key, item) => {
    // console.log(event.target.value);
    console.log(event.target.value);
    console.log("Key:", key, "item:", item);
    // setSelectedValue(event.target.value);
  };

  const controlProps = (key, item) => ({
    checked: selectedValue === `${key}-${item}`,
    // onChange: (e) =>  handleChange(e, key, item),
    onClick: (e) => handleChange(),
    value: `${key}-${item}`,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <div className="wrapper">
      <div className="innerWrapper">
        <div className="title"></div>
        <div className="container">
          <form>
            <div className="row row-cols-md-12">
              <div className="col-md-7">
                <div className="container">
                  <div className="row row-cols-md-12">
                    <div className="form-group">
                      <h6 className="labelH">
                        Topic: Contract party - Customer
                      </h6>
                      <br />

                      <small className="formText">
                        Customer contracting party (legal entity) has to be
                        credit checked and approved before committing to the
                        customer. Ideal is a company that is as high in the
                        customer organisation as possible with complete
                        financial autonomy in managing budgets and cash flow and
                        that has authority to operate in the territory of the
                        contract.
                      </small>
                    </div>
                  </div>
                  <div className="row row-cols-md-12">
                    <div className="col">
                      <legend className="option">
                        Select applicable option :
                      </legend>
                      <small className="form-text">
                        Vendor evaluated by Finance and approved by - GREEN,
                        otherwise RED.
                      </small>
                      <br />
                      <br />
                      <p>if not applicable,then choose grey button</p>
                    </div>
                    <div className="col">
                      <legend className="offer">Offer</legend>

                      <div className="radio ">
                        <Radio
                          {...controlProps("offer", "a")}
                          sx={{
                            color: green[800],
                            "&.Mui-checked": {
                              color: green[600],
                            },
                          }}
                          value="green"
                        />

                        <Radio
                          {...controlProps("offer", "b")}
                          sx={{
                            color: yellow[800],
                            "&.Mui-checked": {
                              color: yellow[600],
                            },
                          }}
                          value="yellow"
                        />

                        <Radio
                          value="red"
                          {...controlProps("offer", "c")}
                          sx={{
                            color: red[800],
                            "&.Mui-checked": {
                              color: red[600],
                            },
                          }}
                          value="red"
                        />

                        <Radio
                          {...controlProps("offer", "d")}
                          color="default"
                          value="default"
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
                      <label className="labelH">Topic: Contract Party</label>

                      <small className="formText">
                        Each country / state has a tax laws. Both contracting
                        parties should comply with that applicabe tax laws for
                        that transaction in the Country and State
                      </small>
                    </div>
                  </div>
                  <div className="row row-cols-md-12">
                    <div className="col">
                      <legend className="option">
                        Select applicable option :
                      </legend>
                      <small className="form-text">
                        Vendor have all registrations in place as per state /
                        country laws for the transactions - GREEN. otherwise
                        RED.
                      </small>
                      <br />
                      <br />
                      <p>if not applicable,then choose grey button</p>
                    </div>
                    <div className="col">
                      <legend className="offer">Offer</legend>
                      <div className="radio ">
                        {/* */}
                        <Radio
                          {...controlProps("button", "a")}
                          sx={{
                            color: green[800],
                            "&.Mui-checked": {
                              color: green[600],
                            },
                          }}
                          value="green"
                        />

                        <Radio
                          {...controlProps("button", "b")}
                          sx={{
                            color: yellow[800],
                            "&.Mui-checked": {
                              color: yellow[600],
                            },
                          }}
                          value="yellow"
                        />

                        <Radio
                          {...controlProps("button", "c")}
                          sx={{
                            color: red[800],
                            "&.Mui-checked": {
                              color: red[600],
                            },
                          }}
                          value="red"
                        />

                        <Radio
                          {...controlProps("button", "d")}
                          color="default"
                          value="default"
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
                        Topic: Signature on Contracts - including
                        updates/changes, etc.
                      </label>

                      <small className="formText">
                        Different legal jurisdictions as well as companies have
                        various rules about who can/cannot sign on behalf of
                        their company obligations. It is absolutely essential
                        that this is checked and followed.
                      </small>
                    </div>
                  </div>
                  <div className="row row-cols-md-12">
                    <div className="col">
                      <legend className="option">
                        Select applicable option :
                      </legend>
                      <small className="form-text">
                        If all rules are checked and followed, then GREEN,
                        otherwise RED.{" "}
                      </small>

                      <br />
                      <br />
                      <p>if not applicable,then choose grey button</p>
                    </div>
                    <div className="col">
                      <legend className="offer">Offer</legend>
                      <div className="radio ">
                        <Radio
                          {...controlProps("signature", "a")}
                          sx={{
                            color: green[800],
                            "&.Mui-checked": {
                              color: green[600],
                            },
                          }}
                        />

                        <Radio
                          {...controlProps("signature", "b")}
                          sx={{
                            color: yellow[800],
                            "&.Mui-checked": {
                              color: yellow[600],
                            },
                          }}
                        />

                        <Radio
                          {...controlProps("signature", "c")}
                          sx={{
                            color: red[800],
                            "&.Mui-checked": {
                              color: red[600],
                            },
                          }}
                        />

                        <Radio
                          {...controlProps("signature", "d")}
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
                        Topic: Contract Commencement
                      </label>

                      <small className="formText">
                        There should be a very clear point when the
                        delivery/execution obligations of the contract becomes
                        effective, especially if an advance/down payment is
                        involved.
                      </small>
                    </div>
                  </div>
                  <div className="row row-cols-md-12">
                    <div className="col">
                      <legend className="option">
                        Select applicable option :
                      </legend>
                      <small className="form-text">
                        If the contract does not comes into force on signature,
                        then RED. If there is an obligation to deliver/execute
                        before contract signature or any advance/down payment is
                        received, then RED.
                      </small>
                      <br />
                      <br />
                      <p>if not applicable,then choose grey button</p>
                    </div>
                    <div className="col">
                      <legend className="offer">Offer</legend>
                      <div className="radio ">
                        <Radio
                          {...controlProps("contract", "a")}
                          sx={{
                            color: green[800],
                            "&.Mui-checked": {
                              color: green[600],
                            },
                          }}
                        />

                        <Radio
                          {...controlProps("contract", "b")}
                          sx={{
                            color: yellow[800],
                            "&.Mui-checked": {
                              color: yellow[600],
                            },
                          }}
                        />

                        <Radio
                          {...controlProps("contract", "c")}
                          sx={{
                            color: red[800],
                            "&.Mui-checked": {
                              color: red[600],
                            },
                          }}
                        />

                        <Radio
                          {...controlProps("contract", "d")}
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
                      <label className="labelH">Topic: Contract Duration</label>

                      <small className="formText">
                        If it is a Frame Contract and prices and
                        products/services are re-defined from time to time, then
                        the validity of a contract should be as long as
                        practical.
                      </small>
                    </div>
                  </div>
                  <div className="row row-cols-md-12">
                    <div className="col">
                      <legend className="option">
                        Select applicable option :
                      </legend>
                      <small className="form-text">
                        If Frame contract for long term supplies with Vendor
                        rights to terminate at will - RED, Otherwise GREEN
                      </small>
                      <br />
                      <br />
                      <p>if not applicable,then choose grey button</p>
                    </div>
                    <div className="col">
                      <legend className="offer">Offer</legend>
                      <div className=" radio">
                        <Radio
                          {...controlProps("duration", "a")}
                          sx={{
                            color: green[800],
                            "&.Mui-checked": {
                              color: green[600],
                            },
                          }}
                        />

                        <Radio
                          {...controlProps("duration", "b")}
                          sx={{
                            color: yellow[800],
                            "&.Mui-checked": {
                              color: yellow[600],
                            },
                          }}
                        />

                        <Radio
                          {...controlProps("duration", "c")}
                          sx={{
                            color: red[800],
                            "&.Mui-checked": {
                              color: red[600],
                            },
                          }}
                        />

                        <Radio
                          {...controlProps("duration", "d")}
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
                        Topic: Scope of supply/Specifications
                      </label>

                      <small className="formText">
                        Scope of supply/specifications includes everything
                        actually being delivered to customer. Specifically
                        excluded is anything that is not described in the Scope
                        of Supply/Specifications. HW, SW and Services are all
                        fully described in the contract specifications. No
                        products/services sold which are not available to be
                        shipped unless its a customized solution duly approved
                        by relevant head of department. Acceptance testing can
                        be evaluated from the detail in the scope of
                        works/specifications.
                      </small>
                    </div>
                  </div>
                  <div className="row row-cols-md-12">
                    <div className="col">
                      <legend className="option">
                        Select applicable option :
                      </legend>
                      <small className="form-text">
                        RED if there are items currently being sold that are not
                        in the contract or ready for shipping or if there is a
                        major dispute as to what is included. If products or
                        services (excluding approved customized solutions) are
                        not included in the catalog, then RED. YELLOW if the
                        scope of supply descriptions are not very clear. GREEN
                        if all is clear and the scope covers all current
                        activities.
                      </small>
                      <br />
                      <br />
                      <p>if not applicable,then choose grey button</p>
                    </div>
                    <div className="col">
                      <legend className="offer">Offer</legend>
                      <div className=" radio">
                        <Radio
                          {...controlProps("supply", "a")}
                          sx={{
                            color: green[800],
                            "&.Mui-checked": {
                              color: green[600],
                            },
                          }}
                        />

                        <Radio
                          {...controlProps("supply", "b")}
                          sx={{
                            color: yellow[800],
                            "&.Mui-checked": {
                              color: yellow[600],
                            },
                          }}
                        />

                        <Radio
                          {...controlProps("supply", "c")}
                          sx={{
                            color: red[800],
                            "&.Mui-checked": {
                              color: red[600],
                            },
                          }}
                        />

                        <Radio
                          {...controlProps("supply", "d")}
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
                        Topic: Priority of Contract Documents
                      </label>

                      <small className="formText">
                        While the agreement is negotiated it is important that
                        these terms are not superseded by any side agreement or
                        agreement which is not properly authorised. At times (in
                        case of Frame Agreement) the parties may agree that the
                        Purchase Orders may provide addtional terms for the
                        scope in the PO
                      </small>
                    </div>
                  </div>
                  <div className="row row-cols-md-12">
                    <div className="col">
                      <legend className="option">
                        Select applicable option :
                      </legend>
                      <small className="form-text">
                        RED if the agreement does not prevail over other
                        documents. YELLOW if it is not clear or provided'.. If
                        all is defined, then GREEN.{" "}
                      </small>
                      <br />
                      <br />
                      <p>if not applicable,then choose grey button</p>
                    </div>
                    <div className="col">
                      <legend className="offer">Offer</legend>
                      <div className="radio ">
                        <Radio
                          {...controlProps("priority", "a")}
                          sx={{
                            color: green[800],
                            "&.Mui-checked": {
                              color: green[600],
                            },
                          }}
                        />

                        <Radio
                          {...controlProps("priority", "b")}
                          sx={{
                            color: yellow[800],
                            "&.Mui-checked": {
                              color: yellow[600],
                            },
                          }}
                        />

                        <Radio
                          {...controlProps("priority", "c")}
                          sx={{
                            color: red[800],
                            "&.Mui-checked": {
                              color: red[600],
                            },
                          }}
                        />

                        <Radio
                          {...controlProps("priority", "d")}
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default GeneralComponent;
