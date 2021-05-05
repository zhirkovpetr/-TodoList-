import {FilterValuesType, TodoListType} from "../App";
import {v1} from "uuid";


export type removeTodoListAT = {
    type: 'REMOVE-TODOLIST'
    todoListId: string
}
export type addTodoListAT = {
    type: 'ADD-TODOLIST'
    title: string
    id: string
}
type changeTodoListTitleAT = {
    type: 'CHANGE-TITLE-TODOLIST'
    title: string
    todoListID: string
}
type changeTodoListFilterAT = {
    type: 'CHANGE-FILTER-TODOLIST'
    newFilterValue: FilterValuesType
    todoListId: string
}

const initialState: TodoListType[] = []

export type ActionsType = removeTodoListAT | addTodoListAT | changeTodoListTitleAT | changeTodoListFilterAT;

export const todoListsReducer = (state = initialState, action: ActionsType): TodoListType[] => {
    switch (action.type) {
        case "REMOVE-TODOLIST":
            return state.filter(tl => tl.id !== action.todoListId)
        case "ADD-TODOLIST":
            const newTodoList: TodoListType = {
                id: action.id, title: action.title, filter: "all"
            }
            return [...state, newTodoList]
        case "CHANGE-FILTER-TODOLIST":
            return state.map(tl => tl.id === action.todoListId ? {...tl, filter: action.newFilterValue} : tl)
        case "CHANGE-TITLE-TODOLIST":
            return state.map(tl => tl.id === action.todoListID ? {...tl, title: action.title} : tl)
        default:
            return state
    }
}

export const RemoveTodoListAC = (id: string): removeTodoListAT => {
    return {
        type: "REMOVE-TODOLIST",
        todoListId: id
    }
}

export const AddTodoListAC = (title: string): addTodoListAT => {
    return {
        type: "ADD-TODOLIST",
        title: title,
        id: v1()
    }
}

export const changeTodoListTitleAC = (title: string, id: string): changeTodoListTitleAT => {
    return {
        type: "CHANGE-TITLE-TODOLIST",
        title: title,
        todoListID: id
    }
}

export const changeTodoListFilterAC = (newFilterValue: FilterValuesType, id: string): changeTodoListFilterAT => {
    return {
        type: "CHANGE-FILTER-TODOLIST",
        newFilterValue: newFilterValue,
        todoListId: id
    }
}
