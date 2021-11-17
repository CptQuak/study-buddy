import SearchBar from './SearchBar';
const properties = {
  title: 'Components/Organisms/SearchBar',
  component: SearchBar,
};
export default properties;

const Template = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {};
