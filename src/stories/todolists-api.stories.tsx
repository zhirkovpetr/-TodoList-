import React, {useEffect, useState} from 'react'
import {todoApi} from "../api/todolist-api";

export default {
    title: 'API'
}

export const GetTodolists = () => { //должны появиться []
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todoApi.getTodos().then((res) => {
            setState(res.data);
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    let title= "newTodolist"
    useEffect(() => {
        todoApi.createTodo(title).then((res) => {
            setState(res.data.data.item);
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    let todolistId= '' // айди тудулиста
    useEffect(() => {
        todoApi.deleteTodo(todolistId).then((res) => {
            setState(res.data);
        })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = ''
    let title= 'REACT>>>>>>>>>'
    useEffect(() => {
        todoApi.updateTodoTitle(todolistId, title).then((res) => {
            setState(res.data)
        })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
