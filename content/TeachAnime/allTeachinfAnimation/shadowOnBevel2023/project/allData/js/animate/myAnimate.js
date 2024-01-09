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


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("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");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(8,1,1).p("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");
	this.shape_1.setTransform(0,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("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");
	this.shape_2.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.title, new cjs.Rectangle(-287.5,-48,575,96.1), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AhMBNQghggAAgtQAAgsAhggQAgghAsAAQAtAAAhAhQAgAgAAAsQAAAtggAgQghAhgtAAQgsAAggghg");

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


(lib.shadowCar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AnLHMIAAuXIOXAAIAAOXg");
	this.shape.setTransform(-0.002,0.0449,0.1087,0.1087);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shadowCar, new cjs.Rectangle(-5,-4.9,10,10), null);


(lib.shadowBall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Aj1D2QhlhmAAiQQAAiPBlhmQBmhmCPABQCQgBBmBmQBlBmABCPQgBCQhlBmQhmBliQAAQiPAAhmhlg");
	this.shape.setTransform(-0.0245,-0.0051,0.1439,0.1439);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shadowBall, new cjs.Rectangle(-5,-5,10,10), null);


(lib.btnShoot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEfDQIACgrQAhALAOACQAQAGAOAAQAHAAALgIQAEgFAAgIIAAkPIh+AAIAAgpIB+AAIAAhJIApAAIAABJIAiAAIAAApIgiAAIAAEaQAAAdgWANQgNAJgXAAQggAAg0gRgAkJC6QAtgMAcgNQgcgWgXgoIAkgQQAYArAZARQAwgdATgnQACgHgIABIiSAAIAAglICyAAIAVAVQgVA4gcAcQgRANgNANQApARA+ACIgJAnQhPgFgygeQgEADgGACQgvAZgeAHgAB8DYIAAgrQAwAPAOgIQAJgHAAgMIAAg+IggAbQgYAUgiARQgiATgcALIgYgjQBaggA0gtIAGgGIiNARIgHgnIAagEIAAjiQACgJAHAAIA6AAQAIgVACgRIAlAJIgFAdIBHAAQAJABAAAIIAACfIAVg0IAlALQgSA2goA9IAAB6QAAAXgSANQgNAIgaAAQgWAAgfgGgABUAtIBvgLIAAggIhvAAgABUgkIBvAAIAAgkIhvAAgABUiPIAAAgIBvAAIAAggQAAgBAAgBQAAgBgBAAQAAgBAAAAQAAAAgBAAIhpAAQgEACAAACgAmfDUIgEgpQBAAUAWgHQAPgGAGgLQAEgaAAgeQAAgIgGAAIhPAAIgEARQgSgEgRgFIAPhnQACgNALAAIBlAAIAAghQAAgEgFAAIhiAAIAAgXIgpAMIgPgkQAtgJAcgIQgYgWgXgMIAYgeQAiAXAcAWQAkgYARgWQACgGgGACIhSAAIAAgmIB2AAIAUATQghBRhcAjIBfAAQAKACAAAIIAABtIgmAAIAAgLIhHAAQgIACgBAHIgEAdIBpAAQANABAAAGIgGBnQgFARgNANIgIAEQgPAJgcAAQgdAAgqgJgAEkgVIAogMQAgBoAFAeIgnAIQgNhGgZg8gAkGgDQAPgFAGgGQANgNAAgXIAAgeIACgFIAGgCIBuAAQAEAAACACIACAFIAAAzQACAIAAAFQADAEAMAAIADAAQAEgCAGAAQAEAAAAgLIAAgVIAhAGIgDAnQgCAJgGABQgLAMgLAAIgiAAQgRAAgIgMQgLgHAAgQIAAgkQAAgDgFAAIgsAAQgFgCAAAFIAAAOQAAAPgGALQgLAZgeANgAjmi1IAVgiIAkAkQAagaANgRIAYAaQgHALgcAdIAYAQIArgtIAZAdIgZAaQgEAFgFACQAiARAnALIgYAkQhxgvhPhLg");
	this.shape.setTransform(0.025,0.0082);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FFFF").ss(3,1,1).p("AnzkrIPnAAQBkAAAABkIAAGPQAABkhkAAIvnAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000066","#0066FF"],[0,1],0,30,0,-29.9).s().p("AnzEsQhkAAAAhkIAAmPQAAhkBkAAIPnAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#00FFFF"],[0,1],0,30,0,-29.9).s().p("AnzEsQhkAAAAhkIAAmPQAAhkBkAAIPnAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF00FF").ss(3,1,1).p("AjHkrIGPAAQBkAAAABkIAAGPQAABkhkAAImPAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("AjHEsQhkAAAAhkIAAmPQAAhkBkAAIGPAAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{rotation:0}}]}).to({state:[{t:this.shape_3,p:{rotation:0}},{t:this.shape_1,p:{rotation:0}}]},1).to({state:[{t:this.shape_3,p:{rotation:180}},{t:this.shape_1,p:{rotation:180}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-31.5,123,63);


(lib.btnReset = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFACqQgmAYg+AcIgYgjQA6gVAkgXQgmglghg+IAhgTQAcA6AoAkQA6gvANg4IgCgEQgEgCgFAAIihAAIAAgmIDCAAIAXATQgPBbhFA/QApAbBEALIgWAnQhLgWgsgegAnJDXIAAgmIDEAAIAAgWIiuAAIAAgmICuAAIAAgaIiaAAQgFAAAAgGIAAieQAAgGAFAAICaAAIAAgYIjIAAIAAgmIDIAAIAAgWQhbAEg/gCIgDgpQBOABBogFQBqgIA1gHIAGAnQgpAKhgAFQgGACgGAAIAAAYIDHAAIAAAmIjHAAIAAAYICZAAQAFAAAAAGIAACeQAAAGgFAAIiZAAIAAAaICtAAIAAAmIitAAIAAAWIDEAAIAAAmgAjcA1IB1AAIACgBIAAgbIh3AAgAl9A0QAAAAABAAQAAABAAAAQAAAAABAAQAAAAAAAAIB2AAIAAgcIh4AAgAjcgLIB3AAIAAgeIh3AAgAl9gLIB4AAIAAgeIh4AAgAAdDTIAAijQACgLALAAICEAAQANAAgBALIAACBQABANgNAAIhqAAIAAAVgABEBQIAABJIBHAAQAIgCAAgGIAAhBQAAgGgGAAIhDAAQgFAAgBAGgAAnAOIAAgkICIAAIAAAkgAC/hFIAQgMQAggcAAg0IAAgoQAAgDACgCIAGgCICHAAQADAAACACIAEAFIAABkQAAALACACQADAGAMAAIADAAIAMgEQADgCABgLIAAggIAjAEIgBA2QgEAJgGAIQgNALgNAAIgiAAQgTAAgHgLQgMgNABgNIAAhTQgBgGgFAAIhDAAQgFACAAACIAAATQgCBJg5AkgAAngtIAAglICIAAIAAAlgAAShpIAAgnIC0AAIAAAngAAoinIAAgnICJAAIAAAng");
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
	this.shape_4.graphics.f().s("#FF00FF").ss(3,1,1).p("AjHkrIGPAAQBkAAAABkIAAGPQAABkhkAAImPAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("AjHEsQhkAAAAhkIAAmPQAAhkBkAAIGPAAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{rotation:0}}]}).to({state:[{t:this.shape_3,p:{rotation:0}},{t:this.shape_1,p:{rotation:0}}]},1).to({state:[{t:this.shape_3,p:{rotation:180}},{t:this.shape_1,p:{rotation:180}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-31.5,123,63);


(lib.btnRelease = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADSDAQBHgyAcgeIAMgOQgthHgIhTIgNAaIgpgLQAvhVABhfIAqACQgEAcgCAYIClAAIAAApIgkAAQAAB+g6BhQArA4AzApIglAaQg3g0gWgeIgGgGQg4A8gtAegAFbA9QAagxAIguQAHgjgCg5IhUAAQAEB3ApBEgAisDaIAAg2IhwAAIAAglIBwAAIAAgeIhfAAIAAgmIAyAAIgJglIg6AAIAAglIBwAAIAAgcIhhAAIAAgkIBhAAIAAgaIhlAAQgEAAAAgGIAAhbQACgGACAAIDwAAQAGAAAAAGIAABbQAAAGgGAAIhjAAIAAAaIBjAAIAAAkIhjAAIAAAcIByAAIAAAlIg8AAIgEASIgFATIA4AAIAAAmIhlAAIAAAeIByAAIAAAlIhyAAIAAA2gAizA7IAzAAIALglIhGAAQAGASACATgAhiiJIAfAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIAAgjQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAIgfAAgAioiJIAiAAIAAgnIgiAAgAjviuIAAAlIAkAAIAAgnIgkAAQgBAAAAAAQAAAAAAAAQAAAAAAABQAAAAABABgAmFDaIAAiWIgCAGQgTApgSAZIgigMQApg9AXhAIg7AAIAAglIBEAAIAAiDIg2ACIgGgkQBSgDA+gMIAGAkQgRAEgkAFIAACHIAzAAIAAAlIgxAAQAiAjAcAkIgcAYIgkgwIAACogABcDPIgCgvQAaAMANABQARACACgFQAIgGAFgTQAEgJAAgTQAHiLgFgIIgGgCIg0AAQgGA9gHA1QgVBdgTAkIgpgJQA2h3AAiLIAAhGIgvAAIAAgpIBXAAIAAg2IApAAIAAA2IBUAAIAAApIh7AAIAAA1IBSAAQAEAAAFACQAGAEAAAQQAABMgCA+QgEBlgeAXQgKAGgRAAQgVAAgggKgAnBiJIAggHQALAjAGAzIgiAGQgIg3gHgegAlWhAQALgrACgtIAiAGQgIAygHAog");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FFFF").ss(3,1,1).p("AnzkrIPnAAQBkAAAABkIAAGPQAABkhkAAIvnAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000066","#0066FF"],[0,1],0,30,0,-29.9).s().p("AnzEsQhkAAAAhkIAAmPQAAhkBkAAIPnAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#00FFFF"],[0,1],0,30,0,-29.9).s().p("AnzEsQhkAAAAhkIAAmPQAAhkBkAAIPnAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF00FF").ss(3,1,1).p("AjHkrIGPAAQBkAAAABkIAAGPQAABkhkAAImPAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("AjHEsQhkAAAAhkIAAmPQAAhkBkAAIGPAAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{rotation:0}}]}).to({state:[{t:this.shape_3,p:{rotation:0}},{t:this.shape_1,p:{rotation:0}}]},1).to({state:[{t:this.shape_3,p:{rotation:180}},{t:this.shape_1,p:{rotation:180}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-31.5,123,63);


(lib.arrowG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AA8CRIg8FjIg7ljIAdAAIAApSIAegyIAfAyIAAJSg");
	this.shape.setTransform(0,50);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("Ag7CRIAdAAIAApSIAegyIAfAyIAAJSIAdAAIg8Fjg");
	this.shape_1.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrowG, new cjs.Rectangle(-7,-1,14,102), null);


(lib.arrowAy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006600").ss(2,1,1).p("AjYk7IABg7IAAAAIA0AdIAAAAID9G3IAagPIBlEoIjNjsIAZgOIj9m4AijlZIABAA");
	this.shape.setTransform(21.5875,37.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99FF33").s().p("AAMCLIAZgOIj9m4IAAAAIABg7IAAAAIA0AdIAAABID9G2IAagPIBlEog");
	this.shape_1.setTransform(21.5875,37.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AAAAGIAAAAIAAAAIAAAAIAAAAIAAgLIAAALg");
	this.shape_2.setTransform(5.2375,2.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrowAy, new cjs.Rectangle(-1.1,-1,45.4,77), null);


(lib.arrowAx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0000FF").ss(2,1,1).p("AC8hIIjrCIIAOAaIi3AkIB7iMIAPAZIDsiIACdh9IA8ABIgdA1");
	this.shape.setTransform(-21.6,12.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("AhdgNIAQAYIDriIIgBAAIA8ABIgdA1IAAgBIjrCIIAPAZIi4Alg");
	this.shape_1.setTransform(-21.6,12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrowAx, new cjs.Rectangle(-44.3,-1.2,45.4,27.2), null);


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


(lib.textureV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_4
	this.shadowBall = new lib.shadowBall();
	this.shadowBall.name = "shadowBall";
	this.shadowBall.parent = this;
	this.shadowBall.setTransform(6.85,14.65);

	this.shadowCar = new lib.shadowCar();
	this.shadowCar.name = "shadowCar";
	this.shadowCar.parent = this;
	this.shadowCar.setTransform(11.85,9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shadowCar},{t:this.shadowBall}]}).wait(1));

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AhjPoIAA/PIDHAAIAAfPg");
	this.shape.setTransform(10,100);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.textureV, new cjs.Rectangle(0,0,20,200), null);


(lib.textureH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_4
	this.shadowBall = new lib.shadowBall();
	this.shadowBall.name = "shadowBall";
	this.shadowBall.parent = this;
	this.shadowBall.setTransform(9.7,13.05);

	this.shadowCar = new lib.shadowCar();
	this.shadowCar.name = "shadowCar";
	this.shadowCar.parent = this;
	this.shadowCar.setTransform(14.7,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shadowCar},{t:this.shadowBall}]}).wait(1));

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AvnBkIAAjHIfPAAIAADHg");
	this.shape.setTransform(100,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.textureH, new cjs.Rectangle(0,0,200,20), null);


(lib.textureGroundY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_3
	this.shadowBall = new lib.shadowBall();
	this.shadowBall.name = "shadowBall";
	this.shadowBall.parent = this;
	this.shadowBall.setTransform(10.25,10);

	this.shadowCar = new lib.shadowCar();
	this.shadowCar.name = "shadowCar";
	this.shadowCar.parent = this;
	this.shadowCar.setTransform(15.25,4.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shadowCar},{t:this.shadowBall}]}).wait(1));

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AvnBkIAAjHIfPAAIAADHg");
	this.shape.setTransform(100,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.textureGroundY, new cjs.Rectangle(0,0,200,20), null);


