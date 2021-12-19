import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Warper from './Warper';
import Popup from "reactjs-popup";

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
        <div className="modal">
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
