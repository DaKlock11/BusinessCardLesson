import React from 'react';

//This is the code for each loop
const BusinessCard = props => {
  return (
    <div className="text-style">
        I am a BusinessCard component! <br /> <br />
        My full name is: {props.data.firstName} {props.data.lastName} 
        {' '} <br /> 
        My occupation is: {props.data.occupation}
        {' '} <br />
        My address is: {props.data.address}
        {' '} <br />
        My phone number is: {props.data.phone}
        <br /> 

    </div>
  );
};

export default BusinessCard;
