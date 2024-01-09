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


(lib.btnOrbital224 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhBB6IgDgdQAKADAHAAQAKAAAGgEQAGgCAEgHQADgEAGgSIADgHIhEizIAhAAIAlBoQAHATAFAVQAFgUAIgTIAmhpIAeAAIhEC1QgLAegFALQgIAPgKAGQgLAIgOAAQgJgBgLgDg");
	this.shape.setTransform(23.475,17.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAvBZIglg3IgKgPIguBGIgkAAIBBhcIg9hVIAmAAIAbApIANAVIAMgUIAfgqIAkAAIg9BUIBBBdg");
	this.shape_1.setTransform(6.15,13.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8CvQgcgSgPghQgPggAAgqQAAgqAOggQANgiAcgRQAbgSAiAAQAYAAATAKQAUALAMAQIAAiIIAuAAIAAF7IgrAAIAAgjQgaApgyAAQghAAgbgSgAgxgdQgVAZAAA2QAAA0AWAbQAWAaAeAAQAeAAAWgZQAVgZAAg0QAAg3gWgaQgWgbggAAQgeAAgUAag");
	this.shape_2.setTransform(-18.225,-0.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00FFFF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000066","#0066FF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000066","#00FFFF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF00FF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF00FF").s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3,p:{rotation:0}}]}).to({state:[{t:this.shape_5,p:{rotation:0}},{t:this.shape_3,p:{rotation:0}}]},1).to({state:[{t:this.shape_5,p:{rotation:180}},{t:this.shape_3,p:{rotation:180}}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-31.6,104,63.3);


(lib.btnOrbital223 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BUQABgIACgGQAEgLAKgMQAJgLASgOQAZgWAKgNQAKgNAAgLQAAgNgJgIQgJgIgNAAQgPAAgIAIQgKAKABAPIgVgCQACgYAOgMQAOgMAXAAQAYAAAOANQAOANAAAVQAAAKgEAJQgEAKgKAJQgJAMgWASQgSAQgFAFQgGAGgDAFIBRAAIAAAUg");
	this.shape.setTransform(43.9,-1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhOBZIAAgYIBxiCIgiABIhIAAIAAgYICRAAIAAAUIhgBwIgTAVIAngCIBRAAIAAAag");
	this.shape_1.setTransform(29.025,13.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguAPIAAgdIBdAAIAAAdg");
	this.shape_2.setTransform(14.75,13.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag3BUQAAgIADgGQAEgLAJgMQAKgLARgOQAagWAKgNQAKgNAAgLQAAgNgJgIQgIgIgOAAQgOAAgKAIQgJAKAAAPIgUgCQABgYAPgMQAOgMAXAAQAYAAAOANQAOANAAAVQAAAKgEAJQgEAKgJAJQgKAMgXASQgRAQgFAFQgFAGgEAFIBSAAIAAAUg");
	this.shape_3.setTransform(2.25,-1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhOBZIAAgYIBxiCIgiABIhIAAIAAgYICRAAIAAAUIhgBwIgTAVIAngCIBRAAIAAAag");
	this.shape_4.setTransform(-12.625,13.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag8CvQgcgSgPghQgPggAAgqQAAgqAOggQANgiAcgRQAbgSAiAAQAYAAATAKQAUALAMAQIAAiIIAuAAIAAF7IgrAAIAAgjQgaApgyAAQghAAgbgSgAgxgdQgVAZAAA2QAAA0AWAbQAWAaAeAAQAeAAAWgZQAVgZAAg0QAAg3gWgaQgWgbggAAQgeAAgUAag");
	this.shape_5.setTransform(-36.975,-0.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#00FFFF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#000066","#0066FF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#000066","#00FFFF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF00FF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF00FF").s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6,p:{rotation:0}}]}).to({state:[{t:this.shape_8,p:{rotation:0}},{t:this.shape_6,p:{rotation:0}}]},1).to({state:[{t:this.shape_8,p:{rotation:180}},{t:this.shape_6,p:{rotation:180}}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-31.6,120,63.3);


(lib.btnOrbital222 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhQB8QgBgLAEgKQAGgRAOgQQAOgQAagVQAnghAOgTQAOgTAAgRQAAgSgNgMQgNgNgUAAQgVAAgNANQgNANAAAYIgggEQAEgiAUgTQAVgSAiAAQAkAAAVAUQAUAUAAAdQAAAOgGAPQgGAOgOAPQgOAQggAbQgbAXgHAIQgIAIgFAJIB4AAIAAAdg");
	this.shape.setTransform(20.0972,9.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguAPIAAgdIBcAAIAAAdg");
	this.shape_1.setTransform(5.2,13.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8CvQgcgSgPghQgPggAAgqQAAgqAOggQANgiAcgRQAbgSAiAAQAYAAATAKQAUALAMAQIAAiIIAuAAIAAF7IgrAAIAAgjQgaApgyAAQghAAgbgSgAgxgdQgVAZAAA2QAAA0AWAbQAWAaAeAAQAeAAAWgZQAVgZAAg0QAAg3gWgaQgWgbggAAQgeAAgUAag");
	this.shape_2.setTransform(-16.325,-0.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00FFFF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000066","#0066FF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000066","#00FFFF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF00FF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF00FF").s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3,p:{rotation:0}}]}).to({state:[{t:this.shape_5,p:{rotation:0}},{t:this.shape_3,p:{rotation:0}}]},1).to({state:[{t:this.shape_5,p:{rotation:180}},{t:this.shape_3,p:{rotation:180}}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-31.6,104,63.3);


(lib.btnOrbital221 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhQB8QgBgLAEgKQAGgRAOgQQAOgQAagVQAnghAOgTQAOgTAAgRQAAgSgNgMQgNgNgUAAQgVAAgNANQgNANAAAYIgggEQAEgiAUgTQAVgSAiAAQAkAAAVAUQAUAUAAAdQAAAOgGAPQgGAOgOAPQgOAQggAbQgbAXgHAIQgIAIgFAJIB4AAIAAAdg");
	this.shape.setTransform(24.3972,9.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNBSIAAhEIhDAAIAAgbIBDAAIAAhDIAbAAIAABDIBEAAIAAAbIhEAAIAABEg");
	this.shape_1.setTransform(5.15,10.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8CvQgcgSgPghQgPggAAgqQAAgqAOggQANgiAcgRQAbgSAiAAQAYAAATAKQAUALAMAQIAAiIIAuAAIAAF7IgrAAIAAgjQgaApgyAAQghAAgbgSgAgxgdQgVAZAAA2QAAA0AWAbQAWAaAeAAQAeAAAWgZQAVgZAAg0QAAg3gWgaQgWgbggAAQgeAAgUAag");
	this.shape_2.setTransform(-20.675,-0.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00FFFF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000066","#0066FF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000066","#00FFFF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF00FF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF00FF").s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3,p:{rotation:0}}]}).to({state:[{t:this.shape_5,p:{rotation:0}},{t:this.shape_3,p:{rotation:0}}]},1).to({state:[{t:this.shape_5,p:{rotation:180}},{t:this.shape_3,p:{rotation:180}}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-31.6,104,63.3);


(lib.btnOrbital214 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhOBZIAAgYIBxiCIgiABIhIAAIAAgYICRAAIAAAUIhgBwIgTAVIAngCIBRAAIAAAag");
	this.shape.setTransform(23.325,13.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhBB6IgDgdQAKADAHAAQAKAAAGgEQAGgCAEgHQADgEAGgSIADgHIhEizIAhAAIAlBoQAHATAFAVQAFgUAIgTIAmhpIAeAAIhEC1QgLAegFALQgIAPgKAGQgLAIgOAAQgJgBgLgDg");
	this.shape_1.setTransform(6.275,17.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8CvQgcgSgPghQgPggAAgqQAAgqAOggQANgiAcgRQAbgSAiAAQAYAAATAKQAUALAMAQIAAiIIAuAAIAAF7IgrAAIAAgjQgaApgyAAQghAAgbgSgAgxgdQgVAZAAA2QAAA0AWAbQAWAaAeAAQAeAAAWgZQAVgZAAg0QAAg3gWgaQgWgbggAAQgeAAgUAag");
	this.shape_2.setTransform(-18.225,-0.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00FFFF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000066","#0066FF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000066","#00FFFF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF00FF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF00FF").s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3,p:{rotation:0}}]}).to({state:[{t:this.shape_5,p:{rotation:0}},{t:this.shape_3,p:{rotation:0}}]},1).to({state:[{t:this.shape_5,p:{rotation:180}},{t:this.shape_3,p:{rotation:180}}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-31.6,104,63.3);


(lib.btnOrbital213 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhOBZIAAgYIBxiCIgiABIhIAAIAAgYICRAAIAAAUIhgBwIgTAVIAngCIBRAAIAAAag");
	this.shape.setTransform(23.325,13.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAvBZIglg3IgKgPIguBGIgkAAIBBhcIg9hVIAmAAIAbApIANAVIAMgUIAfgqIAkAAIg9BUIBBBdg");
	this.shape_1.setTransform(6.15,13.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8CvQgcgSgPghQgPggAAgqQAAgqAOggQANgiAcgRQAbgSAiAAQAYAAATAKQAUALAMAQIAAiIIAuAAIAAF7IgrAAIAAgjQgaApgyAAQghAAgbgSgAgxgdQgVAZAAA2QAAA0AWAbQAWAaAeAAQAeAAAWgZQAVgZAAg0QAAg3gWgaQgWgbggAAQgeAAgUAag");
	this.shape_2.setTransform(-18.225,-0.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00FFFF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000066","#0066FF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000066","#00FFFF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF00FF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF00FF").s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3,p:{rotation:0}}]}).to({state:[{t:this.shape_5,p:{rotation:0}},{t:this.shape_3,p:{rotation:0}}]},1).to({state:[{t:this.shape_5,p:{rotation:180}},{t:this.shape_3,p:{rotation:180}}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-31.6,104,63.3);


(lib.btnOrbital212 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPB8IAAjAQgLAKgRALQgRAKgOAFIAAgdQAZgMATgRQASgRAIgQIAUAAIAAD3g");
	this.shape.setTransform(19.2,9.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguAPIAAgdIBcAAIAAAdg");
	this.shape_1.setTransform(5.2,13.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8CvQgcgSgPghQgPggAAgqQAAgqAOggQANgiAcgRQAbgSAiAAQAYAAATAKQAUALAMAQIAAiIIAuAAIAAF7IgrAAIAAgjQgaApgyAAQghAAgbgSgAgxgdQgVAZAAA2QAAA0AWAbQAWAaAeAAQAeAAAWgZQAVgZAAg0QAAg3gWgaQgWgbggAAQgeAAgUAag");
	this.shape_2.setTransform(-16.325,-0.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00FFFF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000066","#0066FF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000066","#00FFFF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF00FF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF00FF").s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3,p:{rotation:0}}]}).to({state:[{t:this.shape_5,p:{rotation:0}},{t:this.shape_3,p:{rotation:0}}]},1).to({state:[{t:this.shape_5,p:{rotation:180}},{t:this.shape_3,p:{rotation:180}}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-31.6,104,63.3);


(lib.btnOrbital211 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPB8IAAjAQgLAKgRALQgRAKgOAFIAAgdQAZgMATgRQASgRAIgQIAUAAIAAD3g");
	this.shape.setTransform(23.5,9.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNBSIAAhEIhDAAIAAgbIBDAAIAAhDIAbAAIAABDIBEAAIAAAbIhEAAIAABEg");
	this.shape_1.setTransform(5.15,10.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8CvQgcgSgPghQgPggAAgqQAAgqAOggQANgiAcgRQAbgSAiAAQAYAAATAKQAUALAMAQIAAiIIAuAAIAAF7IgrAAIAAgjQgaApgyAAQghAAgbgSgAgxgdQgVAZAAA2QAAA0AWAbQAWAaAeAAQAeAAAWgZQAVgZAAg0QAAg3gWgaQgWgbggAAQgeAAgUAag");
	this.shape_2.setTransform(-20.675,-0.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00FFFF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000066","#0066FF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000066","#00FFFF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF00FF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF00FF").s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3,p:{rotation:0}}]}).to({state:[{t:this.shape_5,p:{rotation:0}},{t:this.shape_3,p:{rotation:0}}]},1).to({state:[{t:this.shape_5,p:{rotation:180}},{t:this.shape_3,p:{rotation:180}}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-31.6,104,63.3);


(lib.btnOrbital201 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BUQABgIACgGQAEgLAKgMQAJgLASgOQAZgWALgNQAJgNAAgLQAAgNgJgIQgJgIgOAAQgOAAgIAIQgKAKABAPIgWgCQADgYAOgMQAOgMAXAAQAYAAAOANQAOANAAAVQAAAKgEAJQgEAKgKAJQgJAMgWASQgSAQgFAFQgGAGgDAFIBRAAIAAAUg");
	this.shape.setTransform(23.1,-1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhOBZIAAgYIBxiCIgiABIhIAAIAAgYICRAAIAAAUIhgBwIgTAVIAngCIBRAAIAAAag");
	this.shape_1.setTransform(8.225,13.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8CvQgcgSgPghQgPggAAgqQAAgqAOggQANgiAcgRQAbgSAiAAQAYAAATAKQAUALAMAQIAAiIIAuAAIAAF7IgrAAIAAgjQgaApgyAAQghAAgbgSgAgxgdQgVAZAAA2QAAA0AWAbQAWAaAeAAQAeAAAWgZQAVgZAAg0QAAg3gWgaQgWgbggAAQgeAAgUAag");
	this.shape_2.setTransform(-16.125,-0.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00FFFF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000066","#0066FF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000066","#00FFFF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF00FF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF00FF").s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3,p:{rotation:0}}]}).to({state:[{t:this.shape_5,p:{rotation:0}},{t:this.shape_3,p:{rotation:0}}]},1).to({state:[{t:this.shape_5,p:{rotation:180}},{t:this.shape_3,p:{rotation:180}}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-31.6,104,63.3);


(lib.btnOrbital200 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BkQgYgeAAhGQAAgrAJgaQAJgbARgOQASgPAaAAQAUAAAPAIQAPAIAKAPQAJAPAGAWQAFAVAAAkQAAAsgJAaQgIAbgSAOQgSAPgbAAQgjAAgUgagAghhSQgPAWAAA8QAAA9AOAUQAOAUAUAAQAVAAAOgUQAOgUAAg9QAAg8gOgUQgOgUgVAAQgUAAgNASg");
	this.shape.setTransform(14.625,10.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag8CvQgcgSgPghQgPggAAgqQAAgqAOggQANgiAcgRQAbgSAiAAQAYAAATAKQAUALAMAQIAAiIIAuAAIAAF7IgrAAIAAgjQgaApgyAAQghAAgbgSgAgxgdQgVAZAAA2QAAA0AWAbQAWAaAeAAQAeAAAWgZQAVgZAAg0QAAg3gWgaQgWgbggAAQgeAAgUAag");
	this.shape_1.setTransform(-10.625,-0.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FFFF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#0066FF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000066","#00FFFF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF00FF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF00FF").s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2,p:{rotation:0}}]}).to({state:[{t:this.shape_4,p:{rotation:0}},{t:this.shape_2,p:{rotation:0}}]},1).to({state:[{t:this.shape_4,p:{rotation:180}},{t:this.shape_2,p:{rotation:180}}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-31.6,104,63.3);


(lib.btnOrbital114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhBB6IgDgcQAKACAHAAQAKAAAGgDQAGgEAEgFQADgGAGgSIADgHIhEiyIAhAAIAlBoQAHATAFAVQAFgUAIgUIAmhoIAeAAIhEC1QgLAdgFALQgIAPgKAIQgLAGgOAAQgJABgLgEg");
	this.shape.setTransform(14.875,12.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah2DBIAAl7IAqAAIAAAkQAPgVATgLQATgKAaAAQAjAAAbASQAbASAOAhQANAhAAAnQAAAqgPAhQgPAigdASQgdASgfAAQgXAAgSgKQgTgKgMgPIAACGgAg1iAQgXAcAAA1QAAA0AVAZQAWAaAeAAQAeAAAXgaQAWgbAAg2QAAg1gWgaQgWgagdAAQgdAAgXAcg");
	this.shape_1.setTransform(-7.925,4.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FFFF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#0066FF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000066","#00FFFF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF00FF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF00FF").s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2,p:{rotation:0}}]}).to({state:[{t:this.shape_4,p:{rotation:0}},{t:this.shape_2,p:{rotation:0}}]},1).to({state:[{t:this.shape_4,p:{rotation:180}},{t:this.shape_2,p:{rotation:180}}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-36.6,104,68.1);


(lib.btnOrbital113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAvBZIglg3IgKgPIguBGIglAAIBChcIg8hVIAlAAIAcApIAMAVIANgUIAegqIAkAAIg+BUIBDBdg");
	this.shape.setTransform(14.75,8.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah2DBIAAl7IAqAAIAAAkQAPgVATgLQATgKAaAAQAjAAAbASQAbASAOAhQANAhAAAnQAAAqgPAhQgPAigdASQgdASgfAAQgXAAgSgKQgTgKgMgPIAACGgAg1iAQgXAcAAA1QAAA0AVAZQAWAaAeAAQAeAAAXgaQAWgbAAg2QAAg1gWgaQgWgagdAAQgdAAgXAcg");
	this.shape_1.setTransform(-7.925,4.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FFFF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#0066FF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000066","#00FFFF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF00FF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF00FF").s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2,p:{rotation:0}}]}).to({state:[{t:this.shape_4,p:{rotation:0}},{t:this.shape_2,p:{rotation:0}}]},1).to({state:[{t:this.shape_4,p:{rotation:180}},{t:this.shape_2,p:{rotation:180}}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-36.6,104,68.1);


(lib.btnOrbital112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPB8IAAjAQgLAKgRALQgRAKgOAFIAAgdQAZgMATgRQASgRAIgQIAUAAIAAD3g");
	this.shape.setTransform(19.2,4.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguAPIAAgdIBcAAIAAAdg");
	this.shape_1.setTransform(5.2,8.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah2DBIAAl7IAqAAIAAAkQAPgVATgLQATgKAaAAQAjAAAbASQAbASAOAhQANAhAAAnQAAAqgPAhQgPAigdASQgdASgfAAQgXAAgSgKQgTgKgMgPIAACGgAg1iAQgXAcAAA1QAAA0AVAZQAWAaAeAAQAeAAAXgaQAWgbAAg2QAAg1gWgaQgWgagdAAQgdAAgXAcg");
	this.shape_2.setTransform(-14.625,4.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00FFFF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000066","#0066FF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000066","#00FFFF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF00FF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF00FF").s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3,p:{rotation:0}}]}).to({state:[{t:this.shape_5,p:{rotation:0}},{t:this.shape_3,p:{rotation:0}}]},1).to({state:[{t:this.shape_5,p:{rotation:180}},{t:this.shape_3,p:{rotation:180}}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-36.6,104,68.1);


(lib.btnOrbital111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPB8IAAjAQgLAKgRALQgRAKgOAFIAAgdQAZgMATgRQASgRAIgQIAUAAIAAD3g");
	this.shape.setTransform(23.5,4.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNBRIAAhDIhDAAIAAgbIBDAAIAAhEIAbAAIAABEIBEAAIAAAbIhEAAIAABDg");
	this.shape_1.setTransform(5.15,5.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah2DBIAAl7IAqAAIAAAkQAPgVATgLQATgKAaAAQAjAAAbASQAbASAOAhQANAhAAAnQAAAqgPAhQgPAigdASQgdASgfAAQgXAAgSgKQgTgKgMgPIAACGgAg1iAQgXAcAAA1QAAA0AVAZQAWAaAeAAQAeAAAXgaQAWgbAAg2QAAg1gWgaQgWgagdAAQgdAAgXAcg");
	this.shape_2.setTransform(-18.975,4.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00FFFF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000066","#0066FF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000066","#00FFFF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF00FF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF00FF").s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3,p:{rotation:0}}]}).to({state:[{t:this.shape_5,p:{rotation:0}},{t:this.shape_3,p:{rotation:0}}]},1).to({state:[{t:this.shape_5,p:{rotation:180}},{t:this.shape_3,p:{rotation:180}}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-36.6,104,68.1);


(lib.btnOrbital101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhOBZIAAgYIBxiCIgiABIhIAAIAAgYICRAAIAAAUIhgBwIgTAVIAngCIBRAAIAAAag");
	this.shape.setTransform(14.725,8.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah2DBIAAl7IAqAAIAAAkQAPgVATgLQATgKAaAAQAjAAAbASQAbASAOAhQANAhAAAnQAAAqgPAhQgPAigdASQgdASgfAAQgXAAgSgKQgTgKgMgPIAACGgAg1iAQgXAcAAA1QAAA0AVAZQAWAaAeAAQAeAAAXgaQAWgbAAg2QAAg1gWgaQgWgagdAAQgdAAgXAcg");
	this.shape_1.setTransform(-7.925,4.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FFFF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#0066FF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000066","#00FFFF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF00FF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF00FF").s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2,p:{rotation:0}}]}).to({state:[{t:this.shape_4,p:{rotation:0}},{t:this.shape_2,p:{rotation:0}}]},1).to({state:[{t:this.shape_4,p:{rotation:180}},{t:this.shape_2,p:{rotation:180}}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-36.6,104,68.1);


(lib.btnOrbital100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BkQgYgeAAhGQAAgrAJgaQAJgbARgOQASgPAaAAQAUAAAPAIQAPAIAKAPQAJAPAGAWQAFAVAAAkQAAAsgJAaQgIAbgSAOQgSAPgbAAQgjAAgUgagAghhSQgPAWAAA8QAAA9AOAUQAOAUAUAAQAVAAAOgUQAOgUAAg9QAAg8gOgUQgOgUgVAAQgUAAgNASg");
	this.shape.setTransform(14.625,5.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah2DBIAAl7IAqAAIAAAkQAPgVATgLQATgKAaAAQAjAAAbASQAbASAOAhQANAhAAAnQAAAqgPAhQgPAigdASQgdASgfAAQgXAAgSgKQgTgKgMgPIAACGgAg1iAQgXAcAAA1QAAA0AVAZQAWAaAeAAQAeAAAXgaQAWgbAAg2QAAg1gWgaQgWgagdAAQgdAAgXAcg");
	this.shape_1.setTransform(-8.925,4.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FFFF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#0066FF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000066","#00FFFF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF00FF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF00FF").s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2,p:{rotation:0}}]}).to({state:[{t:this.shape_4,p:{rotation:0}},{t:this.shape_2,p:{rotation:0}}]},1).to({state:[{t:this.shape_4,p:{rotation:180}},{t:this.shape_2,p:{rotation:180}}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-36.6,104,68.1);


(lib.btnOrbital000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.label = new cjs.Text("s", "53px 'Arial'", "#FFFFFF");
	this.label.name = "label";
	this.label.textAlign = "center";
	this.label.lineHeight = 61;
	this.label.lineWidth = 100;
	this.label.parent = this;
	this.label.setTransform(0,-29.6);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(4));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000066","#0066FF"],[0,1],15,30,15,-29.9).s("#00FFFF").ss(3,1,1).rr(-45,-30,90,60,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000066","#00FFFF"],[0,1],15,30,15,-29.9).s("#00FFFF").ss(3,1,1).rr(-45,-30,90,60,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF00FF").s("#FF00FF").ss(3,1,1).rr(-45,-30,90,60,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1,p:{rotation:0}}]},1).to({state:[{t:this.shape_1,p:{rotation:180}}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-31.6,104,63.3);


(lib.btnHybridSP3D3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BrQgWgUgDgfIAegDQAGAZAMAMQANALASAAQAUAAAPgPQAPgPAAgWQAAgUgOgOQgOgOgVAAQgHABgNADIADgaIAFAAQATAAAPgKQAPgJAAgVQAAgRgLgLQgLgLgRAAQgSAAgLALQgMALgDAWIgfgFQAGgfATgQQAUgRAdAAQAUAAARAJQARAIAJAPQAJAPAAARQAAAQgJANQgJANgQAIQAVAFANAPQAMAQAAAXQAAAhgYAWQgXAXgjAAQghAAgVgTg");
	this.shape.setTransform(52.275,10.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag8CvQgcgSgPghQgPggAAgqQAAgqAOggQANgiAcgRQAbgSAiAAQAYAAATAKQAUALAMAQIAAiIIAuAAIAAF7IgrAAIAAgjQgaApgyAAQghAAgbgSgAgxgdQgVAZAAA2QAAA0AWAbQAWAaAeAAQAeAAAWgZQAVgZAAg0QAAg3gWgaQgWgbggAAQgeAAgUAag");
	this.shape_1.setTransform(26.975,-0.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag3BrQgWgUgDgfIAegDQAGAZAMAMQANALASAAQAUAAAPgPQAPgPAAgWQAAgUgOgOQgOgOgVAAQgHABgNADIADgaIAFAAQATAAAPgKQAPgJAAgVQAAgRgLgLQgLgLgRAAQgSAAgLALQgMALgDAWIgfgFQAGgfATgQQAUgRAdAAQAUAAARAJQARAIAJAPQAJAPAAARQAAAQgJANQgJANgQAIQAVAFANAPQAMAQAAAXQAAAhgYAWQgXAXgjAAQghAAgVgTg");
	this.shape_2.setTransform(3.625,10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah2DBIAAl7IAqAAIAAAkQAPgVATgLQATgKAaAAQAjAAAbASQAbASAOAhQANAhAAAnQAAAqgPAhQgPAigdASQgdASgfAAQgXAAgSgKQgTgKgMgPIAACGgAg1iAQgXAcAAA1QAAA0AVAZQAWAaAeAAQAeAAAXgaQAWgbAAg2QAAg1gWgaQgWgagdAAQgdAAgXAcg");
	this.shape_3.setTransform(-19.975,9.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhNB6QgdgXgHgsIAugHQAEAcASAOQARAPAfABQAggBAPgNQAQgNAAgRQAAgQgNgJQgKgHgmgJQgzgNgTgIQgUgKgKgRQgKgQAAgVQAAgSAIgQQAJgPAOgLQALgHATgGQASgFAWgBQAfAAAYAKQAZAJALAQQAMAQAEAbIgtAGQgDgWgPgLQgPgMgaAAQggAAgOALQgOAKABAOQgBAKAHAGQAFAIAMAFIAoAMQAxANAVAIQATAIALAQQALAQAAAYQAAAXgNAVQgOAUgZAMQgbALgggBQg0AAgcgVg");
	this.shape_4.setTransform(-48.85,4.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#00FFFF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#000066","#0066FF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#000066","#00FFFF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF00FF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF00FF").s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5,p:{rotation:0}}]}).to({state:[{t:this.shape_7,p:{rotation:0}},{t:this.shape_5,p:{rotation:0}}]},1).to({state:[{t:this.shape_7,p:{rotation:180}},{t:this.shape_5,p:{rotation:180}}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-31.6,136,63.3);


(lib.btnHybridSP3D2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhQB8QgBgLAEgKQAGgRAOgQQAOgQAagVQAnghAOgTQAOgTAAgRQAAgSgNgMQgNgNgUAAQgVAAgNANQgNANAAAYIgggEQAEgiAUgTQAVgSAiAAQAkAAAVAUQAUAUAAAdQAAAOgGAPQgGAOgOAPQgOAQggAbQgbAXgHAIQgIAIgFAJIB4AAIAAAdg");
	this.shape.setTransform(51.9472,9.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag8CvQgcgSgPghQgPggAAgqQAAgqAOggQANgiAcgRQAbgSAiAAQAYAAATAKQAUALAMAQIAAiIIAuAAIAAF7IgrAAIAAgjQgaApgyAAQghAAgbgSgAgxgdQgVAZAAA2QAAA0AWAbQAWAaAeAAQAeAAAWgZQAVgZAAg0QAAg3gWgaQgWgbggAAQgeAAgUAag");
	this.shape_1.setTransform(26.975,-0.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag3BrQgWgUgDgfIAegDQAGAZAMAMQANALASAAQAUAAAPgPQAPgPAAgWQAAgUgOgOQgOgOgVAAQgHABgNADIADgaIAFAAQATAAAPgKQAPgJAAgVQAAgRgLgLQgLgLgRAAQgSAAgLALQgMALgDAWIgfgFQAGgfATgQQAUgRAdAAQAUAAARAJQARAIAJAPQAJAPAAARQAAAQgJANQgJANgQAIQAVAFANAPQAMAQAAAXQAAAhgYAWQgXAXgjAAQghAAgVgTg");
	this.shape_2.setTransform(3.625,10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah2DBIAAl7IAqAAIAAAkQAPgVATgLQATgKAaAAQAjAAAbASQAbASAOAhQANAhAAAnQAAAqgPAhQgPAigdASQgdASgfAAQgXAAgSgKQgTgKgMgPIAACGgAg1iAQgXAcAAA1QAAA0AVAZQAWAaAeAAQAeAAAXgaQAWgbAAg2QAAg1gWgaQgWgagdAAQgdAAgXAcg");
	this.shape_3.setTransform(-19.975,9.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhNB6QgdgXgHgsIAugHQAEAcASAOQARAPAfABQAggBAPgNQAQgNAAgRQAAgQgNgJQgKgHgmgJQgzgNgTgIQgUgKgKgRQgKgQAAgVQAAgSAIgQQAJgPAOgLQALgHATgGQASgFAWgBQAfAAAYAKQAZAJALAQQAMAQAEAbIgtAGQgDgWgPgLQgPgMgaAAQggAAgOALQgOAKABAOQgBAKAHAGQAFAIAMAFIAoAMQAxANAVAIQATAIALAQQALAQAAAYQAAAXgNAVQgOAUgZAMQgbALgggBQg0AAgcgVg");
	this.shape_4.setTransform(-48.85,4.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#00FFFF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#000066","#0066FF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#000066","#00FFFF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF00FF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF00FF").s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5,p:{rotation:0}}]}).to({state:[{t:this.shape_7,p:{rotation:0}},{t:this.shape_5,p:{rotation:0}}]},1).to({state:[{t:this.shape_7,p:{rotation:180}},{t:this.shape_5,p:{rotation:180}}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-31.6,136,63.3);


(lib.btnHybridSP3D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8CvQgcgSgPghQgPggAAgqQAAgqAOggQANgiAcgRQAbgSAiAAQAYAAATAKQAUALAMAQIAAiIIAuAAIAAF7IgrAAIAAgjQgaApgyAAQghAAgbgSgAgxgdQgVAZAAA2QAAA0AWAbQAWAaAeAAQAeAAAWgZQAVgZAAg0QAAg3gWgaQgWgbggAAQgeAAgUAag");
	this.shape.setTransform(36.525,-0.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag3BrQgWgUgDgfIAegDQAGAZAMAMQANALASAAQAUAAAPgPQAPgPAAgWQAAgUgOgOQgOgOgVAAQgHABgNADIADgaIAFAAQATAAAPgKQAPgJAAgVQAAgRgLgLQgLgLgRAAQgSAAgLALQgMALgDAWIgfgFQAGgfATgQQAUgRAdAAQAUAAARAJQARAIAJAPQAJAPAAARQAAAQgJANQgJANgQAIQAVAFANAPQAMAQAAAXQAAAhgYAWQgXAXgjAAQghAAgVgTg");
	this.shape_1.setTransform(13.175,10.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah2DBIAAl7IAqAAIAAAkQAPgVATgLQATgKAaAAQAjAAAbASQAbASAOAhQANAhAAAnQAAAqgPAhQgPAigdASQgdASgfAAQgXAAgSgKQgTgKgMgPIAACGgAg1iAQgXAcAAA1QAAA0AVAZQAWAaAeAAQAeAAAXgaQAWgbAAg2QAAg1gWgaQgWgagdAAQgdAAgXAcg");
	this.shape_2.setTransform(-10.425,9.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhNB6QgdgXgHgsIAugHQAEAcASAOQARAPAfABQAggBAPgNQAQgNAAgRQAAgQgNgJQgKgHgmgJQgzgNgTgIQgUgKgKgRQgLgQAAgVQABgSAIgQQAJgPAOgLQALgHATgGQASgFAWgBQAfAAAZAKQAYAJAMAQQALAQAEAbIgtAGQgDgWgPgLQgPgMgaAAQggAAgNALQgOAKgBAOQAAAKAHAGQAFAIAMAFIAoAMQAxANAVAIQATAIALAQQALAQAAAYQAAAXgOAVQgNAUgZAMQgaALghgBQg0AAgcgVg");
	this.shape_3.setTransform(-39.3,4.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#00FFFF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000066","#0066FF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#000066","#00FFFF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF00FF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF00FF").s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4,p:{rotation:0}}]}).to({state:[{t:this.shape_6,p:{rotation:0}},{t:this.shape_4,p:{rotation:0}}]},1).to({state:[{t:this.shape_6,p:{rotation:180}},{t:this.shape_4,p:{rotation:180}}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57,-31.6,114,63.3);


(lib.btnHybridSP3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BrQgWgUgDgfIAegDQAGAZAMAMQANALASAAQAUAAAPgPQAPgPAAgWQAAgUgOgOQgOgOgVAAQgHABgNADIADgaIAFAAQATAAAPgKQAPgJAAgVQAAgRgLgLQgLgLgRAAQgSAAgLALQgMALgDAWIgfgFQAGgfATgQQAUgRAdAAQAUAAARAJQARAIAJAPQAJAPAAARQAAAQgJANQgJANgQAIQAVAFANAPQAMAQAAAXQAAAhgYAWQgXAXgjAAQghAAgVgTg");
	this.shape.setTransform(27.925,10.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah2DBIAAl7IAqAAIAAAkQAPgVATgLQATgKAaAAQAjAAAbASQAbASAOAhQANAhAAAnQAAAqgPAhQgPAigdASQgdASgfAAQgXAAgSgKQgTgKgMgPIAACGgAg1iAQgXAcAAA1QAAA0AVAZQAWAaAeAAQAeAAAXgaQAWgbAAg2QAAg1gWgaQgWgagdAAQgdAAgXAcg");
	this.shape_1.setTransform(4.325,9.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhNB6QgdgXgHgsIAugHQAEAcASAOQARAPAfABQAggBAPgNQAQgNAAgRQAAgQgNgJQgKgHgmgJQgzgNgTgIQgUgKgKgRQgKgQAAgVQAAgSAIgQQAJgPAOgLQALgHATgGQASgFAWgBQAfAAAYAKQAZAJALAQQAMAQAEAbIgtAGQgDgWgPgLQgPgMgaAAQggAAgOALQgOAKABAOQgBAKAHAGQAFAIAMAFIAoAMQAxANAVAIQATAIALAQQALAQAAAYQAAAXgNAVQgOAUgZAMQgbALgggBQg0AAgcgVg");
	this.shape_2.setTransform(-24.55,4.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00FFFF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000066","#0066FF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000066","#00FFFF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF00FF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF00FF").s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3,p:{rotation:0}}]}).to({state:[{t:this.shape_5,p:{rotation:0}},{t:this.shape_3,p:{rotation:0}}]},1).to({state:[{t:this.shape_5,p:{rotation:180}},{t:this.shape_3,p:{rotation:180}}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-31.6,104,63.3);


(lib.btnHybridSP2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhQB8QgBgLAEgKQAGgRAOgQQAOgQAagVQAnghAOgTQAOgTAAgRQAAgSgNgMQgNgNgUAAQgVAAgNANQgNANAAAYIgggEQAEgiAUgTQAVgSAiAAQAkAAAVAUQAUAUAAAdQAAAOgGAPQgGAOgOAPQgOAQggAbQgbAXgHAIQgIAIgFAJIB4AAIAAAdg");
	this.shape.setTransform(27.5972,9.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah2DBIAAl7IAqAAIAAAkQAPgVATgLQATgKAaAAQAjAAAbASQAbASAOAhQANAhAAAnQAAAqgPAhQgPAigdASQgdASgfAAQgXAAgSgKQgTgKgMgPIAACGgAg1iAQgXAcAAA1QAAA0AVAZQAWAaAeAAQAeAAAXgaQAWgbAAg2QAAg1gWgaQgWgagdAAQgdAAgXAcg");
	this.shape_1.setTransform(4.325,9.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhNB6QgdgXgHgsIAugHQAEAcASAOQARAPAfABQAggBAPgNQAQgNAAgRQAAgQgNgJQgKgHgmgJQgzgNgTgIQgUgKgKgRQgKgQAAgVQAAgSAIgQQAJgPAOgLQALgHATgGQASgFAWgBQAfAAAYAKQAZAJALAQQAMAQAEAbIgtAGQgDgWgPgLQgPgMgaAAQggAAgOALQgOAKABAOQgBAKAHAGQAFAIAMAFIAoAMQAxANAVAIQATAIALAQQALAQAAAYQAAAXgNAVQgOAUgZAMQgbALgggBQg0AAgcgVg");
	this.shape_2.setTransform(-24.55,4.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00FFFF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000066","#0066FF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000066","#00FFFF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF00FF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF00FF").s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3,p:{rotation:0}}]}).to({state:[{t:this.shape_5,p:{rotation:0}},{t:this.shape_3,p:{rotation:0}}]},1).to({state:[{t:this.shape_5,p:{rotation:180}},{t:this.shape_3,p:{rotation:180}}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-31.6,104,63.3);


(lib.btnHybridSP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah2DBIAAl7IAqAAIAAAkQAPgVATgLQATgKAaAAQAjAAAbASQAbASAOAhQANAhAAAnQAAAqgPAhQgPAigdASQgdASgfAAQgXAAgSgKQgTgKgMgPIAACGgAg1iAQgXAcAAA1QAAA0AVAZQAWAaAeAAQAeAAAXgaQAWgbAAg2QAAg1gWgaQgWgagdAAQgdAAgXAcg");
	this.shape.setTransform(13.925,9.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhNB6QgcgXgIgsIAugHQAEAcARAOQASAPAfABQAggBAPgNQAQgNAAgRQAAgQgOgJQgJgHgmgJQgygNgUgIQgUgKgKgRQgLgQABgVQgBgSAJgQQAIgPAPgLQALgHASgGQAUgFAVgBQAfAAAYAKQAZAJALAQQANAQAEAbIguAGQgDgWgOgLQgPgMgbAAQggAAgOALQgNAKAAAOQAAAKAFAGQAGAIAMAFIApAMQAwANAUAIQAUAIALAQQALAQAAAYQAAAXgNAVQgOAUgaAMQgaALgfgBQg2AAgbgVg");
	this.shape_1.setTransform(-14.95,4.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FFFF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#0066FF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000066","#00FFFF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF00FF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF00FF").s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2,p:{rotation:0}}]}).to({state:[{t:this.shape_4,p:{rotation:0}},{t:this.shape_2,p:{rotation:0}}]},1).to({state:[{t:this.shape_4,p:{rotation:180}},{t:this.shape_2,p:{rotation:180}}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-31.6,104,63.3);


(lib.btnHybrid_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhFC7QABgtARg/QARg/Afg6QAfg7AjgoIi5AAIAAgtID1AAIAAAkQgkAngkA/QgjA/gTBEQgOAwgEA4g");
	this.shape.setTransform(0.025,-0.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FFFF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000066","#0066FF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#00FFFF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF00FF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{rotation:0}}]}).to({state:[{t:this.shape_3,p:{rotation:0}},{t:this.shape_1,p:{rotation:0}}]},1).to({state:[{t:this.shape_3,p:{rotation:180}},{t:this.shape_1,p:{rotation:180}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-31.6,104,63.3);


(lib.btnHybrid_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhYCXQgkgrAAhiQAAhtAogyQAkgsA7AAQAtAAAcAZQAdAaAFAsIguADQgGgbgLgMQgTgUgcAAQgVAAgRAMQgWAQgNAfQgMAfgBA5QARgaAYgMQAYgNAaAAQAvAAAhAjQAgAhAAA2QAAAkgPAfQgQAegbAQQgaARgjAAQg5AAglgrgAgxAFQgWAXAAAkQAAAYALAWQAKAWASAMQASALAUAAQAdAAAVgXQAWgYAAgpQAAgngVgXQgVgWggAAQgfAAgWAWg");
	this.shape.setTransform(-0.225,-0.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FFFF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000066","#0066FF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#00FFFF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF00FF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{rotation:0}}]}).to({state:[{t:this.shape_3,p:{rotation:0}},{t:this.shape_1,p:{rotation:0}}]},1).to({state:[{t:this.shape_3,p:{rotation:180}},{t:this.shape_1,p:{rotation:180}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-31.6,104,63.3);


(lib.btnHybrid_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhXChQghgdgFgwIAxgEQAGAkAUASQATASAcAAQAhAAAXgZQAXgaAAgqQAAgogWgWQgWgXgkAAQgWAAgSALQgSAKgLAPIgrgGIAkjBIC8AAIAAAsIiWAAIgVBmQAigYAlAAQAxAAAjAjQAiAhAAA2QAAA0geAlQglAug+AAQg0AAgggdg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FFFF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000066","#0066FF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#00FFFF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF00FF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{rotation:0}}]}).to({state:[{t:this.shape_3,p:{rotation:0}},{t:this.shape_1,p:{rotation:0}}]},1).to({state:[{t:this.shape_3,p:{rotation:180}},{t:this.shape_1,p:{rotation:180}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-31.6,104,63.3);


(lib.btnHybrid_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAiC+IAAhbIikAAIAAgrICsj1IAmAAIAAD1IAzAAIAAArIgzAAIAABbgAhUA4IB2AAIAAiqg");
	this.shape.setTransform(-0.975,-0.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FFFF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000066","#0066FF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#00FFFF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF00FF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{rotation:0}}]}).to({state:[{t:this.shape_3,p:{rotation:0}},{t:this.shape_1,p:{rotation:0}}]},1).to({state:[{t:this.shape_3,p:{rotation:180}},{t:this.shape_1,p:{rotation:180}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-31.6,104,63.3);


(lib.btnHybrid_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhVCkQgigegEgvIAvgGQAHAnAUASQATARAbAAQAhAAAWgWQAXgXAAgiQAAgggVgVQgVgVghAAQgMAAgTAGIAFgoIAHAAQAdAAAYgPQAXgQABggQgBgagQgRQgSgQgaAAQgcAAgRARQgTARgFAiIgvgIQAJgvAegaQAegaAuAAQAdAAAaAOQAbANAOAXQANAXAAAaQABAYgNAVQgOAUgaAMQAiAIASAXQATAYAAAlQAAAygkAjQglAig2AAQgyAAgggeg");
	this.shape.setTransform(-0.1,-0.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FFFF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000066","#0066FF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#00FFFF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF00FF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{rotation:0}}]}).to({state:[{t:this.shape_3,p:{rotation:0}},{t:this.shape_1,p:{rotation:0}}]},1).to({state:[{t:this.shape_3,p:{rotation:180}},{t:this.shape_1,p:{rotation:180}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-31.6,104,63.3);


(lib.btnHybrid_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah8C+QgBgRAGgPQAKgaAVgZQAVgYAoghQA9gyAVgdQAWgeAAgaQAAgcgTgSQgUgUggAAQghAAgUAVQgUAUgBAjIgvgFQAFg2AggbQAggcA1gBQA2ABAgAeQAgAeAAAtQAAAWgJAXQgKAWgVAXQgWAZgyAqQgpAjgMANQgMAMgIAMIC6AAIAAAtg");
	this.shape.setTransform(-0.6019,-0.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FFFF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000066","#0066FF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#00FFFF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF00FF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{rotation:0}}]}).to({state:[{t:this.shape_3,p:{rotation:0}},{t:this.shape_1,p:{rotation:0}}]},1).to({state:[{t:this.shape_3,p:{rotation:180}},{t:this.shape_1,p:{rotation:180}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-31.6,104,63.3);


(lib.btnHybrid_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYC+IAAkoQgRARgbAQQgbAQgWAIIAAgtQAogSAcgaQAdgbAMgZIAeAAIAAF8g");
	this.shape.setTransform(-2,-0.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FFFF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000066","#0066FF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#00FFFF"],[0,1],15,30,15,-29.9).s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF00FF").ss(3,1,1).p("AldkrIK7AAQBkAAAABkIAAGPQAABkhkAAIq7AAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("AldEsQhkAAAAhkIAAmPQAAhkBkAAIK7AAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{rotation:0}}]}).to({state:[{t:this.shape_3,p:{rotation:0}},{t:this.shape_1,p:{rotation:0}}]},1).to({state:[{t:this.shape_3,p:{rotation:180}},{t:this.shape_1,p:{rotation:180}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-31.6,104,63.3);


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


(lib.slShapeCC = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhTALIAVgFQADAUAFALQANgNAHgMIARANQgMATgQAPQAKATAYATIgPASQgvgkgKhEgAiyBnQAWgpgBhAIAAhrICJAAIAAAVIhyAAIAAAWIBoAAIAAAUIhoAAIAAAWIB4AAIAAAWIhUAAIAABWQARgGAKgFIAAAXQgZALgXAGIgGgTQAEgEAAgIIAAhUIgNAAQgCBMgWApgACQBpQAig/gDhVIgWAAIAAgWIAXAAIAAgvIAXAAIgBAvIAsAAQgBA3gBAyQgDAygCAHQgCAJgHADQgGAFgOAAIgPgBIgGgWIAQABQALAAACgDQACgDACgrQADgrgBgrIgWAAQAABegjA/gAATBgIA3gHIAAgTIgtAAIAAgSIAtAAIAAgPIgtAAIAAhLIAtAAIAAgPIg0AAIAAgTIA0AAIAAgPQgQACgYACIgGgSQA7gDAvgKIAJARQgSAEgdAEIAAARIAyAAIAAATIgyAAIAAAPIAtAAIAABLIgtAAIAAAPIAtAAIAAASIgtAAIAAARQAYgCAWgFIABASQg5AKg+AGgABgAUIAXAAIAAgNIgXAAgAAzAUIAXAAIAAgNIgXAAgABggIIAXAAIAAgNIgXAAgAAzgIIAXAAIAAgNIgXAAgAjmBwIgGgWIAVAAQAFAAABgFIAAg9IgaAJIgGgVQAUgIAMgEIAAgyIgfAAIAAgWIAfAAIAAgoIAWAAIAAAoIAVAAIAAAWIgVAAIAAAnIAWgLIABAXIgXAMIAABRQAAAGgEAFQgEAFgFACIgRABIgNgBg");
	this.shape.setTransform(-53.15,0.25);

	this.label = new cjs.Text("文字標籤", "26px 'Microsoft JhengHei'", "#FFFFFF");
	this.label.name = "label";
	this.label.textAlign = "right";
	this.label.lineHeight = 37;
	this.label.lineWidth = 146;
	this.label.parent = this;
	this.label.setTransform(488,-56.25);

	this.valueText = new cjs.Text("0", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(388,-13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.valueText},{t:this.label},{t:this.shape}]}).wait(1));

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

}).prototype = getMCSymbolPrototype(lib.slShapeCC, new cjs.Rectangle(-77.3,-58.2,567.3,76.30000000000001), null);


(lib.slShapeAB = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AjdI1IAAgBQhahjAAiMQAAiNBahjQA5g9BGgYQhGgXg5g9IAAAAQhahjAAiNQAAiMBahkQBchkCBAAQCBAABcBkQBbBkAACMQAACNhbBjQg4A9hGAXQBGAYA4A9QBbBjAACNQAACMhbBkIAAgBQhcBliBAAQiBAAhchkgAkZFFQAACABSBbQBTBbB0AAQB0AABThbQBThbAAiAQAAiBhThbQhRhYhxgCIgIAAQhyAChSBYIAAAAQhSBbAACBgAkZlEQAACBBSBbQBSBZByABIAIAAQBwgBBShZQBThbAAiBQAAiAhThbQhThbh0AAQh0AAhTBbIAAgBQhSBcAACAg");
	this.shape.setTransform(190.0386,0.0247,0.6,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNFtQgEABgDgDQgCgDAAgEQAAgDADgDQADgCAEgBIAMABIAVgBQADAAADACQADADABADQAAAEgCADQgDADgDAAIgXABIgNgBgAgyFqQgTgDgRgFQgEgBgCgEQgCgDACgDQABgEADgCQAEgCADACQAQAFASADQAEgBACAEQACADAAAEQgBADgEADQgCABgDAAIgBAAgAA0FnQgCgCgBgDQgBgFACgDQACgCAEgBQARgDAQgGQAEgBADACQADACACADQABADgBAEQgDADgDACQgRAFgTAEIgBAAQgDAAgDgCgAh5FVQgRgIgRgKQgDgCAAgDQgBgFACgDQACgCADgBQAEgCADADQAPAJAQAIQADABABADQACAEgCAEQgBADgDABIgEABIgDgBgAB7FSQgEgCgCgEQgBgDABgDQACgEADgCQAPgHAOgKQADgBAEAAQAEABACAEQACADAAADQgBAEgEACQgPAKgQAIIgFABIgCAAgAi4EuIgZgXIgCgDQgDgCgBgDQABgEADgDQACgCADAAQAEAAADACIACACQAMAMAMAJQADADAAADQAAAEgCAEQgCACgDAAIgCABQgDAAgCgCgACyEoQgDgDABgEQAAgDADgDIASgRIAGgGQADgDAEAAQADAAADADQADADAAADQAAAEgDADIgGAGIgTARQgDADgDAAQgEgBgDgCgAjmD9QgDgBgDgDQgMgPgIgPQgCgEABgDQABgEACgCQAEgBAEAAQADABACAEQAJAOALAOQACADAAAEQgCADgCADQgDACgDAAIgBAAgADkD2QgDgDAAgEQgBgDADgDQAKgPAJgPQACgDADgBQADgBAEACQADACABADQABAEgCADQgJAQgMAQQgCACgDABIgCAAQgDAAgCgBgAjRCNQgugugVg3IgBADQAAADgDADQgDADgEgBQgEAAgCgDQgCgDAAgEQACgTADgSIABgDQgHggAAglQAAh7BXhXQBXhXB6AAQB7AABXBXQBXBXAAB7QAAAkgHAhIADAPQAAAEgBADQgDADgEAAIgDAAQgVBAgzAzQhXBXh7AAQh6AAhXhXgAkPgBQARBJA5A5QBSBRBzAAQBzAABShRQA5g4ARhIIgEgQQgCgEACgDQACgDAEgCIADAAQADgUAAgVQAAh0hShRQhShShzAAQhzAAhSBSQhRBRAAB0QAAAPACAPIALgaQACgDADgBQADgCAEACQAEACABADQAAADgBAEQgIAQgGAQQgBADgDACQgDACgEgBIADARgAkNC+QgCgCgCgDQgHgQgFgTQgCgDACgEQACgDADgBQAEgBADACQAEACAAAEQAFARAIAPQABADgBAEQgCAEgEABIgDABIgEgBgAEKC4QgEgCgCgEQgBgDABgDQAGgRAEgQQACgEADgCQADgCAEAAQADACACADQACADgBADQgEATgHARQgCAEgDACIgDAAIgDAAgAkiB4QgDgDAAgEQgDgSAAgTQAAgEADgDQACgCAEAAQADAAADACQADADAAAEQAAARADASQAAAEgCADQgCACgDABIgCAAQgDAAgDgBgAEdBxQgEAAgCgCQgCgDgBgEQADgSAAgRIAAgBIgBgPQAAgDADgCQADgDADgBQAEAAADADQACADAAADIABAPIAAABQAAATgDASQAAADgCADQgDACgDAAIgBgBgAEDgqQgEgBgBgEQgHgPgJgPQgCgDAAgEQABgEADgCQADgCAEABQAEABABADQALAPAHARQACAEgCADQAAADgEACIgEABIgDAAgAj0hUQgDgCAAgDQgBgEACgDQAKgPANgPQACgDAEAAQAEAAADADQACACAAAEQABAEgDADQgMANgJAPQgDADgDAAIgCAAQgDAAgCgCgADehnQgDAAgDgDIgTgWIgEgDQgCgDAAgEQAAgEACgCQADgDAEAAQADAAACADIAFAEQALALAJAMQADADgBADQAAAEgCADQgDACgDAAIgCgBgAjGiLQgCgDAAgDQAAgEADgCQANgNAQgLQADgCADABQAEAAACADQADADgCAEQAAAEgDACQgOAKgNAMQgDACgEAAQgDAAgDgDgACniaQgPgLgPgJQgDgCgBgDQgBgEACgDQACgDAEgBQADgBADACQAQAJAPAMQADACABADQAAAEgCADQgCADgEAAIgBABQgDAAgCgCgAiIixQgDgBgBgEQgCgEABgDQABgEADgBQARgIARgIQAEgBADACQADACABADQACADgCAEQgBADgDABQgRAGgQAJIgEABIgDAAgABqi9QgQgHgQgEQgFgBgBgDQgCgDABgEQABgEADgCQADgCAEABQASAGARAHQADABABADQACAEgCAEQgBADgDABIgEABIgDgBgAhHjLQgCgDgBgDQgBgDACgEQACgDAEgBQARgEAUgCQADAAAEADQADACAAADQAAAEgCADQgDADgEAAQgSACgRAEIgCAAQgCAAgDgBgAAEjRQgEAAgCgCQgCgDAAgEQAAgEACgDQADgCAEAAQASABASABQAEABACADQACADAAAEQgBADgDACQgDACgDAAIgjgCg");
	this.shape_1.setTransform(-55,0);

	this.label = new cjs.Text("文字標籤", "26px 'Microsoft JhengHei'", "#FFFFFF");
	this.label.name = "label";
	this.label.textAlign = "right";
	this.label.lineHeight = 37;
	this.label.lineWidth = 146;
	this.label.parent = this;
	this.label.setTransform(488,-56.25);

	this.valueText = new cjs.Text("0", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(388,-13);

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

}).prototype = getMCSymbolPrototype(lib.slShapeAB, new cjs.Rectangle(-84.7,-58.2,574.7,98.1), null);


(lib.control03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.btnH7 = new lib.btnHybrid_7();
	this.btnH7.name = "btnH7";
	this.btnH7.parent = this;
	this.btnH7.setTransform(1168.05,852.45,0.7,0.7);
	new cjs.ButtonHelper(this.btnH7, 0, 1, 2, false, new lib.btnHybrid_7(), 3);

	this.btnH6 = new lib.btnHybrid_6();
	this.btnH6.name = "btnH6";
	this.btnH6.parent = this;
	this.btnH6.setTransform(1095.25,852.45,0.7,0.7);
	new cjs.ButtonHelper(this.btnH6, 0, 1, 2, false, new lib.btnHybrid_6(), 3);

	this.btnH5 = new lib.btnHybrid_5();
	this.btnH5.name = "btnH5";
	this.btnH5.parent = this;
	this.btnH5.setTransform(1022.45,852.45,0.7,0.7);
	new cjs.ButtonHelper(this.btnH5, 0, 1, 2, false, new lib.btnHybrid_5(), 3);

	this.btnH4 = new lib.btnHybrid_4();
	this.btnH4.name = "btnH4";
	this.btnH4.parent = this;
	this.btnH4.setTransform(949.65,852.45,0.7,0.7);
	new cjs.ButtonHelper(this.btnH4, 0, 1, 2, false, new lib.btnHybrid_4(), 3);

	this.btnH3 = new lib.btnHybrid_3();
	this.btnH3.name = "btnH3";
	this.btnH3.parent = this;
	this.btnH3.setTransform(1095.25,800.8,0.7,0.7);
	new cjs.ButtonHelper(this.btnH3, 0, 1, 2, false, new lib.btnHybrid_3(), 3);

	this.btnH2 = new lib.btnHybrid_2();
	this.btnH2.name = "btnH2";
	this.btnH2.parent = this;
	this.btnH2.setTransform(1022.45,800.8,0.7,0.7);
	new cjs.ButtonHelper(this.btnH2, 0, 1, 2, false, new lib.btnHybrid_2(), 3);

	this.btnH1 = new lib.btnHybrid_1();
	this.btnH1.name = "btnH1";
	this.btnH1.parent = this;
	this.btnH1.setTransform(949.65,800.8,0.7,0.7);
	new cjs.ButtonHelper(this.btnH1, 0, 1, 2, false, new lib.btnHybrid_1(), 3);

	this.btnHybridSP3D3 = new lib.btnHybridSP3D3();
	this.btnHybridSP3D3.name = "btnHybridSP3D3";
	this.btnHybridSP3D3.parent = this;
	this.btnHybridSP3D3.setTransform(832.9,842.95);
	new cjs.ButtonHelper(this.btnHybridSP3D3, 0, 1, 2, false, new lib.btnHybridSP3D3(), 3);

	this.btnHybridSP3D2 = new lib.btnHybridSP3D2();
	this.btnHybridSP3D2.name = "btnHybridSP3D2";
	this.btnHybridSP3D2.parent = this;
	this.btnHybridSP3D2.setTransform(696.9,842.95);
	new cjs.ButtonHelper(this.btnHybridSP3D2, 0, 1, 2, false, new lib.btnHybridSP3D2(), 3);

	this.btnHybridSP3D = new lib.btnHybridSP3D();
	this.btnHybridSP3D.name = "btnHybridSP3D";
	this.btnHybridSP3D.parent = this;
	this.btnHybridSP3D.setTransform(580.55,842.95);
	new cjs.ButtonHelper(this.btnHybridSP3D, 0, 1, 2, false, new lib.btnHybridSP3D(), 3);

	this.btnHybridSP3 = new lib.btnHybridSP3();
	this.btnHybridSP3.name = "btnHybridSP3";
	this.btnHybridSP3.parent = this;
	this.btnHybridSP3.setTransform(471.55,842.95);
	new cjs.ButtonHelper(this.btnHybridSP3, 0, 1, 2, false, new lib.btnHybridSP3(), 3);

	this.btnHybridSP2 = new lib.btnHybridSP2();
	this.btnHybridSP2.name = "btnHybridSP2";
	this.btnHybridSP2.parent = this;
	this.btnHybridSP2.setTransform(367.55,842.95);
	new cjs.ButtonHelper(this.btnHybridSP2, 0, 1, 2, false, new lib.btnHybridSP2(), 3);

	this.btnHybridSP = new lib.btnHybridSP();
	this.btnHybridSP.name = "btnHybridSP";
	this.btnHybridSP.parent = this;
	this.btnHybridSP.setTransform(263.55,842.95);
	new cjs.ButtonHelper(this.btnHybridSP, 0, 1, 2, false, new lib.btnHybridSP(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnHybridSP},{t:this.btnHybridSP2},{t:this.btnHybridSP3},{t:this.btnHybridSP3D},{t:this.btnHybridSP3D2},{t:this.btnHybridSP3D3},{t:this.btnH1},{t:this.btnH2},{t:this.btnH3},{t:this.btnH4},{t:this.btnH5},{t:this.btnH6},{t:this.btnH7}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.control03, new cjs.Rectangle(211.6,778.7,992.9,95.89999999999998), null);


(lib.control01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.btnOrbital224 = new lib.btnOrbital224();
	this.btnOrbital224.name = "btnOrbital224";
	this.btnOrbital224.parent = this;
	this.btnOrbital224.setTransform(1089.2,804.65,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital224, 0, 1, 2, false, new lib.btnOrbital224(), 3);

	this.btnOrbital223 = new lib.btnOrbital223();
	this.btnOrbital223.name = "btnOrbital223";
	this.btnOrbital223.parent = this;
	this.btnOrbital223.setTransform(1006.55,804.65,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital223, 0, 1, 2, false, new lib.btnOrbital223(), 3);

	this.btnOrbital222 = new lib.btnOrbital222();
	this.btnOrbital222.name = "btnOrbital222";
	this.btnOrbital222.parent = this;
	this.btnOrbital222.setTransform(1089.2,865.15,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital222, 0, 1, 2, false, new lib.btnOrbital222(), 3);

	this.btnOrbital221 = new lib.btnOrbital221();
	this.btnOrbital221.name = "btnOrbital221";
	this.btnOrbital221.parent = this;
	this.btnOrbital221.setTransform(1006.55,865.15,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital221, 0, 1, 2, false, new lib.btnOrbital221(), 3);

	this.btnOrbital214 = new lib.btnOrbital214();
	this.btnOrbital214.name = "btnOrbital214";
	this.btnOrbital214.parent = this;
	this.btnOrbital214.setTransform(924,804.65,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital214, 0, 1, 2, false, new lib.btnOrbital214(), 3);

	this.btnOrbital213 = new lib.btnOrbital213();
	this.btnOrbital213.name = "btnOrbital213";
	this.btnOrbital213.parent = this;
	this.btnOrbital213.setTransform(841.45,804.65,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital213, 0, 1, 2, false, new lib.btnOrbital213(), 3);

	this.btnOrbital212 = new lib.btnOrbital212();
	this.btnOrbital212.name = "btnOrbital212";
	this.btnOrbital212.parent = this;
	this.btnOrbital212.setTransform(924,865.15,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital212, 0, 1, 2, false, new lib.btnOrbital212(), 3);

	this.btnOrbital211 = new lib.btnOrbital211();
	this.btnOrbital211.name = "btnOrbital211";
	this.btnOrbital211.parent = this;
	this.btnOrbital211.setTransform(841.45,865.15,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital211, 0, 1, 2, false, new lib.btnOrbital211(), 3);

	this.btnOrbital201 = new lib.btnOrbital201();
	this.btnOrbital201.name = "btnOrbital201";
	this.btnOrbital201.parent = this;
	this.btnOrbital201.setTransform(758.9,804.65,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital201, 0, 1, 2, false, new lib.btnOrbital201(), 3);

	this.btnOrbital200 = new lib.btnOrbital200();
	this.btnOrbital200.name = "btnOrbital200";
	this.btnOrbital200.parent = this;
	this.btnOrbital200.setTransform(758.9,865.15,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital200, 0, 1, 2, false, new lib.btnOrbital200(), 3);

	this.btnOrbital114 = new lib.btnOrbital114();
	this.btnOrbital114.name = "btnOrbital114";
	this.btnOrbital114.parent = this;
	this.btnOrbital114.setTransform(676.35,807.3,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital114, 0, 1, 2, false, new lib.btnOrbital114(), 3);

	this.btnOrbital113 = new lib.btnOrbital113();
	this.btnOrbital113.name = "btnOrbital113";
	this.btnOrbital113.parent = this;
	this.btnOrbital113.setTransform(593.8,807.3,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital113, 0, 1, 2, false, new lib.btnOrbital113(), 3);

	this.btnOrbital112 = new lib.btnOrbital112();
	this.btnOrbital112.name = "btnOrbital112";
	this.btnOrbital112.parent = this;
	this.btnOrbital112.setTransform(676.35,867.8,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital112, 0, 1, 2, false, new lib.btnOrbital112(), 3);

	this.btnOrbital111 = new lib.btnOrbital111();
	this.btnOrbital111.name = "btnOrbital111";
	this.btnOrbital111.parent = this;
	this.btnOrbital111.setTransform(593.8,867.8,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital111, 0, 1, 2, false, new lib.btnOrbital111(), 3);

	this.btnOrbital101 = new lib.btnOrbital101();
	this.btnOrbital101.name = "btnOrbital101";
	this.btnOrbital101.parent = this;
	this.btnOrbital101.setTransform(511.25,807.3,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital101, 0, 1, 2, false, new lib.btnOrbital101(), 3);

	this.btnOrbital100 = new lib.btnOrbital100();
	this.btnOrbital100.name = "btnOrbital100";
	this.btnOrbital100.parent = this;
	this.btnOrbital100.setTransform(511.25,867.8,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital100, 0, 1, 2, false, new lib.btnOrbital100(), 3);

	this.btnOrbital000 = new lib.btnOrbital000();
	this.btnOrbital000.name = "btnOrbital000";
	this.btnOrbital000.parent = this;
	this.btnOrbital000.setTransform(376.05,834.85,1.7995,1.7995);
	new cjs.ButtonHelper(this.btnOrbital000, 0, 1, 2, false, new lib.btnOrbital000(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnOrbital000},{t:this.btnOrbital100},{t:this.btnOrbital101},{t:this.btnOrbital111},{t:this.btnOrbital112},{t:this.btnOrbital113},{t:this.btnOrbital114},{t:this.btnOrbital200},{t:this.btnOrbital201},{t:this.btnOrbital211},{t:this.btnOrbital212},{t:this.btnOrbital213},{t:this.btnOrbital214},{t:this.btnOrbital221},{t:this.btnOrbital222},{t:this.btnOrbital223},{t:this.btnOrbital224}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.control01, new cjs.Rectangle(282.5,778,848.3,115), null);


(lib.slComC1 = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.slComC1, new cjs.Rectangle(-175,-19.2,449,38.5), null);


(lib.control02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.slComC2 = new lib.slComC1();
	this.slComC2.name = "slComC2";
	this.slComC2.parent = this;
	this.slComC2.setTransform(1068.95,798.8);

	this.slComC1 = new lib.slComC1();
	this.slComC1.name = "slComC1";
	this.slComC1.parent = this;
	this.slComC1.setTransform(296.15,798.8);

	this.btnOrbital224 = new lib.btnOrbital224();
	this.btnOrbital224.name = "btnOrbital224";
	this.btnOrbital224.parent = this;
	this.btnOrbital224.setTransform(1024.6,857.35,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital224, 0, 1, 2, false, new lib.btnOrbital224(), 3);

	this.btnOrbital223 = new lib.btnOrbital223();
	this.btnOrbital223.name = "btnOrbital223";
	this.btnOrbital223.parent = this;
	this.btnOrbital223.setTransform(941.95,857.35,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital223, 0, 1, 2, false, new lib.btnOrbital223(), 3);

	this.btnOrbital214 = new lib.btnOrbital214();
	this.btnOrbital214.name = "btnOrbital214";
	this.btnOrbital214.parent = this;
	this.btnOrbital214.setTransform(859.4,857.35,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital214, 0, 1, 2, false, new lib.btnOrbital214(), 3);

	this.btnOrbital213 = new lib.btnOrbital213();
	this.btnOrbital213.name = "btnOrbital213";
	this.btnOrbital213.parent = this;
	this.btnOrbital213.setTransform(776.85,857.35,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital213, 0, 1, 2, false, new lib.btnOrbital213(), 3);

	this.btnOrbital114 = new lib.btnOrbital114();
	this.btnOrbital114.name = "btnOrbital114";
	this.btnOrbital114.parent = this;
	this.btnOrbital114.setTransform(611.75,860,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital114, 0, 1, 2, false, new lib.btnOrbital114(), 3);

	this.btnOrbital113 = new lib.btnOrbital113();
	this.btnOrbital113.name = "btnOrbital113";
	this.btnOrbital113.parent = this;
	this.btnOrbital113.setTransform(529.2,860,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital113, 0, 1, 2, false, new lib.btnOrbital113(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnOrbital113},{t:this.btnOrbital114},{t:this.btnOrbital213},{t:this.btnOrbital214},{t:this.btnOrbital223},{t:this.btnOrbital224},{t:this.slComC1},{t:this.slComC2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.control02, new cjs.Rectangle(121.2,779.6,1221.8,105.60000000000002), null);


// stage content:
(lib.myAnimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// control03
	this.control03 = new lib.control03();
	this.control03.name = "control03";
	this.control03.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.control03).wait(1));

	// control02
	this.control02 = new lib.control02();
	this.control02.name = "control02";
	this.control02.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.control02).wait(1));

	// control01
	this.control01 = new lib.control01();
	this.control01.name = "control01";
	this.control01.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.control01).wait(1));

	// UI
	this.slShapeCC = new lib.slShapeCC();
	this.slShapeCC.name = "slShapeCC";
	this.slShapeCC.parent = this;
	this.slShapeCC.setTransform(1350,151.25);

	this.slShapeAB = new lib.slShapeAB();
	this.slShapeAB.name = "slShapeAB";
	this.slShapeAB.parent = this;
	this.slShapeAB.setTransform(1350,79.05);

	this.slCameraRR = new lib.theSlider();
	this.slCameraRR.name = "slCameraRR";
	this.slCameraRR.parent = this;
	this.slCameraRR.setTransform(1350,850);

	this.btn02 = new lib.theButton();
	this.btn02.name = "btn02";
	this.btn02.parent = this;
	this.btn02.setTransform(1500,550);

	this.btn01 = new lib.theButton();
	this.btn01.name = "btn01";
	this.btn01.parent = this;
	this.btn01.setTransform(1350,550);

	this.ch02 = new lib.theCheckbox();
	this.ch02.name = "ch02";
	this.ch02.parent = this;
	this.ch02.setTransform(1417.2,440.55,1,1,0,0,0,67.2,-1.4);

	this.ch01 = new lib.theCheckbox();
	this.ch01.name = "ch01";
	this.ch01.parent = this;
	this.ch01.setTransform(1417.2,368.4,1,1,0,0,0,67.2,-1.4);

	this.sl03 = new lib.theSlider();
	this.sl03.name = "sl03";
	this.sl03.parent = this;
	this.sl03.setTransform(1350,283.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sl03},{t:this.ch01},{t:this.ch02},{t:this.btn01},{t:this.btn02},{t:this.slCameraRR},{t:this.slShapeAB},{t:this.slShapeCC}]}).wait(1));

	// btn3D
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACVCWQgWAAgbgNIAEgaQAZAOAXAAQANgEAEgJQACgKgFgQIiLAAIAAgaIB+AAIgQgUIAQAAIAsgTIh0AAIAAgYICRAAIAUAbIhCAeIAEAGIBsAAIAAAaIhhAAQACAEABAEQADAegQAPQgOALgSAAIgEAAgAGDCVIAAhaIgqARIgPgZQAjgLAWgLIAAhZIgUAAQgHApgFAPIgagEQAPgyAAg9IAAgSIAaAAIAAASIgBAfIASAAIAAg8IAcAAIAAA8IAbAAIAAAcIgbAAIAABMQAPgJAJgHIAQAWQgSAMgWALIAABogAmeCRIgFgfQAiAIAIgHQAFgGAFgPQAFgTABgpQABhegBgEIgEgDIgeAAIgEArQgFAwgJAqQgMA4gNAYIgbgFQAjhVAJh7IgbAAIAAgaIAcAAIAAgUIAAggIAbAAIAAAgQgBAJAAALIAyAAIAGABQAEADAAALIgBB1QgDBVgXASQgIAGgQAAQgMAAgRgDgArFBbQgPAagfAeIgXgRQAigYAXgtQgSgugFgsQgGAagFAMIgYgFIAACHIgaAAIAAgOIgoAAIAAAOIgbAAIAAikQAAgFAGAAIAaAAIAAg0IglAAIAAgZIAlAAIAAgoIAaAAIAAAoIAmAAIAAAZIgmAAIAAA0IAeAAQAFABAAAFIAAAYQAWg6ABhDIAAgWIAZAAIAAAWIgCAMIBRAAIAAAcIgPAAIAAAIQgCBFgaBIQASAjAZAmIgZAKIggg4gAtNAAIAABjIAoAAIAAhjQAAgEgEAAIghAAQgDAAAAAEgArFAZQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAOguACg8IAAgIIgeAAQABBEAMAqgAIKCMIgCghQAsAPALgIQAKgFAFgTQAGgVABgrQAChlgCgFIgDgCIgOAAQgBBAgcBAQgaA3g1AmIgVgUQBjg7AEiOIgUAAQgCATgDATQgOBAhABBIgYgPQAugtATglQAKgZAFgtIgWAAQgPArgQAYIgbgKQAmg5AHhBIAbAEQgCATgEAPIB6AAIAGABQAEADAAALIgBB8QgCBbgeAUQgKAGgQAAQgSAAgagHgAuVCSIAAifQgFAGgCAFIgZgIQAohDAFhEIAZACQgFAngHAbIAADfgAkwCOIAAgWIEhAAIAAAWgApsB1IBHgFIAAgVIhCAAIAAgYIBCAAIAAgSIhBAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBIAAhfIADgDIBBAAIAAgTIhFAAIAAgXIBFAAIAAgSQglADgYAAIgEgYQBcAAA1gLIAEAXQgTAEgmAEIgCAAIAAATIBBAAIAAAXIhBAAIAAATIA8AAQABABABAAQAAAAABABQAAAAABAAQAAABAAAAIAABfQAAAEgEAAIg8AAIAAASIA8AAIAAAYIg8AAIAAATIA3gEIACAZIiWALgAoMAaIAmAAIABgBIAAgQIgnAAgApQAaIArAAIAAgRIgrAAgAoMgNIAnAAIAAgRIgnAAgApQgNIArAAIAAgRIgrAAgALrCLIAAgZIBYAAIAAgmIhIAAIAAgZIBIAAIAAgfIhGAAQgBAAgBAAQAAgBgBAAQAAAAAAgBQAAgBAAgBIAAiWQAAgBAAgBQAAAAAAgBQABAAAAAAQABgBABAAICoAAQADAAAAAEIAACWQAAAEgDAAIhHAAIAAAfIBLAAIAAAZIhLAAIAAAmIBYAAIAAAZgANegEIAvAAIABgBIAAgoIgwAAgAMTgFQAAAAABAAQAAABAAAAQAAAAAAAAQABAAAAAAIAuAAIAAgpIgwAAgANehGIAwAAIAAgrIgwAAgAMThGIAwAAIAAgrIgwAAgAKKBjIAogNIAAhfIghAAIAAgZIAhAAIAAhPIgjAAIAAgZIBgAAIAAAZIgiAAIAABPIAgAAIAAAZIggAAIAABWIAhgNIAMAZIgpAQQglAOgYAFgAkMBtQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIAAhRQAAgBABgBQAAgBAAAAQAAgBABAAQAAAAAAAAIDaAAQAEAAAAAEIAABRQAAAEgEAAgAiUBXIBMAAIABgBIAAgLIhNAAgAj1BXIBHAAIAAgMIhHAAgAiUA3IBNAAIAAgNIgBgBIhMAAgAj1AqIAAANIBHAAIAAgOIhHAAQAAAAgBAAQAAABAAAAQAAAAAAAAQABAAAAAAgAEQAYQAIgcAAgIQAAAAAAgBQAAgBgBAAQAAgBgBAAQgBAAAAAAIjqAAQgDgCAAAEIAAAnIgaAAIAAg9QABgFAEAAIAPAAIAAhhQABgGAFAAQAlABAegHIAIAWQgZAHgfAAQAAAAgBAAQAAABAAAAQAAAAAAABQABAAAAAAIAAAKIAtAAIAAAXIgtAAIAAALIAuAAIAAAWIguAAIAAAMIB9AAQgJgJgLgIQgTAKgUAFIgKgVIAcgHIgOgJIALgPQgJABgFAEIgLgUIAbgLQgNgHgEgBIALgUIAaAPQAMgHAIgJIAQAQIgOALIAPAKIgMATIAMAPIgPAKIARANIgNAPIBIAAIAAgNIgvAAIAAgWIAvAAIAAgKIgvAAIAAgXIAvAAIAAgKQAAAAAAgBQAAAAgBAAQAAgBgBAAQgBAAgBAAIgpAAIAAgXIBAAAQAGAAAAAFIAABiIACAAIAWALQgBAagLAigACQhhIAVAPQAKgGAJgHIgUgNQgEAEgQAHgAksALIAAgVIB+AAIAAgKIhrAAIAAgUIBrAAIAAgKIhlAAIAAgUIBlAAIAAgKIiCAAIAAgWICCAAIAAgIIhlAAIAAgUIBlAAIAAgRIAaAAIAAARIBjAAQAHABAAAFIAAAWIAbAAIAAAWIgbAAIAAAWQAAAIgHAAIhjAAIAAAKIBwAAIAAAUIhwAAIAAAKICBAAIAAAVgAiUhGIBPAAIACgDIAAgHIhRAAgAiUhmIBRAAIAAgHIgCgBIhPAAg");
	this.shape.setTransform(101.2,875.708);

	this.btn3D = new lib.btn3D();
	this.btn3D.name = "btn3D";
	this.btn3D.parent = this;
	new cjs.ButtonHelper(this.btn3D, 0, 1, 2, false, new lib.btn3D(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn3D},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(800,450,1040,450);
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