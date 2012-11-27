var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();

describe('#case1 - this keyword', function(){
	var cody = require('../case1');

	it('should points to object', function (done){
		cody.getGender().should.equal('male');
		done();
	});
});

describe('#case2 - this is context dependent', function(){
	var sayFoo = require('../case2');

	it('should say foo for function because "this" points to global', function(done){
		sayFoo().should.equal('foo');
		done();
	});

	it('should say I am myObject.foo for object because this points to the object', function(done){
		var myObject = { foo: 'I am myObject.foo', sayFoo: sayFoo};
		myObject.sayFoo().should.equal('I am myObject.foo');
		done();
	});
});

describe('#case3 - in nested function', function(){

	it('should point to myObject in first call and global in nested call', function(done){
		var myObject = {
		  func1:function() {
		  	 expect(this).to.deep.equal(myObject);
		     //console.log(this); //logs myObject
		     done();
		  }
		};

		myObject.func1();
	});

	it('should point to global in nested call', function(done){
		var myObject = {
		  func1:function() {
		  	 expect(this).to.deep.equal(myObject);
		     //console.log(this); //logs myObject
		     var func2=function() {
		     	var g = this;
		     	expect(this).not.to.deep.equal(myObject);
		     	expect(this).to.deep.equal(global);
		        //console.log(this); //logs window, and will do so from this point on
		        var func3=function() {
		        	expect(this).to.deep.equal(g);
		        	expect(this).to.deep.equal(global);
		        	done();
		           //console.log(this); //logs window, as it’s the head object
		        }();
		     }();
		  }
		};

		myObject.func1();
	});
});

describe('#case3 - when passing anonymous function', function(){
	it('should see', function(done){
		var foo = {
		  func1:function(bar){
		    bar(); //logs window, not foo
		    expect(this).to.deep.equal(foo);
			done();
		    //console.log(this);//the this keyword here will be a reference to foo object
		  }
		};
		foo.func1(function(){ expect(this).to.deep.equal(global) });
	});


});

describe('#case garcia', function(){

	var obj = require('../case_garcia');

	it('should return "A" when method A is called', function(done){
		obj.a().should.equal("A");
		done();
	});

	it('should return "AB" when method B is called', function(done){
		obj.b().should.equal("AB");
		done();
	});

	it('should return "CB" when method B is called and A is stubbed', function(done){
		obj.a = function(){
			return "C";
		}
		obj.b().should.equal("CB");
		done();
	});

});