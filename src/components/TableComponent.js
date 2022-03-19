import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  makeStyles,
  Button,
  Grid,

} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';

const styles = makeStyles(() => ({
  title: {
    backgroundColor: 'grey',
    width: '150px'

  },
  head: {
    border: 'none',
    padding: '0px 5px 5px 5px',
    borderRadius: '12px'
  },
  head2: {
    border: 'none',
    padding: '0px 5px 5px 5px',
    width: '300px',
    borderRadius: '12px'
  },
  body: {
    backgroundColor: 'lightgrey',
  },
  lastcell: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  TableRow: {
    width: '150px'
  },
  tablediv: {
    marginLeft: '10px',
    marginTop: '10px'
  },
  maintext: {
    marginTop: "20px",
    marginLeft: '15px'
  },
  button: {
    marginLeft: '10px'
  }
}))


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Shoulder Reconstruction', 'January 2012', 'General Breathing Tube', 'No', 'No'),
];

const TableComponent = () => {
  const classes = styles();
  return (

    <div className={classes.tablediv}>
      <TableContainer className={classes.head2}>
        <Table sx={{ minWidth: 150 }} aria-label="simple table">
          <TableHead >
            <TableRow className={classes.title}>
              <TableCell>First Time Surgery</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.body}>
            <TableRow className={classes.TableRow}
              key='No'
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                No
              </TableCell>

            </TableRow>

          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer className={classes.head2}>
        <Table sx={{ minWidth: 150 }} aria-label="simple table">
          <TableHead >
            <TableRow className={classes.title}>
              <TableCell>Family History of Surgical Complication</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.body}>
            <TableCell component="th" scope="row">
              Yes
            </TableCell>
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer className={classes.head2}>
        <Table sx={{ minWidth: 150 }} aria-label="simple table">
          <TableHead >
            <TableRow className={classes.title}>
              <TableCell>if yes,provide more details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.body}>
            <TableRow className={classes.TableRow}
              key='No'
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                There are no more details.
              </TableCell>

            </TableRow>

          </TableBody>
        </Table>
      </TableContainer>


      <TableContainer className={classes.head}>
        <Table sx={{ minWidth: 150 }} aria-label="simple table">
          <TableHead >
            <TableRow className={classes.title}>
              <TableCell>Surgery type</TableCell>
              <TableCell align="">Date</TableCell>
              <TableCell align="">Anthesia Type</TableCell>
              <TableCell align="">Surgical Complication</TableCell>
              <TableCell align="">Anesthesisa Complication (nausea,vomiting,difficult intubation)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.body}>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="">{row.calories}</TableCell>
                <TableCell align="">{row.fat}</TableCell>
                <TableCell align="">{row.carbs}</TableCell>

                <TableCell className={classes.lastcell} align="">{row.protein}
                  <div className={classes.maindiv}>
                    <div className={classes.subdiv}>
                      <DeleteIcon />
                      <CreateIcon />
                    </div>
                  </div>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container justify="left">
        <Button
          type="submit"
          color="secondary"
          startIcon={<AddIcon />}
          variant="contained">
          Add Surgery
        </Button>
      </Grid>
    </div>
  );
}

export default TableComponent;