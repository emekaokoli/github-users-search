import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      Page not found
      <p>
        <Link to='/'>Take me back</Link>
      </p>
    </div>
  );
}

export default NotFound