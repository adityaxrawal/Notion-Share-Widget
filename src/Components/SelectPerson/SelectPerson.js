import React, {useState} from 'react';
import './SelectPerson.css';
import JSONDATAPERSON from '../MockData/peopleMockData.json'
import Popover from '@mui/material/Popover';
import Dropdown from '../mUi/Dropdown';


function SelectPerson() {
  const [searchTerm, setSearchTerm] = useState("")
  const [Value, setValue] = useState("")
  const AddPersontoSearchBar=(val)=>{
    setValue(val.name)
    setAnchorEl(null)
  }
  const handleChange=(e)=>{
    setSearchTerm(e.target.value)
  }
  // =============================================================================================================================
  // Popover Menu Bar
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick3 = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  // ================================================================================================================================
  return (
    <div>
      <div className='selectPerson'>
        <input  
        className='selectSearchBar'
        type="text"
        value={Value}
        placeholder='Search for People and Email to Invite' 
        onClick={handleClick3}
        onChange={handleChange}/>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose3}
        anchorOrigin={{vertical: '500', horizontal: 'right'}}
        sx={{left:"-335px", top:"43px"}}>

        <h3>Select a person</h3>
        <div className='PeopleContainer'>
           {JSONDATAPERSON.filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase()) || val.email.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val;
            }
            else{
              return val;
            }
          }).map((val, key) => {
            return (
              <div className="peopleData" key={key}>
                <img src={val.img} alt="avatar" className='avatar' onClick={()=> {AddPersontoSearchBar(val)}}/>
                <div className="peopleDetails">
                  <header onClick={()=> AddPersontoSearchBar(val)}>{val.name}</header>
                  <aside onClick={()=> AddPersontoSearchBar(val)}>{val.email}</aside>
                </div>
                <div className='peopleDropdown'><Dropdown/></div>
              </div>
            );
          })}
        </div>
        This is the content of the popper.
      </Popover>
    </div>
  )
}

export default SelectPerson