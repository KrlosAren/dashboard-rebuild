import Image from 'next/image';
import React, { useContext } from 'react';
import { ChevronDown, FilePlus, MapPin, Search, Send } from 'react-feather';
import { useSession } from 'src/auth/client';
import { AppContext } from 'src/context/AppContext';

const Message = () => {
  const [session] = useSession();
  const { state, handleSetAsset } = useContext(AppContext);
  const { assets, asset } = state;

  const handleAssetsChange = (e: React.FormEvent<HTMLInputElement>) => {
    const asset = e.currentTarget.value;
    handleSetAsset(asset);
  };

  return (
    <div className='timeline__msg'>
      <div className='message__card'>
        <Image
          src={
            session
              ? session.user.image
              : 'https://dummyimage.com/50x50/808080/808080.png'
          }
          alt='profile-img'
          width={50}
          height={50}
        />
        <input type='text' name='msg' placeholder='Type something...' />
        <Search />
        <FilePlus />
        <ChevronDown size={18} />
      </div>
      <div className='message__details'>
        <div className='details__options'>
          <div className='checkbox'>
            <input type='checkbox' name='check' id='check' />
            <label htmlFor='check'></label>
          </div>
          <button type='submit' className='button-secondary'>
            Public
            <ChevronDown size={18} />
          </button>
          {/* <button type='submit' className='button-secondary'>
            Assets
            <ChevronDown size={18} />
          </button> */}
          <Dropdown
            options={assets}
            value={asset}
            onChange={handleAssetsChange}
          />
        </div>
        <div className='details__send'>
          <button type='submit' className='button-icon'>
            <MapPin size={15} />
          </button>
          <button type='submit' className='send__message'>
            <Send className='icons__message absolute-icons' size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;

export const Dropdown = ({ label = '', value, options, onChange }) => {
  return (
    <label>
      {label}
      <select value={value} onChange={onChange} className='button-secondary'>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.symbol}
          </option>
        ))}
      </select>
    </label>
  );
};
