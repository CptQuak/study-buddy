import FormField from './FormField';

const properties = {
  title: 'Components/Molecules/FormField',
  component: FormField,
};
export default properties;

const Template = (args) => (
  <FormField name="story" id="story" {...args}>
    Read more
  </FormField>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Login',
};
export const LongLabel = Template.bind({});
LongLabel.args = {
  label: 'Lorem Lorem Lorem Lorem Lorem',
};
