
const TrainModel = require('../Modals/TrainModel');


module.exports = {
    Query: {
     
    },
    Mutation: {
        addTrain: async (_, { train }, context) => {
const model = new TrainModel
model.seatCapacity = train.seatCapacity
model.freightCapacity = train.freightCapacity
model.model = train.model

await model.save()

return true

        }
    }
};
