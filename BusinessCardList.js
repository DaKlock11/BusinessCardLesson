import React from 'react';
import BusinessCard from './BusinessCard';
import './App.css';

//This is the loop for each business card

const BusinessCardList = props => {
    const { list } = props;

    // list is the same as props.list

    return (
        <div className="card-style">
            {list.map( (businessCardData) => {
                return (
                    <BusinessCard data={businessCardData} />
                );
            } )}
            
        </div>
    )
    
};

export default BusinessCardList;
