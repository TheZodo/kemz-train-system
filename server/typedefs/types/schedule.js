const { gql } = require("apollo-server-express");

module.exports = gql`
type Schedule {
  _id: ID
  trainId: String
  dTime: String
  aTime: String

}

input ScheduleInput {
  trainId: String
  dTime: String
  aTime: String

}
`

