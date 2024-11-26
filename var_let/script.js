/*function test() {
   let a = 20;
   if(true) {
    //let a = 100;
    console.log(a);
    
   }

   console.log(a)

}

test();

function test() {
    const a = [];
    a.push(12,13)
    console.log(a)
}
test();
*/

/*function submit() {
    const items = document.getElementsByClassName('data');
    const data = {};
    for (let item of items) {
        data[item.name] = item.value;
    }
    console.log(data);
}

function textOnChange(arg) {
    const label = document.getElementById('validation-label');
    const error = validate(arg.value);
    if (error) {
        label.innerText = error;
    } else {
        label.innerText = '';
    }
}

function validate(value) {
    const regex = /^([012]?\d|3[01])-([0]?\d|1[012])-\d{4}*$/i;
    const result = regex.test(value);
    if(result) {
        return '';
    } else {
        return 'invalid string';
    }
}

'12-10-04'.replace(/\d{2}$/,'20$1')*/



const val1 = 5;
const val2 = 5;
console.log("integer",val1 === val2);

const val3 = "code malayalam";
const val4 = "code malayalam";
console.log("string", val3 === val4);

const val5 = ["code", "malayalam"];
const val6 = ["code", "malayalam"];
console.log("array", val5 === val6);

const val7 = { name: "code malayalam" };
const val8 = { name: "code malayalam" };
console.log("Object", val7 === val8);

var a = {
    name: 'Code Malayalam'
};

var b = a;

b.name = 'Code Malayalam';

console.log('a=', a);
console.log('b=', b);

function junk(obj) {
   const ret = {
    ...obj,
    test: "Test"
   };
   return ret;
}

const myObj = {
    name: 'Code Malayalam'
};

var ret = junk(myObj);
console.log(myObj);
console.log(ret);
console.log(ret === myObj)

import { createStore } from 'redux';

const initialState = {
    value: 0
};

/*function appReducer(prevState = initialState, action) {
    switch (action.type) {
        case 'increment':
            return {
                ...prevState,
                value: prevState.value + 1
            };
        case 'decrement':
            return {
                ...prevState,
                value: prevState.value - 1
            };
        default:
            return prevState;
    }
}

const store = createStore(appReducer);

export default store;*/

        