(lib.textureGroundX = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.shadowBall = new lib.shadowBall();
	this.shadowBall.name = "shadowBall";
	this.shadowBall.parent = this;
	this.shadowBall.setTransform(6.95,13.9);

	this.shadowCar = new lib.shadowCar();
	this.shadowCar.name = "shadowCar";
	this.shadowCar.parent = this;
	this.shadowCar.setTransform(11.95,8.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shadowCar},{t:this.shadowBall}]}).wait(1));

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AhjD6IAAnzIDHAAIAAHzg");
	this.shape.setTransform(10,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.textureGroundX, new cjs.Rectangle(0,0,20,50), null);


(lib.slLight = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgtA0QgRgSAAgiQAAgkAVgTQARgOAYAAQAcAAASASQARASAAAgQAAAZgIAPQgHAPgPAIQgPAIgSAAQgbABgSgTgAgbgmQgMANAAAZQAAAaAMANQALANAQAAQARAAALgNQAMgNAAgaQAAgYgMgOQgLgNgRABQgQgBgLANg");
	this.shape.setTransform(208.7875,-14.4,0.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AF7CFQhBAbhAAIIgKgdQA8gIAjgMIAJgCQgjgSgegSIALgeQAvAiAqARQAugYAXgbQADgCgGAAIiuAAIAAgeIDKAAIAVATQgZAsg3AiQA0AOA7AGIgOAgQhMgOg4gVgAAqChIAAgjQA8APANgIQAEgDAAgNIAAghIjdAAQgOAwgTAjIgfgNQAig/ACgvIAAh1IgUAKIgQgeQBDgbAagvIAbALQgEAGgCAFIB8AAIATARQgLAXgWARIBSAAQAKABAAAJIAADOQgCATgJAKQgMAKgVABQgZgBgngGgAAWA2IBhAAIAAgqIhhAAgAhjA2IBbAAIAAgqIhbAAgAAWgRIBhAAIAAgmQAAgDgEAAIhdAAgAhjg3IAAAmIBbAAIAAgpIhZAAQAAAAgBAAQAAAAgBABQAAAAAAABQAAAAAAABgAhrhYIB2AAQAZgOAOgPIh7AAQgRATgRAKgAoMCLQAbgDAZgNQAPgLANgOQAUgdABhAIAAgFIheAAIAAgeICOAAIAAiGIAgAAIAACGICOAAIAAAeIhiAAIAABwQAAAJAEADQAHAGAGAAIAqAAQAEAAAEgEQAGgDABg7IAeAEQgEBIgGAJQgNAMgJAAIhIAAQgNgCgKgJQgIgKAAgKIAAiCIg+AAIAAAFQgDBCgVAmQgNAVgSANQgWAOgjAJgAC/CSQASgeAGgeQAFgYAAgnIAAieQAAgIAJAAIB6AAIAAgYIAfAAIAAAYICFAAIAAAeIg0AAIAAAeIA0AAIAAAeIg0AAIAAAqQgBANgOAAIiRAAQgOAAAAgNIAAgqIgnAAIAABVQgCBLgdAzgAFAgeQAAADAEAAIBnAAQAFAAAAgDIAAgXIhwAAgAFAhTIBwAAIAAgeIhwAAgAD6huIAAAbIAnAAIAAgeIgjAAQgEAAAAADgAnvh9IAagQQAaAdAaAyIgbAQQgcg0gXgbgAktg/QAkgwAMgiIAcAQQgPAmgiArg");
	this.shape_1.setTransform(-77.225,0);

	this.label = new cjs.Text("文字標籤", "26px 'Microsoft JhengHei'", "#FFFFFF");
	this.label.name = "label";
	this.label.textAlign = "right";
	this.label.lineHeight = 37;
	this.label.lineWidth = 146;
	this.label.parent = this;
	this.label.setTransform(460.45,-70.65);

	this.valueText = new cjs.Text("-00", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(172,-14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.valueText},{t:this.label},{t:this.shape_1},{t:this.shape}]}).wait(1));

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

}).prototype = getMCSymbolPrototype(lib.slLight, new cjs.Rectangle(-129.7,-72.6,592.2,89.39999999999999), null);


