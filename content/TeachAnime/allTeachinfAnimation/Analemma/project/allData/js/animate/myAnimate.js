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


(lib.zoomBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s("#FFFF00").ss(3,1,1).rr(-32.5,-32.5,65,65,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.zoomBG, new cjs.Rectangle(-34,-34,68,68), null);


(lib.theNumberStepperBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000066").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.theNumberStepperBG, new cjs.Rectangle(-50,-50,100,100), null);


(lib.numberStepperBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AiVAyICVhjICWBjg");
	this.shape.setTransform(0,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFF00").ss(2,1,1).p("ACWAyIkrAAICVhjg");
	this.shape_1.setTransform(0,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFF00").ss(0.1,1,1).p("ACWAyIkrAAICVhjg");
	this.shape_2.setTransform(0,5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF00FF").s().p("AjHDYIAAmvIGPAAIAAGvg");
	this.shape_3.setTransform(0,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape},{t:this.shape_1}]},1).to({state:[{t:this.shape},{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-16.6,40,43.2);


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


(lib.btnZoomM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AhwjgIBwAAIBxAAIBwAAIAABxIAABvIAABxIAABwIhwAAIhxAAAjghvIAAhxIBwAAIAABxgABxhvIhxAAIAABvIhwAAIhwAAIAAhvABxAAIhxAAIAABxIAABwIhwAAIhwAAIAAhwIAAhxABxhvIAABvIAABxIhxAAIhwAAIhwAAAhwhvIAABvIAABxIAABwABxBxIAABwAAAhvIhwAAADhAAIhwAAADhBxIhwAAADhhvIhwAAAAAjgIAABxABxjgIAABx");

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


(lib.btnZoom3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(2,1,1).p("AhhiDQAggfBDAXQAYAIAWAMQAlAUAiAfAAbCWQgYgSgXgYQgsgsgZguQgMgVgIgYQgCgIgCgHQgPg5Abgc");
	this.shape.setTransform(-4.2453,0.6181);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("ADhA1IAAAGQgBAhgjAaQgNAJgRAJQgWALgZAHQgyAPg+AAQgHAAgIgBQg1gBgsgNQgYgHgWgLQhAgggCgtIAAgGQABhaBBhBQAWgWAYgOQAzgeA9AAQA+AAAyAeQAZAOAWAWQBBBBABBagAjgA1QACgsBAgfQABgBABgBQAVgKAXgGQAzgPA9AAQApAAAkAGQATAEAQAFQAZAHAWALQBAAfACAs");
	this.shape_1.setTransform(0,-1.275);

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


(lib.btnZoom2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AADjgQBbABBBBBQAWAWAPAYQAdAzAAA9ABihwIBiAAAADjgQAtACAgBAQALAWAHAYQAPAzAAA9IBwAAQAAA/gdAyQgPAZgWAVQhBBBhbABIgDAAIgCAAQgtgCgghAQgLgVgHgZIBhAAIBiAAQgHAZgLAVQggBAgtACAAAjgIAABwIBiAAAAAjgIADAAAAAAAIAABxIAABwABiBxIBiAAAAAAAIBxAAQAAA/gPAyAAAhwIAABwAhhhwQAHgYALgWQAghAAtgCIACAAAjDhwQAPgYAVgWQBBhBBcgBAjDhwIBiAAIBhAAAgCDhQhcgBhBhBQgVgVgPgZIBiAAQgPgyAAg/QAAg9APgzAjgAAIBwAAIBwAAAjDBxQgdgyAAg/QAAg9Adgz");

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


(lib.btnZoom1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AADjgQBbABBBBBQAWAWAPAYQAdAzAAA9ABihwIBiAAAADjgQAtACAgBAQALAWAHAYQAPAzAAA9IBwAAQAAA/gdAyQgPAZgWAVQhBBBhbABIgDAAIgCAAQgtgCgghAQgLgVgHgZIBhAAIBiAAQgHAZgLAVQggBAgtACAAAjgIAABwIBiAAAAAjgIADAAAAAAAIAABxIAABwABiBxIBiAAAAAAAIBxAAQAAA/gPAyAAAhwIAABwAhhhwQAHgYALgWQAghAAtgCIACAAAjDhwQAPgYAVgWQBBhBBcgBAjDhwIBiAAIBhAAAjgAAIBwAAIBwAAAjDBxQgdgyAAg/QAAg9AdgzAgCDhQhcgBhBhBQgVgVgPgZIBiAAQgPgyAAg/QAAg9APgz");
	this.shape.setTransform(0,0,1,1,24.9997);

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


(lib.btnZoom0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhSBSQgigiAAgwQAAgvAigjQAjgiAvAAQAwAAAjAiQAiAjAAAvQAAAwgiAiQgjAjgwAAQgvAAgjgjg");
	this.shape.setTransform(18.5885,5.8206,0.4274,0.4274);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AH0AAQAAApiTAeQiSAdjPAAQjPAAiSgdQiSgeAAgpQAAgpCSgdQCSgdDPAAQDPAACSAdQCTAdAAApg");
	this.shape_1.setTransform(0,0,0.5,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhSBSQgigiAAgwQAAgvAigjQAjgiAvAAQAwAAAjAiQAiAjAAAvQAAAwgiAiQgjAjgwAAQgvAAgjgjg");
	this.shape_2.setTransform(-0.0115,0.0206,0.4274,0.4274);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00FFFF").ss(3,1,1).p("AjHkrIGPAAQBkAAAABkIAAGPQAABkhkAAImPAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000066","#0066FF"],[0,1],30,30,30,-29.9).s().p("AjHEsQhkAAAAhkIAAmPQAAhkBkAAIGPAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000066","#00FFFF"],[0,1],30,30,30,-29.9).s().p("AjHEsQhkAAAAhkIAAmPQAAhkBkAAIGPAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF00FF").ss(3,1,1).p("AjHkrIGPAAQBkAAAABkIAAGPQAABkhkAAImPAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF00FF").s().p("AjHEsQhkAAAAhkIAAmPQAAhkBkAAIGPAAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3,p:{rotation:0}}]}).to({state:[{t:this.shape_5,p:{rotation:0}},{t:this.shape_3,p:{rotation:0}}]},1).to({state:[{t:this.shape_5,p:{rotation:180}},{t:this.shape_3,p:{rotation:180}}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-31.5,63,63);


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


(lib.dtBtnBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000099").s("#0099FF").ss(2,1,1).rr(-50,-50,100,100,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.dtBtnBG, new cjs.Rectangle(-51,-51,102,102), null);


(lib.dtBtn_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FFFF").ss(2,1,1).rr(-20,-20,40,40,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FFFF").ss(1,1,1).rr(-20,-20,40,40,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF00FF").s().p("AjHDIIAAmPIGPAAIAAGPg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-21,42,42);


(lib.btnZero_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaCHIAAg8IhgAAIAAgWIDkAAQAIABAAAHIAAAkQAAAQgKAIQgKAIgSABQgXABgTgEIgDgYQAqAIALgHQAGgEAAgLIAAgKQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBAAgBAAIhYAAIAAA8gAiLAWQBjgSAkggIgIAAIAAg0IhdAAQgBAAAAABQgBAAAAAAQAAABAAAAQgBAAAAABIAAAnIgYAAIAAg7QABgFADAAIB0AAIAAgLIhkAAIAAgVIDgAAIAAAVIhkAAIAAALIBsAAIAUAKQgBAZgLAgIgXgHQAIgaAAgIQAAgBAAgBQAAAAAAgBQAAAAgBgBQgBAAAAAAIhjAAIAAA0IgMAAIAUAGQgBAAgBABQAAAAAAABQgBAAAAAAQAAABAAAAQA4AcBDAJIgJAZQgsgJgdgMIAAATIhwAAIAAgSQggANgrALgAAyAUQgZgLgZgNQgPAKgcAOIBdAAIAAAAgAAZgSIAAgUIBLAAIAAAUgAhigSIAAgUIBLAAIAAAUgAAZgwIAAgUIBKAAIAAAUgAhigwIAAgUIBLAAIAAAUg");
	this.shape.setTransform(-0.05,0,1.5,1.5,0,0,0,0.1,0.1);

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


(lib.btnRecord = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AD7DUIAAgpIAbAIQAUADAFgGQAFgFAAgHIAAjGIhpAAIAAgmICfAAIAIgfIiJAAQgNgCABgNIAZhaQADgIAIAAIClAAQANgCgCARIghCBIA6AAIAAAmIhsAAQANBBAUAnQAcAxA0A4IgjAVQgvg1gfg6IgDgIIAABgQgCAcgSALQgMAHgTAAQgTAAgagHgAEKiNIBxAAIALglIhzAAgAAXCrIBDgPIAAiUIg+AAIAAgkIA+AAIAAgvIgvAAIAAgmICNAAIAAAmIg2AAIAAAvIA3AAIAAAkIg3AAIAACJQAngOALgBIAKAiQAwgqAZgtIAhATQgwBNgzAhIgegbQAEgFAGgCIiTAlgAi/DRQgfAAgRgTQgNgOAAgWIAAjFQAAgIAHAAIChAAIAAhvQAAgGgFAAIidAAIAAgoIC+AAQAOAAAAAKIAADCIgqAAIAAgIIh9AAIgCAEIAACTQgCANAGAGQAHAJAOAAIBhAAQAJAAAIgGQAKgHABgIQAEgKgCg1IAnAGQAEA8gHAYQgIARgNALQgKAFgWADgAnDDNIAAikQACgKAMAAICVAAQANAAABAKIAACCQgBANgNAAIh7AAIAAAVgAmbBKIAABIIBaAAQAHgBAAgGIAAhBQAAgGgFAAIhXAAQgFAAAAAGgAAoCIQgEg8gIgqIAkgDQALA6AAAvgACRBkIAQhEIAiAIIgTBHgAGCAkQAfggALgWIAgAUQgRAdgcAegADMAEIAfgWQAZAcAUAeIgfATQgagmgTgRgAm1AKIAAglICVAAIAAAlgAm1gxIAAgmICVAAIAAAmgAnOhtIAAgnIDLAAIAAAngAARiPQBLgpARgiIAmAEQgCABgCAGQAgAYAjAXIgcAeQgggYgZgYQgbAfgwAegAm1irIAAgnICSAAIAAAng");
	this.shape.setTransform(0,0.0125);

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


(lib.btnPlayStop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFwDwIAAnfICQAAIAAHfgABQDwIAAnfICQAAIAAHfgAn/jvIHgDvInfDwg");
	this.shape.setTransform(0,0,0.9,0.9,0,0,0,1.2,0);

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


(lib.btnPlay24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjXjXIGvDXImuDYg");
	this.shape.setTransform(-25.6,-0.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AC6BeIAAiGIAhAAIAAATQAIgNAHgFQAHgFAJAAQAMABALAGIgLAgQgJgHgIABQgIAAgEAEQgGAEgCAJQgDAMAAAiIAAAqgABzBeIAAhHQAAgWgCgEQgCgHgFgCQgFgEgIAAQgJAAgHAEQgHAFgDAHQgDAJgBARIAABEIgjAAIAAi6IAjAAIAABFQASgUAYgBQAMAAAKAFQAKAFAFAHQAFAHACAJQACAJAAARIAABPgAg1BeIAAgmIhMAAIAAgfIBQh1IAfAAIAAB0IAVAAIAAAgIgVAAIAAAmgAhgAYIArAAIAAg+gAkQBeQACgUAKgQQAKgRAegbQAZgWAFgIQAHgLAAgLQAAgMgGgGQgGgHgMAAQgLAAgGAHQgIAHgBAPIgjgEQAEgdAQgNQARgNAZABQAcgBAQAQQAPAPAAAWQAAAMgFALQgEAMgKALQgGAJgRAPIgWAVIgHAJIBHAAIAAAig");
	this.shape_1.setTransform(24,0.0162,1,1.9626);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FFFF").ss(3,1,1).p("AnzkrIPnAAQBkAAAABkIAAGPQAABkhkAAIvnAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#0066FF"],[0,1],0,30,0,-29.9).s().p("AnzEsQhkAAAAhkIAAmPQAAhkBkAAIPnAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000066","#00FFFF"],[0,1],0,30,0,-29.9).s().p("AnzEsQhkAAAAhkIAAmPQAAhkBkAAIPnAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF00FF").ss(3,1,1).p("AnzkrIPnAAQBkAAAABkIAAGPQAABkhkAAIvnAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF00FF").s().p("AnzEsQhkAAAAhkIAAmPQAAhkBkAAIPnAAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2,p:{rotation:0}}]}).to({state:[{t:this.shape_4,p:{rotation:0}},{t:this.shape_2,p:{rotation:0}}]},1).to({state:[{t:this.shape_4,p:{rotation:180}},{t:this.shape_2,p:{rotation:180}}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-31.5,123,63);


(lib.btnEarth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADUDUIAAgrQA6ATANgLQAEgGAAgIIAAkdIh0AAIAAgoIB0AAIAAg4IApAAIAAA4IBPAAQgYgRgYgLIASggQAeAPAZATIgTAaIAhAAIAAAoIh2AAIAAAJQAHCVCCCBIgjAXQhEhLgihGIAACEQAAAcgWANQgLAHgTAAQgZAAgngLgAjvDUQgTAAgLgHQgWgTACgkIAAimIgmAQIgVgkIA7gaIAAh1IAoAAIAABkIA/gcIAAhzIApAAIAABiIBWgmIAcANIAACmQABANgJARQgIARgNAIQgTAJgtgGIgCgnQASAEAMAAQAOgCAIgLQAEgKAAgRIAAhoQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAAAgBABIhFAeIAADCIgpAAIAAiyIg/AdIAACvQADAPACAFQAFAIARgCIB+AAQAWgCAHgHQAFgMgCgyIAoAEQABBLgIAQQgNAPgHACQgMACgSAAgAARCUQAggLAZgNIAAiIIgxAAIAAglIAxAAIAAhzIg0AAIAAglICRAAIAAAlIg0AAIAABzIAvAAIAAAlIgvAAIAAB1IAlgWIAVAgQg1AlhaAigACHCgQBDg3AihJIAiAPQguBgg5ApgAnQCTQAigOAWgLIAAi6IgyAAIAAgqIAyAAIAAhuIAqAAIAABuIAtAAIAAAqIgtAAIAACkQAUgNAOgOIAaAgQgxAmhUAngAFwgOQAcgpAWgtIAgAVQgeA2gWAhgACrhNIAfgZQAeAkAfA0IghAWQgjg5gYgcg");
	this.shape.setTransform(0,0.0011);

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


(lib.btnClear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AijDaIAAgrQA3ANANgIQAJgHAAgMIAAgLIjFAAIAABEIgnAAIAAjiQACgKAHAAIEBAAQAJACAAAIIAAC6QAAAXgSANQgQAJgcAAQgXAAgfgFgAkbBzIDFAAIAAggIjFAAgAkbAVIAAAaIDFAAIAAgaQAAgBAAgBQAAgBgBAAQAAgBAAAAQAAAAgBAAIi/AAQgEACAAACgADXDUIAAgrQAWAJAMAAQAYAGALgIQAEgFAAgIIAAiJIh0AAIAAgmIB0AAIAAgxIhRAAIAAgnIDDAAIAAAnIhJAAIAAAxIB4AAIAAAmIh4AAIAACVQAAAcgWANQgLAHgTAAQgYAAgmgLgAAbDdIAAmoIACgGIAEAAIBlAAIAcARIgfByQgGAbAHAHQAXAkAHAdQAMAxgXAeQgJANgRAFQgTAGgngIIAABpgABDipIAADyQAaAMANgCQALgCACgGQATgegvhZQgEgHACgNIAchrIgwAAgAnNDFQA2htARhFIAoALQgVBPg0BrgAFtBLIAkgTQAfAzAeBPIgjARQgihTgcgtgAB5CrQA3gtAehGIAlAVQgpBPg4AvQgOgVgLgLgAnNg7IAVgjQAhASAtAeIgYAkQgtgkgegNgAlbgoIAAgmICLAAIAAgYIh0AAIAAgiIB0AAIAAgaIiFAAIAAgiICFAAIAAgaIApAAIAAAaICHAAIAAAiIiHAAIAAAaIB4AAIAAAiIh4AAIAAAYICVAAIAAAmgACTh3QA5gYAegTQAggTAjgpIAcAVQgBAAAAAAQgBABAAAAQgBABAAAAQAAABAAAAQA8AtBLAeIgVAkQhNgghAg0QgeAggWANQgeAWgtATgAnHizIAWgjQAkAUAtAkIgZAiQgwgmgegRg");
	this.shape.setTransform(0.025,-0.0012);

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


(lib.theNumberStepper_short = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//老師寫的numberStepper，不要修改
		//外部使用變數名稱
		//maximum    最大值number
		//minimum    最小值number
		//value      現在值number
		//dNumber    數值差1
		//digitN     小數位數0
		//dir        箭頭方向"x","y"
		
		var ns=this;
		//內部變數
		ns.min = 0;
		ns.max = 100;
		ns.val = 50;
		ns.dNum=1;
		ns.btnS.alpha=0;
		ns.digN=0;
		ns.dir="y";
		
		ns.bg.alpha=0;
		ns.life=0;//使btn透明用
		ns.ccount=0;//連續增加用
		
		//tick
		setInterval(mtick,1000/60);
		
		//mtick
		function mtick(e){
			//life
			if(ns.life>0){
				ns.btnUp.alpha=ns.btnDown.alpha=ns.btnRight.alpha=ns.btnLeft.alpha=1;
				ns.life--;
			}else{
				ns.btnUp.alpha=ns.btnDown.alpha=ns.btnRight.alpha=ns.btnLeft.alpha=0;
			}
			//ccount
			if(ns.ccount===0){
				
			}else{
				ns.life=60;
				ns.ccount+=(ns.ccount>0?1:-1);
				if(Math.abs(ns.ccount)>480){//最快
					ns.val+=ns.dNum*(ns.ccount>0?1:-1);
					ns.setValue(ns);
				}else if(Math.abs(ns.ccount)>300 && Math.abs(ns.ccount%2)===1){//快
					ns.val+=ns.dNum*(ns.ccount>0?1:-1);
					ns.setValue(ns);
				}else if(Math.abs(ns.ccount)>150 && Math.abs(ns.ccount%5)===1){//中
					ns.val+=ns.dNum*(ns.ccount>0?1:-1);
					ns.setValue(ns);
				}else if(Math.abs(ns.ccount)>30 && Math.abs(ns.ccount%10)===1){//慢
					ns.val+=ns.dNum*(ns.ccount>0?1:-1);
					ns.setValue(ns);
				}
			}
			//btnVisible
			ns.btnUp.visible=ns.btnDown.visible=(ns.dir==="y");
			ns.btnRight.visible=ns.btnLeft.visible=(ns.dir==="x");
		}
		
		
		//event
		ns.on('mouseover',function(e){
									//滑鼠移入
									ns.life=60;
									ns.ccount=0;
								});
		ns.on('mousedown',function(e){
									//按下滑鼠
									ns.life=60;
									var str=e.target.name;
									if(str==="btnUp" ||str==="btnRight"){
										ns.val+=ns.dNum;
										ns.ccount=1;
									}else if(str==="btnDown"||str==="btnLeft"){
										ns.val-=ns.dNum;
										ns.ccount=-1;
									}
									ns.setValue(ns);
								});
		ns.on('pressup',function(e){
									//滑鼠放開
									ns.ccount=0;
								});
		//setValue
		ns.setValue = function(who){
			if(who.val<who.min){who.val=who.min;}
			else if(who.val>who.max){who.val=who.max;}
			who.valueText.text = digitN(who.val , who.digN);
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
		//set digitN form js
		Object.defineProperty(ns, 'digitN', {
										    get: function() {
													return ns.digN;
											    },
											set: function(_digN) {
											        ns.digN=_digN;
													ns.setValue(ns);
												}
									});
		//set dNumber form js
		Object.defineProperty(ns, 'dNumber', {
										    get: function() {
													return ns.dNum;
											    },
											set: function(_dNum) {
											        ns.dNum=_dNum;
												}
									});
		//set value form js
		Object.defineProperty(ns, 'value', {
										    get: function() {
													return ns.val;
											    },
											set: function(_val) {
													ns.val=_val;
												    ns.setValue(ns);
												}
									});
		//set maximum
		Object.defineProperty(ns, 'maximum', {
										    get: function() {
										        return ns.max;
										    },
										    set: function(_max) {
										        ns.max=_max;
										        ns.setValue(ns);
										    }
							});
		//set minimum
		Object.defineProperty(ns, 'minimum', {										
										    get: function() {
										        return ns.min;
										    },
										    set: function(_min) {
										        ns.min=_min;
										        ns.setValue(ns);
										    }
							});
		//ns help
		ns.help=function(){
			var str1="老師寫的numberStepper，不要修改，\n外部使用變數名稱：\n maximum最大值number，\n minimum最小值number，\n value現在值number";
			var str2="\n digitN顯示到小數點第N位(預設0) ";
			
			console.log(str1+str2);
		}
		ns.setValue(ns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnLeft = new lib.numberStepperBtn();
	this.btnLeft.name = "btnLeft";
	this.btnLeft.parent = this;
	this.btnLeft.setTransform(-30,0,1,1,-90);
	new cjs.ButtonHelper(this.btnLeft, 0, 1, 2, false, new lib.numberStepperBtn(), 3);

	this.btnRight = new lib.numberStepperBtn();
	this.btnRight.name = "btnRight";
	this.btnRight.parent = this;
	this.btnRight.setTransform(30,0,1,1,90);
	new cjs.ButtonHelper(this.btnRight, 0, 1, 2, false, new lib.numberStepperBtn(), 3);

	this.btnDown = new lib.numberStepperBtn();
	this.btnDown.name = "btnDown";
	this.btnDown.parent = this;
	this.btnDown.setTransform(0,30,1,1,180);
	new cjs.ButtonHelper(this.btnDown, 0, 1, 2, false, new lib.numberStepperBtn(), 3);

	this.btnUp = new lib.numberStepperBtn();
	this.btnUp.name = "btnUp";
	this.btnUp.parent = this;
	this.btnUp.setTransform(0,-30);
	new cjs.ButtonHelper(this.btnUp, 0, 1, 2, false, new lib.numberStepperBtn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnUp},{t:this.btnDown},{t:this.btnRight},{t:this.btnLeft}]}).wait(1));

	// text
	this.valueText = new cjs.Text("000", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.textAlign = "center";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 48;
	this.valueText.parent = this;
	this.valueText.setTransform(0,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.valueText).wait(1));

	// btnS
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(0,0,0.6,0.35);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// bg
	this.bg = new lib.theNumberStepperBG();
	this.bg.name = "bg";
	this.bg.parent = this;
	this.bg.setTransform(0,0,0.6,0.35);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = getMCSymbolPrototype(lib.theNumberStepper_short, new cjs.Rectangle(-31,-31,62,62), null);


(lib.theNumberStepper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//老師寫的numberStepper，不要修改
		//外部使用變數名稱
		//maximum    最大值number
		//minimum    最小值number
		//value      現在值number
		//dNumber    數值差1
		//digitN     小數位數0
		//dir        箭頭方向"x","y"
		
		var ns=this;
		//內部變數
		ns.min = 0;
		ns.max = 100;
		ns.val = 50;
		ns.dNum=1;
		ns.btnS.alpha=0;
		ns.digN=0;
		ns.dir="y";
		ns.isSetting=false;//正在變動
		
		ns.bg.alpha=0;
		ns.life=0;//使btn透明用
		ns.ccount=0;//連續增加用
		
		//tick
		setInterval(mtick,1000/60);
		
		//mtick
		function mtick(e){
			//life
			if(ns.life>0){
				ns.btnUp.alpha=ns.btnDown.alpha=ns.btnRight.alpha=ns.btnLeft.alpha=1;
				ns.life--;
			}else{
				ns.btnUp.alpha=ns.btnDown.alpha=ns.btnRight.alpha=ns.btnLeft.alpha=0;
			}
			//ccount
			if(ns.ccount===0){
				ns.isSetting=false;
			}else{
				ns.life=60;
				ns.ccount+=(ns.ccount>0?1:-1);
				if(Math.abs(ns.ccount)>480){//最快
					ns.val+=ns.dNum*(ns.ccount>0?1:-1);
					setValue(ns);
				}else if(Math.abs(ns.ccount)>300 && Math.abs(ns.ccount%2)===1){//快
					ns.val+=ns.dNum*(ns.ccount>0?1:-1);
					setValue(ns);
				}else if(Math.abs(ns.ccount)>150 && Math.abs(ns.ccount%5)===1){//中
					ns.val+=ns.dNum*(ns.ccount>0?1:-1);
					setValue(ns);
				}else if(Math.abs(ns.ccount)>30 && Math.abs(ns.ccount%10)===1){//慢
					ns.val+=ns.dNum*(ns.ccount>0?1:-1);
					setValue(ns);
				}
				ns.isSetting=true;
			}
			//btnVisible
			ns.btnUp.visible=ns.btnDown.visible=(ns.dir==="y");
			ns.btnRight.visible=ns.btnLeft.visible=(ns.dir==="x");
		}
		
		
		//event
		ns.on('mouseover',function(e){
									//滑鼠移入
									ns.life=60;
									ns.ccount=0;
								});
		ns.on('mousedown',function(e){
									//按下滑鼠
									ns.life=60;
									var str=e.target.name;
									if(str==="btnUp" ||str==="btnRight"){
										ns.val+=ns.dNum;
										ns.ccount=1;
									}else if(str==="btnDown"||str==="btnLeft"){
										ns.val-=ns.dNum;
										ns.ccount=-1;
									}
									setValue(ns);
								});
		ns.on('pressup',function(e){
									//滑鼠放開
									ns.ccount=0;
								});
		//setValue
		var setValue = function(who){
			if(who.val<who.min){who.val=who.min;}
			else if(who.val>who.max){who.val=who.max;}
			who.valueText.text = digitN(who.val , who.digN);
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
		//set digitN form js
		Object.defineProperty(ns, 'digitN', {
										    get: function() {
													return ns.digN;
											    },
											set: function(_digN) {
											        ns.digN=_digN;
													ns.valueText.text = digitN(ns.val , ns.digitN);
												}
									});
		//set dNumber form js
		Object.defineProperty(ns, 'dNumber', {
										    get: function() {
													return ns.dNum;
											    },
											set: function(_dNum) {
											        ns.dNum=_dNum;
												}
									});
		//set value form js
		Object.defineProperty(ns, 'value', {
										    get: function() {
													return ns.val;
											    },
											set: function(_val) {
											        ns.val=_val;
												    if(ns.val>ns.max){ns.val=ns.max;}
												    else if(ns.val<ns.min){ns.val=ns.min;}
													ns.valueText.text = digitN(ns.val , ns.digitN);
												}
									});
		//set maximum
		Object.defineProperty(ns, 'maximum', {
										    get: function() {
										        return ns.max;
										    },
										    set: function(_max) {
										        ns.max=_max;
										        if(ns.val>ns.max){ns.val=ns.max;}
										        ns.valueText.text = digitN(ns.val , ns.digitN);
										    }
							});
		//set minimum
		Object.defineProperty(ns, 'minimum', {										
										    get: function() {
										        return ns.min;
										    },
										    set: function(_min) {
										        ns.min=_min;
										        if(ns.val<ns.min){ns.val=ns.min;}
										        ns.valueText.text = digitN(ns.val , ns.digitN);
										    }
							});
		//ns help
		ns.help=function(){
			var str1="老師寫的numberStepper，不要修改，\n外部使用變數名稱：\n maximum最大值number，\n minimum最小值number，\n value現在值number";
			var str2="\n digitN顯示到小數點第N位(預設0) ";
			
			console.log(str1+str2);
		}
		setValue(ns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnLeft = new lib.numberStepperBtn();
	this.btnLeft.name = "btnLeft";
	this.btnLeft.parent = this;
	this.btnLeft.setTransform(-50,0,1,1,-90);
	new cjs.ButtonHelper(this.btnLeft, 0, 1, 2, false, new lib.numberStepperBtn(), 3);

	this.btnRight = new lib.numberStepperBtn();
	this.btnRight.name = "btnRight";
	this.btnRight.parent = this;
	this.btnRight.setTransform(50,0,1,1,90);
	new cjs.ButtonHelper(this.btnRight, 0, 1, 2, false, new lib.numberStepperBtn(), 3);

	this.btnDown = new lib.numberStepperBtn();
	this.btnDown.name = "btnDown";
	this.btnDown.parent = this;
	this.btnDown.setTransform(0,30,1,1,180);
	new cjs.ButtonHelper(this.btnDown, 0, 1, 2, false, new lib.numberStepperBtn(), 3);

	this.btnUp = new lib.numberStepperBtn();
	this.btnUp.name = "btnUp";
	this.btnUp.parent = this;
	this.btnUp.setTransform(0,-30);
	new cjs.ButtonHelper(this.btnUp, 0, 1, 2, false, new lib.numberStepperBtn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnUp},{t:this.btnDown},{t:this.btnRight},{t:this.btnLeft}]}).wait(1));

	// text
	this.valueText = new cjs.Text("000", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.textAlign = "center";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(0,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.valueText).wait(1));

	// btnS
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(-0.05,0,1.1,0.35);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// bg
	this.bg = new lib.theNumberStepperBG();
	this.bg.name = "bg";
	this.bg.parent = this;
	this.bg.setTransform(0,0,1.1,0.35);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = getMCSymbolPrototype(lib.theNumberStepper, new cjs.Rectangle(-56,-31,112,62), null);


(lib.theSlider2 = function(mode,startPosition,loop) {
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
		sl.isSetting=false;
		
		//event
		sl.on('mousedown',function(e){
									//按下設值
									var localX = e.stageX - sl.x;
									setValue(sl,localX);
									sl.isSetting=true;
								});
		sl.on('pressmove',function(e){
									//拖曳設值
									var localX = e.stageX - sl.x;
									setValue(sl,localX);
									sl.isSetting=true;
								});
		//setValue from localX
		var setValue = function(who,localX){
			var lx=localX;
			if(lx<0){lx=0;}
			else if(lx>who.len){lx=who.len;}
			who.btn.x=lx;
			who.val = who.min+lx/who.len*(who.max-who.min);
			
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
												
										    }
							});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

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

}).prototype = getMCSymbolPrototype(lib.theSlider2, new cjs.Rectangle(-16,-16,182,32), null);


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


(lib.titleMask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.bbb = new lib.dtBtn_();
	this.bbb.name = "bbb";
	this.bbb.parent = this;
	this.bbb.setTransform(800,449.95,40,22.5);
	this.bbb.alpha = 0.0117;
	new cjs.ButtonHelper(this.bbb, 0, 1, 2, false, new lib.dtBtn_(), 3);

	this.timeline.addTween(cjs.Tween.get(this.bbb).wait(1));

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOC6QAkgcAQgnQAHgYAAhVIAjACQACAugFAaQAKAlAMAVIAAinIg7AAIAAgkIBRAAQgmgqgWgQIAZgWQAGAFAQAQQAsggAHgSQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAIhrAAIAAgjICHAAIAVAZQgVAsgyAmIARAQIgVATIA4AAIAWAQQgIAsgQAfIghgLQATgZABgLIAAgIIgFAAIggAAIAABIIA7AAIAAAkIg7AAIAABUQALACANAAIA0AAIgLAlIgcAAIgcgEQg1gKgWgwIgCgDQgQAkgkAggAjPDHIAAgnQATAHAKACQAGAAABgCQAEgFABgHIAAh2IgQAOIgbgaIArgfIAAhaIgoAAIAAglIAoAAIAAhLIAkAAIAABLIAeAAIAAAlIgeAAIAAA4IAQgRIAaAVQgMATgVAQIgJAIIAACcQgCAbgRAKQgHAFgOAAQgPAAgWgGgAhyCnQAVgJAMgKIAGgGQAWgVALglIg4AAIAAghIA8AAIAAgwIgQAAQgLAbgQARIgdgVQANgQALgUQAJgPACggIAjACIgEAaIBLAAIAAAgIgiAAIAAAwIAlAAIAAAhIgpAAIgCALIAiAsIgZATIgVggIgBAEQgYAqgsAVgAgxhAQgNgCgKgKQgJgJAAgLIAAhtIAgAAIAAAlQApgQAZgMIAQAaQgiAVgwANIAAAXQAAAHAFAFQAGAFAHAAIAfAAIAKgDQACAAAAgGQACgHAAgVIAfAJQgHAqgCAGQgQAMgGAAg");
	this.shape.setTransform(957.4,700.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhgCsQBugRAVglIhzAAIAAgjIB3AAIAAgbIhcAAQgGAAAAgFIAAiVQAAgFAGAAIDuAAQAFAAAAAFIAACVQAAAFgFAAIhsAAIAAAbICCAAIAAAjIh0AAIAEADQAlAsBPAFIgMAlIgEAAQhYgKgsg6QglAvhvAXgAgWATQAAABAAAAQAAAAABAAQAAABAAAAQAAAAABAAICrAAIACgCIAAgXIivAAgAgWgoICvAAIAAgcIgCAAIirAAIgCAAgAiYDPIAAi1QgKAegLASIglgJQAqhCANhKIguAAIAAgmIAxAAIAAhfIAlAAIAABfIAjAAIAAAmIgjAAIAAAUIA1BKIggAVIgVgjIAADKgABih1IAAgYIhNAAIAAAYIgmAAIAAgYIg/AAIAAglIA/AAIAAgeIAmAAIAAAeIBNAAIAAgeIAnAAIAAAeIBDAAIAAAlIhDAAIAAAYg");
	this.shape_1.setTransform(912.325,700.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACDCUQhhhzghiUQgxCoh+CLIgfgXQAigjAggnQBNhgAmiZIh9AAIAAgmICfAAQAMAAAAAMQAYB+AtBQQAeA6BVBWIghAXQgZgcgRgRg");
	this.shape_2.setTransform(867.6,700.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjPCxQAlgUAMgPQAMgUAAgaIAAg4QAAgGgFAAIgvAAIAAglIBQAAQALABAAAGIAABqQAFAKAHALQANASAWAHQAXAIArgBIDKgEIgKAqIjWgBQhQgGgdgxQgFASgRARQgWAUgRAKgAgoCFQgOgCAAgMIAAjSQgNAOgMAQQgOgUgKgHQAagcAQgcQAQgaAKgnIAjAQIgTAsIBTAAQAUgjAKgWIAjASIgTAnIBWAAIgDAjIheAAIAAAxIBaAAIAAAjIhaAAIAAAtIBaAAIAAAjIhaAAIAAAwIBhAAIAAAjgAgRBcQAAAGAFAAIBLAAIAAgwIhQAAgAgRAPIBQAAIAAgtIhQAAgAgRhtIAAAsIBQAAIAAgxIhLAAQgFAAAAAFgAjMhSIAVgiQAiASAmAhIgWAgQgrglgcgMgAi8iqIAVgiQAiAQAmAhIgXAgQgqgjgcgMg");
	this.shape_3.setTransform(822.225,699.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ACaDIIAAgSIkzAAIAAASIgmAAIAAkuQAAgMAMAAICCAAIAXguIiwAAIAAgnIGVAAIAAAnIi8AAQgDAMgLASQgBAIgFAIIC3AAQAPAAAAAMIAAEugABpCPIAxAAIAAjVQAAgGgFAAIgsAAgAg+CPICAAAIAAguIiAAAgAiZhGIAADVIA1AAIAAjbIgvAAQgIAAACAGgAg+A6ICAAAIAAgwIiAAAgAg+gcICAAAIAAgwIiAAAg");
	this.shape_4.setTransform(777.4,700.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjKDMIAAggIGVAAIAAAggAiXCcQgDAAgBgFIAAhyQADgGABAAIExAAQAFAAAAAGIAAByQAAAFgFAAgAARB/IBqAAQAAAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAAAIAAgQIhrAAgAh3B9IAAACIBkAAIAAgSIhkAAgAARBRIBrAAIAAgSQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAAAAAIhqAAgAh3A/IAAASIBkAAIAAgTIhkAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAABABAAgAjFATIAAgfICyAAIAAgNIiYAAIAAgcICYAAIAAgPIiPAAIAAgcICPAAIAAgOIi3AAIAAgeIC3AAIAAgMIiPAAIAAgcICPAAIAAgXIAkAAIAAAXICLAAQAKABAAAIIAAAfIAlAAIAAAeIglAAIAAAgQAAAKgKAAIiLAAIAAAPICdAAIAAAcIidAAIAAANIC1AAIAAAfgAARhgIBuAAQABAAABgBQABAAAAgBQABAAAAgBQAAAAAAAAIAAgLIhyAAgAARiMIByAAIAAgKQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIhuAAg");
	this.shape_5.setTransform(732.4,699.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhIDJIACglQAnARAPgFQAJAAAFgFQADgGACgKIjSAAIAAggIDQAAQAAgJgBgHIiqAAIAAgcIChAAQgDgJgFgHQhOAGg0AAIgEgeQBBgCBWgFIAdgCIgOgfQAjgFAVgHIghgcIAVgXQAaAZASAMQAggVAHgMQADgHgHAAIhoAAIAAgeICLAAIAQAOQgOAlgsAlQAhANAsAFIgOAgQglgJgcgNIAEAbQgjAJhMAHIgCAAIAHARICRAAIAAAcIiKAAQACAJAAAHICpAAIAAAgIinAAQAFAQgKARQgGALgHAFQgMAHgTAAQgZAAgkgKgABbAMQgcALgWAFQAygFAfgFQgKgJgLgCQgFAEgFABgAi4AeQgNgCAAgKIAAgdIAeAAIAAALQAAAFAGAAIAzAAIAAgXIhfAAIAAgZIBfAAIAAgKIhMAAQgBgBgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBIAAhaQABAAAAgBQABgBAAAAQABgBAAAAQAAAAABAAIBMAAIAAgLIhcAAIAAgcIBcAAIAAgVIAfAAIAAAVIBXAAIAAAcIhXAAIAAALIBKAAQAFACAAABIAABaQAAAEgFAAIhKAAIAAAKIBZAAIAAAZIhZAAIAAAXIAzAAQAEAAAAgFIAAgLIAdAAIAAAdQAAAMgMAAgAhPhMIAuAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAgBIAAgMIgwAAgAiehOIAAACIAwAAIAAgOIgwAAgAhPhxIAwAAIAAgMQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIguAAgAieh9IAAAMIAwAAIAAgOIgwAAQAAAAgBAAQAAAAAAAAQAAABAAAAQABAAAAABgAAKh/QAMgFAHgGQAMgMAAgSIAAgVQAAgDACgCIAFgCIBlAAIADACQACAEACABIAAAjQAAAJABACQACAEAKAAIABAAIgBAAIAIgCQACAAAAgHQgCgHAAgGIAeAEQgEAlgFACQgJAIgKAAIgZAAQgOgBgHgHQgJgJAAgMIAAgWQAAgFgFAAIgqAAQgBABgBAAQAAABgBAAQAAAAgBABQAAAAAAABIAAADQAAAOgFALQgLAXgcAMgACpiLIgBAAg");
	this.shape_6.setTransform(687.575,699.8111);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjMDCQAQgpgCgwIAlAAQgCA8gRAqIgggNgACkDJIAAgSIhpAAIAAASIgjAAIAAjTQAAgEAFAAIAxAAIAAjBIAlAAIAABCIBaAAIAAAjIhaAAIAABcIBMAAQAIAAAAAGIAADRgAA7AXIAAB9IBpAAIAAh9QAAgEgFAAIhhAAQgFACACACgAiLDFQACgsgCgwIAjACQAEAxgFAtgAhdBrIAjgFQAMAyACAmIghAEQgEglgMgygAgqBmIAegHQANAhAHAnIgfAFQgHgqgMgcgAjMA2IBbgEIAAgfIhQAAIAAghIBQAAIAAgfIhSAAQgEAAAAgFIAAiUQABAAAAgBQABgBAAAAQABgBAAAAQAAAAABAAIDHAAQAGACAAABIAACUQAAAFgGAAIhRAAIAAAfIBNAAIAAAhIhNAAIAAAdIBRgFIACAjIjNAMgAhNhMIA2AAQABAAAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIAAhcIgCAAIg2AAgAinhOIAAACIA2AAIAAheIg2AAgAhDheQAEgQAFgsIAcAGQgDAogGAWgAiVhcQgCgegHgaIAegEQADASAFAqg");
	this.shape_7.setTransform(642.075,700);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00FFFF").s().p("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");
	this.shape_8.setTransform(1141.85,851);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00FFFF").s().p("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");
	this.shape_9.setTransform(109.35,709.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00FFFF").s().p("AFgCHIADgbQAaAHALgBQACgCABgDQACgDAAgDIAAh6IhUAAQgJgBAAgHIAAheQABgHAIAAIBkAAQAIAAABAIIAADoQgBAHgDAHQgFAGgHAEQgJAFgMAAQgOAAgTgGgAFJgyQAAAHAHAAIA9AAIAAgTIhEAAgAFJhjIAAANIBEAAIAAgMQAAgHgHAAIg4AAIgBAAQgEAAAAAGgAIGB2QAegHAIgMIgkAAQgJAAAAgKIAAgiIAUAAIAAASQAAAFAFAAIAXAAIAAgcIATAAIgCgHIhKAIIgFgVIAQgBQAJgGAIgIQgTgPgPgKIAKgRIAMAGIASgXIguAAIAAC1IgZAAIAAkHQAAgHAHAAIBtAAQAHAAAAAHIAABLQAAAHgHAAIgmAAIALALQgHAKgPAOQAGAGAHAEQAOgPAJgQIARAKQgHARggAdIAYgDIgEgLIASgGQAIAQAHAZIgRAEIAAAmQAAAGgEAIQgLAagnALgAHqhAIBDAAQAGACAAgHIAAgKIhJAAgAHqhrIAAAJIBJAAIAAgKQAAgFgFAAIg/AAQgGABABAFgAA6BbQgZAYgnAYIgSgRQAlgVAdgcQgmgxgEhDIgGAAIAAAlQgBBTgnA8IgXgLQAYgkAIggQAHgdAAgqIAAhtQAAgHAHAAICUAAIAAAaIh/AAQgBAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAIAAAiIByAAIAPAJQgKBNgnA0IAIAKQATAUAgAWIgVAQQgngdgPgTgAAuAkQAFAIAHAJQAggtAHgtQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQgDgCgFAAIg+AAQADAsARAjgAKbCIIABgaQAXAEAIgCQACgBABgDQACgDAAgDIAAiSIg8AAIAJAHQgIAMgRAVQAGAEAFAFQAQgRAIgSIATAKQgIAPgaAbIAWgCIgFgKIATgIQAJARAIAWIgTAIIgEgIIhKAHQgBgJgDgMIATgBIAHgGIgigZIAKgSQABACAKAEIATgbIgVAAQgIAAAAgHIAAhLQAAgHAHAAIBvAAQAIAAgBAIIAADsQAAAHgDAHQgFAGgHAEQgJAEgMAAQgLAAgOgDgAJ0hFQgBAFAIAAIBFAAIAAgPIhMAAgAJ0hrIAAAJIBMAAIAAgIQgCgHgEAAIhBAAQgFABAAAFgAwTCEIADgbQAOAHAHAAIAGgBQACgDAAgFIAAhEQgIAGgKAFIgQgTIAigUIAAhBIgfAAIAAgaIAfAAIAAg3IAaAAIAAA3IAYAAIAAAaIgYAAIAAAvIANgMIARASQgFAFgZARIAABdQAAASgOAIQgEADgIAAQgMAAgUgHgAJhCKIAAhVIAXAAIAAAYIAZAAQABAAABAAQAAAAABAAQAAgBAAAAQABgBAAgBIAAgSIAVAAIAAAkQgBAGgGAAIgrAAIAAAogAhlCKIAAh+QgKAbgLARIgXgGQAfgwAKg3IgkAAIAAgaIAnAAIAAg6IAYAAIAAA6IAkAAIAAAaIgkAAIAAACQAXAhASAiIgVANQgIgUgMgSIAACTgAobCEIAAgbIATAGQAPAEAEgFQADgEAAgEIAAjsIAZAAIAADzQAAARgOAJQgGADgKAAQgOAAgWgGgACpCJIAAkCQgBgHAIAAIBmAAQAIAAAAAHIAABeQAAAIgIAAIhVAAIAACcgADBgrIA+AAQAGAAAAgHIAAgMIhEAAgADBhjIAAANIBEAAIAAgOQABgFgHAAIg5AAIgBAAQgEAAAAAGgAqXCJIAAhvIgnAAQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAIAABcIgaAAIAAhxQABgGAGAAIA8AAIAAgYIhLAAIAAgaIBLAAIAAgiIgpAAQgJARgIAKIgYgMQAageAIgjIAZAHQgFAJgBAJIAdAAIAAgfIAaAAIAAAfIBAAAIAAAZIhAAAIAAAiIBHAAIAAAaIhHAAIAAAYIA8AAQAHABAAAFIAABbQgBARgMAHQgNAIgegFIgBgcQAUAGAEgEQAHgDAAgIIAAg8IgCgBIgnAAIAABvgAjJCIIAAgMIjNAAIAAAMIgaAAIAAjJQAAgIAJAAIBWAAIAPgeIh1AAIAAgaIEPAAIAAAaIh+AAQgCAIgHALQgBAGgDAFIB7AAQAIAAAAAIIAADJgAjqBiIAhAAIAAiOQAAAAAAgBQAAgBgBAAQAAgBgBAAQgBAAgBAAIgdAAgAlZBiIBVAAIAAgeIhVAAgAmWgsIAACOIAjAAIAAiRIggAAQgFAAACADgAlZAqIBVAAIAAghIhVAAgAlZgQIBVAAIAAgfIhVAAgADUBuQAKgEAHgEQAUgOACgTIgqAAIAAgXIAqAAIAAgZIglAAIAAgVIChAAIAAAVIgjAAIAAAZIAqAAIAAAXIgqAAIAAA4IgZAAIAAg4IgrAAQABAGgDAIQgIAggjAPgAERAuIAqAAIAAgZIgqAAgAu9CBIAAgZIBSAAIAAhDIgzAAIAAgYIB8AAQgHgIgEgGQgLgRgEgVQAAgBgBAAQAAgBAAgBQAAAAgBAAQAAgBAAAAIhBAAIAAgYIBNAAQAFABACAEQAEAbALARQAKARAWARIgUAOQgLgJgHgIIAAAYIgvAAIAABDIBSAAIAAAZgAooBHIAAi/IAZAAIAAC/gAO8AGIjSAAIAAgKIDSAAIAAgnIBaAsIhaArgAvFAVQAdgfAKgoIAYAHQgQAxgaAcgAsgg2QAIgaABgHQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgBgBAAIiCAAQgBAAAAAAQgBAAAAABQAAAAAAABQgBAAAAABIAAAiIgZAAIAAg3QAAgFAFAAIBIAAIAAgZIAaAAIAAAZIBBAAIAUALQAAAYgMAhg");
	this.shape_10.setTransform(1091.85,45.6006);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00FFFF").s().p("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");
	this.shape_11.setTransform(303.125,48.7006);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000099").s().p("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");
	this.shape_12.setTransform(800,300.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00FFFF").s().p("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");
	this.shape_13.setTransform(799.9913,300.0144);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 圖層_1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.8)").s().p("EhLWBGUIAA5UMgxpAAAMAAAhoJIecAAIAArKMCdgAAAIAALVMA+DAAAMAAAB2NMg7ZAAAIAALFg");
	this.shape_14.setTransform(800,450);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

}).prototype = getMCSymbolPrototype(lib.titleMask, new cjs.Rectangle(-32.4,-32.5,1664.9,964.9), null);


(lib.btnZero = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.btnZero_();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnZero_(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnZero, new cjs.Rectangle(-31.5,-31.5,63,63), null);


(lib.BtnRecord_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//老師寫的button，不要修改
		//外部使用變數名稱
		var bt=this;
		//set label
		bt.setLabel = function(_text){
					bt.btn.label.text = _text;
					}
		//bt help
		bt.help=function(){
			var str1="老師寫的button，不要修改，";
			var str2="\n 修改文字標籤：setLabel('文字');";
			
			console.log(str1+str2);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 圖層_1
	this.btn = new lib.btnRecord();
	this.btn.name = "btn";
	this.btn.parent = this;
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.btnRecord(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

}).prototype = getMCSymbolPrototype(lib.BtnRecord_, new cjs.Rectangle(-61.5,-31.5,123,63), null);


(lib.BtnPlayStop_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//老師寫的button，不要修改
		//外部使用變數名稱
		var bt=this;
		//set label
		bt.setLabel = function(_text){
					bt.btn.label.text = _text;
					}
		//bt help
		bt.help=function(){
			var str1="老師寫的button，不要修改，";
			var str2="\n 修改文字標籤：setLabel('文字');";
			
			console.log(str1+str2);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 圖層_1
	this.btn = new lib.btnPlayStop();
	this.btn.name = "btn";
	this.btn.parent = this;
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.btnPlayStop(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

}).prototype = getMCSymbolPrototype(lib.BtnPlayStop_, new cjs.Rectangle(-61.5,-31.5,123,63), null);


(lib.BtnPlay24_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//老師寫的button，不要修改
		//外部使用變數名稱
		var bt=this;
		//set label
		bt.setLabel = function(_text){
					bt.btn.label.text = _text;
					}
		//bt help
		bt.help=function(){
			var str1="老師寫的button，不要修改，";
			var str2="\n 修改文字標籤：setLabel('文字');";
			
			console.log(str1+str2);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 圖層_1
	this.btn = new lib.btnPlay24();
	this.btn.name = "btn";
	this.btn.parent = this;
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.btnPlay24(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

}).prototype = getMCSymbolPrototype(lib.BtnPlay24_, new cjs.Rectangle(-61.5,-31.5,123,63), null);


(lib.BtnEarth_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//老師寫的button，不要修改
		//外部使用變數名稱
		var bt=this;
		//set label
		bt.setLabel = function(_text){
					bt.btn.label.text = _text;
					}
		//bt help
		bt.help=function(){
			var str1="老師寫的button，不要修改，";
			var str2="\n 修改文字標籤：setLabel('文字');";
			
			console.log(str1+str2);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 圖層_1
	this.btn = new lib.btnEarth();
	this.btn.name = "btn";
	this.btn.parent = this;
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.btnEarth(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

}).prototype = getMCSymbolPrototype(lib.BtnEarth_, new cjs.Rectangle(-61.5,-31.5,123,63), null);


(lib.BtnClear_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//老師寫的button，不要修改
		//外部使用變數名稱
		var bt=this;
		//set label
		bt.setLabel = function(_text){
					bt.btn.label.text = _text;
					}
		//bt help
		bt.help=function(){
			var str1="老師寫的button，不要修改，";
			var str2="\n 修改文字標籤：setLabel('文字');";
			
			console.log(str1+str2);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 圖層_1
	this.btn = new lib.btnClear();
	this.btn.name = "btn";
	this.btn.parent = this;
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.btnClear(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

}).prototype = getMCSymbolPrototype(lib.BtnClear_, new cjs.Rectangle(-61.5,-31.5,123,63), null);


(lib.controlPlanet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABGCAIAAgdQAbALATAEQAhAEAOgOQAEgDACgFQAAgHgGgIIiYAAIAAgaIB4AAIgSgJIAMgXIASAKQAhgNAWgMIiHAAIAAgVQgaAIgTAEIgJgZQA3gJAxgaIhlAAIAAgZIB5AAIAAgUQg4ABgngBIgCgaQCJAEBRgMIACAaQgbAGg7ABIgLABIAAAUIB4AAIAAAZIhpAAQAqAbBDAIIgMAZIgvgMIANAPQgWAZgxAVIAGAFIACACIBpAAIAAAaIhVAAQACALgBAMQgEANgJAIQgUAQgeAAQgbAAgjgNgADdgQQgdgIghgVIAAAWIgaAAIAAgXQgdATgZAIIgJADICXAAIAAAAgAgzCHIAAgMIjNAAIAAAMIgaAAIAAj/QAAgIAJAAIDuAAQAKAAgBAIIAAD/gAkAhjIAADEIDNAAIAAgsIhEAAQgMgCAAgLIAAiOIgrAAIAABDQgBAogLAWQgOAaggAIIgRgVQANgDALgHQAYgQABgxIAAhDIg0AAQgFAAABADgAhpAUQABAHAFAAIAwAAIAAh+QAAgBAAAAQAAgBgBgBQAAAAgBAAQgBAAAAAAIgzAAg");
	this.shape.setTransform(162.25,306.5451);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlCCVIiDjfIAACqQAAAaAEAGQAFAJAMAAIAHAAIAAAHIhFAAIAAgHIAHAAQAMAAAGgLQADgGAAgYIAAjAQgJgOgEgFQgFgEgIgEQgFgCgIAAIAAgIIA2AAIB5DQIAAifQAAgagEgGQgFgJgMAAIgHAAIAAgIIBFAAIAAAIIgHAAQgMAAgGALQgDAGAAAYIAADpgABbCSIBWkmIAVAAIhWEmgAF5CIIAAg5IiRAAIAAgaIApAAIAAhcQABgGAFAAIBiAAIAAguIhWAAQgSAdgaAVIgTgSQAWgQALgTQALgPAKghIAZAHQgCAKgEAIIDJAAIAAAaIhiAAIAAAuIBaAAIAAAaIhaAAIAABIIBmAAIAAAaIhmAAIAAA5gAEsgQIAABFIBNAAIAAhIIhKAAQgBAAAAABQgBAAAAAAQgBABAAAAQAAAAAAABgAgCCEIAAgNIixAAIAAANIgbAAIAAj/QABgKAJAAIDTAAQAJABAAAJIAAD/gAizBcICxAAIAAhVIixAAgAizhmIAABTICxAAIAAhTQAAgBAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAIiqAAQgBAAgBAAQAAABgBAAQAAABgBAAQAAABAAABg");
	this.shape_1.setTransform(81.425,358.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAuBqQgJgPAAgVQAAgNADgLQADgLAGgJQAFgGAGgEQAGgDAGAAQAMAAAKANQAMAPAAAbQAAASgFAOQgFANgJAGQgIAFgIAAQgPAAgKgSgAA+AXQgFAHgCAOQgCANAAANQAAAdAHANQAFAHAGAAQAFAAAEgEQAFgDACgKQAEgNAAgZQAAgSgEgMQgDgJgEgEQgDgDgFAAQgFAAgFAFgAhXBSQgJgGgFgMQgEgMAAgOQgBgXAIgaQATg5AhggQAZgXAYAAQAYAAAKAXQANAfgRA2QgQAzggAeQgaAXgYAAQgNAAgJgHgAhQAiQgDAQADAMQABAHAGAFQAFAFAIAAQAKAAALgJQALgJAKgTQALgUALghIhJAAQgIAZgDAUgAgVhqQgLAIgJASQgLASgOApIBJAAQAMgmAAgXQABgSgHgIQgFgFgIAAQgKAAgLAHg");
	this.shape_2.setTransform(114.5235,454.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AlhCJIgBgZQAYAHAFgEQAGgDAAgHIAAhHIgCgBIgqAAIgMAqIAZgEIgKgXIAUgHIATA6IgUAEIgEgLIg5ALIgIgVIAKgCIAOgvIgYAAIgBABIAABnIgYAAIAAh4QAAgFAFAAIAxAAIAEgNIgsAAQgKgBABgIIAAhLIAUAAIAAA9QABABAAAAQABABAAAAQAAABAAAAQABAAAAAAIBSAAQABAAABAAQAAAAABgBQAAAAAAgBQABAAAAgBIAAg9IAUAAIAAAfQAagjAJgxIAXAHIgPAsIAnAAQAMgdAEgVIAWAHQgEATgJAYIAjAAIgDAYIgmAAIAAAqIAlAAIAAAXIglAAIAAAqIAlAAIAAAXIglAAIAAAtIAnAAIAAAXIhrAAQgJgBAAgIIAAiuIgJANQgHgJgIgEIAAAmQAAAJgKAAIgsAAQgDAGAAAHIA4AAQAGAAABAFIAABhQAAAOgNAHQgHAFgNAAQgLAAgOgDgAj+BsQABABAAABQAAAAABABQAAAAAAAAQABABAAAAIAcAAIAAgtIgfAAgAj+AsIAfAAIAAgqIgfAAgAj+g9IAAAoIAfAAIAAgqIgcAAIgDACgAEgCMIAAg0Ih8AAIAAgXIB8AAIAAgYIg6AGQgBgKgDgMIAagEQAQgOATgUQgagcgcgPQAHgLAFgKQAFABAOALQALgPAIgPIhxAAIAAgXIB4AAIAAgVIAZAAIAAAVIBzAAIAAAXIh3AAQgLATgTAaIAUATQAUgbAKgaIAWAJQgPAmg2A3IA0gHQgIgQgDgEIAUgKQAVAgANAgIgWAIIgIgTIgjAEIAAAbIB6AAIAAAXIh6AAIAAA0gAghCHQgMAAgHgFQgOgKAAgZIAAjUIAbAAIAADQQABAJABADQAEAFAKAAIBAAAQAOAAADgHQAEgFABgHQABgHgBgtIAbAEQABAwgEASQAAAJgFAHQgIAKgFABQgHABgMAAgAiLBkQAWh1gBhKIAaACQABBRgWBvgABNhhIAZgGQAaBRALB0IgaAFQgOh9gWhHgACkAgQAzgeAZgYIARARQgbAYgxAggAgOiEIAZgGQAXBHAIBpIgaAFQgLhvgThAgAFqgDIANgTQAcARAgAdIgQARQgjgegWgOgACyhFIARgPQASAQAVAcIgSAQQgXgfgPgOgAmTgrQAPgGALgIIgZgSIAMgQIAbAVQALgKALgOIAPAOIgVAWQAMAJAHAIIgNAOIgWgRQgPALgRAJQgEgMgEgHgAFlgwQAggaAOgSIAQAQQgRAWgdAXgAmyhhIAAgYIA3AAIAAgRIAZAAIAAARIA4AAIAAAYg");
	this.shape_3.setTransform(88.6,214.8781);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiPB3QAbgUALgSIAVAPQgPATgeAZgADBCGIAAgeQAyAOALgHQAEgDgBgKIAAgdIi4AAQgMAogPAdIgagKQAcg1ABgmIAAhiIgRAIIgMgZQA2gXAXgnIAWAKQgEAEgBAFIBpAAIAPAPQgJASgSAOIBEAAQAIACAAAGIAACrQgBARgIAIQgKAIgRABQgVgBghgEgACwAtIBRAAIAAgjIhRAAgABLAtIBMAAIAAgjIhMAAgACwgOIBRAAIAAggQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgBgBAAIhOAAgABLguIAAAgIBMAAIAAgkIhKAAQgBAAAAABQgBAAAAAAQAAABAAAAQAAABAAABgABFhKIBiAAQAWgLALgMIhnAAQgOAPgOAIgAg1BlIASgTQAPARAUAaIgWAOQgUgbgLgLgAj7CJIAAiRQgCAHgEAEIgZgIQAkg+AEhEIAaADQgDAhgIAbIAADRgAjFB5QgMgBAAgLIAAjnIAYAAIAABPQAMgSALghIAXAMQgSAtgcAhIAABdQAAAJAIAAIAIAAQABgBABgGIAFgxIAWAHQgBA7gKAIQgIAFgIAAgAiDBQQAAAAgBAAQgBAAAAgBQgBAAAAgBQAAgBAAgBIAAieQAAgBAAgBQAAAAABgBQAAAAABAAQABgBAAAAIAkAAQAEgHACgKIAAgCIg1AAIAAgYICKAAIAAAYIg8AAIgFATIA3AAQABAAABABQABAAAAAAQABABAAAAQAAABAAABIAACeQAAABAAABQAAABgBAAQAAABgBAAQgBAAgBAAgAhuA3QAAAAABABQAAAAAAAAQAAAAAAAAQAAAAABAAIBJAAIABgBIAAgWIhMAAgAhuAKIBMAAIAAgXIhMAAgAhugkIBMAAIAAgaIhMAAg");
	this.shape_4.setTransform(103.9,119.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 圖層_1
	this.btnZero = new lib.btnZero();
	this.btnZero.name = "btnZero";
	this.btnZero.parent = this;
	this.btnZero.setTransform(186.65,544.85,0.7,0.7);

	this.slPTheta0 = new lib.theSlider2();
	this.slPTheta0.name = "slPTheta0";
	this.slPTheta0.parent = this;
	this.slPTheta0.setTransform(75.35,497.1);

	this.slNNDaysPerYear = new lib.theSlider2();
	this.slNNDaysPerYear.name = "slNNDaysPerYear";
	this.slNNDaysPerYear.parent = this;
	this.slNNDaysPerYear.setTransform(75.35,402.6);

	this.slEccentricity = new lib.theSlider2();
	this.slEccentricity.name = "slEccentricity";
	this.slEccentricity.parent = this;
	this.slEccentricity.setTransform(75.35,259.5);

	this.slObliquity = new lib.theSlider2();
	this.slObliquity.name = "slObliquity";
	this.slObliquity.parent = this;
	this.slObliquity.setTransform(75.35,165);

	this.chSeason = new lib.theCheckbox();
	this.chSeason.name = "chSeason";
	this.chSeason.parent = this;
	this.chSeason.setTransform(167.4,306.4,1,1,0,0,0,67.2,-1.4);

	this.btnEarth = new lib.BtnEarth_();
	this.btnEarth.name = "btnEarth";
	this.btnEarth.parent = this;
	this.btnEarth.setTransform(102.35,544.9,0.7,0.7,0,0,0,0.1,0.1);

	this.nsPTheta0 = new lib.theNumberStepper();
	this.nsPTheta0.name = "nsPTheta0";
	this.nsPTheta0.parent = this;
	this.nsPTheta0.setTransform(187.25,452.7);

	this.nsNNDaysPerYear = new lib.theNumberStepper();
	this.nsNNDaysPerYear.name = "nsNNDaysPerYear";
	this.nsNNDaysPerYear.parent = this;
	this.nsNNDaysPerYear.setTransform(187.25,357.6);

	this.nsEccentricity = new lib.theNumberStepper();
	this.nsEccentricity.name = "nsEccentricity";
	this.nsEccentricity.parent = this;
	this.nsEccentricity.setTransform(187.25,214.2);

	this.nsObliquity = new lib.theNumberStepper();
	this.nsObliquity.name = "nsObliquity";
	this.nsObliquity.parent = this;
	this.nsObliquity.setTransform(187.25,120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nsObliquity},{t:this.nsEccentricity},{t:this.nsNNDaysPerYear},{t:this.nsPTheta0},{t:this.btnEarth},{t:this.chSeason},{t:this.slObliquity},{t:this.slEccentricity},{t:this.slNNDaysPerYear},{t:this.slPTheta0},{t:this.btnZero}]}).wait(1));

	// bg
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CCCCCC").ss(3,1,1).p("EgPngnDIfPAAQDIAAAADIMAAABH3QAADIjIAAI/PAAQjIAAAAjIMAAAhH3QAAjIDIAAg");
	this.shape_5.setTransform(140,326.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("EgPnAnEQjIAAAAjIMAAAhH3QAAjIDIAAIfPAAQDIAAAADIMAAABH3QAADIjIAAg");
	this.shape_6.setTransform(140,326.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.controlPlanet, new cjs.Rectangle(18.5,75.2,243,503.00000000000006), null);


(lib.controlMan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA4CIIAAgZQAZAHAEgDQADgEAAgFIAAgqIg8AAQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAg1QAAgBAAgBQABgBAAAAQAAgBAAAAQABAAAAAAICMAAQAAAAABAAQABAAAAABQABAAAAABQAAABAAABIAAA1QAAAAAAABQAAABgBAAQAAABgBAAQgBAAAAAAIg4AAIAAAwQgBASgMAGQgFAEgLAAQgKAAgRgEgAAxAZIAAATIBhAAIABgBIAAgSIgBgBIhhAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAgACmB3QAkgOAYgRQAUgRAXgnIAVAMQgLAXgMAPQgZAig9AYgAijCMIAAhVIh8AAIAAgZIB8AAIAAguIhqAAIAAgaIDuAAIAAAaIhpAAIAAAuIB8AAIAAAZIh8AAIAABVgAAJBvQAYgPAPgYIAUAQQgWAegZAOQgFgOgHgHgACBBVIAUgNQALAPAMAZIgVAMQgMgbgKgMgAC0AQQAygTAng1IAUAPQgmA1g5AagAALgHIAAgXIBKAAIAAgOIg4AAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAgBAAAAIAAhRQAAgBABgBQAAAAAAAAQAAgBABAAQAAAAAAAAICJAAQABAAABABQABAAAAAAQABABAAAAQAAAAAAABIAABRQAAAAAAABQAAABgBAAQAAABgBAAQgBAAgBAAIg4AAIAAAOIBLAAIAAAXgAAyhBIBfAAIABgBIAAgMIhgAAgAAyhhIBgAAIAAgMIhgAAgAinhFQAbgbAMgqIAXAKIgDAKIBcAAIAAAXIg3AAIALAfIgYAIIgOgnIgUAAQgSAdgOAPQgJgNgIgFgAkhhHQAZgcALgoIAXAKIgDAKIBGAAIAAAYIgiAAIAIAhIgZAGIgJgnIgWAAQgPAagMAPQgLgNgGgEgAC5hOQAqgQAggsIAVAPQggAqgyAZg");
	this.shape.setTransform(1477.65,232.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhhCLIAAiAIgkADQgBgKgEgLIATgDIAXgbQgVgTgVgLIALgUIAJAFQAPgaAMgdIAUAKQgIAYgXAhIATAPQAOgYAHgWIAXAHQgLAigoAvIAcgCQgEgMAAgEIAVgGQALAkAEAOIgVAEIgCgLIgTACIAACDgAA6CLIAAgiIhVAAIAAgXIAWAAIAAgYIgUAAIAAgYIBTAAIAAgPIhLAAQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAgBAAgBIAAg0QAAAAAAgBQABgBAAAAQABgBAAAAQABAAABAAICIAAQABAAAAAAQABAAAAABQABAAAAABQAAABAAAAIAAA0QAAABAAABQAAABgBAAQAAABgBAAQAAAAgBAAIgkAAIAAAPIAyAAIAAAYIgyAAIAAAYIA4AAIAAAXIg4AAIAAAigAASBSIAoAAIAAgYIgoAAgAACgQIAAANIBgAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIAAgNQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAIhgAAQgBAAAAABQAAAAAAAAQAAAAAAAAQAAAAABABgAiKB0QAIgkACgyIAWADQgDAsgHAsgAhBAhIAWgCQAJAzACAdIgXABQgDgvgHgggAgng2IAAgXIAsAAIAFgSIgfAAIAAgYIAmAAIAGgTIAYAFIgEAOIA8AAQAFACAAAFIAAAjIAfAAIAAAXgAAehNIA3AAIAAgQQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAIgtAAg");
	this.shape_1.setTransform(1419.475,181.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhaCMIAAiCIgqAGIgGgVIAUgDQAMgMAOgVQgZgVgWgOIALgVQACABAKAGQAMgWALgaIAUAKQgHAUgSAhIASAPQALgYAHgUIAXAGQgKAkgoAyIAlgFIgHgUIAVgGQALAfAFAbIgVADQgCgFgBgIIgUADIAACEgAgZCDIAAgYIBFAAIAAg8Ig7AAIAAgXICVAAIAAAXIhAAAIAAA8IBGAAIAAAYgAiKB4QAMg1ABghIAWACQgCAmgMAxgAg5AlIAWgEIAKBAIgXACgAgVggQgJgLADgEQASgVAKgeIAVALQgOAagLARQAAAAgBABQAAAAAAAAQAAABAAAAQABABAAABQAJALATAeIgUANQgMgdgOgRgAAgghQgIgKAEgEQAQgTAOggIAUAMQgNAZgOARQAAABgBAAQAAAAAAAAQAAABAAAAQABAAAAABQANANARAcIgTANQgPgdgPgRgABbgeQgKgMAEgDQAPgTALgiIAVALQgMAcgMAPQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQALALATAbIgUAOQgNgZgOgRgAgYhoIAAgYICiAAIAAAYg");
	this.shape_2.setTransform(1419.625,122.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 圖層_1
	this.nsManLo = new lib.theNumberStepper();
	this.nsManLo.name = "nsManLo";
	this.nsManLo.parent = this;
	this.nsManLo.setTransform(1500,120);

	this.chShadow = new lib.theCheckbox();
	this.chShadow.name = "chShadow";
	this.chShadow.parent = this;
	this.chShadow.setTransform(1489.15,229.2,1,1,0,0,0,67.2,-1.4);

	this.nsManLa = new lib.theNumberStepper();
	this.nsManLa.name = "nsManLa";
	this.nsManLa.parent = this;
	this.nsManLa.setTransform(1501,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nsManLa},{t:this.chShadow},{t:this.nsManLo}]}).wait(1));

	// bg
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CCCCCC").ss(3,1,1).p("AsfvnIY/AAQDIAAAADIIAAY/QAADIjIAAI4/AAQjIAAAAjIIAA4/QAAjIDIAAg");
	this.shape_3.setTransform(1480,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AsfPoQjIAAAAjIIAA4/QAAjIDIAAIY/AAQDIAAAADIIAAY/QAADIjIAAg");
	this.shape_4.setTransform(1480,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.controlMan, new cjs.Rectangle(1378.5,78.5,203,203), null);


(lib.controlTimer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dtBtn
	this.dtBtnSS = new lib.dtBtn_();
	this.dtBtnSS.name = "dtBtnSS";
	this.dtBtnSS.parent = this;
	this.dtBtnSS.setTransform(1380,788.2);
	new cjs.ButtonHelper(this.dtBtnSS, 0, 1, 2, false, new lib.dtBtn_(), 3);

	this.dtBtnMM = new lib.dtBtn_();
	this.dtBtnMM.name = "dtBtnMM";
	this.dtBtnMM.parent = this;
	this.dtBtnMM.setTransform(1339.3,788.2);
	new cjs.ButtonHelper(this.dtBtnMM, 0, 1, 2, false, new lib.dtBtn_(), 3);

	this.dtBtnHH = new lib.dtBtn_();
	this.dtBtnHH.name = "dtBtnHH";
	this.dtBtnHH.parent = this;
	this.dtBtnHH.setTransform(1298.65,788.2);
	new cjs.ButtonHelper(this.dtBtnHH, 0, 1, 2, false, new lib.dtBtn_(), 3);

	this.dtBtnDD = new lib.dtBtn_();
	this.dtBtnDD.name = "dtBtnDD";
	this.dtBtnDD.parent = this;
	this.dtBtnDD.setTransform(1258,788.2);
	new cjs.ButtonHelper(this.dtBtnDD, 0, 1, 2, false, new lib.dtBtn_(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dtBtnDD},{t:this.dtBtnHH},{t:this.dtBtnMM},{t:this.dtBtnSS}]}).wait(1));

	// text
	this.btnZero = new lib.btnZero();
	this.btnZero.name = "btnZero";
	this.btnZero.parent = this;
	this.btnZero.setTransform(1537.85,723.75,0.6,0.6,0,0,0,0.1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgxBKIAAg/QgGAPgGAKIgNgFQARgWAGgYIgVAAIAAgPIAXAAIAAgXIgSABIgCgOQAfgCARgGIADAOIgSAEIAAAaIATAAIAAAPIgTAAIAAAAIAZAgIgLAJIgOgWIAABGgAgaA7QAogDASgQQAPgMAAgdIAAgfIgIgVIANgFQAQAtAHAZIgNADIgDgKQgCAagOAQQgKALgNAGQgPAGgZAEgAgHAiIABgOIAKADQAKACADgCIABgEIAAhbIAOAAIAABeQAAAJgIAFQgDACgGAAQgJAAgNgEgAgRADQAKgfADgaIAMADQgHAmgFATg");
	this.shape.setTransform(1380.465,788.025,1.5,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhKA+QANgHAMgIQAcgTAFgeIgeAAIAAgPIBeAAIACABQgLgPgLgaQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAAAgBAAIguAAIAAgOIA1AAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQARAnAXATIgNAJIgJgKIAAAgQgBAegGAIQgFAJgIACQgQAFgbgIIABgQQAZAJAKgEQAEgBADgEQAEgGABgPIAAgfIgBAAIgmAAQgFARgGANQgPAZglAUgAhKgJQAWgUAKgZIANAFQgQAhgRAPg");
	this.shape_1.setTransform(1340.515,788.3125,1.5,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOBGIAAgOIAMAEIAIABQAEAAADgDIAAgEIAAgoIg+AAIAAgOIA+AAIAAgOIg+AAIAAgOIAnAAIAAgSIgiAAIAAgNIAiAAIAAgPIAOAAIAAAPIAkAAIAAANIgkAAIAAASIAnAAIAAAOIgQAAIAAAOIAPAAIAAAOIgPAAIAAAsQAAAJgHAEQgEAEgIAAQgJAAgNgFgAhHBDIAAiCQAAgFAFAAIAjAAQAFAAAAAFIAAByQgBAFgEAAIgaAAIAAALgAg5AqIAOAAQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBIAAgmIgRAAgAg5g0IAAAoIARAAIAAgoQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIgNAAQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAAAAAgAgMAZIAMgHQAIAMAHARIgMAGQgHgSgIgKg");
	this.shape_2.setTransform(1299.9525,788.0513,1.5,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAvBHIAAgHIhdAAIAAAHIgPAAIAAiIQABgFAEAAIBxAAQAFABAAAEIAACIgAguAxIBdAAIAAgtIhdAAgAgug2IAAAtIBdAAIAAgtQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAgBAAIhZAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAg");
	this.shape_3.setTransform(1258.515,788.525,1.5,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AimBjQgPgLgJgSQgIgTAAgXQAAgYAHgRQAIgUAQgJQAPgKATAAQAOAAALAFQALAHAHAJIAAhNIAaAAIAADVIgYAAIAAgTQgPAXgdAAQgSAAgQgKgAiggQQgLAOAAAeQAAAdAMAQQANAPARgBQARABAMgOQAMgPAAgdQAAgfgMgPQgMgPgSAAQgSAAgMAPgAgDBnQgIgEgDgIQgDgIAAgXIAAhZIgTAAIAAgUIATAAIAAgmIAZgQIAAA2IAbAAIAAAUIgbAAIAABaQAAALACAEQABADADACQADACAGAAIAMgBIADAXQgLACgJAAQgOABgHgFgAA5AsIAAgYICOAAIAAAYgAA5gUIAAgZICOAAIAAAZg");
	this.shape_4.setTransform(1215.075,787.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ACKCHIAAjWIAYAAIAAAUQAJgMAKgGQALgGAPAAQAUAAAPAKQAQALAHASQAIATAAAWQAAAXgIATQgJATgQALQgRAKgSAAQgNAAgKgGQgLgFgHgJIAABMgACvguQgNAPAAAeQAAAdAMAPQAMAOASAAQARAAANgPQAMgPAAgeQAAgegMgOQgMgPgRAAQgRAAgNAQgAgRA6QgUgVAAglQAAgnAUgWQAUgWAgAAQAfAAAUAVQAUAWAAAmIgBAGIhzAAQACAaAMANQANAOAUAAQAOAAAKgIQALgHAGgRIAbAEQgHAXgRAOQgSANgbAAQgiAAgTgVgAAFgxQgMAMgBAVIBWAAQgCgUgIgKQgNgPgUAAQgSAAgMAMgAj8BCQgQgMgEgZIAagEQACAPAKAJQAKAIASAAQATAAAIgHQAJgIAAgKQAAgJgIgFQgFgDgWgGQgdgHgLgEQgLgGgGgJQgGgKAAgLQAAgKAFgJQAFgJAIgGQAGgFALgDQAKgDANAAQASAAAOAFQAOAGAGAJQAHAJACAPIgZADQgCgMgJgGQgIgHgPAAQgTAAgHAGQgIAGAAAIQAAAFADAEQADAEAHADIAXAHQAcAHAMAFQALAFAGAIQAGAJAAAOQAAANgHALQgIAMgPAGQgOAHgTAAQgeAAgQgNgAhcBJQgIgFgDgHQgEgIAAgXIAAhZIgTAAIAAgUIATAAIAAgnIAbgQIAAA3IAaAAIAAAUIgaAAIAABaQAAALABAEQABADAEACQADACAGAAIALgBIAEAXQgLACgJAAQgOAAgIgEg");
	this.shape_5.setTransform(1376.625,661.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABlBNQgRgTAAghQAAghARgTQARgSAcAAQAcAAAQASQASATAAAgIgBAGIhkAAQACAWALAMQALAMARAAQAMAAAJgHQAJgGAGgPIAXADQgGAVgPALQgPAMgXAAQgeAAgRgSgAB5gQQgMAKgBARIBMAAQgCgQgHgJQgLgNgSAAQgPAAgKALgAjtBaQgIgEgCgHQgDgGAAgVIAAhNIgRAAIAAgSIARAAIAAggIAXgOIAAAuIAWAAIAAASIgWAAIAABOQgBAKACADQABADADACQACABAFAAIAKgBIAEAUQgKACgHAAQgNAAgGgDgADyBbIAAgaIAaAAIAAAagAAiBbIAAhUQAAgNgBgGQgDgGgFgEQgHgDgIgBQgNAAgJAKQgJAJAAAUIAABOIgYAAIAAhXQAAgOgFgIQgFgHgNgBQgKAAgIAGQgIAFgEAJQgEAJABASIAABGIgYAAIAAiGIAVAAIAAATQAHgJAKgGQALgHANABQAPAAAKAGQAJAGAEALQAQgYAYABQAUAAALALQAMALAAAXIAABbgAi2BbIAAiGIAWAAIAACGgADygRIAAgaIAaAAIAAAagAi2hEIAAgZIAWAAIAAAZg");
	this.shape_6.setTransform(1221.95,720.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgxBKIAAg/QgGAPgGAKIgNgFQARgWAGgYIgVAAIAAgPIAXAAIAAgXIgSABIgCgOQAfgCARgGIADAOIgSAEIAAAaIATAAIAAAPIgTAAIAAAAIAZAgIgLAJIgOgWIAABGgAgaA7QAogDASgQQAPgMAAgdIAAgfIgIgVIANgFQAQAtAHAZIgNADIgDgKQgCAagOAQQgKALgNAGQgPAGgZAEgAgHAiIABgOIAKADQAKACADgCIABgEIAAhbIAOAAIAABeQAAAJgIAFQgDACgGAAQgJAAgNgEgAgRADQAKgfADgaIAMADQgHAmgFATg");
	this.shape_7.setTransform(1492.475,722.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhKA+QANgHAMgIQAcgTAFgeIgeAAIAAgPIBeAAIACABQgLgPgLgaQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAAAgBAAIguAAIAAgOIA1AAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQARAnAXATIgNAJIgJgKIAAAgQgBAegGAIQgFAJgIACQgQAFgbgIIABgQQAZAJAKgEQAEgBADgEQAEgGABgPIAAgfIgBAAIgmAAQgFARgGANQgPAZglAUgAhKgJQAWgUAKgZIANAFQgQAhgRAPg");
	this.shape_8.setTransform(1432.075,722.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAOBGIAAgOIAMAEIAIABQAEAAADgDIAAgEIAAgoIg+AAIAAgOIA+AAIAAgOIg+AAIAAgOIAnAAIAAgSIgiAAIAAgNIAiAAIAAgPIAOAAIAAAPIAkAAIAAANIgkAAIAAASIAnAAIAAAOIgQAAIAAAOIAPAAIAAAOIgPAAIAAAsQAAAJgHAEQgEAEgIAAQgJAAgNgFgAhHBDIAAiCQAAgFAFAAIAjAAQAFAAAAAFIAAByQgBAFgEAAIgaAAIAAALgAg5AqIAOAAQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBIAAgmIgRAAgAg5g0IAAAoIARAAIAAgoQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIgNAAQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAAAAAgAgMAZIAMgHQAIAMAHARIgMAGQgHgSgIgKg");
	this.shape_9.setTransform(1371.7,722.8009);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAvBHIAAgHIhdAAIAAAHIgPAAIAAiIQABgFAEAAIBxAAQAFABAAAEIAACIgAguAxIBdAAIAAgtIhdAAgAgug2IAAAtIBdAAIAAgtQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAgBAAIhZAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAg");
	this.shape_10.setTransform(1311.375,723.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btnZero}]}).wait(1));

	// 圖層_1
	this.btnPlay24 = new lib.BtnPlay24_();
	this.btnPlay24.name = "btnPlay24";
	this.btnPlay24.parent = this;
	this.btnPlay24.setTransform(1519.15,659.95,0.7,0.7);

	this.nsSS = new lib.theNumberStepper_short();
	this.nsSS.name = "nsSS";
	this.nsSS.parent = this;
	this.nsSS.setTransform(1462.7,724.05);

	this.nsMM = new lib.theNumberStepper_short();
	this.nsMM.name = "nsMM";
	this.nsMM.parent = this;
	this.nsMM.setTransform(1402.7,724.05);

	this.nsHH = new lib.theNumberStepper_short();
	this.nsHH.name = "nsHH";
	this.nsHH.parent = this;
	this.nsHH.setTransform(1342.7,724.05);

	this.btnPlayStop = new lib.BtnPlayStop_();
	this.btnPlayStop.name = "btnPlayStop";
	this.btnPlayStop.parent = this;
	this.btnPlayStop.setTransform(1239.55,660,0.7,0.7,0,0,0,0.2,0.2);

	this.chStep = new lib.theCheckbox();
	this.chStep.name = "chStep";
	this.chStep.parent = this;
	this.chStep.setTransform(1384.45,660,1,1,0,0,0,67.2,-1.4);

	this.nsDD = new lib.theNumberStepper_short();
	this.nsDD.name = "nsDD";
	this.nsDD.parent = this;
	this.nsDD.setTransform(1282.7,724.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nsDD},{t:this.chStep},{t:this.btnPlayStop},{t:this.nsHH},{t:this.nsMM},{t:this.nsSS},{t:this.btnPlay24}]}).wait(1));

	// bg
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#CCCCCC").ss(3,1,1).p("AAAj5IAAHz");
	this.shape_11.setTransform(1450.3,660);

	this.dtBtnBG = new lib.dtBtnBG();
	this.dtBtnBG.name = "dtBtnBG";
	this.dtBtnBG.parent = this;
	this.dtBtnBG.setTransform(1258,788.2,0.4,0.4,0,0,0,0.1,0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CCCCCC").ss(3,1,1).p("A8HvnMA4PAAAQDIAAAADIIAAY/QAADIjIAAMg4PAAAQjIAAAAjIIAA4/QAAjIDIAAg");
	this.shape_12.setTransform(1380,720);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("A8HPoQjIAAAAjIIAA4/QAAjIDIAAMA4PAAAQDIAAAADIIAAY/QAADIjIAAg");
	this.shape_13.setTransform(1380,720);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.dtBtnBG},{t:this.shape_11}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.controlTimer, new cjs.Rectangle(1178.5,618.5,403,203), null);


(lib.controlSkyBall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqXCHIACgeQAVAHAIAAIALgBQAHgCADgLIifAAIgEALIgYgHQAQgxAIgeIglAAIAAgXIArAAQAHgVAEguQAAgFABgBQACgCAEABIC4AAQADgBAEADQACADAAADQgCAkgEAeIAbAAIAAAXIgeAAQgHAngBAMIAiAAIAAAYIgoAAQgIAegQAIQgJAFgOAAQgQAAgUgGgAr6BKICgAAIAJgzIiaAAQgEATgLAggArdgyIgBAFQgBARgHAcICYAAIAFgyIgCgBIiOAAIgEABgALACEIAAgbQARAGAHABIAPADQAGAAAFgFQACgEAAgEIAAhLIh2AAIAAgaIB2AAIAAgcIh2AAIAAgZIBLAAIAAgiIhDAAIAAgYIBDAAIAAgdIAZAAIAAAdIBDAAIAAAYIhDAAIAAAiIBKAAIAAAZIgeAAIAAAcIAcAAIAAAaIgcAAIAABSQAAARgOAJQgIAFgOAAQgQAAgagIgAkdCIIAAgNIixAAIAAANIgbAAIAAkAQABgJAJAAIDUAAQAJABAAAIIAAEAgAnOBgICxAAIAAhWIixAAgAnOhjIAABTICxAAIAAhTQAAAAAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAIiqAAQgBAAgBAAQAAAAgBABQAAAAgBABQAAABAAAAgAIgB+IAAj1QAAgIAIAAIBCAAQAJAAAAAIIAADXQgBAJgIAAIgwAAIAAAVgAI6BQIAZAAQAGgCAAgEIAAhIIgfAAgAI6hiIAABLIAfAAIAAhLQAAgDgEAAIgYAAQgBAAAAAAQgBAAAAABQgBAAAAABQAAABAAAAgAKOAwIAWgNQARAWAOAgIgYAMQgPgigOgTgArCAvIALgUQAVAHAZARIgMAUQgbgRgSgHgAq2gbIALgUQAVAHAaARIgMAUQgcgRgSgHgAsqhEQAhgaATguIAYANQgDAFgBADIDCAAIAAAZIjSAAQgSAdgVASQgJgOgIgHg");
	this.shape.setTransform(1287.675,349.3506);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADMCJIgFgeQAgAJAHgHQAGgGAEgOQAFgSAAgnQABhYgBgDIgEgCIgbAAQgDASgBAVQgFAtgIAoQgMA1gLAWIgagFQAhhPAIhzIgYAAIAAgZIAZAAIAAgTIAAgeIAaAAIAAAeQgBAIgBALIAvAAIAGABQAEACAAALIgBBtQgCBQgXARQgHAGgPAAQgMAAgPgDgAg9CIIAAgMIi/AAIAAAMIgaAAIAAjnQAAgJAIAAIBWAAQAKgVAEgOIAXAKIgIAZIBuAAQAJAAAAAJIAADngAj8BiIC/AAIAAgnIi/AAgAj8AiIC/AAIAAgrIi/AAgAj8hKIAAAoIC/AAIAAgoQAAgBAAgBQAAAAgBgBQAAAAgBgBQgBAAgBAAIi3AAQgGAAACAEgAALBvIBDgFIAAgUIg/AAIAAgWIA/AAIAAgRIg+AAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIAAhZIACgDIA+AAIAAgRIhBAAIAAgWIBBAAIAAgRQgkADgWAAIgEgXQBXAAAxgKIAEAWQgRAEglADIgBAAIAAASIA9AAIAAAWIg9AAIAAARIA4AAQABABABAAQAAAAABABQAAAAAAAAQAAABAAAAIAABZQAAABAAABQAAAAAAABQgBAAAAABQgBAAgBAAIg4AAIAAARIA4AAIAAAWIg4AAIAAASIAzgEIABAYIiLAKgABlAZIAjAAIABgBIAAgPIgkAAgAAmAZIAoAAIAAgQIgoAAgABlgLIAkAAIAAgQIgkAAgAAmgLIAoAAIAAgQIgoAAg");
	this.shape_1.setTransform(1286.4,465.3735);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACmB7QA2gpABhiIAAhCIguAAIAAgXIBEAAIAAgfIAaAAIAAAfIBGAAIAAAXIgwAAIAAC/QgBASgMAHQgMAIgkgIIAAgaQAbAJAHgFQACgEAAgEIAAi6IgVAAIAABCQgBAzgPArQgRAkgZAZgAjHCLIAAh1IgUATIgVgRQAsgkAWgyIAXALQgMAXgKASIAACVgAhtCBIAAgbQAYAGAVAEQAVACAIgHQACgEAAgEIAAh/IhrAAIAAgaICzAAIAAAaIguAAIAACGQAAASgOAIQgLAHgTAAQgXAAgjgKgAk2CIIAAgNIixAAIAAANIgbAAIAAj/QABgJAIAAIDUAAQAKABAAAIIAAD/gAnnBgICxAAIAAhVIixAAgAnnhiIAABTICxAAIAAhTQAAgBAAgBQgBAAAAgBQgBAAAAAAQgBAAgBAAIiqAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAABAAABgAA7BwQAGgDAHgBIAAhsIAWAAIAABnQAIgEAJgBIAAh+IgkAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAheQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAIBYAAQABAAABAAQAAAAABAAQAAABABAAQAAABAAABIAABeQAAABAAABQgBAAAAABQgBAAAAAAQgBAAgBAAIgdAAIAAApIAeAAIAAAXIgeAAIAAA3IAcgLIAJAYQggAQhHAPgABfgzIAvAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAg0IgwAAgAGVBrQgQgVAAgjQAAgdAUgRIAEgDIgCgCQgQgNAAgbQAAggAPgSQAPgSAcAAQAYAAARASQAQASAAAgQAAAbgRANQAAAAgBABQAAAAgBAAQAAAAAAABQAAAAAAAAQABACADACQAUARAAAcQAAAkgPASQgRAUgeAAQgfAAgRgSgAGpAYQgNAKAAARQABAXAKAPQAKANAUAAQAUAAAIgOQALgOAAgXQgBgRgMgKQgMgJgOAAIgDAAQgPAAgKAJgAGrhJQgIALAAAWQgBAPAKAIQAIAJARAAQANgBAKgIQALgKAAgNQgCgWgIgLQgKgLgOAAQgSAAgIALgAE+BSQgEhBgLhGIAWgCQAOBFABBEgACcBGQAfg8AAhAIAXABQgFBPgZAygAjug7QAjghASguIAXAKQgYA5gdAZgAiDhiIAAgaICeAAIAAAag");
	this.shape_2.setTransform(1307.725,299.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Am1BzQAagLAIgMQAHgIABgLIAAgyQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAgBAAIgiAAIAAgZIA5AAQAHABAAAEIAABDQABAIAHAKQAIAMAOAFQAPAGAagCQBPAAA5gDIgHAcIiQAAQgxgDgSghQgEAKgMAOQgOAOgOAFgAFJB0IAAhRQgBhBgPgmIAZAAQAFAOAEAWIAGgLQAQgZAWAAQATABAOAMQAOAOAAAcIgYAAQgBgOgFgHQgGgKgLAAQgOAAgKATQgNAWAAAmIAABRgAECB0IAAh0QgBgcgFgHQgIgJgIAAQgRABgOAMQgKAMgCAVIAAByIgYAAIAAjvIAYAAIAABLIAFgFQARgPAVAAQAXAAAMAOQAMAOAAAoIAAB0gABaB0IAAg4IhSAAIAAgLIBKiqIAhAAIAACeIAcAAIAAAXIgcAAIAAA4gAAmAlIA0AAIAAh3gAiFB0IAAgTQAAgrAygsQAvgmAAgeQAAgSgHgLQgLgMgMAAQgRAAgIALQgMAOAAAYIgZAAQAAglASgTQAQgRAcAAQAYAAAPARQAPARAAAfQAAApg2AwQgqAmAAAWIBfAAIAAAZgAj0BcIAAh+Ig8AAIAAAWQgBAbgEAVQgHAcgQAaIgXgQQAQgbAFgVQAFgSAAgUIAAhlQgCgJAHAAQBHgEA4gKIAJAYQgwALhAADQgFACABADIAAAhICGAAIAAAaIgwAAIAAB+gAmyg0IANgXQAYAJAdAVIgNAWQgggVgVgIgAmnhyIAMgXQAZAKAeAVIgNAWQghgWgVgIg");
	this.shape_3.setTransform(1300.025,239.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhzApIgEAAIgRATIAAAxQAXgEAMgDIAFAXQglAKg9ADIgEgXIAlgEIAAgfQgWAPgTAHIgNgVQAmgOAcgaIgjAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAg3IADgCICXAAQABABAAAAQABAAAAAAQABABAAAAQAAAAAAAAIAAA3QAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIg7AAQAFASAIAOQAagQAOgLIAOASQgPANgWAOQAXAUAcAJIgRAVQhNghgKhDgAijAUIBtAAIABgBIAAgSIhuAAgAG8CGIAAgaQAhAJAFgEQACgEAAgFIAAhwIg9AAQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAhlQAAgBAAAAQABgBAAAAQABgBAAAAQABAAABAAIAxAAQAHgPABgJIAZAJQgBAIgEAHIBFAAQABAAABAAQAAAAABABQAAAAABABQAAAAAAABIAABlQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAIg5AAQAHAaAIASQAYgSAOgQIAQATQgQASgaASQAQAdAgAZIgWAOQgigggWgrIAAA8QgCASgLAHQgGAEgMAAQgOAAgUgFgAG7gfIBpAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIAAgTIhrAAgAG7hdIAAAUIBrAAIAAgUQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAIhpAAQAAAAgBAAQAAAAAAAAQAAABAAAAQABAAAAAAgAFhCIIAAiAIgnAGQgCgKgFgLIAagEQAJgLALgQQgXgUgWgLIALgUIALAGQAOgaAMgdIAUAKQgJAWgTAkQAIAFAIAJQANgaAHgWIAXAFQgKAigkAyIAagFIgFgPIAVgGQALAfADAWIgVADQgCgGAAgHIgRADIAACDgAANB7IAAgbIEPAAIAAAbgApKB7IAAgbIEPAAIAAAbgAE2B1QAJgkABg1IAWAEQgCAsgHAugAGVBnQAigeAMggQABgGgEAAIgZAAIAAgXIArAAIANAHQgIAagIASQgNAZgaAggAkjBSQARgGAOgDIAAhQIgaAAIAAgZIAaAAIAAhGIgbAAIAAgZIBOAAIAAAZIgcAAIAABGIAZAAIAAAZIgZAAIAABGIAZgNIANAUQgfATgxAPgAGAAhIAXgEIAJA8IgWABQgDgcgHgdgAAnALIAAgaIDaAAIAAAagAowALIAAgaIDaAAIAAAagAjKggIAAgWIC5AAIAAAWgAjAhDQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAg6QAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABAAICmAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIAAA6QAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAhJhXIAaAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIAAgWQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAAAIgaAAgAh6hXIAcAAIAAgYIgcAAgAirhuIAAAXIAcAAIAAgYIgcAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAABABAAgAAchhIAAgbIDwAAIAAAbgAo7hhIAAgbIDwAAIAAAbg");
	this.shape_4.setTransform(1314.925,179.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("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");
	this.shape_5.setTransform(1300.225,120.4506);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 圖層_1
	this.btnClear = new lib.BtnClear_();
	this.btnClear.name = "btnClear";
	this.btnClear.parent = this;
	this.btnClear.setTransform(1339.8,417.2,0.7,0.7,0,0,0,0.4,0.2);

	this.btnRecord = new lib.BtnRecord_();
	this.btnRecord.name = "btnRecord";
	this.btnRecord.parent = this;
	this.btnRecord.setTransform(1246.65,417.2,0.7,0.7,0,0,0,0.4,0.2);

	this.chAuto = new lib.theCheckbox();
	this.chAuto.name = "chAuto";
	this.chAuto.parent = this;
	this.chAuto.setTransform(1297.2,465.35,1,1,0,0,0,67.2,-1.4);

	this.chPts8 = new lib.theCheckbox();
	this.chPts8.name = "chPts8";
	this.chPts8.parent = this;
	this.chPts8.setTransform(1297.2,298.6,1,1,0,0,0,67.2,-1.4);

	this.chPts24 = new lib.theCheckbox();
	this.chPts24.name = "chPts24";
	this.chPts24.parent = this;
	this.chPts24.setTransform(1297.2,238.6,1,1,0,0,0,67.2,-1.4);

	this.chLFix3 = new lib.theCheckbox();
	this.chLFix3.name = "chLFix3";
	this.chLFix3.parent = this;
	this.chLFix3.setTransform(1297.2,178.6,1,1,0,0,0,67.2,-1.4);

	this.chLLLine = new lib.theCheckbox();
	this.chLLLine.name = "chLLLine";
	this.chLLLine.parent = this;
	this.chLLLine.setTransform(1297.2,118.6,1,1,0,0,0,67.2,-1.4);

	this.nsViewTime = new lib.theNumberStepper_short();
	this.nsViewTime.name = "nsViewTime";
	this.nsViewTime.parent = this;
	this.nsViewTime.setTransform(1300,351.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nsViewTime},{t:this.chLLLine},{t:this.chLFix3},{t:this.chPts24},{t:this.chPts8},{t:this.chAuto},{t:this.btnRecord},{t:this.btnClear}]}).wait(1));

	// bg
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CCCCCC").ss(3,1,1).p("AwHAAMAgPAAA");
	this.shape_6.setTransform(1292.5063,384.5,0.8723,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#CCCCCC").ss(3,1,1).p("EgODggzIcHAAQDIAAAADIMAAAA7XQAADIjIAAI8HAAQjIAAAAjIMAAAg7XQAAjIDIAAg");
	this.shape_7.setTransform(1290,290);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("EgODAg0QjIAAAAjIMAAAg7XQAAjIDIAAIcHAAQDIAAAADIMAAAA7XQAADIjIAAg");
	this.shape_8.setTransform(1290,290);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.controlSkyBall, new cjs.Rectangle(1178.5,78.5,223,423), null);


// stage content:
(lib.myAnimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.titleMask = new lib.titleMask();
	this.titleMask.name = "titleMask";
	this.titleMask.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.titleMask).wait(1));

	// UI_base
	this.textFPS = new cjs.Text("fps=60.0", "12px 'Microsoft JhengHei'", "#FFFFFF");
	this.textFPS.name = "textFPS";
	this.textFPS.lineHeight = 17;
	this.textFPS.lineWidth = 132;
	this.textFPS.parent = this;
	this.textFPS.setTransform(36.6,9.3);

	this.btnZoomM = new lib.btnZoomM();
	this.btnZoomM.name = "btnZoomM";
	this.btnZoomM.parent = this;
	this.btnZoomM.setTransform(199.95,774.95,0.8333,0.8333);
	new cjs.ButtonHelper(this.btnZoomM, 0, 1, 2, false, new lib.btnZoomM(), 3);

	this.btnZoom3 = new lib.btnZoom3();
	this.btnZoom3.name = "btnZoom3";
	this.btnZoom3.parent = this;
	this.btnZoom3.setTransform(275,850,0.8333,0.8333);
	new cjs.ButtonHelper(this.btnZoom3, 0, 1, 2, false, new lib.btnZoom3(), 3);

	this.btnZoom1 = new lib.btnZoom1();
	this.btnZoom1.name = "btnZoom1";
	this.btnZoom1.parent = this;
	this.btnZoom1.setTransform(124.95,850,0.8333,0.8333);
	new cjs.ButtonHelper(this.btnZoom1, 0, 1, 2, false, new lib.btnZoom1(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah8CEIAAgbQARAGAHABIAPADQAFAAAFgFQACgEABgEIAAhLIh2AAIAAgaIB2AAIAAgcIh2AAIAAgZIBLAAIAAgiIhEAAIAAgYIBEAAIAAgdIAZAAIAAAdIBDAAIAAAYIhDAAIAAAiIBKAAIAAAZIgeAAIAAAcIAcAAIAAAaIgcAAIAABSQAAARgPAJQgHAFgOAAQgRAAgZgIgAAHBtIAqgHIAAheIgkAAIAAgWIAkAAIAAgYIgeAAIAAgXIBUAAIAAAXIgeAAIAAAYIAiAAIAAAWIgiAAIAABaIAggIIAHAZQgMAEgcAFQgmAIgWABgABxCDIAAgXIBLAAIAAgMIg/AAIAAgWIA/AAIAAgNIg4AAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAgBIAAhcQABgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAICJAAQABAAABABQAAAAABAAQAAABAAAAQAAAAAAABIAABcQAAABAAABQAAAAAAABQgBAAAAAAQgBABgBAAIg6AAIAAANIBCAAIAAAWIhCAAIAAAMIBKAAIAAAXgADTAoIAlAAIABgBIAAgTIgmAAgACZAoIAjAAIAAgUIgjAAgADTAAIAmAAIAAgRIgmAAgACZAAIAjAAIAAgRIgjAAgAkdB+IAAj1QABgIAIAAIBBAAQAKAAAAAIIAADXQgBAJgJAAIgwAAIAAAVgAkDBQIAaAAQAGgCAAgEIAAhIIggAAgAkDhiIAABLIAgAAIAAhLQAAgDgEAAIgYAAQgBAAgBAAQAAAAgBABQAAAAAAABQgBAAAAABgAivAwIAXgNQAQAWAOAgIgXAMQgPgigPgTgAALAeIAXgCQAHAvAAAPIgWABQgBgdgHgggABQBLQAHggAAgTIAWADQgDAigFATgAB1g1IAAgXIAnAAIgGgXIgdAAIAAgWIA+AAIAAgQIAZAAIAAAQIBHAAIAAAWIgfAAIgGAXIAqAAIAAAXgAC0hMIAmAAIAHgXIgyAAgAAFhUQArgaALgZIAYAAIgDAFIACAAQARAQATAOIgTASQgRgOgLgOQgPATgcAXg");
	this.shape.setTransform(1498.5,787.9843);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACECFIAAgbQAkALAIgHQACgDAAgFIAAiyIhJAAIAAgZIBJAAIAAgjIAaAAIAAAjIAxAAQgPgKgQgHIAMgUQATAJAPAMIgLAQIAUAAIAAAZIhJAAIAAAGQAFBcBRBRIgXAOQgqgvgVgrIAABSQAAASgOAIQgHAEgNAAQgPAAgXgGgAgqCFQhXgygXg5QgKAZgPAVQgkAmg7AcIgRgXQBpgnAShUIh7AAIAAgbIB+AAIAAgGIAAg3IhoAAIAAgbIDrAAIAAAbIhoAAIAAA3IAAAGIB8AAIAAAbIh6AAQABALAFAKQAVA7BgAvIgTATQgIgCgEgDgAAJBdQAVgHAOgIIAAhVIgeAAIAAgXIAeAAIAAhIIgfAAIAAgXIBaAAIAAAXIghAAIAABIIAdAAIAAAXIgdAAIAABJIAYgOIAMAUQggAXg5AVgABTBkQAqgiAWguIAVAJQgdA8gkAagADlgIQARgaAOgcIAUANQgSAigOAUgABpgwIAUgPQATAWATAhIgUANQgXgjgPgSg");
	this.shape_1.setTransform(1286,50.0149);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("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");
	this.shape_2.setTransform(1489.575,50.02);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Aj2CLIAAh2IgUATIgWgQQAtgkAVgxIAYAKQgMAXgKASIAACVgAicCAIAAgbQAXAIAWADQAUADAJgIQACgDAAgFIAAh+IhsAAIAAgaIC1AAIAAAaIgvAAIAACFQAAARgOAJQgLAHgTAAQgXAAgjgLgAAQCCIAAgYIB+AAIAAgYIheAAIAAgZIBeAAIAAgaIhSAAQgHANgTAPIgVgQQAfgbAPggIAXAKQgDAIgEAFIBDAAIAAgZIhiAAQAAAAgBgBQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAhoQAAgBAAgBQAAAAABgBQAAAAABAAQABgBAAAAIDZAAQABAAABABQABAAAAAAQABABAAAAQAAABAAABIAABoQAAABAAABQAAAAgBABQAAAAgBAAQgBABgBAAIhdAAIAAAZIBsAAIAAAYIhsAAIAAAaIBlAAIAAAZIhlAAIAAAYIB4AAIAAAYgABBgsQAAAAABAAQAAABAAAAQAAAAAAAAQABAAAAAAICsAAIABgBIAAgRIivAAgABBhoIAAATICvAAIAAgTIgBgBIisAAQAAAAgBAAQAAAAAAAAQAAAAAAABQgBAAAAAAgAkdg8QAjggASguIAXAJQgYA6gdAagAizhiIAAgaICgAAIAAAag");
	this.shape_3.setTransform(105.4,49.85);

	this.chMan = new lib.theCheckbox();
	this.chMan.name = "chMan";
	this.chMan.parent = this;
	this.chMan.setTransform(1487.2,48.6,1,1,0,0,0,67.2,-1.4);

	this.chPlanet = new lib.theCheckbox();
	this.chPlanet.name = "chPlanet";
	this.chPlanet.parent = this;
	this.chPlanet.setTransform(117.2,48.6,1,1,0,0,0,67.2,-1.4);

	this.btnZoom0 = new lib.btnZoom0();
	this.btnZoom0.name = "btnZoom0";
	this.btnZoom0.parent = this;
	this.btnZoom0.setTransform(49.95,850,0.8333,0.8333);
	new cjs.ButtonHelper(this.btnZoom0, 0, 1, 2, false, new lib.btnZoom0(), 3);

	this.btnZoom2 = new lib.btnZoom2();
	this.btnZoom2.name = "btnZoom2";
	this.btnZoom2.parent = this;
	this.btnZoom2.setTransform(200,850,0.8333,0.8333);
	new cjs.ButtonHelper(this.btnZoom2, 0, 1, 2, false, new lib.btnZoom2(), 3);

	this.slCameraRR = new lib.theSlider();
	this.slCameraRR.name = "slCameraRR";
	this.slCameraRR.parent = this;
	this.slCameraRR.setTransform(1350,850);

	this.chTimer = new lib.theCheckbox();
	this.chTimer.name = "chTimer";
	this.chTimer.parent = this;
	this.chTimer.setTransform(1507.15,786.55,1,1,0,0,0,67.2,-1.4);

	this.chSkyBall = new lib.theCheckbox();
	this.chSkyBall.name = "chSkyBall";
	this.chSkyBall.parent = this;
	this.chSkyBall.setTransform(1297.2,48.6,1,1,0,0,0,67.2,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.chSkyBall},{t:this.chTimer},{t:this.slCameraRR},{t:this.btnZoom2},{t:this.btnZoom0},{t:this.chPlanet},{t:this.chMan},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btnZoom1},{t:this.btnZoom3},{t:this.btnZoomM},{t:this.textFPS}]}).wait(1));

	// controlTimer
	this.controlTimer = new lib.controlTimer();
	this.controlTimer.name = "controlTimer";
	this.controlTimer.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.controlTimer).wait(1));

	// controlMan
	this.controlMan = new lib.controlMan();
	this.controlMan.name = "controlMan";
	this.controlMan.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.controlMan).wait(1));

	// controlSkyBall
	this.controlSkyBall = new lib.controlSkyBall();
	this.controlSkyBall.name = "controlSkyBall";
	this.controlSkyBall.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.controlSkyBall).wait(1));

	// controlPlanet
	this.controlPlanet = new lib.controlPlanet();
	this.controlPlanet.name = "controlPlanet";
	this.controlPlanet.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.controlPlanet).wait(1));

	// btn3D
	this.zoomBG = new lib.zoomBG();
	this.zoomBG.name = "zoomBG";
	this.zoomBG.parent = this;
	this.zoomBG.setTransform(200,775);

	this.btn3D = new lib.btn3D();
	this.btn3D.name = "btn3D";
	this.btn3D.parent = this;
	new cjs.ButtonHelper(this.btn3D, 0, 1, 2, false, new lib.btn3D(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn3D},{t:this.zoomBG}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(800,450,824,450);
// library properties:
lib.properties = {
	id: '98EA1A955B63F6489D0F00F6BFD1C4DE',
	width: 1600,
	height: 900,
	fps: 30,
	color: "#FF00FF",
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