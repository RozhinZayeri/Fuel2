
module.exports = {
	errorTest: function(){
		console.log('no name function cant test');
		// return 'hello';
	} 
}

module.exports = func => {
    return (req, res, next) => {
        func(req, res, next).catch(next);
    }
}
