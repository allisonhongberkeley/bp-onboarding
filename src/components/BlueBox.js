//jsx is react's version of html
import React from 'react'
import './BlueBox.css';

const BlueBox = (props) => {
    const renderTransactionType = () => {
        if (props.type == 'earn') {
            return <div className="green">earn</div>
        } else if (props.type == 'redeem') {
            return <div className="red">redeem</div>
        }
    }
    
    return (
        <div className="box">
            {props.name}
            {props.date}
            {renderTransactionType()} 
        </div>

    )
}

//to access this component from somewhere else
export default BlueBox; 