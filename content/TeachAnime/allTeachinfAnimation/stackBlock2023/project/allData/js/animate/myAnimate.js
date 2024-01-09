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


(lib.text60L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.tt = new cjs.Text("360", "24px 'Arial'", "#FFFFFF");
	this.tt.name = "tt";
	this.tt.textAlign = "center";
	this.tt.lineHeight = 29;
	this.tt.lineWidth = 56;
	this.tt.parent = this;
	this.tt.setTransform(0,-11.2);

	this.timeline.addTween(cjs.Tween.get(this.tt).wait(1));

}).prototype = getMCSymbolPrototype(lib.text60L, new cjs.Rectangle(-30,-13.2,60,30.9), null);


(lib.endMark = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,0,1).p("AAADIIAAjIIAAjH");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhKgxICVAxIiVAyg");
	this.shape_1.setTransform(-7.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.endMark, new cjs.Rectangle(-15,-21.5,16.5,43), null);


(lib.bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,0,1).p("Au/AAId/AA");
	this.shape.setTransform(-49.9892,0,0.5207,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bar, new cjs.Rectangle(-101.5,-1.5,103,3), null);


(lib.dangerBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ApXAZIAAgxISvAAIAAAxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.dangerBar, new cjs.Rectangle(-60,-2.5,120,5), null);


