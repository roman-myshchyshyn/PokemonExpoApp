import gql from 'graphql-tag'

const GET_POKEMON_BY_ID = gql`
  query GetPokemonById($id: ID!) {
    pokemon(id: $id) {
      id
      name
      desc
      pic
      types {
        id
        name
      }
    }
  }
`

export default GET_POKEMON_BY_ID
