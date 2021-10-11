import React, { useState } from "react";
import OptionItem from "./partials/OptionItem";
const data = [
  {
    topic: "Contract party - Customer",
    description: `Customer contracting party (legal entity) has to be
      credit checked and approved before committing to the
      customer. Ideal is a company that is as high in the
      customer organisation as possible with complete
      financial autonomy in managing budgets and cash flow and
      that has authority to operate in the territory of the
      contract.`,
    optionHeading: `Select applicable option :`,
    optionDescription: `Vendor evaluated by Finance and approved by - GREEN,
      otherwise RED.`,
    extraText: "if not applicable,then choose grey button",
    freeText: "",
    offer: "",
  },
  {
    topic: "Contract Party",
    description: `Each country / state has a tax laws. Both contracting parties should comply with that applicabe tax laws for that transaction in the Country and State`,
    optionHeading: `Select applicable option :`,
    optionDescription: `Vendor have all registrations in place as per state / country laws for the transactions - GREEN. otherwise RED.`,
    extraText: "if not applicable,then choose grey button",
    freeText: "",
    offer: "",
  },
  {
    topic: "Signature on Contracts - including updates/changes, etc.",
    description: `Different legal jurisdictions as well as companies have various rules about who can/cannot sign on behalf of their company obligations. It is absolutely essential that this is checked and followed.`,
    optionHeading: `Select applicable option :`,
    optionDescription: `If all rules are checked and followed, then GREEN, otherwise RED.`,
    extraText: "if not applicable,then choose grey button",
    freeText: "",
    offer: "",
  },
  {
    topic: "Contract Commencement",
    description: `There should be a very clear point when the delivery/execution obligations of the contract becomes effective, especially if an advance/down payment is involved.`,
    optionHeading: `Select applicable option :`,
    optionDescription: `If the contract does not comes into force on signature, then RED. If there is an obligation to deliver/execute before contract signature or any advance/down payment is received, then RED.`,
    extraText: "if not applicable,then choose grey button",
    freeText: "",
    offer: "",
  },
  {
    topic: "Scope of supply/Specifications",
    description: `Scope of supply/specifications includes everything actually being delivered to customer. Specifically excluded is anything that is not described in the Scope of Supply/Specifications. HW, SW and Services are all fully described in the contract specifications. No products/services sold which are not available to be shipped unless its a customized solution duly approved by relevant head of department. Acceptance testing can be evaluated from the detail in the scope of works/specifications.`,
    optionHeading: `Select applicable option :`,
    optionDescription: `RED if there are items currently being sold that are not in the contract or ready for shipping or if there is a major dispute as to what is included. If products or services (excluding approved customized solutions) are not included in the catalog, then RED. YELLOW if the scope of supply descriptions are not very clear. GREEN if all is clear and the scope covers all current activities.`,
    extraText: "if not applicable,then choose grey button",
    freeText: "",
    offer: "",
  },
  {
    topic: "Priority of Contract Documents",
    description: `While the agreement is negotiated it is important that these terms are not superseded by any side agreement or agreement which is not properly authorised. At times (in case of Frame Agreement) the parties may agree that the Purchase Orders may provide addtional terms for the scope in the PO`,
    optionHeading: `Select applicable option :`,
    optionDescription: `RED if the agreement does not prevail over other documents. YELLOW if it is not clear or provided'.. If all is defined, then GREEN.`,
    extraText: "if not applicable,then choose grey button",
    freeText: "",
    offer: "",
  },
];

export default function NewGeneralComponent() {
  const [state, setState] = useState(data);

  const handleChange = (e, fieldName, index) => {
    // getting the current state
    let defState = [...state];

    const { value } = e.target;
    console.log(fieldName, index, value);
    // updating the current state with new state;
    if (value) {
      defState[index][fieldName] = value;
    }
    setState(defState);
  };

  const renderForm = () => {
    return data.map((element, index) => (
      <OptionItem
        {...element}
        index={index}
        key={`option-${index}`}
        handleChange={handleChange}
      />
    ));
  };

  return (
    <div className="wrapper">
      <div className="innerWrapper">
        <div className="title"></div>
        <div className="container">
          <form>{renderForm()}</form>
        </div>
      </div>
    </div>
  );
}