(lib.rbShadow04 = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(42.8,0,1.2402,0.3399,0,0,0,0.3,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsAsQgsAsg+AAQg9AAgtgsQgrgsAAg+QAAg9ArgtQAtgrA9AAQA+AAAsArQAsAtAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBpQgsgrAAg+QAAg9AsgsQAsgsA9AAQA+AAArAsQAtAsAAA9QAAA+gtArQgrAtg+AAQg9AAgsgtg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiQCBQAYgVAPgiIAXANQgSAngcAXQgJgPgHgFgABZBTIAWgMQATAZAQAlIgWANQgTgogQgXgAATBSIAZgFQANApACAXIgZADQgEgXgLgngAgsCOQAAgmgEgXIAagCIADBAgAiGA/IAAgaIAqAAIAAg2IgqAAIAAgaIAqAAIAAg1IgBADQgQAVgTALIgRgUQARgMANgRQAKgMALgaIAZAIIgGAPIDWAAIAAAbIghAAIAAA3IAnAAIAAAaIgnAAIAAA2IAjAAIAAAagAAvAlIAhAAIAAg2IghAAgAgJAlIAeAAIAAg2IgeAAgAhBAlIAeAAIAAg2IgeAAgAAvgrIAhAAIAAg3IghAAgAgJgrIAeAAIAAg3IgeAAgAhBgrIAeAAIAAg3IgeAAg");
	this.shape_2.setTransform(42.845,0.5681,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbShadow04, new cjs.Rectangle(-20.5,-18,126,36), null);


(lib.rbShadow03 = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(42.8,0,1.2402,0.3399,0,0,0,0.3,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsAsQgsAsg+AAQg9AAgtgsQgrgsAAg+QAAg9ArgtQAtgrA9AAQA+AAAsArQAsAtAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBpQgsgrAAg+QAAg9AsgsQAsgsA9AAQA+AAArAsQAtAsAAA9QAAA+gtArQgrAtg+AAQg9AAgsgtg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1,1).p("AlXg1IB9DXIIylD");
	this.shape_2.setTransform(67.5,-3.1,1,1,0,0,0,4.4,-3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbShadow03, new cjs.Rectangle(-20.5,-18.5,126,37.5), null);


(lib.rbShadow02 = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(42.8,0,1.2402,0.3399,0,0,0,0.3,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsAsQgsAsg+AAQg9AAgtgsQgrgsAAg+QAAg9ArgtQAtgrA9AAQA+AAAsArQAsAtAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBpQgsgrAAg+QAAg9AsgsQAsgsA9AAQA+AAArAsQAtAsAAA9QAAA+gtArQgrAtg+AAQg9AAgsgtg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1,1).p("AlEB9IKIAAIAAj5");
	this.shape_2.setTransform(58.15,-0.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbShadow02, new cjs.Rectangle(-20.5,-18,126,36), null);


(lib.rbShadow01 = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(42.8,0,1.2402,0.3399,0,0,0,0.3,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsAsQgsAsg+AAQg9AAgtgsQgrgsAAg+QAAg9ArgtQAtgrA9AAQA+AAAsArQAsAtAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBpQgsgrAAg+QAAg9AsgsQAsgsA9AAQA+AAArAsQAtAsAAA9QAAA+gtArQgrAtg+AAQg9AAgsgtg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah/BnQgPgNAAgVQAAgNAGgKQAFgJAJgGQAJgHALgDIAZgEQAjgEAQgGIAAgHQgBgRgHgHQgLgJgWAAQgTAAgKAHQgJAHgEASIgcgEQADgRAKgMQAIgKAQgGQARgGAVAAQAVAAAOAFQANAFAGAIQAGAHACAMQABAGAAATIAAAlQAAAnACAKQACALAFAKIgcAAQgFgJgBgMQgQAOgOAFQgPAFgQAAQgbAAgPgNgAhIAoQgSACgHADQgHADgEAGQgEAHAAAHQAAALAIAIQAJAHAQAAQARAAAMgHQANgHAGgMQAEgKABgSIAAgLQgQAGgeAFgABzBxIAAjlIAcAAIAADlgAAsBxIAAjlIAcAAIAADlg");
	this.shape_2.setTransform(39.45,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbShadow01, new cjs.Rectangle(-20.5,-18,126,36), null);


(lib.rbGG = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(29.7,0,0.9656,0.3399,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsAsQgsAsg+AAQg9AAgtgsQgrgsAAg+QAAg9ArgtQAtgrA9AAQA+AAAsArQAsAtAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBpQgsgrAAg+QAAg9AsgsQAsgsA9AAQA+AAArAsQAtAsAAA9QAAA+gtArQgrAtg+AAQg9AAgsgtg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhABxQgSgFgIgJQgHgJAAgJQAAgHAEgIQAGgJAHgFIAbgQQgIgGAAgIQAAgHAHgIQAHgHAXgJQgUgEgKgMQgMgNAAgPQAAgZAWgUQAVgTAkAAQAOAAAIACQAIADAIAGIAwAAIgGASIgdAAQAEAJgBAJQAAAXgTASQgUASgiACQgSAGgKAGQgDADAAADQAAAEADADQADACANADIAhAIQAcAHAKAJQAIAJABANQAAAOgLAMQgLAMgUAHQgUAGgZAAQgWAAgRgFgAhDA5QgIALAAAJQAAAMALAIQAPALAeAAQAXAAASgJQASgJAAgNQAAgHgGgGQgHgGgTgEIg1gNQgPAGgHAKgAgXhZQgNAUABAVQAAAOAIAJQAIAIAMAAQAIAAAJgFQAIgFAHgJQAFgJAEgOQADgOAAgGQAAgOgHgIQgIgIgMAAQgUAAgNAUg");
	this.shape_2.setTransform(34.35,-0.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbGG, new cjs.Rectangle(-19.8,-18,98.6,36), null);


(lib.rbAxy = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(37.65,0,1.1,0.3399,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsAsQgsAsg+AAQg9AAgtgsQgrgsAAg+QAAg9ArgtQAtgrA9AAQA+AAAsArQAsAtAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBpQgsgrAAg+QAAg9AsgsQAsgsA9AAQA+AAArAsQAtAsAAA9QAAA+gtArQgrAtg+AAQg9AAgsgtg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ADNB0QgCgDAAgEQAAgEADgEQAEgDAEAAIAFABIACADIABAEIABABIADgCQAGgEAIgIIARgTIgHhIQgBgRgDgDQgEgEgHgBIgJABIgBgEIAigJQAEAHABAGIADAWIAFA4IAUgaIAPgYIAHgMIABgDIgBgCIgDgDQgEgBgDgDQgBgCAAgEQAAgFACgDQADgDAEAAQAFABAEAEQADAEAAAIQAAAJgGAKQgGAMgSAXQgSAYgZAdQgQATgJAGQgJAEgFAAQgEABgDgDgAhhA/QgCgEgIgiQgSAfgKAJQgHAFgGABQgFAAgEgDQgDgDAAgEQAAgEADgDQACgCAEAAQADAAAEADQADADADAAIADgCQAFgEAKgPIALgUIgHgcQgDgIgEgDQgEgDgJAAIgGAAIAAgEIAfgGQAGAHADAFIAHAWIAKgPIAJgLQAGgEAEgDIAGgBQAFABADACQADADAAADQAAAFgCACQgDACgEAAIgGgBIgHgBQgCgBgEAEQgHAFgKARIAKAnQACAJABACIADABQACAAADgCQAHgGAEgHIAFACQgIANgLAIQgGAGgEAAQgHAAgEgIgACUApQgFgEAAgHQAAgJAFgNIADgNQgXAdgUAMQgNAIgOAAQgMAAgJgKQgKgKAAgTQAAgbARgfQARgfAZgTQAUgOATAAQAKAAAIAFQAGAFAEAOIAHgVIAcgDIgnCGIAAADQAAAEACACQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABAAQADAAADgDQAHgFAMgQIAFAFQgMASgMAJQgNAJgLAAQgIAAgDgDgAB8hiQgSAPgOAdQgOAeAAAYQAAAKAGAHQAGAIAIAAQATgBAXgbQAdgmAAgnQABgPgHgHQgFgGgKAAQgMAAgMAKgAjiApQgDgEAAgHQAAgJADgNIAEgNQgXAdgTAMQgOAIgNAAQgNAAgKgKQgJgKAAgTQAAgbARgfQAQgfAbgTQATgOASAAQALAAAHAFQAIAFADAOIAGgVIAcgDIglCGIgBADQAAAEABACQABAAAAAAQABAAAAABQABAAAAAAQABAAAAAAQACAAAEgDQAHgFALgQIAHAFQgNASgNAJQgNAJgLAAQgHAAgEgDgAj5hiQgSAPgOAdQgOAeAAAYQAAAKAGAHQAGAIAIAAQATgBAWgbQAegmABgnQgBgPgFgHQgGgGgKAAQgLAAgNAKg");
	this.shape_2.setTransform(56.4,2.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbAxy, new cjs.Rectangle(-18.5,-18,112,36), null);


(lib.chVector = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(58.1,0,1.6,0.3399,0,0,0,0.2,0);
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AF8CFQhBAahAAJIgKgeQA9gGAigNIAJgBQgjgSgegTIALgdQAvAhAqARQAvgYAWgaQADgEgFAAIivAAIAAgdIDLAAIAUASQgZAtg3AiQA1AOA6AGIgNAgQhNgOg4gVgAinCKQAfgKAIgNQAIgLAEgOIAAg9QAAgFgFABIghAAIAAgeIA8AAQAJABgBAFIAABWQACALAKAKQAJAMAVAJQAeAIC0gIIgGAiIipAAQhCgEgXgnQgEANgRAOQgRAOgRAGgAjoCkIAAgRIhDAAIAAARIggAAIAAkvQABgEAEAAIB2AAQAHAAAAAGIAAEtgAkrhsIAADgIBDAAIAAjgQAAgEgEAAIg7AAQgGAAACAEgAnPCbIgDgkQAaAHAMABQAPACAEgEQAHgJAGgSQAEgWAAgxQAChwgCgGQAAAAAAgBQgBAAAAAAQgBAAgBAAQAAAAgBAAIgwAAQAAAkgIA/QgQBngZAxIghgHQAJgRAFgRQAnhugBhkIguAAIAAggIAuAAIAAgmIAfAAIAAAmIBIAAQAGABABABQAFADABAMQgBBQgBA7QgEBngbAUQgIAHgSAAQgSAAgcgHgADACRQASgdAGgdQAGgaAAglIAAieQgBgJAJAAIB6AAIAAgYIAfAAIAAAYICFAAIAAAdIgzAAIAAAgIAzAAIAAAdIgzAAIAAAqQgCANgOAAIiQAAQgOAAgBgNIAAgqIgnAAIAABVQgCBLgdA0gAFBgfQAAAFAEAAIBnAAQAFAAAAgFIAAgWIhwAAgAFBhSIBwAAIAAggIhwAAgAD7htIAAAbIAnAAIAAggIgjAAQgEAAAAAFgAAcB3IAAhUQgmAxglAVIgWgXQAzgdAhgsIhJAAQgEAAABgEIAAhZQgBgEAEAAIBWAAIAAgaIhcAAIAAgdIBcAAIAAgXIAeAAIAAAXIBiAAIAAAdIhiAAIAAAaIBZAAQAEAAAAAEIAABZQAAAEgEAAIhMAAQAlAuA6AgIgXAVQgygggjgoIAABTgAA6gSIA+AAIABgBIAAgpIg/AAgAgggTQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAAAAAIA7AAIAAgqIg8AAgAijg8IARgbQAbANAeAbIgRAZQgjgcgWgKgAiciFIAPgbQAdANAhAZIgSAbQgigagZgMg");
	this.shape_2.setTransform(81.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chVector, new cjs.Rectangle(-23.2,-20.7,162,38.7), null);


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
	this.btnS.setTransform(40.65,0,1.2568,0.3399,0,0,0,0.2,0);
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AAtCSQguAUhBABIgHgcQApAAAegFQAEgDAIgCIgpgZIAPgWQAjAWAaANQAMgEANgJQAagNAOgOQAAAAAAgBQAAAAgBgBQAAAAgBAAQgBAAgBAAIiSAAIAAgbIC1AAQALAIAJAFQAAAAAAABQABABAAAAQAAABgBAAQAAAAAAABQgXAig4AeQAjAJAzAAIgIAdQhAgCgzgTgAh/CnIAAlNIAcAAIAAFNgAinAiQAIg5AAhFIAYACQgDBagGAlgAg0AiQgBAAAAgBQgBAAAAAAQAAgBAAgBQgBAAAAgBIAAhKQACgEABAAIDVAAQAEAAAAAEIAABKQAAAEgEAAgABjAKIAkAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAIAAggQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAIgkAAgAAlAKIAiAAIAAgiIgiAAgAgbgXIAAAhIAkAAIAAgiIgkAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAgAhZhfIAZgCIACBeIgXABgAgmg+QgBAAAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBIAAhcQABgEABAAIC3AAQAFAAAAAEIAABcQAAAEgFAAgAgMhWICEAAQAAAAABAAQAAAAAAgBQAAAAAAAAQABAAAAgBIAAgOIiGAAgAgMiJIAAAOICGAAIAAgOQAAAAgBAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIiEAAQgBAAAAAAQAAAAAAAAQAAAAAAABQAAAAABAAg");
	this.shape_2.setTransform(46.2,0.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chSlow, new cjs.Rectangle(-23.4,-20.7,127.69999999999999,38.7), null);


(lib.chRotateView = function(mode,startPosition,loop) {
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
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah1CnIAAiaIghAiIgVgYQBEgzAWg7QACgGgGAAIhPAAIAAgeIAsAAIAAgrIAfAAIAAArIAdAAIAQANQgOAzgeAmIAAC8gAk9CiIAAgfQAlAIAIgFQADgFAAgFIAAgiIh5AAIAAgbIB5AAIAAgTIAdAAIAAATIAsAAIAAAbIgsAAIAAApQgBAVgOAIQgIAGgRAAQgPAAgWgEgAF2CfIAAggQAnAOAKgJQADgEAAgGIAAh9Ig4AAIAAgeIBGAAQgegfgagVIAUgVQAIAJAVASQAjgZARgXQABAAAAAAQAAgBAAAAQgBAAAAAAQgBAAgCAAIhtAAIAAgcICHAAIATAPQgWAsgzAmIAQAPIgPALIAzAAIAUANQgIA2gSAnIgdgHQANgZAEgNQAKgagEgEIgDgBIgiAAIAACGQAAAVgRAKQgIAEgOAAQgRAAgbgHgAhBCLQAVgHAOgIQArgaAAgnIAAgKIghAAQgEAAAAgEIAAjHQAAgEAEAAICeAAQAEAAAAAEIAADHQAAAEgEAAIgmAAIAABCQAAAHAEAGQAGAEAFAAIANAAIAIgDQACgCABgeIAcAGQgDAqgEAEQgLALgJAAIgoAAQgLgBgKgIQgJgKAAgKIAAhSIgcAAIAAAKQAAAOgFAOQgTA0hCAbgAAEAUQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAAAAAIBqAAIACgBIAAgeIhtAAgAAEgmIBtAAIAAghIhtAAgAAEhjIBtAAIAAgfIhtAAgAnaCmIAAgtIg0AAIAAgcIA0AAIAAgXIgpAAQgEAAAAgEIAAiVQAAgEAEAAIApAAIAAgUIgyAAIAAgcIAyAAIAAgfIAaAAIAAAfIAtAAIAAAcIgtAAIAAAUIApAAQAEAAAAAEIAACVQAAAEgEAAIgpAAIAAAXIAxAAIAAAcIgxAAIAAAtgAnAAqIARAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIAAglIgTAAgAntApQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAABAAIARAAIAAgmIgTAAgAnAgVIATAAIAAgmQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAgBABIgRAAgAntgVIATAAIAAgmIgTAAgAC/CHIBJgKIAAgqIg/AAIAAgcIA/AAIAAgmIg7AAQgEAAAAgEIAAikQAAgEAEAAICUAAQAEAAAAAEIAACkQAAAEgEAAIg8AAIAAAmIBAAAIAAAcIhAAAIAAAmIBCgKIAEAeIilAYgAElgKIAjAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBIAAgqIgkAAgADlgKIAjAAIAAgsIgjAAgAElhSIAkAAIAAgtIgkAAgADlhSIAjAAIAAgtIgjAAgAlyBxIATgTQAPANAOAVIgWARQgQgXgKgJgAjgAmIiiAKIgDgZIBMgFIAAgSIhAAAQgEAAAAgFIAAhfQAAgEAEAAIBAAAIAAgOIhMAAIAAgaIBMAAIAAgWIAcAAIAAAWIBSAAIAAAaIhSAAIAAAOIBHAAQAEAAAAAEIAABfQgBAFgCAAQAJAQAIAZIgXAKIgFgNgAkdARIAzgDQgEgHgCgEIAKgDIg3AAgAkdgYIAvAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBIAAgPIgwAAgAljgaQAAABAAAAQAAAAAAAAQABABAAAAQAAAAAAAAIApAAIAAgRIgqAAgAkdhBIAwAAIAAgOQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAIgvAAgAljhPIAAAOIAqAAIAAgQIgpAAQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABgAhSgKIAWgQQAVAaAJASIgYANQgOgZgOgQg");
	this.shape_2.setTransform(82.025,0.325);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chRotateView, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


(lib.chRebound = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(40.65,0,1.2568,0.3399,0,0,0,0.2,0);
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AieBqQgyAihFAXIgQgfQBAgQAwgdQg+g9gVhPIgRAAIAAAuQgBBjgkBBIgcgLQAVgrAGgjQAHgkAAgvIAAiKQAAgIAJAAIEMAAIAAAfIjzAAQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAAAIAAAsIDXAAIAXAOQgDAVgGASQgWBCg5A0QA4AhA+AOIgTAeQhBgSg9gogAimA9QAGADAEAGQAQgNAFgGQAwgvAJgzQgCgGgGAAIiTAAQAVBIAuAqgADcCjIAAg3IhbAAIAAgcIBbAAIAAgWIhQAAQgDAAAAgEIAAh1QAAAAABgBQAAgBABAAQAAAAAAgBQABAAAAAAIC9AAQAFACAAABIAAB1QAAAEgFAAIhQAAIAAAWIBhAAIAAAcIhhAAIAAA3gAD5AhIA4AAIABgBIAAgaIg5AAgAClAhIA3AAIAAgbIg3AAgAD5gQIA5AAIAAgYIg5AAgAClgQIA3AAIAAgYIg3AAgAAaCaIgCggQAmALAOgGQAGgBACgIQACgJgBhMQAAgEgEAAIgcAAIAAAHIgegBIAAhoIADgFIAEgCIAyAAIAAgyQAAgEgFAAIgzAAIAAgeIBPAAQAGABAAAFIAABwIgdAAIAAgEIgXAAIgDABIgBADIAAApIA1AAQAHABAAAFQABBngEARQgBASgOAKQgKAHgSAAQgRAAgYgGgAD0hRQgBAAAAgBQgBAAAAAAQgBgBAAgBQAAAAAAgBIAAhLQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAIBXAAQAEACAAABIAABLQAAAEgEAAgAENhqIAlAAIABgCIAAgdIgmAAgACJhRQgBAAAAgBQgBAAAAAAQgBgBAAgBQAAAAAAgBIAAhLQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAIBXAAQAEACAAABIAABLQAAAEgEAAgACjhqIAkAAIABgCIAAgdIglAAg");
	this.shape_2.setTransform(60.6,0.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chRebound, new cjs.Rectangle(-23.4,-20.7,127.69999999999999,38.7), null);


(lib.chLight = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(40.65,0,1.2568,0.3399,0,0,0,0.2,0);
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
	this.shape_2.graphics.f("#FFFFFF").s().p("ACvChIAAgfQAnAMAGgGQACgEAAgGIAAiHIhJAAQgEAAAAgEIAAh5QAAgFAEAAIA7AAQAJgSABgKIAdAKQgBAKgEAIIBTAAQAEAAAAAFIAAB5QAAAEgEAAIhFAAQAJAfAJAXQAdgXAQgSIAUAWQgUAVgeAXQATAiAmAfIgbAQQgpgngbgzIAABIQgBAVgNAJQgIAFgOAAQgQAAgYgHgACtgkIB/AAQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIAAgXIiAAAgACthvIAAAYICAAAIAAgYQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAIh/AAQAAAAgBAAQAAAAAAAAQAAABAAAAQABAAAAAAgABBCkIAAiZIguAHQgDgNgGgNIAfgEIAYggQgbgYgagOIAMgYIAOAHQARgfAOgjIAYAMQgMAbgWAqQAKAHAKAKQAPgfAJgbIAbAHQgMApgrA7IAegFIgFgTIAZgHQANAmAEAaIgaAEQgCgHAAgIIgUADIAACdgAlZCJQAbgCAZgNQAQgLAMgOQAUgeABg/IAAgFIheAAIAAgfICOAAIAAiFIAgAAIAACFICOAAIAAAfIhiAAIAABwQAAAIAFAEQAGAGAGAAIAqAAQAEAAAFgEQAFgDABg7IAeAEQgEBIgFAIQgOANgJAAIhIAAQgNgCgJgJQgJgKAAgKIAAiCIg9AAIAAAFQgDBCgWAmQgNAVgRANQgXAOgjAIgAAOCOQAKgsABg/IAbAEQgDA1gIA3gACAB9QApglAOgmQABgHgGAAIgdAAIAAgcIA0AAIAQAIQgKAfgKAXQgPAdggAmgABnAoIAbgEIAKBIIgaABQgDghgIgkgAk8h+IAagRQAbAeAZAyIgbAQQgcg0gXgbgAh5hAQAjgwAMgiIAcAQQgPAmghArg");
	this.shape_2.setTransform(61.5,0.6324);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chLight, new cjs.Rectangle(-23.4,-20.7,127.69999999999999,38.7), null);


(lib.chFixedGround = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(40.65,0,1.2568,0.3399,0,0,0,0.2,0);
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AiICjIgBgjQArANAKgJQAJgEAAgKIAAgOIjLAAIAAA7IgfAAIAAi9QABgIAGAAID5AAQAIAAAAAIIAACdQgBAUgOAIQgNAIgYAAQgRAAgWgEgAkWBLIDLAAIAAgYIjLAAgAkWgCIAAAXIDLAAIAAgXQgBgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIjHAAIgBADgAB4CgIAAgfQAlAMAKgJQADgEAAgGIAAguIhyAAQgFAAAAgEIAAg+QAAgEAFAAID9AAQAEAAAAAEIAAA+QAAAEgEAAIhsAAIAAA3QAAAVgRAKQgIAFgPAAQgQAAgZgHgABRAxQAAABAAAAQAAAAAAAAQABABAAAAQAAAAAAAAIDIAAIACgCIAAgSIjLAAgAD2BsIAPgaQA4AfAbAVIgRAYQgngdgqgVgAATCAQA9gZAfgXIAOAaQglAag3AXgAAVgKIAAgcICSAAIAAgNIhuAAQgEAAAAgEIAAhjQAAgEAEAAID6AAQAFAAAAAEIAABjQAAAEgFAAIhtAAIAAANICRAAIAAAcgABShOQAAABAAAAQAAAAABAAQAAABAAAAQAAAAABAAIDFAAIABgCIAAgRIjIAAgABSh2IDIAAIAAgPIjIAAgAlXhMQBBgEA0gNIAAgVIhpAAIAAgcIBpAAIAAgYIAfAAIAAB0IgfAAIAAgOQhJAOgjAFgAiIgvQgLAAgKgKQgIgJAAgKIAAhaIAdAAIAAAfQA+gKAjgOIALAaQgoAQhEAKIAAAPQAAAHAGAFQACAEAJAAIBDAAQAFABAEgEQADgBABgeIAcAHQgDApgEAEQgLALgKAAg");
	this.shape_2.setTransform(62.125,-0.0209);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chFixedGround, new cjs.Rectangle(-23.4,-20.7,127.69999999999999,38.7), null);


(lib.chCarHide = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(58.1,0,1.6,0.3399,0,0,0,0.2,0);
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AHdCcQgLgRgKgWQgMAVgaAdIgYgQIAMgMIhgAAQgKgBAAgJIAAiiQACgIAIAAIBkAAIgDAZIgbAAIAAAaIAcAAQAJABAAAGIAAA8QAAAJgJAAIgcAAIAAAcIAiAAIAAAOQASgVAOgXQgTg7gJhQIiBAAQgDAAAAAEIAABcQgBBKgiAzIgZgLQATghAGgaQAGgYABgiIgSAAQABAzgZAyIgbgKQAbgoAAgzIgXAAIAAgZIBBAAIAAgaIgsAAQgLAAAAgNIAAg5IAZAAIAAAmQAAAHAGAAIAYAAIAAgjQABgJAGAAICXAAIgCgVIAcADQAAAKACAIIAfAAIgagYIAOgOIgfAAIAAAOIgdAAIAAgOIhcAAIAAASIgdAAIAAgSIhZAAIAAgcIBZAAIAAgRIAdAAIAAARIBcAAIAAgRIAdAAIAAARIBcAAIAAAcIgwAAQANAKAJAOIgPAOIAgAAIAAAbIhGAAQAIA+AKAqQAOggAJgvIAcAGIgIAfQgKAlgVArIAMAiQAHANACAAQACAAACgJIgCgtIAdAGQgCAygIAWQgGAIgEABQgEACgGAAQgLAAgJgNgAFHBuQAAAEAEAAIAXAAIAAgcIgbAAgAFHA9IA+AAQAAgBABAAQABAAAAgBQAAAAABAAQAAgBAAAAIAAgVIgDgCIg+AAgAFHgNIAAAXIAbAAIAAgaIgXAAIgCAAQAAAAgBAAQAAAAgBABQAAAAAAABQAAAAAAABgAACCnQgMAAgFgEQgOgKAAgaIAAgoIAcAAIAAAjQAAAMABABQADAGAKABIAzAAIAKgDQAIgDACgZIAcAEQgDAkgGAFQgHAJgFABIgTABgAhpCRQAZgXANgjIAaANQgSApgbAaQgLgOgIgIgAl5CnIAAgvIiVAAIAAgeICVAAIAAgcIh0AAQgJAAAAgIIAAiBQAAgIAJAAIB0AAIAAgcIiJAAIAAgeICJAAIAAgZIAhAAIAAAZICIAAIAAAeIiIAAIAAAcIB0AAQAJAAAAAIIAACBQAAAIgJAAIh0AAIAAAcICTAAIAAAeIiTAAIAAAvgAlYAgIBbAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIAAgcIhdAAgAnVAfIABABIBbAAIAAgdIhcAAgAlYgaIBdAAIAAgaQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAAAgBAAIhbAAgAnVg0IAAAaIBcAAIAAgcIhbAAQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABgAijCmIAAlEQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAIA+AAIATALIgPBWQgEAUAGAFQAPAcAFAZQAHAngRARQgHAKgNABQgNACgVgGIAABagAiHiGIAACzQAMAKAMgBQAHAAACgFQACgEACgGIAAgBQADgZgag2QgBgDAAgKIAOhRIgZAAQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAgABpBnIAWgUQATAXAVAmIgaAOQgTgmgRgRgAAaBjIAVgPIAXAlIgXANQgNgagIgJgAguBPIAAgXICcAAQABAAABAAQAAgBAAAAQABAAAAgBQAAAAAAAAIAAgPIivAAIAAgVICvAAIAAgMIgDgCIibAAIAAgVICvAAQAIABAAAGIAAAcIAdAAIAAAVIgdAAIAAAfQAAAJgIAAgAhCgfIAAgXIBfAAIAAgRIhDAAIAAgWICgAAIAAAWIhBAAIAAARIBkAAIAAAXgABth2IAVgRQARARAVAeIgYAQQgVgegOgQgAhThjQAbgSAOgeIAZAQQgVAkgdATQgHgOgJgJgAASiGIgTAAIgDgbQBWACAqgJIADAbQgTAGg9ABQAEAOACAOIgcAGQgDgVgEgNg");
	this.shape_2.setTransform(80.175,0.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chCarHide, new cjs.Rectangle(-23.2,-20.7,162,38.7), null);


(lib.theArrow2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.arAx = new lib.arrowAx();
	this.arAx.name = "arAx";
	this.arAx.parent = this;

	this.arAy = new lib.arrowAy();
	this.arAy.name = "arAy";
	this.arAy.parent = this;

	this.arGG = new lib.arrowG();
	this.arGG.name = "arGG";
	this.arGG.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.arGG},{t:this.arAy},{t:this.arAx}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.theArrow2, new cjs.Rectangle(-44.3,-1.2,88.6,102.2), null);


(lib.theArrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhBBxQgRgFgIgJQgIgJAAgJQABgHAFgIQAEgJAIgFIAbgQQgJgGAAgIQAAgHAIgIQAHgHAXgJQgTgEgMgMQgLgNAAgPQAAgZAWgUQAWgTAjAAQANAAAJACQAIADAIAGIAvAAIgEASIgeAAQADAJABAJQAAAXgUASQgUASghACQgUAGgJAGQgDADAAADQAAAEADADQADACANADIAhAIQAdAHAIAJQAKAJgBANQAAAOgKAMQgLAMgUAHQgUAGgZAAQgWAAgSgFgAhDA5QgHALAAAJQAAAMAKAIQAPALAdAAQAYAAATgJQARgJAAgNQAAgHgHgGQgGgGgTgEIg2gNQgOAGgHAKgAgWhZQgNAUgBAVQAAAOAJAJQAIAIAMAAQAIAAAJgFQAJgFAFgJQAGgJAEgOQADgOAAgGQABgOgIgIQgIgIgNAAQgSAAgNAUg");
	this.shape.setTransform(-14.6,93.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("ABZBXQgCgEgIgiQgSAfgKAJQgHAFgGAAQgFAAgEgCQgDgDAAgEQAAgEADgDQACgCAEAAQADAAAEADQADADADAAIADgCQAFgEAKgPIALgUIgHgdQgDgIgEgDQgEgCgJAAIgGAAIAAgEIAfgGQAGAHADAFIAHAVIAKgPIAJgKQAGgFAEgCIAGgBQAFABADACQADADAAADQAAAEgCACQgDACgEAAIgGgBIgHgBQgCAAgEADQgHAGgKARIAKAnQACAJABACIADACQACAAADgDQAHgGAEgHIAFACQgIANgLAIQgGAGgEgBQgHABgEgIgAgnBBQgDgEAAgHQAAgJADgNIAEgOQgXAegTAMQgOAIgNAAQgNAAgKgKQgJgKAAgTQAAgcARgeQAQgfAbgTQATgPASAAQALABAHAFQAIAGADANIAGgVIAbgEIgkCHIgBADQAAAEABABQABABAAAAQABAAAAABQABAAAAAAQABAAAAAAQACAAAEgDQAGgFALgQIAHAFQgNARgMAKQgNAJgLAAQgHAAgEgDgAg+hKQgSAPgOAdQgOAeAAAWQAAANAGAGQAGAIAIAAQATgBAWgcQAeglABgnQgBgPgFgHQgGgGgKgBQgLAAgNALg");
	this.shape_1.setTransform(-61.2,27.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006600").s().p("AATB0QgDgDAAgDQAAgFAEgDQADgEAFAAIADABIACADIADADIABABIACgBQAHgEAIgIIAQgSIgGhJQgCgRgEgEQgCgDgIgBIgIABIgBgEIAhgIQADAGACAGIADAWIAFA4IAUgaIAPgYIAIgLIAAgFIAAgCIgFgBQgDgBgCgDQgCgDgBgEQAAgFADgDQADgCAEAAQAFgBADAFQAEAEAAAHQAAAJgGALQgGALgSAZQgRAXgZAdQgRATgJAFQgIAGgHAAQgDgBgCgCgAgnApQgDgEAAgHQAAgIADgPIAEgMQgXAdgTAMQgOAJgNAAQgNAAgKgLQgJgLAAgSQAAgbARgfQAQgfAagTQAUgPASAAQALAAAHAGQAIAFADANIAGgTIAbgFIglCGIAAAFQAAACABACQABABAAAAQABAAAAABQABAAAAAAQABAAAAAAQACAAAEgDQAGgFALgQIAHAEQgNATgMAJQgNAKgLAAQgHAAgEgEgAg+hiQgSAPgOAeQgOAdAAAXQAAALAGAIQAGAGAIAAQATAAAWgbQAfgmAAgnQgBgPgGgHQgFgHgKAAQgMAAgMALg");
	this.shape_2.setTransform(55,58.15);

	this.instance = new lib.arrowAx();
	this.instance.parent = this;

	this.instance_1 = new lib.arrowAy();
	this.instance_1.parent = this;

	this.instance_2 = new lib.arrowG();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 圖層_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#999999").ss(2,1,1).p("AA1m2IHLMcAl8i8IGxLtIGoj1Al8i8IiDBMAA1m2ImxD6AD/orIjKB1AgRowIBGB6");
	this.shape_3.setTransform(-5.25,43.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgyKPQgEgEgBgGIAAg8QABgGAEgFQAEgEAHAAQAGAAAEAEQAEAFABAGIAAA8QgBAGgEAEQgEAFgGAAQgHAAgEgFgAgyIXQgEgEgBgGIAAg8QABgGAEgFQAEgEAHAAQAGAAAEAEQAEAFABAGIAAA8QgBAGgEAEQgEAFgGAAQgHAAgEgFgAgyGgQgEgFgBgGIAAg8QABgGAEgEQAEgFAHAAQAGAAAEAFQAEAEABAGIAAA8QgBAGgEAFQgEAEgGAAQgHAAgEgEgAgyEnQgEgEgBgGIAAg8QABgGAEgFQAEgEAHAAQAGAAAEAEQAEAFABAGIAAA8QgBAGgEAEQgEAFgGAAQgHAAgEgFgAgyCvQgEgEgBgGIAAg8QABgGAEgEQAEgFAHAAQAGAAAEAFQAEAEABAGIAAA8QgBAGgEAEQgEAFgGAAQgHAAgEgFgAgyA4QgEgFgBgGIAAg7QABgGAEgEQAEgFAHAAQAGAAAEAFQAEAEABAGIAAA7QgBAGgEAFQgEAEgGAAQgHAAgEgEgAgyhAQgEgEgBgGIAAg8QABgGAEgFQAEgEAHAAQAGAAAEAEQAEAFABAGIAAA8QgBAGgEAEQgEAFgGAAQgHAAgEgFgAgyi4QgEgEgBgGIAAg8QABgGAEgFQAEgEAHAAQAGAAAEAEQAEAFABAGIAAA8QgBAGgEAEQgEAFgGAAQgHAAgEgFgAgykvQgEgFgBgGIAAg8QABgGAEgEQAEgFAHAAQAGAAAEAFQAEAEABAGIAAA8QgBAGgEAFQgEAEgGAAQgHAAgEgEgAgymoQgEgEgBgGIAAgtIgaAAQgGAAgEgEQgEgFAAgGQAAgGAEgFQAEgEAGAAIAaAAIAAgPQABgGAEgFQAEgEAHAAQAGAAAEAEQAEAFABAGIAAAPIAsAAQAGAAAEAEQAEAFAAAGQAAAGgEAFQgEAEgGAAIgsAAIAAAtQgBAGgEAEQgEAFgGAAQgHAAgEgFgADInfQgHAAgEgEQgEgFAAgGQAAgGAEgFQAEgEAHAAIACAAQAGAAAEAEQAEAFABAGQgBAGgEAFQgEAEgGAAgABPnfQgGAAgEgEQgEgFAAgGQAAgGAEgFQAEgEAGAAIA9AAQAGAAAEAEQAEAFABAGQgBAGgEAFQgEAEgGAAgAjJnfQgGAAgEgEQgEgFgBgGQABgGAEgFQAEgEAGAAIA9AAQAGAAAEAEQAEAFAAAGQAAAGgEAFQgEAEgGAAgAgyo9QgEgFgBgGIAAg8QABgGAEgEQAEgFAHAAQAGAAAEAFQAEAEABAGIAAA8QgBAGgEAFQgEAEgGAAQgHAAgEgEg");
	this.shape_4.setTransform(4.05,49.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.theArrow, new cjs.Rectangle(-74.9,-16.5,143.60000000000002,132), null);


(lib.textureGroundZ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.tBall = new lib.shadowBall();
	this.tBall.name = "tBall";
	this.tBall.parent = this;
	this.tBall.setTransform(138.9,89.7,0.6,0.6,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.tBall).wait(1));

	// 圖層_3
	this.ar = new lib.theArrow();
	this.ar.name = "ar";
	this.ar.parent = this;
	this.ar.setTransform(163.15,83.85,0.3,0.3,0,0,0,0.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.ar).wait(1));

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AgPA6QgOgSAAgoQABgYAFgQQAFgPAKgJQAKgIAPAAQAMAAAIAEQAJAFAFAJQAGAJADAMQAEANAAAUQAAAZgGAPQgEAQgLAIQgLAJgPAAQgTAAgNgPgAgCgvQgIANgBAiQABAjAHAMQAIAMAMgBQAMABAJgMQAHgMABgjQgBgigHgMQgJgMgMAAQgMAAgHALgAh9A+QgNgMgCgRIASgDQADAPAHAHQAIAHAKgBQAMABAJgJQAJgJgBgNQAAgMgHgHQgJgIgMAAIgMABIACgNIADAAQALgBAJgFQAJgGAAgMQAAgKgHgHQgGgGgLAAQgJAAgIAGQgGAHgDANIgRgDQAEgSALgJQALgKARAAQAMAAAKAFQAJAFAGAJQAFAIAAAKQAAAJgFAIQgFAHgJAFQAMADAHAIQAHAKAAANQAAATgOANQgNANgVAAQgTAAgMgLgABWAAQgJgJAAgRQABgSAJgJQAJgIANAAQAOAAAIAJQAJAJAAARQAAAMgDAIQgEAGgIAEQgHAFgJAAQgOAAgJgJgABegtQgFAHAAAMQAAANAFAGQAHAHAIAAQAIAAAGgHQAFgGAAgNQAAgMgFgHQgGgGgIgBQgIABgHAGg");
	this.shape.setTransform(36.7896,124.5989,0.6,0.6);

	this.ars02 = new lib.theArrow2();
	this.ars02.name = "ars02";
	this.ars02.parent = this;
	this.ars02.setTransform(-3.4,46.35,0.2,0.2,0,0,0,0.2,0);

	this.ars19 = new lib.theArrow2();
	this.ars19.name = "ars19";
	this.ars19.parent = this;
	this.ars19.setTransform(176.6,11.65,0.2,0.2,0,0,0,0.2,0);

	this.ars13 = new lib.theArrow2();
	this.ars13.name = "ars13";
	this.ars13.parent = this;
	this.ars13.setTransform(136.6,11.65,0.2,0.2,0,0,0,0.2,0);

	this.ars08 = new lib.theArrow2();
	this.ars08.name = "ars08";
	this.ars08.parent = this;
	this.ars08.setTransform(96.6,11.65,0.2,0.2,0,0,0,0.2,0);

	this.ars04 = new lib.theArrow2();
	this.ars04.name = "ars04";
	this.ars04.parent = this;
	this.ars04.setTransform(56.6,11.65,0.2,0.2,0,0,0,0.2,0);

	this.ars01 = new lib.theArrow2();
	this.ars01.name = "ars01";
	this.ars01.parent = this;
	this.ars01.setTransform(16.6,11.65,0.2,0.2,0,0,0,0.2,0);

	this.ars14 = new lib.theArrow2();
	this.ars14.name = "ars14";
	this.ars14.parent = this;
	this.ars14.setTransform(26.6,98.3,0.2,0.2,0,0,0,0.2,0);

	this.ars15 = new lib.theArrow2();
	this.ars15.name = "ars15";
	this.ars15.parent = this;
	this.ars15.setTransform(56.6,80.95,0.2,0.2,0,0,0,0.2,0);

	this.ars05 = new lib.theArrow2();
	this.ars05.name = "ars05";
	this.ars05.parent = this;
	this.ars05.setTransform(6.6,63.65,0.2,0.2,0,0,0,0.2,0);

	this.ars09 = new lib.theArrow2();
	this.ars09.name = "ars09";
	this.ars09.parent = this;
	this.ars09.setTransform(16.6,80.95,0.2,0.2,0,0,0,0.2,0);

	this.ars06 = new lib.theArrow2();
	this.ars06.name = "ars06";
	this.ars06.parent = this;
	this.ars06.setTransform(36.6,46.35,0.2,0.2,0,0,0,0.2,0);

	this.ars11 = new lib.theArrow2();
	this.ars11.name = "ars11";
	this.ars11.parent = this;
	this.ars11.setTransform(76.6,46.35,0.2,0.2,0,0,0,0.2,0);

	this.ars10 = new lib.theArrow2();
	this.ars10.name = "ars10";
	this.ars10.parent = this;
	this.ars10.setTransform(46.6,63.65,0.2,0.2,0,0,0,0.2,0);

	this.ars03 = new lib.theArrow2();
	this.ars03.name = "ars03";
	this.ars03.parent = this;
	this.ars03.setTransform(26.6,28.9,0.2,0.2,0,0,0,0.2,0);

	this.ars07 = new lib.theArrow2();
	this.ars07.name = "ars07";
	this.ars07.parent = this;
	this.ars07.setTransform(66.6,28.9,0.2,0.2,0,0,0,0.2,0);

	this.ars12 = new lib.theArrow2();
	this.ars12.name = "ars12";
	this.ars12.parent = this;
	this.ars12.setTransform(106.6,28.9,0.2,0.2,0,0,0,0.2,0);

	this.ars16 = new lib.theArrow2();
	this.ars16.name = "ars16";
	this.ars16.parent = this;
	this.ars16.setTransform(86.6,63.65,0.2,0.2,0,0,0,0.2,0);

	this.ars17 = new lib.theArrow2();
	this.ars17.name = "ars17";
	this.ars17.parent = this;
	this.ars17.setTransform(116.6,46.35,0.2,0.2,0,0,0,0.2,0);

	this.ars18 = new lib.theArrow2();
	this.ars18.name = "ars18";
	this.ars18.parent = this;
	this.ars18.setTransform(146.6,28.9,0.2,0.2,0,0,0,0.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(1,1,1).p("AEslFIEsitIBkCtIEsitAhjlFIEritIBkCtIBkCuABkAVIEsisIEsiuAnzlFIEsitIBkCtIBjCuIEsiuAnzlFIBkCuIBkCsIErisIBkCsAuDlFIEsitIBkCtApXDCIBkCtIEsitIAAAAIEritArXEMICAhKIEsitIBkCtAq7AVIBkCtAq7AVIEsisIEsiuArXHzIIQkxAq7AVIhkitIEsitAq7AVIksCt");
	this.shape_1.setTransform(-60,78.95,1,1,0,0,0,-136.6,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0000FF").ss(1,1,1).p("AvnAAIfPAA");
	this.shape_2.setTransform(99.9623,78.9866,1,1,-29.9999);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AvnMgIAA4/IfPAAIAAY/g");
	this.shape_3.setTransform(100,80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.ars18},{t:this.ars17},{t:this.ars16},{t:this.ars12},{t:this.ars07},{t:this.ars03},{t:this.ars10},{t:this.ars11},{t:this.ars06},{t:this.ars09},{t:this.ars05},{t:this.ars15},{t:this.ars14},{t:this.ars01},{t:this.ars04},{t:this.ars08},{t:this.ars13},{t:this.ars19},{t:this.ars02},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.textureGroundZ, new cjs.Rectangle(-24.4,0,224.4,160), null);


// stage content:
(lib.myAnimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// helper
	this.title = new lib.title();
	this.title.name = "title";
	this.title.parent = this;
	this.title.setTransform(799.95,450,2,2);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1));

	// UI
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhfBTQgmAbgsAJIgMgUQAugLAfgSQgVgUgXgbIARgOQAYAdAUASQAWgTARgeQADgGgHABIhgAAIAAgWIB5AAIAKAJQgPApgfAiIgHAGQAbARArANIgNAVQgogOgigYgACQBmQAfgMAWgPQARgPATghIAUAKQgLAUgKAOQgXAcgzAVgAAxB1IAAgWQAWAGADgDQACgDAAgEIAAglIgzAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAgtQAAgBAAgBQABAAAAgBQAAAAAAAAQABAAAAAAIB4AAQABAAABAAQABAAAAAAQABABAAAAQAAABAAABIAAAtQAAABAAABQAAAAgBAAQAAABgBAAQgBAAgBAAIgvAAIAAAqQgBAPgKAGQgFADgJAAQgKAAgOgDgAArAVIAAAQIBUAAIABgBIAAgPIgBgBIhUAAQAAAAAAAAQgBAAAAAAQAAAAABAAQAAAAAAABgAj6BxIACgXQAQAHAGAAQACABADgDQACgDAAgEIAAg2IgUAIIgMgTQATgGANgGIAAg/IgeAAIAAgXIAeAAIAAgrIAXAAIAAArIAaAAIAAAXIgaAAIAAA0QAJgFAIgGIANASQgNAIgPAHIgCACIAABGQAAAPgMAHQgFADgHAAQgLAAgTgGgAAJBfQAUgMANgWIARAOQgTAagVAMQgFgMgFgGgABwBJIARgMQAKAOALAVIgSAKQgLgXgJgKgACdANQArgRAhgtIATANQgiAugxAWgAAKgHIAAgUIBAAAIAAgMIgwAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAgBAAAAIAAhGIACgCIB2AAQABAAABAAQABAAAAABQABAAAAAAQAAAAAAABIAABGQAAAAAAABQAAABgBAAQAAAAgBABQgBAAgBAAIgwAAIAAAMIBBAAIAAAUgAAsg5IBSAAIABgBIAAgLIhTAAgAAshVIBTAAIAAgLIhTAAgAivgqQANgGAGgEQANgKAAgUIAAgcIABgDIADgCIBNAAIADACIABADIAAAyIADAHQAAACAIAAIAIAAIAGgBQACgBAAgHIAAgTIAVACIgBAfQgCAHgEADQgHAGgHAAIgbAAQgIAAgGgGQgHgGAAgJIAAgoQAAgBAAAAQAAgBAAAAQgBAAAAgBQgBAAgBAAIgmAAQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAABIAAAQQAAANgDAJQgKAUgbAKgAChhFQAkgOAcglIASANQgbAkgsAWg");
	this.shape.setTransform(1255.9,617.325);

	this.rbShadow04 = new lib.rbShadow04();
	this.rbShadow04.name = "rbShadow04";
	this.rbShadow04.parent = this;
	this.rbShadow04.setTransform(1290,794.1,1,1,0,0,0,42.5,0);

	this.rbShadow03 = new lib.rbShadow03();
	this.rbShadow03.name = "rbShadow03";
	this.rbShadow03.parent = this;
	this.rbShadow03.setTransform(1290,750.9,1,1,0,0,0,42.5,0.2);

	this.rbShadow02 = new lib.rbShadow02();
	this.rbShadow02.name = "rbShadow02";
	this.rbShadow02.parent = this;
	this.rbShadow02.setTransform(1290,707.35,1,1,0,0,0,42.5,0);

	this.rbShadow01 = new lib.rbShadow01();
	this.rbShadow01.name = "rbShadow01";
	this.rbShadow01.parent = this;
	this.rbShadow01.setTransform(1290,664,1,1,0,0,0,42.5,0);

	this.chCarHide = new lib.chCarHide();
	this.chCarHide.name = "chCarHide";
	this.chCarHide.parent = this;
	this.chCarHide.setTransform(1230,450.55);

	this.chRebound = new lib.chRebound();
	this.chRebound.name = "chRebound";
	this.chRebound.parent = this;
	this.chRebound.setTransform(1427.3,328.15);

	this.chLight = new lib.chLight();
	this.chLight.name = "chLight";
	this.chLight.parent = this;
	this.chLight.setTransform(1427.3,450.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("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");
	this.shape_1.setTransform(1527.8987,21.0866,1.4367,1.4367);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("ACdAmQgGgLAAgcQAAgbAGgKQAEgHAKAAQAKAAAFAHQAHAKAAAbQAAAagHAMQgFAJgKAAQgKAAgEgIgACkgfQgEAIAAAWQAAAZAEAIQADAFAEAAQAFAAADgFQAFgJAAgYQgBgWgEgIQgEgFgEAAQgEAAgDAFgAgQAoQgHgHAAgMIAKAAQAAAHADAEQAEAFAGAAQAHAAADgFQAFgFAAgJQAAgIgGgEQgFgEgHAAIAAgIQAHAAADgFQAEgEAAgGQAAgGgDgFQgDgEgFAAQgEAAgDAFQgDAEgBAHIgJgDQACgKAGgGQAFgGAHAAQAJAAAGAGQAFAGAAAMQAAAKgFAHQgBAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIADADQAIAFAAANQAAAOgHAHQgIAHgJAAQgLAAgFgGgAh/AmQgHgLAAgcQAAgbAHgKQAFgHAKAAQAJAAAFAHQAIAKAAAbQAAAagIAMQgEAJgKAAQgKAAgFgIgAh4gfQgEAIAAAWQAAAZAEAIQADAFAFAAQAEAAADgFQAFgJAAgYQgBgWgEgIQgDgFgEAAQgFAAgDAFgABfAtIAAgJIAPAAIAAhDIgQAHIAAgKIAZgKIAABQIAPAAIAAAJgAhOAtIAAgHQAAgRASgQQATgOgBgLQAAgHgCgEQgEgFgFAAQgHAAgCAEQgFAFAAAKIgJAAQAAgOAGgIQAHgGAKAAQAJAAAGAGQAGAHAAAMQAAAPgVASQgPAOgBAJIAkAAIAAAJgAjAAtIAAgHQAAgRATgQQASgOAAgLQAAgHgDgEQgEgFgEAAQgIAAgCAEQgFAFAAAKIgJAAQAAgOAHgIQAGgGALAAQAIAAAGAGQAGAHAAAMQAAAPgUASQgRAOABAJIAkAAIAAAJgAAxAnIAAgNIAOAAIAAANg");
	this.shape_2.setTransform(1563.8218,48.662,1.4367,1.4367);

	this.chSlow = new lib.chSlow();
	this.chSlow.name = "chSlow";
	this.chSlow.parent = this;
	this.chSlow.setTransform(1427.3,389.25);

	this.chFixedGround = new lib.chFixedGround();
	this.chFixedGround.name = "chFixedGround";
	this.chFixedGround.parent = this;
	this.chFixedGround.setTransform(1705.55,317.65,1,1,0,0,0,59.1,-1.8);

	this.btnShoot = new lib.btnShoot();
	this.btnShoot.name = "btnShoot";
	this.btnShoot.parent = this;
	this.btnShoot.setTransform(1464.85,704.25);
	new cjs.ButtonHelper(this.btnShoot, 0, 1, 2, false, new lib.btnShoot(), 3);

	this.btnReset = new lib.btnReset();
	this.btnReset.name = "btnReset";
	this.btnReset.parent = this;
	this.btnReset.setTransform(1464.85,781.1);
	new cjs.ButtonHelper(this.btnReset, 0, 1, 2, false, new lib.btnReset(), 3);

	this.btnRelease = new lib.btnRelease();
	this.btnRelease.name = "btnRelease";
	this.btnRelease.parent = this;
	this.btnRelease.setTransform(1464.85,627.45);
	new cjs.ButtonHelper(this.btnRelease, 0, 1, 2, false, new lib.btnRelease(), 3);

	this.rbGG = new lib.rbGG();
	this.rbGG.name = "rbGG";
	this.rbGG.parent = this;
	this.rbGG.setTransform(1736.65,750.2);

	this.rbAxy = new lib.rbAxy();
	this.rbAxy.name = "rbAxy";
	this.rbAxy.parent = this;
	this.rbAxy.setTransform(1735.4,794.1);

	this.chRotateView = new lib.chRotateView();
	this.chRotateView.name = "chRotateView";
	this.chRotateView.parent = this;
	this.chRotateView.setTransform(1230.65,328.15);

	this.slCameraRR = new lib.theSlider();
	this.slCameraRR.name = "slCameraRR";
	this.slCameraRR.parent = this;
	this.slCameraRR.setTransform(1350,850);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.slCameraRR},{t:this.chRotateView},{t:this.rbAxy},{t:this.rbGG},{t:this.btnRelease},{t:this.btnReset},{t:this.btnShoot},{t:this.chFixedGround},{t:this.chSlow},{t:this.shape_2},{t:this.shape_1},{t:this.chLight},{t:this.chRebound},{t:this.chCarHide},{t:this.rbShadow01},{t:this.rbShadow02},{t:this.rbShadow03},{t:this.rbShadow04},{t:this.shape}]}).wait(1));

	// btn3D
	this.slLight = new lib.slLight();
	this.slLight.name = "slLight";
	this.slLight.parent = this;
	this.slLight.setTransform(1317.75,526.9);

	this.instance = new lib.textureGroundX();
	this.instance.parent = this;
	this.instance.setTransform(-1033.9,247.25,1,1,0,0,0,10,25);

	this.instance_1 = new lib.textureV();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-807.95,438.1,1,1,0,0,0,100,10);

	this.instance_2 = new lib.textureH();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-907.95,364.55);

	this.chVector = new lib.chVector();
	this.chVector.name = "chVector";
	this.chVector.parent = this;
	this.chVector.setTransform(1230,389.25);

	this.instance_3 = new lib.textureGroundZ();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-866.95,156.25);

	this.instance_4 = new lib.textureGroundY();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-896.7,68.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("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");
	this.shape_3.setTransform(101.2,875.708);

	this.btn3D = new lib.btn3D();
	this.btn3D.name = "btn3D";
	this.btn3D.parent = this;
	new cjs.ButtonHelper(this.btn3D, 0, 1, 2, false, new lib.btn3D(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn3D},{t:this.shape_3},{t:this.instance_4},{t:this.instance_3},{t:this.chVector},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.slLight}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-243.9,450,2072.3,450);
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