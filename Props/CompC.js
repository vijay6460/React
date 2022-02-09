import React from 'react';
import CompD from './CompD'

function CompC() {
    let a=100;
    let size=[1,2,3,4]
    let emp={name:'rahul',loc:'bang',sal:'74100'}
   
  return <div>
  <h5>value={a}</h5>
  <h2>Face the fear</h2>
 

  <CompD one={"Hello good evening"} two={a} some={size} k={emp}/>
  </div>;
}

export default CompC;
