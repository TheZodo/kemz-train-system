


const { userResolvers } = require('../libs/auth');
const trainResolvers = require('./trainResolvers');




/*##########################################################
 * resolvers that are created should be added to this array
 ###########################################################*/
module.exports = [
    userResolvers,
    trainResolvers
];