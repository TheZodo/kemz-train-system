
const stationModal = require('../Modals/stationModal');


module.exports = {
    Query: {
     
    },
    Mutation: {
        addStation: async (_, { station }, context) => {
            const model = new stationModal()
            model.station_Name = station.name
            model.station_Description = station.descriotion
            

            const response = await model.save()

            if(response){
            return true
            }else{
                return false
            }

        }
    }
};
