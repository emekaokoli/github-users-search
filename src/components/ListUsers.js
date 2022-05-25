import { Link } from 'react-router-dom';
import '../styles/list.user.styles.css';
import { ListGroup, Pagination } from 'react-bootstrap';

const ListUsers = ({
  users,
  loading,
  handleFirst,
  handlePrev,
  handleNext,
  handleLast,
  page,
}) => {
  const count = users.length;

  if (loading) return <div className='loading'>loading...</div>;
  return (
    <div className='container'>
      <div className='user-list'>
        {count > 0 && <h2>found {count} users</h2>}

        <ListGroup className='list-container'>
          {users?.map((user) => (
            <ListGroup.Item key={user.id}>
              <Link to={`/users/${user.login}`}>
                <div className='user-info'>
                  <img src={user.avatar_url} alt={user.login} />
                  <span>{user.login}</span>
                  {/* <span>{user.starred_url}</span> */}
                </div>
              </Link>
            </ListGroup.Item>
          ))}
          {count > 0 && (
            <Pagination>
              <Pagination.First onClick={handleFirst} />
              <Pagination.Prev onClick={handlePrev} />
              <Pagination.Item active={page}>{page}</Pagination.Item>
              <Pagination.Next onClick={handleNext} />
              <Pagination.Last onClick={handleLast} />
            </Pagination>
          )}
        </ListGroup>
      </div>
    </div>
  );
};

export default ListUsers;
