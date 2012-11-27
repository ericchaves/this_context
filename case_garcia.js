module.exports = {
	a: function(){ return "A"},
	b: function(){ 
		return ( this.a() + "B")
	}
}