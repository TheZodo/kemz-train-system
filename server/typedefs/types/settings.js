const { gql } = require("apollo-server-express");

module.exports = gql`
type Currency{
  symbol: String
  code: String
  country: String
}

input CurrencyInput{
  symbol: String
  code: String
  country: String
}

type Settings{
  currency: Currency
}


input SettingsInput{
  currency: CurrencyInput
}
`

