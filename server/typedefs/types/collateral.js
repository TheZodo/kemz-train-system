const { gql } = require("apollo-server-express");

module.exports = gql`
type Collateral {
  _id: ID
  name: String
  description: String
  defects: String
  loanId: String
  files: [File]
}


input CollateralInput{
  name: String
  description: String
  defects: String
  loanId: String
  files: [FileUpload]
}
`

