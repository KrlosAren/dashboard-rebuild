import { useEffect, useState } from 'react';
import news from '../newsData.json';
import initialState from '../userData.json';



const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [tweets, setTweets] = useState([]);
  const [hits, setHits] = useState<any>([]);

  const handleAddfounds = (payload) => {
    const existFound = state.money.findIndex(
      (element) => element.name === payload.name
    );
    if (existFound !== -1) {
      const updatedMoney = [...state.money];
      updatedMoney[existFound] = {
        ...updatedMoney[existFound],
        amount: updatedMoney[existFound].amount + Number(payload.amount),
      };
      setState({
        ...state,
        money: updatedMoney,
      });
    } else {
      setState({
        ...state,
        money: [
          ...state.money,
          {
            ...payload,
            amount: Number(payload.amount),
          },
        ],
      });
    }
  };

  const handleSetTweets = (payload) => {
    setTweets([...payload]);
  };

  const handleOpenModal = (e) => {
    setState({
      ...state,
      isOpen: true,
    });
  };
  const handleCloseModal = (e) => {
    setState({
      ...state,
      isOpen: false,
    });
  };

  const handleSetAsset = (payload) => {
    setState({
      ...state,
      asset: payload,
    });
  };

  useEffect(() => {
    setHits(news.news);
  }, []);

  const handleSetListAssets = (payload) => {
    setState({
      ...state,
      assets: [...payload],
    });
  };

  return {
    state,
    handleSetTweets,
    tweets,
    handleAddfounds,
    handleOpenModal,
    handleCloseModal,
    handleSetAsset,
    handleSetListAssets,
  };
};

export default useInitialState;
