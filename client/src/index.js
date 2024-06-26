import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { UserProvider } from "./context/UserContext";

// Setup Apollo Client
const client = new ApolloClient(
  {
    uri: "http://localhost:4000/users",
    cache: new InMemoryCache()
  }
)

const root = ReactDOM.createRoot(document.getElementById('root'));

// Wrap <App /> inside <UserProvider> to provide global state
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <UserProvider>
        <App />
      </UserProvider>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
