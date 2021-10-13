import React from "react";
import News from "./News";
import Timeline from "./Timeline";

const Main = ({ tweets }) => {
  return (
    <div className='main__center'>
      <div className='main__container'>
        <Timeline />
        <News tweets={tweets} />
      </div>
    </div>
  );
};

export default Main;
