import {Dispatch} from "redux";
import {authAPI} from "../api/todolists-api";
import {setIsLoggedInAC} from "../features/Login/auth-reducer";
import {handleServerAppError, handleServerNetworkError} from "../utils/error-utils";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState= {
    status: 'idle' as RequestStatusType,
    error: null as string | null,
    isInitialized: false,
}

const slice= createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        setAppStatusAC (state, action: PayloadAction<{status: RequestStatusType}>) {state.status= action.payload.status},
        setAppErrorAC (state, action: PayloadAction<{error: string | null}>) {state.error= action.payload.error},
        setIsInitializedAC (state, action: PayloadAction<{isInitialized: boolean}>) {state.isInitialized= action.payload.isInitialized},
    }
})

export const appReducer= slice.reducer;

export const setAppErrorAC= slice.actions.setAppErrorAC
export const setAppStatusAC= slice.actions.setAppStatusAC
export const setIsInitializedAC= slice.actions.setIsInitializedAC

/*export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        case'APP/SET-IS-INITIALIZED':
            return {...state, isInitialized: action.isInitialized}
        default:
            return {...state}
    }
}*/


/*export type InitialStateType = {
    // происходит ли сейчас взаимодействие с сервером
    status: RequestStatusType
    // если ошибка какая-то глобальная произойдёт - мы запишем текст ошибки сюда
    error: string | null
    isInitialized: boolean
}*/

/*export const setAppErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)
export const setIsInitializedAC = (isInitialized: boolean) => ({type: 'APP/SET-IS-INITIALIZED', isInitialized} as const)*/

export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>
export type setIsInitializedActionType = ReturnType<typeof setIsInitializedAC>


export const initializeAppTC = () => (dispatch: Dispatch) => {
    authAPI.me().then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setIsLoggedInAC({value: true}));
        } else {
            handleServerAppError(res.data, dispatch)
        }
    })
        .catch((error) => {
            handleServerNetworkError(error.message, dispatch)
        })
        .finally(() => {
            dispatch(setIsInitializedAC({isInitialized: true}))
        })
}


/*type ActionsType =
    | SetAppErrorActionType
    | SetAppStatusActionType
    | setIsInitializedActionType*/
