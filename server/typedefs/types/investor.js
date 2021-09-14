const { gql } = require("apollo-server-express");

module.exports = gql`
type Investor {
  _id: ID
  fName: String
  lName: String
  gender: String
  dob: String
  occupation: String
  address: String
  city: String
  state: String
  zipcode: String
  email: String!
  id: String
  phone: String
  availableFunds: Float
  activeFunds: Float
  profit: Float
  files: [File]
}


input InvestorInput{
  fName: String
  lName: String
  gender: String
  dob: String
  occupation: String
  address: String
  city: String
  state: String
  zipcode: String
  email: String!
  id: String
  phone: String
  files: [FileUpload]
}
`

