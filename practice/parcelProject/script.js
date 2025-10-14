import React from 'react';
import {createRoot} from 'react-dom/client'
import {user} from './data.js'
const h2=<h2>Create React Element using createReact Element function</h2>
const reactobj=React
console.log(reactobj);
console.log(user.userName);
console.log("hello Programmer");
const root=createRoot(document.querySelector('#root'))
root.render(h2)