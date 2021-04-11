import React from 'react';

import './SignIn.css';

const SignIn = () =>{
    return (
        <div id="top_div">
            <ul className='Sign_In'>
                <li><input type='email' placeholder='email' title='email'></input></li>
                <li><input type='password' placeholder='password'></input> </li>
                <li><button className='btn'>Submit</button></li>
            </ul>
        </div>
    )
}


export default SignIn;

