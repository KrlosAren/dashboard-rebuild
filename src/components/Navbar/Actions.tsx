import React from "react";
import { Bell, Mail, UserPlus } from 'react-feather';

const Actions = () => {

  return (
    <div className='center__icons'>
      <UserPlus size={15} />
      <Mail size={15} />
      <div className='notification' data-count='1'>
        <Bell size={15} />
      </div>
    </div>
  );
};

export default Actions;
