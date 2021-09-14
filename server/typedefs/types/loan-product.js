const { gql } = require("apollo-server-express");

module.exports = gql`


type Product {
  _id: ID
  name: String
  description : String
  interest : Float
  interestDuration : String
  repaymentCycle : String
  durationUnit : Int
  durationType : String
  interestMethod : String
}


input ProductInput{
  _id: String
  name: String
  description : String
  interest : Float
  interestDuration : String
  repaymentCycle : String
  durationUnit : Int
  durationType : String
  interestMethod : String
}
`

