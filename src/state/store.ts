import {tasksReducer} from './tasks-reducer';
import {combineReducers, createStore} from 'redux';
import {todoListsReducer} from "./todoLists-reducer";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todoListsReducer
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>  //тип стейта


// @ts-ignore
window.store = store;
