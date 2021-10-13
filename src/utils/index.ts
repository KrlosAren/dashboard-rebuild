export const randomColor = () => {
  let o = Math.round;
  let r = Math.random;
  let s = 255;
  return (
    'rgba(' +
    o(r() * s) +
    ',' +
    o(r() * s) +
    ',' +
    o(r() * s) +
    ',' +
    r().toFixed(1) +
    ')'
  );
};

export const getTweets = async (query: string) => {
  const resp = await window.fetch(
    `http://localhost:4500/api/tweets?query=${query}`
  );
  const data = await resp.json();
  return data;
};
