
const ticketModal = require('../Modals/ticketModal');


module.exports = {
    Query: {

        /* tickets: async (_, __ , context) => {
             const employees = []
 
             const response = await ticketModal.find()
 
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
      */

    },
    Mutation: {
        addTicket: async (_, { scheduleId, ticketType }) => {
            const model = new ticketModal()
            model.ticket_Type = ticketType
            model.schedule_Id = scheduleId

            const response = await model.save()

            if (response) {
                return true
            } else {
                return false
            }

        }
    }
};
