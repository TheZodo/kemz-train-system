const { gql } = require("apollo-server-express");

module.exports = gql`
type Borrower {
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
  email: String
  id: String
  phone: String
  activeLoansTotal: Float
  activeLoansPaid: Float
  files: [File]
}


input BorrowerInput{
  _id: String
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

