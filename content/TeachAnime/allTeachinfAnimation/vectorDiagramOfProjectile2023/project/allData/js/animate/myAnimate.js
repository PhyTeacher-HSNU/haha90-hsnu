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


(lib.checker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(8,1,1).p("AiLgIIA4AAIAfCFIDAj5");
	this.shape.setTransform(2.25,-4.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.checker, new cjs.Rectangle(-15.7,-20.7,36,33), null);


(lib.btn3D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("Eh8/BGUMAAAiMnMD5/AAAMAAACMng");
	this.shape.setTransform(800,450);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1600,900);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("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");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(6,1,1).p("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");
	this.shape_1.setTransform(0.025,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("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");
	this.shape_2.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.title, new cjs.Rectangle(-238.6,-46.8,477.29999999999995,93.69999999999999), null);


(lib.texturePlane = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.5,1,1).p("AGQmPIBkAAIAABkIAABkIhkAAIAABkIAABjIAABkIhkAAIhkAAIAABkIAABkIAABkIhkAAIhkAAIhjAAIhkAAIhkAAIhkAAIhkAAIAAhkIAAhkIAAhkIAAhkIAAhjIAAhkIAAhkIAAhkIBkAAIAABkIhkAAAH0krIhkAAIhkAAIhkAAIAABkIAABkIAABjIhkAAIhkAAIAABkIAABkIAABkIAABkAGQmPIAABkIAABkIhkAAIhkAAIhkAAIhkAAIAABkIAABjIhjAAIhkAAIhkAAIhkAAIhkAAAH0hjIAABjIhkAAIhkAAIhkAAIAABkIhkAAIhkAAIhjAAIhkAAIAABkIAABkIAABkAH0hjIhkAAIhkAAIhkAAIhkAAIhkAAIhjAAIhkAAIAABjIAABkIhkAAIAABkIhkAAIhkAAAH0jHIAABkAH0BkIhkAAIAABkIAABkIAABkIhkAAIhkAAAH0BkIAABkIAABkIhkAAIhkAAIhkAAIhkAAIhkAAIhjAAIAABkAH0DIIhkAAIhkAAIAABkIAABkAH0EsIAABkIhkAAAH0AAIAABkADImPIBkAAIAABkIAABkIAABkIAABjIAABkIAABkIhkAAIhkAAIhkAAIhjAAIAABkIhkAAIhkAAIhkAAIhkAAADImPIAABkIhkAAIhkAAIAABkIhjAAIAABkIAABjIAABkIAABkIhkAAIhkAAIAABkIAABkAAAmPIBkAAIAABkIAABkIAABkIAABjIAABkIAABkIAABkIAABkAAAmPIAABkIhjAAIhkAAIAABkIAABkIhkAAIhkAAIAABjIAABkIhkAAABkmPIBkAAAjHmPIBkAAIAABkIAABkIhkAAIhkAAIhkAAIhkAAAjHmPIAABkIhkAAIhkAAIAABkIAABkIhkAAAkrmPIAABkIAABkIAABkIAABjIAABkIhkAAIAABkIAABkIAABkAmPmPIBkAAIBkAAAhjmPIBjAAAEsmPIBkAA");
	this.shape.setTransform(150,120);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(0.5,1,1).p("AGQmPIBkAAIAABkIAABkIhkAAIAABkIAABjIAABkIhkAAIhkAAIAABkIAABkIAABkIhkAAIhkAAIhjAAIhkAAIhkAAIhkAAIhkAAIAAhkIAAhkIAAhkIAAhkIAAhjIAAhkAH0krIhkAAIhkAAIhkAAIAABkIAABkIAABjIhkAAIhkAAIAABkIAABkIAABkIAABkAGQmPIAABkIAABkIhkAAIhkAAIhkAAIhkAAIAABkIAABjIhjAAIhkAAIhkAAIhkAAIhkAAAH0hjIAABjIhkAAIhkAAIhkAAIAABkIhkAAIhkAAIhjAAIhkAAIAABkIAABkIAABkAH0hjIhkAAIhkAAIhkAAIhkAAIhkAAIhjAAIhkAAIAABjIAABkIhkAAIAABkIhkAAIhkAAAH0jHIAABkAH0BkIhkAAIAABkIAABkIAABkIhkAAIhkAAAH0BkIAABkIAABkIhkAAIhkAAIhkAAIhkAAIhkAAIhjAAIAABkAH0DIIhkAAIhkAAIAABkIAABkAH0EsIAABkIhkAAAH0AAIAABkADImPIBkAAIAABkIAABkIAABkIAABjIAABkIAABkIhkAAIhkAAIhkAAIhjAAIAABkIhkAAIhkAAIhkAAIhkAAADImPIAABkIhkAAIhkAAIAABkIhjAAIAABkIAABjIAABkIAABkIhkAAIhkAAIAABkIAABkAAAmPIBkAAIAABkIAABkIAABkIAABjIAABkIAABkIAABkIAABkAAAmPIAABkIhjAAIhkAAIAABkIAABkIhkAAIhkAAIAABjIAABkIhkAAABkmPIBkAAAjHmPIBkAAIAABkIAABkIhkAAIhkAAIAABkIAABjIAABkIhkAAIAABkIAABkIAABkAjHmPIAABkIhkAAIhkAAIAABkIhkAAIAAhkIAAhkIBkAAIAABkIhkAAAkrmPIAABkIAABkIhkAAIAABkIhkAAAmPmPIBkAAIBkAAAhjmPIBjAAAEsmPIBkAA");
	this.shape_1.setTransform(50,120);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(0.5,1,1).p("AGQmPIBkAAIAABkIAABkIhkAAIAABkIAABjIAABkIhkAAIhkAAIAABkIAABkIAABkIhkAAIhkAAIhjAAIhkAAIhkAAIhkAAIhkAAIAAhkIAAhkIAAhkIAAhkIAAhjIAAhkIAAhkIAAhkIBkAAIAABkIhkAAAH0krIhkAAIhkAAIhkAAIAABkIAABkIAABjIhkAAIhkAAIAABkIAABkIAABkIAABkAGQmPIAABkIAABkIhkAAIhkAAIhkAAIhkAAIAABkIAABjIhjAAIhkAAIhkAAIhkAAIhkAAAH0hjIAABjIhkAAIhkAAIhkAAIAABkIhkAAIhkAAIhjAAIhkAAIAABkIAABkIAABkAH0hjIhkAAIhkAAIhkAAIhkAAIhkAAIhjAAIhkAAIAABjIAABkIhkAAIAABkIhkAAIhkAAAH0jHIAABkAH0BkIhkAAIAABkIAABkIAABkIhkAAIhkAAAH0BkIAABkIAABkIhkAAIhkAAIhkAAIhkAAIhkAAIhjAAIAABkAH0DIIhkAAIhkAAIAABkIAABkAH0EsIAABkIhkAAAH0AAIAABkADImPIBkAAIAABkIAABkIAABkIAABjIAABkIAABkIhkAAIhkAAIhkAAIhjAAIAABkIhkAAIhkAAIhkAAIhkAAADImPIAABkIhkAAIhkAAIAABkIhjAAIAABkIAABjIAABkIAABkIhkAAIhkAAIAABkIAABkAAAmPIBkAAIAABkIAABkIAABkIAABjIAABkIAABkIAABkIAABkAAAmPIAABkIhjAAIhkAAIAABkIAABkIhkAAIhkAAIAABjIAABkIhkAAABkmPIBkAAAjHmPIBkAAIAABkIAABkIhkAAIhkAAIhkAAIhkAAAjHmPIAABkIhkAAIhkAAIAABkIAABkIhkAAAkrmPIAABkIAABkIAABkIAABjIAABkIhkAAIAABkIAABkIAABkAmPmPIBkAAIBkAAAhjmPIBjAAAEsmPIBkAA");
	this.shape_2.setTransform(150,40);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#666666").ss(0.5,1,1).p("AGQmPIBkAAIAABkIAABkIhkAAIAABkIAABjIAABkIhkAAIhkAAIAABkIAABkIAABkIhkAAIhkAAIhjAAIhkAAIhkAAIhkAAIhkAAIAAhkIAAhkIAAhkIAAhkIAAhjIAAhkAH0krIhkAAIhkAAIhkAAIAABkIAABkIAABjIhkAAIhkAAIAABkIAABkIAABkIAABkAGQmPIAABkIAABkIhkAAIhkAAIhkAAIhkAAIAABkIAABjIhjAAIhkAAIhkAAIhkAAIhkAAAH0hjIAABjIhkAAIhkAAIhkAAIAABkIhkAAIhkAAIhjAAIhkAAIAABkIAABkIAABkAH0hjIhkAAIhkAAIhkAAIhkAAIhkAAIhjAAIhkAAIAABjIAABkIhkAAIAABkIhkAAIhkAAAH0jHIAABkAH0BkIhkAAIAABkIAABkIAABkIhkAAIhkAAAH0BkIAABkIAABkIhkAAIhkAAIhkAAIhkAAIhkAAIhjAAIAABkAH0DIIhkAAIhkAAIAABkIAABkAH0EsIAABkIhkAAAH0AAIAABkADImPIBkAAIAABkIAABkIAABkIAABjIAABkIAABkIhkAAIhkAAIhkAAIhjAAIAABkIhkAAIhkAAIhkAAIhkAAADImPIAABkIhkAAIhkAAIAABkIhjAAIAABkIAABjIAABkIAABkIhkAAIhkAAIAABkIAABkAAAmPIBkAAIAABkIAABkIAABkIAABjIAABkIAABkIAABkIAABkAAAmPIAABkIhjAAIhkAAIAABkIAABkIhkAAIhkAAIAABjIAABkIhkAAABkmPIBkAAAjHmPIBkAAIAABkIAABkIhkAAIhkAAIAABkIAABjIAABkIhkAAIAABkIAABkIAABkAjHmPIAABkIhkAAIhkAAIAABkIhkAAIAAhkIAAhkIBkAAIAABkIhkAAAkrmPIAABkIAABkIhkAAIAABkIhkAAAmPmPIBkAAIBkAAAhjmPIBjAAAEsmPIBkAA");
	this.shape_3.setTransform(50,40);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#009900","#000099"],[0,1],-31.5,-90.4,31.9,90.3).s().p("AuDMgIAA4/IcHAAIAAY/g");
	this.shape_4.setTransform(50,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.texturePlane, new cjs.Rectangle(-40,-40,241,201), null);


(lib.btnTweenVV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AitCuIACgkQA4ASALgKQADgEAAgHIAAjSIhUAAIAAggIBUAAIAAhLIAiAAIAABLIAkAAIAAAgIgkAAIAADcQAAAXgSALQgJAGgSAAQgXAAgmgLgABUCqQAbgkAHgsIAgAGQgMA3gYAhgAAfCtQAGgTAEgUQALg5AAhJIAAieQAAgIAKAAICUAAIAAgWIAiAAIAAAWICZAAIAAAfIkzAAQgGgBAAAEIAABVQAmggAVg1IAdAQQgKAWgPAUIAACNIgdAAIAAhnQgIAJgJAGIgRgUIAAAyQgBBogUBBgADLC1QgOAAgGgFQgQgLAAgeIAAg4IAgAAIAAA0QAAAMACACQAEAGALABIBIAAIALgDQAFgBABgFQADgGAAgcIAfAEQgBAxgGAGQgIAJgHACQgFACgPAAgAmQCRQAxAAAigCIAAg3IhGAAIAAgfIBGAAIAAgnIhMAAIAAgeIAoAAIgFgtIgsAAIAAggIBBAAIAAhcIAgAAIAABcIAYAAIAAhcIAgAAIAABcIA0AAIAAAgIgqAAIgJAtIAnAAIAAAeIhJAAIAAAnIBDAAIAAAfIhDAAIAAA0QAtgGAegKIAKAhQhQAThzAFgAlBgMIAqAAIAIgtIg6AAgAFSBcIAcgNQASAhAUAwIgeANQgVg0gPgdgADiBcIAagQQAUAeAJAUIgaAOIgdgwgAi+giIAfgJQAYA4ALA6IggAGQgKgzgYg8gADDBDQgKgCgBgJIAAhjIgMAOQgKgQgKgGQAdgfAOgsIAdAMIgJAWIA+AAQALgWAGgPIAaAMIgLAZIBRAAIgDAcIhQAAIAAARIBMAAIAAAZIhMAAIAAASIBMAAIAAAYIhMAAIAAASIBRAAIAAAdgADYAiQABAEACAAIA4AAIAAgSIg7AAgADYgEIA7AAIAAgSIg7AAgADYg9IAAAOIA7AAIAAgRIg4AAQgBABAAAAQgBAAAAABQgBAAAAABQAAAAAAAAgAmRiaIAcgNQANAWAOAiIgeANQgOgkgLgUgAjvhyQASgiAGgUIAcAMQgHAYgQAgg");
	this.shape.setTransform(0,0.022);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FFFF").ss(3,1,1).p("AnzkrIPnAAQBkAAAABkIAAGPQAABkhkAAIvnAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000066","#0066FF"],[0,1],0,30,0,-29.9).s().p("AnzEsQhkAAAAhkIAAmPQAAhkBkAAIPnAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#00FFFF"],[0,1],0,30,0,-29.9).s().p("AnzEsQhkAAAAhkIAAmPQAAhkBkAAIPnAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF00FF").ss(3,1,1).p("AnzkrIPnAAQBkAAAABkIAAGPQAABkhkAAIvnAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("AnzEsQhkAAAAhkIAAmPQAAhkBkAAIPnAAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{rotation:0}}]}).to({state:[{t:this.shape_3,p:{rotation:0}},{t:this.shape_1,p:{rotation:0}}]},1).to({state:[{t:this.shape_3,p:{rotation:180}},{t:this.shape_1,p:{rotation:180}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-31.5,123,63);


(lib.btnShootAndReset = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag+DEIBxmHIAdAAIhxGHgAnaCxIAAgiQAUAHAKAAQAEABACgCQADgFAAgGIAAhSQgQAHgOAFIgOgfQAZgJATgKIAAhjIgmAAIAAgiIAmAAIAAhHIAhAAIAABHIAdAAIAAAiIgdAAIAABSIAXgPIATAbIgqAbIAABqQgCAXgPAKQgIADgMAAQgOAAgVgFgAkBC2QgRAAgGgHQgTgNABgeIAAjBIAjAAIAAC6QAAANABAFQAIAGALAAIBNAAQARgDAFgGQADgIABgUIAjAGQgFAogFAKQgIALgJACQgIABgPAAgAmJCuQA0hvABiSIgWAAIAAgiIAWAAIAAhCIAjAAIAABCIA1AAIAAAiIg3AAQgGBTgGAwQgTBggTAmgAG9C1IAAgQIkRAAIAAAQIgjAAIAAlWQAAgLALAAIE/AAQANAAAAALIAAFWgACsiEIAAEHIERAAIAAkHQAAgGgEAAIkJAAQgGAAACAGgAi/BzIgFgnQAQAEAJAAQAIACABgCQAEgGABgPIAAgJQAFiOgFgHQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIgTAAQgECIgmBNIghgGQAphZABh2IggAAIAAgiIAgAAIAAgxIAhAAIAAAxIAsAAQAFAAABACQAGADAAAOQAAA+gBAzQAABfgTATQgGAGgLAAIgfgDgADcBYQgEAAAAgGIAAipQAAgFAEAAIC0AAQAGAAAAAFIAACpQAAAGgGAAgAD6g4IAABsQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIB3AAIACgCIAAhsIgCgCIh3AAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FFFF").ss(3,1,1).p("AnzkrIPnAAQBkAAAABkIAAGPQAABkhkAAIvnAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000066","#0066FF"],[0,1],0,30,0,-29.9).s().p("AnzEsQhkAAAAhkIAAmPQAAhkBkAAIPnAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#00FFFF"],[0,1],0,30,0,-29.9).s().p("AnzEsQhkAAAAhkIAAmPQAAhkBkAAIPnAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF00FF").ss(3,1,1).p("AnzkrIPnAAQBkAAAABkIAAGPQAABkhkAAIvnAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("AnzEsQhkAAAAhkIAAmPQAAhkBkAAIPnAAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{rotation:0}}]}).to({state:[{t:this.shape_3,p:{rotation:0}},{t:this.shape_1,p:{rotation:0}}]},1).to({state:[{t:this.shape_3,p:{rotation:180}},{t:this.shape_1,p:{rotation:180}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-31.5,123,63);


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


(lib.texturePlaneVV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(2,1,1).p("AhjiVIDHAAIAAErIjHAAg");
	this.shape.setTransform(10,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 圖層_2
	this.tp = new lib.texturePlane();
	this.tp.name = "tp";
	this.tp.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.tp).wait(1));

}).prototype = getMCSymbolPrototype(lib.texturePlaneVV, new cjs.Rectangle(-40,-40,240.3,200.3), null);


(lib.slTheta0 = function(mode,startPosition,loop) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgtA0QgRgSAAgiQAAglAVgSQARgPAYAAQAcABASASQARASAAAgQAAAZgIAPQgHAPgPAIQgPAJgSgBQgbAAgSgSgAgbgmQgMANAAAZQAAAaAMANQALANAQAAQARAAALgNQAMgNAAgaQAAgZgMgNQgLgMgRAAQgQAAgLAMg");
	this.shape.setTransform(203.1384,-11.9689,0.6,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADBCGIAAgdQAzANAKgHQADgCABgLIAAgdIi6AAQgMAogPAeIgagKQAcg1ACgnIAAhhIgQAIIgOgZQA4gXAWgnIAWAJQgDAFgBAEIBoAAIAPAPQgKASgRAOIBEAAQAIACAAAHIAACrQgBAQgIAIQgKAJgRABQgVgBghgFgACxAtIBRAAIAAgjIhRAAgABKAtIBNAAIAAgjIhNAAgACxgNIBRAAIAAghQAAAAgBgBQAAgBAAAAQgBgBAAAAQgBAAgBAAIhNAAgABKguIAAAhIBNAAIAAgkIhKAAQgBAAAAAAQgBAAAAABQAAAAAAABQgBABAAAAgABFhKIBiAAQAWgLALgMIhnAAQgOAQgOAHgAhuCKIAAkDQABgFAEAAIBWAAQAGABABAEIAADOQgBARgMAHQgNAKgkgHIgBgcQAZAGAFgEQAHgEAAgHIAAiuQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAgBAAAAIgrAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAABAAAAIAADtgAj2CKIAAiZIgLARIgZgKQApg5ALhHIAYAFQgIAlgIAbIAADNgAjYBYQAKgCAMgEIAAjJQAAgGAHAAQAdABAdgLIANAXQgaAKgZAAQgBAAAAABQAAAAAAAAQgBABABAAQAAABAAABIAACsIAigPIAKAYQgdAPg2AOg");
	this.shape_1.setTransform(-57.9,-0.45);

	this.valueText = new cjs.Text("00", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(172,-14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.valueText},{t:this.shape_1},{t:this.shape}]}).wait(1));

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

}).prototype = getMCSymbolPrototype(lib.slTheta0, new cjs.Rectangle(-86.2,-16.5,360.2,33.1), null);


