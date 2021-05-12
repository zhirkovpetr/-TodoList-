import React, {useCallback} from "react";
import {FilterValuesType, TaskType} from "./App";
import './App.css';
import {AddItemForm} from "./AddItemForm";
import EditableSpan from "./EditableSpan";
import {Button, IconButton} from '@material-ui/core';
import {Delete} from "@material-ui/icons";
import Task from "./state/Task";

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

const TodoList= React.memo((props: TodoListPropsType)=>{
    function getTasksForTodoList(): Array<TaskType> {
        switch (props.todoListFilter) {
            case "active":
                return props.tasks.filter(t => !t.isDone)
            case "completed":
                return props.tasks.filter(t => t.isDone )
            default:
                return props.tasks
        }
    }

    const removeTask = useCallback((id: string) => props.removeTask(id, props.Id),[props.removeTask, props.Id])
    const changeTaskStatus = useCallback((id: string, newIsDoneValue: boolean) => props.changeTaskStatus(id, newIsDoneValue, props.Id),[props.changeTaskStatus, props.Id])
    const changeTaskTitle =useCallback((id: string, newValue: string) => props.changeTaskTitle(id, newValue, props.Id),[ props.changeTaskTitle, props.Id])

    const tasks = getTasksForTodoList().map(t => {
        return (
            <Task
                key={t.id}
                task={t}
                removeTask={removeTask}
                changeTaskStatus={changeTaskStatus}
                changeTaskTitle={changeTaskTitle}
            />
        )
    })

    const addTask = useCallback((title: string) => {
        props.addTask(title, props.Id)
    }, [props.addTask, props.Id])

    const removeTodoList = useCallback( () => {
        props.removeTodoList(props.Id)
    }, [props.removeTodoList, props.Id])

    const changeTodoListTitle =useCallback((title: string) => props.changeTodoListTitle(title, props.Id),[props.changeTodoListTitle, props.Id])


    const setAllFilterValue = useCallback(() => props.changeTodoListFilter('all', props.Id), [props.changeTodoListFilter, props.Id])
    const setActiveFilterValue = useCallback(() => props.changeTodoListFilter('active', props.Id), [props.changeTodoListFilter, props.Id])
    const setCompletedFilterValue = useCallback(() => props.changeTodoListFilter('completed', props.Id), [props.changeTodoListFilter, props.Id])

    return (
        <div>
            <h3>
                <EditableSpan title={props.title} changeTitle={changeTodoListTitle}/>
                <IconButton onClick={removeTodoList}>
                    <Delete/>
                </IconButton>
            </h3>
            <AddItemForm label={'Enter your task'} addItem={addTask}/>
            <div style={{listStyle: 'none', padding: '0px'}}>
                {tasks}
            </div>
            <div style={{marginTop: '5px'}}>
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
})

export default TodoList;