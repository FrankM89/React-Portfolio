import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

const Header = (props) => {
  return (
    <header className="header flex-row space-between px-1" style={{backgroundImage: `url(${coverImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%'}}>
      <h1>Frank Muniz</h1>
      {props.children}
    </header>
  );
};

export default Header;
