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
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
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
          navigate('/home');
        }, 1500);
        // const user = userCredential.user;
        // navigate('/home');
        // console.log(user);
      })
      .catch((error) => {
        toast.error(error.code, { type: 'error' });
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

        toast.error('Incorrect email or password. Please try again.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      });
  };
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '150px',
      width: '100%',
      height: '100%',
    },
    paper: {

      padding: '80px',
      width: '300px',
      backgroundColor: '#f2f2f2',
      fontSize: '1.1rem',
    },
    title: {
      textAlign: 'center',
      marginBottom: '30px',
      fontSize: '2.5rem',
    },
    formControl: {
      fontSize: '1.2rem',
      padding:'20px',
      
    },
    inputLabel: {
      fontSize: '1.4rem',
    
    },
    button: {
      marginTop: '25px',
      fontSize: '1.5rem',
      padding: '5px'
    },
    signUp: {
      marginTop: '50px',
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
    <div > 
    <ToastContainer/>
    <div style={styles.container}>
    <Paper elevation={3} style={styles.paper}>
      <Typography variant='h3' style={styles.title}>
        <b>
      Brain Busters </b>
      </Typography>
      <FormControl style={styles.formControl}>
        <TextField
          id='email-address'
          label='Email address'
          name='email'
          type='email'
          required
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
        No account yet?{' '}
       
        <NavLink to='/signup' style={{ textDecoration: 'none', color: '#3f51b5' }}>
          Sign up
        </NavLink>
        <hr></hr>
        <Typography>Login as
          {' '} <NavLink to='/SignInasAdmin'> Admin</NavLink>
          </Typography>
      </Typography>
    </Paper>
  </div>
  </div>
  );
};

export default Signin;






// import React, { useState } from 'react';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { Paper, FormControl, TextField, Button, Typography } from '@mui/material';
// import '../app.css';

// const Signin = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const onLogin = (e) => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in
//         toast.success('Login Success', {
//           position: 'top-right',
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: 'dark',
//         });
//         setTimeout(() => {
//           navigate('/home');
//         }, 1500);
//         const user = userCredential.user;
//         navigate('/home');
//         console.log(user);
//       })
//       .catch((error) => {
//         toast.error(error.code, { type: 'error' });
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode, errorMessage);
//       });
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
//       <Paper elevation={3} style={{ padding: '20px', width: '400px', backgroundColor: '#f2f2f2' }}>
//         <Typography variant='h5' style={{ textAlign: 'center', marginBottom: '20px' }}>
//           Sign In
//         </Typography>
//         <FormControl>
//           <TextField
//             id='email-address'
//             label='Email address'
//             name='email'
//             type='email'
//             required
//             fullWidth
//             margin='normal'
//             InputLabelProps={{ shrink: true }}
//             variant='outlined'
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <TextField
//             id='password'
//             label='Password'
//             name='password'
//             type='password'
//             required
//             fullWidth
//             margin='normal'
//             InputLabelProps={{ shrink: true }}
//             variant='outlined'
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Button variant='contained' color='primary' onClick={onLogin} fullWidth style={{ marginTop: '20px' }}>
//             Login
//           </Button>
//         </FormControl>
//         <Typography variant='body1' style={{ marginTop: '20px', textAlign: 'center' }}>
//           No account yet?{' '}
//           <NavLink to='/signup' style={{ textDecoration: 'none', color: '#3f51b5' }}>
//             Sign up
//           </NavLink>
//         </Typography>
//       </Paper>
//     </div>
//   );
// };

// export default Signin;
