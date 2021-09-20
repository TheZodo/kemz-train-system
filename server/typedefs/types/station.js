const { gql } = require("apollo-server-express");

module.exports = gql`
type Station {
  _id: ID
  name: String
  description: String
}

input StationInput {
  name: String
  description: String
}
`

