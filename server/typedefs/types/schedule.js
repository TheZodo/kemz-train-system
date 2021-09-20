const { gql } = require("apollo-server-express");

module.exports = gql`
type Schedule {
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

