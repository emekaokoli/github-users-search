import { useCallback, useState } from 'react';
import {
  Route,
  Routes, useNavigate
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NotFound from './components/NotFound';
import SearchUsers from './components/SearchUsers';
import UserDetails from './components/UserDetails';
import { parseLinkHeader, searchUsers } from './utils/SearchAPI.util';

function App() {
  
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [headers, setHeaders] = useState('');
  const [nextpage, setNextpage] = useState('');
  const [prevpage, setPrevpage] = useState('');
  const [lastpage, setLastpage] = useState('');
  const [firstpage, setFirstpage] = useState('');

  // pagination
  const [page, setPage] = useState(1);
  const [per_page] = useState(30);

  // const isFirstPage = page === 1;
  // const isLastPage = page === Math.ceil(users.length / per_page);

  // const indexOfLastUser = page * per_page;
  // const indexOfFirstUser = indexOfLastUser - per_page;
  // const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  
  const disabled = input.length === 0;

  const getUsers = useCallback(
    async (input, page, per_page) => {
      try {
        setLoading(true);
        const data = await searchUsers(input, page, per_page);
        const header = await data.headers.get('Link');
        const { items } = await data.json();
        setHeaders(header);
        const { first, prev, next, last } = parseLinkHeader(headers);
        setNextpage(next);
        setPrevpage(prev);
        setLastpage(last);
        setFirstpage(first);

        setUsers(items);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    },
    [headers]
  );

  const handleNext = () => {
    if (!nextpage) throw new Error('No next page');
    const question = nextpage.split('?')[1];
    const and = question.split('&');
    const query = and[0].split('=')[1];
    const currentPage = and[3].split('=')[1];
    const perpage = and[4].split('=')[1];
    console.log(query, currentPage, perpage);
    getUsers(query, currentPage, perpage);
  }

  const handlePrev = () => {
    if (!prevpage) throw new Error('No previous page');
    setPage(page - 1);
  }

  const handleFirst = () => {
    if (!firstpage) throw new Error('No first page');
    setPage(1);
  }

  const handleLast = () => {
    if (!lastpage) throw new Error('No last page');
    setPage(Math.ceil(users.length / per_page));
  }


  const handleChange = (e) => setInput(e.target.value);

  const handleSearch = (e) => {
    getUsers(input, page, per_page);
    navigate(`/search`);
  };

  return (
    <main>
      <Routes>
        <Route
          path='/'
          element={
            <Home
              input={input}
              users={users}
              disabled={disabled}
              loading={loading}
              error={error}
              handleSearch={handleSearch}
              handleChange={handleChange}
            />
          }
        />
        <Route
          path='/search'
          element={
            <SearchUsers
              input={input}
              users={users}
              disabled={disabled}
              loading={loading}
              count={users.length}
              error={error}
              handleSearch={handleSearch}
              handleChange={handleChange}
              handleFirst={handleFirst}
              handlePrev={handlePrev}
              handleNext={handleNext}
              handleLast={handleLast}
            />
          }
        />
        <Route path='users/:username' element={<UserDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
