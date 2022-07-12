import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux"; 
import { Provider } from 'react-redux';

const url = () => 
  fetch("https://stream-restaurant-menu-svc.herokuapp.com/category")

const category = () => fetch (`http://stream-restaurant-menu-svc.herokuapp.com/item?category`)

const GET_POSTS_BY_ITEM_REQUEST = "getpostsbyitemrequest";
const GET_POSTS_BY_ITEM_SUCCESS = "getpostsbyitemsuccess";
const GET_POSTS_BY_ITEM_FAIL = "getpostsbyitemfail";
 
const GET_POSTS_CATEGORY_REQUEST = "getpostscategoryrequest";
const GET_POSTS_CATEGORY_SUCCESS = "getpostscategorysuccess";
const GET_POSTS_CATEGORY_FAIL = "getpostscategoryfail";
// const InitialState = {items:[],category:[]}
const InitialState = {
  byItem: {
  isLoading: null,
  error: null,
  data: null
},
byCategory: {
  isLoading: null,
  error: null,
  data: null
}}
const store = createStore(reducer);
const reducer = (state = InitialState , action) => {
  switch (action.type) {

    case GET_POSTS_BY_ITEM_REQUEST:
        return {
            ...state,
            byItem: {
                isLoading: true,
                error: null,
                data: null
            }
        }
    case GET_POSTS_BY_ITEM_SUCCESS:
        return {
            ...state,
            byItem: {
                isLoading: false,
                error: false,
                data: action.payload
            }
        }
    case GET_POSTS_BY_ITEM_FAIL:
        return {
            ...state,
            byItem: {
                isLoading: false,
                error: action.payload,
                data: false
            }
        }

        case GET_POSTS_CATEGORY_REQUEST:
        return {
            ...state,
            byCategory: {
                isLoading: true,
                error: null,
                data: null
            }
        }
    case GET_POSTS_CATEGORY_SUCCESS:
        return {
            ...state,
            byCategory: {
                isLoading: false,
                error: false,
                data: action.payload
            }
        }
    case GET_POSTS_CATEGORY_FAIL:
        return {
            ...state,
            byCategory: {
                isLoading: false,
                error: action.payload,
                data: false
            }
        }

  
   default: return state;
}
}
/* const getPostByItem = async (dispatch, item) => {
  dispatch({ type: GET_POSTS_BY_ITEM_REQUEST });

  try {
      const response = await getPostsByItem(item);
      const res = await response.json();
      dispatch({ type: GET_POSTS_BY_ITEM_SUCCESS, payload: res });
  } catch (e) {
      dispatch({ type: GET_POSTS_BY_ITEM_FAIL, payload: e });
  }
}; */

export const getPostByItemFunc = dispatch => {
  return item => getPostByItem(dispatch, item);
}
const getPostByItem = async (dispatch, item) => {
  dispatch({ type: GET_POSTS_BY_ITEM_REQUEST });

  try {
      const response = await getPostByItem(item);
      const res = await response.json();
      dispatch({ type: GET_POSTS_BY_ITEM_SUCCESS, payload: res });
  } catch (e) {
      dispatch({ type: GET_POSTS_BY_ITEM_FAIL, payload: e });
  }
};

const getPostCategory = async dispatch => {
  dispatch({ type: GET_POSTS_CATEGORY_REQUEST });

  try {
      const response = await getPostCategory();
      const res = await response.json();
      dispatch({ type: GET_POSTS_CATEGORY_SUCCESS, payload: res });
  } catch (e) {
      dispatch({ type: GET_POSTS_CATEGORY_FAIL, payload: e });
  }
};

/* export const getPostByItemFunc = dispatch => {
  return item => getPostByItem(dispatch, item);
}
 */
export const getPostsCategoryFunc = dispatch => {
  return () => getPostCategory(dispatch);
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
