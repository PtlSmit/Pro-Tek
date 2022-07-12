import React, {Component} from "react";
import {connect} from "react-redux";
import { createStore } from 'reduxtoolkit'




const store = createStore(reducer);
// Action
const CAKE_ORDERED = "CAKE_ORDERED";

const orderedcake = () => {
    return {
        type: CAKE_ORDERED,
        quantity: 1,
    };
};
// (previousState,action) => newState;
// Reducer
const inititalState = {
    numOfCakes = 10,
}
const reducer = (state = inititalState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                numOfCakes: state.numOfCakes - 1,
            }
            default:
                return state
    }
}
const store = createStore(reducer)
console.log('Initital State',store.getState());
const unscribe =  store.subscribe(() => console.log("Updated State", store.getState()));
store.dispatch(buyCake())
store.dispatch(buyCake())
unscribe()