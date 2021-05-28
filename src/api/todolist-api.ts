import axios from "axios";

const instance= axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': 'abbdd15d-25c5-489b-bf41-880fe8431dc9'
    }
})

type CommonResponseType<T>={
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: T
}

type TodoType={
    id: string
    addedDate: string
    order: number
    title: string
}


export const todoApi = {
    getTodos() {
        /*let promise = instance.get('todo-lists')
        return promise*/
        return instance.get<TodoType[]>('todo-lists')
    },
    createTodo(title: string) {
        return instance.post<CommonResponseType<{item: TodoType}>>('todo-lists', {title})
    },
    deleteTodo(todolistId: string) {
        return instance.delete<CommonResponseType<{}>>(`todo-lists/${todolistId}`)
    },
    updateTodoTitle(todolistId: string, title :string) {
        return instance.put<CommonResponseType<{}>>(`todo-lists/${todolistId}`, {title})
    },
}