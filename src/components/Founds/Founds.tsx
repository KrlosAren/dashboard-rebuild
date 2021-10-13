import React, { useContext, useState } from 'react';
import { AppContext } from 'src/context/AppContext';
import useForm from 'src/hooks/useForm';

const Founds = () => {
  const { handleCloseModal, handleAddfounds, state } = useContext(AppContext);
  const { assets } = state;
  const [values, handleFormFounds, reset] = useForm({
    name: '',
    amount: '',
  });

  const [error, setErrors] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (values.name === '') {
      setErrors('* Field is required');
      return;
    }
    if (values.amount < 0 || values.amount === '') {
      setErrors('* Field is required');
      return;
    }

    handleAddfounds(values);
    reset();
  };

  const { name, amount } = values;

  return (
    <div className='addfound__container'>
      <div className='addfound__container--title'>
        <h2>Add Found</h2>
        <button onClick={handleCloseModal}>X</button>
      </div>
      <div className='addfound__container--form'>
        <form onSubmit={handleSubmit}>
          <DropdownAssets
            options={assets}
            name='name'
            onChange={handleFormFounds}
            value={name}
          />
          {error && <p>{error}</p>}
          <input
            type='number'
            name='amount'
            value={amount}
            onChange={handleFormFounds}
            placeholder='Amount US$'
          />
          {error && <p>{error}</p>}
          <button>Add</button>
        </form>
      </div>
    </div>
  );
};

export default Founds;

export const DropdownAssets = ({
  label = '',
  value = '',
  options,
  onChange,
  name,
}) => {
  return (
    <label>
      {label}
      <select
        value={value}
        onChange={onChange}
        className='button-secondary select-assets'
        name={name}>
        <option>Select one...</option>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.symbol}
          </option>
        ))}
      </select>
    </label>
  );
};
