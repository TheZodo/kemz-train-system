const { gql } = require("apollo-server-express");

module.exports = gql`
type Tour {
  lastStep: Int
}
`

