import React from 'react';

const userinput = (props)=>{
    return (
        <div style={props.style}>
        <input type="text" onChange={props.changed} value={props.name}></input>

        </div>
    );
};

export default userinput;