import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AuthContextProvider from './context/AuthContext';
import NavigateSetter from './routes/navigate-setter';
import JWTManager from './utils/jwt';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include'
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // const token = localStorage.getItem('accessToken');
  const token = JWTManager.getToken();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

// const client = new ApolloClient({
//   uri: 'http://localhost:4000/graphql',
//   cache: new InMemoryCache()
// })

const queryCache = new QueryCache()
const queryClient = new QueryClient({
  queryCache: queryCache,
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <NavigateSetter />
    <ApolloProvider client={client}>
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </AuthContextProvider>
    </ApolloProvider>
  </BrowserRouter>
);