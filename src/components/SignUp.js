import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import { Paper, FormControl, TextField, Button, Typography } from '@mui/material';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: name });
      const user = userCredential.user;
      console.log(user);
      navigate('/');
      toast.success('Sign up successful', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      toast.error(errorMessage);
    }
  };

  return (
    <>
          <ToastContainer />
    <div className='App'>
      <Paper sx={{ padding: 20, 
      margin: 'auto', 
      maxWidth: 270,
      width: '300px',
      backgroundColor: '#f2f2f2',
    }}
      >
        <Typography variant='h3' align='center' padding="20px 20px">
       <b>Brain Busters</b>
          
        </Typography>
        <FormControl>
          <TextField
            required
            fullWidth
            margin='normal'
            id='name'
            label='Enter Name'
            name='name'
            autoFocus
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            required
            fullWidth
            margin='normal'
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            fullWidth
            margin='normal'
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type='submit' fullWidth  variant='contained' sx={{ mt: 3, mb: 4,display:'block'}} onClick={onSubmit}>
            Sign Up
          </Button>
        </FormControl>
        <Typography align='center'>
          Already have an account?{' '}
          <hr></hr>
          LoginIn here{' '}
          <NavLink to='/'>
            Sign In
          </NavLink>
        </Typography>
      </Paper>
    </div>
    </>
  );
};

export default SignUp;




// import React, { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
// import { auth } from '../firebase';
// import { Paper, FormControl, TextField, Button, Typography } from '@mui/material';

// const SignUp = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     await createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in
//         updateProfile(auth.currentUser, { displayName: name });
//         const user = userCredential.user;
//         console.log(user);
        
//         navigate('/');
//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode, errorMessage);
//         // ..
//       });
//   };

//   return (
//     <div className='App'>
//       <Paper sx={{ padding: 2, margin: 'auto', maxWidth: 400 }}>
//         <Typography variant='h5' align='center' gutterBottom>
//           Quiz
//         </Typography>
//         <FormControl>
//           <TextField
//             required
//             fullWidth
//             margin='normal'
//             id='name'
//             label='Enter Name'
//             name='name'
//             autoFocus
//             onChange={(e) => setName(e.target.value)}
//           />
//           <TextField
//             required
//             fullWidth
//             margin='normal'
//             id='email'
//             label='Email Address'
//             name='email'
//             autoComplete='email'
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <TextField
//             required
//             fullWidth
//             margin='normal'
//             name='password'
//             label='Password'
//             type='password'
//             id='password'
//             autoComplete='current-password'
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }} onClick={onSubmit}>
//             Sign Up
//           </Button>
//         </FormControl>
//         <Typography align='center'>
//           Already have an account?{' '}
//           <NavLink to='/'>
//             Sign In
//           </NavLink>
//         </Typography>
//       </Paper>
//     </div>
//   );
// };

// export default SignUp;