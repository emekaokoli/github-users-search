import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import SearchUsers from '../components/SearchUsers';
import { searchUsers } from '../utils/SearchAPI.util';



describe('List users', () => {
 describe('List the result count', () => { 
    it('returns the total amount of record searched', () => {
      render(
        <BrowserRouter initialEntries={['/search']}>
          <SearchUsers />
        </BrowserRouter>
      );
      expect(screen.getByText('results')).toBeInTheDocument();
    });
 })
 // this is likely duplicated in the Home test component
 // but needed since the search box is also used here
 describe('displays an input field and search button', () => { 
    it('it should show a disabled search button ', async () => {
      const onClick = jest.fn();
      render(
        <BrowserRouter initialEntries={['/search']}>
          <SearchUsers onClick={onClick} disabled={true} />
        </BrowserRouter>
      );
      const input = screen.getByRole('button', { name: /search/i });
      userEvent.type(input, 'test');
      expect(screen.getByText('search')).toBeInTheDocument();
      expect(onClick).not.toHaveBeenCalled();
    });
  })

  describe('Search users', () => { 
    it('click to fetch list of users ', async () => {
     const data = await searchUsers('test' , 1, 18);
      const { items, total_count } = await data.json();
      expect(items).toHaveLength(18);
      expect(total_count).toBeTruthy();
    }
    );
   })
});