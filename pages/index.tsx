import { NextPageContext } from 'next';
import { csrfToken, providers } from 'next-auth/client';
import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';
import { Loader } from 'react-feather';
import { useSession } from 'src/auth/client';
import AccessDenied from 'src/components/AccessDenied/AccessDenied';
import Founds from 'src/components/Founds/Founds';
import LeftSidebar from 'src/components/LeftSidebar/LeftSidebar';
import Main from 'src/components/MainCenter/Main';
import Modal from 'src/components/Modal/Modal';
import Navbar from 'src/components/Navbar/Navbar';
import RightSidebar from 'src/components/RightSidebar/RightSidebar';
import { AppContext } from 'src/context/AppContext';
import { getTweets } from 'src/utils';

export default function Home({ providers, tweetsNew }) {
  const [session, loading] = useSession();
  const [query, setQuery] = useState('');

  console.log(session);
  const { handleSetTweets, tweets, state, handleOpenModal, handleCloseModal } =
    useContext(AppContext);

  useEffect(() => {
    getTweets(query)
      .then((resp) => handleSetTweets(resp.tweets))
      .catch((error) => {
        console.log(error);
      });
  }, [query]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Head>
        <title>Moen</title>
      </Head>

      <div className='main'>
        {state.isOpen && (
          <Modal>
            <Founds />
          </Modal>
        )}
        {session === null && <AccessDenied providers={providers} />}
        <Navbar query={query} setQuery={setQuery} />
        <LeftSidebar />
        <Main tweets={tweets} />
        <RightSidebar />
      </div>
    </>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  return {
    props: {
      providers: await providers(context),
      csrfToken: await csrfToken(context),
    },
  };
}
