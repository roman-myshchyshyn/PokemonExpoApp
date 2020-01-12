import React from 'react'
import { SafeAreaView } from 'react-native'

import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

import PokemonContainer from './components/PokemonContainer'

const client = new ApolloClient({ uri: 'http://127.0.0.1:4000/graphql' })


const App = () => (
  <ApolloProvider client={client}>
    <SafeAreaView>
      <PokemonContainer />
    </SafeAreaView>
  </ApolloProvider>
)

export default App
