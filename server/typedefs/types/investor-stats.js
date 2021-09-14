const { gql } = require("apollo-server-express");

module.exports = gql`
type InvestorStats {
  totalInvestors: Int
  activeInvestorFunds: Int
  availableInvestorFunds: Int
}
`

