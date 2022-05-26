import propTypes from 'prop-types';
import { ListGroup, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/list.user.styles.css';


const ListUsers = ({
  users,
  loading,
  handleFirst,
  handlePrev,
  handleNext,
  handleLast,
  page,
  count
}) => {

  if (loading) return <div className='loading'>loading...</div>;
  return (
    <div className='container'>
      <div className='user-list'>
        {<h5 className='results'> {count} {' '}results</h5>}
        <ListGroup className='list-container'>
          {users?.map(({ id, login, avatar_url }) => (
            <ListGroup.Item key={id}>
              <Link to={`/users/${login}`} className='link'>
                <div className='user-info'>
                  <img src={avatar_url} alt={login} />
                  <span>{login}</span>
                </div>
              </Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <div className='pagination'>
          {count > 0 && (
            <Pagination>
              <Pagination.First onClick={handleFirst} />
              <Pagination.Prev onClick={handlePrev} />
              <Pagination.Item active={page}>{page}</Pagination.Item>
              <Pagination.Next onClick={handleNext} />
              <Pagination.Last onClick={handleLast} />
            </Pagination>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListUsers;

ListUsers.propTypes = {
  users: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      login: propTypes.string,
      avatar_url: propTypes.string
    })
  ),
  loading: propTypes.bool,
  handleFirst: propTypes.func,
  handlePrev: propTypes.func,
  handleNext: propTypes.func,
  handleLast: propTypes.func,
  page: propTypes.number,
  count: propTypes.number
};
