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
	this.shape.graphics.f().s("rgba(255,0,255,0)").ss(1,1,1).p("AnznzIPnAAIAAPnIvnAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF00FF").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-51,102,102);


(lib.drawBmp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//老師寫的 drawBmp
		//使用方法詳見 drawBmp.help();
		var db=this;
		db.w=1600;
		db.h=900;
		db.nx=0;//畫筆位置
		db.ny=0;//畫筆位置
		db.cache(0,0,db.w,db.h);
		db.ctx = db.cacheCanvas.getContext("2d");
		//drawObject
		db.drawObject = function(_o){
							db.ctx.translate(_o.x,_o.y);
							db.ctx.rotate(_o.rotation*Math.PI/180);
							db.ctx.scale(_o.scaleX, _o.scaleY);
							_o.draw(db.ctx);
							db.ctx.resetTransform();
						}
		//db.fadeOut
		db.fadeOut = function(_ratio){
							db.ctx.save();
							db.ctx.globalAlpha = _ratio;
							db.ctx.globalCompositeOperation='destination-out';
							db.ctx.fillStyle= "rgba(0,0,0,1)";
							db.ctx.fillRect(0,0,db.w, db.h);    
							db.ctx.restore();
						}
		//db.setLineStyle(lineWidth , color)
		db.setLineStyle = function(lineWidth , color){
							db.ctx.lineWidth = lineWidth||3;
							db.ctx.strokeStyle = color||"#FFFF00";
						}
		//db.moveTo(x,y)
		db.moveTo = function(x,y){
							db.nx=x;
							db.ny=y;
						}
		//db.lineTo(x,y)
		db.lineTo = function(x,y){
			db.ctx.save();
							db.ctx.beginPath();
							db.ctx.moveTo(db.nx,db.ny);
							db.ctx.lineTo(x,y);
							db.ctx.stroke();
							db.nx=x;
							db.ny=y;
						}
		//db.clear
		db.clear = function(){
							db.ctx.clearRect(0,0,db.w,db.h);
						}
		
		//help() 說明
		db.help = function(){
						var str="老師寫的drawBmp，不要修改，外部可用方法：\n 設定線條樣式 setLineStyle(線寬數字,顏色'#ffff00') \n 移動畫筆 moveTo(x,y) \n 畫線 lineTo(x,y) \n 畫物 drawObject(obj) \n 淡出 fadeOut(0.1) \n 清除 clear()";
						return str;
					}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.drawBmp, new cjs.Rectangle(0,0,0,0), null);


(lib.checker2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhXBYQglgkAAg0QAAgzAlgkQAkglAzAAQA0AAAkAlQAlAkAAAzQAAA0glAkQgkAlg0AAQgzAAgkglg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.checker2, new cjs.Rectangle(-12.5,-12.5,25,25), null);


