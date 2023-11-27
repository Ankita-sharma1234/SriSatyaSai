import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const PaymentPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/payment");
  };
  return (
    <div>
      <h2>
        Hello Student, Your
        Updated Successfully, please Wait until HOD verified! But, Firstly You
        Have to Pay Portal Charges and Enrollment Charges. Click on the Below
        Button for Payment!!!
        <p>Thank you</p>
      </h2>
      <Button onClick={handleClick}>Pay</Button>
    </div>
  );
};

export default PaymentPage;
