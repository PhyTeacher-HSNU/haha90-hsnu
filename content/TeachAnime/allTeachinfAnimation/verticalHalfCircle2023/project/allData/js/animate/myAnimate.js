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


(lib.btnStep = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AC3C0IAAkeIAhAAIAAAbQAKgQAPgIQAOgIAUAAQAbAAAUAOQAVANAKAZQAKAZAAAeQAAAfgLAZQgMAagVANQgWAOgYAAQgSAAgOgHQgNgIgJgLIAABlgADog+QgRAVAAAoQAAAnAQATQARATAXAAQAXAAARgUQAQgUAAgoQAAgogQgUQgQgTgXAAQgWAAgSAVgAgXBNQgbgcAAgyQAAg0AbgdQAbgdArAAQApAAAaAcQAbAdAAAzIgBAJIiZAAQACAiAQASQASASAZAAQAUAAAOgKQAOgKAHgXIAkAFQgIAggXARQgYASgkAAQgtAAgagcgAAGhCQgPAQgCAcIBzAAQgDgbgKgNQgSgUgaAAQgYAAgRAQgAlQBYQgVgRgGghIAjgFQADAVAOALQANALAYAAQAYAAALgKQAMgKAAgNQAAgMgKgHQgHgEgdgIQgngJgPgGQgOgIgIgMQgIgNAAgPQAAgOAHgMQAGgMALgHQAIgGAOgFQAOgEAQAAQAZAAASAHQATAHAIAMQAKAMADAUIgiAFQgDgQgLgJQgLgJgVAAQgYAAgKAIQgLAIAAALQAAAHAEAFQAEAGAKADIAfAJQAlAKAPAHQAPAGAIALQAJAMgBASQAAASgKAQQgKAPgTAJQgUAIgYAAQgoAAgWgRgAh7BhQgKgGgFgKQgEgKAAgfIAAh3IgaAAIAAgbIAaAAIAAg0IAjgVIAABJIAjAAIAAAbIgjAAIAAB4QAAAQACAEQACAEAEADQAEACAIAAIAPgBIAFAfQgPADgMAAQgSAAgLgGg");
	this.shape.setTransform(0.1,0,1.2,1.2,0,0,0,0.9,0);

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
	this.shape.graphics.f("#FFFFFF").s().p("AAtCLIAAicIgNARIgXgLQAtg4AOhHIAZAHQgKAogMAcIAADKgAhgCLIAAhaIgZAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBABAAAAIAABJIgXAAIAAhbQAAgFAFAAIAsAAIAAgdIgmAAQgBAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAIAAAZIgXAAIAAgsQAAAAAAgBQAAgBABAAQAAgBABAAQABAAAAAAICAAAIATAKQAAARgIAWIgXgFIAHgVQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAgBAAIgkAAIAAAdIAtAAQAGAAAAAFIAABGQAAANgLAIQgKAGgagDIgCgaQAKADAFABIAFgBQAGgEgBgHIAAgqIgCgBIgZAAIAABagAkhBtIARAAIAAhHIAYAAIAABGIAUgCIAAhYIgpAAQgHAAAAgHIAAh7QgBgGAGAAIAiAAQAHgLAAgIIAXAIIgEALIAjAAQAGABABAFIAAAwQgBAGgGAAIhPAAIAAAPIBQAAQAIAAAAAHIAAAuQAAAIgIAAIgdAAIAAAYIAmAAIAAAXIgmAAIAAAmQAYgFARgFIAIAZQgzANhOAEgAj/gEQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABAAIA9AAQABAAAAAAQABAAAAgBQAAAAAAgBQAAgBAAAAIAAgPQAAgBAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAIg/AAgAj/hfIAAARIA9AAQABAAABAAQAAAAABAAQAAAAAAgBQAAgBAAgBIAAgOQAAgBAAgBQAAAAAAAAQgBgBAAAAQgBAAgBAAIg7AAQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAAAABgABPCEIAAgaIB8AAQAXhTALhOIAZAFQgQBWgRBGIA9AAIAAAagABkgvIAagGQARA5AHBSIgaAFQgIhYgQgygAiOgkIAAgVIBWAAQABAAAAgBQABAAAAAAQAAAAAAgBQABAAAAAAIAAgNIhrAAIAAgVIBrAAIAAgMIgDgBIhWAAIAAgVIBpAAQAHgBAAAIIAAAbIAUAAIAAAVIgUAAIAAAdQAAAHgHAAgABYhNIAAgZIBQAAIAAgkIAbAAIAAAkIBaAAIAAAZg");
	this.shape.setTransform(0.0574,-0.025,1.5,1.5);

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
	this.shape.graphics.f("#FFFFFF").s().p("AEeDIIAAmPIBkAAIAAGPgABTDIIAAmPIBkAAIAAGPgAmBjHIGPDHImPDIg");
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


(lib.btnGo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACzCCIACgbQAUAIAIABQALADAIAAQAFAAAHgEQACgEABgFIAAipIhPAAIAAgZIBPAAIAAguIAZAAIAAAuIAVAAIAAAZIgVAAIAACwQAAASgOAIQgIAFgOAAQgUAAghgKgAimB0QAdgHARgIQgRgOgOgZIAWgKQAPAbAPAKQAfgRALgZQACgEgFABIhbAAIAAgYIBvAAIANANQgNAjgSASIgTAQQAaALAnABIgGAZQgxgEgggTQgCADgEABQgdAPgSAFgABNCHIAAgbQAfAKAIgFQAGgFgBgHIAAgnIgTARQgPANgWAKQgUAMgSAHIgQgWQA5gUAggcIAEgEIhYALIgFgZIARgCIAAiNQABgGAFAAIAkAAQAFgNABgKIAYAGIgEARIAsAAQAHABgBAFIAABkIANghIAXAHQgLAigZAmIAABMQABAOgMAIQgJAFgQAAQgOAAgTgEgAA1AcIBEgHIAAgTIhEAAgAA1gWIBEAAIAAgWIhEAAgAA1hZIAAAUIBEAAIAAgUQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAIhBAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAgAkDCFIgCgaQAnANAOgFQAJgDAEgHQACgRAAgTQABgEgEAAIgyAAIgCAKQgMgCgKgEIAKhAQAAgHAIAAIA/AAIAAgVQAAgBAAgBQAAAAgBAAQAAgBgBAAQgBAAgBAAIg8AAIAAgOIgaAHIgJgWIAtgKQgPgPgOgHIAPgSQAVAOARAOQAXgPAKgOQACgEgEABIg0AAIAAgXIBKAAIAOALQgWAzg5AWIA8AAQAFABAAAFIAABEIgXAAIAAgHIgsAAQgFABgCAFIgBASIBBAAQAIABAAADIgDBBQgEAKgIAIIgFADQgJAFgSAAQgSAAgagFgAC2gNIAagHQATBBADATIgYAEQgIgrgQgmgAijgBQAJgEADgDQAJgIAAgOIAAgTIABgEIADgBIBFAAIAEABIACAEIAAAgIABAIQACACAHAAIACAAQACgBAEAAQACAAAAgHIAAgNIAVAEIgCAYQgBAFgDABQgHAHgIAAIgUAAQgLAAgFgHQgHgEAAgKIAAgWQAAgBAAgBQAAAAgBAAQAAgBgBAAQgBAAAAAAIgbAAQgBAAgBAAQgBAAAAAAQgBAAAAABQAAABAAABIAAAIQAAAJgEAHQgHAQgSAIgAiPhwIAMgVIAXAWQAQgRAIgKIAPAQQgEAHgRASIAOAKIAbgcIAQASIgQAQQgBAEgEABQAVALAZAHIgQAWQhGgdgxgvg");
	this.shape.setTransform(0.05,0,1.5,1.5,0,0,0,0.7,0);

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
	this.shape.graphics.f("#FFFFFF").s().p("ACaGzIAAhWQBsAaAbgPQATgPAAgXIAAgWImJAAIAACHIhPAAIAAnFQAEgTAPAAIIBAAQATAEAAAPIAAF2QAAAtgmAaQggATg5AAQgtAAg9gLgAhVDlIGJAAIAAhAImJAAgAhVApIAAA1IGJAAIAAg1QgBgHgDAAIl+AAQgHADAAAEgAm5GKQBsjaAiiLIBPAXQgpCdhpDWgAm5h3IAphHQBEAlBaA8IgyBHQhZhHg8gagAjVhSIAAhLIEVAAIAAgwIjoAAIAAhEIDoAAIAAg0IkKAAIAAhEIEKAAIAAg0IBSAAIAAA0IEOAAIAABEIkOAAIAAA0IDxAAIAABEIjxAAIAAAwIEpAAIAABLgAmulnIAthHQBHApBaBHIgxBEQhhhLg8gig");
	this.shape.setTransform(0.0264,0.0208,0.4406,0.4406);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

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


(lib.heightMap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("ABGAyIgNgVIgKgNIgHgHIgGgDIgHAAIgPAAIAAAsIgNAAIAAhjIAsAAQANAAAHADQAHACAEAHQAEAHAAAIQAAALgHAHQgGAHgPACIAIAFQAGAFAFAIIASAbgAAMgFIAcAAQAJAAAFgCQAFgBADgFQADgEAAgFQAAgHgFgEQgGgFgLAAIgfAAgAhWAyQAAgEACgEQACgHAGgHQAGgGAKgJQAQgNAGgHQAGgIAAgHQAAgHgFgFQgGgFgIAAQgJAAgFAFQgFAFgBAKIgMgBQABgPAJgHQAIgHAOAAQAPAAAIAIQAJAIAAALQAAAGgDAGQgCAGgGAGIgTARIgOANIgFAGIAxAAIAAAMg");
	this.shape.setTransform(1198.0598,-10.5198,1.2,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FFFF").ss(1,1,1).p("AhGAAICOAA");
	this.shape_1.setTransform(1188.7001,79.8106,1.2,1.23);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FFFF").s().p("AhrCCQgJgHgBgNIAMgCQACALAFAFQAFAEAIAAQAIAAAGgGQAGgGAAgJQAAgIgFgGQgGgGgIABIgJABIABgKIACAAQAIAAAGgFQAHgEAAgIQAAgHgFgEQgEgFgIAAQgHAAgFAFQgEAEgCAJIgMgCQACgNAIgGQAIgHAMAAQAIAAAHADQAHAEAEAGQADAGAAAHQAAAHgDAEQgEAGgGADQAIACAFAHQAFAGAAAKQAAANgJAJQgKAJgPAAQgNAAgIgIgABlAuIgNgVIgJgOIgHgHIgGgCIgIgBIgPAAIAAAtIgNAAIAAhjIAsAAQAOAAAHACQAHADAEAHQAEAHAAAIQAAALgHAHQgHAIgOAAIAIAGQAFAEAGAIIARAcgAArgJIAdAAQAJAAAFgCQAFgBADgFQACgEAAgFQAAgHgFgEQgFgFgLAAIggAAgAhsgsQgIgIgBgMIAMgCQACAKAFAEQAFAFAIAAQAJAAAGgGQAGgIAAgKQAAgLgGgGQgGgGgJAAQgGAAgFADQgFACgDAEIgLgBIAJgzIAyAAIAAAMIgoAAIgFAbQAJgHAKAAQANAAAJAJQAJAJAAAPQAAANgIAKQgKAMgQAAQgOAAgJgHg");
	this.shape_2.setTransform(1198.3898,80.1796,1.2,1.23);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00FFFF").ss(1,1,1).p("AhGAAICOAA");
	this.shape_3.setTransform(1188.6501,181.3139,1.2,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FFFF").s().p("AhpCDQgJgIgBgMIAMgCQACAKAFAFQAFAFAIAAQAIgBAGgFQAGgHAAgJQAAgIgFgFQgGgGgIAAIgJABIABgKIACAAQAIAAAGgEQAHgFAAgIQAAgGgFgFQgEgFgIAAQgHAAgFAFQgEAFgCAIIgMgCQACgMAIgHQAIgHAMAAQAIAAAHAEQAHADAEAHQADAGAAAGQAAAHgDAFQgEAFgGADQAIADAFAGQAFAGAAAKQAAANgJAKQgKAJgPAAQgNAAgIgIgABnAuIgNgVIgJgNIgHgHIgGgCIgIgBIgPAAIAAAsIgNAAIAAhjIAsAAQAOAAAHADQAHACAEAIQAEAHAAAHQAAAMgHAGQgHAIgOABIAIAFQAFAFAGAIIARAbgAAtgJIAdAAQAJAAAFgCQAFgBADgFQACgDAAgGQAAgGgFgFQgFgFgLABIggAAgAhMgmIAAgYIgrAAIAAgMIAthAIAKAAIAABAIAOAAIAAAMIgOAAIAAAYgAhrhKIAfAAIAAgtg");
	this.shape_4.setTransform(1198.0998,181.6139,1.2,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FFFF").s().p("AAbAyIgNgVIgJgNIgGgIIgGgCIgIAAIgPAAIAAAsIgNAAIAAhjIArAAQAOAAAHACQAHADAEAHQAEAHAAAIQAAALgHAHQgHAHgOACIAIAEQAFAGAGAIIARAbgAgegFIAdAAQAIAAAFgCQAFgBADgFQACgEAAgFQAAgHgFgFQgFgEgLAAIgfAAg");
	this.shape_5.setTransform(1191.5,289.95,1.2,1.2,0,0,0,-0.1,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#00FFFF").ss(1,1,1).p("AhGAAICOAA");
	this.shape_6.setTransform(1188.6501,380.2872,1.2,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00FFFF").s().p("AhqCDQgJgIgBgMIAMgCQACALAFAEQAFAFAIAAQAIAAAGgGQAGgGAAgJQAAgJgFgFQgGgGgIAAIgJACIABgLIACAAQAIAAAGgEQAHgEAAgJQAAgGgFgFQgEgEgIAAQgHAAgFAEQgEAFgCAJIgMgCQACgNAIgHQAIgGAMAAQAIAAAHADQAHAEAEAGQADAGAAAHQAAAGgDAFQgEAGgGADQAIACAFAHQAFAGAAAKQAAANgJAJQgKAJgPAAQgNAAgIgIgABmAvIgNgVIgJgOIgHgHIgGgCIgIgBIgPAAIAAAtIgNAAIAAhjIAsAAQAOAAAHACQAHADAEAHQAEAHAAAIQAAALgHAHQgHAHgOABIAIAFQAFAFAGAIIARAcgAAsgIIAdAAQAJAAAFgCQAFgCADgEQACgEAAgFQAAgHgFgFQgFgEgLAAIggAAgAh2gmQAAgEABgEQADgHAGgHQAFgGALgJQAQgNAGgIQAFgIAAgHQAAgHgFgFQgFgFgIAAQgJAAgGAFQgFAFAAAKIgNgBQACgPAIgHQAJgHAOAAQAOAAAJAIQAIAIAAALQAAAGgCAGQgDAGgGAHIgTARIgOANIgFAGIAxAAIAAAMg");
	this.shape_7.setTransform(1198.2198,380.5572,1.2,1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#00FFFF").ss(1,1,1).p("AhHAAICPAA");
	this.shape_8.setTransform(1189.21,480.8938,1.2,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00FFFF").s().p("AhrCDQgJgIgBgMIAMgCQACALAFAEQAFAFAIAAQAIAAAGgGQAGgGAAgJQAAgJgFgFQgGgGgIAAIgJACIABgLIACAAQAIAAAGgEQAHgEAAgJQAAgGgFgFQgEgEgIAAQgHAAgFAEQgEAFgCAJIgMgCQACgNAIgHQAIgGAMAAQAIAAAHADQAHAEAEAGQADAGAAAHQAAAGgDAFQgEAGgGADQAIACAFAHQAFAGAAAKQAAANgJAJQgKAJgPAAQgNAAgIgIgABlAvIgNgVIgJgOIgHgHIgGgCIgIgBIgPAAIAAAtIgNAAIAAhjIAsAAQAOAAAHACQAHADAEAHQAEAHAAAIQAAALgHAHQgHAHgOABIAIAFQAFAFAGAIIARAcgAArgIIAdAAQAJAAAFgCQAFgCADgEQACgEAAgFQAAgHgFgFQgFgEgLAAIggAAgAhTgmIAAhOQgFAEgHAEQgHAFgGACIAAgMQAKgFAIgHQAIgHADgGIAIAAIAABkg");
	this.shape_9.setTransform(1198.8998,481.1638,1.2,1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00FFFF").s().p("AgWApQgKgNAAgcQABgRADgLQAEgLAHgFQAHgGAKAAQAIAAAGADQAGAEAEAGQAEAFACAKQACAIAAAOQABASgEAKQgDAMgIAFQgHAGgLAAQgOAAgIgKgAgNghQgGAKAAAXQAAAZAGAIQAGAIAHAAQAJAAAFgIQAGgJAAgYQAAgXgGgJQgFgIgJAAQgIAAgFAHg");
	this.shape_10.setTransform(1189.9101,588.4502,1.2,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#00FFFF").ss(1,1,1).p("EhdvAPoMC7fAAAEhdvAfQMC7fAAAEhdvgPnMC7fAAAEhdvgfPMC7fAAA");
	this.shape_11.setTransform(600,300);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#00FFFF").ss(3,1,1).p("EhdvAu4MC7fAAAEhdvAAAMC7fAAAEhdvgu3MC7fAAA");
	this.shape_12.setTransform(600,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.heightMap, new cjs.Rectangle(-1.5,-16.5,1214.6,618), null);


(lib.empty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.arrowV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AggAuInTAAIAAhbIHTAAIAAgdIIUBKIoUBLg");
	this.shape.setTransform(50,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrowV, new cjs.Rectangle(0,-7.5,100,15), null);


(lib.arrowN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggA9InTAAIAAh5IHTAAIAAgnIIUBjIoUBkg");
	this.shape.setTransform(50,0.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrowN, new cjs.Rectangle(0,-9.9,100,20), null);


(lib.arrowMg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AggA8InTAAIAAh4IHTAAIAAgnIIUBjIoUBkg");
	this.shape.setTransform(50,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrowMg, new cjs.Rectangle(0,-10,100,20), null);


(lib.slV0 = function(mode,startPosition,loop) {
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
		sl.len = 300;
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

	// js
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhdA8IAAghIC8AAIAAAhgAhdgaIAAghIC8AAIAAAhg");
	this.shape.setTransform(102.15,-56.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAyB3Ignh0QgMABgOgDIgVBIQgDAOAAAKQAAAHAEAEQAFADARACIgCAGIhdAAIACgGQANgBAFgCQAIgDADgFQAFgIAHgVIApiPQAEgPABgHQgBgJgGgFQgHgGgMAAIACgGIBNAAQAnAAARAPQARAOAAAZQAAAXgSATQgRATgfAEIAXBGQAJAZAIAIQAIAIATABIgCAGgAAPhoIgbBgIATABQAeAAASgQQARgRAAgZQABgUgMgKQgLgKgWAAIgNABg");
	this.shape_1.setTransform(219.3,-53.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhABxQgSgFgIgJQgHgJgBgJQAAgHAGgIQAFgJAHgFIAbgQQgIgGgBgIQABgHAHgIQAHgHAXgJQgUgEgKgMQgMgNAAgPQAAgZAWgUQAVgTAkAAQAOAAAIACQAIADAIAGIAwAAIgGASIgdAAQADAJAAAJQAAAXgTASQgUASgiACQgSAGgKAGQgDADAAADQAAAEADADQADACANADIAhAIQAcAHAKAJQAIAJABANQAAAOgLAMQgLAMgUAHQgUAGgZAAQgWAAgRgFgAhDA5QgIALABAJQgBAMALAIQAPALAeAAQAYAAARgJQASgJAAgNQAAgHgGgGQgHgGgTgEIg1gNQgPAGgHAKgAgXhZQgNAUABAVQAAAOAIAJQAIAIAMAAQAIAAAJgFQAIgFAHgJQAFgJAEgOQADgOAAgGQAAgOgHgIQgIgIgNAAQgSAAgOAUg");
	this.shape_2.setTransform(200.2,-45.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA0BSQgPgaAAglQAAgfAJgXQAKgXAPgLQANgJANAAQAWAAARAVQAVAbAAAuQAAAggJAXQgKAWgOALQgPAJgNAAQgbAAgRgfgABQg9QgJAMgEAYQgDAYAAAXQAAAnAJAYQAHAUAQAAQAIAAAIgHQAHgGAFgQQAGgXAAgrQAAgfgGgVQgGgQgIgHQgFgEgIAAQgJAAgIAIgAhkBSQgFiEgQghQgGgLgMAAIgPACIgCgHIA+gNQAGAPAEAQQAGAYADAhQACARADAzQAbgcAEgIQAdgkAEgHQAGgLACgIQADgHAAgGQAAgFgJgHQgKgIAAgIQAAgHAFgFQAGgFAGAAQAJAAAHAHQAHAHAAALQAAALgEAJQgFAQgPAYQgOAXgiAmIgvAwg");
	this.shape_3.setTransform(64.275,-54.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// text
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(3,1,1).p("AoHgGIBREGIBCn/IN8AA");
	this.shape_4.setTransform(180.75,-54.15);

	this.valueText = new cjs.Text("0.5", "30px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.textAlign = "right";
	this.valueText.lineHeight = 36;
	this.valueText.lineWidth = 48;
	this.valueText.parent = this;
	this.valueText.setTransform(189.5,-68.35);

	this.label = new cjs.Text("文字標籤", "26px 'Microsoft JhengHei'", "#FFFFFF");
	this.label.name = "label";
	this.label.textAlign = "right";
	this.label.lineHeight = 37;
	this.label.lineWidth = 146;
	this.label.parent = this;
	this.label.setTransform(148,134.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.label},{t:this.valueText},{t:this.shape_4}]}).wait(1));

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
	this.btnS.setTransform(149.8,0,3.3,0.3);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// line
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#999999").ss(5,1,1).p("A3bAAMAu3AAA");
	this.shape_5.setTransform(150,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006600").s().p("AuDAyIAAhjIcHAAIAABjg");
	this.shape_6.setTransform(150,15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000099").s().p("AkrAyIAAhjIJXAAIAABjg");
	this.shape_7.setTransform(30,15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#993300").s().p("AkrAyIAAhjIJXAAIAABjg");
	this.shape_8.setTransform(270,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.slV0, new cjs.Rectangle(-16.8,-81.2,333.3,251.8), null);


(lib.chTrace = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(39.05,0,1.2244,0.3399,0,0,0,0.1,0);
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
	this.shape_2.graphics.f("#FFFFFF").s().p("ACBB7QA2gpABhiIAAhCIgtAAIAAgXIBEAAIAAgfIAZAAIAAAfIBHAAIAAAXIgwAAIAAC/QgBASgMAHQgMAIgkgIIAAgaQAbAIAHgEQACgDAAgFIAAi6IgVAAIAABCQgBAzgPArQgRAkgaAZgAjCB8QAyguAChzIAAgjIgbAAIAAgaIAbAAIAAgmIAaAAIAAAmIAlAAQAKgBAAAKIAAC7QgCAEAEAEQAEAEADgBIABAAIAGgCQACgEAAgDIAAg4IAaAFIgEBCQgDAKgHAFQgJAFgKAAIgKAAQgOgCgJgLQgEgHAAgKIAAisQgBgFgDAAIgRAAIAAAjQgDAZgBAaQgMBSgmArgAj7CLIAAgrIg0AAIAAgZIA0AAIAAgSIgrAAQgBAAgBAAQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAh5QAAgBAAgBQAAAAABgBQAAAAABAAQABAAABAAIArAAIAAgRIgzAAIAAgZIAzAAIAAgWIAYAAIAAAWIA0AAIAAAZIg0AAIAAARIAtAAQABAAABAAQAAAAABAAQAAABAAAAQABABAAABIAAB5QAAABgBABQAAAAAAABQgBAAAAAAQgBAAgBAAIgtAAIAAASIAzAAIAAAZIgzAAIAAArgAjjAcIAYAAIABgBIAAgbIgZAAgAkTAcIAYAAIAAgcIgYAAgAjjgXIAZAAIAAgaIgBgBIgYAAgAkTgXIAYAAIAAgbIgYAAgAAWBwQAHgDAHgBIAAhsIAWAAIAABnQAIgEAJgBIAAh+IgkAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBIAAheQAAgBAAgBQAAAAAAgBQABAAAAAAQABAAABAAIBYAAQABAAABAAQAAAAABAAQAAABAAAAQAAABAAABIAABeQAAABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAIgeAAIAAApIAfAAIAAAXIgfAAIAAA3IAdgLIAJAYQggAQhHAPgAA7gzIAvAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIAAg0IgwAAgAEaBSQgEhBgMhGIAXgCQAOBFABBEgAB4BGQAfg8gBhAIAYABQgFBPgZAyg");
	this.shape_2.setTransform(60.4,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chTrace, new cjs.Rectangle(-23.2,-20.7,124.4,38.7), null);


(lib.chHeight = function(mode,startPosition,loop) {
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AjjCHIAAgbQAdAJAHgFQACgDAAgFIAAgnIhTAAIAAgYIC9AAIAAAYIhQAAIAAAuQAAASgOAIQgGAEgLAAQgNAAgUgGgAEhCIIgBgYIiDAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIAAhBQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABAAICOAAQABAAABAAQAAAAABABQAAAAAAABQABAAAAABIAABBIgCADQARAEAEgEQAIgDAAgIIAAhLIgDgCIjIAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAABIAABvIgZAAIAAiCQABgGAFAAIDxAAQAHABAAAFIAABoQgBARgMAHQgHAFgPAAQgMAAgTgEgACxBAIAAAaIBkAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIAAgZQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAIhkAAQAAAAAAAAQgBAAAAABQAAAAABAAQAAAAAAAAgAlECJIAAh4QgGAWgHAPIgZgFQAagxAIg1IgfAAIAAgaIAjAAIAAg6IAZAAIAAA6IAZAAIAAAaIgZAAIAAAGIAjA3IgWAOIgNgZIAACMgAiRBjIAQgVQAVAOAaAZIgRATQgcgZgSgMgAkhBtQAcgLAXgYIATARQgcAegaAKgAj7AaIAAgYICYAAIAAAYgACIgLQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAg8QAAgBAAgBQAAAAAAgBQABAAAAAAQABgBABAAIC4AAQABAAABABQAAAAABAAQAAABAAAAQAAABAAABIAAA8QAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAgACeg2IAAAVICKAAIABgBIAAgUIgBgBIiKAAQAAAAAAAAQgBAAAAAAQAAAAABAAQAAABAAAAgAkFgMQAAAAgBAAQgBgBAAAAQgBAAAAgBQAAgBAAgBIAAhEQAAgBAAAAQAAgBABAAQAAgBABAAQABAAAAAAIAvAAIAAgSIg3AAIAAgXIC2AAIAAAXIg0AAIAAASIAtAAQABAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAABEQAAABAAABQAAABAAAAQgBAAAAABQgBAAgBAAgAiLgjIAXAAIABgCIAAgbIgYAAgAi9gjIAZAAIAAgdIgZAAgAjvglQAAABAAAAQAAAAAAAAQAAABABAAQAAAAAAAAIAYAAIAAgdIgZAAgAi9hXIAZAAIAAgSIgZAAgABbheIAAgZIB8AAIAAgVIAbAAIAAAVIB6AAIAAAZg");
	this.shape_2.setTransform(63.85,0.5151);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chHeight, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


(lib.chArrowV = function(mode,startPosition,loop) {
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
	this.shape_2.graphics.f("#FFFF00").s().p("AgOBrIhTjVIAeAAIA4CbIALAjIALgjIA6ibIAdAAIhUDVg");
	this.shape_2.setTransform(109.825,0.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACiB4QAegEAZgSIAOAYQghASghAGQAAgPgDgLgAh9CKIAAgbQAmAKAJgHQACgEAAgFIAAiCIAbAAIAACKQAAASgPAJQgHAEgOAAQgQAAgYgGgAEJB8IAJgWQAXAFAdAPIgKAWQgfgPgUgFgAkACKIgBgcQAWAIALAAIAJgDQAGgFAAgHIAAgLIhPAAIAAAuIgZAAIAAiYQABgJAIAAIBxAAQAIAAAAAJIAAB9QAAASgMAIQgHAFgRAAQgPAAgWgEgAkgBEIBPAAIAAgWIhPAAgAkgACIAAATIBPAAIAAgTQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIhMAAQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAAAgAAiBuQAvgFAbgHQANgpAEgbIAYAGQgEAYgIAdIAagIIALAYQg1AUhOALgAAxAoIAagIQAKAaAFAiIgaAGQgGgkgJgWgAC7BhQgEAAAAgEIAAitQAAgEAEAAIAiAAQAKgUABgFIg3AAIAAgZICRAAIAAAZIhAAAIgFAOIgFALIA/AAQAEAAAAAEIAACtQAAAEgEAAgADQBIIBRAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIAAgbIhTAAgADQAUIBTAAIAAgbIhTAAgADQgfIBTAAIAAgcIhTAAgAiVBfIAAhqIAZAAIAABqgAAvAUQgEAAAAgEIAAhkQAAgDAEAAIBqAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAABIAABkQAAABAAABQAAABgBAAQAAABgBAAQAAAAgBAAgABFgFQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABABAAIA8AAIABgCIAAg6Ig+AAgAlCghIAAgaIBfAAIgBgDQgEgKAAgEIAYgGIAGAXIA4AAQAGgLADgPIAYAKIgGAQIBWAAIAAAagAhxhnIgkAAIAAABQgJAPgJAJIgWgPQAWgWALgeIAXAJIgEAIIBhAAIAAAZIguAAIAKARIgWALQgIgSgHgKgAlFhgQAdgTAOgeIAWANQgBAAgBAEIBJAAIAAAZIgmAAIAHAOIgXALQgGgRgFgIIgYAAIgbAagAAmhtIAAgZIB9AAIAAAZg");
	this.shape_3.setTransform(65.3,0.25,1,1,0,0,0,5.5,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.chArrowV, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


(lib.chArrowN = function(mode,startPosition,loop) {
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AA3BrIhvinIAACnIgbAAIAAjVIAdAAIBvCnIAAinIAbAAIAADVg");
	this.shape_2.setTransform(108.95,0.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACiB4QAegEAZgSIAOAYQghASghAGQAAgPgDgLgAh9CKIAAgbQAmAKAJgHQACgEAAgFIAAiCIAbAAIAACKQAAASgPAJQgHAEgOAAQgQAAgYgGgAEJB8IAJgWQAXAFAdAPIgKAWQgfgPgUgFgAkACKIgBgcQAWAIALAAIAJgDQAGgFAAgHIAAgLIhPAAIAAAuIgZAAIAAiYQABgJAIAAIBxAAQAIAAAAAJIAAB9QAAASgMAIQgHAFgRAAQgPAAgWgEgAkgBEIBPAAIAAgWIhPAAgAkgACIAAATIBPAAIAAgTQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIhMAAQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAAAgAAiBuQAvgFAbgHQANgpAEgbIAYAGQgEAYgIAdIAagIIALAYQg1AUhOALgAAxAoIAagIQAKAaAFAiIgaAGQgGgkgJgWgAC7BhQgEAAAAgEIAAitQAAgEAEAAIAiAAQAKgUABgFIg3AAIAAgZICRAAIAAAZIhAAAIgFAOIgFALIA/AAQAEAAAAAEIAACtQAAAEgEAAgADQBIIBRAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIAAgbIhTAAgADQAUIBTAAIAAgbIhTAAgADQgfIBTAAIAAgcIhTAAgAiVBfIAAhqIAZAAIAABqgAAvAUQgEAAAAgEIAAhkQAAgDAEAAIBqAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAABIAABkQAAABAAABQAAABgBAAQAAABgBAAQAAAAgBAAgABFgFQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABABAAIA8AAIABgCIAAg6Ig+AAgAlCghIAAgaIBfAAIgBgDQgEgKAAgEIAYgGIAGAXIA4AAQAGgLADgPIAYAKIgGAQIBWAAIAAAagAhxhnIgkAAIAAABQgJAPgJAJIgWgPQAWgWALgeIAXAJIgEAIIBhAAIAAAZIguAAIAKARIgWALQgIgSgHgKgAlFhgQAdgTAOgeIAWANQgBAAgBAEIBJAAIAAAZIgmAAIAHAOIgXALQgGgRgFgIIgYAAIgbAagAAmhtIAAgZIB9AAIAAAZg");
	this.shape_3.setTransform(65.3,0.25,1,1,0,0,0,5.5,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.chArrowN, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


(lib.chArrowMg = function(mode,startPosition,loop) {
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
	this.shape_2.graphics.f("#00FFFF").s().p("ABIB+QgRgMAAgZIAaADQABAMAIAGQAKAHARAAQASAAAKgHQAKgIADgNQACgIAAgaQgRAVgaAAQggAAgSgXQgRgYAAgfQAAgWAIgTQAIgTAPgKQAQgKAUAAQAcAAASAWIAAgTIAYAAIAACGQAAAkgHAPQgIAPgQAJQgQAJgXAAQgcAAgRgNgABZguQgMAOAAAcQAAAeAMAOQAMAOATAAQASAAAMgOQAMgOAAgdQAAgdgMgOQgNgPgSAAQgRAAgNAPgAgJBMIAAizIg+CzIgaAAIg+i2IAAC2IgbAAIAAjWIAqAAIAzCXIAKAgIAMgjIAziUIAlAAIAADWg");
	this.shape_2.setTransform(117.125,3.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACiB4QAegEAZgSIAOAYQghASghAGQAAgPgDgLgAh9CKIAAgbQAmAKAJgHQACgEAAgFIAAiCIAbAAIAACKQAAASgPAJQgHAEgOAAQgQAAgYgGgAEJB8IAJgWQAXAFAdAPIgKAWQgfgPgUgFgAkACKIgBgcQAWAIALAAIAJgDQAGgFAAgHIAAgLIhPAAIAAAuIgZAAIAAiYQABgJAIAAIBxAAQAIAAAAAJIAAB9QAAASgMAIQgHAFgRAAQgPAAgWgEgAkgBEIBPAAIAAgWIhPAAgAkgACIAAATIBPAAIAAgTQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIhMAAQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAAAgAAiBuQAvgFAbgHQANgpAEgbIAYAGQgEAYgIAdIAagIIALAYQg1AUhOALgAAxAoIAagIQAKAaAFAiIgaAGQgGgkgJgWgAC7BhQgEAAAAgEIAAitQAAgEAEAAIAiAAQAKgUABgFIg3AAIAAgZICRAAIAAAZIhAAAIgFAOIgFALIA/AAQAEAAAAAEIAACtQAAAEgEAAgADQBIIBRAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIAAgbIhTAAgADQAUIBTAAIAAgbIhTAAgADQgfIBTAAIAAgcIhTAAgAiVBfIAAhqIAZAAIAABqgAAvAUQgEAAAAgEIAAhkQAAgDAEAAIBqAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAABIAABkQAAABAAABQAAABgBAAQAAABgBAAQAAAAgBAAgABFgFQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABABAAIA8AAIABgCIAAg6Ig+AAgAlCghIAAgaIBfAAIgBgDQgEgKAAgEIAYgGIAGAXIA4AAQAGgLADgPIAYAKIgGAQIBWAAIAAAagAhxhnIgkAAIAAABQgJAPgJAJIgWgPQAWgWALgeIAXAJIgEAIIBhAAIAAAZIguAAIAKARIgWALQgIgSgHgKgAlFhgQAdgTAOgeIAWANQgBAAgBAEIBJAAIAAAZIgmAAIAHAOIgXALQgGgRgFgIIgYAAIgbAagAAmhtIAAgZIB9AAIAAAZg");
	this.shape_3.setTransform(65.3,0.25,1,1,0,0,0,5.5,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.chArrowMg, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


(lib.ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.arrowV = new lib.arrowV();
	this.arrowV.name = "arrowV";
	this.arrowV.parent = this;
	this.arrowV.setTransform(10.65,-40.75);

	this.arrowN = new lib.arrowN();
	this.arrowN.name = "arrowN";
	this.arrowN.parent = this;
	this.arrowN.setTransform(70.85,-5.35);

	this.arrowMg = new lib.arrowMg();
	this.arrowMg.name = "arrowMg";
	this.arrowMg.parent = this;
	this.arrowMg.setTransform(129,-35.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.arrowMg},{t:this.arrowN},{t:this.arrowV}]}).wait(1));

	// BGS
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FF0000"],[0,1],-3.7,-3.9,0,-3.7,-3.9,10).s().p("AhpBqQgsgrAAg/QAAg+AsgrQArgsA+AAQA9AAAtAsQAsArAAA+QAAA/gsArQgtAsg9AAQg+AAgrgsg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ball, new cjs.Rectangle(-15,-48.2,244,63.2), null);


// stage content:
(lib.myAnimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// helper
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("ADBF3IAAgnQgNACgJAAQg7AAghgQQgggQAAgVQAAgNATgLQAPgKASAAIATAAQAKAABAgYIAAglQgaAFgOAAQhZAAAAhAIAAhrQAAg6gNgdQgLgTAAgdQAAgmAtAAQAdAAASAWQASgEAigMIAHgDIAAgiIgMACQhAAAgkgUQgjgSAAgXQAAgOAUgOQARgJATAAIAKABIANACQAJAAA6ghQgDgvgTgYQgLgPAAgIQAAgiAlAAQAuAAApAkQAPAMAIAjIADAAQBBAAA3AdQAlAUAAAaQAAAghHABQgpAGgpANIAAArQAagFASAAQAjAAAZASIAAgGQAAgVAbgaQAagWATAAQAFAAAIACIANACQAFAAAQgJIABgoQAAgdgRgeQgQgZAAgNQAAgxA0AAQAgAAAdAXQAlAeAFBDQAzgWAaAAQAqAAArAjQAnAiAAArQAAAWgVByIAIAaQBJD6AABNQAABJgeAwQgeAqgtAAQhQAAglg1QglgxAAhkQAAg9BBlAQAKguAAgLQAAgTgWAAQgMAAgZAQQgIAGgJAFQgDCfgOCPQgUC/gWBHQgUBHg7AAQhDAAAAg4QAAgVALgkQA3i8ANkFQgjAQgOAAQgOAAgNgGQAMAcAAAnIAABjQAAAXgEAQQALAMAAARQAAAlgwAEQg3ABg7AJIAAAcIAFgBQBAAAA2AbQAkAUAAAZQAAAghEABQgtADgtAKIAAA3QAABLhAAAQg4AAAAhAgAMTCeQgJA1AAAPQAABDAiAAQAeAAAAhDQAAh6gRiAIgBgCIglC4gACjBGIAAAUQAAAXAdADIAAgzgAE3AnIABAoIAggJQAAgRADgVgACcgwQADAVACAZIAegPIAAgpQgTAHgQADgAE2hkIABAsQAQgCAQAAIAIAAIAAgXQAAgXgXAAQgFAAgNAEgEAkxAGIQgzgYgUAAQgpAAgyAlQguAeggAAQg+AAgngkQgpgkAAg0QAAguBXg8QAdgRAAgHQAAgKgcgJQhVgUAAgsQAAghA4geQBMgpAAgTQAAgOgjgTQhVgxAAgiQAAgtBHgbQAigKAAgUQAAgLgdgVIg7goQgggVAAgeQAAhAA/AAQAeAABsBcQAqAkAAAaQAAAqg3AwQgMAPAAALQAAAIAPAQQAtAnAAAbQAAAlg2AjQgdAWAAARQAAAaAZABQBcAIAABDQAAAHgEAIQAIgEALAAIAIACIAKACQAXAACOgQIAAgVIgtAHQglAHgXAAQgtAAgYgbQgYgbAAgvQAAhVgNgXQgKgNAAgJQAAghAtAAQAiAAAWARQAWgCAhgHIBBgMIAAgXQgVADgQAAQg1AAgfgPQgIgDgFgEQgPATgTAAQgZAAgPgVQgRgaAAgNQAAgLAJgWQAKgdAAgoQAAgXgGgUQgEgNAAgLQAAgdAhAAQAUAAAXAhIACAAQAJAAARAEQARAEARAAQAiAAB1giQBZgbA/AAQBDAAA6AtQAsAmAAAwQAAAlgoAUQgWAKgZAFIABAHQAAAdhAABQg0AEg2AIIABAYQA8gKAaAAQBIAAAkAhQAnAfAABbQAABFgWAZQgQAVglAAQgYAAgSgGQg7ADg3AGIABAUQA9gFAxAAQA8AAAzAaQAjATAAAXQAAAfhAADQhgACheAFIAAAEQAABBgsAQQBxgEBmgVQBTAAAAA9QAAAigpAVQgtAehaAAQjXAAhdgrgEAiWADCQhrBRAAAkQAAAXASAAQAVAAAogjQBEgzAwAAQAnAAAmAbQBJAoApAAIAEAAQgqgNAAg+IAAgEQhHAEgtAAQg2AAgggQQgegQAAgUIgJAGgEAk+AApQAIAUAcAAQAMAAAZgGIAAgVQgqAGgfABgEAoTAAKIABAVQAtgGAggCIABgVIhPAIgEAldgA0IgpAFIAFAYIBOgNIAAgaIgqAKgEAoSgBSIABAWQAsgGAlAAQgGgTgfAAQgTAAgaADgEAkngDpIAKACQALAABBgTQgHgSgKgLIgFgHQgTACgQAAQgXAAgTgDIABAOQAAAVgDASIAGgBIAJACgEAp/gEVQAWgQAAgRQAAgagtAAQg2AAhJAVIgCABIAKAIQAIAGAGANQAZgEAUAAQAsAAAnAOgAQTGPQgjgggFgsIABgMQAGgyA9hCQAWgVAAgJQAAgJgWgKQhAgYAAgvQAAgjA9geQBVgqAAgTQAAgPgpgVQhlgzAAgkQAAgpBWgaQApgJAAgTQAAgJgegRIg/gjQgigTAAgYQAAg5A4AAQAeAABuBMQAsAfAAAUQAAAnhNAvQgRAMAAALQAAAJAVASQBFArAAAgQAAAnhDAkQgiAWAAASQAAAZAXADQBZAHAABGQAAAZgnAjQheBXgGArQADAUAQAAQAVAAAngeQA+grAvgCQgTgXAAgpIAAkBQAAgXgMgYQgKgQAAgIQAAgbAeAAQAsAAAYATIAOAAQATAAA9gPQADgGAHgLQAHgIABgLQhbARg4AAQg1AAgegPQgdgPAAgTQAAgNAQgMQANgIARAAIAHACIALACQAPAABIgVQgQgGgSgLQg5glAAgjQAAhAA4AAQAlAAAmAwQAZAbAQAAQAWAAAyghQBSg5BWAAQA2AAAuAdQAgAVAAAdQAAAMgdASQATAHATAIQAnAXAAAaQAAAkhLABQhbAFhbANQgBAPgFAMQAygHAeAAQA7AAAnAsQAlAnAABKIAADRQAAA4gYAbQgXAagcAAQghAAgSgOQhbADhVAJQg4AHgwACQA2ATAiAAQCYAACIgaQBSAAAAA9QAAAjgoAUQgtAehbAAQjdAAhgghQg0gTgVAAQgoAAgyAfQgsAZgeAAQg9AAgngkgAV5ClQAAAiAWAAQAWAAAZgEQB/geAkAAQAXAAATACIACglQhDAHhCANQhIAPgpAAQgRAAgNgCgAV5BgQAegFBbgYQBMgWA2AAQAPAAAOACIAAglQhGAIhHATQhGATgnAAQgRAAgNgCgAXIhHQgtAKgiAFIAAAtQAegHBYgeQBKgaAzAAQAUAAASAEIAAgTQAAgWgXAAQgUAAifAogAYLlBQBPgVA9gCQgGgZghAAQhHAAgeAwgEgsGAGiQgZgSAAgKQAAgWAZgPQAggPAWAAIAWAAIAMgBQgIgTAAgdIAHkZQAAhKgbgiQgOgUAAgJQAAgtAxAAQAdAAAbALIAEgBQADAAAGADQAJAFAEAAQARAAA+gNIA8gNIAAgEQAAgLADgVQhuAJhFAAQhGAAgngUQglgSAAgaQAAgQAVgPQARgKAWAAIAJACIANACQAhAADVglIgHgOQgGgNAAgPQAAgpAwAAQAyAAAnAXQAXAQAIAUQBmgOBOAAQBSAABEAiQAtAaAAAfQAAArhWACQiVADiUANQgGARgGAOQA0gHAoAAQBCAAA2ARQBMAXAXAoQAVAkAAE7QAAApgIAcQAMAEALAHQA8AhAAAhQAAAtgxAAQgpAAgtgFQg3gDhNAAQijAAi8AUQhwAKgnAAQg/AAgggRgEglgAD2QhvANg+AAIAAATQAAAQgCAOQDbgnCbgCIgBgTIAAgTQhkAFhiAMgEgoQAC5ICvgWQBzgPBUgBIAAgcQhnAEhmALQhpANg6AAIgIgBgEgoVAApIABAgQA0gFB0gPQBxgPBTAAIAOAAIAAgjQhoAFhnAPQhpAPg7AAIgIAAIAAADgEgmAgBZQhgAVg9ACIAEAeQA0gFB3gTQBzgSBTAAIALAAQgDgKgGgIQgPgPgdAAQhAAAhuAWgA4GFOIAAhQQhhANg9AAQhKAAgqgVQgogVAAgaQAAgRAVgQQATgMAXAAIAKACIAQACQAfAADCgxIAAg+QhfASg7AAQhFAAgogVQglgTAAgZQAAgPAUgOQATgLAVAAIAJACIANACQAdAAC9g8IAAhRIg1AoQhQA/gzAAQgnAAgNgYQgOghAAg7QAAhTAig4QATglAnAAQA8AAAAA8QAAAbgFAVQgGAbAAAeQAAAPATAAQARAABIg4QgDhHgcgjQgRgVAAgMQAAgxA4AAQBDAAA9AyQAHAJAHALQBBgsA8AAQBGAABJAyQA7AwAAA5QAAA0hPA3QgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAAAQAcAKAaAMQAzAdAAAjQAAAvhiABQhwAGhxAQIAAA0QBJgMA6AAQBcAABNApQA1AdAAAjQAAAvhiACQh/AGiAAPIAABcQAABsheAAQhSAAAAhhgA1ckhQAGArAAA8IAAAoQAqgIAmgCQAwhVAAggQAAgpg5AAQgcAAgxAZgEA3vAF6QgWgQgQgNIgGAPQgRA9g2AAQg1AAgDgqQgPAPgtAAQhTAChSALQhDAKgmAAQg8AAgggRQgfgQAAgUQAAgOASgLQAPgJASAAIATAAQAMAABKgRIAAgCIAAgQIgSACQg3AAgggRQgegQAAgUQAAgOARgLQAPgJARAAIAIACIALACQAKAAA5gQIABgdIgIAAQhIAAgigfQghggAAgxIAAhhQAAghgSgcQgMgOAAgPQAAgbAiAAQAmAAAeAcQAHAHAEAIQAMgCATgHIAkgKIAAgeQgfADgdAAQhpAAAAhIQAAgwArgsQAzgsBSgMQAPAAAAgNIgCgJIgBgKQAAgIAHgHQAKgHAYAAQBYAAA1AdQAfATAAAXQAAAhgwABQg8AAgtAEQAHAEAIAHQAEAEAFAIIAJAAQBUAAA7AdQApAVAAAcQAAAig0AAQhAAAg4AGIAAAJIAAAPIAWAAQA/AAAqAXQAmAWAAAtQAABfgEAqQAHAMAAATQAAAbgzANQhCAOg7AHIAAAKIATAAQA7AAAyAaQAhASAAAXQAAAeg/AAQgzADgzAHIAAANIAeAAQBBAAA0AbQAZANAIAQIAIgfQA0ixAOj0QgWAHgKAAQhAAAAAg5QAAgZAjghQAcgUAIAAIAPADIAPgFIAAg3QAAgdgRgeQgRgZAAgNQAAgxA1AAQAgAAAdAXQAsAkAABXIAAALQAigLASAAQA+AAAkAuQAmAyADDNQAAEAgXBLQgYBUg6AAQgzAAhGgygEA4PgCUQgFCCgQB3QgSCLgWBMQAjAOAZAAQAlAAAKg0QANhcAAj+QAAhVgpAAQgEAAgOAFgEAvnAA4QAAAeAeAAIAXgBIABgiQgOACgKAAQgRAAgNgCIAAAFgEAyaAAZIgBArIAGgBIAxgJIgBgJIABggIg2AIgEAv+gAsIgUAHQAAALgCANIAAACQAQgDAlgLIAAgdIgfAKgEAydgBXIgBAhIASAAQATAAASADIAAgMQAAgaglAAIgRACgEAvggEjQguAcAAAYQAAALAPAAQAeAAA5gYQgGgVgLgNQgJgKgDgIQgQAGgLAHgEg6sAGcQgUgPAAgaQAAgSAUgcQAOgRAGAAQAGAAAHAFQAIAGAFAAQAPAAAqgLIAAgPIAAgmQggAugVAAQgiAAgKgSQgLgUAAgnQAAg2ATglQANgXAXAAQAiAAAAAlQAAAMgCAKQgCAMAAAOQAAALALAAQADAAAJgGIAAhoQgLACgIAAQg2AAgegPQgdgPAAgTQAAgNAQgMQANgJAQAAIAJACIAKACQAJAAA4gZQgDgRgHgNIgGAAQgyAAgcgPQgagPAAgTQAAgLAPgMQANgHAQAAQADAAADACIAJACQAJAABIgrQAvgdAhAAQA4AAAwAZQAfARAAAWQAAAeg8AAQglAFgkALQAHAJAFARIAMgBQA5AAAuAZQAgARAAAVQAAAdg8ABQglAFgmAIIAAATQAMgGALAAQAlAAAoAbQAgAaAAAeQAAAig6AhQgsAageAMIAAANIBygmQAOgEAHAAQAIAAAAAKQAAAphoBFQh1BOhTAAQgpAAgYgQgEg3KAByIAABQQAmgsAAgTQAAgSgeAAIgIABgAtbGEQglgmAAhBQAAhbAGhzQAEhaAAj2QAAgmgPgdQgLgTAAgMQAAgiAlAAQAfAAAdAaQAdgBBSgLQEjgnCZAAQA5AAAuAbQBDAnATBBQASA+AAIOQAAAygTAdQgNATgWAIQgPAKgdAAQgxAAgqgIQgpgEiCAAQiFAAhqAHQg8AJguAAQhCAAgjglgAoGkmQibAUhhABIAAAQQAAC3gGCLQgJCCAABWQAAAmAqAAQAPAAAlgGQgXgHgRgQQgfgcAAggQAAgVAJgQQAKgRAUgHQgPgOgCgUQgDh8gFgZQgHgVAAgTQAAgmAmAAQAWAAARAVQANgCAdgIQCQgiBPAAQBNAAA0AYQAvAZAAAuQAACWgNAbQgMAPgYACIgHACIgUAAQAPAFANAGQA3AXAAAaQAAAegOAQQAXAEAVAHIAAoqQAAgZgKgRQgNgPgZAAQhkAAiqAYgAotEPQgRAPgQAJQCBgSBdgCIgEgGQgogvgnAAQgzAAg3AxgAq2DNQgIAIAAANQAAAZAlAAQAOAAASgRQAbgWAYgPQgVACgMAAQgVAAgRgCQgeACgLAGgApGCLQAuAABJgOQAygLAmgCIgBgNQhDAGhDAKQhBANglAAQgPAAgLgCQAMANAsAAgAqEBPIACAAQAPAABrgaQBFgPAxAAQAOAAAMACIAAgSQhIAFhJAOQhHAPgnAAIgPgBIACAYgAp4gNIgVAGIACAOQAcgFBdgXQBLgTA1AAQANAAANACQgHgQgmAAQgxAAiiApgEg0hAFeIADhUIABiHQAAgggPgXQgIgRAAgKQAAgpAiAAQAdAAAeASIAFABQAMAAArgNQBogbArAAQA5AAAnAqQAkAnAABHIAACHQAAAjgJAXQAQAUAAAXQAAAmglAAQhZAAhoAGQhNAGgeAAQhLgJgIhCgEgyXAB2IgKAEIgIC6QAAASAaAAQAiAAAygGIAogFQAAggAFgxQADg3AAhCQAAgbgXAAQgNAAhoAggEg1JgAeQgUgNAAgUQAAgIAPgUQBAhKAAhvQAAgZgNggQgKgVAAgJQAAgtAqAAQAjAAAcAgQAmAnAAAuQAABpgoBlQgYBEhAAAQgdAAgWgNgEgxDgBDQgigkAAg1QAAgTADgiQAEgeAAgxQAAgngWgjQgPgQAAgSQAAgiApAAQAwAAAkAiQAgAiAAA0QAAAbgIAdQgCArAAAzQAAAiAhAAQAFAAAMgEQAIgDAFAAQBSAAAABLQAAAJgTAFQg0ALgpAAQhOAAgmgigArNicIAAgjQAAgTgJgKQgGgGAAgJQAAgiApAAQAdAAARALIAmgGQB7gYA0AAQBPAAAsAbQAmAbAAAkQAAAHgDAGQAHAKAAALQAAAfgpAEQhjAAhzAKQhZALgjAAQhHAAAAgwgAn+jYQhPAPgmAFIAAACQAAAXAiAAQANAAA0gLIB7gSIABgBQAGgMAAgDQAAgMgXAAQghAAg4AMgEg7QgDgQAAgKAGgKQAIgLAHgBIAJAAQAPgBAsguQAmglAAgaQAAgkAHgJQANgMASAAQAWAAAcAYQAYAVABAUQAkAJA1AcQBBAjAAAoQAABEg5AAQgVAAgWgaQgsgwgkghQgPAZgXAeQhHBZgeAAQhLAAAAhTg");
	this.shape.setTransform(414.175,74.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(5,1,1).p("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");
	this.shape_1.setTransform(414.175,74.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("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");
	this.shape_2.setTransform(414.175,74.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// UI
	this.btnClear = new lib.btnClear();
	this.btnClear.name = "btnClear";
	this.btnClear.parent = this;
	this.btnClear.setTransform(974.5,816.95,0.5,0.5,0,0,0,0.2,0.2);
	new cjs.ButtonHelper(this.btnClear, 0, 1, 2, false, new lib.btnClear(), 3);

	this.chArrowV = new lib.chArrowV();
	this.chArrowV.name = "chArrowV";
	this.chArrowV.parent = this;
	this.chArrowV.setTransform(1095.6,860.45,1,1,0,0,0,59.1,-1.8);

	this.chArrowMg = new lib.chArrowMg();
	this.chArrowMg.name = "chArrowMg";
	this.chArrowMg.parent = this;
	this.chArrowMg.setTransform(1095.6,814.8,1,1,0,0,0,59.1,-1.8);

	this.btnPlayStop = new lib.btnPlayStop();
	this.btnPlayStop.name = "btnPlayStop";
	this.btnPlayStop.parent = this;
	this.btnPlayStop.setTransform(1389,786.85,0.8,0.8,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btnPlayStop, 0, 1, 2, false, new lib.btnPlayStop(), 3);

	this.chTrace = new lib.chTrace();
	this.chTrace.name = "chTrace";
	this.chTrace.parent = this;
	this.chTrace.setTransform(918.35,814.8,1,1,0,0,0,59.1,-1.8);

	this.chHeight = new lib.chHeight();
	this.chHeight.name = "chHeight";
	this.chHeight.parent = this;
	this.chHeight.setTransform(918.35,769.15,1,1,0,0,0,59.1,-1.8);

	this.chArrowN = new lib.chArrowN();
	this.chArrowN.name = "chArrowN";
	this.chArrowN.parent = this;
	this.chArrowN.setTransform(1095.6,769.15,1,1,0,0,0,59.1,-1.8);

	this.btnReset = new lib.btnReset();
	this.btnReset.name = "btnReset";
	this.btnReset.parent = this;
	this.btnReset.setTransform(1280.8,786.85,0.8,0.8);
	new cjs.ButtonHelper(this.btnReset, 0, 1, 2, false, new lib.btnReset(), 3);

	this.btnGo = new lib.btnGo();
	this.btnGo.name = "btnGo";
	this.btnGo.parent = this;
	this.btnGo.setTransform(1389,786.8,1,1,0,0,0,0.2,0.2);
	new cjs.ButtonHelper(this.btnGo, 0, 1, 2, false, new lib.btnGo(), 3);

	this.btnStep = new lib.btnStep();
	this.btnStep.name = "btnStep";
	this.btnStep.parent = this;
	this.btnStep.setTransform(1496.8,786.85,0.8,0.8);
	new cjs.ButtonHelper(this.btnStep, 0, 1, 2, false, new lib.btnStep(), 3);

	this.slV0 = new lib.slV0();
	this.slV0.name = "slV0";
	this.slV0.parent = this;
	this.slV0.setTransform(350.8,828.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.slV0},{t:this.btnStep},{t:this.btnGo},{t:this.btnReset},{t:this.chArrowN},{t:this.chHeight},{t:this.chTrace},{t:this.btnPlayStop},{t:this.chArrowMg},{t:this.chArrowV},{t:this.btnClear}]}).wait(1));

	// btn3D
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("ADbCRQgLgNAAgdQAAgiAMgPQALgNASAAQANAAAJAIQAJAHABANIgOABQgBgHgEgEQgGgHgIAAQgHAAgFAFQgGAEgEAJQgEAKAAARQAFgIAHgDQAIgFAIAAQAOAAAKALQAJALAAAQQAAALgEAJQgFAJgIAFQgIAFgKAAQgSAAgLgNgADnBlQgHAHAAALQAAAHADAHQADAGAGAEQAFAEAGAAQAJAAAHgIQAGgHAAgMQAAgMgGgHQgHgHgJAAQgKAAgGAHgACDCSQgMgOAAghQAAgUAFgMQAEgNAIgGQAIgHANAAQAJAAAHAEQAHAEAEAGQAFAIADAJQACALAAAQQAAAVgEAMQgEAMgIAHQgJAHgMAAQgRAAgJgMgACNA9QgHAKAAAcQAAAcAGAKQAHAKAKAAQAJAAAHgKQAHgKAAgcQAAgcgHgJQgHgKgJAAQgKAAgGAJgAgCCVQgKgJgBgOIANgCQACAMAGAFQAGAGAIAAQAKgBAHgGQAHgIAAgJQAAgKgGgHQgHgGgJAAQgEAAgGACIABgNIADAAQAJABAHgFQAHgFAAgKQAAgHgFgFQgGgGgIAAQgIAAgGAGQgFAFgCAKIgNgDQADgNAJgIQAIgIAOAAQAJAAAIAEQAIAEAEAHQAEAHAAAIQAAAHgEAHQgEAFgHAEQAKACAFAIQAGAHAAALQAAAPgLALQgLAKgRAAQgPAAgJgJgAi0CSQgLgOAAghQAAgUAEgMQAEgNAJgGQAIgHAMAAQAJAAAHAEQAHAEAFAGQAEAIADAJQADALAAAQQAAAVgFAMQgEAMgIAHQgIAHgNAAQgQAAgKgMgAipA9QgIAKAAAcQAAAcAHAKQAHAKAJAAQAKAAAHgKQAGgKAAgcQAAgcgGgJQgHgKgKAAQgKAAgFAJgABTCcIAAgQIAQAAIAAAQgAg/CcIAAhZIgNAJIgPAIIAAgOQALgGAJgHQAJgIAEgIIAJAAIAABzgAkaCcQAAgFACgFQADgIAGgHQAGgHAMgKQATgPAHgKQAGgIAAgJQAAgIgGgFQgGgHgJAAQgLAAgGAHQgGAGAAALIgOgCQABgQAKgIQAKgJAQAAQAQAAAKAJQAKAKAAANQAAAGgDAIQgDAGgGAHIgWAVIgQAOQgEAEgCADIA4AAIAAAOgADcgxQgKgJgCgOIAPgCQACAMAGAFQAGAGAIgBQAKAAAHgGQAHgHAAgKQAAgKgHgHQgGgGgKAAQgEAAgGACIACgNIACAAQAJAAAHgEQAHgFAAgKQAAgIgFgEQgFgGgIAAQgJAAgFAGQgFAFgCAKIgOgDQACgNAKgIQAJgIANAAQAKAAAIAEQAHAEAFAHQAEAHAAAIQAAAHgEAHQgEAGgIADQAKACAGAIQAFAHAAALQAAAPgKALQgLAKgRAAQgPAAgKgJgACDg0QgMgOAAghQAAgUAFgMQAEgMAIgIQAIgGANAAQAJAAAHAEQAHAEAEAGQAFAHADAKQACALAAAQQAAAVgEAMQgEANgIAGQgJAHgMAAQgRAAgJgMgACNiJQgHAKAAAcQAAAcAGAKQAHAKAKgBQAJABAHgKQAHgKAAgcQAAgcgHgJQgHgKgJAAQgKABgGAIgAgDg1QgLgNAAgdQAAgiANgPQAJgNASAAQAOAAAJAIQAIAHACAOIgOAAQgCgIgDgDQgGgHgIAAQgHAAgFAEQgHAFgEAJQgDAKAAARQAEgIAIgDQAHgFAIAAQAOAAAKALQAKALAAAQQAAAKgFAKQgEAJgJAFQgIAFgKAAQgSAAgKgNgAAIhhQgHAHAAALQAAAHAEAHQADAGAFAEQAGADAGAAQAJABAGgIQAHgHAAgNQAAgLgHgHQgGgHgKAAQgJAAgHAHgAhbg0QgLgOAAghQAAgUAEgMQAEgMAJgIQAIgGAMAAQAJAAAHAEQAHAEAFAGQAEAHADAKQADALAAAQQAAAVgFAMQgEANgIAGQgIAHgNAAQgQAAgKgMgAhQiJQgIAKAAAcQAAAcAHAKQAHAKAJgBQAKABAHgKQAGgKAAgcQAAgcgGgJQgHgKgKAAQgKABgFAIgAi0g0QgLgOAAghQAAgUAEgMQAEgMAJgIQAIgGAMAAQAJAAAHAEQAHAEAFAGQAEAHADAKQADALAAAQQAAAVgFAMQgEANgIAGQgIAHgNAAQgQAAgKgMgAipiJQgIAKAAAcQAAAcAHAKQAHAKAJgBQAKABAHgKQAGgKAAgcQAAgcgGgJQgHgKgKAAQgKABgFAIgABTgqIAAgQIAQAAIAAAQgAkagqQAAgFACgFQADgIAGgHQAGgHAMgKQATgPAHgKQAGgJAAgIQAAgIgGgFQgGgHgJAAQgLAAgGAHQgGAGAAALIgOgCQABgQAKgIQAKgJAQAAQAQAAAKAJQAKAKAAANQAAAGgDAIQgDAGgGAHIgWAVIgQAOQgEAEgCADIA4AAIAAAOg");
	this.shape_3.setTransform(1559.045,51.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("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");
	this.shape_4.setTransform(1543.05,20);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("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");
	this.shape_5.setTransform(101.2,875.708);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// ball
	this.ball = new lib.ball();
	this.ball.name = "ball";
	this.ball.parent = this;
	this.ball.setTransform(300,700);

	this.timeline.addTween(cjs.Tween.get(this.ball).wait(1));

	// trace
	this.tracer = new lib.empty();
	this.tracer.name = "tracer";
	this.tracer.parent = this;
	this.tracer.setTransform(300,700);

	this.timeline.addTween(cjs.Tween.get(this.tracer).wait(1));

	// heightMap
	this.heightMap = new lib.heightMap();
	this.heightMap.name = "heightMap";
	this.heightMap.parent = this;
	this.heightMap.setTransform(300,100);

	this.timeline.addTween(cjs.Tween.get(this.heightMap).wait(1));

	// allPLayers
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],0,15.6,0,-15.6).s().p("EiR1ACWIAAkrMEjrAAAIAAErg");
	this.shape_6.setTransform(900.05,730);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(5,1,1).p("EAl5gxNQUZAAOaOaQObObAAUYQAAUZubOaQuaOb0ZAAMh8/AAA");
	this.shape_7.setTransform(857.5,400.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// bg
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#000033","#330033"],[0,1],1,354.2,1,-353.8).s().p("EicfA4HMAAAhwNME4/AAAMAAABwNg");
	this.shape_8.setTransform(857.3,355.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(655.8,446.9,1203.1000000000001,552.5);
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