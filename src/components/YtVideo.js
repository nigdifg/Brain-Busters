import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import '../assest/Style.css';
const useStyles = makeStyles({
    body:{
        overflow: 'hidden',
    },
  videoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
  },
  heading: {
        padding: '1rem',
        fontSize: '2rem',
        textAlign: 'center',
        overflow: 'hidden',
      },
});

function YtVideo() {
  const navigate = useNavigate();
  const [ended, setEnded] = useState(false);
  const classes = useStyles();

  const handleVideoEnd = (event) => {
    setEnded(true);
  };

const opts = {
    height: '600',
    width: '900',
    playerVars: {
      autoplay: 1,
      controls: 1,
      disablekb: 1,
      modestbranding: 1,
    },
  };
  
  const onReady = (event) => {
    event.target.playVideo();
  };

  const onEnd = (event) => {
    setEnded(true);
    navigate('/Puzzle');
  };

  return (
    <div className={classes.body}>
    <Box className ={classes.heading}>
    Watch the video and you will be Redirected to Puzzle!
    <Typography>
       

    </Typography>
    </Box>
    
    <div className={classes.videoContainer}>
        
      <YouTube videoId="oxciElU7YWY" opts={opts} onReady={onReady} onEnd={onEnd} />
      {ended && <p>Redirecting to Puzzle page...</p>}
    </div>
    </div>
  );
}

export default YtVideo;



// import React, { useState } from 'react';
// import YouTube from 'react-youtube';
// import { useNavigate } from 'react-router-dom';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles({
//   videoContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     width: '100%',
//   },
// });

// function YtVideo() {
//   const navigate = useNavigate();
//   const [ended, setEnded] = useState(false);
//   const classes = useStyles();

//   const handleVideoEnd = (event) => {
//     setEnded(true);
//   };

//   const opts = {
//     height: '315',
//     width: '560',
//     playerVars: {
//       autoplay: 1,
//     },
//   };

//   const onReady = (event) => {
//     event.target.playVideo();
//   };

//   const onEnd = (event) => {
//     setEnded(true);
//     navigate('/Puzzle');
//   };

//   return (
//     <div className={classes.videoContainer}>
//       <YouTube videoId="oxciElU7YWY" opts={opts} onReady={onReady} onEnd={onEnd} />
//       {ended && <p>Redirecting to Puzzle page...</p>}
//     </div>
//   );
// }

// export default YtVideo;

