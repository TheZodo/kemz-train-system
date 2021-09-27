const { gql } = require("apollo-server-express");

module.exports = gql`
type Booked{
  freight: Int
  passenger: Int
}

type Schedule {
  _id: ID
  trainId: String
  dTime: String
  aTime: String
  booked: Booked

}

input ScheduleInput {
  trainId: String
  dTime: String
  aTime: String

}
`