(lib.chTLine = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(50.3,0,1.5003,0.5,0,0,0,0.2,0);
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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACwChIAAgfQAnAMAGgGQACgEAAgGIAAiHIhJAAQgEAAAAgEIAAh5QAAgFAEAAIA7AAQAJgSABgKIAeAKQgCAKgEAIIBTAAQAEAAAAAFIAAB5QAAAEgEAAIhFAAQAJAfAJAXQAdgXAQgSIAUAWQgUAVgeAXQATAiAmAfIgbAQQgogngbgzIAABIQgBAVgOAJQgIAFgOAAQgQAAgYgHgACugkIB/AAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIAAgXIiAAAgACuhvIAAAYICAAAIAAgYQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAIh/AAQAAAAAAAAQgBAAAAAAQAAABABAAQAAAAAAAAgAiXCeIgDgkQA6ASAOgMQANgJAFgWQAJgaABg4QABiAgBgGQgDgDgBAAIg3AAIAAA2QgBBegeA3QgSAggaATQgaATgzANIgUgbQAmgFAigTQAXgOAQgZQAdgtABhhIAAg2Ig+AAIAAgdICsAAIAHABQAEADAAANIgBCbQgFBwgjAZQgMAHgWAAQgWAAgfgHgABCCkIAAiZIguAHQgDgNgGgNIAfgEIAYggQgbgYgagOIAMgYIAOAHQARgfAOgjIAYAMQgLAbgXAqQAKAHAKAKQAPgfAJgbIAbAHQgMApgrA7IAfgFIgGgTIAZgHQANAmAEAaIgZAEQgDgHAAgIIgUADIAACdgAAPCOQAKgsACg/IAaAEQgDA1gIA3gACBB9QApglAOgmQABgHgFAAIgeAAIAAgcIA0AAIAQAIQgKAfgKAXQgPAdgfAmgABoAoIAbgEIALBIIgbABQgDghgIgkgAkyBbQgFgGAAgJIAAh7IgeAEIgFggIAjgFIAAhTIAfAAIAABRIBagMIAEAhIheALIAABrQgCAGAEgCQAdgEASgRQAMgJACgJQABgIgBgZIAdADQADAegEANQgGAOgMAMQgNAMgbAMQgPAHgZAFQgKAAgJgGg");
	this.shape_2.setTransform(69.025,-0.2676);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chTLine, new cjs.Rectangle(-26,-26,152,52), null);


