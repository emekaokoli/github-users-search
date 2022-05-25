import '../styles/searchUsers.styles.css';
import ListUsers from './ListUsers';

const SearchUsers = ({
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
          type='text'
          placeholder='Enter username'
          value={input}
          onChange={(e) => handleChange(e)}
          className='input-bar'
        />
        <button
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
