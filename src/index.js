import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import CommentReducer from './CommentReducer'
import { Provider } from 'react-redux';


const store = createStore(CommentReducer);//สร้างที่เก็บข้อมูล

ReactDOM.render(
    <Provider store={store}>
<App />
</Provider>,document.getElementById('root'));