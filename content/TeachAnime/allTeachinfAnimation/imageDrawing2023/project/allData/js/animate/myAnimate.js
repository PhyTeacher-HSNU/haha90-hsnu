(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.sliderButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(3,1,1).p("ACCAAQAAA2gmAmQgmAmg2AAQg1AAgngmQglgmAAg2QAAg1AlgmQAngmA1AAQA2AAAmAmQAmAmAAA1g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AhcBcQglgmAAg2QAAg1AlgmQAngmA1AAQA2AAAmAmQAmAmAAA1QAAA2gmAmQgmAmg2AAQg1AAgngmg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FFFF").ss(3,1,1).p("ACMAAQAAA6gpApQgpApg6AAQg5AAgqgpQgogpAAg6QAAg5AogpQAqgpA5AAQA6AAApApQApApAAA5g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AhjBiQgogoAAg6QAAg5AogoQAqgqA5AAQA6AAAoAqQAqAoAAA5QAAA6gqAoQgoAqg6AAQg5AAgqgqg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFF00").ss(3,1,1).p("ACCAAQAAA2gmAmQgmAmg2AAQg1AAgngmQglgmAAg2QAAg1AlgmQAngmA1AAQA2AAAmAmQAmAmAAA1g");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AhcBcQglgmAAg2QAAg1AlgmQAngmA1AAQA2AAAmAmQAmAmAAA1QAAA2gmAmQgmAmg2AAQg1AAgngmg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF00FF").s().p("AhpBpQgsgrAAg+QAAg9AsgrQAsgtA9AAQA+AAArAtQAtArAAA9QAAA+gtArQgrAtg+AAQg9AAgsgtg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,31,31);


