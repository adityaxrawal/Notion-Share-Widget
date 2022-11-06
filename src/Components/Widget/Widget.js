import * as React from 'react';
import './Widget.css';
import Body from '../Body/Body.js';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Button from '@mui/material/Button';

function Widget() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  return (
    <div>
        <Button variant="text" id='button' onClick={handleClick}>Share</Button>
        <Popper id={id} open={open} anchorEl={anchorEl}>
          <Box className='box'>
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
          </Box>
        </Popper>
        
    </div>
  )
}

export default Widget