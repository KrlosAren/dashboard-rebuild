import React, { useContext } from 'react';
import { Upload } from 'react-feather';
import { AppContext } from 'src/context/AppContext';

const Founds = () => {
  const { state, handleOpenModal } = useContext(AppContext);
  const { money } = state;

  const balance: number = money.reduce((acc, cv) => cv.amount + acc, 0);

  return (
    <div className='founds'>
      <p>$ {balance}</p>
      <button type='button' onClick={handleOpenModal}>
        <Upload size={16}/>
      </button>
    </div>
  );
};

export default Founds;
