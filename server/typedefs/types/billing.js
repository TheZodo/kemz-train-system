const { gql } = require("apollo-server-express");

module.exports = gql`
type Billing {
  renews: String
  price: String
  planId: String
}
`

