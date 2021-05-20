import React from 'react';
import {Story} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import EditableSpan, {EditableSpanPropsType} from "../EditableSpan";

export default {
    title: 'Todolists/EditableSpan',
    component: EditableSpan,
    argTypes: {
        changeTitle: {
            description: 'Value EditableSpan change'
        },
        title: {
            defaultTitle: 'HTML',
            description: 'Start title EditableSpan'
        }
    }
};

const Template: Story<EditableSpanPropsType> = (args) => <EditableSpan {...args} />;

export const EditableSpanExample = Template.bind({});
EditableSpanExample.args = {
    title: 'changeTitle',
    changeTitle: action('Value EditableSpan change')
};

