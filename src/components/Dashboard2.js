import React from "react";
import {
  Typography,
  makeStyles,
  Tabs,
  Tab,
} from "@material-ui/core";
import logo from "../img.jpg"
import logo2 from "../yes.jpg";
import TableComponent from "./TableComponent";


const useStyles = makeStyles(() => ({
  main: {
    maxWidth: "100%",
    maxHeight: "50%",

  },
  submain: {
    display: "flex",
    justifyContent: "space-between",
  },
  head: {
    fontWeight: "bold",
    padding: "10px",
    margin: "5px",
  },
  img: {
    maxWidth: "80px",
    maxHeight: "80px",
    borderRadius: "50%",
    margin: "10px",
    padding: "10px",
  },
  patientdetails: {
    display: "flex",
    flexWrap: "wrap",
  },
  linebreal: {
    width: "100%",
  },
  details: {
    textAlign: "centre",
    marginLeft: "5px",
    marginTop: "10px",
  },
  bmidiv: {
    marginLeft: "20px",
  },

  tabledata: {
    marginLeft: "15px",
  },
  patientdata: {
    display: "flex",
    fontSize: '10px',
    justifyContent: "space-between",
  },
  rightpanel: {
    marginLeft: "500px",
  },
  newimg: {
    borderRadius: "50%",
    height: "50px",
    margintop: "50px",
    marginLeft: "520px",
    width: "50px",
  },
  tab: {
    borderRight: "1px solid",
    borderTop: "1px solid",
    borderLeft: "1px solid",
    borderBottom: '1px solid',
    textColor: "black",
    color: "black",
    '&:hover': {
      borderBottom: 'none'
    },
  },
  tab1: {
    borderRight: "1px solid",
    borderTop: "1px solid",
    borderLeft: "1px solid",
    color: "black",
    '&:hover': {
      borderBottom: 'none'
    },
  },
  tabdiv: {
    marginLeft: '10px',
  },
  tabmain: {
    border: 'none'
  },
  firstTable: {
    marginTop: '60px'
  }

}));

const Dashboard2 = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.main}>
      <div className={classes.submain}>
        <Typography variant="h7" className={classes.head}>
          Patient Information
        </Typography>

        <div className={classes.head}>
          <Typography variant="h7">Last Updated: 10:25AM, Today</Typography>
        </div>
      </div>

     
      <div className={classes.patientdetails}>
      <div className={classes.patientName}>
          <img src={logo} alt="logo" className={classes.img}></img>
        </div>

        <div className={classes.patientdata}>
          <table>
            <th>
              <tr>Sahil Dadwal</tr>
            </th>
            <tr>
              <td>
                <span className={classes.tabledata}>Contact No: </span>
                <span className={classes.details}>+91 8130097374</span>
              </td>
              <td>
                <span className={classes.tabledata}>Surgery Type:</span>
                <span className={classes.details}>Rotator cutff Repair </span>
              </td>
              <td>
                <span className={classes.tabledata}>Anthesiologist:</span>
                <span className={classes.details}>Dr.Christina Hardaway</span>
              </td>
            </tr>

            <tr>
              <td>
                <span className={classes.tabledata}>Email:</span>
                <span className={classes.details}>sahild@leewayhertz.com</span>
              </td>
              <td>
                <span className={classes.tabledata}>Surgery Date:</span>
                <span className={classes.details}>15 aug 2020 </span>
              </td>
              <td>
                <span className={classes.tabledata}>Anthesiologist phone:</span>
                <span className={classes.details}>301-896-8745</span>
              </td>
            </tr>

            <tr>
              <td>
                <span className={classes.tabledata}>Gender:</span>
                <span className={classes.details}>Male</span>
              </td>
              <td>
                <span className={classes.tabledata}>Height:</span>
                <span className={classes.details}>163 cms </span>
              </td>
            </tr>

            <tr>
              <td>
                <span className={classes.tabledata}>Age</span>
                <span className={classes.details}>23</span>
              </td>
              <td>
                <span className={classes.tabledata}>Weight:</span>
                <span className={classes.details}>80Kg </span>
              </td>

              <td>
                <span className={classes.rightpanel}>
                  Surgery Clearance
                  <div className={classes.patientName}>
                    <img src={logo2} alt="logo2" className={classes.newimg}></img>
                  </div>
                </span>
              </td>
            </tr>
          </table>
        </div>
      </div>


      <div className={classes.tabdiv}>
        <Tabs
          value={value}
          className={classes.tabmain}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"

        >
          <Tab label="Prior Surgeries" className={classes.tab1} />
          <Tab label="Medical Diagnosis" className={classes.tab} />
          <Tab label="Medication" className={classes.tab} />
          <Tab label="Airway Evolution" className={classes.tab} />
          <Tab label="Anthesisa Clearance and Recommendation" className={classes.tab} />
        </Tabs>
      </div>
      {/**/}
      <div className={classes.firstTable}>
        <TableComponent />
      </div>
    </div>
  );
}

export default Dashboard2;