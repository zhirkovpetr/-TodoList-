import React from 'react';
import {Story, Meta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import Task, {TaskPropsType} from "../state/Task";


export default {
    title: 'Todolists/Task',
    component: Task
}as Meta ;

let changeTaskStatus = action('status change inside Task');
let removeTask = action('remove inside Task');
let changeTaskTitle = action('title change inside Task');

const Template: Story<TaskPropsType> = (args) => <Task {...args} />;

let arg = {
    changeTaskStatus: changeTaskStatus,
    removeTask: removeTask,
    changeTaskTitle: changeTaskTitle,
}

export const TaskDoneExample = Template.bind({});
TaskDoneExample.args = {
    ...arg,
    task: {id: '1', title: 'JS', isDone: true},
    todolistId: 'todolistId1'
};

export const TaskNotDoneExample = Template.bind({});
TaskNotDoneExample.args = {
    ...arg,
    task: {id: '1', title: 'JS', isDone: false},
    todolistId: 'todolistId1'
};

