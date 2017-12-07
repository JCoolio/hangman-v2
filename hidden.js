var hidden = function(let){
	this.charac = let;
	this.appear = false;
	this.hiddenRender = function(){
		return !(this.appear) ? "_" : this.charac;
	};
};


module.exports = hidden;
