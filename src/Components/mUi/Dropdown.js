import React from "react";
import '../mUi/Dropdown.css'

const Dropdown = () => {

  return (
    <div className="select_div">
      <select id="selectButton">
        <option value="access">Full access</option>
        <option value="edit" defaultValue>Can edit</option>
        <option value="view">Can view</option>
        <option value="noAccess">No access</option>
      </select>
    </div>
  )
};

export default Dropdown;