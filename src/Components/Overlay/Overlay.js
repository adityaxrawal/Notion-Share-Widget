import React from "react";
import Dropdown from "../mUi/Dropdown.js";
import "../Overlay/Overlay.css";
import HelpOutline from "@mui/icons-material/HelpOutline.js";
import Button from "@mui/material/Button";
import SelectPerson from "../SelectPerson/SelectPerson.js";


function Overlay({handleClose}) {

 return (
    <div>
      <section className="innerHeader">
        {/* ========================================================================================================================== */}
        {/* Header with Search Bar */}
        <div className="innerSearchBar">
          <SelectPerson />
          <Dropdown />
        </div>
        {/* =========================================================================================================================== */}
        {/* Body TexT Area */}
        <textarea className="innerBody" placeholder="Your shared a page Getting Started with you"></textarea>
        {/* =========================================================================================================================== */}
        {/* Footer */}
        <article className="footer2">
          <div>
            <div className="footerPart3">
              <HelpOutline  /> Learn about sharing
            </div>
            <Button variant="contained" className="footerPart4" onClick={handleClose}>Invite</Button>
           </div>
        </article>
      </section>
    </div>
  );
}

export default Overlay;
