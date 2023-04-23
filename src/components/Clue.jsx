import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {Box, Stack,Button } from "@mui/material";
import { useState,useEffect } from "react";


import { auth } from "../firebase";

import { db } from "../firebase";
import { doc,writeBatch, collection, getDocs, query,  where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";


export default function SelectLabels() {

  // const [clue1, setclue1] = React.useState("");
  const [clue2, setclue2] = useState(localStorage.getItem('clue2') || '');
  const [clue3, setclue3] = useState(localStorage.getItem('clue3') || '');
  const [clue4, setclue4] = useState(localStorage.getItem('clue4') || '');
  const [clue5, setclue5] = useState(localStorage.getItem('clue5') || '');
  const [clue1, setclue1] = useState(localStorage.getItem('clue1') || '');


  useEffect(() => {
    localStorage.setItem('clue1', clue1);
    localStorage.setItem('clue2', clue2);
    localStorage.setItem('clue3', clue3);
    localStorage.setItem('clue4', clue4);
    localStorage.setItem('clue5', clue5);
  }, [clue1,clue2,clue3,clue4,clue5]);
  
  const handleChange1 = (event) => {
    setclue1(event.target.value);
    console.log(clue1);
  };
  const handleChange2 = (event) => {
    setclue2(event.target.value);
  };
  const handleChange3 = (event) => {
    setclue3(event.target.value);
  };
  const handleChange4 = (event) => {
    setclue4(event.target.value);
  };
  const handleChange5 = (event) => {
    setclue5(event.target.value);
  };

  


   
const usersCollectionRef = collection(db, "users");
const [user] = useAuthState(auth);
let username;
let useremail;
let Time = 480;
let status = "Losse";
let clues = 0; 
let accuracy;
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
          Accuracy:accuracy,
        });
        await batch.commit();
      }
  };


  const handleSubmit = (event) =>{
    console.log('button click');
    let consume_time = sessionStorage.getItem('timeRemaining');
    console.log(consume_time)
    console.log("consume_time - ",480-consume_time);

    if(480-consume_time <0){
      alert('OOps.. time is UP! - You losse!');
    }

    let correct_ques=0;
    
    if(clue1=== 'Psychcological_distress'){
      correct_ques++;
    }
    if(clue2=== 'Hallucination'){
      correct_ques++;
    }
    if(clue3=== 'Drugs & Abuse'){
      correct_ques++;
    }
    if(clue4=== 'Paranormal Entity'){
      correct_ques++;
    }
    if(clue5=== 'Human Assailant'){
      correct_ques++;
    }
    console.log("cnt - ",correct_ques); 
    if(clue1=== 'Psychcological_distress' && clue2 === 'Hallucination' && clue3=== 'Drugs & Abuse' && clue4==='Paranormal Entity' && clue5==='Human Assailant'){
      console.log('sucess');
     
      alert('You won!');
      clues = 5;
      status = "Won";
      Time = 480-consume_time;
      accuracy = 100;
      checkUserExists();  
    }
    else{
      alert("oops... you losses!");
      clues = correct_ques;
      accuracy = ((clues/5)*100);
      status="Losse";
      Time = 480-consume_time;
      checkUserExists();
    }


  };



  return (
    <div>
      {/* <Time onTimeComplete={() => setIsButtonDisabledfuncn} /> */}
      {/* <Time /> */}

      <Stack spacing={5} direction="row">
        <Box>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        
        <InputLabel id="c1">Clue1</InputLabel>
        <Select
          labelId="c1"
          id="c1"
          value={clue1}
          label="clue1"
          onChange={handleChange1}
        >
          <MenuItem value={'Nutritional deficiency'}>Nutritional deficiency</MenuItem>
          <MenuItem value={'Psychcological_distress'}>Psychcological_distress</MenuItem>
          <MenuItem value={'Paranormal Entity'}>Paranormal Entity</MenuItem>
          <MenuItem value={'Drugs & Abuse'}>Drugs & Abuse</MenuItem>
          <MenuItem value={'Hallucination'}>Hallucination</MenuItem>
          <MenuItem value={'Lack of exercise'}>Lack of exercise</MenuItem>
          <MenuItem value={'Human Assailant'}>Human Assailant</MenuItem>

        </Select>
        <FormHelperText>Choose from clue1</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Clue2</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={clue2}
          label="clue2"
          onChange={handleChange2}
        >
          
          <MenuItem value={'Nutritional deficiency'}>Nutritional deficiency</MenuItem>
          <MenuItem value={'Psychcological_distress'}>Psychcological_distress</MenuItem>
          <MenuItem value={'Paranormal Entity'}>Paranormal Entity</MenuItem>
          <MenuItem value={'Drugs & Abuse'}>Drugs & Abuse</MenuItem>

          <MenuItem value={'Hallucination'}>Hallucination</MenuItem>
          <MenuItem value={'Lack of exercise'}>Lack of exercise</MenuItem>

          <MenuItem value={'Human Assailant'}>Human Assailant</MenuItem>

        </Select>
        <FormHelperText>Choose from clue2</FormHelperText>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Clue3</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={clue3}
          label="clue3"
          onChange={handleChange3}
        >
       <MenuItem value={'Nutritional deficiency'}>Nutritional deficiency</MenuItem>
          <MenuItem value={'Psychcological_distress'}>Psychcological_distress</MenuItem>
          <MenuItem value={'Paranormal Entity'}>Paranormal Entity</MenuItem>
          <MenuItem value={'Drugs & Abuse'}>Drugs & Abuse</MenuItem>

          <MenuItem value={'Hallucination'}>Hallucination</MenuItem>
          <MenuItem value={'Lack of exercise'}>Lack of exercise</MenuItem>

          <MenuItem value={'Human Assailant'}>Human Assailant</MenuItem>
        </Select>
        <FormHelperText>Choose from clue3</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Clue4</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={clue4}
          label="clue4"
          onChange={handleChange4}
        >
       <MenuItem value={'Nutritional deficiency'}>Nutritional deficiency</MenuItem>
          <MenuItem value={'Psychcological_distress'}>Psychcological_distress</MenuItem>
          <MenuItem value={'Paranormal Entity'}>Paranormal Entity</MenuItem>
          <MenuItem value={'Drugs & Abuse'}>Drugs & Abuse</MenuItem>

          <MenuItem value={'Hallucination'}>Hallucination</MenuItem>
          <MenuItem value={'Lack of exercise'}>Lack of exercise</MenuItem>

          <MenuItem value={'Human Assailant'}>Human Assailant</MenuItem>
        </Select>
        <FormHelperText>Choose from clue4</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Clue5</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={clue5}
          label="clue5"
          onChange={handleChange5}
        >
    <MenuItem value={'Nutritional deficiency'}>Nutritional deficiency</MenuItem>
          <MenuItem value={'Psychcological_distress'}>Psychcological_distress</MenuItem>
          <MenuItem value={'Paranormal Entity'}>Paranormal Entity</MenuItem>
          <MenuItem value={'Drugs & Abuse'}>Drugs & Abuse</MenuItem>

          <MenuItem value={'Hallucination'}>Hallucination</MenuItem>
          <MenuItem value={'Lack of exercise'}>Lack of exercise</MenuItem>

          <MenuItem value={'Human Assailant'}>Human Assailant</MenuItem>
        </Select>
        <FormHelperText>Choose from clue5</FormHelperText>
      </FormControl>
      <Button  color="primary" sx={{ fontSize: 18, padding: '12px', margin: '5px' }} size="large" variant="outlined" onClick={handleSubmit}>Submit</Button>
      
      </Box>
      </Stack>
    </div>
  );
}