import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import Root from './components/root'
import configureStore from './store/store';
import { receiveTodos} from './actions/todo_actions'
import {receiveTodo} from './actions/todo_actions'
import {removeTodo} from './actions/todo_actions'
import { receiveSteps } from './actions/step_actions'
import { receiveStep } from './actions/step_actions'
import { removeStep } from './actions/step_actions'
import allTodos from './reducers/selectors'
document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore(); 
    
    window.store = store
    window.receiveTodos = receiveTodos 
    window.receiveTodo = receiveTodo
    window.removeTodo = removeTodo
    window.receiveSteps = receiveSteps
    window.receiveStep = receiveStep
    window.removeStep = removeStep 
    window.allTodos = allTodos
    ReactDOM.render(<Root store={store}/>, root)
})