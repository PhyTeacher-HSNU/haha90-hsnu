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


(lib.sliderBGLine150 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(5,1,1).p("ArtAAIXbAA");
	this.shape.setTransform(75,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.sliderBGLine150, new cjs.Rectangle(-2.5,-2.5,155,5), null);


(lib.sliderBGLine100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(5,1,1).p("AnzAAIPnAA");
	this.shape.setTransform(50,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.sliderBGLine100, new cjs.Rectangle(-2.5,-2.5,105,5), null);


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


(lib.slLabel_C17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADwDxIAAjbQgNAMgTAMQgVAMgPAGIAAghQAcgOAVgSQAXgTAIgTIAWAAIAAEYgAi5CvQgrgcgXg2QgWg1gBg9QABhDAZgyQAZgyAwgZQAvgbA5AAQBBAAArAhQArAhASA8Ig4ANQgPgvgbgWQgdgVgrAAQgyAAghAYQghAYgOAoQgNAoAAAqQAAA2AQApQAQApAhAUQAjAUAmAAQAxAAAfgcQAigbALg2IA5AOQgSBGguAlQguAlhDAAQhFAAgsgdg");
	this.shape.setTransform(-2.05,1.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AB0DxQgBgNAEgLQAIgTAPgSQAPgSAegYQAtgmAQgVQAQgWAAgUQAAgUgOgOQgPgNgXAAQgZAAgPAOQgPAPAAAaIgjgEQADgnAYgUQAYgVAoAAQAnAAAYAXQAXAVAAAhQAAARgGAQQgIAQgPASQgQASglAfQgfAagIAJQgKAJgFAKICJAAIAAAhgAjSCvQgrgcgYg2QgWg1AAg9QAAhDAagyQAZgyAwgZQAvgbA4AAQBBAAArAhQAsAhARA8Ig3ANQgPgvgcgWQgdgVgrAAQgxAAghAYQghAYgOAoQgOAoAAAqQABA2APApQARApAhAUQAiAUAnAAQAwAAAhgcQAggbAMg2IA5AOQgSBGguAlQguAlhEAAQhFAAgrgdg");
	this.shape_1.setTransform(0.5,1.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACSDdQgYgWgDgiIAigFQAGAdAOANQAOANAVAAQAYAAARgRQAQgRAAgYQAAgYgPgPQgQgQgYAAQgJAAgPAEIAEgeIAGAAQAVAAASgLQARgLAAgYQAAgTgMgMQgNgMgUAAQgUAAgOANQgNALgEAZIgigGQAGghAXgTQAWgTAhAAQAXAAATAKQATAKALARQAKAPAAATQAAATgKAOQgKAPgTAJQAZAGAOASQANASAAAbQAAAkgaAaQgbAZgpAAQgkAAgZgWgAjTCtQgsgcgXg2QgWg2AAg8QAAhDAZgyQAagyAvgaQAwgaA4AAQBBAAArAhQAsAhARA7Ig4ANQgPgvgbgVQgdgVgrAAQgxAAghAXQgiAYgNAoQgOAoAAAqQAAA2AQApQAQApAiAUQAiAUAnAAQAwAAAhgbQAggcALg2IA5APQgSBGguAkQgtAlhEAAQhFAAgrgcg");
	this.shape_2.setTransform(0.625,1.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ADlDxIAAhDIh5AAIAAggIB/izIAcAAIAACzIAmAAIAAAgIgmAAIAABDgACNCOIBYAAIAAh9gAjTCvQgrgcgXg2QgXg1AAg9QAAhDAagyQAZgyAwgZQAvgbA5AAQBAAAArAhQAsAhARA8Ig3ANQgPgvgcgWQgcgVgrAAQgyAAghAYQghAYgOAoQgNAoAAAqQAAA2AQApQAQApAhAUQAiAUAnAAQAwAAAhgcQAggbAMg2IA5AOQgSBGguAlQguAlhDAAQhFAAgsgdg");
	this.shape_3.setTransform(0.575,1.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ACRDeQgYgWgEgjIAkgDQAEAaAPAOQAPANAUAAQAZAAARgTQARgSAAgfQAAgegQgRQgRgRgaAAQgRAAgOAIQgNAHgIAMIgfgEIAbiOICKAAIAAAhIhvAAIgPBKQAZgSAcAAQAkAAAZAZQAZAaAAAoQAAAmgWAbQgaAigvAAQgmAAgYgVgAjVCtQgrgcgXg2QgWg2gBg8QABhDAZgyQAZgyAwgaQAvgaA5AAQBBAAArAhQArAhASA7Ig4ANQgOgvgcgVQgdgVgrAAQgyAAghAXQghAYgOAoQgNAoAAAqQAAA2AQApQAQApAhAUQAjAUAmAAQAxAAAggbQAhgcALg2IA5APQgSBGguAkQguAlhDAAQhFAAgsgcg");
	this.shape_4.setTransform(0.75,1.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ACQDUQgbggAAhIQAAhRAegkQAaggAsAAQAhAAAVASQAVATAEAfIgiADQgEgUgJgJQgOgOgUAAQgQAAgNAJQgQALgJAXQgKAWAAAqQAMgTASgJQASgJAUAAQAiAAAYAZQAYAaAAAoQAAAagLAXQgLAWgUAMQgUAMgZAAQgrAAgbgfgACtBoQgRARAAAbQAAASAIAQQAHAQAOAIQANAJAPAAQAWAAAQgSQAPgRAAgeQAAgdgPgRQgQgRgXAAQgXAAgQARgAjTCtQgsgcgXg2QgWg2AAg8QAAhDAZgyQAagyAvgaQAwgaA4AAQBBAAArAhQAsAhARA7Ig4ANQgPgvgbgVQgdgVgrAAQgxAAghAXQgiAYgNAoQgOAoAAAqQAAA2AQApQAQApAiAUQAiAUAnAAQAwAAAhgbQAggcALg2IA5APQgSBGguAkQgtAlhEAAQhFAAgrgcg");
	this.shape_5.setTransform(0.625,1.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ACgDxQAAghANgvQAMgvAXgrQAXgrAagdIiIAAIAAghIC0AAIAAAbQgaAbgaAvQgbAvgOAyQgKAjgDAqgAjTCvQgsgcgXg2QgWg1AAg9QAAhDAZgyQAagyAvgZQAwgbA4AAQBBAAArAhQAsAhARA8Ig4ANQgPgvgbgWQgdgVgrAAQgxAAghAYQgiAYgNAoQgOAoAAAqQAAA2AQApQAQApAiAUQAiAUAnAAQAwAAAhgcQAggbALg2IA5AOQgSBGguAlQgtAlhEAAQhFAAgrgdg");
	this.shape_6.setTransform(0.625,1.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.5,-22.9,60.5,48.7);


(lib.btnTypeM4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AhFAMIAAgXICLAAIAAAXg");
	this.shape.setTransform(-0.15,-14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(2,1,1).p("ABGAMIiLAAIAAgXICLAAg");
	this.shape_1.setTransform(-0.15,-14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AhFAMIAAgXICLAAIAAAXg");
	this.shape_2.setTransform(-0.15,-14.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AHMBXIAAhfQAAgQgCgHQgDgHgGgEQgHgEgJAAQgQAAgLALQgKAKAAAYIAABYIgaAAIAAhiQAAgSgHgIQgGgJgOAAQgMAAgIAGQgKAGgEALQgEALAAAUIAABPIgaAAIAAiYIAXAAIAAAVQAHgLAMgHQAMgGAPAAQASAAALAHQAKAHAEAMQATgaAcAAQAXAAAMAMQANANAAAaIAABogAiBBXIAAhfQAAgQgDgHQgCgHgHgEQgGgEgJAAQgQAAgLALQgLAKAAAYIAABYIgaAAIAAhiQAAgSgFgIQgHgJgPAAQgLAAgJAGQgJAGgEALQgEALAAAUIAABPIgaAAIAAiYIAXAAIAAAVQAHgLAMgHQAMgGAQAAQAQAAALAHQALAHAFAMQASgaAdAAQAXAAAMAMQAMANAAAaIAABogAmsA1IAAg5Ig5AAIAAgYIA5AAIAAg6IAZAAIAAA6IA5AAIAAAYIg5AAIAAA5gABogEIAAgYICLAAIAAAYg");
	this.shape_3.setTransform(-0.25,-13.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgyBOQAAgHACgGQAEgLAJgKQAJgKAQgNQAYgVAJgLQAIgMAAgLQABgLgJgIQgIgIgMAAQgNAAgJAIQgHAJgBAOIgTgCQABgWAOgLQANgMAVAAQAWAAANANQANAMAAATQAAAJgDAJQgFAJgIAJQgJAJgVASQgQAOgEAGQgGAEgCAGIBKAAIAAASg");
	this.shape_4.setTransform(0,1.45,1,1,0,0,0,0,-15.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(2,1,1).p("Ah/BBIAeAtIAgisIB/AAAnahtIO1AA");
	this.shape_5.setTransform(-0.05,12.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#00FFFF").ss(3,1,1).p("AnBkrIODAAQBkAAAABkIAAGPQAABkhkAAIuDAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#000066","#0066FF"],[0,1],5,30,5,-29.9).s().p("AnBEsQhkAAAAhkIAAmPQAAhkBkAAIODAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#000066","#00FFFF"],[0,1],5,30,5,-29.9).s().p("AnBEsQhkAAAAhkIAAmPQAAhkBkAAIODAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF00FF").ss(3,1,1).p("AnBkrIODAAQBkAAAABkIAAGPQAABkhkAAIuDAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF00FF").s().p("AnBEsQhkAAAAhkIAAmPQAAhkBkAAIODAAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6,p:{rotation:0}}]}).to({state:[{t:this.shape_8,p:{rotation:0}},{t:this.shape_6,p:{rotation:0}}]},1).to({state:[{t:this.shape_8,p:{rotation:180}},{t:this.shape_6,p:{rotation:180}}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.5,-31.5,113,63);


(lib.btnTypeM3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgLBGIAAg6Ig6AAIAAgXIA6AAIAAg6IAXAAIAAA6IA6AAIAAAXIg6AAIAAA6g");
	this.shape.setTransform(-0.15,-14.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(2,1,1).p("AgLBGIAAg6Ig6AAIAAgXIA6AAIAAg6IAXAAIAAA6IA6AAIAAAXIg6AAIAAA6g");
	this.shape_1.setTransform(-0.15,-14.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AgLBGIAAg6Ig6AAIAAgXIA6AAIAAg6IAXAAIAAA6IA6AAIAAAXIg6AAIAAA6g");
	this.shape_2.setTransform(-0.15,-14.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AHMBXIAAhfQAAgQgCgHQgDgHgGgEQgHgEgJAAQgQAAgLALQgKAKAAAYIAABYIgaAAIAAhiQAAgSgHgIQgGgJgOAAQgMAAgIAGQgKAGgEALQgEALAAAUIAABPIgaAAIAAiYIAXAAIAAAVQAHgLAMgHQAMgGAPAAQASAAALAHQAKAHAEAMQATgaAcAAQAXAAAMAMQANANAAAaIAABogAiBBXIAAhfQAAgQgDgHQgCgHgHgEQgGgEgJAAQgQAAgLALQgLAKAAAYIAABYIgaAAIAAhiQAAgSgFgIQgHgJgPAAQgLAAgJAGQgJAGgEALQgEALAAAUIAABPIgaAAIAAiYIAXAAIAAAVQAHgLAMgHQAMgGAQAAQAQAAALAHQALAHAFAMQASgaAdAAQAXAAAMAMQAMANAAAaIAABogAmsA1IAAg5Ig5AAIAAgYIA5AAIAAg6IAZAAIAAA6IA5AAIAAAYIg5AAIAAA5gABogEIAAgYICLAAIAAAYg");
	this.shape_3.setTransform(-0.25,-13.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgyBOQAAgHACgGQAEgLAJgKQAJgKAQgNQAYgVAJgLQAIgMAAgLQABgLgJgIQgIgIgMAAQgNAAgJAIQgHAJgBAOIgTgCQABgWAOgLQANgMAVAAQAWAAANANQANAMAAATQAAAJgDAJQgFAJgIAJQgJAJgVASQgQAOgEAGQgGAEgCAGIBKAAIAAASg");
	this.shape_4.setTransform(0,1.45,1,1,0,0,0,0,-15.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(2,1,1).p("Ah/BBIAeAtIAgisIB/AAAnahtIO1AA");
	this.shape_5.setTransform(-0.05,12.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#00FFFF").ss(3,1,1).p("AnBkrIODAAQBkAAAABkIAAGPQAABkhkAAIuDAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#000066","#0066FF"],[0,1],5,30,5,-29.9).s().p("AnBEsQhkAAAAhkIAAmPQAAhkBkAAIODAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#000066","#00FFFF"],[0,1],5,30,5,-29.9).s().p("AnBEsQhkAAAAhkIAAmPQAAhkBkAAIODAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF00FF").ss(3,1,1).p("AnBkrIODAAQBkAAAABkIAAGPQAABkhkAAIuDAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF00FF").s().p("AnBEsQhkAAAAhkIAAmPQAAhkBkAAIODAAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6,p:{rotation:0}}]}).to({state:[{t:this.shape_8,p:{rotation:0}},{t:this.shape_6,p:{rotation:0}}]},1).to({state:[{t:this.shape_8,p:{rotation:180}},{t:this.shape_6,p:{rotation:180}}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.5,-31.5,113,63);


(lib.btnTypeM2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEpCMIAAisQAAgbgEgMQgFgNgMgHQgMgIgQAAQgdAAgTATQgTAUAAAqIAACeIgvAAIAAixQAAgfgLgQQgLgPgaAAQgUAAgQAKQgRALgIATQgHAVAAAlIAACNIguAAIAAkRIApAAIAAAmQANgUAVgMQAWgNAbAAQAfAAATANQAUANAIAXQAggxA1AAQApABAWAWQAWAWAAAwIAAC7gAlXgYIAAgsID7AAIAAAsg");
	this.shape.setTransform(-0.225,4.35);

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
p.nominalBounds = new cjs.Rectangle(-46.5,-31.5,93,63);


(lib.btnTypeM1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEpCcIAAisQAAgcgEgMQgFgNgMgHQgMgIgQAAQgdABgTASQgTAUAAAqIAACfIgvAAIAAiyQAAgegLgQQgLgQgaAAQgUABgQAJQgRALgIAUQgHAUAAAkIAACPIguAAIAAkSIApAAIAAAnQANgVAVgMQAWgMAbAAQAfAAATAMQAUANAIAXQAggwA1AAQApAAAWAWQAWAXAAAvIAAC8gAjvBeIAAhmIhoAAIAAgsIBoAAIAAhnIAsAAIAABnIBnAAIAAAsIhnAAIAABmg");
	this.shape.setTransform(-0.225,2.8);

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
p.nominalBounds = new cjs.Rectangle(-46.5,-31.5,93,63);


(lib.btnPlayStop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ALrH0IAAvnIFOAAIAAPngABRH0IAAvnIFPAAIAAPngAw4nzIPoH0IvnHzg");
	this.shape.setTransform(-0.0072,0.0491,0.3237,0.4);

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
p.nominalBounds = new cjs.Rectangle(-46.5,-31.5,93,63);


(lib.btnOrbital224 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACiDyIgEgcQAKACAHAAQALAAAFgDQAHgDADgGQADgFAGgSIAEgHIhEiyIAgAAIAmBmQAGAUAGAVQAGgUAHgUIAmhnIAeAAIhDC0QgMAegFALQgJAPgKAHQgKAHgPAAQgJAAgKgEgABlCtIgvhGIgvBGIgjAAIBAhdIg8hUIAlAAIAbAoIANAVIANgUIAfgpIAkAAIg9BTIBBBegAj6B6QgcgSgPghQgPggAAgpQAAgqAOghQAOgiAbgRQAcgSAhAAQAZAAATAKQAUALAMAQIAAiIIAuAAIAAF7IgrAAIAAgjQgaApgyAAQgiAAgbgSgAjvhSQgVAZAAA3QAAAzAWAbQAWAaAfAAQAfAAAVgZQAVgZAAg0QAAg3gVgaQgXgbgfAAQgfAAgVAag");
	this.shape.setTransform(0.025,0.0275,1.1,1.1);

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
p.nominalBounds = new cjs.Rectangle(-46.5,-31.5,93,63);


(lib.btnOrbital223 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADfDyIgDgcQAKACAHAAQAKAAAGgDQAGgDAEgGQADgFAGgSIADgHIhEiyIAhAAIAlBmQAHAUAGAVQAFgUAIgUIAmhnIAeAAIhEC0QgLAegGALQgIAPgKAHQgLAHgOAAQgJAAgLgEgAhRCtIgvhGIgvBGIgkAAIBBhdIg8hUIAlAAIAcAoIAMAVIAOgUIAegpIAkAAIg9BTIBCBegAmxB6QgbgSgPghQgQggAAgpQAAgqAOghQAOgiAbgRQAcgSAiAAQAYAAAUAKQATALAMAQIAAiIIAvAAIAAF7IgsAAIAAgjQgaApgyAAQghAAgcgSgAmmhSQgVAZAAA3QAAAzAWAbQAXAaAeAAQAfAAAVgZQAVgZAAg0QAAg3gVgaQgWgbggAAQgfAAgVAagABiBjIAAgeIBdAAIAAAegAF9AUQAAgIACgHQAEgKAKgLQAJgLASgOQAbgXAKgNQAJgNAAgLQAAgNgIgIQgJgIgOAAQgPAAgJAIQgJAJAAAQIgVgCQACgYAOgMQAOgMAYAAQAYAAAOANQAOANAAAUQAAAKgEAKQgEAKgJAKQgKALgWATQgTAPgFAGQgFAFgEAFIBTAAIAAAUgAgjAUQAAgIADgHQAEgKAJgLQAKgLAQgOQAbgXAKgNQAKgNAAgLQAAgNgJgIQgJgIgOAAQgPAAgIAIQgJAJAAAQIgVgCQACgYAPgMQAOgMAXAAQAYAAAOANQAOANAAAUQAAAKgEAKQgEAKgKAKQgJALgXATQgSAPgFAGQgFAFgDAFIBRAAIAAAUg");
	this.shape.setTransform(0.0337,0.0273,0.85,1.1);

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
p.nominalBounds = new cjs.Rectangle(-46.5,-31.5,93,63);


(lib.btnOrbital214 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHDyIgEgcQAKACAGAAQALAAAGgDQAFgDAEgGQAEgFAFgSIADgHIhCiyIAfAAIAmBmQAHAUAFAVQAFgUAIgUIAmhnIAeAAIhDC0QgMAegFALQgJAPgKAHQgLAHgOAAQgJAAgJgEgACUCtIAAgYIBziDIgjABIhIAAIAAgXICRAAIAAATIhzCGIAngCIBSAAIAAAagAj4B6QgcgSgPghQgPggAAgpQAAgqAOghQAOgiAbgRQAcgSAhAAQAZAAATAKQAUALAMAQIAAiIIAuAAIAAF7IgrAAIAAgjQgaApgyAAQgiAAgbgSgAjthSQgVAZAAA3QAAAzAWAbQAWAaAfAAQAfAAAVgZQAVgZAAg0QAAg3gVgaQgXgbgfAAQgfAAgVAag");
	this.shape.setTransform(0.005,0.0275,1.1,1.1);

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
p.nominalBounds = new cjs.Rectangle(-46.5,-31.5,93,63);


(lib.btnOrbital213 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACUDRIAAgYIBziDIgjABIhIAAIAAgYICRAAIAAAUIhzCGIAngCIBSAAIAAAagABnDRIgvhGIgvBGIgjAAIBAhcIg8hWIAlAAIAbApIANAVIANgUIAfgqIAkAAIg9BUIBBBegAj4CeQgcgSgPghQgPggAAgqQAAgoAOgiQAOghAbgSQAcgSAhAAQAZAAATALQAUAKAMARIAAiIIAuAAIAAF6IgrAAIAAgjQgaApgyAAQgiAAgbgSgAjtguQgVAZAAA2QAAA0AWAbQAWAaAfAAQAfAAAVgZQAVgZAAg0QAAg3gVgaQgXgbgfAAQgfAAgVAag");
	this.shape.setTransform(0.005,-0.01,1.1,1.1);

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
p.nominalBounds = new cjs.Rectangle(-46.5,-31.5,93,63);


(lib.btnOrbital201 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAADRIAAgYIByiDIgiABIhJAAIAAgYICSAAIAAAUIh0CGIAngCIBSAAIAAAagAjgCeQgcgSgPghQgQggAAgqQAAgoAPgiQANghAbgSQAcgSAiAAQAYAAAUALQATAKANARIAAiIIAuAAIAAF6IgsAAIAAgjQgZApgzAAQghAAgbgSgAjWguQgVAZABA2QgBA0AWAbQAXAaAeAAQAfAAAWgZQAUgZAAg0QABg3gWgaQgWgbggAAQgfAAgVAagACsA4QABgIACgGQAEgLAKgMQAJgLASgNQAagXALgNQAJgNAAgLQAAgNgJgIQgJgIgOAAQgPAAgIAIQgKAKABAPIgWgCQADgYAOgMQAOgMAYAAQAYAAAOANQAOANAAAVQAAAKgEAJQgEAKgKAKQgJAMgWARQgTAQgFAFQgGAGgDAFIBSAAIAAAUg");
	this.shape.setTransform(-0.02,-0.01,1.1,1.1);

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
p.nominalBounds = new cjs.Rectangle(-46.5,-31.5,93,63);


(lib.btnOrbital114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABDDBIgEgcQAKACAIAAQAKAAAGgDQAGgEAEgFQADgGAGgSIADgHIhEiyIAhAAIAlBnQAHATAGAWQAFgVAIgUIAmhnIAdAAIhDC1QgLAdgGALQgJAPgJAIQgLAGgOAAQgKABgKgEgAjWC+IAAl8IArAAIAAAkQAPgUATgLQATgKAaAAQAkgBAbATQAaARANAiQAOAgAAAoQAAAqgPAhQgOAigdASQgdARggABQgXAAgTgKQgSgKgMgPIAACGgAiUiDQgYAbAAA2QAAA0AWAZQAWAZAeAAQAfAAAWgaQAXgaAAg2QgBg1gVgaQgWgageAAQgeAAgWAcg");
	this.shape.setTransform(0.02,-0.01,1.2,1.2);

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
p.nominalBounds = new cjs.Rectangle(-46.5,-31.5,93,63);


(lib.btnOrbital113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjWDBIAAl7IArAAIAAAkQAPgVATgLQASgKAbAAQAkAAAaASQAbASANAhQAOAhAAAnQAAAqgPAhQgOAigdASQgdASggAAQgXAAgTgKQgSgKgMgPIAACGgAiViAQgXAcAAA1QAAA0AWAZQAVAaAfAAQAfAAAWgaQAWgbAAg2QAAg1gVgaQgWgageAAQgeAAgXAcgACyB/IgvhGIgvBGIgkAAIBBhdIg8hUIAlAAIAcApIAMAUIAOgTIAegqIAkAAIg9BTIBCBeg");
	this.shape.setTransform(0.05,0.05,1.2,1.2);

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
p.nominalBounds = new cjs.Rectangle(-46.5,-31.5,93,63);


(lib.btnOrbital101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjUDBIAAl7IArAAIAAAkQAPgVATgLQATgKAaAAQAkAAAbASQAaASANAhQAOAhAAAnQAAAqgPAhQgOAigdASQgdASggAAQgXAAgTgKQgSgKgMgPIAACGgAiSiAQgYAcAAA1QAAA0AWAZQAWAaAeAAQAfAAAWgaQAXgbAAg2QgBg1gVgaQgWgageAAQgeAAgWAcgAA2B/IAAgYIByiCIgiABIhJAAIAAgYICSAAIAAAUIh0CFIAngCIBTAAIAAAag");
	this.shape.setTransform(0.05,-0.1,1.2,1.2,0,0,0,-0.1,-0.1);

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
p.nominalBounds = new cjs.Rectangle(-46.5,-31.5,93,63);


(lib.btnOrbital000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhNB6QgcgXgIgsIAugHQAEAcARAOQASAPAfABQAggBAQgNQAPgNAAgRQAAgQgOgJQgJgHgmgJQgygNgUgIQgUgKgKgRQgLgQAAgVQAAgSAJgQQAJgPAOgLQALgHASgGQAUgFAVgBQAfAAAYAKQAZAJAMAQQALAQAFAbIguAGQgDgWgOgLQgPgMgbAAQggAAgOALQgOAKAAAOQABAKAFAGQAGAIAMAFIApAMQAwANAUAIQAUAIALAQQALAQAAAYQAAAXgOAVQgNAUgaAMQgaALgfgBQg1AAgcgVg");
	this.shape.setTransform(0,-0.025,1.5,1.5);

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
p.nominalBounds = new cjs.Rectangle(-46.5,-31.5,93,63);


(lib.btnHybridSP3D3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak+EFIAAl8IAqAAIAAAkQAPgVATgKQASgLAbAAQAkAAAaASQAcASAOAhQANAhAAAmQAAArgPAiQgPAhgdATQgdARggAAQgXAAgTgJQgSgKgMgPIAACGgAj9g8QgYAbAAA0QABA1AVAaQAWAZAeAAQAfAAAWgaQAXgaAAg4QgBgzgVgaQgWgageAAQgeAAgWAcgADQCPQgbgSgQghQgPggAAgqQAAgoAOgiQANghAcgSQAbgSAjAAQAYAAAUALQATAKAMARIAAiIIAuAAIAAF6IgrAAIAAgjQgaApgyAAQgiAAgbgSgADbg9QgVAZAAA2QAAA0AWAbQAXAaAeAAQAeAAAWgZQAVgZAAg0QAAg3gWgaQgWgbggAAQgfAAgUAagAo2CLQgdgWgHgsIAugIQAEAcASAPQARAPAgAAQAgAAAPgNQAQgNAAgSQAAgQgNgIQgKgHgmgJQg0gOgTgIQgUgLgKgPQgKgQAAgVQAAgSAIgQQAJgQAOgKQALgIATgGQASgFAWAAQAgAAAYAKQAZAIALARQAMAQAEAaIgtAGQgDgVgPgMQgPgMgbAAQggAAgOALQgOAKABAPQgBAJAHAHQAFAIAMAEIApAMQAxANAVAIQATAIALARQALAPAAAYQAAAXgNAWQgOATgZAMQgbALggAAQg1AAgcgWgAHSgbQgVgTgEgfIAegEQAGAZAMAMQANALASAAQAWAAAOgPQAPgPAAgVQAAgVgOgOQgNgNgWAAQgIAAgNADIADgbIAGABQATAAAPgKQAPgKAAgVQABgRgMgLQgLgLgRABQgTAAgLALQgMALgDAVIgfgEQAGgfATgRQAVgQAdAAQAUAAARAIQARAJAJAOQAJAPAAASQAAAPgIANQgJAOgRAHQAVAGANAQQAMAPAAAYQAAAggYAXQgXAWgkABQggAAgWgUgAgTgbQgWgTgDgfIAegEQAFAZAMAMQAMALATAAQAVAAAPgPQAOgPAAgVQAAgVgNgOQgOgNgVAAQgIAAgNADIADgbIAFABQAUAAAOgKQAQgKAAgVQAAgRgLgLQgLgLgSABQgSAAgMALQgKALgDAVIgfgEQAFgfAUgRQATgQAdAAQAVAAARAIQAQAJAKAOQAIAPABASQAAAPgJANQgJAOgQAHQAVAGANAQQAMAPgBAYQABAggYAXQgYAWgjABQghAAgUgUg");
	this.shape.setTransform(0.05,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FFFF").ss(3,1,1).p("ApXkrISvAAQBkAAAABkIAAGPQAABkhkAAIyvAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000066","#0066FF"],[0,1],-10,30,-10,-29.9).s().p("ApXEsQhkAAAAhkIAAmPQAAhkBkAAISvAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#00FFFF"],[0,1],-10,30,-10,-29.9).s().p("ApXEsQhkAAAAhkIAAmPQAAhkBkAAISvAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF00FF").ss(3,1,1).p("ApXkrISvAAQBkAAAABkIAAGPQAABkhkAAIyvAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("ApXEsQhkAAAAhkIAAmPQAAhkBkAAISvAAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{rotation:0}}]}).to({state:[{t:this.shape_3,p:{rotation:0}},{t:this.shape_1,p:{rotation:0}}]},1).to({state:[{t:this.shape_3,p:{rotation:180}},{t:this.shape_1,p:{rotation:180}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.5,-31.5,143,63);


(lib.btnHybridSP3D2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak9EFIAAl8IAqAAIAAAkQAPgVATgKQATgLAbAAQAjAAAbASQAbASAOAhQANAhAAAmQAAArgPAiQgPAhgdATQgdARggAAQgXAAgSgJQgTgKgMgPIAACGgAj8g8QgXAbAAA0QAAA1AVAaQAWAZAeAAQAfAAAXgaQAWgaAAg4QAAgzgWgaQgWgageAAQgdAAgXAcgADRCPQgbgSgPghQgQggAAgqQAAgoAOgiQAOghAbgSQAcgSAiAAQAYAAAUALQATAKAMARIAAiIIAvAAIAAF6IgsAAIAAgjQgaApgyAAQghAAgcgSgADcg9QgVAZAAA2QAAA0AWAbQAXAaAeAAQAfAAAVgZQAVgZAAg0QAAg3gVgaQgWgbggAAQgfAAgVAagAo1CLQgcgWgIgsIAugIQAEAcASAPQARAPAgAAQAgAAAQgNQAPgNAAgSQAAgQgNgIQgKgHgmgJQgzgOgUgIQgUgLgKgPQgKgQAAgVQAAgSAIgQQAJgQAOgKQALgIATgGQATgFAVAAQAgAAAZAKQAYAIAMARQAMAQAEAaIguAGQgDgVgOgMQgPgMgcAAQggAAgNALQgOAKAAAPQAAAJAGAHQAFAIAMAEIAqAMQAxANAUAIQATAIALARQALAPAAAYQAAAXgNAWQgOATgZAMQgaALggAAQg2AAgcgWgAgSgbQgWgTgDgfIAegEQAGAZALAMQANALASAAQAVAAAPgPQAPgPAAgVQAAgVgOgOQgOgNgVAAQgIAAgNADIADgbIAFABQAUAAAPgKQAPgKAAgVQAAgRgLgLQgLgLgSABQgSAAgLALQgLALgDAVIgfgEQAGgfATgRQATgQAdAAQAVAAARAIQARAJAJAOQAJAPAAASQAAAPgJANQgJAOgQAHQAVAGANAQQAMAPAAAYQAAAggYAXQgXAWgkABQghAAgUgUgAG3gMQgBgLAEgKQAGgRAOgQQAOgQAagVQAoghAOgUQAOgSAAgSQAAgSgNgMQgNgMgUAAQgWAAgNAMQgNAOAAAXIgggDQAEgjAUgSQAVgTAjABQAkAAAVATQAUAUAAAdQAAAOgGAPQgGAOgOAQQgOAQggAcQgcAWgHAIQgIAJgFAIIB5AAIAAAdg");
	this.shape.setTransform(-0.075,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FFFF").ss(3,1,1).p("ApXkrISvAAQBkAAAABkIAAGPQAABkhkAAIyvAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000066","#0066FF"],[0,1],-10,30,-10,-29.9).s().p("ApXEsQhkAAAAhkIAAmPQAAhkBkAAISvAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#00FFFF"],[0,1],-10,30,-10,-29.9).s().p("ApXEsQhkAAAAhkIAAmPQAAhkBkAAISvAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF00FF").ss(3,1,1).p("ApXkrISvAAQBkAAAABkIAAGPQAABkhkAAIyvAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("ApXEsQhkAAAAhkIAAmPQAAhkBkAAISvAAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{rotation:0}}]}).to({state:[{t:this.shape_3,p:{rotation:0}},{t:this.shape_1,p:{rotation:0}}]},1).to({state:[{t:this.shape_3,p:{rotation:180}},{t:this.shape_1,p:{rotation:180}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.5,-31.5,143,63);


(lib.btnHybridSP3D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjTEFIAAl8IAqAAIAAAkQAPgVATgKQATgLAbAAQAjAAAbASQAbASANAhQANAhAAAmQAAArgPAiQgOAhgdATQgdARggAAQgXAAgSgJQgTgKgMgPIAACGgAiSg8QgXAbAAA0QAAA1AVAaQAWAZAeAAQAfAAAXgaQAWgaAAg4QAAgzgWgaQgWgageAAQgdAAgXAcgAE7CPQgbgSgPghQgQggAAgqQAAgoAOgiQAOghAbgSQAcgSAiAAQAYAAAUALQATAKAMARIAAiIIAvAAIAAF6IgsAAIAAgjQgaApgyAAQghAAgcgSgAFGg9QgVAZAAA2QAAA0AWAbQAXAaAeAAQAfAAAVgZQAVgZAAg0QAAg3gVgaQgWgbggAAQgfAAgVAagAnLCLQgcgWgIgsIAugIQAEAcASAPQARAPAgAAQAgAAAQgNQAPgNAAgSQAAgQgNgIQgKgHgmgJQgzgOgUgIQgUgLgKgPQgKgQAAgVQAAgSAIgQQAJgQAOgKQALgIATgGQATgFAVAAQAgAAAZAKQAYAIAMARQAMAQAEAaIguAGQgDgVgOgMQgPgMgcAAQggAAgNALQgOAKAAAPQAAAJAGAHQAFAIAMAEIAqAMQAxANAUAIQATAIALARQALAPAAAYQAAAXgNAWQgOATgZAMQgaALggAAQg2AAgcgWgABXgbQgWgTgDgfIAegEQAGAZAMAMQANALASAAQAVAAAPgPQAPgPAAgVQAAgVgOgOQgOgNgVAAQgIAAgNADIADgbIAFABQAUAAAPgKQAPgKAAgVQAAgRgLgLQgLgLgSABQgSAAgLALQgMALgDAVIgfgEQAGgfATgRQAUgQAdAAQAVAAARAIQARAJAJAOQAJAPAAASQAAAPgJANQgJAOgQAHQAVAGANAQQAMAPAAAYQAAAggYAXQgXAWgkABQghAAgVgUg");
	this.shape.setTransform(-1.125,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FFFF").ss(3,1,1).p("ApXkrISvAAQBkAAAABkIAAGPQAABkhkAAIyvAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000066","#0066FF"],[0,1],-10,30,-10,-29.9).s().p("ApXEsQhkAAAAhkIAAmPQAAhkBkAAISvAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#00FFFF"],[0,1],-10,30,-10,-29.9).s().p("ApXEsQhkAAAAhkIAAmPQAAhkBkAAISvAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF00FF").ss(3,1,1).p("ApXkrISvAAQBkAAAABkIAAGPQAABkhkAAIyvAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("ApXEsQhkAAAAhkIAAmPQAAhkBkAAISvAAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{rotation:0}}]}).to({state:[{t:this.shape_3,p:{rotation:0}},{t:this.shape_1,p:{rotation:0}}]},1).to({state:[{t:this.shape_3,p:{rotation:180}},{t:this.shape_1,p:{rotation:180}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.5,-31.5,143,63);


(lib.btnHybridSP3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhLEFIAAl8IAqAAIAAAkQAPgVASgKQATgLAbAAQAjAAAbASQAbASAOAhQANAhAAAmQAAArgPAiQgPAhgdATQgdARggAAQgXAAgSgJQgSgKgMgPIAACGgAgKg8QgXAbAAA0QAAA1AVAaQAVAZAeAAQAfAAAXgaQAWgaAAg4QAAgzgWgaQgWgageAAQgdAAgWAcgAlDCLQgcgWgIgsIAugIQAEAcASAPQARAPAgAAQAgAAAQgNQAPgNAAgSQAAgQgNgIQgKgHgmgJQgzgOgUgIQgUgLgKgPQgKgQAAgVQAAgSAIgQQAJgQAOgKQALgIATgGQATgFAVAAQAgAAAZAKQAYAIAMARQAMAQAEAaIguAGQgDgVgOgMQgPgMgcAAQggAAgNALQgOAKAAAPQAAAJAGAHQAFAIAMAEIAqAMQAxANAUAIQATAIALARQALAPAAAYQAAAXgNAWQgOATgZAMQgaALggAAQg2AAgcgWgADfgbQgWgTgDgfIAegEQAGAZAMAMQANALASAAQAVAAAPgPQAPgPAAgVQAAgVgOgOQgOgNgVAAQgIAAgNADIADgbIAFABQAUAAAPgKQAPgKAAgVQAAgRgLgLQgLgLgSABQgSAAgLALQgMALgDAVIgfgEQAGgfATgRQAUgQAdAAQAVAAARAIQARAJAJAOQAJAPAAASQAAAPgJANQgJAOgQAHQAVAGANAQQAMAPAAAYQAAAggYAXQgXAWgkABQghAAgVgUg");
	this.shape.setTransform(0.025,2.9);

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
p.nominalBounds = new cjs.Rectangle(-46.5,-31.5,93,63);


(lib.btnHybridSP2D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjTEFIAAl8IAqAAIAAAkQAPgVATgKQATgLAbAAQAjAAAbASQAbASANAhQANAhAAAmQAAArgPAiQgOAhgdATQgdARggAAQgXAAgSgJQgTgKgMgPIAACGgAiSg8QgXAbAAA0QAAA1AVAaQAWAZAeAAQAfAAAXgaQAWgaAAg4QAAgzgWgaQgWgageAAQgdAAgXAcgAE7CPQgbgSgPghQgQggAAgqQAAgoAOgiQAOghAbgSQAcgSAiAAQAYAAAUALQATAKAMARIAAiIIAvAAIAAF6IgsAAIAAgjQgaApgyAAQghAAgcgSgAFGg9QgVAZAAA2QAAA0AWAbQAXAaAeAAQAfAAAVgZQAVgZAAg0QAAg3gVgaQgWgbggAAQgfAAgVAagAnLCLQgcgWgIgsIAugIQAEAcASAPQARAPAgAAQAgAAAQgNQAPgNAAgSQAAgQgNgIQgKgHgmgJQgzgOgUgIQgUgLgKgPQgKgQAAgVQAAgSAIgQQAJgQAOgKQALgIATgGQATgFAVAAQAgAAAZAKQAYAIAMARQAMAQAEAaIguAGQgDgVgOgMQgPgMgcAAQggAAgNALQgOAKAAAPQAAAJAGAHQAFAIAMAEIAqAMQAxANAUAIQATAIALARQALAPAAAYQAAAXgNAWQgOATgZAMQgaALggAAQg2AAgcgWgAA6gMQAAgLAEgKQAGgRAOgQQANgQAagVQAoghAPgUQAOgSAAgSQAAgSgNgMQgNgMgVAAQgWAAgNAMQgNAOAAAXIgfgDQADgjAVgSQAVgTAjABQAjAAAVATQAVAUAAAdQAAAOgGAPQgGAOgOAQQgOAQghAcQgbAWgIAIQgIAJgFAIIB5AAIAAAdg");
	this.shape.setTransform(-1.125,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FFFF").ss(3,1,1).p("ApXkrISvAAQBkAAAABkIAAGPQAABkhkAAIyvAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000066","#0066FF"],[0,1],-10,30,-10,-29.9).s().p("ApXEsQhkAAAAhkIAAmPQAAhkBkAAISvAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#00FFFF"],[0,1],-10,30,-10,-29.9).s().p("ApXEsQhkAAAAhkIAAmPQAAhkBkAAISvAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF00FF").ss(3,1,1).p("ApXkrISvAAQBkAAAABkIAAGPQAABkhkAAIyvAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("ApXEsQhkAAAAhkIAAmPQAAhkBkAAISvAAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{rotation:0}}]}).to({state:[{t:this.shape_3,p:{rotation:0}},{t:this.shape_1,p:{rotation:0}}]},1).to({state:[{t:this.shape_3,p:{rotation:180}},{t:this.shape_1,p:{rotation:180}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.5,-31.5,143,63);


(lib.btnHybridSP2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhKEFIAAl8IArAAIAAAkQAOgVATgKQASgLAbAAQAkAAAaASQAbASAOAhQAOAhAAAmQAAArgPAiQgPAhgeATQgcARghAAQgWAAgTgJQgRgKgNgPIAACGgAgJg8QgXAbAAA0QAAA1AVAaQAVAZAfAAQAfAAAWgaQAWgaAAg4QAAgzgVgaQgXgageAAQgdAAgWAcgAlBCLQgdgWgHgsIAugIQADAcASAPQARAPAhAAQAfAAAQgNQAPgNABgSQAAgQgOgIQgJgHgmgJQg0gOgTgIQgVgLgJgPQgLgQAAgVQAAgSAIgQQAJgQAPgKQAKgIATgGQATgFAWAAQAgAAAYAKQAZAIALARQAMAQAEAaIgtAGQgEgVgOgMQgPgMgcAAQgfAAgOALQgOAKAAAPQAAAJAGAHQAFAIAMAEIAqAMQAxANAUAIQATAIAMARQAKAPABAYQAAAXgOAWQgOATgZAMQgaALggAAQg2AAgbgWgADDgMQAAgLAEgKQAGgRAOgQQANgQAagVQApghAOgUQAOgSAAgSQAAgSgNgMQgNgMgUAAQgWAAgNAMQgNAOgBAXIgfgDQADgjAVgSQAVgTAjABQAjAAAWATQAUAUAAAdQAAAOgGAPQgGAOgOAQQgOAQghAcQgbAWgIAIQgHAJgFAIIB4AAIAAAdg");
	this.shape.setTransform(-0.1,2.9);

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
p.nominalBounds = new cjs.Rectangle(-46.5,-31.5,93,63);


(lib.btnHybridSP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAWDBIAAl7IArAAIAAAkQAPgVATgLQATgKAbAAQAjAAAbASQAbASANAhQAOAhAAAnQAAAqgPAhQgPAigdASQgdASggAAQgXAAgSgKQgTgKgMgPIAACGgABXiAQgWAcAAA1QgBA0AWAZQAVAaAfAAQAfAAAWgaQAXgbgBg2QAAg1gVgaQgWgageAAQgdAAgYAcgAjgBIQgcgXgIgrIAugHQAEAbARAPQASAPAgAAQAgAAAPgNQAQgNAAgSQAAgPgOgJQgJgGgmgKQgzgNgUgJQgUgKgKgQQgLgRABgUQgBgSAJgQQAIgQAPgKQALgIASgGQAUgFAVAAQAgAAAYAJQAZAJALAQQANAQAEAbIguAGQgDgVgOgMQgPgMgcAAQggAAgOALQgNAKAAAOQAAAKAFAHQAGAHAMAFIAqAMQAwANAUAJQAUAIALAQQALAQAAAXQAAAXgNAVQgOAUgaAMQgaALgfAAQg3AAgbgWg");
	this.shape.setTransform(-0.25,9.625);

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
p.nominalBounds = new cjs.Rectangle(-46.5,-31.5,93,63);


(lib.btnHybrid_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhTCpQgcgZgGgsIAtgFQAGAgAQAOQAQAOAZAAQAUAAARgJQAQgKAKgRQAKgQAHgcQAHgcAAgdIAAgJQgOAWgYAOQgYAOgbAAQgwAAgggjQghghAAg4QAAg5AigjQAigkA0AAQAkAAAeAUQAfAUAQAlQAQAlAABGQAABIgQArQgQArgfAWQgfAXgpAAQgtAAgcgZgAg1iBQgXAaAAAoQAAAkAWAXQAWAVAgAAQAfAAAVgVQAVgXAAgoQAAgogVgYQgWgXgeAAQgeAAgXAZg");
	this.shape.setTransform(-0.075,-0.325);

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
p.nominalBounds = new cjs.Rectangle(-46.5,-31.5,93,63);


(lib.btnHybrid_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhaChQgigiAAgxQAAglATgZQASgYAjgJQgdgLgOgUQgOgTAAgcQAAgpAegcQAegdAxAAQAxAAAeAdQAfAdAAApQAAAbgPATQgNAUgdALQAjALATAYQASAaAAAjQAAAwgjAiQgiAhg4AAQg3AAgjghgAg3AXQgVAWAAAhQAAAUAKASQAJATASAKQATAKAUAAQAiAAAWgVQAVgWABghQAAghgXgWQgXgWggAAQghAAgWAVgAgsiJQgRARAAAYQAAAaARASQARARAbAAQAbAAARgRQASgRgBgZQAAgZgRgSQgSgRgaAAQgaAAgSARg");
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
p.nominalBounds = new cjs.Rectangle(-46.5,-31.5,93,63);


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
p.nominalBounds = new cjs.Rectangle(-46.5,-31.5,93,63);


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
p.nominalBounds = new cjs.Rectangle(-46.5,-31.5,93,63);


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
p.nominalBounds = new cjs.Rectangle(-46.5,-31.5,93,63);


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
p.nominalBounds = new cjs.Rectangle(-46.5,-31.5,93,63);


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
p.nominalBounds = new cjs.Rectangle(-46.5,-31.5,93,63);


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
p.nominalBounds = new cjs.Rectangle(-46.5,-31.5,93,63);


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
p.nominalBounds = new cjs.Rectangle(-46.5,-31.5,93,63);


(lib.btnHybrid_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhVCaQgmgvAAhrQAAhCAOgpQAOgpAbgWQAcgXAoAAQAeAAAYANQAXAMAPAXQAPAXAIAiQAJAhAAA3QAABDgOApQgOApgbAWQgbAXgqAAQg2AAgfgogAgzh/QgYAjAABcQAABeAWAfQAWAeAfAAQAgAAAWgfQAWgfAAhdQAAhdgWgeQgWgfggAAQggAAgTAbg");
	this.shape.setTransform(-0.175,-0.325);

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
p.nominalBounds = new cjs.Rectangle(-46.5,-31.5,93,63);


(lib.box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AucOdIAA85Ic5AAIAAc5g");
	this.shape.setTransform(0.0155,0.016,0.5407,0.5407);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.box, new cjs.Rectangle(-50,-50,100,100), null);


(lib.atomLabel01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BUQAAgIADgGQAEgMAJgLQAKgKARgPQAbgWAJgMQAKgNAAgMQAAgMgJgIQgIgJgOAAQgOAAgKAJQgIAIgBAQIgUgCQABgYAPgMQAOgMAXAAQAYAAAOANQAOAOAAATQAAALgEAJQgEAKgJAJQgKAMgXASQgRAPgFAGQgGAFgDAGIBSAAIAAAUg");
	this.shape.setTransform(110.35,54.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhEB/IgDgeQAKADAIAAQAKAAAHgDQAFgEAFgGQACgFAIgTIACgHIhHi6IAiAAIAnBsQAIAUAFAWQAFgVAIgVIAohsIAfAAIhHC8QgLAfgGAMQgIAPgLAIQgLAHgPAAQgJAAgLgEg");
	this.shape_1.setTransform(95.25,68.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgwAQIAAgfIBhAAIAAAfg");
	this.shape_2.setTransform(80.1,64.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag2BUQAAgIACgGQAEgMAJgLQAKgKARgPQAagWALgMQAJgNAAgMQAAgMgIgIQgKgJgOAAQgNAAgKAJQgIAIgBAQIgVgCQACgYAPgMQAOgMAXAAQAYAAAOANQAOAOAAATQAAALgEAJQgEAKgKAJQgJAMgXASQgRAPgFAGQgFAFgEAGIBSAAIAAAUg");
	this.shape_3.setTransform(67.35,54.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAxBdIgng6IgKgPIgwBJIgmAAIBEhgIhAhZIApAAIAcArIANAVIANgUIAfgsIAnAAIhBBXIBFBig");
	this.shape_4.setTransform(52.1,64.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhSDtQgmgZgUgrQgVgsAAg6QAAg3ATgtQASguAmgYQAlgYAuAAQAgAAAbAOQAbAOAQAXIAAi5IA/AAIAAIDIg7AAIAAgvQgjA3hEAAQgtAAglgZgAhDgpQgdAjAABJQAABIAeAjQAeAkApAAQApAAAegiQAcgiAAhFQAAhMgdgkQgegkgrAAQgpAAgcAig");
	this.shape_5.setTransform(22.95,49.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AARCMIAAjZQgNAMgSALQgVAMgPAGIAAghQAcgOAVgTQAWgTAIgSIAWAAIAAEXg");
	this.shape_6.setTransform(180.55,59.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhkDCQgrgcgXg2QgXg2AAg8QAAhDAagyQAZgyAwgaQAvgaA4AAQBAAAAsAhQAsAhARA7Ig3ANQgPgvgdgVQgcgVgrAAQgxAAghAXQghAYgOAoQgNAoAAAqQAAA2AQApQAQApAhAUQAiAUAmAAQAwAAAhgbQAhgcAMg2IA5APQgSBGguAkQgvAlhDAAQhEAAgsgcg");
	this.shape_7.setTransform(149.775,47.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhuCoQAAgPAFgNQAJgXASgWQATgWAjgdQA2gsATgZQATgbAAgXQAAgYgRgRQgSgRgcAAQgdAAgRASQgSASgBAfIgqgEQAFgwAcgYQAcgZAvAAQAwAAAcAbQAcAaAAAoQAAAUgIATQgIAUgTAUQgTAWgtAlQgkAfgKAMQgLALgGALICjAAIAAAng");
	this.shape_8.setTransform(170.9729,64.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ah4DoQg0ghgbhBQgchAAAhJQAAhRAfg8QAfg7A5ggQA4geBDAAQBOgBA0AnQA1AoAVBHIhDAQQgSg4gigaQgigag0AAQg6ABgoAcQgoAdgQAwQgRAwAAAzQAABBAUAxQATAwAoAZQApAYAuAAQA5AAAoghQAnghAPhBIBEARQgWBUg3AsQg4AshRAAQhSABg0gjg");
	this.shape_9.setTransform(132.875,50.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABhC7IhNh0IgUggIhhCUIhNAAICJjBIh+i0IBOAAIA6BYIAaAqIAcgpIA/hZIBLAAIiBCwICKDFg");
	this.shape_10.setTransform(88.5,57.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhmD2QgvgUgagpQgcgpgBg0IBAgFQAFAmAQAZQARAYAkAQQAiAPAsAAQAnAAAdgLQAegMAPgUQAPgVAAgYQgBgXgOgSQgOgTgggMQgVgJhGgQQhHgRgcgPQglgTgSgcQgSgdAAgjQAAgnAVgjQAXghAqgSQArgRA0AAQA4AAAsASQAsASAYAkQAXAkABAuIhBAEQgFgxgegZQgfgZg6AAQg+AAgcAYQgcAWgBAgQABAcATARQAUASBTATQBTATAeAOQAtAUAWAgQAVAgAAApQAAApgXAkQgYAlgsAVQgsATg3AAQhGABgvgVg");
	this.shape_11.setTransform(46.25,50.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhLCRQgdgagFgqIAqgGQAHAjARAQQARAPAYAAQAcAAAUgUQAUgUAAgeQAAgcgSgSQgTgTgcAAQgLAAgRAFIAEgjIAHAAQAZAAAVgOQAVgNAAgdQAAgXgPgOQgQgPgXAAQgYAAgQAPQgQAPgEAeIgpgHQAHgqAbgWQAbgXAnAAQAbAAAXAMQAXALAMAVQAMAUAAAXQAAAWgLARQgMASgXALQAeAHAQAUQARAWAAAgQAAAsggAfQggAegwAAQgsAAgdgag");
	this.shape_12.setTransform(171.425,64.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_12}]},1).wait(1));

	// 圖層_1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FF00FF").ss(3,1,1).p("AvnnzIfPAAIAAPnI/PAAg");
	this.shape_13.setTransform(100,50);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,102,0,0.2)").s().p("AvnH0IAAvnIfPAAIAAPng");
	this.shape_14.setTransform(100,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,203,103);


(lib.atomlabel_SPD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhpClQgmgegLg8IA+gKQAGAmAZAUQAXAUAqAAQAsAAAVgRQAVgSAAgYQAAgWgSgMQgNgIg0gNQhEgSgbgMQgbgNgOgWQgOgXAAgbQAAgZALgWQALgVAUgOQAPgLAagHQAZgIAdAAQArAAAiANQAhAMAPAWQAQAWAGAkIg9AIQgFgdgUgQQgUgQglAAQgrAAgSAOQgTAPAAATQAAAMAHAKQAIAKARAHQAJAEAuAMQBDASAbAMQAaAKAPAWQAPAWAAAgQAAAggSAcQgSAcgkAPQgjAPgrAAQhIAAgmgeg");
	this.shape.setTransform(0,0.0375,1.5,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkfEHIAAoEIA5AAIAAAxQAVgdAZgOQAagPAlAAQAvAAAlAZQAlAZARAtQATAtAAA1QAAA5gVAtQgTAugnAYQgoAZgrAAQggAAgZgOQgZgNgQgUIAAC2gAjHiuQgfAmAABIQAABHAdAiQAdAjAqAAQAqAAAegjQAeglAAhJQAAhIgdgjQgegjgoAAQgpAAgfAlgABJCtIAAghICbixIgvABIhiAAIAAggIDGAAIAAAbIidC1QAcgCAYAAIBwAAIAAAjg");
	this.shape_1.setTransform(0.0201,4.01,1.2,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkiEHIAAoEIA5AAIAAAxQAUgdAagOQAagPAkAAQAwAAAlAZQAlAZARAtQATAtAAA1QAAA5gVAtQgUAugmAYQgoAZgrAAQggAAgZgOQgZgNgQgUIAAC2gAjKiuQgfAmAABIQAABHAdAiQAdAjApAAQArAAAegjQAeglAAhJQAAhIgegjQgdgjgoAAQgpAAgfAlgADxCtIg/hgIhABgIgyAAIBZh+IhShzIA0AAIAlA4IARAaIASgaIApg4IAxAAIhTBwIBaCBg");
	this.shape_2.setTransform(0.0397,4.01,1.2,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABaEGIgEgnQANAEAKAAQAOAAAIgFQAIgEAGgIQAEgHAIgYIAEgKIhcjyIAsAAIAzCMQAJAaAIAdQAHgcAKgbIA0iMIApAAIhcD2QgPAogIAPQgLAUgOAJQgPAKgTAAQgMAAgPgFgAkiECIAAoDIA5AAIAAAwQAVgdAZgOQAagOAlAAQAvAAAlAZQAlAZARAsQATAtAAA1QAAA6gVAtQgTAugnAYQgoAZgrgBQggAAgZgNQgZgOgQgUIAAC2gAjKiyQgfAlAABJQAABHAdAiQAdAjAqgBQAqABAegkQAegkAAhKQAAhHgdgkQgegjgoAAQgpAAgfAmg");
	this.shape_3.setTransform(0.0597,4.05,1.2,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Aj9DuQgmgagUgrQgVgtAAg5QAAg3ASgtQATguAlgYQAmgYAugBQAhAAAbAPQAaAOARAXIAAi5IA/AAIAAIDIg7AAIAAgwQgkA4hEAAQgtAAglgYgAjvgoQgcAiAABJQAABIAeAkQAeAjAqAAQApAAAdgiQAdgiAAhFQAAhMgegkQgdgkgrAAQgqAAgdAjgAAqDxIAAgZIB3iJIgkABIhMAAIAAgZICZAAIAAAVIh5CMIAogCIBXAAIAAAbgADeCAQAAgIADgHQAEgLAJgLQAKgLARgOQAbgXAKgNQAKgNAAgMQAAgLgJgIQgJgIgOAAQgPAAgJAIQgJAJAAAPIgVgCQACgXAPgMQAOgNAYAAQAYAAAOANQAOAOAAATQAAAKgEAJQgEAKgKALQgJALgXATQgSAPgFAFQgGAGgDAFIBSAAIAAAVg");
	this.shape_4.setTransform(0.025,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkbDuQgmgZgUgsQgVgtAAg5QAAg4ASgsQAUguAkgYQAmgZAuAAQAiAAAaAPQAaAOARAXIAAi5IA/AAIAAICIg7AAIAAgvQgjA4hFAAQgtAAglgYgAkNgoQgcAiAABJQAABIAfAkQAdAjAqAAQApAAAdgiQAdgiAAhGQAAhLgegkQgdgkgrAAQgqAAgdAjgADFDxIAAgZIB4iJIgkABIhNAAIAAgZICZAAIAAAVIh4CMIAngCIBXAAIAAAbgACVDxIgwhJIgyBJIgmAAIBEhhIg/hZIAoAAIAcArIANAWIAOgVIAggsIAmAAIhABXIBFBjg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAhEeIgDgeQAJADAJAAQAKAAAHgEQAFgDAFgHQACgEAIgTIACgIIhHi7IAiAAIAnBsQAIAVAGAWQAFgVAIgVIAohtIAfAAIhHC+QgLAfgHALQgIAQgLAHQgLAIgPAAQgJAAgLgEgAkbDSQgmgZgUgsQgVgsAAg6QAAg2ASguQAUguAkgYQAmgYAuAAQAiAAAaAOQAaAOARAXIAAi5IA/AAIAAIDIg7AAIAAgvQgjA3hFAAQgtAAglgYgAkNhEQgcAiAABJQAABIAfAkQAdAjAqAAQApAAAdgiQAdgiAAhFQAAhMgegkQgdgkgrAAQgqAAgdAjgADFDWIAAgaIB4iIIgkABIhNAAIAAgaICZAAIAAAVIh4CMIAngBIBXAAIAAAbg");
	this.shape_6.setTransform(0,0.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AEAEkIgEgeQAJADAHAAQAJAAAGgEQAFgDADgHIAJgXIACgIIg9i7IAdAAIAiBsQAGAVAFAWQAFgVAHgVIAihtIAbAAIg8C+QgKAfgGALQgIAQgJAHQgJAIgNAAQgIAAgJgEgAmdDMQglgZgUgsQgWgsABg6QAAg2ASguQATguAlgYQAmgYAtAAQAiAAAbAOQAaAOARAXIAAi5IA/AAIAAIDIg8AAIAAgvQgjA3hFAAQgsAAgmgYgAmOhKQgdAiABBJQgBBIAfAkQAeAjApAAQApAAAegiQAdgigBhFQABhMgegkQgegkgqAAQgqAAgdAjgAgNDcIgqhKIgqBKIghAAIA6hhIg2haIAiAAIAZAsIALAVIAMgVIAbgsIAgAAIg2BYIA6BjgACPCOIAAgfIBTAAIAAAfgAGNBqQAAgIACgHQADgLAJgLQAIgLAPgOQAXgXAIgNQAJgMAAgLQAAgNgIgIQgHgIgMAAQgNAAgIAIQgHAJAAAQIgSgCQABgYAMgMQANgMAUAAQAVAAAMANQAMANAAAUQAAAKgDAJQgEAKgIAKQgIALgUATIgUAVIgIALIBIAAIAAAUgAAbBqQAAgIADgHQADgLAIgLQAIgLAPgOQAYgXAIgNQAIgMAAgLQAAgNgHgIQgIgIgMAAQgNAAgHAIQgIAJAAAQIgSgCQACgYAMgMQAMgMAVAAQAUAAAMANQANANAAAUQgBAKgDAJQgEAKgIAKQgIALgUATIgTAVIgIALIBHAAIAAAUg");
	this.shape_7.setTransform(-6.5,0.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ADTEeIgEgeQAKADAIAAQALAAAGgEQAGgDAEgHQADgEAHgTIADgIIhHi7IAiAAIAnBsQAIAVAGAWQAFgVAIgVIAnhtIAgAAIhHC+QgLAfgHALQgIAQgLAHQgLAIgPAAQgJAAgLgEgAkdDSQgmgZgUgsQgVgsAAg6QAAg2ASguQATguAlgYQAmgYAuAAQAhAAAbAOQAaAOARAXIAAi5IA/AAIAAIDIg7AAIAAgvQgkA3hEAAQgtAAglgYgAkPhEQgcAiAABJQAABIAeAkQAeAjAqAAQApAAAdgiQAdgiAAhFQAAhMgegkQgdgkgrAAQgqAAgdAjgACTDWIgxhKIgxBKIgmAAIBEhhIg/haIAoAAIAcAsIANAVIAOgVIAggsIAmAAIhBBYIBGBjg");
	this.shape_8.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).wait(1));

	// 圖層_3
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AjoBxIBegPQAIA5AlAeQAjAeBBAAQBBAAAggbQAfgaAAglQAAgfgbgTQgUgNhNgTQhogbgogSQgpgTgUgiQgWgjAAgoQAAgmASggQARgfAdgWQAWgQAngLQAmgMArAAQBCAAAyATQAyATAYAhQAXAgAJA2IhcANQgHgrgegYQgfgZg3AAQhBAAgcAWQgcAVAAAeQAAASAMAPQAMAPAYAKQAPAFBFATQBkAbAoARQAoARAWAgQAXAhAAAxQAAAvgbAqQgcAqg0AYQg1AWhBAAQhtAAg5guQg6gtgQhZg");
	this.shape_9.setTransform(0,0.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AieD3Qg5gtgQhZIBdgPQAIA5AlAeQAkAeBAAAQBBAAAfgbQAggaAAglQAAgfgcgUQgTgMhNgTQhogbgogRQgogUgVgiQgVgigBgpQAAgmASgfQARggAdgWQAXgQAmgLQAmgMArAAQBBAAAzAUQAxASAYAhQAXAhAJA1IhbANQgIgrgdgYQgfgZg3AAQhBAAgbAWQgcAWAAAdQAAASALAPQAMAPAYALQAPAEBEATQBlAbAoARQAoARAWAgQAWAhAAAxQAAAvgbAqQgbAqg1AXQg0AXhCAAQhsAAg5gug");
	this.shape_10.setTransform(0,0.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AlZE7IAAprIBFAAIAAA6QAZgiAegRQAggRArAAQA5AAAtAeQAsAdAVA2QAWA2AABAQAABFgZA2QgXA3gvAdQgvAeg0AAQgmAAgegQQgegRgUgYIAADagABYDQIAAgoIC5jUQgfABgYAAIh3AAIAAgoIDuAAIAAAhIi8DaQAhgDAdAAICHAAIAAArgAkUhNQAABVAjAqQAjApAyAAQAzAAAkgqQAkgsAAhZQAAhVgkgrQgjgqgxAAQgwAAgmAtQglAtAABXg");
	this.shape_11.setTransform(0.025,4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AlZE7IAAprIBFAAIAAA7QAZgjAegQQAggSArAAQA5AAAtAeQAsAeAVA2QAWA1AABAQAABFgZA2QgXA3gvAdQgvAdg0ABQgmgBgegQQgegQgUgYIAADagAjvjRQglAtAABXQAABVAjAqQAjApAyAAQAzAAAkgrQAkgrAAhYQAAhWgkgrQgjgqgxAAQgwAAgmAtgABYDQIAAgoIC5jUIg3ABIh3AAIAAgnIDuAAIAAAgIi8DaQAhgDAdAAICHAAIAAArg");
	this.shape_12.setTransform(0.025,4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AldE7IAAprIBFAAIAAA6QAZgiAegRQAfgRAsAAQA5AAAtAeQArAdAWA2QAWA2AABAQAABFgYA2QgYA3gvAdQgwAegzAAQgnAAgegQQgegRgTgYIAADagABODQIBqiXIhjiMIA+AAIAtBFQAMASAIAOQAMgSAKgOIAxhFIA7AAIhkCJIBsCaIg9AAIhLhzIhNBzgAkYhNQAABVAjAqQAjApAxAAQAzAAAkgqQAkgsAAhZQAAhVgjgrQgjgqgxAAQgxAAglAtQglAtAABXg");
	this.shape_13.setTransform(0,4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AldE7IAAprIBFAAIAAA7QAZgjAegQQAggSAsAAQA4AAAtAeQArAeAWA2QAWA1AABAQAABFgZA2QgXA3gvAdQgwAdgzABQgmgBgegQQgfgQgTgYIAADagAjzjRQglAtAABXQAABVAjAqQAjApAyAAQAzAAAjgrQAlgrgBhYQAAhWgjgrQgjgqgxAAQgwAAgmAtgAEhDQIhMhzIhMBzIg8AAIBriYIhjiKIA+AAIAtBDIAUAhIAWggIAxhEIA7AAIhkCIIBsCag");
	this.shape_14.setTransform(0,4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AldE2IAAprIBFAAIAAA6QAZgiAegRQAfgSAsAAQA5AAAtAeQArAeAWA2QAWA2AAA/QAABGgZA2QgXA3gvAdQgwAdgzAAQgnAAgegQQgegQgTgYIAADagABsE7IgFgvQAQAFAMAAQAQAAALgGQAJgFAGgKQAFgIAKgdQACgEADgIIhukjIA1AAIA9CoQALAgAKAjQAIgiAMggIA+ipIAyAAIhwEnQgRAwgKASQgNAZgRALQgSAMgXAAQgPAAgRgGgAkYhSQAABVAjAqQAjApAxAAQAzAAAkgrQAkgrAAhZQAAhVgjgrQgjgrgxAAQgxAAglAuQglAtAABXg");
	this.shape_15.setTransform(0.05,4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ABsE7IgGgvQARAFAMgBQAQABALgGQAJgFAGgKQAGgIAJgdIAEgMIhukjIA1AAIA+CoQAKAgAKAjQAJgiALggIA/ipIAyAAIhvEnQgTAwgKASQgNAZgRALQgQAMgYAAQgPgBgRgFgAldE1IAApqIBGAAIAAA6QAYgiAegRQAfgSAsAAQA6AAAsAfQAsAdAVA2QAWA1AABAQAABFgYA3QgYA2gvAeQgvAdg0AAQgnAAgegQQgdgQgUgYIAADZgAjzjXQglAuABBXQAABVAiAqQAjApAxAAQAzAAAlgrQAjgrABhZQgBhVgigrQgkgrgwAAQgxABgmAsg");
	this.shape_16.setTransform(0.05,4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AFNBsIAAAUIhvAAQAAgIADgHQAEgLAJgLQAKgLARgOQAbgXAKgNQAKgNAAgLQAAgMgJgIQgJgJgOAAQgPAAgJAJQgJAJAAAPIgVgCQACgXAPgMQAOgNAYAAQAYAAAOANQAOAOAAATQAAAKgEAKQgEAKgKAKQgJALgXATQgSAPgFAGQgGAFgDAGgAAqDyIAAgaIB3iIQgUABgQAAIhMAAIAAgaICZAAIAAAVIh5CMQAWgBASAAIBXAAIAAAbgAkLBDQAABIAeAkQAeAjAqAAQApAAAdgiQAdgiAAhFQAAhMgegkQgdgkgrAAQgqAAgdAiQgcAjAABJgAhDD+IAAgvQgkA3hEAAQgtAAglgYQgmgZgUgsQgVgsAAg6QAAg3ASgtQATguAlgYQAmgZAuAAQAhAAAbAPQAaAOARAXIAAi5IA/AAIAAIDg");
	this.shape_17.setTransform(0.025,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Aj9DuQgmgagUgrQgVgtAAg5QAAg3ASgtQATguAlgYQAmgYAugBQAhAAAbAPQAaAOARAXIAAi5IA/AAIAAIDIg7AAIAAgwQgkA4hEAAQgtAAglgYgAjvgoQgcAiAABJQAABIAeAkQAeAjAqAAQApAAAdgiQAdgiAAhFQAAhMgegkQgdgkgrAAQgqAAgdAjgAAqDxIAAgZIB3iJIgkABIhMAAIAAgZICZAAIAAAVIh5CMIAogCIBXAAIAAAbgADeCAQAAgIADgHQAEgLAJgLQAKgLARgOQAbgXAKgNQAKgNAAgMQAAgLgJgIQgJgIgOAAQgPAAgJAIQgJAJAAAPIgVgCQACgXAPgMQAOgNAYAAQAYAAAOANQAOAOAAATQAAAKgEAJQgEAKgKALQgJALgXATQgSAPgFAFQgGAGgDAFIBSAAIAAAVg");
	this.shape_18.setTransform(0.025,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AkpBDQAABIAeAkQAeAjAqAAQApAAAdgiQAdgiAAhFQAAhMgegkQgdgkgrAAQgqAAgdAiQgcAjAABJgAhhD+IAAgvQgkA3hEAAQgtAAglgYQgmgZgUgsQgVgsAAg6QAAg3ASgtQATguAlgYQAmgZAuAAQAhAAAbAPQAaAOARAXIAAi5IA/AAIAAIDgADGDyIAAgaIB3iIQgVABgPAAIhMAAIAAgaICYAAIAAAVIh4CMQAVgBATAAIBWAAIAAAbgAANDyIBFhhIhAhaIAoAAIAdAsQAIAMAFAJQAHgMAHgJIAfgsIAmAAIhABYIBFBjIgnAAIgwhKIgxBKg");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AkbDuQgmgagUgrQgVgtAAg5QAAg3ASgtQAUguAkgYQAmgYAugBQAiAAAaAPQAaAOARAXIAAi5IA/AAIAAIDIg7AAIAAgwQgkA4hEAAQgtAAglgYgAkMgoQgdAiAABJQAABIAfAkQAdAjAqAAQApAAAegiQAcgiAAhFQAAhMgegkQgdgkgrAAQgqAAgcAjgADFDxIAAgZIB4iJIgkABIhNAAIAAgZICZAAIAAAVIh4CMIAngCIBXAAIAAAbgACVDxIgwhJIgyBJIgmAAIBFhgIhAhaIAoAAIAcArIAOAWIANgVIAggsIAmAAIhABXIBFBjg");

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AkpAnQAABIAeAkQAeAjAqAAQApAAAdgiQAdgiAAhFQAAhMgegkQgdgkgrAAQgqAAgdAjQgcAiAABJgAhhDiIAAgvQgkA3hEAAQgtAAglgYQgmgZgUgsQgVgsAAg6QAAg2ASguQATguAlgYQAmgYAuAAQAhAAAbAOQAaAOARAXIAAi5IA/AAIAAIDgADGDWIAAgaIB3iIQgVABgPAAIhMAAIAAgaICYAAIAAAVIh4CMQAVgBATAAIBWAAIAAAbgAAhEeIgDgeQAKADAIAAQAKAAAHgEQAGgDAEgHQADgEAHgTQAAgDACgFIhGi7IAiAAIAnBsQAHAVAGAWQAFgVAIgVIAohtIAgAAIhHC+QgMAfgGALQgJAQgLAHQgKAIgQAAQgJAAgLgEg");
	this.shape_21.setTransform(0,0.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAhEeIgDgeQAKADAIAAQAKAAAHgEQAFgDAFgHQACgEAIgTIACgIIhHi7IAiAAIAnBsQAIAVAGAWQAFgVAIgVIAohtIAfAAIhHC+QgLAfgHALQgIAQgLAHQgLAIgPAAQgJAAgLgEgAkbDSQgmgZgUgsQgVgsAAg6QAAg2ASguQAUguAkgYQAmgYAuAAQAiAAAaAOQAaAOARAXIAAi5IA/AAIAAIDIg7AAIAAgvQgkA3hEAAQgtAAglgYgAkMhEQgdAiAABJQAABIAfAkQAdAjAqAAQApAAAegiQAcgiAAhFQAAhMgegkQgdgkgrAAQgqAAgcAjgADFDWIAAgaIB4iIIgkABIhNAAIAAgaICZAAIAAAVIh4CMIAngBIBXAAIAAAbg");
	this.shape_22.setTransform(0,0.025);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AjjDcIAAgvQgjA3hFAAQgtAAglgYQgmgZgUgsQgVgsAAg6QAAg2ATguQATguAlgYQAlgYAuAAQAiAAAaAOQAbAOAQAXIAAi5IA/AAIAAIDgAB7BWIAAAUIhfAAQAAgIACgHQADgLAIgLQAIgLAQgOQAXgXAIgNQAIgMAAgLQAAgNgHgIQgIgIgMAAQgMAAgIAIQgIAJAAAQIgSgCQACgYAMgMQAMgMAVAAQAUAAAMANQANANAAAUQAAAKgEAJQgDAKgJAKQgIALgTATQgQAPgEAGQgFAFgDAGgAmrAhQAABIAfAkQAeAjApAAQApAAAegiQAcgiAAhFQAAhMgdgkQgegkgrAAQgqAAgcAjQgdAiAABJgAHtBWIAAAUIhgAAQAAgIACgHQAEgLAIgLQAIgLAPgOQAXgXAJgNQAIgMAAgLQAAgNgHgIQgIgIgMAAQgNAAgIAIQgHAJAAAQIgSgCQABgYANgMQAMgMAUAAQAVAAAMANQAMANAAAUQAAAKgDAJQgEAKgIAKQgIALgTATQgQAPgFAGQgEAFgDAGgAEAEkIgDgeQAIADAHAAQAJAAAGgEQAFgDADgHQADgEAGgTQAAgDACgFIg8i7IAdAAIAhBsQAHAVAFAWQAEgVAHgVIAihtIAcAAIg9C+QgKAfgGALQgHAQgKAHQgJAIgNAAQgIAAgJgEgACPCOIAAgfIBUAAIAAAfgAiDDcIA7hhIg2haIAiAAIAZAsQAHAMAEAJQAGgMAGgJIAbgsIAgAAIg3BYIA7BjIghAAIgphKIgqBKg");
	this.shape_23.setTransform(-6.5,0.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AEAEkIgEgeQAJADAHAAQAJAAAGgEQAFgDADgHIAJgXIACgIIg9i7IAdAAIAiBsQAGAVAFAWQAFgVAHgVIAihtIAbAAIg8C+QgKAfgGALQgIAQgJAHQgJAIgNAAQgIAAgJgEgAmdDMQglgZgUgsQgWgsABg6QAAg2ASguQATguAlgYQAmgYAtAAQAiAAAbAOQAaAOARAXIAAi5IA/AAIAAIDIg8AAIAAgvQgjA3hFAAQgsAAgmgYgAmOhKQgdAiABBJQgBBIAfAkQAeAjApAAQApAAAegiQAdgigBhFQABhMgegkQgegkgqAAQgqAAgdAjgAgNDcIgqhKIgqBKIghAAIA6hhIg2haIAiAAIAZAsIALAVIAMgVIAbgsIAgAAIg2BYIA6BjgACPCOIAAgfIBTAAIAAAfgAGNBqQAAgIACgHQADgLAJgLQAIgLAPgOQAXgXAIgNQAJgMAAgLQAAgNgIgIQgHgIgMAAQgNAAgIAIQgHAJAAAQIgSgCQABgYAMgMQANgMAUAAQAVAAAMANQAMANAAAUQAAAKgDAJQgEAKgIAKQgIALgUATIgUAVIgIALIBIAAIAAAUgAAbBqQAAgIADgHQADgLAIgLQAIgLAPgOQAYgXAIgNQAIgMAAgLQAAgNgHgIQgIgIgMAAQgNAAgHAIQgIAJAAAQIgSgCQACgYAMgMQAMgMAVAAQAUAAAMANQANANAAAUQgBAKgDAJQgEAKgIAKQgIALgUATIgTAVIgIALIBHAAIAAAUg");
	this.shape_24.setTransform(-6.5,0.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AkrAnQAABIAeAkQAeAjAqAAQApAAAdgiQAdgiAAhFQAAhMgegkQgdgkgrAAQgqAAgdAjQgcAiAABJgAhjDiIAAgvQgkA3hEAAQgtAAglgYQgmgZgUgsQgVgsAAg6QAAg2ASguQATguAlgYQAmgYAuAAQAhAAAbAOQAaAOARAXIAAi5IA/AAIAAIDgADTEeIgEgeQAKADAIAAQALAAAGgEQAGgDAEgHQADgEAHgTQABgDACgFIhHi7IAiAAIAnBsQAIAVAGAWQAFgVAIgVIAnhtIAgAAIhHC+QgLAfgHALQgIAQgLAHQgLAIgPAAQgJAAgLgEgAALDWIBEhhIg/haIAoAAIAcAsQAIAMAFAJQAIgMAGgJIAggsIAmAAIhBBYIBGBjIgnAAIgxhKIgxBKg");
	this.shape_25.setTransform(0.025,0.025);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("ADTEeIgEgeQAKADAIAAQALAAAGgEQAGgDAEgHQADgEAHgTIADgIIhHi7IAiAAIAnBsQAIAVAGAWQAFgVAIgVIAnhtIAgAAIhHC+QgLAfgHALQgIAQgLAHQgLAIgPAAQgJAAgLgEgAkdDSQgmgZgUgsQgVgsAAg6QAAg2ASguQATguAlgYQAmgYAuAAQAhAAAbAOQAaAOARAXIAAi5IA/AAIAAIDIg7AAIAAgvQgkA3hEAAQgtAAglgYgAkPhEQgcAiAABJQAABIAeAkQAeAjAqAAQApAAAdgiQAdgiAAhFQAAhMgegkQgdgkgrAAQgqAAgdAjgACTDWIgxhKIgxBKIgmAAIBEhhIg/haIAoAAIAcAsIANAVIAOgVIAggsIAmAAIhBBYIBGBjg");
	this.shape_26.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.2,-31.7,103.5,70.3);


(lib.atomlabel_Npn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYCOIAAh2Ih1AAIAAgwIB1AAIAAh1IAxAAIAAB1IB1AAIAAAwIh1AAIAAB2g");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiNAZIAAgxIEbAAIAAAxg");
	this.shape_1.setTransform(0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// 圖層_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(10,1,1).p("AgYCOIAAh1Ih1AAIAAgxIB1AAIAAh1IAxAAIAAB1IB1AAIAAAxIh1AAIAAB1g");
	this.shape_2.setTransform(0.025,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYCOIAAh2Ih1AAIAAgwIB1AAIAAh1IAxAAIAAB1IB1AAIAAAwIh1AAIAAB2g");
	this.shape_3.setTransform(0.025,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(10,1,1).p("ACOAZIkbAAIAAgxIEbAAg");
	this.shape_4.setTransform(0.025,-0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiNAZIAAgxIEbAAIAAAxg");
	this.shape_5.setTransform(0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.1,-19.2,38.3,38.4);


(lib.atomlabel_N09 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhfCLQghg4AAhQQAAhDAVgxQAVgxAigYQAagTAbAAQAuAAAkAuQAuA6AABjQgBBEgTAwQgUAxgfAWQgfAVgcAAQg4AAgmhDgAghioQgWAYgIA0QgHA1AAAxQAABSAVA0QAQAsAhAAQAPAAARgOQARgPAJghQANgyAAhbQAAhEgOgtQgKgigRgOQgMgKgRAAQgTAAgPASg");
	this.shape.setTransform(0,0.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhGDLIAAgLQAcgBAIgEQAIgEADgHQAEgIAAgjIAAjWQAAgrgDgMQgCgKgGgEQgFgFgIAAQgLAAgTAKIgEgKIBfgvIAKAAIAAFPQAAAhADAIQACAJAJAEQAJAEAbABIAAALg");
	this.shape_1.setTransform(-0.125,-0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiCDLIAAgLQBnheApg8QArg7gBgxQAAgmgWgZQgYgYgfAAQgdAAgXARQgYARgLAhIgKAAQAGg2AfgdQAegdAtAAQAwAAAgAfQAhAfAAArQAAAegPAeQgVAugxA1QhHBQgTARIBnAAQAgAAANgDQAMgCAKgHQALgIAHgNIALAAIgcBNg");
	this.shape_2.setTransform(-0.6,-0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhhDEQgPgKAAgLQAAgJAHgGQAHgGAKAAQAHAAAHACQAFABASAKQASAJAGACQALADAMAAQAdAAAXgXQAWgXAAggQAAgXgLgWQgHgRgJgIQgNgMgWgJQgVgKgXAAIgJAAIAAgIQAXgDAWgNQAYgOAKgUQALgTAAgXQAAgegTgTQgTgSgbAAQguAAgeAwIgKgEQARgpAagVQAagWAmAAQAvAAAaAfQATAXAAAaQAAAsg2AuQAkAOATAaQATAbAAAkQAAAzghAmQgrAxhQAAQgoAAgOgKg");
	this.shape_3.setTransform(-1.275,0.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAhDLIAAhpIinAAIAAgmIC3kGIAhAAIAAECIA1AAIAAAqIg1AAIAABpgAhpA4ICKAAIAAjEg");
	this.shape_4.setTransform(-0.575,-0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhjC+QgQgMAAgPQAAgIAHgGQAGgGALAAQAHAAAHACQAFACAOAKQAWAPAXAAQAhAAAZgaQAagaAAglQAAgkgWgfQgYgegngRQghgOg3gCIBMiaICOAAIgXAyIh3AAIgZA1QBMAMAtAuQAoAoAAA1QAAAfgNAbQgNAagTATQgTATgYALQghAQgkAAQgjAAgRgMg");
	this.shape_5.setTransform(-0.55,0.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhFCzQg3g0gBhUQAAg0AWgwQAVgwAoglQAoglAjgNQAkgNAfAAIARAAIAAALQgmADgZAMQgYAMgYAXQgXAYgQAdQgPAdgLAoQAqgdAqAAQApAAAeAhQAdAgAAA0QAAAxgeApQgkAyg7AAQgoAAgdgbgAgagUQgNAEgZAQQgFAmAAAZQAAAcALAhQAJAhAVATQAPAOAUAAQAaAAAUgYQAUgYAAgtQAAgygUgkQgTgkgkAAQgLAAgNAFg");
	this.shape_6.setTransform(0.15,0.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnDLIB2llIhsAAQgiAAgNAIQgZAOgPAcIgJgDIAnhfIDTAAIAAAMIiDGJg");
	this.shape_7.setTransform(-0.2,0.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhYCrQgZgdAAghQAAgbARgZQASgaArgfQgvgngNgXQgPgXAAgaQAAgmAfgcQAdgcAyAAQAvAAAdAaQAdAaAAAhQAAAXgPAXQgQAXgyAfQA0AnAQAXQAWAeAAAhQAAAqgfAeQghAdgzAAQg4AAgfgjgAg5A3QgMAYAAAcQAAAmAVAXQAVAWAeAAQAgAAATgRQATgSAAgaQAAgVgLgRQgVgfg+gyQgYAVgMAYgAgwirQgTARAAAXQAAAQAIAPQAIAPAOAOIAvAoQAkggAJgSQAJgSAAgYQAAgegRgSQgRgRgeAAQgeAAgSARg");
	this.shape_8.setTransform(0.1,0.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ah0DPIAAgLQAmAAAhgRQAhgSAdgrQAfgqAMg0QguAegkAAQgqAAgeggQgeggAAg1QAAg0AegpQAkgyA6AAQAwAAAjApQAqAyAABJQAABCggA5QghA5g6AmQguAfg3AAgAg0ijQgUAXAAAuQAAA+AaAiQATAZAbAAQAOAAASgGQASgHAPgLQAFglAAgXQAAgdgKggQgKgigRgRQgSgSgWAAQgaAAgTAYg");
	this.shape_9.setTransform(-0.125,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	// 圖層_4
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(10,1,1).p("AiAADQAAhDAVgxQAUgxAigYQAbgTAbAAQAuAAAkAuQAuA6AABjQAABEgUAwQgUAxgfAWQgfAVgcAAQg5AAgmhDQggg4AAhQgAhGAKQAABSAUA0QARAsAhAAQAPAAARgOQARgPAJghQANgyAAhbQAAhEgOgtQgKgigRgOQgMgKgRAAQgTAAgQASQgVAYgIA0QgHA1AAAxg");
	this.shape_10.setTransform(0,0.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhfCLQghg4AAhQQAAhDAVgxQAVgxAigYQAagTAbAAQAuAAAkAuQAuA6AABjQgBBEgTAwQgUAxgfAWQgfAVgcAAQg4AAgmhDgAghioQgWAYgIA0QgHA1AAAxQAABSAVA0QAQAsAhAAQAPAAARgOQARgPAJghQANgyAAhbQAAhEgOgtQgKgigRgOQgMgKgRAAQgTAAgPASg");
	this.shape_11.setTransform(0,0.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(10,1,1).p("AhNibIBfgvIAKAAIAAFPQAAAhADAIQACAJAJAEQAJAEAbABIAAALIiUAAIAAgLQAcgBAIgEQAIgEADgHQAEgIAAgjIAAjWQAAgrgDgMQgCgKgGgEQgFgFgIAAQgLAAgTAKg");
	this.shape_12.setTransform(-0.125,-0.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhGDLIAAgLQAcgBAIgEQAIgEADgHQAEgIAAgjIAAjWQAAgrgDgMQgCgKgGgEQgFgFgIAAQgLAAgTAKIgEgKIBfgvIAKAAIAAFPQAAAhADAIQACAJAJAEQAJAEAbABIAAALg");
	this.shape_13.setTransform(-0.125,-0.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(10,1,1).p("ACDB+IgbBNIjqAAIAAgLQBnheApg8QAqg7AAgxQAAgmgWgZQgYgYgfAAQgdAAgYARQgXARgLAhIgLAAQAHg2AfgdQAegdAtAAQAwAAAhAfQAgAfAAArQAAAegOAeQgWAugxA1QhIBQgSARIBnAAQAgAAANgDQAMgCALgHQAKgIAHgNg");
	this.shape_14.setTransform(-0.6,-0.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AiCDLIAAgLQBnheApg8QArg7gBgxQAAgmgWgZQgYgYgfAAQgdAAgXARQgYARgLAhIgKAAQAGg2AfgdQAegdAtAAQAwAAAgAfQAhAfAAArQAAAegPAeQgVAugxA1QhHBQgTARIBnAAQAgAAANgDQAMgCAKgHQALgIAHgNIALAAIgcBNg");
	this.shape_15.setTransform(-0.6,-0.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(10,1,1).p("Ahqh5QARgpAagVQAagWAmAAQAvAAAaAfQATAXAAAaQAAAsg2AuQAkAOATAaQATAbAAAkQAAAzghAmQgrAxhQAAQgoAAgOgKQgPgKAAgLQAAgJAHgGQAHgGAKAAQAHAAAHACQAFABASAKQASAJAGACQALADAMAAQAdAAAXgXQAWgXAAggQAAgXgLgWQgHgRgJgIQgNgMgWgJQgVgKgXAAIgJAAIAAgIQAXgDAWgNQAYgOAKgUQALgTAAgXQAAgegTgTQgTgSgbAAQguAAgeAwg");
	this.shape_16.setTransform(-1.275,0.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhhDEQgPgKAAgLQAAgJAHgGQAHgGAKAAQAHAAAHACQAFABASAKQASAJAGACQALADAMAAQAdAAAXgXQAWgXAAggQAAgXgLgWQgHgRgJgIQgNgMgWgJQgVgKgXAAIgJAAIAAgIQAXgDAWgNQAYgOAKgUQALgTAAgXQAAgegTgTQgTgSgbAAQguAAgeAwIgKgEQARgpAagVQAagWAmAAQAvAAAaAfQATAXAAAaQAAAsg2AuQAkAOATAaQATAbAAAkQAAAzghAmQgrAxhQAAQgoAAgOgKg");
	this.shape_17.setTransform(-1.275,0.325);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(10,1,1).p("ACHA4IAAAqIg1AAIAABpIgxAAIAAhpIinAAIAAgmIC3kGIAhAAIAAECgAAhA4IAAjEIiKDEg");
	this.shape_18.setTransform(-0.575,-0.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAhDLIAAhpIinAAIAAgmIC3kGIAhAAIAAECIA1AAIAAAqIg1AAIAABpgAhpA4ICKAAIAAjEg");
	this.shape_19.setTransform(-0.575,-0.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(10,1,1).p("AB0jJIgXAyIh3AAIgaA1QBNAMAtAuQAoAoAAA1QAAAfgNAbQgNAagTATQgUATgYALQggAQgkAAQgkAAgQgMQgQgMAAgPQAAgIAHgGQAGgGALAAQAHAAAGACQAGACAOAKQAVAPAXAAQAhAAAagaQAagaAAglQAAgkgXgfQgXgegogRQgggOg3gCIBMiag");
	this.shape_20.setTransform(-0.55,0.725);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhjC+QgQgMAAgPQAAgIAHgGQAGgGALAAQAHAAAHACQAFACAOAKQAWAPAXAAQAhAAAZgaQAagaAAglQAAgkgWgfQgYgegngRQghgOg3gCIBMiaICOAAIgXAyIh3AAIgZA1QBMAMAtAuQAoAoAAA1QAAAfgNAbQgNAagTATQgTATgYALQghAQgkAAQgjAAgRgMg");
	this.shape_21.setTransform(-0.55,0.725);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(10,1,1).p("AB2jNIAAALQgnADgZAMQgYAMgYAXQgXAYgQAdQgQAdgKAoQAqgdAqAAQApAAAdAhQAeAgAAA0QAAAxgeApQgkAyg7AAQgpAAgcgbQg4g0AAhUQAAg0AVgwQAWgwAoglQAnglAkgNQAkgNAfAAgAhAAAQgFAmAAAZQAAAcAKAhQAKAhAVATQAPAOAUAAQAaAAAVgYQATgYAAgtQAAgygTgkQgUgkglAAQgLAAgMAFQgNAEgZAQg");
	this.shape_22.setTransform(0.15,0.325);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhFCzQg3g0gBhUQAAg0AWgwQAVgwAoglQAoglAjgNQAkgNAfAAIARAAIAAALQgmADgZAMQgYAMgYAXQgXAYgQAdQgPAdgLAoQAqgdAqAAQApAAAeAhQAdAgAAA0QAAAxgeApQgkAyg7AAQgoAAgdgbgAgagUQgNAEgZAQQgFAmAAAZQAAAcALAhQAJAhAVATQAPAOAUAAQAaAAAUgYQAUgYAAgtQAAgygUgkQgTgkgkAAQgLAAgNAFg");
	this.shape_23.setTransform(0.15,0.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(10,1,1).p("AhXjKIDUAAIAAAMIiDGJIghAAIB2llIhtAAQghAAgOAIQgZAOgOAcIgJgDg");
	this.shape_24.setTransform(-0.2,0.775);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgnDLIB2llIhsAAQgiAAgNAIQgZAOgPAcIgJgDIAnhfIDTAAIAAAMIiDGJg");
	this.shape_25.setTransform(-0.2,0.775);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(10,1,1).p("AgjAAQgvgngOgXQgNgXAAgaQAAgmAdgcQAegcAyAAQAvAAAeAaQAdAaAAAhQAAAXgQAXQgQAXgyAfQA0AnAQAXQAXAeAAAhQAAAqggAeQggAdgzAAQg5AAgggjQgZgdAAghQAAgbASgZQASgaArgfgAAKgfQAkggAJgSQAJgSAAgYQAAgegRgSQgRgRgeAAQgeAAgSARQgTARAAAXQAAAQAIAPQAHAPAPAOgAgVAKQgYAVgMAYQgMAYAAAcQAAAmAVAXQAVAWAfAAQAfAAATgRQATgSAAgaQAAgVgLgRQgVgfg+gyg");
	this.shape_26.setTransform(0.1,0.325);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhYCrQgZgdAAghQAAgbARgZQASgaArgfQgvgngNgXQgPgXAAgaQAAgmAfgcQAdgcAyAAQAvAAAdAaQAdAaAAAhQAAAXgPAXQgQAXgyAfQA0AnAQAXQAWAeAAAhQAAAqgfAeQghAdgzAAQg4AAgfgjgAg5A3QgMAYAAAcQAAAmAVAXQAVAWAeAAQAgAAATgRQATgSAAgaQAAgVgLgRQgVgfg+gyQgYAVgMAYgAgwirQgTARAAAXQAAAQAIAPQAIAPAOAOIAvAoQAkggAJgSQAJgSAAgYQAAgegRgSQgRgRgeAAQgeAAgSARg");
	this.shape_27.setTransform(0.1,0.325);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(10,1,1).p("Ah0DPIAAgLQAmAAAhgRQAhgSAdgrQAfgqAMg0QguAegkAAQgqAAgeggQgeggAAg1QAAg0AegpQAkgyA6AAQAwAAAjApQAqAyAABJQAABCggA5QghA5g6AmQguAfg3AAgABBADQAFglAAgXQAAgdgKggQgKgigRgRQgSgSgWAAQgaAAgTAYQgUAXAAAuQAAA+AaAiQATAZAbAAQAOAAASgGQASgHAPgLg");
	this.shape_28.setTransform(-0.125,0.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ah0DPIAAgLQAmAAAhgRQAhgSAdgrQAfgqAMg0QguAegkAAQgqAAgeggQgeggAAg1QAAg0AegpQAkgyA6AAQAwAAAjApQAqAyAABJQAABCggA5QghA5g6AmQguAfg3AAgAg0ijQgUAXAAAuQAAA+AaAiQATAZAbAAQAOAAASgGQASgHAPgLQAFglAAgXQAAgdgKggQgKgigRgRQgSgSgWAAQgaAAgTAYg");
	this.shape_29.setTransform(-0.125,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-25.3,36.9,51.400000000000006);


(lib.atomlabel_C17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADwDxIAAjbQgNAMgTAMQgVAMgPAGIAAghQAcgOAVgSQAXgTAIgTIAWAAIAAEYgAi5CvQgrgcgXg2QgWg1gBg9QABhDAZgyQAZgyAwgZQAvgbA5AAQBBAAArAhQArAhASA8Ig4ANQgPgvgbgWQgdgVgrAAQgyAAghAYQghAYgOAoQgNAoAAAqQAAA2AQApQAQApAhAUQAjAUAmAAQAxAAAfgcQAigbALg2IA5AOQgSBGguAlQguAlhDAAQhFAAgsgdg");
	this.shape.setTransform(-2.05,1.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AB0DxQgBgNAEgLQAIgTAPgSQAPgSAegYQAtgmAQgVQAQgWAAgUQAAgUgOgOQgPgNgXAAQgZAAgPAOQgPAPAAAaIgjgEQADgnAYgUQAYgVAoAAQAnAAAYAXQAXAVAAAhQAAARgGAQQgIAQgPASQgQASglAfQgfAagIAJQgKAJgFAKICJAAIAAAhgAjSCvQgrgcgYg2QgWg1AAg9QAAhDAagyQAZgyAwgZQAvgbA4AAQBBAAArAhQAsAhARA8Ig3ANQgPgvgcgWQgdgVgrAAQgxAAghAYQghAYgOAoQgOAoAAAqQABA2APApQARApAhAUQAiAUAnAAQAwAAAhgcQAggbAMg2IA5AOQgSBGguAlQguAlhEAAQhFAAgrgdg");
	this.shape_1.setTransform(0.5,1.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACSDdQgYgWgDgiIAigFQAGAdAOANQAOANAVAAQAYAAARgRQAQgRAAgYQAAgYgPgPQgQgQgYAAQgJAAgPAEIAEgeIAGAAQAVAAASgLQARgLAAgYQAAgTgMgMQgNgMgUAAQgUAAgOANQgNALgEAZIgigGQAGghAXgTQAWgTAhAAQAXAAATAKQATAKALARQAKAPAAATQAAATgKAOQgKAPgTAJQAZAGAOASQANASAAAbQAAAkgaAaQgbAZgpAAQgkAAgZgWgAjTCtQgsgcgXg2QgWg2AAg8QAAhDAZgyQAagyAvgaQAwgaA4AAQBBAAArAhQAsAhARA7Ig4ANQgPgvgbgVQgdgVgrAAQgxAAghAXQgiAYgNAoQgOAoAAAqQAAA2AQApQAQApAiAUQAiAUAnAAQAwAAAhgbQAggcALg2IA5APQgSBGguAkQgtAlhEAAQhFAAgrgcg");
	this.shape_2.setTransform(0.625,1.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ADlDxIAAhDIh5AAIAAggIB/izIAcAAIAACzIAmAAIAAAgIgmAAIAABDgACNCOIBYAAIAAh9gAjTCvQgrgcgXg2QgXg1AAg9QAAhDAagyQAZgyAwgZQAvgbA5AAQBAAAArAhQAsAhARA8Ig3ANQgPgvgcgWQgcgVgrAAQgyAAghAYQghAYgOAoQgNAoAAAqQAAA2AQApQAQApAhAUQAiAUAnAAQAwAAAhgcQAggbAMg2IA5AOQgSBGguAlQguAlhDAAQhFAAgsgdg");
	this.shape_3.setTransform(0.575,1.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ACRDeQgYgWgEgjIAkgDQAEAaAPAOQAPANAUAAQAZAAARgTQARgSAAgfQAAgegQgRQgRgRgaAAQgRAAgOAIQgNAHgIAMIgfgEIAbiOICKAAIAAAhIhvAAIgPBKQAZgSAcAAQAkAAAZAZQAZAaAAAoQAAAmgWAbQgaAigvAAQgmAAgYgVgAjVCtQgrgcgXg2QgWg2gBg8QABhDAZgyQAZgyAwgaQAvgaA5AAQBBAAArAhQArAhASA7Ig4ANQgOgvgcgVQgdgVgrAAQgyAAghAXQghAYgOAoQgNAoAAAqQAAA2AQApQAQApAhAUQAjAUAmAAQAxAAAggbQAhgcALg2IA5APQgSBGguAkQguAlhDAAQhFAAgsgcg");
	this.shape_4.setTransform(0.75,1.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ACQDUQgbggAAhIQAAhRAegkQAaggAsAAQAhAAAVASQAVATAEAfIgiADQgEgUgJgJQgOgOgUAAQgQAAgNAJQgQALgJAXQgKAWAAAqQAMgTASgJQASgJAUAAQAiAAAYAZQAYAaAAAoQAAAagLAXQgLAWgUAMQgUAMgZAAQgrAAgbgfgACtBoQgRARAAAbQAAASAIAQQAHAQAOAIQANAJAPAAQAWAAAQgSQAPgRAAgeQAAgdgPgRQgQgRgXAAQgXAAgQARgAjTCtQgsgcgXg2QgWg2AAg8QAAhDAZgyQAagyAvgaQAwgaA4AAQBBAAArAhQAsAhARA7Ig4ANQgPgvgbgVQgdgVgrAAQgxAAghAXQgiAYgNAoQgOAoAAAqQAAA2AQApQAQApAiAUQAiAUAnAAQAwAAAhgbQAggcALg2IA5APQgSBGguAkQgtAlhEAAQhFAAgrgcg");
	this.shape_5.setTransform(0.625,1.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ACgDxQAAghANgvQAMgvAXgrQAXgrAagdIiIAAIAAghIC0AAIAAAbQgaAbgaAvQgbAvgOAyQgKAjgDAqgAjTCvQgsgcgXg2QgWg1AAg9QAAhDAZgyQAagyAvgZQAwgbA4AAQBBAAArAhQAsAhARA8Ig4ANQgPgvgbgWQgdgVgrAAQgxAAghAYQgiAYgNAoQgOAoAAAqQAAA2AQApQAQApAiAUQAiAUAnAAQAwAAAhgcQAggbALg2IA5AOQgSBGguAlQgtAlhEAAQhFAAgrgdg");
	this.shape_6.setTransform(0.625,1.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

	// 圖層_3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAwAuIA5AOQgSBGguAlQgtAlhEAAQhFAAgsgdQgrgcgXg2QgXg1AAg9QAAhDAagyQAagyAvgZQAvgbA5AAQBBAAArAhQAsAhARA8Ig4ANQgPgvgbgWQgdgVgrAAQgyAAghAYQghAYgOAoQgNAoAAAqQAAA2AQApQAQApAhAUQAjAUAmAAQAxAAAggcQAhgbALg2gAETDxIgjAAIAAjbQgMAMgUAMQgUAMgQAGIAAghQAcgOAWgSQAWgTAIgTIAXAAg");
	this.shape_7.setTransform(-2.05,1.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ADwDxIAAjbQgNAMgTAMQgVAMgPAGIAAghQAcgOAVgSQAXgTAIgTIAWAAIAAEYgAi5CvQgrgcgXg2QgWg1gBg9QABhDAZgyQAZgyAwgZQAvgbA5AAQBBAAArAhQArAhASA8Ig4ANQgPgvgbgWQgdgVgrAAQgyAAghAYQghAYgOAoQgNAoAAAqQAAA2AQApQAQApAhAUQAjAUAmAAQAxAAAfgcQAigbALg2IA5AOQgSBGguAlQguAlhDAAQhFAAgsgdg");
	this.shape_8.setTransform(-2.05,1.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAXAuIA5AOQgSBGgvAlQgtAlhEAAQhFAAgrgdQgsgcgXg2QgWg1AAg9QAAhDAZgyQAagyAvgZQAwgbA4AAQBBAAArAhQAsAhARA8Ig3ANQgPgvgcgWQgdgVgrAAQgxAAghAYQgiAYgNAoQgOAoAAAqQAAA2AQApQAQApAiAUQAiAUAnAAQAwAAAhgcQAggbAMg2gAEsDQIAAAhIi4AAQgBgNAFgLQAHgTAPgSQAQgSAdgYQAtgmAQgVQAQgWAAgUQAAgUgOgOQgPgNgXAAQgZAAgPAOQgPAPAAAaIgjgEQAEgnAXgUQAYgVAoAAQAoAAAXAXQAYAVAAAhQAAARgHAQQgHAQgQASQgQASglAfQgfAagIAJQgJAJgGAKg");
	this.shape_9.setTransform(0.5,1.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AB0DxQgBgNAEgLQAIgTAPgSQAPgSAegYQAtgmAQgVQAQgWAAgUQAAgUgOgOQgPgNgXAAQgZAAgPAOQgPAPAAAaIgjgEQADgnAYgUQAYgVAoAAQAnAAAYAXQAXAVAAAhQAAARgGAQQgIAQgPASQgQASglAfQgfAagIAJQgKAJgFAKICJAAIAAAhgAjSCvQgrgcgYg2QgWg1AAg9QAAhDAagyQAZgyAwgZQAvgbA4AAQBBAAArAhQAsAhARA8Ig3ANQgPgvgcgWQgdgVgrAAQgxAAghAYQghAYgOAoQgOAoAAAqQABA2APApQARApAhAUQAiAUAnAAQAwAAAhgcQAggbAMg2IA5AOQgSBGguAlQguAlhEAAQhFAAgrgdg");
	this.shape_10.setTransform(0.5,1.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AAVArIA5APQgSBGguAkQgtAlhEAAQhFAAgrgcQgsgcgXg2QgWg2AAg8QAAhDAZgyQAagyAvgaQAwgaA4AAQBBAAArAhQAsAhARA7Ig4ANQgPgvgbgVQgdgVgrAAQgxAAghAXQgiAYgNAoQgOAoAAAqQAAA2AQApQAQApAiAUQAiAUAnAAQAwAAAhgbQAggcALg2gAB3ClIAigFQAGAdAOANQAOANAVAAQAYAAARgRQAQgRAAgYQAAgYgPgPQgQgQgYAAQgJAAgPAEIAEgeQADAAADAAQAVAAASgLQARgLAAgYQAAgTgMgMQgNgMgUAAQgUAAgOANQgNALgEAZIgigGQAGghAXgTQAWgTAhAAQAXAAATAKQATAKALARQAKAPAAATQAAATgKAOQgKAPgTAJQAZAGAOASQANASAAAbQAAAkgaAaQgbAZgpAAQgkAAgZgWQgYgWgDgig");
	this.shape_11.setTransform(0.625,1.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ACSDdQgYgWgDgiIAigFQAGAdAOANQAOANAVAAQAYAAARgRQAQgRAAgYQAAgYgPgPQgQgQgYAAQgJAAgPAEIAEgeIAGAAQAVAAASgLQARgLAAgYQAAgTgMgMQgNgMgUAAQgUAAgOANQgNALgEAZIgigGQAGghAXgTQAWgTAhAAQAXAAATAKQATAKALARQAKAPAAATQAAATgKAOQgKAPgTAJQAZAGAOASQANASAAAbQAAAkgaAaQgbAZgpAAQgkAAgZgWgAjTCtQgsgcgXg2QgWg2AAg8QAAhDAZgyQAagyAvgaQAwgaA4AAQBBAAArAhQAsAhARA7Ig4ANQgPgvgbgVQgdgVgrAAQgxAAghAXQgiAYgNAoQgOAoAAAqQAAA2AQApQAQApAiAUQAiAUAnAAQAwAAAhgbQAggcALg2IA5APQgSBGguAkQgtAlhEAAQhFAAgrgcg");
	this.shape_12.setTransform(0.625,1.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AAWAuIA5AOQgSBGguAlQguAlhDAAQhFAAgsgdQgrgcgXg2QgXg1AAg9QAAhDAagyQAZgyAwgZQAvgbA5AAQBAAAArAhQAsAhARA8Ig3ANQgPgvgcgWQgcgVgrAAQgyAAghAYQghAYgOAoQgNAoAAAqQAAA2AQApQAQApAhAUQAiAUAnAAQAwAAAhgcQAggbAMg2gADlDxIAAhDIh5AAIAAggIB/izIAcAAIAACzIAmAAIAAAgIgmAAIAABDgADlCOIAAh9IhYB9g");
	this.shape_13.setTransform(0.575,1.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ADlDxIAAhDIh5AAIAAggIB/izIAcAAIAACzIAmAAIAAAgIgmAAIAABDgACNCOIBYAAIAAh9gAjTCvQgrgcgXg2QgXg1AAg9QAAhDAagyQAZgyAwgZQAvgbA5AAQBAAAArAhQAsAhARA8Ig3ANQgPgvgcgWQgcgVgrAAQgyAAghAYQghAYgOAoQgNAoAAAqQAAA2AQApQAQApAhAUQAiAUAnAAQAwAAAhgcQAggbAMg2IA5AOQgSBGguAlQguAlhDAAQhFAAgsgdg");
	this.shape_14.setTransform(0.575,1.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AAUArIA5APQgSBGguAkQguAlhDAAQhFAAgsgcQgrgcgXg2QgXg2AAg8QAAhDAagyQAZgyAwgaQAvgaA5AAQBAAAAsAhQAsAhARA7Ig4ANQgOgvgdgVQgcgVgrAAQgyAAghAXQghAYgOAoQgNAoAAAqQAAA2AQApQAQApAhAUQAiAUAnAAQAwAAAhgbQAhgcALg2gAB1ClIAkgDQAEAaAPAOQAPANAUAAQAZAAARgTQARgSAAgfQAAgegQgRQgRgRgaAAQgRAAgNAIQgOAHgHAMIgggEIAbiOICKAAIAAAhIhvAAIgPBKQAZgSAcAAQAkAAAZAZQAaAaAAAoQAAAmgXAbQgaAigvAAQgmAAgYgVQgYgWgEgjg");
	this.shape_15.setTransform(0.75,1.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ACRDeQgYgWgEgjIAkgDQAEAaAPAOQAPANAUAAQAZAAARgTQARgSAAgfQAAgegQgRQgRgRgaAAQgRAAgOAIQgNAHgIAMIgfgEIAbiOICKAAIAAAhIhvAAIgPBKQAZgSAcAAQAkAAAZAZQAZAaAAAoQAAAmgWAbQgaAigvAAQgmAAgYgVgAjVCtQgrgcgXg2QgWg2gBg8QABhDAZgyQAZgyAwgaQAvgaA5AAQBBAAArAhQArAhASA7Ig4ANQgOgvgcgVQgdgVgrAAQgyAAghAXQghAYgOAoQgNAoAAAqQAAA2AQApQAQApAhAUQAjAUAmAAQAxAAAggbQAhgcALg2IA5APQgSBGguAkQguAlhDAAQhFAAgsgcg");
	this.shape_16.setTransform(0.75,1.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AAVArIA5APQgSBGguAkQgtAlhEAAQhFAAgrgcQgsgcgXg2QgWg2AAg8QAAhDAZgyQAagyAvgaQAwgaA4AAQBBAAArAhQAsAhARA7Ig4ANQgPgvgbgVQgdgVgrAAQgxAAghAXQgiAYgNAoQgOAoAAAqQAAA2AQApQAQApAiAUQAiAUAnAAQAwAAAhgbQAggcALg2gAEoAbIgiADQgEgUgJgJQgOgOgUAAQgQAAgNAJQgQALgJAXQgKAWAAAqQAMgTASgJQASgJAUAAQAiAAAYAZQAYAaAAAoQAAAagLAXQgLAWgUAMQgUAMgZAAQgrAAgbgfQgbggAAhIQAAhRAegkQAaggAsAAQAhAAAVASQAVATAEAfgACcCUQAAASAIAQQAHAQAOAIQANAJAPAAQAWAAAQgSQAPgRAAgeQAAgdgPgRQgQgRgXAAQgXAAgQARQgRARAAAbg");
	this.shape_17.setTransform(0.625,1.425);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ACQDUQgbggAAhIQAAhRAegkQAaggAsAAQAhAAAVASQAVATAEAfIgiADQgEgUgJgJQgOgOgUAAQgQAAgNAJQgQALgJAXQgKAWAAAqQAMgTASgJQASgJAUAAQAiAAAYAZQAYAaAAAoQAAAagLAXQgLAWgUAMQgUAMgZAAQgrAAgbgfgACtBoQgRARAAAbQAAASAIAQQAHAQAOAIQANAJAPAAQAWAAAQgSQAPgRAAgeQAAgdgPgRQgQgRgXAAQgXAAgQARgAjTCtQgsgcgXg2QgWg2AAg8QAAhDAZgyQAagyAvgaQAwgaA4AAQBBAAArAhQAsAhARA7Ig4ANQgPgvgbgVQgdgVgrAAQgxAAghAXQgiAYgNAoQgOAoAAAqQAAA2AQApQAQApAiAUQAiAUAnAAQAwAAAhgbQAggcALg2IA5APQgSBGguAkQgtAlhEAAQhFAAgrgcg");
	this.shape_18.setTransform(0.625,1.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AAVAuIA5AOQgSBGguAlQgtAlhEAAQhFAAgrgdQgsgcgXg2QgWg1AAg9QAAhDAZgyQAagyAvgZQAwgbA4AAQBBAAArAhQAsAhARA8Ig4ANQgPgvgbgWQgdgVgrAAQgxAAghAYQgiAYgNAoQgOAoAAAqQAAA2AQApQAQApAiAUQAiAUAnAAQAwAAAhgcQAggbALg2gAB5gBIAAghIC0AAIAAAbQgaAbgaAvQgbAvgOAyQgKAjgDAqIgjAAQAAghANgvQAMgvAXgrQAXgrAagdg");
	this.shape_19.setTransform(0.625,1.175);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ACgDxQAAghANgvQAMgvAXgrQAXgrAagdIiIAAIAAghIC0AAIAAAbQgaAbgaAvQgbAvgOAyQgKAjgDAqgAjTCvQgsgcgXg2QgWg1AAg9QAAhDAZgyQAagyAvgZQAwgbA4AAQBBAAArAhQAsAhARA8Ig4ANQgPgvgbgWQgdgVgrAAQgxAAghAYQgiAYgNAoQgOAoAAAqQAAA2AQApQAQApAiAUQAiAUAnAAQAwAAAhgcQAggbALg2IA5AOQgSBGguAlQgtAlhEAAQhFAAgrgdg");
	this.shape_20.setTransform(0.625,1.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-25.4,65.5,53.7);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(800,700.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("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");
	this.shape_1.setTransform(800,700.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("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");
	this.shape_2.setTransform(800,700.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 圖層_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,255,0,0.8)","rgba(0,255,255,0.8)"],[0,1],0,454.4,0,-454.3).s().p("Eh8/BGTMAAAiMmMD5/AAAMAAACMmg");
	this.shape_3.setTransform(800,452.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.title, new cjs.Rectangle(0,2.1,1600,899.9), null);


(lib.t02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("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");
	this.shape.setTransform(290.675,69.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(16,1,1).p("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");
	this.shape_1.setTransform(290.675,69.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("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");
	this.shape_2.setTransform(290.675,69.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t02, new cjs.Rectangle(-8,-8,597.4,155.2), null);


(lib.t01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("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");
	this.shape.setTransform(300,69.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(16,1,1).p("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");
	this.shape_1.setTransform(300,69.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AEzJVIAAg/QgWADgOAAQheAAg1gZQg0gaAAghQAAgVAegSQAYgPAeAAIAfAAQAQAABmgnIAAg7QgqAIgXAAQiPAAABhmIAAirQgBhegUguQgRgfAAgvQAAg8BIAAQAuAAAeAjQAcgHA1gTQAGgDAGgCIAAg1QgJACgKAAQhmAAg7gfQg3gdAAglQAAgXAggWQAbgPAfAAQAGAAAKADQANADAHAAQAQAABcg1QgFhMgfgmQgSgYAAgNQAAg2A9AAQBIAABCA5QAYATAMA4IAGAAQBpAABXAvQA8AgAAApQgBA0hyACQhCAJhAAVIAABFQAqgJAcAAQA4AAAoAeIAAgLQAAggArgrQApgiAfAAQAJAAALADQAQADAFAAQAJAAAZgPIACg/QAAgvgbgwQgagoAAgVQAAhOBUAAQAyAAAvAkQA8AwAHBsQBRgjArAAQBDAABEA4QA+A2AABFQAAAjghC2IANAqQB0GQAAB8QAAB1gwBNQgwBDhIAAQh/AAg8hVQg7hOABihQgBhhBooAQAQhKABgSQAAgfgkAAQgTAAgpAbQgNAJgNAHQgFEAgXDlQggExgiByQggByhfAAQhsAAAAhaQAAghATg7QBXksAVmjQg5AagWAAQgXAAgUgJQATAtAAA9IAACgQAAAlgFAaQARASAAAbQAAA8hOAGQhWABhfAQIAAAsIAHgBQBnAABWArQA6AggBAoQAAAzhsACQhHAFhJAQIAABXQABB4hnAAQhZAAAAhmgATpD6QgOBUAAAYQgBBrA2AAQAwAAAAhrQAAjCgbjPIgCgDIg6EogAEDBtIAAAgQAAAlAuAFIAAhTgAHwA8IABA/IAzgOQgBgcAFghgAD3hQQAFAhADAoQATgIAegQIAAhCQgfALgaAGgAHuikIACBGQAZgDAaAAIAMAAIAAglQAAgkgkAAQgJAAgUAGgEgoyAKCQgRgMgMgOIgKAYQgmA1gwAAQhPAAhJhaQhwiNAAiKQAAhHBNhhQA3g+AAgrQAAgLgoggQhWhDAAg/QABhLBWhiQBFhEABgjQAAgSgpgjQhnhMAAgtQAAhsBsAAQBSAAB4BqQBRBLAABNQAAAhgmAmIAKL9QATgMATgDQBDgJAAgzIAAi6QAAgggbgrQgWggAAgTQABg6BHAAQAMAAANACQhDgeAAhLIAAjGQAAhsgpg2QglgkABg2QgBhCBOAAQAtAAAiATQABAAABAAQABAAAAAAQABAAAAgBQABAAAAAAIAaAAQAYAAApgJQEcgzBdAAQCEAABsBIQBUBCAABaQAAC6gfBhQATAXAAAeQAABGhgAIQiMAAigAMQAjANAlAZQA3AnAABIIAAAkIAngjQAygnAAg0QACg0AiAAQAeAABGAuQBKA6ABAsQgBAxhbAuQAXAlAoBOQA6B5AABNQAABFgxAnQg5AxiWAAQiUAAg4g+Qg7g8gHhsQhFBghjBJQhgBIhDAAQhWAAg8gzgEgodAHqQAAAdAuAAQAmAABegnIAOgIQgVAGgWAAQgjAAgsgHQgngGgVAAQgKAAAAAZgA+QEtIAAB1QgBBIBKAAQAtAAAcgfQAbgfAAgvQAAhagIgwIgCgJQhgAthDAWgEgiLAEJQg+APg2AJIAAA/QAAA5gdAgQBigzBjhEIAAhKQgWAKgeAHgEgq9ACoQhqBkAAA4QAABeBKAAQBNAAgBhtIAGi6IgyAtgEglEAABQBFAsAABaIAAATQAagHAHgOQAIgWAZAAQA/AAAnAfIAAgfQAAgngegbQgSgUAAgQQAAgXAJgNQiGANg3AAQgbAAgWgDQAVAHATALgEgqqgESQhGAvAAAbQgBAdAxAlQAmAbAZAZQAHiBALhnQgZATgiAVgEgk0gDTQgBA2A9AAQAXAABhgWQCkgcBagKIADgcQAIgbAEgdQhtAOhsAWQh+AdhGAAQgVAAgPgCIAAAbgEghEgIHQivArhPAPQAEAkADArQA8gMCBglQCEgmBdAAQAbAAAZADQgIhLhQAAQg4AAhLAWgEAq9AICQgQghgRgpQjcD3iiAAQg/AAgxg7QgsguABgaQAAgbAtgEQC/gIDJjkIAhgnQg+jOhAk/QgDAAgDABQiIAahNAAQhiAAg6gYQgDBGhjAUQghAMgcANQACCKAACzQgBBsgjAvQAxgkAugtQAqghAMAAQAkAAAAAwQAAATgDAUIAAADQAIAeAmAAQBuAAEEhcQAZgKAMAAQASAAAAANQAAAtiABlQh8BkhxAAQhnAAg2gmIgOgLIghAjQhjBhhRAAQhsAAhIgpQhDgqAAhVQAAhhBDgRQBggPAAhvIAAjwQglAHgSAAQhsAAAAhNQAAhSBsgVIAfAAQAFAAARgJQgFjSgHgqQgJg4gagYQgSgTAAgMQAAg8BgAAQA5AAAsAVQAwAZAOA/QAKBAAGCLIABAAQA3AAArAVQAJgQAXgRQAbgRAjAAQAFAAALADQAMADAJAAQAcAADNhQQAPgHARgFQgTgvgVgeQgcgrAAgdQAAgwBCAAQBUAAA8A8QAeAhAbBAQBXAABNAXQACgJgBgJQAAgbgvgMQhDgOAAgfQAAhIBgAAQA3AAAjAkQAqAtAAAnQAAA3gsAcIALAFQBMApAAAzQgBBHiPABQg8ADg9AGQAeCqAiCNQAOgvAAgsQAAgigPgvQgIgTAAgPQABgqAuAAQA5AAA+AzQAsAkAABGQgBBbgxBuIAdCyQAaCaAABgQAABFgTArQgTAfgnAAQhQAAheitgEAssAEFIAIAhQAnCCAQAAQAFAAAAgZQAAg3gHi0QgcAughAzgAaQFiQgMAKAAARQAAAlBIAAQArAABeg8QAJgEAHgGQgKAEgLAAQgnAAg5gEIg2gDQgbAAgPAJgAtDJJQgigkgLgbQg6Bpg5AAQg3AAhIhZQgdgigWgeQgHAegHAVQghB+hoAAQh4AAgBhlQAAgZAPgpQBXkVAAmiQAAg2geg0QgeguAAgXQAAhfBgAAQA6AAA2AnQAlAgATAwQAmAAD8hVQgehWgogwQgigpABgWQAAgwAvAAQBfAAB1BRQArAhAZA/QBJgPA9AAQA5AAAzALQgRgdgwgRQhngaAAhBQAAgkAwAAQCBAABWAtQBhA4AAAyQAAAsgsAeQBEAnAAAwQAABGiQACQiEAKiCAaQAwEgA6CVQBPh9AAhmQAAgegmgtQgRgSAAgPQAAgvA8AAQBNAABRAwQA6AmAABFQAABegvBtQASAnAZA9QBTDIAABIQAACKiHAAQiIAAh/hzQh3B5hfAAQhKAAg9hIgAsvgXQBDAyAABJQAACAhdDSQgFAQgIAPIADgBQBxgEB4h0QhcjChWl1QiUAlhXAAQguAAgmgFQAABOgDBNQADAAADgDQBrgnAuAAQBOAABCAzgAlaFuQAiAhAbAAQAcAAAAhCQAAgqgEg3QgkA+gxBEgAwQBkQg/AogbAFIgFBUQgJBLgKA7QBXAkAYAAQARAAAahlQAjh/ABhBQgBgZgjAAQgMAAgcATgEAg7ACNIAAhyQgBg7gQghQgOgUAAgfQAAgwA8AAQArAAAbAbQAPgFAWgJQBigrAqAAQBHAAAzA3QAtA0AABaIAABIQAAAbgEAVQAKAPAAAWQAAA7hOAHQhCAAhPAKQg7AHgXAAQiRAAABhmgEAjAgAUQAEAoAAA3QAAAqAwAAQAHAAAWgLIAygSQAAgNACgOQADgrAAgxQAAglgdAAQgMAAhfAwg");
	this.shape_2.setTransform(300,69.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t01, new cjs.Rectangle(-8,-8,616,155.8), null);


(lib.mPointer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("A/PAZIAAgxMA+fAAAIAAAxg");
	this.shape.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mPointer, new cjs.Rectangle(-200,-2.4,400,5), null);


(lib.mBtn3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,255,0.498)").s().p("A/PH0IAAvnMA+fAAAIAAPng");
	this.shape.setTransform(0.025,0);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// 圖層_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("AA6ByQgLgKAAgLQAAgGAEgEQAGgFAIAAQAKAAAOAJQALAIAAAMQAAAHgGAFQgGAGgHAAQgMAAgLgLgAhZBVQgKgUAAgSQAAgMAKgLQAIgHAGAAQAHAAAAALQAEA6AeAAQAeAAgBgmQAAgigcgCIgNgBQgRgBAAgRQAAgSAWgCQAhgCAAghQAAgUgQAAQgJAAgJAIIgRAPQgHAGgFAAQgSAAAAgTQAAgMAIgLIAFgDQAEAAACgEQAYgWAWAAQAbAAAQASQAOAQAAAcQAAAegUAVIgCAEIACADQAaAUAAAgQAAAggSAVQgTAYgdAAQgpAAgVgog");
	this.shape_1.setTransform(-198.25,-38.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FFFF").s().p("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");
	this.shape_2.setTransform(0,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0000FF").ss(8,1,1).p("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");
	this.shape_3.setTransform(0,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FFFF").s().p("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");
	this.shape_4.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208.2,-51.1,408.29999999999995,101.1);


(lib.mBtn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,255,0.498)").s().p("A/PH0IAAvnMA+fAAAIAAPng");
	this.shape.setTransform(0.025,0);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// 圖層_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("AA5ByQgLgKAAgLQAAgGAFgEQAFgFAIAAQAKAAAOAJQALAIAAAMQAAAHgGAFQgGAGgHAAQgMAAgLgLgAhZB0QgJgHAAgNQAAgPAHgOQAMgXAKgPIAqg5QASgaAAgPQAAgHgEgDQgDgDgFAAQgLAAgJAKIgTASQgJAKgLAAQgEAAgGgFQgFgFAAgIQAAgMAKgOQACgDAEgBQAFAAADgDQAagdAcAAQAXAAAQAUQAMAPAAATQgBAXgXAiIg4BTQgFAHAAAEQAAAFAEAAIAGgBQAhgFAJAAQAPAAAJAHQALAHAAANQAAAQgXgCIgNgBIgPAAQgNAAgcAEIgMABQgMAAgJgJg");
	this.shape_1.setTransform(-197.15,-39.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FFFF").s().p("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");
	this.shape_2.setTransform(0.025,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0000FF").ss(8,1,1).p("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");
	this.shape_3.setTransform(0.025,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FFFF").s().p("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");
	this.shape_4.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207,-52.1,407.1,102.1);


(lib.mBtn1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,255,0.498)").s().p("A/PH0IAAvnMA+fAAAIAAPng");
	this.shape.setTransform(0.025,0);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// 圖層_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("AAtByQgMgKAAgLQAAgGAFgEQAFgFAIAAQAKAAAOAJQALAIAAAMQAAAHgGAFQgFAGgIAAQgLAAgLgLgAhBBwQgEgKAAgLQAAgdAGggQAHgpARg2IACgGQAAgFgEAAQgCAAgCADIgNAXQgFAJgJAAQgFAAgEgEQgEgFAAgKQAAgNAGgLQABgEADAAQAFAAACgEQASggAVAAQAOAAAHAMQAGAKAAAOQAAAJgFAcQgJA3gIBWQgBARgHAJQgHAJgJAAQgLAAgGgNg");
	this.shape_1.setTransform(-198.875,-36.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FFFF").s().p("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");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0000FF").ss(8,1,1).p("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");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207.5,-50,407.6,100);


(lib.coefficientTable = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("EBRMggwICRDiIBxpiITnAAEBRMgx2ICRDhIBxphITnAAEBRMgPpICRDhIBxphITnAAEBRMABcICRDiIBxphITnAAEBRMASjICRDhIBxphITnAAEBTEAjkICRDiIBxpiIPPAAEBTEA0sICRDiIBxpiIPPAAEAh4glAIA1CTIAllaID7AAEAkbgTxIA1CSIAklZID7AAEATIgguICuFSICHuSISSAAAVTvBICvFTICHuTISSAAEAZCgh2IPEAAEgJrgyNICRDiIBwpiIPPAAEgcGgkqIA1CTIAklZID7AAA6Rz6IA1CTIAklZID8AAEgqwggDICvFTICHuTISSAAEgpcgPdICvFSICHuSISSAAEgk8ghgIPDAAEAFfglPIA6CeIAnl0IGTAAEgEiglPIA5CeIAnl0IEOAAAki0AIA5CdIAnlzIEOAAAFf0AIA6CdIAnlzIGTAAAChinIA5CeIAml0IGUAAAChOOIA5CeIAml0IGUAAAmUOOIA5CeIAnl0IEOAAAqeAyIVVAAAmUinIA5CeIAnl0IEOAAA5lOTIA2CSIAklZID7AAEgqwAB7ICvFSICHuRISSAAEgoQAS7ICvFTICHuTISSAAEgmdAAnIPEAAA9miiIA0CTIAllaID7AAEgjHgQwIPEAAEgibARdIPEAAAqeRoIVVAAEAkHgCbIA1CTIAklZID7AAAVTB7ICvFSICHuRISSAAEAhuAOaIA1CSIAllZID7AAAScS7ICuFTICHuTISSAAEA04AjkICRDiIBxpiIPPAAAY4RkIPEAAAbQAuIPEAAAbkwnIPEAAAoJwnIVVAAEgIJgh1IVVAAEhEdglUIA5CdIAnlzIEPAAEhEdgUGIA5CeIAnl0IEPAAEg7oglUIA6CdIAnlzIGTAAEg7ogUGIA6CeIAnl0IGTAAEhH3gyNICSDiIBwpiIPQAAEhIngh7IVWAAEhozggwICRDiIBwpiITnAAEhozgx2ICRDhIBwphITnAAEhozgPpICRDhIBwphITnAAEhozABcICRDiIBwphITnAAEhozASjICRDhIBwphITnAAEhm7AjkICRDiIBwpiIPPAAEg4bAOEIA6CdIAmlzIGTAAEg4bgCxIA6CdIAmlzIGTAAEhCegCxIA5CdIAnlzIEPAAEhCeAOEIA5CdIAnlzIEPAAEhGFARdIVXAAEhGFAAnIVXAAEhIngQsIVWAAEhm7A0sICRDiIBwpiIPPAAEA04A0sICRDhIBxphIPPAA");
	this.shape.setTransform(895.4,505.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EAshBAQQg5hIAAihQAAhmAVg9QAVg/ApghQApgiA/AAQAuAAAjATQAiASAXAkQAXAiANAzQAMAyAABVQAABlgUA+QgVA9gpAiQgpAig/AAQhTAAgvg7gEAtVA5lQglA1AACNQAACNAhAvQAhAuAxAAQAwAAAhgvQAhgvAAiMQAAiOghguQghgvgxAAQgxAAgcApgEANUBAQQg5hIAAihQAAhmAWg9QAUg/AqghQApgiA+AAQAuAAAjATQAjASAWAkQAXAiANAzQANAyAABVQAABlgVA+QgVA9gpAiQgpAig/AAQhTAAgvg7gEAOIA5lQgkA1AACNQAACNAhAvQAhAuAwAAQAxAAAhgvQAhgvAAiMQAAiOghguQghgvgyAAQgwAAgdApgEgR2BAQQg5hIAAihQAAhmAVg9QAVg/ApghQApgiA/AAQAuAAAjATQAiASAXAkQAXAiANAzQAMAyAABVQAABlgUA+QgVA9gpAiQgpAig/AAQhTAAgvg7gEgRCA5lQglA1AACNQAACNAhAvQAhAuAxAAQAwAAAhgvQAhgvAAiMQAAiOghguQghgvgxAAQgxAAgcApgEgxCBAQQg5hIAAihQAAhmAWg9QAUg/AqghQApgiA+AAQAuAAAjATQAjASAWAkQAXAiANAzQANAyAABVQAABlgVA+QgVA9gpAiQgpAig/AAQhTAAgvg7gEgwOA5lQgkA1AACNQAACNAhAvQAhAuAwAAQAxAAAhgvQAhgvAAiMQAAiOghguQghgvgyAAQgwAAgdApgEBPDBBAICFnaIAtAAIiFHagEBtPBA/ICFnaIAtAAIiFHagEhMwBA/ICFnaIAtAAIiFHagEhsMBA8QABhDAahgQAZhgAwhYQAvhZA2g9IkZAAIAAhEIFzAAIAAA3Qg3A6g1BgQg2BhgeBmQgVBIgGBVgEBSIBA4QgBgUAIgTQALgfAageQAZgeAwgnQBLg9AagkQAagkAAggQAAghgXgXQgYgXgnAAQgoAAgZAYQgYAZAAArIg6gGQAGhBAmgiQAngiBBAAQBCAAAnAlQAmAkAAA2QAAAcgLAbQgLAagaAdQgaAeg9AzQgzArgOAPQgOAPgKAPIDhAAIAAA2gEBMVBA4IAAlmQgUATghAUQghATgaAKIAAg3QAvgWAjgfQAkggAOgeIAlAAIAAHMgEBzQBA3IAAhtIjHAAIAAg0IDRkpIAuAAIAAEpIA+AAIAAA0Ig+AAIAABtgEBxAA+WICQAAIAAjPgEBqhBA3IAAlmQgUATghAUQghATgaAKIAAg3QAvgWAjgfQAkggAOgeIAlAAIAAHMgEhGvBA3IAAhtIjHAAIAAg0IDRkpIAuAAIAAEpIA+AAIAAA0Ig+AAIAABtgEhI/A+WICQAAIAAjPgEhPeBA3IAAlmQgUATghAUQghATgaAKIAAg3QAvgWAjgfQAkggAOgeIAlAAIAAHMgEBA9A9CIAAhHIDYAAIAABHgEhssAvAQg4hBAAiUQAAimA+hMQA1hBBbAAQBDAAAsAmQArAmAIBCIhGAGQgJgqgRgSQgdgegpAAQgiAAgZASQgiAZgTAuQgTAvgBBVQAagmAkgTQAlgTAoAAQBHAAAxA0QAxA0AABSQAAA2gXAuQgXAugpAZQgoAZg0AAQhYAAg3hBgEhryArkQghAiAAA3QAAAlAQAhQAPAhAcASQAcARAeAAQAtAAAggkQAggkAAg+QAAg7gggiQgggjgwAAQgvAAgiAjgEAshAvBQg5hHAAiiQAAhlAVg+QAVg+ApgiQApghA/AAQAuAAAjATQAiASAXAjQAXAjANAyQAMAyAABVQAABlgUA+QgVA+gpAiQgpAig/AAQhTAAgvg8gEAtVAoXQglA0AACNQAACNAhAvQAhAvAxAAQAwAAAhgvQAhgvAAiNQAAiNghgvQghgugxAAQgxAAgcApgEANUAvBQg5hHAAiiQAAhlAWg+QAUg+AqgiQApghA+AAQAuAAAjATQAjASAWAjQAXAjANAyQANAyAABVQAABlgVA+QgVA+gpAiQgpAig/AAQhTAAgvg8gEAOIAoXQgkA0AACNQAACNAhAvQAhAvAwAAQAxAAAhgvQAhgvAAiNQAAiNghgvQghgugyAAQgwAAgdApgEgR2AvBQg5hHAAiiQAAhlAVg+QAVg+ApgiQApghA/AAQAuAAAjATQAiASAXAjQAXAjANAyQAMAyAABVQAABlgUA+QgVA+gpAiQgpAig/AAQhTAAgvg8gEgRCAoXQglA0AACNQAACNAhAvQAhAvAxAAQAwAAAhgvQAhgvAAiNQAAiNghgvQghgugxAAQgxAAgcApgEgxCAvBQg5hHAAiiQAAhlAWg+QAUg+AqgiQApghA+AAQAuAAAjATQAjASAWAjQAXAjANAyQANAyAABVQAABlgVA+QgVA+gpAiQgpAig/AAQhTAAgvg8gEgwOAoXQgkA0AACNQAACNAhAvQAhAvAwAAQAxAAAhgvQAhgvAAiNQAAiNghgvQghgugyAAQgwAAgdApgEBtPAv5ICFnaIAtAAIiFHagEBPDAv5ICFnaIAtAAIiFHagEhMwAv5ICFnaIAtAAIiFHagEBzQAvxIAAhuIjHAAIAAgzIDRkpIAuAAIAAEpIA+AAIAAAzIg+AAIAABugEBxAAtQICQAAIAAjPgEBqhAvxIAAlnQgUAUghATQghATgaAKIAAg2QAvgWAjggQAkggAOgdIAlAAIAAHMgEBSIAvxQgBgVAIgSQALgfAageQAZgeAwgoQBLg9AagjQAagkAAggQAAgigXgXQgYgXgnAAQgoAAgZAZQgYAYAAArIg6gGQAGhAAmgiQAngiBBAAQBCAAAnAkQAmAlAAA2QAAAbgLAbQgLAbgaAdQgaAdg9A0QgzAqgOAPQgOAPgKAQIDhAAIAAA2gEBMVAvxIAAlnQgUAUghATQghATgaAKIAAg2QAvgWAjggQAkggAOgdIAlAAIAAHMgEhGvAvxIAAhuIjHAAIAAgzIDRkpIAuAAIAAEpIA+AAIAAAzIg+AAIAABugEhI/AtQICQAAIAAjPgEhPeAvxIAAlnQgUAUghATQghATgaAKIAAg2QAvgWAjggQAkggAOgdIAlAAIAAHMgEARfAgmQgggpAAhaQAAg5AMgiQALgjAXgTQAXgTAjAAQAaAAAUALQATAKANAUQAMATAIAdQAHAcAAAvQAAA4gMAjQgLAjgXATQgYATgjAAQguAAgaghgAR8c3QgVAdAABPQAABPATAaQASAaAbAAQAbAAATgaQASgaAAhPQAAhPgSgaQgTgagbAAQgbAAgQAXgEAM4AhBQAAgOAFgNQAIgWASgVQASgVAhgbQA0grATgZQASgZAAgWQAAgYgQgQQgRgQgbAAQgcAAgSARQgRARAAAeIgogEQAEgtAbgYQAbgYAuAAQAuAAAbAaQAbAZAAAmQAAATgIATQgIATgSAUQgSAVgrAkQgkAegKAKQgJALgHALICdAAIAAAlgEgqHAgbQgggoAAhaQAAg5AMgjQAMgiAXgTQAXgTAjAAQAaAAATAKQAUAKAMAUQANAUAHAcQAIAcAAAwQAAA4gMAjQgMAjgXATQgXASgjAAQgvAAgaghgEgpqAcsQgUAeAABPQAABPASAaQATAaAbAAQAbAAASgaQATgbAAhOQAAhPgTgaQgSgbgbAAQgcAAgQAXgEgutAg3QgBgPAFgMQAIgWASgVQASgVAigcQA0grASgYQATgaAAgWQAAgXgRgRQgRgQgbAAQgcAAgRASQgRARAAAeIgpgEQAEguAbgXQAcgYAtAAQAuAAAbAZQAbAaAAAmQAAATgIATQgIASgSAVQgSAUgrAkQgjAegKALQgKAKgHALICeAAIAAAmgEAwxAgGQgdglAAhUQAAg1ALggQAKggAWgSQAVgRAhAAQAYAAASAJQASAKAMASQALASAHAbQAHAaAAAsQAAA0gLAhQgLAggVARQgWASggAAQgsAAgYgfgEAxMAcoQgTAcAABJQAABJARAZQARAYAaAAQAZAAARgZQARgYAAhJQAAhKgRgYQgRgYgaAAQgZAAgPAVgEAsgAggQgBgOAFgMQAIgUAQgTQARgUAfgaQAwgnASgXQAQgYAAgUQAAgWgPgPQgPgPgZAAQgbAAgQAQQgQAQAAAcIglgEQAEgqAZgWQAZgWAqAAQArAAAZAXQAZAYAAAjQAAASgHASQgIARgQATQgRATgoAhQghAcgJAKQgJAJgGALICRAAIAAAjgAqhf/QgegmAAhUQAAg0ALggQALghAVgRQAWgSAgAAQAYAAASAKQASAKAMASQAMASAHAaQAGAaAAAsQAAA1gLAgQgKAggWASQgVASghAAQgrAAgYgfgAqGchQgTAbAABJQAABKARAYQARAYAZAAQAZAAARgYQASgYAAhKQAAhJgSgYQgRgYgZAAQgZAAgPAVgEgOzAgYQAAgNAFgMQAHgUARgUQAQgTAfgaQAxgnARgYQARgXAAgVQAAgVgPgPQgQgPgZAAQgaAAgQAQQgQAPAAAcIgmgDQAEgqAZgWQAZgXArAAQArAAAZAYQAZAYAAAjQAAASgIARQgHASgRASQgRAUgnAhQghAcgKAJQgJAKgGAKICSAAIAAAjgEhsoAePQgygrgHhJIBKgGQAIA2AfAbQAdAbAqAAQAzAAAjgmQAkgmAAhAQAAg8gigjQgigig3AAQgiAAgbAPQgbAQgQAYIhCgIIA3knIEdAAIAABEIjkAAIgfCaQAzgkA5AAQBLAAA0A0QAzAzAABSQAABOgtA4Qg3BGhgAAQhOAAgxgsgEB0iAeHQgtg5AAiBQAAhRARgyQAQgxAhgbQAhgbAyAAQAlAAAcAPQAcAOASAdQASAbAKApQALAoAABEQAABQgRAyQgRAyggAbQgiAbgyAAQhCAAgmgwgEB1MAYyQgdAqAABxQAABxAaAlQAaAlAnAAQAnAAAaglQAbgmAAhwQAAhxgbglQgagmgnAAQgnAAgXAhgEBrFAe3ICFnaIAtAAIiFHagEhFdAeHQgtg5AAiBQAAhRARgyQAQgxAhgbQAhgbAyAAQAlAAAcAPQAcAOASAdQASAbAKApQALAoAABEQAABQgRAyQgRAyggAbQgiAbgyAAQhCAAgmgwgEhEzAYyQgdAqAABxQAABxAaAlQAaAlAnAAQAnAAAaglQAbgmAAhwQAAhxgbglQgagmgnAAQgnAAgXAhgEhO6Ae3ICFnaIAtAAIiFHagEBwtAevIAAlnQgUAUghATQghATgbAKIAAg2QAwgWAjggQAjggAPgdIAkAAIAAHMgEBoXAevIAAlnQgUAUghATQghATgaAKIAAg2QAvgWAjggQAkggAOgdIAlAAIAAHMgEhJSAevIAAlnQgUAUghATQghATgbAKIAAg2QAwgWAjggQAjggAPgdIAkAAIAAHMgEhRoAevIAAlnQgUAUghATQghATgaAKIAAg2QAvgWAjggQAkggAOgdIAlAAIAAHMgEBMSAdYQg5hIAAihQAAhmAWg9QAUg/AqghQApgiA+AAQAuAAAjATQAjASAWAkQAXAiANAzQANAyAABVQAABlgVA+QgVA9gpAiQgpAig/AAQhTAAgvg7gEBNGAWtQgkA1AACNQAACNAhAvQAhAuAwAAQAxAAAhgvQAhgvAAiMQAAiOghguQghgvgyAAQgwAAgdApgA7Ha5IAAg1ICiAAIAAA1gEg62Aa5IAAg1ICiAAIAAA1gEA0gAZKQgagWgDgmIAmgDQAEAcAQAOQAQAOAVAAQAbAAASgUQASgUAAghQAAgfgRgSQgSgSgcAAQgSAAgOAIQgOAIgIANIgjgFIAdiZICUAAIAAAjIh3AAIgQBQQAbgSAeAAQAnAAAaAbQAbAbAAAqQAAAogXAeQgdAkgyAAQgoAAgagXgEArCAZKQgagWgEgmIAngDQAEAcAPAOQAQAOAWAAQAbAAASgUQASgUAAghQAAgfgSgSQgRgSgcAAQgSAAgPAIQgOAIgIANIgigFIAdiZICUAAIAAAjIh3AAIgQBQQAbgSAdAAQAnAAAbAbQAbAbAAAqQAAAogYAeQgcAkgyAAQgpAAgZgXgAX6Y/QgggoAAhaQAAg5AMgjQAMgiAXgTQAXgTAjAAQAaAAATAKQAUAKAMAUQANAUAHAcQAIAcAAAwQAAA4gMAjQgMAjgXATQgXASgjAAQgvAAgaghgAYXVQQgUAeAABPQAABPATAaQASAaAbAAQAbAAATgaQASgbAAhOQAAhPgSgaQgTgbgbAAQgcAAgQAXgAG0ZIQgcgZgEgoIAqgEQAEAeARAQQARAPAXAAQAdAAAUgVQATgWAAgkQAAghgTgTQgTgUgeAAQgTAAgQAJQgPAIgJAOIglgFIAfilICgAAIAAAmIiAAAIgSBWQAegUAfAAQAqAAAdAdQAdAdAAAuQAAAsgZAfQgfAng2AAQgsAAgbgYgAWBZbIAAj7QgOAOgXANQgXANgTAHIAAgmQAhgPAZgWQAZgXAKgUIAZAAIAAFCgAMEZbQAAgPAFgMQAIgWASgVQASgVAhgcQA1grASgYQASgaAAgWQAAgXgQgRQgRgQgbAAQgcAAgRASQgSARAAAeIgogEQAEguAbgXQAbgYAuAAQAuAAAbAZQAbAaAAAmQAAATgIATQgIASgSAVQgSAUgrAkQgjAegKALQgKAKgHALICdAAIAAAmgAmyZDQgagXgEglIAngEQAEAcAPAPQAQAOAWAAQAaAAATgUQASgUAAghQAAgfgSgSQgRgSgdAAQgRAAgPAIQgOAHgIANIgigEIAdiZICUAAIAAAjIh3AAIgQBQQAbgTAdAAQAnAAAbAbQAbAbAAArQAAAogYAdQgcAlgyAAQgpAAgZgXgAvDZDQgagXgDglIAmgEQAEAcAQAPQAQAOAVAAQAbAAASgUQASgUAAghQAAgfgRgSQgSgSgcAAQgSAAgOAIQgOAHgIANIgjgEIAdiZICUAAIAAAjIh3AAIgQBQQAbgTAeAAQAnAAAaAbQAbAbAAArQAAAogXAdQgdAlgyAAQgoAAgagXgEgjBAY1QgggpAAhaQAAg5AMgiQALgjAXgTQAYgTAjAAQAZAAAUALQATAKANAUQAMATAIAdQAHAcAAAvQAAA4gMAjQgLAjgXATQgXATgjAAQgvAAgaghgEgikAVGQgVAdAABPQAABPATAaQASAaAcAAQAaAAATgaQATgaAAhPQAAhPgTgaQgTgagbAAQgbAAgQAXgEg1UAY9QgcgYgEgpIApgDQAFAeAQAPQARAPAYAAQAcAAAUgVQAUgVAAgkQAAgigTgTQgTgTgfAAQgTAAgPAIQgPAJgJAOIglgFIAfilICfAAIAAAmIiAAAIgRBWQAdgUAgAAQAqAAAdAdQAdAdAAAtQAAAsgaAgQgfAng1AAQgsAAgbgZgEgk7AZQIAAj7QgOAOgXAOQgXANgSAHIAAgmQAhgQAYgWQAZgWAKgVIAaAAIAAFCgEgwEAZQQgBgOAGgNQAIgWARgVQASgVAigbQA0grATgZQASgZAAgWQAAgYgRgQQgQgQgbAAQgdAAgRARQgRARAAAeIgpgEQAFgtAagYQAcgYAtAAQAuAAAbAaQAbAZAAAmQAAATgHATQgIATgTAUQgSAVgqAkQgkAegKAKQgKALgGALICdAAIAAAlgEAviAYsIAAhSIhRAAIAAgiIBRAAIAAhRIAjAAIAABRIBRAAIAAAiIhRAAIAABSgEgqoAYdIAAhYIhYAAIAAglIBYAAIAAhYIAlAAIAABYIBXAAIAAAlIhXAAIAABYgAr9X7IAAgkIBwAAIAAAkgAP+X7IAAgoIB5AAIAAAogARfPwQgggpAAhaQAAg5AMgiQALgjAXgTQAXgTAjAAQAaAAAUALQATAKANAUQAMATAIAdQAHAcAAAvQAAA4gMAjQgLAjgXATQgYATgjAAQguAAgaghgAR8MBQgVAdAABPQAABPATAaQASAaAbAAQAbAAATgaQASgaAAhPQAAhPgSgaQgTgagbAAQgbAAgQAXgAM4QLQAAgOAFgNQAIgWASgVQASgVAhgbQA0grATgZQASgZAAgWQAAgYgQgQQgRgQgbAAQgcAAgSARQgRARAAAeIgogEQAEgtAbgYQAbgYAuAAQAuAAAbAaQAbAZAAAmQAAATgIATQgIATgSAUQgSAVgrAkQgkAegKAKQgJALgHALICdAAIAAAlgEgqHAPlQgggoAAhaQAAg5AMgjQAMgiAXgTQAXgTAjAAQAaAAATAKQAUAKAMAUQANAUAHAcQAIAcAAAwQAAA4gMAjQgMAjgXATQgXASgjAAQgvAAgaghgEgpqAL2QgUAeAABPQAABPASAaQATAaAbAAQAbAAASgaQATgbAAhOQAAhPgTgaQgSgbgbAAQgcAAgQAXgEgutAQBQgBgPAFgMQAIgWASgVQASgVAigcQA0grASgYQATgaAAgWQAAgXgRgRQgRgQgbAAQgcAAgRASQgRARAAAeIgpgEQAEguAbgXQAcgYAtAAQAuAAAbAZQAbAaAAAmQAAATgIATQgIASgSAVQgSAUgrAkQgjAegKALQgKAKgHALICeAAIAAAmgEAzKAPQQgeglAAhUQAAg0ALghQALggAVgRQAWgSAgAAQAYAAASAKQASAJAMATQAMASAHAaQAGAaAAAsQAAA1gLAgQgKAggWASQgVARghAAQgrAAgYgfgEAzlALzQgTAbAABJQAABKARAYQARAYAZAAQAZAAARgYQASgZAAhJQAAhJgSgYQgRgZgZAAQgZAAgPAWgEAu4APqQAAgNAFgMQAHgUARgUQAQgTAfgaQAxgoARgXQARgXAAgVQAAgWgPgPQgQgPgZAAQgaAAgQAQQgQAQAAAcIgmgEQAEgqAZgWQAZgWArAAQArAAAZAYQAZAYAAAjQAAASgIARQgHARgRATQgRATgnAiQghAbgKAKQgJAKgGAKICSAAIAAAjgAujPJQgeglAAhUQAAg1ALggQALggAVgSQAWgRAgAAQAYAAASAKQASAJAMATQAMARAHAbQAGAaAAAsQAAA0gLAhQgKAggWASQgVARghAAQgrAAgYgfgAuILsQgTAbAABJQAABJARAZQARAYAZAAQAZAAARgZQASgYAAhJQAAhJgSgZQgRgYgZAAQgZAAgPAWgAy1PjQAAgNAFgMQAHgVARgTQAQgUAfgZQAxgoARgXQARgXAAgVQAAgWgPgPQgQgPgZAAQgaAAgQAQQgQAQAAAcIgmgEQAEgqAZgWQAZgWArAAQArAAAZAYQAZAXAAAjQAAASgIASQgHARgRATQgRATgnAiQghAbgKAKQgJAKgGAKICSAAIAAAjgEB0iANBQgtg6AAiBQAAhRARgxQAQgyAhgbQAhgbAyAAQAlAAAcAPQAcAPASAcQASAcAKAoQALAoAABEQAABRgRAyQgRAxggAbQgiAbgyAAQhCAAgmgvgEB1MAHsQgdAqAABwQAABxAaAmQAaAlAnAAQAnAAAagmQAbglAAhxQAAhxgbglQgaglgnAAQgnAAgXAhgEBrFANwICFnaIAtAAIiFHagEhFdANBQgtg6AAiBQAAhRARgxQAQgyAhgbQAhgbAyAAQAlAAAcAPQAcAPASAcQASAcAKAoQALAoAABEQAABRgRAyQgRAxggAbQgiAbgyAAQhCAAgmgvgEhEzAHsQgdAqAABwQAABxAaAmQAaAlAnAAQAnAAAagmQAbglAAhxQAAhxgbglQgaglgnAAQgnAAgXAhgEhO6ANwICFnaIAtAAIiFHagEhp/ANsIAAiJIj5AAIAAhBIEGlzIA5AAIAAFzIBOAAIAABBIhOAAIAACJgEhsyAKiICzAAIAAkCgEBwtANoIAAlmQgUATghAUQghATgbAKIAAg3QAwgWAjgfQAjggAPgeIAkAAIAAHMgEBoXANoIAAlmQgUATghAUQghATgaAKIAAg3QAvgWAjgfQAkggAOgeIAlAAIAAHMgEhJSANoIAAlmQgUATghAUQghATgbAKIAAg3QAwgWAjgfQAjggAPgeIAkAAIAAHMgEhRoANoIAAlmQgUATghAUQghATgaAKIAAg3QAvgWAjgfQAkggAOgeIAlAAIAAHMgEBMSAMQQg5hHAAiiQAAhlAWg+QAUg+AqgiQApghA+AAQAuAAAjATQAjASAWAjQAXAjANAyQANAyAABVQAABlgVA+QgVA+gpAiQgpAig/AAQhTAAgvg8gEBNGAFmQgkA0AACNQAACNAhAvQAhAvAwAAQAxAAAhgvQAhgvAAiNQAAiNghgvQghgugyAAQgwAAgdApgEAiAAKTIAAg1ICiAAIAAA1gEg62AKDIAAg1ICiAAIAAA1gEA25AIVQgagXgEgmIAngDQAEAcAPAOQAQAOAWAAQAaAAATgTQASgUAAghQAAgggSgSQgRgSgdAAQgRAAgPAIQgOAIgIANIgigEIAdiZICUAAIAAAjIh3AAIgQBQQAbgTAdAAQAnAAAbAbQAbAbAAAqQAAApgYAdQgcAlgyAAQgpAAgZgXgEAtaAIVQgagXgDgmIAmgDQAEAcAQAOQAQAOAVAAQAbAAASgTQASgUAAghQAAgggRgSQgSgSgcAAQgSAAgOAIQgOAIgIANIgjgEIAdiZICUAAIAAAjIh3AAIgQBQQAbgTAeAAQAnAAAaAbQAbAbAAAqQAAApgXAdQgdAlgyAAQgoAAgagXgAX6IJQgggoAAhaQAAg5AMgjQAMgiAXgTQAXgTAjAAQAaAAATAKQAUAKAMAUQANAUAHAcQAIAcAAAwQAAA4gMAjQgMAjgXATQgXASgjAAQgvAAgaghgAYXEaQgUAeAABPQAABPATAaQASAaAbAAQAbAAATgaQASgbAAhOQAAhPgSgaQgTgbgbAAQgcAAgQAXgAG0ISQgcgZgEgoIAqgEQAEAeARAQQARAPAXAAQAdAAAUgVQATgWAAgkQAAghgTgTQgTgUgeAAQgTAAgQAJQgPAIgJAOIglgFIAfilICgAAIAAAmIiAAAIgSBWQAegUAfAAQAqAAAdAdQAdAdAAAuQAAAsgZAfQgfAng2AAQgsAAgbgYgAWBIlIAAj7QgOAOgXANQgXANgTAHIAAgmQAhgPAZgWQAZgXAKgUIAZAAIAAFCgAMEIlQAAgPAFgMQAIgWASgVQASgVAhgcQA1grASgYQASgaAAgWQAAgXgQgRQgRgQgbAAQgcAAgRASQgSARAAAeIgogEQAEguAbgXQAbgYAuAAQAuAAAbAZQAbAaAAAmQAAATgIATQgIASgSAVQgSAUgrAkQgjAegKALQgKAKgHALICdAAIAAAmgAq0IOQgagXgEgmIAngDQAEAcAPAOQAQAOAWAAQAaAAATgUQASgUAAghQAAgfgSgSQgRgSgdAAQgRAAgPAIQgOAIgIANIgigFIAdiZICUAAIAAAjIh3AAIgQBQQAbgSAdAAQAnAAAbAbQAbAbAAAqQAAApgYAdQgcAkgyAAQgpAAgZgWgAzFIOQgagXgDgmIAmgDQAEAcAQAOQAQAOAVAAQAbAAASgUQASgUAAghQAAgfgRgSQgSgSgcAAQgSAAgOAIQgOAIgIANIgjgFIAdiZICUAAIAAAjIh3AAIgQBQQAbgSAeAAQAnAAAaAbQAbAbAAAqQAAApgXAdQgdAkgyAAQgoAAgagWgEgjBAH/QgggpAAhaQAAg5AMgiQALgjAXgTQAYgTAjAAQAZAAAUALQATAKANAUQAMATAIAdQAHAcAAAvQAAA4gMAjQgLAjgXATQgXATgjAAQgvAAgaghgEgikAEQQgVAdAABPQAABPATAaQASAaAcAAQAaAAATgaQATgaAAhPQAAhPgTgaQgTgagbAAQgbAAgQAXgEg1UAIHQgcgYgEgpIApgDQAFAeAQAPQARAPAYAAQAcAAAUgVQAUgVAAgkQAAgigTgTQgTgTgfAAQgTAAgPAIQgPAJgJAOIglgFIAfilICfAAIAAAmIiAAAIgRBWQAdgUAgAAQAqAAAdAdQAdAdAAAtQAAAsgaAgQgfAng1AAQgsAAgbgZgEgk7AIaIAAj7QgOAOgXAOQgXANgSAHIAAgmQAhgQAYgWQAZgWAKgVIAaAAIAAFCgEgwEAIaQgBgOAGgNQAIgWARgVQASgVAigbQA0grATgZQASgZAAgWQAAgYgRgQQgQgQgbAAQgdAAgRARQgRARAAAeIgpgEQAFgtAagYQAcgYAtAAQAuAAAbAaQAbAZAAAmQAAATgHATQgIATgTAUQgSAVgqAkQgkAegKAKQgKALgGALICdAAIAAAlgEAx7AH2IAAhRIhRAAIAAgiIBRAAIAAhSIAiAAIAABSIBRAAIAAAiIhRAAIAABRgEgqoAHnIAAhYIhYAAIAAglIBYAAIAAhYIAlAAIAABYIBXAAIAAAlIhXAAIAABYgAv/HGIAAglIBwAAIAAAlgAP+HFIAAgoIB5AAIAAAogAT0hpQgggoAAhaQAAg5AMgjQALgiAXgTQAXgTAjAAQAaAAAUAKQATAKANAUQAMAUAIAcQAHAcAAAwQAAA4gMAjQgLAjgXATQgYASgjAAQguAAgaghgAURlYQgVAeAABPQAABPATAaQASAaAbAAQAbAAATgaQASgbAAhOQAAhPgSgaQgTgbgbAAQgbAAgQAXgAPNhNQAAgPAFgMQAIgWASgVQASgVAhgcQA0grATgYQASgaAAgWQAAgXgQgRQgRgQgbAAQgcAAgSASQgRARAAAeIgogEQAEguAbgXQAbgYAuAAQAuAAAbAZQAbAaAAAmQAAATgIATQgIASgSAVQgSAUgrAkQgkAegKALQgJAKgHALICdAAIAAAmgEgspgBuQgggpAAhaQAAg5AMgiQALgjAXgTQAXgTAjAAQAaAAAUALQATAKANAUQAMATAIAdQAHAcAAAvQAAA4gMAjQgLAjgXATQgYATgjAAQguAAgaghgEgsMgFdQgVAdAABPQAABPATAaQASAaAbAAQAbAAATgaQASgaAAhPQAAhPgSgaQgTgagbAAQgbAAgQAXgEgxQgBTQAAgOAFgNQAIgWASgVQASgVAhgbQA0grATgZQASgZAAgWQAAgYgQgQQgRgQgbAAQgcAAgSARQgRARAAAeIgogEQAEgtAbgYQAbgYAuAAQAuAAAbAaQAbAZAAAmQAAATgIATQgIATgSAUQgSAVgrAkQgkAegKAKQgJALgHALICdAAIAAAlgEAzegCFQgegmAAhUQAAg0ALggQALghAVgRQAWgSAgAAQAYAAASAKQASAKAMASQAMASAHAaQAGAaAAAsQAAA1gLAgQgKAggWASQgVASghAAQgrAAgYgfgEAz5gFjQgTAbAABJQAABKARAYQARAYAZAAQAZAAARgYQASgYAAhKQAAhJgSgYQgRgYgZAAQgZAAgPAVgEAvMgBsQAAgNAFgMQAHgUARgUQAQgTAfgaQAxgnARgYQARgXAAgVQAAgVgPgPQgQgPgZAAQgaAAgQAQQgQAPAAAcIgmgDQAEgqAZgWQAZgXArAAQArAAAZAYQAZAYAAAjQAAASgIARQgHASgRASQgRAUgnAhQghAcgKAJQgJAKgGAKICSAAIAAAjgArOiOQgdglAAhUQAAg0ALghQAKggAWgRQAVgSAhAAQAYAAASAKQASAJAMATQALASAHAaQAHAaAAAsQAAA1gLAgQgLAggVASQgWARggAAQgsAAgYgfgAqzlrQgTAbAABJQAABKARAYQARAYAaAAQAZAAARgYQARgZAAhJQAAhJgRgYQgRgZgaAAQgZAAgPAWgAvfh0QgBgNAFgMQAIgUAQgUQARgTAfgaQAwgoASgXQAQgXAAgVQAAgWgPgPQgPgPgZAAQgbAAgQAQQgQAQAAAcIglgEQAEgqAZgWQAZgWAqAAQArAAAZAYQAZAYAAAjQAAASgHARQgIARgQATQgRATgoAiQghAbgJAKQgJAKgGAKICRAAIAAAjgEhsngD8QgygsgHhIIBGgJQAMA7AeAbQAcAaAqAAQAyAAAigiQAigjAAgyQAAgxgfgfQgggggxAAQgUAAgdAIIAHg+IAMABQAtAAAkgXQAjgYAAgwQAAgngagaQgagZgpAAQgpAAgcAaQgbAagIAzIhGgMQANhHAtgnQAugnBEAAQAvAAAnAVQAoATAVAjQAVAjAAAnQAAAlgUAfQgUAegnASQAzAMAcAlQAcAlAAA3QAABLg3A0Qg3A0hTAAQhMAAgxgtgEB0igEFQgtg5AAiBQAAhRARgyQAQgxAhgbQAhgbAyAAQAlAAAcAPQAcAOASAdQASAbAKApQALAoAABEQAABQgRAyQgRAyggAbQgiAbgyAAQhCAAgmgwgEB1MgJaQgdAqAABxQAABxAaAlQAaAlAnAAQAnAAAaglQAbgmAAhwQAAhxgbglQgagmgnAAQgnAAgXAhgEBrFgDVICFnaIAtAAIiFHagEhFdgEFQgtg5AAiBQAAhRARgyQAQgxAhgbQAhgbAyAAQAlAAAcAPQAcAOASAdQASAbAKApQALAoAABEQAABQgRAyQgRAyggAbQgiAbgyAAQhCAAgmgwgEhEzgJaQgdAqAABxQAABxAaAlQAaAlAnAAQAnAAAaglQAbgmAAhwQAAhxgbglQgagmgnAAQgnAAgXAhgEhO6gDVICFnaIAtAAIiFHagEBwtgDdIAAlnQgUAUghATQghATgbAKIAAg2QAwgWAjggQAjggAPgdIAkAAIAAHMgEBoXgDdIAAlnQgUAUghATQghATgaAKIAAg2QAvgWAjggQAkggAOgdIAlAAIAAHMgEhJSgDdIAAlnQgUAUghATQghATgbAKIAAg2QAwgWAjggQAjggAPgdIAkAAIAAHMgEhRogDdIAAlnQgUAUghATQghATgaAKIAAg2QAvgWAjggQAkggAOgdIAlAAIAAHMgEBMSgE3Qg5hHAAiiQAAhlAWg+QAUg+AqgiQApghA+AAQAuAAAjATQAjASAWAjQAXAjANAyQANAyAABVQAABlgVA+QgVA+gpAiQgpAig/AAQhTAAgvg8gEBNGgLhQgkA0AACNQAACNAhAvQAhAvAwAAQAxAAAhgvQAhgvAAiNQAAiNghgvQghgugyAAQgwAAgdApgEAiMgHLIAAg1ICiAAIAAA1gADEnLIAAg1ICiAAIAAA1gA8YnLIAAg1ICiAAIAAA1gEA3NgJBQgagXgEglIAngEQAEAcAPAPQAQAOAWAAQAaAAATgUQASgUAAghQAAgfgSgSQgRgSgdAAQgRAAgPAIQgOAHgIANIgigEIAdiZICUAAIAAAjIh3AAIgQBQQAbgTAdAAQAnAAAbAbQAbAbAAArQAAAogYAdQgcAlgyAAQgpAAgZgXgEAu8gJBQgagXgDglIAmgEQAEAcAQAPQAQAOAVAAQAbAAASgUQASgUAAghQAAgfgRgSQgSgSgcAAQgSAAgOAIQgOAHgIANIgjgEIAdiZICUAAIAAAjIh3AAIgQBQQAbgTAeAAQAnAAAaAbQAbAbAAArQAAAogXAdQgdAlgyAAQgoAAgagXgAa5pPQgggpAAhaQAAg5AMgiQAMgjAXgTQAXgTAjAAQAaAAATALQAUAKAMAUQANATAHAdQAIAcAAAvQAAA4gMAjQgMAjgXATQgXATgjAAQgvAAgaghgAbWs+QgUAdAABPQAABPATAaQASAaAbAAQAbAAATgaQASgaAAhPQAAhPgSgaQgTgagbAAQgcAAgQAXgAImpHQgcgYgEgpIAqgDQAEAeARAPQARAPAXAAQAdAAAUgVQATgVAAgkQAAgigTgTQgTgTgeAAQgTAAgQAIQgPAJgJAOIglgFIAfilICgAAIAAAmIiAAAIgSBWQAegUAfAAQAqAAAdAdQAdAdAAAtQAAAsgZAgQgfAng2AAQgsAAgbgZgAnfpJQgagXgDgmIAmgDQAEAcAQAOQAQAOAVAAQAbAAASgTQASgUAAghQAAgggRgSQgSgSgcAAQgSAAgOAIQgOAIgIANIgjgEIAdiZICUAAIAAAjIh3AAIgQBQQAbgTAeAAQAnAAAaAbQAbAbAAAqQAAApgXAdQgdAlgyAAQgoAAgagXgAw9pJQgagXgEgmIAngDQAEAcAPAOQAQAOAWAAQAbAAASgTQASgUAAghQAAgggSgSQgRgSgcAAQgSAAgPAIQgOAIgIANIgigEIAdiZICUAAIAAAjIh3AAIgQBQQAbgTAdAAQAnAAAbAbQAbAbAAAqQAAApgYAdQgcAlgyAAQgpAAgZgXgAZAo0IAAj7QgOAOgXAOQgXANgTAHIAAgmQAhgQAZgWQAZgWAKgVIAZAAIAAFCgAN2o0QAAgOAFgNQAIgWASgVQASgVAhgbQA1grASgZQASgZAAgWQAAgYgQgQQgRgQgbAAQgcAAgRARQgSARAAAeIgogEQAEgtAbgYQAbgYAuAAQAuAAAbAaQAbAZAAAmQAAATgIATQgIATgSAUQgSAVgrAkQgjAegKAKQgKALgHALICdAAIAAAlgEgmOgJVQgggoAAhaQAAg5AMgjQAMgiAXgTQAXgTAjAAQAaAAATAKQAUAKAMAUQANAUAHAcQAIAcAAAwQAAA4gMAjQgMAjgXATQgXASgjAAQgvAAgaghgEglxgNEQgUAeAABPQAABPATAaQASAaAbAAQAbAAATgaQASgbAAhOQAAhPgSgaQgTgbgbAAQgcAAgQAXgEg3UgJMQgcgZgEgoIAqgEQAEAeARAQQARAPAXAAQAdAAAUgVQATgWAAgkQAAghgTgTQgTgUgeAAQgTAAgQAJQgPAIgJAOIglgFIAfilICgAAIAAAmIiAAAIgSBWQAegUAfAAQAqAAAdAdQAdAdAAAuQAAAsgZAfQgfAng2AAQgsAAgbgYgEgoHgI5IAAj7QgOAOgXANQgXANgTAHIAAgmQAhgPAZgWQAZgXAKgUIAZAAIAAFCgEgyEgI5QAAgPAFgMQAIgWASgVQASgVAhgcQA1grASgYQASgaAAgWQAAgXgQgRQgRgQgbAAQgcAAgRASQgSARAAAeIgogEQAEguAbgXQAbgYAuAAQAuAAAbAZQAbAaAAAmQAAATgIATQgIASgSAVQgSAUgrAkQgjAegKALQgKAKgHALICdAAIAAAmgATSpnIAAhYIhXAAIAAglIBXAAIAAhYIAlAAIAABYIBXAAIAAAlIhXAAIAABYgAsdpoIAAhRIhRAAIAAgiIBRAAIAAhSIAjAAIAABSIBRAAIAAAiIhRAAIAABRgEAyCgKJIAAgkIBwAAIAAAkgEguKgKZIAAgoIB5AAIAAAogAT0y3QgggpAAhaQAAg5AMgiQALgjAXgTQAXgTAjAAQAaAAAUALQATAKANAUQAMATAIAdQAHAcAAAvQAAA4gMAjQgLAjgXATQgYATgjAAQguAAgaghgAUR2mQgVAdAABPQAABPATAaQASAaAbAAQAbAAATgaQASgaAAhPQAAhPgSgaQgTgagbAAQgbAAgQAXgAPNycQAAgOAFgNQAIgWASgVQASgVAhgbQA0grATgZQASgZAAgWQAAgYgQgQQgRgQgbAAQgcAAgSARQgRARAAAeIgogEQAEgtAbgYQAbgYAuAAQAuAAAbAaQAbAZAAAmQAAATgIATQgIATgSAUQgSAVgrAkQgkAegKAKQgJALgHALICdAAIAAAlgEgspgS9QgggoAAhaQAAg5AMgjQALgiAXgTQAXgTAjAAQAaAAAUAKQATAKANAUQAMAUAIAcQAHAcAAAwQAAA4gMAjQgLAjgXATQgYASgjAAQguAAgaghgEgsMgWsQgVAeAABPQAABPATAaQASAaAbAAQAbAAATgaQASgbAAhOQAAhPgSgaQgTgbgbAAQgbAAgQAXgAtDy+QgeglAAhUQAAg0ALghQALggAVgRQAWgSAgAAQAYAAASAKQASAJAMATQAMASAHAaQAGAaAAAsQAAA1gLAgQgKAggWASQgVARghAAQgrAAgYgfgAso2bQgTAbAABJQAABKARAYQARAYAZAAQAZAAARgYQASgZAAhJQAAhJgSgYQgRgZgZAAQgZAAgPAWgEgxQgShQAAgPAFgMQAIgWASgVQASgVAhgcQA0grATgYQASgaAAgWQAAgXgQgRQgRgQgbAAQgcAAgSASQgRARAAAeIgogEQAEguAbgXQAbgYAuAAQAuAAAbAZQAbAaAAAmQAAATgIATQgIASgSAVQgSAUgrAkQgkAegKALQgJAKgHALICdAAIAAAmgAxVykQAAgNAFgMQAHgUARgUQAQgTAfgaQAxgoARgXQARgXAAgVQAAgWgPgPQgQgPgZAAQgaAAgQAQQgQAQAAAcIgmgEQAEgqAZgWQAZgWArAAQArAAAZAYQAZAYAAAjQAAASgIARQgHARgRATQgRATgnAiQghAbgKAKQgJAKgGAKICSAAIAAAjgEAw7gTUQgdglAAhUQAAg1ALggQAKggAWgSQAVgRAhAAQAYAAASAKQASAJAMATQALARAHAbQAHAaAAAsQAAA0gLAhQgLAggVASQgWARggAAQgsAAgYgfgEAxWgWxQgTAbAABJQAABJARAZQARAYAaAAQAZAAARgZQARgYAAhJQAAhJgRgZQgRgYgaAAQgZAAgPAWgEAsqgS6QgBgNAFgMQAIgVAQgTQARgUAfgZQAwgoASgXQAQgXAAgVQAAgWgPgPQgPgPgZAAQgbAAgQAQQgQAQAAAcIglgEQAEgqAZgWQAZgWAqAAQArAAAZAYQAZAXAAAjQAAASgHASQgIARgQATQgRATgoAiQghAbgJAKQgJAKgGAKICRAAIAAAjgEB0igVLQgtg6AAiBQAAhRARgxQAQgyAhgbQAhgbAyAAQAlAAAcAPQAcAPASAcQASAcAKAoQALAoAABEQAABRgRAyQgRAxggAbQgiAbgyAAQhCAAgmgvgEB1MgagQgdAqAABwQAABxAaAmQAaAlAnAAQAnAAAagmQAbglAAhxQAAhxgbglQgaglgnAAQgnAAgXAhgEBrFgUcICFnaIAtAAIiFHagEhFdgVLQgtg6AAiBQAAhRARgxQAQgyAhgbQAhgbAyAAQAlAAAcAPQAcAPASAcQASAcAKAoQALAoAABEQAABRgRAyQgRAxggAbQgiAbgyAAQhCAAgmgvgEhEzgagQgdAqAABwQAABxAaAmQAaAlAnAAQAnAAAagmQAbglAAhxQAAhxgbglQgaglgnAAQgnAAgXAhgEhO6gUcICFnaIAtAAIiFHagEhtqgUeQAAgaAJgXQAOgnAgglQAggmA8gxQBdhNAhgsQAhgtAAgoQAAgqgegcQgegdgwAAQgzAAgeAeQgfAfAAA2IhIgIQAHhQAxgrQAwgqBSAAQBSAAAwAtQAwAuAABEQAAAigOAhQgOAiggAkQghAlhMBAQg/A1gSATQgSATgMATIEZAAIAABEgEBwtgUkIAAlmQgUATghAUQghATgbAKIAAg3QAwgWAjgfQAjggAPgeIAkAAIAAHMgEBoXgUkIAAlmQgUATghAUQghATgaAKIAAg3QAvgWAjgfQAkggAOgeIAlAAIAAHMgEhJSgUkIAAlmQgUATghAUQghATgbAKIAAg3QAwgWAjgfQAjggAPgeIAkAAIAAHMgEhRogUkIAAlmQgUATghAUQghATgaAKIAAg3QAvgWAjgfQAkggAOgeIAlAAIAAHMgEBMSgV/Qg5hHAAiiQAAhlAWg+QAUg+AqgiQApghA+AAQAuAAAjATQAjASAWAjQAXAjANAyQANAyAABVQAABlgVA+QgVA+gpAiQgpAig/AAQhTAAgvg8gEBNGgcpQgkA0AACNQAACNAhAvQAhAvAwAAQAxAAAhgvQAhgvAAiNQAAiNghgvQghgugyAAQgwAAgdApgADD4aIAAg1ICiAAIAAA1gApU55QgagXgEgmIAngDQAEAcAPAOQAQAOAWAAQAaAAATgTQASgUAAghQAAgggSgSQgRgSgdAAQgRAAgPAIQgOAIgIANIgigEIAdiZICUAAIAAAjIh3AAIgQBQQAbgTAdAAQAnAAAbAbQAbAbAAAqQAAApgYAdQgcAlgyAAQgpAAgZgXgAyz55QgagXgDgmIAmgDQAEAcAQAOQAQAOAVAAQAbAAASgTQASgUAAghQAAgggRgSQgSgSgcAAQgSAAgOAIQgOAIgIANIgjgEIAdiZICUAAIAAAjIh3AAIgQBQQAbgTAeAAQAnAAAaAbQAbAbAAAqQAAApgXAdQgdAlgyAAQgoAAgagXgEA0qgaPQgagXgDgmIAmgDQAEAcAQAOQAQAOAVAAQAbAAASgUQASgUAAghQAAgfgRgSQgSgSgcAAQgSAAgOAIQgOAIgIANIgjgFIAdiZICUAAIAAAjIh3AAIgQBQQAbgSAeAAQAnAAAaAbQAbAbAAAqQAAApgXAdQgdAkgyAAQgoAAgagWgEAsagaPQgagXgEgmIAngDQAEAcAPAOQAQAOAWAAQAbAAASgUQASgUAAghQAAgfgSgSQgRgSgcAAQgSAAgPAIQgOAIgIANIgigFIAdiZICUAAIAAAjIh3AAIgQBQQAbgSAdAAQAnAAAbAbQAbAbAAAqQAAApgYAdQgcAkgyAAQgpAAgZgWgAa56eQgggoAAhaQAAg5AMgjQAMgiAXgTQAXgTAjAAQAaAAATAKQAUAKAMAUQANAUAHAcQAIAcAAAwQAAA4gMAjQgMAjgXATQgXASgjAAQgvAAgaghgAbW+NQgUAeAABPQAABPATAaQASAaAbAAQAbAAATgaQASgbAAhOQAAhPgSgaQgTgbgbAAQgcAAgQAXgAIm6VQgcgZgEgoIAqgEQAEAeARAQQARAPAXAAQAdAAAUgVQATgWAAgkQAAghgTgTQgTgUgeAAQgTAAgQAJQgPAIgJAOIglgFIAfilICgAAIAAAmIiAAAIgSBWQAegUAfAAQAqAAAdAdQAdAdAAAuQAAAsgZAfQgfAng2AAQgsAAgbgYgAZA6CIAAj7QgOAOgXANQgXANgTAHIAAgmQAhgPAZgWQAZgXAKgUIAZAAIAAFCgAN26CQAAgPAFgMQAIgWASgVQASgVAhgcQA1grASgYQASgaAAgWQAAgXgQgRQgRgQgbAAQgcAAgRASQgSARAAAeIgogEQAEguAbgXQAbgYAuAAQAuAAAbAZQAbAaAAAmQAAATgIATQgIASgSAVQgSAUgrAkQgjAegKALQgKAKgHALICdAAIAAAmgEgmOgajQgggpAAhaQAAg5AMgiQAMgjAXgTQAXgTAjAAQAaAAATALQAUAKAMAUQANATAHAdQAIAcAAAvQAAA4gMAjQgMAjgXATQgXATgjAAQgvAAgaghgEglxgeSQgUAdAABPQAABPATAaQASAaAbAAQAbAAATgaQASgaAAhPQAAhPgSgaQgTgagbAAQgcAAgQAXgEg3UgabQgcgYgEgpIAqgDQAEAeARAPQARAPAXAAQAdAAAUgVQATgVAAgkQAAgigTgTQgTgTgeAAQgTAAgQAIQgPAJgJAOIglgFIAfilICgAAIAAAmIiAAAIgSBWQAegUAfAAQAqAAAdAdQAdAdAAAtQAAAsgZAgQgfAng2AAQgsAAgbgZgEgoHgaIIAAj7QgOAOgXAOQgXANgTAHIAAgmQAhgQAZgWQAZgWAKgVIAZAAIAAFCgEgyEgaIQAAgOAFgNQAIgWASgVQASgVAhgbQA1grASgZQASgZAAgWQAAgYgQgQQgRgQgbAAQgcAAgRARQgSARAAAeIgogEQAEgtAbgYQAbgYAuAAQAuAAAbAaQAbAZAAAmQAAATgIATQgIATgSAUQgSAVgrAkQgjAegKAKQgKALgHALICdAAIAAAlgAuS6YIAAhRIhRAAIAAgiIBRAAIAAhSIAiAAIAABSIBRAAIAAAiIhRAAIAABRgATS62IAAhYIhXAAIAAglIBXAAIAAhXIAlAAIAABXIBXAAIAAAlIhXAAIAABYgEAvfgbXIAAglIBxAAIAAAlgEguKgboIAAgnIB5AAIAAAngEB0igmSQgtg5AAiBQAAhRARgyQAQgxAhgbQAhgbAyAAQAlAAAcAPQAcAOASAdQASAbAKApQALAoAABEQAABQgRAyQgRAyggAbQgiAbgyAAQhCAAgmgwgEB1MgrnQgdAqAABxQAABxAaAlQAaAlAnAAQAnAAAaglQAbgmAAhwQAAhxgbglQgagmgnAAQgnAAgXAhgEBrFgliICFnaIAtAAIiFHagEhFdgmSQgtg5AAiBQAAhRARgyQAQgxAhgbQAhgbAyAAQAlAAAcAPQAcAOASAdQASAbAKApQALAoAABEQAABQgRAyQgRAyggAbQgiAbgyAAQhCAAgmgwgEhEzgrnQgdAqAABxQAABxAaAlQAaAlAnAAQAnAAAaglQAbgmAAhwQAAhxgbglQgagmgnAAQgnAAgXAhgEhO6gliICFnaIAtAAIiFHagEhqeglkIAAnAQgZAYgpAZQgqAYghAMIAAhEQA7gcAsgnQAtgoASglIAtAAIAAI/gEBwtglqIAAlnQgUAUghATQghATgbAKIAAg2QAwgWAjggQAjggAPgdIAkAAIAAHMgEBoXglqIAAlnQgUAUghATQghATgaAKIAAg2QAvgWAjggQAkggAOgdIAlAAIAAHMgEhJSglqIAAlnQgUAUghATQghATgbAKIAAg2QAwgWAjggQAjggAPgdIAkAAIAAHMgEhRoglqIAAlnQgUAUghATQghATgaAKIAAg2QAvgWAjggQAkggAOgdIAlAAIAAHMgEAUZgmbQgogjgGg6IA7gFQAHArAYAWQAYAVAhAAQApAAAcgeQAcgfAAgzQAAgwgbgbQgbgcgrAAQgcAAgWAMQgVAMgNAUIg1gHIAtjrIDjAAIAAA2Ii2AAIgZB7QApgdAuAAQA8AAApAqQApApAABBQAAA/gkAtQgsA4hNAAQg+AAgngjgEAQfgl4ICFnaIAtAAIiFHagEgpxgmbQgogjgGg6IA7gFQAHArAYAWQAYAVAhAAQApAAAcgeQAcgfAAgzQAAgwgbgbQgbgcgrAAQgcAAgWAMQgVAMgNAUIg1gHIAtjrIDjAAIAAA2Ii2AAIgZB7QApgdAuAAQA8AAApAqQApApAABBQAAA/gkAtQgsA4hNAAQg+AAgngjgEgtrgl4ICFnaIAtAAIiFHagEALPgmAQgBgVAHgSQAMgfAZgeQAageAwgoQBKg9AbgjQAagkAAggQAAgigYgXQgYgXgmAAQgpAAgYAZQgZAYAAArIg6gGQAGhAAngiQAngiBBAAQBCAAAmAkQAnAlAAA2QAAAbgLAbQgMAbgaAdQgaAdg9A0QgyAqgPAPQgOAPgJAQIDgAAIAAA2gEgy7gmAQgBgVAHgSQAMgfAZgeQAageAwgoQBKg9AbgjQAagkAAggQAAgigYgXQgYgXgmAAQgpAAgYAZQgZAYAAArIg6gGQAGhAAngiQAngiBBAAQBCAAAmAkQAnAlAAA2QAAAbgLAbQgMAbgaAdQgaAdg9A0QgyAqgPAPQgOAPgJAQIDgAAIAAA2gEgQKgnGQg5hIAAihQAAhmAVg9QAVg/ApghQApgiA/AAQAuAAAjATQAiASAXAkQAXAiANAzQAMAyAABVQAABlgUA+QgVA9gpAiQgpAig/AAQhTAAgvg7gEgPWgtxQglA1AACNQAACNAhAvQAhAuAxAAQAwAAAhgvQAhgvAAiMQAAiOghguQghgvgxAAQgxAAgcApgEBMSgnHQg5hHAAiiQAAhlAWg+QAUg+AqgiQApghA+AAQAuAAAjATQAjASAWAjQAXAjANAyQANAyAABVQAABlgVA+QgVA+gpAiQgpAig/AAQhTAAgvg8gEBNGgtxQgkA0AACNQAACNAhAvQAhAvAwAAQAxAAAhgvQAhgvAAiNQAAiNghgvQghgugyAAQgwAAgdApgEAtSgnHQg5hHAAiiQAAhlAVg+QAVg+ApgiQApghA/AAQAuAAAjATQAiASAXAjQAXAjANAyQAMAyAABVQAABlgUA+QgVA+gpAiQgpAig/AAQhTAAgvg8gEAuGgtxQglA0AACNQAACNAhAvQAhAvAxAAQAwAAAhgvQAhgvAAiNQAAiNghgvQghgugxAAQgxAAgcApgEAzgg00IgFgrQAPAEALAAQAPAAAJgFQAKgFAFgJQAFgHAJgbIAEgLIhmkOIAxAAIA5CcQAKAdAJAhQAIgfALgeIA5idIAuAAIhmESQgRAsgJARQgMAXgQAKQgQALgWAAQgNAAgQgGgEAWCg00IgFgrQAPAEAMAAQAPAAAJgFQAJgFAGgJQAEgHAKgbIAEgLIhmkOIAxAAIA4CcQALAdAJAhQAHgfALgeIA6idIAuAAIhnESQgQAsgKARQgMAXgPAKQgQALgWAAQgNAAgRgGgEgMJg00IgFgrQAPAEALAAQAPAAAJgFQAKgFAFgJQAFgHAJgbIAEgLIhmkOIAxAAIA5CcQAKAdAJAhQAIgfALgeIA5idIAuAAIhmESQgRAsgJARQgMAXgQAKQgQALgWAAQgNAAgQgGgEBJqg04IAAo+IBBAAIAAA2QAWggAdgPQAcgQApAAQA1AAApAbQAoAbAVAyQAVAyAAA7QAABAgXAzQgXAzgrAbQgsAbgwAAQgjAAgcgPQgcgPgSgWIAADKgEBLNg8eQgjAqAABQQAABQAhAmQAgAmAuAAQAvAAAignQAhgoAAhTQAAhPghgoQgggnguAAQgtAAgiAqgEgSxg04IAAo+IBAAAIAAA2QAXggAcgPQAdgQAoAAQA1AAApAbQApAbAUAyQAVAyAAA7QAABAgXAzQgXAzgrAbQgsAbgwAAQgjAAgcgPQgcgPgSgWIAADKgEgRPg8eQgiAqAABQQAABQAgAmQAhAmAuAAQAuAAAignQAhgoAAhTQAAhPgggoQghgngtAAQgtAAgjAqgEgxlg04IAAo+IBAAAIAAA2QAXggAcgPQAdgQAoAAQA1AAApAbQApAbAUAyQAVAyAAA7QAABAgXAzQgXAzgrAbQgsAbgwAAQgjAAgcgPQgcgPgSgWIAADKgEgwDg8eQgiAqAABQQAABQAgAmQAhAmAuAAQAuAAAignQAhgoAAhTQAAhPgggoQghgngtAAQgtAAgjAqgEhxzg04IAAo+IBBAAIAAA2QAWggAdgPQAcgQApAAQA1AAApAbQAoAbAVAyQAVAyAAA7QAABAgXAzQgXAzgrAbQgsAbgwAAQgjAAgcgPQgcgPgSgWIAADKgEhwQg8eQgjAqAABQQAABQAhAmQAgAmAuAAQAvAAAignQAhgoAAhTQAAhPghgoQgggnguAAQgtAAgiAqgEBtMg2IIAAglICsjFIgzABIhuAAIAAglIDcAAIAAAeIiuDLQAegDAbAAIB9AAIAAAogEBP8g2cIAAglICsjFIgzACIhuAAIAAglIDcAAIAAAeIiuDKQAegCAbAAIB9AAIAAAngEAyEg2cIhGhqIhHBqIg3AAIBiiMIhbiBIA5AAIApA/IATAeIAVgeIAtg/IA3AAIhdB/IBkCOgEANYg2cIhGhqIhHBqIg3AAIBjiMIhciBIA6AAIApA/IATAeIAUgeIAug/IA2AAIhdB/IBkCOgEgoVg2cIhGhqIhHBqIg3AAIBiiMIhbiBIA5AAIApA/IATAeIAVgeIAtg/IA3AAIhdB/IBkCOgEBn5g3WQgqgbgXgxQgXgxAAhAQAAg+AVgyQAVgzApgbQApgbAzAAQAmAAAdAQQAeAQASAZIAAjNIBGAAIAAI8IhBAAIAAg0QgoA+hMAAQgyAAgpgcgEBoJg8LQggAmAABSQAABQAiAnQAiAoAtAAQAuAAAhgmQAggmAAhNQAAhVghgoQghgogwAAQgvAAgfAngEApyg3pQgqgcgWgwQgXgyAAg/QAAg+AUgzQAVgzApgbQAqgaAzAAQAlAAAeAQQAdAPASAaIAAjOIBGAAIAAI9IhBAAIAAg1QgnA+hNAAQgxAAgqgbgEAqDg8fQggAmAABTQAABPAhAoQAiAnAuAAQAuAAAgglQAggmAAhNQAAhWghgnQgggogwAAQgvAAgfAmgEAFHg3pQgqgcgXgwQgXgyAAg/QAAg+AVgzQAVgzApgbQApgaAzAAQAmAAAdAQQAeAPASAaIAAjOIBGAAIAAI9IhBAAIAAg1QgoA+hMAAQgyAAgpgbgEAFXg8fQggAmAABTQAABPAiAoQAiAnAtAAQAuAAAhglQAggmAAhNQAAhWghgnQghgogwAAQgvAAgfAmgEhNng3vQgqgigMhCIBFgLQAGAqAbAWQAbAWAwAAQAwAAAYgTQAXgUAAgbQAAgYgVgNQgOgKg5gOQhOgUgdgOQgfgOgPgZQgPgZAAgfQAAgcAMgXQANgYAWgQQAQgMAdgIQAcgIAgAAQAxAAAlAOQAlAOASAYQARAYAHAoIhFAJQgFgggWgSQgXgSgpAAQgwAAgVAQQgUAQAAAWQAAAOAIAKQAJAMASAHQALAEAzAOQBLAUAeANQAdANARAYQAQAYAAAkQAAAjgUAfQgVAfgmARQgnARgxAAQhRAAgqghgEhlXg3pQgqgcgWgwQgXgyAAg/QAAg+AUgzQAVgzApgbQAqgaAzAAQAlAAAeAQQAdAPASAaIAAjOIBGAAIAAI9IhBAAIAAg1QgnA+hNAAQgxAAgqgbgEhlGg8fQggAmAABTQAABPAhAoQAiAnAuAAQAuAAAgglQAggmAAhNQAAhWghgnQgggogwAAQgvAAgfAmgEh3og3vQgrgigMhCIBGgLQAGAqAbAWQAaAWAwAAQAxAAAXgTQAYgUAAgbQAAgYgVgNQgPgKg5gOQhNgUgegOQgegOgPgZQgQgZAAgfQAAgcANgXQAMgYAWgQQARgMAcgIQAcgIAhAAQAxAAAlAOQAkAOASAYQASAYAGAoIhEAJQgFgggWgSQgXgSgpAAQgxAAgUAQQgVAQAAAWQAAAOAJAKQAIAMATAHQAKAEA0AOQBKAUAeANQAdANARAYQARAYAAAkQAAAjgUAfQgVAfgnARQgmARgxAAQhRAAgqghgEATGg4LIAAguICMAAIAAAugEBxWg7BQgBgRAGgPQAKgZAVgYQAUgZAnggQA9gyAVgdQAWgdAAgaQAAgbgUgSQgTgTggAAQghAAgTAUQgUATAAAjIgvgEQAEg1AggbQAfgcA1AAQA2AAAfAeQAgAdAAAsQAAAXgKAVQgJAWgVAYQgVAYgxApQgqAjgLAMQgMAMgIANIC3AAIAAAsgEhfSg7rQghgegEguIAtgGQAIAnATARQATARAbAAQAgAAAXgWQAWgXAAghQAAgfgVgUQgUgVggAAQgNAAgTAFIAFgoIAHAAQAdAAAYgPQAXgPAAggQAAgZgRgQQgRgRgbAAQgbAAgRARQgSARgFAhIgugIQAJguAdgZQAegZAsAAQAfAAAZANQAaANAOAWQANAXAAAZQAAAYgNAUQgNAUgZAMQAhAHASAYQASAYAAAkQAAAxgjAiQgkAig2AAQgxAAgggdgEhqwg7rQgggegFguIAugGQAIAnATARQASARAcAAQAgAAAWgWQAWgXAAghQAAgfgUgUQgVgVggAAQgMAAgUAFIAFgoIAIAAQAdAAAXgPQAYgPAAggQAAgZgRgQQgRgRgbAAQgbAAgSARQgSARgFAhIgtgIQAIguAegZQAdgZAtAAQAeAAAaANQAZANAOAWQAOAXAAAZQAAAYgNAUQgNAUgaAMQAhAHATAYQASAYAAAkQAAAxgkAiQgjAig3AAQgxAAgggdgEAZ2g7VQgBgQAGgPQAKgaAVgYQAUgYAnggQA9gyAVgdQAWgdAAgaQAAgbgUgTQgTgTggAAQghAAgTAUQgUAUAAAjIgvgFQAEg0AggcQAfgbA1AAQA2AAAfAdQAgAeAAAsQAAAWgKAWQgJAVgVAYQgVAYgxAqQgqAigLANQgMAMgIAMIC3AAIAAAsgEAOkg7VQgBgQAGgPQAKgaAVgYQAUgYAnggQA9gyAVgdQAWgdAAgaQAAgbgUgTQgTgTggAAQghAAgTAUQgUAUAAAjIgvgFQAEg0AggcQAfgbA1AAQA2AAAfAdQAgAeAAAsQAAAWgKAWQgJAVgVAYQgVAYgxAqQgqAigLANQgMAMgIAMIC3AAIAAAsg");
	this.shape_1.setTransform(790.825,448.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1,1).p("EBMjgv9ICSDhIBwphIPQAAEBMjgcWICSDiIBwpiIPQAAEBP8gIfICRDiIBxpiIPQAAEBP8ALIICRDiIBxpiIPQAAEApMgv4ICSDhIBxphIUkAAEApMgcRICSDiIBxpiIUkAAA7AokICRDiIBxpiIPPAAA8dKxICRDhIBxphIPPAAEApMgIaICSDiIBxpiIUkAAAJqexICRDhIBxphIPPAAEAp7AfMICRDiIBxphIPPAAEApMALNICSDiIBxpiIUkAAEg/LgvDICRDiIBxpiIPPAAEhATgcOICSDiIBwpiIPQAAEhjNgv4ICSDiIBwpiIPQAAEhjNgcNICSDhIBwpiIPQAAEhjNgIjICSDiIBwpiIPQAAEhjNAexICSDiIBwpiIPQAAEhjNALGICSDiIBwpiIPQAAEhjNAycICSDiIBwpiIPQAAEAp7AyVICRDiIBxpiIPPAAEAH9AycICSDhIBxphIPPAA");
	this.shape_2.setTransform(921.7,510.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("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");
	this.shape_3.setTransform(789.55,447.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(5,1,1).p("EBHaAY8ICRDhIBxphIPQAAEBHaAuXICRDhIBxphIPQAAEgvagV+ICSDhIBwphIPQAAAoOBaICSDhIBwpgIPPAAEgvaAAwICSDhIBwpgIPQAAAfeY8ICSDhIBwphIPQAAEAidAvpICSDhIBxphIPPAAAp+1+ICRDhIBxphIPOAAEhargtJICSDhIBwphIPQAAEhargV+ICSDhIBwphIPQAAEgyUgtJICRDhIBxphIPPAAEharABMICSDhIBwpgIPQAA");
	this.shape_4.setTransform(925.8,520.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("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");
	this.shape_5.setTransform(784.25,447.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(5,1,1).p("EgnngnPIDME8ICdtWIVVAAEgkQgL1IDME8ICdtVIVVAAAJTPVIDME7ICdtUIVVAAEAMqAquIDME8ICdtVIVVAA");
	this.shape_6.setTransform(961.175,535);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("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");
	this.shape_7.setTransform(806.575,445.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("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");
	this.shape_8.setTransform(797.75,443.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(8,1,1).p("EAqUgfdIEiHDIDhzDIeeAAEAsvABoIEiHDIDhzCIeeAAAykBoIEjHDIDhzCIeeAAAyk/dIEjHDIDhzDIeeAAEgQJAkcIEjHDIDhzDIeeAAEhTQABoIEjHDIDhzCIeeAAEhTQgfdIEjHDIDhzDIeeAAEhTQAkcIEjHDIDhzDIeeAA");
	this.shape_9.setTransform(1002.25,553.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("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");
	this.shape_10.setTransform(808.975,442.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(8,1,1).p("ALJy5IGYJ3IE76qMAqpAAAEhELgS6IGXJ3IE76qMAqqAAAEhEMAZ2IGXJ3IE76qMAqqAAAAOSZ2IGXJ4IE76rMAqpAAA");
	this.shape_11.setTransform(1066.525,588.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("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");
	this.shape_12.setTransform(807.275,438.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[]},1).wait(2));

	// 圖層_2
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBclhEvIe3AAIAARMIAARLIAAABIAARKIAAACI+3AAIAARLIAARLIAARMIAARNIAARMI+3AAI+3AAI+3AAI+2AAI+1AAI+5AAI+3AAIAAxMIAAxNIe3AAIAAxMIAAxLI+3AAIAAxLIAAgCIAAxKIAAgBIe3AAIAAxLIAAxMIe5AAIAARMIAARLIe1AAIAAABIAARKIAAACI+1AAI+5AAIAAgCIAAxKIAAgBIe5AAIAAABIAARKIAAACIAARLIAARLIAARMIAARNI+5AAIAAxNIe5AAIe1AAIAARNI+1AAIAARMEBclhEvIAARMIAARLIAAABIAARKIAAACI+3AAI+3AAIAARLIAARLIe3AAIAARMIAARNI+3AAI+3AAIAARMEBclgiYIe3AAEBclgRNIe3AAEB7cgiXI+3AAI+3AAIAARKIAAACIAARLIAARLIe3AAIe3AAIAARMIAARNI+3AAI+3AAIAARMEBclgzjIe3AAEB7cAAAIAARLEB7cAAAI+3AAI+3AAI+3AAI+3AAIAARLIAARMIAARNI+2AAIAARMEBclAiXIe3AAEB7cgRLIAARLEB7cAzkIAARMI+3AAEA9uhEvIAARMIe3AAEAe3hEvIAARMIAARLIAAABIAARKIAAACI+3AAIAARLI+2AAIAARLIAARMIe2AAIe3AAIAARNIAARMEA9ugiYIAAABI+3AAI+3AAIAARKIAAACI+2AAIAARLI+1AAI+5AAIAAxLI+3AAEAe3giYIe3AAIe3AAAe3xNIe3AAIe3AAEAe3gzjIe3AAIAARLEAe3hEvIe3AAIe3AAEAAAhEvIAARMIAARLIAAABI+2AAI+1AAI+5AAI+3AAEAe3AiXIe3AAIe3AAAe3RLIAARMEAAAgiYIe3AAAAAxNIe3AAEAAAgzjIe3AAEAAAhEvIe3AAAAARLIe3AAEge2hEvIAARMIAARLIe2AAEg9rgRNIe1AAIe2AAEg9rgzjIe1AAIe2AAEg9rhEvIe1AAIe2AAEh7bgzjIAAxMIe3AAEh7bgRNIe3AAIe5AAEh7bgiYIAAxLIe3AAIe5AAEh7bARLIAAxLEhckAzkI+3AAEh7bARLIe3AAIe5AAIe1AAIe2AAEh7bAiXIAAxMEhckBEwIAAxM");
	this.shape_13.setTransform(800.05,452.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBNKg8JIe3AAIAARMIAARLIAAABIAARKIAAACIAARKIAARMIAARMIAARNI+3AAI+3AAI+3AAI+3AAI+1AAI+4AAI+4AAIAAxNIAAxMIe4AAIAAxMI+4AAIAAxKIAAgCIAAxKIAAgBIAAxLIAAxMIe4AAIe4AAIAARMIe1AAIAARLIAAABIAARKIAAACI+1AAIAARKIAARMIe1AAIAARMIAARNEBNKg8JIAARMIAARLIAAABIAARKIAAACI+3AAI+3AAIAARKIAARMIAARMIAARNEAuTg8JIAARMIe3AAIe3AAEAuTgZyIAAABIAARKIAAACIAARKIAARMIAARMIAARNEAuTg8JIe3AAEAuTgq9IAARLIe3AAIe3AAEBNKgZxI+3AAI+3AAIAARKIAAACI+3AAIAARKIAARMIe3AAIe3AAIe3AAIAARMIAARNEAuTgInIe3AAIe3AAEAPcg8JIAARMIAARLIAAABI+3AAI+1AAIAARKIAAACI+4AAIAAgCIAAxKIAAgBIAAxLIAAxMEBNKAIlIAARMIe3AAEAuTAq9Ie3AAIe3AAEBNKAIlI+3AAI+3AAI+3AAI+1AAI+4AAIAAxKI+4AAEAPcAq9Ie3AAEAPcg8JIe3AAEAPcgq9Ie3AAAPconIe3AAAPc5yIe3AAEBNKgIlIAARKEgPbg8JIAARMIe3AAEguQgZyIAAABI+4AAI+4AAEguQg8JIe1AAIe3AAEguQgInIe1AAIe3AAEguQgZyIe1AAIe3AAEguQgq9IAARLEhsAgq9Ie4AAIe4AAEhsAgInIe4AAIe4AAEhsAgZyIe4AAIe4AAEhsAAZxIAAxMEhNIA8KIAAxNIAAxMIe4AAIAARMIAARNEhsAAq9Ie4AAIe4AAIe1AAIe3AAEBsBgZxI+3AAEBsBAIlI+3AAEBsBgIlI+3AA");
	this.shape_14.setTransform(799.9827,449.9911,1.1429,1.1429);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBGig66MAjRAAAIAATpIAAToIAAACIAATmIAAABIAAToIAATqEBGiA67MAjRAAAIAAzpEBGig66IAATpIAAToIAAACIAATmIAAABIAAToIAATqIAATpEAjRg66IAATpIAAToIAAACIAATmIAAABMgjRAAAIAAToIAATqIAATpMAjRAAAMAjRAAAEAAAg66IAATpMAjRAAAMAjRAAAMAjRAAAAAAzpIAAACIAATmIAAABMgjOAAAMgjTAAAIAAgBIAAzmIAAgCIAAzoIAAzpMAjTAAAIAATpIAAToIAAACIAATmIAAABIAAToIAATqIAATpMAjOAAAAAAzpMAjRAAAMAjRAAAMAjRAAAAAAgBMAjRAAAMAjRAAAMAjRAAAEAjRgTnMgjRAAAMgjOAAAMgjTAAAMgjRAAAIAAgCMAjRAAAMAjTAAAMAjOAAAEAAAg66MAjRAAAMAjRAAAEAAAgnRIAAToEAjRAnSIAATpEAjRAToMgjRAAAMgjOAAAMgjTAAAMgjRAAAIAAzoIAAgBIAAzmEAAAAnSMAjRAAAMAjRAAAMAjRAAAEAjRAToIAATqEAjRAAAIAAToEBGiAAAMgjRAAAEBGiAToMgjRAAAEBGigTnMgjRAAAEhpygnRIAAzpMAjRAAAEhGhAAAMgjRAAAEhpygABMAjRAAAMAjTAAAMAjOAAAEhpygTpIAAzoMAjRAAAMAjTAAAMAjOAAAEhpyAnSIAATpMAjRAAAIAAzpIAAzqIAAzoEhpyAnSMAjRAAAMAjTAAAMAjOAAAEhpyAnSIAAzqEhGhA67MAjTAAAEgjOg66MAjOAAAEBpzAToMgjRAAAEBpzAAAMgjRAAAEBpzgTnMgjRAAA");
	this.shape_15.setTransform(800.0203,450.0159,1.1667,1.1668);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(1,1,1).p("EA9ug5SMApKAAAIAAW8IAAW5IAAACIAAW3IAAACIAAW5MgpKAAAIAAW8MApKAAAIAA28EA9ug5SIAAW8IAAW5IAAACMgpJAAAIAAW3IAAACIAAW5IAAW8MApJAAAEAUlg5SIAAW8IAAW5IAAACMgpHAAAIAAW3IAAACIAAW5IAAW8MApHAAAEA9uALcIAAACIAAW5MgpJAAAMgpHAAAMgpLAAAMgpKAAAIAAW8MApKAAAIAA28IAA25IAAgCMApLAAAMApHAAAMApJAAAMApKAAAEAUlg5SMApJAAAEAUlgiWMApJAAAMApKAAAEA9uALeMgpJAAAMgpHAAAMgpLAAAMgpKAAAIAAgCMApKAAAIAA23IAAgCIAA25IAA28MApLAAAIAAW8IAAW5IAAACMgpLAAAMgpKAAAIAAgCIAA25IAA28MApKAAAAUlrdMApJAAAMApKAAAEA9ugLbIAAW3Ehm3giWMApKAAAMApLAAAMApHAAAEhm3gLdMApKAAAMApLAAAMApHAAAEhm3AiXIAA25Eg9tA5TMApLAAAEhm3ALcIAA23EgUig5SMApHAAAEBm4gLbMgpKAAAEBm4ALeMgpKAAA");
	this.shape_16.setTransform(800.0078,450.0031,1.2,1.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(1,1,1).p("EAxYg2/MAxYAAAIAAbhIAAbeIAAACIAAbcIAAADIAAbfMgxYAAAMgxVAAAMgxaAAAMgxYAAAIAA7fIAAgDIAA7cIAAgCIAA7eIAA7hMAxYAAAMAxaAAAIAAbhIAAbeIAAACMgxaAAAIAAgCMAxaAAAMAxVAAAIAAACIAAbcIAAADIAAbfEAxYg2/IAAbhIAAbeMAxYAAAEBiwAbhMgxYAAAMgxVAAAMgxaAAAIAAgDMAxaAAAIAAADIAAbfEAxYAbeMAxYAAAEBiwAACMgxYAAAMgxVAAAIAAbcMAxVAAAEAxYgbeMAxYAAAEgxXgbeIAA7hEgxXgbeMAxaAAAMAxVAAAEgxXAAAIAA7eEgxXA3AIAA7fMgxYAAAEgxXAbeIAA7cMgxYAAAEhivAbeMAxYAAAEhivAAAMAxYAAAEhivgbeMAxYAAAEAADg2/MAxVAAA");
	this.shape_17.setTransform(800,450.0038,1.25,1.2502);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(1,1,1).p("EAe6gzkMA9rAAAMAAAAiaMAAAAiVIAAADMAAAAiUIAAADMg9rAAAMg9wAAAMg9uAAAIAAgDMAAAgiUIAAgDMA9uAAAMAAAgiVMAAAgiaMA9wAAAMAAAAiaMA9rAAAAe6RLIAAADMAAAAiUIAAADEBclAROMg9rAAAMg9wAAAIAAgDMA9wAAAMA9rAAAEAe6AziMA9rAAAAe6xKMAAAAiVEhckgRKMAAAgiaMA9uAAAEge2AzlIAAgDMAAAgiUMg9uAAAEhckgRKMA9uAAAMA9wAAAEhckAziMA9uAAAMA9wAAAEhckARLMAAAgiV");
	this.shape_18.setTransform(799.986,449.9778,1.3333,1.333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13}]}).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},2).to({state:[{t:this.shape_18}]},1).to({state:[]},1).wait(2));

	// 圖層_1
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#003300").s().p("Eh8/BGUMAAAiMnMD5/AAAMAAACMng");
	this.shape_19.setTransform(800,450);

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1600,900);


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
	this.bgLine = new lib.sliderBGLine150();
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
	this.bgLine = new lib.sliderBGLine150();
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
	this.shape.graphics.f("#FFFFFF").s().p("AhJAKIAAgTICTAAIAAATg");
	this.shape.setTransform(189.85,29.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJBKIAAhAIhAAAIAAgTIBAAAIAAhAIATAAIAABAIBAAAIAAATIhAAAIAABAg");
	this.shape_1.setTransform(189.85,-28.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("Ah3CEQgxg3gBhNQABhMAxg3IAAAAQAyg1BEgBIAEAAQBDABAxA1QAzA3gBBMQABBNgzA3QgyA2hFAAQhFAAgyg2g");
	this.shape_2.setTransform(190.05,19.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgBC6QhEgBgyg2Qgxg2gBhNQABhMAxg3QAyg2BFAAQBFAAAyA2QAzA3gBBMQABBNgzA2QgxA2hDABg");
	this.shape_3.setTransform(190.05,-19.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiEFTQg3g8AAhUQAAhUA3g8QAiglAqgOQgqgNgiglIAAAAQg3g8AAhUQAAhUA3g8QA3g8BNAAQBNAAA4A8QA2A8ABBUQgBBUg2A8QgiAlgqANQAqAOAiAlQA2A8ABBUQgBBUg2A8Qg4A8hNAAQhNAAg3g8gAipDDQABBNAxA3QAyA2BFAAQBFAAAyg2QAzg3gBhNQABhNgzg3Qgxg1hDgBIgEAAQhEABgyA1IAAAAQgxA3gBBNgAh3lGQgxA3gBBNQABBNAxA3QAyA1BEABIAEAAQBDgBAxg1QAzg3gBhNQABhNgzg3Qgyg2hFAAQhFAAgyA2g");
	this.shape_4.setTransform(190.05,0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000FF").s().p("AhJAKIAAgTICTAAIAAATg");
	this.shape_5.setTransform(-49.75,27.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgKBKIAAhAIg/AAIAAgTIA/AAIAAhAIAUAAIAABAIBAAAIAAATIhAAAIAABAg");
	this.shape_6.setTransform(-49.75,-21.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF0000").ss(3,1,1).p("AD6AAQAAAxgRAqQgSAvgnAnQhJBJhnAAQhnAAhJhJQgngngSgvQgQgqAAgxQAAhnBJhJQBJhJBnAAQBnAABJBJQBKBJAABng");
	this.shape_7.setTransform(-49.85,-8.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0000FF").s().p("AgbEIQgGgBgEgEQgEgFABgGQAAgHAFgDQAFgFAGABIAYABQAPAAAOgCQAGgBAFAEQAFAEABAGQABAGgEAFQgEAFgGABQgQACgRAAIAAAAIgbgBgAhYD6QgegLgbgSQgFgDgCgGQgBgGAEgFQADgGAGgBQAGgBAFADQAYAQAbAKQAFACADAFQADAGgCAGQgCAGgGACQgDACgEAAIgEgBgABUD4QgGgDgCgGQgCgGACgFQADgGAGgCQAagKAXgRQAFgEAHACQAGAAADAGQAEAFgBAGQgBAGgFAEQgbATgeALIgFABIgGgBgAi5C3QgGAAgEgFQgWgYgOgaQgEgFACgGQACgGAFgDQAGgDAGABQAFACAEAGQANAXATAVQAEAFAAAGQAAAGgFAEQgEAEgGAAIgBAAgACyCwQgFgFAAgGQAAgGAEgFQATgVANgZQADgGAGgBQAGgCAGADQAFACACAGQACAGgDAGQgPAcgWAYQgEAFgGAAIgBAAQgGAAgEgDgAj4BPQgFgDgCgGQgIgegBghQAAgGAEgEQAEgFAHAAQAGAAAEAEQAFAEAAAGQABAdAHAbQACAGgDAFQgEAGgGABIgEABQgDAAgEgCgADwBKQgGgCgDgFQgDgFABgGQAGgbAAgdIAAAAIAAgLQAAgGAFgFQAEgEAGAAQAGAAAFAEQAEAFAAAGIAAALIAAAAQAAAhgHAeQgBAGgFADQgEACgEAAIgEAAgAj2gmQgHgCgDgFQgDgFABgGQAEgVAIgTIAAABIAJgWQADgGAGgCQAGgCAFADQAGADACAGQACAFgDAGIgIATIAAAAQgHARgEASQgBAGgFADQgEADgEAAIgDAAgADpg6QgFgDgCgGIgGgSIAAAAQgHgRgKgQQgDgGACgGQABgGAFgDQAGgDAGABQAGACADAFQALATAIAUIAAgBIAGAUQACAGgDAFQgDAGgFACIgFAAQgEAAgDgBgAjIiWQgFgEAAgGQAAgGAEgFIAPgQQAOgPAQgLQAFgEAGABQAGABAEAFQAEAFgBAGQgBAGgFAEQgOAKgNANIgOAPQgEAEgGABIgBAAQgFAAgFgEgACpijIgDgDQgUgTgWgOQgFgEgCgGQgBgGAEgFQADgGAGgBQAGgBAFADQAZAQAWAWIADADQAEAFABAGQgBAGgEAEQgEAFgGAAQgHAAgEgFgAhljZQgFgCgDgGQgCgGACgFQADgGAFgCQAdgNAhgEQAGgBAFADQAFAEABAGQABAGgEAFQgEAFgGABQgcAEgaALIgGABIgGgBgABJjfQgagJgcgCQgHAAgEgFQgEgFABgGQAAgGAFgEQAEgEAHAAQAgACAdAKQAGACADAGQADAFgCAGQgCAGgGADQgDABgEAAIgEAAg");
	this.shape_8.setTransform(-49.8506,9.9234);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.valueText},{t:this.label},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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
	this.bgLine = new lib.sliderBGLine150();
	this.bgLine.name = "bgLine";
	this.bgLine.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bgLine).wait(1));

}).prototype = getMCSymbolPrototype(lib.slShapeAB, new cjs.Rectangle(-76.3,-58.2,566.3,98.1), null);


(lib.control01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.btnType4 = new lib.btnTypeM4();
	this.btnType4.name = "btnType4";
	this.btnType4.parent = this;
	this.btnType4.setTransform(1158.25,862.05,0.8,0.8);
	new cjs.ButtonHelper(this.btnType4, 0, 1, 2, false, new lib.btnTypeM4(), 3);

	this.btnType2 = new lib.btnTypeM2();
	this.btnType2.name = "btnType2";
	this.btnType2.parent = this;
	this.btnType2.setTransform(1070.5,862.05,0.8,0.8);
	new cjs.ButtonHelper(this.btnType2, 0, 1, 2, false, new lib.btnTypeM2(), 3);

	this.btnType3 = new lib.btnTypeM3();
	this.btnType3.name = "btnType3";
	this.btnType3.parent = this;
	this.btnType3.setTransform(1158.25,808,0.8,0.8);
	new cjs.ButtonHelper(this.btnType3, 0, 1, 2, false, new lib.btnTypeM3(), 3);

	this.btnType1 = new lib.btnTypeM1();
	this.btnType1.name = "btnType1";
	this.btnType1.parent = this;
	this.btnType1.setTransform(1070.5,808,0.8,0.8);
	new cjs.ButtonHelper(this.btnType1, 0, 1, 2, false, new lib.btnTypeM1(), 3);

	this.btnM9 = new lib.btnHybrid_9();
	this.btnM9.name = "btnM9";
	this.btnM9.parent = this;
	this.btnM9.setTransform(967.1,863.45,0.8,0.8,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.btnM9, 0, 1, 2, false, new lib.btnHybrid_9(), 3);

	this.btnM8 = new lib.btnHybrid_8();
	this.btnM8.name = "btnM8";
	this.btnM8.parent = this;
	this.btnM8.setTransform(889.95,863.45,0.8,0.8,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.btnM8, 0, 1, 2, false, new lib.btnHybrid_8(), 3);

	this.btnM7 = new lib.btnHybrid_7();
	this.btnM7.name = "btnM7";
	this.btnM7.parent = this;
	this.btnM7.setTransform(812.8,863.45,0.8,0.8,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.btnM7, 0, 1, 2, false, new lib.btnHybrid_7(), 3);

	this.btnM6 = new lib.btnHybrid_6();
	this.btnM6.name = "btnM6";
	this.btnM6.parent = this;
	this.btnM6.setTransform(735.6,863.45,0.8,0.8,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.btnM6, 0, 1, 2, false, new lib.btnHybrid_6(), 3);

	this.btnM5 = new lib.btnHybrid_5();
	this.btnM5.name = "btnM5";
	this.btnM5.parent = this;
	this.btnM5.setTransform(658.45,863.45,0.8,0.8,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.btnM5, 0, 1, 2, false, new lib.btnHybrid_5(), 3);

	this.btnM4 = new lib.btnHybrid_4();
	this.btnM4.name = "btnM4";
	this.btnM4.parent = this;
	this.btnM4.setTransform(967.1,809.3,0.8,0.8,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btnM4, 0, 1, 2, false, new lib.btnHybrid_4(), 3);

	this.btnM3 = new lib.btnHybrid_3();
	this.btnM3.name = "btnM3";
	this.btnM3.parent = this;
	this.btnM3.setTransform(889.85,809.3,0.8,0.8);
	new cjs.ButtonHelper(this.btnM3, 0, 1, 2, false, new lib.btnHybrid_3(), 3);

	this.btnM2 = new lib.btnHybrid_2();
	this.btnM2.name = "btnM2";
	this.btnM2.parent = this;
	this.btnM2.setTransform(812.7,809.3,0.8,0.8);
	new cjs.ButtonHelper(this.btnM2, 0, 1, 2, false, new lib.btnHybrid_2(), 3);

	this.btnM1 = new lib.btnHybrid_1();
	this.btnM1.name = "btnM1";
	this.btnM1.parent = this;
	this.btnM1.setTransform(735.6,809.3,0.8,0.8,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btnM1, 0, 1, 2, false, new lib.btnHybrid_1(), 3);

	this.btnM0 = new lib.btnHybrid_0();
	this.btnM0.name = "btnM0";
	this.btnM0.parent = this;
	this.btnM0.setTransform(658.45,809.3,0.8,0.8);
	new cjs.ButtonHelper(this.btnM0, 0, 1, 2, false, new lib.btnHybrid_0(), 3);

	this.btnL9 = new lib.btnHybrid_9();
	this.btnL9.name = "btnL9";
	this.btnL9.parent = this;
	this.btnL9.setTransform(557.45,863.35,0.8,0.8);
	new cjs.ButtonHelper(this.btnL9, 0, 1, 2, false, new lib.btnHybrid_9(), 3);

	this.btnL8 = new lib.btnHybrid_8();
	this.btnL8.name = "btnL8";
	this.btnL8.parent = this;
	this.btnL8.setTransform(480.3,863.35,0.8,0.8);
	new cjs.ButtonHelper(this.btnL8, 0, 1, 2, false, new lib.btnHybrid_8(), 3);

	this.btnL7 = new lib.btnHybrid_7();
	this.btnL7.name = "btnL7";
	this.btnL7.parent = this;
	this.btnL7.setTransform(403.15,863.35,0.8,0.8);
	new cjs.ButtonHelper(this.btnL7, 0, 1, 2, false, new lib.btnHybrid_7(), 3);

	this.btnL6 = new lib.btnHybrid_6();
	this.btnL6.name = "btnL6";
	this.btnL6.parent = this;
	this.btnL6.setTransform(325.95,863.35,0.8,0.8);
	new cjs.ButtonHelper(this.btnL6, 0, 1, 2, false, new lib.btnHybrid_6(), 3);

	this.btnL5 = new lib.btnHybrid_5();
	this.btnL5.name = "btnL5";
	this.btnL5.parent = this;
	this.btnL5.setTransform(248.85,863.35,0.8,0.8);
	new cjs.ButtonHelper(this.btnL5, 0, 1, 2, false, new lib.btnHybrid_5(), 3);

	this.btnL4 = new lib.btnHybrid_4();
	this.btnL4.name = "btnL4";
	this.btnL4.parent = this;
	this.btnL4.setTransform(557.45,809.3,0.8,0.8);
	new cjs.ButtonHelper(this.btnL4, 0, 1, 2, false, new lib.btnHybrid_4(), 3);

	this.btnL3 = new lib.btnHybrid_3();
	this.btnL3.name = "btnL3";
	this.btnL3.parent = this;
	this.btnL3.setTransform(480.3,809.3,0.8,0.8);
	new cjs.ButtonHelper(this.btnL3, 0, 1, 2, false, new lib.btnHybrid_3(), 3);

	this.btnL2 = new lib.btnHybrid_2();
	this.btnL2.name = "btnL2";
	this.btnL2.parent = this;
	this.btnL2.setTransform(403.15,809.3,0.8,0.8);
	new cjs.ButtonHelper(this.btnL2, 0, 1, 2, false, new lib.btnHybrid_2(), 3);

	this.btnL1 = new lib.btnHybrid_1();
	this.btnL1.name = "btnL1";
	this.btnL1.parent = this;
	this.btnL1.setTransform(325.95,809.3,0.8,0.8);
	new cjs.ButtonHelper(this.btnL1, 0, 1, 2, false, new lib.btnHybrid_1(), 3);

	this.btnL0 = new lib.btnHybrid_0();
	this.btnL0.name = "btnL0";
	this.btnL0.parent = this;
	this.btnL0.setTransform(248.85,809.3,0.8,0.8);
	new cjs.ButtonHelper(this.btnL0, 0, 1, 2, false, new lib.btnHybrid_0(), 3);

	this.btnOrbital224 = new lib.btnOrbital224();
	this.btnOrbital224.name = "btnOrbital224";
	this.btnOrbital224.parent = this;
	this.btnOrbital224.setTransform(1497.15,720.6,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital224, 0, 1, 2, false, new lib.btnOrbital224(), 3);

	this.btnOrbital223 = new lib.btnOrbital223();
	this.btnOrbital223.name = "btnOrbital223";
	this.btnOrbital223.parent = this;
	this.btnOrbital223.setTransform(1497.15,661.9,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital223, 0, 1, 2, false, new lib.btnOrbital223(), 3);

	this.btnOrbital214 = new lib.btnOrbital214();
	this.btnOrbital214.name = "btnOrbital214";
	this.btnOrbital214.parent = this;
	this.btnOrbital214.setTransform(1497.15,603.55,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital214, 0, 1, 2, false, new lib.btnOrbital214(), 3);

	this.btnOrbital213 = new lib.btnOrbital213();
	this.btnOrbital213.name = "btnOrbital213";
	this.btnOrbital213.parent = this;
	this.btnOrbital213.setTransform(1497.15,545.2,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital213, 0, 1, 2, false, new lib.btnOrbital213(), 3);

	this.btnOrbital200 = new lib.btnOrbital201();
	this.btnOrbital200.name = "btnOrbital200";
	this.btnOrbital200.parent = this;
	this.btnOrbital200.setTransform(1497.15,486.85,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital200, 0, 1, 2, false, new lib.btnOrbital201(), 3);

	this.btnOrbital114 = new lib.btnOrbital114();
	this.btnOrbital114.name = "btnOrbital114";
	this.btnOrbital114.parent = this;
	this.btnOrbital114.setTransform(1497.15,431.15,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital114, 0, 1, 2, false, new lib.btnOrbital114(), 3);

	this.btnOrbital113 = new lib.btnOrbital113();
	this.btnOrbital113.name = "btnOrbital113";
	this.btnOrbital113.parent = this;
	this.btnOrbital113.setTransform(1497.15,372.8,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital113, 0, 1, 2, false, new lib.btnOrbital113(), 3);

	this.btnOrbital100 = new lib.btnOrbital101();
	this.btnOrbital100.name = "btnOrbital100";
	this.btnOrbital100.parent = this;
	this.btnOrbital100.setTransform(1497.15,314.45,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital100, 0, 1, 2, false, new lib.btnOrbital101(), 3);

	this.btnOrbital000 = new lib.btnOrbital000();
	this.btnOrbital000.name = "btnOrbital000";
	this.btnOrbital000.parent = this;
	this.btnOrbital000.setTransform(1497.25,253.55,0.8,0.8,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.btnOrbital000, 0, 1, 2, false, new lib.btnOrbital000(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnOrbital000},{t:this.btnOrbital100},{t:this.btnOrbital113},{t:this.btnOrbital114},{t:this.btnOrbital200},{t:this.btnOrbital213},{t:this.btnOrbital214},{t:this.btnOrbital223},{t:this.btnOrbital224},{t:this.btnL0},{t:this.btnL1},{t:this.btnL2},{t:this.btnL3},{t:this.btnL4},{t:this.btnL5},{t:this.btnL6},{t:this.btnL7},{t:this.btnL8},{t:this.btnL9},{t:this.btnM0},{t:this.btnM1},{t:this.btnM2},{t:this.btnM3},{t:this.btnM4},{t:this.btnM5},{t:this.btnM6},{t:this.btnM7},{t:this.btnM8},{t:this.btnM9},{t:this.btnType1},{t:this.btnType3},{t:this.btnType2},{t:this.btnType4}]}).wait(1));

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AhWBaIAAgRIBQAAIAAgTIg/AAIAAgRIA/AAIAAgOIAPAAIAAAOIBCAAIAAARIhCAAIAAATIBSAAIAAARgAhaAQQATgNAHgWIgXAAIAAgRIAaAAIABgGIAAgZIgXAAIAAgQIBlAAIAAAQIgVAAIAAAfIAZAAIAAARIgZAAIAAAoIgRAAIAAgoIgbAAQgFAdgZASgAgrgqIgBAGIAYAAIAAgfIgXAAgAAiAZIAAgRIAQACIALABQAEAAADgCQABgDAAgDIAAhcIASAAIAABhQAAALgKAGQgFADgLAAQgLAAgQgDgAAfgFIAAhIIARAAIAABIg");
	this.shape.setTransform(1044.2,762.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("AgaggQAAgNgJAAQgIAAgJAIQgJAIgMAVQgMATAAADIAAAuIgdAOIAAhgQgJAWgRAWIgJgHQAZgiAKgoIAdgOIAAA9QAig6AdAAQANAAAGAKQAFAKAAAmQASggAPgNQAOgNAPAAQAaAAAAAjIAAA1QAAAUACAFQACAEAFAAQANAAAdgmIAJAHQgiA1gjAAQgKAAgFgHQgGgHAAgZIAAhDQAAgLgIAAQgFAAgGAEQgFAEgHAIIgRAaQgKARAAADIAAAuIgcAOg");
	this.shape_1.setTransform(636.225,764.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FFFF").s().p("AghCoQgFgHAAgYIAAg2QgJAYgRAWIgJgIIAKgOIAIgQQAFgJAGgPQAGgOAAgFIAAhwQAAgqAagiQAZgiAdAAQAPAAAJAKQAJALgBARQABAYgUAoQgTAngtBHIAABUQAAATABAGQACAHAGAAQANAAAdgnIAJAIQgjA0giAAQgKAAgFgHgAADiLQgMAVAAAkIAABiQAmg/ANgdQAMgdAAgWQAAghgUAAQgSAAgNAVg");
	this.shape_2.setTransform(218.8188,758.4822,0.7257,0.7257);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00FFFF").ss(3,1,1).p("EAzOAAAIaSAAEhNeAAAMA8KAAAAtcAAMA76AAA");
	this.shape_3.setTransform(707.3,776);

	this.pointerSPD = new lib.box();
	this.pointerSPD.name = "pointerSPD";
	this.pointerSPD.parent = this;
	this.pointerSPD.setTransform(1487.7,730.95,0.8,0.56,0,0,0,0,0.2);

	this.pointerQN = new lib.box();
	this.pointerQN.name = "pointerQN";
	this.pointerQN.parent = this;
	this.pointerQN.setTransform(1061.5,795.1,0.8,0.56,0,0,0,0,0.2);

	this.pointerQL = new lib.box();
	this.pointerQL.name = "pointerQL";
	this.pointerQL.parent = this;
	this.pointerQL.setTransform(233.4,819.45,0.8,0.56,0,0,0,0,0.3);

	this.pointerQM = new lib.box();
	this.pointerQM.name = "pointerQM";
	this.pointerQM.parent = this;
	this.pointerQM.setTransform(638.45,802.1,0.8,0.56,0,0,0,0,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointerQM},{t:this.pointerQL},{t:this.pointerQN},{t:this.pointerSPD},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.control01, new cjs.Rectangle(193.4,228.2,1341,660.4000000000001), null);


(lib.chXYZ = function(mode,startPosition,loop) {
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AB1BrIAAgaIBuiJQAMgOALgLIh4AAIAAgZICaAAIAAAZIiGCjICJAAIAAAZgAgEBrIAAhbIhTh6IAjAAIAqBAQALASAKATIAXgmIAqg/IAhAAIhWB6IAABbgAh9BrIg2hMIgJgPIgKAQIg2BLIgiAAIBThvIhKhmIAiAAIAnA3IARAaIARgZIAsg4IAfAAIhMBlIBRBwg");
	this.shape_2.setTransform(54.875,-0.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chXYZ, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


(lib.chData = function(mode,startPosition,loop) {
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
	this.shape_2.graphics.f("#FFFFFF").s().p("ABSBVQgUAfgfAWIgUgRQAigWAYgnQgVgwgBgVIgEAHIgVgGIAAApQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIg7AAIgIAPIBUAAIAAAVIgiAAQgQAYgOAMIAlANIgOAUIgxgQIgcAJQgSAFgfACIgHgZQAOAAAjgFIgZgIIgDgQQALgJAHgGIgnAAIAAgVIA9AAIAJgPIg2AAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBIAAgyQAAAAAAgBQABgBAAAAQAAgBABAAQAAAAAAAAIA7AAIAAgLIg2AAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAgBIAAgiIgRAAIAAgVIARAAIAAgiQAAgBAAgBQABAAAAgBQABAAAAAAQABAAABAAIA2AAIAAgOIAYAAIAAAOIA0AAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAABIAAAiIATAAIAAAVIgTAAIAAAiQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIg0AAIAAALIA6AAQABAAAAAAQABAAAAABQABAAAAABQAAABAAAAIAAADQAbg8gBg9IAZAAIgDAiIBGAAIAAAZIgRAAIAAAJQAABCgcA+QAUAjAaAgIgXANQgggsgEgMgAhTBYQAAAAgBABQAAAAAAAAQAAAAAAABQABAAAAAAIAcAJQAQgKAOgRIgpAAQgHAIgKAIgABFgIQAGAWAHATQARgrAAg5IAAgJIggAAQgGAdAIAngAgnARIAmAAIABgBIAAgQIgBAAIgmAAgAhlAAIAAARIAmAAIAAgRIgmAAQAAAAAAAAQgBAAAAAAQAAAAABAAQAAAAAAAAgAgng0IAfAAIABgBIAAgPIggAAgAhgg1QAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAABAAIAgAAIAAgQIghAAgAgnhZIAgAAIAAgRIggAAgAhghZIAhAAIAAgRIghAAgACxByQAggCAWgEIAAg7QgcAUgcAMIgNgYQAygRAlgnIhWAAIAAgYIB9AAIAAgXIhmAAIAAgZIBmAAIAAgUIhxAAIAAgZIBxAAIAAgVIAaAAIAAAVIBxAAIAAAZIhxAAIAAAUIBlAAIAAAZIhlAAIAAAXIB8AAIAAAYIh3AAQADAeASAZQAkgZATgSIATAQQgVAYghAVQAnAcAqAPIgTAVQg7gbgcgaQgkghgFgzIgOAAQgMARgKAIIgBACIAABLQAhgIAWgIIAJAYQg2AVhSAHgAkXCLIAAh1IhPAGIgHgaIA/gCIAKgNQgggcgfgPQAGgMAEgMQAKACARAOQANgSALgTIg1ACIABgaQBYAABLgLIABAYQgUAEg0ADIgJACIgkA0IAYATQAYgeAVgkIAVAPQgUAhgmAwIA/gFQgJgXgEgEIAWgKQAfA7AHATIgYAKQgEgOgHgQIg9AGIAAB3gAmTCKIAAiYQgGALgHAFIgYgJQAsg8AKhGIAZAEQgIAlgIAcIAADOgAjmAxIAWgNQAYAgAVA1IgXALQgXg1gVgegAl1BzQAhgeAOgqIAZAJQgYA1gZAYg");
	this.shape_2.setTransform(67.575,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chData, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


(lib.chBone = function(mode,startPosition,loop) {
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
	this.shape_2.graphics.f("#FFFFFF").s().p("ACHCKIAAhKQg7Axg2APIgOgYQBCgUAzgnIhuAAIAAgaIB4AAIAAgYIAaAAIAAAYIB1AAIAAAaIhrAAQAtAmBHAWIgRAXQhBgZgsgkIAABHgAiJCEIABgcQAkALAIgFQAHgDAAgJIAAgJIiDAAIAAAuIgaAAIAAiRQABgFAFAAICqAAQAHABAAAEIAAB3QgCAQgLAHQgJAGgQAAQgQAAgYgGgAjYBDICDAAIAAgUIiDAAgAjYAIIAAARICDAAIAAgRQgBAAAAgBQAAAAAAgBQgBAAAAAAQAAAAAAAAIiAAAIgBACgAgwAMQAKgeAAgKQAAgBAAgBQgBAAAAgBQgBAAAAgBQgBAAgBAAIjZAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAABAAABIAAAsIgZAAIAAhCQACgEADAAIAgAAIAAhFQAAgJAIAAICzAAQAKACAAAHIAABFIAUAAIAVAKQgBAcgMAkgAidhEIAAANIBPAAIAAgPIhMAAIgCgBQAAAAAAAAQAAABAAAAQgBAAAAABQAAAAAAABgAjfhrIAAA0IAqAAIAAggQABgFAFAAIBhAAIAAgPQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAgBAAIiKAAQgBAAAAAAQgBAAAAABQgBAAAAABQAAAAAAABgAAIgNQArgaAOgyIgvAAIAAgZIAxAAIACgXIAYABIAAAWIAtAAIAGABQADADAAAKQAAAfgBAWQgBAZgHAIQgHAKgMAEQgPAEgegIIACgdQAJAGAIABQAOACAIgIQAFgHABgMQABgggBgEIgDgCIgcAAIgCADQgPA+gvAdgACsgEQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBIAAhzQAAgBAAgBQABAAAAgBQABAAAAgBQABAAABAAIBkAAQAFAAAAAEIAABzQAAADgFAAgADChkIAABIIA4AAIABgBIAAhHIgBgBIg4AAQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAABAAg");
	this.shape_2.setTransform(56.175,-1.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chBone, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


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
		sl.len = 100;
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
	this.slLabelC17 = new lib.slLabel_C17();
	this.slLabelC17.name = "slLabelC17";
	this.slLabelC17.parent = this;
	this.slLabelC17.setTransform(-47.9,0.05,0.65,0.65,0,0,0,-2.1,1.1);

	this.label = new cjs.Text("文字標籤", "26px 'Microsoft JhengHei'", "#FFFFFF");
	this.label.name = "label";
	this.label.textAlign = "right";
	this.label.lineHeight = 37;
	this.label.lineWidth = 146;
	this.label.alpha = 0.00000000;
	this.label.parent = this;
	this.label.setTransform(117.95,29.1);

	this.valueText = new cjs.Text("0", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(119.35,-14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.valueText},{t:this.label},{t:this.slLabelC17}]}).wait(1));

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
	this.btnS.setTransform(50.05,0,1.2997,0.3,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// line
	this.bgLine = new lib.sliderBGLine100();
	this.bgLine.name = "bgLine";
	this.bgLine.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bgLine).wait(1));

}).prototype = getMCSymbolPrototype(lib.slComC1, new cjs.Rectangle(-65.7,-16.5,287.1,97.8), null);


(lib.atomLabelYLM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.pn = new lib.atomlabel_Npn();
	this.pn.name = "pn";
	this.pn.parent = this;
	this.pn.setTransform(23,-12.4,0.4,0.4,0,0,0,0.1,0);

	this.ql = new lib.atomlabel_N09();
	this.ql.name = "ql";
	this.ql.parent = this;
	this.ql.setTransform(22.2,21.6,0.5,0.5,0,0,0,0,0.3);

	this.qm = new lib.atomlabel_N09();
	this.qm.name = "qm";
	this.qm.parent = this;
	this.qm.setTransform(37.35,-12.95,0.5,0.5,0,0,0,0,0.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AisDHIADgLQAZgBAJgDQAMgFAHgJQAKgOAKgjIAjh0IgqiIQgMgkgJgJQgJgJgYgCIADgLICSAAIgDALQgbACgFACQgGACgEAGQgEAGAAAIQAAAMAJAdIAgBtIBLhqQAdgqAAgLQAAgGgHgFQgGgEgegCIADgLIB9AAIgCALQgTADgGACQgLAFgKAJQgOAMgZAkIhhCGIgeBiQgKAlAAAOQAAAJAEAEQADAFAIADQAMAEAWAAIgDALg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AgQgLIBLhqQAdgqAAgLQAAgGgGgFQgHgEgdgCIADgLIB8AAIgCALQgSADgHACQgKAFgLAJQgNAMgaAkIhhCGIgeBiQgKAlAAAOQAAAJADAEQADAFAJADQALAEAXAAIgDALIinAAIADgLQAZgBAIgDQANgFAHgJQAKgOAKgjIAjh0IgqiIQgMgkgJgJQgKgJgXgCIADgLICSAAIgDALQgcACgEACQgGACgEAGQgEAGAAAIQAAAMAIAdg");
	this.shape_1.setTransform(0,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AisDHIAEgLQAZgBAHgDQAOgFAGgJQAKgOALgjIAjh0IgriIQgLgkgKgJQgKgJgXgCIADgLICTAAIgEALQgbACgEACQgHACgEAGQgEAGAAAIQAAAMAIAdIAhBtIBKhqQAdgqAAgLQAAgGgFgFQgHgEgdgCIADgLIB8AAIgCALQgSADgHACQgLAFgKAJQgNAMgaAkIhhCGIgdBiQgLAlAAAOQAAAJADAEQADAFAJADQAMAEAWAAIgDALg");
	this.shape_2.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.qm},{t:this.ql},{t:this.pn}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.atomLabelYLM, new cjs.Rectangle(-19.8,-25.8,66.1,60.3), null);


(lib.atomLabel03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhjBCIBDhCIhDhCIAighIBBBDIBDhDIAhAiIhCBBIBCBCIghAhIhDhBIhBBCg");
	this.shape.setTransform(117.15,50);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("ABkhBIhDBBIBDBCIgiAiIhChCIhCBCIghgiIBDhCIhDhCIAhghIBCBDIBChDg");
	this.shape_1.setTransform(117.15,50);

	this.c17 = new lib.atomlabel_C17();
	this.c17.name = "c17";
	this.c17.parent = this;
	this.c17.setTransform(162.15,50);

	this.spd = new lib.atomlabel_SPD();
	this.spd.name = "spd";
	this.spd.parent = this;
	this.spd.setTransform(60,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.spd},{t:this.c17},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 圖層_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,102,0,0)").s().p("AvnH0IAAvnIfPAAIAAPng");
	this.shape_2.setTransform(100,50);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.atomLabel03, new cjs.Rectangle(0,0,200,100), null);


(lib.atomLabel02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhjBCIBDhCIhDhCIAighIBBBDIBDhDIAhAiIhCBBIBCBCIghAhIhDhBIhBBCg");
	this.shape.setTransform(117.15,50);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("ABkhBIhDBBIBDBCIgiAiIhChCIhCBCIghgiIBDhCIhDhCIAhghIBCBDIBChDg");
	this.shape_1.setTransform(117.15,50);

	this.c17 = new lib.atomlabel_C17();
	this.c17.name = "c17";
	this.c17.parent = this;
	this.c17.setTransform(162.15,50);

	this.ylm = new lib.atomLabelYLM();
	this.ylm.name = "ylm";
	this.ylm.parent = this;
	this.ylm.setTransform(38.05,44.8,1.3076,1.3076,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ylm},{t:this.c17},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 圖層_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,102,0,0)").s().p("AvnH0IAAvnIfPAAIAAPng");
	this.shape_2.setTransform(100,50);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.atomLabel02, new cjs.Rectangle(0,0,200,100), null);


(lib.teacher02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pn
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYCOIAAh2Ih1AAIAAgwIB1AAIAAh1IAxAAIAAB1IB1AAIAAAwIh1AAIAAB2g");
	this.shape.setTransform(274.1209,49.9991);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AgYCOIAAh1Ih1AAIAAgxIB1AAIAAh1IAxAAIAAB1IB1AAIAAAxIh1AAIAAB1g");
	this.shape_1.setTransform(274.125,50);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYCOIAAh1Ih1AAIAAgxIB1AAIAAh1IAxAAIAAB1IB1AAIAAAxIh1AAIAAB1g");
	this.shape_2.setTransform(274.125,50);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiNAZIAAgxIEbAAIAAAxg");
	this.shape_3.setTransform(274.125,49.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("ACOAZIkbAAIAAgxIEbAAg");
	this.shape_4.setTransform(274.125,49.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiNAZIAAgxIEbAAIAAAxg");
	this.shape_5.setTransform(274.125,49.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

	// 圖層_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhGEaQBXiNAAiNQAAg2gNg2QgJgsgSgpQgLgagkg+IAmAAQA2BKAaBKQAXBAAABFQAABPgeBKQgfBJgqA4g");
	this.shape_6.setTransform(376.625,53.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAhEaQgrg4gehJQgehKAAhPQAAhFAXhAQAahKA2hKIAmAAQgkA9gLAaQgSApgJAsQgNA3AAA2QAACNBXCNg");
	this.shape_7.setTransform(171.325,53.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah1BLIAAgpIDrAAIAAApgAh1ghIAAgpIDrAAIAAApg");
	this.shape_8.setTransform(104.35,50.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiYGPQgEgCgCgFIgphyQgCgFADgGQACgGAGgCQAGgCAFADQAGACACAGIAWA8IA0k7QABgGAFgEQAGgDAGAAIADAAID2AAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAEgGAAIjvAAIg8FnQgBAFgEAEQgDADgGABIgBAAQgEAAgEgDgAhAF/QAAgNAEgMQAIgTAQgTQAQgSAdgZQAugmARgXQAQgWAAgUQAAgVgPgOQgPgPgYAAQgZAAgOAQQgQAPAAAbIgkgEQAEgoAYgVQAYgWAoAAQApAAAYAXQAYAXAAAiQAAARgHARQgHAQgQASQgQATgmAgQggAagIAKQgJAJgGAKICMAAIAAAigAhxgkQgGAAgEgEQgFgFAAgGQAAgGAFgEQAEgFAGAAIErAAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAAlhxIAAjgQgNAMgUAMQgUAMgQAGIAAgiQAdgOAVgTQAWgUAKgTIAWAAIAAEgg");
	this.shape_9.setTransform(138.5275,55.0787);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AB2ghIjrAAIAAgpIDrAAgAB2BLIjrAAIAAgpIDrAAg");
	this.shape_10.setTransform(104.35,50.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ah1BLIAAgpIDrAAIAAApgAh1ghIAAgpIDrAAIAAApg");
	this.shape_11.setTransform(104.35,50.325);

	this.spd = new lib.atomlabel_SPD();
	this.spd.name = "spd";
	this.spd.parent = this;
	this.spd.setTransform(50,50);

	this.ylm01 = new lib.atomLabelYLM();
	this.ylm01.name = "ylm01";
	this.ylm01.parent = this;
	this.ylm01.setTransform(204.6,50);

	this.ylm02 = new lib.atomLabelYLM();
	this.ylm02.name = "ylm02";
	this.ylm02.parent = this;
	this.ylm02.setTransform(317.75,50);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("ABIhxIgjAAIAAjgQgNAMgUAMQgUAMgQAGIAAgiQAdgOAVgTQAWgUAKgTIAWAAgAC6hCIkrAAQgGAAgEAFQgFAEAAAGQAAAGAFAFQAEAEAGAAIErAAQAGAAAEgEQAFgFAAgGQAAgGgFgEQgEgFgGAAgAiBGFIA8lnIDvAAQAGAAAFgEQAEgFAAgGQAAgGgEgEQgFgFgGAAIj2AAQgCAAgBABQgGgBgFADQgGAEAAAGIg1E7IgWg8QgCgGgFgCQgGgDgGACQgGACgCAGQgDAGACAFIApByQACAFAEADQAFACAFAAQAFgBAEgDQADgEABgFgAB9FdIAAAiIi9AAQAAgNAEgMQAIgTAQgTQAQgSAdgZQAugmARgXQAQgWAAgUQAAgVgPgOQgPgPgYAAQgZAAgOAQQgQAPAAAbIgkgEQAEgoAYgVQAYgWAoAAQApAAAYAXQAYAXAAAiQAAARgHARQgHAQgQASQgQATgmAgQggAagIAKQgJAJgGAKg");
	this.shape_12.setTransform(138.5306,55.0792);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiYGQQgEgDgCgFIgphyQgCgFADgGQACgGAGgCQAGgCAGADQAFACACAGIAWA8IA1k7QAAgGAGgEQAFgDAGABIADgBID2AAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAEgGAAIjvAAIg8FnQgBAFgDAEQgEADgFABIgCAAQgEAAgEgCgAhAF/QAAgNAEgMQAIgTAQgTQAQgSAdgZQAugmARgXQAQgWAAgUQAAgVgPgOQgPgPgYAAQgZAAgOAQQgQAPAAAbIgkgEQAEgoAYgVQAYgWAoAAQApAAAYAXQAYAXAAAiQAAARgHARQgHAQgQASQgQATgmAgQggAagIAKQgJAJgGAKICMAAIAAAigAhxgkQgGAAgEgEQgFgFAAgGQAAgGAFgEQAEgFAGAAIErAAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAAlhxIAAjgQgNAMgUAMQgUAMgQAGIAAgiQAdgOAVgTQAWgUAKgTIAWAAIAAEgg");
	this.shape_13.setTransform(138.5306,55.0792);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AAhEaQgrg4gehJQgehKAAhPQAAhFAXhAQAahKA2hKIAmAAQgkA9gLAaQgSApgJAsQgNA3AAA2QAACNBXCNg");
	this.shape_14.setTransform(171.325,53.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAhEaQgrg4gehJQgehKAAhPQAAhFAXhAQAahKA2hKIAmAAQgkA9gLAaQgSApgJAsQgNA3AAA2QAACNBXCNg");
	this.shape_15.setTransform(171.325,53.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AggEaIgmAAQBXiNAAiNQAAg2gNg2QgJgsgSgpQgLgagkg+IAmAAQA2BKAaBKQAXBAAABFQAABPgeBKQgfBJgqA4g");
	this.shape_16.setTransform(376.625,53.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhGEaQBXiNAAiNQAAg2gNg2QgJgsgSgpQgLgagkg+IAmAAQA2BKAaBKQAXBAAABFQAABPgeBKQgfBJgqA4g");
	this.shape_17.setTransform(376.625,53.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.ylm02},{t:this.ylm01},{t:this.spd},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(2));

	// 圖層_1
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,51,0,0.008)").s().p("A/PH0IAAvnMA+fAAAIAAPng");
	this.shape_18.setTransform(200.7,50);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.7,0,400,100);


(lib.control03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.chBone = new lib.chBone();
	this.chBone.name = "chBone";
	this.chBone.parent = this;
	this.chBone.setTransform(1359,787.4);

	this.chXYZ = new lib.chXYZ();
	this.chXYZ.name = "chXYZ";
	this.chXYZ.parent = this;
	this.chXYZ.setTransform(1359,729.95);

	this.slComC7 = new lib.slComC1();
	this.slComC7.name = "slComC7";
	this.slComC7.parent = this;
	this.slComC7.setTransform(1378.65,524.25);

	this.slComC6 = new lib.slComC1();
	this.slComC6.name = "slComC6";
	this.slComC6.parent = this;
	this.slComC6.setTransform(1378.65,482);

	this.slComC5 = new lib.slComC1();
	this.slComC5.name = "slComC5";
	this.slComC5.parent = this;
	this.slComC5.setTransform(1378.65,439.8);

	this.slComC4 = new lib.slComC1();
	this.slComC4.name = "slComC4";
	this.slComC4.parent = this;
	this.slComC4.setTransform(1378.65,397.6);

	this.slComC3 = new lib.slComC1();
	this.slComC3.name = "slComC3";
	this.slComC3.parent = this;
	this.slComC3.setTransform(1378.65,355.4);

	this.slComC2 = new lib.slComC1();
	this.slComC2.name = "slComC2";
	this.slComC2.parent = this;
	this.slComC2.setTransform(1378.65,313.2);

	this.slComC1 = new lib.slComC1();
	this.slComC1.name = "slComC1";
	this.slComC1.parent = this;
	this.slComC1.setTransform(1378.65,271);

	this.btnH0 = new lib.btnHybrid_0();
	this.btnH0.name = "btnH0";
	this.btnH0.parent = this;
	this.btnH0.setTransform(827.1,812.35,0.7,0.7);
	new cjs.ButtonHelper(this.btnH0, 0, 1, 2, false, new lib.btnHybrid_0(), 3);

	this.btnHybridSP2D = new lib.btnHybridSP2D();
	this.btnHybridSP2D.name = "btnHybridSP2D";
	this.btnHybridSP2D.parent = this;
	this.btnHybridSP2D.setTransform(500.6,812.35,0.7,0.7);
	new cjs.ButtonHelper(this.btnHybridSP2D, 0, 1, 2, false, new lib.btnHybridSP2D(), 3);

	this.btnH7 = new lib.btnHybrid_7();
	this.btnH7.name = "btnH7";
	this.btnH7.parent = this;
	this.btnH7.setTransform(1045.5,864,0.7,0.7);
	new cjs.ButtonHelper(this.btnH7, 0, 1, 2, false, new lib.btnHybrid_7(), 3);

	this.btnH6 = new lib.btnHybrid_6();
	this.btnH6.name = "btnH6";
	this.btnH6.parent = this;
	this.btnH6.setTransform(972.7,864,0.7,0.7);
	new cjs.ButtonHelper(this.btnH6, 0, 1, 2, false, new lib.btnHybrid_6(), 3);

	this.btnH5 = new lib.btnHybrid_5();
	this.btnH5.name = "btnH5";
	this.btnH5.parent = this;
	this.btnH5.setTransform(899.9,864,0.7,0.7);
	new cjs.ButtonHelper(this.btnH5, 0, 1, 2, false, new lib.btnHybrid_5(), 3);

	this.btnH4 = new lib.btnHybrid_4();
	this.btnH4.name = "btnH4";
	this.btnH4.parent = this;
	this.btnH4.setTransform(827.1,864,0.7,0.7);
	new cjs.ButtonHelper(this.btnH4, 0, 1, 2, false, new lib.btnHybrid_4(), 3);

	this.btnH3 = new lib.btnHybrid_3();
	this.btnH3.name = "btnH3";
	this.btnH3.parent = this;
	this.btnH3.setTransform(1045.5,812.35,0.7,0.7);
	new cjs.ButtonHelper(this.btnH3, 0, 1, 2, false, new lib.btnHybrid_3(), 3);

	this.btnH2 = new lib.btnHybrid_2();
	this.btnH2.name = "btnH2";
	this.btnH2.parent = this;
	this.btnH2.setTransform(972.7,812.35,0.7,0.7);
	new cjs.ButtonHelper(this.btnH2, 0, 1, 2, false, new lib.btnHybrid_2(), 3);

	this.btnH1 = new lib.btnHybrid_1();
	this.btnH1.name = "btnH1";
	this.btnH1.parent = this;
	this.btnH1.setTransform(899.9,812.35,0.7,0.7);
	new cjs.ButtonHelper(this.btnH1, 0, 1, 2, false, new lib.btnHybrid_1(), 3);

	this.btnHybridSP3D3 = new lib.btnHybridSP3D3();
	this.btnHybridSP3D3.name = "btnHybridSP3D3";
	this.btnHybridSP3D3.parent = this;
	this.btnHybridSP3D3.setTransform(606.4,864,0.7,0.7);
	new cjs.ButtonHelper(this.btnHybridSP3D3, 0, 1, 2, false, new lib.btnHybridSP3D3(), 3);

	this.btnHybridSP3D2 = new lib.btnHybridSP3D2();
	this.btnHybridSP3D2.name = "btnHybridSP3D2";
	this.btnHybridSP3D2.parent = this;
	this.btnHybridSP3D2.setTransform(606.4,812.35,0.7,0.7);
	new cjs.ButtonHelper(this.btnHybridSP3D2, 0, 1, 2, false, new lib.btnHybridSP3D2(), 3);

	this.btnHybridSP3D = new lib.btnHybridSP3D();
	this.btnHybridSP3D.name = "btnHybridSP3D";
	this.btnHybridSP3D.parent = this;
	this.btnHybridSP3D.setTransform(500.6,864,0.7,0.7);
	new cjs.ButtonHelper(this.btnHybridSP3D, 0, 1, 2, false, new lib.btnHybridSP3D(), 3);

	this.btnHybridSP3 = new lib.btnHybridSP3();
	this.btnHybridSP3.name = "btnHybridSP3";
	this.btnHybridSP3.parent = this;
	this.btnHybridSP3.setTransform(407.9,864,0.7,0.7);
	new cjs.ButtonHelper(this.btnHybridSP3, 0, 1, 2, false, new lib.btnHybridSP3(), 3);

	this.btnHybridSP2 = new lib.btnHybridSP2();
	this.btnHybridSP2.name = "btnHybridSP2";
	this.btnHybridSP2.parent = this;
	this.btnHybridSP2.setTransform(336,864,0.7,0.7);
	new cjs.ButtonHelper(this.btnHybridSP2, 0, 1, 2, false, new lib.btnHybridSP2(), 3);

	this.btnHybridSP = new lib.btnHybridSP();
	this.btnHybridSP.name = "btnHybridSP";
	this.btnHybridSP.parent = this;
	this.btnHybridSP.setTransform(264.1,864,0.7,0.7);
	new cjs.ButtonHelper(this.btnHybridSP, 0, 1, 2, false, new lib.btnHybridSP(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnHybridSP},{t:this.btnHybridSP2},{t:this.btnHybridSP3},{t:this.btnHybridSP3D},{t:this.btnHybridSP3D2},{t:this.btnHybridSP3D3},{t:this.btnH1},{t:this.btnH2},{t:this.btnH3},{t:this.btnH4},{t:this.btnH5},{t:this.btnH6},{t:this.btnH7},{t:this.btnHybridSP2D},{t:this.btnH0},{t:this.slComC1},{t:this.slComC2},{t:this.slComC3},{t:this.slComC4},{t:this.slComC5},{t:this.slComC6},{t:this.slComC7},{t:this.chXYZ},{t:this.chBone}]}).wait(1));

	// 圖層_2
	this.chData = new lib.chData();
	this.chData.name = "chData";
	this.chData.parent = this;
	this.chData.setTransform(1359,672.55);

	this.pointerNN = new lib.box();
	this.pointerNN.name = "pointerNN";
	this.pointerNN.parent = this;
	this.pointerNN.setTransform(795.65,787.85,0.75,0.55,0,0,0,0.1,0.1);

	this.pointerHybrid = new lib.box();
	this.pointerHybrid.name = "pointerHybrid";
	this.pointerHybrid.parent = this;
	this.pointerHybrid.setTransform(235.6,843,0.7495,0.5505,0,0,0,0.1,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointerHybrid},{t:this.pointerNN},{t:this.chData}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.control03, new cjs.Rectangle(198.1,254.5,1401.9,631.6), null);


(lib.control02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.slComC2 = new lib.slComC1();
	this.slComC2.name = "slComC2";
	this.slComC2.parent = this;
	this.slComC2.setTransform(1371.05,759.4);

	this.slComC1 = new lib.slComC1();
	this.slComC1.name = "slComC1";
	this.slComC1.parent = this;
	this.slComC1.setTransform(1371.05,701);

	this.btnOrbital224 = new lib.btnOrbital224();
	this.btnOrbital224.name = "btnOrbital224";
	this.btnOrbital224.parent = this;
	this.btnOrbital224.setTransform(1442.25,595.35,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital224, 0, 1, 2, false, new lib.btnOrbital224(), 3);

	this.btnOrbital223 = new lib.btnOrbital223();
	this.btnOrbital223.name = "btnOrbital223";
	this.btnOrbital223.parent = this;
	this.btnOrbital223.setTransform(1442.25,532.1,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital223, 0, 1, 2, false, new lib.btnOrbital223(), 3);

	this.btnOrbital214 = new lib.btnOrbital214();
	this.btnOrbital214.name = "btnOrbital214";
	this.btnOrbital214.parent = this;
	this.btnOrbital214.setTransform(1442.25,468.9,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital214, 0, 1, 2, false, new lib.btnOrbital214(), 3);

	this.btnOrbital213 = new lib.btnOrbital213();
	this.btnOrbital213.name = "btnOrbital213";
	this.btnOrbital213.parent = this;
	this.btnOrbital213.setTransform(1442.25,405.7,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital213, 0, 1, 2, false, new lib.btnOrbital213(), 3);

	this.btnOrbital114 = new lib.btnOrbital114();
	this.btnOrbital114.name = "btnOrbital114";
	this.btnOrbital114.parent = this;
	this.btnOrbital114.setTransform(1442.25,342.5,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital114, 0, 1, 2, false, new lib.btnOrbital114(), 3);

	this.btnOrbital113 = new lib.btnOrbital113();
	this.btnOrbital113.name = "btnOrbital113";
	this.btnOrbital113.parent = this;
	this.btnOrbital113.setTransform(1442.25,279.3,0.8,0.8);
	new cjs.ButtonHelper(this.btnOrbital113, 0, 1, 2, false, new lib.btnOrbital113(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnOrbital113},{t:this.btnOrbital114},{t:this.btnOrbital213},{t:this.btnOrbital214},{t:this.btnOrbital223},{t:this.btnOrbital224},{t:this.slComC1},{t:this.slComC2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.control02, new cjs.Rectangle(1305.4,254.1,287,586.6), null);


// stage content:
(lib.myAnimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// helper
	this.t02 = new lib.t02();
	this.t02.name = "t02";
	this.t02.parent = this;
	this.t02.setTransform(818,130);

	this.t01 = new lib.t01();
	this.t01.name = "t01";
	this.t01.parent = this;
	this.t01.setTransform(200,130);

	this.mPointer = new lib.mPointer();
	this.mPointer.name = "mPointer";
	this.mPointer.parent = this;
	this.mPointer.setTransform(350,560.05);

	this.mBtn3 = new lib.mBtn3();
	this.mBtn3.name = "mBtn3";
	this.mBtn3.parent = this;
	this.mBtn3.setTransform(1250,500);
	new cjs.ButtonHelper(this.mBtn3, 0, 1, 2, false, new lib.mBtn3(), 3);

	this.mBtn2 = new lib.mBtn2();
	this.mBtn2.name = "mBtn2";
	this.mBtn2.parent = this;
	this.mBtn2.setTransform(800,501);
	new cjs.ButtonHelper(this.mBtn2, 0, 1, 2, false, new lib.mBtn2(), 3);

	this.mBtn1 = new lib.mBtn1();
	this.mBtn1.name = "mBtn1";
	this.mBtn1.parent = this;
	this.mBtn1.setTransform(350,500);
	new cjs.ButtonHelper(this.mBtn1, 0, 1, 2, false, new lib.mBtn1(), 3);

	this.tBG = new lib.title();
	this.tBG.name = "tBG";
	this.tBG.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tBG},{t:this.mBtn1},{t:this.mBtn2},{t:this.mBtn3},{t:this.mPointer},{t:this.t01},{t:this.t02}]}).wait(1));

	// control03
	this.instance = new lib.atomLabel02();
	this.instance.parent = this;
	this.instance.setTransform(-409.6,701.9,1,1,0,0,0,100,50);

	this.instance_1 = new lib.atomLabel03();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-502.25,800);

	this.instance_2 = new lib.atomLabel01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-502.25,506.05);

	this.control03 = new lib.control03();
	this.control03.name = "control03";
	this.control03.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.control03},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// control02
	this.instance_3 = new lib.teacher02();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-389,238.8,1,1,0,0,0,200,50);

	this.instance_4 = new lib.coefficientTable();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-2535.5,20.8);

	this.control02 = new lib.control02();
	this.control02.name = "control02";
	this.control02.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.control02},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// control01
	this.control01 = new lib.control01();
	this.control01.name = "control01";
	this.control01.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.control01).wait(1));

	// UI
	this.btnPlayStop = new lib.btnPlayStop();
	this.btnPlayStop.name = "btnPlayStop";
	this.btnPlayStop.parent = this;
	this.btnPlayStop.setTransform(1553,151.3,0.6,0.6,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btnPlayStop, 0, 1, 2, false, new lib.btnPlayStop(), 3);

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
	this.btn02.setTransform(1996.65,536.05);

	this.btn01 = new lib.theButton();
	this.btn01.name = "btn01";
	this.btn01.parent = this;
	this.btn01.setTransform(1846.65,536.05);

	this.ch02 = new lib.theCheckbox();
	this.ch02.name = "ch02";
	this.ch02.parent = this;
	this.ch02.setTransform(1913.85,426.6,1,1,0,0,0,67.2,-1.4);

	this.ch01 = new lib.theCheckbox();
	this.ch01.name = "ch01";
	this.ch01.parent = this;
	this.ch01.setTransform(1913.85,354.45,1,1,0,0,0,67.2,-1.4);

	this.sl03 = new lib.theSlider();
	this.sl03.name = "sl03";
	this.sl03.parent = this;
	this.sl03.setTransform(1846.65,269.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sl03},{t:this.ch01},{t:this.ch02},{t:this.btn01},{t:this.btn02},{t:this.slCameraRR},{t:this.slShapeAB},{t:this.slShapeCC},{t:this.btnPlayStop}]}).wait(1));

	// btn3D
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(101.2,875.708);

	this.btn3D = new lib.btn3D();
	this.btn3D.name = "btn3D";
	this.btn3D.parent = this;
	new cjs.ButtonHelper(this.btn3D, 0, 1, 2, false, new lib.btn3D(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn3D},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1735.5,450,3856.2,470.79999999999995);
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;