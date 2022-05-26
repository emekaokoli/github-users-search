import { useCallback, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NotFound from './components/NotFound';
import SearchUsers from './components/SearchUsers';
import UserDetails from './components/UserDetails';
import { searchUsers } from './utils/SearchAPI.util';

function App() {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [per_page] = useState(18);

  const isFirstPage = page === 1;
  const isLastPage = page === Math.ceil(total / per_page);
  const disabled = input.length === 0;

  const getUsers = useCallback(async (input, page, per_page) => {
    try {
      setLoading(true);
      const data = await searchUsers(input, page, per_page);
      const { items, total_count } = await data.json();
      setUsers(items);
      setTotal(total_count);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  const handleFirst = () => {
    if (!isFirstPage) {
      setPage(1);
      getUsers(input, 1, per_page);
    }
  };

  const handlePrev = () => {
    if (!isFirstPage) {
      setPage(page - 1);
      getUsers(input, page - 1, per_page);
    }
  };

  const handleNext = () => {
    if (isLastPage) return;
    setPage(page + 1);
    getUsers(input, page + 1, per_page);
  };

  const handleLast = () => {
    if (!isLastPage) {
      setPage(Math.ceil(total / per_page));
      getUsers(input, Math.ceil(total / per_page), per_page);
    }
  };

  const handleSearch = (e) => {
    setPage(1);
    getUsers(input, page, per_page);
    navigate(`/search`);
  };

  const handleChange = (e) => setInput(e.target.value);

  return (
    <main>
      <Routes>
        <Route
          path='/'
          element={
            <Home
              count={total}
              page={page}
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
              page={page}
              input={input}
              users={users}
              disabled={disabled}
              loading={loading}
              count={total}
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
