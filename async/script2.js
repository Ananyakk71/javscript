console.log(number);

(function () {
    var button = document.getElementById("bye");
    button.style.background = 'red';
    button.onclick = () => {
        console.log(button.innerHTML)
    }
})();

let text = "Helloworld, welcome to the universe. ";
let result = text.includes("world")
console.log(result);

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback('scrpt');
    document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
    alert(`Cool, the script ${script.src} is loaded`);
    alert(_);
});

new Promise((resolve, reject) => {
    throw new Error("error");
  })
    .finally(() => alert("Promise ready")) 
    .catch(err => alert(err));

    function loadScript(src) {
        return new Promise(function(resolve, reject) {
          let script = document.createElement('script');
          script.src = src;
      
          script.onload = () => resolve(script);
          script.onerror = () => reject(new Error(`Script load error for ${src}`));
      
          document.head.append(script);
        });
      }

      function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

      delay(3000).then(() => alert('runs after 3 seconds'));

new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
}).then(function(result) {
    alert(result);
    return result * 2;
}).then(function(result) {
    alert(result);
    return result * 2;
}).then(function(result) {
    alert(result);
    return result * 2;
});

class Thenable {
    constructor(num) {
        this.num = num;
    }
    then(resolve, reject) {
        alert(resolve);
        setTimeout(() => resolve(this.num * 2), 1000);
    }
}

new Promise(resolve => resolve(1))
.then(result => {
    return new Thenable(result);
})
.then(alert);

new Promise((resolve, reject) => {
    resolve("ok");
}).then((result) => {
    throw new Error("Whoops!");
}).catch(alert);

new Promise((resolve, reject) => {
    throw new Error("Whoops!");
}).catch(function(error) {
    if (error instanceof URIError) {

    } else {
        alert("Can't handle such error");
        throw error;
    }
}).then(function() {

}).catch(error => {
    alert(`The unknown error has occurred: ${error}`);
});

Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)),
    new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 1000))
]).then(alert);


let names = ['iliakan', 'remy', 'jeresig'];

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
  .then(responses => {
    for(let response of responses) {
        alert(`${response.url}: ${response.status}`);
    }
    return responses;
  })
  .then(responses => Promise.all(responses.map(r => r.json())))
  .then(users => users.forEach(user => alert(user.name)));

Promise.all([
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000)
    }),
    2,
    3
]).then(alert);

Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ouch!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Error!")), 2000))
  ]).catch(error => {
    console.log(error.constructor.name);
    console.log(error.errors[0]); 
    console.log(error.errors[1]); 
  });

  let promise = Promise.resolve();
  promise.then(() => alert("promise done!"));
  alert("code finished")

class HttpError extends Error {
    constructor(response) {
        super(`4{response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

function loadJson(url) {
    return fetch(url)
      .then(response => {
        if (response.status == 200) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
    });
}

function demoGithubUser() {
    let name = prompt("Enter a name?", "iliakan");

    return loadJson(`https://api.github.com/users/${name}`)
    .then(user => {
        alert(`full name: ${user.name}.`);
        return user;
    })
    .catch(err => {
        if (err instanceof HttpError && err.response.status == 404) {
            alert("No such user, please reenter.");
            return demoGithubUser();
        } else {
            throw err;
        }
    });
}

demoGithubUser();

function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

let generator = generateSequence();

for(let value of generator) {
    alert(value);
}

let range = {
    from: 1,
    to: 5,

    async *[Symbol.asyncIterator]() {
        for(let value = this.from; value <= this.to; value++) {
            await new Promise(resolve => setTimeout(resolve, 1000));

            yield value;
        }
    }
};

(async () => {
    for await (let value of range) {
        alert(value);
    }
})();

let target = {};
let proxy = new Proxy(target, {});

proxy.test = 5;
alert(target.test);
alert(proxy.test);
for(let key in proxy) alert(key);

let numbers = [0,1,2];

numbers = new Proxy(numbers, {
    get(target, prop) {
        if (prop in target) {
            return target[prop];
        } else {
            return 0;
        }
    }
});

alert( numbers[1] );
alert( numbers[123] );


let dictionary = {
    'Hello': 'Hola',
    'Bye' : 'Adios'
};

dictionary = new Proxy(dictionary, {
    get(target, phrase) {
        if (phrase in target) {
            return target[phrase];
        } else {
            return phrase;
        }
    }
});

alert( dictionary['Hello'] );
alert( dictionary['welcome to Proxy']);

let numberss = [];

numberss = new Proxy(numberss, {
    set(target, prop, val) {
        if (typeof val == 'number') {
            target[prop] = val;
            return true;
        } else {
            return false;
        }
    }
});

numberss.push(1);
numberss.push(2);
alert("length is: " + numberss.length);

numberss.push("test");

alert("This line is never reached (error in the line above");

user = new Proxy(user, {
    ownKeys(target) {
        return Object.keys(target).filter(key => !key.startsWith('_'));
    }
});

for(let key in user) alert(key);

alert( Object.keys(user) );
alert( Object.values(user) );

let user = { };
user = new Proxy(user, {
    ownKeys(target) {
        return ['a','b','c'];
    },

    getOwnPropertyDescriptor(target, prop) {
        return {
            enumerable: true,
            configurable: true
        };
    }
});

alert( Object.keys(user) );

