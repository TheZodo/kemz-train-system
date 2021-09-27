


const { userResolvers } = require('../libs/auth');
const employeeResolvers = require('./employeeResolvers');
const scheduleResolvers = require('./scheduleResolvers');
const stationResolvers = require('./stationResolvers');
const trainResolvers = require('./trainResolvers');
const ticketResolvers = require('./ticketResolvers');





/*##########################################################
 * resolvers that are created should be added to this array
 ###########################################################*/
module.exports = [
    userResolvers,
    trainResolvers,
    employeeResolvers,
    stationResolvers,
    scheduleResolvers,
    ticketResolvers
];