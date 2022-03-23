import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <>
    <header className="headsection">
      <div className="inner-head">
        <h1 className="heading">
          BOOKSTORE CMS
        </h1>
        <nav className="lists">
          <Link to="/" className="list-item">Books</Link>
          <Link to="/categories" className="list-item">Categories</Link>
        </nav>
      </div>
      <img src="../logoin.jpeg" className="list-img" alt="login" />
    </header>
  </>
);

export default Header;
