import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterValuesType, TaskType, TodoListType} from "./App";
import './App.css';

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    changeTodoListFilter: (newFilterValue: FilterValuesType, todoListId: string) => void
    removeTask: (taskID: string, todoListId: string) => void
    addTask: (title: string, todoListId: string) => void
    todoListFilter: FilterValuesType
    changeTaskStatus: (taskID: string, newIsDoneValue: boolean, todoListId: string) => void
    Id: string
    removeTodoList: (todoListId: string)=> void
}

function TodoList(props: TodoListPropsType) {
    const [title, setTitle] = useState<string>('')
    const [error, setError]= useState<string | null>(null)
    const tasks = props.tasks.map(t => {
        const removeTask = () => props.removeTask(t.id, props.Id)
        const changeStatus = (e:ChangeEvent<HTMLInputElement>) => props.changeTaskStatus(t.id, e.currentTarget.checked, props.Id)
        return (
            <li key={t.id} className={t.isDone ? 'is-done' : ''}>
                <input type="checkbox" checked={t.isDone}
                       onChange={changeStatus}/>
                <span>{t.title}</span>
                <button onClick={removeTask} className={'removeButton'}>X</button>
            </li>
        )
    })
    const setAllFilterValue = () => props.changeTodoListFilter('all', props.Id)
    const setActiveFilterValue = () => props.changeTodoListFilter('active', props.Id)
    const setCompletedFilterValue = () => props.changeTodoListFilter('completed', props.Id)
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setTitle(e.currentTarget.value)
    }
    const removeTodoList= () => {props.removeTodoList(props.Id)}
    const addTask = () => {
        const trimmedTitle= title.trim()
        if(trimmedTitle){
            props.addTask(trimmedTitle, props.Id)
        }else {setError('Title is required!')}
        setTitle('')
    }
    const onKeyPressAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTask()
        }
    }
    const errorMessage= error? <div className={'error-message'}> {error} </div> : null
    return (
        <div>
            <h3>{props.title} <button onClick={removeTodoList}>X</button></h3>
            <div>
                <input
                    value={title}
                    onChange={changeTitle}
                    onKeyPress={onKeyPressAddTask}
                    className={error? 'error' : ''}
                />
                <button onClick={addTask}>+</button>
                {errorMessage}

            </div>
            <ul>
                {tasks}
            </ul>
            <div>
                <button className={props.todoListFilter === 'all' ? 'active-filter' : ''}
                        onClick={setAllFilterValue}>All
                </button>
                <button className={props.todoListFilter === 'active' ? 'active-filter' : ''}
                        onClick={setActiveFilterValue}>Active
                </button>
                <button className={props.todoListFilter === 'completed' ? 'active-filter' : ''}
                        onClick={setCompletedFilterValue}>Completed
                </button>
            </div>
        </div>
    );
}

export default TodoList;