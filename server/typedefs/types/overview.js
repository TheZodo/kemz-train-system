const { gql } = require("apollo-server-express");

module.exports = gql`
type Overview {
  totalBorrowers: Int
  activeBorrowers: Int
  principleReleased: Float
  activeLoans: Int
  completedLoans: Int
  overdueLoans: Int
  defaultedLoans: Int
  pendingLoans: Int
  dueLoans: Int
}
`

