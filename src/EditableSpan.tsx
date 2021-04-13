import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import './App.css';
import {TextField} from "@material-ui/core";


type EditableSpanPropsType = {
    title: string
    changeTitle: (title: string) => void
}

function EditableSpan(props: EditableSpanPropsType) {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const onEditMode = () => {
        setError(false)
        setTitle(props.title)
        setEditMode(true)
    }

    const offEditMode = () => {
        const trimmedTitle = title.trim()
        setEditMode(false)
        if (trimmedTitle) {
            props.changeTitle(title)
        }
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        if (!e.currentTarget.value.trim()) {
            setError(true)
        }
    }

    return (
        editMode ? <TextField value={title}
                              onChange={changeTitle}
                              autoFocus
                              onBlur={offEditMode}
                              color={'primary'}
                              variant={'standard'}
            /> : <span onDoubleClick={onEditMode}> {props.title} </span>
    )
}

export default EditableSpan;