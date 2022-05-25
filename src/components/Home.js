import Header from './navs/Header';
import SearchUsers from './SearchUsers';


const Home = ({
  query,
  users,
  count,
  disabled,
  loading,
  error,
  handleSearch,
  handleChange,

}) => {
  return (
    <>
      <Header />
      <SearchUsers 
        query={query}
        users={users}
        count={count}
        disabled={disabled}
        loading={loading}
        error={error}
        handleSearch={handleSearch}
        handleChange={handleChange}
      />
    </>
  );
}

export default Home