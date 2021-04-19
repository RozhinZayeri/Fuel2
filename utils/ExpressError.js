// module.exports = {
// 	errorTest1: function(){
// 		// console.log('express error handling');
// 		return 'express error handling';
// 	}
// }

class ExpressError extends Error {
    constructor(message, statusCode) {
        super();
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports = ExpressError;