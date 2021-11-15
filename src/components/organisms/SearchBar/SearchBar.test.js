import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from 'test-utils';
import SearchBar from './SearchBar';
import { handlers } from 'mocks/handlers';
import { setupServer } from 'msw/node';

const server = setupServer(...handlers);
describe('SearchBar tests', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('Renders the componenet', () => {
    render(<SearchBar />);
    screen.getByText('Teacher');
    screen.getByPlaceholderText('Search students');
  });

  it('Displays users when search phrase is matching', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search students');
    fireEvent.change(input, { target: { value: 'ad' } });
    await screen.findByText(/Adam Romański/);
  });
  it('Hides query results', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search students');
    fireEvent.change(input, { target: { value: 'ad' } });
    await screen.findByText(/Adam Romański/);
    fireEvent.change(input, { target: { value: '' } });
    await waitForElementToBeRemoved(() => screen.queryByText('Adam Romański'));
  });
});
//   usuniecie rzeczy z imputa to czy lista znika
