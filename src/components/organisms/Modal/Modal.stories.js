import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';
import Modal from './Modal';

const properties = {
  title: 'Components/Organisms/Modal',
  component: Modal,
};
export default properties;

const Template = (args) => (
  <Modal buttonContent={'Save'} {...args}>
    <StudentDetails
      student={{
        id: '1',
        name: 'Adam Romański',
        attendance: '39%',
        average: '2.3',
        group: 'A',
        course: 'Economy and finances',
        subjects: [
          { name: 'Modern Economy', grade: 3.5 },
          { name: 'Philosophy', grade: 4.1 },
          { name: 'Math', grade: 5.0 },
        ],
      }}
    />
  </Modal>
);

export const Default = Template.bind({});
