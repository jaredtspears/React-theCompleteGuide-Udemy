import React from 'react';


const person = (props) => {
  return(
    <div>
        {/* the onClick is calling back from the property/or method that was made on app.js under this specific person... 
        then we just call props.click as a referrence to it.  */}
      <p onClick={props.click}>I am {props.name} and I am {props.age}!</p>
      {/* any things withing the <Person> right here </Person> if there is no children there will be an emply <p></p> not rendering any content*/}
      <p>{props.children}</p>
      {/* this is important we have working 2 way binding on the change and updating the value  (only on 1 of the persons at this time) */}
      <input type='text' onChange = {props.changed} value = {props.name}/>
    </div>

  ) 
};

export default person;