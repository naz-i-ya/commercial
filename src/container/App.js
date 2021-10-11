import Navbar from './Navbar';
import Navik from './Navik';
import NewContract from './NewContract';
import ContinueContract from './ContinueContract';
import Previous from './Previous';
import Upload from './Upload';
import { Switch, Route } from 'react-router-dom';
import './App.css'
import Stepper from '../stepper/App';

const App = () => {
     
    return (
        <>
        <Navbar />
        <Switch>
           
            <Route path="/navik" component={Navik} />
            <Route path="/continuecontract" component={ContinueContract} />
            <Route path="/previous" component={Previous} />
            <Route path="/newcontract" component={NewContract} />
            <Route path="/upload" component={Upload} />
             <Route path="/stepper" component={Stepper} />
                {/* <Stepper /> */}
            {/* </Route> */}

        </Switch>
        </>
    )
}

export default App;