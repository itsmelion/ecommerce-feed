import React from 'react';
import { Link } from 'react-router-dom';
import './Topbar.scss';
import { ReactComponent as Logo } from './logo.svg';

const Topbar = () => (
  <nav row="nowrap" align="start center" id="Topbar">
    <Link className="menu-logo" to="/list">
      <Logo />
    </Link>

    {/* Search is here only for aestethics */}
    <input
      flex=""
      className="hide-mobile ml2"
      placeholder="Search"
      type="search"
      name="search"
      id="search"
    />
  </nav>
);

export default Topbar;
