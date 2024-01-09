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


(lib.checker2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhGBHQgdgeAAgpQAAgoAdgeQAdgdApAAQAqAAAcAdQAeAeAAAoQAAApgeAeQgcAdgqAAQgpAAgdgdg");
	this.shape.setTransform(-0.0746,0.065,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.checker2, new cjs.Rectangle(-11,-10.9,22,22), null);


(lib.checker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(8,1,1).p("AiLgIIA4AAIAfCFIDAj5");
	this.shape.setTransform(2.25,-4.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.checker, new cjs.Rectangle(-15.7,-20.7,36,33), null);


(lib.sMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(3,1,1).p("AH0AAIgyCWIhkkrIhkErIhkkrIhkErIhjkrIhkErIhkkrIhkErIhkkrIgyCV");
	this.shape.setTransform(50,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.sMC, new cjs.Rectangle(-1.5,-16.5,103,33), null);


(lib.man02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FFFF").ss(5,1,1).p("AB4lyQgYAGgbAAQhVAAg9g9Qg9g9AAhWQAAhWA9g9QA9g9BVAAQBWAAA9A9QA9A9AABWQAABWg9A9QgqAqg2ANIASBuAClhdIAAF0InxEuIGFDIAClhdICohXIjDhQIAbCnIhwA5AClEXIlHEuIGFDI");
	this.shape.setTransform(-6.9,-79.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AiSCTQg9g9AAhWQAAhVA9g9QA9g9BVAAQBWAAA9A9QA9A9AABVQAABWg9A9QgqAqg2ANQgYAGgbAAQhVAAg9g9g");
	this.shape_1.setTransform(0,-137.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFF00").ss(5,1,1).p("AkrAAIJXAA");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.man02, new cjs.Rectangle(-42.7,-160.5,75.2,163), null);


(lib.man01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FFFF").ss(5,1,1).p("AAXomQgXAGgbAAQhWAAg9g9Qg9g9AAhWQAAhWA9g9QA9g9BWAAQBVAAA9A9QA9A9AABWQAABWg9A9QgqAqg2ANIASBuIAbCnICohXIjDhQABEkRIAAHiIjtEaICCHWABEDRIh1EaICBHWABEkRIhvA5");
	this.shape.setTransform(2.8,-97.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AiSCTQg9g9AAhWQAAhVA9g9QA9g9BVAAQBWAAA9A9QA9A9AABVQAABWg9A9QgqAqg2ANQgYAGgbAAQhVAAg9g9g");
	this.shape_1.setTransform(0,-173.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFF00").ss(5,1,1).p("AkrAAIJXAA");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.man01, new cjs.Rectangle(-32.5,-196.5,65,199), null);


(lib.btnStep = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkspYIJZJYIpZJZg");
	this.shape.setTransform(-17.5308,-0.0105,0.5657,0.2912);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABBCvIAAldIBuAAIAAFdgAiuCvIAAldIBvAAIAAFdg");
	this.shape_1.setTransform(17.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FFFF").ss(3,1,1).p("AnzkrIPnAAQBkAAAABkIAAGPQAABkhkAAIvnAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#0066FF"],[0,1],0,30,0,-29.9).s().p("AnzEsQhkAAAAhkIAAmPQAAhkBkAAIPnAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000066","#00FFFF"],[0,1],0,30,0,-29.9).s().p("AnzEsQhkAAAAhkIAAmPQAAhkBkAAIPnAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF00FF").ss(3,1,1).p("AnzkrIPnAAQBkAAAABkIAAGPQAABkhkAAIvnAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF00FF").s().p("AnzEsQhkAAAAhkIAAmPQAAhkBkAAIPnAAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2,p:{rotation:0}}]}).to({state:[{t:this.shape_4,p:{rotation:0}},{t:this.shape_2,p:{rotation:0}}]},1).to({state:[{t:this.shape_4,p:{rotation:180}},{t:this.shape_2,p:{rotation:180}}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-31.5,123,63);


(lib.btnPlayStop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AD/rjIn9XH");
	this.shape.setTransform(-0.0424,-0.0303,0.2941,0.2027);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkspYIJZJYIpZJZg");
	this.shape_1.setTransform(-28.1308,-0.0105,0.5657,0.2912);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AmeGfIAAs9IM9AAIAAM9g");
	this.shape_2.setTransform(29.9891,-0.02,0.4217,0.4217);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00FFFF").ss(3,1,1).p("AnzkrIPnAAQBkAAAABkIAAGPQAABkhkAAIvnAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000066","#0066FF"],[0,1],0,30,0,-29.9).s().p("AnzEsQhkAAAAhkIAAmPQAAhkBkAAIPnAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000066","#00FFFF"],[0,1],0,30,0,-29.9).s().p("AnzEsQhkAAAAhkIAAmPQAAhkBkAAIPnAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF00FF").ss(3,1,1).p("AnzkrIPnAAQBkAAAABkIAAGPQAABkhkAAIvnAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF00FF").s().p("AnzEsQhkAAAAhkIAAmPQAAhkBkAAIPnAAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3,p:{rotation:0}}]}).to({state:[{t:this.shape_5,p:{rotation:0}},{t:this.shape_3,p:{rotation:0}}]},1).to({state:[{t:this.shape_5,p:{rotation:180}},{t:this.shape_3,p:{rotation:180}}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-31.5,123,63);


(lib.cross = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FFFF").ss(3,1,1).p("AAAAAIAAD6AD6AAIj6AAIj5AAAAAj5IAAD5");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cross, new cjs.Rectangle(-26.5,-26.5,53,53), null);


(lib.emp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("AAAAAIAAAoAAoAAIgoAAIgnAAAAAgnIAAAn");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.emp, new cjs.Rectangle(-5,-5,10,10), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// grid
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("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");
	this.shape.setTransform(105.725,79.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFF00").ss(5,1,1).p("EhV7g+fMCr3AAAMAAAB8/Mir3AAAg");
	this.shape_1.setTransform(600,450);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFF00").ss(5,1,1).p("EAAAhGTMAAACMn");
	this.shape_2.setTransform(1200,450.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ADmEDQgQgaAAguQAAg0ARgaQARgbAgAAQA9gBAABmQAAAwgRAbQgRAbggAAQgdAAgQgagADsC6QAABRApAAQAqAAABhSQgBhWgpABQgqgBAABXgABPEDQgPgagBguQAAg0ARgaQASgbAgAAQA8gBABBmQgBAwgQAbQgRAbggAAQgeAAgQgagABVC6QAABRAqAAQAqAAAAhSQAAhWgpABQgrgBAABXgAhLEWIAAgVQASAKASAAQAaAAAPgWQAOgWAAgoIAAAAQgNAZgfAAQgZAAgQgRQgQgSAAgaQAAgcASgSQAQgUAdABQAcAAAQAXQAQAXAAAsQAAA1gVAeQgTAegmAAQgUAAgPgHgAg1BxQgKANAAASQAAAVAKAMQALAMAUAAQAQAAAKgLQALgLAAgQQAAgWgLgPQgKgOgSAAQgRAAgMANgAkUEaIAAhbIhnAAIAABbIgVAAIAAjFIAVAAIAABXIBnAAIAAhXIAWAAIAADFgAE4hpQgPgaAAguQAAg1ARgaQARgbAgAAQA9AAAABlQAAAxgQAbQgSAbggAAQgeAAgQgagAE/iyQgBBRAqAAQAqgBAAhSQABhVgpAAQgsAAABBXgACihpQgPgaAAguQAAg1AQgaQASgbAgAAQA8AAABBlQAAAxgRAbQgRAbggAAQgeAAgQgagACoiyQAABRAqAAQAqgBAAhSQAAhVgpAAQgrAAAABXgAAPhnQgPgYAAgqQAAgyAUggQAVggAmAAQAUAAANAGIAAAUQgQgIgRAAQgaAAgRAYQgPAYAAAoIABAAQANgdAgAAQAaAAAPARQAPARAAAbQAAAcgRATQgRASgbABQgfAAgQgYgAAiiwQgMAMABAQQAAAWALAOQALAPASAAQARAAALgOQALgMAAgTQAAgVgLgMQgKgMgTAAQgQgBgMAMgAiNhTIAAgTIAtAAIAAiaIgvANIAAgUIBEgVIAAC2IAsAAIAAATgAj7hTIgoiRQgDgKgBgKIAAAAQgBAKgDAKIgpCRIgZAAIg6jFIAYAAIArCYQACAKABAKIABAAQABgHADgNIAsiYIAVAAIApCZQADAIABALIABAAQAAgIADgLIApiZIAYAAIg4DFg");
	this.shape_3.setTransform(1551.5,862.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ACsBMQgPgZAAgvQAAgzARgaQARgbAgAAQA9AAAABkQAAAxgRAaQgRAbggAAQgeAAgQgagACyADQAABRAqAAQAqAAAAhSQAAhUgpAAQgrAAAABVgAAWBMQgQgZAAgvQAAgzARgaQARgbAgAAQA9AAAABkQAAAxgQAaQgRAbggAAQgeAAgQgagAAcADQAABRAqAAQAqAAAAhSQAAhUgpAAQgrAAAABVgAiFBeIAAgXQAUANAVAAQAVAAANgMQANgMAAgUQAAgUgNgLQgNgKgZAAIgfABIAAhhIBfAAIAAATIhKAAIAAA7IAQAAQAfAAASAPQASAPAAAcQAAAdgUARQgTARgfAAQgbAAgNgIgAkaBjIAAgTIAtAAIAAiaIguAOIAAgUIBDgVIAAC1IAtAAIAAATg");
	this.shape_4.setTransform(1528.675,22.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ACsBMQgPgZAAgvQAAgzARgaQARgbAgAAQA9AAAABkQAAAxgRAaQgRAbggAAQgeAAgQgagACyADQAABRAqAAQAqAAAAhSQAAhUgpAAQgrAAAABVgAAWBMQgQgZAAgvQAAgzARgaQARgbAgAAQA9AAAABkQAAAxgQAaQgRAbggAAQgeAAgQgagAAcADQAABRAqAAQAqAAAAhSQAAhUgpAAQgrAAAABVgAiABMQgPgZAAgvQAAgzARgaQARgbAgAAQA9AAAABkQAAAxgRAaQgRAbggAAQgeAAgQgagAh6ADQAABRAqAAQAqAAAAhSQAAhUgpAAQgrAAAABVgAkaBjIAAgTIAtAAIAAiaIguAOIAAgUIBDgVIAAC1IAtAAIAAATg");
	this.shape_5.setTransform(1034.525,22.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABhBMQgPgaAAguQAAgzARgbQARgbAgAAQA9AAAABlQAAAwgRAbQgRAbggAAQgeAAgQgagABnADQAABRAqAAQAqAAAAhSQAAhVgpAAQgrAAAABWgAg0BMQgQgaAAguQAAgzARgbQARgbAgAAQA8AAAABlQAAAwgQAbQgRAbgfAAQgeAAgQgagAguADQAABRAqAAQApAAAAhSQAAhVgoAAQgrAAAABWgAjQBdIAAgXQAUAOAVAAQAVAAANgMQANgMAAgUQAAgUgNgLQgNgKgZAAIgfABIAAhhIBfAAIAAATIhKAAIAAA7IAQgBQAfAAASAQQASAOAAAcQAAAegUARQgTARgfAAQgbAAgNgJg");
	this.shape_6.setTransform(529.425,20.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvBMQgPgaAAguQAAgzAQgbQASgbAfAAQA8AAABBlQAAAwgRAbQgRAbgfAAQgeAAgQgagAgpADQAABRApAAQAqAAAAhSQAAhVgpAAQgqAAAABWg");
	this.shape_7.setTransform(9.55,20.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABhBMQgPgaAAguQAAgzARgbQARgbAgAAQA9AAAABlQAAAwgRAbQgRAbggAAQgeAAgQgagABnADQAABRAqAAQAqAAAAhSQAAhVgpAAQgrAAAABWgAg0BMQgQgaAAguQAAgzARgbQARgbAgAAQA8AAAABlQAAAwgQAbQgRAbgfAAQgeAAgQgagAguADQAABRAqAAQApAAAAhSQAAhVgoAAQgrAAAABWgAjQBdIAAgXQAUAOAVAAQAVAAANgMQANgMAAgUQAAgUgNgLQgNgKgZAAIgfABIAAhhIBfAAIAAATIhKAAIAAA7IAQgBQAfAAASAQQASAOAAAcQAAAegUARQgTARgfAAQgbAAgNgJg");
	this.shape_8.setTransform(27.075,518.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(255,255,255,0.498)").ss(1,1,1).p("EBtYhGTIAAPoIAAPoIAAPoIvoAAIAAPoIAAPnIvoAAIAAPoIAAPoIAAPoIAAPoIvoAAIvoAAEBtYhGTIPoAAIAAPoIvoAAIvoAAIvoAAIAAPoIAAPoIAAPoIAAPnIvoAAIAAPoIAAPoIvoAAIAAPoIAAPoIvoAAIvoAAIvoAAEBOIhGTIAAPoIvoAAIAAPoIAAPoIvoAAIAAPoIAAPnIvoAAIAAPoIAAPoIvoAAIAAPoIAAPoEBOIhGTIPoAAIAAPoIAAPoIAAPoIvoAAIvoAAIAAPoIAAPnIvoAAIAAPoIAAPoIvoAAIAAPoIAAPoEBdwgnDIvoAAIvoAAIvoAAIAAPoIvoAAIAAPoIAAPnIvoAAIAAPoIAAPoIvoAAIAAPoIAAPoIvnAAIvoAAEB9AgnDIAAPoIvoAAIAAPoIAAPnIAAPoIAAPoIvoAAIAAPoIAAPoIvoAAEB9AgnDIvoAAIvoAAEB9Ag2rIAAPoEBdwhGTIPoAAEB9AgHzIAAPnIvoAAIvoAAIAAPoIAAPoIvoAAIvoAAIAAPoIAAPoEB9AgHzIvoAAIvoAAIvoAAIvoAAIvoAAIvoAAIvoAAIAAPnIvoAAIAAPoIAAPoIvnAAIAAPoIAAPoEBdwAXcIvoAAIvoAAIvoAAIvoAAIvoAAIvoAAIvnAAIAAPoIvoAAIAAPoIAAPoIvoAAIvoAAIvoAAEB9AAXcIAAPoIvoAAIAAPoIAAPoIvoAAEB9AAXcIvoAAIvoAAEB9AAH0IAAPoEB9AgXbIAAPoEB9AA2sIAAPoIvoAAEB9AA2sIvoAAIvoAAIvoAAIvoAAIvoAAIvoAAIvoAAIvoAAIvnAAIvoAAIvoAAIAAPoEB9AAnEIAAPoEA+ghGTIAAPoIvoAAIAAPoIvoAAIAAPoIvoAAIAAPoIvoAAIAAPnIvnAAIAAPoIvoAAIAAPoIvoAAIvoAAIvoAAIAAPoIAAPoIvoAAIvoAAEAfQhGTIAAPoIAAPoIvoAAIAAPoIvoAAIAAPoIvnAAIAAPnIvoAAIAAPoIvoAAIAAPoIAAPoIvoAAIAAPoEAfQhGTIPoAAIAAPoIvoAAIvoAAIAAPoIvoAAIAAPoIvnAAIAAPoIvoAAIAAPnIvoAAIAAPoIvoAAIAAPoIAAPoIvoAAIvoAAIAAPoEAu4hGTIPoAAIPoAAEAPohGTIAAPoIvoAAIvnAAIAAPoIAAPoIvoAAIAAPoIvoAAIAAPnIvoAAIAAPoIvoAAIAAPoIvoAAIvoAAIvoAAIAAvoIAAvoIAAvnIAAvoIAAvoIAAvoIAAvoIPoAAIAAPoIvoAAEgPnhGTIAAPoIvoAAIvoAAIAAPoIAAPoIvoAAIAAPoIAAPnIvoAAIAAPoIvoAAIAAPoIAAPoIvoAAIAAPoIvoAAIAAvoIAAvoEAAAhGTIAAPoIAAPoIvnAAIvoAAIAAPoIvoAAIAAPoIvoAAIvoAAIAAPnIvoAAIAAPoIvoAAIAAPoIAAPoIvoAAEgPnhGTIPnAAIPoAAIPoAAEgu3hGTIAAPoIvoAAIAAPoIAAPoIvoAAIAAPoIvoAAIAAPnIvoAAIvoAAEgfPhGTIAAPoIAAPoIvoAAIvoAAIvoAAIAAPoIvoAAIvoAAIvoAAEgu3hGTIPoAAIPoAAEg+fhGTIAAPoIvoAAIAAPoIvoAAIAAPoIAAPoIvoAAIAAPnIAAPoIvoAAEg+fhGTIPoAAEhdvhGTIAAPoIAAPoIvoAAIAAPoIAAPoIvoAAEhdvhGTIPoAAIAAPoIvoAAIvoAAIAAPoIvoAAEhtXhGTIPoAAEhOHhGTIPoAA");
	this.shape_9.setTransform(800,450);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("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");
	this.shape_10.setTransform(101.2,875.708);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#003300","#006600"],[0,1],0,447,0,-446.9).s().p("Eh8/BGUMAAAiMnMD5/AAAMAAACMng");
	this.shape_11.setTransform(800,450);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-1,-2.5,1602,905.1), null);


(lib.bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AvnAZIAAgxIfPAAIAAAxg");
	this.shape.setTransform(100,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bar, new cjs.Rectangle(0,-2.5,200,5), null);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("ABnBWIpaAAIAAisIJaAAIAAg/IGNCVImNCWg");
	this.shape.setTransform(50,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("ABnBWIpaAAIAAisIJaAAIAAg/IGNCVImNCWg");
	this.shape_1.setTransform(50,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-15,100,30);


(lib.spring = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//老師寫的spring，不要修改結構
		//用 spring.help() 可以看到說明
		var sp=this;
		sp.NN=5;//圈數
		sp.lw=3;//線寬
		sp.wid=30;//全寬
		sp.col='#ffff00';//顏色
		sp.x0=0;
		sp.y0=0;
		sp.dx=100;
		sp.dy=0;
		//setSpring
		sp.setSpring = function(x0 , y0 , dx , dy){
			//var
			sp.x0=x0;
			sp.y0=y0;
			sp.dx=dx;
			sp.dy=dy;
			var dd=Math.sqrt(sp.dx*sp.dx+sp.dy*sp.dy);
			//draw
			sp.sMC.shape.x=sp.sMC.shape.y=0;
			var g=sp.sMC.shape.graphics;
			g.c().ss(sp.lw , 'round' ,'round').s(sp.col).mt(0,0);
			for(var i=0;i<=2*sp.NN;i++){
				var tx=dd/(sp.NN*4)+i*dd/(sp.NN*2);
				var ty=sp.wid/2*(i%2===1?-1:1);
				if(tx>dd){tx=dd;ty=0;}
				g.lt(tx,ty);
			}
			//position
			sp.x=sp.x0;
			sp.y=sp.y0;
			sp.sMC.rotation=Math.atan2(sp.dy,sp.dx)*180/Math.PI;
		}
		//外部變數 turns
		Object.defineProperty(sp, 'turns', {
										    get: function() {
													return sp.NN;
											    },
											set: function(_val) {
											        sp.NN=_val;
													sp.setSpring(sp.x0 , sp.y0 , sp.dx , sp.dy);
												}
									});
		//外部變數 color
		Object.defineProperty(sp, 'color', {
										    get: function() {
													return sp.col;
											    },
											set: function(_val) {
											        sp.col=_val;
													sp.setSpring(sp.x0 , sp.y0 , sp.dx , sp.dy);
												}
									});
		//外部變數 lineWidth
		Object.defineProperty(sp, 'lineWidth', {
										    get: function() {
													return sp.lw;
											    },
											set: function(_val) {
											        sp.lw=_val;
													sp.setSpring(sp.x0 , sp.y0 , sp.dx , sp.dy);
												}
									});
		
		
		//help() 說明
		sp.help = function(){
						var str="老師寫的spring，不要修改程式，外部可用方法：\n 設定彈簧 setSpring(原點位置x0, 原點位置y0, x長度 , y長度)";
						var str2="\n 外部可用變數： \n turns 彈簧圈數，預設5 \n color 顏色，預設'#ffff00' \n lineWidth 線寬，預設3 "
						return str+str2;
					}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.sMC = new lib.sMC();
	this.sMC.name = "sMC";
	this.sMC.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.sMC).wait(1));

}).prototype = getMCSymbolPrototype(lib.spring, new cjs.Rectangle(-1.5,-16.5,103,33), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAQBrQArgkAIgwIgrAAIAAgNIAqg0IgvAAIAAgNIA/AAIAAANIgqA0IApAAIAAANQgFAbgMATQAaAbA1AAIBnAAIgDANIhdAAQhAAAgcgdQgOAUgRAQgAjyBpQAMgXAIgZQAGgaACgeIACg9IgdAAIAAgNIAyAAQgEgPgLgUIANgFQAIAPAIAZIAsAAIAAANIhCAAIgBAmIA0AAQAAAugCAjQgCAjgDAGQgEAGgFADQgGADgQAAIgMAAIgFgOIASABQAMAAADgCQADgDABgEIAEgnQABgkAAgYIgnAAQgCBFgdA2gAGAByIAAgyIhqAAIAAgNIBqAAIAAgYIAOAAIAAAYIBqAAIAAANIhqAAIAAAygAhPBHQgUAWghAVIgJgKQAkgWARgWQgPgagJgiIAOgCQAGAcANAWQAYgmADhFIgtAAQgKAlgVAgIgLgIQAeguALhHIAMAEQgDAYgFAPIBOAAIAAANIgWAAQgFBLgcAsQAUAZAkARIgIAMQgkgSgUgZgAk1ByIAAgMIhbAAIAAAMIgOAAIAAhjIA0AAIAAgrQgdAcgjAOIgIgMQAogPAWgWIg3AAIAAgOIBBAAIAAgpQgWACgiAAIgDgOQAwAAAcgCQAbgCAZgIIAGAMQgZAHgkAEIAAAqIBHAAIAAAOIhHAAIAAAEQAtARAcAQIgHALQgcgRgmgOIAAAhIA1AAIAABjgAlcBZIAnAAIAAgZIgnAAgAmQBZIAmAAIAAgZIgmAAgAlcAzIAnAAIAAgXIgnAAgAmQAzIAmAAIAAgXIgmAAgAnuBxIgFgOIAUAAQAIAAAAgGIAAhOIgcAQIgEgNQALgFAVgNIAAg2IgfAAIAAgMIAfAAIAAgvIANAAIAAAvIAXAAIAAAMIgXAAIAAAuIATgNIABAOIgUAOIAABWQAAAJgGAFQgEAGgNAAgACjBWIAAhBQgYAegnAYIgJgLQAqgZAWgeIgyAAIAAg6IA6AAIAAgXIhCAAIAAgOIBCAAIAAgaIANAAIAAAaIBCAAIAAAOIhCAAIAAAXIA5AAIAAA6Ig5AAIAAAFQAkATAfAfIgIALQgjgigYgMIAAA5gACwgDIArAAIAAggIgrAAgAB3gDIAsAAIAAggIgsAAgAEbATQAagNAagUIAGANQgbATgYANgAG7gEIAIgKQAfARARARIgJAKQgPgPgggTgAGrANQgmAGgpACIgDgMQAUgLAZgXIgrACIgCgLQAagSAPgYIhjAAIAAgNIBjAAQgHgNgGgIIAPgFIAMAaIBhAAIAAANIhsAAIAJAGQgNATgTAPQARAAAVgDIAOgSIAMAHQgaAjgkAWQAWgBAegFQgEgHgHgHIALgGQARATAJAVIgLAHgAG5giQASgKAVgUIAKAIQgRASgWANgAEig4IAKgKQATANAQARIgKAKQgQgRgTgNgAmbhMIALgGQALAKAGAMIgLAHQgGgLgLgMgAlIg/QAOgMAJgNIALAHQgJAOgOANgAAahlIAJgLQAZAVANASIgKAKQgMgRgZgVg");
	this.shape.setTransform(35.35,-40.875);

	this.valueText = new cjs.Text("0", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(172,-14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.valueText},{t:this.shape}]}).wait(1));

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

}).prototype = getMCSymbolPrototype(lib.slDT, new cjs.Rectangle(-16,-52.4,290,69), null);


(lib.rbWave03 = function(mode,startPosition,loop) {
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AGsBMQgVAUgvATIgIgMQArgQAWgTQgdgagPgxIgKAAQgBBCgbA3IgMgIQAcg0AAhKIAAhEIA+AAIAAgZIAOAAIAAAZIBIAAQgCAagLAdIgNgEQAIgVADgQIg5AAIAAA2IA1AAIAAANQgTAwgYAaQAaAVApANIgGAOQgugTgYgUgAGqA6QAYgYAQgpIhPAAQAOArAZAWgAFtgUIAwAAIAAg2IgwAAgAn4BqQALgSAGgeQAFgfAAgdIAAhqIDOAAIAAAOIhbAAQgFARgGANIBSAAIAABbIg/AAIAABCQAAAIgGAFQgGAHgVAAIgNgBIgGgOIAfAAQADAAACgDQACgDABgEIAAg9IhBAAIAAhbIArAAQAIgNAFgRIhXAAIAABcQAABFgXAvgAmnAOIByAAIAAgaIhyAAgAmngZIByAAIAAgZIhyAAgABKByIgEgPIANABQAJAAADgCQADgCABgDQACgEABgWIADgwIhNAAIAAh+IBfAAIAAANIgkAAIAAAZIAcAAIAAANIgcAAIAAAYIAcAAIAAAMIgcAAIAAAbIAfAAIgCA2QgBAbgCAHQgCAHgFAEQgFAEgIACIgNACgAAqAHIAgAAIAAgbIggAAgAAqggIAgAAIAAgYIggAAgAAqhFIAgAAIAAgZIggAAgAETBnQAZgqASgtIAMAIQgVAxgXAmgAiGBtQgJAAgDgGQgFgGAAgIIAAhpIgWAIIgDgNIAZgIIAAg2IAOAAIAAAxIAogNIAAhBIAOAAIAAA7IA4gTQgBAzgNA6IgMgEQALguABgpIgqAPIAABkIgOAAIAAhfIgoAOIAABuIABADIADADIAQABIAcAAQAsAAAIgCQAGgDADggIAMADQgBAagGAKQgHAJgGABQgGABgjAAIg5gBgAB7BrIAAgMIA2AAIAAhKIgwAAIAAgOIAwAAIAAg8IgzAAIAAgNIA0AAQgFgUgLgYIANgDQANAeADARIAyAAIAAANIg0AAIAAA8IAuAAIAAAOIguAAIAABJIA2AAIAAANgAlNA0IALgLQAcAaARAaIgKAKQgSgdgcgWgAnLBbQAhgaAOgXIAMAGQgRAbgfAbgAAQBdQAFgWACgnIAMACQgBAfgGAegAAsBFQAAgSgDgQIAMgBQACAbAAARIgBANIgLADIABgZgAjyBQQAQgGARgHIAAhmIgfAAIAAgNIAfAAIAAg+IANAAIAAA+IAcAAIAAANIgcAAIAABgIAdgPIACAPQgnAVgjALgAA8AiIAKgDQAGAaABAXIgMAEQABgZgGgZgABNAfIAKgEQAHAWADASIgKADQgEgXgGgQgAEWgmIAJgKQAZAQAUASIgKAKQgVgUgXgOgAEchoIAJgKQAaARATASIgKAKQgUgTgYgQg");
	this.shape_2.setTransform(76.1,-0.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbWave03, new cjs.Rectangle(-23.8,-18,165.8,36), null);


(lib.rbWave02 = function(mode,startPosition,loop) {
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AGlBMQgVAVguASIgJgMQArgPAWgUQgdgagPgwIgJAAQgBBCgcA2IgMgIQAcg0AAhKIAAhDIA/AAIAAgaIANAAIAAAaIBIAAQgCAagKAcIgOgDQAIgWADgQIg5AAIAAA2IA2AAIAAAOQgUAvgYAaQAbAWApAMIgHAOQgugSgYgVgAGkA6QAXgYAQgoIhPAAQAOAqAaAWgAFmgUIAxAAIAAg2IgxAAgAnxByIAAjAIAzAAQAOgSAHgSIAOADQgHAQgNARICIAAIAACrQAAAVgVAAIglAAIgFgOIAsAAQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAgBIAAifIivAAIAACzgACwBaIAIgLQAeAKAXAMIgIALQgbgOgagIgABMBjQAkgJATgLIAJAKQgVAMgkALgAAtBwIAAh9QgMAfgRAYIgIgKQAYgnAMgoIggAAIAAgNIAhAAIAAg1IANAAIAAA1IAZAAIAAANIgZAAIAAAFQAOAQAOAbIgJALQgKgVgJgOIAACHgAEMBnQAZgpASgtIAMAHQgUAxgYAmgAjcBrIAAgNIBhAAIAAhPIg2AAIAAgOICBAAIAAAOIg9AAIAABPIBVAAIAAANgAj7BGQA0gxAUhMIhCAAIAAgNIBGAAQAGgbACgTIAOABQgFAjgDAKICGAAIAAANIiJAAQgWBRg3A4gABdBHIAAhLICDAAIAABLgAClA7IAuAAIAAgUIguAAgABqA7IAuAAIAAgUIguAAgAClAaIAuAAIAAgSIguAAgABqAaIAuAAIAAgSIguAAgAm9BAIAAhcIBhAAIAABcgAmvAzIBGAAIAAhBIhGAAgAEPglIAJgLQAZAQAUASIgKAKQgVgTgXgOgABTgWIAAgMICZAAIAAAMgABygzIAAgfIgeAAIAAgNIAeAAIAAgRIANAAIAAARIA8AAIAAgRIANAAIAAARIAiAAIAAANIgiAAIAAAfgAB/g/IA8AAIAAgTIg8AAgAEVhoIAJgKQAaARATASIgKAKQgUgTgYgQg");
	this.shape_2.setTransform(76.775,-0.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbWave02, new cjs.Rectangle(-23.8,-18,165.8,36), null);


(lib.rbWave01 = function(mode,startPosition,loop) {
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AGlBMQgVAVguASIgJgMQArgPAWgUQgdgagPgwIgJAAQgBBCgcA2IgMgIQAcg0AAhKIAAhDIA/AAIAAgaIANAAIAAAaIBIAAQgCAagKAcIgOgDQAIgWADgQIg5AAIAAA2IA2AAIAAAOQgUAvgYAaQAbAWApAMIgHAOQgugSgYgVgAGkA6QAXgYAQgoIhPAAQAOAqAaAWgAFmgUIAxAAIAAg2IgxAAgAg8ByIAAgUIhvAAIAAAUIgPAAIAAhmQgdAegaASIgLgLQAfgTAageQAZgcALgfIhYAAIAAgOIBeAAQAHgRAGgYIAOADQgEASgHAUIByAAIAAAOIh3AAQgQAigOATIB/AAIAAB4gAirBPIBvAAIAAhIIhvAAgAnxByIAAjAIAzAAQAOgSAHgSIAOADQgHAQgNARICIAAIAACrQAAAVgVAAIglAAIgFgOIAsAAQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAgBIAAifIivAAIAACzgACwBaIAIgLQAeAKAXAMIgIALQgbgOgagIgABMBjQAkgJATgLIAJAKQgVAMgkALgAAtBwIAAh9QgMAfgRAYIgIgKQAYgnAMgoIggAAIAAgNIAhAAIAAg1IANAAIAAA1IAZAAIAAANIgZAAIAAAFQAOAQAOAbIgJALQgKgVgJgOIAACHgAEMBnQAZgpASgtIAMAHQgUAxgYAmgABdBHIAAhLICDAAIAABLgAClA7IAuAAIAAgUIguAAgABqA7IAuAAIAAgUIguAAgAClAaIAuAAIAAgSIguAAgABqAaIAuAAIAAgSIguAAgAm9BAIAAhcIBhAAIAABcgAmvAzIBGAAIAAhBIhGAAgAEPglIAJgLQAZAQAUASIgKAKQgVgTgXgOgABTgWIAAgMICZAAIAAAMgABygzIAAgfIgeAAIAAgNIAeAAIAAgRIANAAIAAARIA8AAIAAgRIANAAIAAARIAiAAIAAANIgiAAIAAAfgAB/g/IA8AAIAAgTIg8AAgAEVhoIAJgKQAaARATASIgKAKQgUgTgYgQg");
	this.shape_2.setTransform(76.775,-0.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbWave01, new cjs.Rectangle(-23.8,-18,165.8,36), null);


(lib.chVV = function(mode,startPosition,loop) {
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
	this.shape_2.graphics.f("#FFFFFF").s().p("An3BrQArgkAJgxIgsAAIAAgMIAqg0IgvAAIAAgOIA+AAIAAAOIgoA0IAoAAIAAAMQgGAbgLAUQAbAaA0AAIBnAAIgEAOIhcAAQhAgBgcgcQgOAUgRAQgACzByIgFgNIAkAAQADgBACgBQACgDAAgDIAAhpIANAAIAABsQAAALgHAEQgIAEgXAAIgNgBgAhrBaQgoASg5AFIgHgNQA4gEAfgNQgdgTgRgdIgJAAIAAgOICDAAIAAAOQgQAdgdASQAdANA1AHIgJANQg2gJghgQgAhsBLQAegRAOgXIhaAAQAQAaAeAOgABaByIgGgNIAcAAQABAAAAAAQAAAAABAAQAAAAABgBQAAAAABgBQAAgBAAAAQABgBAAAAQAAAAAAgBQAAAAABgBIAAgXIhEAAQgFAXgOATIgMgGQAWgbAAg6IAAgeIBaAAIAABnQAAAHgEAGQgFAGgUgBIgMAAgAA1A7IBBAAIAAgVIhAAAgAA2AZIBAAAIAAgUIhAAAgAF3BnQAjgWAPgSIgdAAIAAh9IAiAAQAGgTACgMIgzAAIAAgMIB0AAIAAAMIgzAAIgJAfIAxAAIAAB9Ig/AAIAIAHQgUAYghAUgAGaAyIBEAAIAAgbIhEAAgAGaALIBEAAIAAgYIhEAAgAGagZIBEAAIAAgZIhEAAgAHBBRIAJgKQAcARASAOIgIALQgXgSgYgOgAj2BlQAcgqAAhOIAAhIIBfAAQgFgLgHgJIAPgDIANAXIBaAAIAAANIi9AAIAABIQAABGgcAugAEWBgIAggHQgHglgLgdIAJgIIgNAAIAAhLIBRAAIAABLIgQAAIAJAGQgEAZgJAfIAegJIAAAOQgvAQgzAMgAFDBVIAKgDQALgeAGglIguAAQAMAlAHAhgAEtACIA2AAIAAgyIg2AAgAlkBWIAAhBQgYAegoAYIgJgLQArgZAWgeIgyAAIAAg6IA6AAIAAgXIhCAAIAAgOIBCAAIAAgaIAOAAIAAAaIBBAAIAAAOIhBAAIAAAXIA3AAIAAA6Ig3AAIAAAFQAjATAfAfIgJALQghgigYgMIAAA5gAlWgDIAqAAIAAggIgqAAgAmQgDIAsAAIAAggIgsAAgACkBQIAAhTIAOAAIAABTgAicAFIAAgpIgoAAIAAgOIAoAAIAAgUIAOAAIAAAUIBCAAIAAgUIAOAAIAAAUIAtAAIAAAOIgtAAIAAApgAiOgHIBCAAIAAgdIhCAAgAAUgYIAAgOIDdAAIAAAOgABAg6IALgHQALAJAHAJIgLAGQgJgJgJgIgACbgxQALgIAIgJIAMAHQgFAIgNAKgAC8hIIAMgFQAIAIAHAMIgLAGQgHgLgJgKgAASg8QAdgcAJgaIANAGQgCAGgEAGIA/AAIAAAMIhHAAQgKAPgRASgABYhKIALgEQAJAIAGAMIgNAFQgFgLgIgKgAB8g+QAcgbAMgZIANAFIgIANIBGAAIAAAMIhOAAQgMARgOAMgAnthmIAJgKQAZAVAMARIgJALQgMgRgZgWgAEYheIAAgMIBfAAIAAAMg");
	this.shape_2.setTransform(76,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chVV, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


(lib.chSpring = function(mode,startPosition,loop) {
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AFCB4QAygFAngQIALALQgpAQgzAHgAC5CEIAAgqIhUAAIAAgPIBUAAIAAgXIg+AAIAAhiICMAAIAABiIg+AAIAAAXIBOAAIAAAPIhOAAIAAAqgADJAmIAuAAIAAgeIguAAgACKAmIAvAAIAAgeIgvAAgADJgFIAuAAIAAgaIguAAgACKgFIAvAAIAAgaIgvAAgAHdBxIAHgMQA6AGAoAMIgIAMQgxgNgwgFgAhNCDIgGgPIAbAAQAEAAADgDQADgCAAgFIAAiEIhYAAIAAhhIBnAAIAADmQAAALgGAHQgHAGgRAAgAh3goIBJAAIAAgcIhJAAgAh3hTIBJAAIAAgZIhJAAgAlbCDIAAgXIhJAAIAAAXIgQAAIAAiIIAmAAIAAh8IAQAAIAAAzIA/AAIAAAPIg/AAIAAA6IAzAAIAACIgAmkBdIBJAAIAAhUIhJAAgApFB9QANgaAGgeIAOAFQgJAkgLAVgAAbCDIgFgPIAgAAQAEAAAFgDQADgEABgGIADgdIADgzIgxAAIAIhOIArAAIAAg1Ig4AAIAAgOIBIAAIAABSIgsAAIgGAwIAvAAQAAAZgDAlQgBAkgFAJQgEAJgIAEQgJADgRAAgAkLCDIAAj+IBqAAIAABhIhaAAIAACdgAj7goIBKAAIAAgcIhKAAgAj7hTIBKAAIAAgZIhKAAgAoWB1QABgWgEgVIAPgCQADAcABAbIgQACIAAgMgAn8BIIAPgDQAHAZADAbIgPADQgBgZgJgbgAncBHIAOgDQAKAXAEAWIgOAFQgFgagJgVgAjQBoIAAhqIB1AAIAABqgAjBBZIBXAAIAAggIhXAAgAjBAqIBXAAIAAgeIhXAAgAFbBcIAAhGIDOAAIAABGgAHKBOIBQAAIAAgQIhQAAgAFrBOIBQAAIAAgQIhQAAgAHKAyIBQAAIAAgQIhQAAgAFrAyIBQAAIAAgQIhQAAgApEA9IAAgOIA7AAIAAgdIgzAAIAAgOIAzAAIAAgZIgxAAIAAhlIBxAAIAABlIgxAAIAAAZIAxAAIAAAOIgxAAIAAAdIA6AAIAAAOgAn6gjIAhAAIAAhKIghAAgAoqgjIAhAAIAAhKIghAAgAFAAIIAAgMIEEAAIAAAMgAGAgSIAAgaIg5AAIAAgNIA5AAIAAgKIAPAAIAAAKIBlAAIAAgKIAPAAIAAAKIA6AAIAAANIg6AAIAAAagAGPgeIBlAAIAAgOIhlAAgAn1gyQAJgXACgWIANAEQgEAagJATgAomhaIAMgFQAIAZADATIgMAEQgDgVgIgWgADNhBIAAg5IBFAAIAAA5gADbhOIAnAAIAAgeIgnAAgABxhBIAAg5IBGAAIAAA5gACBhOIAnAAIAAgeIgnAAgAH9hTIAKgKQALAFAOAKIgKALQgJgIgQgIgAGIhTIAKgKQALAGAMAKIgLAKQgMgLgKgFgAE/hQQAegQAXgjIAPAFIgLAOIBEAAIAAAOIhPAAQgSATgQAIgAG9hUQAZgSATgeIAMAGIgJAOIBSAAIAAAOIhdAAQgMAPgMAIg");
	this.shape_2.setTransform(83.8,0.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chSpring, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


(lib.chEtotal = function(mode,startPosition,loop) {
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AjWB+QANgiAEgjIAPAEQgGAmgMAhgAg8B8QgHgFAAgNIAAhBIAQAAIAABCQAAAFAFACIASABQARgBAFgCQAFgDABgJQACgIABgMIAOAGQgBAOgEAKQgDALgHAEQgHADgUAAQgbAAgIgEgAipA9IAOgDQAIAcABAjIgOADQgBgbgIgkgAh1BzQARgeAGglIAPAEQgKAsgPAagABfB0IAAjhIByAAIAAAWIhZAAIAABOIBTAAIAAAWIhTAAIAABRIBfAAIAAAWgAALA3IANgJQARAiAJAbIgMAJQgKgdgRgggAiJA7IAOgGQAGARAEAUIgOAGQgDgTgHgSgAgoAoIAOgGQAPAVAGATIgMAGQgMgZgLgPgAjVAjQAfgbAbgrQgcAFgWADIgGgPQAdgfAVg5IAOADQgTA0gaAfQAUgDAcgGQAKgRAKgVIANAGQglBMgsApQAbgFAigLQgBgHgGgMIANgGQAKAXAGAYIgNAFIgEgNQgqANgnAHgAhkAaIAAiFIAiAAIAMgXIANAEQgDALgFAIIBNAAIAACFgAhVAMIBhAAIAAhoIhhAAgAg6gDQANgOALgNQgIgIgGgEQgHAJgMAMIgKgJQAHgHAKgNIgOgLIAIgLIAPAKIANgXIAMAGQgFAKgJAPIANALQALgQAIgTIALAFQgGATgNAUIATAXIgIALQgKgNgJgIIgXAag");
	this.shape_2.setTransform(48.55,0.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chEtotal, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


(lib.chEkUs = function(mode,startPosition,loop) {
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AD5BhIAAgXQASANAXAAQAdAAAAgUQAAgJgGgFQgHgGgTgHQgWgJgIgJQgIgKAAgMQAAgSAQgLQAQgLAWAAQASAAAOAGIAAAWQgQgKgTAAQgNAAgIAFQgIAGABAJQgBAIAGAFQAFAFATAIQAYAJAJAJQAHAJAAAOQAAATgPALQgQALgYAAQgVAAgQgJgABCAaIAAh3IAVAAIAAB2QAAA9A0AAQAzAAAAg7IAAh4IAVAAIAAB0QAABThKAAQhHAAAAhQgAh1BmIg/hDIgBAAIAABDIgVAAIAAjPIAVAAIAACDIABAAIA7g/IAdAAIhCBDIBHBIgAlUBmIAAjDIBjAAIAAATIhOAAIAABDIBIAAIAAATIhIAAIAABGIBSAAIAAAUg");
	this.shape_2.setTransform(60.75,-0.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chEkUs, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


(lib.coordMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABhBoIg/hEIgBAAIAABEIgVAAIAAjPIAVAAIAACDIABAAIA7hAIAdAAIhCBEIBHBIgAh+BoIAAjDIBjAAIAAATIhNAAIAABDIBHAAIAAATIhHAAIAABGIBSAAIAAAUg");
	this.shape.setTransform(-22.225,-153.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAtBcIAAgYQATAOAWAAQAeAAAAgVQAAgIgHgGQgGgGgTgHQgXgJgIgJQgHgKAAgMQAAgSAPgLQAQgLAWAAQASAAAOAGIAAAWQgPgKgUAAQgNAAgIAGQgHAFAAAKQAAAHAFAFQAFAFATAIQAYAJAJAKQAIAIAAAOQAAATgQALQgPALgYAAQgWAAgQgIgAiJAVIAAh4IAWAAIAAB2QAAA+A0gBQAyABAAg8IAAh4IAUAAIAAB0QAABThJAAQhHAAAAhPg");
	this.shape_1.setTransform(-24.475,-153);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ADlBtQgOgNAAgVQAAgtA1gHIAxgIQAAgpgiAAQgdAAgXAVIAAgaQAXgQAfAAQA5AAAAA7IAABqIgYAAIAAgZIgBAAQgSAdghAAQgYAAgNgNgAEVApQgUADgJAHQgHAHgBAQQABALAIAIQAJAIAOAAQAUAAAMgOQANgOAAgVIAAgQgAg8BjQgVgWgBgmQAAgoAXgWQAWgYAlAAQAjAAAVAXQAUAWAAAmQAAAngWAXQgWAYgjAAQgjAAgWgXgAgpgJQgPARgBAeQABAcAPASQAOARAZAAQAZAAAOgQQAOgRAAgeQAAgggOgPQgOgRgZAAQgZAAgOARgAB/BLIAAhhIgdAAIAAgVIAdAAIAAgoIAXgIIAAAwIAqAAIAAAVIgqAAIAABcQABAQAFAIQAGAGANABQAKgBAHgFIAAAVQgJAGgPAAQgpgBAAgugAirBLIAAhhIgdAAIAAgVIAdAAIAAgoIAYgIIAAAwIApAAIAAAVIgpAAIAABcQAAAQAGAIQAFAGAOABQAKgBAGgFIAAAVQgJAGgPAAQgpgBAAgugAGHB2IAAjvIAZAAIAADvgAmfB2IAAjiIBzAAIAAAXIhaAAIAABNIBTAAIAAAWIhTAAIAABRIBfAAIAAAXg");
	this.shape_2.setTransform(3.3,-187.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// emp
	this.emp = new lib.emp();
	this.emp.name = "emp";
	this.emp.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.emp).wait(3));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("EBNMAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEBLUAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEBJcAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEBHkAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEBFsAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEBD0AAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEBB8AAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEBAEAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEA+MAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEA8UAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEA6cAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEA4kAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEA2sAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEA00AAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEAy8AAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEAxEAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEAvMAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEAtUAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEArcAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEApkAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEAnsAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEAl0AAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEAj8AAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEAiEAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEAgMAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAeUAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAccAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAakAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAYsAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAW0AKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAU8AKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgATEAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgARMAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAPUAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgANcAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgALkAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAJsAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAH0AKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAF8AKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAEEAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgACMAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAAUAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAhjAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAjbAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAlTAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAnLAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgApDAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAq7AKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAszAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAurAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAwjAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgAybAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgA0TAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgA2LAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgA4DAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgA57AKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgA7zAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgA9rAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgA/jAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEghbAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEgjTAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEglLAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEgnDAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEgo7AAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEgqzAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEgsrAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEgujAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEgwbAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEgyTAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEg0LAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEg2DAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEg37AAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEg5zAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEg7rAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEg9jAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEg/bAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEhBTAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEhDLAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEhFDAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEhG7AAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEhIzAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEhKrAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEhMjAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIA8AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAgEhOHAAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIAoAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAg");
	this.shape_3.setTransform(500,-150);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CCCCCC").ss(3,1,1).p("AAAu1IAAdr");
	this.shape_4.setTransform(0,-74.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CCCCCC").ss(3,1,1).p("EBRQAAAMiifAAA");
	this.shape_5.setTransform(499.95,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.2,-199.9,1059.7,221.5);


(lib.arrowRotation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.arrow = new lib.arrow();
	this.arrow.name = "arrow";
	this.arrow.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.arrow).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrowRotation, new cjs.Rectangle(0,-15,100,30), null);


(lib.box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//老師寫的box，只能修改顏色，不要修改結構
		//用 ball.help() 可以看到說明
		var ba=this;
		ba.arrowRotation1.arrow.visible=false;
		ba.arrowRotation2.arrow.visible=false;
		//setArrow
		ba.setArrow = function(who , arx ,ary){
			var arrR = ba['arrowRotation'+(who||1)];
			arrR.arrow.gotoAndStop((who||1)-1);
			arrR.arrow.visible=true;
			var lenA = Math.sqrt(arx*arx+ary*ary);
			var theta=Math.atan2(ary,arx);
			arrR.arrow.scaleX = lenA/100;
			arrR.rotation = theta*180/Math.PI;
		}
		//changeColor
		ba.changeColor = function(_color){
			ba.shape.graphics.c().f(_color).s().p("AnzH0IAAvnIPnAAIAAPng");
		}
		
		//help() 說明
		ba.help = function(){
						var str="老師寫的ball，可以改顏色，不要修改程式，外部可用方法：\n 設定箭頭 setArrow(編號1或2, x長度, y長度)";
						str+="\n 兩箭頭的名稱分別是 arrowRotation1 與 arrowRotation2";
						str+="\n 把球改成藍色： ball.changeColor('#0000FF')";
						return str;
					}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// arrowRotation2
	this.arrowRotation2 = new lib.arrowRotation();
	this.arrowRotation2.name = "arrowRotation2";
	this.arrowRotation2.parent = this;
	this.arrowRotation2.setTransform(0,0,1,1,-44.9994);

	this.timeline.addTween(cjs.Tween.get(this.arrowRotation2).wait(1));

	// arrowRotation1
	this.arrowRotation1 = new lib.arrowRotation();
	this.arrowRotation1.name = "arrowRotation1";
	this.arrowRotation1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.arrowRotation1).wait(1));

	// ball
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AGWGGQgHgKgCgPIhDn1IhCH1QgCAPgIAKQgIAKgKAAQgKAAgIgKQgIgKgCgPIhDn2IgSCNIgBAGIgvFjIgFARIgFAIIgEAEIgOAGIgOgGIgEgEIgFgIIgFgRIhBn1IhDH1QgCAPgIAKQgIAKgJAAQgKAAgIgKQgIgKgCgPIhDn2IhDH2QgCAPgHAKQgIAKgKAAQgKAAgIgKQgIgKgCgPIhDn2IgTCTQgDARgJALQgKAJgLgEQgMgEgGgPQgHgPACgRIAwlkQACgPAIgKQAIgKAJAAQAKAAAIAKQAIAKACAPIBDH2IBCn2QACgPAIgKQAIgKAKAAQAKAAAIAKQAIAKACAPIBDH2IASiOIABgEIABgLIACgLIAslOQABgGACgGIADgGIAEgHQAEgFAEgDIAKgCQAFAAAEACQAFADAEAFIADAFIADAFIAEAPIBBH2IBDn2QACgPAHgKQAIgKAKAAQAKAAAIAKQAIAKACAPIBDH2IBCn2QACgPAIgKQAIgKAKAAQAKAAAIAKQAIAKACAPIBCH2IAUiSQACgSAKgKQAKgKAMAEQALADAGAQQAHAPgDASIgvFjQgCAPgIAKQgIAKgKAAQgKAAgIgKg");
	this.shape.setTransform(0.0112,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.box, new cjs.Rectangle(-50,-81.3,150,121.3), null);


(lib.ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//老師寫的ball，只能修改顏色，不要修改結構
		//用 ball.help() 可以看到說明
		var ba=this;
		ba.arrowRotation1.arrow.visible=false;
		ba.arrowRotation2.arrow.visible=false;
		//setArrow
		ba.setArrow = function(who , arx ,ary){
			var arrR = ba['arrowRotation'+(who||1)];
			arrR.arrow.gotoAndStop((who||1)-1);
			arrR.arrow.visible=true;
			var lenA = Math.sqrt(arx*arx+ary*ary);
			var theta=Math.atan2(ary,arx);
			arrR.arrow.scaleX = lenA/100;
			arrR.rotation = theta*180/Math.PI;
		}
		//changeColor
		ba.changeColor = function(_color){
			ba.shape.graphics.c().rf(["#FFFFFF",_color],[0,1],-13.7,-15,0,-13.7,-15,31.8).s().p("AlhFiQiSiTAAjPQAAjOCSiTQCTiSDOAAQDPAACTCSQCSCTAADOQAADPiSCTQiTCSjPAAQjOAAiTiSg");
		}
		
		//help() 說明
		ba.help = function(){
						var str="老師寫的ball，可以改顏色，不要修改程式，外部可用方法：\n 設定箭頭 setArrow(編號1或2, x長度, y長度)";
						str+="\n 兩箭頭的名稱分別是 arrowRotation1 與 arrowRotation2";
						str+="\n 把球改成藍色： ball.changeColor('#0000FF')";
						return str;
					}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// arrowRotation2
	this.arrowRotation2 = new lib.arrowRotation();
	this.arrowRotation2.name = "arrowRotation2";
	this.arrowRotation2.parent = this;
	this.arrowRotation2.setTransform(0,0,1,1,-44.9994);

	this.timeline.addTween(cjs.Tween.get(this.arrowRotation2).wait(1));

	// arrowRotation1
	this.arrowRotation1 = new lib.arrowRotation();
	this.arrowRotation1.name = "arrowRotation1";
	this.arrowRotation1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.arrowRotation1).wait(1));

	// ball
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FF0000"],[0,1],-13.7,-15,0,-13.7,-15,31.8).s().p("AlhFiQiSiTAAjPQAAjOCSiTQCTiSDOAAQDPAACTCSQCSCTAADOQAADPiSCTQiTCSjPAAQjOAAiTiSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ball, new cjs.Rectangle(-50,-81.3,150,131.3), null);


(lib.helper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.coordMC();
	this.instance.parent = this;
	this.instance.setTransform(585.1,753.95,1,1,0,0,0,500,-55);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AZBqiIEfAAAZBlRIEfAAAZBqiIAAFRIAAFRIEfAAAZBFSIEfAAAZBAAIAAFSIAAFSIEfAAA9fqiMA2gAAA");
	this.shape.setTransform(893.7,203,1,1,0,0,0,160.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("Ahfk5IAACDIC1AAAhfi2IAAHwIC/AA");
	this.shape_1.setTransform(364.325,201.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0066FF").ss(5,1,1).p("AmyhtQP/jVi1Hw");
	this.shape_2.setTransform(533.9907,691.7661);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer_1
	this.box = new lib.box();
	this.box.name = "box";
	this.box.parent = this;
	this.box.setTransform(146.35,501.05);

	this.instance_1 = new lib.man02();
	this.instance_1.parent = this;
	this.instance_1.setTransform(993.65,632.5);

	this.instance_2 = new lib.man01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(921.9,632.5);

	this.instance_3 = new lib.cross();
	this.instance_3.parent = this;
	this.instance_3.setTransform(944.75,306);

	this.instance_4 = new lib.bar();
	this.instance_4.parent = this;
	this.instance_4.setTransform(769.75,417.25);

	this.ball = new lib.ball();
	this.ball.name = "ball";
	this.ball.parent = this;
	this.ball.setTransform(146.35,345.55);

	this.spring = new lib.spring();
	this.spring.name = "spring";
	this.spring.parent = this;
	this.spring.setTransform(756.15,476.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglCUQA0g+AAhVQAAhVg0hAIAXAAQA0A+AABXQAABXg0A8g");
	this.shape_3.setTransform(591.8,636.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUA6IALgMQBBApAmAoIgMANQgpgsg9gmgAiLB7QB2gaAKhMIh/AAIAAgRIAlAAIAAhjIBgAAIAAgsIAQAAIAAAsIBeAAIAABjIAjAAIAAARIiGAAQgFAkgfAhQghAhhDAPgAAJAEIBOAAIAAhSIhMAAIgCBSgAhUAEIBKAAQAEg0AAgeIhOAAg");
	this.shape_4.setTransform(571.6,633.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHCMIAAhgIhxAAIAAh+IBxAAIAAg5IAQAAIAAA5IBxAAIAAB+IhxAAIAABggAAJAbIBgAAIAAhcIhgAAgAhnAbIBgAAIAAhcIhgAAg");
	this.shape_5.setTransform(539.7,633.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiKCJIAAgQIAlAAIAAhHIDLAAIAABHIAlAAIAAAQgAAoB5IAuAAIAAg2IguAAgAgXB5IAvAAIAAg2IgvAAgAhVB5IAvAAIAAg2IgvAAgAiFAgQAQggADgdIgSACIgCgQIAVgCQACgSAAgxIApAAIAHgYIAQAEIgGAUIArAAIAAA5IALgBIAAAPIgLACIAAA3QAAALgHAGQgGAFgaAAIgFgPIAUAAQAJgBAAgHIAAg0IhJAGQgGAqgRAggAhgguIBGgHIAAgsIhFAAgABMAJQgkAUgcAJIgKgNQAqgPAQgKQgLgGgjgRIAHgLIgNAAIAAgPIB1AAIAAAPQgRASgSAQIAtAdIgJANQgagTgYgOgABLgJQAOgLAOgOIhNAAgAhRgRIALgJQAOAMAMARIgLAJQgLgQgPgNgAAHhBQAagSgBgsIBHAAIAAAsQAAABAAAAQABAAAAABQAAAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAAAAAAAQABAAAAAAIAdAAIAAAPIgfAAQgTAAAAgUIAAgdIgoAAQgDAmgZASgAhOhVIALgJQANAMAKASIgMAIQgHgMgPgRg");
	this.shape_6.setTransform(507.675,632.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA7BlQgTgogFgvIhNAAIAABEQAqgIAdgKIAAARQgmANg2AIIgEgQQAJgDAAgIIAAiAQBfgDBHgUIAJAPQgjAKgiAEQAAAdACARIBPAAIAAAPIhNAAQAFAtAQAhQARAhAKAAQAPAAAJg8IAQAIQgGAigKARQgIARgPAAQgWAAgUgogAgqgmIAAAlIBLAAQgCgZAAgSQgiAFgnABgAiKCCQALgWAIglQAHglAAhGIAAhHIB2AAQgDgLgKgSIAQgEQAIAOAHATIBwAAIAAAQIjoAAIAABYQAABZgdA2gAg8CGIAAgQIBvAAIAAAQg");
	this.shape_7.setTransform(475.8,633.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhVCNIAAiMQgSATgYAVIgMgOQA6gtAeg2IhPAAIAAgQIBXAAQALgUAKggIARAEQgIAZgLAXICeAAIAAAQIimAAQgRAdgSAXIAACFIBbAAIAAhaIhGAAIAAgRIBGAAIAAg6IARAAIAAA6IBNAAIAAARIhNAAIAABaIBjAAIAAARIjPAAIAAALg");
	this.shape_8.setTransform(443.6,633.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABuCLIAAgYIhPAAIAAAYIgRAAIAAiRIAqAAIAAiFIARAAIAAA3IBDAAIAAAQIhDAAIAAA+IA1AAIAACRgAAfBjIBPAAIAAhaIhPAAgAiLCEQANgbAIggIAOAEQgJAogLAWgAhYB8QAAgYgEgXIAQgBQADAdAAAeIgPACIAAgNgAg8BMIAPgDQAHAbADAdIgPADQgCgagIgegAgbBLIAPgDQALAZADAXIgNAFQgGgbgKgXgAiKBBIAAgQIA/AAIAAgfIg2AAIAAgPIA2AAIAAgaIg0AAIAAhsIB4AAIAABsIg0AAIAAAaIA0AAIAAAPIg0AAIAAAfIA8AAIAAAQgAg7gmIAkAAIAAhOIgkAAgAhvgmIAkAAIAAhOIgkAAgAg2g3QAJgXAEgZIANAGQgFAbgIAVgAhphhIAMgGQAJAcADATIgNAGQgEgXgHgYg");
	this.shape_9.setTransform(411.625,633.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhwCIIAAiNIgaAAIAAgQIAaAAIAAhyIDgAAIAAByIAbAAIAAAQIgbAAIAAB0QAAAYgcAAIgTgBIgGgQIAQABQAPAAADgCQADgCAAgFIAAhzIg1AAIAACEIgRAAIAAiEIg0AAIAACEIgRAAIAAiEIg0AAIAACNgAArgVIA1AAIAAhhIg1AAgAgagVIA0AAIAAhhIg0AAgAhfgVIA0AAIAAhhIg0AAg");
	this.shape_10.setTransform(379.775,633.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ah9CMIAAhqIBYAAIAABoIgQAAIAAgUIg3AAIAAAWgAhsBmIA3AAIAAgzIg3AAgAgUCFIAAgPIBHAAIAAhfIg7AAIAAgRIA7AAIAAhMIg9AAIAAgRIA+AAQgGgWgMgWIAPgGQANAZAGAZIBGAAIAAARIhGAAIAABMIA/AAIAAARIg/AAIAABfIBHAAIAAAPgAh/ADIAAgPIBdAAIAAAPgAh/grIAAgRIBdAAIAAARgAiKhYIAAgRIAyAAQgEgMgLgQIARgGQALARAFARIAvAAIAAARg");
	this.shape_11.setTransform(347.7,633.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiCCNIAAjiIAeAAQAMgVALgiIAPADQgFARgQAjIA2AAIAADbIgQAAIAAgbIhEAAIAAAigAhxBbIBEAAIAAhMIhEAAgAhxgBIBEAAIAAhEIhEAAgAAsCMIgFgQIAcAAIATAAQADAAAFgEQAEgEACgEQACgFADggIAFhHIADhJIhTAAQgRAigVAeIgNgKQApg3AShEIAPAFQgHAZgKAXIBfAAQgCBIgFA9QgFA+gGALQgEALgIAEQgJAEgWAAIgaAAgAAMgGIAOgJQAdAhARAoIgNAJQgQgjgfgmg");
	this.shape_12.setTransform(315.8,633.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAAg0QgUBvhrBQIgMgNQAkgZAfgmQAeglAPgsQAQgtABhMIARAAQgBBYAlBEQAkBEA9AqIgNANQhjhGgch6g");
	this.shape_13.setTransform(283.75,633.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAOCUQgzg7AAhYQAAhXAzg+IAYAAQg0BAAABVQAABVAzA+g");
	this.shape_14.setTransform(263.5,636.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYBvIAUhTIAZAAIgaBTgAgGhOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAGAAAGAGQAGAFAAAHQAAAJgGAFQgGAFgGAAQgHAAgGgFg");
	this.shape_15.setTransform(746.5,594.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AglCUQA0g+AAhVQAAhVg0hAIAYAAQAzA+AABXQAABXgzA8g");
	this.shape_16.setTransform(737.35,591.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAOCUQgzg7AAhYQAAhXAzg+IAYAAQg0BAAABVQAABVAzA+g");
	this.shape_17.setTransform(729.05,591.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhIB7IAAgYIBGhHQAigiAIgPQAIgRAAgRQAAgWgMgMQgMgLgXAAQgfAAgeAcIAAgbQAcgXAlAAQAfAAATARQASARAAAfQABAWgMAXQgNAUgiAjIg4A3IAAABIBxAAIAAAYg");
	this.shape_18.setTransform(713.3,588.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag6BeQgUggAAg5QABg/AUghQAWghAmAAQBLAAABB8QAAA7gWAiQgUAggmAAQgmAAgTgfgAgzAEQABBjAyAAQA0AAAAhlQAAhogzABQg0AAAABpg");
	this.shape_19.setTransform(695.1,588.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAtBYIAAhhQAAg4gpAAQgVAAgOAQQgNAQAAAYIAABhIgaAAIAAisIAaAAIAAAdIAAAAQAUggAkAAQAdAAAPASQAPASAAAjIAABog");
	this.shape_20.setTransform(676.3,592.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag0BNQgPgOAAgXQAAguA5gJIAzgHQAAgtgkAAQgeAAgZAWIAAgcQAagQAfAAQA9AAAABAIAABvIgbAAIAAgbIAAAAQgSAggjAAQgZAAgPgOgAAAAEQgWADgJAIQgJAIAAAQQAAANAKAIQAJAIAPAAQAUAAAOgOQANgQAAgVIAAgRg");
	this.shape_21.setTransform(657.175,592.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ABgBYIAAhiQAAgegKgMQgJgNgVAAQgRAAgNAQQgNARAAAXIAABhIgZAAIAAhlQAAg0goAAQgTAAgMAQQgMAPAAAZIAABhIgaAAIAAisIAaAAIAAAcIABAAQASggAjABQARAAAOAKQAMAJAFARQATgkAnAAQA5AAAABGIAABpg");
	this.shape_22.setTransform(634.225,592.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgMANQgFgFAAgIQAAgGAFgGQAFgGAHABQAHgBAGAGQAFAGAAAGQAAAHgFAGQgGAFgHABQgHgBgFgFg");
	this.shape_23.setTransform(615.5,599.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgzBkIgBAAIAAAaIgaAAIAAj/IAaAAIAAByIABAAQAUgjAnAAQAhAAATAYQATAWAAAnQAAArgVAaQgWAagkAAQghAAgSgegAgkgKQgQAPAAAaIAAAZQAAAWAPAPQAOAPAVAAQAZAAAPgUQAOgTAAgjQAAgdgNgQQgOgQgXAAQgXgBgPASg");
	this.shape_24.setTransform(602.275,588.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgNB+IAAisIAZAAIAACsgAgMhgQgEgFAAgHQAAgHAFgFQAEgFAHAAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAQgGAAgGgFg");
	this.shape_25.setTransform(587.45,588.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgMCAIAAj/IAZAAIAAD/g");
	this.shape_26.setTransform(579.1,588.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AApBWIgkh8QgCgHgBgIIgBAAQABAEgDALIgnB8IgaAAIg1isIAcAAIAkCDQACAGAAAJIABAAIAEgPIAoiDIAXAAIAlCDIACAPIABAAQAAgGADgJIAkiDIAaAAIg0Csg");
	this.shape_27.setTransform(554.55,592.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag1BDQgVgYAAgqQAAgnAXgZQAWgaAhAAQAigBASAWQATAXAAAnIAAAMIh6AAQABAeAPARQAPAPAZAAQAdAAAZgUIAAAaQgXAQglABQgjgBgVgXgAgcg1QgPAOgDAYIBeAAQAAgZgMgNQgLgOgVAAQgSAAgOAOg");
	this.shape_28.setTransform(533.225,592.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAsBYIAAhhQAAg4goAAQgUAAgOAQQgOAQAAAYIAABhIgaAAIAAisIAaAAIAAAdIAAAAQAUggAlAAQAcAAAPASQAPASAAAjIAABog");
	this.shape_29.setTransform(514.6,592.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhOAvIAAgWICdAAIAAAWgAhOgYIAAgWICdAAIAAAWg");
	this.shape_30.setTransform(484.875,590.975);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhIB7IAAgYIBGhHQAigiAIgPQAIgRAAgRQAAgWgMgMQgMgLgXAAQgfAAgeAcIAAgbQAcgXAlAAQAfAAATARQASARAAAfQABAWgMAXQgNAUgiAjIg4A3IAAABIBxAAIAAAYg");
	this.shape_31.setTransform(455.45,588.75);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ag6BeQgUggAAg5QABg/AUghQAWghAmAAQBLAAABB8QAAA7gWAiQgUAggmAAQgmAAgTgfgAgzAEQABBjAyAAQA0AAAAhlQAAhogzABQg0AAAABpg");
	this.shape_32.setTransform(437.25,588.95);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAtBYIAAhhQAAg4gpAAQgVAAgOAQQgNAQAAAYIAABhIgaAAIAAisIAaAAIAAAdIAAAAQAUggAkAAQAdAAAPASQAPASAAAjIAABog");
	this.shape_33.setTransform(418.45,592.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Ag0BNQgPgOAAgXQAAguA5gJIAzgHQAAgtgkAAQgeAAgZAWIAAgcQAagQAfAAQA9AAAABAIAABvIgbAAIAAgbIAAAAQgSAggjAAQgZAAgPgOgAAAAEQgWADgJAIQgJAIAAAQQAAANAKAIQAJAIAPAAQAUAAAOgOQANgQAAgVIAAgRg");
	this.shape_34.setTransform(399.325,592.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("ABgBYIAAhiQAAgegKgMQgJgNgVAAQgRAAgNAQQgNARAAAXIAABhIgZAAIAAhlQAAg0goAAQgTAAgMAQQgMAPAAAZIAABhIgaAAIAAisIAaAAIAAAcIABAAQASggAjABQARAAAOAKQAMAJAFARQATgkAnAAQA5AAAABGIAABpg");
	this.shape_35.setTransform(376.375,592.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AALBoQguAdhfAHIgIgRQBQgDAwgWQgdgJgvgIQAPgPATgWIhWAAIAAgQIBjAAIARgXIARAEIgNATIBLAAIAHgOIARACIgFAMIA/AAIAAAQIhHAAQgTAfgVAQQA3ARAsATIgKAPQgmgShEgUgAg1BHIA+APQAYgRAOgZIhMAAIgYAbgAAagjQgfAjg+AKIgJgOQBcgMAOhBIAQADQgDARgHANQA/AbAnAYIgLAOQgtgdg4gXgAiKghIAAgQIBbAAIAAAQgABMg1QAQgNALgaIhvAAQgOAUgRAPIgLgOQAfgdATgpIAQAGQgGANgIANIB7AAQgKAogYAZgAiBhlIAAgRIBLAAIAAARg");
	this.shape_36.setTransform(337.525,588.65);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AArCMIgGgPQAgAAAHgBQAGgBAAgHIAAggIh8AAIAAgOIB8AAIAAgVIhtAAIAAh0IAvAAIABgVIg5AAIAAgQICsAAIAAAQIg+AAIAAAVIAzAAIAAB0IgaAAIAAAVIAoAAIAAAOIgoAAIAAAgQgBAZgYAAIgfgBgAgLAiIB4AAIAAgvIgeAAQgUAAAAgVIAAgTIgZAAQgEAigdAOIgIgMQAYgMACgYIgeAAgABKgkQAAADACADQADADADAAIAbAAIAAgaIgjAAgAAjhDIAYAAIAAgVIgYAAIAAAVgAiLB8IAOgFIAAh9IAQAAIAAB2IAUgJIAAiIIglAAIAAhdIBLAAIAABdIgWAAIAAAuIAcAAIAAAPIgcAAIAABEIAVgKIADAQQgxAYgjANgAhvgxIAsAAIAAg+IgsAAgAgWBkIAJgMQAUAKAUARIgLALQgSgQgUgKgAABAPIAAgOIBeAAIAAAOgABJh1QAOgLAIgLIAPAHQgIALgQANgAgGiEIANgIQAMALAKANIgPAIQgHgMgNgMg");
	this.shape_37.setTransform(305.4,588.625);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAAg0QgUBvhrBQIgMgNQAlgZAegmQAeglAPgsQARgtAAhMIARAAQgBBYAkBEQAlBEA9AqIgMANQhlhGgbh6g");
	this.shape_38.setTransform(273.5,588.675);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgYBvIAUhTIAZAAIgaBTgAgGhOQgFgGAAgIQAAgHAFgFQAGgFAHgBQAGABAGAFQAGAFAAAHQAAAJgGAFQgGAFgGAAQgHAAgGgFg");
	this.shape_39.setTransform(746.5,549.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AglCUQA0g+AAhVQAAhVg0hAIAYAAQAzA+AABXQAABYgzA7g");
	this.shape_40.setTransform(737.35,547.15);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAOCUQgzg7AAhYQAAhXAzg+IAYAAQg0BAAABVQAABVAzA+g");
	this.shape_41.setTransform(729.05,547.15);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AhCB8IAAgYIA2AAIAAi9Ig3ARIAAgZIBRgaIAADfIA2AAIAAAYg");
	this.shape_42.setTransform(714.05,544.125);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("Ag6BeQgUggAAg5QABg/AUghQAWghAmAAQBLAAABB8QAAA7gWAiQgUAggmAAQgmAAgTgfgAgzAEQABBjAyAAQA0AAAAhlQAAhogzAAQg0AAAABqg");
	this.shape_43.setTransform(695.1,544.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAtBYIAAhhQAAg4gpAAQgVAAgOAQQgNAQAAAYIAABhIgaAAIAAisIAaAAIAAAdIAAAAQAUggAkAAQAdAAAPASQAPASAAAjIAABog");
	this.shape_44.setTransform(676.3,547.65);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("Ag0BNQgPgOAAgXQAAguA5gJIAzgHQAAgtgkAAQgeAAgZAWIAAgcQAagQAfAAQA9AAAABAIAABvIgbAAIAAgbIAAAAQgSAggjAAQgZAAgPgOgAAAAEQgWADgJAIQgJAIAAAQQAAANAKAIQAJAIAPAAQAUAAAOgOQANgQAAgVIAAgRg");
	this.shape_45.setTransform(657.175,547.85);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("ABgBYIAAhiQAAgegKgMQgJgNgVAAQgRAAgNARQgNAQAAAXIAABhIgZAAIAAhlQAAg0goAAQgTAAgMAQQgMAPAAAZIAABhIgaAAIAAisIAaAAIAAAcIABAAQASggAjABQARAAAOAKQAMAJAFARQATgkAnAAQA5AAAABGIAABpg");
	this.shape_46.setTransform(634.225,547.65);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgMANQgFgFAAgIQAAgGAFgGQAFgGAHABQAHgBAGAGQAFAGAAAGQAAAHgFAGQgGAFgHABQgHgBgFgFg");
	this.shape_47.setTransform(615.5,555.05);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgzBlIgBAAIAAAZIgaAAIAAj/IAaAAIAAByIABAAQAUgjAnAAQAhAAATAYQATAWAAAnQAAArgVAaQgWAagkAAQghAAgSgdgAgkgKQgQAPAAAaIAAAZQAAAWAPAPQAOAPAVAAQAZAAAPgUQAOgTAAgjQAAgdgNgQQgOgQgXAAQgXgBgPASg");
	this.shape_48.setTransform(602.275,543.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgNB+IAAisIAZAAIAACsgAgMhgQgEgFAAgHQAAgHAFgFQAEgFAHAAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAQgGAAgGgFg");
	this.shape_49.setTransform(587.45,543.875);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgMCAIAAj/IAZAAIAAD/g");
	this.shape_50.setTransform(579.1,543.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AApBWIgkh8QgCgHgBgIIgBAAQABAEgDALIgnB8IgaAAIg1isIAcAAIAkCDQACAGAAAJIABAAIAEgPIAoiDIAXAAIAlCDIACAPIABAAQAAgGADgJIAkiDIAaAAIg0Csg");
	this.shape_51.setTransform(554.55,547.85);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("Ag1BDQgVgYAAgqQAAgnAXgZQAWgaAhAAQAigBASAWQATAXAAAnIAAAMIh6AAQABAeAPARQAPAPAZAAQAdAAAZgUIAAAaQgXAQglABQgjgBgVgXgAgcg1QgPANgDAZIBeAAQAAgZgMgNQgLgOgVAAQgSAAgOAOg");
	this.shape_52.setTransform(533.225,547.85);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAsBYIAAhhQAAg4goAAQgUAAgOAQQgOAQAAAYIAABhIgaAAIAAisIAaAAIAAAdIAAAAQAUggAlAAQAcAAAPASQAPASAAAjIAABog");
	this.shape_53.setTransform(514.6,547.65);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AhOAvIAAgWICdAAIAAAWgAhOgYIAAgWICdAAIAAAWg");
	this.shape_54.setTransform(484.875,546.425);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AhCB8IAAgYIA2AAIAAi9Ig3ARIAAgZIBRgaIAADfIA2AAIAAAYg");
	this.shape_55.setTransform(456.2,544.125);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("Ag6BeQgUggAAg5QABg/AUghQAWghAmAAQBLAAABB8QAAA7gWAiQgUAggmAAQgmAAgTgfgAgzAEQABBjAyAAQA0AAAAhlQAAhogzAAQg0AAAABqg");
	this.shape_56.setTransform(437.25,544.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAtBYIAAhhQAAg4gpAAQgVAAgOAQQgNAQAAAYIAABhIgaAAIAAisIAaAAIAAAdIAAAAQAUggAkAAQAdAAAPASQAPASAAAjIAABog");
	this.shape_57.setTransform(418.45,547.65);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("Ag0BNQgPgOAAgXQAAguA5gJIAzgHQAAgtgkAAQgeAAgZAWIAAgcQAagQAfAAQA9AAAABAIAABvIgbAAIAAgbIAAAAQgSAggjAAQgZAAgPgOgAAAAEQgWADgJAIQgJAIAAAQQAAANAKAIQAJAIAPAAQAUAAAOgOQANgQAAgVIAAgRg");
	this.shape_58.setTransform(399.325,547.85);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("ABgBYIAAhiQAAgegKgMQgJgNgVAAQgRAAgNARQgNAQAAAXIAABhIgZAAIAAhlQAAg0goAAQgTAAgMAQQgMAPAAAZIAABhIgaAAIAAisIAaAAIAAAcIABAAQASggAjABQARAAAOAKQAMAJAFARQATgkAnAAQA5AAAABGIAABpg");
	this.shape_59.setTransform(376.375,547.65);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AALBoQguAdhfAHIgIgRQBQgDAwgWQgdgJgvgJQAPgOATgWIhWAAIAAgQIBjAAIARgXIARAEIgNATIBLAAIAHgOIARACIgFAMIA/AAIAAAQIhHAAQgTAfgVAQQA3ARAsATIgKAPQgmgThEgTgAg1BHIA+APQAYgRAOgZIhMAAIgYAbgAAagjQgfAjg+AKIgJgOQBcgMAOhBIAQADQgDARgHANQA/AbAnAYIgLAOQgtgdg4gXgAiKghIAAgQIBbAAIAAAQgABMg2QAQgMALgaIhvAAQgOAUgRAPIgLgOQAfgdATgpIAQAGQgGANgIANIB7AAQgKAogYAZgAiBhlIAAgRIBLAAIAAARg");
	this.shape_60.setTransform(337.525,544.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("ABtCNIAAgXIhlAAIAAAXIgPAAIAAiFIAvAAIAAiRIARAAIAAA5IBSAAIAAAQIhSAAIAABIIBEAAIAACFgAAIBmIBlAAIAAhNIhlAAgAiKBwIAggIQAAhDgPhhIANgJIgaAAIAAgRIA5AAQgEgUgNgcIAQgGQANAeAFAYIAwAAIAAARIgZAAIAMAKQgGA7gTBYQAKgCAVgIIAAASQhIAWgtALgAhYBjIASgFQAYheAFhFIg/AAQALBQAFBYg");
	this.shape_61.setTransform(305.35,544.075);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAAg0QgUBvhrBQIgMgNQAlgZAegmQAeglAPgsQARgtAAhMIARAAQgBBYAkBEQAlBEA9AqIgMANQhlhGgbh6g");
	this.shape_62.setTransform(273.5,544.125);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AglCUQA0g+AAhVQAAhVg0hAIAYAAQAzA+AABXQAABXgzA8g");
	this.shape_63.setTransform(719.55,502.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAOCUQgzg7AAhYQAAhXAzg+IAYAAQg0BAAABVQAABVAzA+g");
	this.shape_64.setTransform(711.25,502.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AhCB1IAAgbQAdARAaAAQBAAAAAhFIAAgUIgBAAQgUAigmAAQghAAgTgXQgUgYAAglQAAgsAVgaQAWgaAjAAQAkAAAQAcIABAAIAAgYIAaAAIAACeQAABfhZAAQggAAgYgMgAglhXQgOATAAAiQAAAdAOARQAPASAWAAQAWAAAQgRQAPgQAAgaIAAgaQAAgVgOgPQgPgPgUAAQgaAAgPATg");
	this.shape_65.setTransform(694.35,507.175);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAtBYIAAhhQAAg4gpAAQgVAAgOAQQgNAQAAAYIAABhIgaAAIAAisIAaAAIAAAdIABAAQATggAkAAQAdAAAPASQAPASAAAjIAABog");
	this.shape_66.setTransform(675.3,503.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgNB+IAAisIAZAAIAACsgAgMhgQgEgFAAgHQAAgHAFgFQAEgFAHAAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAQgGAAgGgFg");
	this.shape_67.setTransform(661.25,499.325);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgrBYIAAisIAaAAIAAAkIAAAAQAGgSAMgLQAMgKAOAAQAMAAAFADIAAAbQgHgFgNgBQgTABgKARQgMASAAAbIAABYg");
	this.shape_68.setTransform(652.425,503.15);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AhOCAIAAj7IAaAAIAAAfIABAAQAUgjAnAAQAhAAATAXQATAXAAAnQAAAqgVAbQgWAagkAAQghAAgSgeIgBAAIAABpgAgkhYQgQARAAAaIAAAZQAAAUAPAQQAOAPAVAAQAZAAAPgUQAOgTAAgiQAAgegOgQQgNgRgXAAQgXAAgPARg");
	this.shape_69.setTransform(635.625,507.075);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("Ag4BQIAAgdQAXARAbAAQAkAAAAgZQAAgLgIgGQgIgIgXgIQgcgLgJgLQgJgLAAgRQAAgWATgOQATgNAaAAQAWAAASAIIAAAbQgTgNgZAAQgOAAgKAHQgKAHAAALQAAALAHAHQAHAFAWAKQAeAKAKALQAKAMAAAQQAAAYgTANQgTANgdABQgbAAgTgLg");
	this.shape_70.setTransform(617.725,503.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgMANQgFgFAAgIQAAgGAFgGQAFgGAHABQAHgBAGAGQAFAGAAAGQAAAHgFAGQgGAFgHABQgHgBgFgFg");
	this.shape_71.setTransform(606.6,510.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgzBkIgBAAIAAAaIgaAAIAAj/IAaAAIAAByIABAAQAUgjAnAAQAhAAATAYQATAWAAAnQAAArgVAaQgWAagkAAQghAAgSgegAgkgKQgQAPAAAaIAAAZQAAAWAPAPQAOAPAVAAQAZAAAPgUQAOgTAAgjQAAgdgNgQQgOgQgXAAQgXgBgPASg");
	this.shape_72.setTransform(593.375,499.35);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgNB+IAAisIAZAAIAACsgAgMhgQgEgFAAgHQAAgHAFgFQAEgFAHAAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAQgHAAgFgFg");
	this.shape_73.setTransform(578.55,499.325);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgMCAIAAj/IAZAAIAAD/g");
	this.shape_74.setTransform(570.2,499.15);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AApBWIgkh8QgDgHAAgIIgBAAQAAAEgCALIgnB8IgaAAIg1isIAbAAIAlCDQACAGAAAJIABAAIAEgPIAoiDIAXAAIAkCDIADAPIABAAQAAgGADgJIAkiDIAaAAIg0Csg");
	this.shape_75.setTransform(545.65,503.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("Ag1BDQgVgYAAgqQAAgnAXgZQAWgaAhAAQAigBASAWQATAXAAAnIAAAMIh6AAQABAeAPARQAPAPAZAAQAdAAAZgUIAAAaQgXAQglABQgjgBgVgXgAgcg1QgPAOgDAYIBeAAQAAgZgMgNQgLgOgVAAQgSAAgOAOg");
	this.shape_76.setTransform(524.325,503.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAsBYIAAhhQAAg4goAAQgUAAgOAQQgOAQAAAYIAABhIgaAAIAAisIAaAAIAAAdIAAAAQAUggAlAAQAcAAAPASQAPASAAAjIAABog");
	this.shape_77.setTransform(505.7,503.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AhOAvIAAgWICdAAIAAAWgAhOgYIAAgWICdAAIAAAWg");
	this.shape_78.setTransform(475.975,501.875);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AhCB1IAAgbQAdARAaAAQBAAAAAhFIAAgUIgBAAQgUAigmAAQghAAgTgXQgUgYAAglQAAgsAVgaQAWgaAjAAQAkAAAQAcIABAAIAAgYIAaAAIAACeQAABfhZAAQggAAgYgMgAglhXQgOATAAAiQAAAdAOARQAPASAWAAQAXAAAPgRQAPgQAAgaIAAgaQAAgVgOgPQgPgPgUAAQgaAAgPATg");
	this.shape_79.setTransform(445.4,507.175);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAtBYIAAhhQAAg4gpAAQgVAAgOAQQgNAQAAAYIAABhIgaAAIAAisIAaAAIAAAdIABAAQATggAkAAQAdAAAPASQAPASAAAjIAABog");
	this.shape_80.setTransform(426.35,503.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgNB+IAAisIAZAAIAACsgAgMhgQgEgFAAgHQAAgHAFgFQAEgFAHAAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAQgGAAgGgFg");
	this.shape_81.setTransform(412.3,499.325);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgrBYIAAisIAaAAIAAAkIAAAAQAGgSAMgLQAMgKAOAAQAMAAAFADIAAAbQgHgFgNgBQgTABgKARQgMASAAAbIAABYg");
	this.shape_82.setTransform(403.475,503.15);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AhOCAIAAj7IAaAAIAAAfIABAAQAUgjAnAAQAhAAATAXQATAXAAAnQAAAqgVAbQgWAagkAAQghAAgSgeIgBAAIAABpgAgkhYQgQARAAAaIAAAZQAAAUAPAQQAOAPAVAAQAZAAAPgUQAOgTAAgiQAAgegOgQQgNgRgXAAQgXAAgPARg");
	this.shape_83.setTransform(386.675,507.075);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("Ag4BQIAAgdQAXARAbAAQAkAAAAgZQAAgLgIgGQgIgIgXgIQgcgLgJgLQgJgLAAgRQAAgWATgOQATgNAaAAQAWAAASAIIAAAbQgTgNgZAAQgOAAgKAHQgKAHAAALQAAALAHAHQAHAFAWAKQAeAKAKALQAKAMAAAQQAAAYgTANQgTANgdABQgbAAgTgLg");
	this.shape_84.setTransform(368.775,503.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AiCCNIAAjiIAeAAQAMgVAKgiIAQADQgFARgQAjIA3AAIAADbIgQAAIAAgbIhGAAIAAAigAhyBbIBGAAIAAhMIhGAAgAhygBIBGAAIAAhEIhGAAgAAsCMIgFgQIAcAAIATAAQAEAAAEgEQAEgEACgEQACgGADgfQADggACgnIADhJIhUAAQgQAigVAeIgNgKQApg3ARhEIAQAFQgHAZgKAXIBfAAQgCBIgFA9QgFA+gFALQgGALgIAEQgHAEgXAAIgaAAgAAMgGIAOgJQAdAhARAoIgNAJQgQgjgfgmg");
	this.shape_85.setTransform(337.55,499.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AiKCCQAfgogBhLIAAhGIBnAAIAACtQAAAJgGAGQgFAGgKAAIgUABIgRgBIgFgRIAnABQADAAACgCQACgDABgDIAAguIhJAAQgJArgWAegAhcA1IBHAAIAAgnIhGAAIgBAngAhbgCIBGAAIAAglIhGAAgAA0CLIgGgSIAsACQAJAAgBgJIAAisIAQAAIAACuQAAAIgDAHQgFAFgHACQgGACgSAAIgXgBgAAjBWIAAiJIAQAAIAACJgAiJhTIAAgQIEUAAIAAAQgAAbhxQARgKAQgSIAPAIQgKAOgVAPgAhGiGIASgHQASAQANAPIgRAGQgMgOgUgQg");
	this.shape_86.setTransform(305.35,499.65);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AiKB9QBagpA0gsQA0grArhDIjdAAIAAgSIB6AAQgIgWgRgXIASgHQARAeAIAWIBmAAIAAASQhCBrhjA8QATAWApgBIB8AAIgGARIh2AAQgzAAgYgdQgeARglASg");
	this.shape_87.setTransform(273.675,499.55);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgXBvIAUhTIAYAAIgaBTgAgFhOQgGgGAAgIQAAgHAGgFQAFgFAGgBQAHABAGAFQAFAFABAHQgBAJgFAFQgGAFgHAAQgGAAgFgFg");
	this.shape_88.setTransform(650.5,460.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AglCUQA0g+AAhVQAAhVg0hAIAXAAQA0A+AABXQAABXg0A8g");
	this.shape_89.setTransform(641.35,458.05);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAOCUQgzg7AAhYQAAhXAzg+IAYAAQg0BAAABVQAABVA0A+g");
	this.shape_90.setTransform(633.05,458.05);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AAqBWIgig4IgIgNIAAAAIgHANIgkA4IgeAAIA7hUIg4hYIAeAAIAoBJIABAAIADgFIAphEIAdAAIg6BYIA5BUg");
	this.shape_91.setTransform(619.075,458.75);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("Ag8BCQgYgYAAgnQAAgrAYgZQAYgYAnAAQAmAAAWAXQAVAZABApQgBApgXAYQgXAagmAAQgmAAgWgZgAgpgxQgQATAAAfQAAAfAQASQAQASAaAAQAbABAPgTQAPgRAAggQAAghgPgRQgOgSgcAAQgaAAgQASg");
	this.shape_92.setTransform(601.55,458.75);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgzBlIgBAAIAAAZIgaAAIAAj/IAaAAIAAByIABAAQAUgjAnAAQAhAAATAYQATAWAAAnQAAArgVAaQgWAagkAAQghAAgSgdgAgkgKQgQAPAAAaIAAAZQAAAWAPAPQAOAPAVAAQAZAAAPgUQAOgTAAgjQAAgdgNgQQgOgQgXAAQgXgBgPASg");
	this.shape_93.setTransform(581.925,454.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgMANQgFgFAAgIQAAgGAFgGQAFgGAHABQAHgBAFAGQAGAGAAAGQAAAHgGAGQgFAFgHABQgHgBgFgFg");
	this.shape_94.setTransform(567.5,465.95);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgzBlIgBAAIAAAZIgaAAIAAj/IAaAAIAAByIABAAQAUgjAnAAQAhAAATAYQATAWAAAnQAAArgVAaQgWAagkAAQghAAgSgdgAgkgKQgQAPAAAaIAAAZQAAAWAPAPQAOAPAVAAQAZAAAPgUQAOgTAAgjQAAgdgNgQQgOgQgXAAQgXgBgPASg");
	this.shape_95.setTransform(554.275,454.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgMB+IAAisIAZAAIAACsgAgLhgQgFgFAAgHQAAgHAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAQgHAAgEgFg");
	this.shape_96.setTransform(539.45,454.775);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgMCAIAAj/IAZAAIAAD/g");
	this.shape_97.setTransform(531.1,454.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AApBWIgkh8QgCgHgBgIIAAAAQgBAEgCALIgoB8IgaAAIg0isIAcAAIAkCDQACAGABAJIAAAAIAEgPIApiDIAWAAIAlCDIACAPIABAAQABgGACgJIAkiDIAaAAIg0Csg");
	this.shape_98.setTransform(506.55,458.75);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("Ag1BDQgVgYAAgqQAAgnAXgZQAWgaAhAAQAigBASAWQATAXAAAnIAAAMIh6AAQABAeAPARQAPAPAZAAQAdAAAZgUIAAAaQgXAQglABQgjgBgVgXgAgcg1QgPAOgDAYIBeAAQAAgZgMgNQgLgOgVAAQgSAAgOAOg");
	this.shape_99.setTransform(485.225,458.75);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AAtBYIAAhhQAAg4gpAAQgVAAgOAQQgNAQAAAYIAABhIgaAAIAAisIAaAAIAAAdIAAAAQAUggAkAAQAdAAAPASQAPASAAAjIAABog");
	this.shape_100.setTransform(466.6,458.55);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AhOAvIAAgWICdAAIAAAWgAhOgYIAAgWICdAAIAAAWg");
	this.shape_101.setTransform(436.875,457.325);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AAqBWIgig4IgIgNIAAAAIgHANIgkA4IgeAAIA7hUIg4hYIAeAAIAoBJIABAAIADgFIAphEIAdAAIg6BYIA5BUg");
	this.shape_102.setTransform(409.225,458.75);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("Ag8BCQgYgYAAgnQABgrAXgZQAYgYAnAAQAmAAAWAXQAWAZgBApQABApgYAYQgYAaglAAQglAAgXgZgAgpgxQgQATAAAfQAAAfAQASQAQASAaAAQAbABAPgTQAPgRAAggQAAghgPgRQgPgSgbAAQgaAAgQASg");
	this.shape_103.setTransform(391.7,458.75);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgzBlIgBAAIAAAZIgaAAIAAj/IAaAAIAAByIABAAQAUgjAnAAQAhAAATAYQATAWAAAnQAAArgVAaQgWAagkAAQghAAgSgdgAgkgKQgQAPAAAaIAAAZQAAAWAPAPQAOAPAVAAQAZAAAPgUQAOgTAAgjQAAgdgNgQQgOgQgXAAQgXgBgPASg");
	this.shape_104.setTransform(372.075,454.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AiCCNIAAjiIAeAAQAMgVAKgiIAQADQgFARgQAjIA3AAIAADbIgQAAIAAgbIhGAAIAAAigAhyBbIBGAAIAAhMIhGAAgAhygBIBGAAIAAhEIhGAAgAAsCMIgFgQIAcAAIATAAQAEAAAEgEQAEgEACgEQACgFADggQADggACgnIADhJIhUAAQgQAigVAeIgNgKQApg3ARhEIAQAFQgHAZgKAXIBfAAQgCBIgFA9QgFA+gFALQgGALgIAEQgHAEgXAAIgaAAgAAMgGIAOgJQAdAhARAoIgNAJQgQgjgfgmg");
	this.shape_105.setTransform(337.55,454.95);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAZCMIAAjMIgMAAQgUArgWAWIgYgRQAyg1ALhGIAbAHQAHADgJADQgCAMgKAbIB3AAIAAAXIhaAAIAAAvIBPAAIAAAWIhPAAIAAAqIBTAAIAAAXIhTAAIAABGgAhWCMIAAihQgOAVgTAVIgUgVQA3g/AShKIAbAIQAHAFgIACQgJAcgQAjIAHACQAFAFgJABIAAC/g");
	this.shape_106.setTransform(305,455.85);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgeB4QAygcAAhCIAAiPIAaAFIBEgVIATAZQACAIgLgFIhPAPIAAA1IBjAAIAAAYIgmAAIAACbIgZAAIAAibIgkAAIAAAvQAABJg9AlgAhPCQIAAhLQgUAggYATIgSgXQAjgZAXglIg0AAIAAgYIA4AAIAAgaIhAAAIAAgYIBYAAIAOgtIhdAAIAAgYIA3AAIAAgjIAYAAQAKABgJAHIAAAbIA2AAIAAAYIgPAAIgSAtIAnAAIAAAYIg8AAIAAAaIA2AAIAAAYIg2AAIAAALQASAFAfAVIgPAZQgSgRgQgKIAABKgAh2hLIAYgIQAKAQAFASIgZAHQgFgRgJgQg");
	this.shape_107.setTransform(273.475,455.925);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgXBvIAUhTIAYAAIgaBTgAgFhOQgGgGAAgIQAAgHAGgFQAFgFAGgBQAHABAGAFQAFAFAAAHQAAAJgFAFQgGAFgHAAQgGAAgFgFg");
	this.shape_108.setTransform(646.9,416.25);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AglCUQA0g+AAhVQAAhVg0hAIAXAAQA0A+AABXQAABXg0A8g");
	this.shape_109.setTransform(637.75,413.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AAOCUQgzg7AAhYQAAhXAzg+IAYAAQg0BAAABVQAABVA0A+g");
	this.shape_110.setTransform(629.45,413.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgMCAIAAj/IAZAAIAAD/g");
	this.shape_111.setTransform(619.15,410.05);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgMCAIAAj/IAZAAIAAD/g");
	this.shape_112.setTransform(610.85,410.05);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("Ag0BNQgPgOAAgXQAAguA5gJIAzgHQAAgtgkAAQgeAAgZAWIAAgcQAagQAfAAQA9AAAABAIAABvIgbAAIAAgbIAAAAQgSAggjAAQgZAAgPgOgAAAAEQgWADgJAIQgJAIAAAQQAAANAKAIQAJAIAPAAQAUAAAOgOQANgQAAgVIAAgRg");
	this.shape_113.setTransform(597.525,414.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgzBkIgBAAIAAAaIgaAAIAAj/IAaAAIAAByIABAAQAUgjAnAAQAhAAATAYQATAWAAAnQAAArgVAaQgWAagkAAQghAAgSgegAgkgKQgQAPAAAaIAAAZQAAAWAPAPQAOAPAVAAQAZAAAPgUQAOgTAAgjQAAgdgNgQQgOgQgXAAQgXgBgPASg");
	this.shape_114.setTransform(580.125,410.25);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgMANQgFgFAAgIQAAgGAFgGQAFgGAHABQAHgBAFAGQAGAGAAAGQAAAHgGAGQgFAFgHABQgHgBgFgFg");
	this.shape_115.setTransform(565.7,421.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgzBkIgBAAIAAAaIgaAAIAAj/IAaAAIAAByIABAAQAUgjAnAAQAhAAATAYQATAWAAAnQAAArgVAaQgWAagkAAQghAAgSgegAgkgKQgQAPAAAaIAAAZQAAAWAPAPQAOAPAVAAQAZAAAPgUQAOgTAAgjQAAgdgNgQQgOgQgXAAQgXgBgPASg");
	this.shape_116.setTransform(552.475,410.25);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgMB+IAAisIAZAAIAACsgAgMhgQgEgFAAgHQAAgHAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAQgHAAgFgFg");
	this.shape_117.setTransform(537.65,410.225);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgMCAIAAj/IAZAAIAAD/g");
	this.shape_118.setTransform(529.3,410.05);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AApBWIgkh8QgCgHgBgIIgBAAQAAAEgCALIgoB8IgaAAIg0isIAcAAIAkCDQACAGABAJIAAAAIAEgPIApiDIAWAAIAlCDIACAPIABAAQABgGACgJIAkiDIAaAAIg0Csg");
	this.shape_119.setTransform(504.75,414.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("Ag1BDQgVgYAAgqQAAgnAXgZQAWgaAhAAQAigBASAWQATAXAAAnIAAAMIh6AAQABAeAPARQAPAPAZAAQAdAAAZgUIAAAaQgXAQglABQgjgBgVgXgAgcg1QgPAOgDAYIBeAAQAAgZgMgNQgLgOgVAAQgSAAgOAOg");
	this.shape_120.setTransform(483.425,414.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AAtBYIAAhhQAAg4gpAAQgVAAgOAQQgNAQAAAYIAABhIgaAAIAAisIAaAAIAAAdIABAAQATggAkAAQAdAAAPASQAPASAAAjIAABog");
	this.shape_121.setTransform(464.8,414);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AhOAvIAAgWICdAAIAAAWgAhOgYIAAgWICdAAIAAAWg");
	this.shape_122.setTransform(435.075,412.775);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgMCAIAAj/IAZAAIAAD/g");
	this.shape_123.setTransform(411.1,410.05);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgMCAIAAj/IAZAAIAAD/g");
	this.shape_124.setTransform(402.8,410.05);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("Ag0BNQgPgOAAgXQAAguA5gJIAzgHQAAgtgkAAQgeAAgZAWIAAgcQAagQAfAAQA9AAAABAIAABvIgbAAIAAgbIAAAAQgSAggjAAQgZAAgPgOgAAAAEQgWADgJAIQgJAIAAAQQAAANAKAIQAJAIAPAAQAUAAAOgOQANgQAAgVIAAgRg");
	this.shape_125.setTransform(389.475,414.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgzBkIgBAAIAAAaIgaAAIAAj/IAaAAIAAByIABAAQAUgjAnAAQAhAAATAYQATAWAAAnQAAArgVAaQgWAagkAAQghAAgSgegAgkgKQgQAPAAAaIAAAZQAAAWAPAPQAOAPAVAAQAZAAAPgUQAOgTAAgjQAAgdgNgQQgOgQgXAAQgXgBgPASg");
	this.shape_126.setTransform(372.075,410.25);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AiCCNIAAjiIAeAAQAMgVAKgiIAQADQgFARgQAjIA3AAIAADbIgQAAIAAgbIhGAAIAAAigAhyBbIBGAAIAAhMIhGAAgAhygBIBGAAIAAhEIhGAAgAAsCMIgFgQIAcAAIATAAQAEAAAEgEQAEgEACgEQACgFADggQADggACgmIADhKIhUAAQgQAigVAeIgNgKQApg3ARhEIAQAFQgHAZgKAXIBfAAQgCBIgFA9QgFA+gFALQgGALgIAEQgHAEgXAAIgaAAgAAMgGIAOgJQAdAhARAoIgNAJQgQgjgfgmg");
	this.shape_127.setTransform(337.55,410.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AiKCCQAfgogBhLIAAhGIBnAAIAACtQAAAJgGAGQgFAGgKAAIgUABIgRgBIgFgRIAnABQADAAACgCQACgDABgDIAAguIhJAAQgJArgWAegAhcA1IBHAAIAAgnIhGAAIgBAngAhbgCIBGAAIAAglIhGAAgAA0CLIgGgSIAsACQAJAAgBgJIAAisIAQAAIAACuQAAAIgDAHQgFAFgHACQgGACgSAAIgXgBgAAjBWIAAiJIAQAAIAACJgAiJhTIAAgQIEUAAIAAAQgAAbhxQARgKAQgSIAPAIQgKAOgVAPgAhGiGIASgHQASAQANAPIgRAGQgMgOgUgQg");
	this.shape_128.setTransform(305.35,410.55);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AiKB+QBagqA0gsQA0grArhDIjdAAIAAgSIB6AAQgIgWgRgXIASgHQARAeAIAWIBmAAIAAASQhCBrhjA8QATAWApgBIB8AAIgGARIh2AAQgzAAgYgdQgeARglASg");
	this.shape_129.setTransform(273.675,410.45);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgXBvIAUhTIAYAAIgaBTgAgFhOQgGgGAAgIQAAgHAGgFQAFgFAGgBQAIABAFAFQAGAFgBAHQABAJgGAFQgFAFgIAAQgGAAgFgFg");
	this.shape_130.setTransform(957.15,371.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AglCUQA0g+AAhVQAAhVg0hAIAXAAQA0A+AABXQAABXg0A8g");
	this.shape_131.setTransform(948,368.95);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AAOCUQgzg7AAhYQAAhXAzg+IAYAAQg0BAAABVQAABVA0A+g");
	this.shape_132.setTransform(939.7,368.95);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgrBYIAAisIAaAAIAAAkIAAAAQAGgSAMgLQAMgKAOAAQAMAAAFADIAAAbQgHgFgNgBQgTAAgKASQgMASAAAbIAABYg");
	this.shape_133.setTransform(928.925,369.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("Ag0BNQgPgOAAgXQAAguA5gIIAzgIQAAgtgkAAQgeAAgZAWIAAgcQAagQAfAAQA9AAAABAIAABvIgbAAIAAgbIAAAAQgSAggjAAQgZAAgPgOgAAAAEQgWADgJAIQgJAIAAAQQAAANAKAIQAJAIAPAAQAUAAAOgOQANgQAAgVIAAgRg");
	this.shape_134.setTransform(912.475,369.65);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgzBlIgBAAIAAAZIgaAAIAAj/IAaAAIAAByIABAAQAUgjAnAAQAhAAATAYQATAWAAAnQAAArgVAaQgWAagkAAQghAAgSgdgAgkgKQgQAPAAAaIAAAZQAAAWAPAPQAOAPAVAAQAZAAAPgUQAOgTAAgjQAAgdgNgQQgOgQgXAAQgXgBgPASg");
	this.shape_135.setTransform(895.075,365.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgMANQgFgFAAgIQAAgGAFgGQAFgGAHABQAHgBAGAGQAFAGAAAGQAAAHgFAGQgGAFgHABQgHgBgFgFg");
	this.shape_136.setTransform(880.65,376.85);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgzBlIgBAAIAAAZIgaAAIAAj/IAaAAIAAByIABAAQAUgjAnAAQAhAAATAYQATAWAAAnQAAArgVAaQgWAagkAAQghAAgSgdgAgkgKQgQAPAAAaIAAAZQAAAWAPAPQAOAPAVAAQAZAAAPgUQAOgTAAgjQAAgdgNgQQgOgQgXAAQgXgBgPASg");
	this.shape_137.setTransform(867.425,365.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgNB+IAAisIAZAAIAACsgAgMhgQgEgFAAgHQAAgHAFgFQAEgFAHAAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAQgHAAgFgFg");
	this.shape_138.setTransform(852.6,365.675);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgMCAIAAj/IAZAAIAAD/g");
	this.shape_139.setTransform(844.25,365.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AApBWIgkh8QgDgHAAgIIgBAAQAAAEgCALIgnB8IgaAAIg1isIAcAAIAkCDQACAGAAAJIABAAIAEgPIAoiDIAXAAIAkCDIADAPIABAAQAAgGADgJIAkiDIAaAAIg0Csg");
	this.shape_140.setTransform(819.7,369.65);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("Ag1BDQgVgYAAgqQAAgnAXgZQAWgaAhAAQAigBASAWQATAXAAAnIAAAMIh6AAQABAeAPARQAPAPAZAAQAdAAAZgUIAAAaQgXAQglABQgjgBgVgXgAgcg1QgPAOgDAYIBeAAQAAgZgMgNQgLgOgVAAQgSAAgOAOg");
	this.shape_141.setTransform(798.375,369.65);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AAsBYIAAhhQAAg4goAAQgUAAgOAQQgOAQAAAYIAABhIgaAAIAAisIAaAAIAAAdIAAAAQAUggAlAAQAcAAAPASQAPASAAAjIAABog");
	this.shape_142.setTransform(779.75,369.45);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AhOAvIAAgWICdAAIAAAWgAhOgYIAAgWICdAAIAAAWg");
	this.shape_143.setTransform(750.025,368.225);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgrBYIAAisIAaAAIAAAkIAAAAQAGgSAMgLQAMgKAOAAQAMAAAFADIAAAbQgHgFgNgBQgTAAgKASQgMASAAAbIAABYg");
	this.shape_144.setTransform(725.575,369.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("Ag0BNQgPgOAAgXQAAguA5gIIAzgIQAAgtgkAAQgeAAgZAWIAAgcQAagQAfAAQA9AAAABAIAABvIgbAAIAAgbIAAAAQgSAggjAAQgZAAgPgOgAAAAEQgWADgJAIQgJAIAAAQQAAANAKAIQAJAIAPAAQAUAAAOgOQANgQAAgVIAAgRg");
	this.shape_145.setTransform(709.125,369.65);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgzBlIgBAAIAAAZIgaAAIAAj/IAaAAIAAByIABAAQAUgjAnAAQAhAAATAYQATAWAAAnQAAArgVAaQgWAagkAAQghAAgSgdgAgkgKQgQAPAAAaIAAAZQAAAWAPAPQAOAPAVAAQAZAAAPgUQAOgTAAgjQAAgdgNgQQgOgQgXAAQgXgBgPASg");
	this.shape_146.setTransform(691.725,365.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("Ag6BeQgUggABg5QAAg/AUghQAWghAmAAQBLAAAAB8QABA7gVAiQgVAggnAAQgkAAgUgfgAgyAEQgBBjAzAAQAzAAAAhlQAAhogxAAQg0AAAABqg");
	this.shape_147.setTransform(655.75,366.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("Ag6BeQgTggAAg5QAAg/AUghQAWghAmAAQBMAAgBB8QAAA7gUAiQgVAggnAAQglAAgTgfgAgyAEQgBBjAzAAQA0AAgBhlQAAhogxAAQg0AAAABqg");
	this.shape_148.setTransform(637.2,366.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AhJB7IAAgYIBHhHQAigiAIgPQAIgRAAgRQAAgWgMgMQgMgLgWAAQggAAgeAcIAAgcQAcgWAlAAQAfAAATARQASARABAfQAAAWgNAXQgMAUgjAjIg3A3IAAABIBwAAIAAAYg");
	this.shape_149.setTransform(618.3,366);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AAmBkQgmgXgUgsIAPgHQAQAiAVAPQAhgRAigeIAMALQgXAWgpAZQAnAWAzALIgJAQQg0gNgmgWgAhlB2QAFgDAAgFIAAhiIgqAAIAAgOIAzAAIAAiEIDPAAIAAAQIi+AAIAAAcICtAAIAAAQIitAAIAAAcICtAAIAAAPIitAAIAAAdIDRAAIAAAOIjaAAIAABkQAggJAogPIAEAQQgxASgrANg");
	this.shape_150.setTransform(593.525,366.225);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgJAUQAHgJAAgHQgMgFAAgJQAAgFAEgEQAEgFAGAAQAPAAAAATQAAAPgRAPg");
	this.shape_151.setTransform(561.3,368.475);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgbCNIAAh+IA0AAQAIgRAFgSIhNAAIAAgQICzAAIAAAQIhUAAIgNAjIBVAAIAABnQAAAVgbABIgJAAIgDgQIAKAAQANAAAAgKIAAhUIgfAAIAABiIgQAAIAAhiIgeAAIAABiIgQAAIAAhiIgeAAIAABvgAiLBsQANgCAMgDQAAhNgLhZIANgKIgXAAIAAgQIAqAAQgFgUgLgZIAQgFQAJAWAHAcIAoAAIAAAQIgXAAIAMALQgDAxgPBmQAJgCAPgGIABARQgfAMg/APgAhiBiIAPgDQARhtACg7IgtAAQALBaAABRgAgVhDIAAg5IAQAAIAAApIAuAAIAAg3IAQAAIAAA3IAyAAIAAgpIARAAIAAA5g");
	this.shape_152.setTransform(529.35,366);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AhlCJIAAgRIB3AAIAAhhIhBAAIAAgRICdAAIAAARIhLAAIAABhIBpAAIAAARgAiLBbQBAg8AZhdIhRAAIAAgRIBVAAQAIghACgYIASACQgHAqgDANICkAAIAAARIioAAQgaBjhFBFg");
	this.shape_153.setTransform(497.275,365.475);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AhVCNIAAiMQgRAUgZATIgNgNQA7gtAeg2IhQAAIAAgQIBYAAQALgUAKggIARAEQgIAZgLAXICeAAIAAAQIinAAQgPAdgUAXIAACFIBcAAIAAhaIhFAAIAAgRIBFAAIAAg6IARAAIAAA6IBNAAIAAARIhNAAIAABaIBkAAIAAARIjRAAIAAALg");
	this.shape_154.setTransform(465.35,365.85);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("ABuCLIAAgYIhPAAIAAAYIgRAAIAAiRIAqAAIAAiFIARAAIAAA3IBDAAIAAAQIhDAAIAAA+IA1AAIAACRgAAfBjIBPAAIAAhaIhPAAgAiLCEQANgbAIggIAOAEQgJAogLAWgAhYB8QAAgYgEgXIAQgBQADAdAAAeIgPACIAAgNgAg8BMIAPgDQAHAbADAdIgPADQgCgagIgegAgbBLIAPgDQALAZADAYIgNAEQgGgbgKgXgAiKBBIAAgQIA/AAIAAgfIg2AAIAAgPIA2AAIAAgZIg0AAIAAhtIB4AAIAABtIg0AAIAAAZIA0AAIAAAPIg0AAIAAAfIA8AAIAAAQgAg7gmIAkAAIAAhOIgkAAgAhvgmIAkAAIAAhOIgkAAgAg2g3QAJgXAEgZIANAGQgFAbgIAUgAhphhIAMgGQAJAcADATIgNAGQgEgXgHgYg");
	this.shape_155.setTransform(433.375,365.95);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AhwCIIAAiNIgaAAIAAgQIAaAAIAAhyIDgAAIAAByIAbAAIAAAQIgbAAIAAB0QAAAYgcAAIgTgBIgGgQIAQABQAPAAADgCQADgCAAgFIAAhzIg1AAIAACEIgRAAIAAiEIg0AAIAACEIgRAAIAAiEIg0AAIAACNgAArgVIA1AAIAAhhIg1AAgAgagVIA0AAIAAhhIg0AAgAhfgVIA0AAIAAhhIg0AAg");
	this.shape_156.setTransform(401.525,366.325);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("Ah+CMIAAhqIBZAAIAABoIgRAAIAAgUIg3AAIAAAWgAhtBmIA3AAIAAgzIg3AAgAgUCFIAAgPIBHAAIAAhfIg7AAIAAgRIA7AAIAAhMIg9AAIAAgRIA+AAQgHgWgLgWIAPgGQANAZAGAZIBGAAIAAARIhGAAIAABMIA/AAIAAARIg/AAIAABfIBHAAIAAAPgAh/ADIAAgPIBdAAIAAAPgAh/grIAAgRIBdAAIAAARgAiKhYIAAgRIAyAAQgFgMgJgQIARgGQAJARAHARIAuAAIAAARg");
	this.shape_157.setTransform(369.45,365.85);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgKAUQAIgJAAgHQgMgFAAgJQAAgFAEgEQAEgFAGAAQAPAAAAATQAAAPgRAPg");
	this.shape_158.setTransform(337.3,368.475);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AAhCMIAAgwIhIAAIAAgQIBIAAIAAgfIguAAIAAgPIAuAAIAAgiIARAAIAAAiIAuAAIAAAPIguAAIAAAfIBOAAIAAAQIhOAAIAAAwgAhgCMIAAidQgNAlgVAlIgLgQQAdgrAPg/IgmAAIAAgPIAnAAIAAg6IARAAIAAA6IAeAAIAAAPIgeAAIAAAUQARATASAcIgMAMQgIgOgPgWIAACigABFgQIg5AAQgbAqgjAbIgLgMQAegYAZghIgoAAIAAgPIAxAAQAJgQADgKIgwAAIAAgQIA2AAQAEgHAEgPIhIAAIAAgQIBLAAQAFgRACgLIAPACIgEAaIBSAAIAAAQIhXAAIgGAWIBSAAIAAAQIhYAAQgFAOgHAMIBzAAIAAAPIgxAAQARAfAmAZIgLANQgtghgRgkg");
	this.shape_159.setTransform(305.425,365.75);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AAmBkQgmgXgUgsIAPgHQAQAiAVAPQAhgRAigeIAMALQgXAWgpAZQAnAWAzALIgJAQQg0gNgmgWgAhlB2QAFgDAAgFIAAhiIgqAAIAAgOIAzAAIAAiEIDPAAIAAAQIi+AAIAAAcICtAAIAAAQIitAAIAAAcICtAAIAAAPIitAAIAAAdIDRAAIAAAOIjaAAIAABkQAggJAogPIAEAQQgxASgrANg");
	this.shape_160.setTransform(273.525,366.225);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgYBvIAUhTIAZAAIgaBTgAgGhOQgFgGAAgIQAAgHAFgFQAGgFAHgBQAGABAGAFQAGAFAAAHQAAAJgGAFQgGAFgGAAQgHAAgGgFg");
	this.shape_161.setTransform(916.6,327.15);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AglCUQA0g+AAhVQAAhVg0hAIAYAAQAzA+AABXQAABXgzA8g");
	this.shape_162.setTransform(907.45,324.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AAOCUQgzg7AAhYQAAhXAzg+IAYAAQg0BAAABVQAABVAzA+g");
	this.shape_163.setTransform(899.15,324.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("Ag4BQIAAgdQAXARAbAAQAkAAAAgZQAAgLgIgGQgIgIgXgIQgcgLgJgLQgJgLAAgRQAAgWATgOQATgNAaAAQAWAAASAIIAAAbQgTgNgZAAQgOAAgKAHQgKAHAAALQAAALAHAHQAHAFAWAKQAeAKAKALQAKAMAAAQQAAAYgTANQgTANgdABQgbAAgTgLg");
	this.shape_164.setTransform(885.825,325.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("Ag4BQIAAgdQAXARAbAAQAkAAAAgZQAAgLgIgGQgIgIgXgIQgcgLgJgLQgJgLAAgRQAAgWATgOQATgNAaAAQAWAAASAIIAAAbQgTgNgZAAQgOAAgKAHQgKAHAAALQAAALAHAHQAHAFAWAKQAeAKAKALQAKAMAAAQQAAAYgTANQgTANgdABQgbAAgTgLg");
	this.shape_165.setTransform(871.225,325.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("Ag9BCQgXgYABgnQAAgrAXgZQAYgYAnAAQAmAAAWAXQAVAZAAApQAAApgXAYQgXAagmAAQglAAgYgZgAgpgxQgQATAAAfQAAAfAQASQAQASAaAAQAbABAPgTQAPgRAAggQAAghgPgRQgOgSgcAAQgaAAgQASg");
	this.shape_166.setTransform(853.7,325.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgrBYIAAisIAaAAIAAAkIAAAAQAGgSAMgLQAMgKAOAAQAMAAAFADIAAAbQgHgFgNAAQgTAAgKARQgMASAAAbIAABYg");
	this.shape_167.setTransform(839.425,324.95);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgpBCQgXgXABgnQgBgqAZgZQAYgaAoAAQAWgBARAJIAAAcQgSgOgXAAQgaAAgQATQgSATAAAfQAAAfAQARQAQATAagBQAYAAATgPIAAAZQgUAMgaABQglAAgWgZg");
	this.shape_168.setTransform(824.35,325.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgMANQgFgFAAgIQAAgGAFgGQAFgGAHABQAIgBAEAGQAGAGAAAGQAAAHgGAGQgFAFgHABQgHgBgFgFg");
	this.shape_169.setTransform(812.55,332.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgzBkIgBAAIAAAaIgaAAIAAj/IAaAAIAAByIABAAQAUgjAnAAQAhAAATAYQATAWAAAnQAAArgVAaQgWAagkAAQghAAgSgegAgkgKQgQAPAAAaIAAAZQAAAWAPAPQAOAPAVAAQAZAAAPgUQAOgTAAgjQAAgdgNgQQgOgQgXAAQgXgBgPASg");
	this.shape_170.setTransform(799.325,321.15);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgMB+IAAisIAZAAIAACsgAgLhgQgFgFAAgHQAAgHAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_171.setTransform(784.5,321.125);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgMCAIAAj/IAZAAIAAD/g");
	this.shape_172.setTransform(776.15,320.95);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AApBWIgkh8QgDgHAAgIIAAAAQgBAEgCALIgnB8IgbAAIg0isIAbAAIAlCDQACAGABAJIABAAIADgPIApiDIAWAAIAkCDIADAPIACAAQgBgGADgJIAkiDIAaAAIg0Csg");
	this.shape_173.setTransform(751.6,325.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("Ag1BDQgVgYAAgqQAAgnAXgZQAWgaAhAAQAigBASAWQATAXAAAnIAAAMIh6AAQABAeAPARQAPAPAZAAQAdAAAZgUIAAAaQgXAQglABQgjgBgVgXgAgcg1QgPAOgDAYIBeAAQAAgZgMgNQgLgOgVAAQgSAAgOAOg");
	this.shape_174.setTransform(730.275,325.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AAtBYIAAhhQAAg4gpAAQgVAAgOAQQgNAQAAAYIAABhIgaAAIAAisIAaAAIAAAdIABAAQATggAkAAQAdAAAPASQAPASAAAjIAABog");
	this.shape_175.setTransform(711.65,324.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AhOAvIAAgWICdAAIAAAWgAhOgYIAAgWICdAAIAAAWg");
	this.shape_176.setTransform(681.925,323.675);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("Ag4BQIAAgdQAXARAbAAQAkAAAAgZQAAgLgIgGQgIgIgXgIQgcgLgJgLQgJgLAAgRQAAgWATgOQATgNAaAAQAWAAASAIIAAAbQgTgNgZAAQgOAAgKAHQgKAHAAALQAAALAHAHQAHAFAWAKQAeAKAKALQAKAMAAAQQAAAYgTANQgTANgdABQgbAAgTgLg");
	this.shape_177.setTransform(654.925,325.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("Ag4BQIAAgdQAXARAbAAQAkAAAAgZQAAgLgIgGQgIgIgXgIQgcgLgJgLQgJgLAAgRQAAgWATgOQATgNAaAAQAWAAASAIIAAAbQgTgNgZAAQgOAAgKAHQgKAHAAALQAAALAHAHQAHAFAWAKQAeAKAKALQAKAMAAAQQAAAYgTANQgTANgdABQgbAAgTgLg");
	this.shape_178.setTransform(640.325,325.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("Ag8BCQgYgYAAgnQAAgrAYgZQAXgYAoAAQAmAAAWAXQAWAZAAApQAAApgYAYQgXAagmAAQgmAAgWgZgAgpgxQgQATAAAfQAAAfAQASQAQASAaAAQAbABAPgTQAPgRAAggQAAghgPgRQgOgSgcAAQgaAAgQASg");
	this.shape_179.setTransform(622.8,325.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgrBYIAAisIAaAAIAAAkIAAAAQAGgSAMgLQAMgKAOAAQAMAAAFADIAAAbQgHgFgNAAQgTAAgKARQgMASAAAbIAABYg");
	this.shape_180.setTransform(608.525,324.95);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgpBCQgWgXgBgnQABgqAYgZQAZgaAnAAQAWgBASAJIAAAcQgUgOgWAAQgaAAgRATQgRATAAAfQAAAfAQARQARATAagBQAWAAAVgPIAAAZQgVAMgbABQgjAAgXgZg");
	this.shape_181.setTransform(593.45,325.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AAUA6IALgMQBBApAmAoIgMANQgpgsg9gmgAiLB7QB2gaAKhMIh/AAIAAgRIAlAAIAAhjIBgAAIAAgsIAQAAIAAAsIBeAAIAABjIAjAAIAAARIiGAAQgFAkgfAhQghAhhDAPgAAJAEIBOAAIAAhSIhMAAIgCBSgAhUAEIBLAAQADg0AAgeIhOAAg");
	this.shape_182.setTransform(561.35,321.325);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgHCMIAAhgIhxAAIAAh+IBxAAIAAg5IAQAAIAAA5IBxAAIAAB+IhxAAIAABggAAJAbIBgAAIAAhcIhgAAgAhnAbIBgAAIAAhcIhgAAg");
	this.shape_183.setTransform(529.45,321.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AhVCNIAAiMQgSAUgYAUIgNgOQA7gtAeg2IhQAAIAAgQIBYAAQALgUAKggIARAEQgIAZgLAXICfAAIAAAQIinAAQgRAdgTAXIAACFIBcAAIAAhaIhGAAIAAgRIBGAAIAAg6IARAAIAAA6IBNAAIAAARIhNAAIAABaIBjAAIAAARIjQAAIAAALg");
	this.shape_184.setTransform(497.35,321.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("ABuCLIAAgYIhPAAIAAAYIgRAAIAAiRIAqAAIAAiFIARAAIAAA3IBDAAIAAAQIhDAAIAAA+IA1AAIAACRgAAfBjIBPAAIAAhaIhPAAgAiLCEQANgbAIggIAOAEQgJAogLAWgAhYB8QAAgYgEgXIAQgBQADAdAAAeIgPACIAAgNgAg8BMIAPgDQAHAbADAdIgPADQgCgagIgegAgbBLIAPgDQALAZADAXIgNAFQgGgbgKgXgAiKBBIAAgQIA/AAIAAgfIg2AAIAAgPIA2AAIAAgaIg0AAIAAhsIB4AAIAABsIg0AAIAAAaIA0AAIAAAPIg0AAIAAAfIA8AAIAAAQgAg7gmIAkAAIAAhOIgkAAgAhvgmIAkAAIAAhOIgkAAgAg2g3QAJgXAEgZIANAGQgFAbgIAVgAhphhIAMgGQAJAcADATIgNAGQgEgXgHgYg");
	this.shape_185.setTransform(465.375,321.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AhwCIIAAiNIgaAAIAAgQIAaAAIAAhyIDgAAIAAByIAbAAIAAAQIgbAAIAAB0QAAAYgcAAIgTgBIgGgQIAQABQAPAAADgCQADgCAAgFIAAhzIg1AAIAACEIgRAAIAAiEIg0AAIAACEIgRAAIAAiEIg0AAIAACNgAArgVIA1AAIAAhhIg1AAgAgagVIA0AAIAAhhIg0AAgAhfgVIA0AAIAAhhIg0AAg");
	this.shape_186.setTransform(433.525,321.775);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("Ah+CMIAAhqIBZAAIAABoIgRAAIAAgUIg2AAIAAAWgAhsBmIA2AAIAAgzIg2AAgAgUCFIAAgPIBHAAIAAhfIg7AAIAAgRIA7AAIAAhMIg9AAIAAgRIA+AAQgGgWgMgWIAQgGQANAZAFAZIBGAAIAAARIhGAAIAABMIA/AAIAAARIg/AAIAABfIBHAAIAAAPgAh/ADIAAgPIBdAAIAAAPgAh/grIAAgRIBdAAIAAARgAiKhYIAAgRIAxAAQgEgMgJgQIAQgGQALARAFARIAvAAIAAARg");
	this.shape_187.setTransform(401.45,321.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgJAUQAHgJAAgHQgMgFAAgJQAAgFAEgEQAEgFAGAAQAPAAAAATQAAAPgSAPg");
	this.shape_188.setTransform(369.3,323.925);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgHCNIAAhlIiDAAIAAgPICDAAIAAgbIAPAAIAAAbICDAAIAAAPIiDAAIAABlgAAnBHIAMgMQA5AgAhAeIgNANQgdgdg8gigAiMB2QA4gZAiggIAOALQgpAlgzAXgAiKgJQAxgdACg0IgwAAIAAgRIAxAAIACghIAQAAQAAAQgCARIBBAAQgBAqgEAZQgFAYgGAHQgGAIgJABQgIABgdAAIgFgPIAYABQAKAAAFgDQAFgCADgGQACgFAEgVQADgUAAgUIgyAAQgEA8gyAhgAAYgIIAAhuIBeAAIAABugAAogYIA+AAIAAhOIg+AAg");
	this.shape_189.setTransform(337.475,321.35);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("Ag3CNIgGgTQANACANAAQAUAAAEgCQADgDAAgEIAAhDIiCAAIAAgRICCAAIAAgUQAqgYAYgSIiRAAIAAgRICsAAIAAARQgeAYguAaIAAAMICCAAIAAARIiCAAIAABFQAAANgIAFQgHAGgfAAIgSAAgABtgfIAAg6IjZAAIAAA6IgRAAIAAhLIB5AAQgEgKgMgQIAPgIQAKAQAJASIBwAAIAABLg");
	this.shape_190.setTransform(305.475,321.325);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgHCMIAAiaIiDAAIAAgSICDAAIAAhrIARAAIAABrICBAAIAAASIiBAAIAACag");
	this.shape_191.setTransform(273.45,321.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AhUCEQgOAAgKgJQgKgJAAgPIAAjWIgUAAIAAgQIEOAAIAAAQIjpAAIAADWQAAAHAGAFQAGAFAFAAIDfAAIAAAQgAAiBXIAAhRIBTAAIAABRgAAzBIIAyAAIAAgyIgyAAgAhOBWIAAhQIBTAAIAABQgAg9BHIAyAAIAAgxIgyAAgAgxgUIAAhFICBAAIAABFgAgggkIBgAAIAAgmIhgAAg");
	this.shape_192.setTransform(337.425,276.85);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AAjCNIAAhmIheAAIAAgSIBeAAIAAhPIg3AAQgMAXgTAcIgMgMQAggtAUg+IARAGIgSAuIAvAAIAAhCIARAAIAABCIBSAAIAAAQIhSAAIAABPIBaAAIAAASIhaAAIAABmgAhfCNIAAi9QgSAegSAVIgKgRQAngqAehUIARAGIgPAkIgJAVIAADag");
	this.shape_193.setTransform(305.375,276.85);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AiKB6QAkgQAZgeQAYggABhFIhRAAIAAgSIEMAAIAAASIhdAAIAACCQAAAGAGACQAGACAQAAQAfAAAEgBQADgBAFgEQADgEADgUQADgUAAgUIARAGQgBAWgFAXQgEAXgLAHQgJAFggAAIgfgBQgKgBgFgGQgHgGABgKIAAiEIg7AAQgCA8gTAmQgVAmgzAbgAhsh4IAAgRIDbAAIAAARg");
	this.shape_194.setTransform(273.4,277.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgyBSIAAgVQASAOAXAAQARAAAMgJQAMgJAAgQQAAgkgyAAIgOAAIAAgPIANAAQAsAAAAghQAAgfghAAQgSAAgRANIAAgTQARgLAXAAQAUAAAOAMQANAMAAATQABAigkALIAAAAQATACAMALQALALAAASQAAAYgSAOQgRAPgaAAQgZAAgPgKg");
	this.shape_195.setTransform(1047.5,268.025);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgqBFQgOgYAAgpQAAguAPgYQAPgZAcAAQA3AAAABbQAAAsgPAYQgPAYgcAAQgbAAgOgXgAglADQAABIAlAAQAmAAAAhJQAAhMglAAQgmAAAABNg");
	this.shape_196.setTransform(1034.025,268.025);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AAhBeIAAhJQAAgogeAAQgOAAgLAMQgKALAAASIAABIIgTAAIAAi7IATAAIAABSIABAAQAOgYAaAAQArAAAAAzIAABOg");
	this.shape_197.setTransform(1020.225,267.525);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgeAxQgQgSAAgcQAAgfASgSQASgTAcAAQARAAAMAGIAAAUQgOgKgQAAQgSAAgNAOQgNAOAAAWQAAAXAMANQAMANATAAQARAAAOgLIAAASQgPAJgTAAQgaAAgRgRg");
	this.shape_198.setTransform(1007.225,270.575);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgGAFQgLgHgJAAQgQAAgBAVIgRAAQABgSAJgJQAJgKAQAAQANAAAPALQAQAKAIAAQAIAAAEgFQAGgGAAgKIAQAAQgBASgJAJQgKAKgOAAQgOAAgTgOg");
	this.shape_199.setTransform(992.65,269.55);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgwBbIAAgRIAoAAIAAiLIgpANIAAgTIA7gTIAACkIAoAAIAAARg");
	this.shape_200.setTransform(977.5,267.825);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgqBFQgOgYAAgpQAAguAPgYQAPgZAcAAQA3AAAABbQAAAsgPAYQgPAYgcAAQgbAAgOgXgAglADQAABIAlAAQAmAAAAhJQAAhMglAAQgmAAAABNg");
	this.shape_201.setTransform(963.675,268.025);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AAhBeIAAhJQAAgogeAAQgOAAgLAMQgKALAAASIAABIIgTAAIAAi7IATAAIAABSIABAAQAOgYAaAAQArAAAAAzIAABOg");
	this.shape_202.setTransform(949.825,267.525);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgeAxQgQgSAAgcQAAgfASgSQASgTAcAAQARAAAMAGIAAAUQgOgKgQAAQgSAAgNAOQgNAOAAAWQAAAXAMANQAMANATAAQARAAAOgLIAAASQgPAJgTAAQgaAAgRgRg");
	this.shape_203.setTransform(936.825,270.575);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgyBSIAAgVQASAOAXAAQASAAALgJQAMgJAAgQQAAgkgyAAIgPAAIAAgPIAPAAQArAAAAghQAAgfghAAQgTAAgQANIAAgTQARgLAXAAQAUAAAOAMQANAMABATQgBAigjALIAAAAQATACALALQAMALAAASQAAAYgRAOQgSAPgaAAQgZAAgPgKg");
	this.shape_204.setTransform(1029.2,235.575);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgqBFQgOgYAAgpQAAguAPgYQAPgZAcAAQA3AAAABbQAAAsgPAYQgPAYgcAAQgbAAgOgXgAglADQAABIAlAAQAmAAAAhJQAAhMglAAQgmAAAABNg");
	this.shape_205.setTransform(1015.725,235.575);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgIBeIAAi7IASAAIAAC7g");
	this.shape_206.setTransform(1005.85,235.075);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgpA7IAAgWQARANATAAQAbAAAAgSQAAgIgGgGQgGgFgRgGQgUgHgHgIQgGgJgBgMQAAgQAPgKQANgKAUAAQAQAAANAFIAAAUQgOgJgTAAQgJAAgIAFQgHAFAAAIQAAAJAFAEQAFAEAQAHQAWAIAHAIQAIAIAAANQAAARgPAJQgOAKgUAAQgUAAgOgHg");
	this.shape_207.setTransform(997.6,238.125);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgFAFQgMgHgJAAQgRAAgBAVIgPAAQAAgSAJgJQAKgKAPAAQANAAAPALQARAKAHAAQAIAAAFgFQAEgFAAgLIAQAAQAAASgJAJQgJAKgQAAQgNAAgSgOg");
	this.shape_208.setTransform(983.5,237.1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgwBbIAAgRIAoAAIAAiLIgqANIAAgTIA8gTIAACkIApAAIAAARg");
	this.shape_209.setTransform(968.35,235.375);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AgqBFQgOgYAAgpQAAguAPgYQAPgZAcAAQA3AAAABbQAAAsgPAYQgPAYgcAAQgbAAgOgXgAglADQAABIAlAAQAmAAAAhJQAAhMglAAQgmAAAABNg");
	this.shape_210.setTransform(954.475,235.575);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgIBeIAAi7IASAAIAAC7g");
	this.shape_211.setTransform(944.65,235.075);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AgoA7IAAgWQAQANAUAAQAaAAAAgSQAAgIgGgGQgGgFgQgGQgVgHgGgIQgIgJABgMQgBgQAOgKQAPgKASAAQARAAAMAFIAAAUQgNgJgSAAQgLAAgGAFQgIAFAAAIQAAAJAFAEQAFAEAQAHQAVAIAIAIQAHAIAAANQAAARgOAJQgNAKgVAAQgTAAgOgHg");
	this.shape_212.setTransform(936.35,238.125);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgOAvIAAhLIgVAAIAAgRIAVAAIAAgfIASgGIAAAlIAhAAIAAARIghAAIAABHQAAANAFAGQAEAFAKAAQAIAAAGgEIAAAQQgIAEgLAAQgfAAgBgkg");
	this.shape_213.setTransform(1113.6,203.875);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AgPBfIAAhtIgWAAIAAgRIAWAAIAAgVQAAgTALgMQALgLAQAAQAKAAAFACIAAASQgGgEgIAAQgVAAAAAbIAAAUIAeAAIAAARIgeAAIAABtg");
	this.shape_214.setTransform(1105.525,202.45);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgmAxQgQgRAAggQAAgcARgSQAQgTAYAAQAZAAANAQQAOAQAAAcIAAAKIhZAAQABAVALAMQALAMASAAQAVAAASgOIAAASQgQAMgcAAQgZAAgPgRgAgUgnQgLAKgDASIBFAAQAAgSgIgKQgJgKgPAAQgNAAgKAKg");
	this.shape_215.setTransform(1094.575,205.625);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgtBZIAAixIAUAAIAACfIBGAAIAAASg");
	this.shape_216.setTransform(1082.95,203.075);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AAhBBIAAhIQAAgpgeAAQgPAAgKAMQgKAMAAARIAABIIgTAAIAAh+IATAAIAAAVIABAAQAOgYAaAAQAVAAALAOQALANAAAZIAABNg");
	this.shape_217.setTransform(1069.025,205.475);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AgOAvIAAhLIgVAAIAAgRIAVAAIAAgfIASgGIAAAlIAgAAIAAARIggAAIAABHQABANAEAGQAEAFAKAAQAIAAAFgEIAAAQQgHAEgLAAQggAAAAgkg");
	this.shape_218.setTransform(1057.45,203.875);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AglBKIgBAAIAAASIgTAAIAAi6IATAAIAABTIABAAQAPgZAcAAQAYAAAOARQAOARAAAbQAAAggQATQgQATgaAAQgYAAgNgVgAgagIQgMAMAAATIAAASQAAAQALALQALALAPAAQASAAALgOQAKgPABgZQAAgVgKgMQgLgMgQAAQgRAAgLAMg");
	this.shape_219.setTransform(1046.35,202.725);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AgPAeIAOg7IASAAIgUA7g");
	this.shape_220.setTransform(1029.35,212.175);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AgOAvIAAhLIgVAAIAAgRIAVAAIAAgfIATgGIAAAlIAfAAIAAARIgfAAIAABHQAAANAEAGQAEAFAKAAQAIAAAFgEIAAAQQgGAEgMAAQggAAAAgkg");
	this.shape_221.setTransform(1022.9,203.875);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AAhBeIAAhJQAAgogeAAQgOAAgLAMQgKALAAASIAABIIgTAAIAAi7IATAAIAABSIABAAQAOgYAaAAQArAAAAAzIAABOg");
	this.shape_222.setTransform(1011.725,202.575);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AgxBVIAAgTQAWAMAUAAQAuAAAAgyIAAgPIgBAAQgPAZgcAAQgXAAgOgRQgPgRAAgbQAAggAQgUQAPgSAagBQAaAAAMAVIABAAIAAgSIATAAIAAB0QAABFhBAAQgXABgTgKgAgahAQgLAOAAAaQgBAVALAMQALAMAQAAQAQABAMgMQALgMAAgTIAAgTQAAgPgLgMQgKgLgQABQgRgBgLAOg");
	this.shape_223.setTransform(996.6,208.45);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgJBcIAAh9IASAAIAAB9gAgIhGQgEgEAAgEQAAgGAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAGQAAAEgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_224.setTransform(986.575,202.7);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AAnBZIgdgyQgKgQgHgFQgHgFgLAAIgRAAIAABMIgUAAIAAixIA0AAQAYAAAOANQAPAMAAAXQAAAkgoAKIAAABQAIADAFAFQAEAFAKAQIAhA1gAgqgEIAdAAQAPAAAKgKQAKgJAAgQQAAgOgJgIQgJgJgRAAIgdAAg");
	this.shape_225.setTransform(977.075,203.075);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AAhBBIAAhIQAAgpgeAAQgPAAgKAMQgKAMAAARIAABIIgTAAIAAh+IATAAIAAAVIABAAQAOgYAaAAQAVAAALAOQALANAAAZIAABNg");
	this.shape_226.setTransform(961.475,205.475);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AgOAvIAAhLIgVAAIAAgRIAVAAIAAgfIASgGIAAAlIAgAAIAAARIggAAIAABHQABANAEAGQAEAFAKAAQAIAAAFgEIAAAQQgHAEgLAAQggAAAAgkg");
	this.shape_227.setTransform(949.9,203.875);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AglBKIAAAAIAAASIgUAAIAAi6IAUAAIAABTIAAAAQAPgZAcAAQAYAAAOARQAOARAAAbQAAAggPATQgRATgaAAQgYAAgNgVgAgbgIQgLAMABATIAAASQAAAQAKALQALALAPAAQASAAAKgOQALgPAAgZQAAgVgKgMQgKgMgRAAQgQAAgMAMg");
	this.shape_228.setTransform(938.75,202.725);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgQAeIAPg7IASAAIgTA7g");
	this.shape_229.setTransform(1116.5,179.725);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AAhBBIAAhIQAAgpgeAAQgPAAgKAMQgKAMAAARIAABIIgTAAIAAh+IATAAIAAAVIABAAQAOgYAaAAQAVAAALAOQALANAAAZIAABNg");
	this.shape_230.setTransform(1107.375,173.025);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AAeA/IgahaIgCgMIgBAAIgBALIgdBbIgTAAIgnh9IAUAAIAbBfIACALIABAAIACgMIAeheIAQAAIAbBfIACALIABAAQAAgFACgGIAahfIATAAIgmB9g");
	this.shape_231.setTransform(1091.025,173.175);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AgsAxQgRgSAAgdQAAgfARgSQARgSAdAAQAcAAAQARQAQASAAAeQAAAegRASQgRASgcAAQgbAAgRgRgAgdgjQgMANgBAXQABAWAMAOQALANASAAQAUAAALgNQAMgNAAgYQAAgXgMgNQgKgNgVAAQgSAAgLAOg");
	this.shape_232.setTransform(1074.55,173.175);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AhGBZIAAixIAwAAQBdAAAABXQAAAogZAZQgaAZgsAAgAgyBHIAbAAQAiAAAUgTQATgTAAgiQAAhFhIAAIgcAAg");
	this.shape_233.setTransform(1058.825,170.625);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AAhBBIAAhIQAAgpgeAAQgPAAgKAMQgKAMAAARIAABIIgTAAIAAh+IATAAIAAAVIABAAQAOgYAaAAQAVAAALAOQALANAAAZIAABNg");
	this.shape_234.setTransform(1042.425,173.025);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AgNAvIAAhLIgXAAIAAgRIAXAAIAAgfIASgGIAAAlIAfAAIAAARIgfAAIAABHQAAANADAGQAFAFAKAAQAIAAAFgEIAAAQQgGAEgMAAQgfAAAAgkg");
	this.shape_235.setTransform(1030.85,171.425);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AglBKIgBAAIAAASIgTAAIAAi6IATAAIAABTIABAAQAPgZAcAAQAYAAAOARQAOARAAAbQAAAggQATQgPATgbAAQgYAAgNgVgAgbgIQgKAMgBATIAAASQAAAQALALQALALAPAAQASAAALgOQAKgPABgZQgBgVgJgMQgLgMgQAAQgRAAgMAMg");
	this.shape_236.setTransform(1019.7,170.275);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AgQAeIAPg7IASAAIgTA7g");
	this.shape_237.setTransform(1002.75,179.725);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("Ag5BeIAAi4IAUAAIAAAXIAAAAQAPgaAcAAQAYAAAOARQAOARAAAdQAAAegPAUQgQASgbABQgYgBgNgVIAAAAIAABNgAgbhBQgLANABATIAAASQAAAPAKALQAKALAQAAQASAAAKgOQALgOAAgZQAAgVgKgNQgKgMgRAAQgQAAgMAMg");
	this.shape_238.setTransform(993.65,175.95);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AhAATIAAhsIATAAIAABqQAAA4AuAAQAtAAAAg2IAAhsIATAAIAABpQAABKhCAAQg/AAAAhHg");
	this.shape_239.setTransform(977.125,170.775);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AAhBBIAAhIQAAgpgeAAQgPAAgKAMQgKAMAAARIAABIIgTAAIAAh+IATAAIAAAVIABAAQAOgYAaAAQAVAAALAOQALANAAAZIAABNg");
	this.shape_240.setTransform(961.475,173.025);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AgOAvIAAhLIgVAAIAAgRIAVAAIAAgfIASgGIAAAlIAgAAIAAARIggAAIAABHQABANAEAGQAEAFAKAAQAIAAAFgEIAAAQQgHAEgLAAQggAAAAgkg");
	this.shape_241.setTransform(949.9,171.425);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AglBKIAAAAIAAASIgUAAIAAi6IAUAAIAABTIAAAAQAPgZAcAAQAYAAAOARQAOARAAAbQAAAggPATQgRATgaAAQgYAAgNgVgAgbgIQgLAMABATIAAASQAAAQAKALQALALAPAAQASAAAKgOQALgPAAgZQAAgVgKgMQgKgMgRAAQgQAAgMAMg");
	this.shape_242.setTransform(938.75,170.275);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("Ag1BaIAAgRIA0g0QAYgZAGgLQAGgMAAgNQAAgQgJgIQgJgJgQAAQgXAAgWAVIAAgVQAVgQAaAAQAXAAAOANQAOAMAAAWQAAARgJAQQgJAPgaAaIgoAoIAAABIBSAAIAAARg");
	this.shape_243.setTransform(1070.625,137.975);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AgqBFQgOgYAAgpQAAguAPgYQAPgZAcAAQA3AAAABbQAAAsgPAYQgPAYgcAAQgbAAgOgXgAglADQAABIAlAAQAmAAAAhJQAAhMglAAQgmAAAABNg");
	this.shape_244.setTransform(1057.275,138.125);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AAhBBIAAhIQAAgpgeAAQgPAAgKAMQgKAMAAARIAABIIgTAAIAAh+IATAAIAAAVIABAAQAOgYAaAAQAVAAALAOQALANAAAZIAABNg");
	this.shape_245.setTransform(1043.475,140.525);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AgOAvIAAhLIgWAAIAAgRIAWAAIAAgfIATgGIAAAlIAfAAIAAARIgfAAIAABHQAAANADAGQAFAFAKAAQAIAAAFgEIAAAQQgGAEgMAAQggAAAAgkg");
	this.shape_246.setTransform(1031.9,138.925);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AglBKIAAAAIAAASIgUAAIAAi6IAUAAIAABTIAAAAQAPgZAcAAQAYAAAOARQAOARAAAbQAAAggPATQgQATgbAAQgYAAgNgVgAgbgIQgLAMABATIAAASQAAAQAKALQALALAPAAQASAAAKgOQALgPAAgZQAAgVgKgMQgJgMgSAAQgQAAgMAMg");
	this.shape_247.setTransform(1020.75,137.775);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AgGAFQgMgHgHAAQgRAAgBAVIgRAAQABgSAJgJQAJgKAQAAQANAAAPALQAQAKAJAAQAHAAAEgFQAGgGAAgKIAQAAQgBASgJAJQgKAKgOAAQgOAAgTgOg");
	this.shape_248.setTransform(1004.25,139.65);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AgwBbIAAgRIAoAAIAAiLIgqANIAAgTIA8gTIAACkIApAAIAAARg");
	this.shape_249.setTransform(989.15,137.925);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AgqBFQgOgYAAgpQAAguAPgYQAPgZAcAAQA3AAAABbQAAAsgPAYQgPAYgcAAQgbAAgOgXgAglADQAABIAlAAQAmAAAAhJQAAhMglAAQgmAAAABNg");
	this.shape_250.setTransform(975.275,138.125);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AAhBBIAAhIQAAgpgeAAQgPAAgKAMQgKAMAAARIAABIIgTAAIAAh+IATAAIAAAVIABAAQAOgYAaAAQAVAAALAOQALANAAAZIAABNg");
	this.shape_251.setTransform(961.475,140.525);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgOAvIAAhLIgVAAIAAgRIAVAAIAAgfIASgGIAAAlIAgAAIAAARIggAAIAABHQABANAEAGQAEAFAKAAQAIAAAFgEIAAAQQgHAEgLAAQggAAAAgkg");
	this.shape_252.setTransform(949.9,138.925);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AglBKIAAAAIAAASIgUAAIAAi6IAUAAIAABTIAAAAQAPgZAcAAQAYAAAOARQAOARAAAbQAAAggPATQgRATgaAAQgYAAgNgVgAgbgIQgLAMABATIAAASQAAAQAKALQALALAPAAQASAAAKgOQALgPAAgZQAAgVgKgMQgKgMgRAAQgQAAgMAMg");
	this.shape_253.setTransform(938.75,137.775);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#00FF00").ss(3,1,1).p("EhNjggWMCbHAAAMAAABAtMibHAAAg");
	this.shape_254.setTransform(571.525,455.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#006600").s().p("EhNjAgXMAAAhAtMCbHAAAMAAABAtg");
	this.shape_255.setTransform(571.525,455.2);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AgwDDQBEhSAAhwQgBhvhEhUIAfAAQBEBRAABzQAAByhEBPg");
	this.shape_256.setTransform(546.65,803.975);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AATDDQhEhOAAhzQAAhzBEhRIAfAAQhFBUAABvQAABvBEBTg");
	this.shape_257.setTransform(535.775,803.975);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AhnCoIAAlKIAjAAIAAAoIABAAQAbgtAyAAQArAAAaAeQAZAegBA0QAAA3gbAjQgcAigwAAQgrAAgYgmIgBAAIAACJgAgwh0QgUAWAAAiIAAAhQAAAbATAUQATAUAcAAQAhAAASgaQAUgZAAgtQAAgngSgVQgTgWgeAAQgeAAgUAWg");
	this.shape_258.setTransform(515.2,809.875);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AgQCoIAAlPIAhAAIAAFPg");
	this.shape_259.setTransform(495.7,799.475);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AhGBYQgbgfAAg5QAAgyAegiQAdgiAsAAQArAAAZAdQAYAdAAAzIAAARIigAAQABAnAUAVQAUAVAhAAQAmAAAhgZIAAAgQgeAXgxAAQguAAgcgfgAglhHQgTASgFAgIB8AAQAAgggPgSQgQgRgbAAQgYAAgSARg");
	this.shape_260.setTransform(478.625,804.925);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AA7CoIAAiDQAAhHg2AAQgaAAgSAVQgTAUAAAgIAACBIgiAAIAAlPIAiAAIAACTIABAAQAagrAwAAQBMAAAABbIAACMg");
	this.shape_261.setTransform(454.125,799.475);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AgPARQgIgHAAgKQAAgJAIgHQAHgHAIAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgIAAgHgHg");
	this.shape_262.setTransform(436.225,814.325);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AhnCoIAAlKIAjAAIAAAoIABAAQAbgtAyAAQArAAAaAeQAYAeAAA0QAAA3gbAjQgcAigwAAQgrAAgYgmIgBAAIAACJgAgwh0QgUAWAAAiIAAAhQAAAbATAUQATAUAcAAQAhAAASgaQAUgZAAgtQAAgngSgVQgTgWgeAAQgdAAgVAWg");
	this.shape_263.setTransform(418.9,809.875);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AB9B0IAAiBQAAgogMgRQgMgQgbAAQgYAAgQAWQgRAVAAAfIAACAIghAAIAAiGQAAhEg0AAQgZAAgQAVQgPAUAAAhIAACAIgjAAIAAjiIAjAAIAAAkIABAAQAXgpAuAAQAXAAASANQAQANAHAVQAYgvAzAAQBLAAAABcIAACLg");
	this.shape_264.setTransform(385.65,804.65);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AhgCfIAAk9IBZAAQAnAAAYAUQAYAUABAhQAAAagPAUQgOAVgaAIIAAABQAgADATAUQATAVABAhQgBAogdAaQgdAZgrAAgAg8B+IAzAAQAgAAASgPQATgQAAgcQAAg5hNAAIgrAAgAg8gVIAmAAQAeAAASgPQASgPAAgbQAAgwg8AAIgsAAg");
	this.shape_265.setTransform(354,800.375);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AA2BxIgwijQgCgJgBgLIgBAAQAAAFgEAPIgzCjIgiAAIhFjiIAkAAIAwCrIADAVIABAAQABgKADgLIA2irIAeAAIAwCsIADAVIACAAQAAgJADgMIAwisIAhAAIhEDig");
	this.shape_266.setTransform(323.875,804.9);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AhEBlQgUgSAAgeQAAg+BLgKIBDgKQAAg7gvAAQgoAAghAcIAAgkQAigWAqAAQBPAAAABUIAACTIgjAAIAAgjIgBAAQgXApguAAQghAAgTgSgAAAAGQgdADgMALQgLAKAAAVQAAARAMALQAMAKAUAAQAaAAASgTQASgUAAgdIAAgWg");
	this.shape_267.setTransform(295.525,804.925);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("Ag5BzIAAjiIAiAAIAAAvIABAAQAIgYAPgNQAQgNATAAQAPAAAHADIAAAkQgJgIgSAAQgYAAgOAXQgQAXAAAlIAABzg");
	this.shape_268.setTransform(278.475,804.725);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AhNCMQgagfAAg0QAAg4AdghQAdgiAtAAQAvAAAWAlIABAAIAAiMIAiAAIAAFOIgiAAIAAgnIgBAAQgZAsg1ABQgrAAgZgfgAgwgMQgUAYAAArQAAAnATAYQASAXAfAAQAeAAAUgVQAUgXAAgiIAAgiQAAgcgTgSQgTgUgcAAQghAAgTAZg");
	this.shape_269.setTransform(254.875,799.75);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("AhUC4IAAiaQgkAlgqAhIgQgRQBLg6Apg8IhvAAIAAgUIB8AAQAKgRAIgQIiAAAIAAgTICJAAQAIgRAEgQQhPAGg2AAIgGgVQCsgBB2gbIAMAUQg/AMhNAJQgGAVgGAOIClAAIAAATIitAAQgIASgJAPIDLAAIAAAUIjXAAIgWAgIDBAAIAAC6IgWAAIAAgUIivAAIAAAVgAg+COICvAAIAAgcIivAAgAg+BdICvAAIAAgcIivAAgAg+AtICvAAIAAgdIivAAg");
	this.shape_270.setTransform(221.225,799.975);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("Ai1CzIAAgUIFuAAIAAAUgAiEB7IAAiTIB8AAIAAhSQg1AzhtArIgPgTQBlgiA6g1IiaAAIAAgUICsAAIAAgpIATAAIAAApICsAAIAAAUIisAAIAAAMQBjAfBLArIgNATQhFgphcgeIAAA8IB9AAIAACTgAhvBkIDgAAIAAgpIjgAAgAhvAlIDgAAIAAgoIjgAAg");
	this.shape_271.setTransform(179.4,799.45);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AgtCsQAcgnAAhIIAAhBICtAAIAACbQAAAQgKAJQgJAKg3gCIgHgWIAvAAQAEAAAFgDQADgEAAgEIAAgjIiGAAQgJAqgUAcgAAABgICGAAIAAgfIiEAAQABAPgDAQgAACAtICEAAIAAgeIiEAAgAilC4IAAiKIBkAAIAACAIgWAAIAAgXIg5AAIAAAhgAiQCCIA5AAIAAhAIg5AAgAirADIAAgVIBwAAIAAAVgAgtgfIAAgTIBoAAIAAgfIhWAAIAAgTIBWAAIAAgdIhfAAIAAgTIBfAAIAAgiIAVAAIAAAiIBdAAIAAATIhdAAIAAAdIBUAAIAAATIhUAAIAAAfIBmAAIAAATgAirg7IAAgVIBwAAIAAAVgAi1h3IAAgUIA/AAQgGgPgNgWIATgJQAOAaAHAUIArAAIAAAUg");
	this.shape_272.setTransform(137.3,799.925);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("Ai5CvQARgmAKg5IAVACQgIA1gTAzgAAOC4IgGgVIAXAAQATAAAFgCQAFgDgBgHIAAijIhQAAIAAiDIA4AAQAMgRAKgZIAWAJQgJATgLAOIBlAAIAACDIhOAAIAAAuQADAKAJAOQAcgVAXgfIAQARQgYAcgfAZQAfArAwAfIgPAQQg3gighg5IAABOQAAANgJAKQgIAJgfAAIgUgBgAAAggICJAAIAAgkIiJAAgAAAhYICJAAIAAgjIiJAAgAhzBSIAUgCQAKAtADAuIgYAFQAAgvgJgvgAg2CZQA+gpAKhGIgxAAIAAgUIBIAAQgFBehMA3gAhHBNIAUgDQANAYAGAXIgTAFQgIgbgMgWgAi1AwQAtgsAngzQgsAIgdABIgBgRQA0hAAXhAIAWAIQgYA7gpA1QAfgBAcgIQARgZAJgSIAUAJQgkBDhJBPQAhgFAigLQgDgMgIgNIAVgFQAOAbAKAjIgUAIQgCgIgFgOQgxARg7AGg");
	this.shape_273.setTransform(599.7,742.125);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("Ai1C1IAAgRIFrAAIAAARgAiKCKIAAhiIEUAAIAABigAALB6IBqAAIAAgaIhqAAgAh1B6IBsAAIAAgaIhsAAgAALBSIBqAAIAAgaIhqAAgAh1BSIBsAAIAAgaIhsAAgAi1ARIAAgQICsAAIAAgXIiPAAIAAgQICPAAIAAgYIiGAAIAAgQICGAAIAAgYIirAAIAAgQICrAAIAAgXIiGAAIAAgQICGAAIAAgXIAUAAIAAAXICBAAIAAAnIApAAIAAAQIgpAAIAAAoIiBAAIAAAYICOAAIAAAQIiOAAIAAAXICrAAIAAAQgAALhOIBrAAIAAgYIhrAAgAALh2IBrAAIAAgXIhrAAg");
	this.shape_274.setTransform(557.425,741.975);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AgzCoQA5gfAqgtQAqgtAOg9QAPg/ADhsIAXAAQgFC3gsBDQA9BBAaAnIgRAQQgbgrg3g6QgmAzhQAzgAi2CRIAngVIAAkwIAXAAIAAEiQAsgYBMg2IACAYQhwBPg/AegAg7iTIAVgKQA5BHAUAsIgUALQgag3g0g9g");
	this.shape_275.setTransform(515.225,742.175);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AAcCyIgIgXQAaACA3ABQANgBAAgMIAAkuIkoAAIAAgVIFtAAIAAAVIgvAAIAAE0QAAAOgKAHQgKAHgNAAIhLgBgAiIBTIAAipICwAAIAACpgAhyA8ICFAAIAAh9IiFAAg");
	this.shape_276.setTransform(473.475,742.5);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("AhnCoIAAlKIAjAAIAAAoIABAAQAbgtAzAAQAqAAAZAeQAZAeAAA0QABA3gcAjQgcAigwAAQgsAAgXgmIgBAAIAACJgAgwh0QgUAWAAAiIAAAhQAAAbATAUQATAUAcAAQAgAAATgaQAUgZgBgtQABgngTgVQgRgWgeAAQgeAAgVAWg");
	this.shape_277.setTransform(429.4,751.975);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AB9B0IAAiBQABgogMgQQgMgRgcAAQgXAAgRAVQgRAXAAAdIAACBIghAAIAAiGQAAhEg1AAQgYAAgQAUQgPAWgBAfIAACBIgiAAIAAjiIAiAAIAAAkIABAAQAYgpAuAAQAWAAATANQAQANAGAVQAZgvAzAAQBLAAAABcIAACLg");
	this.shape_278.setTransform(396.15,746.75);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AhfCfIAAk9IBZAAQAmAAAYAUQAYAUAAAhQAAAagOAUQgOAVgaAIIAAABQAfADAUAUQATAVAAAhQAAAogcAaQgdAZgsAAgAg8B+IAzAAQAfAAATgPQATgQAAgcQAAg5hOAAIgqAAgAg8gVIAmAAQAfAAARgPQASgPAAgbQAAgwg8AAIgsAAg");
	this.shape_279.setTransform(364.5,742.475);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AA2BxIgwijQgCgJgBgLIgBAAQAAAFgEAPIgzCjIgiAAIhFjhIAkAAIAwCqIADAVIABAAQABgJADgMIA2iqIAeAAIAwCrIADAUIACAAQAAgIADgMIAwirIAhAAIhEDhg");
	this.shape_280.setTransform(334.375,747);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AhEBlQgUgSAAgeQAAg+BLgKIBDgKQAAg7gvAAQgoAAghAcIAAgkQAigWAqAAQBPAAAABUIAACTIgjAAIAAgjIgBAAQgXApguAAQghAAgTgSgAAAAGQgdADgMALQgLAKAAAVQAAARAMALQAMAKAUAAQAaAAASgTQASgUAAgdIAAgWg");
	this.shape_281.setTransform(306.025,747.025);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("Ag5BzIAAjiIAiAAIAAAvIABAAQAIgYAPgNQAQgNATAAQAPAAAHADIAAAkQgJgIgSAAQgYAAgOAXQgQAXAAAlIAABzg");
	this.shape_282.setTransform(288.975,746.825);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AhNCMQgagfAAg0QAAg4AdghQAdgiAtAAQAvAAAWAlIABAAIAAiNIAiAAIAAFPIgiAAIAAgnIgBAAQgZAsg1AAQgrABgZgfgAgwgMQgUAYAAArQAAAnATAYQASAXAfAAQAeAAAUgVQAUgXAAgiIAAgjQAAgbgTgTQgTgTgcAAQghAAgTAZg");
	this.shape_283.setTransform(265.375,741.85);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AirC5IAAkpIAnAAQAQgcAOgsIAVAEQgHAXgWAtIBIAAIAAEhIgVAAIAAgkIhbAAIAAAsgAiWB3IBbAAIAAhkIhbAAgAiWAAIBbAAIAAhbIhbAAgAA6C4IgHgVIAlAAIAYAAQAFgBAGgEQAGgFACgHQADgGAEgqQAEgqACgyQADgyABgvIhtAAQgWAsgcAnIgRgMQA2hJAXhYIAVAFQgKAigNAeIB9AAQgDBfgGBQQgHBRgHAOQgHAOgKAHQgLAFgdAAIgiAAgAAQgIIASgMQAlAtAXAyIgRANQgVgugogyg");
	this.shape_284.setTransform(221.625,742);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AgpCnQAvhDAAiBIAAiWICkAAIAAFDQAAANgHAIQgGAJgKADQgKACg0gBIgKgVIAfAAQAhAAAFgCQAEgDAAgGIAAhmIh8AAQgMBYghAwgAAbAWIB5AAIAAhRIh3AAQAAAqgCAngAAdhQIB3AAIAAhOIh3AAgAipCCIAAktIB+AAIAAEiIgWAAIAAgcIhSAAIAAAngAiTBGIBSAAIAAhlIhSAAgAiTg1IBSAAIAAhgIhSAAg");
	this.shape_285.setTransform(179.425,742.675);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("Ai4CpQBDg9AQhKIhHAAIAAgUQArg1ATgeIhIAAIAAgWIBiAAIAAAWQgdAtgfAmIBBAAIAAAUQgNAxgPAaQARATAfANQAgAMBGAAICOAAIgFAVIiDAAQhPAAgigNQgigNgUgVQgTAdgfAdgAhCBwQAigPAXgcQAVgcAAgfIgyAAIAAgUIBLAAIAAg/QgtAphDAcIgLgSQBEgbAtgqIhcAAIAAgVIBmAAIAAggIhSAEIgIgUQBxgBBRgWIAJATQgqAMgyAFIAAAjIByAAIAAAVIhrAAQA6AZA6ApIgKASQg/gugygUIAAA/IBDAAIAAAUIgNAYIAtAAQgEApgEAQQgEAQgJAJQgKAJgLACQgLABguAAIgGgVIAXABQAjAAAFgEIAJgIQAEgGAFgjIg3AAIAZgtIhEAAQgHBPhQApgAioipIAPgPQAlAhAVAgIgQAMQgTgdgmghg");
	this.shape_286.setTransform(137.375,742.225);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#0066FF").ss(3,1,1).p("EgpbgKHMBS3AAAIAAUPMhS3AAAg");
	this.shape_287.setTransform(373.975,773.95);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000099").s().p("EgpbAKIIAA0PMBS3AAAIAAUPg");
	this.shape_288.setTransform(373.975,773.95);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AB1CdIAAgMIjnAAIAAAMIgTAAIAAhoQA2AAA8gMIAKAQQgwAJg5ADIAAAUIBiAAIAAAPIhiAAIAAAYIDnAAIAAgYIhhAAIAAgPIBhAAIAAgVIhpAAIAAgRIB6AAIAABqgAhzAhIAAhQIgeAUIgIgRQAvgaAagmIAPAJQgDAGgJAKIBOAAQgBgGgJgMIAPgIQAJAKAIAQIB5AAIAAAQIh9AAIAAASIBvAAIAAAPIhvAAIAAASIBvAAIAAAQIhvAAIAAARICIAAIAAAQgAhgARIBgAAIAAgRIhgAAgAhggQIBgAAIAAgSIhgAAgAhgg+IAAANIBgAAIAAgRIhdAAIgDAEgAAchnIAAg1IATAAIAAAVIBsAAIAAAQIhsAAIAAAQgAguhnIAAgQIhsAAIAAgQIBsAAIAAgVIATAAIAAA1g");
	this.shape_289.setTransform(789.15,749.9);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AAWBPIAQgGQASAfAMArIgSAGQgKgjgSgngABjBQIAOgJQAaAiARAmIgQAKQgMgcgdgtgAgxBNIARgDQAMAwABAZIgSAFQgDglgJgmgAibCJQAmgkARgfIAPALQgXAmggAegAgJA4IAAhYICNAAIAABYgAAJAmIBpAAIAAg1IhpAAgAiJA0IAAjIIBcAAIAADIgAh3AjIA5AAIAAhOIg5AAgAh3g9IA5AAIAAhFIg5AAgAgcg2QA/gbAHg2IhAAAIAAgRICiAAQABAMgEAjQgDAjgFAHQgEAHgHAEQgHAEgRAAIgXgBIgHgSIAYABQASAAAEgDQAEgEAEgSQADgRAAgbIg8AAQgLBEhCAbg");
	this.shape_290.setTransform(752.875,750.575);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("Ag8BLQgXgaAAgwQAAgsAZgdQAagdAlAAQAlAAAVAZQAVAYAAAsIAAAPIiJAAQABAiARASQARASAcAAQAhAAAcgWIAAAcQgaATgqAAQgnAAgYgbgAggg8QgQAPgEAbIBqAAQAAgbgNgPQgNgPgYAAQgUAAgQAPg");
	this.shape_291.setTransform(1175.925,704.175);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AguBLQgagbAAgrQAAgwAcgdQAbgdAtAAQAZAAAUAKIAAAfQgWgQgZAAQgdAAgTAWQgUAVAAAjQAAAjASAUQASAUAeAAQAaAAAWgRIAAAcQgWAOgfAAQgoAAgZgbg");
	this.shape_292.setTransform(1156.875,704.175);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("Ag7BXQgQgQAAgZQAAg1BAgJIA5gJQABgygpAAQgiAAgcAYIAAgfQAcgTAlAAQBDAAAABIIAAB+IgdAAIAAgeIgBAAQgVAjgmAAQgdAAgRgPgAAAAFQgZADgJAJQgLAJABASQAAAOAKAKQALAJAQAAQAXAAAPgRQAPgRAAgZIAAgSg");
	this.shape_293.setTransform(1137.45,704.175);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AgYCSIAAioIghAAIAAgaIAhAAIAAgfQABgfARgSQAQgRAaAAQAOAAAIAEIAAAbQgKgGgLAAQggAAAAAqIAAAeIAtAAIAAAaIgtAAIAACog");
	this.shape_294.setTransform(1122.9,699.3);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AgxBjIAAjCIAdAAIAAApIABAAQAHgVANgMQANgLARAAQAMAAAHADIAAAeQgIgFgPAAQgVAAgMATQgOATAAAgIAABjg");
	this.shape_295.setTransform(1110.125,704);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFFFF").s().p("Ag8BLQgXgaAAgwQAAgsAZgdQAagdAlAAQAlAAAVAZQAVAYAAAsIAAAPIiJAAQABAiARASQARASAcAAQAhAAAcgWIAAAcQgaATgqAAQgnAAgYgbgAggg8QgQAPgEAbIBqAAQAAgbgNgPQgNgPgYAAQgUAAgQAPg");
	this.shape_296.setTransform(1091.925,704.175);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFFFF").s().p("AgVBIIAAh0IgiAAIAAgaIAiAAIAAgvIAcgKIAAA5IAxAAIAAAaIgxAAIAABuQAAAUAHAJQAGAIAQAAQAMAAAIgGIAAAZQgLAGgRAAQgxAAAAg4g");
	this.shape_297.setTransform(1075.3,701.525);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFFFFF").s().p("AAyBjIAAhtQAAhAguABQgXAAgPASQgQARAAAcIAABtIgdAAIAAjBIAdAAIAAAgIABAAQAWglApAAQAgAAARAVQARAUAAAnIAAB2g");
	this.shape_298.setTransform(1058.175,703.95);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFFFF").s().p("AgOCIIAAkPIAdAAIAAEPg");
	this.shape_299.setTransform(1041.9,700.275);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFFFFF").s().p("AgxBjIAAjCIAdAAIAAApIABAAQAHgVANgMQANgLARAAQAMAAAHADIAAAeQgIgFgPAAQgVAAgMATQgOATAAAgIAABjg");
	this.shape_300.setTransform(1022.575,704);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFFFFF").s().p("Ag8BLQgXgaAAgwQAAgsAZgdQAagdAlAAQAlAAAVAZQAVAYAAAsIAAAPIiJAAQABAiARASQARASAcAAQAhAAAcgWIAAAcQgaATgqAAQgnAAgYgbgAggg8QgQAPgEAbIBqAAQAAgbgNgPQgNgPgYAAQgUAAgQAPg");
	this.shape_301.setTransform(1004.375,704.175);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFFFFF").s().p("Ag/BaIAAggQAaATAeAAQAoAAAAgcQAAgNgJgHQgIgIgagKQgfgMgLgMQgLgNABgTQAAgZAVgPQAVgQAfAAQAZAAATAJIAAAfQgVgOgdAAQgPAAgMAHQgKAIAAANQAAAMAIAHQAGAHAaAKQAhAMALANQAMANAAATQAAAagWAPQgVAPghAAQgdAAgWgMg");
	this.shape_302.setTransform(986.05,704.175);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFFFF").s().p("AhkAcIAAimIAfAAIAAClQgBBUBIAAQBEAAAAhSIAAinIAfAAIAACjQgBBxhlAAQhjAAAAhug");
	this.shape_303.setTransform(964.35,700.5);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFFFF").s().p("AiSCfIAAj/IAhAAQAOgYAMgmIASAEQgHATgSAnIA+AAIAAD3IgSAAIAAgfIhOAAIAAAngAiABmIBOAAIAAhVIhOAAgAiAAAIBOAAIAAhOIhOAAgAAyCeIgGgSIAgAAIAUAAQAFgBAFgEQAEgEADgFQACgGADgkQAEgkACgrIADhTIheAAQgSAmgYAiIgPgLQAug+AUhMIASAFQgIAcgLAbIBqAAQgCBRgGBEQgFBFgGANQgGAMgJAFQgJAFgZAAIgdAAgAAOgHIAPgKQAgAmAUAsIgPALQgSgogigrg");
	this.shape_304.setTransform(933.275,699.875);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFFFFF").s().p("ABCCdIgHgSQAPACARgBQAUAAAFgBQAEgDADgEQACgFADgUQACgUACgaIjPAAQgbAUglAQIgMgQQA+gWAfgmIgqAAIAAhZQA5gLAhgPIAJARQgpAPgoAHIAAASIBNAAIAAARIhNAAIAAAYIC1AAIAAgYIhNAAIAAgRIBNAAIAAgXIhTAAIAAgRIBmAAIAABiIiYAAQgHAJgOAOIDOAAQgCA0gFAZQgFAZgKAHQgKAFgdAAIgYgBgAh+CRQAWgYAXgnIAQAIQgXAngWAZgAgtBUIARgDQAJAiACAgIgSADQgBgdgJglgAAGBTIAQgGQAOAfAHAbIgRAFQgJgkgLgVgAA4BNIAQgHQAPAVAKAXIgQAHQgJgUgQgYgACFg/IAAgrIj5AAIAAArIgTAAIAAg9ICHAAQgDgMgKgOIAQgIQAMASAEAQICFAAIAAA9g");
	this.shape_305.setTransform(896.35,699.85);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFFFF").s().p("AgICeIgIgUIAhACQASAAAAgNIAAi+IATAAIAAC9QAAARgJAIQgIAIgbAAIgSgBgAhqCeIAAjWQgUAhgWAZIgKgSQAqgyAlhcIASAHIgQAlIgLAVIAAD7gABUgCIARgIQAhA6AZA8IgTAJQgXg9ghg6gAhEBpQAhgvAYhFIARAGQgaBOggArgAhIgcQAvg5AXhHIATAFIgQAoICSAAQgHAogUAzIgRgIQAOgeAHgiIiDAAQgWAsgfAkg");
	this.shape_306.setTransform(861.175,699.975);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFFFF").s().p("AgJCeIAAhAIhrAAIAAAxIgSAAIAAg/IB9AAIAAgSIhjAAIAAhHIBZAAIALgOIARADIgJALIBsAAIAABHIhkAAIAAASIB+AAIAAAkQAAANgGAGQgEAHgKAAIgsAAIgGgQIAXABQAVAAAEgCQAEgDABgFIAAgXIhtAAIAABAgAhaAwIC0AAIAAgPIi0AAgAhaATIC0AAIAAgOIi0AAgABGgWIgGgRIATABQAQAAADgCQADgCAAgEIAAg9IhWAAIAAgPIBWAAIAAgiIATAAIAAAiIAfAAIAAAPIgfAAIAAA9QAAANgJAGQgIAFgVABIgQgBgAiaglQAvgBAggDIAAgWIg8AAIAAgNIA8AAIAAgTIhNAAIAAgOIBNAAIAAgSIg8AAIAAgMIA8AAIAAgRIASAAIAAARIA7AAIAAAMIg7AAIAAASIBBAAIAAAOIhBAAIAAATIA7AAIAAANIg7AAIAAAUIApgDIAigDIAAAPQhBAIhpAEgAAZhTIANgKQAPAIATAVIgOALQgOgRgTgNg");
	this.shape_307.setTransform(825.25,700);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFFFFF").s().p("AA3CeIAAjaIgtAAIAADAIgRAAIAAjSIA+AAIAAgyIhPAAIAAgTICuAAIAAATIhNAAIAAAyIA+AAIAAC4QAAAegqgEIgFgSIANAAQAQAAAAgKIAAikIgsAAIAADagAiVCeIAAkRIAlAAQANgXAGgTIASAFQgFARgMAUIAuAAIAABhIhUAAIAAAuIBcAAIAABrIhcAAIAAAXgAiCB1IBJAAIAAhHIhJAAgAiCgjIBAAAIAAg+IhAAAg");
	this.shape_308.setTransform(789.95,700);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFFFFF").s().p("AgiCbQgOAAgIgJQgIgJAAgOIAAhNQgnATgrARIgKgTQBvgoA+gsIisAAIAAgSIB+AAIAAg0IhlAAIAAgUIBlAAIAAgrIAUAAIAAArIBWAAIAAAUIhWAAIAAA0IAzAAQAvgoAng3IARAMQgjAsgnAnIBWAAIAAASIhsAAQgmAdg4AdIAAAMICMAAIAAATIiMAAIAAA3QAAAGAFAEQAEAEAHgBIB/AAQAHAAAIgGQAJgHADgqIASALQgFAogKAMQgJALgaAAg");
	this.shape_309.setTransform(753.125,699.8);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#CCCCCC").ss(3,1,1).p("EAhHgGkIAAQ7MhO4AAAIAAw7gEAnwgG3QhqCwiRgYQgygIg2ggEAnwgG3IhbifIHdhAIknF+g");
	this.shape_310.setTransform(1010,716.75);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#666666").s().p("EgtxAKXIAAw7MBO4AAAIAAQ7gEAnwgG3IhcieIHdhAIklF9g");
	this.shape_311.setTransform(1010,716.75);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFFFFF").s().p("AhxCUQAYgqACg7IgbAAQgEA1gXAfIgOgLQAUggACgpIgXAAIAAgRIBFAAIAAgjIg1AAIAAg/IATAAIAAAtIAiAAIAAgtICUAAIAAgQIATAAIAAAQIBIAAIAAARIhIAAQABBUAMAsQAUgrAIg6IASAGQgLBIgdAvQAGAOAIALQAIAJABAAQAEAAAGgNQAGgNACgaIARAKQgKA+gXAAQgRAAgTgkQgNAPgLAKIgNgNQAPgNAOgSQgPgwgDhnIiDAAIAABkQAABAgeAugAguCAIAAicIBfAAIAAAQIghAAIAAAbIAdAAIAAA+IgdAAIAAAiIAZAAIAAARgAgcBvIAbAAIAAgiIgbAAgAgcA9IA3AAIAAgeIg3AAgAgcAPIAbAAIAAgbIgbAAgABlhbIALgNQAOAGASALIgMAOQgQgLgPgHgAhHhxIhVAAIAAgQIBVAAIAAgdIASAAIAAAdIAsAAIAAAQIgsAAIAAAcIgSABgAA0heIAAgTIgtAAIAAgQIAtAAIAAgdIASAAIAAAdIBWAAIAAAQIhWAAIAAATg");
	this.shape_312.setTransform(1380.15,875.1);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFFFFF").s().p("AiWCdIAAkxIBXAAIAAASQgBAGgcBQQAbApAAAmQgBATgIALQgKALgggCIgHgUQAJABAKAAQAOAAADgFQAEgFAAgNQAAgkgcgmQAVg6AIgeIgyAAIAAEfgAAKCYQgJAAgFgFQgHgGABgLIAAguIARAAIAAAqQAAAGAEACQAFACAVAAQAaAAAFgCQAEgCABgGIAEgTIARAGQgDAbgJAHQgIAGgKAAgAhRCGQAXgTAVghIAOALQgSAggYAVgABcBaIAPgLQAaAbAQAcIgRALQgPgegZgZgAAXBaIANgLQAPAMAKARIgPALQgMgSgLgLgAglBHIAAgRICMAAIAAgSIidAAIAAgQICdAAIAAgSIiMAAIAAgQICfAAIAAAiIAdAAIAAAQIgdAAIAAAjgAg2geIAAgQIBZAAIAAgRIhJAAIAAgQICkAAIAAAQIhJAAIAAARIBaAAIAAAQgAghhpIAQgKQALAIAKANIgOAKQgJgLgOgKgAAbhwIAQgGQAKAOADANIgRAGQgEgOgIgNgABRhiQAOgJAOgPIAOAKQgMAOgPAKgAgriJQBggBBFgSIAKAQQhGARhiADg");
	this.shape_313.setTransform(1344.65,874.925);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFFFF").s().p("AgbB9IAXheIAbAAIgdBegAgGhYQgGgGAAgJQAAgIAFgGQAHgHAHAAQAIAAAHAHQAFAGAAAIQAAAJgFAGQgHAGgIAAQgHAAgGgGg");
	this.shape_314.setTransform(1303.1,881.425);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFFFFF").s().p("Ag8BLQgXgaAAgwQAAgsAZgdQAagdAlAAQAlAAAVAZQAVAYAAAsIAAAPIiJAAQABAiARASQARASAcAAQAhAAAcgWIAAAcQgaATgqAAQgnAAgYgbgAggg8QgQAPgEAbIBqAAQAAgbgNgPQgNgPgYAAQgUAAgQAPg");
	this.shape_315.setTransform(1289.575,879.125);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFFFFF").s().p("Ag/BaIAAggQAaATAeAAQAoAAAAgcQAAgNgJgHQgJgIgZgKQgggMgKgMQgLgNAAgTQAAgZAWgPQAVgQAfAAQAYAAAUAJIAAAfQgWgOgcAAQgPAAgMAHQgKAIAAANQAAAMAIAHQAGAHAaAKQAhAMALANQAMANAAATQAAAagWAPQgVAPghAAQgeAAgVgMg");
	this.shape_316.setTransform(1271.25,879.125);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFFFFF").s().p("AgNCQIAAkfIAbAAIAAEfg");
	this.shape_317.setTransform(1258.2,874.45);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFFFFF").s().p("Ag6BXQgRgQAAgZQAAg1BAgJIA6gJQAAgygpAAQgiAAgcAYIAAgfQAdgTAjAAQBEAAAABIIAAB+IgdAAIAAgeIgCAAQgUAjgmAAQgdAAgQgPgAAAAFQgZADgKAJQgJAJgBASQAAAOALAKQAKAJASAAQAVAAAQgRQAPgRABgZIAAgSg");
	this.shape_318.setTransform(1243.25,879.125);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFFFF").s().p("AgYCSIAAioIghAAIAAgaIAhAAIAAggQAAgeASgSQARgRAZAAQAOAAAIAEIAAAbQgJgGgLAAQgiAAAAAqIAAAeIAuAAIAAAaIguAAIAACog");
	this.shape_319.setTransform(1228.7,874.25);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFFFF").s().p("AhYA0IAAgYICxAAIAAAYgAhYgcIAAgXICxAAIAAAXg");
	this.shape_320.setTransform(1199.65,877.5);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("Ag8BLQgXgaAAgwQAAgsAZgdQAagdAlAAQAlAAAVAZQAVAYAAAsIAAAPIiJAAQABAiARASQARASAcAAQAhAAAcgWIAAAcQgaATgqAAQgnAAgYgbgAggg8QgQAPgEAbIBqAAQAAgbgNgPQgNgPgYAAQgUAAgQAPg");
	this.shape_321.setTransform(1167.325,879.125);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFFFF").s().p("AgNCQIAAkfIAbAAIAAEfg");
	this.shape_322.setTransform(1152.35,874.45);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("Ag6BxIgBAAIAAAdIgdAAIAAkfIAdAAIAACAIABAAQAXgnAsAAQAlAAAVAaQAWAaAAArQAAAwgYAeQgYAdgpAAQgmAAgUghgAgpgMQgSASAAAdIAAAcQAAAZARAQQAQARAYAAQAcAAAQgWQARgWAAgnQAAgggQgSQgPgTgaAAQgaAAgRATg");
	this.shape_323.setTransform(1137.075,874.675);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFFFF").s().p("AgOCOIAAjCIAcAAIAADCgAgNhrQgFgHAAgIQAAgHAFgGQAGgGAHAAQAIAAAGAGQAFAGAAAHQAAAJgFAFQgGAGgIAAQgIAAgFgFg");
	this.shape_324.setTransform(1120.375,874.65);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFFFF").s().p("Ag/BaIAAggQAaATAeAAQApAAAAgcQAAgNgJgHQgKgIgZgKQgfgMgLgMQgLgNAAgTQAAgZAWgPQAWgQAdAAQAZAAAUAJIAAAfQgWgOgbAAQgRAAgKAHQgLAIAAANQAAAMAHAHQAIAHAZAKQAhAMALANQAMANAAATQAAAagVAPQgWAPggAAQgfAAgVgMg");
	this.shape_325.setTransform(1107.6,879.125);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFFFFF").s().p("AgOCOIAAjCIAcAAIAADCgAgNhrQgFgHAAgIQAAgHAFgGQAGgGAHAAQAIAAAGAGQAFAGAAAHQAAAJgFAFQgGAGgIAAQgIAAgFgFg");
	this.shape_326.setTransform(1094.625,874.65);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFFFFF").s().p("AgPBhIhKjBIAgAAIAzCOQAFAQABAKIAAAAQADgQADgKIA1iOIAfAAIhODBg");
	this.shape_327.setTransform(1080.725,879.125);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFFFFF").s().p("AgNAPQgHgGAAgJQAAgIAHgFQAGgHAHAAQAIAAAHAHQAFAFABAIQgBAIgFAHQgHAFgIABQgHAAgGgGg");
	this.shape_328.setTransform(1067.3,887.2);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFFFF").s().p("AgxBjIAAjCIAdAAIAAApIABAAQAHgVANgLQANgMARAAQAMAAAHADIAAAeQgIgFgPAAQgVAAgMATQgOATAAAgIAABjg");
	this.shape_329.setTransform(1061.175,878.95);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFFFFF").s().p("Ag8BLQgXgaAAgwQAAgsAZgdQAagdAlAAQAlAAAVAZQAVAYAAAsIAAAPIiJAAQABAiARASQARASAcAAQAhAAAcgWIAAAcQgaATgqAAQgnAAgYgbgAggg8QgQAPgEAbIBqAAQAAgbgNgPQgNgPgYAAQgUAAgQAPg");
	this.shape_330.setTransform(1042.975,879.125);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFFFFF").s().p("AhYCQIAAkbIAdAAIAAAjIABAAQAXgnAsAAQAlAAAVAaQAWAaAAAsQAAAvgYAeQgYAdgpAAQglAAgVghIgBAAIAAB2gAgphjQgSATAAAdIAAAcQAAAXARARQAQARAYAAQAcAAAQgWQARgVAAgnQAAghgQgSQgPgTgaAAQgaAAgRATg");
	this.shape_331.setTransform(1022.075,883.375);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFFFFF").s().p("AgNCQIAAkfIAbAAIAAEfg");
	this.shape_332.setTransform(1005.3,874.45);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFFFFF").s().p("Ag8BLQgXgaAAgwQAAgsAZgdQAagdAlAAQAlAAAVAZQAVAYAAAsIAAAPIiJAAQABAiARASQARASAcAAQAhAAAcgWIAAAcQgaATgqAAQgnAAgYgbgAggg8QgQAPgEAbIBqAAQAAgbgNgPQgNgPgYAAQgUAAgQAPg");
	this.shape_333.setTransform(990.625,879.125);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("AAzCQIAAhwQAAg9gvAAQgWAAgQASQgQARAAAcIAABuIgdAAIAAkfIAdAAIAAB+IABAAQAXglAoAAQBCAAAABOIAAB4g");
	this.shape_334.setTransform(969.625,874.45);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFFFF").s().p("AgOAPQgFgGAAgJQAAgIAFgFQAHgHAHAAQAJAAAFAHQAHAFgBAIQABAIgHAHQgGAFgIABQgHAAgHgGg");
	this.shape_335.setTransform(954.3,887.2);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFFFF").s().p("Ag8BLQgXgaAAgwQAAgsAZgdQAagdAlAAQAlAAAVAZQAVAYAAAsIAAAPIiJAAQABAiARASQARASAcAAQAhAAAcgWIAAAcQgaATgqAAQgnAAgYgbgAggg8QgQAPgEAbIBqAAQAAgbgNgPQgNgPgYAAQgUAAgQAPg");
	this.shape_336.setTransform(940.125,879.125);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFFFFF").s().p("AgVBIIAAh0IgiAAIAAgaIAiAAIAAgvIAcgKIAAA5IAxAAIAAAaIgxAAIAABuQAAAUAGAJQAIAIAPAAQAMAAAIgGIAAAZQgKAGgSAAQgxAAAAg4g");
	this.shape_337.setTransform(923.5,876.475);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFFFFF").s().p("Ag7BXQgQgQAAgZQAAg1BAgJIA5gJQAAgygoAAQgiAAgcAYIAAgfQAcgTAkAAQBEAAAABIIAAB+IgdAAIAAgeIgCAAQgTAjgnAAQgdAAgRgPgAAAAFQgZADgKAJQgKAJABASQAAAOAKAKQAKAJARAAQAXAAAPgRQAPgRAAgZIAAgSg");
	this.shape_338.setTransform(906.8,879.125);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFFFFF").s().p("ABrBjIAAhuQAAgigKgPQgKgOgYABQgUAAgOASQgPATABAaIAABtIgcAAIAAhyQAAg7guABQgUAAgOARQgOASAAAcIAABtIgdAAIAAjBIAdAAIAAAfIABAAQAVgjAnAAQATgBAPAMQAOALAGASQAVgpArABQBBgBAABQIAAB2g");
	this.shape_339.setTransform(881,878.9);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFFFFF").s().p("AgOCOIAAjCIAcAAIAADCgAgNhrQgFgHAAgIQAAgHAFgGQAGgGAHAAQAIAAAGAGQAFAGAAAHQAAAJgFAFQgGAGgIAAQgIAAgFgFg");
	this.shape_340.setTransform(859.475,874.65);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFFFFF").s().p("AAyBjIAAhtQAAhAguABQgXgBgPATQgQARAAAcIAABtIgdAAIAAjBIAdAAIAAAgIABAAQAWglApABQAggBARAVQARAUAAAoIAAB1g");
	this.shape_341.setTransform(844.025,878.9);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FFFFFF").s().p("ABXCIIgehNIhzAAIgcBNIghAAIBokPIAeAAIBpEPgAgFhVIgrB0IBfAAIgrh0QgCgFgCgNIAAAAQgCAMgDAGg");
	this.shape_342.setTransform(820.375,875.225);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FFFFFF").s().p("AhTCNIAAgbQAJADAIAAQAYAAAMgcIAQgmIhMjBIAhAAIA1CXIAEAOIAAAAIAEgOIA4iXIAfAAIhaDiQgXA7gqAAQgLAAgIgCg");
	this.shape_343.setTransform(798.625,883.7);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FFFFFF").s().p("ABrBjIAAhuQABgigLgPQgKgOgYABQgUAAgOASQgOATAAAaIAABtIgcAAIAAhyQgBg7gtABQgVAAgNARQgOASAAAcIAABtIgdAAIAAjBIAdAAIAAAfIABAAQAVgjAnAAQATgBAQAMQANALAGASQAVgpArABQBBgBAABQIAAB2g");
	this.shape_344.setTransform(772.8,878.9);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FFFFFF").s().p("ABLCaIgFgUIAaABQAZAAAFgCQADgCAAgFIAAhXIhmAAIAABqIgTAAIAAhqIhlAAQgJBLgdAmIgQgLQAkg2AAhMIAAikIEEAAIAAEZQAAAOgLAHQgLAFgkAAIgQAAgAAbAUIBmAAIAAhEIhmAAgAhbAUIBjAAIAAhEIhjAAgAAbhEIBmAAIAAhCIhmAAgAhbhEIBjAAIAAhCIhjAAg");
	this.shape_345.setTransform(728.15,875.3);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FFFFFF").s().p("AAYCZIgHgUQAWACAvAAQAMAAAAgLIAAkCIj+AAIAAgSIE5AAIAAASIgpAAIAAEHQAAAMgIAGQgIAGgMAAIhAAAgAh0BHIAAiRICXAAIAACRgAhiA0IByAAIAAhrIhyAAg");
	this.shape_346.setTransform(692.975,875.275);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FFFFFF").s().p("AgxBjIAAjCIAdAAIAAApIABAAQAHgVANgMQANgLARAAQAMAAAHADIAAAeQgIgFgPAAQgVAAgMATQgOATAAAgIAABjg");
	this.shape_347.setTransform(1002.625,829.1);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FFFFFF").s().p("Ag8BLQgXgaAAgwQAAgsAZgdQAagdAlAAQAlAAAVAZQAVAYAAAsIAAAPIiJAAQABAiARASQARASAcAAQAhAAAcgWIAAAcQgaATgqAAQgnAAgYgbgAggg8QgQAPgEAbIBqAAQAAgbgNgPQgNgPgYAAQgUAAgQAPg");
	this.shape_348.setTransform(984.425,829.275);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FFFFFF").s().p("AhYCQIAAkbIAdAAIAAAjIABAAQAXgnAsAAQAlAAAVAaQAWAaAAAsQAAAvgYAeQgYAdgpAAQglAAgVghIgBAAIAAB2gAgphjQgSATAAAdIAAAcQAAAXARARQAQARAYAAQAcAAAQgWQARgVAAgnQAAghgQgSQgPgTgaAAQgaAAgRATg");
	this.shape_349.setTransform(963.525,833.525);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FFFFFF").s().p("AgOCQIAAkfIAdAAIAAEfg");
	this.shape_350.setTransform(946.75,824.6);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFFFFF").s().p("Ag8BLQgXgaAAgwQAAgsAZgdQAagdAlAAQAlAAAVAZQAVAYAAAsIAAAPIiJAAQABAiARASQARASAcAAQAhAAAcgWIAAAcQgaATgqAAQgnAAgYgbgAggg8QgQAPgEAbIBqAAQAAgbgNgPQgNgPgYAAQgUAAgQAPg");
	this.shape_351.setTransform(932.075,829.275);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FFFFFF").s().p("AAzCQIAAhwQAAg9gvAAQgWAAgQASQgQARAAAcIAABuIgdAAIAAkfIAdAAIAAB+IABAAQAXglAoAAQBCAAAABOIAAB4g");
	this.shape_352.setTransform(911.075,824.6);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FFFFFF").s().p("ABDCLIAiAAQAJAAAGgEQAGgEADgHQADgHADgXQADgXABghIjcAAQgZAegfAaIgMgSQBUhCAbhfIhhAAIAAgTIBkAAQAJgkACgSIASAEQgCAUgHAeICDAAQgEAegIAgIAkAAQgEAdgHAgIAdAAQAAAjgEAhQgEAhgEAKQgEAKgGAGQgHAHgMADQgMADgaAAgAhIATICxAAIAIgqIifAAQgJATgRAXgAgmgqIB2AAIALgrIhyAAQgGAUgJAXgAhvCPQAXghAQgxIARAFQgPAygXAlgAgfBBIARgEQAJAmACAxIgTADQABgkgKgygAAQBAIARgFQAMAeAJAoIgTAGQgFglgOgigABBA+IAQgIQANAXALAgIgRAIQgHgagQgdgAhviTIARgLQARASANAUIgRAKQgLgTgTgSg");
	this.shape_353.setTransform(872.55,825.075);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FFFFFF").s().p("AB9CfIAAgYIipAAIAAAYIgUAAIAAh9QgqAPgbAIIgKgRQBUgXA7ggQgVgfgmggQgbARgiASIgPgQQBRgjA2hAIATAJQgIAKgLALICLAAIAAAQQg7BPhiAwICiAAIAACQgAgsB1ICpAAIAAhTIipAAgAgshZQAkAfAZAhQA5gkAlgwIiCAAIgZAUg");
	this.shape_354.setTransform(835.925,824.975);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FFFFFF").s().p("Ag+CeIgHgVQAOACAQAAQAWAAAEgCQAEgDAAgFIAAhLIiSAAIAAgTICSAAIAAgXQAvgcAbgTIijAAIAAgTIDCAAIAAATQgjAbgzAdIAAAOICSAAIAAATIiSAAIAABNQAAAPgJAGQgIAHgjgBIgUAAgAB7gjIAAhCIj1AAIAABCIgTAAIAAhVICIAAQgEgLgOgSIARgJQAMASAKAUIB+AAIAABVg");
	this.shape_355.setTransform(801.05,825.05);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FFFFFF").s().p("AABBRQg6AzhWAbIgOgQQBbgaA1gxQgzg1gchKIARgIQAbBJAxAyQA0g5AVhQIjlAAIAAgTICXAAQgOgcgTgYIATgHQAVAgALAbICQAAIAAATIhAAAQgYBag3A8QA2AwBZAaIgNARQhWgbg6g0g");
	this.shape_356.setTransform(765,825.125);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FFFFFF").s().p("ABDBvQgmAcg/ATIgJgSQA9gQAjgaQgfgfgVg1IgMAAIAAgSICTAAQgSBCglAkQAkAcApAQIgMAQQgugUghgbgABDBWQAcgbAQgtIhbAAQASAsAdAcgAiCCdIAAhGIgXADIgEgSIAbgEIAAjHQBBgKAngQIAJARQglAOg6AKIAAArIBQAAIAAARIhQAAIAAAvIBQAAIAAAQIhQAAIAAA5QApgGA4gOIAAASQgjAKg+AMIAABJgAgegiQAXgNAKgXQALgXAAgoIAAgPIBjAAIAABYQAAAKAKAAIAhAAIAAARIglAAQgYAAAAgZIAAhJIg+AAQABBMgvAig");
	this.shape_357.setTransform(729.075,825.075);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FFFFFF").s().p("AgHCeIAAhAIhRAAIAAgTIBRAAIAAiYQgXA7ggApQgfApg1AnIgMgQQBjhIAfhcIh5AAIAAgTICOAAIAAg+IATAAIAAA+ICKAAIAAATIh1AAQAjBkBbBCIgNAPQhehFgohwIAACYIBOAAIAAATIhOAAIAABAg");
	this.shape_358.setTransform(693.075,825.15);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FFFFFF").s().p("AhYCQIAAkbIAdAAIAAAjIABAAQAXgnAsAAQAlAAAVAaQAWAaAAAsQAAAvgYAeQgYAdgpAAQglAAgVghIgBAAIAAB2gAgphjQgSATAAAdIAAAcQAAAXARARQAQARAYAAQAcAAAQgWQARgVAAgnQAAghgQgSQgPgTgaAAQgaAAgRATg");
	this.shape_359.setTransform(524.775,237.775);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FFFFFF").s().p("ABrBkIAAhvQAAgigKgPQgKgOgYAAQgUABgOASQgPATAAAZIAABvIgbAAIAAhzQAAg7guAAQgUABgOARQgOASAAAbIAABvIgdAAIAAjCIAdAAIAAAfIABAAQAUgkAoABQATAAAPALQAOALAGASQAVgoArAAQBBAAAABPIAAB3g");
	this.shape_360.setTransform(496.25,233.3);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FFFFFF").s().p("AhSCIIAAkPIBMAAQAhAAAVARQAVARAAAcQAAAXgMARQgNARgWAIIAAABQAbACARARQARASAAAcQAAAjgZAWQgZAVglAAgAg0BsIAsAAQAbAAAQgNQAQgNAAgYQAAgxhCAAIglAAgAg0gSIAhAAQAaAAAPgNQAQgNAAgXQAAgog0AAIgmAAg");
	this.shape_361.setTransform(469.175,229.625);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FFFFFF").s().p("AAuBhIgpiMQgCgHAAgKIgBAAQAAAFgEAMIgsCMIgdAAIg7jBIAfAAIApCSQACAHABALIABAAIADgSIAuiSIAaAAIApCTIACARIADAAQAAgHADgKIAoiTIAdAAIg7DBg");
	this.shape_362.setTransform(443.35,233.525);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FFFFFF").s().p("Ag6BXQgRgQAAgZQAAg1BAgJIA5gJQAAgygoAAQgiAAgcAYIAAgfQAcgTAkAAQBEAAAABIIAAB+IgdAAIAAgeIgCAAQgTAjgnAAQgdAAgQgPgAAAAFQgZADgKAJQgKAJAAASQAAAOALAKQALAJAQAAQAXAAAPgRQAPgRAAgZIAAgSg");
	this.shape_363.setTransform(419.1,233.525);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FFFFFF").s().p("AgxBjIAAjBIAdAAIAAAoIABAAQAHgVANgLQANgMARAAQAMAAAHADIAAAfQgIgGgPgBQgVABgMATQgOATAAAgIAABjg");
	this.shape_364.setTransform(404.525,233.35);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FFFFFF").s().p("AhCB4QgWgaAAgtQAAgwAZgcQAYgdAnAAQAoAAATAgIABAAIAAh5IAdAAIAAEfIgdAAIAAgiIgBAAQgWAmgsAAQglAAgWgagAgpgKQgRAVAAAlQAAAhAQAUQAQAUAaAAQAaAAARgSQARgTAAgeIAAgdQAAgYgQgQQgRgQgXAAQgdAAgQAVg");
	this.shape_365.setTransform(384.275,229.075);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FFFFFF").s().p("AhKCDIAAgdQAgASAeAAQBIAAAAhOIAAgVIgBAAQgXAlgrAAQglAAgWgaQgWgaAAgqQAAgyAYgdQAZgdAnAAQAoAAATAgIABAAIAAgcIAdAAIAACyQAABrhkAAQgkAAgbgOgAgphiQgRAWAAAmQAAAhAQATQARATAZAAQAaAAARgSQARgSAAgeIAAgdQAAgYgRgRQgQgQgXAAQgcAAgRAVg");
	this.shape_366.setTransform(415.975,188.025);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FFFFFF").s().p("Ag6BxIgBAAIAAAdIgdAAIAAkfIAdAAIAACAIABAAQAXgnAsAAQAlAAAVAaQAWAaAAArQAAAwgYAeQgYAdgpAAQgmAAgUghgAgpgMQgSASAAAdIAAAcQAAAZARAQQAQARAYAAQAcAAAQgWQARgWAAgnQAAgggQgSQgPgTgaAAQgaAAgRATg");
	this.shape_367.setTransform(394.625,179.225);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FFFFFF").s().p("Ag8BLQgXgaAAgwQAAgsAZgdQAagdAlAAQAlAAAVAZQAVAYAAAsIAAAPIiJAAQABAiARASQARASAcAAQAhAAAcgWIAAAcQgaATgqAAQgnAAgYgbgAggg8QgQAPgEAbIBqAAQAAgbgNgPQgNgPgYAAQgUAAgQAPg");
	this.shape_368.setTransform(512.775,133.825);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FFFFFF").s().p("AgVBIIAAh0IgiAAIAAgaIAiAAIAAgvIAcgKIAAA5IAxAAIAAAaIgxAAIAABuQAAAUAHAJQAGAIAQAAQAMAAAIgGIAAAZQgLAGgRAAQgxAAAAg4g");
	this.shape_369.setTransform(496.15,131.175);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FFFFFF").s().p("Ag7BXQgQgQAAgZQAAg1BAgJIA6gJQAAgygpAAQgiAAgcAYIAAgfQAcgTAlAAQBDAAAABIIAAB+IgdAAIAAgeIgBAAQgVAjgmAAQgdAAgRgPgAAAAFQgZADgJAJQgKAJAAASQAAAOAKAKQALAJARAAQAWAAAPgRQAQgRAAgZIAAgSg");
	this.shape_370.setTransform(479.45,133.825);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FFFFFF").s().p("ABrBkIAAhvQABgigKgPQgLgNgYAAQgUAAgOASQgOATAAAaIAABuIgdAAIAAhzQAAg7gtABQgVAAgNARQgOASAAAcIAABuIgdAAIAAjCIAdAAIAAAfIABAAQAUgjAoAAQATAAAQALQAOALAFASQAWgoAqAAQBBgBAABQIAAB3g");
	this.shape_371.setTransform(453.65,133.6);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FFFFFF").s().p("AgOCOIAAjBIAcAAIAADBgAgNhrQgFgHAAgIQAAgHAFgGQAGgGAHAAQAIAAAGAGQAFAGAAAHQAAAJgFAFQgGAGgIAAQgIAAgFgFg");
	this.shape_372.setTransform(432.125,129.35);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FFFFFF").s().p("AAyBkIAAhuQAAg/guAAQgXgBgPATQgQASAAAbIAABuIgdAAIAAjCIAdAAIAAAgIABAAQAWglApABQAggBARAVQARAUAAAoIAAB2g");
	this.shape_373.setTransform(416.675,133.6);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FFFFFF").s().p("ABXCIIgehNIhzAAIgcBNIghAAIBokPIAeAAIBpEPgAgFhVIgrB0IBfAAIgrh0QgCgFgCgNIAAAAQgCAMgDAGg");
	this.shape_374.setTransform(393.025,129.925);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FFFFFF").s().p("AhTCNIAAgbQAJADAIAAQAYAAAMgcIAQgmIhMjBIAhAAIA1CXIAEAOIAAAAIAEgOIA4iXIAfAAIhaDiQgXA7gqAAQgLAAgIgCg");
	this.shape_375.setTransform(371.275,138.4);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FFFFFF").s().p("ABsBkIAAhvQgBgigJgPQgLgNgYAAQgTAAgPASQgPATAAAaIAABuIgcAAIAAhzQAAg7gtABQgVAAgNARQgOASAAAcIAABuIgdAAIAAjCIAdAAIAAAfIABAAQAVgjAnAAQATAAAPALQAPALAFASQAWgoArAAQBAgBAABQIAAB3g");
	this.shape_376.setTransform(345.45,133.6);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FFFFFF").s().p("AiSCfIAAj/IAhAAQAOgYAMgmIASAEQgHATgSAnIA+AAIAAD3IgSAAIAAgfIhOAAIAAAngAiABmIBOAAIAAhVIhOAAgAiAAAIBOAAIAAhOIhOAAgAAyCeIgGgSIAgAAIAUAAQAFgBAFgEQAEgEADgFQACgGADgkQAEgkACgrIADhTIheAAQgSAmgYAiIgPgLQAug+AUhMIASAFQgIAcgLAbIBqAAQgCBRgGBEQgFBFgGANQgGAMgJAFQgJAFgZAAIgdAAgAAOgHIAPgKQAgAmAUAsIgPALQgSgogigrg");
	this.shape_377.setTransform(562.775,79.675);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FFFFFF").s().p("AAFCcIgFgUQAQACATAAQAPAAAFgCQAEgCAAgFIAAh5IhVAAIAAgSIBVAAIAAgqQAlgmAagoIiNAAIAAgTICjAAIAAAVQgVAkgsAvIAAAjIBOAAIAAASIhOAAIAAB1QAAAUgKAGQgKAGgdAAIgZgBgAicCPQAuglATgfQgTgPgigVQANg2AHgsIgfACIAAgTQAUAAAOgCQAFgiAEgsIATAAQgBAcgHAvQARgBAegGIAAgiIATAAIAAAeQAIgBANgEIAAATIgWAFQgEBcgbAzQAbAVAYAXIgQAPQgSgVgagVQgVAggtAlgAhog+QgJA4gKAkQAXANASAPQAZgzAChMQgXAFgaACg");
	this.shape_378.setTransform(526.7,79.825);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FFFFFF").s().p("AibCbIAAgOIE3AAIAAAOgAh2B2IAAhUIDsAAIAABUgAAJBoIBbAAIAAgVIhbAAgAhkBoIBcAAIAAgVIhcAAgAAJBGIBbAAIAAgVIhbAAgAhkBGIBcAAIAAgVIhcAAgAibAPIAAgOICTAAIAAgUIh6AAIAAgNIB6AAIAAgWIhyAAIAAgNIByAAIAAgUIiSAAIAAgOICSAAIAAgUIhzAAIAAgOIBzAAIAAgTIARAAIAAATIBvAAIAAAiIAjAAIAAAOIgjAAIAAAhIhvAAIAAAWIB6AAIAAANIh6AAIAAAUICTAAIAAAOgAAJhDIBcAAIAAgUIhcAAgAAJhlIBcAAIAAgUIhcAAg");
	this.shape_379.setTransform(490.575,79.65);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FFFFFF").s().p("AgICeIgIgUIAhACQASAAAAgNIAAi+IATAAIAAC9QAAARgJAIQgIAIgbAAIgSgBgAhqCeIAAjWQgUAhgWAZIgKgSQAqgyAlhcIASAHIgQAlIgLAVIAAD7gABUgCIARgIQAhA6AZA8IgTAJQgXg9ghg6gAhEBpQAhgvAYhFIARAGQgaBOggArgAhIgcQAvg5AXhHIATAFIgQAoICSAAQgHAogUAzIgRgIQAOgeAHgiIiDAAQgWAsgfAkg");
	this.shape_380.setTransform(454.675,79.775);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FFFFFF").s().p("AgJCeIAAhAIhsAAIAAAxIgSAAIAAg/IB+AAIAAgSIhjAAIAAhHIBYAAIALgOIARADIgIALIBsAAIAABHIhlAAIAAASIB+AAIAAAkQAAANgEAGQgGAHgJAAIgtAAIgFgQIAXABQAVAAAEgCQAFgDgBgFIAAgXIhtAAIAABAgAhbAwIC1AAIAAgPIi1AAgAhbATIC1AAIAAgOIi1AAgABGgWIgGgRIATABQAQAAADgCQADgCAAgEIAAg9IhWAAIAAgQIBWAAIAAghIATAAIAAAhIAgAAIAAAQIggAAIAAA+QgBAMgIAGQgIAGgVAAIgQgBgAibglQAvgBAhgDIAAgWIg9AAIAAgNIA9AAIAAgTIhNAAIAAgOIBNAAIAAgSIg9AAIAAgMIA9AAIAAgRIASAAIAAARIA7AAIAAAMIg7AAIAAASIBBAAIAAAOIhBAAIAAATIA7AAIAAANIg7AAIAAAUIApgCIAigEIAAAPQhCAIhpAEgAAZhTIANgKQAOAIAUAVIgNALQgPgRgTgNg");
	this.shape_381.setTransform(418.75,79.8);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FFFFFF").s().p("AA2CeIAAjaIgsAAIAADAIgSAAIAAjSIA+AAIAAgyIhOAAIAAgTICuAAIAAATIhNAAIAAAyIA+AAIAAC4QAAAegqgEIgFgSIANAAQAPAAABgKIAAikIgsAAIAADagAiVCeIAAkRIAlAAQANgXAHgTIASAFQgHARgLAUIAuAAIAABhIhUAAIAAAuIBdAAIAABrIhdAAIAAAXgAiCB1IBKAAIAAhHIhKAAgAiCgjIBBAAIAAg+IhBAAg");
	this.shape_382.setTransform(383.45,79.8);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FFFFFF").s().p("AgiCbQgOAAgIgJQgIgJAAgOIAAhNQgnATgrARIgKgTQBvgoA+gsIisAAIAAgTIB+AAIAAgzIhlAAIAAgUIBlAAIAAgrIAUAAIAAArIBWAAIAAAUIhWAAIAAAzIAzAAQAvgnAng3IARAMQgjAtgnAlIBWAAIAAATIhsAAQgmAdg4AdIAAAMICMAAIAAASIiMAAIAAA4QAAAGAFAEQAEADAHAAIB/AAQAHAAAIgGQAJgHADgqIASALQgFAogKAMQgJALgaAAg");
	this.shape_383.setTransform(346.625,79.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.spring},{t:this.ball},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.box}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.helper, new cjs.Rectangle(50.2,53,1349.8999999999999,847), null);


// stage content:
(lib.myAnimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// helper
	this.helper = new lib.helper();
	this.helper.name = "helper";
	this.helper.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.helper).wait(1));

	// ball
	this.chEtotal = new lib.chEtotal();
	this.chEtotal.name = "chEtotal";
	this.chEtotal.parent = this;
	this.chEtotal.setTransform(1357.85,695.5,1,1,0,0,0,59.1,-1.8);

	this.chSpring = new lib.chSpring();
	this.chSpring.name = "chSpring";
	this.chSpring.parent = this;
	this.chSpring.setTransform(1357.85,505.75,1,1,0,0,0,59.1,-1.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(1397.825,875.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("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");
	this.shape_1.setTransform(1401.075,98.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("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");
	this.shape_2.setTransform(1403.675,100.625);

	this.rbWave02 = new lib.rbWave02();
	this.rbWave02.name = "rbWave02";
	this.rbWave02.parent = this;
	this.rbWave02.setTransform(1359.8,241.9,1,1,0,0,0,59.1,0);

	this.rbWave01 = new lib.rbWave01();
	this.rbWave01.name = "rbWave01";
	this.rbWave01.parent = this;
	this.rbWave01.setTransform(1361.55,181.4,1,1,0,0,0,59.1,0);

	this.rbWave03 = new lib.rbWave03();
	this.rbWave03.name = "rbWave03";
	this.rbWave03.parent = this;
	this.rbWave03.setTransform(1359.8,302.45,1,1,0,0,0,59.1,0);

	this.btnStep = new lib.btnStep();
	this.btnStep.name = "btnStep";
	this.btnStep.parent = this;
	this.btnStep.setTransform(1467.9,782.9);
	new cjs.ButtonHelper(this.btnStep, 0, 1, 2, false, new lib.btnStep(), 3);

	this.btnPlayStop = new lib.btnPlayStop();
	this.btnPlayStop.name = "btnPlayStop";
	this.btnPlayStop.parent = this;
	this.btnPlayStop.setTransform(1312.5,782.9);
	new cjs.ButtonHelper(this.btnPlayStop, 0, 1, 2, false, new lib.btnPlayStop(), 3);

	this.chEkUs = new lib.chEkUs();
	this.chEkUs.name = "chEkUs";
	this.chEkUs.parent = this;
	this.chEkUs.setTransform(1365.95,632.65,1,1,0,0,0,67.2,-1.4);

	this.chVV = new lib.chVV();
	this.chVV.name = "chVV";
	this.chVV.parent = this;
	this.chVV.setTransform(1365.95,569.4,1,1,0,0,0,67.2,-1.4);

	this.slDT = new lib.slDT();
	this.slDT.name = "slDT";
	this.slDT.parent = this;
	this.slDT.setTransform(1300.7,416.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.slDT},{t:this.chVV},{t:this.chEkUs},{t:this.btnPlayStop},{t:this.btnStep},{t:this.rbWave03},{t:this.rbWave01},{t:this.rbWave02},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.chSpring},{t:this.chEtotal}]}).wait(1));

	// drawBmp
	this.drawBmp = new lib.drawBmp();
	this.drawBmp.name = "drawBmp";
	this.drawBmp.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.drawBmp).wait(1));

	// bg
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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAABpQAQgUAHgaQAHgaAAgvIAAheIBOAAIAADMQAAAIgGAFQgGAEgSAAIgOAAIgFgPIAXACQANAAAAgHIAAg+Ig2AAQgEAvgZAkgAAqARIA1AAIAAgwIg0AAQAAAWgBAagAArgtIA0AAIAAgxIg0AAgAhnBnQAYgWAPgZIALAIQgPAZgYAXgAgiBCIAJgJQAOAPALARIgMAIQgIgQgOgPgAhrAwIAAgNIAaAAIAAhqIgWAAIAAgNIAWAAIAAgdIAOAAIAAAdIAxAAIAAgdIAOAAIAAAdIAWAAIAAANIgWAAIAABqIATAAIAAANgAhDAjIAxAAIAAgcIgxAAgAhDgFIAxAAIAAgbIgxAAgAhDgtIAxAAIAAgaIgxAAg");
	this.shape_3.setTransform(1212.475,351.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhzBoQAkggANgzIgnAAIAAgMQAUgYASgcIgtAAIAAgMIA+AAIAAAMQgTAbgUAZIAlAAIAAAMQgGAZgMAXQAOAOATAGQATAHAXAAIBvABIgFANIhngBQgcgBgVgHQgVgIgOgNQgOATgQAPgAgwBIQAQgoAAg/IAAhMICFAAIAACkQAAALgFAFQgFAGgRAAIgPgBIgGgNQAdgBADgBQADgCAAgFIAAhNIhrAAQAAA+gRAmgAApghIAvAAIAAgaIgvAAgAgSghIAuAAIAAgaIguAAgAAphHIAvAAIAAgYIgvAAgAgShHIAuAAIAAgYIguAAgAAAAxIAAg0IBDAAIAAA0gAAMAkIAqAAIAAgbIgqAAgAhphoIAJgJQAYATANASIgKAJQgPgVgVgQg");
	this.shape_4.setTransform(1187.025,351.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAfBRQgfgSgQgkIAMgFQANAaARANQAbgOAbgYIAKAIQgSATgiAUQAgASAqAJIgIAMQgqgKgfgSgAhSBgQAFgCAAgEIAAhQIgjAAIAAgLIApAAIAAhrICpAAIAAAMIibAAIAAAXICNAAIAAANIiNAAIAAAXICNAAIAAAMIiNAAIAAAYICqAAIAAALIixAAIAABRQAagHAhgNIADANQgoAPgjAKg");
	this.shape_5.setTransform(1213.025,250.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAmBMQgVAUgtATIgIgMQApgQAXgTQgcgagQgxIgJAAQgBBCgbA3IgNgIQAcg0AAhKIAAhEIA+AAIAAgZIANAAIAAAZIBJAAQgCAagLAdIgOgEQAIgVADgQIg5AAIAAA2IA2AAIAAANQgTAwgZAaQAbAVApANIgGAOQgvgTgYgUgAAlA6QAXgYAQgpIhOAAQANArAaAWgAgYgUIAwAAIAAg2IgwAAgAhyBnQAZgqATgtIALAIQgUAxgYAmgAhvgmIAJgKQAZAQAUASIgKAKQgVgUgXgOgAhphoIAJgKQAaARATASIgKAKQgUgTgYgQg");
	this.shape_6.setTransform(1186.95,250);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABYByIAAgQIhbAAIAAAQIgNAAIAAhyIB1AAIAABygAAwBWIAoAAIAAgfIgoAAgAgDBWIAlAAIAAgfIglAAgAAwAqIAoAAIAAgeIgoAAgAgDAqIAlAAIAAgeIglAAgAhNByIAAirIgTAAIAAB7IgMAAIAAiJIAfAAIAAgpIANAAIAAApIAfAAIAAB1QAAARgWgCIgFgOIAJAAQAGAAAAgFIAAhjIgTAAIAACrgAgHgTIAAg2IBgAAIAAA2gAAGggIBGAAIAAgdIhGAAgAgcheIAAgNICJAAIAAANg");
	this.shape_7.setTransform(1213.375,150);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAqAIIAMgDQAGAVAIARQANgJARgWIAJAKQgOARgTAPQAKAVAfAdIgLAKQgwgsgOg+gAg2BpQAYgqAAhWIAAhVICIAAIAAANIh7AAIAAAeIBxAAIAAANIhxAAIAAAiICAAAIAAANIhgAAIAABhQARgHAVgMIAAAOQgaAQgYAJIgEgOQACgEAAgFIAAheIgSAAQgFBOgUAogAhmBwIgFgNIAVAAQAIAAAAgHIAAhIIggAMIgEgMIAkgNIAAg9IghAAIAAgNIAhAAIAAguIANAAIAAAuIAaAAIAAANIgaAAIAAA2IAYgJIAEALIgcAMIAABPQAAASgUABIgJABIgIgBg");
	this.shape_8.setTransform(1187.125,150.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.textAA},{t:this.textLambda},{t:this.textTT},{t:this.bg}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(799.5,447.5,801,455.1);
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