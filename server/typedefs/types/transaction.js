const { gql } = require("apollo-server-express");

module.exports = gql`

type Transaction {
  _id: ID
  investorId: String
  amount : Float
  date : String
  type : String
  description : String
}


input TransactionInput{
  _id: ID
  investorId: String
  amount : Float
  date : String
  description : String
  type : String
}
`

