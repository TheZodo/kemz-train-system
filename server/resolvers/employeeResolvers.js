
const employeeModal = require('../Modals/employeeModal');


module.exports = {
    Query: {
        
        employees: async (_, __ , context) => {
            const employees = []

            const response = await employeeModal.find()

            response.map(item =>{
                employees.push({
                    _id: item._id,
                    fName: item.employee_Fname,
                    lName: item.employee_Lname ,
                    phone: item.employee_Phone,
                    email: item.employee_Email,
                })
            })

            return employees
        }
     
     
    },
    Mutation: {
        deleteEmployee: async (_, { id }, context) => {
            const response = await employeeModal.findByIdAndDelete(id)

            console.log({response})
            if(response){
                return true
            }else{
                throw new Error()
            }
        },
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
