const { gql } = require("apollo-server-express");

module.exports = gql`
type Station {
  name: String
  description: String
}

input StationInput {
  name: String
  description: String
}
`

