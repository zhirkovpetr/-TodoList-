import {TasksStateType} from "../App";
import {v1} from "uuid";
import {addTodoListAT, removeTodoListAT} from "./todoLists-reducer";

type removeTaskAT = {
    type: 'REMOVE-TASK'
    taskId: string
    todolistId: string

}
type AddTaskAT = {
    type: 'ADD-TASK'
    title: string
    todolistId: string
}

type ChangeTaskStatusAT = {
    type: 'CHANGE-TASK-STATUS'
    todolistId: string
    id: string
    isDone: boolean
}

type ChangeTaskTitleAT = {
    type: 'CHANGE-TASK-TITLE'
    todolistId: string
    title: string
    id: string
}

const initialState: TasksStateType = {}

export type ActionsType = removeTaskAT | AddTaskAT | ChangeTaskStatusAT |
    ChangeTaskTitleAT | addTodoListAT | removeTodoListAT

export const tasksReducer = (state = initialState, action: ActionsType): TasksStateType => {

    switch (action.type) {
        case "REMOVE-TASK":
            let copyState = {...state}
            copyState[action.todolistId] = copyState[action.todolistId].filter(t => t.id !== action.taskId)

            return copyState
        case "ADD-TASK": {
            const newTask = {
                id: v1(),
                isDone: false,
                title: action.title
            }
            const updatedTasks = [newTask, ...state[action.todolistId]]
            return {
                ...state,
                [action.todolistId]: updatedTasks
            }
        }
        case 'CHANGE-TASK-STATUS':
            const updatedTasksStatus = state[action.todolistId].map(t => t.id === action.id ? {
                ...t,
                isDone: action.isDone
            } : t)
            return {
                ...state,
                [action.todolistId]: updatedTasksStatus
            }
        case 'CHANGE-TASK-TITLE': {
            const updatedTasks = state[action.todolistId].map(t => t.id === action.id ? {...t, title: action.title} : t)
            return {
                ...state,
                [action.todolistId]: updatedTasks
            }
        }
        case 'ADD-TODOLIST': {
            return {...state, [action.id]: []}
        }
        case 'REMOVE-TODOLIST': {
            let copyState = {...state}
            delete copyState[action.todoListId]
            return copyState
        }
        default:
            return state
    }
}

export const removeTaskAC = (taskId: string, todolistId: string): removeTaskAT => {
    return {type: "REMOVE-TASK", taskId: taskId, todolistId: todolistId}
}

export const addTaskAC = (title: string, todolistId: string): AddTaskAT => {
    return {type: 'ADD-TASK', todolistId: todolistId, title: title}
}

export const changeTaskStatusAC = (id: string, isDone: boolean, todolistId: string): ChangeTaskStatusAT => {
    return {type: 'CHANGE-TASK-STATUS', todolistId: todolistId, id: id, isDone: isDone}
}

export const changeTaskTitleAC = (title: string, id: string, todolistId: string): ChangeTaskTitleAT => {
    return {type: 'CHANGE-TASK-TITLE', todolistId: todolistId, title: title, id: id}
}


