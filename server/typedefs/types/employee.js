const { gql } = require("apollo-server-express");

module.exports = gql`
type Employee {
  _id: ID
  fName: String
  lName: String
  phone: String
  email: String


}

input EmployeeInput {
  fName: String
  lName: String
  phone: String
  email: String


}
`

