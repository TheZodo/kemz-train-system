const { gql } = require("apollo-server-express");

module.exports = gql`
type UpcomingPayment{
  amount : Float
  date: String
}

type LoanRepayment {
  upcomingPayment: UpcomingPayment
  paid: Float
  due: Float
  overdueDays: Int
}



type Loan {
  _id: ID
  borrower: Borrower
  principleAmount : Float
  releaseDate : String
  interest : Float
  interestDuration : String
  status : String
  repaymentCycle : String
  durationUnit : Int
  durationType : String
  interestMethod : String
  repayment: LoanRepayment
}


input LoanInput{
  _id: ID
  borrowerId : String
  principleAmount : Float
  releaseDate : String
  interest : Float
  interestDuration : String
  status : String
  repaymentCycle : String
  durationUnit : Int
  interestMethod : String
  durationType : String
}
`