(lib.sliderBGLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(5,1,1).p("ArtAAIXbAA");
	this.shape.setTransform(75,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.sliderBGLine, new cjs.Rectangle(-2.5,-2.5,155,5), null);


(lib.btnSquare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("AnznzIPnAAIAAPnIvnAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF00FF").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-51,102,102);


(lib.checker2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhNBOQggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgQAgAgAAAtQAAAuggAgQggAgguAAQgtAAggggg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.checker2, new cjs.Rectangle(-11,-11,22,22), null);


(lib.checker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(8,1,1).p("AiLgIIA4AAIAfCFIDAj5");
	this.shape.setTransform(2.25,-4.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.checker, new cjs.Rectangle(-15.7,-20.7,36,33), null);


(lib.btnObj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("AjHGQIAAsfIGPAAIAAMfg");
	this.shape.setTransform(0,-40);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-80,40,80);


(lib.arrowImgR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Ag3GVIAAnSIgsAAIBjlXIBkFXIgtAAIAAHSg");
	this.shape.setTransform(0,-40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrowImgR, new cjs.Rectangle(-10,-80.5,20,81), null);


(lib.arrowImgI = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.8)").s().p("Ag3GVIAAnSIgsAAIBjlXIBkFXIgtAAIAAHSg");
	this.shape.setTransform(0,-40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrowImgI, new cjs.Rectangle(-10,-80.5,20,81), null);


(lib.lens = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACJA/QAQgFAHgFQACgDACgEQABgDAAgIIgOAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAgyIABgBIBIAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIAAAyQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgUAAIAAAVQAAAEADAAIANAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAgBAAgBIABgNIAMAEQgCAUgDACQgDACgFAAIgYAAQgGAAAAgGIAAgfIgMAAIgCALIAAAEQgGAPgaAKgACjAYIAxAAIABgBIAAgJIgyAAgACjADIAyAAIAAgKIgyAAgAhMA9QANgFAEgGQAEgEABgGIAAgcQAAAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAAAIgPAAIAAgNIAbAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAAAIAAAmQABAFAEAFQAFAGALAEQAOACBNgEIgDAPIhKABQgegBgKgSQgDAFgGAHQgIAGgGACgABTA8IAZgFIAAgzIgUAAIAAgMIAUAAIAAgNIgRAAIAAgNIAtAAIAAANIgQAAIAAANIATAAIAAAMIgTAAIAAAvQALgEAHgEIAHAMQgVAKgkAIgAjiBGQgGAAAAgGIAAhIQABgFAEAAIAXAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBIAAgyQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAIBKAAQABAAABAAQAAAAABABQAAAAABABQAAAAAAABIAAAzQAAAAAAABQAAAAAAAAQAAAAABABQAAAAABAAIAWAAQAFAAAAAFIAABJQAAAFgFAAgAjaADIAAAxQABABAAABQAAAAABABQAAAAABAAQAAAAABAAIBqAAQABAAAAAAQABAAAAAAQAAgBABAAQAAgBAAgBIAAgxQAAAAAAgBQgBgBAAAAQAAAAgBgBQAAAAgBAAIgWAAQgEAAAAgDIAAgyQAAAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAAAIgyAAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAABAAAAIAAAzQAAABgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgXAAQgBAAgBABQAAAAgBAAQAAABgBAAQAAABAAAAgAAQA0IAAgOQAMAEALAAQAJgBACgCQACgEABgJIgBAAIgCgBIgVAAIgDgBIAAgCIAFgRIAAgBIgCgBIgPAAQgLAfgWARIgJgKQAMgIAHgKQAGgIADgMIgVAAIAAgLIA+AAIAEACIABADIgFAPIAAABIAUAAQAFABAAAEQgBAKgCAIQgDAOgHACQgGADgKAAQgJAAgMgDgABWAQIAMgBQAEAWABAJIgMABQgBgQgEgPgAB9AiQADgKABgLIALACIgEAWgAgngSQAXgFASgMIgkAAIAAgMIAqAAIAAgJQgVACgQgBIgBgMQA1AAAjgGIACAMQgLACgYACIgEABIAAAJIAtAAIAAAMIgkAAQAPALAaAGIgGALQgYgGgUgOIAAAPIgNAAIAAgNQgYAQgRADgAhKgaIAGgNQANAFAOAKIgHAMQgQgLgKgDgACPgaIAAgNIAUAAIgDgOIgPAAIAAgLIAhAAIAAgKIANAAIAAAKIAlAAIAAALIgQAAIgEAOIAXAAIAAANgACwgnIAUAAQAEgKAAgEIgcAAQADAJABAFgABTgtQAWgPAGgMIAMAAIAAADQAJAIAKAHIgKAKQgJgHgGgIQgMANgKAIgAhHg6IAFgNQANAFAPAKIgHAMQgQgKgKgEg");
	this.shape.setTransform(0.175,-220.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACJA/QAQgFAGgFQADgDACgEQABgDAAgIIgOAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAgyIABgBIBIAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAIAAAyQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgVAAIAAAVQABAEADAAIAMAAQABAAAAAAQAAAAAAAAQABgBAAAAQAAgBAAgBIAAgNIANAEQgCAUgEACQgCACgFAAIgZAAQgFAAAAgGIAAgfIgNAAIgBALIgBAEQgFAPgaAKgACjAYIAxAAIAAgBIAAgJIgxAAgACjADIAxAAIAAgKIgxAAgAhMA9QANgFAEgGQADgEACgGIAAgcQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAgBAAIgOAAIAAgNIAbAAQAAAAABABQABAAAAABQABAAAAABQAAAAAAAAIAAAmQABAFAEAFQAFAGAKAEQAOACBOgEIgDAPIhKABQgegBgLgSQgCAFgHAHQgHAGgGACgABTA8IAZgFIAAgzIgVAAIAAgMIAVAAIAAgNIgRAAIAAgNIAtAAIAAANIgQAAIAAANIASAAIAAAMIgSAAIAAAvQAKgEAIgEIAHAMQgVAKgkAIgAjjBEQgEAAAAgFIAAh/QAAgEAEAAIAuAAQAFAAAAAFIAAA0QAAAAAAABQAAAAABAAQAAABAAAAQABAAAAAAIAZAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAIAAg0QABgFAEAAIAtAAQAGAAgBAFIAAB9QABAGgGAAgAjZgzIAABmQAAABAAAAQAAAAABABQAAAAAAAAQABAAABAAIBqAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBAAAAIAAhmQAAAAAAgBQAAgBgBAAQAAAAgBgBQAAAAgBAAIgWAAQgBAAAAABQgBAAAAAAQgBABAAAAQAAABAAAAIAAAzQAAADgFAAIguAAQgEAAAAgDIAAgzQAAAAAAgBQgBgBAAAAQAAAAgBgBQAAAAgBAAIgWAAQgBAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABgAAPA0IAAgOQAMAEALAAQAKgBABgCQADgEABgJIgBAAIgCgBIgVAAIgDgBIAAgCIAEgRIAAgBIgBgBIgQAAQgKAfgWARIgKgKQANgIAHgKQAGgIADgMIgVAAIAAgLIA+AAIAEACIABADIgGAPIAAABIAVAAQAEABABAEQgBAKgCAIQgDAOgHACQgHADgJAAQgJAAgNgDgABWAQIAMgBQAEAWAAAJIgLABQgBgQgEgPgAB9AiQADgKABgLIALACIgEAWgAgngSQAXgFASgMIgkAAIAAgMIAqAAIAAgJQgWACgPgBIgCgMQA1AAAkgGIACAMQgMACgYACIgDABIAAAJIAtAAIAAAMIglAAQAPALAbAGIgGALQgYgGgUgOIAAAPIgNAAIAAgNQgYAQgRADgAhKgaIAGgNQAMAFAOAKIgHAMQgPgLgKgDgACPgaIAAgNIAUAAIgEgOIgOAAIAAgLIAhAAIAAgKIANAAIAAAKIAlAAIAAALIgQAAIgEAOIAWAAIAAANgACvgnIAUAAQAFgKAAgEIgcAAQADAJAAAFgABTgtQAWgPAGgMIAMAAIgBADQAKAIAKAHIgKAKQgJgHgGgIQgMANgKAIgAhHg6IAFgNQANAFAOAKIgGAMQgRgKgJgEg");
	this.shape_1.setTransform(0.2,-220.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACJA/QAQgFAHgFQACgDACgEQABgDAAgIIgOAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAgyIABgBIBIAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIAAAyQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgUAAIAAAVQAAAEADAAIANAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAgBAAgBIABgNIAMAEQgCAUgDACQgDACgFAAIgYAAQgGAAAAgGIAAgfIgMAAIgCALIAAAEQgGAPgaAKgACjAYIAxAAIABgBIAAgJIgyAAgACjADIAyAAIAAgKIgyAAgABTA8IAZgFIAAgzIgUAAIAAgMIAUAAIAAgNIgRAAIAAgNIAtAAIAAANIgQAAIAAANIATAAIAAAMIgTAAIAAAvQALgEAHgEIAHAMQgVAKgkAIgAA1BIIAAgGIhtAAIAAAGIgNAAIAAhqQAAgFAEAAIAuAAIAIgQIg+AAIAAgOICPAAIAAAOIhDAAQgBAEgDAHQAAADgCACIBAAAQAFAAAAAFIAABqgAAjA0IASAAIAAhLQAAgBAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAIgQAAgAgXA0IAsAAIAAgQIgsAAgAg4gXIAABLIATAAIAAhNIgRAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAABgAgXAWIAsAAIAAgRIgsAAgAgXgIIAsAAIAAgRIgsAAgAjiBGQgGAAAAgGIAAhIQABgFAEAAIAXAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBIAAgyQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAIBKAAQABAAABAAQAAAAABABQAAAAABABQAAAAAAABIAAAzQAAAAAAABQAAAAAAAAQAAAAABABQAAAAABAAIAWAAQAFAAAAAFIAABJQAAAFgFAAgAjaADIAAAxQABABAAABQAAAAABABQAAAAABAAQAAAAABAAIBqAAQAAAAABAAQABAAAAAAQAAgBABAAQAAgBAAgBIAAgxQAAAAAAgBQgBgBAAAAQAAAAgBgBQAAAAgBAAIgWAAQgEAAAAgDIAAgyQAAAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAAAIgyAAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAABAAAAIAAAzQAAABgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgXAAQgBAAgBABQAAAAgBAAQAAABgBAAQAAABAAAAgABWAQIAMgBQAEAWABAJIgMABQgBgQgEgPgAB9AiQADgKABgLIALACIgEAWgACPgaIAAgNIAUAAIgDgOIgPAAIAAgLIAhAAIAAgKIANAAIAAAKIAlAAIAAALIgQAAIgEAOIAXAAIAAANgACwgnIAUAAQAEgKAAgEIgcAAQADAJABAFgABTgtQAWgPAGgMIAMAAIAAADQAJAIAKAHIgKAKQgJgHgGgIQgMANgKAIg");
	this.shape_2.setTransform(25.175,-220.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACJA/QAQgFAGgFQADgDABgEQACgDAAgIIgOAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAgyIABgBIBIAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIAAAyQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgUAAIAAAVQgBAEAEAAIANAAQAAAAAAAAQAAAAAAAAQABgBAAAAQAAgBAAgBIABgNIALAEQgBAUgDACQgDACgFAAIgYAAQgGAAgBgGIAAgfIgMAAIgBALIAAAEQgGAPgbAKgACiAYIAyAAIABgBIAAgJIgzAAgACiADIAzAAIAAgKIgzAAgABTA8IAYgFIAAgzIgUAAIAAgMIAUAAIAAgNIgQAAIAAgNIAtAAIAAANIgQAAIAAANIATAAIAAAMIgTAAIAAAvQALgEAHgEIAGAMQgVAKgjAIgAA0BIIAAgGIhsAAIAAAGIgOAAIAAhqQABgFAEAAIAuAAIAIgQIg/AAIAAgOICQAAIAAAOIhDAAQgBAEgDAHQAAADgCACIBAAAQAFAAAAAFIAABqgAAjA0IARAAIAAhLQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAIgQAAgAgXA0IAsAAIAAgQIgsAAgAg4gXIAABLIATAAIAAhNIgRAAQgBAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABgAgXAWIAsAAIAAgRIgsAAgAgXgIIAsAAIAAgRIgsAAgAjjBEQgFAAAAgFIAAh/QABgEAEAAIAuAAQAFAAAAAFIAAA0QAAAAAAABQAAAAAAAAQABAAAAABQAAAAABAAIAaAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAAgBAAAAIAAg0QABgFAEAAIAtAAQAFAAAAAFIAAB9QAAAGgFAAgAjZgzIAABmQAAABAAAAQAAABABAAQAAAAAAAAQABAAAAAAIBqAAQABAAABAAQAAAAAAAAQABgBAAAAQAAgBAAAAIAAhmQAAgBAAAAQAAgBAAAAQgBAAAAgBQgBAAgBAAIgWAAQgBAAAAABQgBAAAAAAQgBABAAAAQAAABAAAAIAAAzQAAADgEAAIguAAQgFAAAAgDIAAgzQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAIgXAAQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABgABWAQIAMgBQAEAWABAJIgNABQAAgQgEgPgAB9AiQADgKABgLIALACIgEAWgACOgaIAAgNIAVAAIgEgOIgPAAIAAgLIAiAAIAAgKIANAAIAAAKIAlAAIAAALIgQAAIgEAOIAXAAIAAANgACwgnIAUAAQADgKAAgEIgbAAQADAJABAFgABTgtQAWgPAGgMIAMAAIAAADQAJAIAKAHIgKAKQgJgHgGgIQgMANgKAIg");
	this.shape_3.setTransform(-3.8,-215.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CCCCCC").ss(1,1,1,3,true).p("AgE3bIAJAAAAFXcIgJAA");
	this.shape_4.setTransform(5.7,-55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CCCCCC").ss(1,1,1,3,true).p("AAAfQUgFdgeaAFdggFUAFeAgFgFeAeag");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#CCCCCC","#666666","#CCCCCC"],[0,0.51,1],-17.5,0,17.5,0).s().p("AAA/PUAFeAgFgFeAeaUgFdgeaAFdggFg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#CCCCCC").ss(1,1,1,3,true).p("ACv/PIldAAUAD0AgFgD0AeaIFdAAUgD0geaAD0ggFg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#CCCCCC","#666666","#CCCCCC"],[0,0.51,1],-12.6,-28.6,11.8,-28.6).s().p("AiufQUAD0geagD0ggFIFdAAUgD0AgFAD0Aeag");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#CCCCCC").ss(1,1,1,3,true).p("ACvfQIjHAAQgFgkgGglQgKhDgJhCQgJhDgIhDQjO5XDQ6gQAIhDAJhDQAIhCAKhDQAFglAFgkIDHAA");
	this.shape_9.setTransform(17.5999,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FFFFFF","#999999"],[0,0.78],-17.5,0,17.5,0).s().p("AgYfQIgLhJIgTiFIgRiGQjO5YDP6fIASiGIASiFIAKhJIDHAAMAAAA+fg");
	this.shape_10.setTransform(17.5999,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#CCCCCC").ss(1,1,1,3,true).p("Ahj/PIC9AAIAKAAABkfQIgKAAIi9AA");
	this.shape_11.setTransform(-3.8,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#FFFFFF","#666666","#CCCCCC","#CCCCCC"],[0,1,1,1],-10,0,10,0).s().p("AhZfQIgKAAUAErgeagErggFIAKAAIC9AAMAAAA+fg");
	this.shape_12.setTransform(-4.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-227.5,75.5,428.5);


(lib.grid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("EAfQglfIAAGQIGQAAIGQAAIGQAAIAAGQIAAGQImQAAIAAGQIAAGQImQAAImQAAImQAAImQAAImQAAImQAAImQAAIAAGPIAAGQIAAGQIAAGQIAAGQIAAGQIAAGQImPAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAEAlgglfIAAGQIAAGQIAAGQImQAAIAAGQIAAGQIAAGPIAAGQIAAGQIAAGQIAAGQIAAGQIAAGQImQAAImQAAImQAAImQAAImQAAEAfQglfIGQAAIGQAAIAAGQIAAGQIAAGQImQAAIAAGQImQAAImQAAImQAAIAAGQIAAGPIAAGQIAAGQImQAAIAAGQIAAGQImQAAImQAAImPAAIAAGQIAAGQEAyAglfIAAGQIGQAAIGQAAIGQAAIGQAAIAAGQIAAGQImQAAIAAGQIAAGQImQAAImQAAImQAAImQAAIAAGPIAAGQIAAGQImQAAIAAGQIAAGQImQAAImQAAIAAGQIAAGQEArwglfIGQAAIGQAAIAAGQIAAGQIAAGQIAAGQIAAGQIAAGPIAAGQIAAGQIAAGQIAAGQIAAGQIAAGQImQAAImQAAImQAAImQAAEAGQglfIAAGQIGQAAIGQAAIGQAAIAAGQIAAGQImQAAIAAGQImQAAImQAAImQAAIAAGQImPAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAIAAmQIAAmQIAAmQIAAmQIAAmQIGQAAIAAGQIGQAAIGQAAIAAGQIAAGQImQAAIAAGQImQAAImQAAEAAAglfIAAGQIGQAAIAAGQImQAAIAAGQIAAGQImPAAImQAAIAAGQIAAGPIAAGQIAAGQIAAGQIAAGQImQAAIAAGQIAAGQEAAAglfIGQAAIGQAAIAAGQIAAGQIAAGQImQAAImQAAImPAAImQAAIAAGQImQAAImQAAIAAGQIAAGPIAAGQIAAGQIAAGQIAAGQIAAGQIAAGQEASwglfIAAGQIAAGQIAAGQImQAAIAAGQIAAGQIAAGPIAAGQImQAAIAAGQImQAAImPAAImQAAImQAAImQAAImQAAImQAAIAAGQIAAGQImQAAIAAGQIAAGQEAZAglfIAAGQIGQAAIAAGQIAAGQImQAAIAAGQIAAGQIAAGPIAAGQIAAGQImQAAIAAGQImQAAImQAAImQAAImPAAIAAGQImQAAIAAGQIAAGQEASwglfIGQAAIGQAAEAMgglfIGQAAAZA4/ImQAAImQAAImQAAIAAGQIAAGQIAAGQIAAGPIAAGQImQAAImPAAImQAAImQAAImQAAImQAAImQAAIAAGQImQAAImQAAIAAGQIAAGQIAAGQIAAGQEAyAgY/ImQAAImQAAImQAAImQAAEAlggMfIAAGQIAAGPIAAGQImQAAImQAAImQAAImQAAIAAGQImQAAIAAGQIAAGQIAAGQIAAGQEAyAgMfImQAAImQAAEAyAgMfIAAGQIAAGPIAAGQIAAGQImQAAIAAGQImQAAImQAAImQAAIAAGQImQAAImQAAIAAGQIAAGQEAyAgSvIAAGQAAA/PIAAGQImPAAIAAGQIAAGQIAAGQIAAGPIAAGQIAAGQIAAGQImQAAImQAAIAAGQImQAAImQAAIAAGQIAAGQEBRQglfIAAGQIGQAAIGQAAIGQAAIAAGQIAAGQImQAAIAAGQIAAGQImQAAImQAAImQAAImQAAIAAGPIAAGQIAAGQImQAAIAAGQIAAGQImQAAImQAAIAAGQIAAGQEBXgglfIAAGQIAAGQIAAGQImQAAIAAGQIAAGQIAAGPIAAGQIAAGQIAAGQIAAGQIAAGQIAAGQImQAAImQAAImQAAImQAAEBRQglfIGQAAIGQAAIAAGQIAAGQIAAGQImQAAIAAGQImQAAImQAAIAAGQIAAGPIAAGQIAAGQImQAAIAAGQImQAAImQAAImQAAIAAGQImQAAImQAAIAAGQIAAGQEBdwglfIGQAAIAAGQEA+gglfIAAGQIAAGQIAAGQImQAAImQAAEA4QglfIGQAAIGQAAIAAGQIAAGQIAAGQImQAAIAAGQImQAAImQAAEBLAglfIAAGQIGQAAIAAGQIAAGQImQAAIAAGQImQAAImQAAIAAGQIAAGPIAAGQImQAAImQAAImQAAImQAAIAAGQImQAAImQAAIAAGQImQAAIAAGQIAAGQIAAGQEBEwglfIGQAAIGQAAEBLAgY/ImQAAImQAAImQAAImQAAEBkAgY/ImQAAImQAAImQAAImQAAEBXggMfIAAGQIAAGPIAAGQImQAAImQAAImQAAImQAAIAAGQImQAAImQAAIAAGQImQAAIAAGQIAAGQIAAGQEBkAgMfImQAAImQAAEBkAgGPImQAAIAAGPIAAGQIAAGQImQAAIAAGQIAAGQImQAAImQAAIAAGQIAAGQEBkAgMfIAAGQIAAGPIAAGQIAAGQImQAAIAAGQImQAAImQAAImQAAIAAGQImQAAImQAAIAAGQIAAGQEBkAgSvIAAGQEBkAAGQImQAAImQAAIAAGQImQAAImQAAIAAGQImQAAIAAGQIAAGQIAAGQEBkAAAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAImPAAImQAAImQAAIAAGQIAAGQIAAGQImQAAImQAAIAAGQImQAAIAAGQIAAGQEBdwASwIAAGQImQAAIAAGQIAAGQImQAAEBkAASwIAAGQImQAAIAAGQIAAGQImQAAEBkAASwImQAAEBkAAMgIAAGQEBLAAfQImQAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAImPAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAIAAGQEBkAAfQIAAGQImQAAEBkAAfQImQAAImQAAImQAAImQAAEBkAAZAIAAGQEhK/glfIAAGQIGQAAIGQAAIGQAAIAAGQIAAGQImQAAIAAGQImQAAImQAAIAAGQIAAGPIAAGQIAAGQIAAGQIAAGQIAAGQIAAGQEhEvglfIAAGQIAAGQIAAGQImQAAIAAGQImQAAImQAAIAAGQIAAGPIAAGQIAAGQIAAGQIAAGQImQAAIAAGQIAAGQImQAAIAAmQIAAmQIAAmQIAAmQEhK/glfIGQAAIGQAAIAAGQIAAGQIAAGQImQAAIAAGQIAAGQIAAGPIAAGQImQAAImQAAImQAAImQAAImQAAIAAmQIAAmPEg4PglfIAAGQIGQAAIGQAAIGQAAIGQAAIAAGQIAAGQImQAAIAAGQImQAAImQAAIAAGQIAAGPIAAGQIAAGQImQAAImQAAIAAGQIAAGQImQAAIAAGQIAAGQEg+fglfIGQAAIGQAAIAAGQIAAGQIAAGQIAAGQImQAAImQAAIAAGQIAAGPIAAGQIAAGQImQAAImQAAImQAAImQAAImQAAImQAAIAAmQEhj/gfPIGQAAIAAGQIAAGQImQAAEhXfglfIAAGQIAAGQIAAGQImQAAIAAGQIAAGQIAAGPIAAGQIAAGQIAAGQIAAGQImQAAEhRPglfIAAGQIGQAAIAAGQIAAGQImQAAIAAGQIAAGQIAAGPIAAGQIAAGQIAAGQIAAGQImQAAIAAGQIAAGQEhXfglfIGQAAIGQAAEhdvglfIGQAAEhRPgY/ImQAAImQAAImQAAEg4PgY/ImQAAImQAAImQAAImQAAEg4PgMfIAAGQIAAGPIAAGQImQAAImQAAIAAGQIAAGQIAAGQImQAAImQAAIAAGQIAAGQEg4PgSvIAAGQEgY/glfIAAGQIGQAAIGQAAIGQAAIAAGQImQAAIAAGQImQAAImQAAIAAGQImQAAImQAAIAAGQIAAGPIAAGQImQAAImQAAImQAAIAAGQIAAGQIAAGQImQAAIAAGQIAAGQEgSvglfIAAGQIAAGQIAAGQIAAGQIAAGQIAAGPImQAAImQAAIAAGQIAAGQIAAGQImQAAImQAAIAAGQImQAAImQAAIAAGQImQAAImQAAImQAAImQAAImQAAImQAAImQAAEgY/glfIGQAAIGQAAIAAGQIAAGQImQAAImQAAIAAGQImQAAIAAGQIAAGQIAAGPImQAAImQAAIAAGQIAAGQIAAGQImQAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAEgGPglfIAAGQIGPAAEgMfglfIGQAAIGPAAEgrvglfIAAGQIAAGQIAAGQImQAAImQAAEgx/glfIGQAAIGQAAIAAGQIAAGQIAAGQImQAAIAAGQIAAGQIAAGPImQAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAImQAAEgfPglfIAAGQIGQAAIAAGQImQAAImQAAImQAAImQAAImQAAEglfglfIGQAAIGQAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.grid, new cjs.Rectangle(-641,-241,1282,482), null);


(lib.colorPointer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(8,1,1).p("AiLgIIA4AAIAfCFIDAj5");
	this.shape.setTransform(-1.55,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("AhTgwIg4AAQgRAAgLAMQgMALAAARQAAAQAMALQALAMARAAIAYAAIAYBnQAEAPANAJQANAJAPgCQAQgDAKgMIDAj5QAKgOgCgQQgDgRgNgKQgNgKgQACQgRACgKAOIiMC2IgMgzQgDgOgLgIQgLgJgOAAg");
	this.shape_1.setTransform(-1.5441,3.0978);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhKCeQgNgJgEgPIgYhnIgYAAQgRAAgLgMQgMgLAAgQQAAgRAMgLQALgMARAAIA4AAQAOAAALAJQALAIADAOIAMAzICMi2QAKgOARgCQAQgCANAKQANAKADARQACAQgKAOIjAD5QgKAMgQADIgGAAQgMAAgKgHg");
	this.shape_2.setTransform(-1.5441,3.0978);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.colorPointer, new cjs.Rectangle(-21,-14.9,39,36), null);


(lib.colorBox5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99FF99").s().p("AjHDIIAAmPIGPAAIAAGPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20,40,40);


(lib.colorBox4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FFFF").s().p("AjHDIIAAmPIGPAAIAAGPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20,40,40);


(lib.colorBox3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3333").s().p("AjHDIIAAmPIGPAAIAAGPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20,40,40);


(lib.colorBox2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF66").s().p("AjHDIIAAmPIGPAAIAAGPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20,40,40);


(lib.colorBox1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjHDIIAAmPIGPAAIAAGPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20,40,40);


(lib.btnUndo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAsIg7A8IgsgsIA8g8Ig8g7IAsgsIA7A8IA8g8IAsAsIg8A7IA8A9IgrArg");
	this.shape.setTransform(5.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag1DIIjEjIIDAjHIEzAAIAAGPg");
	this.shape_1.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FFFF").ss(3,1,1).p("AjHkrIGPAAQBkAAAABkIAAGPQAABkhkAAImPAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#0066FF"],[0,1],30,30,30,-29.9).s().p("AjHEsQhkAAAAhkIAAmPQAAhkBkAAIGPAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000066","#00FFFF"],[0,1],30,30,30,-29.9).s().p("AjHEsQhkAAAAhkIAAmPQAAhkBkAAIGPAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF00FF").ss(3,1,1).p("AjHkrIGPAAQBkAAAABkIAAGPQAABkhkAAImPAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF00FF").s().p("AjHEsQhkAAAAhkIAAmPQAAhkBkAAIGPAAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2,p:{rotation:0}}]}).to({state:[{t:this.shape_4,p:{rotation:0}},{t:this.shape_2,p:{rotation:0}}]},1).to({state:[{t:this.shape_4,p:{rotation:180}},{t:this.shape_2,p:{rotation:180}}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-31.5,63,63);


(lib.btnDrawArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("EhljgnDMDLHAAAMAAABOHMjLHAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FFFF").s().p("Ehj/AlgMAAAhK/MDH/AAAMAAABK/g");
	this.shape_1.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-651.5,-251.5,1303,503);


(lib.btnClear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAzCRIAAgdQAlAJAIgFQAHgFgBgIIAAgHIiCAAIAAAtIgaAAIAAiWQACgHAEAAICqAAQAHACAAAFIAAB8QAAAPgMAIQgLAHgTAAQgPAAgVgEgAgcBMICCAAIAAgVIiCAAgAgcAOIAAARICCAAIAAgRQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIh/AAQgBABAAAAQgBAAAAAAQAAABAAAAQgBAAAAABgAiTCDQAlhIALgvIAaAIQgNA0gkBIgAiTgnIAPgYQAWANAeAUIgQAXQgegXgVgJgAhGgbIAAgZIBbAAIAAgQIhMAAIAAgWIBMAAIAAgSIhYAAIAAgWIBYAAIAAgSIAcAAIAAASIBaAAIAAAWIhaAAIAAASIBQAAIAAAWIhQAAIAAAQIBiAAIAAAZgAiOh3IAOgYQAYAOAeAYIgQAWQgggZgUgLg");
	this.shape.setTransform(0.15,-0.05,1.4,1.4,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FFFF").ss(3,1,1).p("AjHkrIGPAAQBkAAAABkIAAGPQAABkhkAAImPAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000066","#0066FF"],[0,1],30,30,30,-29.9).s().p("AjHEsQhkAAAAhkIAAmPQAAhkBkAAIGPAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#00FFFF"],[0,1],30,30,30,-29.9).s().p("AjHEsQhkAAAAhkIAAmPQAAhkBkAAIGPAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF00FF").ss(3,1,1).p("AjHkrIGPAAQBkAAAABkIAAGPQAABkhkAAImPAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("AjHEsQhkAAAAhkIAAmPQAAhkBkAAIGPAAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{rotation:0}}]}).to({state:[{t:this.shape_3,p:{rotation:0}},{t:this.shape_1,p:{rotation:0}}]},1).to({state:[{t:this.shape_3,p:{rotation:180}},{t:this.shape_1,p:{rotation:180}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-31.5,63,63);


(lib.dragMe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFPBtQgMgNgKgWIgBABQgeAfgoAJIgLgVQApgJAfgfQgLghgJgzIhAAAIAAAsQAUgHAQgIIAKATQgSAJgZAIIgDACIAAA3QAAAQgNAHQgPAIglgKIAAgYQAfALAJgHQACgDAAgEIAAgrIguAMIgJgWQAggHAXgGIAAgyIg2AAIAAgXIA2AAIAAgeIgsAGIgHgVQBDgHAogPIAIAUQgSAIgWAEIgBAAIAAAjIA+AAQgEgeAAglIAWACQAAAjACAeIBNAAIAAAXIhLAAQAIAqAHAXQANgWAKghIAVAIQgNAmgWAgQAFAMAHAJQAIANAFAAQACgBABgDQACgKABgZIAXAHQgGAvgKAJQgFAEgFABQgKAAgKgMgABdB5QghgFgdgcQgtAYhgAHIgGgXIAggCQBBgHAkgQIgBgBQgOgTgFgWIhhAAQgDAAAAgEIAAh1QAAgBABgBQAAAAAAgBQABAAAAAAQABAAAAAAIBVAAIAAgXIAWAAIAAAXIBeAAQADAAAAADIAAB1QAAAEgDAAIhSAAQAGAQAMAPIAjgXIAOASIghAWQAVATANAAQAFAAACgEQADgEAEgfIAVAGQgFAwgNAGQgFAEgEAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQAAAAAAABgAAMAHIBFAAIACgBIAAgbIhLAAQABAQADAMgAgJAHQgEgPgBgNIhDAAIAAAbQAAAAABABQAAAAAAAAQAAAAAAAAQABAAAAAAIBGAAIAAAAgAAHguIAAACIBMAAIAAgcIgCgBIhKAAgAhRhIIAAAcIBCAAIAAgdIhAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBABAAAAgAl7ByIAAgYQAVAIAEgEQACgDAAgEIAAgwIgOAIIgOgSIAcgPIAAg9IgaAAIAAgWIAaAAIAAgyIAXAAIAAAyIAWAAIAAAWIgWAAIAAAvIAMgKIAPAPQgOANgNAHIAABEQAAAQgNAHQgEACgHAAQgKAAgQgEgAkABzQgJgBgHgHQgHgHAAgIIAAhQIgOAGIgKgTIAYgJIAAgjIAXAAIAAAbIAhgLIAAgoIAWAAIAAAfIApgOIAMAGIAABTQAAANgHAGQgFAFgJgBIgWgBIgEgYQAVAEACgBQABgBAAAAQABAAAAgBQAAAAAAgBQABAAAAgBIAAg3QgBgBAAgBQgBgBAAAAQgBAAAAAAQAAgBgBABIgcAKIAABcIgWAAIAAhUIghAKIAABLQAAAFADAEQAFADAEAAIBLAAQADABADgDQACgCACgYIAWAEQgDAkgDADQgKAJgGAAgAk4gnQAcgiAIguIAVAEQgBAJgDAIIB2AAIAAAWIh9AAQgKAcgQATgAE7hgIANgTIAvAhIgOARQgZgVgVgKg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AFPBtQgMgNgKgWIgBABQgeAfgoAJIgLgVQApgJAfgfQgLghgJgzIhAAAIAAAsQAUgHAQgIIAKATQgSAJgZAIIgDACIAAA3QAAAQgNAHQgPAIglgKIAAgYQAfALAJgHQACgDAAgEIAAgrIguAMIgJgWQAggHAXgGIAAgyIg2AAIAAgXIA2AAIAAgeIgsAGIgHgVQBDgHAogPIAIAUQgSAIgWAEIgBAAIAAAjIA+AAQgEgeAAglIAWACQAAAjACAeIBNAAIAAAXIhLAAQAIAqAHAXQANgWAKghIAVAIQgNAmgWAgQAFAMAHAJQAIANAFAAQACgBABgDQACgKABgZIAXAHQgGAvgKAJQgFAEgFABQgKAAgKgMgABdB5QghgFgdgcQgtAYhgAHIgGgXIAggCQBBgHAkgQIgBgBQgOgTgFgWIhhAAQgDAAAAgEIAAh1QAAgBABgBQAAAAAAgBQABAAAAAAQABAAAAAAIBVAAIAAgXIAWAAIAAAXIBeAAQADAAAAADIAAB1QAAAEgDAAIhSAAQAGAQAMAPIAjgXIAOASIghAWQAVATANAAQAFAAACgEQADgEAEgfIAVAGQgFAwgNAGQgFAEgEAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQAAAAAAABgAAMAHIBFAAIACgBIAAgbIhLAAQABAQADAMgAgJAHQgEgPgBgNIhDAAIAAAbQAAAAABABQAAAAAAAAQAAAAAAAAQABAAAAAAIBGAAIAAAAgAAHguIAAACIBMAAIAAgcIgCgBIhKAAgAhRhIIAAAcIBCAAIAAgdIhAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBABAAAAgAl7ByIAAgYQAVAIAEgEQACgDAAgEIAAgwIgOAIIgOgSIAcgPIAAg9IgaAAIAAgWIAaAAIAAgyIAXAAIAAAyIAWAAIAAAWIgWAAIAAAvIAMgKIAPAPQgOANgNAHIAABEQAAAQgNAHQgEACgHAAQgKAAgQgEgAkABzQgJgBgHgHQgHgHAAgIIAAhQIgOAGIgKgTIAYgJIAAgjIAXAAIAAAbIAhgLIAAgoIAWAAIAAAfIApgOIAMAGIAABTQAAANgHAGQgFAFgJgBIgWgBIgEgYQAVAEACgBQABgBAAAAQABAAAAgBQAAAAAAgBQABAAAAgBIAAg3QgBgBAAgBQgBgBAAAAQgBAAAAAAQAAgBgBABIgcAKIAABcIgWAAIAAhUIghAKIAABLQAAAFADAEQAFADAEAAIBLAAQADABADgDQACgCACgYIAWAEQgDAkgDADQgKAJgGAAgAk4gnQAcgiAIguIAVAEQgBAJgDAIIB2AAIAAAWIh9AAQgKAcgQATgAE7hgIANgTIAvAhIgOARQgZgVgVgKg");
	this.shape_1.setTransform(0,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("AkXAMIAABQQAAAIAHAHQAHAHAJABIBgAAQAHAAAKgJQADgDADgkIgXgEQgBAYgCACQgEADgDgBIhKAAQgEAAgFgDQgDgEAAgFIAAhLIAggKIAABUIAXAAIAAhcIAcgKQABgBACAEIAAA3QAAADgCABQgDABgUgEIAEAYQAMABAJAAQAKABAFgFQAGgGABgNIAAhTIgNgGIgoAOIAAgfIgXAAIAAAoIggALIAAgbIgXAAIAAAjIgZAJIAKATgAkKhMIB9AAIAAgWIh2AAQADgIABgJIgWgEQgHAugcAiIAUAKQAPgTALgcgAlgAOQgMAGgQAJIANASQAHgDAIgFIAAAwQAAAEgCADQgEAEgVgIIAAAYQAbAHAKgFQANgHAAgQIAAhEQANgHANgNIgOgPQgGAGgGAEIAAgvIAWAAIAAgWIgWAAIAAgyIgXAAIAAAyIgaAAIAAAWIAaAAgAEvA2QgfAfgpAJIALAVQAogJAegfIABgBQAKAWAMANQAKAMAKAAQAEgBAFgEQALgJAGgvIgXgHQAAAZgEAKQgBADgCABQgDAAgJgNQgHgJgFgMQAVggANgmIgUgIQgKAhgNAWQgHgXgIgqIBLAAIAAgXIhNAAQgDgeAAgjIgVgCQAAAlADAeIg+AAIAAgjIABAAQAWgEATgIIgIgUQgoAPhDAHIAHAVQAWgDAWgDIAAAeIg2AAIAAAXIA2AAIAAAyQgXAGggAHIAJAWQAWgGAYgGIAAArQAAAEgCADQgJAHgggLIAAAYQAmAKAPgIQAMgHAAgQIAAg3QABgBADgBQAZgIASgJIgKgTQgQAIgVAHIAAgsIBAAAQAJAzAMAhgAAHguIAAgbIBKAAIABABIAAAcIhLAAQAAgBAAgBgAAHhfIAAgXIgXAAIAAAXIhUAAQgDAAAAADIAAB1QAAAEADAAIBhAAQAFAWAOATIABABQglAQhAAHQgNAAgTACIAGAXQBggHAtgYQAdAcAgAFQABgBACABQAEAAAFgEQANgGAFgwIgWgGQgDAfgDAEQgDAEgEAAQgNAAgVgTQANgJATgNIgNgSQgTANgRAKQgMgPgGgQIBSAAQAEAAAAgEIAAh1QAAgDgEAAgAAIgVIBKAAIAAAbIgBABIhFAAQgDgMgBgQgAgQhJIAAAdIhBAAIAAgcQAAgBACAAgAgJAHIhGAAQgCAAAAgBIAAgbIBDAAQABANAEAPgAE7hgQAVAKAYAVIAPgRQgKgGglgbg");
	this.shape_2.setTransform(0,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AFPBtQgMgNgKgWIgBABQgdAfgoAJIgMgVQApgJAfgfQgLghgKgzIg/AAIAAAsQAUgHAQgIIAKATQgSAJgZAIIgDACIAAA3QAAAQgNAHQgPAIglgKIAAgYQAfALAJgHQACgDAAgEIAAgrIguAMIgJgWQAggHAXgGIAAgyIg2AAIAAgXIA2AAIAAgeIgrAGIgIgVQBDgHAogPIAIAUQgSAIgXAEIAAAAIAAAjIA+AAQgDgegBglIAWACQAAAjACAeIBNAAIAAAXIhLAAQAIAqAHAXQANgWAKghIAVAIQgNAmgWAgQAFAMAHAJQAIANAFAAQAAAAAAAAQABgBAAAAQABgBAAAAQAAgBAAgBQADgKABgZIAXAHQgGAvgLAJQgFAEgEABQgKAAgKgMgABdB5QghgFgdgcQgtAYhgAHIgGgXIAggCQBBgHAlgQIgCgBQgOgTgFgWIhhAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBgBAAgBIAAh1QAAgBABgBQAAAAAAgBQABAAAAAAQABAAAAAAIBVAAIAAgXIAWAAIAAAXIBeAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAABIAAB1QAAAEgDAAIhSAAQAFAQANAPIAjgXIANASIggAWQAVATANAAQAFAAACgEQAEgEADgfIAVAGQgFAwgNAGQgEAEgFAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQAAAAAAABgAAMAHIBFAAIACgBIAAgbIhLAAQABAQADAMgAgJAHQgEgPgBgNIhCAAIAAAbQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIBGAAIAAAAgAAHguIAAACIBMAAIAAgcIgCgBIhKAAgAhQhIIAAAcIBBAAIAAgdIhAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAgAl7ByIAAgYQAVAIAEgEQACgDAAgEIAAgwIgOAIIgOgSIAcgPIAAg9IgaAAIAAgWIAaAAIAAgyIAXAAIAAAyIAWAAIAAAWIgWAAIAAAvIAMgKIAPAPQgOANgNAHIAABEQAAAQgMAHQgFACgHAAQgKAAgQgEgAkABzQgJgBgHgHQgHgHABgIIAAhQIgPAGIgKgTIAZgJIAAgjIAWAAIAAAbIAhgLIAAgoIAWAAIAAAfIApgOIAMAGIAABTQAAANgHAGQgFAFgJgBIgWgBIgEgYQAVAEACgBQABAAAAgBQABAAAAgBQAAAAAAgBQABgBAAAAIAAg3QgBgBAAgBQgBgBAAAAQgBAAAAAAQAAAAgBAAIgcAKIAABcIgWAAIAAhUIghAKIAABLQAAAFADAEQAFADAEAAIBLAAQACABAEgDQADgCABgYIAWAEQgDAkgDADQgKAJgGAAgAk4gnQAcgiAIguIAVAEQgBAJgDAIIB2AAIAAAWIh9AAQgKAcgQATgAE7hgIANgTIAvAhIgOARQgZgVgVgKg");
	this.shape_3.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dragMe, new cjs.Rectangle(-39.6,-13.5,79.2,27.1), null);


(lib.theSlider = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//老師寫的slider，不要修改
		//外部使用變數名稱
		//maximum    最大值number
		//minimum    最小值number
		//value      現在值number
		var sl=this;
		//內部變數
		sl.len = 150;
		sl.min = 0;
		sl.max = 100;
		sl.val = 0;
		sl.btnS.alpha=0;
		sl.digitN=0;
		//event
		sl.on('mousedown',function(e){
									//按下設值
									var localX = e.stageX - sl.x;
									setValue(sl,localX);
								});
		sl.on('pressmove',function(e){
									//拖曳設值
									var localX = e.stageX - sl.x;
									setValue(sl,localX);
								});
		//setValue from localX
		var setValue = function(who,localX){
			var lx=localX;
			if(lx<0){lx=0;}
			else if(lx>who.len){lx=who.len;}
			who.btn.x=lx;
			who.val = who.min+lx/who.len*(who.max-who.min);
			who.valueText.text = digitN(who.val , who.digitN);
		}
		//digitN 將數字取到小數點第N位，變成文字傳回
		var digitN = function( num, n){
			var pn=num<0?"-":"";
			num=Math.abs(num);
			if(n>0){
				var str = String(Math.round(num*Math.pow(10,n)));
				if(str.length<(n+1)){//補位數
					var tempN=n+1-str.length;
					for(var i=0;i<tempN;i++){
						str = "0"+str;
					}
				}
				str = pn+str.substr(0, str.length-n) + "." + str.substr(str.length-n);
			}else{
				var str = pn+String(Math.round(num));
			}
			return str;
		}
		//set value form js
		Object.defineProperty(sl, 'value', {
										    get: function() {
													return sl.val;
											    },
											set: function(_val) {
											        sl.val=_val;
												    if(sl.val>sl.max){sl.val=sl.max;}
												    else if(sl.val<sl.min){sl.val=sl.min;}
												    sl.btn.x=sl.len*(sl.val-sl.min)/(sl.max-sl.min);
													sl.valueText.text = digitN(sl.val , sl.digitN);
												}
									});
		//set length
		Object.defineProperty(sl, 'length', {
										    get: function() {
										        return sl.len;
										    },
										    set: function(_len) {
										        sl.len=_len;
										        sl.bgLine.scaleX=sl.len/150;
										        sl.btn.x=sl.len*(sl.val-sl.min)/(sl.max-sl.min);
										        //btnS
										        sl.btnS.scaleX=(sl.len+30)/100;
												sl.btnS.x=sl.len/2;
												sl.valueText.x = sl.len+20;
										    }
							});
		//set maximum
		Object.defineProperty(sl, 'maximum', {
										    get: function() {
										        return sl.max;
										    },
										    set: function(_max) {
										        sl.max=_max;
										        if(sl.val>sl.max){sl.val=sl.max;}
										        sl.btn.x=sl.len*(sl.val-sl.min)/(sl.max-sl.min);
												sl.valueText.text = digitN(sl.val , sl.digitN);
										    }
							});
		//set minimum
		Object.defineProperty(sl, 'minimum', {										
										    get: function() {
										        return sl.min;
										    },
										    set: function(_min) {
										        sl.min=_min;
										        if(sl.val<sl.min){sl.val=sl.min;}
										        sl.btn.x=sl.len*(sl.val-sl.min)/(sl.max-sl.min);
												sl.valueText.text = digitN(sl.val , sl.digitN);
										    }
							});
		//set valueText visible
		Object.defineProperty(sl, 'isValueText', {										
										    get: function() {
										        return sl.valueText.visible;
										    },
										    set: function(is) {
										        sl.valueText.visible=is;
										    }
							});
		//set label visible
		Object.defineProperty(sl, 'isLabel', {										
										    get: function() {
										        return sl.label.visible;
										    },
										    set: function(is) {
										        sl.label.visible=is;
										    }
							});
		//set label
		sl.setLabel = function(_text , _outline){
					sl.label.text = _text;
					sl.label.outline = _outline||0;
					}
		//sl help
		sl.help=function(){
			var str1="老師寫的slider，不要修改，\n外部使用變數名稱：\n maximum最大值number，\n minimum最小值number，\n value現在值number";
			var str2="\n length線長度 \n digitN顯示到小數點第N位(預設0) \n isLabel是否顯示文字標籤 \n isValueText是否顯示數字";
			var str3="\n 修改文字標籤：setLabel('文字',outline數字)"
			
			console.log(str1+str2+str3);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.label = new cjs.Text("文字標籤", "26px 'Microsoft JhengHei'", "#FFFFFF");
	this.label.name = "label";
	this.label.textAlign = "right";
	this.label.lineHeight = 37;
	this.label.lineWidth = 146;
	this.label.parent = this;
	this.label.setTransform(-27,-17.25);

	this.valueText = new cjs.Text("0", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(172,-14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.valueText},{t:this.label}]}).wait(1));

	// btn
	this.btn = new lib.sliderButton();
	this.btn.name = "btn";
	this.btn.parent = this;
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.sliderButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// btnS
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(74.95,0,1.8,0.3);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// line
	this.bgLine = new lib.sliderBGLine();
	this.bgLine.name = "bgLine";
	this.bgLine.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bgLine).wait(1));

}).prototype = getMCSymbolPrototype(lib.theSlider, new cjs.Rectangle(-175,-19.2,449,38.5), null);


(lib.theCheckbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//老師寫的checkBox，不要修改
		//外部可用變數：checked
		//修改文字標籤：setLabel("文字",outline數字)
		var ch=this;
		ch.stop();
		ch.ched=false;
		ch.checker.visible=ch.ched;
		ch.btnS.alpha=0;
		//click
		ch.on('click',function(e){
								//按下設值
								ch.ched=!ch.ched;
								ch.checker.visible=ch.ched;
							});
		//set label
		ch.setLabel = function(_text , _outline){
					ch.label.text = _text;
					ch.label.outline = _outline||0;
					
					var rect=ch.label.getBounds();
					ch.btnS.scaleX=(ch.label.x+rect.width+20)/100;
					ch.btnS.x=(ch.label.x+rect.width-20)/2;
					}
		
		//checked
		Object.defineProperty(this, 'checked', {
										    get: function() {
									        return ch.ched;
										    },
										    set: function(_ched) {
										        ch.ched=_ched;
										        ch.checker.visible=ch.ched;
										    }
								});
		//ch help
		ch.help = function(){
			var str="老師寫的checkBox，不要修改\n 外部可用變數：checked \n 修改文字標籤：setLabel('文字',outline數字)";
			console.log(str);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btnS
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(59.2,0,1.6384,0.3399,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("AiViVIErAAIAAErIkrAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AiVCWIAAkrIErAAIAAErg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.label = new cjs.Text("文字標籤", "26px 'Microsoft JhengHei'", "#FFFFFF");
	this.label.name = "label";
	this.label.lineHeight = 37;
	this.label.lineWidth = 132;
	this.label.parent = this;
	this.label.setTransform(24,-18.6);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

}).prototype = getMCSymbolPrototype(lib.theCheckbox, new cjs.Rectangle(-23.8,-20.7,181.9,38.7), null);


(lib.rbLen4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//老師寫的checkBox，不要修改
		//外部可用變數：checked
		//修改文字標籤：setLabel("文字",outline數字)
		var ch=this;
		ch.stop();
		ch.ched=false;
		ch.checker.visible=ch.ched;
		ch.btnS.alpha=0;
		//click
		ch.on('click',function(e){
								//按下設值
								ch.ched=!ch.ched;
								ch.checker.visible=ch.ched;
							});
		//set label
		ch.setLabel = function(_text , _outline){
					ch.label.text = _text;
					ch.label.outline = _outline||0;
					
					var rect=ch.label.getBounds();
					ch.btnS.scaleX=(ch.label.x+rect.width+20)/100;
					ch.btnS.x=(ch.label.x+rect.width-20)/2;
					}
		
		//checked
		Object.defineProperty(this, 'checked', {
										    get: function() {
									        return ch.ched;
										    },
										    set: function(_ched) {
										        ch.ched=_ched;
										        ch.checker.visible=ch.ched;
										    }
								});
		//ch help
		ch.help = function(){
			var str="老師寫的checkBox，不要修改\n 外部可用變數：checked \n 修改文字標籤：setLabel('文字',outline數字)";
			console.log(str);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btnS
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(59.2,0,1.6384,0.3399,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsAsQgsAsg+AAQg+AAgrgsQgsgsAAg+QAAg9AsgsQArgsA+AAQA+AAAsAsQAsAsAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhqBqQgrgsAAg+QAAg9ArgsQAtgsA9AAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAQg9AAgtgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AEBB3QAegJAMgLQAEgFAEgGQACgGAAgPIgZAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAgBIAAhfQABgBAAAAQAAgBAAAAQABAAAAAAQAAgBABAAICHAAQAAABABAAQABAAAAABQABAAAAAAQAAABAAAAIAABfQAAABAAABQAAAAgBABQAAAAgBAAQgBABAAAAIgoAAIAAAnQAAAHAHABIAYAAQABABACgIQAAgGAAgSIAXAHQgCAmgIADQgGAFgHgBIguAAQgMAAAAgLIAAg5IgWAAIgCAUIgBAHQgLAdgyARgAExAtIBcAAIABgBIAAgSIhdAAgAExAGIBdAAIAAgTIhdAAgACcByIAtgLIAAhfIglAAIAAgWIAlAAIAAgaIgeAAIAAgYIBUAAIAAAYIgeAAIAAAaIAjAAIAAAWIgjAAIAABYQAUgIAOgHIALAWQgmAShDAPgABiCHIAAgLIjMAAIAAALIgaAAIAAjIQAAgIAJAAIBXAAIAPgeIh1AAIAAgaIEOAAIAAAaIh+AAQgDAHgFAMQgBAGgEAFIB6AAQAJAAAAAIIAADIgABBBiIAhAAIAAiOQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBAAgBAAIgeAAgAgtBiIBVAAIAAgeIhVAAgAhqgsIAACOIAjAAIAAiRIgfAAQgFAAABADgAgtAqIBVAAIAAghIhVAAgAgtgQIBVAAIAAgfIhVAAgAmqB/QgJABAAgJIAAjvQABgIAIAAIBWAAQAJABAAAIIAABiQAAAAABABQAAABAAAAQABABAAAAQABAAABAAIAwAAQABAAAAAAQABAAAAgBQAAAAAAgBQAAgBAAAAIAAhiQACgJAHAAIBVAAQALAAAAAKIAADrQAAALgLgBgAmYhhIAADCQAAADAEAAIDIAAQAEAAABgEIAAi/QABgHgHABIgpAAQgGABAAAFIAABeQAAAIgJAAIhWAAQgIAAAAgIIAAheQgBgHgFABIgrAAQgEAAAAAEgAChAeIAXgDQAHArABASIgWAAQgBgdgIgdgADqBAQAHgSABgWIAUAFIgHApgAELgyIAAgXIAnAAIgHgaIgdAAIAAgWIBAAAIAAgSIAZAAIAAASIBFAAIAAAWIgfAAIgHAaIAqAAIAAAXgAFKhJIAlAAQAHgTAAgHIgzAAQAFAPACALgACchVQApgcAKgXIAYAAIgBAGQASAQASAMIgSASQgRgNgMgNQgWAYgTAPg");
	this.shape_2.setTransform(70,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbLen4, new cjs.Rectangle(-23.8,-18,165.8,36), null);


(lib.rbLen3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//老師寫的checkBox，不要修改
		//外部可用變數：checked
		//修改文字標籤：setLabel("文字",outline數字)
		var ch=this;
		ch.stop();
		ch.ched=false;
		ch.checker.visible=ch.ched;
		ch.btnS.alpha=0;
		//click
		ch.on('click',function(e){
								//按下設值
								ch.ched=!ch.ched;
								ch.checker.visible=ch.ched;
							});
		//set label
		ch.setLabel = function(_text , _outline){
					ch.label.text = _text;
					ch.label.outline = _outline||0;
					
					var rect=ch.label.getBounds();
					ch.btnS.scaleX=(ch.label.x+rect.width+20)/100;
					ch.btnS.x=(ch.label.x+rect.width-20)/2;
					}
		
		//checked
		Object.defineProperty(this, 'checked', {
										    get: function() {
									        return ch.ched;
										    },
										    set: function(_ched) {
										        ch.ched=_ched;
										        ch.checker.visible=ch.ched;
										    }
								});
		//ch help
		ch.help = function(){
			var str="老師寫的checkBox，不要修改\n 外部可用變數：checked \n 修改文字標籤：setLabel('文字',outline數字)";
			console.log(str);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btnS
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(59.2,0,1.6384,0.3399,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsAsQgsAsg+AAQg+AAgrgsQgsgsAAg+QAAg9AsgsQArgsA+AAQA+AAAsAsQAsAsAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhqBqQgrgsAAg+QAAg9ArgsQAtgsA9AAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAQg9AAgtgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AEBB3QAfgJAMgLQAEgFAEgGQACgHAAgPIgaAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBIAAhfQAAgBAAAAQABgBAAAAQAAAAAAAAQABAAAAAAICHAAQABAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIAABfQAAABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAIgnAAIAAAoQAAAIAHgBIAXAAQACACABgHQABgHAAgSIAWAHQgCAmgHADQgGAEgIABIguAAQgMAAABgMIAAg6IgWAAIgDAUIgBAHQgKAegyARgAExAuIBdAAIABgCIAAgRIheAAgAExAFIBeAAIAAgTIheAAgACdBxIAtgLIAAheIglAAIAAgXIAlAAIAAgaIgeAAIAAgXIBUAAIAAAXIgeAAIAAAaIAiAAIAAAXIgiAAIAABXQATgHAOgGIAMAUQgnAUhCAOgABjCIIAAgMIjMAAIAAAMIgaAAIAAjJQAAgIAJAAIBWAAIAPgfIh1AAIAAgaIEOAAIAAAaIh+AAQgCAJgGALQgBAGgDAFIB5AAQAJAAAAAIIAADJgABCBiIAhAAIAAiOQAAgBAAgBQAAAAgBgBQAAAAgBAAQgBgBgBAAIgdAAgAgsBiIBVAAIAAgfIhVAAgAhpgsIAACOIAjAAIAAiSIggAAQgEAAABAEgAgsAqIBVAAIAAghIhVAAgAgsgQIBVAAIAAggIhVAAgAmpCDQgKAAAAgLIAAiHQAAgKAJAAIArAAQAFAAAAgFIAAhfQABgFAEgBICMAAQAHAAAAAHIAABgQAAAAAAABQAAABABAAQAAABABAAQABAAABAAIAoAAQALAAAAAKIAACIQgBAKgIAAgAmYAHIAABbQABAGAEAAIDIAAQAFABAAgHIAAhbQAAgGgEAAIgrAAQgGAAgBgHIAAhdQAAgEgEgBIhdAAQgEABgBAEIAABfQAAAFgGAAIgrAAQgFABAAAFgACiAeIAWgCQAIAqABASIgXABQAAgdgIgegADrBAQAGgSABgWIAVAFIgHApgAELgyIAAgXIAoAAIgHgaIgdAAIAAgXIBAAAIAAgRIAYAAIAAARIBFAAIAAAXIgeAAIgHAaIAqAAIAAAXgAFKhJIAlAAQAIgTgBgHIgzAAQAFAPACALgACdhVQAogcALgWIAXAAIgBAEQASARASALIgSATQgRgNgLgOQgWAZgUAPg");
	this.shape_2.setTransform(70,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbLen3, new cjs.Rectangle(-23.8,-18,165.8,36), null);


(lib.rbLen2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//老師寫的checkBox，不要修改
		//外部可用變數：checked
		//修改文字標籤：setLabel("文字",outline數字)
		var ch=this;
		ch.stop();
		ch.ched=false;
		ch.checker.visible=ch.ched;
		ch.btnS.alpha=0;
		//click
		ch.on('click',function(e){
								//按下設值
								ch.ched=!ch.ched;
								ch.checker.visible=ch.ched;
							});
		//set label
		ch.setLabel = function(_text , _outline){
					ch.label.text = _text;
					ch.label.outline = _outline||0;
					
					var rect=ch.label.getBounds();
					ch.btnS.scaleX=(ch.label.x+rect.width+20)/100;
					ch.btnS.x=(ch.label.x+rect.width-20)/2;
					}
		
		//checked
		Object.defineProperty(this, 'checked', {
										    get: function() {
									        return ch.ched;
										    },
										    set: function(_ched) {
										        ch.ched=_ched;
										        ch.checker.visible=ch.ched;
										    }
								});
		//ch help
		ch.help = function(){
			var str="老師寫的checkBox，不要修改\n 外部可用變數：checked \n 修改文字標籤：setLabel('文字',outline數字)";
			console.log(str);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btnS
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(59.2,0,1.6384,0.3399,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsAsQgsAsg+AAQg+AAgrgsQgsgsAAg+QAAg9AsgsQArgsA+AAQA+AAAsAsQAsAsAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhqBqQgrgsAAg+QAAg9ArgsQAtgsA9AAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAQg9AAgtgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AEBB3QAegJAMgLQAEgEAEgIQACgFABgPIgaAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBIAAhfQAAgBAAAAQAAgBABAAQAAAAAAAAQAAgBABAAICHAAQAAABABAAQABAAAAABQABAAAAAAQAAABAAAAIAABfQAAABAAABQAAAAgBABQAAAAgBAAQgBABAAAAIgnAAIAAAnQAAAHAGAAIAYAAQACACAAgIQABgGAAgSIAXAHQgDAmgGADQgHAFgIgBIgtAAQgMABAAgMIAAg5IgWAAIgDAUIgBAHQgKAdgyARgAEwAtIBeAAIABgBIAAgSIhfAAgAEwAFIBfAAIAAgSIhfAAgAiPByQAYgJAIgKQAGgJACgKIAAg1QAAgBgBgBQAAAAAAgBQgBAAAAAAQgBAAgBAAIgbAAIAAgZIAyAAQAGABABAEIAABIQABAJAIAJQAIAMAVAGQAaAFCSgHIgFAcIiNABQg5gCgSggQgEAJgMAMQgOALgMAFgACcBxIAugKIAAhfIgmAAIAAgWIAmAAIAAgaIgfAAIAAgYIBVAAIAAAYIgfAAIAAAaIAjAAIAAAWIgjAAIAABXQAUgHAOgHIALAWQgmAShCAQgAmqCAQgJAAAAgJIAAjvQACgIAHgBIBWAAQAKACAAAIIAABiQAAAAAAABQAAABAAAAQABABAAAAQABAAABAAIAwAAQABAAAAAAQABAAAAgBQAAAAAAgBQABgBAAAAIAAhiQABgKAIAAIBUAAQAKABAAAKIAADrQAAALgKAAgAmYhgIAADBQAAAEAEAAIDIAAQAEgBAAgFIAAi+QACgHgHAAIgpAAQgGACAAAFIAABeQAAAIgJgBIhWAAQgIABAAgIIAAheQgCgHgEAAIgrAAQgEAAAAAGgAAeBiIAAgaQAVAIAVgBQARgBAEgEQAEgJABgPIgBgBIgDgBIgoAAIgFgDQAAAAAAgBQgBgBAAAAQAAgBABAAQAAAAAAAAIAJggIAAgCIgEgCIgcAAQgWA6gpAhIgRgTQAWgRAOgSQALgOAHgXIgoAAIAAgUIB1AAIAGACQACACABAEIgKAdIAAACIAnAAQAIACAAAGQgBAVgFAOQgEAZgPAFQgLAGgRAAQgSAAgWgGgAChAeIAXgDQAHArABARIgWABQgBgdgIgdgADqBAQAHgSAAgWIAWAFIgHApgAhKghQArgLAjgWIhFAAIAAgXIBPAAIAAgQQgoACgdAAIgCgXQBjAABDgMIAEAWQgWAGguADIgGABIAAARIBVAAIAAAXIhFAAQAcAVAyAKIgMAWQgrgMgngaIAAAcIgZAAIAAgZQgsAegiAHgAiLgyIALgXQAXAJAbATIgOAWQgdgUgSgHgAELgyIAAgXIAnAAIgHgaIgdAAIAAgWIBAAAIAAgSIAYAAIAAASIBGAAIAAAWIgeAAIgHAaIApAAIAAAXgAFJhJIAmAAQAHgTAAgHIg0AAQAGAPABALgACchVQApgcAKgXIAYAAIgBAGQARAQATAMIgSASQgRgMgMgPQgWAZgTAPgAiHhuIAKgXQAYAKAcARIgMAXQgfgTgTgIg");
	this.shape_2.setTransform(70,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbLen2, new cjs.Rectangle(-23.8,-18,165.8,36), null);


(lib.rbLen1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//老師寫的checkBox，不要修改
		//外部可用變數：checked
		//修改文字標籤：setLabel("文字",outline數字)
		var ch=this;
		ch.stop();
		ch.ched=false;
		ch.checker.visible=ch.ched;
		ch.btnS.alpha=0;
		//click
		ch.on('click',function(e){
								//按下設值
								ch.ched=!ch.ched;
								ch.checker.visible=ch.ched;
							});
		//set label
		ch.setLabel = function(_text , _outline){
					ch.label.text = _text;
					ch.label.outline = _outline||0;
					
					var rect=ch.label.getBounds();
					ch.btnS.scaleX=(ch.label.x+rect.width+20)/100;
					ch.btnS.x=(ch.label.x+rect.width-20)/2;
					}
		
		//checked
		Object.defineProperty(this, 'checked', {
										    get: function() {
									        return ch.ched;
										    },
										    set: function(_ched) {
										        ch.ched=_ched;
										        ch.checker.visible=ch.ched;
										    }
								});
		//ch help
		ch.help = function(){
			var str="老師寫的checkBox，不要修改\n 外部可用變數：checked \n 修改文字標籤：setLabel('文字',outline數字)";
			console.log(str);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btnS
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(59.2,0,1.6384,0.3399,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsAsQgsAsg+AAQg+AAgrgsQgsgsAAg+QAAg9AsgsQArgsA+AAQA+AAAsAsQAsAsAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhqBqQgrgsAAg+QAAg9ArgsQAtgsA9AAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAQg9AAgtgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AEBB3QAegJAMgLQAFgFADgGQADgHAAgPIgaAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBIAAhfQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAAAgBICHAAQABABABAAQAAAAABABQAAAAAAAAQABABAAAAIAABfQAAABgBABQAAAAAAABQgBAAAAAAQgBAAgBAAIgnAAIAAAoQAAAIAHAAIAXAAQACAAABgGQABgHAAgSIAWAHQgCAmgHADQgGAEgIAAIgtAAQgNAAAAgLIAAg6IgVAAIgDAVIgBAGQgLAdgxASgAExAtIBdAAIABgBIAAgRIheAAgAExAGIBeAAIAAgUIheAAgAiOBzQAYgKAHgLQAHgHABgLIAAg1QAAgBAAgBQAAAAgBgBQAAAAgBAAQgBgBAAAAIgbAAIAAgZIAxAAQAHACAAAEIAABJQABAJAIAIQAJALAUAHQAaAFCTgHIgGAdIiNAAQg4gCgTghQgEAKgMALQgOAMgMAFgACcByIAugMIAAheIgmAAIAAgXIAmAAIAAgaIgeAAIAAgXIBUAAIAAAXIgeAAIAAAaIAjAAIAAAXIgjAAIAABYQATgHAPgIIALAVQgmAUhDAOgAmpCDQgLAAAAgLIAAiHQABgKAJAAIArAAQAFAAAAgFIAAhfQABgGAEAAICMAAQAHABAAAGIAABgQAAAAAAABQAAABABAAQAAABABAAQABAAAAAAIAqAAQAKAAABAKIAACIQgCAKgIAAgAmZAHIAABbQABAGAFAAIDHAAQAHABAAgHIAAhbQAAgGgGAAIgpAAQgIAAABgHIAAhdQAAgFgGAAIhcAAQgFAAAAAFIAABfQgBAFgEAAIgsAAQgGABAAAFgAAeBiIAAgZQAWAHAVAAQAQgCAEgFQAFgIABgPIgBgBIgEgCIgnAAIgGgCQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAAAAAAAIAJggIAAgCIgDgBIgcAAQgWA5gpAhIgRgTQAVgQAPgTQAKgOAIgWIgpAAIAAgWIB2AAIAFACQADADAAADIgKAeIAAADIAoAAQAHAAABAIQgCATgEAQQgFAYgOAFQgMAGgRAAQgRAAgXgGgACiAeIAWgCQAIAqAAASIgVABQgBgdgIgegADrBAQAGgTABgVIAVAFIgHApgAhJgiQArgKAigWIhEAAIAAgWIBOAAIAAgRQgoACgcgBIgDgWQBjAABDgLIAEAVQgVAFguAEIgHABIAAASIBWAAIAAAWIhGAAQAcAVAzAKIgNAVQgrgLgngaIAAAcIgZAAIAAgYQgsAdghAHgAiLgyIAMgXQAXAJAaATIgNAWQgegUgSgHgAEMgyIAAgXIAnAAIgIgaIgcAAIAAgXIA/AAIAAgRIAZAAIAAARIBFAAIAAAXIgeAAIgHAaIAqAAIAAAXgAFKhJIAmAAQAGgTAAgHIgzAAQAGAPABALgACchVQAqgcAKgWIAYAAIgCAEQASARASALIgSATQgQgMgNgOQgVAYgTAPgAiGhtIAKgYQAYAJAcASIgNAYQgegVgTgGg");
	this.shape_2.setTransform(70,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbLen1, new cjs.Rectangle(-23.8,-18,165.8,36), null);


(lib.arrowObj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.btn = new lib.btnObj();
	this.btn.name = "btn";
	this.btn.parent = this;
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.btnObj(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// 圖層_1
	this.dragMe = new lib.dragMe();
	this.dragMe.name = "dragMe";
	this.dragMe.parent = this;
	this.dragMe.setTransform(0,-8,0.6,0.6,0,0,0,-0.1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3GVIAAnSIgsAAIBjlXIBkFXIgtAAIAAHSg");
	this.shape.setTransform(0,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.dragMe}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrowObj, new cjs.Rectangle(-23.7,-80.5,47.5,81), null);


(lib.controlDraw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.colorPointer = new lib.colorPointer();
	this.colorPointer.name = "colorPointer";
	this.colorPointer.parent = this;
	this.colorPointer.setTransform(0,-0.05,0.8,0.8,0,0,0,-2.4,4.2);

	this.timeline.addTween(cjs.Tween.get(this.colorPointer).wait(1));

	// 圖層_1
	this.btnClear = new lib.btnClear();
	this.btnClear.name = "btnClear";
	this.btnClear.parent = this;
	this.btnClear.setTransform(399.95,-0.05,0.7,0.7,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.btnClear, 0, 1, 2, false, new lib.btnClear(), 3);

	this.btnUndo = new lib.btnUndo();
	this.btnUndo.name = "btnUndo";
	this.btnUndo.parent = this;
	this.btnUndo.setTransform(339.95,-0.05,0.7,0.7);
	new cjs.ButtonHelper(this.btnUndo, 0, 1, 2, false, new lib.btnUndo(), 3);

	this.btnCBox5 = new lib.colorBox5();
	this.btnCBox5.name = "btnCBox5";
	this.btnCBox5.parent = this;
	this.btnCBox5.setTransform(240,0);
	new cjs.ButtonHelper(this.btnCBox5, 0, 1, 2, false, new lib.colorBox5(), 3);

	this.btnCBox4 = new lib.colorBox4();
	this.btnCBox4.name = "btnCBox4";
	this.btnCBox4.parent = this;
	this.btnCBox4.setTransform(180,0);
	new cjs.ButtonHelper(this.btnCBox4, 0, 1, 2, false, new lib.colorBox4(), 3);

	this.btnCBox3 = new lib.colorBox3();
	this.btnCBox3.name = "btnCBox3";
	this.btnCBox3.parent = this;
	this.btnCBox3.setTransform(120,0);
	new cjs.ButtonHelper(this.btnCBox3, 0, 1, 2, false, new lib.colorBox3(), 3);

	this.btnCBox2 = new lib.colorBox2();
	this.btnCBox2.name = "btnCBox2";
	this.btnCBox2.parent = this;
	this.btnCBox2.setTransform(60,0);
	new cjs.ButtonHelper(this.btnCBox2, 0, 1, 2, false, new lib.colorBox2(), 3);

	this.btnCBox1 = new lib.colorBox1();
	this.btnCBox1.name = "btnCBox1";
	this.btnCBox1.parent = this;
	new cjs.ButtonHelper(this.btnCBox1, 0, 1, 2, false, new lib.colorBox1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnCBox1},{t:this.btnCBox2},{t:this.btnCBox3},{t:this.btnCBox4},{t:this.btnCBox5},{t:this.btnUndo},{t:this.btnClear}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.controlDraw, new cjs.Rectangle(-20,-22.2,442,44.3), null);


(lib.chDraw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//老師寫的checkBox，不要修改
		//外部可用變數：checked
		//修改文字標籤：setLabel("文字",outline數字)
		var ch=this;
		ch.stop();
		ch.ched=false;
		ch.checker.visible=ch.ched;
		ch.btnS.alpha=0;
		//click
		ch.on('click',function(e){
								//按下設值
								ch.ched=!ch.ched;
								ch.checker.visible=ch.ched;
							});
		//set label
		ch.setLabel = function(_text , _outline){
					ch.label.text = _text;
					ch.label.outline = _outline||0;
					
					var rect=ch.label.getBounds();
					ch.btnS.scaleX=(ch.label.x+rect.width+20)/100;
					ch.btnS.x=(ch.label.x+rect.width-20)/2;
					}
		
		//checked
		Object.defineProperty(this, 'checked', {
										    get: function() {
									        return ch.ched;
										    },
										    set: function(_ched) {
										        ch.ched=_ched;
										        ch.checker.visible=ch.ched;
										    }
								});
		//ch help
		ch.help = function(){
			var str="老師寫的checkBox，不要修改\n 外部可用變數：checked \n 修改文字標籤：setLabel('文字',outline數字)";
			console.log(str);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEVCWIAAgMIjeAAIAAAMIgaAAIAAkaQABgJAHAAIECAAQAJABAAAIIAAEagAA3ByIDeAAIAAiGIjeAAgAC0gqIBhAAIAAhIQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIjXAAQgEABAAADIAABIIBjAAIAAgNIhNAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAgBAAgBIAAgtIACgDICxAAQABABAAAAQABABAAAAQABAAAAAAQAAABAAAAIAAAtQAAAEgDAAIhKAAgABhhLICJAAIABgBIAAgKIiKAAgAkCCUIAAiHIgnADQgBgLgEgLIASgDQAMgOANgSQgVgcgXgQIAPgUIAKAJIAXgzIAVAKQgIAWgUAjIAPARQAOgbAIgbIAXAHQgKAogqA6IAbgFQgCgJgEgIIAVgHQAKAXAIAhIgVAHIgEgPIgOACIAACLgAgvCRIAAgOIhsAAIAAAOIgZAAIAAhtQAAgEADAAICWAAQAFAAAAAGIAABrgAibBtIBsAAIAAgQIhsAAgAibA6IAAANIBsAAIAAgNQAAgBAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIhnAAQgBAAAAABQgBAAAAAAQgBABAAAAQAAAAABABgAksCCQAMg9AAglIAXACQAAArgMA3gAjjAgIAYgCQAIAlADAvIgXABQgEgvgIgkgABIBnQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBIAAhvIACgCIC8AAQABAAAAABQABAAABAAQAAABAAAAQABAAAAAAIAABvQAAADgEABgABfBQICOAAIACgBIAAhIIiQAAgAByBGQgBAAgBgBQgBAAAAAAQgBAAAAgBQAAAAAAAAIAAgwQAAgDAEgBIBuAAQAAAAABABQAAAAABAAQAAABAAAAQAAABAAABIAAAwIgCACgACGAkIAAAOQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAABAAIBDAAIAAgQIhDAAQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAgAi3AWQgEAAAAgFIAAhQQAAgDAEAAICjAAQADAAAAADIAABQQAAAFgDAAgAhYAAIAuAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAAgsQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIguAAgAijgsIAAAsIABAAIAxAAIAAgtIgxAAIgBABgAhTgRIAXgYIAQANQgIAOgPAMgAiegeIATgMIAUAcIgUAMQgKgRgJgLgAjLheQBGgZAXgeIAXAFIgCAFQAnAdAuAPIgOAXIgigPIAAAMIhiAAIAAgPQgSALgUAJgAhEhgQgKgHgagTQgLAKgYAQIBHAAIAAAAg");
	this.shape.setTransform(55.375,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// btnS
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(33.6,0,1.1098,0.3399,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(3,1,1).p("AiViVIErAAIAAErIkrAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AiVCWIAAkrIErAAIAAErg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.chDraw, new cjs.Rectangle(-23.1,-20.7,113,38.7), null);


(lib.chLine5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//老師寫的checkBox，不要修改
		//外部可用變數：checked
		//修改文字標籤：setLabel("文字",outline數字)
		var ch=this;
		ch.stop();
		ch.ched=false;
		ch.checker.visible=ch.ched;
		ch.btnS.alpha=0;
		//click
		ch.on('click',function(e){
								//按下設值
								ch.ched=!ch.ched;
								ch.checker.visible=ch.ched;
							});
		//set label
		ch.setLabel = function(_text , _outline){
					ch.label.text = _text;
					ch.label.outline = _outline||0;
					
					var rect=ch.label.getBounds();
					ch.btnS.scaleX=(ch.label.x+rect.width+20)/100;
					ch.btnS.x=(ch.label.x+rect.width-20)/2;
					}
		
		//checked
		Object.defineProperty(this, 'checked', {
										    get: function() {
									        return ch.ched;
										    },
										    set: function(_ched) {
										        ch.ched=_ched;
										        ch.checker.visible=ch.ched;
										    }
								});
		//ch help
		ch.help = function(){
			var str="老師寫的checkBox，不要修改\n 外部可用變數：checked \n 修改文字標籤：setLabel('文字',outline數字)";
			console.log(str);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AjFB/QAggKANgLQAFgFAEgIQACgGAAgQIgbAAQgBAAAAAAQgBgBAAAAQAAgBgBgBQAAAAAAgBIAAhmQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABAAICPAAQABAAABAAQABABAAAAQABAAAAABQAAAAAAAAIAABmQAAAEgEAAIgpAAIAAAqQAAAIAIAAIAZAAQABABABgIQABgGAAgUIAYAIQgCAogIADQgGAFgJAAIgxAAQgMAAAAgMIAAg9IgYAAIgCAVIgCAHQgLAgg0ASgAiSAwIBjAAIABgBIAAgTIhkAAgAiSAGIBkAAIAAgVIhkAAgAI+CSIgCgdIAPAFIAFgBQAGgFAAgIIAAhUQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAIgaAAIAAB0IgZAAIAAh0IgZAAIAAB0IgZAAIAAh0IgXAAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAAAAAAAIAAB4IgbAAIAAiMQACgFAFAAIA1AAIAJgYIhHAAIAAgZIC4AAIAAAZIhXAAQgCAFgBAIIgEALIBWAAQAGABAAAEIAABzQAAAPgMAJQgHAEgNAAIgSgBgApxB6QAbgKAHgLQAIgJABgLIAAg5QAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAgBAAIgdAAIAAgbIA1AAQAHABAAAFIAABNQACAKAIAJQAJAMAXAIQAbAFCegIIgHAeIiXABQg8gCgUgjQgFAKgMAMQgPANgNAFgAkxB5IAxgMIAAhlIgoAAIAAgYIAoAAIAAgbIggAAIAAgZIBaAAIAAAZIghAAIAAAbIAmAAIAAAYIgmAAIAABeQAVgIAPgHIANAWQgpAUhIARgAAUCIIAAgdIBkAAIAAj9IAeAAIAABMICRAAIAAAdIiRAAIAACUICiAAIAAAdgAFOBsIA2gMQAOhVAAhMIAYADQgEBegJA5IAVgFIAHAZIhiAYgAm4BoIAAgbQAYAHAXAAQARgBAEgFQAFgJABgQQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgEgBIgqAAIgFgDQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABAAIAIghIAAgDIgDgBIgeAAQgXA9gtAjIgTgUQAYgRAPgUQALgPAJgYIgsAAIAAgXIB/AAQAFABABACQACACAAAEIgKAfIAAADIAqAAQAIABAAAIQgBAVgFAQQgFAagPAFQgMAGgTAAQgSAAgZgGgAkqAgIAXgDQAIAtABATIgYABQgBgfgHgfgAFdBPQADg/gIhMIAZAAQAHBbgCAygAjdBEQAGgUACgWIAWAFIgHArgAongkQAugLAmgYIhKAAIAAgYIBVAAIAAgRQgsACgfgBIgCgYQBrAABHgMIAEAYQgWAFgxADIgIACIAAASIBcAAIAAAYIhKAAQAeAXA2ALIgOAWQgugMgqgcIAAAeIgaAAIAAgaQgxAfgjAIgAptg1IANgZQAZAKAbAUIgOAXQgfgVgUgHgAi6g1IAAgZIApAAIgHgcIgeAAIAAgYIBDAAIAAgSIAbAAIAAASIBJAAIAAAYIggAAIgIAcIAtAAIAAAZgAh4hOIAoAAQAIgUAAgIIg3AAQAGAQABAMgAHJhGQgNgBAAgLIAAg4IAbAAIAAAmQAAAFADAAIAsAAIAAg0IAaAAIAAA0IAtAAQAEAAAAgFIAAgmIAaAAIAAA4QAAAMgMAAgAkxhbQAsgeALgYIAZAAIgBAFQATASAUAMIgUAUQgSgNgMgPQgYAagUAQgAFQhQIAAgaIAkAAIAAgoIAbAAIAAAoIAiAAIAAAagApoh1IALgZQAZAKAeATIgNAZQghgWgUgHg");
	this.shape.setTransform(87.575,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// btnS
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(67.35,0,1.8003,0.3399,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(3,1,1).p("AiViVIErAAIAAErIkrAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AiVCWIAAkrIErAAIAAErg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.chLine5, new cjs.Rectangle(-24,-20.7,182,38.7), null);


(lib.chLine4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//老師寫的checkBox，不要修改
		//外部可用變數：checked
		//修改文字標籤：setLabel("文字",outline數字)
		var ch=this;
		ch.stop();
		ch.ched=false;
		ch.checker.visible=ch.ched;
		ch.btnS.alpha=0;
		//click
		ch.on('click',function(e){
								//按下設值
								ch.ched=!ch.ched;
								ch.checker.visible=ch.ched;
							});
		//set label
		ch.setLabel = function(_text , _outline){
					ch.label.text = _text;
					ch.label.outline = _outline||0;
					
					var rect=ch.label.getBounds();
					ch.btnS.scaleX=(ch.label.x+rect.width+20)/100;
					ch.btnS.x=(ch.label.x+rect.width-20)/2;
					}
		
		//checked
		Object.defineProperty(this, 'checked', {
										    get: function() {
									        return ch.ched;
										    },
										    set: function(_ched) {
										        ch.ched=_ched;
										        ch.checker.visible=ch.ched;
										    }
								});
		//ch help
		ch.help = function(){
			var str="老師寫的checkBox，不要修改\n 外部可用變數：checked \n 修改文字標籤：setLabel('文字',outline數字)";
			console.log(str);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AjFB/QAggKANgLQAFgFAEgIQACgGAAgQIgbAAQgBAAAAAAQgBgBAAAAQAAgBgBgBQAAAAAAgBIAAhmQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABAAICPAAQABAAABAAQABABAAAAQABAAAAABQAAAAAAAAIAABmQAAAEgEAAIgpAAIAAAqQAAAIAIAAIAZAAQABABABgIQABgGAAgUIAYAIQgCAogIADQgGAFgJAAIgxAAQgMAAAAgMIAAg9IgYAAIgCAVIgCAHQgLAgg0ASgAiSAwIBjAAIABgBIAAgTIhkAAgAiSAGIBkAAIAAgVIhkAAgAI+CSIgCgdIAPAFIAFgBQAGgFAAgIIAAhUQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAIgaAAIAAB0IgZAAIAAh0IgZAAIAAB0IgZAAIAAh0IgXAAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAAAAAAAIAAB4IgbAAIAAiMQACgFAFAAIA1AAIAJgYIhHAAIAAgZIC4AAIAAAZIhXAAQgCAFgBAIIgEALIBWAAQAGABAAAEIAABzQAAAPgMAJQgHAEgNAAIgSgBgACMCTIAAj+Ih6AAIAAgdIEhAAIAAAdIiLAAIAAAlQA/AnA8AsIgTAaQgqgkg+gpIAAC5gApxB6QAbgKAHgLQAIgJABgLIAAg5QAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAgBAAIgdAAIAAgbIA1AAQAHABAAAFIAABNQACAKAIAJQAJAMAXAIQAbAFCegIIgHAeIiXABQg8gCgUgjQgFAKgMAMQgPANgNAFgAkxB5IAxgMIAAhlIgoAAIAAgYIAoAAIAAgbIggAAIAAgZIBaAAIAAAZIghAAIAAAbIAmAAIAAAYIgmAAIAABeQAVgIAPgHIANAWQgpAUhIARgAFOBsIA2gMQAOhVAAhMIAYADQgEBegJA5IAVgFIAHAZIhiAYgAm4BoIAAgbQAYAHAXAAQARgBAEgFQAFgJABgQQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgEgBIgqAAIgFgDQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABAAIAIghIAAgDIgDgBIgeAAQgXA9gtAjIgTgUQAYgRAPgUQALgPAJgYIgsAAIAAgXIB/AAQAFABABACQACACAAAEIgKAfIAAADIAqAAQAIABAAAIQgBAVgFAQQgFAagPAFQgMAGgTAAQgSAAgZgGgAkqAgIAXgDQAIAtABATIgYABQgBgfgHgfgAFdBPQADg/gIhMIAZAAQAHBbgCAygAjdBEQAGgUACgWIAWAFIgHArgAongkQAugLAmgYIhKAAIAAgYIBVAAIAAgRQgsACgfgBIgCgYQBrAABHgMIAEAYQgWAFgxADIgIACIAAASIBcAAIAAAYIhKAAQAeAXA2ALIgOAWQgugMgqgcIAAAeIgaAAIAAgaQgxAfgjAIgAptg1IANgZQAZAKAbAUIgOAXQgfgVgUgHgAi6g1IAAgZIApAAIgHgcIgeAAIAAgYIBDAAIAAgSIAbAAIAAASIBJAAIAAAYIggAAIgIAcIAtAAIAAAZgAh4hOIAoAAQAIgUAAgIIg3AAQAGAQABAMgAHJhGQgNgBAAgLIAAg4IAbAAIAAAmQAAAFADAAIAsAAIAAg0IAaAAIAAA0IAtAAQAEAAAAgFIAAgmIAaAAIAAA4QAAAMgMAAgAkxhbQAsgeALgYIAZAAIgBAFQATASAUAMIgUAUQgSgNgMgPQgYAagUAQgAFQhQIAAgaIAkAAIAAgoIAbAAIAAAoIAiAAIAAAagApoh1IALgZQAZAKAeATIgNAZQghgWgUgHg");
	this.shape.setTransform(87.575,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// btnS
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(67.35,0,1.8003,0.3399,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(3,1,1).p("AiViVIErAAIAAErIkrAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AiVCWIAAkrIErAAIAAErg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.chLine4, new cjs.Rectangle(-24,-20.7,182,38.7), null);


(lib.chLine3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//老師寫的checkBox，不要修改
		//外部可用變數：checked
		//修改文字標籤：setLabel("文字",outline數字)
		var ch=this;
		ch.stop();
		ch.ched=false;
		ch.checker.visible=ch.ched;
		ch.btnS.alpha=0;
		//click
		ch.on('click',function(e){
								//按下設值
								ch.ched=!ch.ched;
								ch.checker.visible=ch.ched;
							});
		//set label
		ch.setLabel = function(_text , _outline){
					ch.label.text = _text;
					ch.label.outline = _outline||0;
					
					var rect=ch.label.getBounds();
					ch.btnS.scaleX=(ch.label.x+rect.width+20)/100;
					ch.btnS.x=(ch.label.x+rect.width-20)/2;
					}
		
		//checked
		Object.defineProperty(this, 'checked', {
										    get: function() {
									        return ch.ched;
										    },
										    set: function(_ched) {
										        ch.ched=_ched;
										        ch.checker.visible=ch.ched;
										    }
								});
		//ch help
		ch.help = function(){
			var str="老師寫的checkBox，不要修改\n 外部可用變數：checked \n 修改文字標籤：setLabel('文字',outline數字)";
			console.log(str);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF66").s().p("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");
	this.shape.setTransform(119.875,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// btnS
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(101.4,0,2.5004,0.3399,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(3,1,1).p("AiViVIErAAIAAErIkrAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AiVCWIAAkrIErAAIAAErg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.chLine3, new cjs.Rectangle(-25.3,-20.7,252.5,38.7), null);


(lib.chLine2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//老師寫的checkBox，不要修改
		//外部可用變數：checked
		//修改文字標籤：setLabel("文字",outline數字)
		var ch=this;
		ch.stop();
		ch.ched=false;
		ch.checker.visible=ch.ched;
		ch.btnS.alpha=0;
		//click
		ch.on('click',function(e){
								//按下設值
								ch.ched=!ch.ched;
								ch.checker.visible=ch.ched;
							});
		//set label
		ch.setLabel = function(_text , _outline){
					ch.label.text = _text;
					ch.label.outline = _outline||0;
					
					var rect=ch.label.getBounds();
					ch.btnS.scaleX=(ch.label.x+rect.width+20)/100;
					ch.btnS.x=(ch.label.x+rect.width-20)/2;
					}
		
		//checked
		Object.defineProperty(this, 'checked', {
										    get: function() {
									        return ch.ched;
										    },
										    set: function(_ched) {
										        ch.ched=_ched;
										        ch.checker.visible=ch.ched;
										    }
								});
		//ch help
		ch.help = function(){
			var str="老師寫的checkBox，不要修改\n 外部可用變數：checked \n 修改文字標籤：setLabel('文字',outline數字)";
			console.log(str);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF99FF").s().p("ANtCVIAAgyIg5AAIAAgZIA5AAIAAgUIgvAAQgDAAgBgEIAAh9QABgEADAAIAvAAIAAgVIg2AAIAAgZIA2AAIAAgXIAaAAIAAAXIA3AAIAAAZIg3AAIAAAVIAuAAQADAAAAAEIAAB9QAAAEgDAAIguAAIAAAUIA5AAIAAAZIg5AAIAAAygAOHAdIAWAAIABgCIAAgbIgXAAgANVAbQAAABAAAAQAAAAAAAAQAAABAAAAQABAAAAAAIAXAAIAAgdIgYAAgAOHgZIAXAAIAAgdIgXAAgANVgZIAYAAIAAgdIgYAAgAnMCLQALgdgBgiIAaAAQgBArgMAeIgXgKgAokBSIAYgPQAUAbAUApIgXAOQgWgsgTgXgADcCTIAAh9IgVAUIgWgRQAvgnAXg1IAYAMQgMAZgLASIAACfgAsOB/QAcgWAPgmIAYAOQgWAsgcAWQgJgPgIgFgAE8CIIAAgdQAaAIAWAEQAXACAIgHQACgEAAgFIAAiHIhyAAIAAgcIDAAAIAAAcIgyAAIAACOQAAATgPAJQgMAHgUAAQgZAAglgLgAgHCSIAAhhIiCAAIAAgcICCAAIAAiDIh4AAIAAgcIEMAAIAAAcIh3AAIAACDICBAAIAAAcIiBAAIAABhgAxNB5QAZgKAJgLQAGgJABgLIAAg6QAAgDgEAAIgfAAIAAgbIA3AAQAIABgBAFIAABNQADAJAIALQAJAOAVAFQAZAGCigIIgHAeIiZACQg7gEgUgjQgEALgMALQgPAOgNAFgAq3CJQAKgeAFghIAaAHQgIAogHAYgAQ2CQIAAgMIhTAAIAAAMIgZAAIAAjyQAAgJAJAAIAsAAIAAgpIAaAAIAAApIAtAAQAJAAAAAJIAADygAQZBrIAdAAIAAhVIgdAAgAPjBrIAcAAIAAhVIgcAAgAQZgCIAdAAIAAhNQgBgBAAAAQAAgBAAAAQgBAAAAgBQgBAAgBAAIgZAAgAPjhPIAABNIAcAAIAAhQIgaAAQAAABgBAAQgBAAAAABQAAAAAAAAQAAAAAAABgAjGCQIAAgNIhKAAIAAANIgaAAIAAiVQABgEADAAIAjAAIAAiIIAaAAIAAAuIBAAAIAAAZIhAAAIAABBIA2AAQAGAAABAFIAACUgAkQARIAABZIBKAAIAAhZQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIhFAAQgBAAgBAAQAAABgBAAQAAAAAAABQAAAAABAAgAmeCNQACgfgCgiIAZABQADAjgEAggAppBRIAZgGQAMAlAFAbIgbADQgHglgIgYgAl9BNIAZgDQAIAjACAbIgYADQgDgbgIgjgAH2CIIAAgdICDAAIAAhOIhxAAIAAgdIBxAAIAAhFIh5AAIAAgdIB7AAQgQgUgLgLIAVgTQARAQATAbIgKAHIB9AAIAAAdIh2AAIAABFIBwAAIAAAdIhwAAIAABOICBAAIAAAdgAlZBKIAVgFQAKAXAFAcIgXAEQgEgegJgUgAtvBrIgBgcQAdAHAEgEQAHgFAAgHIAAhaQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIiPAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIAAB1IgaAAIAAiJQABgHAEAAIAPAAIAAhVQABgIAHAAICOAAQAIABAAAHIAABVIAOAAQAGACAAAFIAAB5QAAAPgNAJQgHAFgQAAQgMAAgRgDgAuOhFIAAAWIAyAAIAAgZIgwAAIgBAAQgBAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABgAvGhxIAABCIAfAAIAAgqQAAgFAFAAIBGAAIAAgTQAAgEgEAAIhjAAQgDAAAAAEgAvEBKQgEAAABgEIAAhGQgBgEAEAAIBoAAQADAAAAAEIAABGQAAAEgDAAgAuvAUIAAAeIA8AAIABgBIAAgdIgBgBIg8AAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABgAnMAoIBBgEIAAgVIg5AAIAAgYIA5AAIAAgVIg7AAQgBAAAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBIAAhpIADgDICPAAQABABAAAAQABAAABABQAAAAAAAAQABAAAAABIAABpQAAAEgEAAIg7AAIAAAVIA3AAIAAAYIg3AAIAAAUIA7gEIABAZIiTAJgAlyg1IAmAAQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIAAhBIgoAAgAmyg1IAnAAIAAhCIgnAAgArVA8QgKgBAAgJIAAh6QgOANgMAJIgSgWQAUgMARgTQAMgPAMgeIAZAJIgKAYIBOAAQALgTAFgNIAZANQgFAHgFAMIBhAAIgCAZIhoAAIAAAZIBnAAIAAAZIhnAAIAAAaIBnAAIAAAYIhnAAIAAAZIBsAAIAAAZgArFAfQAAAEAEAAIBMAAIAAgZIhQAAgArFgOIBQAAIAAgaIhQAAgArFhXIAAAWIBQAAIAAgZIhMAAQgEAAAAADgAA9gHQAkgzAMgiIAZAMQgPAmgiAwgAh6hNIAXgPQAZAiAWAyIgYANQgYg2gWgcgAxJg5IAPgZQAWAMAeAUIgPAXQgggWgUgIgACzhAQAlgjATgxIAZAKQgaA9gfAcgAlqhBQACgMAEgfIAUAEQgDAdgEAPgAmmhAQgBgVgEgTIAUgDIAHArgAxCh1IAOgZQAYAKAfAXIgOAYQghgXgWgJgAElhpIAAgcICqAAIAAAcg");
	this.shape.setTransform(135.25,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// btnS
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(114.45,0,2.7995,0.3399,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(3,1,1).p("AiViVIErAAIAAErIkrAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AiVCWIAAkrIErAAIAAErg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.chLine2, new cjs.Rectangle(-27.4,-20.7,282.7,38.7), null);


(lib.chLine1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//老師寫的checkBox，不要修改
		//外部可用變數：checked
		//修改文字標籤：setLabel("文字",outline數字)
		var ch=this;
		ch.stop();
		ch.ched=false;
		ch.checker.visible=ch.ched;
		ch.btnS.alpha=0;
		//click
		ch.on('click',function(e){
								//按下設值
								ch.ched=!ch.ched;
								ch.checker.visible=ch.ched;
							});
		//set label
		ch.setLabel = function(_text , _outline){
					ch.label.text = _text;
					ch.label.outline = _outline||0;
					
					var rect=ch.label.getBounds();
					ch.btnS.scaleX=(ch.label.x+rect.width+20)/100;
					ch.btnS.x=(ch.label.x+rect.width-20)/2;
					}
		
		//checked
		Object.defineProperty(this, 'checked', {
										    get: function() {
									        return ch.ched;
										    },
										    set: function(_ched) {
										        ch.ched=_ched;
										        ch.checker.visible=ch.ched;
										    }
								});
		//ch help
		ch.help = function(){
			var str="老師寫的checkBox，不要修改\n 外部可用變數：checked \n 修改文字標籤：setLabel('文字',outline數字)";
			console.log(str);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("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");
	this.shape.setTransform(135.425,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// btnS
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(114.45,0,2.7995,0.3399,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(3,1,1).p("AiViVIErAAIAAErIkrAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AiVCWIAAkrIErAAIAAErg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.chLine1, new cjs.Rectangle(-27.4,-20.7,282.7,38.7), null);


(lib.chImage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//老師寫的checkBox，不要修改
		//外部可用變數：checked
		//修改文字標籤：setLabel("文字",outline數字)
		var ch=this;
		ch.stop();
		ch.ched=false;
		ch.checker.visible=ch.ched;
		ch.btnS.alpha=0;
		//click
		ch.on('click',function(e){
								//按下設值
								ch.ched=!ch.ched;
								ch.checker.visible=ch.ched;
							});
		//set label
		ch.setLabel = function(_text , _outline){
					ch.label.text = _text;
					ch.label.outline = _outline||0;
					
					var rect=ch.label.getBounds();
					ch.btnS.scaleX=(ch.label.x+rect.width+20)/100;
					ch.btnS.x=(ch.label.x+rect.width-20)/2;
					}
		
		//checked
		Object.defineProperty(this, 'checked', {
										    get: function() {
									        return ch.ched;
										    },
										    set: function(_ched) {
										        ch.ched=_ched;
										        ch.checker.visible=ch.ched;
										    }
								});
		//ch help
		ch.help = function(){
			var str="老師寫的checkBox，不要修改\n 外部可用變數：checked \n 修改文字標籤：setLabel('文字',outline數字)";
			console.log(str);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjFCCQA0gmAjgmQgWg6gNhIIhtAAIgDACIAAAhIBTAAQAKAAACAEIAABXQgCASgFALQgGAPgJAFQgOAIgwgIIgCgdQAnAKAJgFIAIgIQACgIAAgEIAAhCQAAgBAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAIg/AAIAAAOQABBWgaA9IgbgLQAPglAFgfQAFgeAAgtIAAhaQAAgHAHAAICAAAQgEgYgBgTIAcABQABATADAXIA6AAQgVgPgPgFIANgZQASAJAXAPIgNAVIAoAAIAAAcIhiAAQAMBAANAmQAPgYAPg9IAbAGQgPBEgeArQALAZAMATQAHANAEAAQADgBABgJQAFgSgCgeIAcAFQgFBMgRAJQgEACgGAAQgLAAgJgLQgSgTgRgmQghAmgrAfgADACVQgJAAgbgIIAAgaQAhAKAIgDQAHgFADgLQAEgMABgNQhEAug1AIIgLgXQBJgRA4gpIgGgPQg+ApgyAJIgKgYQA9gLAwgjIgKgJQgyAZgmAIIgKgYQA0gKAmgVIhKAAQgEAAAAgFIAAhCIgJgOQAmgTAOgfIAXAEIgCAHIBUAAIARAMQgKARgUATIBCAAQAEAAAAAEIAABDQAAAFgEAAIhOAAIgQALQAZASAGAbIAEAIQAYAtAyAbIgVASQgdgTgXgbIgCgCQgBAQgFANQgIASgMAGQgHACgGAAIgEAAgADRglIA+AAIABgBIAAgZQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAIg+AAgAB4g/IAAAZQAAABAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIA8AAIAAgbIg8AAQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAgAB1hYIBJAAIAWgNQAIgFACgEIAAgEIhNAAQgLAOgRAMgAAtCUIAAigIgKAQIgagJQArhAAKhMIAaADQgIAogJAeIAADcgADyAkQAcgZAMgPIASARQgPAVgaAUg");
	this.shape.setTransform(56,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// btnS
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(67.35,0,1.8003,0.3399,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(3,1,1).p("AiViVIErAAIAAErIkrAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AiVCWIAAkrIErAAIAAErg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.chImage, new cjs.Rectangle(-24,-20.7,182,38.7), null);


(lib.theGrid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// obj
	this.imgR = new lib.arrowImgR();
	this.imgR.name = "imgR";
	this.imgR.parent = this;
	this.imgR.setTransform(435.15,-72.4);

	this.imgI = new lib.arrowImgI();
	this.imgI.name = "imgI";
	this.imgI.parent = this;
	this.imgI.setTransform(376.6,-72.4);

	this.obj = new lib.arrowObj();
	this.obj.name = "obj";
	this.obj.parent = this;
	this.obj.setTransform(-240,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.obj},{t:this.imgI},{t:this.imgR}]}).wait(1));

	// lens
	this.lens = new lib.lens();
	this.lens.name = "lens";
	this.lens.parent = this;
	this.lens.setTransform(-0.15,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.lens).wait(1));

	// grid
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhMBzIAAjlICZAAIAAAbIh7AAIAABHIBqAAIAAAaIhqAAIAABpg");
	this.shape.setTransform(160.025,40);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhMBzIAAjlICZAAIAAAbIh7AAIAABHIBqAAIAAAaIhqAAIAABpg");
	this.shape_1.setTransform(-159.975,40);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1,1).p("EAyAAAAIAACWAZAAAIAACWAAAAAIAACWAAAAAIZAAAIZAAAMArwAAAA4/AAIAACWEgx/AAAIAACWEgx/AAAIZAAAIY/AAEhdvAAAMArwAAAA4/iVIAACVEgx/gCVIAACVEAyAgCVIAACVAZAiVIAACVAAAiVIAACV");

	this.grid = new lib.grid();
	this.grid.name = "grid";
	this.grid.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.grid},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.theGrid, new cjs.Rectangle(-640.5,-240.5,1281,481), null);


// stage content:
(lib.myAnimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btnDrawArea
	this.btnDrawArea = new lib.btnDrawArea();
	this.btnDrawArea.name = "btnDrawArea";
	this.btnDrawArea.parent = this;
	this.btnDrawArea.setTransform(800,401.2);
	new cjs.ButtonHelper(this.btnDrawArea, 0, 1, 2, false, new lib.btnDrawArea(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnDrawArea).wait(1));

	// UI
	this.controlDraw = new lib.controlDraw();
	this.controlDraw.name = "controlDraw";
	this.controlDraw.parent = this;
	this.controlDraw.setTransform(320,690);

	this.chDraw = new lib.chDraw();
	this.chDraw.name = "chDraw";
	this.chDraw.parent = this;
	this.chDraw.setTransform(183,690);

	this.chLine4 = new lib.chLine5();
	this.chLine4.name = "chLine4";
	this.chLine4.parent = this;
	this.chLine4.setTransform(1385.7,781.6);

	this.chLine5 = new lib.chLine4();
	this.chLine5.name = "chLine5";
	this.chLine5.parent = this;
	this.chLine5.setTransform(1385.7,822.25);

	this.chLine3 = new lib.chLine3();
	this.chLine3.name = "chLine3";
	this.chLine3.parent = this;
	this.chLine3.setTransform(1084.1,862.9);

	this.chLine2 = new lib.chLine2();
	this.chLine2.name = "chLine2";
	this.chLine2.parent = this;
	this.chLine2.setTransform(1084.1,822.25);

	this.chLine1 = new lib.chLine1();
	this.chLine1.name = "chLine1";
	this.chLine1.parent = this;
	this.chLine1.setTransform(1084.1,781.6);

	this.rbLen4 = new lib.rbLen4();
	this.rbLen4.name = "rbLen4";
	this.rbLen4.parent = this;
	this.rbLen4.setTransform(282.4,853.7,1,1,0,0,0,59.1,0);

	this.rbLen3 = new lib.rbLen3();
	this.rbLen3.name = "rbLen3";
	this.rbLen3.parent = this;
	this.rbLen3.setTransform(282.4,813.05,1,1,0,0,0,59.1,0);

	this.rbLen2 = new lib.rbLen2();
	this.rbLen2.name = "rbLen2";
	this.rbLen2.parent = this;
	this.rbLen2.setTransform(112.55,853.7,1,1,0,0,0,59.1,0);

	this.rbLen1 = new lib.rbLen1();
	this.rbLen1.name = "rbLen1";
	this.rbLen1.parent = this;
	this.rbLen1.setTransform(112.55,813.05,1,1,0,0,0,59.1,0);

	this.ch02 = new lib.theCheckbox();
	this.ch02.name = "ch02";
	this.ch02.parent = this;
	this.ch02.setTransform(2466.95,361.9,1,1,0,0,0,67.2,-1.4);

	this.ch01 = new lib.theCheckbox();
	this.ch01.name = "ch01";
	this.ch01.parent = this;
	this.ch01.setTransform(2466.95,430,1,1,0,0,0,67.2,-1.4);

	this.sl03 = new lib.theSlider();
	this.sl03.name = "sl03";
	this.sl03.parent = this;
	this.sl03.setTransform(2399.75,204.8);

	this.sl02 = new lib.theSlider();
	this.sl02.name = "sl02";
	this.sl02.parent = this;
	this.sl02.setTransform(2399.75,124.3);

	this.sl01 = new lib.theSlider();
	this.sl01.name = "sl01";
	this.sl01.parent = this;
	this.sl01.setTransform(2399.75,43.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sl01},{t:this.sl02},{t:this.sl03},{t:this.ch01},{t:this.ch02},{t:this.rbLen1},{t:this.rbLen2},{t:this.rbLen3},{t:this.rbLen4},{t:this.chLine1},{t:this.chLine2},{t:this.chLine3},{t:this.chLine5},{t:this.chLine4},{t:this.chDraw},{t:this.controlDraw}]}).wait(1));

	// btn3D
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("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");
	this.shape.setTransform(147.2,52.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(5,1,1).p("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");
	this.shape_1.setTransform(147.2,52.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("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");
	this.shape_2.setTransform(147.2,52.1);

	this.chImage = new lib.chImage();
	this.chImage.name = "chImage";
	this.chImage.parent = this;
	this.chImage.setTransform(1385.7,862.9);

	this.theGrid = new lib.theGrid();
	this.theGrid.name = "theGrid";
	this.theGrid.parent = this;
	this.theGrid.setTransform(800,400);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ADaAxQgKgLAAgOQAAgMAFgHQAGgHALgCQgJgEgEgFQgFgHAAgIQAAgMAJgJQAJgIAPAAQAPgBAJAKQAKAIAAAMQAAAIgFAHQgEAFgIAEQAKADAGAHQAFAHAAALQAAAPgKAKQgLAJgRABQgQgBgLgJgADlAHQgHAGAAALQAAAFADAGQADAFAGAEQAFADAHAAQAKAAAGgGQAHgHAAgKQAAgKgHgHQgHgHgKAAQgKAAgGAHgADogpQgFAGAAAGQAAAJAFAFQAFAFAJAAQAIAAAFgFQAFgFAAgIQAAgHgFgFQgGgGgIAAQgIAAgFAFgACCAuQgLgOAAggQAAgUAEgLQAEgNAJgHQAIgGAMAAQAJAAAHADQAHAEAFAHQAEAHADAKQADAKAAAQQAAAUgFANQgEAMgIAHQgIAHgNAAQgQgBgKgMgACNglQgIAKAAAbQAAAcAHAJQAHAKAJAAQAKAAAHgKQAGgJAAgcQAAgbgGgKQgHgJgKAAQgKAAgFAJgAgCAyQgKgKgCgOIAOgCQACANAGAFQAGAFAIAAQAKAAAHgHQAHgHAAgKQAAgJgHgHQgGgHgKAAQgEAAgGADIACgMIACAAQAJAAAHgEQAHgGAAgJQAAgIgFgFQgFgFgIAAQgJAAgFAFQgFAGgCAJIgNgCQACgOAKgHQAIgJANABQAKAAAIADQAHAFAFAGQAEAIAAAHQAAAIgEAGQgEAGgIAEQAKACAGAGQAFAIAAALQAAAOgKALQgLALgRAAQgPgBgJgIgAi0AuQgMgOAAggQAAgUAFgLQAEgNAIgHQAIgGANAAQAJAAAHADQAHAEAEAHQAFAHADAKQACAKAAAQQAAAUgEANQgEAMgIAHQgJAHgMAAQgRgBgJgMgAiqglQgHAKAAAbQAAAcAGAJQAHAKAKAAQAJAAAHgKQAHgJAAgcQAAgbgHgKQgHgJgJAAQgKAAgGAJgABSA5IAAgQIAQAAIAAAQgAhoA5QgBgGACgFQADgHAHgHQAGgIAMgKQATgOAGgJQAHgJAAgIQAAgIgGgGQgGgGgKAAQgKAAgGAGQgGAHAAAKIgPgCQACgPAJgJQAKgIAQAAQARgBAKAKQAJAJAAANQAAAHgDAHQgCAGgHAHIgWAUIgQAOQgEAEgCAEIA4AAIAAAOgAkaA5QgBgGACgFQADgHAHgHQAGgIAMgKQATgOAGgJQAHgJAAgIQAAgIgGgGQgGgGgKAAQgKAAgGAGQgGAHAAAKIgPgCQACgPAJgJQAKgIAQAAQARgBAKAKQAJAJAAANQAAAHgDAHQgCAGgHAHIgWAUIgQAOQgEAEgCAEIA4AAIAAAOg");
	this.shape_3.setTransform(1553.22,56.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("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");
	this.shape_4.setTransform(1507.725,26.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.theGrid},{t:this.chImage},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(828.1,462.5,1845.7000000000003,417.6);
// library properties:
lib.properties = {
	id: '98EA1A955B63F6489D0F00F6BFD1C4DE',
	width: 1600,
	height: 900,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['98EA1A955B63F6489D0F00F6BFD1C4DE'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;