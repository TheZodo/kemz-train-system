const query = require("./query");
const mutation = require("./mutation");
const { userTypeDef } = require("../libs/auth");


/*##########################################################
 * types that are created should be added to this array
 ###########################################################*/
module.exports = [
   query,
   mutation,
   userTypeDef
];
