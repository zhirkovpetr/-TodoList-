import {FilterValuesType, TodoListType} from "../App";
import {v1} from "uuid";

type removeTodoListAT = {
    type: 'REMOVE-TODOLIST'
    todoListId: string
}
type addTodoListAT = {
    type: 'ADD-TODOLIST'
    title: string
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


export type ActionsType = removeTodoListAT | addTodoListAT | changeTodoListTitleAT | changeTodoListFilterAT;

export const todoListsReducer = (todoLists: Array<TodoListType>, action: ActionsType): Array<TodoListType> => {
    switch (action.type) {
        case "REMOVE-TODOLIST":
            return todoLists.filter(tl => tl.id !== action.todoListId)
        case "ADD-TODOLIST":
            const newTodoListID = v1()
            const newTodoList: TodoListType = {
                id: newTodoListID, title: action.title, filter: "all"
            }
            return [...todoLists, newTodoList]
        case "CHANGE-FILTER-TODOLIST":
            return todoLists.map(tl => tl.id === action.todoListId ? {...tl, filter: action.newFilterValue} : tl)
        case "CHANGE-TITLE-TODOLIST":
            return todoLists.map(tl => tl.id === action.todoListID ? {...tl, title: action.title} : tl)
        default:
            return todoLists
    }
}

export const RemoveTodoListAC=(id: string): removeTodoListAT=>{
    return  {
        type: "REMOVE-TODOLIST",
        todoListId: id
    }
}

export const AddTodoListAC=(title: string): addTodoListAT=>{
    return  {
        type: "ADD-TODOLIST",
        title: title
    }
}

export const changeTodoListTitleAC=(title: string, id: string): changeTodoListTitleAT=>{
    return {
        type: "CHANGE-TITLE-TODOLIST",
        title: title,
        todoListID: id
    }
}

export const changeTodoListFilterAC=(newFilterValue: FilterValuesType, id: string): changeTodoListFilterAT=>{
    return {
        type: "CHANGE-FILTER-TODOLIST",
        newFilterValue: newFilterValue,
        todoListId: id
    }
}
