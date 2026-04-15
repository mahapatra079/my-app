// Creating toDo Task - ADD Task, DELETE Task, UPDATE Task, COMPLETE Task

import { createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';

const ADD_TASK = "task/add"; // Action Type  or describing an event name 
const DELETE_TASK = "task/delete";

// Define the initial state of the application
const initialState = { 
    task : [] 
}

// Define a reducer function that takes the current state and an action as arguments and returns a new state based on the action type
export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state, // creates a copy of the state
                task: [...state.task, action.payload] // creates a new array
            };
        case DELETE_TASK:
            const updatedTasks = state.task.filter((curTask, index) => {
                return index !== action.payload; // returns all tasks except the one to be deleted
            });
            return {
                ...state, // creates a copy of the state
                task: updatedTasks // creates a new array with the updated tasks
            }
        default:
            return state
    }
};


// Create a Redux store using the reducer(taskReducer)

const store = createStore(taskReducer,composeWithDevTools ());
export default store;

//getState =  lets you read the current state of the application. 
console.log("Initial State:", store.getState()) 

// Dispatching actions to the store
// store.dispatch({type: ADD_TASK, payload: "Iron Man"})
// console.log("Updated State:", store.getState()) // Get the state after adding Task 1

// store.dispatch({type: ADD_TASK, payload: "Captain America"})
// console.log("Updated State:", store.getState())

// store.dispatch({ type: DELETE_TASK, payload: 0 })
// console.log("Deleted Task State:", store.getState())


// Create action Creator functions for better code readability and maintainability
export const addTask = (data) => {
    return {type: ADD_TASK, payload: data}
}
export const deleteTask = (id) => {
    return {type: DELETE_TASK, payload: id}
}

// Using Action Creator function to dispatch action
store.dispatch(addTask("Iron Man"))  
console.log("Updated State:", store.getState())

store.dispatch(addTask("Captain America"))  
console.log("Updated State:", store.getState())

store.dispatch(addTask("Thor"))  
console.log("Updated State:", store.getState())