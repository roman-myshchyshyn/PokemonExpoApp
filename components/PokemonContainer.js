import React, { useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { useQuery } from 'react-apollo'

import Pokemon from './Pokemon'
import getRandomInt from '../helpers/getRandomInt'
import getPokemonById from '../queries/getPokemonById'

const getPokemonId = () => getRandomInt(1, 120)

const PokemonContainer = () => {
  const [pokemonId, setPokemonId] = useState(getPokemonId())

  const { loading, error, data: { pokemon } = {} } = useQuery(getPokemonById, {
    variables: { id: pokemonId },
  })

  return (
    <>
      {(loading || error || !pokemon)
        ? (
          <ActivityIndicator size="large" />
        )
        : (
          <Pokemon
            {...pokemon}
            onPress={() => setPokemonId(getPokemonId())}
          />
        )
      }
    </>
  )
}

export default PokemonContainer
