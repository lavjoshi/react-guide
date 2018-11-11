import React from 'react';
import '../Person/Person.css';

const useroutput = (props)=>{

    return (
        <div className="Person">
            <p>
              {props.name}    this is para 1
            </p>
            <p>
                this is para 2
            </p>
        </div>
    );
}

export default useroutput;
