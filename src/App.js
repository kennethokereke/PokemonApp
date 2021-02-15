
import './App.css';
import {ApolloProvider} from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
import PokemonsContanier from './Container/PokemonContainer';


function App() {

    const client = new ApolloClient({
      uri: 'https://graphql-pokemon2.vercel.app/'
    });

    return(
     <ApolloProvider client={client}>
       <main>
        <PokemonsContanier/>
       </main>
     </ApolloProvider>
    )
   

}

export default App;
