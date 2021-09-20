const query = require("./query");
const mutation = require("./mutation");
const { userTypeDef } = require("../libs/auth");
const train = require("./types/train");
const station = require("./types/station");
const schedule = require("./types/schedule");
const employee = require("./types/employee");


/*##########################################################
 * types that are created should be added to this array
 ###########################################################*/
module.exports = [
   query,
   mutation,
   userTypeDef,
   train,
   station,
   schedule,employee
];
