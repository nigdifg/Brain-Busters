import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
} from "@mui/material";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";

const Social = () => {
  return (
    <div style={{ backgroundColor: '#e3f8ff' }}>
    <Card style={{ backgroundColor: '#e3f8ff' }} sx={{ maxWidth: 800,padding:'60px' }}>
      <CardHeader title="About Me" />
      <CardContent>
        <Typography variant="body1" gutterBottom>
       Hi, I'm Anurag, a student who has a passion for enjoying the process of turning ideas into reality using creative solutions. I’m always curious about
learning new skills, tools, and concepts.
 Here are some ways to
          reach me:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <Link href="https://github.com/nigdifg" target="_blank" rel="noopener">
                <GitHub />                             
              </Link> </ListItemIcon>
              <ListItemText primary="Github" />
              </ListItem>
           
          <ListItem>
            <ListItemIcon>
              <Link href="https://www.linkedin.com/in/anurag-91a137203/" target="_blank" rel="noopener">
                <LinkedIn />
              </Link>
            </ListItemIcon>
            <ListItemText primary="LinkedIn" />
          </ListItem>
          
        </List>
      </CardContent>
    </Card>
    </div>
  );
};

export default Social;
