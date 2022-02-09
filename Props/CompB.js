import React from 'react';

function CompB(props) {
  return <div>
  <p>Component B</p>
  <pre>{JSON.stringify(props)}</pre>
  <CompB one={"Hello Good morning"}></CompB>
  </div>;
}

export default CompB;
