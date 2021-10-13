import React, { useContext, useEffect, useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useSession } from 'src/auth/client';
import { AppContext } from 'src/context/AppContext';
import { getAssetHistory } from 'src/utils/api';

type AssetPrice = {
  time: Date;
  priceUsd: string;
  date: string;
  circulatingSupply: string;
};

type Series = {
  label: string;
  data: AssetPrice[];
};

const Notification = () => {
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(false);
  const [session] = useSession();
  const { state } = useContext(AppContext);

  const Chart = useRef();

  useEffect(() => {
    getAssetHistory(state.asset)
      .then((resp) => {
        setError(false);
        setHistory([...resp]);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  }, [state.asset]);

  const data = {
    labels: history.map((hist) => new Date(hist.time).toLocaleString()),
    datasets: [
      {
        label: 'Price USD',
        data: history.map((hist) => Number(hist.priceUsd).toFixed(2)),
        fill: false,
        backgroundColor: '#fffffff5',
      },
    ],
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          ticks: { display: false },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: { display: false },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
    },
  };

  const options = {

  };

  const renderChart = (infoData) => {
    return <Line ref={Chart} data={infoData}/>;
  };

  return (
    <div className='timeline__notification'>
      {error && (
        <div className='timeline__error'>
          An error was happen.Please select again.
        </div>
      )}
      {session && renderChart(data)}
    </div>
  );
};

export default Notification;
