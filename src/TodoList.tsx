import React, {ChangeEvent} from "react";
import {FilterValuesType, TaskType} from "./App";
import './App.css';
import {AddItemForm} from "./AddItemForm";
import EditableSpan from "./EditableSpan";
import {Button, Checkbox, IconButton} from '@material-ui/core';
import {Delete} from "@material-ui/icons";

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    changeTodoListFilter: (newFilterValue: FilterValuesType, todoListId: string) => void
    removeTask: (taskID: string, todoListId: string) => void
    addTask: (title: string, todoListId: string) => void
    todoListFilter: FilterValuesType
    changeTaskStatus: (taskID: string, newIsDoneValue: boolean, todoListId: string) => void
    Id: string
    changeTaskTitle: (taskID: string, title: string, todoListId: string) => void
    removeTodoList: (todoListId: string) => void
    changeTodoListTitle: (taskID: string, todoListId: string) => void
}

function TodoList(props: TodoListPropsType) {

    const tasks = props.tasks.map(t => {
        const removeTask = () => props.removeTask(t.id, props.Id)
        const changeStatus = (e: ChangeEvent<HTMLInputElement>) => props.changeTaskStatus(t.id, e.currentTarget.checked, props.Id)
        const changeTaskTitle = (title: string) => props.changeTaskTitle(t.id, title, props.Id)
        return (
            <li key={t.id} className={t.isDone ? 'is-done' : ''}>

                <Checkbox color={'primary'}
                          checked={t.isDone}
                          onChange={changeStatus}/>
                <EditableSpan title={t.title} changeTitle={changeTaskTitle}/>
                <IconButton onClick={removeTask}>
                    <Delete/>
                </IconButton>
                {/*<button onClick={removeTask} className={'removeButton'}>X</button>*/}

            </li>
        )
    })

    const setAllFilterValue = () => props.changeTodoListFilter('all', props.Id)
    const setActiveFilterValue = () => props.changeTodoListFilter('active', props.Id)
    const setCompletedFilterValue = () => props.changeTodoListFilter('completed', props.Id)
    const addTask = (title: string) => {
        props.addTask(title, props.Id)
    }
    const removeTodoList = () => {
        props.removeTodoList(props.Id)
    }
    const changeTodoListTitle = (title: string) => props.changeTodoListTitle(title, props.Id)


    return (
        <div>
            <h3>
                <EditableSpan title={props.title} changeTitle={changeTodoListTitle}/>
                <IconButton onClick={removeTodoList}>
                    <Delete/>
                </IconButton>
                {/*<button onClick={removeTodoList}>X</button>*/}
            </h3>
            <AddItemForm label={'Enter your task'} addItem={addTask}/>
            <ul style={{listStyle: 'none', padding: '0px'}}>
                {tasks}
            </ul>
            <div>
                <Button style={{marginRight: '5px'}}
                        size={'small'} color={'primary'}
                        variant={props.todoListFilter === 'all' ? 'outlined' : 'contained'}
                        onClick={setAllFilterValue}>All
                </Button>
                <Button style={{marginRight: '5px'}}
                        size={'small'} color={'primary'}
                        variant={props.todoListFilter === 'active' ? 'outlined' : 'contained'}
                        onClick={setActiveFilterValue}>Active
                </Button>
                <Button size={'small'} color={'primary'}
                        variant={props.todoListFilter === 'completed' ? 'outlined' : 'contained'}
                        onClick={setCompletedFilterValue}>Completed
                </Button>
            </div>
        </div>
    );
}

export default TodoList;