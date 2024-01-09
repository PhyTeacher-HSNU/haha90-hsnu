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
	this.shape.graphics.f().s("rgba(255,255,0,0.008)").ss(1,1,1).p("AnznzIPnAAIAAPnIvnAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF00FF").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-51,102,102);


(lib.checker2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhNBOQggggAAguQAAgsAgghQAgggAtAAQAtAAAgAgQAhAhAAAsQAAAughAgQggAggtAAQgtAAggggg");

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


(lib.btnPlus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhKD6IAAivIivAAIAAiVICvAAIAAivICVAAIAACvICvAAIAACVIivAAIAACvg");
	this.shape.setTransform(-0.05,0.05);

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


(lib.btnMinus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj5BLIAAiVIHzAAIAACVg");
	this.shape.setTransform(-0.05,0.05);

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


(lib.mmbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjlDcIAAgtIBGAAIAAk0IAtAAIAAE0IBtAAIAAmKIAsAAIAABwICuAAIAAAtIiuAAIAADtIC/AAIAAAtg");
	this.shape.setTransform(874.7,177.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhPDjIAAgrQAvAOALgIQAFgGAAgIIAAhEIjCAAIAAgnIGlAAIAAAnIi8AAIAABOQgCAdgTAMQgKAHgUAAQgVAAgegHgABJChIAVgmQBnA3AUAOIgYAjQgwgfhIgjgAjeC2QBHgSAwgqIAaAfQhDA2g6AOgAinApIAAgnIFRAAIAAAngABKgQIAAhWQgjAzglAfIgggYQA7guAlg7IhDAAIAAgnIBLAAIAAgtIAqAAIAAAtIBjAAIAAAnIhcAAQApA7BHArIggAbQg2gngggpIgBgCIAABWgAiFgSIAAhUQggAxgjAfIghgWQAzgqAlg9IhNAAIAAgnIBZAAIAAgvIAoAAIAAAvIBBAAIAAAnIg7AAQAjAdAkAjIgcAeIgxgzIAABWg");
	this.shape_1.setTransform(824.7,178.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjqC9QAlgNANgOQANgPACgaIAAhEQAAgGgGAAIgwAAIAAgrIBVAAQAMACAAAIIAAB3QAEAKANALQASASAgAIQAuAMDwgMIgKAuIjTAAQhvgDgpgvQgHANgUASQgYARgTAHgAgLCmQgSgGgHgNQgKgOAAgSIAAhGQgUASgZAMIgZgiQApgVAdgZIhGAAIAAgjIBnAAQAKgMAHgMIhiAAQgHAAAAgFIAAhUQAAgGAHAAIBXAAIAAgXIhjAAIAAgnIFPAAIAAAnIhoAAIAAAXIBWAAQAGAAAAAGIAABUQAAAFgGAAIiiAAIgQAYIDFAAIAAAjIhLAAQAeAbAyARIgeAkQghgTgYgRIAAArQgBAagSALQgXAKhJgIIgDgpQA8AIAMgCQAFgEAAgGIAAgRQgCgEgCAAIhsAAIAAAqQACARAHAHQALAMBDAAQBLgCALgGQAIgHAAgkIApAPQgCAwgSAOQgVANhYAAQhQgEgTgCgAB7AQIgUgVIhfAAIgVAVICIAAIAAAAgAB9hhIAxAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAgBIAAgZQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAIgxAAgAAhhhIAzAAIAAgdIgzAAgAg7h8IAAAZQAAABAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIAzAAIAAgdIgzAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAgAAhifIAzAAIAAgXIgzAAgAjqhZIAYglQAjATArAkIgZAjQgtgngggOgAjkjAIAYglQAlATArAlIgZAkQgwgpgfgOg");
	this.shape_2.setTransform(774.9,178.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AjjC7QAHgEAJgBIAAi3IAlAAIAACrQALgCAIgGIAAjUIg1AAQgGAAAAgGIAAieQAAgGAGAAIAiAAIBVAAQAGAAAAAGIAACeQAAAGgGAAIgdAAIAABJIAjAAIAAAnIgjAAIAABWIAtgTIAQAjQg1AdhlAegAiwhbQAAABAAAAQAAAAAAABQAAAAABAAQAAAAABAAIA0AAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAgBIAAhaQAAAAAAAAQAAgBgBAAQAAAAAAABQgBAAAAAAIg0AAIgCAAgAgYDdQgOgCAAgOIAAicQgGAIgFABIgggZQAtghAZg0IAjASIgSAfIBKAAQAQgbAIgSIgQgjQAvgSAZgRIASAhQgeATgrASIAgASQgEANgIAOIBoAAIgEAiIhoAAIAAAbIBiAAIAAAkIhiAAIAAAdIBgAAIAAAjIhgAAIAAAbIBoAAIAAAkgAACC0QAAAFAGAAIBKAAIAAgbIhQAAgAACB7IBQAAIAAgdIhQAAgAACAjIAAAXIBQAAIAAgbIhKAAQgGACAAACgAhDhHQAvgaAYgRIAVAfQgaAXguAYgAC4gqIAAiLQAAgEgGAAIhUAAIAAglIB3AAQAKACAAAIIAACqgAAggwIAAiFQAAgEgHAAIhSAAIAAglIB1AAQALACgBAIIAACkgAhDiMQAvgTATgSIAUAhQgaAUgoATgABUiSQAvgTAXgOIASAhQgdAUgrARg");
	this.shape_3.setTransform(724.3,178.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABHRCQgYgWgSgfIAUgjQAPAfAUARQATAQAYAAQAVAAAOgRQAQgSAAgZQAAgIgIgMQgKgQgrgHQgrgKgSgSQgRgVAAgaQACgpAZgdQAegZAlAAQAVACAUAHQATAMAeAlIgQAjQgWgfgRgMQgRgJgSAAQgXACgOALQgQAQAAAZQAAAMAMAIQANAMAmAHQArAMARAUQAQARAAAeQACAwgeAaQgdAbgjAAQghAAgXgRgAjQRNIAAgpIBAAAIAAkpIhEAeIAAgpIBugvIAAFjIBAAAIAAApgABHrNQgYgWgSgfIAUgjQAPAfAUARQATAQAYAAQAVAAAOgRQAQgSAAgZQAAgIgIgMQgKgQgrgHQgrgKgSgSQgRgVAAgaQACgpAZgdQAegZAlAAQAVACAUAHQATAMAeAlIgQAjQgWgfgRgMQgRgJgSAAQgXACgOALQgQAQAAAZQAAAMAMAIQANAMAmAHQArAMARAUQAQARAAAeQACAwgeAaQgdAbgjAAQghAAgXgRgAjerCIAAgfQAAhIBShJQBOhCAAgxQAAgfgLgSQgSgTgTAAQgdAAgOARQgUAYAAApIgpAAQAAg/AdgfQAcgdAvAAQAnAAAZAdQAaAcAAA0QgBBFhZBSQhHA+ABAlICdAAIAAApg");
	this.shape_4.setTransform(670.55,151.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF0000").ss(8,1,1).p("AuAnAINoG0AAZgMINom0AAZANINoGzAuAHAINomz");
	this.shape_5.setTransform(800.025,160.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiLDtQhChdAAiQQAAh0AshXQA3hvBqAAQBOAAA6BJQBGBaAAByQAABPhWAAIi9AAQAKCgBLAAQAvAAAohQQAbg3AbAAQAiAAAAAyQAABMg3BAQgyA6hGAAQhjAAg4hOgAhEhDIB4AAQAXAAAAgSQAAgxgdgnQgVgcgZAAQg1AAgPCGg");
	this.shape_6.setTransform(797.9008,245.5125,0.9145,0.8966);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(3,1,1).p("ADOglQAABPhWAAIi9AAQAKCgBLAAQAvAAAohQQAbg3AbAAQAiAAAAAyQAABMg3BAQgyA6hGAAQhjAAg4hOQhChdAAiQQAAh0AshXQA3hvBqAAQBOAAA6BJQBGBaAABygABLhVQAAgxgdgnQgVgcgZAAQg1AAgPCGIB4AAQAXAAAAgSg");
	this.shape_7.setTransform(797.9008,245.5125,0.9145,0.8966);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiLDtQhChdAAiQQAAh0AshXQA3hvBqAAQBOAAA6BJQBGBaAAByQAABPhWAAIi9AAQAKCgBLAAQAvAAAohQQAbg3AbAAQAiAAAAAyQAABMg3BAQgyA6hGAAQhjAAg4hOgAhEhDIB4AAQAXAAAAgSQAAgxgdgnQgVgcgZAAQg1AAgPCGg");
	this.shape_8.setTransform(797.9008,245.5125,0.9145,0.8966);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AOBNPItoAAIAAyzICABMQAHAEAIAAQAHgBAGgFQAHgEACgIQACgHgCgHIiWoaINZAAQAUAAAPgPQAPgOAAgVQAAgUgPgPQgPgPgUAAI8BAAQgUAAgPAPQgPAPAAAUQAAAVAPAOQAPAPAUAAINaAAIiRIWQgCAKAFAJQAFAJAKACQAKADAJgFIB6hIIAASzItoAAQgUAAgPAOQgPAPAAAVQAAAUAPAPQAPAPAUAAIcBAAQAUAAAPgPQAPgPAAgUQAAgVgPgPQgPgOgUAAg");
	this.shape_9.setTransform(800.025,155.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AuAOzQgUAAgPgPQgPgPAAgUQAAgVAPgPQAPgOAUAAINoAAIAAyzIh5BIQgKAFgJgDQgLgCgFgJQgFgJADgKICQoWItaAAQgUAAgPgOQgPgPAAgVQAAgUAPgPQAPgPAUAAIcBAAQAUAAAPAPQAPAPAAAUQAAAVgPAPQgPAOgUAAItZAAICWIaQACAHgCAIQgCAHgHAEQgGAFgHABQgIAAgHgEIiAhMIAASzINoAAQAUAAAPAOQAPAPAAAVQAAAUgPAPQgPAPgUAAg");
	this.shape_10.setTransform(800.025,155.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("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");
	this.shape_11.setTransform(800.025,650.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(0,0,255,0.898)","rgba(0,255,255,0.898)"],[0,1],0,451.7,0,-451.6).s().p("Eh8/BGUMAAAiMnMD5/AAAMAAACMng");
	this.shape_12.setTransform(800,450);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mmbg, new cjs.Rectangle(0,0,1600,900), null);


(lib.menuPointer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(10,1,1).p("EggzAAAMBBnAAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.menuPointer, new cjs.Rectangle(-215,-5,430,10), null);


(lib.levelX = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(8,1,1).p("AAAAAIH0D6AAAAAIH0j5AnzD6IHzj6Anzj5IHzD5");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.levelX, new cjs.Rectangle(-54,-29,108,58), null);


(lib.ee = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiLDtQhChdAAiQQAAh0AshXQA3hvBqAAQBOAAA6BJQBGBaAAByQAABPhWAAIi9AAQAKCgBLAAQAvAAAohQQAbg3AbAAQAiAAAAAyQAABMg3BAQgyA6hGAAQhjAAg4hOgAhEhDIB4AAQAXAAAAgSQAAgxgdgnQgVgcgZAAQg1AAgPCGg");
	this.shape.setTransform(0.0897,1.6375,0.51,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("ADOglQAABPhWAAIi9AAQAKCgBLAAQAvAAAohQQAbg3AbAAQAiAAAAAyQAABMg3BAQgyA6hGAAQhjAAg4hOQhChdAAiQQAAh0AshXQA3hvBqAAQBOAAA6BJQBGBaAABygABLhVQAAgxgdgnQgVgcgZAAQg1AAgPCGIB4AAQAXAAAAgSg");
	this.shape_1.setTransform(0.0897,1.6375,0.51,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiLDtQhChdAAiQQAAh0AshXQA3hvBqAAQBOAAA6BJQBGBaAAByQAABPhWAAIi9AAQAKCgBLAAQAvAAAohQQAbg3AbAAQAiAAAAAyQAABMg3BAQgyA6hGAAQhjAAg4hOgAhEhDIB4AAQAXAAAAgSQAAgxgdgnQgVgcgZAAQg1AAgPCGg");
	this.shape_2.setTransform(0.0897,1.6375,0.51,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ee, new cjs.Rectangle(-11.9,-15.6,24,34.5), null);


(lib.btnPlayStop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABkEsIAApXIDIAAIAAJXgAkrEsIAApXIDIAAIAAJXg");
	this.shape.setTransform(22.808,-0.0638,0.6,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkrkrIJXEsIpXErg");
	this.shape_1.setTransform(-22.8202,0.0962,0.6,0.6);

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


(lib.btnBeforeAfter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAOCrQAhgNALgMQANgOABgXIAAg9QAAgGgFAAIgsAAIAAgnIBNAAQALACAAAHIAABsQADAIAMALQARAPAbAIQAqAKDZgKIgJAqIi9AAQhlgDglgrQgHANgRAPQgWAQgRAGgAmzCnIAOgFIAAilIAhAAIAACaQALgBAHgGIAAi/IgvAAQgGABAAgGIAAiOQAAgGAGAAIBrAAQAFAAAAAGIAACOQAAAGgFgBIgaAAIAABCIAfAAIAAAkIgfAAIAABMIAogRIAOAgQgvAahcAbgAmFhUQAAABAAAAQAAABAAAAQABAAAAAAQAAAAAAAAIAwAAQAAAAABAAQAAAAAAAAQAAAAAAgBQABAAAAgBIAAhRQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgxAAgAj8DFQgMgCAAgMIAAiNQgFAHgGACIgcgXQAogdAXgwIAgARIgQAbIBDAAQAOgYAHgQIgOggQAqgPAXgQIAPAeQgZASgoAPIAdAQQgEANgHALIBeAAIgEAgIhdAAIAAAYIBYAAIAAAgIhYAAIAAAaIBWAAIAAAfIhWAAIAAAZIBdAAIAAAggAjjCgQAAAFAFAAIBDAAIAAgZIhIAAgAjjBtIBIAAIAAgaIhIAAgAjjAeIAAAVIBIAAIAAgYIhDAAQgFABAAACgADWCVQgQgFgGgNQgJgMAAgQIAAg/QgSAQgXALIgWgeQAkgTAbgXIg/AAIAAgfIBdAAQAJgLAHgKIhaAAQgFAAgBgFIAAhMQABgFAFAAIBPAAIAAgWIhZAAIAAgjIEtAAIAAAjIhcAAIAAAWIBNAAQAFAAAAAFIAABMQAAAFgFAAIiSAAIgOAVICxAAIAAAfIhEAAQAcAYAsAQIgaAgQgegQgWgQIAAAnQgBAWgQALQgVAJhBgHIgEglQA3AHAKgCQAGgDAAgGIAAgQQgBAAAAgBQgBgBAAAAQgBgBAAAAQgBAAAAAAIhiAAIAAAnQABAOAIAHQAKALA8AAQBDgDAKgFQAHgGAAggIAlAOQgCAqgQAMQgTAMhPABIhagGgAFQAOIgSgTIhWAAIgTATIB7AAIAAAAgAFShXIAsAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAIAAgYQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAIgsAAgAD/hXIAuAAIAAgaIguAAgACqhwIAAAYQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAAAIAuAAIAAgaIguAAQAAAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAAAgAD/iPIAuAAIAAgWIguAAgAAOhQIAVghQAgARAmAgIgXAgQgogkgcgMgAkjhCQAqgXAXgPIATAbQgYAWgqAVgAhAgoIAAh9QAAgDgGAAIhLAAIAAghIBrAAQAJACAAAGIAACZgAjJgtIAAh4QAAgDgGAAIhLAAIAAghIBrAAQAJACAAAGIAACUgAkjiAQAqgRASgQIAUAeQgZASglARgAiaiEQArgTAUgMIARAfQgbARgmAPgAATitIAWghQAhARAnAhIgYAgQgpglgdgMg");

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


(lib.theNumberStepper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.ttt = new cjs.Text("-10", "80px 'Microsoft JhengHei'", "#FFFFFF");
	this.ttt.name = "ttt";
	this.ttt.textAlign = "right";
	this.ttt.lineHeight = 108;
	this.ttt.lineWidth = 135;
	this.ttt.parent = this;
	this.ttt.setTransform(111.4,-3.1);

	this.btnP = new lib.btnPlus();
	this.btnP.name = "btnP";
	this.btnP.parent = this;
	this.btnP.setTransform(144.05,18,0.6,0.6,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btnP, 0, 1, 2, false, new lib.btnPlus(), 3);

	this.btnM = new lib.btnMinus();
	this.btnM.name = "btnM";
	this.btnM.parent = this;
	this.btnM.setTransform(145.05,64.05,0.6,0.6,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.btnM, 0, 1, 2, false, new lib.btnMinus(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnM},{t:this.btnP},{t:this.ttt}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.theNumberStepper, new cjs.Rectangle(-25.4,-5.1,189.4,110.39999999999999), null);


(lib.slShift = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAZBUQgHgIgGgbIgMgxIgpBZIgXAAIA6h2IgCgMQgEgSgGgGQgHgHgIAAQgHAAgFAFQgFAFgCAMIgFAAQABgUAJgMQAHgIAKAAQAIAAAGAGQAJALAGAaIAUBYQAEAUAGAGQAGAGAHAAQAIAAAFgFQAEgFABgLIAFAAIAAAFQAAARgIAKQgGAHgKAAQgJAAgHgHg");
	this.shape.setTransform(234.5464,-0.75,1,1.0576,0,18.997,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aj7BjIAAgYQASAOAXAAQAdAAAAgUQAAgJgGgGQgHgFgTgIQgWgJgIgJQgIgJAAgOQAAgRAQgLQAQgLAWAAQASAAAOAGIAAAWQgQgKgTAAQgNAAgIAGQgIAFABAKQgBAIAGAFQAFAEATAIQAYAJAJAKQAHAJAAAOQAAASgPALQgQALgYAAQgVAAgQgIgADDBCIAAhTIgYAAIAAgTIAYAAIAAgiIAVgHIAAApIAkAAIAAATIgkAAIAABPQABAPAEAGQAFAGALAAQAJAAAGgFIAAASQgIAFgMAAQglAAAAgpgABuBoIAAh5IgYAAIAAgTIAYAAIAAgXQAAgWANgNQAMgMASAAQALAAAFACIAAAUQgGgEgJAAQgXAAAAAeIAAAWIAgAAIAAATIggAAIAAB5gAAiBoIAAiMIAVAAIAACMgAgdBoIAAhRQAAgsgiAAQgQAAgMANQgLAMAAAUIAABQIgWAAIAAjPIAWAAIAABbIABAAQAQgbAeAAQAvAAAAA4IAABXgAAjhMQgEgEAAgGQAAgGAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAGQAAAFgEAFQgEAEgGAAQgGAAgEgEg");
	this.shape_1.setTransform(-52.95,0.325);

	this.valueText = new cjs.Text("0.00", "26px 'Arial'", "#FFFFFF");
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

}).prototype = getMCSymbolPrototype(lib.slShift, new cjs.Rectangle(-78.1,-16.5,352.1,33.1), null);


(lib.slCombine = function(mode,startPosition,loop) {
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
	this.valueText = new cjs.Text("0.00", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(319.6,-13);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhmBoQBHgoAIhEIgxAAIAAgOICQAAQAAAogFAiQgEAhgEAIQgEAIgIADQgHAEgTAAIgUgBIgCgOIAZACQAMAAADgCIAGgEQACgDADgOQADgPACgUQACgVABgYIhCAAQgJBLhNAsgAhxgNQAygiAchDIAOAEQgfBIg0AkgAAihjIgUAAIAAgOIAdAAQAUBBAzAhIgJAMQgzglgUg7g");
	this.shape.setTransform(188.775,0.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABEBzIAAgRIiHAAIAAARIgOAAIAAhnICjAAIAABngAhDBVICHAAIAAg7IiHAAgAhCgXIAAgOICFAAIAAAOgAAAhfQgiAkhGAiIgJgMQBHgeAqgvIANAFQgBADgDACQApAqBAAZIgIAMQhCgcgogqg");
	this.shape_1.setTransform(-38.125,0.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.valueText}]}).wait(1));

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

}).prototype = getMCSymbolPrototype(lib.slCombine, new cjs.Rectangle(-49.5,-16,471.1,34.1), null);


(lib.rbVV = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(16.7,0,0.703,0.3399,0,0,0,0.3,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA/gsArQgrAsg/AAQg9AAgsgsQgsgrAAg/QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0.498)").s().p("AhpBqQgsgrAAg/QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9QAAA/gsArQgrAsg/AAQg9AAgsgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOBrIhTjVIAeAAIA4CbIALAjIALgjIA6ibIAdAAIhUDVg");
	this.shape_2.setTransform(33.975,0.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbVV, new cjs.Rectangle(-19.6,-18,72.30000000000001,36), null);


(lib.rbRR = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(16.7,0,0.703,0.3399,0,0,0,0.3,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA/gsArQgrAsg/AAQg9AAgsgsQgsgrAAg/QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0.498)").s().p("AhpBqQgsgrAAg/QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9QAAA/gsArQgrAsg/AAQg9AAgsgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA7BrIgdgsIgUgeQgIgKgFgEQgHgEgGgCIgQgBIghAAIAABfIgdAAIAAjVIBfAAQAcAAAPAFQAPAGAJAPQAJAOAAASQAAAXgPAQQgPAOgeAFQALAFAGAFQAMAMALARIAmA6gAhBgMIA9AAQASAAALgEQALgEAGgJQAGgJAAgKQAAgPgLgKQgLgKgYAAIhDAAg");
	this.shape_2.setTransform(35.825,0.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbRR, new cjs.Rectangle(-19.6,-18,72.30000000000001,36), null);


(lib.rbMVH = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(61.85,0,1.6487,0.3399,0,0,0,0.4,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA/gsArQgrAsg/AAQg9AAgsgsQgsgrAAg/QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0.498)").s().p("AhpBqQgsgrAAg/QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9QAAA/gsArQgrAsg/AAQg9AAgsgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkuCHIAAgaQAhAJAFgEQACgEAAgFIAAhwIg9AAQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAgBAAgBIAAhlQAAAAAAgBQABgBAAAAQABgBAAAAQABAAABAAIAxAAQAHgPABgJIAZAJQgBAIgEAHIBFAAQABAAABAAQAAAAABABQAAAAABABQAAABAAAAIAABlQAAABAAABQgBABAAAAQgBABAAAAQgBAAgBAAIg5AAQAHAaAIASQAYgSAOgQIAQATQgQASgaASQAQAdAgAZIgWAOQgigggWgrIAAA8QgCASgLAHQgGAFgMAAQgOAAgUgGgAkvgeIBpAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBIAAgTIhrAAgAkvhcIAAAUIBrAAIAAgUQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAgBgBAAIhpAAQAAAAgBABQAAAAAAAAQAAAAAAAAQABAAAAAAgAELB6QAwgjAgglQgVg2gLhEIhmAAQgBABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAIAAAeIBOAAQAJAAABAFIAABRQgBAQgFALQgFAOgJAEQgNAJgtgJIgBgbQAkAKAIgFIAHgIIACgLIAAg+QAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIg7AAIAAANQAABRgYA4IgZgJQAOgkAFgdQAFgcAAgpIAAhVQAAgHAHAAIB3AAQgDgWgCgTIAaACQABASAEAVIA2AAQgUgOgOgEIANgYQAQAIAVAOIgLAUIAlAAIAAAaIhdAAQAMA9AMAjQAOgXAPg4IAZAFQgOBAgcAoQAKAXALASQAHANADAAQAEgCABgIQADgRgBgcIAaAFQgFBHgPAIQgFACgEAAQgLAAgIgKQgSgSgPgjQgfAjgoAdgAmJCJIAAiAIgnAGQgCgKgFgLIAagEQAJgLALgQQgXgUgWgLIALgUIALAGQAOgaAMgdIAUAKQgJAWgTAkQAIAFAIAJQANgaAHgWIAXAFQgKAigkAyIAagFIgFgPIAVgGQALAfADAWIgVADQgCgGAAgHIgRADIAACDgABQCIIAAgNIiYAAIAAANIgbAAIAAh4QABgJAIAAIC8AAQAJgBAAAKIAAB4gAhIAkIAAA9ICYAAIAAg9QAAAAAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAIiSAAQgBAAAAAAQgBAAAAABQgBAAAAABQAAABAAAAgAm0B2QAJgkABg1IAWAEQgCAsgHAugAlVBoQAigeAMggQABgGgEAAIgZAAIAAgXIArAAIANAHQgIAagIASQgNAZgaAggAlqAiIAXgEIAJA8IgWABQgDgcgHgdgAhTgTIAAgbICtAAIAAAbgAADhuQglAnhXAoIgQgXQBpgpAdgsIAYAFQgDACgBAEQAyAuBKAcIgQAXQhFghg1gug");
	this.shape_2.setTransform(68.825,-0.1494);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("AmJAJIAACAIAYAAIAAiDIARgDQAAAHACAGIAVgDQgDgWgLgfIgVAGQABADAEAMIgaAFQAkgyAKgiIgXgFQgHAWgNAaQgIgJgIgFQATgkAJgWQgIgFgMgFQgMAdgOAaQgKgFgBgBQgFAIgGAMQAWALAXAUQgLAQgJALIgaAEQAFALACAKgAjbAlQgIgSgHgaIA5AAQAEAAAAgEIAAhlQAAgDgEAAIhFAAQAEgHABgIIgZgJQgBAJgHAPIgxAAQgEAAAAADIAABlQAAAEAEAAIA9AAIAABwQAAAFgCAEQgFAEghgJIAAAaQAnAKANgJQALgHACgSIAAg8QAWArAiAgIAWgOQgggZgQgdQAagSAQgSIgQgTQgOAQgYASgAkvhIIAAgUQgBgBABAAIBpAAQACAAAAABIAAAUgAjEgyIAAATQAAABgCAAIhpAAIAAgUgAhTguIAAAbICtAAIAAgbgAADhuQA1AuBFAhIAQgXQhKgcgyguQABgEADgCIgYgFQgdAshpApIAQAXQBXgoAlgngAGMhiIALgUQgVgOgQgIIgNAYQAOAEAUAOIg2AAQgEgVgBgSIgagCQACATADAWIh3AAQgHAAAAAHIAABVQAAApgFAcQgFAdgOAkIAZAJQAYg4AAhRIAAgNIA7AAQADAAAAACIAAA+QAAAEgCAHQgDAFgEADQgIAFgkgKIABAbQAtAJANgJQAJgEAFgOQAFgLABgQIAAhRQgBgFgJAAIhOAAIAAgeQAAgCADgBIBmAAQALBEAVA2QggAlgwAjIAVASQAogdAfgjQAPAjASASQAIAKALAAQAEAAAFgCQAPgIAFhHIgagFQABAcgDARQgBAIgEACQgDAAgHgNQgLgSgKgXQAcgoAOhAIgZgFQgPA4gOAXQgMgjgMg9IBdAAIAAgagAhIB7ICYAAIAAANIAbAAIAAh4QAAgKgJABIi8AAQgIAAgBAJIAAB4IAbAAgAhIBhIAAg9QAAgDADAAICSAAQADAAAAADIAAA9gAlDANIAAAXIAZAAQAEAAgBAGQgMAggiAeIATARQAaggANgZQAIgSAIgaIgNgHgAlqAiQAHAdADAcIAWgBQgBgKgIgygAmqAdQgBA1gJAkIAXAFQAHguACgsg");
	this.shape_3.setTransform(68.825,-0.1494);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkuCHIAAgaQAhAJAFgEQACgEAAgFIAAhwIg9AAQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAgBAAgBIAAhlQAAAAAAgBQABgBAAAAQABgBAAAAQABAAABAAIAxAAQAHgPABgJIAZAJQgBAIgEAHIBFAAQABAAABAAQAAAAABABQAAAAABABQAAABAAAAIAABlQAAABAAABQgBABAAAAQgBABAAAAQgBAAgBAAIg5AAQAHAaAIASQAYgSAOgQIAQATQgQASgaASQAQAdAgAZIgWAOQgigggWgrIAAA8QgCASgLAHQgGAFgMAAQgOAAgUgGgAkvgeIBpAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBIAAgTIhrAAgAkvhcIAAAUIBrAAIAAgUQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAgBgBAAIhpAAQAAAAgBABQAAAAAAAAQAAAAAAAAQABAAAAAAgAELB6QAwgjAgglQgVg2gLhEIhmAAQgBABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAIAAAeIBOAAQAJAAABAFIAABRQgBAQgFALQgFAOgJAEQgNAJgtgJIgBgbQAkAKAIgFIAHgIIACgLIAAg+QAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIg7AAIAAANQAABRgYA4IgZgJQAOgkAFgdQAFgcAAgpIAAhVQAAgHAHAAIB3AAQgDgWgCgTIAaACQABASAEAVIA2AAQgUgOgOgEIANgYQAQAIAVAOIgLAUIAlAAIAAAaIhdAAQAMA9AMAjQAOgXAPg4IAZAFQgOBAgcAoQAKAXALASQAHANADAAQAEgCABgIQADgRgBgcIAaAFQgFBHgPAIQgFACgEAAQgLAAgIgKQgSgSgPgjQgfAjgoAdgAmJCJIAAiAIgnAGQgCgKgFgLIAagEQAJgLALgQQgXgUgWgLIALgUIALAGQAOgaAMgdIAUAKQgJAWgTAkQAIAFAIAJQANgaAHgWIAXAFQgKAigkAyIAagFIgFgPIAVgGQALAfADAWIgVADQgCgGAAgHIgRADIAACDgABQCIIAAgNIiYAAIAAANIgbAAIAAh4QABgJAIAAIC8AAQAJgBAAAKIAAB4gAhIAkIAAA9ICYAAIAAg9QAAAAAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAIiSAAQgBAAAAAAQgBAAAAABQgBAAAAABQAAABAAAAgAm0B2QAJgkABg1IAWAEQgCAsgHAugAlVBoQAigeAMggQABgGgEAAIgZAAIAAgXIArAAIANAHQgIAagIASQgNAZgaAggAlqAiIAXgEIAJA8IgWABQgDgcgHgdgAhTgTIAAgbICtAAIAAAbgAADhuQglAnhXAoIgQgXQBpgpAdgsIAYAFQgDACgBAEQAyAuBKAcIgQAXQhFghg1gug");
	this.shape_4.setTransform(68.825,-0.1494);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbMVH, new cjs.Rectangle(-22.2,-18,166.89999999999998,36), null);


(lib.rbMRL = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(61.85,0,1.6487,0.3399,0,0,0,0.4,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA/gsArQgrAsg/AAQg9AAgsgsQgsgrAAg/QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0.498)").s().p("AhpBqQgsgrAAg/QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9QAAA/gsArQgrAsg/AAQg9AAgsgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AEEB6QAwgjAhglQgVg2gMhDIhmAAQAAAAgBAAQAAAAgBABQAAAAAAAAQAAABAAAAIAAAeIBNAAQAKAAABAFIAABRQgBARgFAKQgGAOgIAEQgNAJgugJIgBgbQAkAKAJgEIAHgJIACgKIAAg+QAAgBAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAIg6AAIAAANQAABRgZA4IgYgJQAOgkAEgcQAFgcAAgqIAAhUQAAgIAHABIB4AAQgEgWgBgUIAaACQABASADAWIA2AAQgUgOgOgFIANgYQARAJAVAOIgMAUIAmAAIAAAaIhdAAQAMA8ALAkQAOgYAQg4IAYAFQgOBAgcAoQALAYAKARQAHANAEAAQADgCABgHQAEgSgBgcIAaAFQgFBHgPAIQgFACgFAAQgKAAgJgKQgRgSgPgjQggAkgoAcgAjKCLIAAgLIjOAAIAAALIgZAAIAAkFQACgIAHAAIDvAAQAIAAAAAIIAAEFgAjWBbIgFANIARAAIAAjRQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIjIAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAABAAABIAADPIAUAAIgFgNQAcgIATgHIgqAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAgBIAAhqIACgCICmAAQABAAABAAQAAABABAAQAAAAABAAQAAABAAAAIAABqQAAABAAABQgBAAAAABQgBAAAAAAQgBAAgBAAIgjAAQAaAIARAHgAjyBoQgYgKgLgCIAGgQIhCAAIAGAQQgLAIgQAEIB0AAIAAAAgAlvA5IB8AAIABgBIAAgLIh9AAgAlvAaIB9AAIAAgNIh9AAgAlvgFIB9AAIAAgLIh9AAgABKCIIAAgNIiZAAIAAANIgbAAIAAh3QABgKAJAAIC7AAQAKgBAAALIAAB3gAhPAlIAAA9ICZAAIAAg9QAAgBAAgBQgBgBAAAAQgBgBAAAAQgBAAgBAAIiRAAQgBAAgBAAQAAAAgBABQAAAAgBABQAAABAAABgAhZgTIAAgbICsAAIAAAbgAgDhuQglAnhYAoIgPgXQBogpAdgsIAYAGQgCACgCADQAzAuBKAcIgRAXQhFghg0gugAl9guQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAgBAAgBIAAgsQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABAAICbAAIACACIAAAsQAAABgBABQAAABAAAAQAAABgBAAQAAAAAAAAgAlqhCIABACIBzAAIAAgOIh0AAg");
	this.shape_2.setTransform(69.475,-0.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("AmYCAIDOAAIAAAMIAZAAIAAkGQAAgIgIAAIjvAAQgHAAgCAIIAAEGIAZAAgAjWBbQgRgGgagIIAjAAQAEAAAAgEIAAhqQAAgBgEgBIimAAQgBAAgBACIAABqQAAAEACAAIAqAAQgTAGgcAIIAFAOIgUAAIAAjQQAAgEADAAIDIAAQADAAAAACIAADSIgRAAgAlvgFIAAgMIB9AAIAAAMgAj2hOIAAANIhzAAQgBAAAAgBIAAgMgAjggyIAAgsQAAgBgCgBIibAAQgEAAAAACIAAAsQAAAEAEAAICbAAQABAAABgEgAhZguIAAAbICsAAIAAgbgAgDhuQA0AuBFAhIARgXQhKgcgzguQACgEACgCIgYgFQgdAshoApIAPAXQBYgoAlgngAGFhiIAMgUQgVgOgRgIIgNAYQAOAEAUAOIg2AAQgDgVgBgSIgagCQABATAEAWIh4AAQgHAAAAAHIAABVQAAApgFAdQgEAdgOAjIAYAJQAZg4AAhRIAAgNIA6AAQAEAAAAACIAAA+QAAAEgCAHQgEAFgDAEQgJAEgkgJIABAbQAuAIANgIQAIgFAGgOQAFgKABgRIAAhRQgBgFgKAAIhNAAIAAgeQAAgCACgBIBmAAQAMBEAVA3QghAkgwAjIAVATQAogeAggiQAPAiARASQAJALAKAAQAFAAAFgDQAPgIAFhGIgagGQABAcgEARQgBAIgDACQgEAAgHgNQgKgSgLgXQAcgoAOhAIgYgFQgQA4gOAXQgLgjgMg9IBdAAIAAgagAhPB7ICZAAIAAANIAbAAIAAh4QAAgKgKABIi7AAQgJAAgBAJIAAB4IAbAAgAhPBiIAAg+QAAgDAEAAICRAAQAEAAAAADIAAA+gAjyAsIAAAMIgBABIh8AAIAAgNgAlvAaIAAgNIB9AAIAAANgAkVBdQALABAYALIh0AAQAQgFALgHIgGgQIBCAAg");
	this.shape_3.setTransform(69.475,-0.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AEEB6QAwgjAhglQgVg2gMhDIhmAAQAAAAgBAAQAAAAgBABQAAAAAAAAQAAABAAAAIAAAeIBNAAQAKAAABAFIAABRQgBARgFAKQgGAOgIAEQgNAJgugJIgBgbQAkAKAJgEIAHgJIACgKIAAg+QAAgBAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAIg6AAIAAANQAABRgZA4IgYgJQAOgkAEgcQAFgcAAgqIAAhUQAAgIAHABIB4AAQgEgWgBgUIAaACQABASADAWIA2AAQgUgOgOgFIANgYQARAJAVAOIgMAUIAmAAIAAAaIhdAAQAMA8ALAkQAOgYAQg4IAYAFQgOBAgcAoQALAYAKARQAHANAEAAQADgCABgHQAEgSgBgcIAaAFQgFBHgPAIQgFACgFAAQgKAAgJgKQgRgSgPgjQggAkgoAcgAjKCLIAAgLIjOAAIAAALIgZAAIAAkFQACgIAHAAIDvAAQAIAAAAAIIAAEFgAjWBbIgFANIARAAIAAjRQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIjIAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAABAAABIAADPIAUAAIgFgNQAcgIATgHIgqAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAgBIAAhqIACgCICmAAQABAAABAAQAAABABAAQAAAAABAAQAAABAAAAIAABqQAAABAAABQgBAAAAABQgBAAAAAAQgBAAgBAAIgjAAQAaAIARAHgAjyBoQgYgKgLgCIAGgQIhCAAIAGAQQgLAIgQAEIB0AAIAAAAgAlvA5IB8AAIABgBIAAgLIh9AAgAlvAaIB9AAIAAgNIh9AAgAlvgFIB9AAIAAgLIh9AAgABKCIIAAgNIiZAAIAAANIgbAAIAAh3QABgKAJAAIC7AAQAKgBAAALIAAB3gAhPAlIAAA9ICZAAIAAg9QAAgBAAgBQgBgBAAAAQgBgBAAAAQgBAAgBAAIiRAAQgBAAgBAAQAAAAgBABQAAAAgBABQAAABAAABgAhZgTIAAgbICsAAIAAAbgAgDhuQglAnhYAoIgPgXQBogpAdgsIAYAGQgCACgCADQAzAuBKAcIgRAXQhFghg0gugAl9guQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAgBAAgBIAAgsQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABAAICbAAIACACIAAAsQAAABgBABQAAABAAAAQAAABgBAAQAAAAAAAAgAlqhCIABACIBzAAIAAgOIh0AAg");
	this.shape_4.setTransform(69.475,-0.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbMRL, new cjs.Rectangle(-22.2,-18,166.89999999999998,36), null);


(lib.rbMLine = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(61.85,0,1.6487,0.3399,0,0,0,0.4,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA/gsArQgrAsg/AAQg9AAgsgsQgsgrAAg/QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0.498)").s().p("AhpBqQgsgrAAg/QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9QAAA/gsArQgrAsg/AAQg9AAgsgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkuCGIAAgaQAgAKAFgFQACgDAAgFIAAhxIg9AAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAhlQAAgBAAgBQAAAAABgBQAAAAABAAQAAgBABAAIAyAAQAHgPABgIIAZAIQgCAIgDAHIBFAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAABIAABlQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIg5AAQAHAaAIATQAXgTAOgPIARATQgRARgaATQARAcAgAaIgXAOQgighgWgqIAAA8QgBARgMAHQgGAFgMAAQgNAAgUgGgAkwgeIBqAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIAAgTIhrAAgAkwhcIAAAUIBrAAIAAgUQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIhqAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAgADDCKIAAiCIgOApIgWgJQAZg6AIgrIgcAAIAAgYIAfAAIAAg2IAYAAIAAA2IAfAAIAAAYIgfAAIAAAJQATAeAOAgIgUAKIgNgcIAACSgAmKCIIAAh/IgnAGQgCgLgFgLIAagDQAKgMAKgPQgWgUgWgMIAKgUIAMAGQAOgaAMgdIAUALQgKAWgTAjQAJAGAIAIQANgaAHgWIAWAGQgJAiglAxIAagFIgFgPIAWgGQAKAgAEAVIgVAEQgDgGAAgHIgQACIAACDgABXCFIgBgaQAOAFADgBQAGgEAAgHIAAgbIgbAAIAAA2IgXAAIAAg2IgaAAIAAA2IgYAAIAAg2IgZAAIAAA6IgYAAIAAhSQgIAegPAdIgSgKIAAAjIgZAAIAAiUIgJAQIgZgJQAog+AJhEIAYAEQgGAjgIAcIAACbQAOgeAFgVQAEgXAAgZIAAhmQAAgJAIAAQBbADBLgKIAHAaQhHAHhRgCQgEAAAAAFIAAAMICcAAQAHAAAAAHIAAAzQAAAJgHAAIicAAIAAADIAAAOICgAAQAGABAAAEIAABqQAAAOgMAHQgGAEgKAAQgIAAgKgCgABSAyIAbAAIAAgbIgCgDIgZAAgAAhAyIAaAAIAAgeIgaAAgAgQAXIAAAbIAZAAIAAgeIgYAAIgBADgAghgqICIAAIADgCIAAgRQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBgBgBAAIiIAAgAD2CBIAAgXIDCAAIAAAXgAm0B2QAIglABg0IAXADQgDAtgHAtgAlVBoQAigfAMgfQABgGgFAAIgZAAIAAgYIAsAAIANAHQgIAagJATQgNAYgZAggAEgBhIgDgYQAcAFAHgHQAGgFAFgKQADgLAAgwQAAgzgFgEQgFgIgXAAIgEgLIAPgcIg9AAIAAgYIC5AAIAAAYIhiAAIgMAUQAAABAAABQAAAAAAABQAAAAABAAQAAAAAAAAQAPABAHALQAFAGABAHQADAKAAAdIgCApQgCA4gVAOQgHAFgHABIgGAAQgJAAgQgCgAFdBUQAXgUAPgaQgSglgEgnIARgHQAGAkALAYQAMgjAFgfIgCgHQgDgDgEACIgpAAIAAgYIA4AAIAMAGQgFBFgTAuQAIASAXAcIgXAIQgMgSgHgOQgLASgSATgAlqAhIAWgDIAJA8IgWABQgCgcgHgegAEBA8QgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAhtQABgBAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIA4AAQABAAAAABQABAAAAAAQABABAAAAQAAABAAABIAABtQAAABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAgAETgiIAABKIATAAIABgBIAAhJIgBgBIgTAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_2.setTransform(68.875,-0.0994);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("AmKAJIAAB/IAZAAIAAiDIAQgCQAAAHADAGIAVgEQgEgVgKggIgWAGQACAEADALIgaAFQAlgxAJgiIgWgGQgHAWgNAaQgIgIgJgGQATgjAKgWQgJgFgLgGQgMAdgOAaQgLgFgBgBQgFAIgFAMQAWAMAWAUQgKAPgKAMIgaADQAFALACALgAjbAlQgIgTgHgaIA5AAQADAAAAgDIAAhlQAAgEgDAAIhFAAQADgHACgIIgZgIQgBAIgHAPIgyAAQgDAAAAAEIAABlQAAADADAAIA9AAIAABxQAAAFgCADQgFAFgggKIAAAaQAmALANgKQAMgHABgRIAAg8QAWAqAiAhIAXgOQgggagRgcQAagTARgRIgRgTQgOAPgXATgAkwhIIAAgUQgBgBABAAIBqAAQABAAAAABIAAAUgAjFgyIAAATQAAABgBAAIhqAAIAAgUgAA7BJIAAA2IAXAAIAAg2IAbAAIAAAbQAAAHgGAEQgDABgOgFIABAaQAYAFAKgHQAMgHAAgOIAAhqQAAgEgGgBIigAAQAAgHAAgHIAAgDICcAAQAHAAAAgJIAAgzQAAgHgHAAIicAAIAAgMQAAgFAEAAQBRACBHgHIgHgaQhLAKhbgDQgIAAAAAJIAABmQAAAZgEAXQgFAVgOAeIAAibQAIgcAGgjIgYgEQgJBEgoA+IAZAJQAFgHAEgJIAACUIAZAAIAAgjIASAKQAPgdAIgeIAABSIAYAAIAAg6IAZAAIAAA2IAYAAIAAg2gABng+QAEAAgBABIAAARQAAABgDABIiIAAIAAgUgADbgIQAHAOAGAOIAUgKQgOgggTgeIAAgJIAfAAIAAgYIgfAAIAAg2IgYAAIAAA2IgfAAIAAAYIAcAAQgIArgZA6IAWAJQAIgWAGgTIAACCIAYAAgAE4hpIgPAcIAEALQAXAAAFAIQAFAEAAAzQAAAwgDALQgFAKgGAFQgHAHgcgFIADAYQAXADAIgBQAHgBAHgFQAVgOACg4QAAgSACgXQAAgdgDgKQgBgHgFgGQgHgLgPgBQgBAAAAgDIAMgUIBiAAIAAgYIi5AAIAAAYgAE8A6IAAhtQAAgEgDAAIg4AAQgBAAgCAEIAABtQAAABADABIA4AAQADAAAAgCgAEmgjQABAAAAABIAABJQAAABgBAAIgTAAIAAhKQgBgBABAAgAGPA8QAHAOAMASIAXgIQgXgcgIgSQATguAFhFIgMgGIg4AAIAAAYIApAAQAEgCADADQABABABAGQgFAfgMAjQgLgYgGgkIgRAHQAEAnASAlQgPAagXAUIAVANQASgTALgSgAD2BqIAAAXIDCAAIAAgXgABSAUIAZAAQABAAABADIAAAbIgbAAgAA7AyIgaAAIAAgeIAaAAgAAJAyIgZAAIAAgbQAAgBABgCIAYAAgAlEAMIAAAYIAZAAQAFAAgBAGQgMAfgiAfIATAQQAZggANgYQAJgTAIgaIgNgHgAlqAhQAHAeACAcIAWgBQgBgLgIgxgAmrAdQgBA0gIAlIAWAEQAHgtADgtg");
	this.shape_3.setTransform(68.875,-0.0994);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkuCGIAAgaQAgAKAFgFQACgDAAgFIAAhxIg9AAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAhlQAAgBAAgBQAAAAABgBQAAAAABAAQAAgBABAAIAyAAQAHgPABgIIAZAIQgCAIgDAHIBFAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAABIAABlQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIg5AAQAHAaAIATQAXgTAOgPIARATQgRARgaATQARAcAgAaIgXAOQgighgWgqIAAA8QgBARgMAHQgGAFgMAAQgNAAgUgGgAkwgeIBqAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIAAgTIhrAAgAkwhcIAAAUIBrAAIAAgUQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIhqAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAgADDCKIAAiCIgOApIgWgJQAZg6AIgrIgcAAIAAgYIAfAAIAAg2IAYAAIAAA2IAfAAIAAAYIgfAAIAAAJQATAeAOAgIgUAKIgNgcIAACSgAmKCIIAAh/IgnAGQgCgLgFgLIAagDQAKgMAKgPQgWgUgWgMIAKgUIAMAGQAOgaAMgdIAUALQgKAWgTAjQAJAGAIAIQANgaAHgWIAWAGQgJAiglAxIAagFIgFgPIAWgGQAKAgAEAVIgVAEQgDgGAAgHIgQACIAACDgABXCFIgBgaQAOAFADgBQAGgEAAgHIAAgbIgbAAIAAA2IgXAAIAAg2IgaAAIAAA2IgYAAIAAg2IgZAAIAAA6IgYAAIAAhSQgIAegPAdIgSgKIAAAjIgZAAIAAiUIgJAQIgZgJQAog+AJhEIAYAEQgGAjgIAcIAACbQAOgeAFgVQAEgXAAgZIAAhmQAAgJAIAAQBbADBLgKIAHAaQhHAHhRgCQgEAAAAAFIAAAMICcAAQAHAAAAAHIAAAzQAAAJgHAAIicAAIAAADIAAAOICgAAQAGABAAAEIAABqQAAAOgMAHQgGAEgKAAQgIAAgKgCgABSAyIAbAAIAAgbIgCgDIgZAAgAAhAyIAaAAIAAgeIgaAAgAgQAXIAAAbIAZAAIAAgeIgYAAIgBADgAghgqICIAAIADgCIAAgRQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBgBgBAAIiIAAgAD2CBIAAgXIDCAAIAAAXgAm0B2QAIglABg0IAXADQgDAtgHAtgAlVBoQAigfAMgfQABgGgFAAIgZAAIAAgYIAsAAIANAHQgIAagJATQgNAYgZAggAEgBhIgDgYQAcAFAHgHQAGgFAFgKQADgLAAgwQAAgzgFgEQgFgIgXAAIgEgLIAPgcIg9AAIAAgYIC5AAIAAAYIhiAAIgMAUQAAABAAABQAAAAAAABQAAAAABAAQAAAAAAAAQAPABAHALQAFAGABAHQADAKAAAdIgCApQgCA4gVAOQgHAFgHABIgGAAQgJAAgQgCgAFdBUQAXgUAPgaQgSglgEgnIARgHQAGAkALAYQAMgjAFgfIgCgHQgDgDgEACIgpAAIAAgYIA4AAIAMAGQgFBFgTAuQAIASAXAcIgXAIQgMgSgHgOQgLASgSATgAlqAhIAWgDIAJA8IgWABQgCgcgHgegAEBA8QgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAhtQABgBAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIA4AAQABAAAAABQABAAAAAAQABABAAAAQAAABAAABIAABtQAAABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAgAETgiIAABKIATAAIABgBIAAhJIgBgBIgTAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_4.setTransform(68.875,-0.0994);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbMLine, new cjs.Rectangle(-22.2,-18,166.89999999999998,36), null);


(lib.rbMCircle = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(61.85,0,1.6487,0.3399,0,0,0,0.4,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA/gsArQgrAsg/AAQg9AAgsgsQgsgrAAg/QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0.498)").s().p("AhpBqQgsgrAAg/QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9QAAA/gsArQgrAsg/AAQg9AAgsgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjKCLIAAgLIjPAAIAAALIgYAAIAAkFQABgIAHAAIDvAAQAIAAAAAIIAAEFgAjWBbIgGANIASAAIAAjRQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAIjHAAQgBAAgBAAQAAAAgBAAQAAABgBAAQAAABAAABIAADPIAUAAIgEgNQAcgIATgHIgrAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBIAAhqIACgCICnAAQABAAAAAAQABABAAAAQABAAAAAAQAAABAAAAIAABqQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIgjAAQAZAIASAHgAjyBoQgZgKgKgCIAGgQIhCAAIAGAQQgMAIgPAEIB0AAIAAAAgAlwA5IB9AAIABgBIAAgLIh+AAgAlwAaIB+AAIAAgNIh+AAgAlwgFIB+AAIAAgLIh+AAgAC8CKIAAiBIgOAoIgVgIQAZg7AIgqIgcAAIAAgZIAeAAIAAg2IAZAAIAAA2IAeAAIAAAZIgeAAIAAAIQASAfAPAfIgUALIgNgcIAACRgABQCGIgBgaQAOAFAEgCQAGgDAAgHIAAgbIgbAAIAAA2IgYAAIAAg2IgaAAIAAA2IgXAAIAAg2IgaAAIAAA5IgXAAIAAhSQgJAfgPAdIgRgKIAAAjIgZAAIAAiUIgJAPIgZgIQAog+AIhEIAZAEQgGAigIAdIAACaQAOgdAEgVQAFgXAAgZIAAhmQAAgJAHAAQBcADBLgLIAHAbQhIAGhRgBQgDAAAAAFIAAALICcAAQAHABAAAGIAAA0QAAAJgHAAIicAAIAAADIAAAOICfAAQAGAAAAAFIAABpQAAAPgMAGQgFAFgLAAQgIAAgKgCgABMAyIAbAAIAAgbIgDgCIgYAAgAAaAyIAaAAIAAgdIgaAAgAgXAXIAAAbIAaAAIAAgdIgZAAIgBACgAgngpICIAAIACgCIAAgRQABAAgBAAQAAgBAAAAQAAAAgBAAQAAAAgBAAIiIAAgADwCCIAAgXIDBAAIAAAXgAEaBiIgEgYQAcAEAIgGQAFgFAFgLQAEgKAAgxQAAgygFgFQgGgHgWgBIgFgKIAPgdIg9AAIAAgXIC6AAIAAAXIhjAAIgMAUQAAABAAABQAAABABAAQAAABAAAAQAAAAABAAQAPABAHALQAEAGACAGQACALAAAdIgBAoQgDA5gVAOQgHAEgHACIgGAAQgJAAgPgCgAFXBUQAWgTAPgaQgRglgFgnIASgHQAFAjALAZQANgjAFggIgDgHQgCgCgFABIgpAAIAAgXIA4AAIAMAGQgFBFgSAuQAIARAWAcIgWAIQgNgRgHgOQgLARgRAUgAD6A9QAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAhtQAAAAAAgBQABgBAAAAQAAgBABAAQAAAAAAAAIA4AAQABAAABAAQAAAAABABQAAAAABABQAAABAAAAIAABtQAAABAAABQgBAAAAAAQgBABAAAAQgBAAgBAAgAENghIAABKIATAAIABgBIAAhJIgBgBIgTAAQgBAAAAAAQAAAAAAAAQAAAAAAABQAAAAABAAgAl+guQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAgBAAgBIAAgsQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAICbAAIACACIAAAsQAAABAAABQAAABgBAAQAAABAAAAQgBAAAAAAgAlrhCIABACIBzAAIAAgOIh0AAg");
	this.shape_2.setTransform(69.525,-0.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("AmZCAIDPAAIAAAMIAYAAIAAkGQAAgIgIAAIjvAAQgHAAgBAIIAAEGIAYAAgAjWBbQgSgGgZgIIAjAAQADAAAAgEIAAhqQAAgBgDgBIinAAQgBAAgBACIAABqQAAAEACAAIArAAQgTAGgcAIIAEAOIgUAAIAAjQQAAgEAEAAIDHAAQAEAAAAACIAADSIgSAAgAlwgFIAAgMIB+AAIAAAMgAj3hOIAAANIhzAAQgBAAAAgBIAAgMgAjhgyIAAgsQAAgBgCgBIibAAQgDAAAAACIAAAsQAAAEADAAICbAAQABAAABgEgAA0BKIAAA2IAYAAIAAg2IAbAAIAAAbQAAAHgGADQgEACgOgFIABAZQAZAFAJgGQAMgHAAgOIAAhqQAAgFgGAAIifAAQAAgHAAgHIAAgEICcAAQAHAAAAgIIAAg0QAAgHgHAAIicAAIAAgLQAAgFADAAQBRABBIgHIgHgaQhLALhcgEQgHAAAAAKIAABmQAAAYgFAYQgEAVgOAeIAAicQAIgcAGgjIgZgDQgIBEgoA+IAZAIQAEgGAFgJIAACTIAZAAIAAgjIARALQAPgdAJgfIAABTIAXAAIAAg6IAaAAIAAA2IAXAAIAAg2gABhg9QADAAgBABIAAAQQAAABgCACIiIAAIAAgUgADVgHQAHAOAGAOIAUgLQgPgfgSgfIAAgIIAeAAIAAgZIgeAAIAAg2IgZAAIAAA2IgeAAIAAAZIAcAAQgIAqgZA7IAVAIQAIgVAGgUIAACCIAZAAgAExhpIgPAdIAFAKQAWAAAGAIQAFAFAAAyQAAAxgEAKQgFALgFAFQgIAHgcgFIAEAYQAWADAIgBQAHgCAHgEQAVgOADg5QAAgRABgYQAAgcgCgLQgCgHgEgFQgHgLgPgBQgCAAAAgEIAMgUIBjAAIAAgXIi6AAIAAAXgAE2A7IAAhuQAAgDgEAAIg4AAQgBAAgBADIAABuQAAABACABIA4AAQAEAAAAgCgAEggiQABAAAAABIAABJQAAABgBAAIgTAAIAAhKQgBgBABAAgAGIA9QAHAOANASIAWgIQgWgdgIgRQASguAFhFIgMgGIg4AAIAAAXIApAAQAFgBACACQABABACAGQgFAggNAiQgLgYgFgkIgSAHQAFAnARAmQgPAagWAUIAVANQARgTALgSgADwBqIAAAYIDBAAIAAgYgABMAVIAYAAQABAAACACIAAAcIgbAAgAA0AzIgaAAIAAgeIAaAAgAADAzIgaAAIAAgcQAAgBABgBIAZAAgAjyAsIAAAMIgBABIh9AAIAAgNgAlwAaIAAgNIB+AAIAAANgAkVBdQAKABAZALIh0AAQAPgFAMgHIgGgQIBCAAg");
	this.shape_3.setTransform(69.525,-0.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjKCLIAAgLIjPAAIAAALIgYAAIAAkFQABgIAHAAIDvAAQAIAAAAAIIAAEFgAjWBbIgGANIASAAIAAjRQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAIjHAAQgBAAgBAAQAAAAgBAAQAAABgBAAQAAABAAABIAADPIAUAAIgEgNQAcgIATgHIgrAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBIAAhqIACgCICnAAQABAAAAAAQABABAAAAQABAAAAAAQAAABAAAAIAABqQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIgjAAQAZAIASAHgAjyBoQgZgKgKgCIAGgQIhCAAIAGAQQgMAIgPAEIB0AAIAAAAgAlwA5IB9AAIABgBIAAgLIh+AAgAlwAaIB+AAIAAgNIh+AAgAlwgFIB+AAIAAgLIh+AAgAC8CKIAAiBIgOAoIgVgIQAZg7AIgqIgcAAIAAgZIAeAAIAAg2IAZAAIAAA2IAeAAIAAAZIgeAAIAAAIQASAfAPAfIgUALIgNgcIAACRgABQCGIgBgaQAOAFAEgCQAGgDAAgHIAAgbIgbAAIAAA2IgYAAIAAg2IgaAAIAAA2IgXAAIAAg2IgaAAIAAA5IgXAAIAAhSQgJAfgPAdIgRgKIAAAjIgZAAIAAiUIgJAPIgZgIQAog+AIhEIAZAEQgGAigIAdIAACaQAOgdAEgVQAFgXAAgZIAAhmQAAgJAHAAQBcADBLgLIAHAbQhIAGhRgBQgDAAAAAFIAAALICcAAQAHABAAAGIAAA0QAAAJgHAAIicAAIAAADIAAAOICfAAQAGAAAAAFIAABpQAAAPgMAGQgFAFgLAAQgIAAgKgCgABMAyIAbAAIAAgbIgDgCIgYAAgAAaAyIAaAAIAAgdIgaAAgAgXAXIAAAbIAaAAIAAgdIgZAAIgBACgAgngpICIAAIACgCIAAgRQABAAgBAAQAAgBAAAAQAAAAgBAAQAAAAgBAAIiIAAgADwCCIAAgXIDBAAIAAAXgAEaBiIgEgYQAcAEAIgGQAFgFAFgLQAEgKAAgxQAAgygFgFQgGgHgWgBIgFgKIAPgdIg9AAIAAgXIC6AAIAAAXIhjAAIgMAUQAAABAAABQAAABABAAQAAABAAAAQAAAAABAAQAPABAHALQAEAGACAGQACALAAAdIgBAoQgDA5gVAOQgHAEgHACIgGAAQgJAAgPgCgAFXBUQAWgTAPgaQgRglgFgnIASgHQAFAjALAZQANgjAFggIgDgHQgCgCgFABIgpAAIAAgXIA4AAIAMAGQgFBFgSAuQAIARAWAcIgWAIQgNgRgHgOQgLARgRAUgAD6A9QAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAhtQAAAAAAgBQABgBAAAAQAAgBABAAQAAAAAAAAIA4AAQABAAABAAQAAAAABABQAAAAABABQAAABAAAAIAABtQAAABAAABQgBAAAAAAQgBABAAAAQgBAAgBAAgAENghIAABKIATAAIABgBIAAhJIgBgBIgTAAQgBAAAAAAQAAAAAAAAQAAAAAAABQAAAAABAAgAl+guQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAgBAAgBIAAgsQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAICbAAIACACIAAAsQAAABAAABQAAABgBAAQAAABAAAAQgBAAAAAAgAlrhCIABACIBzAAIAAgOIh0AAg");
	this.shape_4.setTransform(69.525,-0.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbMCircle, new cjs.Rectangle(-22.2,-18,166.89999999999998,36), null);


(lib.rbLL = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(16.7,0,0.703,0.3399,0,0,0,0.3,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA/gsArQgrAsg/AAQg9AAgsgsQgsgrAAg/QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0.498)").s().p("AhpBqQgsgrAAg/QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9QAAA/gsArQgrAsg/AAQg9AAgsgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhCBrIAAjVIAdAAIAAC8IBoAAIAAAZg");
	this.shape_2.setTransform(32.9,0.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbLL, new cjs.Rectangle(-19.6,-18,72.30000000000001,36), null);


(lib.rbHH = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(16.7,0,0.703,0.3399,0,0,0,0.3,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA/gsArQgrAsg/AAQg9AAgsgsQgsgrAAg/QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0.498)").s().p("AhpBqQgsgrAAg/QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9QAAA/gsArQgrAsg/AAQg9AAgsgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA4BrIAAhlIhvAAIAABlIgcAAIAAjVIAcAAIAABYIBvAAIAAhYIAcAAIAADVg");
	this.shape_2.setTransform(34.825,0.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbHH, new cjs.Rectangle(-19.6,-18,72.30000000000001,36), null);


(lib.rb1s2s = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(59.85,0,1.7487,0.3399,0,0,0,0.7,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA/gsArQgrAsg/AAQg9AAgsgsQgsgrAAg/QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0.498)").s().p("AhpBqQgsgrAAg/QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9QAAA/gsArQgrAsg/AAQg9AAgsgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AFQBhQgQgNgFgZIAbgDQACAPAKAJQAKAIASAAQATAAAIgHQAJgIAAgKQAAgJgIgFQgFgEgWgFQgdgHgLgFQgLgGgGgKQgGgJAAgKQAAgLAFgIQAEgKAJgFQAGgFALgDQAKgDAMAAQATAAAOAFQANAFAHAJQAGAKADAPIgaADQgCgMgIgHQgIgHgPAAQgTAAgHAHQgJAFABAIQgBAGAEAEQADADAHADIAXAHQAcAHALAFQAMAEAFAKQAHAJAAANQAAANgIAMQgIAMgOAGQgOAGgTABQgeAAgQgNgAkYBhQgQgNgEgZIAagDQACAPAKAJQAKAIASAAQASAAAJgHQAJgIAAgKQAAgJgIgFQgGgEgVgFQgdgHgLgFQgLgGgGgKQgGgJAAgKQAAgLAFgIQAFgKAIgFQAGgFAKgDQALgDANAAQARAAAOAFQAPAFAGAJQAHAKACAPIgZADQgCgMgJgHQgJgHgPAAQgSAAgIAHQgHAFgBAIQABAGADAEQADADAHADIAXAHQAcAHAMAFQAKAEAHAKQAGAJAAANQAAANgIAMQgHAMgPAGQgPAGgSABQgeAAgQgNgACVBqQAAgKACgJQAGgOAMgOQAMgOAWgSQAkgcAMgRQAMgRAAgPQAAgQgLgKQgMgLgSAAQgSAAgMALQgLAMgBAVIgbgEQADgeATgQQARgPAfAAQAfAAASAQQASASAAAZQAAANgFAMQgGANgMANQgMANgcAYQgYAVgHAGQgGAIgFAHIBqAAIAAAZgAmHBqIAAinQgJAJgQAJQgQAJgMAFIAAgZQAXgLAQgPQAQgOAIgOIARAAIAADWgAA4BTQAOgeAPgPIjpAAIAAgPIDpAAIgQgVIgNgYIAMAAQATAWAOAKQAOALANAGIAAAGQgPAHgOALQgNALgTAVg");
	this.shape_2.setTransform(70.1,0.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rb1s2s, new cjs.Rectangle(-29.8,-18,176.9,36), null);


(lib.rb1s2pp = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(59.85,0,1.7487,0.3399,0,0,0,0.7,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA/gsArQgrAsg/AAQg9AAgsgsQgsgrAAg/QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0.498)").s().p("AhpBqQgsgrAAg/QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9QAAA/gsArQgrAsg/AAQg9AAgsgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ADpCJIAAjWIAYAAIAAAUQAJgLAKgGQAKgGAQAAQAUAAAPAKQAPAKAIATQAIATAAAWQAAAXgJATQgIATgRALQgQAKgSAAQgNgBgLgFQgKgGgHgIIAABLgAENgrQgNAPABAdQAAAeAMAPQAMAOARAAQASAAANgPQAMgPAAgeQAAgegMgOQgMgPgRgBQgSABgNAQgAl1BFQgRgNgEgZIAagDQACAPALAJQAJAIATAAQASAAAJgHQAIgIABgKQgBgJgHgFQgGgEgVgFQgdgHgMgFQgLgFgFgKQgHgJABgLQAAgLAEgIQAFgKAJgFQAFgFALgDQALgDAMAAQASAAAOAFQAOAFAGAJQAHAKACAPIgZADQgCgMgJgHQgIgHgPAAQgSAAgIAHQgIAFAAAIQAAAGADAEQAEAEAGADIAYAHQAcAHALAFQALADAGAKQAGAJABANQAAANgIAMQgIAMgPAGQgOAGgSABQgeAAgQgNgAA3BOQAAgKADgJQAGgOAMgOQAMgOAWgRQAjgdANgRQAMgRgBgPQABgQgLgKQgMgLgSAAQgTAAgMALQgLAMAAAVIgbgEQADgeASgQQASgPAfAAQAeAAASAQQASASAAAZQAAANgEAMQgGANgMAOQgNANgcAXQgXAVgHAGQgHAIgFAHIBqAAIAAAZgAnlBOIAAinQgJAJgPAJQgQAJgNAFIAAgZQAXgLARgPQAQgOAHgOIARAAIAADWgAglA3QAOgeAPgPIjqAAIAAgOIDqAAIgPgVIgOgZIAMAAQATAWANALQAOALANAGIAAAFQgOAHgOALQgMALgUAVgAHHAsIAAg7Ig7AAIAAgYIA7AAIAAg6IAZAAIAAA6IA6AAIAAAYIg6AAIAAA7g");
	this.shape_2.setTransform(79.45,3.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rb1s2pp, new cjs.Rectangle(-29.8,-18,176.9,36), null);


(lib.rb1s2pm = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(59.85,0,1.7487,0.3399,0,0,0,0.7,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA/gsArQgrAsg/AAQg9AAgsgsQgsgrAAg/QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0.498)").s().p("AhpBqQgsgrAAg/QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9QAAA/gsArQgrAsg/AAQg9AAgsgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AELCJIAAjWIAYAAIAAAUQAJgLAKgGQAKgGAQAAQAUAAAPAKQAPAKAIATQAIATAAAWQAAAXgJATQgIATgRALQgQAKgSAAQgNgBgLgFQgKgGgHgIIAABLgAEvgrQgNAPABAdQAAAeAMAPQAMAOARAAQASAAANgPQAMgPAAgeQAAgegMgOQgMgPgRgBQgSABgNAQgAlTBFQgRgNgEgZIAagDQACAPALAJQAJAIATAAQASAAAJgHQAIgIABgKQgBgJgHgFQgGgEgVgFQgdgHgMgFQgLgFgFgKQgHgJABgLQAAgLAEgIQAFgKAJgFQAFgFALgDQALgDAMAAQASAAAOAFQAOAFAGAJQAHAKACAPIgZADQgCgMgJgHQgIgHgPAAQgSAAgIAHQgIAFAAAIQAAAGADAEQAEAEAGADIAYAHQAcAHALAFQALADAGAKQAGAJABANQAAANgIAMQgIAMgPAGQgOAGgSABQgeAAgQgNgABZBOQAAgKADgJQAGgOAMgOQAMgOAWgRQAjgdANgRQAMgRgBgPQABgQgLgKQgMgLgSAAQgTAAgMALQgLAMAAAVIgbgEQADgeASgQQASgPAfAAQAeAAASAQQASASAAAZQAAANgEAMQgGANgMAOQgNANgcAXQgXAVgHAGQgHAIgFAHIBqAAIAAAZgAnDBOIAAinQgJAJgPAJQgQAJgNAFIAAgZQAXgLARgPQAQgOAHgOIARAAIAADWgAgDA3QANgeAPgPIjpAAIAAgOIDpAAIgPgVIgNgZIALAAQATAWAOALQAOALANAGIAAAFQgOAHgOALQgNALgUAVgAGoANIAAgZIBRAAIAAAZg");
	this.shape_2.setTransform(76.05,3.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rb1s2pm, new cjs.Rectangle(-29.8,-18,176.9,36), null);


(lib.rb1s2p0 = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(59.85,0,1.7487,0.3399,0,0,0,0.7,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA/gsArQgrAsg/AAQg9AAgsgsQgsgrAAg/QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0.498)").s().p("AhpBqQgsgrAAg/QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9QAAA/gsArQgrAsg/AAQg9AAgsgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ADsCJIAAjWIAYAAIAAAUQAJgLAKgGQAKgGAQAAQAUAAAPAKQAPAKAIATQAIATAAAWQAAAXgJATQgIATgRALQgQAKgSAAQgNgBgLgFQgKgGgHgIIAABLgAEQgrQgNAPABAdQAAAeAMAPQAMAOARAAQASAAANgPQAMgPAAgeQAAgegMgOQgMgPgRgBQgSABgNAQgAGgA7QgUgaAAg8QgBgmAJgXQAHgXAPgNQAQgMAYAAQARAAANAGQANAIAIANQAJANAFASQAEATAAAgQAAAlgHAXQgIAYgQAMQgPANgXAAQgfAAgTgXgAG0hjQgNATAAA1QAAA0AMASQAMARATAAQASAAAMgRQAMgSAAg0QAAg1gMgRQgNgSgSAAQgSAAgLAQgAlyBFQgRgNgEgZIAagDQACAPALAJQAJAIATAAQASAAAJgHQAIgIABgKQgBgJgHgFQgGgEgVgFQgdgHgMgFQgLgFgFgKQgHgJABgLQAAgLAEgIQAFgKAJgFQAFgFALgDQALgDAMAAQASAAAOAFQAOAFAGAJQAHAKACAPIgZADQgCgMgJgHQgIgHgPAAQgSAAgIAHQgIAFAAAIQAAAGADAEQAEAEAGADIAYAHQAcAHALAFQALADAGAKQAGAJABANQAAANgIAMQgIAMgPAGQgOAGgSABQgeAAgQgNgAA6BOQAAgKADgJQAGgOAMgOQAMgOAWgRQAjgdANgRQAMgRgBgPQABgQgLgKQgMgLgSAAQgTAAgMALQgLAMAAAVIgbgEQADgeASgQQASgPAfAAQAeAAASAQQASASAAAZQAAANgEAMQgGANgMAOQgNANgcAXQgXAVgHAGQgHAIgFAHIBqAAIAAAZgAniBOIAAinQgJAJgPAJQgQAJgNAFIAAgZQAXgLARgPQAQgOAHgOIARAAIAADWgAgiA3QAOgeAPgPIjqAAIAAgOIDqAAIgPgVIgOgZIAMAAQATAWANALQAOALANAGIAAAFQgOAHgOALQgMALgUAVg");
	this.shape_2.setTransform(79.15,3.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rb1s2p0, new cjs.Rectangle(-29.8,-18,176.9,36), null);


(lib.mainMenu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_3
	this.mBtnA = new lib.btnSquare();
	this.mBtnA.name = "mBtnA";
	this.mBtnA.parent = this;
	this.mBtnA.setTransform(-500,-0.05,4.5,1.5);
	new cjs.ButtonHelper(this.mBtnA, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.mBtnC = new lib.btnSquare();
	this.mBtnC.name = "mBtnC";
	this.mBtnC.parent = this;
	this.mBtnC.setTransform(500,-0.05,4.5,1.5);
	new cjs.ButtonHelper(this.mBtnC, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.mBtnB = new lib.btnSquare();
	this.mBtnB.name = "mBtnB";
	this.mBtnB.parent = this;
	this.mBtnB.setTransform(0,-0.05,4.5,1.5);
	new cjs.ButtonHelper(this.mBtnB, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mBtnB},{t:this.mBtnC},{t:this.mBtnA}]}).wait(1));

	// 圖層_1
	this.menuPointer = new lib.menuPointer();
	this.menuPointer.name = "menuPointer";
	this.menuPointer.parent = this;
	this.menuPointer.setTransform(0,64);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("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");
	this.shape.setTransform(500.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(8,1,1).p("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");
	this.shape_1.setTransform(500.025,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("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");
	this.shape_2.setTransform(500.025,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("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");
	this.shape_3.setTransform(0,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(8,1,1).p("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");
	this.shape_4.setTransform(0,0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("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");
	this.shape_5.setTransform(0,0.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("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");
	this.shape_6.setTransform(-500,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF0000").ss(8,1,1).p("AUtllQAEAAAGABQAJADAEAAQATAACQgrQBegcBBAAQBQAABDAiQAtAZAAAeQAAAohSACQhLADhKAJQgGAYgjAQQiFBAAAAaQAAAEAIAAQAFAAALgHQAxgeAUAAQA3AAAaAdQAOATAHAgQADgFACgFQAPgVAKAAQAKADAFAAQAFAAASgPQAVgPATAAQAqAAAmAjQAeAcAAAnQAAA6guBaQAFAJAGAIQAjAxAAAnQAAAxgtAAQgjAAgSgiQgFgIgDgJQgiAvgWAAQghAAgXgSQgDgCgEgEQgFAYgGAMQgEAJgFAGQAbgDAXAAQBUAABGAjQAwAaAAAgQAAAshaABQh5ACh5AJQhkAIg3AAQg/AAgjgTQgigPAAgXQAAgOASgOQAQgJASAAQAEAAAGABQAHACAGAAQAWAACYgoQARgFAQgDQgjgOgtgkQgeACghADQgbADgKAAQhEgGgHg5QAAgPABgtQACguAAgvQAAgagNgUQgFgNAAgJQAAgeAZAAQAWAAAWAMIANAEQADAAAPgEQAjgIAPAAQAjAAAZAbQAWAaAAAsIAABsQAAAbgHAQQAAABAAABQAEABADAAQAKAAAEgOQAEgVAAg1IAAiqQAAgbgSAAQgHAAgOAGQgpANgUAAQgeAAgSgPQgRgPAAgSQAAgwBUg4QAPgIAIgHQgeACgUAAQhGAAgngUQgmgTAAgZQAAgQAVgPQATgKAUAAgAZ3gfQAFAAADAAQATAAAyAgQAKAIAKAIQAcg7AAgbQAAgPgUAAQgFAAgRAPQgdAXgMAAQgcAAgOgJgAQkjWIASADQAEAAAIAAIAAhHQAAg+gZgdQgNgRAAgIQAAgmApAAQAzAAAuAnQAeAbAAB2QAsAAAZAVQAdAUAAATQAAAohRAZQgJADgIACIAABIQAIAGAHAHQAyA3AAAtQAAA3g1AAQgGAAgGgCIAADkQAABShGAAQg8AAAAhHIAAi7QgXA0gTAAQgSAAgLgVQgfgwAAgkQAAgbAYghQA5hTAQhFQgXADgWAAQg3AAAAgpQAAgZAegdQAZgZAUAAgAWECYQAAgRADgZQAAghAAgqQAAgWgPAAQgDAAgMAFIgDB4QAAARASAAQAFAAAHgDgAZ3CUQAdgXAagiQgcgpgbgZIAABTQAAAVAAATgAC9moQAgAAAlApQAdAfAAAsQAAAMgCANQAhgoDNgcQA8gGAAgIQAAgGgIgIQgDgHAAgFQAAgTA/AAQA8AAAtAXQAjAVAAAYQAAAihmAIIjXALQhCAEAAASQAAAQABAOIACAAQARAAAtgLQCqgtBJAAQBfAAA2AgQAuAgAAAtQAAAWgXAhQAUAOAAASQAAAghBABQh4AFh1ARQhiAPg3AAQgPAAgKgBQAAAGAAAEQAAAJAAAGQAFgBAIAAQAXAAAiATQABABACABIAFAAQASgBAwgMQChgjBEAAQA5AAAeAaQAeAZAABDIAAD1QAAAugMATQgQAWgdAAQgmAAg5ghQgKgFgIgFQgHAfghAAQglAAAAgtIABhxIglADIgCBuQAAAtgqAAQghAAAAgpIAChqIgRACQgKAAgHgBQgDBtgHAWQgNAfgYAAQgSAAgOgWQgQgcAAgpQAAgmAEhFQADgvAAhHQAAglgMgYQgDEOgWA8QgSArgyAAQgZAAgVgVQgagcAAgeQAAgiAXg/QAlhxAAiUQAAiigNgnQgJgSgDgPQgPBWg+CBQAHANAIATQAYA7AADaQAABSgSAgQgTAdgXAAQgjAAgagjQghguAAg2QAAgWAMgsQAOhAAAhNQAAgFAAgGQgCABgCAAQhHAAAAhSQAAgnARgdQAzhDAmhWQASglAAgnQAAgSgGgQQgFgOAAgPQAAgtAlAAgAGWibQABAXABAcQAqgIB4gbQBfgZBGgBQAAgBAAgBQAFgZAAgHQAAgPgeAAQgtAAhMAUQiEAjgzAEgAJlBNQAHAXAAAtIAAAKQATgDATgDIAAgnQAAgYgGgPQgSADgVADgAH/C5QALgBAXgHIAAgvQAAgZgFgPQgQACgMACQAAAzgBAogALaA9QAHAXAAAuIAAAMQALAAAMAAQAMAAAKACIAAgaQAAghgFgPQgIgLgJAAQgMAAgSACgAromoQA9AAAyAWQAzAbAAAhQAAAjhPAVQi4AwAAA9QAAADAAACIALADQAHAAAWgMQBTgpAuAAQBNAAA0A1QAvAzAABmQAACngEBeQADAAABAAQAOAAAZAKQB8A3BYAAQAWAAAHgVQAJghAAhPIAAkFQAAglgTAAQgRAAgcAOQhaArgtAAQgvAAgdgbQgZgYAAggQAAhBBchOQAjgZAAgWQAAgTgPgQQgPgRAAgJQAAgNANgLQAQgOAcAAQBBAAA4AdQAxAZAAAZQAAAmg8AcQi0BXAAAjQAAAHAGAAQAPAAAigSQCKhIA5AAQA8AAAdArQAbAvAABjIAADuQgDChgZAxQgcA0gtAAQhZAAifhkQhMgugTgYQgCBIgHAVQgNArgoAAQgVAAgQgHQhTAAgeAIQglAHgXAAQhEAAgdgfQgigqAAhMQAAhcAEgtQADgxAAhYQAAg1gJgrQgKgfAAgmQAAgsBfhDQAlgZAAgSQAAgPgOgPQgNgNAAgRQAAgJARgMQAOgMAoAAgAsCA7QALgGAQgJQAjgTAYAAQAYAAAUADQABg1AAg7QAAglgtAAQgYAAhMApQAOAgAAAkQAAAoAAAfgAqGEZQABg6ADhYQAAgDAAgBQgaAFgbAJQgmAKgWAAQgKAAgKAAQgCAtAAA+QAAAhA/AAQAPAAAbgIQAOgEAMgCgAmlACQAnAABLA/QAzAwAAAqQAABLgzAAQgvAAgUgpQg0htgZgfQgLgIAAgGQAAghApAAgALfDxIgBBmQADABADAAQAqAAAAgmIAAhFgA7nlhQAiAAAaAxIAeA5QATAkASAAQAXAAA/g3QAHgEAFgEIAAgEQAAglgPgkQgPgbAAgRQAAgpA0AAQA7AAAmAdQAUARAKAXQBXgrBHAAQA+AAA1AgQA6AfAAAbQAABUhoBhQgBACgCACQA2AIAxAZQAxAbAAAhQAAAuheABQgCAAgBAAQASApAYA9QA3B/AAA7QAAA3gsAmQgnAhhgAAQh+AAg/gyQhAg0AAhPIAAhsQAAgtgMgaQgFgKgBgIQgLABgIACQgjAGggAEQALAWAAAiQAABohHBoQhNBsg+AAQgxAAgfghQghgkAAgkQAAgiAXAAQALAEAHAAQAeAAA/hUQA2hBAAgtQAAgOgFgOQgYABgUAAQhHAAgpgUQgmgTAAgaQAAgPAWgRQATgMAXAAQACAAAHACQAHADAGAAQAgAADbg2IgBg9QhEBBggAAQhHAAg6g/QhJhQAAgoQAAhWBLAAgA1ph8QAugIApgEIAhg/QAig7AAg2QAAgXgiAAQg2AAhCAsgA0qAXQAXAbAAAvIAABzQAABHBOAAQBXAAAAgvQAAg6gZipQhSAEhRAKg");
	this.shape_7.setTransform(-500,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("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");
	this.shape_8.setTransform(-500,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.menuPointer}]}).wait(1));

	// 圖層_2
	this.mmbg = new lib.mmbg();
	this.mmbg.name = "mmbg";
	this.mmbg.parent = this;
	this.mmbg.setTransform(0,0,1,1,0,0,0,800,450);

	this.timeline.addTween(cjs.Tween.get(this.mmbg).wait(1));

}).prototype = getMCSymbolPrototype(lib.mainMenu, new cjs.Rectangle(-800,-450,1600,900), null);


(lib.level = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.levelX = new lib.levelX();
	this.levelX.name = "levelX";
	this.levelX.parent = this;
	this.levelX.setTransform(0,-47.5);

	this.ee = new lib.ee();
	this.ee.name = "ee";
	this.ee.parent = this;
	this.ee.setTransform(-1.3,0.05,1,1,0,0,0,0,1.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("AnznzIHzAAIH0AAAnzH0IHzAAIH0AA");
	this.shape.setTransform(0,-50);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("AgBjeIBcA3IhclMAgBjeIAAkVIhZFJgAgBH0IAArS");
	this.shape_1.setTransform(0.175,-50);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgBBvIAAkUIBcFLgAgBilIAAEUIhZA0g");
	this.shape_2.setTransform(0.175,-83.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.ee},{t:this.levelX}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.level, new cjs.Rectangle(-54,-102.5,108,119.8), null);


(lib.controlC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.level = new lib.level();
	this.level.name = "level";
	this.level.parent = this;
	this.level.setTransform(1420.85,658.35,1,1,0,0,0,0,-42.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,0,0,0.498)").ss(3,1,1).p("Am4C1IG4i1IG5C1Am4i0IG4C0IG5i0");
	this.shape.setTransform(1428.425,268.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("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");
	this.shape_1.setTransform(230.175,85.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(8,1,1).p("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");
	this.shape_2.setTransform(230.175,85.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("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");
	this.shape_3.setTransform(230.175,85.075);

	this.btnBeforeAfter = new lib.btnBeforeAfter();
	this.btnBeforeAfter.name = "btnBeforeAfter";
	this.btnBeforeAfter.parent = this;
	this.btnBeforeAfter.setTransform(1417.45,530.3);
	new cjs.ButtonHelper(this.btnBeforeAfter, 0, 1, 2, false, new lib.btnBeforeAfter(), 3);

	this.rb1s2pm = new lib.rb1s2pm();
	this.rb1s2pm.name = "rb1s2pm";
	this.rb1s2pm.parent = this;
	this.rb1s2pm.setTransform(1360.15,440.25);

	this.rb1s2p0 = new lib.rb1s2p0();
	this.rb1s2p0.name = "rb1s2p0";
	this.rb1s2p0.parent = this;
	this.rb1s2p0.setTransform(1360.15,382.45);

	this.rb1s2pp = new lib.rb1s2pp();
	this.rb1s2pp.name = "rb1s2pp";
	this.rb1s2pp.parent = this;
	this.rb1s2pp.setTransform(1360.15,324.65);

	this.rb1s2s = new lib.rb1s2s();
	this.rb1s2s.name = "rb1s2s";
	this.rb1s2s.parent = this;
	this.rb1s2s.setTransform(1360.15,266.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rb1s2s},{t:this.rb1s2pp},{t:this.rb1s2p0},{t:this.rb1s2pm},{t:this.btnBeforeAfter},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.level}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.controlC, new cjs.Rectangle(39.1,36.7,1468,681.5), null);


(lib.controlB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("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");
	this.shape.setTransform(229.65,85.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(8,1,1).p("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");
	this.shape_1.setTransform(229.65,85.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("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");
	this.shape_2.setTransform(229.65,85.075);

	this.btnPlayStop = new lib.btnPlayStop();
	this.btnPlayStop.name = "btnPlayStop";
	this.btnPlayStop.parent = this;
	this.btnPlayStop.setTransform(1448.05,778);
	new cjs.ButtonHelper(this.btnPlayStop, 0, 1, 2, false, new lib.btnPlayStop(), 3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiHMrQgKgKAAgNQAAgTAQg4IAjh+IAOgwIABgOQAAgKgFgGQgFgFgFAAQgQAAgTARQg2AygvBZQgeA7gbBcIg8AAIBEjtQAKglAAgNQAAgLgEgFQgFgFgGAAQgNAAgOAJQgXAPglAzQglAxgVAuQgKAVgkB1Ig6AAIBSkeQACgIABgDQAAgIgIgHQgIgHgMAAQgGAAgWAFIgEgPICHgZIgzCxQAig/AYgeQAlgxAjgWQAVgNAXAAQATAAANANQANAMAAAUQAAATgJAfIgcBjQBAh3A5gwQAggbAeAAQATAAALANQAMAMAAAaQgBAWgHAaIgrCYQgNAxAAAGQgBAFAEAEQACADAEAAQAEAAAKgHQAWgRAUgcIAMAIQgJAPgZAcQgZAbgRAKQgSAJgPABQgOAAgIgKgABoLrIAAg+IGuAAIAAA+gABoIyIAAg+IGuAAIAAA+gAjlkJQgJgKgBgNQAAgOANgsIBplvQANgsABgHQAAgKgIgFQgHgHgQAAQgJAAgSAEIAAgPICFgXIiFHRQgKAjAAAIQAAAGAEAEQADADAGAAQAHABAJgHQAUgQAWgiIAMAMQglA1gfAVQgXAPgVgBQgPAAgKgKgABonBIAAg+IGuAAIAAA+gABop6IAAg/IGuAAIAAA/g");
	this.shape_3.setTransform(1317.45,607.2,1,1,0,0,0,6.3,13.1);

	this.nsM = new lib.theNumberStepper();
	this.nsM.name = "nsM";
	this.nsM.parent = this;
	this.nsM.setTransform(1429.05,656,1,1,0,0,0,69.2,41.6);

	this.nsL = new lib.theNumberStepper();
	this.nsL.name = "nsL";
	this.nsL.parent = this;
	this.nsL.setTransform(1429.05,541,1,1,0,0,0,69.2,41.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nsL},{t:this.nsM},{t:this.shape_3},{t:this.btnPlayStop},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.controlB, new cjs.Rectangle(38.4,37.4,1485.3999999999999,772.1), null);


(lib.chCombine = function(mode,startPosition,loop) {
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
	this.shape_1.graphics.f("rgba(51,51,51,0.498)").s().p("AiVCWIAAkrIErAAIAAErg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AB0B6QAwgjAggkQgVg2gLhFIhmAAQgBABgBAAQAAAAAAABQgBAAAAAAQAAABAAAAIAAAfIBOAAQAJgBABAFIAABRQgBAQgFALQgGAOgIAEQgNAJgugJIgBgbQAlAKAIgEIAHgJIACgKIAAg+QAAgBAAgBQAAAAgBAAQAAgBgBAAQgBAAAAAAIg7AAIAAANQAABRgYA4IgZgJQAOgkAFgdQAEgcAAgpIAAhVQABgHAGAAIB4AAQgDgVgCgTIAaABQABATADAUIA2AAQgTgOgOgEIAMgXQARAHAVAOIgLAUIAlAAIAAAaIhdAAQAMA+ALAjQAOgXAQg5IAYAGQgOA/gbAoQAKAXALASQAGANAEAAQAEgBABgJQADgRgBgcIAaAGQgFBGgPAIQgFADgEAAQgLAAgJgLQgRgSgPgiQgfAigoAegAhGCIIAAgNIiZAAIAAANIgbAAIAAh4QABgJAIAAIC9AAQAJgBAAAKIAAB4gAjfAkIAAA9ICZAAIAAg9QAAAAAAgBQAAgBgBAAQAAgBgBAAQgBAAgBAAIiSAAQgBAAgBAAQAAAAgBABQAAAAAAABQAAABAAAAgAjqgTIAAgbICuAAIAAAbgAiUhuQglAohYAoIgPgYQBpgpAcgrIAZAEQgCACgBAEQAyAuBKAcIgQAYQhFgig2gug");
	this.shape_2.setTransform(55.2,0.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chCombine, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


(lib.chBB = function(mode,startPosition,loop) {
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
	this.shape_1.graphics.f("rgba(51,51,51,0.498)").s().p("AiVCWIAAkrIErAAIAAErg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah6BMQgRgSAAgiQAAgkAVgTQARgOAZAAQAcAAASASQARASAAAfQAAAagIAPQgHAPgPAIQgPAIgSAAQgcABgSgTgAhogOQgMANAAAZQAAAaAMANQALANARAAQARAAALgNQAMgNAAgbQAAgXgMgOQgLgNgRABQgRgBgLANgAmNBTQgNgLgEgUIAWgFQACAPAJAGQAJAIAPAAQAQAAAIgGQAHgHAAgIQAAgJgGgEQgFgDgTgEQgZgHgKgFQgJgEgFgJQgFgIAAgJQAAgJAEgHQAEgIAHgFQAFgEAKgDQAJgCAKAAQAQgBAMAFQAMAFAGAIQAFAHADAOIgXACQgBgKgHgGQgIgFgNAAQgQAAgHAEQgGAGAAAHQAAAFACADQADACAGADIAUAGQAZAGAJAEQAKAEAFAIQAGAIAAAMQAAALgHAKQgHALgMAFQgNAGgQgBQgaAAgOgLgAETBbIAAi5IBGAAQAVAAANAGQANAGAHAMQAHALAAANQAAAMgGAKQgHALgNAGQARAFAJAMQAJAMAAAPQAAANgFAMQgGALgIAGQgIAGgMAEQgMACgSAAgAErBGIAvAAIARgCQAIgBAGgDQAFgEAEgGQAEgIAAgJQAAgKgGgIQgFgHgJgDQgKgDgSgBIgrAAgAErgQIApAAQAQAAAHgBQAKgDAEgHQAFgGAAgKQAAgJgEgIQgFgGgIgDQgIgDgUABIgmAAgAB0BbIgbhmIgbBmIgYAAIgoiGIAWAAIAeBrIAHgcIAVhPIAYAAIAaBoIAfhoIAWAAIgqCGgAi8BbIAAhVQAAgQgIgIQgHgHgOAAQgKAAgJAEQgJAGgDAJQgEAIAAAQIAABJIgXAAIAAi5IAXAAIAABDQAQgSAYAAQAPAAALAFQALAHAFAKQAFAKAAATIAABVg");
	this.shape_2.setTransform(76.9,-0.4,1.2,1.2,0,0,0,0.4,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chBB, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


(lib.controlA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("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");
	this.shape.setTransform(229.9,85.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(8,1,1).p("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");
	this.shape_1.setTransform(229.9,85.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("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");
	this.shape_2.setTransform(229.9,85.3);

	this.rbMVH = new lib.rbMVH();
	this.rbMVH.name = "rbMVH";
	this.rbMVH.parent = this;
	this.rbMVH.setTransform(523.05,124.9,1,1,0,0,0,61.2,15.9);

	this.rbMRL = new lib.rbMRL();
	this.rbMRL.name = "rbMRL";
	this.rbMRL.parent = this;
	this.rbMRL.setTransform(703.95,124.9,1,1,0,0,0,61.2,15.9);

	this.rbMLine = new lib.rbMLine();
	this.rbMLine.name = "rbMLine";
	this.rbMLine.parent = this;
	this.rbMLine.setTransform(523.05,62.5,1,1,0,0,0,61.2,0);

	this.rbMCircle = new lib.rbMCircle();
	this.rbMCircle.name = "rbMCircle";
	this.rbMCircle.parent = this;
	this.rbMCircle.setTransform(703.95,78.4,1,1,0,0,0,61.2,15.9);

	this.chCombine = new lib.chCombine();
	this.chCombine.name = "chCombine";
	this.chCombine.parent = this;
	this.chCombine.setTransform(1421.2,575.25,1,1,0,0,0,59.1,-1.8);

	this.rbVV = new lib.rbVV();
	this.rbVV.name = "rbVV";
	this.rbVV.parent = this;
	this.rbVV.setTransform(1379.4,402.1,1,1,0,0,0,16.5,0);

	this.rbRR = new lib.rbRR();
	this.rbRR.name = "rbRR";
	this.rbRR.parent = this;
	this.rbRR.setTransform(1379.4,451.15,1,1,0,0,0,16.5,0);

	this.rbLL = new lib.rbLL();
	this.rbLL.name = "rbLL";
	this.rbLL.parent = this;
	this.rbLL.setTransform(1458.95,451.15,1,1,0,0,0,16.5,0);

	this.rbHH = new lib.rbHH();
	this.rbHH.name = "rbHH";
	this.rbHH.parent = this;
	this.rbHH.setTransform(1458.95,402.1,1,1,0,0,0,16.5,0);

	this.chBB = new lib.chBB();
	this.chBB.name = "chBB";
	this.chBB.parent = this;
	this.chBB.setTransform(1421.2,516.35,1,1,0,0,0,59.1,-1.8);

	this.btnPlayStop = new lib.btnPlayStop();
	this.btnPlayStop.name = "btnPlayStop";
	this.btnPlayStop.parent = this;
	this.btnPlayStop.setTransform(1448.05,778);
	new cjs.ButtonHelper(this.btnPlayStop, 0, 1, 2, false, new lib.btnPlayStop(), 3);

	this.slCombine = new lib.slCombine();
	this.slCombine.name = "slCombine";
	this.slCombine.parent = this;
	this.slCombine.setTransform(1350,334.1);

	this.slShift = new lib.slShift();
	this.slShift.name = "slShift";
	this.slShift.parent = this;
	this.slShift.setTransform(1350,272.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.slShift},{t:this.slCombine},{t:this.btnPlayStop},{t:this.chBB},{t:this.rbHH},{t:this.rbLL},{t:this.rbRR},{t:this.rbVV},{t:this.chCombine},{t:this.rbMCircle},{t:this.rbMLine},{t:this.rbMRL},{t:this.rbMVH},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.controlA, new cjs.Rectangle(38.2,37.6,1733.3999999999999,771.9), null);


// stage content:
(lib.myAnimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// helper
	this.mainMenu = new lib.mainMenu();
	this.mainMenu.name = "mainMenu";
	this.mainMenu.parent = this;
	this.mainMenu.setTransform(800,450,1,1,0,0,0,-0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.mainMenu).wait(1));

	// controlC
	this.controlC = new lib.controlC();
	this.controlC.name = "controlC";
	this.controlC.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.controlC).wait(1));

	// controlB
	this.controlB = new lib.controlB();
	this.controlB.name = "controlB";
	this.controlB.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.controlB).wait(1));

	// controlA
	this.controlA = new lib.controlA();
	this.controlA.name = "controlA";
	this.controlA.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.controlA).wait(1));

	// btn3D
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("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");
	this.shape.setTransform(1508.425,40.3);

	this.slCameraRR = new lib.theSlider();
	this.slCameraRR.name = "slCameraRR";
	this.slCameraRR.parent = this;
	this.slCameraRR.setTransform(1350,850);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(101.2,875.708);

	this.btn3D = new lib.btn3D();
	this.btn3D.name = "btn3D";
	this.btn3D.parent = this;
	new cjs.ButtonHelper(this.btn3D, 0, 1, 2, false, new lib.btn3D(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn3D},{t:this.shape_1},{t:this.slCameraRR},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(800,450,971.5999999999999,450);
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