const { gql } = require("apollo-server-express");

module.exports = gql`
type Train {
  _id: ID
  seatCapacity: Int
  freightCapacity: Int
  model: String
}

input TrainInput {
  seatCapacity: Int
  freightCapacity: Int
  model: String
}
`

