import React from 'react';

const Card = (props) => {
     const {title, name, age, gender } = props;
     
    return(
        <>
            <div className='card-main'>
                <h3>User Card {title}</h3>
                <label>Name: {name}</label><br/>
                <label>Age: {age}</label><br/>
                <label>Gender: {gender}</label>
                <button onClick={props.onClick}>save</button>
            </div>
        </>
    );
}
export default Card;