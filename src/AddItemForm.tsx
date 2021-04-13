import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {AddBox} from "@material-ui/icons";
import {IconButton, TextField} from "@material-ui/core";

type AddItemFormPropsType = {
    addItem: (title: string) => void // родительский callback
    label: string
}

export function AddItemForm(props: AddItemFormPropsType) {
    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<string | null>(null)
   /* const errorMessage = error ? <div className={'error-message'}> {error} </div> : null*/
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setTitle(e.currentTarget.value)
    }
    const onKeyPressAddItem = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addItem()
        }
    }

    const addItem = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.addItem(trimmedTitle)
        } else {
            setError('Title is required!')
        }
        setTitle('')
    }

    return (
        <div>
            <TextField
                variant={'outlined'}
                       value={title}
                       onChange={changeTitle}
                       onKeyPress={onKeyPressAddItem}
                       label={props.label}
                       error={!!error}
                       helperText={error}/>
            <IconButton onClick={addItem} color={'primary'}>
                <AddBox/>
            </IconButton>
            {/*{errorMessage}*/}
        </div>

    )
}