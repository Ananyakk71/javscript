//integer
var a = 10;

//boolean
var b = false;

//string
var c = 'Code Malayalam';

//array
var d = ['Code', 'Malayalam'];

//object
var e = {
    name: 'Code Malayalam',
    age: 1,
    topic: ['js', 'react', 'scss','git', 'aws'],
    caption: 'Keep calm an js'
};

var jsonE = JSON.stringify(e);
 var obj = JSON.parse(jsonE);
 console.log(obj.name);

var jsonE = `
    {
        "name": "Code Malayalam",
        "age": 1,
        "topic": ["js", "react", "scss","git", "aws"],
        "caption": "Keep calm an js"
    }
`;