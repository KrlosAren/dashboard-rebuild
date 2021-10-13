import React, { useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { AppContext } from 'src/context/AppContext';
import { randomColor } from 'src/utils';

  const colors = Array.from(Array(100)).map(item => randomColor())

const Complete = () => {
  const { state } = useContext(AppContext);
  const { money } = state;
  
  const currency = money.map((i) => i.name);
  
  const totalAmount = money.reduce((acc, cv) => Number(cv.amount) + acc, 0);
  const amount = money.map((i) =>
    ((Number(i.amount) * 100) / totalAmount).toFixed(2)
  );
  


  const data = {
    labels: currency,
    datasets: [
      {
        data: amount,
        backgroundColor: colors,
        hoverBackgroundColor: colors,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
    },
  };

  return (
    <div className='investements'>
      <h2>Investments</h2>

      {money.length === 0 ? (
        <div className='investements__notfounds'>
          <p>Add a Invesment</p>
        </div>
      ) : (
        <div className='investements__notfounds--chart'>
          <Doughnut
            data={data}
            options={options}
            className='donut'
            width='150'
            height='150'
          />
        </div>
      )}
    </div>
  );
};

export default Complete;
