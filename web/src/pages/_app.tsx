import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';

import '@/shared/style/index.scss';
import Layout from '@/shared/components/Layout';
import createApolloClient from '@/services/apolloClient';

const client = createApolloClient();

const App = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </ApolloProvider>
  );
};

export default App;
