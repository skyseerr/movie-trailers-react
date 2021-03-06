import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";

import "./Popup.css";

const ControlledPopup = ({ error }) => {
    const [errorMessage, setErrorMessage] = useState();
    const [open, setOpen] = useState(false);  
    const closeModal = () => {
        setErrorMessage();
        setOpen(false);
    };
    
    useEffect(() => {
    if (error) {
        setErrorMessage(error);
        setOpen(true);
    }
  }, [error]);

  return (
    <div>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal" style={{"color" : "white", "border" : "2px solid red"}}>
          {/* <a href="javascript: void(0)" className="close" onClick={closeModal}>
            &times;
          </a> */}
            {errorMessage}
        </div>
      </Popup>
    </div>
  );
};

export default ControlledPopup;
