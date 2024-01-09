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


(lib.unbrella = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(3,1,1).p("ADXE2ICMp4AjpFDIh5qF");
	this.shape.setTransform(101.55,126.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF00FF").ss(1,1,1).p("ACKnSQAuAEAtAGQENAoDQCIQAEACAEACQCTBjBLB2QBKB2AACLQAAAWgGAoAFpHZQDVlyGgDrQAIgtAGghAFzFbQBqiKCAglQAxgPA0AAQCKABCgBmABUmfQCACZBGC2QASAuAOAwQAYBTAOBLQASBeABBRQAABDgKA7ACKnSQAAABAAAAQAAAFgBAEQgFASgYANQgMAGgMAEQgXAGgcAAQgeAAgXgHQgLgEgLgFQgYgNgFgSQgCgEAAgFQAAgDABgCQAkgCAkAAQASAAARABQA1ABAyAEgAgUmgQiSCZhPClQgWAvgRAvQggBYgRBYQgRBTgDBSIAAABQgCBEAHBDQixlanQDOQgIgngFgdQgHgsAAgXQAAgOABgMQAIigBsiDQBFhUBuhJQDTiLESgpQBLgLBRgDAvqEJQFljQEkEYAlhFSQFJj6GLEDAlcHZQFpl8FcF8");
	this.shape_1.setTransform(100.95,47.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC33CC").s().p("Ag0AYQgMgEgKgFQgZgNgFgQIgBgKIAAgFQAkgBAmgBIAhABQA1ABAzAEIAAABIgBAKQgFAQgZANQgLAGgNAEQgXAGgcAAQgdAAgXgHg");
	this.shape_2.setTransform(104.2,3.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF99FF").s().p("AlpF1IAAgBQADhSAQhTQAShYAghZQARguAWguQBPimCSiZQAYAHAcAAQAcAAAXgGQCACZBGC2QASAtAPAxQAYBTAOBLQARBeABBRQmKkDlJD6g");
	this.shape_3.setTransform(101.7875,43.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF00FF").s().p("AFyAgQBqiJCBglQAxgPA0AAQCJABCgBmQgFAhgJAsQmfjqjVFxQAKg7gBhDgAvdASIgNhDQFkjQElEXIAAABQgDBEAIBDQixlZnQDNg");
	this.shape_4.setTransform(101,78.7373);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF66FF").s().p("AlcHYQgHhDAChEQFJj6GKEDQABBDgKA7Qlcl8lpF8gAFgCrQgOhLgYhTQgOgvgSgvQhGi2iAiZQAMgEALgGQAZgNAFgRIACgKIAAAAQAtADAtAHQENAnDRCIIAGAFQCUBiBKB2QBLB2gBCLQAAAWgFAoQighmiJgBQg1AAgxAPQiAAlhrCKQAAhRgShegAvpEIQgIgrAAgYIABgaQAIifBsiDQBFhUBuhJQDTiMESgoQBLgLBRgEIgBAFIACAKQAFARAYANQALAGALADQiSCZhPCmQgWAugQAvQghBYgRBYQgRBUgDBRQkkkYlkDQg");
	this.shape_5.setTransform(100.95,47.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#666666").ss(3,1,1).p("AvdmIIL6MRIh5qFAPemCIsBL+ICMp4");
	this.shape_6.setTransform(100.95,119.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,203.9,161.6);


(lib.labelVV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AggBbQgFh7gPgeQgFgKgLAAIgOABIgBgGIA4gNQAGAPAEAPQAFAWAEAeIAEBAIAcgiIAegoQAGgKADgIQACgGAAgFQAAgFgJgHQgJgGAAgIQAAgHAFgFQAFgFAHAAQAIAAAGAHQAGAHAAAKQAAAKgDAJQgFAPgOAVQgOAVgfAkIgqAtg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.labelVV, new cjs.Rectangle(-8.4,-9,16.9,18.1), null);


(lib.labelTT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AhzCEIACgGIAFAAQAQgBAIgEQAGgEAEgIQAFgJAHgcIA3i7IgQAAQgWAAgOAFQgOAGgIALQgJAMgGAUIgHAAIAThGIDIAAIgWBGIgHAAQADgPAAgMQABgPgKgHQgGgGgcABIgVAAIgzC1QgKAiAAAJQAAAHAHAFQAFAEAQABIAIAAIgBAGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.labelTT, new cjs.Rectangle(-11.6,-13.2,23.2,26.5), null);


(lib.labelMG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AA/B+QgUgGgIgKQgJgJAAgLQAAgIAGgJQAFgJAJgGIAdgSQgJgHAAgIQAAgIAIgJQAIgIAagKQgWgEgMgOQgNgOAAgRQAAgcAZgWQAYgWAoAAQAPAAAJADQAKADAIAHIA1AAIgGAUIggAAQAEAKAAAKQAAAZgWAVQgWAUgnACQgVAGgKAIQgEADAAADQAAAEAEADQADADAOAEIAmAJQAgAHAKAKQAKAKAAAOQAAAQgMANQgMAOgWAHQgXAIgcAAQgYAAgUgGgAA8BAQgIALAAALQAAANAMAIQAQAMAhAAQAcAAAUgJQATgJAAgQQAAgHgHgHQgHgHgVgEIg9gPQgQAHgIAMgABuhjQgPAWAAAYQAAAPAJAKQAKAJANAAQAKAAAKgFQAJgGAHgKQAHgKADgPQAEgQAAgHQAAgPgIgJQgJgJgOAAQgWAAgOAWgAguAtQgEgEAAgHQAAgKAIgbIARg/IAHgYIAAgHQAAgFgCgDQgCgCgDAAQgIAAgJAIQgbAZgYAtQgPAdgOAtIgdAAIAhh1QAGgTAAgGQAAgGgDgCQgCgDgDAAQgGAAgHAFQgMAHgTAZQgSAZgKAXQgFALgTA5IgcAAIAoiOIACgFQAAgEgEgEQgEgDgGAAIgOACIgCgHIBDgNIgZBZQARgfAMgQQATgYARgLQAKgHAMAAQAKAAAGAHQAGAGAAAKQAAAJgEAQIgOAxQAgg7AcgYQAQgOAQAAQAIAAAGAHQAFAGAAANQAAALgDANIgVBMIgHAaQAAABAAAAQAAABABABQAAAAAAABQAAAAABABQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAQACAAAFgDQAKgJAKgOIAGAEIgRAWQgLANgJAFQgJAFgHAAQgHAAgFgFg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.labelMG, new cjs.Rectangle(-24.5,-13.1,49.1,26.299999999999997), null);


(lib.labelKV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AgiBGIAAgEQARADAIAAQAHAAAAgLIAAhtIAAgmIAUAJIgIAHIAACJQgBASgSAIQABgKgagKgAhUApQAKgLAKgPQALgPAGgPQAHgPACgKIARANQgGADgFAIIgRAZQgNARgUASgABIAfQgFgMgKgRQgLgQgRgTIACgDQAeAYALAMQALALABAFIABAIQAAAHgDAEQgDAFgCAAQgDAAgCgJg");
	this.shape.setTransform(0.1313,14.4177,0.7,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AhZBZQAbgMATgSQATgSAHgXQAIgXABgaIg+AAIgKACIgHgGIBPAAIgBg4IASAJIgGAGIAAApIA6AAIAMgNIARARIhXAAIAAAHQAIAcAUAdQAVAdAmAKIAAADQgMABgGAKQgZgQgTgbQgTgcgIgcQgGAugWAXQgXAXgmANg");
	this.shape_1.setTransform(0.4477,15.1425,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// 圖層_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("ABsCNQgFh7gPgeQgFgKgLAAIgOABIgBgGIA4gNQAGAPAEAPQAFAWAEAdIAEBBIAdghIAegqQAGgKADgIQACgFAAgFQAAgFgJgGQgJgHAAgIQAAgGAFgFQAFgGAHAAQAIAAAGAIQAGAGAAAKQAAAKgDAJQgFAOgOAWQgOAVgfAkIgrAtgAh5CHQgIgMgShPIgbAXIgUBGIgeAAIBGjxIABgJQAAgFgEgDQgDgDgHAAIgOACIAAgHIBDgLIg3C/IAWgTQAlgfAKgOQAEgFAAgDIgBgCQgBgCgEgBIgMgBIgHAAIADgHIBVAAIgCAHQgPABgKADQgLAFgKAGIgaAUIgRAPIALAnQAKAqAEAHQAEAJAEAAQADgBAEgDQALgHALgQIAHAEQgVAbgMAJQgLAIgJAAQgJAAgEgGg");
	this.shape_2.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-14.1,45.1,35.7);


(lib.helicopter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("ApQ14IbFAAQDsBrjsAzI7BAAQgNAZgVAVQgcAcghANQgdAKggAAQggAAgcgKQgjgNgcgcQgVgVgMgZQgRgiAAgqQAAgtAUglQAMgWASgSQAzgzBIAAQBHAAAzAzQASASAMAWQAVAlAAAtQAAAqgRAiAskyDIgNBPQAbgFAfAAQAsAAAmAKQAwANAnAeQBFA1gIBZQhQgKhQgGQgugDgvgBQhtgEhsAGQAChIBEg0QAxglA/gLEgktAISQGjD1IximQIwimBBm/QAtkygjk2QgPiPghiPEglDAJMQClB4DiAhQFXAwHkiZQAygPAtgUQFCiTBNmBQBOmGhVnUQgKg4gNg5AH+AVQgvhrg4hgQkHnCm7jYQh0gYhygOAqryDIAGBUADxFlQAAAdgDAcQgPB/hQBfQhjBziKAAQiKAAhjhzQhQhfgPiAQgDgbAAgdQAAikBihzQBjhyCKAAQCKAABjByQBiBzAACkgAEjFkQAABpgkBXQgcBCgxA5QhxCDieAAQigAAhxiDQgTgWgQgXQhOh0AAiaQAAi4BxiCQBxiCCgAAQCeAABxCCQBxCCAAC4gAnWRhIANCmIDNAAIIhAAQArAAAeAeQAeAeAAAqQAAArgeAeQgeAegrAAMgnrAAAQgrAAgegeQgegeAAgrQAAgqAegeQAegeArAAIDwAAIDUAAIU5AAAj5RhIgDCmAnWRhIDdAAQI5gUC+jSQAfh+ANh+QAKhogBhoQgDjNgyjNIC1AAIUCAAEAh2gAtQADgCAEAAQAngPAuAAQAsAAAmANQAxARAoAnQAeAfARAjQAXAvAAA6QAAAtgOAoQgCADgBAEQgSArgjAjQggAggmASQgEABgDACEAmSACxQAAAlgLAgQgBACgCADQgOAigcAcQgaAageAOQgDABgCACQgjAOgoAAQguAAgmgTQgQgHgOgLQgMgJgLgLQgggggNgmQgLgfAAgjQAAgpAOgiQABgDACgCQALgYASgVQAFgFAFgHQAdgbAigOQACgBADAAQAggNAlAAQAiAAAfALQAnAMAgAgQAYAZAOAcQASAmAAAugAfzBTQACgDABgDQAOgeAXgaQAGgHAHgHQAjgiArgSEAhqAGMQgUgKgSgNQgPgMgNgNQgogogRgxQgOgmAAgrQAAgzASgsIg+g+IjBjAQgRivCTAtIEAEAEAhqAGMIjuDuQivARAtiUIAkgjIDRjRAH+N7IUgmnEAkkgAxID+j/QCKgWgICYIj4D3EAmyAEOIDsDsQAWCKiYgIIjsjrQgrARgzAAQg5AAgvgWAvnuIQjUAKjQAuQiUByiICYQiVCniFDUQglA5gjA9QhPCJhKCcQgVAsgVAuQgyBwgvB4QgLAdgLAdQh+FLFJDKICiAAIAACmA8PRhIANCmA/WRhIDHAAIU5AAAuEzaI60AAQjWg7DWhjIa3AA");
	this.shape.setTransform(102.0469,-140.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#666666","#FFFFFF"],[0,1],0,7.8,0,-7.8).s().p("Az1BnQgrgBgegeQgegdAAgrQAAgpAegfQAegdArAAIDwAAIDUAAIU4AAIDNAAIIiAAQArAAAeAdQAeAfAAApQAAArgeAdQgeAegrABg");
	this.shape_1.setTransform(4.325,-1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#666666","#FFFFFF"],[0,1],0,7.8,0,-7.8).s().p("AslBPQjWg7DWhiIa2AAQgUAlgBAsQAAAqARAig");
	this.shape_2.setTransform(-79.05,-272.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#666666","#FFFFFF"],[0,1],0,7.8,0,-7.8).s().p("AuZBPQAQgiABgqQAAgsgVglIbFAAQDsBqjsAzg");
	this.shape_3.setTransform(135.35,-272.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AsvMfIgNimIDdAAIgDCmgEgk8AMfIAAimIDGAAIANCmgEAi2ACVIjsjrIAGgDQAmgSAgggQAkgjARgrIDtDsQAUCCiGAAIgQAAgAWTAQIAkgjIDRjRQARAxAoAoQAOAOAPALQASANATAKIjuDtQgTABgQAAQiHAAAoiDgAZOnSIjAjAQgSivCUAtID/D/QgqASgkAjIgNAOQgWAagOAeIgDAHgEAgWgHgQgogogxgRID+j+QCKgWgICYIj3D3QgRgjgfgfg");
	this.shape_4.setTransform(137.8969,-91.3102);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC0000").s().p("AmtP4QgTgWgQgXQhOh0AAiaQAAi4BxiDQBxiCCfAAQCfAABxCCQBxCDAAC4QAABogkBXQgcBDgxA5QhxCDifAAQifAAhxiDgAmKGnQhiBzAACkQAAAdADAbQAOB/BRBfQBiB0CLAAQCLAABhh0QBQheAPh/QADgcAAgdQAAikhihzQhhhziLAAQiLAAhiBzgA/7Q9Qjjggilh5IAXg5QGjD1IwimQIwinBCm/QAskygik1QgQiPggiPQAuABAvADQAMA5ALA4QBVHThOGHQhOGBlCCSQgtAVgxAPQlvB0keAAQhbAAhTgMgEAgqALkQgTgJgSgOQgPgLgOgNQgogogRgxQgNgmAAgsQAAgyASgsIADgGQAOgeAWgaIANgOQAkgkAqgRIAHgDQAogPAuAAQArAAAmAOQAxARAoAoQAfAeARAkQAXAvAAA5QAAAugPAoIgDAHQgRAqgkAkQggAggmARIgGADQgsASgyAAQg5AAgwgXgEAhOAFVIgGACQgiAOgcAcIgLAMQgSAUgLAYIgCAGQgPAiAAApQAAAjALAeQAOAnAgAgQALALAMAJQAOALAQAHQAmATAtAAQApAAAigPIAGgCQAegOAagaQAcgcAOgiIACgFQAMggAAglQAAgugSgmQgOgcgYgZQgggggogNQgegLgjAAQglAAgfAMgAtksqQgigNgcgcQgVgVgNgZQgRgiAAgqQAAgtAVglQALgWATgSQAzgzBHAAQBIAAAyAzQATASAMAWQAUAlAAAtQAAAqgRAiQgMAZgWAVQgbAcgiANQgcAKghAAQggAAgcgKg");
	this.shape_5.setTransform(108.375,-174.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66FFFF").s().p("AJDJDQgDgcAAgdQAAijBih0QBjhzCKAAQCLAABjBzQBiB0AACjQAAAegDAcQi5CjimAAQinAAiTikgAzeHQQAVgvAVgsQBKicBPiKQAjg9Alg4QCFjUCVimQCIiYCUhzQDQgtDTgLQBsgFBtADQAhCQAPCPQjUKcmSD6Qj9B9jhAAQjiAAjHh9g");
	this.shape_6.setTransform(1.425,-156.618);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0099FF").s().p("ALUI6QhQhfgPh/QEmFJFzlIQgPB/hQBeQhjB0iLAAQiKAAhjh0gA0NHRQAvh4AyhwQGOD8H5j8QGSj4DUqeQAjE2gtEyQhBG+ovCnQjjBDjLAAQksAAj6iSg");
	this.shape_7.setTransform(-3.575,-133.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066FF").s().p("AqKlEIUBAAIA+A+QneHRslB6QinmaBrjvg");
	this.shape_8.setTransform(236.2477,-105.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0000CC").s().p("AAkLeQALhngChpQgDjMgwjNICzAAQhqDvCmGbQMmh6HfnSQgSArAAAzQAAArANAmIjRDRI0eGnQAdh9ANh/gAy2smQgvgDgugBQhugEhsAGQADhJBDgzQAxglA/gLQAcgGAeAAQAsAAAmALQAxANAnAeQBFA0gJBaQhQgLhPgFg");
	this.shape_9.setTransform(153.775,-149.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF00").s().p("ADeBxQhniylai1QjDgvhmAvQgLg4gMg5QBPAFBQALQBzANB0AYQG7DYEGHCg");
	this.shape_10.setTransform(87.875,-194.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF6633").s().p("AsCP7QjYgRkdiaQFXAxHkiZQAygQAtgUQFICBFIhnQAQAXATAWQBxCCCgAAQCfAABxiCQAxg5AchDIE0h1QABBpgKBnQmKDhmuAwQkuAekuAAQkuAAkvgegAgyvOQgfAAgbAGIANhPQAcAKAgAAQAgAAAcgKIAGBUQglgLgsAAg");
	this.shape_11.setTransform(31.1344,-150.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF9900").s().p("A7aKfQFCiTBOmAQBOmHhVnUQBmguDDAuQFbC1BnC0IFGD3QA4BgAwBqQAxDNADDNIkzB1QAkhXAAhoQAAi5hxiCQhxiCigAAQifAAhxCCQhxCCAAC5QAACZBOB0QiTAviSAAQi2AAi3hIgAXHGmQgQgIgOgLQgMgIgLgLQgggggOgnQgLgfAAgjQAAgoAPgjIACgFQALgYASgVIALgLQAcgcAigOIAGgCQAfgMAlAAQAjAAAeAKQAoAOAgAgQAYAYAOAdQASAmAAAtQAAAlgMAgIgCAFQgOAigcAdQgaAZgeAOIgGADQgiAOgpAAQgtAAgmgSg");
	this.shape_12.setTransform(171.575,-147.1463);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC6600").s().p("AHIELI05AAIjGAAIijAAQlJjLB+lKQClB5DjAgQEdCZDYARQJcA8Jdg8QGtgwGKjfQgNB+geB9Qi/DRo5AVg");
	this.shape_13.setTransform(9.3554,-54.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(3,1,1).p("AhUjQQAEgCADgBQAogPAtAAQArAAAmAOQAxARAoAoQAfAeARAkQAXAvAAA4QAAAugPAoQgBADgCAEQgRAqgkAkQggAggmARQgDACgDABADIAOQAAAlgMAgQgBACgBADQgOAigcAcQgaAageAOQgDABgDABQgiAPgpAAQgsAAgmgTQgQgHgOgLQgMgJgLgLQgggggOgnQgLgeAAgjQAAgoAPgiQABgDABgDQALgYASgUQAFgGAGgGQAcgcAigOQADgBADgBQAfgMAkAAQAjAAAeALQAoANAgAgQAYAZAOAcQASAmAAAtgAjWhPQABgDACgDQAOgeAWgaQAGgHAHgHQAkgkAqgRAhgDoQgTgJgSgOQgPgLgOgNQgogogRgxQgNgmAAgsQAAgxASgsIj/j/QgSivCUAtID/EAAhgDoIjuDuQivASAtiUID1j0ABZjUID+j/QCKgWgICYIj3D4ADnBrIDtDsQAWCKiYgIIjsjsQgsASgyAAQg4AAgwgX");
	this.shape_14.setTransform(327.0975,-123.7639,1,1,44.9994);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCCCCC").s().p("AFSHZIjsjsIAGgDQAmgRAgggQAkgkARgqIDtDsQAVCDiHAAIgQgBgAnQFUID1j0QARAxAoAoQAOANAPALQASAOATAJIjuDuQgSACgQAAQiIAAAoiEgAnVlOQgSivCUAtID/EAQgqARgkAkIgNAOQgWAagOAeIgDAGgACyibQgogogxgRID+j/QCKgWgICYIj3D4QgRgkgfgeg");
	this.shape_15.setTransform(327.0975,-123.7639,1,1,44.9994);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF9900").s().p("AhSCuQgQgHgOgLQgMgJgLgLQgggggOgnQgLgeAAgjQAAgoAPgiIACgGQALgYASgUIALgMQAcgcAigOIAGgCQAfgMAkAAQAjAAAeALQAoANAgAgQAYAZAOAcQASAmAAAtQAAAlgMAgIgCAFQgOAigcAcQgaAageAOIgGACQgiAPgpAAQgsAAgmgTg");
	this.shape_16.setTransform(326.6026,-122.2601,1,1,44.9994);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CC0000").s().p("AhnDaQgUgKgSgNQgPgLgOgOQgogngQgyQgOgmAAgrQAAgyASgrIADgGQAOgeAXgaIAMgPQAkgjArgSIAHgCQAngPAtAAQAsAAAlAOQAxAQAoAoQAfAfARAjQAXAwAAA4QAAAugPAoIgDAGQgRArgkAjQgfAggnASIgGADQgrASgzAAQg4AAgvgXgAhEi0IgGACQgiAOgcAcIgKALQgTAVgKAYIgDAGQgOAiAAAoQgBAjAMAeQANAnAgAgQALALAMAIQAOALAQAIQAmASAtAAQAoAAAjgOIAFgCQAegOAagaQAcgcAOgjIACgEQAMghAAgkQAAgtgSgmQgOgdgYgYQgggggogNQgegLgiAAQglAAgfAMg");
	this.shape_17.setTransform(326.6379,-122.1894,1,1,44.9994);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AheCvIDAhUIghkJIiiAB");
	this.shape_18.setTransform(321.45,-120.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#00FFFF").ss(3,1,1).p("AARAsQhCgmBCgx");
	this.shape_19.setTransform(-168.675,-271.5875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(3,1,1).p("Am214QAVAlAAAtQAAAqgRAiQgNAZgVAVQgcAcghANQgdAKggAAQggAAgcgKIgNBPQAbgFAfAAQAsAAAmAKQAwANAnAeQBFA1gIBZArn14QAMgWASgSQAzgzBIAAQBHAAAzAzQASASAMAWIF/AAICLAAIGbAAQDsBrjsAzImbAAIiLAAIl7AAAqKyDQgjgNgcgcQgVgVgMgZQgRgiAAgqQAAgtAUglEgipAJMQClB4DiAhQFXAwHkiZQAygPAtgUQFCiTBNmBQBOmGhVnUQgKg4gNg5QgugDgvgBAtNuIQAChIBEg0QAxglA/gLEgiTAISQGjD1IximQIwimBBm/QAtkygjk2QgPiPghiPQhtgEhsAGQjUAKjQAuQiUByiICYQiVCniFDUQglA5gjA9QhPCJhKCcQgVAsgVAuQgyBwgvB4QgLAdgLAdQh+FLFJDKICiAAIAACmIDUAAIU5AAIDNAAIIhAAQArAAAeAeQAeAeAAAqQAAArgeAeQgeAegrAAMgnrAAAQgrAAgegeQgegeAAgrQAAgqAegeQAegeArAAIDwAAAKYAVQgvhrg4hgQkHnCm7jYQh0gYhygOQhQgKhQgGAoRyDIAGBUAGLFlQAAAdgDAcQgPB/hQBfQhjBziLAAQiJAAhjhzQhQhfgPiAQgDgbAAgdQAAikBihzQBjhyCJAAQCLAABjByQBiBzAACkgAG9FkQAABpgkBXQgcBCgxA5QhxCDifAAQifAAhxiDQgTgWgQgXQhOh0AAiaQAAi4BxiCQBxiCCfAAQCfAABxCCQBxCCAAC4gAk8RhIDdAAIgDCmAk8RhIANCmAKYN7QAfh+ANh+QAKhogBhoQgDjNgyjNIC1AAIV9AAAhfRhQI5gUC+jSIY1oIArqzaInVAAIn7AAQjWg7DWhjIH7AAIHYAAA51RhIANCmA88RhIDHAAIU5AA");
	this.shape_20.setTransform(86.6304,-140.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#666666","#FFFFFF"],[0,1],-13.7,7.8,-13.7,-7.8).s().p("AhFBPIAAidICLAAIAACdg");
	this.shape_21.setTransform(88.05,-272.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#666666","#FFFFFF"],[0,1],-66.2,7.8,-66.2,-7.8).s().p("AkIBPIAAidIGbAAQDrBqjrAzg");
	this.shape_22.setTransform(121.5,-272.275);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#666666","#FFFFFF"],[0,1],60.6,7.8,60.6,-7.8).s().p("AjHBPQjWg7DWhiIH6AAIAACdg");
	this.shape_23.setTransform(-65.675,-272.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#666666","#FFFFFF"],[0,1],-67.7,7.8,-67.7,-7.8).s().p("AjrBPIAAidIHXAAQgUAlAAAsQAAAqARAig");
	this.shape_24.setTransform(-11.375,-272.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#666666","#FFFFFF"],[0,1],73.4,7.8,73.4,-7.8).s().p("Ai7BPQARgiAAgqQAAgsgVglIF/AAIAACdg");
	this.shape_25.setTransform(61.9,-272.275);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF9900").s().p("AsqKfQFCiTBOmAQBNmHhUnUQBlguDEAuQFZC1BoC0IFGD3QA4BgAwBqQAxDNADDNIk0B1QAlhXgBhoQAAi5hwiCQhyiCifAAQifAAhxCCQhwCCAAC5QgBCZBOB0QiSAviSAAQi3AAi2hIg");
	this.shape_26.setTransform(77.2,-147.1463);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0000CC").s().p("AAELeQALhngChpQgDjMgwjNICzAAQhqDvCmGbQHxhMF0jNQDoiAC4izQgSArAAAzQAAArANAmIBFBwI40IIQAeh9AMh/gAzWsmQgvgDgugBQhugEhsAGQADhJBDgzQAxglA/gLQAcgGAeAAQAsAAAmALQAxANAnAeQBFA0gJBaQhQgLhPgFg");
	this.shape_27.setTransform(156.975,-149.65);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0066FF").s().p("AsLlDIV9AAICjgBIAhEJIjBBUIhFhvQgNgmAAgrQAAgzASgrQi4CzjoB/QlzDNnxBMQimmaBqjvg");
	this.shape_28.setTransform(249.0977,-105.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CC0000").s().p("AKiP4QgTgWgQgXQhOh0AAiaQAAi4BxiDQBxiCCfAAQCgAABxCCQBxCDAAC4QAABogkBXQgcBDgxA5QhxCDigAAQifAAhxiDgALFGnQhiBzAACkQAAAdADAbQAOB/BRBfQBiB0CLAAQCLAABih0QBQheAPh/QADgcAAgdQAAikhihzQhihziLAAQiLAAhiBzgAurQ9Qjjggilh5IAXg5QGjD1IwimQIvinBCm/QAskygik1QgQiPggiPQAuABAvADQAMA5ALA4QBVHThOGHQhOGBlBCSQgtAVgxAPQlvB0keAAQhbAAhTgMgADrsqQgigNgcgcQgVgVgNgZQgRgiAAgqQAAgtAVglQALgWATgSQAzgzBHAAQBIAAAyAzQATASAMAWQAUAlAAAtQAAAqgRAiQgMAZgWAVQgbAcgiANQgcAKghAAQggAAgcgKg");
	this.shape_29.setTransform(-2.025,-174.575);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CCCCCC").s().p("AKfBTIgNilIDcAAIgCClgAttBTIAAilIDGAAIANClg");
	this.shape_30.setTransform(-10.8,-19.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_11},{t:this.shape_6},{t:this.shape_7},{t:this.shape_10},{t:this.shape_26},{t:this.shape_13},{t:this.shape_25},{t:this.shape_24},{t:this.shape_1},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.8,-290.7,563.4000000000001,301.3);


(lib.lll = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAA/PMAAAA+f");
	this.shape.setTransform(0,-200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.lll, new cjs.Rectangle(-1,-401,2,402), null);


(lib.emp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgJAAIATAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.emp, new cjs.Rectangle(-2,-1,4,2), null);


(lib.btnReset = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AC2C6IAAiAQhLBJhLAhIgWgfQBkgsBIhRIAAhuIibAAIAAgiICbAAIAAgxIAiAAIAAAxICaAAIAAAiIiaAAIAABuQBBBNBoAuIgZAdQhXgsg5g6IAACAgAl9C0IAAggICkAAIAAgSIiRAAIAAgfICRAAIAAgXIiAAAQgFABAAgFIAAiEQAAgFAFABICAAAIAAgVIinAAIAAgfICnAAIAAgTQhMAEg0gCIgDgjQBBACBWgEQBZgHAsgGIAFAgQgiAJhQAEQgFACgFAAIAAAUICmAAIAAAfIimAAIAAAVIB/AAQAFgBAAAFIAACEQAAAFgFgBIh/AAIAAAXICQAAIAAAfIiQAAIAAASICjAAIAAAggAi3AuIBhAAIACgCIAAgWIhjAAgAk9AsQAAAAAAABQAAAAABAAQAAAAAAAAQAAABABAAIBiAAIAAgYIhkAAgAi3gIIBjAAIAAgZIhjAAgAk9gIIBkAAIAAgZIhkAAgAAMAnQA2g3AYhHIAhALQgKAUgEAPIAzAxIgXAZQgRgXgZgXQgZArgdAcgAEfgRQgOAWgLAOIgfgRQAigoAOgxIAhAKIgNAhQAsAkAnAmIgWAZQgfgigqgmg");
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


(lib.btnPlayStop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEaDUIAAmmICOAAIAAGmgAABDUIAAmmICOAAIAAGmgAmnjRIFoDRIloDSg");
	this.shape.setTransform(-0.075,0.15);

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


(lib.btnOpen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACuC8IAAgtIiqAAIAAghICqAAIAAjhIAjAAIAADhICpAAIAAAhIipAAIAAAtgAiFC0IADgkQAlAKAOgCQADgCABgFQACgDAAgFIAAiiIhxAAQgLgCABgJIAAh9QABgKAJABICHAAQAKAAAAAKIAAE2QABAJgFAKQgGAIgKAFQgLAFgRAAQgTAAgZgHgAijhCQAAAKAJgBIBRAAIAAgaIhaAAgAijiEIAAARIBaAAIAAgPQAAgKgJAAIhKAAIgCAAQgFAAAAAIgAl6C3IAAlYQAAgKAKABICJAAQAJgBAAAKIAAB9QAAAKgJABIhyAAIAADQgAlZg5IBTAAQAIABgBgKIAAgRIhaAAgAlZiEIAAARIBaAAIAAgSQACgGgJgBIhLAAIgCAAQgGAAAAAIgAlACTQAOgFAKgGQAagSACgaIg3AAIAAgfIA3AAIAAggIgxAAIAAgdIDWAAIAAAdIgvAAIAAAgIA4AAIAAAfIg4AAIAABLIghAAIAAhLIg4AAQACAIgFALQgLArgvATgAjtA9IA2AAIAAggIg2AAgAEhA4QgiAfgSAMIgTgbQAXgOAQgPQAOgRAQgcIAdAMIgMAXIBGAoIgTAeQgbgXgngYgABXA2QgjAggYAOIgTgcQAZgNAUgSQAOgOAVgiIAcAPIgNAWQAcAUAdAXIgVAbQgYgYgdgWgAAMgPQAagMATgSQAQgRAUgiIAcAQIgMAWQAcARAcAUIgTAcIg3gqQgkAjgZAMgAEYghQgCADAAACQgXAVgUAOIgUgaQAWgOAOgQQAOgOAOgeIAdANIgMAXQAmATAiAVIgPAcQgegVgrgXgAC9iXQg0Aph3AhIgOghQCFgcAugxIAfALQgBABAAABQgBAAAAABQAAAAgBAAQAAABgBAAQBKAsBfASIgQAhQhfgZhPgxg");

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


(lib.btnJump = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj/CdQAUgIAOgLQApgdAAg4IAAgLQgZAYgeAVIgZgYQA0gjAcgdIAAi1IAhAAIAADrQAAAPgFAUIgCAFQgRA5g9AjgACvC3IAAk9IiXAAIAAgkIFoAAIAAAkIitAAIAAAuQBOAxBLA4IgXAgQg1gthNg1IAADogAl/CXQAIgEAJAAIAAiTIAfAAIAACKQAKgFAKgBIAAirIgwAAQgFAAAAgFIAAh9QAAgEAFAAIB1AAQAFAAAAAEIAAB9QAAAFgFAAIglAAIAAAuIAyAAIAAAfIgyAAIAABVQAZgLAOgFIAMAdQgtAXheAXgAlQhGIA+AAQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAIAAhHIhAAAgAhYCyQgMgCgLgKQgKgKAAgMIAAlIIAhAAIAABcQAcgeAQgUIAZAUQgYAggnAlIgGgGIAAAuQApAhAlAmIgWAZQgXgcghgdIAABlQAAAIAFAHQAGAEAGAAIARAAIAKgDQAEgDACgqIAfAGQgGA2gFAHQgMANgKAAgAjoiIIAegDQAOA7ACAsIgeACQgFgxgLg1g");
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


(lib.btnDrop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AC1C8IAAgtIirAAIAAghICrAAIAAjhIAiAAIAADhICpAAIAAAhIipAAIAAAtgAhBCeIkxAVIgIgjIAygDQAsgwAng5IiLAAIAAgjICiAAIAAgyIh+AAIAAgiIB+AAIAAgxQhMADg1gBIgFgjQBKACBagFQBfgFAvgIIAFAgQglAJhVAFQgJAAgKACIAAAyICEAAIAAAiIiEAAIAAAyICkAAIAAAjIi2AAQgcAsgxA5IC/gKIgHgHQgfglgLgKIAcgXQA/BFAhAvIgcAUIgWgcgAEnA4QghAfgTAMIgTgbQAYgOAPgPQAOgRAQgcIAeAMIgNAXIBHAoIgTAeQgcgXgngYgABdA2QgiAggZAOIgTgcQAZgNAUgSQAOgOAVgiIAcAPIgNAWQAcAUAdAXIgVAbQgXgYgegWgAASgPQAbgMASgSQAQgRAUgiIAcAQIgMAWQAcARAcAUIgTAcIg2gqQgkAjgZAMgAEfghQgDADAAACQgWAVgUAOIgVgaQAWgOAOgQQAOgOAOgeIAeANIgNAXQAmATAiAVIgPAcQgegVgqgXgADDiXQg0Aph3AhIgOghQCFgcAvgxIAeALQgBABAAABQAAAAgBABQAAAAgBAAQAAABAAAAQBJAsBfASIgPAhQhggZhPgxg");
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


(lib.arrowV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhjAmIAtAAIAAkfIBuAAIAAEfIAsAAIhkDUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrowV, new cjs.Rectangle(-10,-25,20,50), null);


(lib.arrowF = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AhjAmIAtAAIAAkfIBuAAIAAEfIAsAAIhkDUg");
	this.shape.setTransform(0,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrowF, new cjs.Rectangle(-10,0,20,50), null);


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


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrow
	this.labelV = new lib.labelVV();
	this.labelV.name = "labelV";
	this.labelV.parent = this;
	this.labelV.setTransform(-84.75,-1.8);

	this.labelTT = new lib.labelTT();
	this.labelTT.name = "labelTT";
	this.labelTT.parent = this;
	this.labelTT.setTransform(24.5,-72.55);

	this.labelMG = new lib.labelMG();
	this.labelMG.name = "labelMG";
	this.labelMG.parent = this;
	this.labelMG.setTransform(37.4,60.4);

	this.labelKV = new lib.labelKV();
	this.labelKV.name = "labelKV";
	this.labelKV.parent = this;
	this.labelKV.setTransform(35.4,-68.4,1,1,0,0,0,0,3.3);

	this.arU = new lib.arrowF();
	this.arU.name = "arU";
	this.arU.parent = this;
	this.arU.setTransform(0,-20,1,1,180);

	this.arV = new lib.arrowV();
	this.arV.name = "arV";
	this.arV.parent = this;
	this.arV.setTransform(-60,0);

	this.arD = new lib.arrowF();
	this.arD.name = "arD";
	this.arD.parent = this;
	this.arD.setTransform(0,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.arD},{t:this.arV},{t:this.arU},{t:this.labelKV},{t:this.labelMG},{t:this.labelTT},{t:this.labelV}]}).wait(2));

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("ABajtQAKACAJAJQAMAMAAASQAAARgMANQgNANgSAAQgRAAgNgNQgFgEgCgGABajtQAFgCAHAAQAbAAATAeQAUAfAAAsQAAArgUAfQgTAegbAAQgcAAgTgeQgUgfAAgrQAAgXAGgTQAEgSAKgPQAPgXAUgFgADhjRQAmA7AABKQAABAgdA0IAvBdIhWCoIAsAaADhjRIBxBWIAeCTIgKAUAjTi8QASgjAegeQBJhJBnAAQBnAABJBJQAVAVAPAXAFwAYIAxAYAAUBOQgIAAgGgMQgGgMAAgRQAAgRAGgMQAGgLAIAAQAIAAAGALQAGAMAAARQAAARgGAMQgGAMgIAAgADqAoQgRAggcAbQhJBKhnAAQhnAAhJhKQgegdgRgiQgbgyABg+QgBg9AagzIhjA9Ig7CrIAAArAg9jwQgLADgIAJQgNAMABASQgBARANANQANANASAAQARAAAMgNQAFgFADgFQgFgSgJgPQgPgXgUgGQgGgBgGAAQgbAAgUAeQgTAfAAArQAAAsATAeQAUAfAbAAQAbAAAUgfQATgeAAgsQAAgWgFgTAjjFFIAsgaIhGigIArhnAl4AsIgoAA");
	this.shape.setTransform(-1.275,7.7125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABYBqQgcAAgTgfQgUgeABgsQAAgVAFgTQADAFAEAFQANAMARAAQASAAANgMQAMgNAAgRQAAgSgMgNQgJgIgKgDQAGgBAGAAQAbgBAUAfQATAfAAAqQAAAsgTAeQgUAfgbAAIAAAAgAiFBJQgUgeAAgrQAAgsAUgeQATgfAbAAQAGAAAGACQgKADgJAIQgMANAAARQAAASAMANQANAMASAAQARAAANgMQAEgFADgFQAFATAAAWQAAArgTAeQgTAfgcAAQgbAAgTgfg");
	this.shape_1.setTransform(0.1,-5.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF66FF").s().p("AgHCTQgGgMAAgRQAAgRAGgMQAGgMAHAAQAIAAAGAMQAGAMAAARQAAARgGAMQgGAMgIAAQgHAAgGgMgABAhIQgRAAgNgMQgEgFgDgFQAFgSAJgPQAPgYAUgFQAKADAJAIQAMANAAARQAAASgMANQgNAMgSAAIAAAAgAhehXQgMgNAAgRQAAgSAMgMQAJgJAKgCQAUAFAPAYQAJAOAFASQgDAGgEAEQgNANgRAAQgSAAgNgNg");
	this.shape_2.setTransform(0.1,-0.4125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(2,1,1).p("AFkk+IAKAUIAxgYADdg/IBzhXIAgiRIgCgDABZB3QALgDAIgIQANgNAAgRQAAgSgNgNQgNgMgRAAQgSAAgMAMQgFAFgDAFQgFgTAAgWQAAgrATgeQAUgfAbAAQAbAAAUAfQATAeAAArQAAArgTAfQgUAfgbAAQgGAAgGgCQgUgFgPgYQgJgPgFgSADdg/QApA8AABMQAAAygRAsIBngtIhWCoIBKgrAjRgrQASggAbgbQBKhKBmAAQBnAABKBKQASASAOAVAD1CnQgBACgBACQgSArgkAkQhKBJhnAAQhmAAhKhJQgdgdgSgiQgag0AAg+QAAhAAcg0AAoC8QAAARgGAMQgGAMgJAAQgIAAgGgMQgFgMAAgRQAAgSAFgMQAGgMAIAAQAJAAAGAMQAGAMAAASgAlvk+IAAArIA7CsIBjA8Ag+B0QgKgDgJgIQgMgNAAgRQAAgSAMgNQANgMASAAQARAAANAMQAFAFADAFQAFgSAAgXQAAgqgUgfQgTgfgcAAQgbAAgTAfQgUAfAAAqQAAAsAUAeQATAfAbAAQAHAAAFgCQAUgFAPgYQAKgPAFgSAl2kTIgoAAAjTC7IhZgpIBGCgIhGgr");
	this.shape_3.setTransform(-1.225,-7.3625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF66FF").s().p("AgHBXQgGgNAAgRQAAgRAGgMQAGgMAHAAQAIAAAGAMQAGAMAAARQAAARgGANQgGAMgIgBQgHABgGgMgAApgnQgJgPgFgSQADgFAEgFQANgNARAAQASAAANANQAMANAAARQAAASgMAMQgJAJgKADQgUgGgPgXgAhegZQgMgMAAgRQAAgSAMgNQANgMASgBQARABANAMQAEAFADAFQgFASgJAPQgPAXgUAGQgKgDgJgJg");
	this.shape_4.setTransform(0.1,5.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABYBqQgGAAgGgCQAKgCAJgJQAMgMAAgSQAAgRgMgNQgNgNgSAAQgRAAgNANQgEAEgDAGQgFgTAAgXQgBgqAUgfQATgeAcAAQAbAAAUAeQATAfAAAqQAAAsgTAfQgUAegbAAIAAAAgAiFBJQgUgfAAgqQAAgsAUgeQATgfAbAAQAcAAATAfQATAeAAAsQAAAVgFATQgDgFgEgFQgNgNgRAAQgSAAgNANQgMANAAARQAAASAMAMQAJAJAKADQgGABgGAAQgbAAgTgeg");
	this.shape_5.setTransform(0.1,-5.9125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

	// 圖層 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF66FF").s().p("AAAD6QhmAAhKhJQhJhKAAhnQAAhmBJhKQBKhJBmAAQBnAABKBJQBJBKAABmQAABnhJBKQhKBJhnAAIAAAAg");
	this.shape_6.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(2));

	// 圖層_3
	this.unbrella = new lib.unbrella();
	this.unbrella.name = "unbrella";
	this.unbrella.parent = this;
	this.unbrella.setTransform(1.1,-89.8,1,1,0,0,0,101,79.5);

	this.timeline.addTween(cjs.Tween.get(this.unbrella).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.1,-85.8,155.1,159.39999999999998);


(lib.theChart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// emp
	this.emp = new lib.emp();
	this.emp.name = "emp";
	this.emp.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.emp).wait(1));

	// 圖層_3
	this.ll4 = new lib.lll();
	this.ll4.name = "ll4";
	this.ll4.parent = this;
	this.ll4.setTransform(345.1,0);

	this.ll3 = new lib.lll();
	this.ll3.name = "ll3";
	this.ll3.parent = this;
	this.ll3.setTransform(270.25,0);

	this.ll2 = new lib.lll();
	this.ll2.name = "ll2";
	this.ll2.parent = this;
	this.ll2.setTransform(226.1,0);

	this.ll1 = new lib.lll();
	this.ll1.name = "ll1";
	this.ll1.parent = this;
	this.ll1.setTransform(141.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ll1},{t:this.ll2},{t:this.ll3},{t:this.ll4}]}).wait(1));

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Egu3AAAMBdvAAA");
	this.shape.setTransform(300,-300);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("Egu3AAAMBdvAAA");
	this.shape_1.setTransform(300,-100);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("Egu3AAAMBdvAAA");
	this.shape_2.setTransform(300,-200);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgxCIQgHi5gWgtQgIgPgRgBQgHAAgNADIgCgKIBUgSQAJAVAGAXQAIAhAFAuQACAWAEBKQAkgpAHgKQAngzAFgKQAKgPAEgMQADgIAAgJQAAgHgNgKQgOgKAAgMQAAgJAIgIQAHgHAKAAQAMAAAKAKQAJAKAAAPQAAAPgFANQgHAXgVAgQgVAfguA2QgGAHg6A9g");
	this.shape_3.setTransform(-32.325,-418.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhECkQgIgHAAgNQAAgQAJghIAxioIgsAAIADgMQAggIAVgSQAVgRAagrIANAAIgXBQIAuAAIgFASIgtAAIgyCsQgIAbAAAJQAAAEACAEQADACADAAQAHAAAMgKQAGgGAZgeIAJAHQgbAogXAQQgQALgRAAQgNAAgIgJg");
	this.shape_4.setTransform(594.725,28.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AiMhpIEZBpIkZBqg");
	this.shape_5.setTransform(0.075,-418.75,1,1,-90);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AiMhpIEZBpIkZBqg");
	this.shape_6.setTransform(627.65,-0.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("EgvqAhfIAAijMBiEAAAEgyZAe8ICvAAMAAAhAa");
	this.shape_7.setTransform(305.175,-197.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("Egu3gfPMBdvAAAMAAAA+fMhdvAAAg");
	this.shape_8.setTransform(300,-200);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.498)").s().p("Egu3AfQMAAAg+fMBdvAAAMAAAA+fg");
	this.shape_9.setTransform(300,-200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.theChart, new cjs.Rectangle(-44.9,-432.9,686.6999999999999,478.4), null);


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
	this.shape_2.graphics.f("#000000").s().p("ADPBzQAdgDAYgRIANAWQgfASggAFQAAgOgDgLgAisCFIAAgaQAkAKAJgHQACgEAAgEIAAh+IAaAAIAACEQgBASgOAIQgHAFgNAAQgPAAgXgGgAEyB3IAJgVQAWAGAcAOIgJAVQgfgPgTgFgAkqCFIgBgbQAUAHALABIAJgDQAGgFAAgHIAAgLIhMAAIAAAtIgYAAIAAiSQABgJAIABIBsAAQAIgBAAAJIAAB4QAAARgMAIQgHAFgQAAQgOAAgVgEgAlJBBIBMAAIAAgVIhMAAgAlJACIAAATIBMAAIAAgTIgBgBIhIAAQgBAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAgABVBqQAsgFAagGQANgoADgaIAYAGQgDAXgJAdIAZgJIAKAYQgyAThLAKgABjAnIAZgIQAJAZAEAgIgYAHQgGgkgIgUgADoBeQgBAAgBgBQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAimQAAgFAEAAIAgAAQAJgTACgFIg1AAIAAgXICLAAIAAAXIg+AAIgEAOQgEAGgBAEIA9AAQADAAAAAFIAACmQAAABAAABQAAAAAAABQgBAAAAAAQgBABgBAAgAD7BGIBPAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAIAAgaIhQAAgAD7ATIBQAAIAAgaIhQAAgAD7geIBQAAIAAgbIhQAAgAjEBcIAAhmIAZAAIAABmgABhATQgBAAgBAAQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAhhQAAAAAAgBQAAgBABAAQAAgBABAAQABAAABAAIBlAAQABAAABAAQABAAAAABQABAAAAABQAAABAAAAIAABhQAAABAAABQAAAAgBABQAAAAgBAAQgBAAgBAAgAB1gEQAAAAABAAQAAABAAAAQAAAAAAAAQABAAAAAAIA6AAIABgBIAAg5Ig9AAgAlqggIAAgZIBcAAIgBgCQgEgLAAgDIAXgFIAGAVIA1AAQAGgKAEgPIAVAKIgFAPIBTAAIAAAZgAiihjIgiAAIAAABQgIAOgJAJIgVgPQAVgUAKgdIAXAJIgDAIIBcAAIAAAXIgsAAIAKAQIgVALQgIgRgIgKgAlshcQAbgTAOgcIAVAMIgDAFIBHAAIAAAXIgkAAIAHAOIgXAKQgFgQgFgIIgYAAIgZAZgABZhpIAAgXIB3AAIAAAXg");
	this.shape_2.setTransform(67.45,-1);

	this.label = new cjs.Text("文字標籤", "26px 'Microsoft JhengHei'", "#FFFFFF");
	this.label.name = "label";
	this.label.lineHeight = 37;
	this.label.lineWidth = 132;
	this.label.parent = this;
	this.label.setTransform(313,-19.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.label},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.chArrow, new cjs.Rectangle(-23.8,-21.5,470.90000000000003,39.5), null);


// stage content:
(lib.myAnimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// helper
	this.p2 = new lib.p2();
	this.p2.name = "p2";
	this.p2.parent = this;
	this.p2.setTransform(407.6,582.5,2.5,2.5);

	this.helicopter = new lib.helicopter();
	this.helicopter.name = "helicopter";
	this.helicopter.parent = this;
	this.helicopter.setTransform(409.35,392.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.helicopter},{t:this.p2}]}).wait(1));

	// UI
	this.btnPlayStop = new lib.btnPlayStop();
	this.btnPlayStop.name = "btnPlayStop";
	this.btnPlayStop.parent = this;
	this.btnPlayStop.setTransform(1435.6,699.95,0.8,0.8);
	new cjs.ButtonHelper(this.btnPlayStop, 0, 1, 2, false, new lib.btnPlayStop(), 3);

	this.chArrow = new lib.chArrow();
	this.chArrow.name = "chArrow";
	this.chArrow.parent = this;
	this.chArrow.setTransform(1630.85,851.5,1,1,0,0,0,211.7,-2.2);

	this.btnReset = new lib.btnReset();
	this.btnReset.name = "btnReset";
	this.btnReset.parent = this;
	this.btnReset.setTransform(1525.35,708.95,0.5,0.5,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btnReset, 0, 1, 2, false, new lib.btnReset(), 3);

	this.btnOpen = new lib.btnOpen();
	this.btnOpen.name = "btnOpen";
	this.btnOpen.parent = this;
	this.btnOpen.setTransform(1465.3,780.95,1.5,1.5);
	new cjs.ButtonHelper(this.btnOpen, 0, 1, 2, false, new lib.btnOpen(), 3);

	this.btnJump = new lib.btnJump();
	this.btnJump.name = "btnJump";
	this.btnJump.parent = this;
	this.btnJump.setTransform(1465.3,780.95,1.5,1.5);
	new cjs.ButtonHelper(this.btnJump, 0, 1, 2, false, new lib.btnJump(), 3);

	this.btnDrop = new lib.btnDrop();
	this.btnDrop.name = "btnDrop";
	this.btnDrop.parent = this;
	this.btnDrop.setTransform(1465.3,780.95,1.5,1.5);
	new cjs.ButtonHelper(this.btnDrop, 0, 1, 2, false, new lib.btnDrop(), 3);

	this.btnLeft = new lib.theBtnLeft();
	this.btnLeft.name = "btnLeft";
	this.btnLeft.parent = this;
	this.btnLeft.setTransform(1088.6,1165.6);

	this.btnRight = new lib.theBtnRight();
	this.btnRight.name = "btnRight";
	this.btnRight.parent = this;
	this.btnRight.setTransform(1238.6,1165.6);

	this.btnDown = new lib.theBtnDown();
	this.btnDown.name = "btnDown";
	this.btnDown.parent = this;
	this.btnDown.setTransform(1163.6,1165.6);

	this.btnUp = new lib.theBtnUp();
	this.btnUp.name = "btnUp";
	this.btnUp.parent = this;
	this.btnUp.setTransform(1163.6,1090.6);

	this.slCameraRR = new lib.theSlider();
	this.slCameraRR.name = "slCameraRR";
	this.slCameraRR.parent = this;
	this.slCameraRR.setTransform(1350,1020);

	this.btn02 = new lib.theButton();
	this.btn02.name = "btn02";
	this.btn02.parent = this;
	this.btn02.setTransform(1564,1165.6);

	this.btn01 = new lib.theButton();
	this.btn01.name = "btn01";
	this.btn01.parent = this;
	this.btn01.setTransform(1414,1165.6);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sl01},{t:this.sl02},{t:this.sl03},{t:this.ch01},{t:this.ch02},{t:this.btn01},{t:this.btn02},{t:this.slCameraRR},{t:this.btnUp},{t:this.btnDown},{t:this.btnRight},{t:this.btnLeft},{t:this.btnDrop},{t:this.btnJump},{t:this.btnOpen},{t:this.btnReset},{t:this.chArrow},{t:this.btnPlayStop}]}).wait(1));

	// btn3D
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("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");
	this.shape.setTransform(147.675,51.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(5,1,1).p("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");
	this.shape_1.setTransform(147.675,51.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("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");
	this.shape_2.setTransform(147.675,51.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("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");
	this.shape_3.setTransform(1507.725,38.075);

	this.chart = new lib.theChart();
	this.chart.name = "chart";
	this.chart.parent = this;
	this.chart.setTransform(883.6,543.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("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");
	this.shape_4.setTransform(101.2,875.708);

	this.btn3D = new lib.btn3D();
	this.btn3D.name = "btn3D";
	this.btn3D.parent = this;
	new cjs.ButtonHelper(this.btn3D, 0, 1, 2, false, new lib.btn3D(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn3D},{t:this.shape_4},{t:this.chart},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(800,450,1873.8000000000002,747.0999999999999);
// library properties:
lib.properties = {
	id: '98EA1A955B63F6489D0F00F6BFD1C4DE',
	width: 1600,
	height: 900,
	fps: 30,
	color: "#66FFFF",
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