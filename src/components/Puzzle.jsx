import { Box, Typography,Modal, Card } from '@mui/material';
import React from 'react'

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Clue from "./Clue";
import Time from './Time';
import { auth } from '../firebase';

import {  signOut } from "firebase/auth";
import {  useNavigate } from 'react-router-dom';

import {useAuthState} from "react-firebase-hooks/auth";
import { toast,ToastContainer } from 'react-toastify';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Grid from '@mui/material/Grid';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    backgroundColor: '#c3dee8',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };



const Puzzle = () => {
  const navigate = useNavigate();

    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
  
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
  
    const [open5, setOpen5] = React.useState(false);

    const [open6, setOpen6] = React.useState(false);
  
    const handlecloseDeadend1 = () => setOpen6(false); 
  
    const handleOpenDeadend1 = () => setOpen6(true); 

    const handleClose1 = () => setOpen1(false);
    const handleOpen1 = () => setOpen1(true);
  
    const handleClose2 = () => setOpen2(false);
    const handleOpen2 = () => setOpen2(true);

    const handleClose3 = () => setOpen3(false);
    const handleOpen3 = () => setOpen3(true);
  
    const handleClose4 = () => setOpen4(false);
    const handleOpen4 = () => setOpen4(true);
    
    const handleClose5 = () => setOpen5(false);
    const handleOpen5 = () => setOpen5(true);

    const handleClue1 = ()=>{
        console.log('clue-1');
        handleOpen1();
    }
    const handleClue2 = ()=>{
        console.log('clue-2');
        toast('this is your 2 clue')
        handleOpen2();
    }
    const handleClue3 = ()=>{
        console.log('clue-3');
        handleOpen3();
    }
    const handleClue4 = ()=>{
        console.log('clue-4');
        handleOpen4();
    }
    const handleClue5 = ()=>{
        console.log('clue-5');
        handleOpen5();
    }
    const handleDeadend1 = ()=>{
        console.log('dead-end1');
        handleOpenDeadend1();
    }




    //logout
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

  const [anchorEl, setAnchorEl] = React.useState(null);

  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleprofile = () => {
      navigate('/Leaderboard');
    };
    const handleClose = () => {
      
      setAnchorEl(null);
    };
    



  return (
    <Box backgroundColor="#d8e3e8">

       <Time/>
        <Modal  open={open1} onClose={handleClose1} aria-labelledby="title" aria-describedby="desc">
          <Box sx={style}
          
          >
            <Typography id="title" variant="h6" color="inherit" component="h2">you Unlock the Clue-1</Typography>
            <Typography id="desc"  sx={{ mt: 2 }}>
              I'm a feeling that weighs heavy on your mind,
              A burden that's difficult to leave behind.
              I can stem from trauma or chronic stress,
              And make it hard to find happiness.
              </Typography>
          </Box>
        </Modal>
        <Modal open={open2} onClose={handleClose2} aria-labelledby="title" aria-describedby="desc">
          <Box sx={style}>
            <Typography id="title" variant="h6" component="h2">you Unlock the Clue-2</Typography>
            <Typography id="desc" sx={{ mt: 2 }}> 
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={require("../assest/clue2.jpg")}
          alt="clue_2"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          I am a vision that is not there,
Yet you see me, and cannot help but stare. What am I?
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
            </Typography>
          </Box>
        </Modal>
        <Modal open={open3} onClose={handleClose3} aria-labelledby="title" aria-describedby="desc">
          <Box sx={style}>
            <Typography id="title" variant="h6" component="h2">you Unlock the Clue-3</Typography>
            <Typography id="desc" sx={{ mt: 2 }}> 
            01000110 01101001 01101110 01100100 00100000 01101010 01101111 01111001 00100000 01101001 01101110 00100000 01101100 01101001 01110110 01101001 01101110 01100111 00100000 01110111 01101001 01110100 01101000 01101111 01110101 01110100 00100000 01101000 01100001 01110010 01101101 01100110 01110101 01101100 00100000 01101001 01101110 01100110 01101100 01110101 01100101 01101110 01100011 01100101 01110011 00101110 00001010
            </Typography>
          </Box>
        </Modal>
        <Modal open={open4} onClose={handleClose4} aria-labelledby="title" aria-describedby="desc">
          <Box sx={style}>
            <Typography id="title" variant="h6" component="h2">you Unlock the Clue-4</Typography>
            <Typography>Read and Infer - A snippet from a scientific journal</Typography>
            <Typography id="desc" sx={{ mt: 2 }}> If a dog is standing in a corner, barking at nothing visible, could it be that they sense something out of the ordinary? Or perhaps they stay close to an object that is associated with a deceased family member, whether it be a favorite chair or side of the bed, as if that person is still present.</Typography>
                      
          </Box>
        </Modal>
        <Modal open={open5} onClose={handleClose5} aria-labelledby="title" aria-describedby="desc">
          <Box sx={style}>
            <Typography id="title" variant="h6" component="h2">you Unlock the Clue-5</Typography>
            <Typography id="desc" sx={{ mt: 2 }}> 
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={require("../assest/clue_5.jpg")}
          alt="clue_2"
        />
        <CardContent>         
        </CardContent>
      </CardActionArea>
    </Card>
            </Typography>
          </Box>
        </Modal>
        <Modal open={open6} onClose={handlecloseDeadend1} aria-labelledby="title" aria-describedby="desc">
          <Box sx={style}>
            <Typography id="title" variant="h6" component="h2">Dead-end- 1</Typography>
            <Typography id="desc" sx={{ mt: 2 }}> becharaa</Typography>
          </Box>
        </Modal>
       

    
{/* //logout */}
<Grid container spacing={2}>
<Grid item xs={10}>
      <Box sx={{
      backgroundColor: '#f0f0f0',
      padding: '20px',
      margin: '20px',
      maxWidth: '80%',
      justify: "center",
      display: "box",
      borderRadius: '10px'}}>
        Read the story carefully!
        </Box>
        </Grid> 
    <Grid item xs={1}>
        <div >
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle style={{fontSize: '3rem' }}/>
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
      </Grid>
   
        </Grid>       

{/* ----------------- */}
        <Typography
        sx={{
          maxWidth: '80%',
          marginBottom: '10px',
          fontSize: '24px',
          color: '#666',
        }}
        justify="center"
        margin= "auto"
        display= "box"
        variant=  "h5"
        // sx={{ maxWidth: '80%' }}
        > 
        A sudden gust of wind swept through the narrow street, causing newspaper pages to rustle and trash cans to clang together. The blond man turned his head, looking behind him, but saw nothing unusual. He picked up his pace, trying to get away from the feeling of <i onClick={handleClue1} >unease</i>  growing inside him.

He had been walking for hours since his shift ended at the bank downtown. His walk home usually took around twenty minutes, but tonight it seemed to take forever. Every step felt heavy, and every shadow looked <b onClick={handleClue2}> sinister </b>. Maybe it was due to the lack of sleep lately, or perhaps it was because of the nightmarish memories haunting him. Either way, he couldn't shake off the sense of impending doom looming over him.

Suddenly, a loud thud echoed behind him, followed by another one, then another one.<u onClick={handleDeadend1}>Panicking </u> , the man broke into a run. He didn't bother checking what caused those sounds; he knew better than to look back. He had seen enough horror movies to know that whatever was following him wouldn't show itself until it was ready to strike. All he could think of was getting back home alive.

After running for several blocks, the man collapsed onto the stoop of his apartment building, gasping for breath. He frantically searched for his house keys,<i onClick={handleClue3}>fumbling</i>  with numb fingers. Just when he thought he heard footsteps closing in on him, the door burst open, and his roommate dragged him inside.

"What happened?" asked his roommate, concern etched on his face.

The man stared blankly ahead, unable to speak. Slowly, he raised a trembling hand, pointing towards the <u onClick={handleClue4}> darkness</u> outside. That's when they noticed the red marks covering his neck, as if someone, or someTHING, had tried to <b onClick={handleClue5}> strangle</b> him.

Fear consumed both men as they realized that whatever pursued the young man was still out there, waiting for the perfect moment to strike again. What manner of creature stalks the streets of the city after midnight?
 What do you think, must have happened there.
 <p>Find all 5 clues hidden in the above passage. </p>
       
    <Typography>Select the correct answer.</Typography>
    <Clue/>
</Typography>
    </Box>
  )
}

export default Puzzle;