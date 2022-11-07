import React from 'react'
import PublicIcon from '@mui/icons-material/Public';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button'
import '../Body/Body.css';

function Body() {
  return (
    <div className='Body'>
        {/* ============================================================================================================================ */}
        {/* Share to Web Section */}
        <section className='shareWeb'>
            <PublicIcon id="icon"/>
            <div className='linkToggleDiv'>
                <div style={{
                    fontSize: "14 px",
                    lineHeight:"20px",
                    color:"rgb(55, 53, 47)",
                    whiteSpace: "nowrap",
                }}>
                    Share to web
                </div>
                <div style={{
                    fontSize: "12 px",
                    lineHeight:"16px",
                    color:"rgb(55, 53, 47,0.65)",
                    whiteSpace: "nowrap",
                    textOverflow:"ellipsis"
                }}>
                    Anyone with the link can view
                </div>
            </div>
            <FormControlLabel control={<Switch defaultChecked />} id="switch"/>
        </section>
        <section>
            <div className='linkSection'>
                <input type="text" className='permaLink' disabled placeholder='https://tame-fortnight-887.notion.site/Getting-Started-c39514e704054809aeb712dcef60bd89'/>
                <Button variant='text' className='copyLinkBtn'>Copy Web Link</Button>
            </div>
        </section>
        {/* ============================================================================================================================== */}
        {/*  Show link option to display link customization properties */}
        <section className='linkOptions'>
            <details close>
                <summary>
                    Show link options <KeyboardArrowDownIcon id='arrowDown'/>
                </summary>
                <div className='detailContent'>
                    <div id='accordian'>
                        <div id='innerDiv'>
                        Link expires 
                        </div>
                        <div id='Never'>
                            Never <KeyboardArrowDownIcon id='arrowDown'/>   
                        </div>
                        
                    </div>
                    <div id='accordian'>
                        <div id='innerDiv'>
                            Allow editing
                        </div>
                        <FormControlLabel control={<Switch defaultChecked />} id="switch1"/>
                    </div>
                    <div id='accordian'>
                        <div id='innerDiv'>
                            Allow comments
                        </div>
                        <FormControlLabel control={<Switch defaultChecked />} id="switch1"/>
                    </div>
                    <div id='accordian'>
                        <div id='innerDiv'>
                            Allow duplicate as template
                        </div>
                        <FormControlLabel control={<Switch defaultChecked />} id="switch1"/>
                    </div>
                    <div id='accordian'>
                        <div id='innerDiv'>
                            Search engine indexing
                        </div>
                        <FormControlLabel control={<Switch defaultChecked />} id="switch1"/>
                    </div>
                </div>
            </details>
            {/* ================================================================================================================================ */}
        </section>
    </div>
  )
}

export default Body