(lib.chSlow = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(50.3,0,1.5003,0.5,0,0,0,0.2,0);
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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAtCSQguAUhBABIgHgcQApAAAdgFQAFgDAJgCIgqgZIAQgWQAiAWAaANQAMgEAMgJQAbgNAOgOQAAAAAAgBQgBAAAAgBQAAAAgBAAQgBAAgBAAIiSAAIAAgbIC1AAQALAIAJAFQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQgXAig4AeQAjAJAzAAIgJAdQg/gCgzgTgAh/CnIAAlNIAcAAIAAFNgAinAiQAIg5AAhFIAYACQgCBagHAlgAg0AiQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAgBIAAhKQABgEACAAIDVAAQAEAAAAAEIAABKQAAAEgEAAgABjAKIAkAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAIAAggQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAIgkAAgAAlAKIAiAAIAAgiIgiAAgAgbgXIAAAhIAkAAIAAgiIgkAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAgAhZhfIAYgCIADBeIgXABgAgmg+QgBAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBIAAhcQAAgEACAAIC4AAQADAAAAAEIAABcQAAAEgDAAgAgMhWICEAAQAAAAABAAQAAAAAAgBQAAAAAAAAQABAAAAgBIAAgOIiGAAgAgMiJIAAAOICGAAIAAgOQAAAAgBAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIiEAAQgBAAAAAAQAAAAAAAAQAAAAAAABQAAAAABAAg");
	this.shape_2.setTransform(57.05,-0.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chSlow, new cjs.Rectangle(-26,-26,152,52), null);


(lib.chEQV = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(100.45,0,2.5004,0.5,0,0,0,0.2,0);
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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FF66").s().p("Ah7C3QgPgDgHgDQgHgCgEgIQgFgJAAgIQAAgKAJgKIAHgHQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgCAGgBQAGAAACAEIAEAHQgJALAAAKQAAANAKAGQAHAFARAAQAKgBAMgDQAEAAAIgIQAGgDAEgHIAHgMIAGgQQAEgIABgHIAGgcIgBABIgEAAIgGAGIgLAOIgPAKQgIAEgOAAQgNAAgGgEQgIgIgCgCQgDgHgCgNQgDgLAAgJQAAgHADgOQACgOADgIIAHgPQAEgHAEgHIAGgGIAFgFIAMgKQAIgHAHgBQAJgDAOgBQAFABAOAEQAOAFAFABQAGgBABgDIADgEQAFgEADAAQAGgBAAAHQAAAFgDAMIgFARIgUBnQgCAMgHAVIgHAPQgCAEgGAIIgKALQgFAFgIADQgGADgPADQgOACgJABQgIgBgOgCgAhAgWQgEACgGAHIgIAKIgGAMIgFAOQgGAYAAAQQAAASAEAGQAFAKALgBQAHABADgCIAEgDQAGgEAFgFIAJgLQAGgGACgGIAHgLIAFgQQAGgZAAgMQAAgYgKgBQgZAAgKAHgABFBrQgIgHAAgUQAAgJAKgtIAFgYQAGgMAAgLIAAgDIgaAAQAFgBgBgDIgDgHQAGgCAGAAQAMgDAEgGQAFgGADgLIAGgSIgDAAQAAAAAAAAQAAAAAAAAQABAAABAAQABgBABAAIAWABIABABIgJAnIAxAAIgDARIgyAAIgFAYQgBAIgFAPQgKAtAAAIQAAAKAEAGIAEADQACACAHgBQAKABAKgKIAHgHIAGgIIAKAKIgFAGIgQARQgGAEgIADIgIADQgGACgGAAQgPAAgKgKgAB4hsIgCgFIAGgGIAFgGIAIgCQAEAAAAgHIAAgDQiCACg6gCIhiAEQgcABAHgUIE0gCIgYgUIAIgKIAgAbIAGADQAEAEAAAGQAAAGgCABIgDABIgZAYIgDAEQgCAEgGAAQgGAAgBgEgACOiIIABgBIgBAAIAAABg");
	this.shape_2.setTransform(183.1208,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FFFF").s().p("AAsCPQgQgWAAghQAAghAQgWQAQgXAVAAQAXAAAPAXQAPAWAAAhQAAAhgPAWQgPAXgXAAQgVAAgQgXgAA+ApQgIAUgBAbQABAcAIATQAIATAMAAQAMAAAIgTQAIgTAAgcQAAgbgIgUQgIgTgMAAQgMAAgIATgAh2BfIgCgGQgEgGAAgSQABgaAFgaIAHgsIAAgJQgBgCgGAAQgIAAgKAJIgKAKIgIgIIAJgKQAGgFAFgEIANgHQAIgEAIAAQAXAAAAAWIgDAXIgFAYQgFAtgBAGIgBANQAAAEAGAAQAKAAAIgGQAFgEAGgHQAMgKALgNQAKgOAHgOQAJgVABgPQAAgJgBgDQgDgDgGAAQgKAAgFAHIgKAMIgJgIQALgQAHgDIAKgHQAIgEAIAAQAXAAAAAZQAAAIgHATQgDAIgHAMIgLAUIgMASIggAgQgFAFgOAHQgMAHgRAAQgGAAgDgEgAB3hXQgDgCAAgGQAAgCAZgUIkxABIAAgRIExAAQgDgEgMgKQgKgHAAgCQAAgGADgBIAFgCIAVARIAMAJQAJAIAAAGQgBAIgIAGIgMAJIgVARIgFgCg");
	this.shape_3.setTransform(110.4,2.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AFpBpIAAhdIhYAAIAAgWIBYAAIAAhdIAXAAIABAAIAABdIBXAAQABAFAAAQQgCABhWAAIAABdgAnYAsIAAgVIDIAAIABAAQAAARgBAEIiPACQgyAAgHgCgAnYgVIAAgXIDIAAIABACQAAARgBAEg");
	this.shape_4.setTransform(109.4563,2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF3333").s().p("Ag6B6QgFgJAAgPQAAgLAHgpIAFgrIABgJQgBgCgGAAQgGAAgKAIIgKAJIgJgIQAIgKALgHIAMgIQAJgEAJAAQAVAAABAYIgDAVIgEAYQgHAqAAALIABAPIAEABQAOgEAPgNQALgKAKgOQAJgJAIgTQAKgVAAgQQABgOgKAAQgIABgGAHQgHAIgDADIgGgCQgEgBABgGQgBgDAJgHIAKgHQADgCAIgFQAGgFAJAAQAXAAgBAYQABALgIARQgCAIgIAOIgLAUQgJAOgEAEIgOAQIgQAOQgEAFgPAIQgMAGgQAAQgHAAgEgKgAArg8QAEgFAHgGIAPgMIiZgBIAAgQICZgBQgNgHgNgOQAGgFADgEQAMAJAJAIIAOAKQAGAGABAGQgBAGgIAIIgMAJIgUASIgKgJg");
	this.shape_5.setTransform(42,-0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("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");
	this.shape_6.setTransform(116.3,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66FF66").s().p("Ah7C3QgPgDgHgDQgHgCgEgIQgFgJAAgIQAAgKAJgKIAHgHQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgCAGgBQAGAAACAEIAEAHQgJALAAAKQAAANAKAGQAHAFARAAQAKgBAMgDQAEAAAIgIQAGgDAEgHIAHgMIAGgQQAEgIABgHIAGgcIgBABIgEAAIgGAGIgLAOIgPAKQgIAEgOAAQgNAAgGgEQgIgIgCgCQgDgHgCgNQgDgLAAgJQAAgHADgOQACgOADgIIAHgPQAEgHAEgHIAGgGIAFgFIAMgKQAIgHAHgBQAJgDAOgBQAFABAOAEQAOAFAFABQAGgBABgDIADgEQAFgEADAAQAGgBAAAHQAAAFgDAMIgFARIgUBnQgCAMgHAVIgHAPQgCAEgGAIIgKALQgFAFgIADQgGADgPADQgOACgJABQgIgBgOgCgAhAgWQgEACgGAHIgIAKIgGAMIgFAOQgGAYAAAQQAAASAEAGQAFAKALgBQAHABADgCIAEgDQAGgEAFgFIAJgLQAGgGACgGIAHgLIAFgQQAGgZAAgMQAAgYgKgBQgZAAgKAHgABFBrQgIgHAAgUQAAgJAKgtIAFgYQAGgMAAgLIAAgDIgZAAQAEgBgBgDIgDgHQAGgCAGAAQAMgDAEgGQAFgGADgLIAGgSIgDAAQAAAAAAAAQAAAAAAAAQABAAABAAQABgBABAAIAWABIABABIgJAnIAxAAIgDARIgyAAIgFAYQgBAIgFAPQgKAtAAAIQAAAKAEAGIAEADQACACAHgBQAKABAKgKIAHgHIAGgIIAKAKIgFAGIgQARQgGAEgIADIgIADQgGACgGAAQgPAAgKgKgAB4hsIgCgFIAGgGIAFgGIAIgCQAEAAAAgHIAAgDQiCACg6gCIhiAEQgcABAHgUIE0gCIgYgUIAIgKIAgAbIAGADQAEAEAAAGQAAAGgCABIgDABIgZAYIgDAEQgCAEgGAAQgGAAgBgEgACOiIIABgBIgBAAIAAABg");
	this.shape_7.setTransform(183.1208,0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00FFFF").s().p("AAsCQQgQgXAAghQAAggAQgXQAQgXAVAAQAXAAAPAXQAPAXAAAgQAAAhgPAXQgPAWgXAAQgVAAgQgWgAA+ApQgJAUAAAbQAAAcAJATQAIATAMAAQAMAAAJgTQAHgTAAgcQAAgbgHgUQgJgTgMAAQgMAAgIATgAh2BfIgCgGQgEgGAAgSQABgaAFgaIAHgsIAAgJQgBgCgGAAQgIAAgKAJIgKAKIgIgIIAJgKQAGgFAFgEIANgHQAIgEAIAAQAXAAAAAWIgDAXIgFAYQgFAtgBAGIgBANQAAAEAGAAQAKAAAIgGQAFgEAGgHQAMgKALgNQAKgOAHgOQAJgVABgPQAAgJgBgDQgDgDgGAAQgKAAgFAHIgKAMIgJgIQALgQAHgDIAKgHQAIgEAIAAQAXAAAAAZQAAAIgHATQgDAIgHAMIgLAUIgMASIggAgQgFAFgOAHQgMAHgRAAQgGAAgDgEgAB3hXQgDgCAAgGQAAgCAZgUIkxABIAAgRIExAAQgDgEgMgKQgKgHAAgCQAAgGADgBIAFgCIAVARIAMAJQAJAIAAAGQgBAIgIAGIgMAJIgVARIgFgCg");
	this.shape_8.setTransform(110.4,2.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AFpBpIAAhdIhYAAIAAgWIBYAAIAAhdIAXAAIABAAIAABdIBXAAQABAFAAAQQgCABhWAAIAABdgAnYAsIAAgVIDIAAIABAAQAAARgBAEIiPACQgyAAgHgCgAnYgVIAAgXIDIAAIABACQAAARgBAEg");
	this.shape_9.setTransform(109.4563,2.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF3333").s().p("Ag6B6QgFgJAAgPQAAgLAHgpIAFgrIABgJQgBgCgGAAQgGAAgKAIIgKAJIgJgIQAIgKALgHIAMgIQAJgEAJAAQAVAAABAYIgDAVIgEAYQgHAqAAALIABAPIAEABQAOgEAPgNQALgKAKgOQAJgJAIgTQAKgVAAgQQABgOgKAAQgIABgGAHQgHAIgDADIgGgCQgEgBABgGQgBgDAJgHIAKgHQADgCAIgFQAGgFAJAAQAXAAgBAYQABALgIARQgCAIgIAOIgLAUQgJAOgEAEIgOAQIgQAOQgEAFgPAIQgMAGgQAAQgHAAgEgKgAArg8QAEgFAHgGIAPgMIiZgBIAAgQICZgBQgNgHgNgOQAGgFADgEQAMAJAJAIIAOAKQAGAGABAGQgBAGgIAIIgMAJIgUASIgKgJg");
	this.shape_10.setTransform(42,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.chEQV, new cjs.Rectangle(-26.3,-26,252.5,52), null);


(lib.chEQS = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(100.45,0,2.5004,0.5,0,0,0,0.2,0);
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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FF66").s().p("AkaDUQAEgVALgKQAFgLAOgOIAKgMIALgMQADgDAEgKQAGgLgBgHQAAgMgGgHQgGgIgMABQgMAAgGAGIgJAPIgNAAIAAgVQAAgGAHgBIAMAAQAOgEAMAAQAUAAAJAIQAMALAAAOQAAASgMAPIgmArQgNAOgEAIIAwAAQAIgFACgHQAAAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAAAIAKAAIAAAXQgCAEAAAEgAhcCuIgHgFQgGgDgBgDQgBgEAAgIQgBgGABgFQACgEAIgIIAHgGIAKAIQgHAKAAAIQAAAKAHAGQAFAEARAAQAIAAAIgDQAJgDAFgEIAIgKIAFgKQAFgKADgPIAHgaIgKAKIgKALQgHAFgGADIgFADQgFACgHAAQgJAAgGgEQgGgDgFgIQgFgNAAgQQAAgOAFgXIAGgNIAIgLIAIgLQAEgFAHgCQAVgKAKAAQAFAAAKAFQALAEAEAAQAFAAACgEQABgFAEAAQAHAAAAABIACABIAAADIgGAdIgGAcIgMA7QgDANgFAPIgGAMQgBAEgIAIQgCADgHAFQgHAEgFACQgQAEgZAAQgGAAgQgFgAgZACQgEACgHAIQgGAGgCAFIgHAOQgDANgEAZQACAQADAGQADAHAJAAIAJgBIAFgDIAQgQIAFgKQAHgLACgLQAGgRAAgPQAAgNgGgEQgDgEgJAAQgIAAgIADgABbB3IgGgGQgFgGAAgRQgBgGAEgPIAGgWIAJgnIAAgEIgXAAQgBgJAKgBQANgDACgEQAIgJAEgUIABgBIASAAIgFAhIAnAAIABACQAAAJgCgBQABADgsABIgJAoQgHAogBAEQAAARAPAAQAHAAAJgIQAIgHACgFIAJAIQgLANgHAGQgFADgKADQgLADgHAAQgHAAgEgCgAkoAvIAAgPIB6AAIAAAPgADLAVIAHgMIASgTQALgJAIgLIAIgKQAFgIAAgKQAAgMgGgFQgEgFgMAAQgJAAgIAGQgCACgDAFIgIAAQgGAAgBAGQAAgKgBAKIAAgUQAcgKAMAAQAIAAAJACQAKACAEAEIAHAHQAEAFgBALQAAAHgDAHIgHALIgJAJIgJAJIghAkIAtAAQAHgGAAgFIABgBIAJAAIABABIgCAbQgBABhSAAQAAgIAFgHgAjqANIgcAAIgIAAIAAgBIAAgIQAAgGAJACIANABQAFgBABgEIABg1QAAgtgBgGQgBgCgEgBQgGAAgIAHIgKAHIgGgJQAJgDARgMQAFgCAHgGQAIgFAKgCIABAKQAABigGAcQAEgCAHADQADABAKgCQALgCAAAGQAAACAAACQAAABAAABQAAAAAAAAQABgBAAgCIAAAFQgCABgoAAIgCAAgAESiTQgCgBgBgGQAAgBAJgIIALgJIpbABIAAgOIJbAAIgUgSIAHgIIATAPQAQANAAAFQgBAEgHAHIgJAHIgSAOIgEgBg");
	this.shape_2.setTransform(184,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AFmBWIAAgSIAAg7IgOAAIg7AAIgBAAIAAgRIABAAIAAgBIA7AAIAOAAIAAgSIAAg7IASAAIABAAQACAFAAAJIgBA7IAAAEIA7gBQAIAAAGACIAAAPIAAABIAAAAIgBABIgNAAIg7AAIAAAEIABA7QAAAIgCAGQgEABgGAAQgGAAgDgBgAlLAlIg7AAIg7AAIAAgBIgBAAIAAgBIAAgQIAAgBIA7AAIA7AAIAvAAIABABQACADAAAGQAAAFgCAEIgvAAgAlLgSIg7AAIg7AAIAAgBIgBAAIAAgBIAAgQIAAgBIA7AAIA7AAIAvAAIABABQACADAAAGQAAAFgCAEIgvAAg");
	this.shape_3.setTransform(99.55,4.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FFFF").s().p("AgSCGQgNgTAAgbQAAgbANgTQANgTASAAQASAAANATQANATAAAbQAAAbgNATQgNATgSAAQgSAAgNgTgAgCAyQgHAQAAAXQAAAWAHAQQAGAQAJAAQAKAAAHgQQAGgQAAgWQAAgXgGgQQgHgQgKAAQgJAAgGAQgABuBZQgHgFAAgRQAAgLAIgiIAJglIAAgEIgWAAQAAAAAAgBQAAgBABAAQAAgBAAAAQAAAAAAAAQgBgDAEgCIAKgDQAEgBAHgHQAGgGABgGIAEgPQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIATABIgHAgIApAAQgGABACAFIABAHIgDABIgSABQgUACgBABIgBAGIgGAXIgGAcQgEARAAAGQAAAHAEAFQAEAFAGAAQAHAAAEgCIAFgGIAMgMIAFABQADAAAAAHQAAAFgDACIgFADIgKAIQgPAKgMAAQgNAAgIgIgAieBFIAFgoIAFgmIABgKQAAgBgHAAQgDAAgJAIIgKAIIgHgIQAFgGAMgJQANgJALAAQASAAAAATQAAAJgFAdQgGAkAAAIIgBALQAAACAGAAQAHAAAHgGIAKgIQAHgGALgOQAMgPADgIQAIgSAAgMIAAgKQgCgBgHAAQgHAAgFAGIgIAJIgIgHQADgFAMgKQALgJAMAAQASAAAAATQAAAQgNAYIgJARQgFAJgGAFQgIALgEAEIgOAMQgEADgMAHQgLAGgKAAQgQAAAAgcgACahXQgDgBAAgGQAAgCAKgIIAJgHIABgCIlrAAIAAgNIFqAAQgPgMgFgHIAIgHQAFADAOANIAJAHQAHAGAAAFQAAAFgIAFIgKAIQgHAEgKAKIgEgBg");
	this.shape_4.setTransform(100.025,2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9999").s().p("AgyCJQgSgBgGgGQgEgFADgLQAFgOABgGQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAIAOABQAFAAAAAJQAAAMACACQAIAJAPAAQASAAAKgKQAEgEADgIQADgIAAgIQAAgPgMgMIgTgPIgSgRQgJgOAAgOQAAgLAGgMQAFgIAGgFQAHgHAJgDQANgFAIAAQAIAAASACIAbAFIgHAjIgOABQgFAAAAgJQABgLgBgCQgFgIgQAAQgQAAgKAJQgEADgDAHQgDAHAAAHQAAAKAEAGIAJAJIAIAHIAKAIIAJAHQAGAFADAFQAJARAAAOQAAALgGANQgEAIgJAIQgIAHgJADQgKAEgRAAIgOAAIgLAAgAAmhIQgCgBAAgGQAAgCASgNIABgCIABgBIhQAAIAAgNIBPAAQgDgEgIgIIgIgHQAAgGACgBIAEAAQAHADALAMIAKAHQAHAGAAAGQAAADgHAHIgKAHIgRAPIgFgCg");
	this.shape_5.setTransform(37.565,-1.5875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("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");
	this.shape_6.setTransform(122.54,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AFmBWIAAgSIAAg7IgOAAIg7AAIgBAAIAAgRIABAAIAAgBIA7AAIAOAAIAAgSIAAg7IASAAIABAAQACAFgBAJIAAA7IAAAEIA7gBQAJAAAFACIAAAPIAAABIAAAAIgBABIgNAAIg7AAIAAAEIAAA7QABAIgCAGQgDABgHAAQgGAAgDgBgAlLAlIg7AAIg7AAIgBgBIAAAAIAAgBIAAgQIAAgBIA7AAIA7AAIAvAAIABABQACADAAAGQAAAFgCAEIgvAAgAlLgSIg7AAIg7AAIgBgBIAAAAIAAgBIAAgQIAAgBIA7AAIA7AAIAvAAIABABQACADAAAGQAAAFgCAEIgvAAg");
	this.shape_7.setTransform(99.55,4.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66FF66").s().p("AkaDVQAEgWALgLQAFgKAOgOIAKgMIAKgMQAEgCAEgLQAGgMAAgGQgBgMgGgIQgGgGgMgBQgMAAgGAHIgJAQIgNAAIAAgWQgBgGAIAAIANgBQANgEAMAAQAUAAAKAIQAMAKgBAPQAAASgMAPIgmAqQgNAPgEAIIAwAAQAIgEACgJQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBIAJABIAAAYQgBADAAAFgAhdCtIgGgEQgGgEAAgDQgCgDAAgIQgBgGACgFQABgEAJgIIAGgGIALAIQgIAJAAAJQAAAKAIAGQAEAEARAAQAHAAAJgDQAKgDADgEIAIgKIAGgKQAFgKAEgPIAGgaIgLAKIgKALQgGAFgGADIgGADQgEACgHAAQgJAAgHgEQgFgDgFgIQgFgNAAgQQAAgOAFgXIAHgNIAHgLIAIgLQAEgFAHgCQAVgKAKAAQAFAAAKAEQAKAFAGAAQAEAAABgFQACgEAEAAQAHAAABABIABABIAAACIgGAeIgGAcIgNA7QgCANgGAPIgFAMQgCAFgGAHQgDADgHAFQgHAEgFACQgQAEgZAAQgGABgRgHgAgYACQgFADgHAGQgGAHgCAFIgGAOQgFANgDAZQACAQADAGQACAHAKAAIAJgBIAFgDIAPgQIAHgKQAGgMACgKQAFgRABgQQgBgLgFgGQgDgDgJAAQgJAAgGADgABcB2IgHgFQgFgHAAgQQAAgGADgOIAGgXIAJgnIAAgEIgXABQgBgKAKgCQANgCADgEQAHgJAEgUIABgBIASAAIgFAhIAnAAIABACQAAAJgBgBQgBADgrABIgJAoQgHAogBAFQABAQAOAAQAGAAAKgIQAIgGADgGIAJAIQgLANgIAGQgFADgKADQgLAEgHAAQgHAAgDgEgAkoAuIAAgNIB6AAIAAANgADLAVIAHgMIASgTQALgIAIgMIAIgKQAEgIABgJQgBgNgFgFQgEgFgMAAQgKAAgHAHQgCABgCAFIgIAAQgHAAgBAGQAAgKAAAJIAAgTQAbgKALAAQAJAAAJACQALADADADIAHAHQADAFAAAKQAAAIgDAIIgHAKIgIAJIgJAJIgiAkIAtAAQAHgGAAgFIABgBIAJABIABAAIgCAbQAAABhSAAQgBgIAFgHgAjqANIgdAAIgHAAIAAgCIAAgHQgBgGAKACIANABQAEgBACgDIABg2QAAgtgBgGQgBgDgEABQgGAAgIAFIgLAHIgFgIQAKgDARgMQAEgCAHgGQAIgFAKgCIABAKQgBBigFAcQAEgCAIACQABABALgBQAKgCAAAGQAAAJACgFIgBADQgBACgoAAIgCAAgAESiTQgDgBABgGQgBgBAKgIIAKgJIpbABIAAgPIJbAAIgTgRIAGgIIATAOQAPAOAAAEQAAAFgHAHIgJAGIgSAQIgEgCg");
	this.shape_8.setTransform(184,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00FFFF").s().p("AgSCGQgNgTAAgbQAAgbANgTQANgTASAAQASAAANATQANATAAAbQAAAbgNATQgNATgSAAQgSAAgNgTgAgCAyQgHAQAAAXQAAAWAHAQQAGAQAJAAQAKAAAHgQQAGgQAAgWQAAgXgGgQQgHgQgKAAQgJAAgGAQgABuBaQgHgGAAgSQAAgLAIghIAJglIAAgEIgWABQAAgBAAgBQAAgBAAAAQABgBAAAAQAAAAAAAAQgBgDAEgCIAKgDQAEgBAHgHQAGgFABgHIAEgPQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIATABIgHAgIApAAQgGAAACAGIABAHIgDAAIgSACQgUABgBACIgBAGIgGAXIgGAbQgEASAAAGQAAAHAEAFQAEAFAGAAQAHAAAEgCIAFgGIAMgMIAFABQADAAAAAGQAAAHgDABIgFADIgKAIQgPAKgMAAQgNAAgIgHgAieBEIAFgnIAFgmIABgJQAAgCgHAAQgDAAgJAHIgKAJIgHgIQAFgGAMgJQANgJALAAQASAAAAATQAAAJgFAdQgGAkAAAIIgBAKQAAADAGAAQAHAAAHgFIAKgJQAHgGALgOQAMgPADgIQAIgTAAgLIAAgJQgCgCgHAAQgHAAgFAGIgIAJIgIgHQADgFAMgKQALgJAMAAQASAAAAATQAAARgNAXIgJAQQgFALgGAFQgIAKgEADIgOANQgEAEgMAGQgLAGgKAAQgQAAAAgdgACahXQgDgBAAgGQAAgDAKgHIAJgHIABgCIlrAAIAAgNIFqAAQgPgMgFgHIAIgHQAFADAOANIAJAHQAHAFAAAHQAAADgIAHIgKAHQgHAEgKAKIgEgBg");
	this.shape_9.setTransform(100.025,2.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9999").s().p("AgyCJQgSgBgGgGQgEgFADgLQAFgOABgGQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAIAOABQAFAAAAAJQAAAMACACQAIAJAPAAQASAAAKgKQAEgEADgIQADgIAAgIQAAgPgMgMIgTgPIgSgRQgJgOAAgOQAAgLAGgMQAFgIAGgFQAHgHAJgDQANgFAIAAQAIAAASACIAbAFIgHAjIgOABQgFAAAAgJQABgLgBgCQgFgIgQAAQgQAAgKAJQgEADgDAHQgDAHAAAHQAAAKAEAGIAJAJIAIAHIAKAIIAJAHQAGAFADAFQAJARAAAOQAAALgGANQgEAIgJAIQgIAHgJADQgKAEgRAAIgOAAIgLAAgAAmhIQgCgBAAgGQAAgCASgNIABgCIABgBIhQAAIAAgNIBPAAQgDgEgIgIIgIgHQAAgGACgBIAEAAQAHADALAMIAKAHQAHAGAAAGQAAADgHAHIgKAHIgRAPIgFgCg");
	this.shape_10.setTransform(37.565,-1.5875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.chEQS, new cjs.Rectangle(-26.3,-26,252.5,52), null);


(lib.chDT = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(50.3,0,1.5003,0.5,0,0,0,0.2,0);
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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AC9CfIAAgfIATAGQAQADAEgFQACgEAAgFIAAiUIhOAAIAAgdIB3AAIAGgXIhnAAQgJgCABgKIAShDQADgGAFAAIB8AAQALgBgCAMIgaBhIAsAAIAAAdIhQAAQAKAwAOAdQAVAlAnAqIgbAQQgjgogWgrIgDgGIAABIQgBAVgPAIQgIAFgOAAQgOAAgTgFgADHhqIBVAAIAIgcIhVAAgAARCAIAygLIAAhvIguAAIAAgbIAuAAIAAgjIgjAAIAAgcIBqAAIAAAcIgpAAIAAAjIAqAAIAAAbIgqAAIAABnQAegKAIgCIAHAaQAlgfASgiIAZAOQglA6gmAZIgWgVQAEgEAGgCQhnAbgKABgAiOCcQgZAAgMgOQgKgKAAgQIAAiUQAAgGAGAAIB5AAIAAhTQAAgEgFAAIh2AAIAAgfICQAAQAJAAAAAIIAACRIgeAAIAAgGIhfAAIgBADIAABuQgBAKAEAEQAGAHAJAAIBJAAQAIAAAFgEQAHgFACgGQACgIgBgoIAdAEQADAtgFATQgGAMgKAJQgHAEgRABgAlSCaIAAh7QABgIAJAAIBxAAQAKAAAAAIIAABhQAAAKgKAAIheAAIAAAQgAk1A3IAAA3IBEAAQAGgBAAgFIAAgxQAAgEgFAAIhAAAQgFAAAAAEgAAdBmQgDgtgFgfIAbgDQAIArAAAkgABtBLIAMgzIAZAGIgOA1gAEhAbQAXgYAIgQIAYAPQgMAVgVAWgACaADIAWgQQATAUAOAXIgWAOQgTgcgOgNgAlIAHIAAgbIBxAAIAAAbgAlIglIAAgcIBxAAIAAAcgAlbhSIAAgdICYAAIAAAdgAAMhrQA5gfANgZIAbADIgCAFQAYASAaARIgVAXQgYgSgSgTQgVAYgjAXgAlIiAIAAgeIBtAAIAAAeg");
	this.shape_2.setTransform(71,-0.325);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chDT, new cjs.Rectangle(-26,-26,152,52), null);


// stage content:
(lib.myAnimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// helper
	this.title = new lib.title();
	this.title.name = "title";
	this.title.parent = this;
	this.title.setTransform(199.95,49.95,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1));

	// UI
	this.btnShootAndReset = new lib.btnShootAndReset();
	this.btnShootAndReset.name = "btnShootAndReset";
	this.btnShootAndReset.parent = this;
	this.btnShootAndReset.setTransform(1417.85,766.1);
	new cjs.ButtonHelper(this.btnShootAndReset, 0, 1, 2, false, new lib.btnShootAndReset(), 3);

	this.chEQV = new lib.chEQV();
	this.chEQV.name = "chEQV";
	this.chEQV.parent = this;
	this.chEQV.setTransform(1412.55,416.8,1.5,1.5,0,0,0,100,0);

	this.chEQS = new lib.chEQS();
	this.chEQS.name = "chEQS";
	this.chEQS.parent = this;
	this.chEQS.setTransform(1412.55,293.1,1.5,1.5,0,0,0,100,0.1);

	this.instance = new lib.texturePlane();
	this.instance.parent = this;
	this.instance.setTransform(-762.85,266.9);

	this.instance_1 = new lib.texturePlaneVV();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-801.2,359.9,1,1,0,0,0,100,100);

	this.slCameraRR = new lib.theSlider();
	this.slCameraRR.name = "slCameraRR";
	this.slCameraRR.parent = this;
	this.slCameraRR.setTransform(1350,850);

	this.slTheta0 = new lib.slTheta0();
	this.slTheta0.name = "slTheta0";
	this.slTheta0.parent = this;
	this.slTheta0.setTransform(1368,534.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.slTheta0},{t:this.slCameraRR},{t:this.instance_1},{t:this.instance},{t:this.chEQS},{t:this.chEQV},{t:this.btnShootAndReset}]}).wait(1));

	// btn3D
	this.btnTweenVV = new lib.btnTweenVV();
	this.btnTweenVV.name = "btnTweenVV";
	this.btnTweenVV.parent = this;
	this.btnTweenVV.setTransform(1504.7,678.9,0.6,0.6,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.btnTweenVV, 0, 1, 2, false, new lib.btnTweenVV(), 3);

	this.chSlow = new lib.chSlow();
	this.chSlow.name = "chSlow";
	this.chSlow.parent = this;
	this.chSlow.setTransform(1534.7,615.75,1,1,0,0,0,50,0);

	this.chDT = new lib.chDT();
	this.chDT.name = "chDT";
	this.chDT.parent = this;
	this.chDT.setTransform(1382.35,677.85,1,1,0,0,0,50,0);

	this.chTLine = new lib.chTLine();
	this.chTLine.name = "chTLine";
	this.chTLine.parent = this;
	this.chTLine.setTransform(1432.35,615.75,1,1,0,0,0,100,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(101.2,875.708);

	this.btn3D = new lib.btn3D();
	this.btn3D.name = "btn3D";
	this.btn3D.parent = this;
	new cjs.ButtonHelper(this.btn3D, 0, 1, 2, false, new lib.btn3D(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn3D},{t:this.shape},{t:this.chTLine},{t:this.chDT},{t:this.chSlow},{t:this.btnTweenVV}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.2,450,1783.2,450);
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