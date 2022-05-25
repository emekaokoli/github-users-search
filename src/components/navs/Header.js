import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className='header'>
    <h1>
      <Link to='/'>
        <img
          src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
          alt='github logo'
        />
      </Link>
      Search more than 307M repositories
    </h1>
  </header>
);

export default Header;
