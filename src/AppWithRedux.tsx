import React, {useCallback} from 'react';
import './App.css';
import TodoList from "./TodoList";
import {AddItemForm} from "./AddItemForm";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {
    AddTodoListAC,
    changeTodoListFilterAC,
    changeTodoListTitleAC,
    RemoveTodoListAC,
} from "./state/todoLists-reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./state/tasks-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";


export type TaskType = {
    id: string;
    title: string;
    isDone: boolean;
}

export type FilterValuesType = "all" | "active" | "completed"   //ипизирование фильтра
export type TodoListType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

function AppWithRedux() {
    //BLL:
    /* const todoListId_1 = v1();
     const todoListId_2 = v1();*/


    let todolists = useSelector<AppRootStateType, TodoListType[]>(
        state => state.todolists)

    let tasks = useSelector<AppRootStateType, TasksStateType>(
        state => state.tasks)

    let dispatch = useDispatch()

    /* const [todoLists, dispatchTodolist] = useReducer(todoListsReducer, [
         {id: todoListId_1, title: 'What to learn', filter: "all"},
         {id: todoListId_2, title: 'What to buy', filter: "all"}
     ])

     const [tasks, dispatchToTasks] = useReducer(tasksReducer, {
         [todoListId_1]: [
             {id: v1(), title: "HTML", isDone: true},
             {id: v1(), title: "CSS", isDone: true},
             {id: v1(), title: "React", isDone: false}
         ],
         [todoListId_2]: [
             {id: v1(), title: "Milk", isDone: true},
             {id: v1(), title: "Bread", isDone: true}
         ],
     })*/


    const removeTask= useCallback((taskID: string, todoListId: string)=>{
        /*const updatedTasks = tasks[todoListId].filter(t => t.id !== taskID)
        setTasks({
            ...tasks,
            [todoListId]: updatedTasks
        })*/
        let action = removeTaskAC( taskID, todoListId)
        dispatch(action)
    },[dispatch])

    const addTask=useCallback((title: string, todoListId: string)=>{
        /*const newTask = {
            id: v1(),
            isDone: false,
            title: title //из парепетра тайтл
        }
        const updatedTasks = [newTask, ...tasks[todoListId]]
        setTasks({
            ...tasks,
            [todoListId]: updatedTasks
        })*/
        let action = addTaskAC(title, todoListId)
        dispatch(action)
    }, [dispatch])

    const changeTaskStatus= useCallback((taskID: string, newIsDoneValue: boolean, todoListId: string)=>{
        /*const updatedTasks = tasks[todoListId].map(t => t.id === taskID ? {...t, isDone: newIsDoneValue} : t)
        setTasks({
            ...tasks,
            [todoListId]: updatedTasks
        })*/
        let action = changeTaskStatusAC(taskID, newIsDoneValue, todoListId)
        dispatch(action)
    },[dispatch])

    const changeTaskTitle= useCallback((taskID: string, title: string, todoListId: string)=> {
        /*const updatedTasks = tasks[todoListId].map(t => t.id === taskID ? {...t, title} : t)
        setTasks({
            ...tasks,
            [todoListId]: updatedTasks
        })*/
        let action = changeTaskTitleAC(taskID, title, todoListId)
        dispatch(action)
    }, [dispatch])

    const changeTodoListTitle= useCallback((title: string, todoListID: string)=> {
        /*const updatedTodoLists = todoLists.map(tl => tl.id === todoListID ? {...tl, title} : tl)
        setTodoLists(updatedTodoLists)*/
        let action = changeTodoListTitleAC(title, todoListID)
        dispatch(action)
    }, [dispatch])

    const changeTodoListFilter= useCallback((newFilterValue: FilterValuesType, todoListId: string)=> {
        /*const updatedTodoList = todoLists.map(tl => tl.id === todoListId ? {...tl, filter: newFilterValue} : tl)
        setTodoLists(updatedTodoList)*/
        let action = changeTodoListFilterAC(newFilterValue, todoListId)
        dispatch(action)
    }, [dispatch])

    const removeTodoList= useCallback((todoListId: string)=> {
        /*const updatedTodoList = todoLists.filter(tl => tl.id !== todoListId)
        setTodoLists(updatedTodoList);
        delete tasks[todoListId] */  //удалил таски из массива, тк без этой функции они удаляются только из ui
        let action = RemoveTodoListAC(todoListId)
        dispatch(action)
    }, [dispatch])

    const addTodoList= useCallback((title: string)=> {
        /*const newTodoListID = v1()
        const newTodoList: TodoListType = {
            id: newTodoListID, title, filter: "all"
        }
        setTodoLists([...todoLists, newTodoList])
        setTasks({...tasks, [newTodoListID]: []})*/

        let action = AddTodoListAC(title)
        dispatch(action)
    }, [dispatch])

    const todoListComponents = todolists.map((tl) => {
        return (
            <Grid item={true} key={tl.id}>
                <Paper elevation={6} style={{padding: '20px'}}>
                    <TodoList
                        title={tl.title}
                        tasks={tasks[tl.id]}
                        removeTask={removeTask}
                        changeTodoListFilter={changeTodoListFilter}
                        addTask={addTask}
                        todoListFilter={tl.filter}
                        changeTaskStatus={changeTaskStatus}
                        Id={tl.id}
                        removeTodoList={removeTodoList}
                        changeTodoListTitle={changeTodoListTitle}
                        changeTaskTitle={changeTaskTitle}
                    />
                </Paper>
            </Grid>)
    })

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar style={{justifyContent: 'space-between'}}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        TodoLists
                    </Typography>
                    <Button variant={'outlined'} color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container={true} style={{padding: '20px 0px'}}>
                    <AddItemForm label={'Enter the todoList title'} addItem={addTodoList}/>
                </Grid>
                <Grid container={true} spacing={5}>
                    {todoListComponents}
                </Grid>
            </Container>
        </div>
    );
}

export default AppWithRedux;

