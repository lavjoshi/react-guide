import React from 'react';

const charComp = (props) =>{
    
    const style = {
        backgroundColor : 'white',
        display:'inline-block',
        font:'inherit',
        border:'1px solid black',
        padding:'18px',
        cursor : 'pointer'
    
      };
  
    return (
        <div style={style} onClick={props.click}>
            {props.char}
        </div>
    );
}

export default charComp;