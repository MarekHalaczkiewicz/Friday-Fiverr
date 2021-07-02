import React from 'react';
import '../components/navbar.css';
import logo from '../Assets/logo.png';
import { useHistory } from 'react-router-dom';

const Navbar = ({
  user,
  setUser,
  setModalOpen,
  customClass = '',
  showContractors,
}) => {
  const history = useHistory();

  const customClassName =
    customClass && showContractors ? 'custom-navbar' : 'navbar';
  return (
    <nav className={customClassName}>
      <div
        className="nav-logo"
        onClick={() => {
          setModalOpen(false);
          history.push('/');
        }}
      >
        <img className="logo" src={logo} />
      </div>
      <ul className="nav-section1">
        <li>
          <a href="/my-jobs">My jobs</a>
        </li>
        <li>
          <a href="/submit">Create a Project</a>
        </li>
      </ul>
      <div className="nav-section2">
        {user.loggedIn ? (
          <button
            className="login-button"
            onClick={() => {
              localStorage.removeItem('user');
              setUser({});
            }}
          >
            Log out
          </button>
        ) : (
          <button
            className="login-button"
            onClick={() => history.push('/login')}
          >
            Log in
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
