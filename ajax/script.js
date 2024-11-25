/*function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("demo").innerHTML = 
        this.responseText;
    }
    xhttp.open("GET", "ajax_info.txt");
    xhttp.send();
}

console.log('Script1');

export function addArray(arr) {
    return arr.reduce((total, item) => total + item, 0);
}


import { addAll, 
    findMax,
    LibraryName as lname
} from './script2.js';

//const val = addAll([1,2,3]);
//const max = findMax([22,12,67,4]);
console.log(lname);

import mysillyname, {
    addAll,
    findMax
} from './script2.js';

const max = mysillyname([22,16,67,41])
console.log(max);*/

import * as libObj from './script2.js';
console.log(libObj);







