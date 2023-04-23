import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Paper, FormControl, TextField, Button, Typography } from '@mui/material';


const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = (e) => {
    e.preventDefault();
    if(email === `${process.env.REACT_APP_ADMIN_EMAIL}` && password===`${process.env.REACT_APP_ADMIN_PASS}`){
        toast.success('Login Success', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
          setTimeout(() => {
            navigate('/admin');
          }, 1500);
    }
    else{
        toast.error('Only Admin is Allowed', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
          setTimeout(() => {
            navigate('/SignInasAdmin');
          }, 1500);
    }
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     toast.success('Login Success', {
    //       position: 'top-right',
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: 'dark',
    //     });
    //     setTimeout(() => {
    //       navigate('/home');
    //     }, 1500);
    //     // const user = userCredential.user;
    //     // navigate('/home');
    //     // console.log(user);
    //   })
    //   .catch((error) => {
    //     toast.error(error.code, { type: 'error' });
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode, errorMessage);

    //     toast.error('Incorrect email or password. Please try again.', {
    //       position: 'top-right',
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: 'dark',
    //     });
    //   });
  };
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '170px',
      width: '100%',
      height: '100%',
    },
    paper: {

      padding: '50px',
      width: '300px',
      backgroundColor: '#f2f2f2',
      fontSize: '1.1rem',
    },
    title: {
      textAlign: 'center',
      marginBottom: '40px',
      fontSize: '2.5rem',
    },
    formControl: {
      fontSize: '1.2rem',
    },
    inputLabel: {
      fontSize: '1.1rem',
    },
    button: {
      marginTop: '20px',
      fontSize: '1.2rem',
    },
    signUp: {
      marginTop: '40px',
      textAlign: 'center',
      fontSize: '1.2rem',
    },
    TextField:{
      // padding: '20px',
      // display: 'flex',
      // justifyContent: 'center',
    },
  };
  
  return (
    <>
    <ToastContainer/>
    <div style={styles.container}>
    <Paper elevation={3} style={styles.paper}>
      <Typography variant='h3' style={styles.title}>
      Brain Busters 
      <Typography>
        Admin Login
      </Typography>
      </Typography>
      <FormControl style={styles.formControl}>
        <TextField
          id='email-address'
          label='Email address'
          name='email'
          type='email'
          required
          // fullWidth
          fullWidth
          margin='normal'
          InputLabelProps={{ shrink: true, style: styles.inputLabel }}
          variant='outlined'
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id='password'
          label='Password'
          name='password'
          type='password'
          required
          fullWidth
          margin='normal'
          InputLabelProps={{ shrink: true, style: styles.inputLabel }}
          variant='outlined'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant='contained' color='primary' onClick={onLogin} fullWidth style={styles.button}>
          Login
        </Button>
      </FormControl>
      <Typography variant='body1' style={styles.signUp}>
        Not an Admin ?{' '}
      
        <Typography>Login as
          {' '} <NavLink to='/'> Player</NavLink>
          </Typography>
      </Typography>
    </Paper>
  </div>
  </>
  );
};

export default Signin;



