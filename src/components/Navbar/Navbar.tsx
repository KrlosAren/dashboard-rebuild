import Image from 'next/image';
import React from 'react';
import { AlignJustify } from 'react-feather';
import Actions from './Actions';
import AddContact from './AddContact';
import Profile from './Profile';
import Search from './Search';
import logo from '/public/logo.png';

const Navbar = ({ query, setQuery }) => {
  return (
    <div className='main__navbar'>
      <div className='navbar'>
        <div className='navbar__left'>
          <div className='left__menu'>
            <div>
              <Image
                src={logo}
                alt='monem'
                width={50}
                height={50}
                layout='fixed'
              />
              <AlignJustify />
            </div>
          </div>
        </div>
        <div className='navbar__center'>
          <Search query={query} setQuery={setQuery} />
          <AddContact />
          <Actions />
        </div>
        <Profile />
      </div>
    </div>
  );
};

export default Navbar;
