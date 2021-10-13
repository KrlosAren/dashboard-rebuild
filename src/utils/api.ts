const url = 'https://api.coincap.io/v2';

const getAssets = async () => {
  try {
    const res = await fetch(`${url}/assets?limit=20`);
    const res_1 = await res.json();
    return res_1.data;
  } catch (err) {
    return err;
  }
};

const getAsset = async (coin) => {
  try {
    const res = await fetch(`${url}/assets/${coin}`);
    const res_1 = await res.json();
    return res_1.data;
  } catch (error) {
    return error;
  }
};

const getAssetHistory = async (coin = 'bitcoin') => {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();
  try {
    const res = await fetch(
      `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
      , {
    });
    const res_1 = await res.json();
    return res_1.data;
  } catch (error) {
    return error;
  }
};

const getMarkets = async (coin) => {
  try {
    const res = await fetch(`${url}/assets/${coin}/markets?limit=5`);
    const res_1 = await res.json();
    return res_1.data;
  } catch (error) {
    return error;
  }
};

const getExchange = async (id) => {
  try {
    const res = await fetch(`${url}/exchanges/${id}`);
    const res_1 = await res.json();
    return res_1.data;
  } catch (error) {
    return error;
  }
};

export { getAsset, getAssets, getAssetHistory, getMarkets, getExchange };
