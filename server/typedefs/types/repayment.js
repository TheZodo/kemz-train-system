const { gql } = require("apollo-server-express");

module.exports = gql`

type Repayment {
  _id: ID
  loanId: String
  amount : Float
  collectionDate : String
  description : String
}


input RepaymentInput{
  _id: ID
  loanId: String
  amount : Float
  collectionDate : String
  description : String
}
`

