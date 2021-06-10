import {setAppErrorAC, setAppStatusAC, setErrorActionType, setStatusActionType} from "../app/app-reducer";
import {Dispatch} from "redux";
import {ResponseType} from '../api/todolists-api';

export const handleServerNetworkError= (dispatch: Dispatch<ServerErrorActionsType>, message: string)=> {
    dispatch(setAppErrorAC(message))
    dispatch(setAppStatusAC('failed'))
}

export const handleServerAppError=<T>(dispatch: Dispatch<ServerErrorActionsType>, data: ResponseType<T>)=>{
        if (data.messages.length) {
            dispatch(setAppErrorAC(data.messages[0]))
        } else {
            dispatch(setAppErrorAC('ERROR'))
        }
        dispatch(setAppStatusAC('failed'))
    }




type ServerErrorActionsType= setStatusActionType | setErrorActionType