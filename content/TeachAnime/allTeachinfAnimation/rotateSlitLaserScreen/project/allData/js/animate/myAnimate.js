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
	this.shape.graphics.f("#FFFFFF").s().p("AhvBvQgtgugBhBQABhAAtgvQAvgtBAgBQBBABAuAtQAvAvgBBAQABBBgvAuQguAvhBAAQhAAAgvgvg");
	this.shape.setTransform(-0.0091,-0.0214,0.7619,0.7619);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.checker2, new cjs.Rectangle(-12,-12,24,24), null);


(lib.checker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(8,1,1).p("AiLgIIA4AAIAfCFIDAj5");
	this.shape.setTransform(2.25,-4.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.checker, new cjs.Rectangle(-15.7,-20.7,36,33), null);


(lib.sTick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.ttxx = new cjs.Text("1111", "20px 'Microsoft JhengHei'", "#FFFFFF");
	this.ttxx.name = "ttxx";
	this.ttxx.lineHeight = 29;
	this.ttxx.lineWidth = 100;
	this.ttxx.parent = this;
	this.ttxx.setTransform(64,-13.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAyIkrgyIErgxIEsAAIAABjg");
	this.shape.setTransform(30,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.ttxx}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sTick, new cjs.Rectangle(0,-15.9,166,30.6), null);


(lib.sText2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.ttt = new cjs.Text("99.9cm", "20px 'Microsoft JhengHei'", "#FFFFFF");
	this.ttt.name = "ttt";
	this.ttt.lineHeight = 29;
	this.ttt.lineWidth = 98;
	this.ttt.parent = this;
	this.ttt.setTransform(1.5,-13.3);

	this.timeline.addTween(cjs.Tween.get(this.ttt).wait(1));

}).prototype = getMCSymbolPrototype(lib.sText2, new cjs.Rectangle(-0.5,-15.3,102.4,30.6), null);


(lib.sText1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglApQgPgPAAgZQAAgaAPgPQAOgPAZAAQAYAAANAOQAOAPAAAaQAAAagPAPQgPAPgXAAQgXABgOgQgAgZgeQgKALAAAUQAAATAKALQAKAMAPAAQARAAAKgMQAJgKAAgUQAAgVgJgLQgJgKgSgBQgPAAgKAMg");
	this.shape.setTransform(50.45,-14.3,0.7,0.7,0,0,0,0.1,0);

	this.ttt = new cjs.Text("90.5", "20px 'Microsoft JhengHei'", "#FFFFFF");
	this.ttt.name = "ttt";
	this.ttt.textAlign = "right";
	this.ttt.lineHeight = 29;
	this.ttt.lineWidth = 47;
	this.ttt.parent = this;
	this.ttt.setTransform(48.5,-13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ttt},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sText1, new cjs.Rectangle(-0.5,-18.3,54.7,33.6), null);


(lib.rTick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.tt1 = new cjs.Text("9999cm", "26px 'Microsoft JhengHei'", "#FFFF00");
	this.tt1.name = "tt1";
	this.tt1.textAlign = "center";
	this.tt1.lineHeight = 37;
	this.tt1.lineWidth = 118;
	this.tt1.parent = this;
	this.tt1.setTransform(-0.65,-17.75);

	this.tt2 = new cjs.Text("9999cm", "26px 'Microsoft JhengHei'", "#FF0000");
	this.tt2.name = "tt2";
	this.tt2.textAlign = "center";
	this.tt2.lineHeight = 37;
	this.tt2.lineWidth = 118;
	this.tt2.parent = this;
	this.tt2.setTransform(0.6,-16.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgTBVIAAipIAnAAIAACpg");
	this.shape.setTransform(0,-24,1,1,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgnBLIAAiVIBPAAIAACVg");
	this.shape_1.setTransform(0,-23,1,1,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.tt2},{t:this.tt1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rTick, new cjs.Rectangle(-61.4,-32.5,122.9,52.6), null);


(lib.pTick3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("ArtAUIAAgnIXbAAIAAAng");
	this.shape.setTransform(-100,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("ArtAoIAAhPIXbAAIAABPg");
	this.shape_1.setTransform(-100,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("EnUgAAUIAAgnMOpBAAAIAAAng");
	this.shape_2.setTransform(3023.375,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("EnUgAAoIAAhPMOpBAAAIAABPg");
	this.shape_3.setTransform(3023.375,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// 圖層_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AvnAUIAAgnIfPAAIAAAng");
	this.shape_4.setTransform(49.8254,0,0.2498,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000FF").s().p("AvnAoIAAhPIfPAAIAABPg");
	this.shape_5.setTransform(49.8254,0,0.2498,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AvnAUIAAgnIfPAAIAAAng");
	this.shape_6.setTransform(-99.9945,0,0.75,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0000FF").s().p("AvnAoIAAhPIfPAAIAABPg");
	this.shape_7.setTransform(-100.0055,0,0.75,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[]},1).wait(1));

	// 圖層_1
	this.tt1 = new cjs.Text("99", "26px 'Microsoft JhengHei'", "#FFFFFF");
	this.tt1.name = "tt1";
	this.tt1.textAlign = "center";
	this.tt1.lineHeight = 37;
	this.tt1.lineWidth = 31;
	this.tt1.parent = this;
	this.tt1.setTransform(-0.5,-17.75);

	this.tt2 = new cjs.Text("99", "26px 'Microsoft JhengHei'", "#0000FF");
	this.tt2.name = "tt2";
	this.tt2.textAlign = "center";
	this.tt2.lineHeight = 37;
	this.tt2.lineWidth = 31;
	this.tt2.parent = this;
	this.tt2.setTransform(0.5,-16.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tt2},{t:this.tt1}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-19.7,6196.9,39.5);


(lib.pTick2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.tt1 = new cjs.Text("999", "16px 'Microsoft JhengHei'", "#FFFFFF");
	this.tt1.name = "tt1";
	this.tt1.textAlign = "right";
	this.tt1.lineHeight = 23;
	this.tt1.lineWidth = 31;
	this.tt1.parent = this;
	this.tt1.setTransform(-14.8,-10.15);

	this.tt2 = new cjs.Text("999", "16px 'Microsoft JhengHei'");
	this.tt2.name = "tt2";
	this.tt2.textAlign = "right";
	this.tt2.lineHeight = 23;
	this.tt2.lineWidth = 31;
	this.tt2.parent = this;
	this.tt2.setTransform(-13.9,-9.25);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhFAUIAAgnICLAAIAAAng");
	this.shape.setTransform(-4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhFAoIAAhPICLAAIAABPg");
	this.shape_1.setTransform(-6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.tt2},{t:this.tt1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pTick2, new cjs.Rectangle(-47.5,-12.1,50.5,26.1), null);


(lib.pTick1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.tt1 = new cjs.Text("999", "16px 'Microsoft JhengHei'", "#FFFFFF");
	this.tt1.name = "tt1";
	this.tt1.lineHeight = 23;
	this.tt1.lineWidth = 31;
	this.tt1.parent = this;
	this.tt1.setTransform(13,-11.25);

	this.tt2 = new cjs.Text("999", "16px 'Microsoft JhengHei'");
	this.tt2.name = "tt2";
	this.tt2.lineHeight = 23;
	this.tt2.lineWidth = 31;
	this.tt2.parent = this;
	this.tt2.setTransform(13.9,-10.35);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhFAUIAAgnICLAAIAAAng");
	this.shape.setTransform(4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhFAoIAAhPICLAAIAABPg");
	this.shape_1.setTransform(6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.tt2},{t:this.tt1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pTick1, new cjs.Rectangle(-3,-13.2,49.6,26.1), null);


(lib.labelDelta2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3,1,1).p("AhjhjIDHBjIjHBkg");
	this.shape.setTransform(198.3,18.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AhjhjIDHBjIjHBkg");
	this.shape_1.setTransform(198.3,18.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("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");
	this.shape_2.setTransform(88.5,16.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1,1).p("AIFg5IAAhhQAAgEgEAAIisAAQgEAAAAAEIAABhQAAAFAEAAICsAAQAEAAAAgFgAEXAGQAOAVANARIAXgTQgXgegbgcIAAgIIArAAIAAgeIgrAAIAAg3QAbgFAOgEIgHgdQgmAKhJAKIAGAcQASAAAYgFIAAAyIgxAAIAAAeIArAAQgOA7gkA0IAcAJQASgfAKgcIAACSIAdAAgAGZCAIhXAAIAAAdIDKAAIAAgdIhWAAIAAgwIBZAAIAAgdIhZAAIAAgwQAvgDAngJIgIgdQhEASh2gCIAGAdQAmAAAjgBIAAAtIhcAAIAAAdIBcAAgALcCDIiBAAIAAAdIEZAAIAAgdIh5AAIAAg6IBhAAIAAgdIi8AAQAIgKAJgTIDEAAIAAgcIiSAAIAAgYIB1AAIAAgeIh1AAIAAgZICEAAIAAgdIhTAAQAPgNAJgNIgYgVQgJAOgaAYIAJAJIhTAAIAMgJQgQgWgQgOIgWATQAIAJAOARIhUAAIAAAdICFAAIAAAZIh0AAIAAAeIB0AAIAAAYIiTAAIAAAcIBeAAQgjBBhBAjIAUAXQAngaAlgnIBRAAgAFtiCIB8AAIAAAwQAAABgBAAIh7AAgAjxg0IAvAAIAAgYIguAAIADgbQAAgBgDgDQgBgCgDAAIjXAAQgCAAgDACQgBAAgBADIgGAcIgwAAIAAAYIAsAAIgEAZQAAABABAEQAAACADABIDfAAQAFAAABgDQABAAACgCgAlziUIiIAAQgGAAAAAGIAAA2IAcAAIAAgfQAAgBACgBIEEAAQAEAAgBAEQABABgHAYIAbAHQAKgdABgVIgYgNIiAAAIAAgUIgfAAgAtFBQIgrAAIAAAcIFGAAIAAgcIglAAIAAisQAAgKgMAAIhhAAIAAgTICOAAIAAgcIiOAAIAAgRIgfAAIAAARIiPAAIAAAcICPAAIAAATIhgAAQgKAAAAAKgAl4gpIhHAAQgEgCADgEIAAgFIBJAAgAlxhMIhLAAIACgGQAAgEAFAAIBFAAgAkxB1IgIATQAWAKBFAXIAKgcQgdgGgtgSIA3AAQAEAAAAgFIAAhzQAAgEgEAAIj5AAQgCAAgBAEIAABzQAAAFADAAIA2AAQhJAVgFABIAFAcQA0gKA0gVIgHgTgAnHAbIAAgKQgBgCABAAIDGAAQACAAAAACIAAAKgAslg0IAAgRQAAgFADAAICvAAQAFAAAAAFIAAARgAslgHIAAgUIC3AAIAAAUgAslBQIAAgSIC3AAIAAASgAj/BSIAAAJQAAACgCAAIjGAAIAAgLgAnHA8IAAgMIDIAAIAAAMgApuARIAAAUIi3AAIAAgUgAlShWIBCAAQAFAAAAAFIgBAFIhJAAgAlZg0IBMAAIgCAHQAAAEgEAAIhJAAgAgZgMQARA6AuAwQgqAbgxASIAVAbQApgOAzgoQAmAiA1ATIARgbQgygSglgaQANgMAKgNQAagfAUhBIgRgQIhFAAIAAg8IBCAAQAFgBgCAFQgBANgKAWIAbAJQAQgfAFghIgagPIhQAAIAAgiIgfAAIAAAiIhWAAQgIAAAAAIIAACCQAABMgvBEIAcARQAwhEAChnIAAgGgAiciGQAbANAoAcIAQgbQgmgbgdgOgAijgvQAaANAmAbIARgbQgkgZgdgPgAgegrIAAg4QAAgEAEAAIA7AAIAAA8gAhwAWQgKBBgpA3IAfAOQAiguAQhSgAAmAzQgXgbgKgkIBoAAQAJgBgDAHQgRAtgnAlQgKgNgLgMgAqgCNQAzAFA6AVIAJgdQgqgNhDgOgAsBBvQgnARhMAIIAKAeQBIgKAtgRg");
	this.shape_3.setTransform(88.5,16.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("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");
	this.shape_4.setTransform(88.5,16.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.labelDelta2, new cjs.Rectangle(-2.5,-2.5,212.3,38.8), null);


(lib.labelDelta1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3,1,1).p("AhjhjIDHBjIjHBkg");
	this.shape.setTransform(234.8,18.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AhjhjIDHBjIjHBkg");
	this.shape_1.setTransform(234.8,18.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("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");
	this.shape_2.setTransform(106.45,16.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1,1).p("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");
	this.shape_3.setTransform(106.45,16.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("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");
	this.shape_4.setTransform(106.45,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.labelDelta1, new cjs.Rectangle(-2.5,-2.5,248.8,38.6), null);


(lib.emp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.media = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag7H0IAAvnIB3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.media, new cjs.Rectangle(-6,-50,12,100), null);


(lib.laser = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("ACdBhIAAhFIgyAxIgPgQIAxgyImWAAIAAgVIGWAAIgxgxIAQgQIAxAwIAAhFIAWAAIAABGIAzgxIAQAQIgyAxIBGAAIAAAVIhGAAIAzAyIgRAQIgzgyIAABGg");
	this.shape.setTransform(-79.75,0.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 圖層 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("ABZGaIwzAAIAAszIQzAAIAAnoIOCOBIuCOCg");
	this.shape_1.setTransform(49.9935,-0.0029,0.5067,0.2784);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,1,1).p("AFihjIBkAAIAADIIhkAAIgBAAIAAjIIABAAIAAhkIsmAAIAAGPIMmAAIAAhjAFihjIAADI");
	this.shape_2.setTransform(-74.65,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AnEDIIAAmPIMlAAIAABkIgBAAIAADIIABAAIAABjgAFhBlIAAjIIBkAAIAADIg");
	this.shape_3.setTransform(-74.65,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.laser, new cjs.Rectangle(-121,-25,221,50), null);


(lib.bigMask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhArDc8UhbkhbkAAAiBYUAAAiBXBbkhbkUBbjhbkCBYAAAMAAAJw/UiBYAAAhbjhbkg");
	this.shape.setTransform(-1000,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Avn/PQM8AAJJJKQJKJKAAM7QAAM8pKJKQpJJKs8AAg");
	this.shape_1.setTransform(25.0232,-0.0128,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bigMask, new cjs.Rectangle(-2000,-2000,2050,4000), null);


(lib.amLen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(5,1,1).p("APCMfQEflUABnLQgBoFltluQluluoGAAQoGAAltFuQluFuAAIFQAAIGFuFuQFtFuIGAAQIGAAFuluQAFgFAFgG");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(3,1,1).p("AkyltIAxgxIKqKpIieCeIqqqpIAygyIg7g7IA7g7gAltkyIA7g7");
	this.shape_1.setTransform(131.9,123.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AmjkFIAxgxIA7g8IAygxIKpKpIieCeg");
	this.shape_2.setTransform(132.375,124.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag6AAIA6g6IA7A6Ig7A7g");
	this.shape_3.setTransform(95.3,87.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 圖層_2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("At0N1QltltAAoIQAAoGFtluQFtltIHAAQIHAAFuFtQFtFuAAIGQAAIIltFtQluFtoHAAQoHAAltltg");

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.amLen, new cjs.Rectangle(-127.5,-127.5,303.4,295.3), null);


(lib.btnSlit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// slit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdBLIAAiVIA7AAIAACVg");
	this.shape.setTransform(0,12.2508,1.2999,0.8333);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdBLIAAiVIA7AAIAACVg");
	this.shape_1.setTransform(0,-12.4992,1.2999,0.8333);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYEsIAApXIAxAAIAAJXg");
	this.shape_2.setTransform(0,0,1.2999,1.2499);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// btn
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA6CMIAeAAQADAAADgDQADgEAAgCIAAgrIhyAAIAAgRIByAAIAAgNIASAAIAAANIApAAIAAARIgpAAIAAAsQAAALgGAGQgHAHgFABIghAAgAhgCcIAAgxIg7AAIAAgSIA7AAIAAghIgsAAIAAiGIAsAAIAAgeIg2AAIAAgQIA2AAIAAggIASAAIAAAgIAwAAIAAAQIgwAAIAAAeIAtAAIAACGIgtAAIAAAhIAwAAIAAASIgwAAIAAAxgAhOAoIAaAAIAAgrIgaAAgAh7AoIAbAAIAAgrIgbAAgAhOgVIAaAAIAAgoIgaAAgAh7gVIAbAAIAAgoIgbAAgAgDBsIANgKQATASALASIgPAKQgLgSgRgSgACEArQhGAHhLADIgFgRIBIgCIAAgaIg+AAIAAhjIA+AAIAAgYIhGAAIAAgRIBGAAIAAgYIATAAIAAAYIBKAAIAAARIhKAAIAAAYIA/AAIAABjIgMAAQATAUAMASIgOAMQgEgJgFgGgABJAgIAugFIgKgLIALgIIgvAAgABJgIIAtAAIAAgbIgtAAgAAJgIIAtAAIAAgbIgtAAgABJgyIAtAAIAAgYIgtAAgAAJgyIAtAAIAAgYIgtAAg");
	this.shape_3.setTransform(0.025,80);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(3,1,1).p("ACbAuIgOAMQgEgIgFgHQhGAHhLADIgFgQQAvgCAZgBIAAgaIg+AAIAAhjIA+AAIAAgYIhGAAIAAgRIBGAAIAAgYIATAAIAAAYIBKAAIAAARIhKAAIAAAYIA/AAIAABjIgMAAQATAUAMASgAA2gzIAAgXIgtAAIAAAXgAB2gzIAAgXIgtAAIAAAXgAB2gIIAAgaIgtAAIAAAagAB4AIIgvAAIAAAYQAXgCAXgCQgHgJgDgCgAA2gIIAAgaIgtAAIAAAagACcBYIgpAAIAAAtQAAAKgGAHQgHAGgFABQgFAAgcAAIgGgRQAaAAAEAAQADAAADgDQADgEAAgDIAAgqIhyAAIAAgRIByAAIAAgNIASAAIAAANIApAAgAAoCHIgPAJQgLgTgRgRIANgKQATASALATgAgeBsIgwAAIAAAwIgSAAIAAgwIg7AAIAAgSIA7AAIAAgiIgsAAIAAiGIAsAAIAAgdIg2AAIAAgRIA2AAIAAggIASAAIAAAgIAwAAIAAARIgwAAIAAAdIAtAAIAACGIgtAAIAAAiIAwAAgAg0gVIAAgoIgaAAIAAAogAhggVIAAgoIgbAAIAAAogAhgAoIAAgrIgbAAIAAArgAg0AoIAAgrIgaAAIAAArg");
	this.shape_4.setTransform(0.025,80);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AA6CMIAeAAQADAAADgDQADgEAAgCIAAgrIhyAAIAAgRIByAAIAAgNIASAAIAAANIApAAIAAARIgpAAIAAAsQAAALgGAGQgHAHgFABIghAAgAhgCcIAAgxIg7AAIAAgSIA7AAIAAghIgsAAIAAiGIAsAAIAAgeIg2AAIAAgQIA2AAIAAggIASAAIAAAgIAwAAIAAAQIgwAAIAAAeIAtAAIAACGIgtAAIAAAhIAwAAIAAASIgwAAIAAAxgAhOAoIAaAAIAAgrIgaAAgAh7AoIAbAAIAAgrIgbAAgAhOgVIAaAAIAAgoIgaAAgAh7gVIAbAAIAAgoIgbAAgAgDBsIANgKQATASALASIgPAKQgLgSgRgSgACEArQhGAHhLADIgFgRIBIgCIAAgaIg+AAIAAhjIA+AAIAAgYIhGAAIAAgRIBGAAIAAgYIATAAIAAAYIBKAAIAAARIhKAAIAAAYIA/AAIAABjIgMAAQATAUAMASIgOAMQgEgJgFgGgABJAgIAugFIgKgLIALgIIgvAAgABJgIIAtAAIAAgbIgtAAgAAJgIIAtAAIAAgbIgtAAgABJgyIAtAAIAAgYIgtAAgAAJgyIAtAAIAAgYIgtAAg");
	this.shape_5.setTransform(0.025,80);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CCCCCC").ss(1,1,1).p("AB9AAQAAA0gkAkQgkAlg1AAQgzAAglglQgkgkAAg0QAAg0AkgkQAlgkAzAAQA1AAAkAkQAkAkAAA0g");
	this.shape_6.setTransform(0,50);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AhYBYQgkgkAAg0QAAg0AkgkQAlgkAzAAQA0AAAlAkQAkAkAAA0QAAA0gkAkQglAlg0AAQgzAAglglg");
	this.shape_7.setTransform(0,50);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhjAAIBohjIAAAqIBfAAIAAByIhfAAIAAArg");
	this.shape_8.setTransform(-20,50);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgEA6IhfAAIAAhyIBfAAIAAgrIBoBjIhoBkg");
	this.shape_9.setTransform(20,50);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CCCCCC").ss(1,1,1).p("AGQAAQAACmh1B1Qh1B1imAAQilAAh2h1Qh0h1AAimQAAilB0h2QB2h0ClAAQCmAAB1B0QB1B2AAClgAEsAAQAAB9hYBXQhXBYh9AAQh8AAhYhYQhXhXAAh9QAAh8BXhYQBYhXB8AAQB9AABXBXQBYBYAAB8g");
	this.shape_10.setTransform(0,0,1.25,1.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AjTDUQhYhYAAh8QAAh8BYhXQBXhYB8AAQB8AABYBYQBYBXAAB8QAAB8hYBYQhYBYh8AAQh8AAhXhYg");
	this.shape_11.setTransform(0,0,1.25,1.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AkbEbQh0h1AAimQAAilB0h2QB2h0ClAAQCmAAB1B0QB1B2AAClQAACmh1B1Qh1B1imAAQilAAh2h1gAjTjTQhYBXAAB8QAAB8BYBYQBXBYB8AAQB8AABYhYQBYhYAAh8QAAh8hYhXQhYhYh8AAQh8AAhXBYg");
	this.shape_12.setTransform(0,0,1.25,1.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnSlit, new cjs.Rectangle(-51,-51,102,148.2), null);


(lib.btnLaser = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// laser
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA6CMIAeAAQADAAADgDQADgEAAgCIAAgrIhyAAIAAgRIByAAIAAgNIASAAIAAANIApAAIAAARIgpAAIAAAsQAAALgGAGQgHAHgFABIghAAgAhgCcIAAgxIg7AAIAAgSIA7AAIAAghIgsAAIAAiGIAsAAIAAgeIg2AAIAAgQIA2AAIAAggIASAAIAAAgIAwAAIAAAQIgwAAIAAAeIAtAAIAACGIgtAAIAAAhIAwAAIAAASIgwAAIAAAxgAhOAoIAaAAIAAgrIgaAAgAh7AoIAbAAIAAgrIgbAAgAhOgVIAaAAIAAgoIgaAAgAh7gVIAbAAIAAgoIgbAAgAgDBsIANgKQATASALASIgPAKQgLgSgRgSgACEArQhGAHhLADIgFgRIBIgCIAAgaIg+AAIAAhjIA+AAIAAgYIhGAAIAAgRIBGAAIAAgYIATAAIAAAYIBKAAIAAARIhKAAIAAAYIA/AAIAABjIgMAAQATAUAMASIgOAMQgEgJgFgGgABJAgIAugFIgKgLIALgIIgvAAgABJgIIAtAAIAAgbIgtAAgAAJgIIAtAAIAAgbIgtAAgABJgyIAtAAIAAgYIgtAAgAAJgyIAtAAIAAgYIgtAAg");
	this.shape.setTransform(-94.325,-46.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("ACbAuIgOAMQgEgIgFgHQhGAHhLADIgFgQQAvgCAZgBIAAgaIg+AAIAAhjIA+AAIAAgYIhGAAIAAgRIBGAAIAAgYIATAAIAAAYIBKAAIAAARIhKAAIAAAYIA/AAIAABjIgMAAQATAUAMASgAA2gzIAAgXIgtAAIAAAXgAB2gzIAAgXIgtAAIAAAXgAB4AIIgvAAIAAAYQAXgCAXgCQgHgJgDgCgAB2gIIAAgaIgtAAIAAAagAA2gIIAAgaIgtAAIAAAagACcBYIgpAAIAAAtQAAAKgGAHQgHAGgFABQgFAAgcAAIgGgRQAaAAAEAAQADAAADgDQADgEAAgDIAAgqIhyAAIAAgRIByAAIAAgNIASAAIAAANIApAAgAAoCHIgPAJQgLgTgRgRIANgKQATASALATgAgeBsIgwAAIAAAwIgSAAIAAgwIg7AAIAAgSIA7AAIAAgiIgsAAIAAiGIAsAAIAAgdIg2AAIAAgRIA2AAIAAggIASAAIAAAgIAwAAIAAARIgwAAIAAAdIAtAAIAACGIgtAAIAAAiIAwAAgAg0gVIAAgoIgaAAIAAAogAhggVIAAgoIgbAAIAAAogAg0AoIAAgrIgaAAIAAArgAhgAoIAAgrIgbAAIAAArg");
	this.shape_1.setTransform(-94.325,-46.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA6CMIAeAAQADAAADgDQADgEAAgCIAAgrIhyAAIAAgRIByAAIAAgNIASAAIAAANIApAAIAAARIgpAAIAAAsQAAALgGAGQgHAHgFABIghAAgAhgCcIAAgxIg7AAIAAgSIA7AAIAAghIgsAAIAAiGIAsAAIAAgeIg2AAIAAgQIA2AAIAAggIASAAIAAAgIAwAAIAAAQIgwAAIAAAeIAtAAIAACGIgtAAIAAAhIAwAAIAAASIgwAAIAAAxgAhOAoIAaAAIAAgrIgaAAgAh7AoIAbAAIAAgrIgbAAgAhOgVIAaAAIAAgoIgaAAgAh7gVIAbAAIAAgoIgbAAgAgDBsIANgKQATASALASIgPAKQgLgSgRgSgACEArQhGAHhLADIgFgRIBIgCIAAgaIg+AAIAAhjIA+AAIAAgYIhGAAIAAgRIBGAAIAAgYIATAAIAAAYIBKAAIAAARIhKAAIAAAYIA/AAIAABjIgMAAQATAUAMASIgOAMQgEgJgFgGgABJAgIAugFIgKgLIALgIIgvAAgABJgIIAtAAIAAgbIgtAAgAAJgIIAtAAIAAgbIgtAAgABJgyIAtAAIAAgYIgtAAgAAJgyIAtAAIAAgYIgtAAg");
	this.shape_2.setTransform(-94.325,-46.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACxgwIAxAAIAABjIgxAAACxgwIAAgzImSAAIAADHIGSAAIAAgxACxgwIAABj");
	this.shape_3.setTransform(-87.325,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FF00").s().p("Ag1AwIAAghIgZAXIgIgIIAZgYIjMAAIAAgKIDLAAIgXgZIAHgHIAZAXIAAgiIALAAIAAAiIAZgYIAJAIIgZAZIAhAAIAAAKIghAAIAZAYIgJAIIgZgYIAAAigAB8AaIAAgxICOAAIAAAxg");
	this.shape_4.setTransform(-76.625,0.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AjhBkIAAjHIGSAAIAAAyIAxAAIAABjIgxAAIAAhjIgBAAIAABjIABAAIAAAygAA1AwIALAAIAAgiIAZAZIAJgJIgZgYIAiAAIAAgKIgiAAIAZgZIgJgIIgZAYIAAgiIgLAAIAAAiIgZgXIgHAHIAXAZIjKAAIAAAKIDLAAIgZAYIAIAJIAZgYg");
	this.shape_5.setTransform(-87.325,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FFFF").s().p("AhjgEIAqAAIAAhfIByAAIAABfIArAAIhkBog");
	this.shape_6.setTransform(-99.95,20.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00FFFF").s().p("Ag4BkIAAhfIgrAAIBjhoIBkBoIgqAAIAABfg");
	this.shape_7.setTransform(-99.95,-19.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0000CC").s().p("AoSIRQjbjaAAk3QAAk2DbjcQDcjbE2AAQE3AADaDbQDdDcAAE2QAAE3jdDaQjaDdk3AAQk2AAjcjdg");
	this.shape_8.setTransform(0,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnLaser, new cjs.Rectangle(-111.4,-74.5,186.4,150), null);


(lib.mBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkbCFIADgbQAOAHAHAAIAGgBQACgDAAgFIAAhEQgIAGgKAFIgQgTIAigUIAAhBIgfAAIAAgaIAfAAIAAg3IAaAAIAAA3IAYAAIAAAaIgYAAIAAAvIANgMIARASQgFAFgZARIAABdQAAASgOAIQgEADgIAAQgMAAgUgHgADcCFIAAgbIATAGQAPAEAEgFQACgEABgEIAAjsIAZAAIAADzQAAARgOAJQgGADgKAAQgOAAgWgGgABgCKIAAhvIgoAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAIAABcIgaAAIAAhxQABgGAGAAIA8AAIAAgYIhLAAIAAgaIBLAAIAAgiIgpAAQgJARgJAKIgXgMQAageAIgjIAZAHQgFAJgBAJIAdAAIAAgfIAaAAIAAAfIBBAAIAAAZIhBAAIAAAiIBHAAIAAAaIhHAAIAAAYIA8AAQAHABAAAFIAABbQgBARgMAHQgNAIgdgFIgBgcQASAGAFgEQAHgDAAgIIAAg8IgCgBIgnAAIAABvgAjFCCIAAgZIBSAAIAAhDIgzAAIAAgYIB8AAQgHgIgEgGQgKgRgFgVQAAgBgBAAQAAgBAAgBQAAAAgBAAQAAgBAAAAIhBAAIAAgYIBNAAQAFABABAEQAFAbALARQAKARAWARIgVAOQgKgJgHgIIAAAYIgvAAIAABDIBSAAIAAAZgADPBIIAAi/IAZAAIAAC/gAjNAWQAdgfAKgoIAYAHQgQAxgaAcgAgog1QAIgaABgHQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgBgBAAIiCAAQgBAAAAAAQgBAAAAAAQAAABAAAAQgBABAAABIAAAiIgZAAIAAg3QAAgFAFAAIBIAAIAAgZIAaAAIAAAZIBAAAIAVALQAAAYgMAhg");
	this.shape.setTransform(0,0.015);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FFFF").ss(3,1,1).p("AmPj5IMfAAQBkAAAABkIAAErQAABkhkAAIsfAAQhkAAAAhkIAAkrQAAhkBkAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000066","#0066FF"],[0,1],10,35,10,-24.9).s().p("AmPD6QhkAAAAhkIAAkrQAAhkBkAAIMfAAQBkAAAABkIAAErQAABkhkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#00FFFF"],[0,1],10,35,10,-24.9).s().p("AmPD6QhkAAAAhkIAAkrQAAhkBkAAIMfAAQBkAAAABkIAAErQAABkhkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF00FF").ss(3,1,1).p("AmPj5IMfAAQBkAAAABkIAAErQAABkhkAAIsfAAQhkAAAAhkIAAkrQAAhkBkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("AmPD6QhkAAAAhkIAAkrQAAhkBkAAIMfAAQBkAAAABkIAAErQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{rotation:0}}]}).to({state:[{t:this.shape_3,p:{rotation:0}},{t:this.shape_1,p:{rotation:0}}]},1).to({state:[{t:this.shape_3,p:{rotation:180}},{t:this.shape_1,p:{rotation:180}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.5,-26.5,103,53);


(lib.btnLookSlit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAwA3QgdBIhHAnIgVgXQBWgrARhZIgWAMQgIgTgOgWQgNAhgOASIgZgLQACAEAAAGQgBA1gJAjQgKAegTAJQgPAIgogOIACghQAgANAJgEQAJgEAHgZQAGghgBguQgaAegaARIgXgWQAsgbAbglQgEgbgJgWQgPAUgWAQIgVgUQAdgWAQgWQgOgYgSgWIAZgTQAQASAJATIACgDQAHgOAIgaIAcAKQgMAkgRAaQAUA0AEA8QAig2AIg5IAcAFIgGAnIAgA0QADgMAAgOIAAhSIhVAAIAAgfIBVAAIAAgcIAfAAIAAAcIBeAAIAAAfIheAAIAABSIgBAAIAAAHQABAGAAAJQAHBVBhBAIgZAUQhOg7gRg2gAEhCNQAXgIALgKQAGgHACgNIAAhVQABgDgEAAIgPAAIAAgZIAoAAQAIACAAAFIAABlIAAADIABACQALAjA7gBIADAAIAAgjIg7AAIAAgZIA7AAIAAgUIg3AAIAAgZIA3AAIAAgWIg7AAIAAgZIA7AAIAAgbIAcAAIAAAbIA5AAIAAAZIg5AAIAAAWIA3AAIAAAZIg3AAIAAAUIA/AAIAAAZIg/AAIAAAiIBBgFIgHAgIhqABQgxgFgQgYQgHAKgNAJQgSAMgMABgAj7CmIAAgNIioAAIAAANIgfAAIAAiUQgSARgoAZIgTgWQA5gkAngmIhdAAIAAgdIBzAAIALgOIhpAAIAAgdIB6AAIAIgPQhKACgwAAIgCgdQA+ABBVgGQBWgDAqgJIAEAdQghAHhNAHIgKAAQgFAHgEAJICFAAIAAAdIiUAAIgMAOICyAAIAAAdIjHAAIgQAQIC4AAQAGABAAAFIAAC0gAmjB8ICoAAIAAgTIioAAgAmjBNICoAAIAAgUIioAAgAmjAMIAAARICoAAIAAgRQgBgEgEAAIieAAQgHAAACAEgADuCjIAAiXIgmAGQgDgNgFgNIAYgDQAMgPANgWQgYgZgbgOQAJgNAGgMIALAHQANgcAPgiIAYAMQgKAbgVAoIASARQAMgbAJgZIAbAHQgKAogrA8IAagFIgEgPIAYgGQAJAbADAiIgZAEIgDgRIgNACIAACbgADACMQAJg+AAgmIAaABQACAsgNA8gAEbBxQgDgmgEgiIAZgBQAGAwAAAZgABxgSQgJAZgIAQIgcgIQAdgyACg4IAcACQgCAUgEATQAaAgAXAiIgaARIgfgzgAHDg9QgaAQguATIgQgYQApgNAbgQQgNgNgMgSQgNAQgOANIgRgTQARgMAIgMQAKgPAJgZIAZAAIgDAJIBCAAIATAOQgRAkgaAbQAWAPAkANIgRAYQgigPgagUgAHDheIAAgBQALgJAOgUQAAgCAAAAQAAgBAAgBQgBAAAAgBQAAAAAAAAIg2AAQAPAVAPAOgAEshBIARgWQASANAXAVIgSAVQgagWgOgLgAEviFIAQgXQAVANAWAWIgTAVQgYgXgQgKg");
	this.shape.setTransform(0,0.55);

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


(lib.btnLookScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFZCpIAAhJIhKAAQgBAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAAAIAAA2IgeAAIAAhHQgPAHgRAGIgNgbQArgLAhgVIhJAAIAAgbIBtAAIAQgOIhYAAQgFAAAAgFIAAhcQAAgFAFAAIAvAAIAAgMIhVAAIAAgcIBVAAIAAgTIAeAAIAAATIBiAAIAAgTIAeAAIAAATIBVAAIAAAcIhVAAIAAAMIAxAAQAFAAAAAFIAABcQAAAFgFAAIiCAAIgPAOIC3AAIAAAbIhMAAIADABQAeAVAuAKIgPAZIgegJIAAAoQAAARgOAKQgWANgvgJIgDggQAnAIALgFQAGgGAAgIIAAgNQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIhNAAIAABJgAHIBEQgcgRgTgRIhfAAQgVARgeARIBSAAIAAgaIAeAAIAAAaIBRAAIAAAAgAECghQAAABAAAAQAAAAAAAAQABABAAAAQAAAAABAAIDIAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBIAAgOIjMAAgAEChTIAAAOIDMAAIAAgOQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAIjIAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABgAE2htIBiAAIAAgMIhiAAgAhhCOQAQgEAMgJQAbgSAGgbIg8AAIAAgdIA9AAIAAgzIgwAAIAAgcIAwAAQgKgRgNgOIAUgNIhEAAIAABCQAAA2gMAzQgHAqgMAWIgggOQAghDABhkIAAiGQABgLAKAAIEKAAQANABAAAKIAABEQAAAMgNAAIgtAAIATANQgNASgKANIA7AAIAAAcIgwAAIAAAzIA6AAIAAAdIg6AAIAABTIgfAAIAAhTIhOAAQgKA3g/AegAgEA3IBMAAIAAgzIhMAAgABIgYIgLgJQAIgKASgZIh2AAQAKALATAaIgOAHIBYAAgAhqh8IAAAZIDfAAQAGAAAAgFIAAgUQAAgEgGAAIjaAAQgEAAgBAEgAj7ClIAAgNIioAAIAAANIgfAAIAAiUQgSARgoAZIgTgWQA5gkAngmIhdAAIAAgcIBzAAIALgPIhpAAIAAgdIB6AAIAIgPQhKADgwAAIgCgeQA+ACBVgGQBWgEAqgJIAEAeQghAHhNAGIgKAAQgFAIgEAIICFAAIAAAdIiUAAIgMAPICyAAIAAAcIjHAAIgQARIC4AAQAGAAAAAGIAACzgAmjB8ICoAAIAAgUIioAAgAmjBMICoAAIAAgUIioAAgAmjALIAAARICoAAIAAgRQgBgEgEAAIieAAQgHAAACAEg");
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


(lib.bgBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,255,0.008)").s().p("EiMnBV8MAAAir3MEZPAAAMAAACr3g");
	this.shape.setTransform(900,550.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgBtn, new cjs.Rectangle(0,0,1800,1100.1), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(101.2,875.708);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(6.2,860.7,190,30), null);


(lib.screenPlane = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// emp
	this.emp = new lib.emp();
	this.emp.name = "emp";
	this.emp.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.emp).wait(1));

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("EAAAJxAMAAAzh/");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ek4fJxAMAAAzh/MJw/AAAMAAATh/g");
	this.shape_1.setTransform(2000,0);

	this.stText = new lib.sText2();
	this.stText.name = "stText";
	this.stText.parent = this;
	this.stText.setTransform(-259.2,59.6);

	this.st = new lib.sTick();
	this.st.name = "st";
	this.st.parent = this;
	this.st.setTransform(-263.95,15.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF00FF").ss(5,1,1).p("E///7YxUOT3uSTUO2AAAUUO2AAAOSTOSTUOT3OT3AAAUO2UAAAUO2uT3OST");
	this.shape_2.setTransform(2925.75,-2930.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.st},{t:this.stText},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.screenPlane, new cjs.Rectangle(-14151,-20002.5,34153.5,34143.5), null);


(lib.screenCircle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// emp
	this.emp = new lib.emp();
	this.emp.name = "emp";
	this.emp.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.emp).wait(1));

	// 圖層_1
	this.stText = new lib.sText1();
	this.stText.name = "stText";
	this.stText.parent = this;
	this.stText.setTransform(855.1,34.55);

	this.st = new lib.sTick();
	this.st.name = "st";
	this.st.parent = this;
	this.st.setTransform(850.35,-9.15);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("ECcQAAAUAAABAwgtyAtuUgtuAtyhAwAAAUhAvAAAgtygtyUgtugtuAAAhAwUAAAhAvAtugtyUAtygtuBAvAAAUBAwAAAAtuAtuUAtyAtyAAABAvg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF00FF").ss(5,1,1).p("EE4gAAAUAAACBfhblBbcUhbcBbliBfAAAUiBeAAAhbmhblUhbbhbcAAAiBfUAAAiBeBbbhbmUBbmhbbCBeAAAUCBfAAABbcBbbUBblBbmAAACBegEf//AAAUAAAUO2uT3OSTUuSTOT30O2AAAU0O1AAAuT3uT3UuSTuSTAAA0O2UAAA0O1OSTuT3UOT3uSTUO1AAAUUO2AAAOSTOSTUOT3OT3AAAUO1g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("E///f//UuSTuSTAAA0O2UAAA0O1OSTuT3UOT3uSTUO1AAAUUO2AAAOSTOSTUOT3OT3AAAUO1UAAAUO2uT3OSTUuSTOT30O2AAAU0O1AAAuT3uT3gEk4fAAAUAAACBfBbbBbbUBbmBbmCBeAAAUCBfAAABbbhbmUBbmhbbAAAiBfUAAAiBehbmhbmUhbbhbbiBfAAAUiBeAAAhbmBbbUhbbBbmAAACBeIAAAAgEjdEDc6UhbbhbbAAAiBfUAAAiBeBbbhbmUBbmhbbCBeAAAUCBfAAABbbBbbUBbmBbmAAACBeUAAACBfhbmBbbUhbbBbmiBfAAAUiBeAAAhbmhbmgEhuhhuhUgtuAtyAAABAvUAAABAwAtuAttUAtyAtzBAvAAAUBAwAAAAttgtzUAtzgttAAAhAwUAAAhAvgtzgtyUgttgtuhAwAAAUhAvAAAgtyAtugEE4gAAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.st},{t:this.stText}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.screenCircle, new cjs.Rectangle(-20002.5,-20002.5,40005,40005), null);


(lib.theRuler = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.rt = new lib.rTick();
	this.rt.name = "rt";
	this.rt.parent = this;
	this.rt.setTransform(0,32.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("EjqVAAUIAAgnMHUrAAAIAAAng");
	this.shape.setTransform(14997.5,0,10,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("EjqUAAoIAAhPMHUpAAAIAABPg");
	this.shape_1.setTransform(14997,0,10,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.rt}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.theRuler, new cjs.Rectangle(-61.4,-4,30058.9,57), null);


(lib.theSlit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.media2 = new lib.media();
	this.media2.name = "media2";
	this.media2.parent = this;
	this.media2.setTransform(0,60);

	this.media1 = new lib.media();
	this.media1.name = "media1";
	this.media1.parent = this;
	this.media1.setTransform(0,-60);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgxTiMAAAgnDIBjAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.media1},{t:this.media2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.theSlit, new cjs.Rectangle(-6,-125,12,250), null);


(lib.slDD = function(mode,startPosition,loop) {
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
		sl.len = 100;
		sl.min = 0;
		sl.max = 100;
		sl.val = 0;
		sl.btnS.alpha=0;
		sl.digitN=0;
		//event
		sl.on('mousedown',function(e){
									//按下設值
									var localX = e.stageX - sl.x-sl.parent.x;
									setValue(sl,localX);
								});
		sl.on('pressmove',function(e){
									//拖曳設值
									var localX = e.stageX - sl.x-sl.parent.x;
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
	this.valueText = new cjs.Text("3.0", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.textAlign = "right";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 37;
	this.valueText.parent = this;
	this.valueText.setTransform(159.05,-14.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AApBqIgBAAIgBAAIgBAAIgCAAIgCAAQgKAAgGgJQgFgJAEgfIAEgqIhHBYIgkAAIBwiJIACgNQACgVgFgIQgDgFgFgCQgGABgGAFQgHAGgHANIgPAAQAIgXAPgOQALgKALAAIABAAIADAAIABAAIABAAIACABIACgBQAKAAAEAIQAHAMgEAeIgLBmQgCAXAFAHQADAFAFACQAFgBAGgEQAHgGAFgNIAQAAIgCAGQgGATgNAMQgKAJgMAAIgDAAg");
	this.shape.setTransform(170.175,-0.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah2BeQAFgCAHgBIAAhhIAVAAIAABcIAPgFIAAhqIgjAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAgBIAAhSQAAgBAAgBQAAAAABAAQAAgBABAAQAAAAABAAIBXAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAABIAABSQAAABAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgeAAIAAAdIAjAAIAAAVIgjAAIAAAyIAfgLIAIAUQgMAHgcAHQgmAMgYAEgAhXguIABABIAxAAIABgBIAAgvIgzAAgAgBBmIAAjOQABgIAHAAIBuAAIgCAVIhcAAQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAABIAAAnIBUAAQAHABAAAGIAABUQAAAHgHAAIhUAAIAAAlQAAAAAAABQAAABABAAQAAAAABABQAAAAABAAIBgAAIAAAVIhwAAIgCAAQgGAAAAgIgAAUAcIBEAAQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAAAgBIAAg0QAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAgBAAIhEAAg");
	this.shape_1.setTransform(-40.35,-0.925);

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
	this.btnS.setTransform(50.15,0,1.3,0.3,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// line
	this.bgLine = new lib.sliderBGLine();
	this.bgLine.name = "bgLine";
	this.bgLine.parent = this;
	this.bgLine.setTransform(0,0,0.6667,1);

	this.timeline.addTween(cjs.Tween.get(this.bgLine).wait(1));

}).prototype = getMCSymbolPrototype(lib.slDD, new cjs.Rectangle(-52.3,-16.5,231.2,33.1), null);


(lib.slBB = function(mode,startPosition,loop) {
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
		sl.len = 100;
		sl.min = 0;
		sl.max = 100;
		sl.val = 0;
		sl.btnS.alpha=0;
		sl.digitN=0;
		//event
		sl.on('mousedown',function(e){
									//按下設值
									var localX = e.stageX - sl.x-sl.parent.x;
									setValue(sl,localX);
								});
		sl.on('pressmove',function(e){
									//拖曳設值
									var localX = e.stageX - sl.x-sl.parent.x;
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

	// js
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AApBqIgBAAIgBAAIgBAAIgCAAIgCAAQgKAAgGgJQgFgJAEgfIAEgqIhHBYIgkAAIBwiJIACgNQACgVgFgIQgDgFgFgCQgGABgGAFQgHAGgHANIgPAAQAIgXAPgOQALgKALAAIABAAIADAAIABAAIABAAIACABIACgBQAKAAAEAIQAHAMgEAeIgLBmQgCAXAFAHQADAFAFACQAFgBAGgEQAHgGAFgNIAQAAIgCAGQgGATgNAMQgKAJgMAAIgDAAg");
	this.shape.setTransform(170.175,-0.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// text
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah3BiQAtgBAPgKQANgJABgKIgoAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAhgQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAICpAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAABIAABgQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIg6AAIAAAQQAAAFADAEQAEAEAEAAIAeAAQgLgJgHgDIAKgPQAKAFAOAKIgJAMIARAAIAGgDQACgCAAgSIAUAEQgBAcgEADQgIAIgGAAIhKAAQgIgBgHgGQgHgHAAgIIAAgbIgcAAQgEAXgQANQgVANgxADgAhDAxIABABICDAAIAAgBIAAgLIiEAAgAhDAUICEAAIAAgKIiEAAgAhDgGICEAAIAAgKIiEAAgAgxgoIAAgJIglAAIAAgSIAlAAIAAgMIAVAAIAAAMIAxAAIAAgMIAVAAIAAAMIAoAAIAAASIgoAAIAAAIIgVAAIAAgIIgxAAIAAAJgABYg0QAIgXAAgEQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIi7AAQAAgBgBAAQAAAAgBABQAAAAAAAAQAAABAAABIAAAhIgVAAIAAg0QAAgEAEAAIBlAAIAAgQIAWAAIAAAQIBbAAIASAKQgBAUgKAbg");
	this.shape_1.setTransform(-39.85,-1.175);

	this.valueText = new cjs.Text("3.0", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.textAlign = "right";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 37;
	this.valueText.parent = this;
	this.valueText.setTransform(159.05,-14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.valueText},{t:this.shape_1}]}).wait(1));

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
	this.btnS.setTransform(50.15,0,1.3,0.3,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// line
	this.bgLine = new lib.sliderBGLine();
	this.bgLine.name = "bgLine";
	this.bgLine.parent = this;
	this.bgLine.setTransform(0,0,0.6667,1);

	this.timeline.addTween(cjs.Tween.get(this.bgLine).wait(1));

}).prototype = getMCSymbolPrototype(lib.slBB, new cjs.Rectangle(-51.8,-16.5,230.7,33.1), null);


(lib.chInterference = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(45.25,0,1.3003,0.3399,0,0,0,0.2,0);
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
	this.shape_2.graphics.f("#FFFFFF").s().p("ADHB4IgFgYQBNAEAlgYQAkgaAKgwIAWAGQgIAegMATQgIALgHAHQgsAtheAAIgEAAgAjgArIASgQQAgAdAlAyIgSAOQgogzgdgagAl7BoQAtgfAWguIAVALQghA5glAZgAgKB1IAAhsIhqAAIAAgXIBqAAIAAhLIhbAAIAAgXIDNAAIAAAXIhcAAIAABLIBqAAIAAAXIhqAAIAABsgACLBpQAfgtAGgxIAVAEQgLBAgaAigAD7BCIAAgYQAdAKAGgGQACgDAAgEIAAg3IhRAAIAAgVIAYAAIAAhDIAWAAIAABDIAjAAIAAhSIAXAAIAAAdIA6AAIAAAVIg6AAIAAAgIBFAAIAAAVIhFAAIAAA9QAAAPgMAIQgGADgKAAQgNAAgTgFgADHAwQAQgLAJgNQAKgMAIgSIATALQgWAngaAWQgHgMgHgGgAlfAMQgDAAAAgEIAAh0QAAgBABgBQAAAAAAgBQABAAAAAAQABAAAAAAIC6AAQAAAAABAAQABAAAAAAQABABAAAAQAAABAAABIAAB0QAAAEgDAAgAlLhYIAABNIABABICRAAIABgBIAAhNIgBgBIiRAAIgBABgACLgkIALgUQAVAIAYASIgLATQgagSgTgHgACVhfIAKgTQAXAKAZATIgNAUQgcgVgRgJg");
	this.shape_2.setTransform(62.9,0.3261);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chInterference, new cjs.Rectangle(-21,-20.7,132,38.7), null);


(lib.slScreenRotation = function(mode,startPosition,loop) {
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
									var localX = e.stageX - sl.x-sl.parent.x;
									setValue(sl,localX);
								});
		sl.on('pressmove',function(e){
									//拖曳設值
									var localX = e.stageX - sl.x-sl.parent.x;
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
	this.shape.graphics.f("#FFFFFF").s().p("AgtA0QgRgSAAgiQAAgkAVgTQARgPAYABQAcAAASASQARASAAAgQAAAZgIAPQgHAPgPAJQgPAHgSAAQgbABgSgTgAgbgmQgMANAAAZQAAAaAMANQALANAQAAQARAAALgNQAMgNAAgaQAAgZgMgNQgLgNgRABQgQgBgLANg");
	this.shape.setTransform(-36.2397,21.2123,0.7,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhgB1IAAgWQAaAGAGgEQACgDAAgEIAAgYIhXAAIAAgUIBXAAIAAgOIAWAAIAAAOIAfAAIAAAUIgfAAIAAAdQgBAPgLAGQgGAEgMAAQgLAAgPgDgAjTB4IAAggIglAAIAAgUIAlAAIAAgRIgcAAQgBAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAhrQAAgBAAgBQAAAAABgBQAAAAABAAQABAAABAAIAcAAIAAgPIgjAAIAAgUIAjAAIAAgWIAUAAIAAAWIAhAAIAAAUIghAAIAAAPIAdAAQABAAABAAQAAAAABAAQAAABAAAAQABABAAABIAABrQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAIgdAAIAAARIAjAAIAAAUIgjAAIAAAggAi/AfIAMAAIABgBIAAgaIgNAAgAjfAeIABABIALAAIAAgbIgMAAgAi/gPIANAAIAAgbQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAABIgMAAgAjfgPIAMAAIAAgbIgMAAgAC4B1IgEgZQAbAHAGgGQAGgFADgMQAFgQAAghQABhMgBgDIgEgCIgYAAIgDAiQgEAngHAiQgKAugKATIgXgEQAdhFAGhjIgUAAIAAgWIAVAAIAAgQIAAgaIAXAAIAAAaIgBAQIAoAAIAGABQADACAAAKIgBBeQgCBFgTAPQgHAFgNAAQgJAAgOgDgAAQBfIA6gEIAAgRIg1AAIAAgUIA1AAIAAgPIg0AAQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAhNIACgCIA0AAIAAgPIg3AAIAAgUIA3AAIAAgOQgeACgUAAIgCgTQBKAAArgJIADATQgPADggADIgBAAIAAAPIA2AAIAAAUIg2AAIAAAPIAxAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIAABNQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIgxAAIAAAPIAxAAIAAAUIgxAAIAAAPIAtgDIABAUIh4AJgABeAVIAfAAIABgBIAAgNIggAAgAAoAVIAiAAIAAgOIgiAAgABegLIAgAAIAAgOIggAAgAAogLIAiAAIAAgOIgiAAgAiHBSIAOgNQAKAJAKAPIgPAMQgMgQgHgHgAgeAcIh1AHIgBgSIA2gDIAAgOIguAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAhFQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAIAuAAIAAgKIg2AAIAAgSIA2AAIAAgQIAVAAIAAAQIA7AAIAAASIg7AAIAAAKIAzAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAABFQAAABAAABQAAAAgBABQAAAAAAAAQAAAAgBAAQAGAMAHASIgQAHIgFgJgAhJANIAkgCIgDgIIAHgDIgoAAgAhJgRIAhAAIABgBIAAgLIgiAAgAh8gSIABABIAdAAIAAgMIgeAAgAhJguIAiAAIAAgKIgBgBIghAAgAh8g4IAAAKIAeAAIAAgLIgdAAIgBABg");
	this.shape_1.setTransform(-53.1,-0.0117);

	this.valueText = new cjs.Text("30", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.textAlign = "right";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 34;
	this.valueText.parent = this;
	this.valueText.setTransform(-39.2,20.7);

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

}).prototype = getMCSymbolPrototype(lib.slScreenRotation, new cjs.Rectangle(-78,-16,244,67.8), null);


(lib.slScreenDistance = function(mode,startPosition,loop) {
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
									var localX = e.stageX - sl.x-sl.parent.x;
									setValue(sl,localX);
								});
		sl.on('pressmove',function(e){
									//拖曳設值
									var localX = e.stageX - sl.x-sl.parent.x;
									setValue(sl,localX);
								});
		//setValue from localX
		var setValue = function(who,localX){
			var lx=localX;
			if(lx<0){lx=0;}
			else if(lx>who.len){lx=who.len;}
			who.btn.x=lx;
			who.val = who.min+lx/who.len*(who.max-who.min);
			//who.valueText.text = digitN(who.val , who.digitN);
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
													//sl.valueText.text = digitN(sl.val , sl.digitN);
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
												//sl.valueText.x = sl.len+20;
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
												//sl.valueText.text = digitN(sl.val , sl.digitN);
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
												//sl.valueText.text = digitN(sl.val , sl.digitN);
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
	this.shape.graphics.f("#FFFFFF").s().p("AjRB6IAAhqIgBACQgKAYgJAPIgVgGQAbgkAKgqIghAAIAAgVIAlAAIAAgkIgeAEIgEgUQA1gGAegJIAFAUQgKAEgWAEIAAAnIAhAAIAAAVIghAAIAAAEQAUAWAQAYIgQAMIgUgcIAABzgAC5B3IgEgZQAcAHAGgGQAFgFAEgMQAEgQAAghQABhMgBgDIgDgCIgZAAIgCAiQgFAngGAiQgLAugKATIgWgEQAchFAHhjIgVAAIAAgWIAWAAIAAgQIAAgaIAWAAIAAAaIgBAQIApAAIAFABQAEACAAAKIgBBeQgDBFgTAPQgGAFgNAAQgKAAgOgDgAigB5IgIgWQAsACAXgGIAPgFQgLgLgkgaIgTAHIgLgVQAxgNANgbQgWADgbAAIgIgVQApAAATgEQALgDAJgGQgWgQgZgPIgTANIgOgTQAngVAKgeIAVgBIgCAOIBFAAIANAIQgSBLhBAVIAOADQgDAEgBAGIBAAAIAMAJQgNA0giAZQglAZhCAAIgFAAgAhyAqIARAMQASANANAMIADgBQAXgTAKgcIhFAAQgKAKgFABgAhthOIAUAOQARAKAMAKQAUgRAGgZIhEAAIgHAIgAASBhIA5gEIAAgRIg1AAIAAgUIA1AAIAAgPIg0AAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBIAAhNIACgCIA0AAIAAgPIg3AAIAAgUIA3AAIAAgOQgeACgTAAIgDgTQBLAAAqgJIAEATQgQADgfADIgBAAIAAAPIA1AAIAAAUIg1AAIAAAPIAxAAQAAAAABAAQAAABABAAQAAAAAAAAQAAABAAAAIAABNQAAABAAABQAAAAAAABQgBAAAAAAQgBAAAAAAIgxAAIAAAPIAxAAIAAAUIgxAAIAAAPIAsgDIACAUIh5AJgABgAXIAfAAIAAgBIAAgNIgfAAgAApAXIAiAAIAAgOIgiAAgABggJIAfAAIAAgOIgfAAgAApgJIAiAAIAAgOIgiAAg");
	this.shape.setTransform(-53.25,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

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

}).prototype = getMCSymbolPrototype(lib.slScreenDistance, new cjs.Rectangle(-78.3,-16,244.3,32), null);


(lib.rbPlane = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(35.1,0,1.2003,0.3399,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsAsQgsAsg+AAQg9AAgsgsQgsgsAAg+QAAg+AsgsQAsgrA9AAQA+AAAsArQAsAsAAA+g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBqQgsgsAAg+QAAg+AsgrQAsgsA9AAQA+AAAsAsQAsArAAA+QAAA+gsAsQgsAsg+AAQg9AAgsgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiIBvIAAhVIhqAAIAAgOIBqAAIAAhsIhkAAIAAgOIDWAAIAAAOIhkAAIAABsIBrAAIAAAOIhrAAIAABVgADTBtIAAgPIiiAAIAAAPIgOAAIAAitIBKAAQAMgSAFgPIhtAAIAAgNIDiAAIAAANIhnAAQgHAUgJANIBlAAIAACtgACvBQIAkAAIAAiCIgkAAgABkBQIA9AAIAAgmIg9AAgAAxBQIAlAAIAAiCIglAAgABkAdIA9AAIAAghIg9AAgABkgSIA9AAIAAggIg9AAgAjahCIALgGQAYAfAKAeIgMAGQgIgZgZgkgAhWgNQAYgbANggIAMAFQgMAhgZAcg");
	this.shape_2.setTransform(50.05,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbPlane, new cjs.Rectangle(-26,-18,122,36), null);


(lib.rbNone = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(35.1,0,1.2003,0.3399,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsAsQgsAsg+AAQg9AAgsgsQgsgsAAg+QAAg+AsgsQAsgrA9AAQA+AAAsArQAsAsAAA+g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBqQgsgsAAg+QAAg+AsgrQAsgsA9AAQA+AAAsAsQAsArAAA+QAAA+gsAsQgsAsg+AAQg9AAgsgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAPA6IANgFQAMAZAIAfIgNAFQgFgXgPghgABFA7IAMgGQAVAeALAZIgMAFQgMgbgUgbgAglA4IANgCQAHAbABAeIgNACQgBgcgHgdgAhwBpQAUgXAQgeIAMAGQgSAggUAXgAhwAqIAAgMIAnAAIAAgsIgiAAIAAgNIAiAAIAAggIANAAIAAAgIAhAAIAAggIAOAAIAAAgIAhAAIAAggIANAAIAAAgIAiAAIAAggIANAAIAAAgIAcAAIAAANIgcAAIAAAsIAhAAIAAAMgAAhAeIAiAAIAAgsIgiAAgAgNAeIAhAAIAAgsIghAAgAg8AeIAhAAIAAgsIghAAgAhug4QAagSAfgnIANAFIgVAaIClAAIAAANIixAAQgJAKgRAMg");
	this.shape_2.setTransform(37.125,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbNone, new cjs.Rectangle(-26,-18,122,36), null);


(lib.rbCircle = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(35.1,0,1.2003,0.3399,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsAsQgsAsg+AAQg9AAgsgsQgsgsAAg+QAAg+AsgsQAsgrA9AAQA+AAAsArQAsAsAAA+g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBqQgsgsAAg+QAAg+AsgrQAsgsA9AAQA+AAAsAsQAsArAAA+QAAA+gsAsQgsAsg+AAQg9AAgsgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ADEhJIANAAQAABIAIApQAIAoAOAZIgLAKQggg4AAiEgABPBpQAYgnAAg5IAAhiQBCgGAxgSIAHAMQgyARg7AHIAABVQAAA/gaAsgAASBxIgFgOIAhAAQAFABADgEQADgEADgXQACgXABgbIgvAAIAIhEIAoAAIAAgtIg3AAIAAgNIBFAAIAABHIgqAAIgFAqIAuAAQgBAdgDAeQgEAegDAHQgEAGgFADQgGACgTABIgOgBgAgvBxIAAgQIiyAAIAAAQIgNAAIAAjcIDNAAIAADcgAjhBWICyAAIAAi1IiyAAgAC5BWQgjANgUAFIgGgLQAHgIAGgRQAGgRADgnQADgmABgoIAOABQgEBwgQAnIAngMQgFgSgHgQIANgEQAPAqAEAgIgNADQgCgTgDgIgAh8A/IAGgJQAkAJARAJIgGAJQgYgKgdgIgAjMBHQAdgIAXgOIgvAAIAAhPIB+AAIAABPIhLAAIAEAJQgTAMgkAKgAi5AmIBkAAIAAgNIhkAAgAi5AOIBkAAIAAgMIhkAAgAi5gHIBkAAIAAgNIhkAAgAjAgsIAAglIBxAAIAAAlgAi0g3IBXAAIAAgPIhXAAg");
	this.shape_2.setTransform(50.75,-0.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbCircle, new cjs.Rectangle(-26,-18,122,36), null);


(lib.chText = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(35.25,0,1.2003,0.3399,0,0,0,0.2,0);
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AB8ByIAAiRIhsAAIAAgOIDjAAIAAAOIhqAAIAACRgAhfBxIAAhGIhFAAIAAgMICVAAIAAAMIhDAAIAABGgAjNBxIAAh9QgRAlgLAQIgKgKQAXggAOguIghAAIAAgNIAiAAIAAg1IANAAIAAA1IAaAAIAAANIgaAAIAAADQAUAYALAUIgKAIQgGgNgPgUIAACKgAhCBEIAJgJQAdAXAOAQIgKAJQgPgSgbgVgAinBhQAWgNAXgaIAKAJQgYAbgWANgAAQBPQAhgdAfg0IANAHQgiA2ghAegACpAGIAMgHQAtAwASAjIgMAGQgbgtgkglgAiZALIAAgMICBAAIAAAMgAibgTIAAg4IAnAAIAAgUIgvAAIAAgNICUAAIAAANIgwAAIAAAUIAoAAIAAA4gAg/gfIAbAAIAAghIgbAAgAhngfIAbAAIAAghIgbAAgAiOgfIAaAAIAAghIgaAAgAhnhLIAbAAIAAgUIgbAAgAAsheIAAgOICrAAIAAAOg");
	this.shape_2.setTransform(49.975,-0.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chText, new cjs.Rectangle(-26,-20.7,122,38.7), null);


(lib.panelScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIBeIAAgpIgpAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBABAAAAIAAAdIgQAAIAAgnIgSAHIgHgOQAYgHASgLIgoAAIAAgPIA8AAIAJgIIgxAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAg0QAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAaAAIAAgHIgvAAIAAgQIAvAAIAAgKIARAAIAAAKIA1AAIAAgKIARAAIAAAKIAvAAIAAAQIgvAAIAAAHIAcAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAAA0QAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAAAIhIAAIgIAIIBkAAIAAAPIgqAAIACAAQAQAMAaAGIgJAOIgQgGIAAAXQAAAJgIAGQgMAHgagFIgCgSQAWAFAFgDQAFgEAAgEIAAgHIgBgBIgrAAIAAApgAA1AlQgPgJgLgJIg0AAQgLAJgRAJIAtAAIAAgOIAQAAIAAAOIAtAAIAAAAgAg4gSIABABIBuAAIABgBIAAgIIhwAAgAg4guIAAAIIBwAAIAAgIIgBgBIhuAAIgBABgAgbg8IA1AAIAAgHIg1AAg");
	this.shape.setTransform(140,-0.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzBNQAJgDAHgEQAPgLADgPIghAAIAAgQIAhAAIAAgcIgaAAIAAgQIAaAAQgFgJgHgIIALgGIgmAAIAAAkQAAAdgHAcQgEAYgHAMIgRgIQASglAAg3IAAhKQABgGAFgBICUAAQAHACAAAFIAAAmQAAAGgHABIgZAAIAKAGIgMARIAgAAIAAAQIgaAAIAAAcIAgAAIAAAQIggAAIAAAuIgRAAIAAguIgrAAQgGAfgjAQgAAAAcIArAAIAAgcIgrAAgAArgQIgHgEQAFgFAJgOIhAAAIAOAUIgGADIAxAAgAg4hHIAAAOIB8AAQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIAAgLQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIh5AAQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAABg");
	this.shape_1.setTransform(119.725,0.15);

	this.slScreenRotation = new lib.slScreenRotation();
	this.slScreenRotation.name = "slScreenRotation";
	this.slScreenRotation.parent = this;
	this.slScreenRotation.setTransform(85,161.4);

	this.slScreenDistance = new lib.slScreenDistance();
	this.slScreenDistance.name = "slScreenDistance";
	this.slScreenDistance.parent = this;
	this.slScreenDistance.setTransform(85.3,121.2);

	this.chText = new lib.chText();
	this.chText.name = "chText";
	this.chText.parent = this;
	this.chText.setTransform(151.95,34.35);

	this.rbCircle = new lib.rbCircle();
	this.rbCircle.name = "rbCircle";
	this.rbCircle.parent = this;
	this.rbCircle.setTransform(151.95,78.55);

	this.rbPlane = new lib.rbPlane();
	this.rbPlane.name = "rbPlane";
	this.rbPlane.parent = this;
	this.rbPlane.setTransform(31.95,78.55);

	this.rbNone = new lib.rbNone();
	this.rbNone.name = "rbNone";
	this.rbNone.parent = this;
	this.rbNone.setTransform(31.95,34.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rbNone},{t:this.rbPlane},{t:this.rbCircle},{t:this.chText},{t:this.slScreenDistance},{t:this.slScreenRotation},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FFFF").ss(2,1,1).p("AEswZIPoAAMAAAAgzMgonAAAMAAAggzIPoAA");
	this.shape_2.setTransform(130,110.0004,1,1.0476);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("A0TQaMAAAggzIPoAAIJXAAIPoAAMAAAAgzg");
	this.shape_3.setTransform(130,110.0004,1,1.0476);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.panelScreen, new cjs.Rectangle(-1,-12,262,233), null);


(lib.chRuler = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(25.35,0,0.9004,0.3399,0,0,0,0.4,0);
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AAEBCQgngegWgzIgGAAQgCBVgmAnIgLgKQAlglAAhZIAAhTICsAAIAABfIiJAAQAdA5AsAZQAtAYAnAHIgIAOQg/gQgogegAg+gdICPAAIAAhEIiPAAg");
	this.shape_2.setTransform(37.125,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chRuler, new cjs.Rectangle(-21,-20.7,92,38.7), null);


(lib.chProtractor = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(45.4,0,1.3004,0.3399,0,0,0,0.3,0);
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AhsBrQAMgPAIgUQAIgUAAgoIAAg7IgXAQIgKgLQA7gkAagkIAOAEIgMAQIBaAAIAAAMQgLAPgQARIA/AAIAACQQAAAIgGAFQgFAGgIAAIglAAIgFgOIAVAAQAUAAADgBQADgBAAgEIAAgkIibAAQgHAhgVAZgAAQAsIBGAAIAAgiIhGAAgAhDAsIBGAAIAAgiIhEAAQAAARgCARgAAQgDIBGAAIAAghIhGAAgAhCgDIBFAAIAAghIhFAAgAhLgyIBeAAQASgTAIgMIhTAAQgQAQgVAPgAFSBxIAAgOIgzAAIAAAOIgOAAIAAhQIA6AAQgkgSgVgVIgeAAQgVAXggAQIA2AAIAABQIgOAAIAAgOIgzAAIAAAOIgOAAIAAhFIgPAFIgGgMQA3gRAbgaIhQAAIAAgMIBbAAQAIgMAHgMIAMAEQgEALgHAJIB0AAIAAAMIhMAAQAbAaA1AQIgHANIgQgGIAABGgAEfBVIAzAAIAAgnIgzAAgAC0BVIAzAAIAAgnIgzAAgAl1BrIAAgLIBqAAIAAgRIhaAAIAAgKIBaAAIAAgRIhSAAIAAg7ICzAAIAAA7IhTAAIAAARIBaAAIAAAKIhaAAIAAARIBqAAIAAALgAj9AqIBGAAIAAgPIhGAAgAlQAqIBFAAIAAgPIhFAAgAj9ARIBGAAIAAgOIhGAAgAlQARIBFAAIAAgOIhFAAgAEzgfIAGgKQAPAFAIAFIgHALQgKgGgMgFgAlygWIAAgKIDdAAIAAAKgAETguIAAg9IBMAAIAAA9gAEgg6IAyAAIAAglIgyAAgACmguIAAg9IBMAAIAAA9gAC0g6IAxAAIAAglIgxAAgAldgvIAAg8IC0AAIAAA8gAlQg5ICZAAIAAgPIiZAAgAlQhSICZAAIAAgPIiZAAg");
	this.shape_2.setTransform(63.175,-0.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chProtractor, new cjs.Rectangle(-21,-20.7,132,38.7), null);


(lib.chDelta2 = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(70.2,0,1.8002,0.3399,0,0,0,0.1,0);
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AnxBWIAKgMQAuAOAkAQIgKANQghgRgxgOgAp2BnQAsgMAjgRIALALQgkASgtAMgAAmBLQgVAUgtATIgJgMQAqgQAWgTQgcgagPgxIgJAAQgBBCgcA3IgMgIQAcg0AAhKIAAhEIA+AAIAAgZIANAAIAAAZIBIAAQgCAagKAdIgOgEQAIgVADgQIg5AAIAAA2IA2AAIAAANQgUAwgYAaQAbAVApANIgHAOQgugTgYgUgAAlA5QAXgYAQgpIhOAAQANArAaAWgAgYgVIAwAAIAAg2IgwAAgAjwBeIAFgLQA1AHAhAMIgFALQgigMg0gHgAlyBlQArgFAngTIgyAAIAAhNICgAAIAABNIhqAAIAGAJQgqAWgqAFgAlGBDICGAAIAAgMIiGAAgAlGAsICGAAIAAgMIiGAAgAlGAWICGAAIAAgMIiGAAgAC+BwIAAh4QgSAogRAYIgJgLQAZgkASguIgqAAIAAgNIArAAIAAgnIggAGIgHgNQAugFAdgMIAIALIgeAKIAAAqIAeAAIAAANIgeAAIAAAKQAXAbAIAOIgJAKQgJgRgNgOIAAB3gAhyBmQAZgqASgtIAMAIQgUAxgYAmgAHKBrIAAgMIBRAAIAAgqIg7AAIAAgNICNAAIAAANIhEAAIAAAqIBQAAIAAAMgADjBqIAAgMIBDAAIAAgpIg6AAIAAgMIA6AAIAAgmIg0ACIgGgLQBIgCA0gNIAIAMQgaAHgjADIAAAoIA4AAIAAAMIg4AAIAAApIBCAAIAAAMgAGXBfQAzgeACg1IgzAAIAAgMIBpAAIAAgbIhZAAIAAgMIBZAAIAAgbIhhAAIAAgNIDRAAIAAANIhiAAIAAAbIBXAAIAAAMIhXAAIAAAbIBpAAIAAAMIifAAQgDA7g2AigAp4BBIAAgMIAjAAIAAh3IA3AAIAHgSIhdAAIAAgMIBjAAIAGgTIAOADIgGAQIBrAAIAAAMIhvAAIgIASIBXAAIAAB3IAjAAIAAAMgApHA1ICCAAIAAgSIiCAAgApHAXICCAAIAAgSIiCAAgApHgGICCAAIAAgSIiCAAgApHgkICCAAIAAgTIiCAAgAhvgnIAJgKQAZAQAUASIgKAKQgVgUgXgOgAlOgNIACgaIgoAAIAAgKIAqAAIACgaICRAAIgDAaIApAAIAAAKIgqAAIgCAagAj+gYIA1AAIABgPIg1AAgAlAgYIA1AAIABgPIg0AAgAj7gxIA0AAIACgPIg1AAgAk+gxIA1AAIABgPIg0AAgAD1gkIAAhHIBvAAIAABHgAEDgwIBUAAIAAgtIhUAAgAiohAIAAgZIi1AAIAAAYIgNAAIAAgjIBgAAIgGgLIAMgEIAJAPIBgAAIAAAkgAhphpIAJgKQAaARATASIgKAKQgUgTgYgQgAHKhsIAMgIQAQANAHALIgLAIQgIgMgQgMgAIohdQAPgLALgMIALAIQgMAPgOAIg");
	this.shape_2.setTransform(89.075,-0.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chDelta2, new cjs.Rectangle(-21,-20.7,182,38.7), null);


(lib.chDelta1 = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(70.2,0,1.8003,0.3399,0,0,0,0.1,0);
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AozBpQAfgUATgZQASgZADgbQADgYAAgxIg9AAIAAgMIA+AAIAAgjIAMAAIAAAjIBDAAIAAAMIhDAAIgBA8QAAAUASAhQARAhAmAYIgJAKQg2gkgQgyQgMAtg6AqgAAmBMQgVAUgtATIgIgMQApgQAWgTQgcgagPgxIgJAAQgBBCgbA3IgNgIQAdg0AAhKIAAhEIA9AAIAAgZIANAAIAAAZIBIAAQgBAagLAdIgOgEQAIgVADgQIg5AAIAAA2IA2AAIAAANQgUAwgYAaQAbAVApANIgGAOQgvgTgYgUgAAlA6QAXgYAQgpIhOAAQAOArAZAWgAgYgUIAwAAIAAg2IgwAAgApqBjIAXABQAFAAAGgDQAFgEACgWQACgWAAgOIgBghQgSAZgdAWIgJgKQAogfAOgbQgCgSgHgRQgSAPgSALIgHgLQAYgQANgLQgNgVgVgOIAJgJQATAMAQAXQARgRAKgUIAMAGQgKAVgXAWQAPAaAABAQAAAkgDARQgCASgFAGQgFAGgHACQgHACgWAAgAkxBpQAlgqAJgtIgdAAIAAgMQAPgbAKgaIgfAAIAAgMIAsAAIAAAMQgLAagNAbIAdAAQgCAhgTAiQAJAKATAGQAUAIAlAAIAngBIgDAMQg4ABgYgEQgagEgVgQQgIAMgPARgAC+BxIAAh4QgSAogRAYIgJgLQAagkASguIgrAAIAAgNIArAAIAAgnIgfAGIgHgNQAtgFAdgMIAJALIgfAKIAAAqIAfAAIAAANIgfAAIAAAKQAYAaAHAPIgJAKQgJgRgNgOIAAB3gAl0BtQAKgaADgiIALADQgDAhgJAcgAhyBnQAagqASgtIALAIQgUAxgYAmgAHKBsIAAgMIBRAAIAAgqIg7AAIAAgNICNAAIAAANIhEAAIAAAqIBQAAIAAAMgADjBrIAAgMIBDAAIAAgpIg6AAIAAgMIA6AAIAAgmIgzADIgHgMQBIgCA0gNIAJAMQgaAHgkADIAAAoIA4AAIAAAMIg4AAIAAApIBCAAIAAAMgAGXBgQAzgeACg1IgzAAIAAgNIBpAAIAAgaIhZAAIAAgMIBZAAIAAgbIhhAAIAAgNIDRAAIAAANIhiAAIAAAbIBXAAIAAAMIhXAAIAAAaIBpAAIAAANIieAAQgEA7g2AigAlPAzIAMgDQAHAeABAXIgMACQgBgbgHgZgAjIBSIAAgbIgqAAIAAgLIAqAAIAAgVIggAAIAAgLIAgAAIAAgTIgkAAIAAgMIAkAAIAAgRIAMAAIAAARIAjAAIAAAMIgjAAIAAATIAhAAIAAALIghAAIAAAVIAoAAIAAALIgoAAIAAAbgAk2AvIAMgDQAFAMAEAVIgMACQgEgUgFgMgAl2AgQAbggASgfQgUAFgSACIgDgMQAZgqAKglIANAEQgKAhgYAoQAOgCAUgGQAIgMAIgXIAMAFQgRAvgsA3QAVgFAZgJIgHgQIALgFQALAVAFAWIgMADIgEgOQgoAPgXAEgAotAWQAXgcAHgxIANADQgBAJgFASQAUAiADAHIgLAJQgIgVgIgMQgMAagLANgAnTAUQAPgZAJgxIAMAFIgHAeQAWAWAJAMIgKALQgKgPgOgOQgGAOgJAQgAhugmIAJgKQAYAQAUASIgKAKQgVgUgWgOgAjBgyQgUAMgbALIgHgLQAYgJASgKIgagOIgJAIIgKgHQAVgRAUgcIALAFIgLAPIA3AAIAAAMQgNAOgPALIAmAUIgIALgAjehQIAcAPQANgIAKgKIgvAAIgEADgAD1gjIAAhHIBwAAIAABHgAEDgvIBUAAIAAgtIhUAAgAhphoIAJgKQAaARATASIgKAKQgTgTgZgQgAkqhqIAJgJQATARANATIgLAHQgNgTgRgPgAHLhrIALgIQAQANAIALIgLAIQgJgMgPgMgAIohcQAPgLALgMIALAIQgMAPgNAIg");
	this.shape_2.setTransform(89.05,-0.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chDelta1, new cjs.Rectangle(-21,-20.7,182,38.7), null);


(lib.panelProtractor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHBSQAigjABhZIAAgGIgaAAIAAgRIAaAAIAAgaIASAAIAAAaIAnAAIADABQADABAAAHIgBBLQgCA4gQALQgKAHgfgFIgCgUQAcAHAFgGQAEgEADgKQAEgMABgaQABg+gBgCIgDgBIgZAAIAAAGQgBBYgmAugAhZBIIANgCIAAiVQABgGAFAAIA5AAQAGAAABAGIAACbIhOAMgAg7BDIAjgGIAAgeIgjAAgAg7AOIAjAAIAAghIgjAAgAg7hBIAAAdIAjAAIAAgdQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgdAAQgBAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAABg");
	this.shape.setTransform(139.6,-0.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag7BdIAAgdIggAAIAAgQIAgAAIAAgNIgbAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAhPIACgBIAbAAIAAgNIgfAAIAAgPIAfAAIAAgRIAQAAIAAARIAcAAIAAAPIgcAAIAAANIAaAAIACABIAABPQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgaAAIAAANIAfAAIAAAQIgfAAIAAAdgAgrAVIAMAAIABAAIAAgUIgNAAgAhIAVIAAAAIANAAIAAgUIgNAAgAgrgOIANAAIAAgTIgBAAIgMAAgAhIgOIANAAIAAgTIgNAAgAA2BcIgCgTQALADADgBQAEgDAAgEIAAgaIgWAAIAAAyIgQAAIAAgyIgWAAIAAAxIgPAAIAAiFQABgFAEAAIAgAAIAAgMIglAAIAAgPIAlAAIAAgSIAQAAIAAASIAVAAQgEgGgCgFIALgHQAJANAJATIgMAGQgDgCAAgDIgdAAIAAAMIAhAAQAFAAAAAFIAABzQAAALgIAFQgEAEgKAAIgKgBgAAwAaIAWAAIAAgWIgWAAgAAKAaIAWAAIAAgWIgWAAgAAwgKIAWAAIAAgVIgBAAIgVAAgAAKgfIAAAVIAWAAIAAgVIgUAAIgCAAg");
	this.shape_1.setTransform(120.075,-0.125);

	this.chRuler = new lib.chRuler();
	this.chRuler.name = "chRuler";
	this.chRuler.parent = this;
	this.chRuler.setTransform(173.95,130.45);

	this.chProtractor = new lib.chProtractor();
	this.chProtractor.name = "chProtractor";
	this.chProtractor.parent = this;
	this.chProtractor.setTransform(31.95,130.45);

	this.chDelta2 = new lib.chDelta2();
	this.chDelta2.name = "chDelta2";
	this.chDelta2.parent = this;
	this.chDelta2.setTransform(31.95,86.25);

	this.chDelta1 = new lib.chDelta1();
	this.chDelta1.name = "chDelta1";
	this.chDelta1.parent = this;
	this.chDelta1.setTransform(31.95,42.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.chDelta1},{t:this.chDelta2},{t:this.chProtractor},{t:this.chRuler},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.slRulerRotation = new lib.slScreenRotation();
	this.slRulerRotation.name = "slRulerRotation";
	this.slRulerRotation.parent = this;
	this.slRulerRotation.setTransform(85,178.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FFFF").ss(2,1,1).p("A0TSwMAAAglfIPoAAAEsyvIPoAAMAAAAlf");
	this.shape_2.setTransform(130,120);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("A0TSwMAAAglfIPoAAIJXAAIPoAAMAAAAlfg");
	this.shape_3.setTransform(130,120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.slRulerRotation}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.panelProtractor, new cjs.Rectangle(-1,-12,262,253), null);


(lib.panelLAS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbAgQgLgLAAgVQAAgWANgLQALgKAOABQARgBALAMQALALAAAUQAAAPgFAJQgFAJgJAGQgJAEgLAAQgQAAgLgLgAgRgXQgGAIAAAPQAAAQAGAIQAHAIAKAAQAKAAAHgIQAHgIAAgQQAAgPgHgHQgHgJgKABQgKAAgHAHg");
	this.shape.setTransform(36.825,-13.4);

	this.ttSlit = new cjs.Text("40", "26px 'Arial'", "#FFFFFF");
	this.ttSlit.name = "ttSlit";
	this.ttSlit.textAlign = "right";
	this.ttSlit.lineHeight = 31;
	this.ttSlit.lineWidth = 31;
	this.ttSlit.parent = this;
	this.ttSlit.setTransform(33.3,-14.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbAgQgLgLAAgVQAAgWANgLQALgKAOABQARgBALAMQALALAAAUQAAAPgFAJQgFAJgJAGQgJAEgLAAQgQAAgLgLgAgRgXQgGAIAAAPQAAAQAGAIQAHAIAKAAQAKAAAHgIQAHgIAAgQQAAgPgHgHQgHgJgKABQgKAAgHAHg");
	this.shape_1.setTransform(-117.925,-12.5);

	this.ttLaser = new cjs.Text("40", "26px 'Arial'", "#FFFFFF");
	this.ttLaser.name = "ttLaser";
	this.ttLaser.textAlign = "right";
	this.ttLaser.lineHeight = 31;
	this.ttLaser.lineWidth = 31;
	this.ttLaser.parent = this;
	this.ttLaser.setTransform(-121.45,-13.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ttLaser},{t:this.shape_1},{t:this.ttSlit},{t:this.shape}]}).wait(1));

	// slit
	this.btnSlit = new lib.btnSlit();
	this.btnSlit.name = "btnSlit";
	this.btnSlit.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.btnSlit).wait(1));

	// laser
	this.btnLaser = new lib.btnLaser();
	this.btnLaser.name = "btnLaser";
	this.btnLaser.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.btnLaser).wait(1));

}).prototype = getMCSymbolPrototype(lib.panelLAS, new cjs.Rectangle(-154.3,-74.5,229.3,171.7), null);


(lib.slCameraZoom = function(mode,startPosition,loop) {
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
			//who.valueText.text = digitN(who.val , who.digitN);
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
													//sl.valueText.text = digitN(sl.val , sl.digitN);
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
												//sl.valueText.x = sl.len+20;
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
												//sl.valueText.text = digitN(sl.val , sl.digitN);
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
												//sl.valueText.text = digitN(sl.val , sl.digitN);
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
	this.shape.graphics.f("#FFFFFF").s().p("Ah3BkQAXgKAHgKQAGgHABgKIAAgrQAAgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIgdAAIAAgVIAwAAQAGABABADIAAA6QABAHAFAJQAIAKAMAEQANAFAWgBQBEAAAygDIgHAZIh8AAQgqgDgPgdQgFAJgKANQgMAMgMAEgAAwBQIAAhtIgzAAIAAATQAAAXgFATQgFAYgOAWIgVgOQAPgXAEgTQAEgPAAgRIAAhXQgBgJAGAAQA8gDAxgJIAIAWQgqAJg3ADQgDABAAADIAAAcIBzAAIAAAXIgqAAIAABtgAh0gtIAMgUQAUAIAaASIgLAUQgcgTgTgHgAhqhiIAKgVQAXAJAZATIgLATQgdgTgSgHg");
	this.shape.setTransform(185,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah2BmQAUgLAGgJQAFgGABgJIAAgwQAAAAAAgBQAAgBgBAAQAAAAgBgBQAAAAgBAAIgZAAIAAgVIAsAAQAHABgBAEIAAA9QABAJAIAHQAKANAQAEQAWAGB+gIIgFAZIh7ABQgvgEgRgdQgCAJgKALQgLAMgKAEgAAZAtIAMgSIAYAPQATgOAKgKIANAQQgKALgOAKIAZATIgMARQgogfgbgPgAgDBbIAAgsIgBABQgYAMgQAGIgLgUQAhgKAcgUIguAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAgBIAAgwIACgCICNAAQABABAAAAQABAAAAAAQABABAAAAQAAAAAAAAIAAAwQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIhAAAIgVASIAAA5gAgWgBIBpAAIABgBIAAgQIhqAAgAh2gwIANgTQATAKAWATIgMATQgZgWgRgHgAg2gxIAAgUIBIAAIAAgOIg/AAIAAgUIA/AAIAAgRIAVAAIAAARIBBAAIAAAUIhBAAIAAAOIBLAAIAAAUgAhuhfIALgUQATAJAXATIgOASQgXgTgQgHg");
	this.shape_1.setTransform(-35,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

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

}).prototype = getMCSymbolPrototype(lib.slCameraZoom, new cjs.Rectangle(-46.9,-16,243.9,32), null);


(lib.theProtractor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.labelDelta1 = new lib.labelDelta1();
	this.labelDelta1.name = "labelDelta1";
	this.labelDelta1.parent = this;
	this.labelDelta1.setTransform(-147.5,374.7,1,1,0,0,0,106.5,16.8);

	this.labelDelta2 = new lib.labelDelta2();
	this.labelDelta2.name = "labelDelta2";
	this.labelDelta2.parent = this;
	this.labelDelta2.setTransform(-218.1,302.45);
	new cjs.ButtonHelper(this.labelDelta2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.labelDelta2},{t:this.labelDelta1}]}).wait(2));

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("EgbVg2rQWpAAQAQBQQCQBAAWpQAAWpwCQCQwAQB2pAA");
	this.shape.setTransform(175,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(1));

	// emp
	this.pt3 = new lib.pTick3();
	this.pt3.name = "pt3";
	this.pt3.parent = this;
	this.pt3.setTransform(220,0,1,1,0,0,0,0,0.9);

	this.pt2 = new lib.pTick1();
	this.pt2.name = "pt2";
	this.pt2.parent = this;
	this.pt2.setTransform(355,0);

	this.pt1 = new lib.pTick2();
	this.pt1.name = "pt1";
	this.pt1.parent = this;
	this.pt1.setTransform(345,0);

	this.emp = new lib.emp();
	this.emp.name = "emp";
	this.emp.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.emp},{t:this.pt1},{t:this.pt2},{t:this.pt3}]}).wait(2));

	// ruler
	this.ruler = new lib.theRuler();
	this.ruler.name = "ruler";
	this.ruler.parent = this;
	this.ruler.setTransform(390,0);

	this.timeline.addTween(cjs.Tween.get(this.ruler).wait(2));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("Egbug3dQW9AAQPQQQQRQQAAW9QAAW9wRQQQwPQR29AAEgbug15QWTAAPzPzQPzPzAAWTQAAWTvzP0QvzPz2TAA");
	this.shape_1.setTransform(177.5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("EgbuA16QWTAAPzv0QPzvzAA2TQAA2TvzvzQvzvz2TAAIAAhkQW9AAQPQRQQRQQAAW8QAAW9wRQQQwPQR29AAg");
	this.shape_2.setTransform(177.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-256.5,-356,30644,750);


(lib.theLaserAndSlit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// amLen_Cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(5,1,1).p("ATiAAQAAIHluFsQltFvoHAAQoGAAlvlvQlslsAAoHQAAoGFslvQFvlsIGAAQIHAAFtFsQFuFvAAIGg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.502)").s().p("AJzGdQhigtgYhtQgvjRjFheQj4hnAFh4QADgxAsgaIAZgHQAMgEANgBQIjCWBPIYQAOBjg9AAQgaAAgpgSgArgiXQgujNEHgrQBAgLA2gLQFUgxiBDsQgcAyg6gBQjKgHjGBJQgNAFgKAAQgdAAgIglg");
	this.shape_1.setTransform(23.5123,-64.8517);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// slit
	this.theSlit = new lib.theSlit();
	this.theSlit.name = "theSlit";
	this.theSlit.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.theSlit).to({_off:true},1).wait(1));

	// laser_BG
	this.laserBG = new lib.laser();
	this.laserBG.name = "laserBG";
	this.laserBG.parent = this;
	this.laserBG.setTransform(-125,0);

	this.timeline.addTween(cjs.Tween.get(this.laserBG).to({_off:true},1).wait(1));

	// amLen
	this.amLen = new lib.amLen();
	this.amLen.name = "amLen";
	this.amLen.parent = this;
	this.amLen._off = true;

	this.timeline.addTween(cjs.Tween.get(this.amLen).wait(1).to({_off:false},0).wait(1));

	// bigMask
	this.bigMask = new lib.bigMask();
	this.bigMask.name = "bigMask";
	this.bigMask.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bigMask).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2000,-2000,2175.9,4000);


(lib.panelSlit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmBPQANgFAGgGQAEgDAAgIIAAgvQAAAAABgBQAAAAgBAAQAAAAAAAAQgBAAAAAAIgJAAIAAgOIAXAAQADABAAADIAAA4IAAABIABABQAGAUAhgBIABAAIAAgTIghAAIAAgOIAhAAIAAgLIgeAAIAAgOIAeAAIAAgNIghAAIAAgNIAhAAIAAgPIAQAAIAAAPIAfAAIAAANIgfAAIAAANIAeAAIAAAOIgeAAIAAALIAjAAIAAAOIgjAAIAAASIAkgCIgEASIg7AAQgbgCgIgOQgEAFgHAFQgKAHgHABgAhCBbIAAhUIgVADIgFgOIANgCQAHgIAHgMQgNgOgPgIIAIgNIAGADQAIgQAIgSIANAHQgFAPgMAVIAKAKQAHgPAFgOIAPAEQgGAWgYAiIAPgDIgCgIIANgEQAFAPACASIgOADIgCgKIgIABIAABXgAhcBOQAFgjAAgVIAPABQAAAYgHAigAgpA/IgEgoIAOgBQADAbAAAOgAAzgiQgOAKgaAKIgJgNQAXgHAPgJIgOgRQgHAIgIAIIgJgKQAJgHAFgIQAFgHAFgOIAOAAIgCAFIAlAAIAKAHQgJAUgOAPQAMAIAUAIIgKANQgSgIgPgMgAAzg0IAAAAQAGgFAIgMIgBgCIgeAAQAJALAIAIgAgggjIAKgNQAKAIAMALIgKAMIgWgSgAgehJIAJgNQALAHAMAMIgKANQgNgOgJgFg");
	this.shape.setTransform(139.925,-0.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAbAeQgRAogmAWIgMgNQAvgXAKgzIgNAIIgLgXQgHASgIAKIgOgGIABAFQAAAegGAUQgFAQgLAFQgIAFgWgIIABgSQASAGAEgCQAGgCADgOQAEgSgBgaQgOARgPAKIgMgNQAYgPAPgUQgDgOgEgNQgJAKgMAKIgLgMQAPgMAKgMQgIgNgKgMIAOgLQAIALAGAKIABgCQAEgIAEgOIAQAGQgHATgKAPQALAdADAgQATgdAEgfIAQACIgEAWIASAdQABgHAAgIIAAgtIguAAIAAgRIAuAAIAAgQIARAAIAAAQIA1AAIAAARIg1AAIAAAtIAAAAIAAAEIAAAIQAEAvA2AkIgOALQgrghgJgegAA/gKQgFANgFAKIgPgFQAQgbABgfIAQABQgBALgDAKQAPASAMASIgOAKIgRgcg");
	this.shape_1.setTransform(119.975,-0.1);

	this.slDD = new lib.slDD();
	this.slDD.name = "slDD";
	this.slDD.parent = this;
	this.slDD.setTransform(69.35,133.6);

	this.slBB = new lib.slBB();
	this.slBB.name = "slBB";
	this.slBB.parent = this;
	this.slBB.setTransform(69.35,86.9);

	this.chInterference = new lib.chInterference();
	this.chInterference.name = "chInterference";
	this.chInterference.parent = this;
	this.chInterference.setTransform(71.35,36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.chInterference},{t:this.slBB},{t:this.slDD},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FFFF").ss(2,1,1).p("AEsuDIPoAAIAAcHA0TOEIAA8HIPoAA");
	this.shape_2.setTransform(130,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("A0TOEIAA8HIPoAAIJXAAIPoAAIAAcHg");
	this.shape_3.setTransform(130,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.panelSlit, new cjs.Rectangle(-1,-12,262,193), null);


(lib.allControls = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// camera
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(1387.2,814.65,0.7,0.7,0,0,0,0.2,0);

	this.btnLookSlit = new lib.btnLookSlit();
	this.btnLookSlit.name = "btnLookSlit";
	this.btnLookSlit.parent = this;
	this.btnLookSlit.setTransform(1356.4,948.65,0.606,0.6,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btnLookSlit, 0, 1, 2, false, new lib.btnLookSlit(), 3);

	this.btnLookScreen = new lib.btnLookScreen();
	this.btnLookScreen.name = "btnLookScreen";
	this.btnLookScreen.parent = this;
	this.btnLookScreen.setTransform(1437.6,948.65,0.606,0.6,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btnLookScreen, 0, 1, 2, false, new lib.btnLookScreen(), 3);

	this.slCameraZoom = new lib.slCameraZoom();
	this.slCameraZoom.name = "slCameraZoom";
	this.slCameraZoom.parent = this;
	this.slCameraZoom.setTransform(1366.95,863.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.slCameraZoom},{t:this.btnLookScreen},{t:this.btnLookSlit},{t:this.shape}]}).wait(1));

	// panelLAS
	this.panelLAS = new lib.panelLAS();
	this.panelLAS.name = "panelLAS";
	this.panelLAS.parent = this;
	this.panelLAS.setTransform(164.2,737.65);

	this.timeline.addTween(cjs.Tween.get(this.panelLAS).wait(1));

	// panelScreen
	this.panelScreen = new lib.panelScreen();
	this.panelScreen.name = "panelScreen";
	this.panelScreen.parent = this;
	this.panelScreen.setTransform(1320,551.7);

	this.timeline.addTween(cjs.Tween.get(this.panelScreen).wait(1));

	// panelProtractor
	this.panelProtractor = new lib.panelProtractor();
	this.panelProtractor.name = "panelProtractor";
	this.panelProtractor.parent = this;
	this.panelProtractor.setTransform(1320,321.7);

	this.timeline.addTween(cjs.Tween.get(this.panelProtractor).wait(1));

	// panelSlit
	this.panelSlit = new lib.panelSlit();
	this.panelSlit.name = "panelSlit";
	this.panelSlit.parent = this;
	this.panelSlit.setTransform(1320,141.7);

	this.timeline.addTween(cjs.Tween.get(this.panelSlit).wait(1));

	// mBtn
	this.bg = new lib.bg();
	this.bg.name = "bg";
	this.bg.parent = this;

	this.mBtn = new lib.mBtn();
	this.mBtn.name = "mBtn";
	this.mBtn.parent = this;
	this.mBtn.setTransform(1530.2,814.9);
	new cjs.ButtonHelper(this.mBtn, 0, 1, 2, false, new lib.mBtn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mBtn},{t:this.bg}]}).wait(1));

	// bgBtn
	this.bgBtn = new lib.bgBtn();
	this.bgBtn.name = "bgBtn";
	this.bgBtn.parent = this;
	this.bgBtn.setTransform(800,450,1,1,0,0,0,900,550);

	this.timeline.addTween(cjs.Tween.get(this.bgBtn).wait(1));

}).prototype = getMCSymbolPrototype(lib.allControls, new cjs.Rectangle(-100,-100,1800,1100.1), null);


// stage content:
(lib.myAnimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// allControls
	this.allControls = new lib.allControls();
	this.allControls.name = "allControls";
	this.allControls.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.allControls).wait(1));

	// screen
	this.screenPlane = new lib.screenPlane();
	this.screenPlane.name = "screenPlane";
	this.screenPlane.parent = this;
	this.screenPlane.setTransform(1378.55,467.65);

	this.screenCircle = new lib.screenCircle();
	this.screenCircle.name = "screenCircle";
	this.screenCircle.parent = this;
	this.screenCircle.setTransform(1205.55,221.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.screenCircle},{t:this.screenPlane}]}).wait(1));

	// theProtractor
	this.theProtractor = new lib.theProtractor();
	this.theProtractor.name = "theProtractor";
	this.theProtractor.parent = this;
	this.theProtractor.setTransform(802.25,539);

	this.timeline.addTween(cjs.Tween.get(this.theProtractor).wait(1));

	// ball
	this.ttxx = new cjs.Text("xxxxxxx", "26px 'Microsoft JhengHei'", "#FFFFFF");
	this.ttxx.name = "ttxx";
	this.ttxx.lineHeight = 37;
	this.ttxx.lineWidth = 254;
	this.ttxx.parent = this;
	this.ttxx.setTransform(40.1,-52.4);

	this.timeline.addTween(cjs.Tween.get(this.ttxx).wait(1));

	// laserAndSlit
	this.laserAndSlit = new lib.theLaserAndSlit();
	this.laserAndSlit.name = "laserAndSlit";
	this.laserAndSlit.parent = this;
	this.laserAndSlit.setTransform(568.05,621.85);

	this.timeline.addTween(cjs.Tween.get(this.laserAndSlit).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17996.9,-19331.3,49186.7,39555);
// library properties:
lib.properties = {
	id: '98EA1A955B63F6489D0F00F6BFD1C4DE',
	width: 1600,
	height: 900,
	fps: 30,
	color: "#666666",
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