// import "./App.css";
// //import Navik from './components/Navik'
// /*import { BrowserRouter, Route, Switch } from "react-router-dom";*/
// //import NewContract from './components/NewContract'
// //import Upload from './components/Upload'
// //import Wto from './components/Wto';

// import GeneralComponent from "./components/GeneralComponent";
// import Collapsible from "react-collapsible";
//  import Price from './components/Price'
// import Ordering from './components/Ordering'
// import Delivery from './components/Delivery'
// import Risk from './components/Risk'
// import Acceptance from './components/Acceptance'
// import Payment from './components/Payment'
// import Warranty from './components/Warranty'
// import Damages from './components/Damages'
// import Changes from './components/Changes'
// import Data from './components/Data'
// import Other from './components/Other'

// const MyBtn = ({ number, topic }) => {
//   return(
//     <>
//     <button style={{
//        width: "30px",
//        height: "30px" ,
//        backgroundColor: "black" ,
//        color:"white" ,borderRadius:"50%"}}>
//         {number}
//     </button>
//     <h5 style={{ display: 'inline' }}>{topic}</h5>
//     </>
//   )
// }
// function App() {
//   return (
//     <div className="App">
//       <div className="vl">
//         <Collapsible trigger={<MyBtn topic={'General'} number={1}/>}>
//           <GeneralComponent />
//         </Collapsible>
//         <Collapsible trigger={<MyBtn topic={'Price'} number={2}/>}>
//           <Price />
//         </Collapsible>

//         <Collapsible trigger={<MyBtn topic={'Ordering and Leadtime'} number={3}/>}>
//           <Ordering />
//         </Collapsible>

//         <Collapsible trigger={<MyBtn topic={'Delivery'} number={4}/>}>
//           <Delivery />
//         </Collapsible>
//         <Collapsible trigger={<MyBtn topic={'Risk and Title transfer'} number={5}/>}>
//           <Risk />
//         </Collapsible>
//         <Collapsible trigger={<MyBtn topic={'Acceptance'} number={6}/>}>
//           <Acceptance />
//         </Collapsible>
//         <Collapsible trigger={<MyBtn topic={'Invoicing and Payment'} number={7}/>}>
//           <Payment />
//         </Collapsible>
//         <Collapsible trigger={<MyBtn topic={'Warranty'} number={8}/>}>
//           <Warranty />
//         </Collapsible>
//         <Collapsible trigger={<MyBtn topic={'Damages and Liabilities'} number={9}/>}>
//           <Damages />
//         </Collapsible>
//         <Collapsible trigger={<MyBtn topic={'Changes'} number={10}/>}>
//           <Changes />
//         </Collapsible>
//         <Collapsible trigger={<MyBtn topic={'IPR and Data'} number={11}/>}>
//           <Data />
//         </Collapsible>
//         <Collapsible trigger={<MyBtn topic={'Other'} number={12}/>}>
//           <Other />
//         </Collapsible>

//         {/*<Wto /> ye nhi ok*/}

//         {/*<Navik />*/}

//         {/*<NewContract />*/}
//         {/*<Upload />*}
//         {/*<BrowserRouter>
//           <Switch>

//             <Route exact path="/" component={Nav} />
//             <Route exact path="/signup" component={Signup} />
//             <Route exact path="/login" component={Login} />
//             <Route exact path="/forgot" component={Forgot} />
//             {/*<Route path="/Navik" component={Navik} />*/}

//         {/*</div></Switch>
//         </BrowserRouter>*/}
//       </div>
//     </div>
//   );
// }

// export default App;

import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import GeneralComponent from "./GeneralComponent";
import Price from "./Price";
import Ordering from "./Ordering";
import Delivery from "./Delivery";
import Risk from "./Risk";
import Acceptance from "./Acceptance";
import Payment from "./Payment";
import Warranty from "./Warranty";
import Damages from "./Damages";
import Changes from "./Changes";
import Data from "./Data";
import Other from "./Other";
import NewGeneralComponent from "./NewGeneralComponent";

const steps = [
  {
    label: "General",
    // component: <GeneralComponent />,
    component: <NewGeneralComponent />,
  },
  {
    label: "Price",
    component: <Price />,
  },
  {
    label: "Ordering and Leadtime",
    component: <Ordering />,
  },

  {
    label: "Delivery",
    component: <Delivery />,
  },
  {
    label: "Risk and Title transfer",
    component: <Risk />,
  },

  {
    label: "Acceptance",
    component: <Acceptance />,
  },
  {
    label: "Invoicing and Payment",
    component: <Payment />,
  },
  {
    label: "Warranty",
    component: <Warranty />,
  },

  {
    label: "Damages and Liabilities",
    component: <Damages />,
  },
  {
    label: "Changes",
    component: <Changes />,
  },
  {
    label: "IPR and Data",
    component: <Data />,
  },

  {
    label: "Other",
    component: <Other />,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box lx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              {step.component}

              <Typography></Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
