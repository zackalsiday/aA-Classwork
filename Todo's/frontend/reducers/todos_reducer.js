import { RECEIVE_TODO, REMOVE_TODO } from "../actions/todo_actions";
import { RECEIVE_TODOS } from "../actions/todo_actions";


const initialState = {
    1: {
        id: 1,
        title: "wash car",
        body: "with soap",
        done: false
    },
    2: {
        id: 2,
        title: "wash dog",
        body: "with shampoo",
        done: true
    }
};



const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_TODOS:
         
            return  action.todos
        case RECEIVE_TODO: 
            nextState[action.todo.id] = action.todo
            return nextState 
        case REMOVE_TODO: 
            let now = nextState
            for (var i = 0; i < now.length; i++) {

                if (now[i] === action.todo) {

                    now.splice(i, 1);
                }
            
            }

            return now
            

        default: 
            return state;
    }
     
}

export default todosReducer