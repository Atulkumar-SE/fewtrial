import React from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  return (
    <div className="DivRF">
      <h1>Registration Form</h1>

      <form action="" className="ContainerRF">
        <div>
          <label htmlFor="">Fullname</label>
          <br />
          {/* the "autoComplete" is used to off the mode of filling option in the textbox */}
          <input type="text" autoComplete="off" 
          
           name="Fullname" id="Fullname" />
        </div>
        <div>
          <label htmlFor="">Phone</label>
          <br />
          <input type="text" autoComplete="off" 
          
           name="Phone" id="Phone" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <br />
          <input type="text" autoComplete="off" 
          
           name="Email" id="Email" />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <br />
          <input type="Password" autoComplete="off" 
          
           name="Password" id="Password" />
        </div>
        <div className="Social_btn"><br />
        <button type="submit" id="btn1">Google</button>
        <button type="submit" id="btn2">Facebook</button>
        </div>
        <br />
        <button type="submit" className="Sbmt_Button">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