(lib.checker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(8,1,1).p("AiLgIIA4AAIAfCFIDAj5");
	this.shape.setTransform(2.25,-4.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.checker, new cjs.Rectangle(-15.7,-20.7,36,33), null);


(lib.btnToSide = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhqCLIAAibQgDAIgFAHIgZgJQAmg9AFhDIAZACQgDAggHAZIAADagAhOB6QAYgUAOgYIAVAKQgTAkgVAOgAA+CEIAAgaQAiAJAHgEQACgEAAgFIAAjwIAZAAIAAD2QgBASgMAHQgHAEgNAAQgOAAgVgFgAjvCBIABgbIAUAIQARADAFgFQACgDAAgFIAAjuIAaAAIAAD1QAAASgOAIQgGADgLAAQgQAAgYgHgAABBdIAUgOQAPATAOAaIgVAMQgQgcgMgPgAGUCHIAAgLIjNAAIAAALIgaAAIAAjIQAAgIAJAAIBWAAIAQgfIh2AAIAAgaIEPAAIAAAaIh9AAQgDAIgHAMQgBAGgDAFIB7AAQAJAAAAAIIAADIgAFzBiIAhAAIAAiOQAAgBAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAIgeAAgAEEBiIBWAAIAAgfIhWAAgADHgsIAACOIAjAAIAAiSIgfAAQgFAAABAEgAEEAqIBWAAIAAghIhWAAgAEEgQIBWAAIAAggIhWAAgAm0BrIBHgHIAAg3Ig+AAIAAgaIA+AAIAAglIhAAEIgHgZIAVgCQATgdAPghIg0AAIAAgaICjAAIAAAaIhUAAQgLAZgSAkIBQgFIgQggIAWgLQAcA1AJAcIgYAIIgJgXIguADIAAAoIA9AAIAAAaIg9AAIAAA0QAtgGAWgHIAFAaQgTAHguAEQg9AIgnAEgAA/BKIAAjEIAZAAIAADEgAg2BHQgHAAAAgHIAAi6QAAgFAHAAIBbAAQAGABAAAEIAAC6QgBAHgFAAgAglAuQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIA0AAIACgBIAAgfIg4AAgAglgIIA4AAIAAgkIg4AAgAglhnIAAAjIA4AAIAAgjQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAgBAAIg0AAQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAgAj5BHIAAi/IAaAAIAAC/g");
	this.shape.setTransform(0,0.1,1.2,1.2,0,0,0,0.2,0.1);

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


(lib.btnToEye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyBzIAZgDIAAjmQAAgIAHAAICFAAQAIAAAAAIIAABuQgBAIgHAAIhDAAQAGAXALAaQAfgWASgSIAPARQgUAVggAWQAUAcArAZIgUARIgagSQgzgrgRhOIgaAAIAABsQAZgHAWgHIAJAVQgpARg/AIgAAAgYIBeAAQABAAAAAAQABAAAAgBQABAAAAgBQAAgBAAgBIAAgWIhhAAgAAAhfIAAAUIBhAAIAAgUQgBgHgFAAIhVAAQgGACAAAFgAFpCHIAAgbQAbAJAHgDQAGgFAAgHIAAgIIhuAAIAAAsIgZAAIAAiPQABgGAFAAICUAAQAFABAAAFIAAB1QAAAOgLAIQgIAFgOAAQgNAAgSgEgAEjBIIBuAAIAAgUIhuAAgAEjANIAAASIBuAAIAAgSQAAgBAAgBQAAAAAAAAQgBgBAAAAQAAAAAAAAIhrAAIgCADgAjwCCIABgbIAUAHQARADAFgFQACgDAAgEIAAjvIAaAAIAAD1QAAASgOAIQgGAEgLAAQgQAAgYgHgAm1BrIBHgGIAAg4Ig+AAIAAgZIA+AAIAAgmIhAAFIgHgaIAVgBQATgeAPggIg0AAIAAgbICjAAIAAAbIhUAAQgLAYgSAlIBQgGIgQggIAWgLQAcA1AJAcIgYAIIgJgXIguADIAAApIA9AAIAAAZIg9AAIAAA0QAtgGAWgHIAFAaQgTAHguAFQg9AHgnAEgACqCDIAAj6QAAgHAHAAIA+AAQAIAAAAAHIAADcQgBAHgHAAIguAAIAAAXgADBBVIAaAAQAFAAAAgFIAAgmIgfAAgADBASIAfAAIAAgwIgfAAgADBhjIAAAtIAfAAIAAgtQAAgDgFAAIgWAAQgBAAgBAAQAAAAgBAAQAAABgBAAQAAABAAABgAh/CBIAAj8QAAgIAHABIBDAAQAIgBAAAIIAADlQgBAIgHAAIgyAAIAAAPgAhnBbIAeAAQAFAAAAgFIAAgsIgjAAgAhnASIAjAAIAAgyIgjAAgAhnhnIAAAvIAjAAIAAgvQAAgEgFAAIgbAAQgBAAAAAAQgBAAAAABQgBAAAAABQAAABAAABgAj6BHIAAi/IAaAAIAAC/gAD9gYIAAgXIBPAAIAAgRIhAAAIAAgVIBAAAIAAgRIhKAAIAAgVIBKAAIAAgQIAaAAIAAAQIBMAAIAAAVIhMAAIAAARIBDAAIAAAVIhDAAIAAARIBQAAIAAAXg");
	this.shape.setTransform(0,-0.0199,1.2,1.2);

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


(lib.theImg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s("#FFFFFF").ss(5,1,1).rr(-10,-40,20,80,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.theImg, new cjs.Rectangle(-12.5,-42.5,25,85), null);


(lib.btnPointer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AibDmQAagHAVgOQAtgfAJgsIhiAAIAAgyIBkAAIAAhUIhPAAIAAgwIBPAAQgQgcgVgYIAhgVIhxAAIAABuQAABbgVBUQgMBGgVAmIgzgYQA2hwAAioIAAjeQACgTAQAAIG9AAQAVACAAARIAABwQAAAVgVAAIhLAAIAeAVQgVAfgQAVIBiAAIAAAwIhQAAIAABUIBgAAIAAAyIhgAAIAACKIgzAAIAAiKIiCAAQgRBbhpAxgAAABUICAAAIAAhUIiAAAgACAgwIgTgOQAOgRAcgqIjEAAQARATAdAqIgUAMICTAAgAipjXIAAArIF0AAQAJAAAAgKIAAghQAAgHgJAAIltAAQgHAAAAAHg");
	this.shape.setTransform(0,69.95,0.8,0.8,0,0,0,-0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF6600").ss(6,1,1).p("AnzhKIHzoNIH0INIiWAAIAAKiIq7AAIAAqig");
	this.shape_1.setTransform(0,60);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AldJYIAAqiIiWAAIHzoNIH0INIiWAAIAAKig");
	this.shape_2.setTransform(0,60);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFF00").ss(3,1,1).p("AnzhKIHzoNIH0INIiWAAIAAKiIq7AAIAAqig");
	this.shape_3.setTransform(0,60);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#660000").s().p("AldJYIAAqiIiWAAIHzoNIH0INIiWAAIAAKig");
	this.shape_4.setTransform(0,60);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#00FFFF").ss(3,1,1).p("AnzhKIHzoNIH0INIiWAAIAAKiIq7AAIAAqig");
	this.shape_5.setTransform(0,60);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000FF").s().p("AldJYIAAqiIiWAAIHzoNIH0INIiWAAIAAKig");
	this.shape_6.setTransform(0,60);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(3,1,1).p("AH0BLIn0INInzoNICWAAIAAqiIK7AAIAAKig");
	this.shape_7.setTransform(0,60,1,1,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AnzBLICWAAIAAqiIK7AAIAAKiICWAAIn0INg");
	this.shape_8.setTransform(0,60,1,1,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF00FF").s().p("AolPoIAA/PIRLAAIAAfPg");
	this.shape_9.setTransform(0,60.0071,1,0.5997);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-3,110,126);


(lib.btnObj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiLDpIAAiNQgiANggAOIgYgnQA4gSAigRIAAiMIggAAQgLBBgHAXIgqgFQAYhPAAhgIAAgbIApAAIAAAbIgCAyIAdAAIAAhfIArAAIAABfIArAAIAAAqIgrAAIAAB5QAYgOANgMIAaAjQgbASgkASIAACigABGDbIgDgzQBFAXARgNQAQgIAIgdQAKghAChDQABifgBgIIgHgBIgUAAQgCBjgrBkQgqBWhRA7IghgfQCZhcAGjdIgfAAQgCAdgGAdQgWBkhiBmIglgYQBGhGAcg5QASgoAIhFIgjAAQgXBCgZAlIgpgQQA6hXAMhnIApAGQgFAegFAXIC/AAIAJACQAGAEABASQAABvgDBTQgDCOgvAgQgPAIgZAAQgcAAgpgKg");
	this.shape.setTransform(-0.5,-65.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(6,1,1).p("AH0BLIn0INInzoNICWAAIAAqiIK7AAIAAKig");
	this.shape_1.setTransform(0,-60);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AnzBLICWAAIAAqiIK7AAIAAKiICWAAIn0INg");
	this.shape_2.setTransform(0,-60);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00FFFF").ss(3,1,1).p("AH0BLIn0INInzoNICWAAIAAqiIK7AAIAAKig");
	this.shape_3.setTransform(0,-60);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AnzBLICWAAIAAqiIK7AAIAAKiICWAAIn0INg");
	this.shape_4.setTransform(0,-60);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFF00").ss(3,1,1).p("AH0BLIn0INInzoNICWAAIAAqiIK7AAIAAKig");
	this.shape_5.setTransform(0,-60);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990000").s().p("AnzBLICWAAIAAqiIK7AAIAAKiICWAAIn0INg");
	this.shape_6.setTransform(0,-60);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(3,1,1).p("AH0BLIn0INInzoNICWAAIAAqiIK7AAIAAKig");
	this.shape_7.setTransform(0,-60);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF00FF").s().p("AolPoIAA/PIRLAAIAAfPg");
	this.shape_8.setTransform(0,-60.0002,1,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_2},{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-123,110,126);


(lib.btnZoomOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjHAyIAAhjIGPAAIAABjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(3,1,1).p("AD6AAQAABohJBJQhJBJhoAAQhnAAhJhJQhJhJAAhoQAAhnBJhJQBJhJBnAAQBoAABJBJQBJBJAABng");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AiwCwQhJhIAAhoQAAhnBJhJQBJhJBnAAQBoAABIBJQBKBJAABnQAABohKBIQhIBKhoAAQhnAAhJhKg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00FFFF").ss(3,1,1).p("AD6AAQAABohJBJQhJBJhoAAQhnAAhJhJQhJhJAAhoQAAhnBJhJQBJhJBnAAQBoAABJBJQBJBJAABng");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000099").s().p("AiwCwQhJhIAAhoQAAhnBJhJQBJhJBnAAQBoAABIBJQBKBJAABnQAABohKBIQhIBKhoAAQhnAAhJhKg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFF00").ss(3,1,1).p("AD6AAQAABohJBJQhJBJhoAAQhnAAhJhJQhJhJAAhoQAAhnBJhJQBJhJBnAAQBoAABJBJQBJBJAABng");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AiwCwQhJhIAAhoQAAhnBJhJQBJhJBnAAQBoAABIBJQBKBJAABnQAABohKBIQhIBKhoAAQhnAAhJhKg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF00FF").s().p("AjTDUQhYhYAAh8QAAh8BYhXQBYhYB7AAQB8AABYBYQBYBXAAB8QAAB8hYBYQhYBYh8AAQh7AAhYhYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-30,60,60);


(lib.btnZoomIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgxDIIAAiWIiWAAIAAhjICWAAIAAiWIBjAAIAACWICWAAIAABjIiWAAIAACWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(3,1,1).p("AD6AAQAABohJBJQhJBJhoAAQhnAAhJhJQhJhJAAhoQAAhnBJhJQBJhJBnAAQBoAABJBJQBJBJAABng");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AiwCwQhJhIAAhoQAAhnBJhJQBJhJBnAAQBoAABIBJQBKBJAABnQAABohKBIQhIBKhoAAQhnAAhJhKg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00FFFF").ss(3,1,1).p("AD6AAQAABohJBJQhJBJhoAAQhnAAhJhJQhJhJAAhoQAAhnBJhJQBJhJBnAAQBoAABJBJQBJBJAABng");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000099").s().p("AiwCwQhJhIAAhoQAAhnBJhJQBJhJBnAAQBoAABIBJQBKBJAABnQAABohKBIQhIBKhoAAQhnAAhJhKg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFF00").ss(3,1,1).p("AD6AAQAABohJBJQhJBJhoAAQhnAAhJhJQhJhJAAhoQAAhnBJhJQBJhJBnAAQBoAABJBJQBJBJAABng");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AiwCwQhJhIAAhoQAAhnBJhJQBJhJBnAAQBoAABIBJQBKBJAABnQAABohKBIQhIBKhoAAQhnAAhJhKg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF00FF").s().p("AjTDUQhYhYAAh8QAAh8BYhXQBYhYB7AAQB8AABYBYQBYBXAAB8QAAB8hYBYQhYBYh8AAQh7AAhYhYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-30,60,60);


(lib.btnDir = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiNkaIEaEaIkaEbg");
	this.shape.setTransform(2.9998,0,1.0601,0.53);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(3,1,1).p("AD6AAQAABohJBJQhJBJhoAAQhnAAhJhJQhJhJAAhoQAAhnBJhJQBJhJBnAAQBoAABJBJQBJBJAABng");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AiwCwQhJhIAAhoQAAhnBJhJQBJhJBnAAQBoAABIBJQBKBJAABnQAABohKBIQhIBKhoAAQhnAAhJhKg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00FFFF").ss(3,1,1).p("AD6AAQAABohJBJQhJBJhoAAQhnAAhJhJQhJhJAAhoQAAhnBJhJQBJhJBnAAQBoAABJBJQBJBJAABng");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000099").s().p("AiwCwQhJhIAAhoQAAhnBJhJQBJhJBnAAQBoAABIBJQBKBJAABnQAABohKBIQhIBKhoAAQhnAAhJhKg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFF00").ss(3,1,1).p("AD6AAQAABohJBJQhJBJhoAAQhnAAhJhJQhJhJAAhoQAAhnBJhJQBJhJBnAAQBoAABJBJQBJBJAABng");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AiwCwQhJhIAAhoQAAhnBJhJQBJhJBnAAQBoAABIBJQBKBJAABnQAABohKBIQhIBKhoAAQhnAAhJhKg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF00FF").s().p("AjTDUQhYhYAAh8QAAh8BYhXQBYhYB7AAQB8AABYBYQBYBXAAB8QAAB8hYBYQhYBYh8AAQh7AAhYhYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-30,60,60);


(lib.slMaskY = function(mode,startPosition,loop) {
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
											//	sl.valueText.text = digitN(sl.val , sl.digitN);
										    }
							});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj6BkQASgHAGgHIAHgOIAAgtQAAgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIgZAAIAAgWIAsAAQAHABAAAEIAAA+QABAGAIAHQAGAGAMAEQAbAGCEgFIgFAZIhpAAQhDgBgSgWQgCAIgNAHQgKAIgKADgAALB0IAAgXQATAGAEgDQACgEAAgEIAAgwIgPAHIgNgTIAcgNIAAg/IgaAAIAAgWIAaAAIAAgxIAWAAIAAAxIAYAAIAAAWIgYAAIAAAzIAQgMIAPAQQgLAIgOAJIgGADIAABEQAAAPgMAHQgEACgIAAQgJAAgOgDgADdB3IAAgKIhsAAIAAAKIgVAAIAAhiQABgHAGAAICIAAQAHAAAAAHIAABigACxBYIAsAAIAAgRIgsAAgABxBYIArAAIAAgRIgrAAgACxA0IAsAAIAAgPQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgpAAgABxAmIAAAOIArAAIAAgRIgnAAQgBAAgBAAQgBAAAAABQgBAAAAAAQAAABAAABgAihBKQAPgYACgdIAVAEQgGAmgNAWQgMgIgHgDgAh0BPQAEgfgCgXIAWABIgDA4gAgxAaIAVgHQAKAYAIAhIgWAFQgHgjgKgUgAhJBRQgCgagGgdIAVgCQAHAqABAPgAjBA9QAOgeABgtIAAhSQAAgHAGAAIBBAAIAAgRIAWAAIAAARIBIAAIAAAWIghAAIAAAYIAgAAIAAAUIggAAIAAAhQAAAJgLAAIhAAAQgJAAgBgJIAAghIgaAAIAAAdQAAAtgPAfgAhtgSQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAIAkAAQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBIAAgTIgpAAgAhtg5IApAAIAAgYIgpAAgAidhOIAAAVIAaAAIAAgYIgXAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABAAABgAB1ADQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAgBIAAgrQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIBlAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABIAAArQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAgACHgbIAAAOIBAAAIABgBIAAgNIgBgBIhAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAABABAAgAj6gvIAMgSQASAKAXATIgOATQgYgVgPgJgADegeIAGgYQAAgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIhzAAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAABAAAAIAAAdIgUAAIAAgvQAAgEAEAAIAaAAIgSgZIASgNQALANALAUIgGAFIAXAAIAAgrIAXAAIAAArIARAAQAPgWAHgQIASAKQgFANgJAPIAKAAIATAJQgBASgKAagAj6hlIANgSQATALAWAUIgOASQgXgVgRgKg");
	this.shape.setTransform(50,-27.975);

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
	this.btnS.setTransform(50.05,0,1.3,0.3,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// line
	this.bgLine = new lib.sliderBGLine();
	this.bgLine.name = "bgLine";
	this.bgLine.parent = this;
	this.bgLine.setTransform(0,0,0.6667,1);

	this.timeline.addTween(cjs.Tween.get(this.bgLine).wait(1));

}).prototype = getMCSymbolPrototype(lib.slMaskY, new cjs.Rectangle(-16.1,-40,132,56), null);


(lib.slIntensity = function(mode,startPosition,loop) {
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
											//	sl.valueText.text = digitN(sl.val , sl.digitN);
										    }
							});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACOBgQguATgvAGIgIgVQAtgFAYgJIAHgBQgZgNgWgOIAIgVQAhAYAfANQAhgSARgTQACgCgEAAIh+AAIAAgVICSAAIAQANQgTAggoAZQAmAKArAEIgLAXQg2gKgpgPgAj2BhQAmgDASgKQAOgJABgUIAAgVIAXAAIAAAVQgCAOgEAKQgBAFgDADQgTAbg7AGgAheB2QgIgBgIgHQgGgHAAgHIAAg/IAWAAIAAAyQAAAGAEADQAFAEAEAAIAmAAQACAAADgDQAEgBABgYIAWAFQgEAggDAEQgKAJgGAAgAAGBpQAOgVADgWQAFgSAAgbIAAhyQAAgGAFAAIBZAAIAAgRIAWAAIAAARIBgAAIAAAVIglAAIAAAXIAlAAIAAAVIglAAIAAAeQgBAKgKAAIhpAAQgKAAAAgKIAAgeIgcAAIAAA9QgBA2gVAlgABkgWQAAABAAABQAAAAAAABQABAAAAAAQABAAAAAAIBKAAQAFAAAAgDIAAgQIhRAAgABkg7IBRAAIAAgXIhRAAgAAxhPIAAAUIAcAAIAAgXIgZAAQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAABgAgqA2QAGgWABgGQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBAAgBAAIi4AAIgCACIAAAhIgXAAIAAg0QAAgEAFAAIDUAAIAUAKQgCAVgLAcgAjWgJQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBIAAg4QAAgBABAAQAAgBAAAAQABAAAAgBQABAAABAAICnAAQABAAABAAQAAABABAAQAAAAAAABQABAAAAABIAAA4QAAABgBABQAAAAAAABQgBAAAAAAQgBAAgBAAgAjEgyIAAAVIABABICBAAIABgBIAAgVIgBgBIiBAAIgBABgAj1hTIAAgVIBoAAIAAgQIAWAAIAAAQIBmAAIAAAVg");
	this.shape.setTransform(50,-28.625);

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
	this.btnS.setTransform(50.05,0,1.3,0.3,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// line
	this.bgLine = new lib.sliderBGLine();
	this.bgLine.name = "bgLine";
	this.bgLine.parent = this;
	this.bgLine.setTransform(0,0,0.6667,1);

	this.timeline.addTween(cjs.Tween.get(this.bgLine).wait(1));

}).prototype = getMCSymbolPrototype(lib.slIntensity, new cjs.Rectangle(-16.1,-40.7,132,56.7), null);


(lib.rbView = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btnS
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(29.7,0,0.92,0.3399,0,0,0,0.4,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsAsQgrAsg/AAQg9AAgsgsQgsgsAAg+QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBqQgsgsAAg+QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9QAAA+gsAsQgrAsg/AAQg9AAgsgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjVB5IAAhwIgXAZIgQgSQAxgkARgrQABgEgFAAIg5AAIAAgVIAgAAIAAggIAXAAIAAAgIAVAAIALAJQgKAkgWAcIAACIgACNBzIAAgYQAdALAHgGQACgEAAgEIAAhaIgoAAIAAgVIAzAAQgWgXgTgPIAOgPIAWATQAZgSAMgQQABAAAAgBQAAAAAAAAQgBAAAAAAQgBAAgBAAIhQAAIAAgVIBiAAIAPALQgRAggkAbIALAMIgKAIIAkAAIAOAJQgFAmgNAdIgVgFQAJgSADgKQAHgTgDgCIgCgBIgYAAIAABhQgBAPgLAHQgGADgKAAQgNAAgUgFgAivBlQAPgFAKgHQAggSgBgcIAAgHIgXAAQgBAAgBAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIAAiQQAAAAAAgBQAAgBABAAQAAAAABgBQABAAABAAIByAAQABAAAAAAQABABAAAAQABAAAAABQAAABAAAAIAACQQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgcAAIAAAvQAAAFAEAEQAEAEAEAAIAJAAIAGgDQABgCABgVIAVAEQgCAfgEADQgIAIgGAAIgeAAQgHgBgHgGQgHgHABgHIAAg7IgVAAIAAAHQAAAKgEAKQgOAmgwATgAh8AOIABABIBMAAIABgBIAAgVIhOAAgAh8gbIBOAAIAAgYIhOAAgAh8hHIBOAAIAAgWIhOAAgAAKBiIA0gIIAAgeIgtAAIAAgUIAtAAIAAgcIgqAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAh2QAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIBrAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABIAAB2QAAABgBABQAAAAAAABQgBAAAAAAQgBAAAAAAIgsAAIAAAcIAvAAIAAAUIgvAAIAAAbIAvgHIADAWIh3ARgABTgHIAZAAIABgBIAAgfIgaAAgAAlgHIAZAAIAAggIgZAAgABTg7IAaAAIAAggIgaAAgAAlg7IAZAAIAAggIgZAAgAi7gHIAQgLQAPASAGANIgRAJQgKgSgKgLg");
	this.shape_2.setTransform(49.95,0.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbView, new cjs.Rectangle(-17.6,-18,94,36), null);


(lib.rbLight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btnS
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(29.55,0,0.9504,0.3399,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsAsQgrAsg/AAQg9AAgsgsQgsgsAAg+QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBqQgsgsAAg+QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9QAAA+gsAsQgrAsg/AAQg9AAgsgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AB+B0IAAgWQAcAIAFgEQACgDAAgEIAAhiIg1AAQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBIAAhXQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAABAAIArAAQAFgNACgHIAVAHQgBAHgEAGIA8AAQABAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAABXQAAABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAIgxAAQAGAXAHAQQAUgQANgNIAOAQQgPAPgWAQQAOAZAcAWIgTAMQgegcgTglIAAA0QgBAPgLAGQgFAEgKAAQgLAAgSgFgAB9gaIBbAAIABgBIAAgQIhcAAgAB9hQIAAASIBcAAIAAgSIgBgBIhbAAQAAAAAAAAQgBAAAAABQAAAAABAAQAAAAAAAAgAAuB2IAAhuIghAFIgGgTIAWgDIARgXQgSgRgUgKIAKgSIAJAFQAMgWALgZIARAJQgIATgQAfQAHAFAHAHQALgXAGgTIATAFQgHAeggAqIAWgEIgEgNIASgFQAKAbACATIgSADQgCgFAAgGIgOACIAABxgAj5BjQATgCASgJQAMgIAJgKQAOgWABgtIAAgDIhEAAIAAgXIBnAAIAAhgIAXAAIAABgIBnAAIAAAXIhIAAIAABQQAAAGAEADQAFAEAEAAIAeAAQAEAAADgDQADgCABgrIAWADQgDA0gEAGQgJAJgIAAIg0AAQgIgBgHgHQgHgHABgHIAAhdIgtAAIAAADQgCAvgQAcQgJAPgNAJQgQAKgZAGgAAKBmQAHgfABguIATADQgBAngHAngABcBaQAegaAKgcQABgFgEAAIgVAAIAAgUIAlAAIALAGQgGAWgIAQQgLAWgXAbgABKAdIATgDIAIA0IgTABQgCgZgGgZgAjjhbIASgMQATAVATAlIgUALQgUgmgQgTgAhYguQAagjAJgYIAUALQgKAcgZAfg");
	this.shape_2.setTransform(50,0.3132);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbLight, new cjs.Rectangle(-19.1,-18,97,36), null);


(lib.rbJustRB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btnS
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(0,0,0.3501,0.3499,0,0,0,0.3,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsAsQgrAsg/AAQg9AAgsgsQgsgsAAg+QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBqQgsgsAAg+QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9QAAA+gsAsQgrAsg/AAQg9AAgsgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbJustRB, new cjs.Rectangle(-18.6,-18.5,37,37), null);


(lib.rbGod = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btnS
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(30.55,0,1.0154,0.3399,0,0,0,0.3,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsAsQgrAsg/AAQg9AAgsgsQgsgsAAg+QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBqQgsgsAAg+QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9QAAA+gsAsQgrAsg/AAQg9AAgsgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AB2B5IAAhgIgzAAIgBABIAABMIgXAAIAAhbQgBgIAJAAIBDAAIAAgaIhRAAQgBgBAAAAQAAAAgBABQAAAAAAAAQAAABAAABIAAAiIgXAAIAAg3QABgEAEAAIA9AAQgDgQgJgTIguAAIAAgXIBiAAIAAgQIAWAAIAAAQIBhAAIAAAXIguAAIgHASIgGARIA0AAIAUAKQgCAVgJAbIgVgHIAGgZQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIhSAAIAAAaIBGAAQAIgBAAAJIAABFQgBAQgLAGQgNAIgigGIgCgaQAaAIAHgEQAFgDAAgHIAAguIgCgBIg1AAIAABggABlguIA2AAIANgjIhPAAQAIATAEAQgAj5BvIAAgYIBRAAIAAjNIAZAAIAAA+IB1AAIAAAYIh1AAIAAB3ICDAAIAAAYg");
	this.shape_2.setTransform(50.05,0.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbGod, new cjs.Rectangle(-21.5,-18,103.5,36), null);


(lib.rbEye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btnS
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(17.6,0,0.6929,0.3399,0,0,0,0.3,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsAsQgrAsg/AAQg9AAgsgsQgsgsAAg+QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBqQgsgsAAg+QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9QAAA+gsAsQgrAsg/AAQg9AAgsgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxBhIAWgDIAAjIQAAgHAGAAIBzAAQAHAAAAAHIAABgQgBAHgGAAIg6AAQAFATAKAXQAbgUAPgPIANAPQgRATgbASQARAYAlAWIgSAPIgWgQQgsglgPhDIgVAAIAABdQAUgGATgHIAIAUQgjAOg3AHgAgEgYIBQAAQABAAAAAAQABgBAAAAQABAAAAgBQAAgBAAAAIAAgUIhTAAgAgEhWIAAASIBTAAIAAgSQgBgFgEAAIhKAAQgEABAAAEgAhzBsIAAjbQAAgGAGAAIA6AAQAHAAAAAGIAADHQgBAIgGAAIgsAAIAAAMgAhfBLIAbAAQAEAAAAgEIAAgmIgfAAgAhfAMIAfAAIAAgrIgfAAgAhfhdIAAApIAfAAIAAgpQAAgDgEAAIgYAAQAAAAgBAAQgBAAAAAAQAAABgBAAQAAABAAABg");
	this.shape_2.setTransform(37.425,0.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbEye, new cjs.Rectangle(-18.2,-18,71.3,36), null);


(lib.rbEdge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btnS
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(30.55,0,0.9503,0.3399,0,0,0,0.3,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsAsQgrAsg/AAQg9AAgsgsQgsgsAAg+QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBqQgsgsAAg+QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9QAAA+gsAsQgrAsg/AAQg9AAgsgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjLBhQgFAIgMAGQgMAIgLABIgIgVQATgFAHgGQAFgGADgJIAAg0QAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgaAAIAAgWIAtAAQAGACABADIAABGQAFASAbAHIgIgSQAigLAFgTIgzAAIAAgSIBLAAIAAgRIAUAAIAAARIBNAAIAAASIhmAAIgCAGIBUAAQAFABABAEQgBAQgDAGQgGAMgJADIAhgBIgFAYIhyABQg4gCgSgWgAh6BKQgMAOgaAJQAPADAbAAIA6gCIgbgCIABgRIAeACQAHgCABgEQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIhHAAgACNBzIAAgWQAXAGAGgDQAHgDADgKQAGgMAAgOQglAgguAQIgNgRQA3gSAmgmIgBgDIgCgCIgCgFQghAdgeAKIgLgSQAmgNAZgZIgIgIQgVAPgVAKIgNgRQAggMATgQIg7AAIAAgVIBaAAIADgOIhLAAQgIABABgJIAPgsQABgEAFAAIBYAAQAIgBgBAJIgRA+IAqAAIAAAVIhCAAIgIAHQAYAUAFAeQAOAaAiAgIgTALIgcgfQABAPgHAKQgFAQgLAEQgIADgGAAIgbgFgACEhOIA+AAIAGgRIg+AAgAAuB2IAAhtIggAEIgFgTIAWgDIASgYQgTgRgTgKIAJgSIAKAGIAVgwIASAJQgIATgQAfIAOALQAKgVAHgTIATAFQgIAfgfAqIASgDIgFgLIATgGQAHASAGAbIgUAEIgDgMIgKABIAABwgAANBlQAHgpAAghIATACQgDAtgEAegABQBNQgCghgCgPIASgBQAEAgAAARgAiiALQAYgEADgKIgeAAIgCADIAAARIgTAAIAAghQAAgEADAAIBJAAIAAgIIg4AAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIAAhMQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAIA5AAIADgLIASAFIgBAGIBBAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAABIAABMIgCACIhBAAIAAAIIBEAAIAQAIQgCAPgFATIgTgFIAFgRQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBAAIgNAAIALAGQgDARgEABQgFADgEAAIgdAAQgIgBAAgHIAAgTIgfAAQgDAEAAADQgIARgdAHgAhBAEQAAAFAFAAIAMAAQAAAAAAgBQAAAAAAAAQAAgBAAgBQAAAAAAgBQABgCADgGIgVAAgAiWgsIABABIBsAAIAAgHIhtAAgAiWg/IBtAAIAAgJIhtAAgAiWhdIAAAIIBtAAIAAgJIhsAAIgBABgADJAIIAZgaIAPAOQgKANgQANgAj4guIALgTQASAIAWAQIgMATQgYgRgPgHgAjzhkIANgTQAQAKAWAQIgOASQgVgSgQgHg");
	this.shape_2.setTransform(49.85,0.325);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbEdge, new cjs.Rectangle(-18.2,-18,97,36), null);


(lib.rbDiagram = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btnS
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(29.55,0,0.9503,0.3399,0,0,0,0.3,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsAsQgrAsg/AAQg9AAgsgsQgsgsAAg+QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBqQgsgsAAg+QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9QAAA+gsAsQgrAsg/AAQg9AAgsgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ADiB5IAAgKIi1AAIAAAKIgVAAIAAjmQABgHAGAAIDRAAQAHABAAAGIAADmgAAtBbIC1AAIAAhsIi1AAgACSgkIBQAAIAAg5QAAgBAAgBQgBAAAAgBQAAAAgBAAQgBAAAAAAIivAAQgBAAgBAAQAAAAgBAAQAAABAAAAQAAABAAABIAAA5IBQAAIAAgKIg+AAQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAgBIAAgkIACgCICPAAQABAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAAAkQAAABAAABQAAAAgBAAQAAABAAAAQgBAAgBAAIg8AAgABPg+IBvAAIABgBIAAgIIhwAAgAjVB4IAAiDIgKAOIgXgJQAog1AHg9IAXAEIgPA6IAACygAhuB3IAAjEIgXAAQgKAugPAcIgYgHQAeg1ABg4IAWABIgBATIB+AAIAAAWIhTAAIAAAzIBMAAIAAAWIhMAAIAAAwIBPAAIAAAWIhPAAIAAA1gAA7BSQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBIAAhZIACgCICYAAQABAAABAAQAAABABAAQAAAAAAAAQAAABAAAAIAABZQAAABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAgABNBAIB0AAIABgBIAAg6Ih1AAgABdA4QgBgBgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgnQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAABAAIBZAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAAnIgCACgABtAcIAAAMIABABIA3AAIAAgOIg3AAIgBABg");
	this.shape_2.setTransform(49.375,0.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbDiagram, new cjs.Rectangle(-19.2,-18,97,36), null);


(lib.mcObj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.rbC = new lib.rbJustRB();
	this.rbC.name = "rbC";
	this.rbC.parent = this;

	this.rbU = new lib.rbJustRB();
	this.rbU.name = "rbU";
	this.rbU.parent = this;
	this.rbU.setTransform(0,-50);

	this.rbD = new lib.rbJustRB();
	this.rbD.name = "rbD";
	this.rbD.parent = this;
	this.rbD.setTransform(0,50);

	this.rbL = new lib.rbJustRB();
	this.rbL.name = "rbL";
	this.rbL.parent = this;
	this.rbL.setTransform(-50,0);

	this.rbR = new lib.rbJustRB();
	this.rbR.name = "rbR";
	this.rbR.parent = this;
	this.rbR.setTransform(50,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rbR},{t:this.rbL},{t:this.rbD},{t:this.rbU},{t:this.rbC}]}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAAj5QBoAABJBJQBJBJAABnIj6AAIAAD6IAAD6AAAnzIAAD6IAAD5Ij5AAQAAhnBJhJQBJhJBnAAAD6AAQAABohJBJQhJBJhoAAQhnAAhJhJQhJhJAAhoIj6AAAH0AAIj6AA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcObj, new cjs.Rectangle(-67.8,-67.6,135.39999999999998,135.3), null);


(lib.chZoomIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btnS
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(45.7,0,1.3596,0.3399,0,0,0,0.4,0);
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AkfB0QAagLAIgMQAHgIABgLIAAgxQAAgBAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAIgiAAIAAgZIA4AAQAHACAAADIAABDQABAIAHAKQAJAMAOAFQAPAGAagBQBOgBA6gDIgHAdIiQAAQgygEgRghQgFALgMANQgOAOgOAFgADxCKIAAgKIiMAAIAAAKIgZAAIAAh7QgQAOggAVIgRgTQAwgcAgghIhOAAIAAgXIBhAAIAJgNIhYAAIAAgXIBmAAIAHgNQg+ACgoAAIgCgYQA0AABHgEQBHgDAjgIIAEAZQgcAGg/AEIgJAAIgIAPIBvAAIAAAXIh8AAIgJANICVAAIAAAXIinAAIgNAOICZAAQAGABAAAEIAACVgABlBoICMAAIAAgQIiMAAgABlBAICMAAIAAgQIiMAAgABlAKIAAAPICMAAIAAgPQAAAAAAgBQgBgBAAAAQgBgBAAAAQgBAAgBAAIiEAAQgFAAABADgAhdBdIAAh+Ig8AAIAAAWQgBAbgFAWQgHAbgPAaIgYgQQARgbAEgVQAFgRAAgVIAAhlQgBgJAHAAQBGgDA5gLIAJAYQgwALhBADQgEACABAEIAAAgICFAAIAAAaIgwAAIAAB+gAkbgzIANgXQAXAJAdAWIgMAVQgggUgVgJgAkRhxIAMgXQAaALAdAUIgNAXQghgWgVgJg");
	this.shape_2.setTransform(52.575,0.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chZoomIn, new cjs.Rectangle(-23.8,-20.7,138,38.7), null);


(lib.chScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btnS
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(45.7,0,1.3596,0.3399,0,0,0,0.4,0);
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
	this.shape_2.graphics.f("#FFFFFF").s().p("ACKCMIAAg8Ig+AAQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAAAIAAAsIgZAAIAAg6QgNAGgOAEIgKgWQAjgJAcgSIg9AAIAAgWIBaAAIAOgMIhJAAQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAgBAAgBIAAhNQAAgBAAgBQABAAAAgBQABAAAAAAQABgBABAAIAnAAIAAgKIhHAAIAAgXIBHAAIAAgPIAZAAIAAAPIBSAAIAAgPIAZAAIAAAPIBHAAIAAAXIhHAAIAAAKIApAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAABIAABNQAAABAAABQAAABgBAAQAAABgBAAQAAAAgBAAIhtAAIgMAMICYAAIAAAWIg/AAIACACQAZARAnAIIgNAWIgZgJIAAAiQAAAOgMAIQgRALgogHIgCgbQAhAHAIgFQAGgFAAgGIAAgLQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIhAAAIAAA8gADnA5QgXgOgQgPIhPAAQgSAPgZAOIBEAAIAAgWIAZAAIAAAWIBEAAIAAAAgABCgbIABABICnAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIAAgMIiqAAgABChFIAAALICqAAIAAgLQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAgBAAIinAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAgABthbIBSAAIAAgKIhSAAgAjmB3QANgEALgHQAWgPAFgXIgyAAIAAgYIAzAAIAAgqIgoAAIAAgYIAoAAQgIgOgLgMIAQgLIg4AAIAAA4QAAAsgKAqQgGAkgLASIgagLQAbg4AAhUIAAhvQACgJAIAAIDeAAQALABAAAIIAAA4QAAAKgLAAIglAAIAPALIgTAaIAyAAIAAAYIgoAAIAAAqIAwAAIAAAYIgwAAIAABFIgaAAIAAhFIhCAAQgIAug1AYgAiYAuIBAAAIAAgqIhAAAgAhYgUIgJgHQAHgIAOgWIhjAAQAJAKAPAVIgLAGIBKAAgAjthnIAAAVIC7AAQAEAAAAgFIAAgQQAAgDgEAAIi3AAQgBAAgBAAQAAAAgBAAQAAABgBAAQAAABAAABg");
	this.shape_2.setTransform(52.025,0.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chScreen, new cjs.Rectangle(-23.8,-20.7,138,38.7), null);


(lib.chRay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btnS
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(45.7,0,1.3596,0.3399,0,0,0,0.4,0);
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
	this.shape_2.graphics.f("#FFFFFF").s().p("ACSCGIAAgaQAgAKAFgFQACgDAAgFIAAhxIg9AAQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBIAAhlQAAgBAAgBQAAAAAAgBQABAAAAAAQABgBABAAIAyAAQAGgPACgIIAZAIQgCAIgEAHIBGAAQAAAAABABQABAAAAAAQABABAAAAQAAABAAABIAABlQAAABAAABQAAAAgBABQAAAAgBAAQgBAAAAAAIg6AAQAHAaAIATQAYgTAOgPIARATQgRARgaATQAQAcAhAaIgXAOQgighgWgqIAAA8QgCARgLAHQgGAFgMAAQgNAAgUgGgACQgeIBpAAQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIAAgTIhrAAgACQhcIAAAUIBrAAIAAgUQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAIhpAAQAAAAAAAAQgBAAAAAAQAAAAABABQAAAAAAAAgAA2CIIAAh/IgnAGQgCgLgFgLIAagDQAKgMAKgPQgXgUgVgMIAKgUIALAGQAOgaANgdIATALQgJAWgTAjQAIAGAJAIQANgaAGgWIAXAGQgKAigkAxIAagFIgFgPIAVgGQALAgAEAVIgWAEQgCgGAAgHIgRACIAACDgAkfByQAWgCAVgLQANgJAKgMQARgYABg1IAAgEIhPAAIAAgaIB3AAIAAhvIAbAAIAABvIB3AAIAAAaIhTAAIAABdQAAAHAEADQAGAFAEAAIAkAAQADAAAEgDQAEgDABgxIAZAEQgEA7gFAHQgKALgIAAIg8AAQgKgBgJgIQgGgJAAgIIAAhsIg0AAIAAAEQgDA3gRAgQgLARgPALQgSALgeAHgAAMB2QAIglABg0IAWADQgCAtgHAtgABqBoQAjgfAMgfQABgGgFAAIgZAAIAAgYIArAAIAOAHQgJAagIATQgNAYgZAggABVAhIAXgDIAJA8IgWABQgDgcgHgegAkHhpIAWgOQAVAYAWArIgXANQgXgsgTgWgAhlg2QAdgnALgdIAXANQgNAggbAkg");
	this.shape_2.setTransform(52.25,-0.9994);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chRay, new cjs.Rectangle(-23.8,-20.7,138,38.7), null);


(lib.chDash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btnS
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(30.55,0,1.0154,0.3399,0,0,0,0.3,0);
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AB/B0IAAgWQAcAIAFgEQACgDAAgEIAAhiIg1AAQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBIAAhXQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAABAAIArAAQAFgNACgHIAVAHQgBAHgEAGIA8AAQABAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAABXQAAABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAIgxAAQAGAXAHAQQAUgQANgNIAOAQQgPAPgWAQQAOAZAcAWIgTAMQgegcgTglIAAA0QgBAPgLAGQgFAEgKAAQgLAAgSgFgAB+gaIBbAAIABgBIAAgQIhcAAgAB+hQIAAASIBcAAIAAgSIgBgBIhbAAQAAAAAAAAQgBAAAAABQAAAAABAAQAAAAAAAAgAAvB2IAAhuIghAFIgGgTIAWgDIARgXQgSgRgUgKIAKgSIAJAFQAMgWALgZIARAJQgIATgQAfQAHAFAHAHQALgXAGgTIATAFQgHAeggAqIAWgEIgEgNIASgFQAKAbACATIgSADQgCgFAAgGIgOACIAABxgAj6BsQAUgmAAgsIAAhjQABgFAFAAIBDAAIAAgqIAXAAIAAAKIBiAAIAAAUIhiAAIAAAMIBtAAIAQAKQgCAYgLAWIgUgHQAJgQAAgJQABgBAAgBQAAgBgBAAQAAAAAAAAQgBAAgBAAIhlAAIAAANIBEAAIAAATIhEAAIAAAEQAAAFADADQADADAEAAIA6AAQADABADgDIAFgRIATAHQgFAWgCACQgIAHgHAAIhNAAQgHAAgHgHQgFgGgBgGIAAgPIgrAAIAAgTIArAAIAAgNIgvAAQgEAAAAADIAABIQAAA9gWAngAjPBzIAAgUIA+AAIAAgVIgnAAQgKgBAAgJIAAgtIAWAAIAAAdQAAAFAFAAIAWAAIAAgiIAVAAIAABMIAVAAIAAhLIAWAAIAAAhIAbAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAgBIAAgeIAWAAIAAAwQgCAGgEAAIguAAIAAAVIBHAAIAAAUgAALBmQAHgfABguIATADQgBAngHAngABdBaQAegaAKgcQABgFgEAAIgVAAIAAgUIAlAAIALAGQgGAWgIAQQgLAWgXAbgABLAdIATgDIAIA0IgTABQgCgZgGgZg");
	this.shape_2.setTransform(49.9,0.3132);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chDash, new cjs.Rectangle(-21.5,-20.7,103.5,38.7), null);


(lib.chBend = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btnS
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(31.4,0,0.9952,0.3399,0,0,0,0.2,0);
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AA1BzIgBgUQBJAIA9gBQAcgBAGgGQABgCAAgJIizAAIgBAHQgJgDgJgBIAHgrQABgGAGAAICvAAIAAgIIgCgDIi0AAIAAgSIDDAAQAFAAAAAEIAAAxIgSAAIAAgGIiiAAQgDAAgBAEIgBAGIDAAAQAIAAAAAGQgEAbgGAJQgEACgBADQgOAJgxAAQgrAAhHgHgAjwBxIABgYQARAIAHAAQADABADgDQACgEAAgEIAAg5IghAMIgMgUIAtgQIAAg6IgmAAIAAgWIAmAAIAAguIAXAAIAAAuIAgAAIAAAWIggAAIAAAxQAPgIAKgHIAMASQgPAIgUAJIgCACIAABKQgBAQgLAHQgEACgIAAQgMAAgUgFgAhGB1IAAiLIgsAAIAAAOQgBAhgIAZQgLAfgWAgIgTgPQAZgiAGgZQAIgXgBgYIAAhbQgBgJAHgBQA5gBAvgJIAIAYQgoAIg0ABQgFABACADIAAAlIBmAAIAAAXIgjAAIAACLgAAnAFIAAgvIgbAEQgBgIgEgJIAPgCQAGgEAGgGQgNgLgNgHIAJgQIAIAGQAKgNAHgNIAPAKQgHAKgMAQIAHAGQALgMAIgOIAOAJQgEALgZAYIATgCIgDgJIAOgFIAMAjIgPADQgCgEAAgEIgRADIAAAxgAAIgCQAJgTABgMIAQAEIgJAggABcACQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAgkIACgCIBFAAIACACIAAAkQAAAAgBAAQAAABAAAAQAAABAAAAQgBAAAAAAgABrgMIABABIAmAAIAAgMIgnAAgADIABIAAgrIgcACIgEgQIAWgCIAJgIQgNgLgOgHIAJgPIAHAFQALgNAGgNIAPAKQgHAMgMANIAJAHQAKgNAGgNIAQAIQgHAPgVAVIAPgCIgCgHIAOgFQAIATAEAMIgQADIgCgFIgSACIAAAsgADegfIAQgFQAHARACASIgQABQgDgQgGgPgACngFQAKgTABgNIAQAHQgBANgJARgAA9gfIARgDQAGAPABAQIgRACQgDgVgEgJgABggtIAAgNIBCAAIAAANgABfhAIAAgNIBDAAIAAANgABVhSIAAgRIBXAAIAAAPIAAACgACshUgABghoIAAgNIBCAAIAAANg");
	this.shape_2.setTransform(49.95,-0.611);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chBend, new cjs.Rectangle(-19.5,-20.7,101.5,38.7), null);


(lib.controlView = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.mcObj = new lib.mcObj();
	this.mcObj.name = "mcObj";
	this.mcObj.parent = this;
	this.mcObj.setTransform(99.95,297,1,1,0,0,0,0.1,0.2);

	this.rbEdge = new lib.rbEdge();
	this.rbEdge.name = "rbEdge";
	this.rbEdge.parent = this;
	this.rbEdge.setTransform(150,199.35,1,1,0,0,0,30.2,0);

	this.rbDiagram = new lib.rbDiagram();
	this.rbDiagram.name = "rbDiagram";
	this.rbDiagram.parent = this;
	this.rbDiagram.setTransform(53.05,199.35,1,1,0,0,0,30.2,0);

	this.chBend = new lib.chBend();
	this.chBend.name = "chBend";
	this.chBend.parent = this;
	this.chBend.setTransform(187.05,154,1,1,0,0,0,67.2,-1.4);

	this.chDash = new lib.chDash();
	this.chDash.name = "chDash";
	this.chDash.parent = this;
	this.chDash.setTransform(22.85,155.4);

	this.rbView = new lib.rbView();
	this.rbView.name = "rbView";
	this.rbView.parent = this;
	this.rbView.setTransform(187.05,108,1,1,0,0,0,67.2,-1.4);

	this.rbLight = new lib.rbLight();
	this.rbLight.name = "rbLight";
	this.rbLight.parent = this;
	this.rbLight.setTransform(90.05,108,1,1,0,0,0,67.2,-1.4);

	this.rbEye = new lib.rbEye();
	this.rbEye.name = "rbEye";
	this.rbEye.parent = this;
	this.rbEye.setTransform(187.05,59.65,1,1,0,0,0,67.2,-1.4);

	this.rbGod = new lib.rbGod();
	this.rbGod.name = "rbGod";
	this.rbGod.parent = this;
	this.rbGod.setTransform(90.05,59.65,1,1,0,0,0,67.2,-1.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqBrIAAgVQANAFAGAAIAMACQAEAAADgDQACgDAAgDIAAgeIhhAAIAAgUIDKAAIAAAUIhWAAIAAAiQgBAOgKAGQgGAEgLAAQgMAAgTgFgAAlBNIAJgSQAZALAiAWIgKARQgjgYgXgIgAhqBZQAdgKAWgUIAOAPQgdAagZAGgAhwAKIAogMIgRgRIgNAFIgJgRQAYgJALgHQAJgGAFgMQACgDAEAAIA5AAQADAAACADQAOAbASAOIAXgZIgBAAIgjAAIAAgRIA2AAIAGALQAFgSAAgEQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIisAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAIAAAdIgUAAIAAgtQABgEADAAIBdAAIAAgNIAVAAIAAANIBUAAIARAIQgBATgJAZIgRgFQgMARgVAUIAIAEQATAKAiAGIgKATQgfgKgVgMIAAAPIhfAAIAAgPQgaAPgfAJgAAtAAQgagSgRgZQgMAXgUAPIgJAFIBUAAIAAAAgAhFgfQgDABgBADIARASQAHgGAIgEIABAAIgWgRIgHAFgAgxgxIgBAAIAXARIAEgEIALgPIgkAAIAAAAIgBACg");
	this.shape.setTransform(45,21.1564);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AANBnQAWggABglIgMAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAgBIAAiFQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAQAAIA7AAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAABIAACFQAAABAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgTAAIAAAzQAAAHAGAAIAFAAQACAAABgGQABgEAAgPIARAGQgCAdgFADQgFAEgGAAIgWAAQgKAAAAgIIAAhDIgIAAQgDAmgUAngAAoAOIAAABIAqAAIABgBIAAgTIgrAAgAAogXIArAAIAAgXIgrAAgAAohBIArAAIAAgVIgBAAIgqAAgAhWBrQgHgBAAgFIAAhHQgDACgBADQgIgIgGgDQAOgRAFgYIASAEQgBAHgCAFIAfAAQAHgKABgGIARAGQgDAFgBAFIAmAAIgCAQIgnAAIAAAOIAkAAIAAARIgkAAIAAANIAkAAIAAARIgkAAIAAAPIAoAAIAAAQgAhKBXQAAABAAABQAAAAAAABQABAAAAAAQAAABAAAAIAaAAIAAgPIgbAAgAhKA7IAbAAIAAgNIgbAAgAhKARIAAAMIAbAAIAAgOIgaAAIgBACgAgpgUIgDgCIAAgrQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAIAOAAIAhAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIAAArQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAgbgzIAAAOIAAABIATAAIABgBIAAgOIgBgBIgTAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAgAhmgUIgCgCIAAgrQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABAAIAOAAIAiAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIAAArQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAhYgzIAAAOIAAABIATAAIABgBIAAgOIgBgBIgTAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAgAgghJIAAgJIgeAAIAAAIIgSAAIAAgIIgbAAIAAgRIAbAAIAAgLIASAAIAAALIAeAAIAAgLIATAAIAAALIAZAAIAAARIgZAAIAAAJg");
	this.shape_1.setTransform(20.95,21.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.rbGod},{t:this.rbEye},{t:this.rbLight},{t:this.rbView},{t:this.chDash},{t:this.chBend},{t:this.rbDiagram},{t:this.rbEdge},{t:this.mcObj}]}).wait(1));

	// bg
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(2,1,1).p("Avn9rIfPAAMAAAA7XI/PAAg");
	this.shape_2.setTransform(100,190);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AvndsMAAAg7XIfPAAMAAAA7Xg");
	this.shape_3.setTransform(100,190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.controlView, new cjs.Rectangle(-1,-1,202.3,382), null);


(lib.thePointer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.btn = new lib.btnPointer();
	this.btn.name = "btn";
	this.btn.parent = this;
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.btnPointer(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

}).prototype = getMCSymbolPrototype(lib.thePointer, new cjs.Rectangle(-53,-3,106,126), null);


(lib.theObj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.btn = new lib.btnObj();
	this.btn.name = "btn";
	this.btn.parent = this;
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.btnObj(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

}).prototype = getMCSymbolPrototype(lib.theObj, new cjs.Rectangle(-53,-123,106,126), null);


(lib.theCpntrolPQ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.theObj = new lib.theObj();
	this.theObj.name = "theObj";
	this.theObj.parent = this;
	this.theObj.setTransform(-250.05,0,0.6,0.6,0,0,0,0.1,0);

	this.thePointer = new lib.thePointer();
	this.thePointer.name = "thePointer";
	this.thePointer.parent = this;
	this.thePointer.setTransform(159.75,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.thePointer},{t:this.theObj}]}).wait(1));

	// bg
	this.theImg = new lib.theImg();
	this.theImg.name = "theImg";
	this.theImg.parent = this;
	this.theImg.setTransform(-65,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(0.1,1,1).p("AgYkrIAxAAQAyAAAAAyIAAHzQAAAygyAAIgxAAQgyAAAAgyIAAnzQAAgyAyAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AgYEsQgyAAAAgyIAAnzQAAgyAyAAIAxAAQAyAAAAAyIAAHzQAAAygyAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AgvBIIAAiOIBfAAIAAAQIhMAAIAAAtIBCAAIAAAPIhCAAIAABCg");
	this.shape_2.setTransform(100.025,20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AgvBIIAAiOIBfAAIAAAQIhMAAIAAAtIBCAAIAAAPIhCAAIAABCg");
	this.shape_3.setTransform(-99.975,20);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CCCCCC").ss(3,1,1).p("AAAhjIAADH");
	this.shape_4.setTransform(-200,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CCCCCC").ss(3,1,1).p("AAAhjIAADH");
	this.shape_5.setTransform(-100,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CCCCCC").ss(3,1,1).p("AAAhjIAADH");
	this.shape_6.setTransform(200,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#CCCCCC").ss(3,1,1).p("AAAhjIAADH");
	this.shape_7.setTransform(100,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CCCCCC").ss(3,1,1).p("AAAhjIAADH");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#CCCCCC").ss(3,1,1).p("EhGTAAAMCMnAAA");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.theImg}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.theCpntrolPQ, new cjs.Rectangle(-451.5,-73.8,903,147.6), null);


(lib.rbObj03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btnS
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(40.1,0,1.2006,0.3399,0,0,0,0.4,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsAsQgrAsg/AAQg9AAgsgsQgsgsAAg+QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBqQgsgsAAg+QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9QAAA+gsAsQgrAsg/AAQg9AAgsgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkBzIABgYQAMAGAGABQAQADACgEQACgEAAgEIAAg+IhCAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBIAAhaQAAgBAAgBQAAAAAAAAQABgBAAAAQABAAABAAIBBAAIAAgUIhPAAIgCACIAABWQAABAgUAyIgVgHQALgeAEgZQAEgZAAghIAAhjQAAgGAGAAIDMAAIAAAXIhUAAIAAAUIBJAAQAEAAAAADIAABaQAAADgEAAIhIAAIAABEQAAAQgMAHQgGADgIAAQgOAAgWgGgAgsAGIB7AAIABgBIAAgOIh8AAgAgsgvIAAARIB8AAIAAgRIgBgBIh7AAQAAAAAAAAQgBAAAAABQAAAAABAAQAAAAAAAAgAC9B2QgPAAgJgJQgHgHAAgQIAAiBIgJAEIgMgUQA3gXAWgmIASAHQgBAEgDADIBcAAIANAOQgMAWgZAVIBBAAQAGABAAAEIAABSQAAAGgGAAIi1AAIAAAfQAAALADAEQAFAFAGAAICMAAQANgBAEgGQADgEABgEIABgXIAWAEQgBAegKAOQgKANgNAAgAERAVIBFAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAgBIAAgqQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIhFAAgAC0gYIAAAtIBHAAIAAgvIhFAAIAAAAQgBAAAAAAQAAAAAAAAQAAAAAAABQgBAAAAABgACpgxIBVAAQAigTAPgPIhZAAQgOAQgfASgAAzA4IAPgOQAZAWAbAoIgSAOQgdgpgUgVgAhYBhQAggZASgfIATALQgZApgcATgAl6BtIAAgYIDrAAIAAAYgAljALIAAgWIC9AAIAAAWgAlshSIAAgYIDQAAIAAAYg");
	this.shape_2.setTransform(65,0.0191);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbObj03, new cjs.Rectangle(-21.4,-18,124.30000000000001,36), null);


(lib.rbObj02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btnS
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(40.1,0,1.2006,0.3399,0,0,0,0.4,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsAsQgrAsg/AAQg9AAgsgsQgsgsAAg+QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBqQgsgsAAg+QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9QAAA+gsAsQgrAsg/AAQg9AAgsgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiQB6IAAiDIhoAAIAAgXIBoAAIAAhZIAXAAIAABZIBsAAIAAAXIhsAAIAACDgAA7BsIACgaQAvAWANgHQAJgFADgHQAHgQgKgeIh4AAIAAgXIBuAAIgQgZIALAAIApgaIAAgBIhoAAIAAgVICHAAIASASIhDAqIAFANIBnAAIAAAXIhdAAQANAqgMARQgHAMgNAGQgKAEgNAAQgWAAgegMgADXgsQAIgYABgHQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAAAgBAAIi5AAIgCACIAAAlIgWAAIAAg4QAAgFAEAAIBjAAIAAgUIAXAAIAAAUIBbAAIATALQgCAWgMAfg");
	this.shape_2.setTransform(50,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbObj02, new cjs.Rectangle(-21.4,-18,122.1,36), null);


(lib.rbObj01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btnS
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(40.1,0,1.2006,0.3399,0,0,0,0.4,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsAsQgrAsg/AAQg9AAgsgsQgsgsAAg+QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBqQgsgsAAg+QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9QAAA+gsAsQgrAsg/AAQg9AAgsgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAKBwQAKgYgBgbIAVAAQgBAjgKAYIgTgIgAiKB4IAAgoIhsAAIAAgUIBsAAIAAgPIhVAAQgGgBAAgEIAAhQQAAgGAGAAIC+AAQAFAAAAAGIAABQQgBAFgEAAIhUAAIAAAPIBrAAIAAAUIhrAAIAAAogAh1AZIBCAAIACgBIAAgPIhEAAgAjQAYIABABIBFAAIAAgQIhGAAgAh1gJIBEAAIAAgQIgCgBIhCAAgAjQgZIAAAQIBGAAIAAgRIhFAAIgBABgADgB0IAAgKIg9AAIAAAKIgVAAIAAh5QAAgBABgBQAAAAAAAAQABgBAAAAQABAAAAAAIAdAAIAAhvIAWAAIAAAmIA0AAIAAAUIg0AAIAAA1IArAAQAFAAAAAEIAAB4gACjANIAABIIA9AAIAAhIQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIg4AAQgBAAAAABQgBAAAAAAQAAAAAAABQAAAAAAAAgAAwByQABgagBgbIAVABQABAcgCAagABKA+IAVgDQAHAcABAXIgTACQgCgWgIgcgABoA7IASgEQAHATAEAXIgSADQgEgZgHgQgAAKAgIA1gEIAAgRIgvAAIAAgTIAvAAIAAgRIgvAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAgBAAAAIAAhWIACgCIB0AAQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAAAIAABWQAAAAAAABQAAABAAAAQgBAAAAABQgBAAAAAAIgwAAIAAARIAsAAIAAATIgsAAIAAAQIAwgDIABAVIh3AHgABUgsIAfAAIABgBIAAg0IggAAgAAggsIAfAAIAAg1IgfAAgABag2IAFgiIAQADQgCAXgDAMgAAqg1QgBgRgEgPIARgCIAGAigAhzg6QAAAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAgBIAAgxIACgCIBaAAQABABAAAAQABAAAAAAQABABAAAAQAAAAAAAAIAAAxQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAgAhghMIA1AAIABgBIAAgQIg2AAgAjog6QAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBIAAgxIACgCIBZAAQABABABAAQAAAAABAAQAAABAAAAQABAAAAAAIAAAxQAAABgBABQAAAAAAABQgBAAAAAAQgBAAgBAAgAjWhMIA1AAIABgBIAAgQIg2AAg");
	this.shape_2.setTransform(50,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbObj01, new cjs.Rectangle(-21.4,-18,122.1,36), null);


// stage content:
(lib.myAnimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AjgA6QgOgSAAgoQAAgYAFgQQAGgPAJgJQALgIAPAAQAMAAAJAEQAIAFAGAJQAFAJAEAMQADANAAAUQAAAZgFAPQgFAQgLAIQgKAJgQAAQgUAAgMgPgAjTgvQgJANAAAiQAAAjAIAMQAIAMAMgBQAMABAJgMQAIgMAAgjQAAgigIgMQgJgMgMAAQgMAAgHALgAECBHQAAgHACgGQADgJAJgKQAHgJAPgMQAYgTAIgKQAJgMAAgKQAAgKgIgIQgHgGgMgBQgNAAgIAIQgIAHABAOIgSgCQABgUAMgLQANgKAUAAQAVAAALALQAMALABARQgBAJgDAIQgDAJgJAIQgIAJgTAQIgUASIgIAKIBHAAIAAARgADGBHIAAhwQgGAHgKAGQgLAFgIAEIAAgRQAOgHAMgKQAKgKAFgJIAMAAIAACPgABnBHIAAgUIAUAAIAAAUgAAfBHIAAhwQgGAHgKAGQgLAFgHAEIAAgRQAOgHALgKQALgKAFgJIALAAIAACPgAiCBHQAAgHACgGQAEgJAIgKQAIgJAPgMQAXgTAJgKQAIgMAAgKQAAgKgHgIQgIgGgMgBQgNAAgIAIQgHAHAAAOIgSgCQABgUANgLQAMgKAVAAQAUAAAMALQAMALAAARQAAAJgEAIQgDAJgIAIQgJAJgTAQIgTASIgIAKIBGAAIAAARgAlfBHQAAgHACgGQADgJAIgKQAIgJAPgMQAXgTAIgKQAJgMAAgKQAAgKgIgIQgHgGgMgBQgMAAgIAIQgIAHAAAOIgSgCQABgUANgLQAMgKAUAAQAVAAAMALQAMALAAARQAAAJgDAIQgEAJgIAIQgJAJgTAQIgUASIgHAKIBGAAIAAARg");
	this.shape.setTransform(1552.85,45.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("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");
	this.shape_1.setTransform(1538.875,21.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// drawBmp
	this.drawBmp = new lib.drawBmp();
	this.drawBmp.name = "drawBmp";
	this.drawBmp.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.drawBmp).wait(1));

	// len
	this.btnToSide = new lib.btnToSide();
	this.btnToSide.name = "btnToSide";
	this.btnToSide.parent = this;
	this.btnToSide.setTransform(1411.9,840.35,0.6667,0.6667,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.btnToSide, 0, 1, 2, false, new lib.btnToSide(), 3);

	this.btnToEye = new lib.btnToEye();
	this.btnToEye.name = "btnToEye";
	this.btnToEye.parent = this;
	this.btnToEye.setTransform(1511.25,840.35,0.6667,0.6667,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.btnToEye, 0, 1, 2, false, new lib.btnToEye(), 3);

	this.slMaskY = new lib.slMaskY();
	this.slMaskY.name = "slMaskY";
	this.slMaskY.parent = this;
	this.slMaskY.setTransform(1443.15,512);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("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");
	this.shape_2.setTransform(166.975,79.95);

	this.rbObj01 = new lib.rbObj01();
	this.rbObj01.name = "rbObj01";
	this.rbObj01.parent = this;
	this.rbObj01.setTransform(1457.75,595.15);

	this.rbObj02 = new lib.rbObj02();
	this.rbObj02.name = "rbObj02";
	this.rbObj02.parent = this;
	this.rbObj02.setTransform(1457.75,642.95);

	this.rbObj03 = new lib.rbObj03();
	this.rbObj03.name = "rbObj03";
	this.rbObj03.parent = this;
	this.rbObj03.setTransform(1457.75,690.75);

	this.slIntensity = new lib.slIntensity();
	this.slIntensity.name = "slIntensity";
	this.slIntensity.parent = this;
	this.slIntensity.setTransform(1443.15,432.8);

	this.chScreen = new lib.chScreen();
	this.chScreen.name = "chScreen";
	this.chScreen.parent = this;
	this.chScreen.setTransform(1460.15,336.9);

	this.chZoomIn = new lib.chZoomIn();
	this.chZoomIn.name = "chZoomIn";
	this.chZoomIn.parent = this;
	this.chZoomIn.setTransform(1505.25,769.45,1,1,0,0,0,45.1,-1.8);

	this.chRay = new lib.chRay();
	this.chRay.name = "chRay";
	this.chRay.parent = this;
	this.chRay.setTransform(1460.15,276.3);

	this.btnD = new lib.btnDir();
	this.btnD.name = "btnD";
	this.btnD.parent = this;
	this.btnD.setTransform(-193.3,828.25,1.6,1.6,89.9978);
	new cjs.ButtonHelper(this.btnD, 0, 1, 2, false, new lib.btnDir(), 3);

	this.btnL = new lib.btnDir();
	this.btnL.name = "btnL";
	this.btnL.parent = this;
	this.btnL.setTransform(-293.4,768.25,1.6,1.6,180);
	new cjs.ButtonHelper(this.btnL, 0, 1, 2, false, new lib.btnDir(), 3);

	this.btnR = new lib.btnDir();
	this.btnR.name = "btnR";
	this.btnR.parent = this;
	this.btnR.setTransform(-93.4,768.25,1.6,1.6);
	new cjs.ButtonHelper(this.btnR, 0, 1, 2, false, new lib.btnDir(), 3);

	this.btnU = new lib.btnDir();
	this.btnU.name = "btnU";
	this.btnU.parent = this;
	this.btnU.setTransform(-193.4,708.3,1.6,1.6,-89.9978);
	new cjs.ButtonHelper(this.btnU, 0, 1, 2, false, new lib.btnDir(), 3);

	this.btnZoomIn = new lib.btnZoomIn();
	this.btnZoomIn.name = "btnZoomIn";
	this.btnZoomIn.parent = this;
	this.btnZoomIn.setTransform(1689.15,856.3,1.4,1.4);
	new cjs.ButtonHelper(this.btnZoomIn, 0, 1, 2, false, new lib.btnZoomIn(), 3);

	this.btnZoomOut = new lib.btnZoomOut();
	this.btnZoomOut.name = "btnZoomOut";
	this.btnZoomOut.parent = this;
	this.btnZoomOut.setTransform(1783.05,856.3,1.4,1.4);
	new cjs.ButtonHelper(this.btnZoomOut, 0, 1, 2, false, new lib.btnZoomOut(), 3);

	this.theControlPQ = new lib.theCpntrolPQ();
	this.theControlPQ.name = "theControlPQ";
	this.theControlPQ.parent = this;
	this.theControlPQ.setTransform(800,819.95,1,1,0,0,0,0,6);

	this.controlView = new lib.controlView();
	this.controlView.name = "controlView";
	this.controlView.parent = this;
	this.controlView.setTransform(1640.05,251.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.controlView},{t:this.theControlPQ},{t:this.btnZoomOut},{t:this.btnZoomIn},{t:this.btnU},{t:this.btnR},{t:this.btnL},{t:this.btnD},{t:this.chRay},{t:this.chZoomIn},{t:this.chScreen},{t:this.slIntensity},{t:this.rbObj03},{t:this.rbObj02},{t:this.rbObj01},{t:this.shape_2},{t:this.slMaskY},{t:this.btnToEye},{t:this.btnToSide}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(464.2,461.9,1377.2,431.5);
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