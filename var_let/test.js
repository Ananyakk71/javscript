//Numbers
var a = 10;

//Boolean
var b = false;

//string
var c = 'Code Malayalam';

//array
var d = ['code', 'malayalam'];

//object
var e = {
    name: 'code malayalam',
    age: 1,
    topic: ['javascript', 'react', 'scss', 'git', 'aws'],
    caption: 'keep calm and js'
};


/*var jsonE = `
    {
        "name": "code malayalam",
        "age": 1,
        "topic": ["javascript", "react", "scss", "git", "aws"],
        "caption": "keep calm and js"
    }
`;*/

var jsonE = JSON.stringify(e)
console.log(jsonE);

var obj = JSON.parse(jsonE);
console.log(obj);
console.log(obj.name);

var jsonD = JSON.stringify(d)
console.log(jsonD)

var jsonC = JSON.stringify(c)
console.log(jsonC);

var jsonB = JSON.stringify(b)
console.log(jsonB);

var jsonA = JSON.stringify(a)
console.log(jsonA);

import React from 'react'

const initialState = [
    {
        name: 'house',
        rooms: [
            {
                name: 'room1',
                text: 'Room1'
            }
        ]
    },
    {
        name: 'car',
        text: 'i20'
    }
];

function RoomName(props) {
    const{
        data
    }= props;
    return (
        <div>
            <div>Update Room Name</div>
            <input />
        </div>
    )
}

function CarName(props) {
    const {
        data
    } =props;
    return (
        <div>
            <div>Update Car Name</div>
            <input value={data.text}/>
        </div>
    )
}

export default function Test() {
    const [info, setInfo] =useState(initialState);

    return (
        <div>
            <RoomName data={info[0].rooms[0]}/>
            <CarName data={info[1]}/>
        </div>
    )
}








