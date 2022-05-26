import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/Home';
import SearchUsers from '../components/SearchUsers';

describe('Home component', () => {
  describe('Home component', () => {
    it('renders Home component', () => {
      render(
        <BrowserRouter initialEntries={['/']}>
          <Home />
        </BrowserRouter>
      );
      expect(
        screen.getByText('Search more than 307M repositories')
      ).toBeInTheDocument();
    });
    describe('Search Useers component', () => {
      it('it should show a disabled search button ', async () => {
        const onClick = jest.fn();
        render(
          <BrowserRouter initialEntries={['/']}>
            <SearchUsers onClick={onClick} disabled={true} />
          </BrowserRouter>
        );
        const input = screen.getByRole('button', {
          name: /search/i,
        });
        userEvent.type(input, 'test');
        expect(screen.getByText('search')).toBeInTheDocument();
        expect(onClick).not.toHaveBeenCalled();
      });
    });
  });
});
