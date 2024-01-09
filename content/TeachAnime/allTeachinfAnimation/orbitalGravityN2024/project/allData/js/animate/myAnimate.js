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


(lib.btnUp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhCD6IAAkzIhTAAICVjAICWDAIhSAAIAAEzg");

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


(lib.btnRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhDD6IAAk0IhSAAICVi/ICWDAIhSAAIAAEzg");
	this.shape.setTransform(0,0,1,1,90);

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


(lib.btnLeft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhDD6IAAk0IhSAAICVi/ICWDAIhSAAIAAEzg");
	this.shape.setTransform(0,0,1,1,-90);

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


(lib.btnDown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhDD6IAAk0IhSAAICVi/ICWDAIhSAAIAAEzg");
	this.shape.setTransform(0,0,1,1,180);

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


(lib.btn01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.label = new cjs.Text("按鈕01", "26px 'Microsoft JhengHei'", "#FFFFFF");
	this.label.name = "label";
	this.label.textAlign = "center";
	this.label.lineHeight = 37;
	this.label.lineWidth = 100;
	this.label.parent = this;
	this.label.setTransform(0,-17.25);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(4));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000066","#0066FF"],[0,1],0,30,0,-29.9).s("#00FFFF").ss(3,1,1).rr(-60,-30,120,60,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000066","#00FFFF"],[0,1],0,30,0,-29.9).s("#00FFFF").ss(3,1,1).rr(-60,-30,120,60,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF00FF").s("#FF00FF").ss(3,1,1).rr(-60,-30,120,60,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1,p:{rotation:0}}]},1).to({state:[{t:this.shape_1,p:{rotation:180}}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-31.5,123,63);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("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");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(10,1,1).p("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");
	this.shape_1.setTransform(0.025,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("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");
	this.shape_2.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.title, new cjs.Rectangle(-330.6,-49.2,661.3,98.4), null);


(lib.nBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("A4/QaMAAAggzMAx/AAAMAAAAgzg");
	this.shape.setTransform(160,104.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.nBG, new cjs.Rectangle(0,0,320,210), null);


(lib.letter123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgvBFQgQgcAAgnQAAgiAKgYQAKgYARgNQANgJANAAQAXAAASAXQAXAdAAAxQAAAigKAYQgKAYgPALQgQALgNAAQgdAAgSgigAgRhUQgKAMgEAaQgEAbAAAYQAAApAKAaQAJAWAQAAQAHAAAJgHQAIgIAFgQQAGgaAAgsQAAgigHgXQgFgQgIgHQgGgGgJAAQgJAAgIAJg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgjBlIAAgFQAOAAAFgDQAEgCABgDQACgEAAgSIAAhqQAAgWgCgGQgBgFgCgCQgDgCgEAAQgFAAgKAFIgCgFIAvgXIAFAAIAACmQAAARACAEQABAEAEACQAFADANAAIAAAFg");
	this.shape_1.setTransform(-0.075,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhABlIAAgFQAzgvAUgeQAVgdAAgZQAAgTgLgMQgMgMgPAAQgPAAgLAJQgMAIgGARIgFAAQAEgbAPgPQAPgOAXAAQAXAAAQAPQARAQgBAVQABAPgIAPQgKAXgZAaIgtAwIAzAAQARAAAGgBQAGgBAFgEQAGgDADgHIAFAAIgNAmg");
	this.shape_2.setTransform(-0.3,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgwBiQgHgFgBgGQABgEADgDQADgDAFgBIAIACIALAFQAJAFAEABQAEACAHAAQAOgBALgMQALgLAAgQQAAgLgFgLQgEgJgEgDQgHgHgLgEQgKgFgMAAIgEAAIAAgEQALgBALgHQAMgHAFgJQAFgKABgMQAAgOgKgKQgJgKgOAAQgWAAgPAZIgGgCQAJgVAOgKQAMgLASAAQAYAAANAPQAKAMAAANQAAAVgcAYQATAHAJAMQAKAOAAARQgBAagQATQgVAZgoAAQgUAAgHgFg");
	this.shape_3.setTransform(-0.65,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AARBlIAAg0IhTAAIAAgTIBbiCIAQAAIAACAIAbAAIAAAVIgbAAIAAA0gAg0AcIBFAAIAAhig");
	this.shape_4.setTransform(-0.3,0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgxBfQgIgGAAgHQAAgFADgDQAEgDAFAAQAEAAADACIAJAGQALAHAMAAQAQAAANgNQANgNAAgSQAAgTgMgPQgLgPgUgJQgQgGgbgBIAmhNIBGAAIgLAZIg7AAIgNAaQAmAGAWAYQAUATAAAaQAAAQgHANQgGANgKAKQgJAJgMAGQgQAIgSAAQgSAAgIgGg");
	this.shape_5.setTransform(-0.275,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgiBaQgcgbAAgqQAAgZALgYQALgYATgSQAUgUARgGQATgGAPAAIAJAAIAAAFQgUACgMAGQgMAGgMAMQgLAMgIAOQgIAPgFATQAVgOAUAAQAVAAAPARQAPAPAAAZQAAAZgPAVQgTAZgdAAQgUAAgOgNgAgMgKQgHACgMAIQgDATAAAMQAAAPAFAQQAFAQALAKQAHAHAKAAQANAAAKgMQAKgMAAgXQAAgZgKgSQgKgRgSAAQgFAAgGACg");
	this.shape_6.setTransform(0.075,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgTBlIA7iyIg2AAQgRAAgHAEQgMAHgHAOIgFgBIATgvIBqAAIAAAFIhBDEg");
	this.shape_7.setTransform(0.025,0.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgrBWQgNgPAAgRQAAgNAJgNQAJgNAVgPQgXgTgHgMQgHgLAAgNQAAgUAPgNQAPgOAYAAQAYAAAOANQAPANAAARQAAALgIALQgIAMgZAPQAaATAIAMQALAPAAAQQAAAWgQAOQgPAPgaAAQgcAAgPgRgAgcAcQgGALAAAOQAAATALAMQAKALAPAAQAQAAAJgJQAKgJAAgMQAAgLgGgIQgKgQgfgZQgMAKgGANgAgXhVQgKAJAAALQAAAHAEAJQAEAHAHAHIAXAUQASgQAFgJQAEgJAAgMQAAgPgIgJQgJgIgPgBQgOABgJAIg");
	this.shape_8.setTransform(0.025,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag6BnIAAgFQATAAARgJQAQgIAOgWQAQgVAGgaQgXAPgSAAQgVAAgPgQQgOgPAAgbQAAgaAOgVQATgYAcAAQAYAAARAUQAVAZAAAlQAAAggPAcQgRAdgdATQgXAPgbAAgAgZhRQgLALAAAYQAAAfAOAQQAJANANAAQAGAAAKgEQAJgDAHgGQADgSAAgLQAAgOgFgRQgFgQgJgJQgJgJgKAAQgNAAgJAMg");
	this.shape_9.setTransform(0,0.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgLAMQgEgFAAgHQAAgGAEgEQAGgFAFAAQAHAAAFAFQAEAEAAAGQAAAHgEAFQgGAEgGAAQgFAAgGgEg");
	this.shape_10.setTransform(0,9.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AglALIAAgVIBLAAIAAAVg");
	this.shape_11.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[]},1).to({state:[{t:this.shape_11}]},1).wait(1));

	// 圖層_2
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(5,1,1).p("Ag/ACQAAgiAKgYQAKgZARgMQANgJANAAQAXAAASAXQAXAdAAAxQAAAigKAYQgKAYgPALQgQALgNAAQgdAAgSghQgQgdAAgngAgjAFQAAApAKAaQAJAWAQAAQAHAAAJgHQAIgHAFgRQAGgZAAgtQAAgigHgXQgFgRgIgHQgGgFgJAAQgJAAgIAJQgKAMgEAaQgEAaAAAZg");
	this.shape_12.setTransform(0.025,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgvBFQgQgcAAgnQAAgiAKgYQAKgYARgNQANgJANAAQAXAAASAXQAXAdAAAxQAAAigKAYQgKAYgPALQgQALgNAAQgdAAgSgigAgRhUQgKAMgEAaQgEAbAAAYQAAApAKAaQAJAWAQAAQAHAAAJgHQAIgIAFgQQAGgaAAgsQAAgigHgXQgFgQgIgHQgGgGgJAAQgJAAgIAJg");
	this.shape_13.setTransform(0.025,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(5,0,1).p("AgmhNIAvgXIAFAAIAACmQAAARACAEQABAEAEACQAFADANAAIAAAFIhKAAIAAgFQAOAAAFgDQAEgCABgDQACgEAAgSIAAhqQAAgWgCgGQgBgFgCgCQgDgCgEAAQgFAAgKAFg");
	this.shape_14.setTransform(-0.075,0.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgjBlIAAgFQAOAAAFgDQAEgCABgDQACgEAAgSIAAhqQAAgWgCgGQgBgFgCgCQgDgCgEAAQgFAAgKAFIgCgFIAvgXIAFAAIAACmQAAARACAEQABAEAEACQAFADANAAIAAAFg");
	this.shape_15.setTransform(-0.075,0.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(5,0,1).p("ABCA/IgPAmIh0AAIAAgFQA0gvAUgeQAVgdAAgZQAAgTgLgMQgMgMgPAAQgPAAgLAJQgMAIgGARIgFAAQAEgbAPgPQAPgOAXAAQAXAAARAPQAQAQAAAVQAAAPgIAPQgKAXgZAaQgkAogJAIIAzAAQARAAAGgBQAGgBAFgEQAFgDAEgHg");
	this.shape_16.setTransform(-0.3,0.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhABlIAAgFQAzgvAUgeQAVgdAAgZQAAgTgLgMQgMgMgPAAQgPAAgLAJQgMAIgGARIgFAAQAEgbAPgPQAPgOAXAAQAXAAAQAPQARAQgBAVQABAPgIAPQgKAXgZAaIgtAwIAzAAQARAAAGgBQAGgBAFgEQAGgDADgHIAFAAIgNAmg");
	this.shape_17.setTransform(-0.3,0.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(5,0,1).p("Ag1g9QAJgUAOgKQAMgLATAAQAYAAAMAPQAKAMAAANQAAAVgbAYQASAHAJAMQAKANAAATQAAAagRATQgVAYgoAAQgUAAgHgFQgHgFAAgFQAAgFADgDQAEgDAFAAQADAAAEABQADABAIAEQAJAFAEABQAFACAGAAQAOAAALgMQALgMAAgQQAAgLgFgMQgEgHgEgEQgHgHgLgEQgKgFgLAAIgFAAIAAgEQAMgBALgHQALgHAFgKQAGgJAAgMQAAgPgKgJQgJgKgNAAQgXAAgQAZg");
	this.shape_18.setTransform(-0.65,0.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgwBiQgHgFgBgGQABgEADgDQADgDAFgBIAIACIALAFQAJAFAEABQAEACAHAAQAOgBALgMQALgLAAgQQAAgLgFgLQgEgJgEgDQgHgHgLgEQgKgFgMAAIgEAAIAAgEQALgBALgHQAMgHAFgJQAFgKABgMQAAgOgKgKQgJgKgOAAQgWAAgPAZIgGgCQAJgVAOgKQAMgLASAAQAYAAANAPQAKAMAAANQAAAVgcAYQATAHAJAMQAKAOAAARQgBAagQATQgVAZgoAAQgUAAgHgFg");
	this.shape_19.setTransform(-0.65,0.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(5,0,1).p("ABEAcIAAAVIgbAAIAAA0IgYAAIAAg0IhTAAIAAgTIBbiCIAQAAIAACAgAARAcIAAhiIhFBig");
	this.shape_20.setTransform(-0.3,0.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AARBlIAAg0IhTAAIAAgTIBbiCIAQAAIAACAIAbAAIAAAVIgbAAIAAA0gAg0AcIBFAAIAAhig");
	this.shape_21.setTransform(-0.3,0.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(5,0,1).p("AA6hkIgLAZIg7AAIgNAaQAmAGAWAXQAUAUAAAaQAAAQgHANQgGAOgKAJQgJAJgMAGQgQAIgSAAQgSAAgIgGQgIgGAAgHQAAgEADgDQAEgEAFAAQAEAAADACQACABAHAFQALAHAMAAQAQAAANgNQANgNAAgTQAAgSgMgPQgLgPgUgJQgQgGgbgBIAmhNg");
	this.shape_22.setTransform(-0.275,0.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgxBfQgIgGAAgHQAAgFADgDQAEgDAFAAQAEAAADACIAJAGQALAHAMAAQAQAAANgNQANgNAAgSQAAgTgMgPQgLgPgUgJQgQgGgbgBIAmhNIBGAAIgLAZIg7AAIgNAaQAmAGAWAYQAUATAAAaQAAAQgHANQgGANgKAKQgJAJgMAGQgQAIgSAAQgSAAgIgGg");
	this.shape_23.setTransform(-0.275,0.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(5,0,1).p("AA7hmIAAAFQgUACgMAGQgMAFgMAMQgLAMgIAPQgIAOgFAUQAVgOAUAAQAVAAAPAQQAPAQAAAaQAAAZgPAUQgTAZgdAAQgUAAgOgNQgcgaAAgqQAAgaALgYQALgYATgTQAUgTARgGQATgGAPAAgAgfAAQgDATAAAMQAAAPAFAQQAFARALAJQAHAHAKAAQANAAAKgMQAKgMAAgWQAAgagKgSQgKgRgSAAQgFAAgGACQgHACgMAIg");
	this.shape_24.setTransform(0.075,0.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgiBaQgcgbAAgqQAAgZALgYQALgYATgSQAUgUARgGQATgGAPAAIAJAAIAAAFQgUACgMAGQgMAGgMAMQgLAMgIAOQgIAPgFATQAVgOAUAAQAVAAAPARQAPAPAAAZQAAAZgPAVQgTAZgdAAQgUAAgOgNgAgMgKQgHACgMAIQgDATAAAMQAAAPAFAQQAFAQALAKQAHAHAKAAQANAAAKgMQAKgMAAgXQAAgZgKgSQgKgRgSAAQgFAAgGACg");
	this.shape_25.setTransform(0.075,0.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(5,1,1).p("AgrhkIBqAAIAAAFIhBDEIgRAAIA7iyIg2AAQgRAAgHAEQgMAHgHAOIgFgBg");
	this.shape_26.setTransform(0.025,0.025);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgTBlIA7iyIg2AAQgRAAgHAEQgMAHgHAOIgFgBIATgvIBqAAIAAAFIhBDEg");
	this.shape_27.setTransform(0.025,0.025);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(5,1,1).p("AgRAAQgXgTgHgMQgHgMAAgMQAAgUAPgNQAPgOAYAAQAYAAAOANQAPANAAAQQAAALgIAMQgIAMgZAPQAaAUAIALQALAPAAARQAAAVgQAOQgPAPgaAAQgcAAgPgRQgNgPAAgRQAAgNAJgNQAJgNAVgPgAAFgPQASgQAFgJQAEgKAAgLQAAgQgIgIQgJgJgPAAQgOAAgJAJQgKAIAAAMQAAAHAEAIQAEAIAHAHgAgKAFQgMALgGAMQgGAMAAAOQAAATALALQAKALAPAAQAQAAAJgJQAKgJAAgMQAAgLgGgIQgKgQgfgZg");
	this.shape_28.setTransform(0.025,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgrBWQgNgPAAgRQAAgNAJgNQAJgNAVgPQgXgTgHgMQgHgLAAgNQAAgUAPgNQAPgOAYAAQAYAAAOANQAPANAAARQAAALgIALQgIAMgZAPQAaATAIAMQALAPAAAQQAAAWgQAOQgPAPgaAAQgcAAgPgRgAgcAcQgGALAAAOQAAATALAMQAKALAPAAQAQAAAJgJQAKgJAAgMQAAgLgGgIQgKgQgfgZQgMAKgGANgAgXhVQgKAJAAALQAAAHAEAJQAEAHAHAHIAXAUQASgQAFgJQAEgJAAgMQAAgPgIgJQgJgIgPgBQgOABgJAIg");
	this.shape_29.setTransform(0.025,0);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(5,1,1).p("Ag6BnIAAgFQATAAARgJQAQgIAPgWQAPgVAGgaQgXAPgSAAQgVAAgPgQQgPgPAAgbQAAgaAPgVQASgYAdAAQAYAAARAUQAWAZAAAlQAAAggQAcQgRAdgdATQgXAPgcAAgAAgABQADgSAAgLQAAgOgFgRQgFgQgIgJQgJgJgLAAQgNAAgKAMQgKALAAAYQAAAfANAQQAKANANAAQAHAAAJgEQAJgDAHgGg");
	this.shape_30.setTransform(0,0.025);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ag6BnIAAgFQATAAARgJQAQgIAOgWQAQgVAGgaQgXAPgSAAQgVAAgPgQQgOgPAAgbQAAgaAOgVQATgYAcAAQAYAAARAUQAVAZAAAlQAAAggPAcQgRAdgdATQgXAPgbAAgAgZhRQgLALAAAYQAAAfAOAQQAJANANAAQAGAAAKgEQAJgDAHgGQADgSAAgLQAAgOgFgRQgFgQgJgJQgJgJgKAAQgNAAgJAMg");
	this.shape_31.setTransform(0,0.025);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAAgPQAHAAAFAFQAFAEAAAGQAAAHgFAFQgFAEgHAAQgGAAgFgEQgFgFAAgHQAAgGAFgEQAFgFAGAAg");
	this.shape_32.setTransform(0,9.025);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgLAMQgEgFAAgHQAAgGAEgEQAGgFAFAAQAHAAAFAFQAEAEAAAGQAAAHgEAFQgGAEgGAAQgFAAgGgEg");
	this.shape_33.setTransform(0,9.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(5,1,1).p("AglgKIBLAAIAAAVIhLAAg");
	this.shape_34.setTransform(0,0.025);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AglALIAAgVIBLAAIAAAVg");
	this.shape_35.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-12.8,18.5,26);


(lib.clock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3333").s().p("AhvCnQgPgMgOgOQgPgOgLgPQghgxAAg/QAAg+AhgxQALgPAPgOQAOgPAPgLQAxghA+AAQA/AAAxAhQAPALAOAPQAOAOALAPQAiAxAAA+QAAA/giAxQgLAPgOAOQgOAOgPAMQgxAhg/AAQg+AAgxghg");
	this.shape.setTransform(0,0.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("AiMCNQg7g6AAhTQAAhSA7g6QA6g7BSAAQBTAAA6A7QA7A6AABSQAABTg7A6Qg6A7hTAAQhSAAg6g7g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20,40,40.5);


(lib.btnReset = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADCBqQgYgZAAguQAAguAYgaQAZgaAmAAQAmAAAYAZQAYAagBAtIAAAIIiLAAQACAfAQARQAPAQAXAAQARAAANgJQAMgJAIgUIAgAEQgHAcgWAQQgUAQghAAQgpAAgYgZgADdgXQgPAPgCAXIBpAAQgCgWgKgMQgPgSgZAAQgVAAgPAOgAANB0QgTgPgFgeIAfgFQACATAMAKQAMAKAWAAQAWAAAKgJQALgJAAgMQgBgKgIgHQgHgEgagGQgjgJgNgGQgOgHgHgLQgFgMAAgMQgBgNAGgKQAFgLAJgHQAIgGANgDQANgEAOAAQAWAAARAGQAQAHAIAKQAIALADASIgfAEQgCgOgKgIQgKgIgSAAQgWAAgKAHQgJAHAAAKQAAAGAEAFQAEAEAIADIAcAJQAiAJANAFQANAGAHALQAIALAAAQQAAAQgJAOQgJAOgSAHQgRAIgWAAQgkAAgTgPgAi4BqQgZgZAAguQAAguAZgaQAYgaAnAAQAlAAAYAZQAXAaAAAtIAAAIIiLAAQACAfAQARQAPAQAXAAQARAAANgJQANgJAGgUIAhAEQgIAcgUAQQgWAQggAAQgpAAgXgZgAiegXQgPAPgBAXIBoAAQgCgWgKgMQgPgSgYAAQgWAAgPAOgAGUB8QgKgGgDgIQgFgJAAgdIAAhqIgWAAIAAgZIAWAAIAAguIAggTIAABBIAgAAIAAAZIggAAIAABsQAAANACAEQACAEADACQAEADAHAAIAOgCIAFAcQgOADgLAAQgRAAgJgFgAkOB/Ighg2QgQgXgJgMQgKgNgHgFQgIgFgIgBQgGgCgNAAIgnAAIAABzIgiAAIAAkBIByAAQAiAAASAHQASAHALASQAKARABAVQgBAcgRATQgSARglAGQAOAGAGAGQAPAOANAVIAtBGgAmjgQIBJAAQAXAAAOgFQANgFAGgKQAHgLAAgNQAAgSgNgMQgOgLgcAAIhRAAg");
	this.shape.setTransform(0,0.025);

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


(lib.btnLookDown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA0CfIAAghQAsAOAMgIQADgEAAgGIAAiYIhSAAIAAgeIBSAAIAAgiIAfAAIAAAiIAZAAIAAAeIgZAAIAACgQAAAWgRAJQgJAFgQAAQgTAAgdgHgAgPCmIAAiQQgEAHgEAEIgRgHQgEBOgSA3IgegKQAOgoAEgjQAFggAAguIAAiAQAAgIAIAAIBaAAIAAgZIAhAAIAAAZIBlAAIAAAfIjHAAQAAAAgBAAQAAABgBAAQAAABAAAAQAAAAAAABIAABuQAfgwAHg0IAdAFQgHAfgIAaIAADIgAh+CmIAAi8IgMASIgcgMQAxhEAMhQIAeAGQgIArgNAiIAAD3gAAdACIAdgIQAYA0AJAmIgdAIQgOgvgTgrg");
	this.shape.setTransform(0.0607,0.0044,1.2,1.2);

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


(lib.btnGo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSB0QgcgSgQgeQgOgeAAgjQAAg/AjgkQAigkA2AAQAjAAAdARQAcARAQAeQAPAfgBAmQABAmgRAgQgPAfgeAQQgdAQghAAQglgBgbgRgAgOhOQgbAZAAA5QAAAuAZAbQAYAbAmAAQAnAAAZgbQAYgbAAgxQAAgfgLgXQgKgYgUgNQgVgNgZAAQgkAAgZAZgAkjB1QgfgQgQgfQgRgeABgmQgBglARghQAPghAegPQAdgQAmAAQAcAAAYAJQAWAJANAQQANARAGAZIgeAJQgHgUgIgLQgJgLgQgHQgQgHgTAAQgYAAgQAHQgRAIgLALQgLALgFAPQgKAYAAAbQAAAhAMAYQAMAXAWAMQAXALAZgBQAXAAAUgIQAWgJALgJIAAgwIhMAAIAAgeIBtAAIAABfQgZAUgbAKQgaALgcAAQgngBgegQgAE+CBIAAgkIAkAAIAAAkgADaCBIAAgkIAkAAIAAAkgAFGBBIgJiHIAAg6IAnAAIAAA6IgJCHgADiBBIgKiHIAAg6IAoAAIAAA6IgJCHg");

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


(lib.theButton = function(mode,startPosition,loop) {
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
	this.btn = new lib.btn01();
	this.btn.name = "btn";
	this.btn.parent = this;
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.btn01(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

}).prototype = getMCSymbolPrototype(lib.theButton, new cjs.Rectangle(-61.5,-31.5,123,63), null);


(lib.theBtnUp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.btn = new lib.btnUp();
	this.btn.name = "btn";
	this.btn.parent = this;
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.btnUp(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

}).prototype = getMCSymbolPrototype(lib.theBtnUp, new cjs.Rectangle(-31.5,-31.5,63,63), null);


(lib.theBtnRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.btn = new lib.btnRight();
	this.btn.name = "btn";
	this.btn.parent = this;
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.btnRight(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

}).prototype = getMCSymbolPrototype(lib.theBtnRight, new cjs.Rectangle(-31.5,-31.5,63,63), null);


(lib.theBtnLeft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.btn = new lib.btnLeft();
	this.btn.name = "btn";
	this.btn.parent = this;
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.btnLeft(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

}).prototype = getMCSymbolPrototype(lib.theBtnLeft, new cjs.Rectangle(-31.5,-31.5,63,63), null);


(lib.theBtnDown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.btn = new lib.btnDown();
	this.btn.name = "btn";
	this.btn.parent = this;
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.btnDown(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

}).prototype = getMCSymbolPrototype(lib.theBtnDown, new cjs.Rectangle(-31.5,-31.5,63,63), null);


(lib.slR1R2 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AiuAAIFdAA");
	this.shape.setTransform(-45,-0.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQEUQAPgHAEgHQAEgFAAgHIAAgjQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAIgRAAIAAgQIAgAAQAEAAAAADIAAAvQABAHAFAFQAIAKAMADQAQAEBggGIgEATIhdAAQgjgDgNgVQgCAHgHAIQgIAJgHADgABbDqIAJgNIATAKQAOgKAHgHIAKALQgIAJgKAHIATAPIgJANQgegYgVgLgABFENIAAgiIgBABQgRAJgMAFIgJgQQAZgHAWgPIgjAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAglIACgBIBqAAIADABIAAAlQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAIgwAAIgQANIAAAsgAA3DHIBQAAIAAgBIAAgMIhQAAgAiREIIAAhRQgBhCgPgmIAZAAQAFAOAEAWIAGgLQAQgZAWAAQATABAOAMQAOAOAAAcIgYAAQgBgOgFgHQgGgKgLAAQgOAAgKATQgNAWAAAnIAABRgAgPCkIAJgPQANAIARAOIgKAOQgRgQgMgFgAAgCjIAAgPIA2AAIAAgLIgwAAIAAgPIAwAAIAAgNIAQAAIAAANIAxAAIAAAPIgxAAIAAALIA4AAIAAAPgAgKCAIAJgPQANAHARAOIgKAOQgSgPgLgFgAgQhdQAQgHAFgHQAFgGABgHIAAggQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAIgVAAIAAgQIAkAAQAEAAAAADIAAAsQABAFAFAHQAFAIAJADQAKADARAAQAzAAAlgDIgEATIheAAQgggDgMgVQgDAHgHAJQgJAJgJADgAiRhpIAAhQQgBhCgPgnIAZAAQAFAOAEAXIAGgLQAQgaAWAAQATABAOAMQAOAOAAAcIgYAAQgBgOgFgHQgGgJgLAAQgOAAgKATQgNAWAAAnIAABQgABthrIAAhUIgnAAIAAAPQgBASgDAOQgEASgKARIgQgLQALgRADgOQADgLAAgOIAAhCQgBgGAFAAQAugCAkgHIAGAQQgfAHgqACQAAAAgBABQgBAAAAAAQAAABAAAAQAAABAAAAIAAAWIBXAAIAAAQIgfAAIAABUgAgOjKIAJgPQAOAGATAOIgIAOQgUgOgOgFgAgHjyIAHgQQARAHATAOIgJAOQgVgOgNgFg");
	this.shape_1.setTransform(-44.475,0.025);

	this.valueText = new cjs.Text("0", "26px 'Arial'", "#FFFFFF");
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

}).prototype = getMCSymbolPrototype(lib.slR1R2, new cjs.Rectangle(-63.5,-29,337.5,58.1), null);


(lib.slNN02 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAtBgIAAhxQAAgTgFgKQgDgJgJgGQgKgGgNAAQgTAAgOANQgPANAAAjIAABmIggAAIAAi6IAdAAIAAAbQAUggAmAAQARAAAOAHQAOAFAHALQAHAKADANQACAJAAAWIAAByg");
	this.shape.setTransform(-85,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AC3B2IgBgXQAkAJAHgGQADgCAAgIIAAiyQAAgBAAAAQgBAAAAgBQAAAAgBAAQgBAAAAAAIgmAAIAAARIAcAAIAAAUIgcAAIAAAQIAeAAIAAAVIhPAAIAAgVIAdAAIAAgQIgdAAIAAgUIAdAAIAAgRIgmAAQAAAAgBAAQAAAAAAAAQAAAAgBABQAAAAAAABIAACIQgCAlgHAjIgVgEQAJgqABglIAAiOQAAgGAGAAICAAAQAHAAAAAGIAADKQgBANgGAGQgHAHgNAAQgQAAgWgDgAgvBNQgTAagVASIgQgOQAdgWASgfQgPgrgDgqIgIAQQgKgHgHgDIAFgMQgCADgDAAIhJAAQgJAAAAgKIAAg3IAVAAIAAArQAAABAAABQAAAAAAABQABAAAAAAQABAAABAAIAMAAIAAhDIAUAAIAABDIALAAQABAAABAAQAAAAAAAAQABgBAAAAQAAgBAAgBIAAgrIAVAAIAAA2QAQghABgqIAUADQgBAMgDANIA2AAIAAAVIgJAAIAAAQQgBA3gWA4QANAbATAfIgVAHQgNgWgKgWgAgwAUIADAKQAOgmAAgvIAAgQIgZAAQgBA6AJAhgAjcB3IAAhqIgJAJIgSgMQAegaAMglIATAHIgOAfIAACGgAATB0IAAhUQABgHAHAAIA/AAQAHAAAAAHIAABFQAAAHgHAAIgxAAIAAAIgAApAxIAAAmIAeAAQAEgBAAgDIAAgiQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBAAgBAAIgcAAQgBAAgBAAQAAAAAAAAQgBABAAAAQAAABAAABgAjEBoQAbgZABhDIAAgHIgVAAIAAgTIBlAAIAAATIgXAAIAABAQAAAEABABQAEAAAWgPIAJASQgiAXgPAAQgCAAgDgDQgCgFAAgGIAAhRIgRAAIAAAHQgBBFgcAjgACOBUQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAgBIAAhRQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAIBGAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAABIAABRQAAABAAABQAAAAgBABQAAAAAAAAQgBAAgBAAgACgBAIAiAAIABgBIAAgvIgjAAgAAYAMIAAgTIBEAAIAAATgAAYgWIAAgVIBDAAIAAAVgAj3g5QAdgbAKgiIATAHQgQArgYAWgAASg6IAAgUIBNAAIAAAUgAAYhbIAAgVIBEAAIAAAVg");
	this.shape_1.setTransform(-44.975,0.025);

	this.valueText = new cjs.Text("0", "26px 'Arial'", "#FFFFFF");
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

}).prototype = getMCSymbolPrototype(lib.slNN02, new cjs.Rectangle(-92.6,-16.5,366.6,33.1), null);


(lib.slNN01 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ADIBKQgQAbgcATIgSgPQAegTAWgiQgTgqgBgSIgDAGIgSgFIAAAjQAAABAAABQAAAAgBABQAAAAgBABQgBAAAAAAIg0AAIgHAMIBKAAIAAASIgeAAQgOAVgNAKIAhAMIgMARIgrgOIgZAIQgPAFgcABIgFgVQAMAAAegEIgVgIIgDgOQAKgHAGgGIgiAAIAAgSIA1AAIAHgMIguAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIAAgqQAAgBABgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAzAAIAAgJIgvAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIAAgeIgPAAIAAgSIAPAAIAAgeQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAvAAIAAgLIAVAAIAAALIAtAAQABAAABAAQAAABABAAQAAAAAAABQABAAAAABIAAAeIAQAAIAAASIgQAAIAAAeQAAABgBAAQAAABAAAAQgBAAAAABQgBAAgBAAIgtAAIAAAJIAzAAQAAAAABAAQABAAAAABQABAAAAAAQAAABAAABIAAACQAXg0gBg1IAVAAIgBAeIA8AAIAAAVIgPAAIAAAIQAAA5gYA2QARAeAXAcIgUALQgdgmgDgKgAA4BMQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAZAHQAOgIAMgPIgjAAQgHAHgJAHgAC+gHQAFATAFAQQAPglAAgxIAAgIIgbAAQgGAZAIAigABfAOIAhAAIAAgBIAAgNIAAAAIghAAgAApAAIAAAOIAhAAIAAgOIghAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAgABfgtIAaAAIABgBIAAgNIgbAAgAAtguIABABIAcAAIAAgOIgdAAgABfhNIAbAAIAAgOIgbAAgAAthNIAdAAIAAgOIgdAAgAj3B1IAAgUIAtAAIAAgqIAWAAIAAAqIAoAAIAAg2IheAAIAAgVIDTAAIAAAVIhgAAIAAAQIBWAAIAAAUIhWAAIAAASIBrAAIAAAUgAhDgMIgBgBQgUARggANIgMgRQAmgPANgNQgLgRgJgWQgGAMgHAJIgSgIIAAATQAAABAAABQAAAAAAABQgBAAAAABQgBAAAAAAIgmAAQASALATAPIgNAOIgdgXIAAAdIgUAAIAAgeQgVAUgTAJIgNgOQAagNARgSIgjAAQgBAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBIAAgoQAAgBABgBQAAAAAAgBQABAAAAAAQABAAABAAIAtAAIAAgJIg0AAIAAgTIA0AAIAAgOIAUAAIAAAOIAxAAIAAATIgxAAIAAAJIArAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAABIAAASQAUgeAEggIAVADIgDALIBOAAIAAAVIgTAAQgIAfgRAZQAPAPAiAOIgPAQQgegRgPgMgAhKg3IAGAKQAKgSAHgVIgjAAQAFARAHAMgAixgxIAZAAIABgBIAAgKIgBgBIgZAAgAjig8IAAAKIABABIAcAAIAAgMIgcAAIgBABg");
	this.shape.setTransform(-45,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAtBgIAAhxQAAgTgFgKQgDgJgJgGQgKgGgNAAQgTAAgOANQgPANAAAjIAABmIggAAIAAi6IAdAAIAAAbQAUggAmAAQARAAAOAHQAOAFAHALQAHAKADANQACAJAAAWIAAByg");
	this.shape_1.setTransform(-85,0);

	this.valueText = new cjs.Text("0", "26px 'Arial'", "#FFFFFF");
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

}).prototype = getMCSymbolPrototype(lib.slNN01, new cjs.Rectangle(-92.6,-16.5,366.6,33.1), null);


(lib.gravityNN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_3
	this.letterPN = new lib.letter123();
	this.letterPN.name = "letterPN";
	this.letterPN.parent = this;
	this.letterPN.setTransform(51.4,17.45);

	this.letterC = new lib.letter123();
	this.letterC.name = "letterC";
	this.letterC.parent = this;
	this.letterC.setTransform(85.6,17.45);

	this.letterD = new lib.letter123();
	this.letterD.name = "letterD";
	this.letterD.parent = this;
	this.letterD.setTransform(103.5,17.45);

	this.letterB = new lib.letter123();
	this.letterB.name = "letterB";
	this.letterB.parent = this;
	this.letterB.setTransform(75.95,17.45);

	this.letterA = new lib.letter123();
	this.letterA.name = "letterA";
	this.letterA.parent = this;
	this.letterA.setTransform(66.25,17.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.letterA},{t:this.letterB},{t:this.letterD},{t:this.letterC},{t:this.letterPN}]}).wait(1));

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACsG/IAwiiQAJgcAAgMQgBgFgDgDQgFgEgJAAIgUACIgCgKIBbgOIgnB/QAvhPAlgfQAVgRANAAQAJAAAFAFQAFAFgBAKQABARgJAPQgGAMgMAAQgGAAgEgEQgFgEAAgIQgBgFgCgBQgCgCgDAAQgEAAgEACQgIADgNARQgVAagbAoQgKASgIAWQgMAegBAGIgIAggAttEbQgSgFgIgJQgGgIgBgJQAAgHAFgIQAFgIAHgGIAagPQgIgGAAgHQAAgHAHgIQAHgHAWgKQgSgDgLgMQgLgMAAgPQAAgYAVgTQAVgTAjAAQANAAAIACQAIADAIAFIAuAAIgFASIgcAAQADAJAAAIQAAAXgTARQgUARghACQgSAGgJAHQgEADABADQgBADAEADQACADANADIAiAHQAbAHAJAJQAIAJAAAMQAAANgKAMQgLAMgUAGQgUAHgXAAQgVAAgRgFgAtwDlQgHAKAAAJQgBALALAIQAPAKAcAAQAYAAARgIQASgIgBgNQAAgHgFgGQgHgGgSgEIg1gMQgOAGgHAKgAtFBWQgNATAAAVQAAANAJAJQAHAIAMAAQAIAAAJgFQAIgFAHgJQAFgIAEgOQADgNAAgGQAAgOgIgHQgHgIgMAAQgUAAgMATgAzaCsIAFgKQATgBAIgCQAKgFAFgHQAHgLAJgiIA/jVQAIgZAAgPQAAgHgDgFQgEgFgGgCQgIgCgTAAIACgKIEVAAIgbBaIgKAAQADgQAAgLQAAgRgKgKQgJgKgPgFQgLgCgkAAIhGAAIgpCMIAuAAQAfAAAQgJQAQgKAQggIAKAAIglCBIgLAAQAFgQAAgKQAAgQgLgJQgLgIgdAAIgvAAIgeBqQgJAdAAAJQAAAKAHAFQAIAFAbACIgDAKgApSAvIAAgVIEbAAIAAAVgAiqASIAAgUIWFAAIAAAUgApSglIAAgVIEbAAIAAAVgAAphgQgigVgQgjQgQgiAAgjQgBguAUgpQASgqAdgcQAcgdAigRQAwgWAzAAQAmAAAfAMQANAFAFAAQAHAAAEgDQAFgDAHgLIAJAAIgaBwIgKAAIACgeQABgZgXgUQgXgUgnAAQhRAAg1BNQgoA8AABLQAAAyAZAkQAZAkA1AAQANAAANgCQALgDAYgIIAZhbQAGgTgBgLQABgKgHgFQgLgHgYAAIgIAAIADgLICUAAIgEALQgTAAgJAFQgKAEgGALQgFAHgJAiIgbBaQgjAPgXAFQgWAFgYAAQg4AAgjgVgAQVhTQgGgHAAgJQAAgMAKgmIAZhUIAIggIABgKQAAgHgEgDQgDgEgDAAQgMAAgMALQgkAigfA8QgUAngTA+IgnAAIAtifQAGgZABgJQAAgHgDgDQgDgEgEAAQgJAAgJAGQgRALgYAhQgZAigNAeQgHAPgZBOIgmAAIA2jAIACgHQABgGgGgEQgFgFgIAAIgTADIgCgKIBagQIgjB2QAYgqAPgUQAaghAXgPQAOgIAPAAQAOAAAHAIQAJAJAAANQAAANgFAUIgTBDQAqhQAnggQAVgSAUAAQAMAAAJAIQAHAIAAASQAAAPgEARIgdBmQgJAhAAAEQAAADACADQAAAAAAABQABAAAAAAQABABAAAAQABAAAAAAQAEAAAGgFQAPgMANgTIAIAGQgGAKgQATQgRASgMAGQgMAHgKAAQgJAAgGgGgAI/hTIADgKIAHAAQAUAAALgGQAHgEAHgLQAHgMAKgoIA8jOIjPEhIgLAAIgikhIg/DcQgIAcAAAJQAAAKAHAFQAIAFAbACIgDAKIh2AAIAEgKIAHAAQAZAAANgNQAHgJAKggIBMkIQgHgJgJgEQgHgCgWgCIADgKIBYAAIAhEeIDOkeIBWAAIAAAKQgcACgEABQgJAEgIAKQgHAKgJAdIhBDhQgGAUAAALQABAKAGAGQALAHAVAAIAGAAIgCAKg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 圖層_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1,1).p("AFCm+IgaBwIgKAAQACgUAAgKQAAgZgWgUQgXgUgoAAQhRAAg0BNQgpA8AABLQAAAyAZAkQAaAkA1AAQANAAAMgCQALgDAYgIIAZhbQAGgTAAgLQAAgKgHgFQgLgHgYAAIgIAAIADgLICUAAIgDALQgUAAgJAFQgJAEgHALQgEAHgKAiIgbBaQgjAPgWAFQgWAFgZAAQg4AAgigVQgjgVgQgjQgRgiAAgjQAAguATgpQATgqAdgcQAdgdAigRQAvgWAzAAQAmAAAfAMQANAFAFAAQAHAAAEgDQAFgDAHgLgAHum2IAgEeIDOkeIBXAAIAAAKQgdACgEABQgJAEgHAKQgIAKgIAdIhCDhQgFAUAAALQAAAKAHAGQAKAHAVAAIAHAAIgDAKIiVAAIACgKIAHAAQAUAAALgGQAIgEAGgLQAHgMALgoIA7jOIjPEhIgLAAIghkhIg/DcQgJAcAAAJQAAAKAIAFQAHAFAbACIgDAKIh1AAIADgKIAHAAQAaAAAMgNQAIgJAJggIBNkIQgIgJgIgEQgIgCgVgCIACgKgAN2lAIgiB2QAXgqAQgUQAZghAXgPQAOgIAPAAQAOAAAIAIQAJAJAAANQAAANgGAUIgTBDQArhQAmggQAVgSAVAAQAMAAAIAIQAHAIAAASQAAAPgEARIgdBmQgJAhAAAEQAAADACADQABACADAAQADAAAGgFQAPgMANgTIAJAGQgHAKgQATQgRASgMAGQgMAHgKAAQgJAAgGgGQgGgHAAgJQAAgMALgmIAYhUQAIgdAAgDQABgFAAgFQAAgHgDgDQgDgEgEAAQgLAAgMALQgkAiggA8QgUAngSA+IgoAAIAtifQAHgZAAgJQAAgHgDgDQgDgEgEAAQgIAAgKAGQgQALgYAhQgZAigOAeQgHAPgYBOIgnAAIA3jAQACgFAAgCQAAgGgGgEQgFgFgIAAQgDAAgQADIgCgKgAC9DhIBbgOIgmB/QAuhPAlgfQAVgRAOAAQAIAAAFAFQAFAFAAAKQAAARgJAPQgGAMgMAAQgGAAgEgEQgFgEAAgIQgBgFgCgBQgCgCgDAAQgEAAgEACQgHADgOARQgVAagaAoQgLASgIAWQgLAegBAGIgJAgIgoAAIAxiiQAIgcAAgMQAAgFgEgDQgFgEgJAAQgFAAgPACgAiqgCIWFAAIAAAUI2FAAgAweijIgqCMIAvAAQAfAAAQgJQAPgKARggIAKAAIglCBIgLAAQAEgQAAgKQAAgQgKgJQgLgIgdAAIgvAAIgfBqQgIAdAAAJQAAAKAHAFQAHAFAcACIgDAKIiNAAIAEgKQAUgBAHgCQALgFAEgHQAIgLAJgiIA/jVQAIgZAAgPQAAgHgEgFQgDgFgHgCQgHgCgTAAIACgKIEUAAIgaBaIgKAAQADgQAAgLQAAgRgKgKQgJgKgPgFQgLgCgkAAgApSg6IEaAAIAAAVIkaAAgApSAaIEaAAIAAAVIkaAAgArPBFIgFASIgdAAQAEAJAAAIQAAAXgTARQgUARghACQgSAGgJAHQgEADAAADQAAADAEADQACADANADIAhAHQAbAHAJAJQAJAJAAAMQAAANgKAMQgLAMgUAGQgUAHgXAAQgVAAgSgFQgRgFgIgJQgHgIAAgJQAAgHAFgIQAFgIAHgGQAFgDAVgMQgIgGAAgHQAAgHAHgIQAHgHAWgKQgTgDgKgMQgMgMAAgPQAAgYAWgTQAVgTAjAAQANAAAIACQAIADAIAFgAsKBgQAAgOgIgHQgIgIgMAAQgTAAgMATQgNATAAAVQAAANAIAJQAIAIAMAAQAIAAAJgFQAIgFAGgJQAGgIADgOQAEgNAAgGgAtcDVQgOAGgGAKQgIAKAAAJQAAALAKAIQAPAKAcAAQAZAAARgIQARgIAAgNQAAgHgGgGQgGgGgTgEQgKgCgrgKg");
	this.shape_1.setTransform(0,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACsG/IAwiiQAJgcAAgMQgBgFgDgDQgFgEgJAAIgUACIgCgKIBbgOIgnB/QAvhPAlgfQAVgRANAAQAJAAAFAFQAFAFgBAKQABARgJAPQgGAMgMAAQgGAAgEgEQgFgEAAgIQgBgFgCgBQgCgCgDAAQgEAAgEACQgIADgNARQgVAagbAoQgKASgIAWQgMAegBAGIgIAggAttEbQgSgFgIgJQgGgIgBgJQAAgHAFgIQAFgIAHgGIAagPQgIgGAAgHQAAgHAHgIQAHgHAWgKQgSgDgLgMQgLgMAAgPQAAgYAVgTQAVgTAjAAQANAAAIACQAIADAIAFIAuAAIgFASIgcAAQADAJAAAIQAAAXgTARQgUARghACQgSAGgJAHQgEADABADQgBADAEADQACADANADIAiAHQAbAHAJAJQAIAJAAAMQAAANgKAMQgLAMgUAGQgUAHgXAAQgVAAgRgFgAtwDlQgHAKAAAJQgBALALAIQAPAKAcAAQAYAAARgIQASgIgBgNQAAgHgFgGQgHgGgSgEIg1gMQgOAGgHAKgAtFBWQgNATAAAVQAAANAJAJQAHAIAMAAQAIAAAJgFQAIgFAHgJQAFgIAEgOQADgNAAgGQAAgOgIgHQgHgIgMAAQgUAAgMATgAzaCsIAFgKQATgBAIgCQAKgFAFgHQAHgLAJgiIA/jVQAIgZAAgPQAAgHgDgFQgEgFgGgCQgIgCgTAAIACgKIEVAAIgbBaIgKAAQADgQAAgLQAAgRgKgKQgJgKgPgFQgLgCgkAAIhGAAIgpCMIAuAAQAfAAAQgJQAQgKAQggIAKAAIglCBIgLAAQAFgQAAgKQAAgQgLgJQgLgIgdAAIgvAAIgeBqQgJAdAAAJQAAAKAHAFQAIAFAbACIgDAKgApSAvIAAgVIEbAAIAAAVgAiqASIAAgUIWFAAIAAAUgApSglIAAgVIEbAAIAAAVgAAphgQgigVgQgjQgQgiAAgjQgBguAUgpQASgqAdgcQAcgdAigRQAwgWAzAAQAmAAAfAMQANAFAFAAQAHAAAEgDQAFgDAHgLIAJAAIgaBwIgKAAIACgeQABgZgXgUQgXgUgnAAQhRAAg1BNQgoA8AABLQAAAyAZAkQAZAkA1AAQANAAANgCQALgDAYgIIAZhbQAGgTgBgLQABgKgHgFQgLgHgYAAIgIAAIADgLICUAAIgEALQgTAAgJAFQgKAEgGALQgFAHgJAiIgbBaQgjAPgXAFQgWAFgYAAQg4AAgjgVgAQVhTQgGgHAAgJQAAgMAKgmIAZhUIAIggIABgKQAAgHgEgDQgDgEgDAAQgMAAgMALQgkAigfA8QgUAngTA+IgnAAIAtifQAGgZABgJQAAgHgDgDQgDgEgEAAQgJAAgJAGQgRALgYAhQgZAigNAeQgHAPgZBOIgmAAIA2jAIACgHQABgGgGgEQgFgFgIAAIgTADIgCgKIBagQIgjB2QAYgqAPgUQAaghAXgPQAOgIAPAAQAOAAAHAIQAJAJAAANQAAANgFAUIgTBDQAqhQAnggQAVgSAUAAQAMAAAJAIQAHAIAAASQAAAPgEARIgdBmQgJAhAAAEQAAADACADQAAAAAAABQABAAAAAAQABABAAAAQABAAAAAAQAEAAAGgFQAPgMANgTIAIAGQgGAKgQATQgRASgMAGQgMAHgKAAQgJAAgGgGgAI/hTIADgKIAHAAQAUAAALgGQAHgEAHgLQAHgMAKgoIA8jOIjPEhIgLAAIgikhIg/DcQgIAcAAAJQAAAKAHAFQAIAFAbACIgDAKIh2AAIAEgKIAHAAQAZAAANgNQAHgJAKggIBMkIQgHgJgJgEQgHgCgWgCIADgKIBYAAIAhEeIDOkeIBWAAIAAAKQgcACgEABQgJAEgIAKQgHAKgJAdIhBDhQgGAUAAALQABAKAGAGQALAHAVAAIAGAAIgCAKg");
	this.shape_2.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gravityNN, new cjs.Rectangle(-126.7,-47.2,253.5,94.5), null);


(lib.fkNN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_3
	this.letterPN = new lib.letter123();
	this.letterPN.name = "letterPN";
	this.letterPN.parent = this;
	this.letterPN.setTransform(48.7,-16.2);

	this.letterC = new lib.letter123();
	this.letterC.name = "letterC";
	this.letterC.parent = this;
	this.letterC.setTransform(82.9,-16.2);

	this.letterD = new lib.letter123();
	this.letterD.name = "letterD";
	this.letterD.parent = this;
	this.letterD.setTransform(100.8,-16.2);

	this.letterB = new lib.letter123();
	this.letterB.name = "letterB";
	this.letterB.parent = this;
	this.letterB.setTransform(73.25,-16.2);

	this.letterA = new lib.letter123();
	this.letterA.name = "letterA";
	this.letterA.parent = this;
	this.letterA.setTransform(63.55,-16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.letterA},{t:this.letterB},{t:this.letterD},{t:this.letterC},{t:this.letterPN}]}).wait(1));

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmcDVIAAgEQAFAAACgCQABAAAAgBQAAAAAAAAQABgBAAgBQAAAAAAgBQAAgDgGgHIgmgyIAggcQAKgKABgCIABgEQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgDgCgFAAIAAgFIA2AAIAAAFQgLAAgHADQgIADgIAIIghAeIAhAoIASAWQAGAHAFABQAEACAIAAIAAAEgAnrDVIAAgEQAKAAAFgDQADgCABgCQACgFAAgLIAAhzQAAgVgBgFIgDgGQgCgDgEAAQgDAAgFADIgDgFIAlgQIAHAAIAAB9IAAArQAAALACAFQABAEAEABQADACAKAAIAAAEgAGTC4QgMgRgahyIgmAiIgdBjIgsAAIBllbIABgMQAAgGgFgFQgFgFgKAAQgGABgPACIAAgKIBigQIhQETIAggbQA1gsAQgVQAFgGAAgEIgCgGQgCgCgEgBIgSgBIgKAAIAEgMIB6AAIgCAMQgWAAgPAGQgPAGgPAKQgcAVgJAIIgYAVQAGAUAJAkQAPA9AGALQAEALAGAAQAFAAAHgFQAOgLARgXIAKAIQgfAmgQAMQgQAMgOAAQgMAAgGgJgAJiC1IA2ixQAJgfAAgNQAAgGgEgDQgGgEgKgBQgGAAgQAEIgCgMIBkgPIgqCKQAyhVAqgiQAXgUAPABQAJgBAGAGQAEAFAAALQAAATgJARQgHANgNAAQgGABgFgFQgFgEgBgJQgBgFgBgCQgDgCgEgBQgEABgEACQgIADgPATQgYAbgcAtQgMATgIAYQgNAhgBAHIgKAjgAtDCXIAEgJQAUgBAHgCQAKgFAFgIQAHgKAKgiIA/jVQAHgaAAgPQAAgGgDgFQgEgFgGgCQgHgDgUABIADgKIEUAAIgbBaIgKAAQADgRAAgKQAAgSgJgJQgKgLgPgEQgKgDglABIhFAAIgqCMIAuAAQAgAAAPgKQAQgJAQggIAKAAIglCAIgKAAQAEgPAAgLQAAgOgLgJQgLgJgcAAIgwAAIgeBqQgJAcAAAKQAAAJAHAGQAIAFAcACIgEAJgAm/CPgAi8AbIAAgVIEaAAIAAAVgAi8g5IAAgWIEaAAIAAAWg");
	this.shape.setTransform(-40.625,2.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 圖層_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1,1).p("AGdjVIhQEVIAggcQA1grAQgWQAFgGAAgEQAAgDgCgCQgCgDgEgBQgGgBgMAAIgKAAIAEgLIB6AAIgCALQgWABgPAFQgPAGgPAKQgcAVgJAIIgYAVQAGAVAJAkQAPA8AGALQAEALAGAAQAFAAAHgFQAOgKARgXIAKAHQgfAmgQAMQgQAMgOAAQgMAAgGgJQgMgQgahzIgmAiIgdBkIgsAAIBllcQABgHAAgFQAAgGgFgFQgFgEgKAAQgGAAgPACIAAgKgAJ1g9IBkgQIgqCKQAyhVAqgiQAXgTAPAAQAJAAAGAFQAEAGAAALQAAASgJARQgHAOgNAAQgGAAgFgFQgFgEgBgJQgBgFgBgCQgDgCgEAAQgEAAgEACQgIAEgPASQgYAbgcAtQgMAUgIAXQgNAhgBAHIgKAkIgsAAIA2iyQAJgfAAgNQAAgFgEgEQgGgEgKAAQgGAAgQADgAqHi3IgqCMIAuAAQAgAAAPgJQAQgKAQggIAKAAIglCBIgKAAQAEgQAAgKQAAgPgLgJQgLgJgcAAIgwAAIgeBqQgJAdAAAJQAAAKAHAFQAIAFAcACIgEAKIiMAAIAEgKQAUgBAHgCQAKgFAFgHQAHgLAKgiIA/jVQAHgZAAgQQAAgGgDgFQgEgFgGgCQgHgDgUAAIADgJIEUAAIgbBZIgKAAQADgQAAgLQAAgQgJgLQgKgKgPgEQgKgCglAAgAi8hPIEaAAIAAAWIkaAAgAi8AGIEaAAIAAAVIkaAAgAm/CQIAggdQAKgKABgCQABgCAAgBQAAgDgBgCQgDgCgFAAIAAgEIA2AAIAAAEQgLAAgHADQgIADgIAIIghAeIAhApQANARAFAFQAGAGAFABQAEACAIAAIAAAFIg9AAIAAgFQAFAAACgCQACgBAAgDQAAgDgGgHIgmgxIAAAqQAAAMACAEQABAEAEABQADACAKAAIAAAFIhAAAIAAgFQAKAAAFgCQADgCABgDQACgEAAgMIAAhyQAAgWgBgFQgBgEgCgCQgCgCgEAAQgDAAgFACIgDgEIAlgQIAHAAg");
	this.shape_1.setTransform(-40.625,2.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ApJDVIAAgEQAGAAACgCQAAAAABgBQAAAAAAAAQAAgBAAgBQAAAAAAgBQABgDgGgHIgmgyIAfgcQALgKABgCIABgEQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQgCgCgGAAIAAgFIA3AAIAAAFQgLAAgIADQgHADgIAIIghAeIAhAoIASAWQAGAHAFABQAEACAIAAIAAAEgAqXDVIAAgEQAKAAAEgDQAEgCABgCQACgFAAgLIAAhzQAAgVgBgFIgDgGQgCgDgEAAQgDAAgGADIgCgFIAlgQIAHAAIAAB9IAAArQAAALACAFQABAEADABQAEACAKAAIAAAEgADmC4QgLgRgahyIgmAiIgeBjIgrAAIBllbIABgMQAAgGgFgFQgGgFgJAAQgGABgPACIAAgKIBigQIhQETIAggbQA0gsARgVQAEgGAAgEIgBgGQgCgCgFgBIgRgBIgKAAIAEgMIB6AAIgCAMQgWAAgPAGQgPAGgPAKQgcAVgKAIIgXAVQAGAUAIAkQAQA9AGALQAEALAGAAQAFAAAHgFQAOgLARgXIAKAIQgfAmgRAMQgPAMgOAAQgMAAgHgJgAG1C1IA2ixQAKgfgBgNQAAgGgDgDQgHgEgJgBQgGAAgQAEIgCgMIBjgPIgpCKQAyhVAqgiQAXgUAOABQAKgBAGAGQAEAFAAALQAAATgJARQgIANgMAAQgGABgFgFQgFgEgBgJQgBgFgBgCQgDgCgEgBQgEABgFACQgHADgPATQgYAbgcAtQgMATgIAYQgNAhgCAHIgJAjgAprCPg");
	this.shape_2.setTransform(-23.4,2.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AnQCxIAEgJQAUgBAHgDQAKgEAFgIQAIgLAJghIA/jVQAIgaAAgPQgBgGgDgFQgEgFgGgCQgHgDgUAAIADgJIEUAAIgbBZIgKAAQADgQABgLQAAgRgKgKQgKgKgOgEQgLgDgkAAIhGAAIgqCNIAuAAQAgAAAQgKQAPgJAQggIAKAAIglCAIgKAAQAEgPAAgLQAAgQgLgIQgLgJgcAAIgvAAIgfBrQgJAcAAAKQAAAJAHAGQAIAFAcACIgDAJgAC3A1IAAgVIEaAAIAAAVgAC3gfIAAgWIEaAAIAAAWg");
	this.shape_3.setTransform(-77.75,-0.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fkNN, new cjs.Rectangle(-126.7,-29,236.5,54.9), null);


(lib.chSpring = function(mode,startPosition,loop) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKCNQBJgGAqgNIhUAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAgBAAgBIAAhaQABgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIB5AAIAAgKIiXAAIAAgYIFLAAIAAAYIiYAAIAAAKIB2AAQABABABAAQABAAAAABQABAAAAAAQAAABAAAAIAABaQAAAEgEAAIhWAAQAwADBEAOIgHAcQhEgRgqAAIABgcIhhAAIAGAcQgwAPhFAEgAC+BkIBdAAIABgCIAAgMIheAAgABCBkIBgAAIAAgOIhgAAgAC+A/IBeAAIAAgPIheAAgABCA/IBgAAIAAgPIhgAAgAiQClIAAg3IhbAAIAAgcIBbAAIAAgWIhQAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAgBAAgBIAAh1QABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIC+AAQAEACAAABIAAB1QAAAEgEAAIhQAAIAAAWIBhAAIAAAcIhhAAIAAA3gAhyAjIA3AAIABgBIAAgaIg4AAgAjHAjIA3AAIAAgbIg3AAgAhygOIA4AAIAAgYIg4AAgAjHgOIA3AAIAAgYIg3AAgAlSCcIgBggQAmALAOgGQAFgBACgIQADgJgChMQAAgEgEAAIgcAAIAAAHIgegBIAAhoIADgFIAEgCIAyAAIAAgyQAAgEgFAAIgyAAIAAgeIBPAAQAFABAAAFIAABwIgdAAIAAgEIgXAAIgDABIgBADIAAAoIA1AAQAHABAAAGQACBngEARQgCASgOAKQgKAHgSAAQgRAAgYgGgABkgUQgKAAAAgKIAAgYIhMAAIAAgYIBMAAIAAgIIAcAAIAAAIIB1AAIAAgIIAcAAIAAAIIBMAAIAAAYIhMAAIAAAYQgBAKgKAAgAB2gtQACAEABAAIBuAAQAEAAAAgEIAAgJIh1AAgAh4hPQgDAAAAgEIAAhLQABAAAAgBQAAgBABAAQAAAAABgBQAAAAAAAAIBXAAQAFACAAABIAABLQAAAEgFAAgAhfhoIAlAAIABgCIAAgdIgmAAgAjjhPQgDAAAAgEIAAhLQABAAAAgBQAAgBABAAQAAAAABgBQAAAAAAAAIBXAAQAFACAAABIAABLQAAAEgFAAgAjJhoIAkAAIACgCIAAgdIgmAAgAClhmQAZgaANgoIAcANQgCAHgEAGIBzAAIAAAZIg7AAIAJAWIgXAKIgOggIgpAAIgCAEQgMASgOAOQgLgPgIgGgAAKhmQAfgaAOgoIAbAOQgFAFgBAFIBhAAIAAAZIgwAAQAGAKABANIgYAHIgJgeIgmAAQgRAagRAMQgJgPgIgGg");
	this.shape.setTransform(70.025,0.025);

	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(69.2,0,1.8005,0.3399,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnS},{t:this.shape}]}).wait(1));

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

}).prototype = getMCSymbolPrototype(lib.chSpring, new cjs.Rectangle(-22,-20.7,182,38.7), null);


(lib.chArrow = function(mode,startPosition,loop) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVCEQAigEAegVIAPAbQgmAWglAGQAAgRgEgNgABhCJIAMgaQAZAHAiARIgLAZQglgSgXgFgAinB5QA1gGAfgIQAPgwAFgfIAcAHQgFAcgJAiIAegKIAMAcQg9AXhZANgAiXAnIAegIQAMAeAFAnIgeAHQgGgqgLgagAAHBqQgDAAAAgFIAAjIQAAgEADAAIAoAAQALgYACgFIg+AAIAAgdIClAAIAAAdIhKAAQgCAHgEAJQgEAHgBAGIBJAAQAEAAAAAEIAADIQAAAFgEAAgAAgBMIAAABIBdAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIAAgfIhfAAgAAgARIBfAAIAAgfIhfAAgAAggqIBfAAIAAghIgCAAIhdAAgAiZARQgFAAABgEIAAh0QgBgEAFAAIB6AAQAEAAAAAEIAAB0QAAAEgEAAgAiAgMQAAABAAAAQAAAAAAAAQABABAAAAQAAAAAAAAIBGAAIABgCIAAhDIgBAAIhGAAIgBAAgAijiEIAAgdICQAAIAAAdg");
	this.shape.setTransform(92.85,0.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA+CgIAAgfQAsAMAKgJQACgEAAgGIAAiWIAgAAIAACfQgBAVgQAKQgKAFgQAAQgSAAgbgHgAhZCgIgBggQAZAIANAAIAMgCQAGgGAAgIIAAgNIhbAAIAAA1IgdAAIAAiwQABgKAJAAICCAAQAKAAAAAKIAACRQAAAUgOAKQgIAGgUAAQgRAAgagFgAh9BPIBbAAIAAgZIhbAAgAh9ADIAAAWIBbAAIAAgWQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIhXAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAABgAAiBvIAAh7IAeAAIAAB7gAikgmIAAgeIBtAAIgBgDQgFgMAAgFIAdgFQACANAFAMIA+AAQAHgMAFgRIAaALIgHASIBkAAIAAAegABLh2IgpAAIAAABQgLARgKAKIgYgRQAYgaANghIAaAKIgDAJIBvAAIAAAdIg1AAIALATIgYANQgKgUgJgMgAinhuQAggXARghIAaAOIgEAFIBVAAIAAAdIgsAAIAJAQIgbAMQgHgTgFgJIgdAAIgfAdg");
	this.shape_1.setTransform(56.85,-0.1052);

	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(69.2,0,1.8005,0.3399,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnS},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// checker
	this.checker = new lib.checker();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(3,1,1).p("AiViVIErAAIAAErIkrAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AiVCWIAAkrIErAAIAAErg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.chArrow, new cjs.Rectangle(-22,-20.7,182,40.7), null);


(lib.chArea = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(69.2,0,1.8005,0.3399,0,0,0,0.1,0);
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
	this.shape_2.graphics.f("#FFFFFF").s().p("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");
	this.shape_2.setTransform(88.7,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chArea, new cjs.Rectangle(-22,-20.7,182,38.7), null);


// stage content:
(lib.myAnimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// UI
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("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");
	this.shape.setTransform(80.475,834.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AEABhQgSgdAAhIQAAhFARgYQANgTAYAAQAXABAPASQAQAYAABEQAABDgQAeQgOAZgYAAQgYAAgMgUgAERhRQgLAUAAA5QAABBALAUQAIAMALAAQAMAAAIgNQALgVAAhAQgBg4gMgUQgIgLgKAAQgMAAgHALgAk+BhQgSgdAAhIQAAhFAQgYQANgTAZAAQAWABAPASQAQAYAABEQAABDgQAeQgOAZgXAAQgZAAgLgUgAkuhRQgLAUAAA5QAABBALAUQAIAMAMAAQALAAAIgNQALgVAAhAQgBg4gLgUQgIgLgKAAQgNAAgHALgAGDBxIAAgXIAlAAIAAiqIgnARIAAgYIA/gbIAADMIAlAAIAAAXgAASBxIAAg2IhOAAIAAgKIBGijIAgAAIAACYIAaAAIAAAVIgaAAIAAA2gAggAmIAyAAIAAhzgAjEBxIAAgSQAAgpAvgqQAtglAAgcQAAgSgHgKQgKgLgLAAQgRAAgIAKQgLANAAAYIgXAAQAAgkAQgSQAQgRAbAAQAXAAAOARQAPAPAAAfQAAAng0AvQgoAkAAAVIBbAAIAAAXgAnkBxIAAgSQAAgpAwgqQAsglAAgcQAAgSgGgKQgKgLgMAAQgQAAgIAKQgMANAAAYIgXAAQAAgkARgSQAPgRAbAAQAXAAAPARQAOAPAAAfQAAAng0AvQgoAkAAAVIBbAAIAAAXgAB/BjIAAgiIAjAAIAAAig");
	this.shape_1.setTransform(185.641,840.8594,0.6,0.6);

	this.fkNN = new lib.fkNN();
	this.fkNN.name = "fkNN";
	this.fkNN.parent = this;
	this.fkNN.setTransform(1372.45,145.6,1.6,1.6);

	this.chArrow = new lib.chArrow();
	this.chArrow.name = "chArrow";
	this.chArrow.parent = this;
	this.chArrow.setTransform(1366.7,537.3);

	this.btnLookDown = new lib.btnLookDown();
	this.btnLookDown.name = "btnLookDown";
	this.btnLookDown.parent = this;
	this.btnLookDown.setTransform(1236,849.95,0.8,0.8);
	new cjs.ButtonHelper(this.btnLookDown, 0, 1, 2, false, new lib.btnLookDown(), 3);

	this.chSpring = new lib.chSpring();
	this.chSpring.name = "chSpring";
	this.chSpring.parent = this;
	this.chSpring.setTransform(1366.7,593.55);

	this.title = new lib.title();
	this.title.name = "title";
	this.title.parent = this;
	this.title.setTransform(370,90);

	this.clock = new lib.clock();
	this.clock.name = "clock";
	this.clock.parent = this;
	this.clock.setTransform(1308.9,649.8);

	this.gravityNN = new lib.gravityNN();
	this.gravityNN.name = "gravityNN";
	this.gravityNN.parent = this;
	this.gravityNN.setTransform(1343.7,145.05,1.6,1.6);

	this.chArea = new lib.chArea();
	this.chArea.name = "chArea";
	this.chArea.parent = this;
	this.chArea.setTransform(1366.7,649.8);

	this.btnGo = new lib.btnGo();
	this.btnGo.name = "btnGo";
	this.btnGo.parent = this;
	this.btnGo.setTransform(1432.85,736,1.2,1.2);
	new cjs.ButtonHelper(this.btnGo, 0, 1, 2, false, new lib.btnGo(), 3);

	this.btnReset = new lib.btnReset();
	this.btnReset.name = "btnReset";
	this.btnReset.parent = this;
	this.btnReset.setTransform(1432.85,736,1.2,1.2);
	new cjs.ButtonHelper(this.btnReset, 0, 1, 2, false, new lib.btnReset(), 3);

	this.slR1R2 = new lib.slR1R2();
	this.slR1R2.name = "slR1R2";
	this.slR1R2.parent = this;
	this.slR1R2.setTransform(1360.8,438);

	this.slNN02 = new lib.slNN02();
	this.slNN02.name = "slNN02";
	this.slNN02.parent = this;
	this.slNN02.setTransform(1360.8,347.75);

	this.slNN01 = new lib.slNN01();
	this.slNN01.name = "slNN01";
	this.slNN01.parent = this;
	this.slNN01.setTransform(1360.8,296.45);

	this.btnLeft = new lib.theBtnLeft();
	this.btnLeft.name = "btnLeft";
	this.btnLeft.parent = this;
	this.btnLeft.setTransform(1799,730);

	this.btnRight = new lib.theBtnRight();
	this.btnRight.name = "btnRight";
	this.btnRight.parent = this;
	this.btnRight.setTransform(1949,730);

	this.btnDown = new lib.theBtnDown();
	this.btnDown.name = "btnDown";
	this.btnDown.parent = this;
	this.btnDown.setTransform(1874,730);

	this.btnUp = new lib.theBtnUp();
	this.btnUp.name = "btnUp";
	this.btnUp.parent = this;
	this.btnUp.setTransform(1874,655);

	this.slCameraRR = new lib.theSlider();
	this.slCameraRR.name = "slCameraRR";
	this.slCameraRR.parent = this;
	this.slCameraRR.setTransform(1350,850);

	this.btn02 = new lib.theButton();
	this.btn02.name = "btn02";
	this.btn02.parent = this;
	this.btn02.setTransform(1949,550);

	this.btn01 = new lib.theButton();
	this.btn01.name = "btn01";
	this.btn01.parent = this;
	this.btn01.setTransform(1799,550);

	this.ch02 = new lib.theCheckbox();
	this.ch02.name = "ch02";
	this.ch02.parent = this;
	this.ch02.setTransform(1866.2,440.55,1,1,0,0,0,67.2,-1.4);

	this.ch01 = new lib.theCheckbox();
	this.ch01.name = "ch01";
	this.ch01.parent = this;
	this.ch01.setTransform(1866.2,368.4,1,1,0,0,0,67.2,-1.4);

	this.sl03 = new lib.theSlider();
	this.sl03.name = "sl03";
	this.sl03.parent = this;
	this.sl03.setTransform(1799,283.45);

	this.sl02 = new lib.theSlider();
	this.sl02.name = "sl02";
	this.sl02.parent = this;
	this.sl02.setTransform(1799,202.95);

	this.sl01 = new lib.theSlider();
	this.sl01.name = "sl01";
	this.sl01.parent = this;
	this.sl01.setTransform(1799,122.45);

	this.nBG = new lib.nBG();
	this.nBG.name = "nBG";
	this.nBG.parent = this;
	this.nBG.setTransform(1260,268.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nBG},{t:this.sl01},{t:this.sl02},{t:this.sl03},{t:this.ch01},{t:this.ch02},{t:this.btn01},{t:this.btn02},{t:this.slCameraRR},{t:this.btnUp},{t:this.btnDown},{t:this.btnRight},{t:this.btnLeft},{t:this.slNN01},{t:this.slNN02},{t:this.slR1R2},{t:this.btnReset},{t:this.btnGo},{t:this.chArea},{t:this.gravityNN},{t:this.clock},{t:this.title},{t:this.chSpring},{t:this.btnLookDown},{t:this.chArrow},{t:this.fkNN},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// btn3D
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("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");
	this.shape_2.setTransform(101.2,875.708);

	this.btn3D = new lib.btn3D();
	this.btn3D.name = "btn3D";
	this.btn3D.parent = this;
	new cjs.ButtonHelper(this.btn3D, 0, 1, 2, false, new lib.btn3D(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn3D},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(800,450,1273,450);
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