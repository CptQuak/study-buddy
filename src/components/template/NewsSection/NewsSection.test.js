import { screen } from '@testing-library/react';
import axios from 'axios';
import NewsSection from './NewsSection';
import { renderWithProviders } from 'helpers/renderWithProviders';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);
const query = `
        {
        allArticles{
            id
            title
            category
            content
            image{
            url
            }
        }
        }`;
describe.skip('News section', () => {
  afterEach(() => {
    mock.reset();
  });
  it('displays errror when articles fail to load', async () => {
    mock.onPost('/', { query }).reply(500);
    renderWithProviders(<NewsSection />);
    await screen.findByText(/Sorry/);
  });
  it('loads element', async () => {
    mock.onPost('/', { query }).reply(200, {
      data: {
        data: {
          allArticles: [
            { id: 1, title: 'test', category: 'test', content: 'text' },
          ],
        },
      },
    });
    renderWithProviders(<NewsSection />);
    await screen.findByText(/test/);
  });
});
