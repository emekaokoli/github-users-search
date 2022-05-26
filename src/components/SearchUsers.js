import propTypes from 'prop-types';
import '../styles/searchUsers.styles.css';
import ListUsers from './ListUsers';


const SearchUsers = ({
  page,
  input,
  users,
  count,
  disabled,
  loading,
  error,
  handleSearch,
  handleChange,
  handleFirst,
  handlePrev,
  handleNext,
  handleLast,
}) => {
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section>
      <div className='search-input-wrapper'>
        <input
          aria-roledescription='search input'
          type='text'
          placeholder='search users'
          value={input}
          onChange={(e) => handleChange(e)}
          className='input-bar'
        />
        <button
          name='search'
          aria-pressed='false'
          type='submit'
          onClick={(event) => handleSearch(event)}
          disabled={disabled}
        >
          search
        </button>
      </div>
      <div className='list-users'>
        {loading ? (
          <p className='d-flex justifyContent-center'>Loading...</p>
        ) : (
          <ListUsers
            count={count}
            page={page}
            users={users}
            loading={loading}
            handleFirst={handleFirst}
            handlePrev={handlePrev}
            handleNext={handleNext}
            handleLast={handleLast}
          />
        )}
      </div>
      {error && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          {error}
        </div>
      )}
    </section>
  );
};

export default SearchUsers;

SearchUsers.propTypes = {
  page: propTypes.number,
  input: propTypes.string,
  users: propTypes.arrayOf(
    propTypes.shape({
      avatar_url: propTypes.string,
      login: propTypes.string,
      id: propTypes.number.isRequired,
    }),
  ).isRequired,
  count: propTypes.number,
  disabled: propTypes.bool,
  loading: propTypes.bool,
  error: propTypes.string,
  handleSearch: propTypes.func,
  handleChange: propTypes.func,
  handleFirst: propTypes.func,
  handlePrev: propTypes.func,
  handleNext: propTypes.func,
  handleLast: propTypes.func,
};