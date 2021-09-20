
const stationModal = require('../Modals/stationModal');


module.exports = {
    Query: {
     
        stations: async (_, __ , context) => {
            const stations = []

            const response = await stationModal.find()

            response.map(item =>{
                stations.push({
                    _id: item._id,
                    name: item.station_Name,
                    description: item.station_Description ,
                })
            })

            return stations
        }
     
    },
    Mutation: {
        deleteStation: async (_, { id }, context) => {
            const response = await stationModal.findByIdAndDelete(id)

            console.log({response})
            if(response){
                return true
            }else{
                throw new Error()
            }
        },
        addStation: async (_, { station }, context) => {
            const model = new stationModal()
            model.station_Name = station.name
            model.station_Description = station.description
            

            const response = await model.save()

            if(response){
            return true
            }else{
                return false
            }

        }
    }
};
