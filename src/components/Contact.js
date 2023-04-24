import React from 'react';
import { makeStyles } from '@mui/styles';
import {Box, Button,TextField, Grid} from '@mui/material';
import Social from './Social';
import '../assest/Style.css';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    // backgroundColor: '#f1f1f1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3rem',
  },
  form: {
    maxWidth: '500px',
    width: '100%',
    backgroundColor: '#fff',
    padding: '3rem',
    borderRadius: '2px',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
    '& .MuiTextField-root': {
      marginBottom: '0.6rem',
    },
    '& textarea': {
      marginBottom: '0.3rem',
    },
    '& button': {
      marginLeft: 'auto',
      display: 'block',
    },
  },
  heading: {
    fontSize: '3rem',
    fontWeight: 'bold',
    borderBottom: '4px solid #6a62d5',
    color: '#0a192f',
    margin: '0',
    paddingBottom: '0.5rem',
  },
  subheading: {
    color: '#0a192f',
    fontWeight: 'bold',
    margin: '0',
    marginBottom: '1.5rem',
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
   <div >
   <Grid container spacing={2}>
     
   <Grid item sx={10} sm={12} md={6}>

 
<div  name='contact' className={classes.root}>
   <form  method='POST' action='https://getform.io/f/95a757b5-53ec-4c8a-898b-332f059c2b0d' className={classes.form}>
     <h2 className={classes.heading}>Contact Me</h2>
     <p className={classes.subheading}>Submit the form below to email</p>
     <TextField
     
       label='Name'
       variant='outlined'
       name='name'
       fullWidth
       required
     />
     <TextField
       label='Email'
       variant='outlined'
       name='email'
       fullWidth
       required
     />
     <textarea
     
       name='message'
       rows='10'
       placeholder='Message'
       style={{ width: '100%', padding: '0.5rem' }}
       required
     />
     <Button
       variant='contained'
       color='primary'
       type='submit'
     >
       Send
     </Button>
   </form>
  

</div>
</Grid>


<Grid className={classes.root}  item sx={6} sm={12} md={4}>
<Social className={classes.root} />
</Grid>
 

        

      
      </Grid>
</div>
  );
};

export default Contact;

