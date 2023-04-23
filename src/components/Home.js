import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import {  signOut } from "firebase/auth";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';
import {useAuthState} from "react-firebase-hooks/auth";
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';



const steps = [
  {
    label: 'Read Instructions carefully!!',
    description: `You will be given a set of puzzle Clues that are scattered around the passage.`,
  },
  {
    label: 'Finding Clues',
    description: `Decode all clues from the passage by observing the passage and finding hidden clues. `,
  },
  {
    label: 'How to win!',
    description:`Keep going untill all the clues are solved,when all the puzzle is completely solved , You "Won!"`,
  },
  {
    label: 'Tip-1',
    description: `Pay attention to the design and styling of all the words in given passage.`,
  },
  {
    label: 'Tip-2',
    description: `you can find hidden clues by clicking on odd words`,
  },
  {
    label: 'Time limit?',
    description: `You have to find all hidden clues in given time limit.`,
  },
 
];

const Component = styled(AppBar)`
    color: #cae0e8;
    
    // position: static;
`;
const Container = styled(Toolbar)`
    justify-content: center;
    alignItems: center;
    justifyContent: center;
    & > a {
      fontSize: 3.5rem;
      fontWeight: bold;
        margin-left:5rem;
        padding: 25px;
        color: #fff;

        text-decoration: none;
    }
`;


const Home = () => {
  
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

    const navigate = useNavigate();
 

    const [user] = useAuthState(auth);

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              // ...
              console.log("uid-", uid)
            } else {
              // User is signed out
              // ...
              
              console.log("user is logged out")
            }
          });
         
    }, [])


    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
        if(signOut){
          sessionStorage.removeItem('timeRemaining');
          localStorage.removeItem('clue1');
          localStorage.removeItem('clue2');
          localStorage.removeItem('clue3');
          localStorage.removeItem('clue4');
          localStorage.removeItem('clue5');

          console.log('localStorage - local storage cleared');
        }
            
            toast.error('Log Out', {
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
              navigate('/');
            }, 1500);
          //  alert("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }
 

    // const handleLogout=()=>{
    //   toast.error('Loging OUT...!')
    //   setTimeout(()=>{
    //     navigate('/login');
    //   },1500)
        
    // };
    const [anchorEl, setAnchorEl] = React.useState(null);
    
    
    
      const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleprofile = () => {
        navigate('/Leaderboard');
        // setAnchorEl(null);
      };
      const handleClose = () => {
        
        setAnchorEl(null);
      };

  return (
    <div >
   
    <ToastContainer/>

    
     <Box sx={{ flexGrow: 1 }}>
     <AppBar position="fixed">
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          {user && (
            <h2>welcome {user.displayName || user.email}</h2>
          )}
        </Box>

        <Link to="/Puzzle"  sx={{   
    flexGrow: 2,
    color: '#fff',
    fontSize: '2.5rem',
    fontWeight: 'bold', 
  }}>
    <b> Play Puzzle</b>
         
        </Link>
        <Link to="/Leaderboard" variant="h3" color="inherit" sx={{ flexGrow: 1 }}>
      <b>Dashboard</b>
          
        </Link>
        <Link to="/contact" variant="h3" color="inherit" Component="div" sx={{ flexGrow: 1 }}>
         <b>Contact</b>
          
        </Link>

        <div>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleprofile}>My Dashboard</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                <ToastContainer/>
              </Menu>
            </div>

        </Container>
        {/* <Button edge="end" color="inherit" onClick={handleLogout}>LogOut</Button> */}
       


      
    </AppBar>
      {/* <Component position="static">
        <Container>
          <Box>{user && (
            <span>welcome {user.displayName || user.email}</span>
          )}</Box>
          <Link to="/Puzzle" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Play Puzzle
          </Link>
          <Link to="/Leaderboard" variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Dashboard
          </Link>
          <Link variant="h6" component="div" sx={{ flexGrow: 20 }}>
            About
          </Link>
          <Button edge="end" color="inherit" onClick={handleLogout}>LogOut</Button>
          
        </Container>
      </Component> */}
      
      {/* //getting user's displayname - 
      //firstly- import {useAuthState} from "react-firebase-hooks/auth";
      //then - const [user] = useAuthState(auth);
      //finally - <div>{
          user && (
            <span>welcome {user.displayName || user.email}</span>
          )}
      </div> */}

<Box  bgcolor="#e3f8ff" padding="4rem" >
  <Typography variant="h2" align='center' color="initial"> Welcome to <b>Brain Busters</b>  </Typography>
    
    <Typography>
     <Typography variant='h4'> Objective:  </Typography>
     <Typography variant='h6' color="inherit">
Your goal is to solve the puzzle by finding and connecting all the pieces together.
     </Typography>
     
</Typography>

<Typography align='center'> How to play ?</Typography>

<Box 
padding= "30px 40px" 
margin="auto"

sx={{ maxWidth: 800 ,

    fontSize:"24px",
    fontWeight:"bold",
    bgcolor:"#e3f8ff",
}}
>

      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 4 }}>
                <Box >
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 2, mr: 2 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 2, mr: 2 }}
                  >
                    Back
                  </Button>
                </Box>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper bgcolor="#e3f8ff" square elevation={0} sx={{ p: 3,bgcolor:"#e3f8ff" }}>
          <Typography  >Good luck, and have fun!</Typography>
          {/* <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button> */}
        </Paper>
      )}
    </Box>

      
    </Box>
    </Box>
</div>
  )
}
 
export default Home
 