import Button from '@mui/material/Button'
import React from 'react'
import './Header.css'
import './Overlay.js'
import Overlay from './Overlay.js'

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleClick = (event) => {
    // alert("This is a Search Bar")
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'overlay' : undefined;
  return (
    <>
    <div className='Header'>
      <input type="search" placeholder='  Add emails or people' role="button" className='searchBar' onClick={handleClick}/>
      <Button variant="contained" className='inviteBtn'>Invite</Button>
    </div>
    <Overlay id={id} open={open} anchorEl={anchorEl}/>
    <div className='scroller'>
    </div>
    </>
  )
}

export default Header