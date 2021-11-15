import UsersListItem from './UsersListItem';
const properties = {
  title: 'Components/Molecules/UsersListItem',
  component: UsersListItem,
};
export default properties;

const Template = (args) => <UsersListItem {...args} />;

export const GoodGrades = Template.bind({});
GoodGrades.args = {
  userData: {
    name: 'Adam Romański',
    attendance: '55%',
    average: '5.0',
  },
};
export const MedGrades = Template.bind({});
MedGrades.args = {
  userData: {
    name: 'Adam Romański',
    attendance: '55%',
    average: '3.5',
  },
};
export const BadGrades = Template.bind({});
BadGrades.args = {
  userData: {
    name: 'Adam Romański',
    attendance: '55%',
    average: '2.0',
  },
};
export const NoAvarage = Template.bind({});
NoAvarage.args = {
  userData: {
    name: 'Adam Romański',
    attendance: '55%',
    average: null,
  },
};
