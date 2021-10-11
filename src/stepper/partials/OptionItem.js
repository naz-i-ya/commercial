import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
} from "@mui/material";
import { green, yellow, red } from "@mui/material/colors";
import React from "react";

const options = [
  {
    name: "green",
    color: green[800],
    checkedColor: green[600],
    value: "a",
  },
  {
    name: "yellow",
    color: yellow[800],
    checkedColor: yellow[600],
    value: "b",
  },
  {
    name: "red",
    color: red[800],
    checkedColor: red[600],
    value: "c",
  },
  {
    name: "gray",
    color: "default",
    checkedColor: "default",
    value: "d",
  },
];

const CheckBoxItem = ({ value, checkedColor, color }) => (
  <FormControlLabel
    value={value}
    control={
      <Radio
        sx={{
          color: color,
          "&.Mui-checked": {
            color: checkedColor,
          },
        }}
      />
    }
    label=""
  />
);

export default function OptionItem(props) {
  const {
    topic,
    description,
    optionHeading,
    optionDescription,
    offer,
    freeText,
    extraText,
    handleChange,
    index,
  } = props;
  return (
    <div className="row row-cols-md-12">
      <div className="col-md-7">
        <div className="container">
          <div className="row row-cols-md-12">
            <div className="form-group">
              <h6 className="labelH">{`Topic: ${topic}`}</h6>
              <br />

              <small className="formText">{description}</small>
            </div>
          </div>
          <div className="row row-cols-md-12">
            <div className="col">
              <legend className="option">{optionHeading}</legend>
              <small className="form-text">{optionDescription}</small>
              <br />
              <br />
              <p></p>
            </div>
            <div className="col">
              {/* <legend className="offer">Offer</legend> */}

              <div className="radio ">
                <FormControl component="fieldset">
                  <FormLabel component="legend">Offer</FormLabel>
                  <RadioGroup
                    row
                    name="row-radio-buttons-group"
                    value={offer}
                    name="offer"
                    onChange={(e) => handleChange(e, "offer", index)}
                  >
                    {options.map((opt, index) => (
                      <CheckBoxItem
                        {...opt}
                        key={`${topic}-checkbox-${opt.value}-${index}`}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-5">
        <textarea
          rows="4"
          name="freeText"
          onChange={(e) => handleChange(e, "freeText", index)}
          className="form-control"
          value={freeText}
        ></textarea>
        <small className="text-muted">* free text</small>
      </div>
    </div>
  );
}
