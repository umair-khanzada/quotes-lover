import '../styles/globals.css';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from '../components/Layout';
import { AuthProvider } from '../contexts/authContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </AuthProvider>
  );
}

export default MyApp
