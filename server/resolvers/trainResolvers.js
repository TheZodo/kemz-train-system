
const TrainModel = require('../Modals/TrainModel');


module.exports = {
    Query: {
        trains: async (_, __ , context) => {
            const trains = []

            const response = await TrainModel.find()

            response.map(item =>{
                trains.push({
                    _id: item._id,
                    seatCapacity: item.train_Seat_Capacity,
                    freightCapacity: item.train_Freight_Capacity ,
                    model: item.train_Model,
                })
            })

            
            return trains
        }
     
    },
    Mutation: {
        deleteTrain: async (_, { id }, context) => {
            const response = await TrainModel.findByIdAndDelete(id)

            console.log({response})
            if(response){
                return true
            }else{
                throw new Error()
            }
        },
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
