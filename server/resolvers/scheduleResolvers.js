
const scheduleModal = require('../Modals/scheduleModal');
const ticketModal = require('../Modals/ticketModal');



module.exports = {
    Query: {

        schedules: async (_, __, context) => {
            const schedules = []

            const response = await scheduleModal.find()

            await Promise.all(response.map(async (item) => {
                let freight = 0, passenger = 0

                const tickets = await ticketModal.find({ schedule_Id: item._id })

                tickets.map(({ ticket_Type }) => {
                    ticket_Type === 'passenger' ? passenger++ : freight++
                })

                schedules.push({
                    _id: item._id,
                    aTime: item.schedule_Arrival,
                    dTime: item.schedule_Departure,
                    trainId: item.train_Id,
                    booked: {
                        freight, passenger
                    }
                })
            })
            )

            return schedules
        }

    },
    Mutation: {
        deleteSchedule: async (_, { id }, context) => {
            const response = await scheduleModal.findByIdAndDelete(id)

            console.log({ response })
            if (response) {
                return true
            } else {
                throw new Error()
            }
        },
        addSchedule: async (_, { schedule }, context) => {
            const model = new scheduleModal()
            model.schedule_Arrival = schedule.aTime
            model.schedule_Departure = schedule.dTime
            model.train_Id = schedule.trainId

            const response = await model.save()

            if (response) {
                return true
            } else {
                return false
            }

        }
    }
};
