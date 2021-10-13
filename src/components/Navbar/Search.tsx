import React, { useState } from 'react';

const Search = ({ query, setQuery }) => {
  const [form, setForm] = useState({ query: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.query.trim().length < 0) {
      return;
    }

    setQuery(form.query);

    setForm({
      ...form,
      query: '',
    });
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      query: e.currentTarget.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='center__search'>
        <i className='fas fa-filter'></i>
        <input
          type='text'
          name='search'
          placeholder='Search for something'
          value={form.query}
          onChange={handleChange}
        />
        <button type='submit'>
          <i className='fas fa-search'></i>
          <span>Search</span>
        </button>
      </div>
    </form>
  );
};

export default Search;
