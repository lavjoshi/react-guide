import React from 'react';

const validate = (props)=>{
    
    let value = "too short";
    if(props.len > 5){
        
        value = "enough";
    }
    
    return(
       <h3>{value}</h3> 
       

    );
}

export default validate;