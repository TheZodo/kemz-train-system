const { gql } = require("apollo-server-express");

//todo on reset password send email with confirmation code

module.exports = gql`
  type Mutation {
    register(user: UserInput): User
    login(user: UserInput): User
    changePassword(password : ChangePasswordInput): User
    resetPassword(email: String):Int
    changeTokenPassword(token: String,password: String): User
    logout: Boolean 
    addTrain(train: TrainInput): Boolean
    addSchedule(schedule: ScheduleInput): Boolean
    addStation(station: StationInput): Boolean
    addEmployee(employee: EmployeeInput): Boolean
    deleteTrain(id: String): Boolean
    deleteEmployee(id: String): Boolean
    deleteSchedule(id: String): Boolean
    deleteStation(id: String): Boolean


  }
`;

