const get = require('.api.js');

const BASE_URL = 'https://code-malayalam.github.io/school-test-api/';

function getTotalStudents(clsName, success, failure) {
    get(`${BASE_URL}/class/${clsName}.json`, (data) => {
        console.log(data);
    }, () => {})
}

getTotalStudents('10c', (data) => {

}, (err) => {

})

/*js engine- js engine not a machine

js engine- parsing->compilation->execution

JIT Compilation
interpretter - 
*/


