


import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import { db } from "../firebase";
import {
  addDoc,
  orderBy,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";



const SearchAdmin = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState(null);

  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      const uniqueUsers = Object.values(
        data.docs.reduce((result, doc) => {
          if (!result[doc.data().email]) {
            result[doc.data().email] = { ...doc.data(), id: doc.id };
          }
          return result;
        }, {})
      );
      setUsers(uniqueUsers);
    };
    getUsers();
  }, []);

  const handleUserSelect = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }
    const selectedUserData = users.find((user) => user.email === email);
    if (!selectedUserData) {
      alert("User not found.");
      return;
    }
    setSelectedUser(selectedUserData);
    setUserData(selectedUserData);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setSelectedUser(null);
    setUserData(null);
    setEmail("");
  };

  return (
    <>
      <div>
        {selectedUser ? (
            <Grid item xs={12} sm={12} md={12}>
              <Card style={{ backgroundColor: '#e3f8ff' }}>
                <CardHeader title={selectedUser.name} />
                <CardContent>
                  <Typography variant="body1">
                    Status: {selectedUser.Status}
                  </Typography>

                  <Typography variant="body1">
                    Email: {selectedUser.email}
                  </Typography>
                  <Typography variant="body1">
                    Total time taken to play: {selectedUser.timeTaken}
                  </Typography>
                  <Typography variant="body1">
                    Total number of Clue solved: {selectedUser.solvedClue}
                  </Typography>
                  <Typography variant="body1">
                    Accuracy: {selectedUser.Accuracy}
                  </Typography>
                </CardContent>
              </Card>
              <Button variant="contained" onClick={handleReset}>
                Reset
              </Button>
            </Grid>
        ) : (
          <form onSubmit={handleUserSelect} >
            <Box margin="auto" padding="20px" edge ="end">
            <TextField
              label="Enter user email"
              variant="outlined"
              // margin="normal"
              size="large"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button variant="contained" size="large" type="submit">
              Get User Data
            </Button>
            </Box>
          </form>
        )}
      </div>
    </>
  );
};

export default SearchAdmin;