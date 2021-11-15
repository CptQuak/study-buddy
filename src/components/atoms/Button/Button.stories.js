import { Button } from './Button';

const properties = {
  title: 'Components/Atoms/Button',
  component: Button,
};
export default properties;

const Template = (args) => <Button {...args}>Read more</Button>;

export const Default = Template.bind({});

export const Big = Template.bind({});
Big.args = {
  isBig: true,
};
