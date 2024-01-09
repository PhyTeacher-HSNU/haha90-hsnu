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


(lib.checker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(8,1,1).p("AiLgIIA4AAIAfCFIDAj5");
	this.shape.setTransform(2.25,-4.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.checker, new cjs.Rectangle(-15.7,-20.7,36,33), null);


(lib.latterV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AgZC5IhilxIAxAAIBKEWIBLkWIAxAAIhlFxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 圖層_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("AAXC5IBllxIgxAAIhLEWIhKkWIgxAAIBiFxg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FFFF").s().p("AgZC5IhilxIAxAAIBKEWIBLkWIAxAAIhlFxg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.latterV, new cjs.Rectangle(-13.9,-20,27.8,40), null);


(lib.latterA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF99FF").s().p("ABCC8QgFgRAAgQQgmAigrgBQgtABgXgkQgaggAAhAQAAg9AfgnQAcglAzAAQAgABAfAUQgDgugQgRQgRgQgXAAQgdABgmAuIgMgvQAtgyAiAAQA2ACAcAnQAaAhAAA+IAACOQAAAxAHAxgAgwgIQgRAXAAAqQgCArAOAUQAMAUAVAAQAkgBArgiIAAgPIAAhjQghgWgeABQgeACgOAUg");
	this.shape.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 圖層_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("AgUC9QArAAAmghQAAAPAFASIAxAAQgHgxAAgxIAAiOQAAg/gagiQgcgmg2gCQgiAAgtAxIAMAwQAmgtAdgDQAXAAARASQAQAQADAvQgfgVggAAQgzAAgcAlQgfAmAAA+QAAA/AaAhQAXAjAtAAgAgUCMQgVAAgMgTQgOgVACgqQAAgqARgXQAOgVAegCQAeAAAhAVIAABkQAAAHAAAHQgrAjgkAAg");
	this.shape_1.setTransform(0,0.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF99FF").s().p("ABCC8QgFgRAAgQQgmAigrgBQgtABgXgkQgaggAAhAQAAg9AfgnQAcglAzAAQAgABAfAUQgDgugQgRQgRgQgXAAQgdABgmAuIgMgvQAtgyAiAAQA2ACAcAnQAaAhAAA+IAACOQAAAxAHAxgAgwgIQgRAXAAAqQgCArAOAUQAMAUAVAAQAkgBArgiIAAgPIAAhjQghgWgeABQgeACgOAUg");
	this.shape_2.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.latterA, new cjs.Rectangle(-13,-20.3,26,40.7), null);


(lib.btnStep = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABeDbIAAi/IkvC/IAAmxIEvC/IAAjDIB0AAIAAG1g");

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
	this.shape.graphics.f("#FFFFFF").s().p("AGMESIAAojICRAAIAAIjgABYESIAAojICQAAIAAIjgAockLIGvEOImvEPg");
	this.shape.setTransform(-0.0381,-0.4037,0.8,0.8);

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


(lib.bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,1,1).p("AzXAAMAmvAAA");
	this.shape.setTransform(149.9974,0,1.2097,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bar, new cjs.Rectangle(-2.5,-2.5,305,5), null);


(lib.ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FF0000"],[0,0.706],-4.9,-4.5,0,-4.9,-4.5,16.4).s().p("AiMCNQg7g6AAhTQAAhSA7g7QA6g6BSAAQBTAAA6A6QA7A7AABSQAABTg7A6Qg6A7hTAAQhSAAg6g7g");
	this.shape.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ball, new cjs.Rectangle(-20,-19.9,40,40), null);


(lib.arrowV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("ABwBkIxXAAIAAjHIRXAAIAAhkIN4DHIt4DIg");
	this.shape.setTransform(100,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrowV, new cjs.Rectangle(0,-20,200,40), null);


(lib.arrowA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF99FF").s().p("ABwBkIxXAAIAAjHIRXAAIAAhkIN4DHIt4DIg");
	this.shape.setTransform(100,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrowA, new cjs.Rectangle(0,-20,200,40), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// grid
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.498)").ss(1,1,1).p("EBtYhGTIAAPoIAAPoIAAPoIvoAAIAAPoIAAPnIvoAAIAAPoIAAPoIAAPoIAAPoIvoAAIvoAAEBtYhGTIPoAAIAAPoIvoAAIvoAAIvoAAIAAPoIAAPoIAAPoIAAPnIvoAAIAAPoIAAPoIvoAAIAAPoIAAPoIvoAAIvoAAIvoAAEBOIhGTIAAPoIvoAAIAAPoIAAPoIvoAAIAAPoIAAPnIvoAAIAAPoIAAPoIvoAAIAAPoIAAPoEBOIhGTIPoAAIAAPoIAAPoIAAPoIvoAAIvoAAIAAPoIAAPnIvoAAIAAPoIAAPoIvoAAIAAPoIAAPoEBdwgnDIvoAAIvoAAIvoAAIAAPoIvoAAIAAPoIAAPnIvoAAIAAPoIAAPoIvoAAIAAPoIAAPoIvnAAIvoAAEB9AgnDIAAPoIvoAAIAAPoIAAPnIAAPoIAAPoIvoAAIAAPoIAAPoIvoAAEB9AgnDIvoAAIvoAAEB9Ag2rIAAPoEBdwhGTIPoAAEB9AgHzIAAPnIvoAAIvoAAIAAPoIAAPoIvoAAIvoAAIAAPoIAAPoEB9AgHzIvoAAIvoAAIvoAAIvoAAIvoAAIvoAAIvoAAIAAPnIvoAAIAAPoIAAPoIvnAAIAAPoIAAPoEBdwAXcIvoAAIvoAAIvoAAIvoAAIvoAAIvoAAIvnAAIAAPoIvoAAIAAPoIAAPoIvoAAIvoAAIvoAAEB9AAXcIAAPoIvoAAIAAPoIAAPoIvoAAEB9AAXcIvoAAIvoAAEB9AAH0IAAPoEB9AgXbIAAPoEB9AA2sIAAPoIvoAAEB9AA2sIvoAAIvoAAIvoAAIvoAAIvoAAIvoAAIvoAAIvoAAIvnAAIvoAAIvoAAIAAPoEB9AAnEIAAPoEA+ghGTIAAPoIvoAAIAAPoIvoAAIAAPoIvoAAIAAPoIvoAAIAAPnIvnAAIAAPoIvoAAIAAPoIvoAAIvoAAIvoAAIAAPoIAAPoIvoAAIvoAAEAfQhGTIAAPoIAAPoIvoAAIAAPoIvoAAIAAPoIvnAAIAAPnIvoAAIAAPoIvoAAIAAPoIAAPoIvoAAIAAPoEAfQhGTIPoAAIAAPoIvoAAIvoAAIAAPoIvoAAIAAPoIvnAAIAAPoIvoAAIAAPnIvoAAIAAPoIvoAAIAAPoIAAPoIvoAAIvoAAIAAPoEAu4hGTIPoAAIPoAAEAPohGTIAAPoIvoAAIvnAAIAAPoIAAPoIvoAAIAAPoIvoAAIAAPnIvoAAIAAPoIvoAAIAAPoIvoAAIvoAAIvoAAIAAvoIAAvoIAAvnIAAvoIAAvoIAAvoIAAvoIPoAAIAAPoIvoAAEgPnhGTIAAPoIvoAAIvoAAIAAPoIAAPoIvoAAIAAPoIAAPnIvoAAIAAPoIvoAAIAAPoIAAPoIvoAAIAAPoIvoAAIAAvoIAAvoEAAAhGTIAAPoIAAPoIvnAAIvoAAIAAPoIvoAAIAAPoIvoAAIvoAAIAAPnIvoAAIAAPoIvoAAIAAPoIAAPoIvoAAEgPnhGTIPnAAIPoAAIPoAAEgu3hGTIAAPoIvoAAIAAPoIAAPoIvoAAIAAPoIvoAAIAAPnIvoAAIvoAAEgfPhGTIAAPoIAAPoIvoAAIvoAAIvoAAIAAPoIvoAAIvoAAIvoAAEgu3hGTIPoAAIPoAAEg+fhGTIAAPoIvoAAIAAPoIvoAAIAAPoIAAPoIvoAAIAAPnIAAPoIvoAAEg+fhGTIPoAAEhdvhGTIAAPoIAAPoIvoAAIAAPoIAAPoIvoAAEhdvhGTIPoAAIAAPoIvoAAIvoAAIAAPoIvoAAEhtXhGTIPoAAEhOHhGTIPoAA");
	this.shape.setTransform(800,450);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(101.2,875.708);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#003300","#006600"],[0,1],0,447,0,-446.9).s().p("Eh8/BGUMAAAiMnMD5/AAAMAAACMng");
	this.shape_2.setTransform(800,450);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-1,-1,1602,902), null);


(lib.theKing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg
	this.latterV = new lib.latterV();
	this.latterV.name = "latterV";
	this.latterV.parent = this;
	this.latterV.setTransform(267.6,43.8);

	this.latterA = new lib.latterA();
	this.latterA.name = "latterA";
	this.latterA.parent = this;
	this.latterA.setTransform(231.05,44.1);

	this.arA = new lib.arrowA();
	this.arA.name = "arA";
	this.arA.parent = this;
	this.arA.setTransform(32,0);

	this.arV = new lib.arrowV();
	this.arV.name = "arV";
	this.arV.parent = this;
	this.arV.setTransform(352.65,0);

	this.ball = new lib.ball();
	this.ball.name = "ball";
	this.ball.parent = this;
	this.ball.setTransform(300,-0.05);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAAAAIAACWAAAAAMAu4AAAEgu3AAAMAu3AAAAAAiVIAACV");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.ball},{t:this.arV},{t:this.arA},{t:this.latterA},{t:this.latterV}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.theKing, new cjs.Rectangle(-301.5,-20,854.2,84.5), null);


(lib.theCircle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.latterV = new lib.latterV();
	this.latterV.name = "latterV";
	this.latterV.parent = this;
	this.latterV.setTransform(400.5,-1.5);

	this.latterA = new lib.latterA();
	this.latterA.name = "latterA";
	this.latterA.parent = this;
	this.latterA.setTransform(363.95,-1.2);

	this.arA = new lib.arrowA();
	this.arA.name = "arA";
	this.arA.parent = this;
	this.arA.setTransform(300,94.8);

	this.arV = new lib.arrowV();
	this.arV.name = "arV";
	this.arV.parent = this;
	this.arV.setTransform(300,54.8);

	this.ball = new lib.ball();
	this.ball.name = "ball";
	this.ball.parent = this;
	this.ball.setTransform(300,-0.05);

	this.bar = new lib.bar();
	this.bar.name = "bar";
	this.bar.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bar},{t:this.ball},{t:this.arV},{t:this.arA},{t:this.latterA},{t:this.latterV}]}).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("EAu4AAAQAATZtuNuQtvNxzbAAQzZAAtvtxQtvtuAAzZQAAzZNvtxQNvttTZAAQTbAANvNtQNuNxAATZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.theCircle, new cjs.Rectangle(-301.5,-301.5,801.5,603), null);


(lib.slDT = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAuCSQgwAUhAABIgHgcQApAAAdgFQAFgDAJgCIgqgZIAQgWQAiAWAbANQALgEAMgJQAbgNAOgOQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBAAgBAAIiSAAIAAgbIC1AAQAMAIAIAFQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQgXAig4AeQAjAJAzAAIgJAdQg/gCgygTgAh/CnIAAlNIAcAAIAAFNgAinAiQAIg5AAhFIAYACQgCBagHAlgAg0AiQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAgBIAAhKQABgEACAAIDVAAQAEAAAAAEIAABKQAAAEgEAAgABjAKIAlAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAIAAggQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAIglAAgAAlAKIAiAAIAAgiIgiAAgAgbgXIAAAhIAkAAIAAgiIgkAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAgAhYhfIAXgCIADBeIgXABgAgmg+QgBAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBIAAhcQABgEABAAIC4AAQADAAAAAEIAABcQAAAEgDAAgAgNhWICFAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAgOIiGAAgAgNiJIAAAOICGAAIAAgOQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIiFAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAg");
	this.shape.setTransform(-50.05,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACGClQhLg7gUg5QgaBLg/ArIgZgXQBLgoAQhYIhPAAIAAgeIBTAAIACgXIAAg6Ig8AAIAAgeIA8AAIAAgoIAeAAIAAAoIBSAAQAJABgBAGIAABoIAaAAIAAAeIhuAAQAWBLBVA5IgaATIgFgCgAAzgeQABAHAAAJIA8AAIAAhOQAAgDgFAAIg3AAIAAA6IgBAAIAAAHgAh4CnIAAlNIAgAAIAAFNgAinAfQAJhLgBg8IAbABQAABQgIA6gAhOhhIAagGIAKBLIgbAEg");
	this.shape_1.setTransform(195.25,0.025);

	this.label = new cjs.Text("文字標籤", "26px 'Microsoft JhengHei'", "#FFFFFF");
	this.label.name = "label";
	this.label.textAlign = "right";
	this.label.lineHeight = 37;
	this.label.lineWidth = 146;
	this.label.parent = this;
	this.label.setTransform(61.05,304.8);

	this.valueText = new cjs.Text("0", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(136.05,313.4);

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

}).prototype = getMCSymbolPrototype(lib.slDT, new cjs.Rectangle(-86.9,-16.7,325,390.7), null);


(lib.chKingV = function(mode,startPosition,loop) {
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AF5BuIAVgLQAIAXAIAAQAGAAAEgHQACgCAMghIgsiYIAZAAIAgB3IAsh3IAYAAIhIDEQgKAUgXAAQgbgCgKgggAlRBcQgtAggyAKIgOgXQA2gNAjgVQgZgXgZgfIAUgRQAcAiAWAVQAagWASgjQAEgGgHABIhvAAIAAgaICLAAIAMALQgSAvgkAnIgHAHQAfAUAyAPIgQAYQgtgQgogcgAgTCEIAAgaQAXAHAFgDQACgEAAgFIAAgqIg7AAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAg1QAAgBABgBQAAAAAAgBQAAAAABAAQAAAAAAAAICLAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAABIAAA1QAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIg3AAIAAAwQgBASgMAHQgGADgKAAQgKAAgQgDgAgbAUIAAATIBhAAIABgBIAAgSIgBgBIhhAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAgABaByQAjgOAYgRQAUgRAXgnIAWAMQgMAYgMAPQgZAhg8AYgAoDB/IACgbQASAIAHAAQACACAEgEQACgEAAgEIAAg+QgNAGgKADIgPgWQAXgHAPgHIAAhJIgiAAIAAgaIAiAAIAAgyIAaAAIAAAyIAeAAIAAAaIgeAAIAAA9QALgGAJgHIAPAUQgOAJgSAJIgDACIAABRQAAARgOAJQgFADgJAAQgMAAgVgHgAhCBqQAXgOAPgZIAUAQQgWAegZAOQgEgOgHgHgAA0BQIAUgNQAMAQAMAYIgWAMQgLgbgLgMgABoALQAxgTAng1IAVAQQgnA1g4AZgAhAgLIAAgYIBJAAIAAgOIg3AAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAhRQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABAAICIAAQABABAAAAQABAAAAABQABAAAAAAQAAABAAAAIAABRQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIg5AAIAAAOIBLAAIAAAYgAgZhGIBeAAIABgBIAAgMIhfAAgAgZhmIBfAAIAAgMIhfAAgAmug0QAQgHAHgFQAOgMAAgWIAAghIACgDQABgBAAAAQABgBAAAAQABAAAAgBQAAAAABAAIBXAAIAFADIABADIAAA6IADAIQABACAIAAIAJAAIAHgBQADgBAAgIIAAgWIAXADIgBAjQgBAIgFAEQgIAHgIAAIgfAAQgKAAgHgHQgHgHAAgLIAAguQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAgBAAIgrAAQgBAAgBAAQAAAAgBABQAAAAgBABQAAAAAAABIAAATQAAAOgEALQgLAXggAMgABshTQArgQAfgsIAVAQQgfAqgzAYg");
	this.shape_2.setTransform(76.925,0.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chKingV, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


(lib.chKingH = function(mode,startPosition,loop) {
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AlRBfQgtAggyALIgOgYQA2gMAjgWQgZgWgZggIAUgQQAcAiAWAVQAagWASgjQAEgHgHABIhvAAIAAgZICLAAIAMALQgSAvgkAnIgHAGQAfAVAyAOIgQAZQgtgQgogdgAgTCHIAAgZQAXAHAFgDQACgEAAgFIAAgqIg7AAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAgBAAgBIAAg1QAAAAABgBQAAgBAAAAQAAgBABAAQAAAAAAAAICLAAQABAAAAAAQABAAAAABQABAAAAABQAAABAAAAIAAA1QAAABAAABQAAABgBAAQAAABgBAAQAAAAgBAAIg3AAIAAAwQgBASgMAGQgGAEgKAAQgKAAgQgEgAgbAYIAAATIBhAAIABgBIAAgSIgBgBIhhAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAgABaB2QAjgOAYgRQAUgRAXgnIAWAMQgMAXgMAPQgZAig8AYgAoDCDIACgbQASAIAHAAQACABAEgDQACgEAAgEIAAg+QgNAFgKAEIgPgXQAXgHAPgGIAAhJIgiAAIAAgaIAiAAIAAgzIAaAAIAAAzIAeAAIAAAaIgeAAIAAA8QALgGAJgGIAPAUQgOAJgSAIIgDACIAABRQAAASgOAIQgFADgJAAQgMAAgVgGgAhCBuQAXgOAPgZIAUAQQgWAegZAOQgEgOgHgHgAA0BUIAUgNQAMAPAMAZIgWALQgLgbgLgLgAHqBzQgRghgZgqIgrBLIgcAAIAwhSIAJgSIgagtQgRgfgEgHIAcAAIAhA8IAjg8IAdAAIgyBUIA5BjgABoAPQAxgTAng1IAVAQQgnA1g4AZgAhAgIIAAgXIBJAAIAAgOIg3AAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAgBAAAAIAAhRQAAgBABgBQAAAAAAAAQABgBAAAAQAAAAABAAICIAAQABAAAAABQABAAAAAAQABABAAAAQAAAAAAABIAABRQAAAAAAABQAAABgBAAQAAABgBAAQAAAAgBAAIg5AAIAAAOIBLAAIAAAXgAgZhCIBeAAIABgBIAAgMIhfAAgAgZhiIBfAAIAAgNIhfAAgAmugwQAQgIAHgEQAOgMAAgWIAAghIACgDQABgBAAgBQABAAAAAAQABgBAAAAQAAAAABAAIBXAAIAFADIABADIAAA6IADAHQABADAIAAIAJAAIAHgBQADgCAAgHIAAgWIAXACIgBAjQgBAJgFAEQgIAGgIAAIgfAAQgKAAgHgGQgHgIAAgKIAAguQAAgBAAgBQgBAAAAgBQgBAAAAAAQgBgBgBAAIgrAAQgBAAgBABQAAAAgBAAQAAABgBAAQAAABAAABIAAATQAAAOgEAKQgLAYggALgABshPQArgQAfgsIAVAQQgfAqgzAYg");
	this.shape_2.setTransform(76.925,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chKingH, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


(lib.chArV = function(mode,startPosition,loop) {
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
	this.shape_2.graphics.f("#00FFFF").s().p("ABcBvQg1AWg1AHIgJgZQAygFAdgLIAHgBQgdgPgZgQIAKgYQAmAcAjAOQAogUASgWQACgCgEAAIiSAAIAAgZICqAAIARAPQgWAlgtAcQArAMAyAFIgMAbQg/gLgwgSgAoBBzQAagJAGgLQAHgJADgLIAAgzQAAgBAAgBQAAAAgBgBQAAAAgBAAQgBAAgBAAIgcAAIAAgZIAzAAQAGABAAAEIAABHQACAKAIAHQAIALASAHQAZAHCXgHIgGAdIiOAAQg3gEgTggQgEALgOALQgOAMgOAFgAg/B5QAPgYAEgZQAFgVABgfIAAiEQAAgHAGAAIBmAAIAAgUIAZAAIAAAUIBwAAIAAAZIgsAAIAAAaIAsAAIAAAYIgsAAIAAAjQgBALgMAAIh5AAQgMAAABgLIAAgjIggAAIAABGQgBA+gZAsgAAsgZQAAAAAAABQAAABAAAAQABABAAAAQABAAABAAIBWAAQAEAAAAgDIAAgTIhdAAgAAshEIBdAAIAAgaIhdAAgAgOhbIAAAXIAgAAIAAgaIgcAAQgBAAgBAAQgBAAAAAAQgBABAAAAQAAABAAABgAG4B0Igyi3IAZAAIAlCKIAmiKIAYAAIgyC3gAldBjIAAhGQghApgfARIgSgTQAqgYAcglIg9AAQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBIAAhKQAAgBAAgBQAAAAAAgBQABAAAAAAQABgBABAAIBJAAIAAgUIhPAAIAAgZIBPAAIAAgTIAZAAIAAATIBSAAIAAAZIhSAAIAAAUIBJAAQABAAABABQAAAAABAAQAAABAAAAQAAABAAABIAABKQAAABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAIg/AAQAfAnAxAaIgUARQgpgagdghIAABFgAlEgPIAzAAIABgBIAAgiIg0AAgAmRgQQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAAAAAIAzAAIAAgjIg0AAgAn+gyIAPgWQAVAKAaAWIgPAVQgcgXgTgIgAn4hvIANgWQAYALAcAUIgQAXQgcgWgVgKg");
	this.shape_2.setTransform(78.25,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chArV, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


(lib.chArA = function(mode,startPosition,loop) {
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
	this.shape_2.graphics.f("#FF99FF").s().p("AD0BvQg2AWg2AHIgIgZQAzgFAdgLIAHgBQgegPgYgQIAJgYQAnAcAjAOQAngUATgWQACgCgEAAIiSAAIAAgZICpAAIARAPQgVAlgtAcQArAMAxAFIgLAbQhAgLgvgSgAjUBzQAagJAHgLQAGgJADgLIAAgzQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBAAgBAAIgcAAIAAgZIAyAAQAHABAAAEIAABHQACAKAHAHQAJALARAHQAZAHCWgHIgFAdIiOAAQg3gEgTggQgDALgOALQgOAMgOAFgAkJCJIAAgPIg5AAIAAAPIgZAAIAAj8QAAgBAAgBQAAgBAAAAQABgBAAAAQABAAABAAIBiAAQAGAAAAAFIAAD7gAlChaIAAC6IA5AAIAAi6QAAgBgBgBQAAAAAAgBQgBAAAAAAQgBAAgBgBIgxAAQgFABABADgAnKCCIgCgfQAVAGALABQALABADgDQAHgIAEgOQADgUABgnQABhegBgFQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAgBAAIgnAAQAAAfgIAzQgNBXgVAoIgbgGQAIgOAEgOQAghbgBhUIgmAAIAAgaIAmAAIAAghIAaAAIAAAhIA9AAQAEAAABABQAFADAAALQAABBgBAxQgEBWgWASQgHAFgPAAQgPAAgXgFgABXB5QAQgYAEgZQAFgVAAgfIAAiEQAAgHAHAAIBmAAIAAgUIAaAAIAAAUIBvAAIAAAZIgsAAIAAAaIAsAAIAAAYIgsAAIAAAjQAAALgMAAIh5AAQgMAAAAgLIAAgjIghAAIAABGQgBA+gYAsgADDgZQAAAAAAABQAAABABAAQAAABABAAQABAAAAAAIBWAAQAFAAAAgDIAAgTIheAAgADDhEIBeAAIAAgaIheAAgACIhbIAAAXIAhAAIAAgaIgdAAQgBAAgBAAQAAAAgBAAQAAABAAAAQgBABAAABgAHnB4QgCgJgBgHQgTAQgVAAQgXAAgLgRQgOgRAAgfQAAggAQgTQAOgRAZAAQARAAAPAKQgBgYgIgHQgIgJgMAAQgPABgTAWIgGgXQAWgZASABQAbABAOASQANARAAAfIAABHQAAAZADAYgAGtAWQgIAMAAAVQgBAUAHALQAGAJALAAQASAAAVgRIAAgHIAAgyQgQgLgQAAQgOABgIALgAgvBjIAAhGQghApggARIgSgTQAqgYAdglIg9AAQgBAAgBAAQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAhKQAAgBAAgBQAAAAABgBQAAAAABAAQABgBABAAIBJAAIAAgUIhPAAIAAgZIBPAAIAAgTIAYAAIAAATIBRAAIAAAZIhRAAIAAAUIBJAAQAAAAABABQABAAAAAAQABABAAAAQAAABAAABIAABKQAAABAAABQAAAAgBABQAAAAgBAAQgBAAAAAAIg+AAQAdAnAxAaIgUARQgpgagcghIAABFgAgXgPIAyAAIABgBIAAgiIgzAAgAhkgQQAAAAABAAQAAABAAAAQAAAAAAAAQABAAAAAAIAzAAIAAgjIg1AAgAjRgyIAPgWQAWAKAaAWIgQAVQgcgXgTgIgAjKhvIAMgWQAYALAcAUIgPAXQgdgWgUgKg");
	this.shape_2.setTransform(78.1,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chArA, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


// stage content:
(lib.myAnimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// theCircle
	this.theKingV = new lib.theKing();
	this.theKingV.name = "theKingV";
	this.theKingV.parent = this;
	this.theKingV.setTransform(200,400,1,1,-90);

	this.theKingH = new lib.theKing();
	this.theKingH.name = "theKingH";
	this.theKingH.parent = this;
	this.theKingH.setTransform(600,800);

	this.theCircle = new lib.theCircle();
	this.theCircle.name = "theCircle";
	this.theCircle.parent = this;
	this.theCircle.setTransform(600,400);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.theCircle},{t:this.theKingH},{t:this.theKingV}]}).wait(1));

	// ball
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF66").s().p("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");
	this.shape.setTransform(1348.575,110.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(5,1,1).p("AFOmcQAUAAAXAgQABAAABAAQAJAAARAFQARADARAAQAiAAB1ghQBZgbA/AAQBDAAA6AtQAsAmAAAwQAAAkgoAVQgWAJgZAGQABADAAAEQAAAdhAABQg0AEg2AIQABAMAAALQA8gJAaAAQBIAAAkAhQAnAfAABaQAABGgWAZQgQAVglAAQgYAAgSgGQg7ADg3AGIABAUQA9gFAxAAQA8AAAzAaQAjATAAAXQAAAfhAADQhgACheAFIAAAEQAABBgsAQQBxgEBmgVQBTAAAAA9QAAAigpAVQgtAehaAAQjXAAhdgrQgzgYgUAAQgpAAgyAlQguAeggAAQg+AAgngkQgpgkAAg0QAAguBXg8QAdgRAAgHQAAgKgcgJQhVgUAAgsQAAghA4geQBMgpAAgTQAAgOgjgUQhVgwAAgjQAAgsBHgbQAigLAAgTQAAgLgdgVIg7goQgggWAAgeQAAg/A/AAQAeAABsBbQAqAlAAAZQAAArg3AwQgMAOAAAMQAAAIAPAQQAtAnAAAbQAAAlg2AjQgdAWAAARQAAAaAZABQBcAIAABDQAAAHgEAIQAIgEALAAQABAAAHACQAHACADAAQAXAACOgQIAAgVQgXAEgWADQglAHgXAAQgtAAgYgbQgYgbAAgvQAAhVgNgXQgKgNAAgJQAAghAtAAQAiAAAWARQAWgCAhgHQAigGAfgHIAAgWQgVADgQAAQg1AAgfgPQgIgEgFgDQgPASgTAAQgZAAgPgUQgRgbAAgMQAAgLAJgWQAKgeAAgnQAAgYgGgTQgEgNAAgLQAAgdAhAAgATdmsQBYAAA1AcQAfAUAAAXQAAAggwACQg8AAgtADQAHAFAIAHQAEAEAFAHQAFAAAEAAQBUAAA7AeQApAUAAAdQAAAhg0AAQhAAAg4AHQAAAFAAAEIAAAPQALgBALAAQA/AAAqAXQAmAXAAAtQAABfgEAqQAHAMAAATQAAAbgzANQhCAOg7AHIAAAKQAJAAAKAAQA7AAAyAaQAhASAAAXQAAAeg/AAQgzADgzAHIAAANQAQAAAOAAQBBAAA0AbQAZANAIAQQADgPAFgQQA0ixAOj1QgWAIgKAAQhAAAAAg5QAAgaAjggQAcgVAIAAIAPAEQAIgDAHgDQAAgbAAgbQAAgdgRgeQgRgZAAgNQAAgxA1AAQAgAAAdAWQAsAlAABXQAAAGAAAFQAigLASAAQA+AAAkAuQAmAyADDNQAAEAgXBLQgYBUg6AAQgzAAhGgyQgWgQgQgNQgDAIgDAHQgRA9g2AAQg1AAgDgqQgPAPgtAAQhTAChSALQhDAKgmAAQg8AAgggRQgfgQAAgUQAAgOASgLQAPgJASAAIATAAQAMAABKgRQAAgBAAgBIAAgQQgKACgIAAQg3AAgggRQgegQAAgUQAAgOARgLQAPgJARAAQACAAAGACQAHACAEAAQAKAAA5gQIABgdQgEAAgEAAQhIAAgigfQghggAAgxIAAhiQAAgggSgcQgMgPAAgPQAAgaAiAAQAmAAAeAcQAHAGAEAJQAMgCATgHQASgGASgEIAAgeQgfACgdAAQhpAAAAhHQAAgxArgrQAzgsBSgMQAPAAAAgNQAAgDgCgHQgBgFAAgEQAAgJAHgGQAKgHAYAAgAspmwQAkAAAuApQAcAaAOAWQAPgDASAAQAqAAAhAYQAUAPAHAPIAAgJQAAg0gUgZQgKgNAAgHQAAgeAhAAQAqAAAlAfQAWASADBDQAIgDARgKQAKgGACgMQAEgSAJAAQAhAAAUASQAHADAEAFQAAgRAAgNQAAgNgFgPQgGgHAAgJQAAgbAlAAQAmAAAXAXQAWATAAAbQAAAigDAhQALgKAKgKQAbgXAAgfQAAggASAAQATAAApAeQAtAiAAAaQAAAfg9AfQgFACgFAEQARASAcAmQAmAyAAAZQAAAggcAWQgaAVhCAAQhcAAgrgrQgbgbgHguQgRAcgoAjQAcAEAYALQAnAUAAAZQAAAXg7AMQiFAfAAAnIAIAAQAIAAAhgQQB0g0BAAAQBXAAA6AkQA3AjAABEQAADbgRAlQgQAegvAAQgfAAgVgQQhvABgpAJQg0AJghAAQg/AAgcgfQgggpAAhLQAAglAFgSQAHgVAAgkQAAghgOgZQgRgVAAgWQAAgcBQgqQAggPAAgMQAAgHgDgGQgqAZghAAQgoAAgWgQQgVgOAAgXQAAgHAEgIQgCAAgCAAIjDAtQgoAAgagPQgTgMAAgPQAAgNANgLQAUgRAPAAIALAAQAHAAAngaQA8gpA/AAQAmAAAfAVQAYATAEAVQAEAAAEAEQAGAGAFAAQACAAACAAQAAgEAAgEIAAiDQgKATgjAAIjaA8QgwAAgdgTQgYgNAAgRQAAgQARgMQAWgVARAAIAPAAQAHAAAagPQgGgFgFgHQgsgvAAgfQAAg0A4AAgAJlk4QAFAEAFADQAIAHAGANQAZgEAUAAQAsAAAnAOQAWgRAAgQQAAgagtAAQg2AAhJAVQgBAAgBABgAGWjoQADgBADAAQACAAAHABQAGACAEAAQALAABBgSQgHgTgKgKQgDgFgCgCQgTACgQAAQgXAAgTgDQABAIAAAGQAAAVgDASgAG3gWQAegFAwgIIAAgZQgUAFgWAFQgZADgQACQADALACAMgAIFA5IAAgVQgqAGgfABQAIAUAcAAQAMAAAZgGgAjgjNQADAbAKAOQANARAmAAQAaAAAAgPQAAgTgLg5QguAXghAKgACpE5QAAAXASAAQAVAAAogjQBEgzAwAAQAnAAAmAbQBJAoApAAQACAAACAAQgqgNAAg+IAAgEQhHAEgtAAQg2AAgggQQgegQAAgUQgFADgEADQhrBRAAAkgASWj6QgGgVgLgNQgJgLgDgHQgQAFgLAHQguAcAAAZQAAALAPAAQAeAAA5gYgARmgKQAQgCAlgLIAAgdQgPAEgQAGQgMAEgIADQAAAKgCANQAAACAAAAgASaBXIABgiQgOACgKAAQgRAAgNgCQAAACAAADQAAAeAeAAQALAAAMgBgAUbhVIgBAhQAJAAAJAAQATAAASADQAAgGAAgGQAAgaglAAQgHAAgKACgAVOA8QgBgFAAgEQAAgMABgUQgcAEgaAEIgBArQADAAADgBQAagFAXgEgAKQhQIABAWQAsgGAlgBQgGgSgfAAQgTAAgaADgALfAZQAAgKABgLQgoAEgnAEIABAVQAtgGAggCgA1imwQBAAAAqAbQAgAUAAAUQAAAIgHAFQA0gXAtAAQA6AAAtAaQAgAWAAAWQAAAgg5AGQgwAFgzAKQAGAMAAAOQAAALgCAIQA8ACAkAXQApAZAABOIAAHIQAAA4hXAAQg0AAhYg0QgBADgCABQgYAagcAAQgsAAgSgVQhBACg9AIQg5AHgvAAQhPAAAAhLIAAiDQAAgXgLgWQgLgRAAgJQAAgaAeAAQAmAAAZAOQAPAAAxgLQBKgSAvgHQgMgOAAgZQAAgMACgNQAFgOAAgjQAAg0gVgsQgMgSAAgKQAAghAlAAQAjAAAdAZQALgCAUgFQASgFAQgFQgBgIAAgMQAAgOgEgNQg0ANgfAAQgiAAgVgTQgUgTAAgTQAAgQAvghQAZgPAAgLQAAgNgXgLQgWgKAAgPQAAgRASgLQARgJAWAAgA7TmsQAcAAAcAXQASAOABAnQACgBADgCQBCggBEAAQAmAAAdAUQAbAVAAAXQAAAigtAAIhXAMQAQAPAAAPQAAAmgOARQAvAFAaAdQAfAhAABdQAABKgVAZQgPAVgkAAQgbAAgMgMIiYAVIAAEFQAABLgxAAQgdAAgWgtQgYg2AAhNQAAglAJhMQAKhGAAhtQAAhLgOgWQgLgUAAgKQAAgaAhAAQAkAAAiAfQACACACACQAIgCALgCQA7gSAlgJQgLgJgJgQQgSgdgQgWIgEAAQgCAAgCAAQgGAKgGAJQgpA4ghAAQgmAAgXgZQgZgcAAgdQAAgZASAAQAKADAFAAQALAAAWgfQAUgYAAgRQAAgJgCgKQgCgNAAgFQAAgeApAAgA1ikTQAJAAAZgRQArgfAlgUQgHABgJACQg6AIgiAOQgeANAAAQQAAAOAYAAgA0vg1QAHgEAGgDQA9gbBBAAQAKAAAJACIAAgVQAAgVgLAAQgUAAhfAdQgTAHgPADQACAQAAATgAyRANIAAghIiiAcQgDALAAAGQAAASATAAQAIAAAdgKQA9gRAwgDgA0SBlQANALALAMQAlApAABNIAAA4QAAAYgDASQAhAIAXAAQAPAAAAgfIAAjcQgqABglACQgcAAgWABgA7AAlQAGgDAEgBQA/gYBCAAIAAgWIiLATgA7AgwQAFgCAEgCQBAgaBCgBQgCgbggAAQgaAAhEAVQgFACgGABQAAACAAAAgA4iDuQAKgEANgHQBKglBPAAQAFAAAGAAQAAgHAAgIQAAgXgaAAQgPAAh0AhQgQAFgOACgA1tEwQABgOACgQQAAgCAAgBIi4AhIAAADQAAAZAWAAQAOAAAQgDQBTgaAWAAQANAAALABgAlNjKQAAAAAAgBQAAggABgjQgMARgVAMQgpAVgkAJIAAA4QAqgRA6gaQAGgCADgCgAmzDDQAKgCAQgEQCOgoAyAAQAAgMAAgLQAAgig0AAQgoAAh/A/QACAHAAAJQAAAOgBAKgAtSAVIALAAQAHAAAogWQA9glBAAAQAnAAAfAWQAcAUAAAZQAAAmgtAAIjHAlQgoAAgagRQgTgLAAgNQAAgOANgKQAUgSAPAAgAtwB6QAXAAAWAMIAPADQAJAAAcgHQBIgPAdAAQA0AAAjAoQAhAjAABDIAAAaQAAAigLAWQAIAPAAAQQAAAlgmAAQg+AAhIAHQg2AEgWAAQhKgHgIhDQAAgMACgfQABghAAghQAAgdgNgVQgFgPAAgKQAAgmAeAAgAq0E3QABgKADgLQADgWAAgaQAAgagXAAQgIAAhAASIgDBFQAAASAXAAQAUAAAfgHQAJgCAIgBgAjfErQABgXACgfQikAeg9AFQAAABAAACQAAAiAwAAQAgAAA3gIQAtgJAqgBgAaNiTQgFCDgQB3QgSCLgWBMQAjAOAZAAQAlAAAKg0QANhcAAj/QAAhUgpAAQgEAAgOAEg");
	this.shape_1.setTransform(1348.575,110.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("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");
	this.shape_2.setTransform(1348.575,110.1);

	this.chKingH = new lib.chKingH();
	this.chKingH.name = "chKingH";
	this.chKingH.parent = this;
	this.chKingH.setTransform(1337.9,541.3);

	this.chKingV = new lib.chKingV();
	this.chKingV.name = "chKingV";
	this.chKingV.parent = this;
	this.chKingV.setTransform(1337.9,596.7);

	this.chArV = new lib.chArV();
	this.chArV.name = "chArV";
	this.chArV.parent = this;
	this.chArV.setTransform(1337.9,460.55);

	this.chArA = new lib.chArA();
	this.chArA.name = "chArA";
	this.chArA.parent = this;
	this.chArA.setTransform(1337.9,405.15);

	this.btnStep = new lib.btnStep();
	this.btnStep.name = "btnStep";
	this.btnStep.parent = this;
	this.btnStep.setTransform(1475.7,693.35);
	new cjs.ButtonHelper(this.btnStep, 0, 1, 2, false, new lib.btnStep(), 3);

	this.btnPlayStop = new lib.btnPlayStop();
	this.btnPlayStop.name = "btnPlayStop";
	this.btnPlayStop.parent = this;
	this.btnPlayStop.setTransform(1320.3,693.35);
	new cjs.ButtonHelper(this.btnPlayStop, 0, 1, 2, false, new lib.btnPlayStop(), 3);

	this.slDT = new lib.slDT();
	this.slDT.name = "slDT";
	this.slDT.parent = this;
	this.slDT.setTransform(1327.95,799.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.slDT},{t:this.btnPlayStop},{t:this.btnStep},{t:this.chArA},{t:this.chArV},{t:this.chKingV},{t:this.chKingH},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// drawBmp
	this.drawBmp = new lib.drawBmp();
	this.drawBmp.name = "drawBmp";
	this.drawBmp.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.drawBmp).wait(1));

	// bg
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag4BWQAAgHACgHQAFgMAJgLQAKgLASgPQAbgXAKgNQAKgNAAgMQAAgNgJgIQgJgJgPAAQgOAAgJAJQgJAJAAARIgWgDQACgYAPgMQAOgNAYAAQAZAAAOANQAOAOAAAUQAAALgEAKQgEAKgKAKQgKALgWATQgSAQgGAGQgFAFgEAGIBUAAIAAAUg");
	this.shape_3.setTransform(251.8708,876.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag4BWQAAgHACgHQAFgMAJgLQAKgLASgPQAbgXAKgNQAKgNAAgMQAAgNgJgIQgJgJgPAAQgOAAgJAJQgJAJAAARIgWgDQACgYAPgMQAOgNAYAAQAZAAAOANQAOAOAAAUQAAALgEAKQgEAKgKAKQgKALgWATQgSAQgGAGQgFAFgEAGIBUAAIAAAUg");
	this.shape_4.setTransform(238.5208,876.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmBGQgRgWAAgwQAAgdAHgTQAGgTAMgKQAMgKASAAQAOAAAKAGQAKAFAIALQAGAKAEAPQAEAPAAAZQAAAegGATQgGASgMALQgNAKgTAAQgYAAgOgSgAgWg5QgLAQAAApQAAAqAKAOQAJAOAOAAQAOAAAKgOQALgOgBgqQABgpgLgOQgKgOgOAAQgOAAgIAMg");
	this.shape_5.setTransform(225.35,876.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag4BWQAAgHACgHQAFgMAJgLQAKgLASgPQAbgXAKgNQAKgNAAgMQAAgNgJgIQgJgJgPAAQgOAAgJAJQgJAJAAARIgWgDQACgYAPgMQAOgNAYAAQAZAAAOANQAOAOAAAUQAAALgEAKQgEAKgKAKQgKALgWATQgSAQgGAGQgFAFgEAGIBUAAIAAAUg");
	this.shape_6.setTransform(211.8208,876.525);

	this.bg = new lib.bg();
	this.bg.name = "bg";
	this.bg.parent = this;

	this.textTT = new cjs.Text("100", "26px 'Microsoft JhengHei'", "#FFFFFF");
	this.textTT.name = "textTT";
	this.textTT.lineHeight = 37;
	this.textTT.lineWidth = 100;
	this.textTT.parent = this;
	this.textTT.setTransform(1425.9,333.45);

	this.textLambda = new cjs.Text("100", "26px 'Microsoft JhengHei'", "#FFFFFF");
	this.textLambda.name = "textLambda";
	this.textLambda.lineHeight = 37;
	this.textLambda.lineWidth = 100;
	this.textLambda.parent = this;
	this.textLambda.setTransform(1425.9,232.05);

	this.textAA = new cjs.Text("100", "26px 'Microsoft JhengHei'", "#FFFFFF");
	this.textAA.name = "textAA";
	this.textAA.lineHeight = 37;
	this.textAA.lineWidth = 100;
	this.textAA.parent = this;
	this.textAA.setTransform(1425.9,132.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAABpQAQgUAHgaQAHgaAAgvIAAheIBOAAIAADMQAAAIgGAFQgGAEgSAAIgOAAIgFgPIAXACQANAAAAgHIAAg+Ig2AAQgEAvgZAkgAAqARIA1AAIAAgwIg0AAQAAAWgBAagAArgtIA0AAIAAgxIg0AAgAhnBnQAYgWAPgZIALAIQgPAZgYAXgAgiBCIAJgJQAOAPALARIgMAIQgIgQgOgPgAhrAwIAAgNIAaAAIAAhqIgWAAIAAgNIAWAAIAAgdIAOAAIAAAdIAxAAIAAgdIAOAAIAAAdIAWAAIAAANIgWAAIAABqIATAAIAAANgAhDAjIAxAAIAAgcIgxAAgAhDgFIAxAAIAAgbIgxAAgAhDgtIAxAAIAAgaIgxAAg");
	this.shape_7.setTransform(1212.475,351.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhzBoQAkggANgzIgnAAIAAgMQAUgYASgcIgtAAIAAgMIA+AAIAAAMQgTAbgUAZIAlAAIAAAMQgGAZgMAXQAOAOATAGQATAHAXAAIBvABIgFANIhngBQgcgBgVgHQgVgIgOgNQgOATgQAPgAgwBIQAQgoAAg/IAAhMICFAAIAACkQAAALgFAFQgFAGgRAAIgPgBIgGgNQAdgBADgBQADgCAAgFIAAhNIhrAAQAAA+gRAmgAApghIAvAAIAAgaIgvAAgAgSghIAuAAIAAgaIguAAgAAphHIAvAAIAAgYIgvAAgAgShHIAuAAIAAgYIguAAgAAAAxIAAg0IBDAAIAAA0gAAMAkIAqAAIAAgbIgqAAgAhphoIAJgJQAYATANASIgKAJQgPgVgVgQg");
	this.shape_8.setTransform(1187.025,351.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAfBRQgfgSgQgkIAMgFQANAaARANQAbgOAbgYIAKAIQgSATgiAUQAgASAqAJIgIAMQgqgKgfgSgAhSBgQAFgCAAgEIAAhQIgjAAIAAgLIApAAIAAhrICpAAIAAAMIibAAIAAAXICNAAIAAANIiNAAIAAAXICNAAIAAAMIiNAAIAAAYICqAAIAAALIixAAIAABRQAagHAhgNIADANQgoAPgjAKg");
	this.shape_9.setTransform(1213.025,250.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAmBMQgVAUgtATIgIgMQApgQAXgTQgcgagQgxIgJAAQgBBCgbA3IgNgIQAcg0AAhKIAAhEIA+AAIAAgZIANAAIAAAZIBJAAQgCAagLAdIgOgEQAIgVADgQIg5AAIAAA2IA2AAIAAANQgTAwgZAaQAbAVApANIgGAOQgvgTgYgUgAAlA6QAXgYAQgpIhOAAQANArAaAWgAgYgUIAwAAIAAg2IgwAAgAhyBnQAZgqATgtIALAIQgUAxgYAmgAhvgmIAJgKQAZAQAUASIgKAKQgVgUgXgOgAhphoIAJgKQAaARATASIgKAKQgUgTgYgQg");
	this.shape_10.setTransform(1186.95,250);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABYByIAAgQIhbAAIAAAQIgNAAIAAhyIB1AAIAABygAAwBWIAoAAIAAgfIgoAAgAgDBWIAlAAIAAgfIglAAgAAwAqIAoAAIAAgeIgoAAgAgDAqIAlAAIAAgeIglAAgAhNByIAAirIgTAAIAAB7IgMAAIAAiJIAfAAIAAgpIANAAIAAApIAfAAIAAB1QAAARgWgCIgFgOIAJAAQAGAAAAgFIAAhjIgTAAIAACrgAgHgTIAAg2IBgAAIAAA2gAAGggIBGAAIAAgdIhGAAgAgcheIAAgNICJAAIAAANg");
	this.shape_11.setTransform(1213.375,150);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAqAIIAMgDQAGAVAIARQANgJARgWIAJAKQgOARgTAPQAKAVAfAdIgLAKQgwgsgOg+gAg2BpQAYgqAAhWIAAhVICIAAIAAANIh7AAIAAAeIBxAAIAAANIhxAAIAAAiICAAAIAAANIhgAAIAABhQARgHAVgMIAAAOQgaAQgYAJIgEgOQACgEAAgFIAAheIgSAAQgFBOgUAogAhmBwIgFgNIAVAAQAIAAAAgHIAAhIIggAMIgEgMIAkgNIAAg9IghAAIAAgNIAhAAIAAguIANAAIAAAuIAaAAIAAANIgaAAIAAA2IAYgJIAEALIgcAMIAABPQAAASgUABIgJABIgIgBg");
	this.shape_12.setTransform(1187.125,150.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.textAA},{t:this.textLambda},{t:this.textTT},{t:this.bg},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(799.5,297.4,801,876.1);
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