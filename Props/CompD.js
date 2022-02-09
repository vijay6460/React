import React from 'react';
import Employee from './../Func/Employee';


function CompD(props) {
  return <div>
  <Employee/>
  <h3>Hello sample text is displayed</h3>
  <pre>{JSON.stringify(props)}</pre>
<h1>Employee name:{props.k.name}</h1>
<h2>Employee sal:{props.k.sal}</h2>
<h3>size:{props.some.size}</h3>
  </div>;
}
export default CompD;
