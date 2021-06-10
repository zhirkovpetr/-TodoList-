export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

//если статус loading- крутилка показывается, а если все остальные, то крутилка прячется

const initialState = {
    status: 'loading' as RequestStatusType,
    error: null as string | null
}


export type setStatusActionType= ReturnType<typeof setAppStatusAC>
export type setErrorActionType= ReturnType<typeof setAppErrorAC>

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}

type ActionsType = setStatusActionType | setErrorActionType

export const setAppStatusAC = (status: RequestStatusType)=> ({type: 'APP/SET-STATUS', status} as const)
export const setAppErrorAC = (error: string | null)=> ({type: 'APP/SET-ERROR', error} as const)