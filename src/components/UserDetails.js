import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/user.details.styles.css';
import { fetchUser } from '../utils/SearchAPI.util';

const UserDetails = () => {
  const { username } = useParams();
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchUser(username);
        const items = await data.json();
        setUserDetails(items);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [username]);

  const {
    id,
    avatar_url,
    login,
    bio,
    location,
    company,
    blog,
    followers,
    following,
    public_gists,
    public_repos,
    email,
    created_at,
    name,
  } = userDetails;

  console.log(userDetails);

  if (loading) {
    return <div className='loading'>loading...</div>;
  }
  if (error) {
    return <div className='error'>{error}</div>;
  }
  return (
    <div className='user-details-container' key={id}>
      {userDetails.message === 'Not Found' ? (
        <div className='link-container'>
          <h1>User not found {error}</h1>
          <Link to='/' className='link'>
            Go back to home
          </Link>
        </div>
      ) : (
        <>
          <div className='user-details'>
            <img src={avatar_url} alt={login} />
            <div className='user-details-info'>
              <h1>{login}</h1>
              <p>{bio}</p>
              <p>location: {location}</p>
              <p>company: {company}</p>
              <p>blog: {blog}</p>
              <p>email: {email}</p>
              <p>Joined: {new Date(created_at).toLocaleDateString('en-US')}</p>
            </div>
         
            <div className='user-details-stats'>
              <div className='user-details-stats-item'>
                <p >
                  Followers: {followers}
                </p>
              </div>
              <div className='user-details-stats-item'>
                <p>
                  Following: {following}
                </p>
              </div>
              <div className='user-details-stats-item'>
                <p>
                  Public Repos: {public_repos}
                </p>
              </div>
              <div className='user-details-stats-item'>
                <p>Public Gists: {public_gists}</p>
              </div>
            </div>
          </div>
          <div className='link-container'>
            <Link to='/search' className='link'>
              Back to Search
            </Link>
          </div>
        </>
      )}
    </div>
  );
};


export default UserDetails;
