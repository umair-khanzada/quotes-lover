import '../styles/globals.css';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from '../components/Layout';
import { AuthProvider } from '../contexts/authContext';
import ThemeProvider from '../contexts/themeContext' ;

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ChakraProvider>
        <ThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ChakraProvider>
    </AuthProvider>
  );
}

export default MyApp
