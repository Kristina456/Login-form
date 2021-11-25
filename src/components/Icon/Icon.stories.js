import React from 'react';
import Icon from './Icon';
import img1 from '../../img/img1.png';

export default {
  title: 'Project/Icon',
  component: Icon,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'quaternary'],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <Icon {...args}></Icon>;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
};

export const Quaternary = Template.bind({});
Quaternary.args = {
  variant: 'quaternary',
};

export const Other = Template.bind({});
Other.args = {
  ...Other.args,
  // children
};
