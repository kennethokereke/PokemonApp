import logo from './logo.svg';
import './App.css';
import {ApolloProvider} from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'


function App() {

    const client = new ApolloClient({
      uri: 'https://graphql-pokemon2.vercel.app/'
    });

    return(
     <ApolloProvider client={client}>
       <main>
         <p>I am a pokemon</p>
       </main>
     </ApolloProvider>
    )
   

}

export default App;
