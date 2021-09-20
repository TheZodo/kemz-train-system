
const TrainModel = require('../Modals/TrainModel');


module.exports = {
    Query: {
     
    },
    Mutation: {
        addTrain: async (_, { train }, context) => {
            const model = new TrainModel
            model.train_Seat_Capacity = train.seatCapacity
            model.train_Freight_Capacity = train.freightCapacity
            model.train_Model = train.model

await model.save()

return true

        }
    }
};
