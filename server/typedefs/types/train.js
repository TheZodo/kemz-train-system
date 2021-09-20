const { gql } = require("apollo-server-express");

module.exports = gql`
type Train {
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

