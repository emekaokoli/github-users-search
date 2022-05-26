import propTypes from 'prop-types';
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

  if (loading) {
    return <div className='loading'>loading...</div>;
  }
  if (error) {
    return <div className='error'>{error}</div>;
  }
  return (
    <>
      <div className='user-details-container' key={id}>
        <div className='user-details'>
          <div className='user-details-info'>
            <img src={avatar_url} alt={name} />
            <h1>{name}</h1>
            <p>{bio}</p>
            <p>location: {location}</p>
            <p>company: {company}</p>
            <p>blog: {blog}</p>
            <p>email: {email}</p>
            <p>
              Joined:{' '}
              {new Date(created_at).toLocaleDateString('en-US')}
            </p>
          </div>
          <div className='user-details-stats'>
            <div className='user-details-stats-item'>
              <p>Followers: {followers}</p>
            </div>
            <div className='user-details-stats-item'>
              <p>Following: {following}</p>
            </div>
            <div className='user-details-stats-item'>
              <p>Public Repos: {public_repos}</p>
            </div>
            <div className='user-details-stats-item'>
              <p>Public Gists: {public_gists}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='link-container'>
        <Link to='/search' className='link'>
          Back to Search
        </Link>
      </div>
    </>
  );
};

export default UserDetails;

UserDetails.propTypes = {
  id: propTypes.number,
  avatar_url: propTypes.string,
  bio: propTypes.string,
  location: propTypes.string,
  company: propTypes.string,
  blog: propTypes.string,
  followers: propTypes.number,
  following: propTypes.number,
  public_gists: propTypes.number,
  public_repos: propTypes.number,
  email: propTypes.string,
  created_at: propTypes.string,
  name: propTypes.string,
};
