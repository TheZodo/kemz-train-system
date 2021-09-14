const { gql } = require("apollo-server-express");

module.exports = gql`
type Segment{
  _id:ID!
  title: String
  description: String
  principleReleased: Float
  activeLoans: Float
  totalBorrowers: Int
  overdueLoans: Int
  completedLoans: Int
  dueLoans: Int
  borrowers: [String]
}

input SegmentInput {
  _id: String
   title: String
   description: String
   borrowers: [String]
}
`

