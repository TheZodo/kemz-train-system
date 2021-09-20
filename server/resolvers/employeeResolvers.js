
const employeeModal = require('../Modals/employeeModal');


module.exports = {
    Query: {
     
    },
    Mutation: {
        addEmployee: async (_, { employee }, context) => {
const model = new employeeModal()
model.employee_Fname = employee.fName
model.employee_Lname = employee.lName
model.employee_Phone = employee.phone
model.employee_Email = employee.email


const response = await model.save()

if(response){
return true
}else{
    return false
}

        }
    }
};
