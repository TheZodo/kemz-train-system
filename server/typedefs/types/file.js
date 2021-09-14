const { gql } = require("apollo-server-express");

module.exports = gql`
type File {
  file: String
  contentType: String
  fileName: String
}


input FileUpload {
  file: Upload,
  contentType: String
  fileName: String
}
`

