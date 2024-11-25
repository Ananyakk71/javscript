 /*import { addArray } from './script.js';
 const value = addArray([1,2,3]);
 console.log(value);*/

 import { test1 } from "./lib.js";
 const name = "My array Library";

 const options = {
    version: '1.1',
    author: 'Code malayalam'
 }

 function addAll(arr = []) {
    log('addAll');
    return arr.reduce((total, item) => total + item, 0)
 }

 function findMax(arr = []) {
    log('findMax');
    return Math.max(...arr);
 }

 function log(val) {
    console.log('INSIDE', val);
 }

 export default () => {
    console.log('hello');
 }

 export {
    name as LibraryName,
    options,
    addAll,
    findMax,
    test1
 }

