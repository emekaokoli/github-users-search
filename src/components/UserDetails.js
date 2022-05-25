import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/user.details.styles.css';
import { fetchUser } from '../utils/SearchAPI.util';

const UserDetails = () => {
  const { username } = useParams();
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
    name
  } = userDetails;

  if (loading) {
    return <div className='loading'>loading...</div>;
  }
  if (error) {
    return <div className='error'>{error}</div>;
  }
  return (
    <main className='user-details' key={id}>
      <div className='user-info'>
        <img src={avatar_url} alt={login} />
        <div className='user-details'>
          <h2 className='username'>{name}</h2>
          <p className='bio-description'>User Bio{bio}</p>
          <p className='bio-details'>Location: {location}</p>
          <p className='bio-details'>Company: {company}</p>
          <p className='bio-details'>Blog: {blog}</p>
          <p className='bio-details'>Email: {email}</p>
          <p className='bio-details'>Public Repo: {public_repos}</p>
          <p className='bio-details'>Public Repo: {public_gists}</p>
          <p className='bio-details'>Followers {followers}</p>
          <p className='bio-details'>Following {following}</p>
          <p className='bio-details'>
            Date joined:{' '}
            {new Date(created_at).toLocaleDateString('en-US')}
          </p>
        </div>
      </div>
     <div className='link-container'>
        <Link to='/' className='link'>Back to Search</Link>
     </div>
    </main>
  );
};

export default UserDetails;
