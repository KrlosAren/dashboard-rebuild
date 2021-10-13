import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'src/auth/client';

export default async function getTweets(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (session === null) {
    return res.status(400).json({
      message: 'unauthorized',
      ok: false,
      tweets: [],
    });
  }

  const resp = await fetch(
    `https://api.twitter.com/2/tweets/search/recent?query=btc&tweet.fields=&expansions=author_id&user.fields=description,username,profile_image_url`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
      },
    }
  );
  const tweets = await resp.json();

  const {
    data,
    includes: { users },
  } = tweets;

  const tweetsNew = data.map((tweet) => {
    const userTweet = users.find((user) => user.id === tweet.author_id);

    return {
      ...tweet,
      ...userTweet,
    };
  });
  res.status(200).json({
    message: 'get all tweets',
    ok: true,
    tweets: tweetsNew,
  });
}
