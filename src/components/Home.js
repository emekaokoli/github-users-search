import propTypes from 'prop-types';
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

Home.prototype = {
  query: propTypes.string,
  users: propTypes.arrayOf(
    propTypes.shape({
      avatar_url: propTypes.string,
      login: propTypes.string,
      id: propTypes.number.isRequired,
    })
  ).isRequired,
  count: propTypes.number,
  disabled: propTypes.bool,
  loading: propTypes.bool,
  error: propTypes.string,
  handleSearch: propTypes.func,
  handleChange: propTypes.func,
};