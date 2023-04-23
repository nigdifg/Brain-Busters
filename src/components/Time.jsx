import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';
import { db } from "../firebase";
import { doc,writeBatch, collection, getDocs, query,  where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const useStyles = makeStyles({
  timerContainer: {
    position: 'static',
    top: 0,
    right: 5,
    padding: '40px',
    backgroundColor: '#cae0e8',
    borderRadius: '5px',
    boxShadow: '1px 1px 20px rgba(0, 0, 0, 0.25)',
    zIndex: 9999,
    fontSize: 16,
    padding: '10px',
    margin: '20px',
  },
  timeRemaining: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  timeBar: {
    height: '10px',
    backgroundColor: '#bdd8d9',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  timeBarFill: {
    backgroundColor: '#2196f3',
    borderRadius: '10px',
    height: '10px',
    borderRadius: '5px',
    transition: 'width 1s linear', // change transition duration or timing function here
  },
});

function Timer() {
  const navigate = useNavigate();
  const classes = useStyles();
  const [time, setTime] = useState(60 * 8); // 60 seconds timer
  const [isTimeOver, setIsTimeOver] = useState(false);

  useEffect(() => {
    const storedTime = sessionStorage.getItem('timeRemaining');
    if (storedTime) {
      const remainingTime = Number(storedTime);
      setTime(remainingTime);
      setIsTimeOver(remainingTime <= 0);
    }
  }, []);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsTimeOver(true);
      sessionStorage.removeItem('timeRemaining');
      
      toast.success('Ooops..Time Up', {
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
      }, 3000);
      
    }
  }, [time]);

  useEffect(() => {
    sessionStorage.setItem('timeRemaining', time);
    setIsTimeOver(time <= 0);
  }, [time]);

  const getTimePercent = () => {
    return `${(time / (60 * 8)) * 100}%`;
  };





//push data to firestore


  // const [users, setUsers] = useState([]);
const usersCollectionRef = collection(db, "users");
const [user] = useAuthState(auth);
let username;
let useremail;
let Time = 480;
let status = "Losse";
let clues = 0; 
if (user && (user.displayName || user.email)) {
  username = user.displayName;
  useremail = user.email;
}

  const checkUserExists = async () => {
    
      const q = query(usersCollectionRef, where("email", "==", useremail));
      const querySnapshot = await getDocs(q);
  
      if (querySnapshot.empty) {
        const batch = writeBatch(db);
        const newDocRef = doc(usersCollectionRef);

        batch.set(newDocRef, {
          
          name: username,
          email: useremail,
          timeTaken:Time,
          Status:status,
          solvedClue:clues,
        });
        await batch.commit();
      }
  };

if(isTimeOver){
  Time = 480;
  status = "Losse"
  checkUserExists();
}



  return (

    <>
   <ToastContainer/>
    <div className={classes.timerContainer}>
      <Typography className={classes.timeRemaining}>
        {isTimeOver ? (
          "Time's up!"
        ) : (
          `${Math.floor(time / 60)}:${('0' + (time % 60)).slice(-2)} remaining`
        )}
      </Typography>
      {!isTimeOver && (
        <div className={classes.timeBar}>
          <div
            className={classes.timeBarFill}
            style={{ width: getTimePercent() }}
          ></div>
        </div>
      )}
    </div>
    </>
  );
}

export default Timer;

