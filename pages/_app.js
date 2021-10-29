import 'tailwindcss/tailwind.css';
import { SessionProvider } from 'next-auth/react';
import '../styles/loader.css';
import '../styles/toggle.css';
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
