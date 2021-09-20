const { gql } = require("apollo-server-express");

module.exports = gql`
type Employee {
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

