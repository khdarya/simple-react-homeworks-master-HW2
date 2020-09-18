import React from 'react';
import {homeWorkReducer, peopleType} from "../homeWorkReducer";

let initialState: any[];

beforeEach(() => {
    initialState = [
        {_id: 0, name: "Кот", age: 3},
        {_id: 1, name: "Александр", age: 66},
        {_id: 2, name: "Коля", age: 16},
        {_id: 3, name: "Виктор", age: 44},
        {_id: 4, name: "Дмитрий", age: 40},
        {_id: 5, name: "Ирина", age: 55},
    ]
});

test("sort name up", () => {
    const newState = homeWorkReducer(initialState, {type: 'SORT', payload: "up"});

    expect(newState).toBeDefined();
    expect(newState.length).toBe(6);

    const result: Array<peopleType> = [
        {_id: 1, name: "Александр", age: 66},
        {_id: 3, name: "Виктор", age: 44},
        {_id: 4, name: "Дмитрий", age: 40},
        {_id: 5, name: "Ирина", age: 55},
        {_id: 2, name: "Коля", age: 16},
        {_id: 0, name: "Кот", age: 3}
    ];
    expect(newState).toEqual(result)

});
test("sort name down", () => {
    const newState = homeWorkReducer(initialState, {type: 'SORT', payload: "down"});

    expect(newState.length).toBe(6);

    const result: Array<peopleType> = [
        {_id: 0, name: "Кот", age: 3},
        {_id: 2, name: "Коля", age: 16},
        {_id: 5, name: "Ирина", age: 55},
        {_id: 4, name: "Дмитрий", age: 40},
        {_id: 3, name: "Виктор", age: 44},
        {_id: 1, name: "Александр", age: 66}
    ];
    expect(newState).toEqual(result)

});
test("check age 18", () => {
    const newState = homeWorkReducer(initialState, {type: 'CHECK', payload: 18});

    expect(newState.length).toBe(4);

    const result: Array<peopleType> = [

        {_id: 1, name: "Александр", age: 66},
        {_id: 3, name: "Виктор", age: 44},
        {_id: 4, name: "Дмитрий", age: 40},
        {_id: 5, name: "Ирина", age: 55}
    ];
    expect(newState).toEqual(result)

});
