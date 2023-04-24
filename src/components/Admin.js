
import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
} from "@mui/material";
import { db } from "../firebase";
import { addDoc,orderBy, collection, getDocs, query, where } from "firebase/firestore";
import SearchAdmin from './SearchAdmin';
import '../assest/Style2.css';
const Admin = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  // const [user] = useAuthState(auth);
  // let username;
  // let useremail;
  // let time = 10;
  // let status = "Win";
  // let clues = 5; 
  // if (user && (user.displayName || user.email)) {
  //   username = user.displayName;
  //   useremail = user.email;
  // }

  // useEffect(() => {
  //   const checkUserExists = async () => {
  //     const q = query(usersCollectionRef, where("email", "==", useremail));
  //     const querySnapshot = await getDocs(q);

  //     if (querySnapshot.empty) {
  //       await addDoc(usersCollectionRef, {
  //         name: username,
  //         email: useremail,
  //         timeTaken:time,
  //         Status:status,
  //         solvedClue:clues,
  //       });
  //     }
  //   };
  //   checkUserExists();
  // }, [username, useremail]);

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(usersCollectionRef);
  //     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  //   getUsers();
  // }, []);
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      const uniqueUsers = Object.values(data.docs.reduce((result, doc) => {
        if (!result[doc.data().email]) {
          result[doc.data().email] = { ...doc.data(), id: doc.id };
        }
        return result;
      }, {}));
      setUsers(uniqueUsers);
    };
    getUsers();
  }, []);
  
  // Divide users into smaller arrays of size 3
  const usersChunks = users.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 3);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);


    return resultArray;
  }, []);

  return (
    <div >
    
    <Grid container spacing={2}>
    <Grid  item sx={4}>
      <SearchAdmin />
      </Grid>
     
    <Grid  item sm={8}>
      <div >
        <Typography padding="20px" variant="h4" component="h1" align="center">
         All User Activity Dashboard
        </Typography>
        {usersChunks?.map((usersChunk, index) => (
          <Grid  container spacing={3} key={index}>
            {usersChunk.map((user) => (
              <Grid padding="40px" item xs={8} sm={12} md={6} key={user.id}>
                <Card style={{ backgroundColor: '#e3f8ff' }}>
                  <CardHeader title={user.name} />
                  <CardContent>
                    <Typography variant="body1">
                      Status: {user.Status}
                    </Typography>
                  
                    <Typography variant="body1">
                    Email: {user.email}
                    </Typography>
                    <Typography variant="body1">
                    Total time taken to play: {user.timeTaken}
                    </Typography>
                    <Typography variant="body1">
                    Total number of Clue solved: {user.solvedClue}
                    </Typography>
                    <Typography variant="body1">
                    Accuracy: {user.Accuracy}
                    </Typography>
                 
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ))}
      </div>
      </Grid>

      
      </Grid>
    </div>
  );
};

export default Admin;