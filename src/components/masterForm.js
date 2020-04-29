import React, {useState} from 'react';

//Material UI Imports
import Container from '@material-ui/core/Container'
import { CssBaseline, Avatar, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {makeStyles} from '@material-ui/core/styles'

//Components
import FormControl from './forms/formControl'

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const MasterForm = () => {
    const classes = useStyles();

    return(

        <div>
            <h1>Our Form</h1>

            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Master Form
                    </Typography>

                    <FormControl/>

                </div>
            </Container>

        </div>
    )

}

export default MasterForm