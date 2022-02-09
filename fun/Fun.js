import React from 'react'
class Fun extends React.Component {
    constructor(props) {// 1st it will go and execute
        super(props);
        console.log('constructor')
    
    }
    render() {// 2nd method will go and execute
        return <div>
            <h1>Hello sample text to be displayed</h1>


        </div>
    }
}
export default Fun;