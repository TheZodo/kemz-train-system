const { gql } = require("apollo-server-express");

module.exports = gql`
type InvestorSettings {
  profitRatio: Int
}


input InvestorSettingsInput{
  profitRatio: Int
}
`

