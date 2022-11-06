import React from 'react'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import './Footer.css';

function Footer() {
  return (
    <>
    <article className="footer">
      <div>
        <div className='footerPart1'><HelpOutlineIcon id='icons' /> Learn about sharing</div>
        
        <div className='footerPart2'><InsertLinkIcon id='icons'/> Copy link</div>
    </div>
  </article>
  </>
  )
}

export default Footer