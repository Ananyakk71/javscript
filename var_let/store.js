/*import { createStore } from 'redux';

const initialState = {
    value: 0
};

function appReducer(prevState = initialState, action) {
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

import React, {useCallback, useState} from 'react'
import produce from 'immer';

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
            const {
                data,
                onChange
            } = props;
            return (
                <div>
                    <div>Update Room Name</div>
                    <input value={data.text}onChange={onChange}/>
                </div>
            )
        }

        function CarName(props) {
            const {
                data,
                onChange
            } = props;
            return (
                <div>
                    <div>Update Car Name</div>
                    <input value={data.text}onChange={onChange}/>
                </div>
            )
        }

        export default function Test() {
            const [info, setInfo] = useState(initialState);

            const onRoomChange = (evt) => {

                setInfo((state) => {
                    var newState = [
                        {
                            ...state[0],
                            rooms: [
                                {
                                    ...state[0].rooms[0],
                                    text: evt.target.value
                                }
                            ]
                        },
                        state[1]
                    ];
                    //const newState = JSON.parse(JSON.stringify(state));
                    //newState[1].rooms[0].text = evt.target.value;
                    return newState;
                });
            }

            const onCarChange = (evt) => {
                setInfo((state) => {
                    const newState = [
                        state[0],
                        {
                            ...state[1],
                            text: evt.target.value
                        }
                    ];
                    //const newState = JSON.parse(JSON.stringify(state));
                    //newState[1].text = evt.target.value;
                    return newState;
                });
            }

            return (
                <div>
                    <RoomName data={info[0].rooms[0]}onChange={onRoomChange}/>
                    <CarName data={info[1]}onChange={onCarChange}/>
                </div>
            )
        }

      

