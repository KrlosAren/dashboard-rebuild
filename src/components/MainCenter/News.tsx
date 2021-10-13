import React from 'react';
import NotNotice from '../NotNotice/NotNotice';
import New from './New';

const News = ({ tweets }) => {
  return (
    <div className='news'>
      <h3>
        <i className='far fa-newspaper'></i>
        News
      </h3>
      {!tweets && <NotNotice />}
      {!!tweets &&
        tweets.map((notice) => <New notice={notice} key={notice.id} />)}
    </div>
  );
};

export default News;
