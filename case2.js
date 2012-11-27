// need to set foo in global space. 
// if we use var foo = 'foo' as the original article did it wouldn't be allocated in the global space due to nodejs modules
global.foo = 'foo';

var	sayFoo = function(){
		return this['foo'];
	}

module.exports = sayFoo;
