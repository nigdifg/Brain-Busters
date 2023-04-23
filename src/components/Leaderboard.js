import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';

import { db } from "../firebase";
import {
  addDoc,
  orderBy,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import {useAuthState} from "react-firebase-hooks/auth";
import { auth } from '../firebase';
import {  signOut } from "firebase/auth";
import {  useNavigate } from 'react-router-dom';
const Leaderboard = ({ currentUser }) => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userData, setUserData] = useState(null);

  const usersCollectionRef = collection(db, "users");
  const currentUserEmail = user.email;

  useEffect(() => {
    const getUsers = async () => {
      const q = query(usersCollectionRef, where("email", "==", currentUserEmail));
      const data = await getDocs(q);
      const currentUserData = data.docs[0].data();
      setSelectedUser(currentUserData);
      setUserData(currentUserData);
      localStorage.setItem("selectedUserData", JSON.stringify(currentUserData));

    };

    const storedUserData = localStorage.getItem("selectedUserData");
    if (storedUserData) {
      setSelectedUser(JSON.parse(storedUserData));
      setUserData(JSON.parse(storedUserData));
    } else {
      getUsers();
    }
  }, []);

  // const handleReset = (e) => {
  //   e.preventDefault();
  //   setSelectedUser(null);
  //   setUserData(null);
  // };
  const handleLogout = () => {               
    signOut(auth).then(() => {
    // Sign-out successful.
    if(signOut){
      localStorage.removeItem('selectedUserData');
      sessionStorage.removeItem('timeRemaining');
      localStorage.removeItem('clue1');
      localStorage.removeItem('clue2');
      localStorage.removeItem('clue3');
      localStorage.removeItem('clue4');
      localStorage.removeItem('clue5');
      console.log('localStorage - local storage cleared');
    }
         toast.error('LogOut', {
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
    console.log(error);
    });
}


  const [anchorEl, setAnchorEl] = React.useState(null);
    
    
    
      const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleprofile = () => {
        navigate('/home');
        // setAnchorEl(null);
      };
      const handleClose = () => {
        
        setAnchorEl(null);
      };

  return (
    <div style={{ backgroundColor: '#e3f8ff' }} >
<ToastContainer style={{ backgroundColor: '#e3f8ff' }}/>
   
      <div style={{ backgroundColor: '#e3f8ff',minHeight:'100vh' }}  className="leaderboard-container">
        <container >
        <Typography variant="h4" component="h1" spacing={10} align="center" sx={{ marginBottom: "1rem" }}>
          My Dashboard
       
            <IconButton
            style={{size: '4rem' }}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle style={{fontSize: '3rem' }} />
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
                <MenuItem onClick={handleprofile}>Home</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                <ToastContainer/>
              </Menu>
            </Typography>
        </container>

        {selectedUser ? (
          <Grid style={{ backgroundColor: '#e3f8ff' }} container spacing={3} justifyContent="center">
            <Grid style={{ backgroundColor: '#e3f8ff' }} item xs={12} sm={6} md={4}>
              <Card className="user-card" style={{ backgroundColor: '#e3f8ff',position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}} sx={{ backgroundColor: "#e3f8ff", boxShadow: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.25)" }}>
                
                <CardHeader title={selectedUser.name} className="user-card-header" sx={{ backgroundColor: "#e3f8ff", borderBottom: "1px solid #ddd", padding: "1rem" }}>
              
                
                </CardHeader>   
                          
                  <CardContent style={{ backgroundColor: '#e3f8ff' }} sx={{ padding: "1rem" }}>
                  <Typography variant="body1" className="user-card-text" sx={{ marginBottom: "0.5rem" }}>
                    Status: {selectedUser.Status}
                  </Typography>

                  <Typography variant="body1" className="user-card-text" sx={{ marginBottom: "0.5rem" }}>
                    Email: {selectedUser.email}
                  </Typography>
                  <Typography variant="body1" className="user-card-text" sx={{ marginBottom: "0.5rem" }}>
                    Total time taken to play: {selectedUser.timeTaken} seconds    
                  </Typography>
                  <Typography variant="body1" className="user-card-text" sx={{ marginBottom: "0.5rem" }}>
                    Total number of Clue solved: {selectedUser.solvedClue}
                  </Typography>
                  <Typography variant="body1" className="user-card-text">
                    Accuracy: {selectedUser.Accuracy}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        ) : (
          <Typography style={{ backgroundColor: '#e3f8ff' }} variant="body1" align="center" sx={{ marginTop: "2rem" }}>
          Play game to see your soft skills   
          {' '} No data found for {currentUserEmail}.
        </Typography>
      )}
    </div>
  </div>
);
};


export default Leaderboard;






