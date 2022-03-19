import './App.css';
import Navbar from './components/Navbar'
import Dashboard1 from "./components/Dashboard1"
import Dashboard2 from "./components/Dashboard2"
import { Typography } from '@material-ui/core';


function App() {
  return (
    <div className="App">

      <div className='NavBar'>
        <Navbar />
      </div>

      <div className='left-panel'>
        <div className='col1'>
          <Typography className='head'>
            Patients
          </Typography>
          <Dashboard1 />
        </div>
        <div className='col2'> <Dashboard2 /> </div>
      </div>
    </div>
  );
}

export default App;
