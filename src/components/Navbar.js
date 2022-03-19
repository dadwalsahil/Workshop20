import React from 'react'

import logo from '../logo.png'
import logo2 from '../userlogo.png'

import {
    AppBar,
    Typography,
    Toolbar,
    List,
    ListItemText,
    ListItem, makeStyles,
    Badge
} from '@material-ui/core/'
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyles = makeStyles({

    logo: {
        width: '50px',
        Height: '50px',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',

    },
    right: {
        display: 'flex',
        marginLeft: '800px',
        justifyContent: 'space-between'

    },
    img: {
        height: '25px',
        width: '25 px',
        borderRadius: '50%',
        float: 'right'
    },
    badge: {
        marginRight: '20px'
    }


})

const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar color="default"   >
            <Toolbar className='toolbar'>

                <Typography variant="title"
                    color="inherit"
                >
                    <img src={logo} className={classes.logo} alt="logo" />
                </Typography>

                <List component="nav">
                    <ListItem component="div">


                        <ListItemText >
                            <Typography color="inherit" variant="title">
                                PATIENT
                            </Typography>
                        </ListItemText>

                        <ListItemText inset>
                            <Typography color="inherit" variant="title">
                                CALENDAR
                            </Typography>
                        </ListItemText>

                        <ListItemText inset>
                            <Typography color="inherit" variant="title">
                                USERS
                            </Typography>
                        </ListItemText>

                        <ListItemText inset>
                            <Typography color="inherit" variant="title">
                                BILLING
                            </Typography>
                        </ListItemText>

                    </ListItem>

                </List>



                <div className={classes.right}>
                    <Badge badgeContent={2} max={999} color="secondary" className={classes.badge}>
                        <NotificationsIcon />
                    </Badge>
                    <div className={classes.badge}>
                        <img src={logo2} alt="logo2" className={classes.img}></img>
                    </div>

                </div>
            </Toolbar>
        </AppBar>

    )
}

export default Navbar;