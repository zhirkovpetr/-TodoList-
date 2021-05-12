import React, {ChangeEvent} from "react";
import {Checkbox, IconButton} from "@material-ui/core";
import EditableSpan from "../EditableSpan";
import {Delete} from "@material-ui/icons";
import {TaskType} from "../App";


type TaskPropsType = {
    task: TaskType
    changeTaskStatus: (id: string, newIsDoneValue: boolean)=> void
    removeTask: (id: string)=> void
    changeTaskTitle: (id: string, newValue: string)=> void

}

const Task= React.memo(({
                            task,
                            changeTaskStatus,
                            changeTaskTitle,
                            removeTask
                        }: TaskPropsType)=>{
    console.log('Task')

    const onClickHandler = () => removeTask(task.id)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue= e.currentTarget.checked;
        changeTaskStatus(task.id, newIsDoneValue)
    }
    const onTitleChangeHandler =(newValue: string) => changeTaskTitle(task.id, newValue)

    return (
        <div key={task.id} className={task.isDone ? 'is-done' : ''}>
            <Checkbox color={'primary'}
                      checked={task.isDone}
                      onChange={onChangeHandler}/>
            <EditableSpan title={task.title} changeTitle={onTitleChangeHandler}/>
            <IconButton onClick={onClickHandler}>
                <Delete/>
            </IconButton>
            {/*<button onClick={removeTask} className={'removeButton'}>X</button>*/}

        </div>
    )
})

export default Task;