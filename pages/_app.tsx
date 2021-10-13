import { AppProps } from 'next/dist/shared/lib/router/router';
import { SessionProvider } from 'src/auth/client';
import AppProvider from 'src/context/AppContext';
import '../styles/main.scss';

function MyApp({ Component, pageProps } : AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
    </SessionProvider>
  );
}

export default MyApp;
