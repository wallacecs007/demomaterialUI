import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MuiPhoneNumber from 'material-ui-phone-number'


import { connect } from "react-redux";
import { registerUser } from '../actions/auth'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

function SignUp(props) {
  const classes = useStyles();

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    password: "",
    email: "",
    phone_number: ""
  });

  
  const handlerChange = event => {
    event.preventDefault()
    console.log('username and password change',user);
    console.log(error)
    setUser({ ...user, [event.target.name]: event.target.value });
    validatorFunction()
  };

  const [error, setError] =useState({
    first_name_error: null,
    last_name_error: false,
    password_error: false
  })


  const validatorFunction = () => {
    if(user.first_name.length < 1){
      setError({...error, first_name_error:true})
    }else {
      setError({...error, first_name_error: false})
    }
  }

  const submitHandler = event => {
    event.preventDefault();
    validatorFunction()
    if(error.first_name_error === false && error.last_name_error === false && error.password_error === false){
      props.registerUser(user)
    }else {
      console.log("you are not valid")
    }
    
    console.log(user)
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={submitHandler} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="first_name"
                variant="outlined"
                fullWidth
                error={error.first_name_error}
                id="first_name"
                label="First Name"
                onChange={handlerChange}
                autoFocus
                helperText="You must include your First Name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="last_name"
                label="Last Name"
                name="last_name"
                onChange={handlerChange}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={handlerChange}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            name="phone"
            label="Phone"
            type="phone"
            id="phone-number"
            onChange={handlerChange}
          />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handlerChange}
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="localhost:3000/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

const mapDispatchToProps = {
  registerUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);