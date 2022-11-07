import React from 'react';
// Files 
import './Widget.css';
import Body from '../Body/Body.js';
import Footer from '../Footer/Footer.js';
import Overlay from '../Overlay/Overlay.js';
// Ui Designs
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import PeopleList from '../PeopleList/PeopleList';


function Widget() {
  //=================================================================
  //Second Popper Component
  const [showSearch, setshowSearch] = React.useState(null)
  const handleClick2=(Event)=> {
    setshowSearch(showSearch ? null : Event.currentTarget);
    // setAnchorEl(null);
  }
  const open2 = Boolean(showSearch);
  const id2 = open2 ? 'simple-popper': undefined;
  const handleClose=()=>{
    setshowSearch(null)
  }

  //==================================================================
  //First Popper Component
  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  //==================================================================
  return (
    <div>
      {/* ============================================================================================================================ */}
      {/* First Popper Component */}
        <Button variant="text" id='button' onClick={handleClick}>Share</Button>
        <Popper id={id} open={open} anchorEl={anchorEl} >
              <Box className='box'>
                <section>
                  <div className='Header'>
                    <input type="button" className='searchBar' value="Add People and emails" onClick={handleClick2}/>
                    <Button variant="contained" className='inviteBtn'
                    style={{
                      display: "flex",
                      position: "relative",
                      fontSize: "small",
                      marginTop: "4px",
                    }}>
                      Invite
                    </Button>
                  </div>
                  <div className='scroller'></div>
                </section>
                <PeopleList></PeopleList>
                <Body></Body>
                <Footer></Footer>
              </Box>
        </Popper>
      {/* ============================================================================================================================= */}
      {/* Second Popover */}
        {
          showSearch &&
          <Popover id={id2} open={open2} onClose={handleClose} anchorOrigin={{
            vertical: 'bottom',
            horizontal: "center",
          }}
          sx={{left:"-260px", top:"10px"}}> 
              <Box className='box2'>
                <Overlay handleClose={handleClose}/>
              </Box>
          </Popover>
        }
      {/* =============================================================================================================================== */}
    </div>
  )
}

export default Widget;