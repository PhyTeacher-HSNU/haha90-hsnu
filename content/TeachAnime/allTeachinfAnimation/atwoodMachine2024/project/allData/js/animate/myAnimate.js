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
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(8,1,1).p("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");
	this.shape_1.setTransform(0.025,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("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");
	this.shape_2.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.title, new cjs.Rectangle(-239.6,-47.8,479.29999999999995,95.69999999999999), null);


(lib.letterABCD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAbBmIAAgGQAMgBAEgDQAEgDAAgFQAAgGgFgOIgNgdIhLAAIgOAgQgFALAAAGQAAAEAEAEQAEADAPABIAAAGIg/AAIAAgGQANgCADgDQAIgIAJgVIBGijIAEAAIBFClQAIATAIAGQAGAHANAAIAAAGgAgqAYIBDAAIghhPg");
	this.shape.setTransform(-0.05,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhYBjIAAgFIAHAAQANAAAFgIQADgFAAgRIAAh/QAAgTgEgFQgGgGgLAAIgHAAIAAgFIBWAAQAXAAAOADQAWAFAMAOQALANAAASQAAAPgJALQgJAMgSAGQAVADAKAKQAOANAAAUQAAAPgJANQgJAOgRAGQgQAGgiAAgAgfADIAABSQARAEAPAAQAbAAAOgMQANgMAAgSQAAgLgGgLQgGgLgOgGQgPgGgUAAIgPAAIgKABgAgfhVIAABMIAMACIAPAAQAVAAAKgFQALgEAGgKQAGgJAAgMQAAgRgPgMQgOgNgaAAQgPAAgLAEg");
	this.shape_1.setTransform(-0.575,0.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhEBDQgUgbAAglQAAgdANgZQANgZAYgNQAXgOAbAAQAVAAAVALQAGADADAAQAEAAADgDQAEgEABgHIAFAAIAFBEIgFAAQgJgfgRgNQgQgNgYAAQgTAAgQAKQgQAKgJAWQgJAWAAAfQAAAbAJAUQAIAUASAKQARALAVAAQAUAAAOgIQAPgJASgYIAEADQgOAagUAMQgUANgcAAQgwAAgbglg");
	this.shape_2.setTransform(0.025,0.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhjBjIAAgFIAHAAQANAAAFgIQAEgFAAgRIAAh/QAAgTgFgFQgFgGgMAAIgHAAIAAgFIBRAAQArAAAYAKQAXAKAOAXQAOAYAAAfQAAAogZAcQgcAfg5AAgAgqhTIAACoQATAEAMAAQAhAAAXgYQAWgYAAgpQAAgogWgYQgXgXgiAAQgNAAgRAEg");
	this.shape_3.setTransform(-0.35,0.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAuBjIhChdIgMABIgFAAIgEgBIAAA6QAAATAEAEQAGAHALAAIAHAAIAAAFIhVAAIAAgFIAIAAQAMAAAGgIQADgFAAgRIAAh/QAAgTgEgFQgGgGgLAAIgIAAIAAgFIBJAAQAeAAAPAEQAPAFALAMQAKANAAARQAAASgMAOQgMANgZAFIApA5QAPATAKAHQAKAGAQACIAAAFgAgphUIAABSIAFAAIADAAQAdAAANgMQAOgMAAgTQAAgTgLgMQgMgLgSAAQgJAAgOADg");
	this.shape_4.setTransform(0.375,0.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhVBjIAAgFIAIAAQAMAAAGgIQADgFAAgRIAAh/QAAgTgEgFQgGgGgLAAIgIAAIAAgFIBZAAIAAAFQgPAAgGADQgGADgDAFQgCAEAAASIAAB8QAAAMACAFQADADADABQADACATAAIAPAAQAWAAAJgEQAJgDAIgJQAIgIAIgTIAEABIgQA2g");
	this.shape_5.setTransform(-0.05,0.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[]},1).wait(1));

	// 圖層_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3,0,1).p("AAdAjIhMAAIgNAgQgFALAAAGQAAAEAEAEQAEADAPABIAAAGIg/AAIAAgGQANgCADgDQAIgHAJgWIBGijIAEAAIBFClQAJAUAGAGQAHAGANAAIAAAGIhPAAIAAgGQAMAAAEgEQAEgDAAgFQAAgGgGgOgAAZAYIghhPIgiBPg");
	this.shape_6.setTransform(-0.05,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAbBmIAAgGQAMgBAEgDQAEgDAAgFQAAgGgFgOIgNgdIhLAAIgOAgQgFALAAAGQAAAEAEAEQAEADAPABIAAAGIg/AAIAAgGQANgCADgDQAIgIAJgVIBGijIAEAAIBFClQAIATAIAGQAGAHANAAIAAAGgAgqAYIBDAAIghhPg");
	this.shape_7.setTransform(-0.05,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(3,0,1).p("AgfgJQAFABAHABQAHAAAIAAQAVAAAKgFQALgEAGgKQAGgJAAgMQAAgRgPgMQgOgNgaAAQgPAAgLAEgAAsgBQAVADAKAKQAOANAAAUQAAAPgJANQgJAOgRAGQgQAGgiAAIhcAAIAAgFIAHAAQANAAAFgIQADgFAAgRIAAh/QAAgTgEgFQgGgGgLAAIgHAAIAAgFIBWAAQAXAAAOADQAWAFAMAOQALANAAASQAAAPgJALQgJAMgSAGgAgfBVQARAEAPAAQAbAAAOgMQANgMAAgSQAAgLgGgLQgGgLgOgGQgPgGgUAAQgJAAgGAAQgGABgEAAg");
	this.shape_8.setTransform(-0.575,0.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhYBjIAAgFIAHAAQANAAAFgIQADgFAAgRIAAh/QAAgTgEgFQgGgGgLAAIgHAAIAAgFIBWAAQAXAAAOADQAWAFAMAOQALANAAASQAAAPgJALQgJAMgSAGQAVADAKAKQAOANAAAUQAAAPgJANQgJAOgRAGQgQAGgiAAgAgfADIAABSQARAEAPAAQAbAAAOgMQANgMAAgSQAAgLgGgLQgGgLgOgGQgPgGgUAAIgPAAIgKABgAgfhVIAABMIAMACIAPAAQAVAAAKgFQALgEAGgKQAGgJAAgMQAAgRgPgMQgOgNgaAAQgPAAgLAEg");
	this.shape_9.setTransform(-0.575,0.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(3,0,1).p("ABQhnIAFBEIgFAAQgJgfgRgNQgQgNgYAAQgTAAgQAKQgQAKgJAWQgJAWAAAfQAAAbAJAUQAIAUASAKQARALAVAAQAUAAAOgIQAPgJASgYIAEADQgOAagUAMQgUANgcAAQgwAAgbglQgUgbAAglQAAgdANgZQANgZAYgNQAXgOAbAAQAVAAAVALQAGADADAAQAEAAADgDQAEgEABgHg");
	this.shape_10.setTransform(0.025,0.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhEBDQgUgbAAglQAAgdANgZQANgZAYgNQAXgOAbAAQAVAAAVALQAGADADAAQAEAAADgDQAEgEABgHIAFAAIAFBEIgFAAQgJgfgRgNQgQgNgYAAQgTAAgQAKQgQAKgJAWQgJAWAAAfQAAAbAJAUQAIAUASAKQARALAVAAQAUAAAOgIQAPgJASgYIAEADQgOAagUAMQgUANgcAAQgwAAgbglg");
	this.shape_11.setTransform(0.025,0.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(3,0,1).p("AgqBVQASAEANAAQAhAAAWgYQAXgYAAgpQAAgogXgYQgWgXgiAAQgOAAgQAEgAhjBjIAAgFIAHAAQANAAAFgIQADgFAAgRIAAh/QAAgTgEgFQgFgGgMAAIgHAAIAAgFIBRAAQAsAAAXAKQAXAKAOAXQAOAYAAAfQAAAogZAcQgcAfg5AAg");
	this.shape_12.setTransform(-0.35,0.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhjBjIAAgFIAHAAQANAAAFgIQAEgFAAgRIAAh/QAAgTgFgFQgFgGgMAAIgHAAIAAgFIBRAAQArAAAYAKQAXAKAOAXQAOAYAAAfQAAAogZAcQgcAfg5AAgAgqhTIAACoQATAEAMAAQAhAAAXgYQAWgYAAgpQAAgogWgYQgXgXgiAAQgNAAgRAEg");
	this.shape_13.setTransform(-0.35,0.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(3,0,1).p("AgpgCQADAAACAAQACAAABAAQAdAAANgMQAOgMAAgTQAAgTgLgMQgMgLgSAAQgJAAgOADgABjBjIg1AAIhChdQgIABgEAAQgCAAgDAAQgCAAgCgBIAAA6QAAATAEAEQAGAHALAAIAHAAIAAAFIhVAAIAAgFIAIAAQAMAAAGgIQADgFAAgRIAAh/QAAgTgEgFQgGgGgLAAIgIAAIAAgFIBJAAQAeAAAPAEQAPAFALAMQAKANAAARQAAASgMAOQgMANgZAFIApA5QAPATAKAHQAKAGAQACg");
	this.shape_14.setTransform(0.375,0.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAuBjIhChdIgMABIgFAAIgEgBIAAA6QAAATAEAEQAGAHALAAIAHAAIAAAFIhVAAIAAgFIAIAAQAMAAAGgIQADgFAAgRIAAh/QAAgTgEgFQgGgGgLAAIgIAAIAAgFIBJAAQAeAAAPAEQAPAFALAMQAKANAAARQAAASgMAOQgMANgZAFIApA5QAPATAKAHQAKAGAQACIAAAFgAgphUIAABSIAFAAIADAAQAdAAANgMQAOgMAAgTQAAgTgLgMQgMgLgSAAQgJAAgOADg");
	this.shape_15.setTransform(0.375,0.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(3,0,1).p("ABRAsIAFABIgRA2IiaAAIAAgFIAIAAQAMAAAGgIQADgFAAgRIAAh/QAAgTgEgFQgGgGgLAAIgIAAIAAgFIBZAAIAAAFQgPAAgGADQgGADgDAFQgCAEAAASIAAB8QAAAMACAFQACADAEABQADACATAAIAPAAQAWAAAKgEQAJgDAHgJQAIgIAIgTg");
	this.shape_16.setTransform(-0.05,0.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhVBjIAAgFIAIAAQAMAAAGgIQADgFAAgRIAAh/QAAgTgEgFQgGgGgLAAIgIAAIAAgFIBZAAIAAAFQgPAAgGADQgGADgDAFQgCAEAAASIAAB8QAAAMACAFQADADADABQADACATAAIAPAAQAWAAAJgEQAJgDAIgJQAIgIAIgTIAEABIgQA2g");
	this.shape_17.setTransform(-0.05,0.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,-11.6,24.1,23.7);


(lib.letter123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjBlIAAgFQAOAAAFgDQAEgCABgDQACgEAAgSIAAhqQAAgWgCgGQgBgFgCgCQgDgCgEAAQgFAAgKAFIgCgFIAvgXIAFAAIAACmQAAARACAEQABAEAEACQAFADANAAIAAAFg");
	this.shape.setTransform(-0.075,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhABlIAAgFQAzgvAUgeQAVgdAAgZQAAgTgLgMQgMgMgPAAQgPAAgLAJQgMAIgGARIgFAAQAEgbAPgPQAPgOAXAAQAXAAAQAPQARAQgBAVQABAPgIAPQgKAXgZAaIgtAwIAzAAQARAAAGgBQAGgBAFgEQAGgDADgHIAFAAIgNAmg");
	this.shape_1.setTransform(-0.3,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgwBiQgHgFgBgGQABgEADgDQADgDAFgBIAIACIALAFQAJAFAEABQAEACAHAAQAOgBALgMQALgLAAgQQAAgLgFgLQgEgJgEgDQgHgHgLgEQgKgFgMAAIgEAAIAAgEQALgBALgHQAMgHAFgJQAFgKABgMQAAgOgKgKQgJgKgOAAQgWAAgPAZIgGgCQAJgVAOgKQAMgLASAAQAYAAANAPQAKAMAAANQAAAVgcAYQATAHAJAMQAKAOAAARQgBAagQATQgVAZgoAAQgUAAgHgFg");
	this.shape_2.setTransform(-0.65,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AARBlIAAg0IhTAAIAAgTIBbiCIAQAAIAACAIAbAAIAAAVIgbAAIAAA0gAg0AcIBFAAIAAhig");
	this.shape_3.setTransform(-0.3,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgxBfQgIgGAAgHQAAgFADgDQAEgDAFAAQAEAAADACIAJAGQALAHAMAAQAQAAANgNQANgNAAgSQAAgTgMgPQgLgPgUgJQgQgGgbgBIAmhNIBGAAIgLAZIg7AAIgNAaQAmAGAWAYQAUATAAAaQAAAQgHANQgGANgKAKQgJAJgMAGQgQAIgSAAQgSAAgIgGg");
	this.shape_4.setTransform(-0.275,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiBaQgcgbAAgqQAAgZALgYQALgYATgSQAUgUARgGQATgGAPAAIAJAAIAAAFQgUACgMAGQgMAGgMAMQgLAMgIAOQgIAPgFATQAVgOAUAAQAVAAAPARQAPAPAAAZQAAAZgPAVQgTAZgdAAQgUAAgOgNgAgMgKQgHACgMAIQgDATAAAMQAAAPAFAQQAFAQALAKQAHAHAKAAQANAAAKgMQAKgMAAgXQAAgZgKgSQgKgRgSAAQgFAAgGACg");
	this.shape_5.setTransform(0.075,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	// 圖層_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3,0,1).p("AgmhNIAvgXIAFAAIAACmQAAARACAEQABAEAEACQAFADANAAIAAAFIhKAAIAAgFQAOAAAFgDQAEgCABgDQACgEAAgSIAAhqQAAgWgCgGQgBgFgCgCQgDgCgEAAQgFAAgKAFg");
	this.shape_6.setTransform(-0.075,0.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgjBlIAAgFQAOAAAFgDQAEgCABgDQACgEAAgSIAAhqQAAgWgCgGQgBgFgCgCQgDgCgEAAQgFAAgKAFIgCgFIAvgXIAFAAIAACmQAAARACAEQABAEAEACQAFADANAAIAAAFg");
	this.shape_7.setTransform(-0.075,0.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(3,0,1).p("ABCA/IgPAmIh0AAIAAgFQA0gvAUgeQAVgdAAgZQAAgTgLgMQgMgMgPAAQgPAAgLAJQgMAIgGARIgFAAQAEgbAPgPQAPgOAXAAQAXAAARAPQAQAQAAAVQAAAPgIAPQgKAXgZAaQgkAogJAIIAzAAQARAAAGgBQAGgBAFgEQAFgDAEgHg");
	this.shape_8.setTransform(-0.3,0.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhABlIAAgFQAzgvAUgeQAVgdAAgZQAAgTgLgMQgMgMgPAAQgPAAgLAJQgMAIgGARIgFAAQAEgbAPgPQAPgOAXAAQAXAAAQAPQARAQgBAVQABAPgIAPQgKAXgZAaIgtAwIAzAAQARAAAGgBQAGgBAFgEQAGgDADgHIAFAAIgNAmg");
	this.shape_9.setTransform(-0.3,0.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(3,0,1).p("Ag1g9QAJgUANgKQANgLASAAQAZAAAMAPQAKAMAAANQAAAVgbAYQASAHAJAMQAKANAAATQAAAagRATQgVAYgoAAQgUAAgHgFQgIgFAAgFQAAgFAEgDQAEgDAFAAQADAAAEABQACABAJAEQAJAFADABQAFACAHAAQAOAAALgMQALgMAAgQQAAgLgFgMQgEgHgEgEQgHgHgLgEQgKgFgMAAIgEAAIAAgEQALgBALgHQAMgHAFgKQAGgJAAgMQAAgPgKgJQgKgKgNAAQgWAAgQAZg");
	this.shape_10.setTransform(-0.65,0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgwBiQgHgFgBgGQABgEADgDQADgDAFgBIAIACIALAFQAJAFAEABQAEACAHAAQAOgBALgMQALgLAAgQQAAgLgFgLQgEgJgEgDQgHgHgLgEQgKgFgMAAIgEAAIAAgEQALgBALgHQAMgHAFgJQAFgKABgMQAAgOgKgKQgJgKgOAAQgWAAgPAZIgGgCQAJgVAOgKQAMgLASAAQAYAAANAPQAKAMAAANQAAAVgcAYQATAHAJAMQAKAOAAARQgBAagQATQgVAZgoAAQgUAAgHgFg");
	this.shape_11.setTransform(-0.65,0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(3,0,1).p("ABEAcIAAAVIgbAAIAAA0IgYAAIAAg0IhUAAIAAgTIBciCIAQAAIAACAgAARAcIAAhiIhFBig");
	this.shape_12.setTransform(-0.3,0.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AARBlIAAg0IhTAAIAAgTIBbiCIAQAAIAACAIAbAAIAAAVIgbAAIAAA0gAg0AcIBFAAIAAhig");
	this.shape_13.setTransform(-0.3,0.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(3,0,1).p("AA6hkIgLAZIg7AAIgNAaQAmAGAWAXQAUAUAAAaQAAAQgHANQgGAOgKAJQgJAJgMAGQgQAIgSAAQgSAAgIgGQgIgGAAgHQAAgEADgDQAEgEAFAAQAEAAADACQACABAHAFQALAHAMAAQAQAAANgNQANgNAAgTQAAgSgMgPQgLgPgUgJQgQgGgbgBIAmhNg");
	this.shape_14.setTransform(-0.275,0.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgxBfQgIgGAAgHQAAgFADgDQAEgDAFAAQAEAAADACIAJAGQALAHAMAAQAQAAANgNQANgNAAgSQAAgTgMgPQgLgPgUgJQgQgGgbgBIAmhNIBGAAIgLAZIg7AAIgNAaQAmAGAWAYQAUATAAAaQAAAQgHANQgGANgKAKQgJAJgMAGQgQAIgSAAQgSAAgIgGg");
	this.shape_15.setTransform(-0.275,0.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(3,0,1).p("AA7hmIAAAFQgUACgMAGQgMAFgMAMQgLAMgIAPQgIAOgFAUQAVgOAUAAQAVAAAPAQQAPAQAAAaQAAAZgPAUQgTAZgdAAQgUAAgOgNQgcgaAAgqQAAgaALgYQALgYATgTQAUgTARgGQATgGAPAAgAgfAAQgDATAAAMQAAAPAFAQQAFARALAJQAHAHAKAAQANAAAKgMQAKgMAAgWQAAgagKgSQgKgRgSAAQgFAAgGACQgHACgMAIg");
	this.shape_16.setTransform(0.075,0.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgiBaQgcgbAAgqQAAgZALgYQALgYATgSQAUgUARgGQATgGAPAAIAJAAIAAAFQgUACgMAGQgMAGgMAMQgLAMgIAOQgIAPgFATQAVgOAUAAQAVAAAPARQAPAPAAAZQAAAZgPAVQgTAZgdAAQgUAAgOgNgAgMgKQgHACgMAIQgDATAAAMQAAAPAFAQQAFAQALAKQAHAHAKAAQANAAAKgMQAKgMAAgXQAAgZgKgSQgKgRgSAAQgFAAgGACg");
	this.shape_17.setTransform(0.075,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-11.6,16.5,23.6);


(lib.btnReset = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADDBqQgZgZAAguQAAguAZgaQAXgaAoAAQAlAAAXAZQAZAagBAtIAAAIIiLAAQABAfAQARQAQAQAYAAQARAAAMgJQAMgJAHgUIAhAEQgIAcgUAQQgVAQghAAQgpAAgXgZgADdgXQgPAPgBAXIBoAAQgCgWgKgMQgPgSgYAAQgWAAgPAOgAAMB0QgRgPgGgeIAegFQADATAMAKQAMAKAVAAQAXAAAKgJQAKgJAAgMQABgKgKgHQgGgEgagGQgjgJgNgGQgOgHgGgLQgHgMAAgMQABgNAFgKQAFgLAKgHQAHgGANgDQAMgEAPAAQAWAAARAGQARAHAHAKQAIALADASIgfAEQgCgOgKgIQgKgIgTAAQgWAAgIAHQgKAHAAAKQAAAGAEAFQADAEAJADIAcAJQAhAJAOAFQANAGAHALQAIALAAAQQAAAQgJAOQgJAOgRAHQgSAIgWAAQgkAAgUgPgAi5BqQgYgZAAguQAAguAYgaQAYgaAnAAQAmAAAXAZQAZAaAAAtIgBAIIiLAAQACAfAPARQAQAQAYAAQAQAAANgJQAMgJAHgUIAhAEQgHAcgWAQQgVAQggAAQgpAAgYgZgAiegXQgPAPgCAXIBpAAQgCgWgKgMQgPgSgZAAQgVAAgPAOgAGUB8QgJgGgFgIQgDgJAAgdIAAhqIgYAAIAAgZIAYAAIAAguIAfgTIAABBIAgAAIAAAZIggAAIAABsQAAANACAEQABAEAEACQAEADAHAAIAOgCIAEAcQgNADgKAAQgRAAgKgFgAkNB/Igjg2QgOgXgKgMQgKgNgIgFQgHgFgIgBQgGgCgNAAIgoAAIAABzIgiAAIAAkBIByAAQAjAAASAHQASAHAKASQALARAAAVQABAcgTATQgRARgmAGQAOAGAIAGQAOAOAOAVIAtBGgAmkgQIBJAAQAYAAANgFQANgFAIgKQAGgLAAgNQAAgSgNgMQgOgLgcAAIhSAAg");
	this.shape.setTransform(-0.1,0,1.0999,1.0999,0,0,0,-0.1,0);

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


(lib.btnGo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj8B1QgfgQgQgfQgQgfAAgmQAAgkAQghQAQghAdgQQAegPAnAAQAcAAAWAJQAXAJAMAQQAOAQAGAaIgfAJQgFgUgJgLQgJgMgPgGQgQgHgUAAQgXAAgSAHQgQAHgLAMQgKALgHAOQgJAYAAAcQAAAhAMAYQALAXAXALQAXALAaAAQAWAAAVgIQAUgJALgJIAAgwIhLAAIAAgeIBtAAIAABfQgZAUgbAKQgaAKgdAAQglAAgggQgAgSBsQgXgZAAgwQAAgyAcgZQAXgVAjAAQAmAAAZAZQAZAZgBAsQABAkgMAVQgKAUgVAMQgVALgYAAQgnAAgYgZgAAFgRQgOARAAAjQAAAkAOASQAQASAYAAQAYAAAPgSQAQgSAAglQAAgigQgRQgPgSgYAAQgYAAgQASgAEWCBIAAgkIAkAAIAAAkgACyCBIAAgkIAkAAIAAAkgAEeBBIgKiIIAAg5IAoAAIAAA5IgJCIgAC6BBIgKiIIAAg5IAnAAIAAA5IgJCIg");
	this.shape.setTransform(0.0397,0,1.2,1.2);

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


(lib.chAutoHide = function(mode,startPosition,loop) {
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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("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");
	this.shape_2.setTransform(80,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chAutoHide, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


(lib.textureABCD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.letterABCD = new lib.letterABCD();
	this.letterABCD.name = "letterABCD";
	this.letterABCD.parent = this;
	this.letterABCD.setTransform(15.05,15);

	this.timeline.addTween(cjs.Tween.get(this.letterABCD).wait(1));

}).prototype = getMCSymbolPrototype(lib.textureABCD, new cjs.Rectangle(3,3.4,24.1,23.3), null);


(lib.eqTT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.tA = new lib.letterABCD();
	this.tA.name = "tA";
	this.tA.parent = this;
	this.tA.setTransform(84.3,16.5);

	this.timeline.addTween(cjs.Tween.get(this.tA).wait(1));

	// 圖層_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFZDLIAEgLIAHAAQAXAAAMgHQAJgFAHgNQAGgNANgrIBSkZIgXAAQgjAAgUAJQgVAJgNAQQgNARgJAfIgLAAIAchqIEuAAIghBqIgKAAQAFgXAAgSQAAgWgNgLQgKgIgqAAIgeAAIhQERQgOAzAAAMQAAAMAJAHQAKAHAXAAIAOAAIgEALgAANDLIAAgLQCXiFAwhKQAXgjAAgmQAAgfgSgTQgUgTgdAAQgqAAgaAoIgKgFQAPgmAdgVQAcgVAiAAQAlAAAaAaQAaAaAAAlQAAAagKAWQgOAiglAqQg5BBhgBUIBjAAQAYAAAQgKQAQgKAGgQIAMAAIgiBPgAq0DLIADgLIAHAAQAYAAAMgHQAIgFAIgNQAGgNANgrIBSkZIgYAAQgiAAgVAJQgVAJgNAQQgNARgIAfIgLAAIAchqIEtAAIggBqIgLAAQAGgXgBgSQABgWgNgLQgKgIgqAAIgfAAIhPERQgPAzAAAMQABAMAIAHQAKAHAYAAIANAAIgEALgAlWBAIAAgYIE8AAIAAAYgAlWgfIAAgYIE8AAIAAAYg");
	this.shape.setTransform(18.3,1.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 圖層_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,0,1).p("AlWg3IE8AAIAAAYIk8AAgADTDLIjGAAIAAgLQCXiFAxhKQAWgjAAgmQAAgfgSgTQgTgTgeAAQgpAAgbAoIgKgFQAPgmAdgVQAcgVAiAAQAlAAAaAaQAaAaAAAlQAAAagJAWQgOAigmAqQg5BBhgBUIBjAAQAYAAAQgKQAQgKAGgQIAMAAgAGIjCIEtAAIggBqIgLAAQAFgXAAgSQAAgWgNgLQgKgIgpAAIgfAAIhPERQgPAzAAAMQAAAMAJAHQAKAHAYAAIANAAIgEALIisAAIADgLIAHAAQAXAAANgHQAIgFAHgNQAHgNAMgrIBTkZIgYAAQgiAAgVAJQgVAJgNAQQgNARgIAfIgLAAgAlWAoIE8AAIAAAYIk8AAgAqGjCIEtAAIggBqIgLAAQAGgXAAgSQAAgWgOgLQgKgIgpAAIgfAAIhPERQgPAzAAAMQAAAMAJAHQAKAHAYAAIANAAIgEALIisAAIADgLIAHAAQAYAAAMgHQAIgFAHgNQAHgNAMgrIBTkZIgYAAQgiAAgVAJQgVAJgNAQQgNARgIAfIgLAAg");
	this.shape_1.setTransform(18.3,1.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AFZDLIAEgLIAHAAQAXAAAMgHQAJgFAHgNQAGgNANgrIBSkZIgXAAQgjAAgUAJQgVAJgNAQQgNARgJAfIgLAAIAchqIEuAAIghBqIgKAAQAFgXAAgSQAAgWgNgLQgKgIgqAAIgeAAIhQERQgOAzAAAMQAAAMAJAHQAKAHAXAAIAOAAIgEALgAANDLIAAgLQCXiFAwhKQAXgjAAgmQAAgfgSgTQgUgTgdAAQgqAAgaAoIgKgFQAPgmAdgVQAcgVAiAAQAlAAAaAaQAaAaAAAlQAAAagKAWQgOAiglAqQg5BBhgBUIBjAAQAYAAAQgKQAQgKAGgQIAMAAIgiBPgAq0DLIADgLIAHAAQAYAAAMgHQAIgFAIgNQAGgNANgrIBSkZIgYAAQgiAAgVAJQgVAJgNAQQgNARgIAfIgLAAIAchqIEtAAIggBqIgLAAQAGgXgBgSQABgWgNgLQgKgIgqAAIgfAAIhPERQgPAzAAAMQABAMAIAHQAKAHAYAAIANAAIgEALgAlWBAIAAgYIE8AAIAAAYgAlWgfIAAgYIE8AAIAAAYg");
	this.shape_2.setTransform(18.3,1.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.eqTT, new cjs.Rectangle(-53.5,-20.9,149.8,49.099999999999994), null);


(lib.eqBlock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.tT = new lib.letterABCD();
	this.tT.name = "tT";
	this.tT.parent = this;
	this.tT.setTransform(20.35,9);

	this.tA = new lib.letterABCD();
	this.tA.name = "tA";
	this.tA.parent = this;
	this.tA.setTransform(177.3,9);

	this.tM1 = new lib.letter123();
	this.tM1.name = "tM1";
	this.tM1.parent = this;
	this.tM1.setTransform(-133.15,-3,1.6,1.6);

	this.tM2 = new lib.letter123();
	this.tM2.name = "tM2";
	this.tM2.parent = this;
	this.tM2.setTransform(81.6,-3,1.6,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tM2},{t:this.tM1},{t:this.tA},{t:this.tT}]}).wait(1));

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Au9D/QgegJgNgPQgNgOAAgPQAAgNAJgNQAIgOAMgJQAIgGAlgVQgNgKAAgNQAAgMAMgNQAMgNAmgPQgggHgTgUQgTgWAAgYQAAgpAkgiQAlggA8AAQAWAAAPAEQAOAFANAJIBPAAIgJAeIgxAAQAGAQAAAOQAAAnghAdQghAeg6AEQgfAJgPAMQgGAGAAAEQAAAGAFAFQAFAFAWAFIA5ANQAvALAPAPQAPAQAAAUQAAAYgSAUQgRAUgiALQgjAMgpAAQgkAAgegJgAvCCiQgMARAAAQQAAATARANQAaASAwABQAqAAAegPQAegOAAgXQAAgLgLgKQgLgKgggHIhbgWQgYALgMARgAt3hTQgWAhAAAkQAAAWAOAOQANAOAUAAQAQABAOgJQAPgJAKgOQAJgPAGgWQAGgYAAgKQAAgXgNgOQgNgOgVAAQghAAgVAigAUkCHQgHgHAAgMQAAgOAHgYIAGgVQgnAyggATQgXAPgWAAQgWAAgPgSQgQgRAAgfQAAgvAcgyQAcg1ArgeQAigZAeAAQASAAAMAJQAMAKAGAVIAKghIAvgHIhADgIgBAHQAAAFADADQADACADABQAEgBAGgEQAMgJATgbIAKAHQgVAfgVAQQgVAQgTAAQgMAAgGgGgAT9hiQgeAZgXAyQgYAvAAAoQAAAUAKALQAKAMANAAQAgAAAlgvQAzg+AAhBQAAgagKgLQgKgLgRAAQgSAAgVARgAP2CGQgHgHAAgLQAAgOAMgqIAbhdIAJgkIABgLQAAgHgDgEQgEgFgEABQgMAAgOAMQgoAmgkBCQgXAsgUBFIgsAAIAyiwQAIgdAAgKQAAgHgDgFQgDgDgFAAQgKAAgLAHQgRAMgcAlQgcAlgPAiQgHAPgcBYIgrAAIA9jWIACgHQAAgHgGgFQgFgGgKABIgVADIgCgKIBlgTIgmCDQAZgtASgYQAcgkAagRQAQgJARAAQAOAAAKAJQAKAJAAAQQAAANgHAYIgVBJQAwhYArgkQAYgUAXAAQANAAAJAJQAIAKAAASQAAASgFASIggByQgLAlAAAEQAAAEADADQABABAAAAQABAAAAABQABAAAAAAQABAAABAAQADAAAHgFQARgOAOgUIAKAGQgHALgTAVQgTAVgNAGQgNAIgLAAQgKAAgHgHgAxiCGQgHgHAAgLQAAgOAMgqIAbhdIAJgkIABgLQAAgHgDgEQgEgFgEABQgMAAgOAMQgoAmgkBCQgXAsgUBFIgsAAIAyiwQAIgdAAgKQAAgHgDgFQgDgDgFAAQgKAAgLAHQgRAMgcAlQgcAlgPAiQgHAPgcBYIgrAAIA9jWIACgHQAAgHgGgFQgFgGgKABIgVADIgCgKIBlgTIgmCDQAZgtASgYQAcgkAagRQAQgJARAAQAOAAAKAJQAKAJAAAQQAAANgHAYIgVBJQAwhYArgkQAYgUAXAAQANAAAJAJQAIAKAAASQAAASgFASIggByQgLAlAAAEQAAAEADADQABABAAAAQABAAAAABQABAAAAAAQABAAABAAQADAAAHgFQARgOAOgUIAKAGQgHALgTAVQgTAVgNAGQgNAIgLAAQgKAAgHgHgAlgCGIADgLIAIAAQAXAAAMgHQAJgFAHgNQAGgNANgrIBSkYIgYAAQgigBgVAKQgVAIgNARQgNARgIAeIgLAAIAchqIEuAAIghBqIgLAAQAGgXAAgSQAAgWgNgKQgKgJgqABIgfAAIhPEQQgOAzAAAMQAAAMAJAHQAJAHAYAAIAOAAIgEALgAqDAYIAAgmID+AAIAAAmgABIgEIAAgYIE8AAIAAAYgABIhkIAAgXIE8AAIAAAXg");
	this.shape.setTransform(26.525,0.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 圖層_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,0,1).p("AkykHIEuAAIghBqIgLAAQAGgXAAgSQAAgVgNgMQgKgIgqAAIgfAAIhPERQgOA0AAAMQAAALAJAHQAJAHAYAAIAOAAIgEALIitAAIADgLIAIAAQAXAAAMgHQAJgFAHgNQAGgNANgqIBSkaIgYAAQgiAAgVAKQgVAIgNARQgNAQgIAfIgLAAgABIgcIE8AAIAAAYIk8AAgABIh8IE8AAIAAAZIk8AAgANEiCIgmCDQAZguASgXQAcgkAagRQAQgJARAAQAOAAAKAJQAKAJAAAPQAAAOgHAYIgVBJQAwhYArgkQAYgUAXAAQANAAAJAJQAIAJAAATQAAARgFATIggByQgLAlAAAEQAAAEADADQACACADAAQADAAAHgFQARgNAOgVIAKAGQgHAMgTAUQgTAVgNAHQgNAHgLAAQgKAAgHgHQgHgHAAgKQAAgOAMgrIAbhdQAJghAAgDQABgGAAgFQAAgHgDgEQgEgFgEAAQgMAAgOANQgoAmgkBCQgXAsgUBFIgsAAIAyiwQAIgdAAgJQAAgJgDgEQgDgDgFAAQgKAAgLAHQgRALgcAmQgcAmgPAhQgHAQgcBXIgrAAIA9jWQACgFAAgDQAAgGgGgFQgFgFgKAAQgDAAgSADIgCgLgAWNiCIhADgQgBAEAAADQAAAFADADQADADADAAQAEAAAGgFQAMgIATgbIAKAHQgVAegVAQQgVAQgTAAQgMAAgGgGQgHgGAAgMQAAgPAHgXIAGgWQgnAyggAUQgXAOgWAAQgWAAgPgRQgQgSAAgfQAAgvAcgyQAcg1ArgfQAigYAeAAQASAAAMAJQAMAJAGAXIAKgigAUkhzQgSAAgVARQgeAZgXAyQgYAwAAAnQAAAUAKAMQAKALANAAQAgAAAlgvQAzg+AAhCQAAgZgKgLQgKgLgRAAgA0UiCIgmCDQAZguASgXQAcgkAagRQAQgJARAAQAOAAAKAJQAKAJAAAPQAAAOgHAYIgVBJQAwhYArgkQAYgUAXAAQANAAAJAJQAIAJAAATQAAARgFATIggByQgLAlAAAEQAAAEADADQACACADAAQADAAAHgFQARgNAOgVIAKAGQgHAMgTAUQgTAVgNAHQgNAHgLAAQgKAAgHgHQgHgHAAgKQAAgOAMgrIAbhdQAJghAAgDQABgGAAgFQAAgHgDgEQgEgFgEAAQgMAAgOANQgoAmgkBCQgXAsgUBFIgsAAIAyiwQAIgdAAgJQAAgJgDgEQgDgDgFAAQgKAAgLAHQgRALgcAmQgcAmgPAhQgHAQgcBXIgrAAIA9jWQACgFAAgDQAAgGgGgFQgFgFgKAAQgDAAgSADIgCgLgAsShCQAAgXgNgOQgNgOgVAAQghAAgVAiQgWAhAAAkQAAAWAOAOQANAPAUAAQAQAAAOgJQAPgIAKgPQAJgOAGgYQAGgWAAgLgAqshwIgJAeIgxAAQAGAQAAAOQAAAnghAdQghAeg6AEQgfAJgPANQgGAFAAAFQAAAFAFAFQAFAFAWAFIA5ANQAvALAPAQQAPAPAAAUQAAAYgSAUQgRAUgiAMQgjALgpAAQgkAAgegJQgegJgNgOQgNgPAAgPQAAgNAJgOQAIgNAMgJQAIgGAlgUQgNgLAAgNQAAgLAMgNQAMgOAmgPQgggHgTgUQgTgVAAgZQAAgqAkghQAlggA8AAQAWAAAPAEQAOAEANAKgAmFgOIAAAmIj+AAIAAgmgAueCGQgYALgMARQgMARAAAQQAAAUARAMQAaASAwAAQAqAAAegNQAegPAAgWQAAgMgLgKQgLgKgggHQgRgDhKgTg");
	this.shape_1.setTransform(26.525,0.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Au9D/QgegJgNgPQgNgOAAgPQAAgNAJgNQAIgOAMgJQAIgGAlgVQgNgKAAgNQAAgMAMgNQAMgNAmgPQgggHgTgUQgTgWAAgYQAAgpAkgiQAlggA8AAQAWAAAPAEQAOAFANAJIBPAAIgJAeIgxAAQAGAQAAAOQAAAnghAdQghAeg6AEQgfAJgPAMQgGAGAAAEQAAAGAFAFQAFAFAWAFIA5ANQAvALAPAPQAPAQAAAUQAAAYgSAUQgRAUgiALQgjAMgpAAQgkAAgegJgAvCCiQgMARAAAQQAAATARANQAaASAwABQAqAAAegPQAegOAAgXQAAgLgLgKQgLgKgggHIhbgWQgYALgMARgAt3hTQgWAhAAAkQAAAWAOAOQANAOAUAAQAQABAOgJQAPgJAKgOQAJgPAGgWQAGgYAAgKQAAgXgNgOQgNgOgVAAQghAAgVAigAUkCHQgHgHAAgMQAAgOAHgYIAGgVQgnAyggATQgXAPgWAAQgWAAgPgSQgQgRAAgfQAAgvAcgyQAcg1ArgeQAigZAeAAQASAAAMAJQAMAKAGAVIAKghIAvgHIhADgIgBAHQAAAFADADQADACADABQAEgBAGgEQAMgJATgbIAKAHQgVAfgVAQQgVAQgTAAQgMAAgGgGgAT9hiQgeAZgXAyQgYAvAAAoQAAAUAKALQAKAMANAAQAgAAAlgvQAzg+AAhBQAAgagKgLQgKgLgRAAQgSAAgVARgAP2CGQgHgHAAgLQAAgOAMgqIAbhdIAJgkIABgLQAAgHgDgEQgEgFgEABQgMAAgOAMQgoAmgkBCQgXAsgUBFIgsAAIAyiwQAIgdAAgKQAAgHgDgFQgDgDgFAAQgKAAgLAHQgRAMgcAlQgcAlgPAiQgHAPgcBYIgrAAIA9jWIACgHQAAgHgGgFQgFgGgKABIgVADIgCgKIBlgTIgmCDQAZgtASgYQAcgkAagRQAQgJARAAQAOAAAKAJQAKAJAAAQQAAANgHAYIgVBJQAwhYArgkQAYgUAXAAQANAAAJAJQAIAKAAASQAAASgFASIggByQgLAlAAAEQAAAEADADQABABAAAAQABAAAAABQABAAAAAAQABAAABAAQADAAAHgFQARgOAOgUIAKAGQgHALgTAVQgTAVgNAGQgNAIgLAAQgKAAgHgHgAxiCGQgHgHAAgLQAAgOAMgqIAbhdIAJgkIABgLQAAgHgDgEQgEgFgEABQgMAAgOAMQgoAmgkBCQgXAsgUBFIgsAAIAyiwQAIgdAAgKQAAgHgDgFQgDgDgFAAQgKAAgLAHQgRAMgcAlQgcAlgPAiQgHAPgcBYIgrAAIA9jWIACgHQAAgHgGgFQgFgGgKABIgVADIgCgKIBlgTIgmCDQAZgtASgYQAcgkAagRQAQgJARAAQAOAAAKAJQAKAJAAAQQAAANgHAYIgVBJQAwhYArgkQAYgUAXAAQANAAAJAJQAIAKAAASQAAASgFASIggByQgLAlAAAEQAAAEADADQABABAAAAQABAAAAABQABAAAAAAQABAAABAAQADAAAHgFQARgOAOgUIAKAGQgHALgTAVQgTAVgNAGQgNAIgLAAQgKAAgHgHgAlgCGIADgLIAIAAQAXAAAMgHQAJgFAHgNQAGgNANgrIBSkYIgYAAQgigBgVAKQgVAIgNARQgNARgIAeIgLAAIAchqIEuAAIghBqIgLAAQAGgXAAgSQAAgWgNgKQgKgJgqABIgfAAIhPEQQgOAzAAAMQAAAMAJAHQAJAHAYAAIAOAAIgEALgAqDAYIAAgmID+AAIAAAmgABIgEIAAgYIE8AAIAAAYgABIhkIAAgXIE8AAIAAAXg");
	this.shape_2.setTransform(26.525,0.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.eqBlock, new cjs.Rectangle(-141.9,-28.5,331.20000000000005,57.7), null);


(lib.eqAAin2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.tA1 = new lib.letterABCD();
	this.tA1.name = "tA1";
	this.tA1.parent = this;
	this.tA1.setTransform(6.4,6.25);

	this.timeline.addTween(cjs.Tween.get(this.tA1).wait(1));

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAdCCQgHgGAAgMQAAgPAHgXIAGgXQgmAzggAUQgXAOgWAAQgWAAgPgRQgQgSAAggQAAguAcgzQAcg0ArgfQAigYAdAAQASAAAMAJQAMAKAGAWIAKgiIAvgHIhADgIgBAGQAAAFADAEQADACADAAQAEABAGgFQAMgIATgbIAKAHQgVAegVAQQgVAQgTAAQgMAAgGgGgAgJhnQgeAagXAwQgYAxAAAnQAAAUAKAMQAKALANAAQAgAAAkgvQAzg+AAhCQAAgZgKgLQgKgLgRAAQgSAAgUARg");
	this.shape.setTransform(-17.625,-4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 圖層_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,0,1).p("ACGiHIhADgQgBAEAAADQAAAFADADQADADADAAQAEAAAGgFQAMgIATgbIAKAHQgVAegVAQQgVAQgTAAQgMAAgGgGQgHgGAAgMQAAgPAHgXIAGgWQgmAyggAUQgXAOgWAAQgWAAgPgRQgQgSAAgfQAAgvAcgyQAcg1ArgeQAigZAdAAQASAAAMAJQAMAJAGAWIAKghgAAdh4QgSAAgUASQgeAZgXAxQgYAwAAAnQAAAUAKAMQAKALANAAQAgAAAkgvQAzg+AAhBQAAgZgKgMQgKgLgRAAg");
	this.shape_1.setTransform(-17.625,-4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAdCCQgHgGAAgMQAAgPAHgXIAGgXQgmAzggAUQgXAOgWAAQgWAAgPgRQgQgSAAggQAAguAcgzQAcg0ArgfQAigYAdAAQASAAAMAJQAMAKAGAWIAKgiIAvgHIhADgIgBAGQAAAFADAEQADACADAAQAEABAGgFQAMgIATgbIAKAHQgVAegVAQQgVAQgTAAQgMAAgGgGgAgJhnQgeAagXAwQgYAxAAAnQAAAUAKAMQAKALANAAQAgAAAkgvQAzg+AAhCQAAgZgKgLQgKgLgRAAQgSAAgUARg");
	this.shape_2.setTransform(-17.625,-4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.eqAAin2, new cjs.Rectangle(-33.5,-20.6,51.9,38.5), null);


(lib.eqAAin1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.tA2 = new lib.letterABCD();
	this.tA2.name = "tA2";
	this.tA2.parent = this;
	this.tA2.setTransform(58.55,-23.5);

	this.tA1 = new lib.letterABCD();
	this.tA1.name = "tA1";
	this.tA1.parent = this;
	this.tA1.setTransform(-27.45,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tA1},{t:this.tA2}]}).wait(1));

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjhIJIAAgLQCYiFAwhLQAXgjgBgmQAAgfgSgTQgTgTgdAAQgqAAgbAoIgKgFQAPgmAdgVQAcgVAiAAQAmAAAZAaQAaAaAAAlQAAAagKAWQgOAigkArQg6BBhgBUIBkAAQAYAAAPgKQAQgKAHgQIAKAAIggBPgAroAEIAAgdIXRAAIAAAdgAgKjMIAAiSIiSAAIAAgYICSAAIAAiSIAXAAIAACSICSAAIAAAYIiSAAIAACSgAFxjUQgGgGAAgMQAAgPAGgXIAGgWQgmAyghAUQgXAOgWAAQgWAAgPgRQgPgSgBgfQAAgvAdgzQAcg0AqgfQAjgZAdAAQASAAAMAJQAMAKAGAWIALgiIAugHIhADhIAAAHQAAAFACADQADADADAAQAEAAAGgFQAMgIATgbIAKAHQgUAegWAQQgVAQgSAAQgNAAgGgGgAFKm9QgeAZgXAxQgXAxAAAnQAAAUAKAMQAKALAMAAQAgAAAlgvQAzg/AAhBQAAgZgKgMQgKgLgQAAQgTAAgVASgAnljUQgGgGAAgMQAAgPAGgXIAGgWQgmAyghAUQgXAOgWAAQgWAAgPgRQgPgSgBgfQAAgvAdgzQAcg0AqgfQAjgZAdAAQASAAAMAJQAMAKAGAWIAKgiIAvgHIhADhIgBAHQAAAFADADQADADADAAQAEAAAGgFQAMgIATgbIAKAHQgUAegWAQQgVAQgSAAQgNAAgGgGgAoMm9QgeAZgXAxQgXAxAAAnQAAAUAKAMQAKALAMAAQAgAAAlgvQAzg/AAhBQAAgZgKgMQgKgLgQAAQgTAAgVASg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 圖層_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,0,1).p("AHaneIg/DhQgBAEAAADQAAAFADADQACADAEAAQADAAAHgFQALgIATgbIAKAHQgUAegWAQQgVAQgSAAQgNAAgGgGQgGgGAAgMQAAgPAGgXIAGgWQgmAyggAUQgXAOgXAAQgVAAgQgRQgPgSAAgfQAAgvAcgzQAcg0ArgfQAigZAdAAQASAAAMAJQAMAKAGAWIALgigAFynPQgTAAgVASQgeAZgXAxQgXAxAAAnQAAAUAKAMQAKALANAAQAfAAAmgvQAyg/AAhBQAAgZgKgMQgJgLgRAAgAgKjMIAAiSIiSAAIAAgYICSAAIAAiSIAXAAIAACSICSAAIAAAYIiSAAIAACSgAgbIJIjGAAIAAgLQCXiFAxhLQAWgjAAgmQAAgfgSgTQgTgTgeAAQgpAAgbAoIgKgFQAPgmAdgVQAcgVAiAAQAlAAAaAaQAaAaAAAlQAAAagKAWQgOAiglArQg5BBhgBUIBjAAQAYAAAQgKQAQgKAGgQIALAAgALqgZI3TAAIAAAdIXTAAgAnlnPQgSAAgVASQgeAZgXAxQgYAxAAAnQAAAUAKAMQAKALANAAQAgAAAlgvQAzg/AAhBQAAgZgKgMQgKgLgRAAgAl8neIhADhQgBAEAAADQAAAFADADQADADADAAQAEAAAGgFQAMgIATgbIAKAHQgVAegVAQQgVAQgTAAQgMAAgGgGQgHgGAAgMQAAgPAHgXIAGgWQgnAyggAUQgXAOgWAAQgWAAgPgRQgQgSAAgfQAAgvAcgzQAcg0ArgfQAigZAeAAQASAAAMAJQAMAKAGAWIAKgig");
	this.shape_1.setTransform(0,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjhIJIAAgLQCYiFAwhLQAXgjgBgmQAAgfgSgTQgTgTgdAAQgqAAgbAoIgKgFQAPgmAdgVQAcgVAiAAQAmAAAZAaQAaAaAAAlQAAAagKAWQgOAigkArQg6BBhgBUIBkAAQAYAAAPgKQAQgKAHgQIAKAAIggBPgAroAEIAAgdIXRAAIAAAdgAgKjMIAAiSIiSAAIAAgYICSAAIAAiSIAXAAIAACSICSAAIAAAYIiSAAIAACSgAFxjUQgGgGAAgMQAAgPAGgXIAGgWQgmAyghAUQgXAOgWAAQgWAAgPgRQgPgSgBgfQAAgvAdgzQAcg0AqgfQAjgZAdAAQASAAAMAJQAMAKAGAWIALgiIAugHIhADhIAAAHQAAAFACADQADADADAAQAEAAAGgFQAMgIATgbIAKAHQgUAegWAQQgVAQgSAAQgNAAgGgGgAFKm9QgeAZgXAxQgXAxAAAnQAAAUAKAMQAKALAMAAQAgAAAlgvQAzg/AAhBQAAgZgKgMQgKgLgQAAQgTAAgVASgAnljUQgGgGAAgMQAAgPAGgXIAGgWQgmAyghAUQgXAOgWAAQgWAAgPgRQgPgSgBgfQAAgvAdgzQAcg0AqgfQAjgZAdAAQASAAAMAJQAMAKAGAWIAKgiIAvgHIhADhIgBAHQAAAFADADQADADADAAQAEAAAGgFQAMgIATgbIAKAHQgUAegWAQQgVAQgSAAQgNAAgGgGgAoMm9QgeAZgXAxQgXAxAAAnQAAAUAKAMQAKALAMAAQAgAAAlgvQAzg/AAhBQAAgZgKgMQgKgLgQAAQgTAAgVASg");
	this.shape_2.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.eqAAin1, new cjs.Rectangle(-77,-54.5,154.1,109.1), null);


(lib.eqAA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_3
	this.aR = new lib.eqAAin2();
	this.aR.name = "aR";
	this.aR.parent = this;
	this.aR.setTransform(100,0);

	this.aL = new lib.eqAAin2();
	this.aL.name = "aL";
	this.aL.parent = this;
	this.aL.setTransform(-40,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.aL},{t:this.aR}]}).wait(1));

	// 圖層_2
	this.aCD = new lib.eqAAin1();
	this.aCD.name = "aCD";
	this.aCD.parent = this;
	this.aCD.setTransform(140,0);

	this.aAB = new lib.eqAAin1();
	this.aAB.name = "aAB";
	this.aAB.parent = this;
	this.aAB.setTransform(-100,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.aAB},{t:this.aCD}]}).wait(1));

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlhA8IAAgYIE8AAIAAAYgAAmAMIAAgXIE8AAIAAAXgAlhgjIAAgYIE8AAIAAAYg");
	this.shape.setTransform(19.625,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 圖層_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,0,1).p("Alhg7IE8AAIAAAYIk8AAgAAmgLIE8AAIAAAXIk8AAgAlhAkIE8AAIAAAYIk8AAg");
	this.shape_1.setTransform(19.625,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AlhA8IAAgYIE8AAIAAAYgAAmAMIAAgXIE8AAIAAAXgAlhgjIAAgYIE8AAIAAAYg");
	this.shape_2.setTransform(19.625,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.eqAA, new cjs.Rectangle(-177,-54.5,394.1,109.1), null);


(lib.chEquation = function(mode,startPosition,loop) {
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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AFMBvQgGgIgFgMQgdg3gNheIiGAAIAAgXICDAAIgDgmIAXACIADAkIBNAAIAAAXIhKAAQAMBUAZA3QAHALABAAQAEgBABgHQAEgSAAgaIAWAFQAAAXgFATQgGAdgJADIgIACQgKgBgIgJgAhPB4IAAhpQgHAUgNAWIgUgGQAaglAKgrIggAAIAAgVIAkAAIAAglQgRAEgNAAIgEgUQA0gHAcgHIAFAUIgdAHIAAAoIAeAAIAAAVIgeAAIAAAGQATAUAQAWIgQANIgTgbIAABzgAkWBsIABgcQAZAJAQADQAdAFAPgSQAHgJABgXQACg0gBgEIgEgCIhwAAQgMBWgvAqIgUgPQA4gqAChmIAAgYIg4AAIAAgYIBrAAIAAgeIAYAAIAAAeIBqAAIAAAYIieAAIAAAYIAAAIICBAAQAEAAABABQABABAAAAQABAAAAABQABAAAAABQAAAAAAABQADAJgDBGQgCAggKAPQgIAMgRAGQgJADgNAAQgXAAgkgKgACNBbIA5gMIAAhPIgvAAIAAgXIB1AAIAAAXIguAAIAABJQAogMASgHIAIAXQgQAIgmAKQgyANgiAGgAgbByIAAgVIA+AAIAAgjIhBAAIAAgVIBBAAIAAggIg0ABIgEgVQBVABAwgNIAGAVQgcAGghADIAAAiIBAAAIAAAVIhAAAIAAAjIA9AAIAAAVgAgMglQgBAAgBAAQgBgBAAAAQgBAAAAgBQAAgBAAAAIAAhGQAAgBAAgBQAAAAABgBQAAAAABAAQABAAABAAIB6AAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAABIAABGQAAAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAgAAEg5IBYAAIABgBIAAgjIhZAAgAE2hkIAJgUQAfAKAKAGIgJATQgUgLgVgEg");
	this.shape_2.setTransform(70,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chEquation, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


(lib.equationTexture = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_3
	this.eqR = new lib.eqBlock();
	this.eqR.name = "eqR";
	this.eqR.parent = this;
	this.eqR.setTransform(985.35,90);

	this.eqL = new lib.eqBlock();
	this.eqL.name = "eqL";
	this.eqL.parent = this;
	this.eqL.setTransform(186.45,90);

	this.eqD = new lib.eqBlock();
	this.eqD.name = "eqD";
	this.eqD.parent = this;
	this.eqD.setTransform(985.35,151.35);

	this.eqTR = new lib.eqTT();
	this.eqTR.name = "eqTR";
	this.eqTR.parent = this;
	this.eqTR.setTransform(985.35,233.3);

	this.eqC = new lib.eqBlock();
	this.eqC.name = "eqC";
	this.eqC.parent = this;
	this.eqC.setTransform(985.35,58.55);

	this.eqB = new lib.eqBlock();
	this.eqB.name = "eqB";
	this.eqB.parent = this;
	this.eqB.setTransform(186.45,151.35);

	this.eqTL = new lib.eqTT();
	this.eqTL.name = "eqTL";
	this.eqTL.parent = this;
	this.eqTL.setTransform(186.45,233.3);

	this.eqA = new lib.eqBlock();
	this.eqA.name = "eqA";
	this.eqA.parent = this;
	this.eqA.setTransform(186.45,58.55);

	this.eqAA = new lib.eqAA();
	this.eqAA.name = "eqAA";
	this.eqAA.parent = this;
	this.eqAA.setTransform(581.05,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.eqAA},{t:this.eqA},{t:this.eqTL},{t:this.eqB},{t:this.eqC},{t:this.eqTR},{t:this.eqD},{t:this.eqL},{t:this.eqR}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.equationTexture, new cjs.Rectangle(44.5,30.1,1130.2,231.4), null);


// stage content:
(lib.myAnimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// helper
	this.instance = new lib.textureABCD();
	this.instance.parent = this;
	this.instance.setTransform(-455.95,349.95,1,1,0,0,0,15,15);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkEG2IAAguIgzAAIAAgdIAzAAIAAgUIgtAAQgFAAAAgFIAAiZQAAgEAFAAIAtAAIAAgZIgwAAIAAgcIAwAAIAAgZIAaAAIAAAZIAwAAIAAAcIgwAAIAAAZIAuAAQAEAAAAAEIAACZQAAAFgEAAIguAAIAAAUIAyAAIAAAdIgyAAIAAAugAjqE7IAXAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAAAAAIAAglIgYAAgAkbE6QAAAAAAAAQAAAAAAAAQAAAAABAAQAAABAAAAIAWAAIAAgmIgXAAgAjqD4IAYAAIAAgnQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAABAAAAIgXAAgAkbD4IAXAAIAAgnIgXAAgAgzGzIgCgFIgPAAIAAheIgXAAIAABeIgaAAIAAheIgYAAIAABlIgcAAIAAjTQgBgIAIAAICjAAQAIgBAAAJIAAC1QAAARgOAJQgHAEgPAAQgKAAgOgCgAgpGYQALACAEgCQAHgDAAgJIAAg8IgWAAgAgpE0IAWAAIAAg8QAAAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAIgTAAgAhbE0IAXAAIAAg+IgXAAgAiND4IAAA8IAYAAIAAg+IgXAAQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAAAAAgAJYBzQg0hbAAh/QAAhtAhhNQAhhPA2gnQArgeAtAAQBJAAA6BKQBJBcAACeQAABvggBMQggBOgxAjQgyAjguAAQhbAAg8hrgAK6l5QghAmgMBTQgNBUAABRQAACCAhBTQAaBGA1AAQAaAAAbgWQAbgXAOg2QAWhRAAiRQAAhtgXhIQgRg3gagWQgUgPgbAAQggAAgZAdgAnkDSQgLgLAAgQQAAgXAThEIAriVQAPg0AAgFIACgSQAAgMgFgHQgGgGgHAAQgUAAgWAUQhAA8g5BqQgjBHggBuIhHAAIBQkaQANguAAgPQAAgNgFgGQgFgGgIgBQgPAAgSAMQgcASgsA8QgsA8gZA2QgLAagsCLIhGAAIBilWQADgJAAgDQAAgLgJgIQgJgJgPABQgGgBgcAGIgEgRICigeIg9DUQAphLAcgmQAtg5AqgaQAZgPAbgBQAWABAPAPQAQAOAAAYQAAAXgLAlIggB2QBLiOBFg6QAmgfAlgBQAVABAOAPQAOAOAAAfQAAAbgIAeIg0C2QgRA7AAAHQAAAGAEAFQADADAFAAQAEAAAMgJQAbgUAXgiIAQAKQgMASgdAhQgeAigWALQgVAMgRAAQgRAAgLgMgAiTDIIAAgYQgLAIgMAFIgSgaQBLgdAVgdIAbAFIgDAFQAjAdAyARIgRAbIgUgMIAAAYgAiLCtIBtAAQgZgOgegXQgWASggATgAgngLIAAgnIH4AAIAAAngAgnikIAAgnIH4AAIAAAng");
	this.shape.setTransform(91.8857,168.0046,0.5999,0.5999);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AC5BFQgNgVAAgyQAAgzAMgRQAJgNASAAQAQAAAKANQANARAAAyQAAAvgNAWQgJASgRAAQgSAAgIgPgADFg6QgIAOAAAqQAAAuAIAOQAGAJAIAAQAIAAAFgKQAJgPAAgtQgBgpgIgOQgGgIgHAAQgJAAgFAIgAjlBFQgNgVAAgyQAAgzAMgRQAJgNASAAQAQAAALANQAMARAAAyQAAAvgMAWQgKASgRAAQgSAAgIgPgAjZg6QgIAOAAAqQAAAuAIAOQAGAJAIAAQAIAAAGgKQAIgPAAgtQgBgpgIgOQgGgIgHAAQgJAAgFAIgAEXBSIAAgRIAaAAIAAh6IgcAMIAAgRIAugUIAACTIAaAAIAAARgAANBSIAAgnIg4AAIAAgHIAyh2IAXAAIAABtIAUAAIAAAQIgUAAIAAAngAgWAbIAjAAIAAhSgAiNBSIAAgNQAAgeAigeQAhgbAAgUQAAgNgFgHQgHgIgIAAQgNAAgFAHQgIAKAAARIgSAAQAAgaANgNQALgMAUAAQAQAAAKAMQALALAAAWQAAAcglAhQgeAaAAAQIBCAAIAAARgAlcBSIAAgNQAAgeAigeQAggbAAgUQAAgNgFgHQgHgIgIAAQgMAAgGAHQgIAKAAARIgRAAQAAgaAMgNQAMgMATAAQAQAAALAMQALALAAAWQAAAcgmAhQgdAaAAAQIBCAAIAAARgABcBHIAAgYIAZAAIAAAYg");
	this.shape_1.setTransform(1552.7435,58.3938,0.8,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("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");
	this.shape_2.setTransform(1512.7835,31.7553,0.8,0.8);

	this.title = new lib.title();
	this.title.name = "title";
	this.title.parent = this;
	this.title.setTransform(270,80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.title},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// UI
	this.chEquation = new lib.chEquation();
	this.chEquation.name = "chEquation";
	this.chEquation.parent = this;
	this.chEquation.setTransform(1359.9,742.4);

	this.instance_1 = new lib.equationTexture();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1534.3,430.8);

	this.chHide = new lib.chAutoHide();
	this.chHide.name = "chHide";
	this.chHide.parent = this;
	this.chHide.setTransform(1359.9,793.6);

	this.btnGo = new lib.btnGo();
	this.btnGo.name = "btnGo";
	this.btnGo.parent = this;
	this.btnGo.setTransform(1421.05,653.2,1.6,1.6);
	new cjs.ButtonHelper(this.btnGo, 0, 1, 2, false, new lib.btnGo(), 3);

	this.btnReset = new lib.btnReset();
	this.btnReset.name = "btnReset";
	this.btnReset.parent = this;
	this.btnReset.setTransform(1421.05,653.2,1.6,1.6);
	new cjs.ButtonHelper(this.btnReset, 0, 1, 2, false, new lib.btnReset(), 3);

	this.btnLeft = new lib.theBtnLeft();
	this.btnLeft.name = "btnLeft";
	this.btnLeft.parent = this;
	this.btnLeft.setTransform(1833.9,730);

	this.btnRight = new lib.theBtnRight();
	this.btnRight.name = "btnRight";
	this.btnRight.parent = this;
	this.btnRight.setTransform(1983.9,730);

	this.btnDown = new lib.theBtnDown();
	this.btnDown.name = "btnDown";
	this.btnDown.parent = this;
	this.btnDown.setTransform(1908.9,730);

	this.btnUp = new lib.theBtnUp();
	this.btnUp.name = "btnUp";
	this.btnUp.parent = this;
	this.btnUp.setTransform(1908.9,655);

	this.slCameraRR = new lib.theSlider();
	this.slCameraRR.name = "slCameraRR";
	this.slCameraRR.parent = this;
	this.slCameraRR.setTransform(1350,850);

	this.btn02 = new lib.theButton();
	this.btn02.name = "btn02";
	this.btn02.parent = this;
	this.btn02.setTransform(1983.9,550);

	this.btn01 = new lib.theButton();
	this.btn01.name = "btn01";
	this.btn01.parent = this;
	this.btn01.setTransform(1833.9,550);

	this.ch02 = new lib.theCheckbox();
	this.ch02.name = "ch02";
	this.ch02.parent = this;
	this.ch02.setTransform(1901.1,440.55,1,1,0,0,0,67.2,-1.4);

	this.ch01 = new lib.theCheckbox();
	this.ch01.name = "ch01";
	this.ch01.parent = this;
	this.ch01.setTransform(1901.1,368.4,1,1,0,0,0,67.2,-1.4);

	this.sl03 = new lib.theSlider();
	this.sl03.name = "sl03";
	this.sl03.parent = this;
	this.sl03.setTransform(1833.9,283.45);

	this.sl02 = new lib.theSlider();
	this.sl02.name = "sl02";
	this.sl02.parent = this;
	this.sl02.setTransform(1833.9,202.95);

	this.sl01 = new lib.theSlider();
	this.sl01.name = "sl01";
	this.sl01.parent = this;
	this.sl01.setTransform(1833.9,122.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sl01},{t:this.sl02},{t:this.sl03},{t:this.ch01},{t:this.ch02},{t:this.btn01},{t:this.btn02},{t:this.slCameraRR},{t:this.btnUp},{t:this.btnDown},{t:this.btnRight},{t:this.btnLeft},{t:this.btnReset},{t:this.btnGo},{t:this.chHide},{t:this.instance_1},{t:this.chEquation}]}).wait(1));

	// btn3D
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("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");
	this.shape_3.setTransform(101.2,875.708);

	this.btn3D = new lib.btn3D();
	this.btn3D.name = "btn3D";
	this.btn3D.parent = this;
	new cjs.ButtonHelper(this.btn3D, 0, 1, 2, false, new lib.btn3D(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn3D},{t:this.shape_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-689.8,450,2797.7,450);
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