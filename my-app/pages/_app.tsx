// pages/_app.tsx
import '../styles/globals.css'; // Make sure this path is correct for your Tailwind setup
import type { AppProps } from 'next/app';
import Layout from '../components/layout'; // Import your Layout component

function MyApp({ Component, pageProps }: AppProps) {
  // Show hero section only on the home page
  const showHero = Component.name === 'HomePage';
  
  return (
    // Your Layout component wraps the current page component (Component).
    // The content of 'Component' will be passed as 'children' to 'Layout'.
    <Layout showHero={showHero}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;