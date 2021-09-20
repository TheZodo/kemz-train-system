
const TrainModel = require('../Modals/TrainModel');


module.exports = {
    Query: {
     
    },
    Mutation: {
        addSchedule: async (_, { schedule }, context) => {
const model = new TrainModel
model.schedule_Arrival = schedule.aTime
model.schedule_Departure = schedule.dTime
model.train_Id = schedule.trainId

const response = await model.save()

if(response){
return true
}else{
    return false
}

        }
    }
};