(lib.btnRestore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACJC5QBDADAogRQALgGAHgCQglgcgcgkQgaAXgeASIgZghIACgCQA8geAtg4IgvAAQgEgBAAgFIAAiOQACgEACAAIEBAAQAGACAAACIAACOQAAAFgGABIipAAIgSAaICqAAIAeATQgnA9g+ApQA2APBAACIgJAoQhVgEg/geQgZAMgcAKQgnAOhAAAgAEhCKQAFAGAGACQAEgDAFgDQAvgYAegjIibAAQAYAnAiASgADSgOIC9AAIACgCIAAgZIi/AAgADShKIC/AAIAAgYIi/AAgABADfIAAjLIgRARIgggWQA4g2AchDIAkANQgPAngRAZIAAD8gAlDC9QAngQAYgXQBLg+AChxIAAhJIApAAIAABHQAAAQACAQQAIBtB2BPIgkAcQhchHgWhEIgNAeQgmBChOAtgAmUDdIAAm6IAnAAIAAG6gAkRADIgnAqIgggaQBJhBAnhXIhaAAIAAgpIBrAAIANgyIAoALIgLAnICXAAIAAApIimAAIg5BmQAPAgANA0IglAMIgTg+gAhuAuQAihGALgtIAmAOQgNAygiBDgAnOAkQAJhUgChOIAkABQAABtgIA5gAlgh1IAkgIIANBcIgjAGgAARh3QAygtAXg7IAkASQgkBNgpAhgAByiKQAqgiAWg0IAkAUQgEAEAAAGID0AAIAAAlIkMAAQgXAfgYASQgNgWgMgIg");
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


(lib.btnReset = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AE/CqQglAYg+AcIgYgjQA6gVAkgXQgmglghg+IAhgTQAcA6AnAkQA7gvANg4IgCgEQgEgCgFAAIihAAIAAgmIDDAAIAWATQgPBbhFA/QApAbBEALIgWAnQhLgWgtgegAnJDXIAAgmIDFAAIAAgWIivAAIAAgmICvAAIAAgaIibAAQgFAAAAgGIAAieQAAgGAFAAICbAAIAAgYIjJAAIAAgmIDJAAIAAgWQhcAEg/gCIgDgpQBOABBogFQBrgIA0gHIAGAnQgqAKhfAFQgGACgGAAIAAAYIDHAAIAAAmIjHAAIAAAYICYAAQAGAAAAAGIAACeQAAAGgGAAIiYAAIAAAaICtAAIAAAmIitAAIAAAWIDEAAIAAAmgAjcA1IB1AAIACgBIAAgbIh3AAgAl9A0QAAAAABAAQAAABAAAAQAAAAABAAQAAAAAAAAIB3AAIAAgcIh5AAgAjcgLIB3AAIAAgeIh3AAgAl9gLIB5AAIAAgeIh5AAgAAdDTIAAijQACgLALAAICEAAQAMAAAAALIAACBQAAANgMAAIhqAAIAAAVgABEBQIAABJIBHAAQAIgCAAgGIAAhBQAAgGgGAAIhDAAQgFAAgBAGgAAnAOIAAgkICIAAIAAAkgAC/hFIAQgMQAggcAAg0IAAgoQAAgDACgCIAGgCICHAAQADAAACACIAEAFIAABkQAAALACACQAEAGALAAIADAAIAMgEQADgCABgLIAAggIAjAEIgBA2QgFAJgFAIQgNALgNAAIgiAAQgTAAgIgLQgLgNABgNIAAhTQgBgGgFAAIhDAAQgFACAAACIAAATQgCBJg5AkgAAngtIAAglICIAAIAAAlgAAShpIAAgnIC0AAIAAAngAAoinIAAgnICJAAIAAAng");
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


(lib.btnPlus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiVH0IAAldIleAAIAAkrIFeAAIAAlfIErAAIAAFfIFeAAIAAErIleAAIAAFdg");
	this.shape.setTransform(-0.0704,0.1214,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FFFF").ss(3,1,1).p("AAAkrQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAQh7AAhYhYQhYhYAAh8QAAh7BYhYQBYhYB7AAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000066","#0066FF"],[0,1],30,30,30,-29.9).s().p("AjTDUQhYhYAAh8QAAh7BYhYQBYhYB7AAQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAQh7AAhYhYg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#00FFFF"],[0,1],30,30,30,-29.9).s().p("AjTDUQhYhYAAh8QAAh7BYhYQBYhYB7AAQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAQh7AAhYhYg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF00FF").ss(3,1,1).p("AAAkrQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAQh7AAhYhYQhYhYAAh8QAAh7BYhYQBYhYB7AAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("AjTDUQhYhYAAh8QAAh7BYhYQBYhYB7AAQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAQh7AAhYhYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{rotation:0}}]}).to({state:[{t:this.shape_3,p:{rotation:0}},{t:this.shape_1,p:{rotation:0}}]},1).to({state:[{t:this.shape_3,p:{rotation:180}},{t:this.shape_1,p:{rotation:180}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-31.5,63,63);


(lib.btnMinus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjgBEIAAiGIHBAAIAACGg");
	this.shape.setTransform(-0.05,0.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FFFF").ss(3,1,1).p("AAAkrQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAQh7AAhYhYQhYhYAAh8QAAh7BYhYQBYhYB7AAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000066","#0066FF"],[0,1],30,30,30,-29.9).s().p("AjTDUQhYhYAAh8QAAh7BYhYQBYhYB7AAQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAQh7AAhYhYg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#00FFFF"],[0,1],30,30,30,-29.9).s().p("AjTDUQhYhYAAh8QAAh7BYhYQBYhYB7AAQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAQh7AAhYhYg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF00FF").ss(3,1,1).p("AAAkrQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAQh7AAhYhYQhYhYAAh8QAAh7BYhYQBYhYB7AAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("AjTDUQhYhYAAh8QAAh7BYhYQBYhYB7AAQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAQh7AAhYhYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{rotation:0}}]}).to({state:[{t:this.shape_3,p:{rotation:0}},{t:this.shape_1,p:{rotation:0}}]},1).to({state:[{t:this.shape_3,p:{rotation:180}},{t:this.shape_1,p:{rotation:180}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-31.5,63,63);


(lib.btnFall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGBDfIAAgVIioAAIAAAVIgnAAIAAiUQABgGAHAAIDnAAQAHAAAAAIIAACSgADZBwIAAA1ICoAAIAAg2QgBgEgFAAIicAAQgFAAgBAFgAjCDfIAAhUIiFAAIAAgmICFAAIAAgiIhnAAQgGAAABgFIAAiuQgBgFAGAAIBSAAIAAhoIAqAAIAAAeICKAAIAAAmIiKAAIAAAkICBAAQAGAAAAAFIAACuQAAAFgGAAIhtAAIAAAiICHAAIAAAmIiHAAIAABUgAkGAeIC0AAIACgCIAAgiIi2AAgAkGhOIAAAiIC2AAIAAgiQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAgBAAIi0AAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAgAnKDYIAAgpQArANAIgGQADgGAAgIIAAhsIghAXIgbgfIA8gjIAAhwIgyAAIAAgnIAyAAIAAhVIAoAAIAABVIAqAAIAAAnIgqAAIAABTIAUgTIAcAcIgtAjIgDABIAACRQgCAcgTAMQgJAFgRAAQgTAAgcgHgAARDDQA2g8AThJIAlALQgeBfgtAwgACEAhQBGgQAugRQAHgDAGgCIg6gsQgYAUgjARIgUgkQAlgRARgRQAXgSAYgoIAoAIIgGALICQAAIAeAXQghA2g7ApQAzAUBJALIgRAnQhJgMg/gfQgEgDgGgCQhGAghTAWgADnhPQAnAhAeAXQArgeAdgdQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAgBgBAAIiHAAQgDADAAACgAAVgLIAVgjQAjARAtAhIgZAjQguglgegNgAAkhlIAVglQAhARAtAeIgWAjQgvghgegMgACEiBIAAgcIhtAAIAAglIBtAAIAAgcIAoAAIAAAcICKAAIAAgcIApAAIAAAcIBqAAIAAAlIhqAAIAAAXIgpAAIAAgXIiKAAIAAAcg");

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


(lib.number2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAQCBIAAjIQgLALgSAKQgTALgPAGIAAgfQAbgMAUgSQATgSAIgQIAVAAIAAEBg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhUCBQAAgLAEgLQAGgRAPgRQAOgRAbgWQApgiAPgUQAPgUAAgSQAAgSgOgNQgNgNgWAAQgWAAgNANQgOAOAAAYIghgDQADgkAWgTQAWgTAkAAQAlAAAWAUQAVAVAAAeQAAAQgGAOQgHAPgOAQQgPAQgiAdQgbAYgJAJQgIAIgFAJIB9AAIAAAeg");
	this.shape_1.setTransform(-0.0028,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag6BvQgWgUgDggIAfgEQAFAaAOAMQANANATAAQAVgBAQgPQAPgQAAgWQAAgWgPgOQgNgOgXgBQgIABgNADIAEgbIAEAAQAUAAAQgKQAQgLAAgVQAAgSgLgMQgNgKgRgBQgSAAgNAMQgMAMgEAWIgfgFQAGggAUgRQAUgSAgAAQATABASAIQASAKAKAPQAJAQAAARQAAARgJANQgJAPgSAHQAXAGANAQQAMAQAAAZQAAAigYAXQgZAXgkAAQgjABgWgVg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAXCBIAAg+IhvAAIAAgdIB0imIAaAAIAACmIAjAAIAAAdIgjAAIAAA+gAg5AmIBQAAIAAhzg");
	this.shape_3.setTransform(0.025,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag7BtQgXgTgCghIAggDQAFAZANAMQAOAMASAAQAWAAAQgRQAQgRAAgdQgBgbgPgPQgOgPgYAAQgPAAgNAHQgMAHgHAKIgegEIAZiDIB/AAIAAAeIhlAAIgPBFQAXgQAZAAQAiAAAXAXQAYAXAAAkQgBAjgUAaQgZAfgqAAQgjAAgWgUg");
	this.shape_4.setTransform(0,0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag7BmQgZgdAAhCQAAhLAbghQAZgdAogBQAeABATAQQAUARAEAeIggADQgEgTgIgIQgMgOgUAAQgOAAgLAIQgPAMgIAVQgJAUAAAnQALgSAQgIQARgIARAAQAgAAAWAXQAWAWAAAmQAAAXgKAWQgKAUgTALQgSALgYAAQgmAAgZgdgAghADQgPAPAAAaQABAQAGAPQAIAOAMAJQANAHAMABQAUgBAOgQQAPgQAAgbQAAgcgPgPQgOgOgVAAQgVAAgPAOg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AguB/QAAgeALgrQAMgrAWgnQAUgoAYgcIh9AAIAAgeIClAAIAAAZQgYAagYArQgZArgMAtQgJAhgDAmg");
	this.shape_6.setTransform(0,0.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag9BtQgXgXAAghQAAgaANgRQANgPAXgHQgTgHgKgOQgJgNAAgSQgBgdAVgTQAUgSAhgBQAhAAAVAUQAVATgBAdQAAASgJANQgKANgTAHQAYAIAMAQQANARAAAZQAAAhgXAWQgYAWgmAAQglAAgYgWgAgkAQQgPAPgBAWQABANAGANQAHAMAMAIQANAGAOABQAWAAAPgPQAPgPAAgWQgBgXgPgPQgPgPgWAAQgWAAgOAPgAgdhdQgMAMAAAPQAAATAMAMQALALASAAQATAAALgLQAMgMAAgQQAAgSgMgMQgMgMgSAAQgRAAgMAMg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag4BzQgTgRgEgfIAegDQAEAWALAJQALALARAAQAOgBALgGQALgHAHgLQAHgMAEgTQAFgTAAgTIAAgHQgJAQgRAJQgQAKgTgBQggAAgWgWQgWgXAAglQAAgoAXgYQAXgXAjgBQAYAAAVAOQAVANALAZQALAZAAAwQAAAwgLAeQgLAdgVAPQgVAPgcAAQgeAAgTgQgAgkhYQgPASAAAbQAAAZAPAPQAOAPAWgBQAVABAOgPQAOgPAAgbQAAgbgOgQQgPgQgUgBQgUABgQAQg");
	this.shape_8.setTransform(0.025,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAdBoQgZgfAAhJQAAgtAJgbQAKgcASgPQATgPAcgBQAUABARAHQAPAJAKAQQAKAPAGAXQAGAWAAAmQAAAugJAbQgJAcgTAQQgSAOgdAAQglAAgWgbgAA1hWQgQAXAAA/QgBBAAPAUQAPAWAWAAQAWAAAPgWQAPgVgBg/QABg+gPgWQgPgUgXgBQgVAAgNATgAhrB/IAAjIQgMAKgTALQgSALgPAGIAAgfQAagNAVgSQATgRAJgRIAUAAIAAECg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	// 圖層_2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(6,1,1).p("AAwCBIggAAIAAjIQgLALgSAKQgTALgPAGIAAgfQAbgMAUgSQATgSAIgQIAVAAg");
	this.shape_10.setTransform(0,0.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAQCBIAAjIQgLALgSAKQgTALgPAGIAAgfQAbgMAUgSQATgSAIgQIAVAAIAAEBg");
	this.shape_11.setTransform(0,0.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(6,1,1).p("ABVBjIAAAeIipAAQAAgLAEgLQAGgRAPgRQAOgRAbgWQApgiAPgUQAPgUAAgSQAAgSgOgNQgNgNgWAAQgWAAgNANQgOAOAAAYIghgDQADgkAWgTQAWgTAkAAQAlAAAWAUQAVAVAAAeQAAAQgGAOQgHAPgOAQQgPAQgiAdQgbAYgJAJQgIAIgFAJg");
	this.shape_12.setTransform(-0.0028,0.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhUCBQAAgLAEgLQAGgRAPgRQAOgRAbgWQApgiAPgUQAPgUAAgSQAAgSgOgNQgNgNgWAAQgWAAgNANQgOAOAAAYIghgDQADgkAWgTQAWgTAkAAQAlAAAWAUQAVAVAAAeQAAAQgGAOQgHAPgOAQQgPAQgiAdQgbAYgJAJQgIAIgFAJIB9AAIAAAeg");
	this.shape_13.setTransform(-0.0028,0.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(6,1,1).p("AhUA7IAggEQAFAbAOAMQANAMASAAQAWAAAQgQQAPgPAAgXQAAgWgOgOQgOgOgWAAQgJAAgNADIADgbQADAAACAAQAUAAAQgKQAQgLAAgWQAAgRgLgMQgMgLgSAAQgTAAgMAMQgMALgEAXIgfgFQAFggAVgRQAUgSAfAAQAVAAARAJQASAJAKAQQAJAPAAASQAAARgJANQgJAOgSAIQAXAFANARQANAQAAAZQAAAigZAXQgZAYglAAQgiAAgWgUQgWgVgEggg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag6BwQgWgVgEggIAhgEQAEAaAOANQANAMASgBQAWAAAPgPQAQgPAAgYQAAgVgOgPQgPgNgVAAQgIgBgOAEIADgbIAFAAQAUAAAQgKQAQgKAAgXQAAgRgLgMQgMgLgSABQgTAAgMALQgMALgEAYIgfgGQAFggAVgRQAUgRAfAAQAVgBARAKQASAJAJAPQAJAPAAASQAAARgJAOQgIAOgSAHQAXAFAMARQANAQABAZQgBAhgYAYQgZAYglgBQghAAgXgTg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(6,1,1).p("AAXCBIAAg+IhvAAIAAgdIB0imIAaAAIAACmIAjAAIAAAdIgjAAIAAA+gAAXAmIAAhzIhQBzg");
	this.shape_16.setTransform(0.025,0.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAXCBIAAg+IhvAAIAAgdIB0imIAaAAIAACmIAjAAIAAAdIgjAAIAAA+gAg5AmIBQAAIAAhzg");
	this.shape_17.setTransform(0.025,0.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(6,1,1).p("AhVA5IAhgDQAEAZAOAMQANAMATAAQAWAAAQgRQAQgRAAgdQAAgbgPgPQgPgPgZAAQgPAAgMAHQgMAHgHAKIgegEIAZiDIB/AAIAAAeIhmAAIgOBFQAXgQAZAAQAiAAAXAXQAYAXAAAkQAAAjgVAaQgZAfgqAAQgjAAgWgUQgXgTgDghg");
	this.shape_18.setTransform(0,0.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag7BtQgWgTgEghIAigDQADAZAOAMQANAMATAAQAWAAAQgRQAPgRAAgdQABgbgPgPQgQgPgYAAQgPAAgMAHQgMAHgHAKIgegEIAZiDIB/AAIAAAeIhmAAIgNBFQAWgQAZAAQAiAAAXAXQAYAXAAAkQAAAjgVAaQgZAfgqAAQgjAAgWgUg");
	this.shape_19.setTransform(0,0.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(6,1,1).p("ABRhDIggADQgEgTgIgIQgMgOgTAAQgPAAgLAIQgPALgJAVQgIAVgBAnQAMgSAQgIQARgIARAAQAgAAAWAXQAWAXAAAlQAAAYgKAVQgKAUgTAMQgSALgXAAQgnAAgZgdQgZgeAAhCQAAhLAbghQAYgeApAAQAeAAAUARQATARAEAegAgwAsQAAAQAHAPQAHAPANAIQAMAIANAAQAUAAAPgRQAOgQAAgbQAAgbgOgPQgOgPgWAAQgVAAgPAPQgPAPAAAZg");

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag7BnQgZgeAAhDQAAhJAbgiQAYgeAoABQAfAAAUARQATARADAdIgfADQgEgTgIgIQgMgNgUAAQgNgBgMAJQgPAKgIAVQgJAVAAAnQALgRARgJQAQgIARAAQAfAAAXAXQAWAXAAAkQAAAZgKAUQgKAVgTAMQgSALgYgBQgmAAgZgcgAggAEQgPAOgBAZQAAARAIAPQAGAPANAHQAMAJANgBQAUAAAPgQQAOgQAAgbQAAgbgOgPQgOgPgWAAQgUAAgPAPg");

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(6,1,1).p("AhThgIAAgeICnAAIAAAZQgZAagYArQgYArgNAtQgKAhgCAmIghAAQABgeALgrQAMgrAVgnQAVgoAYgcg");
	this.shape_22.setTransform(0,0.025);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgvB/QABgeAMgrQALgrAVgnQAVgoAYgcIh+AAIAAgeICnAAIAAAZQgZAagZArQgXArgNAtQgJAhgDAmg");
	this.shape_23.setTransform(0,0.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(6,1,1).p("AgjgMQgUgHgJgOQgKgNAAgTQAAgcAUgTQAVgTAhAAQAhAAAVAUQAVATAAAcQAAASgKAOQgJANgTAHQAXAIANAQQAMASAAAYQAAAhgXAWQgYAXgmAAQglAAgYgXQgXgXAAghQAAgZANgRQAMgRAYgGgAgphCQAAATALALQAMAMASAAQATAAALgMQAMgLAAgRQAAgRgMgMQgMgMgSAAQgSAAgLAMQgMALAAAQgAg0A1QAAANAHANQAGANANAHQANAHAOAAQAWAAAPgPQAPgPAAgWQAAgXgPgPQgQgPgWAAQgWAAgPAPQgPAPAAAWg");

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag8BtQgYgXAAgiQAAgZANgQQAMgRAYgGQgUgHgJgNQgKgNAAgUQABgcATgTQAVgSAhAAQAhgBAVAUQAVATAAAcQAAATgKANQgJANgTAHQAXAIANAQQAMASAAAXQAAAhgYAXQgXAXgmgBQglABgXgXgAglAPQgOAQAAAVQgBAOAHANQAGANANAGQANAIAOgBQAWAAAPgOQAOgPAAgXQAAgWgOgPQgQgPgWAAQgWAAgPAOgAgdhdQgMALAAAQQAAATALALQANAMARAAQASAAAMgMQAMgLAAgRQAAgRgMgMQgNgLgRAAQgRAAgMALg");

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(6,1,1).p("AAxguQAAgbgOgQQgPgQgUAAQgUAAgQARQgPASAAAbQAAAZAPAPQAOAPAWAAQAVAAAOgPQAOgPAAgcgAhPBEIAegDQAEAVALAKQALAKARAAQAOAAALgHQALgHAHgLQAHgLAEgTQAFgTAAgUQAAgCAAgEQgJAPgRAKQgQAJgTAAQggAAgWgXQgWgXAAgmQAAgnAXgYQAXgYAjAAQAYAAAVAOQAVANALAZQALAZAAAwQAAAxgLAdQgLAdgVAPQgVAQgcAAQgeAAgTgRQgTgRgEgeg");
	this.shape_26.setTransform(0.025,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag4ByQgTgQgEgeIAegDQAEAVALAJQALALARgBQAOABALgIQALgGAHgLQAHgLAEgUQAFgSAAgUIAAgHQgJAQgRAKQgQAJgTAAQggAAgWgYQgWgWAAglQAAgoAXgYQAXgYAjABQAYAAAVANQAVAOALAZQALAZAAAvQAAAxgLAcQgLAegVAPQgVAPgcAAQgeAAgTgRgAgkhXQgPARAAAcQAAAYAPAPQAOAOAWABQAVgBAOgOQAOgPAAgcQAAgbgOgPQgPgRgUABQgUgBgQASg");
	this.shape_27.setTransform(0.025,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(6,1,1).p("AAEAAQAAgtAKgcQAJgcATgPQASgPAcAAQAVAAAQAIQAPAJAKAQQALAPAFAXQAGAWAAAmQAAAugJAbQgJAcgTAQQgSAPgdAAQglAAgVgbQgaggAAhJgAAlAAQAABAAPAVQAOAVAWAAQAWAAAPgVQAPgWAAg/QAAg/gPgVQgPgVgWAAQgWAAgNATQgQAXAAA/gAhMB/IggAAIAAjJQgLALgTALQgSALgPAFIAAgeQAagNAUgSQAUgRAIgRIAVAAg");

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAeBoQgaggAAhIQAAgtAKgcQAJgbASgPQATgQAcABQAUgBAQAJQAQAIAKAQQAKAQAGAWQAGAXAAAlQAAAtgJAcQgKAcgSAPQgSAQgdgBQgmAAgUgbgAA1hWQgQAXAAA/QAAA/AOAWQAPAUAWAAQAWAAAOgUQAPgWAAg/QAAg+gPgWQgOgUgXAAQgVAAgNASgAhsB/IAAjJQgLALgTALQgSALgPAFIAAgeQAagMAVgSQATgSAJgQIAUAAIAAEBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.2,-16.1,40.4,32.3);


(lib.number = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAQCBIAAjIQgLALgSAKQgTALgPAGIAAgfQAbgMAUgSQATgSAIgQIAVAAIAAEBg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhUCBQAAgLAEgLQAGgRAPgRQAOgRAbgWQApgiAPgUQAPgUAAgSQAAgSgOgNQgNgNgWAAQgWAAgNANQgOAOAAAYIghgDQADgkAWgTQAWgTAkAAQAlAAAWAUQAVAVAAAeQAAAQgGAOQgHAPgOAQQgPAQgiAdQgbAYgJAJQgIAIgFAJIB9AAIAAAeg");
	this.shape_1.setTransform(-0.0028,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag6BvQgWgUgDggIAfgEQAFAaAOAMQANANATAAQAVgBAQgPQAPgQAAgWQAAgWgPgOQgNgOgXgBQgIABgNADIAEgbIAEAAQAUAAAQgKQAQgLAAgVQAAgSgLgMQgNgKgRgBQgSAAgNAMQgMAMgEAWIgfgFQAGggAUgRQAUgSAgAAQATABASAIQASAKAKAPQAJAQAAARQAAARgJANQgJAPgSAHQAXAGANAQQAMAQAAAZQAAAigYAXQgZAXgkAAQgjABgWgVg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAXCBIAAg+IhvAAIAAgdIB0imIAaAAIAACmIAjAAIAAAdIgjAAIAAA+gAg5AmIBQAAIAAhzg");
	this.shape_3.setTransform(0.025,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag7BtQgXgTgCghIAggDQAFAZANAMQAOAMASAAQAWAAAQgRQAQgRAAgdQgBgbgPgPQgOgPgYAAQgPAAgNAHQgMAHgHAKIgegEIAZiDIB/AAIAAAeIhlAAIgPBFQAXgQAZAAQAiAAAXAXQAYAXAAAkQgBAjgUAaQgZAfgqAAQgjAAgWgUg");
	this.shape_4.setTransform(0,0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag7BmQgZgdAAhCQAAhLAbghQAZgdAogBQAeABATAQQAUARAEAeIggADQgEgTgIgIQgMgOgUAAQgOAAgLAIQgPAMgIAVQgJAUAAAnQALgSAQgIQARgIARAAQAgAAAWAXQAWAWAAAmQAAAXgKAWQgKAUgTALQgSALgYAAQgmAAgZgdgAghADQgPAPAAAaQABAQAGAPQAIAOAMAJQANAHAMABQAUgBAOgQQAPgQAAgbQAAgcgPgPQgOgOgVAAQgVAAgPAOg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AguB/QAAgeALgrQAMgrAWgnQAUgoAYgcIh9AAIAAgeIClAAIAAAZQgYAagYArQgZArgMAtQgJAhgDAmg");
	this.shape_6.setTransform(0,0.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag9BtQgXgXAAghQAAgaANgRQANgPAXgHQgTgHgKgOQgJgNAAgSQgBgdAVgTQAUgSAhgBQAhAAAVAUQAVATgBAdQAAASgJANQgKANgTAHQAYAIAMAQQANARAAAZQAAAhgXAWQgYAWgmAAQglAAgYgWgAgkAQQgPAPgBAWQABANAGANQAHAMAMAIQANAGAOABQAWAAAPgPQAPgPAAgWQgBgXgPgPQgPgPgWAAQgWAAgOAPgAgdhdQgMAMAAAPQAAATAMAMQALALASAAQATAAALgLQAMgMAAgQQAAgSgMgMQgMgMgSAAQgRAAgMAMg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag4BzQgTgRgEgfIAegDQAEAWALAJQALALARAAQAOgBALgGQALgHAHgLQAHgMAEgTQAFgTAAgTIAAgHQgJAQgRAJQgQAKgTgBQggAAgWgWQgWgXAAglQAAgoAXgYQAXgXAjgBQAYAAAVAOQAVANALAZQALAZAAAwQAAAwgLAeQgLAdgVAPQgVAPgcAAQgeAAgTgQgAgkhYQgPASAAAbQAAAZAPAPQAOAPAWgBQAVABAOgPQAOgPAAgbQAAgbgOgQQgPgQgUgBQgUABgQAQg");
	this.shape_8.setTransform(0.025,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAdBoQgZgfAAhJQAAgtAJgbQAKgcASgPQATgPAcgBQAUABARAHQAPAJAKAQQAKAPAGAXQAGAWAAAmQAAAugJAbQgJAcgTAQQgSAOgdAAQglAAgWgbgAA1hWQgQAXAAA/QgBBAAPAUQAPAWAWAAQAWAAAPgWQAPgVgBg/QABg+gPgWQgPgUgXgBQgVAAgNATgAhrB/IAAjIQgMAKgTALQgSALgPAGIAAgfQAagNAVgSQATgRAJgRIAUAAIAAECg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.2,-13.1,34.4,26.299999999999997);


(lib.btnPointerrr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyAFlMAkBAAAIyBSAgAyAljISAyBISBSBg");
	this.shape.setTransform(-0.0121,-0.0208,0.1301,0.1325);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FFFF").ss(3,1,1).p("AAAkrQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAQh7AAhYhYQhYhYAAh8QAAh7BYhYQBYhYB7AAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000066","#0066FF"],[0,1],30,30,30,-29.9).s().p("AjTDUQhYhYAAh8QAAh7BYhYQBYhYB7AAQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAQh7AAhYhYg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#00FFFF"],[0,1],30,30,30,-29.9).s().p("AjTDUQhYhYAAh8QAAh7BYhYQBYhYB7AAQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAQh7AAhYhYg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF00FF").ss(3,1,1).p("AAAkrQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAQh7AAhYhYQhYhYAAh8QAAh7BYhYQBYhYB7AAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("AjTDUQhYhYAAh8QAAh7BYhYQBYhYB7AAQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAQh7AAhYhYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{rotation:0}}]}).to({state:[{t:this.shape_3,p:{rotation:0}},{t:this.shape_1,p:{rotation:0}}]},1).to({state:[{t:this.shape_3,p:{rotation:180}},{t:this.shape_1,p:{rotation:180}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-31.5,63,63);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("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");
	this.shape.setTransform(0,0.05,2,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(20,1,1).p("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");
	this.shape_1.setTransform(0,0.05,2,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("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");
	this.shape_2.setTransform(0,0.05,2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-456.4,-148.5,912.8,297.1), null);


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


(lib.tt360 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,0,1).p("AkrAAIJXAA");

	this.textD = new lib.text60L();
	this.textD.name = "textD";
	this.textD.parent = this;
	this.textD.setTransform(0,17.6);

	this.textU = new lib.text60L();
	this.textU.name = "textU";
	this.textU.parent = this;
	this.textU.setTransform(0,-15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.textU},{t:this.textD},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tt360, new cjs.Rectangle(-31.5,-28.8,63,64.1), null);


(lib.lengthMark = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.tt360 = new lib.tt360();
	this.tt360.name = "tt360";
	this.tt360.parent = this;

	this.endL = new lib.endMark();
	this.endL.name = "endL";
	this.endL.parent = this;
	this.endL.setTransform(-200,0);

	this.barL = new lib.bar();
	this.barL.name = "barL";
	this.barL.parent = this;
	this.barL.setTransform(-70,0);

	this.barR = new lib.bar();
	this.barR.name = "barR";
	this.barR.parent = this;
	this.barR.setTransform(150,0);

	this.endR = new lib.endMark();
	this.endR.name = "endR";
	this.endR.parent = this;
	this.endR.setTransform(200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.endR},{t:this.barR},{t:this.barL},{t:this.endL},{t:this.tt360}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.lengthMark, new cjs.Rectangle(-215,-28.8,416.5,64.1), null);


(lib.chWireframe = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(64.9,0,1.8005,0.3399,0,0,0,0.1,0);
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AmGBsIAQgUQAXAQAXAcIgVARQgWgcgTgNgAnaB/QAYgPAQgYIAVAQQgWAegaAPQgFgPgIgHgApxCNQAMggAEgSIAXAGQgEAWgNAegAHUCUIAAhPQhAA0g6AQIgPgZQBIgVA1grIh1AAIAAgbICBAAIAAgaIAbAAIAAAaIB9AAIAAAbIhzAAQAxApBLAYIgSAYQhGgagugnIAABMgAA3CUIAAiDQgHAdgMAUIgagFQAeg2AJg/IgjAAIAAgaIApAAIAAhCIAaAAIAABCIAeAAIAAAaIgeAAIAAAGQAWAlAQAiIgZAMQgFgOgIgQIAACRgAo7CPQgCgMgBgmIAXAAQADAZgBAagAjqCFIABgdQAYAIAJABQALAEAJAAQAJAAAFgFQACgDAAgHIAAiGIiJAAIAAgcIEdAAIAAAcIh3AAIAACNQAAAUgPAJQgKAGgQAAQgWAAgkgLgACDCKQgKgBAAgJIAAkAQgBgKALAAICpAAIgCAaIiRAAQgEAAAAAEIAADYQAAAEAEAAICbAAIAAAagAobBcIAVgFQAOAlABAJIgVAFQgGgagJgUgAhbACIAagKQAgA7AYA9IgaAKQgahEgeg0gAn3BXIAUgJQAOAYAEALIgUAIQgGgOgMgUgAk1BjQAugvARg/IAbAJQgZBKgnAqgACgBbIAAgbIA4AAIAAg1IgwAAIAAgaIAwAAIAAgwIg1AAIAAgbICHAAIAAAbIg3AAIAAAwIAzAAIAAAaIgzAAIAAA1IA8AAIAAAbgAo2BIIg3ALIgHgUIAPgEQAKgLAJgQQgRgQgRgJQAHgJADgJQADAAAFAFQAJgQAFgTQAIAFAMAEQgHAPgMAVIALAJQAJgQAEgPIAUAFQgHAdgeAmIARgCIgEgLIAUgHQAHASAEAaIgUAFIgCgLgAnHBSQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAimQAAgEAEAAIAjAAQAEgLABgJQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIgvAAIAAgZIB/AAIAAAZIg2AAQgCAFgBAIIgDALIA2AAQAEAAAAAEIAACmQAAAEgEAAgAmyA5IBHAAQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAIAAgYIhJAAgAmyAHIBJAAIAAgYIhJAAgAmygqIBJAAIAAgZIhJAAgAnmA/Ig1ALIgGgUIALgCIAOgQQgSgTgSgJIAKgSQABACAHADQAJgRAJgUQAKAGAJAEQgHAQgPAXQAIAFAFAFQAKgRAEgPIAUAFQgDANgPAYIAQgFQAIATAHAbIgVAGIgCgLgAn6AvIANgEIgDgLQgHAHgDAIgAFLgNQAvgcAPg2IgyAAIAAgaIA0AAIABgZIAbABIAAAYIAvAAIAGABQAEADAAALQAAAhgBAXQgBAbgIAIQgHAMgNADQgQAEgfgHIABggQAKAHAJABQAPACAIgIQAFgIACgMQABgjgBgEQgBgBAAAAQgBgBgBAAQAAAAAAgBQgBAAAAAAIgeAAIgBAEQgRBCgyAfgAH6gDQgDAAAAgEIAAh7QAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAIBsAAQAFAAAAADIAAB7QAAAEgFAAgAIShqIAABMIA8AAIABgBIAAhLQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIg8AAQAAAAAAAAQgBAAAAAAQAAAAABABQAAAAAAAAgAplgtQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAhYQAAgEADAAICAAAQAEAAAAAEIAABYQAAADgEAAgApRhDQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAABAAIBVAAQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIAAgPIhYAAgApRh1IAAAOIBYAAIAAgOIgBgBIhVAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAgAkOhvIAAgbIDiAAIAAAbg");
	this.shape_2.setTransform(88.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chWireframe, new cjs.Rectangle(-26.3,-20.7,182,38.7), null);


(lib.chLengthMark = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(64.9,0,1.8005,0.3399,0,0,0,0.1,0);
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
	this.shape_2.graphics.f("#FFFFFF").s().p("ACYCQIAAgdQAfAKAIgFQACgEAAgFIAAgpIhZAAIAAgaIDKAAIAAAaIhVAAIAAAxQAAASgPAJQgHAEgLAAQgOAAgWgGgAiPB1Qg6AYg5AIIgJgbQA2gGAfgLIAHgBQgfgRgagQIAKgaQApAeAmAPQApgVAUgYQACgDgFAAIibAAIAAgaIC0AAIATAQQgWAogxAeQAuANA1AFIgNAdQhDgNgygTgAmLCEQhHgcg0hUIgqAAIAABcIASgDQAkgIAXgJIAKAbQg7AUhWAIIgJgbIAogEIAAhgIgmAAIAAgbIAqAAIAAh+QgCgGAIAAIDdAAIAAAaIjFAAQgEAAABAEIAAAOIC+AAIAAAaIi+AAIAAATIC+AAIAAAaIi+AAIAAARIDcAAIAAAbIiVAAQASAdAYAWQAlgZAagUIAPAYIg4AoQAhAUA4ALIgOAcQgdgIgUgJgAAxCSIAAh/QgHAWgIAQIgagFQAdg0AHg5IggAAIAAgbIAlAAIAAg/IAbAAIAAA/IAaAAIAAAbIgaAAIAAAHIAlA7IgYAPIgNgbIAACVgADvBqIASgWQAWAPAcAaIgSAUQgegagUgNgAGTCGIABgdQAYAHAJACQALADAJAAQAJAAAFgFQACgCAAgIIAAiGIiJAAIAAgbIEdAAIAAAbIh3AAIAACOQAAAUgPAJQgKAGgQAAQgWAAgkgLgABXB0QAegLAYgaIAUASQgeAggcALgAk3CBQAQgbAFgaQAFgWAAgiIAAiMQAAgIAIAAIBtAAIAAgVIAbAAIAAAVIB3AAIAAAaIguAAIAAAcIAuAAIAAAaIguAAIAAAmQgCALgMAAIiBAAQgMAAAAgLIAAgmIgjAAIAABLQgCBDgaAugAjEgcQAAABAAABQABABAAAAQABAAAAABQABAAABAAIBbAAQAFAAAAgEIAAgUIhkAAgAjEhKIBkAAIAAgcIhkAAgAkChiIAAAYIAjAAIAAgcIggAAQgDAAAAAEgAIiACIAagKQAgA7AYA9IgaAKQgahDgeg1gAFIBkQAugwARg+IAbAIQgZBKgnArgAB/AbIAAgZICiAAIAAAZgAB1gNQgEAAAAgEIAAhIQAAgBAAgBQABAAAAgBQABAAAAAAQABgBABAAIAyAAIAAgTIg7AAIAAgZIDCAAIAAAZIg4AAIAAATIAwAAQAEAAAAAEIAABIQAAAEgEAAgAD2gmIAZAAIABgBIAAgdIgaAAgADBgmIAaAAIAAgeIgaAAgACLgnQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAABAAIAaAAIAAgeIgcAAgADBhdIAaAAIAAgTIgaAAgAFvhuIAAgcIDiAAIAAAcg");
	this.shape_2.setTransform(88.025,0.0103);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chLengthMark, new cjs.Rectangle(-26.3,-20.7,182,38.7), null);


(lib.chCenterMass = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(64.9,0,1.8005,0.3399,0,0,0,0.1,0);
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
	this.shape_2.setTransform(88.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chCenterMass, new cjs.Rectangle(-26.3,-20.7,182,38.7), null);


(lib.textureWall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.lm10 = new lib.lengthMark();
	this.lm10.name = "lm10";
	this.lm10.parent = this;
	this.lm10.setTransform(287.25,500);

	this.lm09 = new lib.lengthMark();
	this.lm09.name = "lm09";
	this.lm09.parent = this;
	this.lm09.setTransform(287.25,451.85);

	this.lm08 = new lib.lengthMark();
	this.lm08.name = "lm08";
	this.lm08.parent = this;
	this.lm08.setTransform(287.25,403.95);

	this.lm07 = new lib.lengthMark();
	this.lm07.name = "lm07";
	this.lm07.parent = this;
	this.lm07.setTransform(287.25,356.05);

	this.lm06 = new lib.lengthMark();
	this.lm06.name = "lm06";
	this.lm06.parent = this;
	this.lm06.setTransform(287.25,308.15);

	this.lm05 = new lib.lengthMark();
	this.lm05.name = "lm05";
	this.lm05.parent = this;
	this.lm05.setTransform(287.25,260.25);

	this.lm04 = new lib.lengthMark();
	this.lm04.name = "lm04";
	this.lm04.parent = this;
	this.lm04.setTransform(287.25,212.35);

	this.lm03 = new lib.lengthMark();
	this.lm03.name = "lm03";
	this.lm03.parent = this;
	this.lm03.setTransform(287.25,164.45);

	this.lm02 = new lib.lengthMark();
	this.lm02.name = "lm02";
	this.lm02.parent = this;
	this.lm02.setTransform(287.25,116.55);

	this.lm01 = new lib.lengthMark();
	this.lm01.name = "lm01";
	this.lm01.parent = this;
	this.lm01.setTransform(287.25,68.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lm01},{t:this.lm02},{t:this.lm03},{t:this.lm04},{t:this.lm05},{t:this.lm06},{t:this.lm07},{t:this.lm08},{t:this.lm09},{t:this.lm10}]}).wait(1));

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,0,0,0)").ss(2,1,1).p("EA+ggu3IPoAAIAAPoIAAPoIAAPnIAAPoIAAPdEA+ggu3IAAPoIvoAAIvoAAIAAPoIvoAAIvoAAIAAPnIvnAAIAAPoIAAPoIAAPoIvoAAIvoAAIvoAAIvoAAIAAvoIAAvoIAAvoEAfQgu3IAAPoIvoAAIAAPoIAAPnIvoAAIAAPoIAAPoIPoAAIAAPoIvoAAIvnAAEAu4gu3IAAPoIAAPoIvoAAIAAPnIAAPoIvoAAIvoAAIvnAAIvoAAIAAPoIvoAAIvoAAIvoAAEAfQgu3IPoAAIPoAAEAu4AAAIvoAAIvoAAIAAPoIAAPdEAu4gPnIAAPnIAAPoIvoAAIAAPdEA+ggPnIAAPnIvoAAEA+ggPnIvoAAEA+ggfPIAAPoEA+gAPoIAAPdAfQfQIPoAAIPoAAIAAPoIvoAAIvoAAIvoAAEAu4APoIAAPdAfQfQIAAPoEAu4AfQIAAPoEA+gAPoIvoAAEA+gAfQIPoAAIAAPoIvoAAEA+gAAAIAAPoEBOIAPoIvoAAEBOIgfPIvoAAEBOIgPnIvoAAEBOIAAAIvoAAEAPogu3IAAPoIvoAAIAAPoIvnAAIAAPnIvoAAIAAPoIvoAAIAAPoIAAPoEAAAgu3IPoAAIPoAAEAAAgu3IAAPoIvnAAIAAPoIvoAAIAAPnIvoAAIvoAAIAAPoIAAPoIAAPoEgPngu3IAAPoIvoAAIAAPoIvoAAIAAPnIAAPoIvoAAIvoAAEgPngu3IPnAAEgu3gu3IPoAAIAAPoIvoAAIAAPoIvoAAIAAPnIvoAAIAAvnIAAvoIAAvoIPoAAIAAPoIvoAAEgu3gu3IAAPoIvoAAIAAPoIvoAAEg+fgu3IPoAAA/PfQIAAPoAAAfQIvnAAIvoAAAAAfQIAAPoEgfPgu3IPoAAAPofQIPoAA");
	this.shape.setTransform(500,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.textureWall, new cjs.Rectangle(-1,-1,1002,602), null);


(lib.textureGround = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("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");
	this.shape.setTransform(19.9585,75.0232,0.6,0.6,89.9927);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0000FF").ss(5,1,1).p("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");
	this.shape_1.setTransform(19.9757,75.0325,0.6,0.6,89.9927);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("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");
	this.shape_2.setTransform(19.9757,75.0325,0.6,0.6,89.9927);

	this.lm = new lib.lengthMark();
	this.lm.name = "lm";
	this.lm.parent = this;
	this.lm.setTransform(700,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lm},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 圖層_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0000FF").ss(8,0,1).p("AAArtIAAXb");
	this.shape_3.setTransform(40,75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,0,0,0)").ss(2,1,1).p("EA+ggXbIPoAAIAAPoIAAPnIAAPoIvoAAIvoAAIvoAAIvoAAIvoAAIvnAAIvoAAEA+ggXbIAAPoIvoAAIvoAAIAAPnIvoAAIvoAAIAAPoAfQ3bIAAPoIvoAAIAAPnIAAPoEAu4gXbIAAPoIAAPnIvoAAIAAPoAfQ3bIPoAAIPoAAEAu4AH0IAAPoEA+gAH0IAAPoEA+gAH0IvoAAEA+ggHzIAAPnEBOIgHzIvoAAEBOIAH0IvoAAAPo3bIAAPoIvoAAIAAPnIvnAAIAAPoAAA3bIPoAAIPoAAAAA3bIAAPoIvnAAIAAPnIvoAAIAAPoIvoAAIvoAAAvn3bIAAPoIvoAAIAAPnIvoAAIAAPoAvn3bIPnAAEgu3gXbIPoAAIAAPoIvoAAIvoAAIvoAAIAAvoIPoAAIAAPoIAAPnIAAPoIvoAAIAAvoIAAvnEgu3gXbIAAPoIAAPnIvoAAIvoAAEg+fgXbIPoAAA/P3bIPoAA");
	this.shape_4.setTransform(500,150);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("A/PXcMAAAgu3MA+fAAAMAAAAu3g");
	this.shape_5.setTransform(200,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.textureGround, new cjs.Rectangle(-1,-4,1002,305), null);


(lib.oneBlock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.nn = new lib.number();
	this.nn.name = "nn";
	this.nn.parent = this;

	this.btnRight = new lib.btnRight();
	this.btnRight.name = "btnRight";
	this.btnRight.parent = this;
	this.btnRight.setTransform(44.95,0,0.8333,0.8334);
	new cjs.ButtonHelper(this.btnRight, 0, 1, 2, false, new lib.btnRight(), 3);

	this.btnLeft = new lib.btnLeft();
	this.btnLeft.name = "btnLeft";
	this.btnLeft.parent = this;
	this.btnLeft.setTransform(-45.05,0,0.8333,0.8333);
	new cjs.ButtonHelper(this.btnLeft, 0, 1, 2, false, new lib.btnLeft(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnLeft},{t:this.btnRight},{t:this.nn}]}).wait(1));

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("AsfkrIY/AAIAAJXI4/AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AsfEsIAApXIY/AAIAAJXg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.oneBlock, new cjs.Rectangle(-81.5,-31.5,163,63), null);


(lib.bPointer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.btn = new lib.btnPointerrr();
	this.btn.name = "btn";
	this.btn.parent = this;
	this.btn.setTransform(-130,0);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.btnPointerrr(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(6,1,1).p("AhjhjIDHBjIjHBkg");
	this.shape.setTransform(-90,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AhjhjIDHBjIjHBkg");
	this.shape_1.setTransform(-90,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFF00").ss(6,1,1).p("AMgAAI4/AA");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bPointer, new cjs.Rectangle(-161.5,-31.5,244.5,63), null);


(lib.theBlocks = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.bPointer = new lib.bPointer();
	this.bPointer.name = "bPointer";
	this.bPointer.parent = this;
	this.bPointer.setTransform(0,-180);

	this.timeline.addTween(cjs.Tween.get(this.bPointer).wait(1));

	// 圖層_1
	this.b10 = new lib.oneBlock();
	this.b10.name = "b10";
	this.b10.parent = this;
	this.b10.setTransform(-0.05,-570);

	this.b09 = new lib.oneBlock();
	this.b09.name = "b09";
	this.b09.parent = this;
	this.b09.setTransform(-0.05,-510);

	this.b08 = new lib.oneBlock();
	this.b08.name = "b08";
	this.b08.parent = this;
	this.b08.setTransform(-0.05,-450);

	this.b07 = new lib.oneBlock();
	this.b07.name = "b07";
	this.b07.parent = this;
	this.b07.setTransform(-0.05,-390);

	this.b06 = new lib.oneBlock();
	this.b06.name = "b06";
	this.b06.parent = this;
	this.b06.setTransform(-0.05,-330);

	this.b05 = new lib.oneBlock();
	this.b05.name = "b05";
	this.b05.parent = this;
	this.b05.setTransform(-0.05,-270);

	this.b04 = new lib.oneBlock();
	this.b04.name = "b04";
	this.b04.parent = this;
	this.b04.setTransform(-0.05,-210);

	this.b03 = new lib.oneBlock();
	this.b03.name = "b03";
	this.b03.parent = this;
	this.b03.setTransform(-0.05,-150);

	this.b02 = new lib.oneBlock();
	this.b02.name = "b02";
	this.b02.parent = this;
	this.b02.setTransform(-0.05,-90);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(6,1,1).p("AzhAAMAnDAAA");

	this.b01 = new lib.oneBlock();
	this.b01.name = "b01";
	this.b01.parent = this;
	this.b01.setTransform(0,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b01},{t:this.shape},{t:this.b02},{t:this.b03},{t:this.b04},{t:this.b05},{t:this.b06},{t:this.b07},{t:this.b08},{t:this.b09},{t:this.b10}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.theBlocks, new cjs.Rectangle(-161.5,-601.5,289.5,604.5), null);


// stage content:
(lib.myAnimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// helper
	this.logo = new lib.logo();
	this.logo.name = "logo";
	this.logo.parent = this;
	this.logo.setTransform(800,450,1,1,0,0,0,0.5,0.8);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// UI
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(1546.55,29.6,1,1,0,0,0,0,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(109.35,865.25,0.8,0.8,0,0,0,0,0.1);

	this.chLengthMark = new lib.chLengthMark();
	this.chLengthMark.name = "chLengthMark";
	this.chLengthMark.parent = this;
	this.chLengthMark.setTransform(1451.35,672.05,1,1,0,0,0,64.7,-1.8);

	this.dangerBar = new lib.dangerBar();
	this.dangerBar.name = "dangerBar";
	this.dangerBar.parent = this;
	this.dangerBar.setTransform(1360,794.05);

	this.instance = new lib.textureWall();
	this.instance.parent = this;
	this.instance.setTransform(-1125.95,830.6);

	this.instance_1 = new lib.textureGround();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1125.95,363.15);

	this.blockN = new lib.number2();
	this.blockN.name = "blockN";
	this.blockN.parent = this;
	this.blockN.setTransform(109.4,804.7,2,2);

	this.btnPlus = new lib.btnPlus();
	this.btnPlus.name = "btnPlus";
	this.btnPlus.parent = this;
	this.btnPlus.setTransform(178.4,804.75);
	new cjs.ButtonHelper(this.btnPlus, 0, 1, 2, false, new lib.btnPlus(), 3);

	this.btnMinus = new lib.btnMinus();
	this.btnMinus.name = "btnMinus";
	this.btnMinus.parent = this;
	this.btnMinus.setTransform(40.4,804.75);
	new cjs.ButtonHelper(this.btnMinus, 0, 1, 2, false, new lib.btnMinus(), 3);

	this.chWireframe = new lib.chWireframe();
	this.chWireframe.name = "chWireframe";
	this.chWireframe.parent = this;
	this.chWireframe.setTransform(1451.35,137.3,1,1,0,0,0,64.7,-1.8);

	this.chCenterMass = new lib.chCenterMass();
	this.chCenterMass.name = "chCenterMass";
	this.chCenterMass.parent = this;
	this.chCenterMass.setTransform(1451.35,213.25,1,1,0,0,0,64.7,-1.8);

	this.theBlocks = new lib.theBlocks();
	this.theBlocks.name = "theBlocks";
	this.theBlocks.parent = this;
	this.theBlocks.setTransform(1441.35,623.4,0.6,0.6,0,0,0,0.1,0.1);

	this.btnRestore = new lib.btnRestore();
	this.btnRestore.name = "btnRestore";
	this.btnRestore.parent = this;
	this.btnRestore.setTransform(1369.7,756.2);
	new cjs.ButtonHelper(this.btnRestore, 0, 1, 2, false, new lib.btnRestore(), 3);

	this.btnReset = new lib.btnReset();
	this.btnReset.name = "btnReset";
	this.btnReset.parent = this;
	this.btnReset.setTransform(1504.15,756.2);
	new cjs.ButtonHelper(this.btnReset, 0, 1, 2, false, new lib.btnReset(), 3);

	this.btnFall = new lib.btnFall();
	this.btnFall.name = "btnFall";
	this.btnFall.parent = this;
	this.btnFall.setTransform(1360,756.2);
	new cjs.ButtonHelper(this.btnFall, 0, 1, 2, false, new lib.btnFall(), 3);

	this.btnLeft = new lib.theBtnLeft();
	this.btnLeft.name = "btnLeft";
	this.btnLeft.parent = this;
	this.btnLeft.setTransform(1851.55,730);

	this.btnRight = new lib.theBtnRight();
	this.btnRight.name = "btnRight";
	this.btnRight.parent = this;
	this.btnRight.setTransform(2001.55,730);

	this.btnDown = new lib.theBtnDown();
	this.btnDown.name = "btnDown";
	this.btnDown.parent = this;
	this.btnDown.setTransform(1926.55,730);

	this.btnUp = new lib.theBtnUp();
	this.btnUp.name = "btnUp";
	this.btnUp.parent = this;
	this.btnUp.setTransform(1926.55,655);

	this.slCameraRR = new lib.theSlider();
	this.slCameraRR.name = "slCameraRR";
	this.slCameraRR.parent = this;
	this.slCameraRR.setTransform(1350,850);

	this.btn02 = new lib.theButton();
	this.btn02.name = "btn02";
	this.btn02.parent = this;
	this.btn02.setTransform(2001.55,550);

	this.btn01 = new lib.theButton();
	this.btn01.name = "btn01";
	this.btn01.parent = this;
	this.btn01.setTransform(1851.55,550);

	this.ch02 = new lib.theCheckbox();
	this.ch02.name = "ch02";
	this.ch02.parent = this;
	this.ch02.setTransform(1918.75,440.55,1,1,0,0,0,67.2,-1.4);

	this.ch01 = new lib.theCheckbox();
	this.ch01.name = "ch01";
	this.ch01.parent = this;
	this.ch01.setTransform(1918.75,368.4,1,1,0,0,0,67.2,-1.4);

	this.sl03 = new lib.theSlider();
	this.sl03.name = "sl03";
	this.sl03.parent = this;
	this.sl03.setTransform(1851.55,283.45);

	this.sl02 = new lib.theSlider();
	this.sl02.name = "sl02";
	this.sl02.parent = this;
	this.sl02.setTransform(1851.55,202.95);

	this.sl01 = new lib.theSlider();
	this.sl01.name = "sl01";
	this.sl01.parent = this;
	this.sl01.setTransform(1851.55,122.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sl01},{t:this.sl02},{t:this.sl03},{t:this.ch01},{t:this.ch02},{t:this.btn01},{t:this.btn02},{t:this.slCameraRR},{t:this.btnUp},{t:this.btnDown},{t:this.btnRight},{t:this.btnLeft},{t:this.btnFall},{t:this.btnReset},{t:this.btnRestore},{t:this.theBlocks},{t:this.chCenterMass},{t:this.chWireframe},{t:this.btnMinus},{t:this.btnPlus},{t:this.blockN},{t:this.instance_1},{t:this.instance},{t:this.dangerBar},{t:this.chLengthMark},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// btn3D
	this.btn3D = new lib.btn3D();
	this.btn3D.name = "btn3D";
	this.btn3D.parent = this;
	new cjs.ButtonHelper(this.btn3D, 0, 1, 2, false, new lib.btn3D(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn3D).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-327,450,2452.6,981.5999999999999);
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