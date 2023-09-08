import React from 'react';
const Square = (prop) => {
    return (
        <div className="square" style={{
            border: "2px solid white",
            paddingLeft: "20px",
            paddingRight: "20px",
            height: "100px",
            width: "50px",
        }} onClick={prop.onClick}>
            <h1 style={
                {
                    color: "white",
                }
            }>{prop.value}</h1>
        </div>
    )
}
export default Square;