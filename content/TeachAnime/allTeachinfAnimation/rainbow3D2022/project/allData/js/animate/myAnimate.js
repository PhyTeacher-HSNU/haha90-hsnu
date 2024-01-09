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


(lib.logoBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egh5Ah6MAAAhDzMBDzAAAMAAABDzg");
	this.shape.setTransform(0.0072,-0.022,3.6871,2.074);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logoBG, new cjs.Rectangle(-800,-450,1600,900), null);


(lib.checker2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhMBNQghggAAgtQAAgsAhghQAgggAsAAQAtAAAhAgQAgAhAAAsQAAAtggAgQghAhgtAAQgsAAggghg");

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


(lib.zoomPointer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AmPAZIAAgxIMfAAIAAAxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.zoomPointer, new cjs.Rectangle(-40,-2.5,80,5), null);


(lib.btnDragBB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AhjDIIDHAAIhkDIgAhjjHIBjjIIBkDIg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AhjDIIDHAAIhkDIgAhjjHIBjjIIBkDIg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(3,1,1).p("ACCAAQAAA2gmAmQgmAmg2AAQg1AAgngmQglgmAAg2QAAg1AlgmQAngmA1AAQA2AAAmAmQAmAmAAA1g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AhcBcQglgmAAg2QAAg1AlgmQAngmA1AAQA2AAAmAmQAmAmAAA1QAAA2gmAmQgmAmg2AAQg1AAgngmg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#00FFFF").ss(3,1,1).p("ACMAAQAAA6gpApQgpApg6AAQg5AAgqgpQgogpAAg6QAAg5AogpQAqgpA5AAQA6AAApApQApApAAA5g");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000FF").s().p("AhjBiQgogoAAg6QAAg5AogoQAqgqA5AAQA6AAAoAqQAqAoAAA5QAAA6gqAoQgoAqg6AAQg5AAgqgqg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFF00").ss(3,1,1).p("ACCAAQAAA2gmAmQgmAmg2AAQg1AAgngmQglgmAAg2QAAg1AlgmQAngmA1AAQA2AAAmAmQAmAmAAA1g");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AhcBcQglgmAAg2QAAg1AlgmQAngmA1AAQA2AAAmAmQAmAmAAA1QAAA2gmAmQgmAmg2AAQg1AAgngmg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF00FF").s().p("AhpBpQgsgrAAg+QAAg9AsgrQAsgtA9AAQA+AAArAtQAtArAAA9QAAA+gtArQgrAtg+AAQg9AAgsgtg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-40,31,80);


(lib.btn3D_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhPBFQgLgLAAgVIAQgBQAAANAFAHQAHAJALAAQANgBAHgIQAHgJAAgQQABgOgKgHQgJgGgPAAIAAgQQAPgBAFgHQAIgHAAgLQgBgLgGgIQgFgHgIAAQgJAAgGAIQgFAIgDALIgPgFQAEgRAKgLQAKgKAOAAQAQAAAJAKQALALAAAVQgBASgKALQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAIAGAEQANAKAAAWQAAAYgMANQgNANgSAAQgSAAgKgMgAAJBPIAAieIAfAAQAeABAKARQALAQAAArQAAAwgNARQgMAQgaAAgAAZA+IAPAAQAQABAKgMQAHgKAAgrQAAgjgHgPQgHgLgTAAIgPAAg");
	this.shape_1.setTransform(0.025,15.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOBjQAvgBAOgIQALgGADgHIg0AAQgHgBAAgGIAAg/IABgFQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAmAAAkgHIAHATQgfAHgiAAIgBABIAAACIAAAFIBFAAIAAASIhFAAIAAAJQAAAFAFAAICZAAQAFgBAAgEIAAgJIhKAAIAAgSIBKAAIAAgHQgBgEgEAAIg/AAIAAgRIBSAAQAGABAAADIAABDQgBAHgGAAIg7AAIAAAJQAAAFADAFQAEADAEAAIAtAAIAGgCIABgEQACgEABgMIAUAGIgHAcQgIAIgGAAIhBAAQgIgBgHgGQgGgHAAgHIAAgVIglAAIgFANQgDAGgEAEQgXATg5ADgAieBqQAqgfAcgfQgSgvgKg7IhYAAIgCACIAAAbIBCAAQAJAAAAAEIAABGQgBAOgDAJQgGAMgHAEQgLAHgngHIgCgXQAgAIAHgEIAGgHIACgJIAAg2QAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgyAAIAAALQgBBGgVAxIgVgIQAMgfAEgZQAEgYAAgkIAAhJQAAgGAGAAIBnAAQgDgUAAgQIAWABQABAQADATIAuAAQgQgMgNgFIALgUQAPAHASAMIgKASIAgAAIAAAWIhQAAQAKA1AKAeQAMgUANgxIAWAFQgMA3gYAjQAIAUAKAPQAGALADAAQADgBABgHQADgPgBgYIAXAFQgFA9gNAHQgEACgEAAQgJAAgIgJQgOgPgOgfQgbAfgjAZgAmCBlQA8gaApg7IASANQgEAJgHAHQgnAvg6AcgAmkB3IAAh0IglAAQgCAMgCAWQgEAVgGATQgKAagHAKIgWgGQAegwABg4IgcAAIAAgVIAcAAIAAhHIgYAAIAAgXIB/AAIAAAXIgWAAIAABHIAYAAIAAAVIgYAAIAAB0gAnIgSIAkAAIAAhHIgkAAgAFwBkIhdAQIgFgXIAxgIIAAgqIglAAQgDAAAAgEIAAh7QAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAlAAIAAggIAXAAIAAAgIAlAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAABIAAB7QAAAEgDAAIglAAIAAAmIAVgEIgFgUIAWgEIAJAlIAxAAIAAiyIgxAAIAAgXIB3AAIAAAXIgvAAIAACyIAzAAIAAAXIh4AAIgWADIgCgQgAFWAUIARAAIABgBIAAhTIgBgBIgRAAgAEthAIAABTIABABIARAAIAAhVIgRAAIgBABgAl6ALQA0gVAjgsIARAOQguA0gsATgACdgMIAAgQIA7AAIAAAQgAAwgMIAAgQIA9AAIAAAQgAB5gNIAAgyIhRAAQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAABIAAAeIgUAAIAAgwQAAgEAEAAIBjAAIAAgKIhXAAIAAgTIDDAAIAAATIhWAAIAAAKIBbAAIATAJQgCASgKAcIgTgIQAHgVAAgDQAAAAAAgBQAAgBgBAAQAAAAgBgBQAAAAgBAAIhTAAIAAAygACcglIAAgQIA7AAIAAAQgAAwglIAAgQIA9AAIAAAQgAl9hAQAvgSAfglIAQAPQgrAsglAPg");
	this.shape_2.setTransform(0,-9.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(4));

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


(lib.btn2DNear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAIBQIAAieIAfAAQAeABAKARQALARAAAqQAAAwgNARQgMAQgaAAgAAYA/IAPAAQAQACAKgMQAHgKAAgsQAAgjgHgPQgHgKgTgBIgPAAgAhZBQIAAgMQAAgeAhgdQAfgZAAgUQAAgMgFgHQgHgIgIAAQgLAAgGAHQgIAKAAAQIgQAAQAAgZAMgNQALgLASAAQAQAAAKALQAKALAAAVQAAAcgkAgQgcAZAAAOIBAAAIAAARg");
	this.shape.setTransform(0.025,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("An4BlQAWgKAHgKQAGgHABgKIAAgrQAAAAAAgBQAAgBgBAAQAAAAAAgBQgBAAgBAAIgdAAIAAgVIAxAAQAGABAAADIAAA6QABAHAGAJQAHAKAMAEQANAFAXgBQBEAAAygDIgHAZIh8AAQgrgDgPgdQgEAJgLANQgMAMgMAEgAHFB2IgDgYQAXAHAGgDQAFgFAAgGIAAh2IgBgBIgxAAIAAASIAsAAIAAATIgsAAIAAASIAkAAQAAAAABAAQABABAAAAQAAAAABABQAAAAAAABIAAA+QAAABAAABQgBAAAAABQAAAAgBAAQgBAAAAAAIhfAAQAAAAgBAAQgBAAAAAAQAAgBgBAAQAAgBAAgBIAAg+QAAgBAAAAQABgBAAAAQAAAAABgBQABAAAAAAIAnAAIAAgSIgsAAIAAgTIAsAAIAAgSIgyAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAABIAACXIgVAAIAAimQABgHAHAAIAdAAIgDgPQgDgIAAgEIgfAAIAAgVIBFAAIAAgQIAWAAIAAAQIBJAAIAAAVIghAAQgDAFgBAJIgEANIAiAAQAHAAAAAHIAACMQAAAPgKAHQgGAEgNAAQgKAAgNgCgAGJAsIAAAcIA7AAIABgBIAAgbIgBgBIg7AAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAABABAAgAGQg1IAqAAIAJgbIg5AAIAGAbgAguB4IAAgJIh5AAIAAAJIgWAAIAAhrQgNAMgdATIgOgRQAqgZAbgbIhDAAIAAgVIBTAAIAIgLIhMAAIAAgUIBZAAIAGgLQg2ACgjAAIgCgWQAuABA9gEQA+gDAegGIADAVQgYAGg3AEIgHAAIgHAMIBgAAIAAAUIhrAAIgIALICBAAIAAAVIiRAAIgLAMICEAAQAFAAAAAEIAACBgAinBaIB5AAIAAgOIh5AAgAinA4IB5AAIAAgOIh5AAgAinAJIAAAMIB5AAIAAgMQAAgBAAAAQgBgBAAAAQAAAAgBgBQgBAAAAAAIhzAAQgEAAABADgABHBtIABgYIAYAHQAUAFAHgFQACgCAAgGIAAjKIAXAAIAAAgIACAJQAWBYBTBJIgVAPQhAhCgWg2IAABvQAAARgMAHQgHAEgMAAQgRAAgdgJgAESBtQAcgsAGgvIAWADQgKA9gZAjgAAOBHQAagYAWgdQAYgmADgZQAAgBABAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQgCgCgEAAIg/AAIAAgXIBUAAIAGAHQgBAOgDANQgRBIg3A2gAlRBRIAAhtIgzAAIAAATQgBAXgEATQgGAYgOAWIgUgOQAOgXAEgTQAEgPAAgRIAAhXQgBgJAGAAQA9gDAxgJIAIAWQgpAJg4ADQgBAAgBAAQgBABAAAAQAAABAAAAQAAABAAABIAAAcIBzAAIAAAXIgpAAIAABtgAERgcIAOgTQASAMAXAWIgPAPQgYgUgQgKgACygcQAjgnAPgZIASAMQgTAfgfAjgAn1gsIALgUQAUAIAaASIgLAUQgcgTgSgHgAEWheIAMgTQATAMAXAUIgOARQgZgVgPgJgAnshhIAKgVQAXAJAZATIgLATQgdgTgSgHg");
	this.shape_1.setTransform(0.025,-9.975);

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


(lib.btn2DFar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAIBQIAAieIAfAAQAeABAKARQALARAAAqQAAAwgNARQgMAQgaAAgAAYA/IAPAAQAQACAKgMQAHgKAAgsQAAgjgHgPQgHgKgTgBIgPAAgAhZBQIAAgMQAAgeAhgdQAfgZAAgUQAAgMgFgHQgHgIgIAAQgLAAgGAHQgIAKAAAQIgQAAQAAgZAMgNQALgLASAAQAQAAAKALQAKALAAAVQAAAcgkAgQgcAZAAAOIBAAAIAAARg");
	this.shape.setTransform(0.025,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("An4BmQAUgLAGgJQAFgGABgJIAAgwQAAgBAAAAQAAgBAAAAQgBAAAAgBQgBAAgBAAIgYAAIAAgVIAsAAQAGABAAAEIAAA9QABAJAHAHQAKANAQAEQAWAGCAgIIgGAZIh7ABQgwgEgQgdQgDAJgKALQgLAMgKAEgAHFB2IgDgYQAXAHAGgDQAFgFAAgGIAAh2IgBgBIgxAAIAAASIAsAAIAAATIgsAAIAAASIAkAAQAAAAABAAQABABAAAAQAAAAABABQAAAAAAABIAAA+QAAABAAABQgBAAAAAAQAAABgBAAQgBAAAAAAIhfAAQAAAAgBAAQgBAAAAgBQAAAAgBAAQAAgBAAgBIAAg+QAAgBAAAAQABgBAAAAQAAAAABgBQABAAAAAAIAnAAIAAgSIgsAAIAAgTIAsAAIAAgSIgyAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAABIAACXIgVAAIAAimQABgHAHAAIAdAAIgDgPQgDgIAAgEIgfAAIAAgVIBFAAIAAgQIAWAAIAAAQIBJAAIAAAVIghAAQgDAFgBAJIgEANIAiAAQAHAAAAAHIAACMQAAAPgKAHQgGAEgNAAQgKAAgNgCgAGJAsIAAAcIA7AAIABgBIAAgbIgBgBIg7AAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAABABAAgAGQg1IAqAAIAJgbIg5AAIAGAbgAguB4IAAgJIh5AAIAAAJIgWAAIAAhrQgNAMgdATIgOgRQAqgZAbgbIhDAAIAAgVIBTAAIAIgLIhMAAIAAgUIBZAAIAGgLQg2ACgjAAIgCgWQAuABA9gEQA+gDAegGIADAVQgYAGg3AEIgHAAIgHAMIBgAAIAAAUIhrAAIgIALICBAAIAAAVIiRAAIgLAMICEAAQAFAAAAAEIAACBgAinBaIB5AAIAAgOIh5AAgAinA4IB5AAIAAgOIh5AAgAinAJIAAAMIB5AAIAAgMQAAgBAAAAQgBgBAAAAQAAAAgBgBQgBAAAAAAIhzAAQgEAAABADgABHBtIABgYIAYAHQAUAFAHgFQACgCAAgGIAAjKIAXAAIAAAgIACAJQAWBYBTBJIgVAPQhAhCgWg2IAABvQAAARgMAHQgHAEgMAAQgRAAgdgJgAESBtQAcgsAGgvIAWADQgKA9gZAjgAloAtIAMgSIAZAPQATgOAJgKIANAQQgKALgNAKIAYATIgMARQgngfgcgPgAmFBbIAAgsIgBABQgYAMgQAGIgLgUQAhgKAdgUIgvAAQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAgBAAgBIAAgwIACgCICOAAQABAAABABQAAAAABAAQAAAAAAABQAAAAAAAAIAAAwQAAABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAIhAAAIgVASIAAA5gAmYgBIBqAAIABgBIAAgQIhrAAgAAOBHQAagYAWgdQAYgmADgZQAAgBABAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQgCgCgEAAIg/AAIAAgXIBUAAIAGAHQgBAOgDANQgRBIg3A2gAERgcIAOgTQASAMAXAWIgPAPQgYgUgQgKgACygcQAjgnAPgZIASAMQgTAfgfAjgAn3gwIAMgTQATAKAXATIgNATQgZgWgQgHgAm3gxIAAgUIBIAAIAAgOIhAAAIAAgUIBAAAIAAgRIAVAAIAAARIBBAAIAAAUIhBAAIAAAOIBLAAIAAAUgAEWheIAMgTQATAMAXAUIgOARQgZgVgPgJgAnwhfIALgUQATAJAXATIgNASQgYgTgQgHg");
	this.shape_1.setTransform(0.025,-9.975);

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


(lib.theRadioButton = function(mode,startPosition,loop) {
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
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA/gsArQgsAsg+AAQg+AAgrgsQgsgrAAg/QAAg9AsgsQArgsA+AAQA+AAAsAsQAsAsAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBqQgsgrAAg/QAAg9AsgsQArgsA+AAQA+AAAsAsQAsAsAAA9QAAA/gsArQgsAsg+AAQg+AAgrgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.label = new cjs.Text("文字標籤", "26px 'Microsoft JhengHei'", "#FFFFFF");
	this.label.name = "label";
	this.label.lineHeight = 37;
	this.label.lineWidth = 132;
	this.label.parent = this;
	this.label.setTransform(24,-18.6);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

}).prototype = getMCSymbolPrototype(lib.theRadioButton, new cjs.Rectangle(-23.8,-20.6,181.9,38.6), null);


(lib.TheLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF0000","#FFFF00","#00FF00","#00FFFF","#0000FF","#FF00FF","#FF0000"],[0,0.165,0.365,0.498,0.667,0.831,1],0,-163.1,0,163.2).s().p("ADvXkQjFiJAAkBIAAgtQAAhmgqhOIkqAnQAgBGAABjQAACslVCsQlyCwkuAAQiQAAhbhmQhmhtAAhtQAAhmBGAAIA4AAQCXAAE2g7QEOgyAAgfQAAgZgOgcQhwALhjAAQjrAAhxiKQhJhmAAi2IgdlEQAAiFArg1QA4hGEPgmQBQgHAAhNQAAgdAPgRQhxhHAAg0QAAhKB0gqQCXg5AAg/QAAgYiJgyQgggKgcgHQhKADhCAAIgqAAQAOBHAABGQAAC+hHBwQg/BfhNAAQhqAAg/hfQhGhpAAg4QAAgdAmhCQA8hVAAh0QAAhRgVhJQgVguAAgnQAAhtBwAAQA5AAA4A4QAVAEAcALQA1AKA1AAQDLAAJyhiQgcg8gggjIgjguIihAcQnRBVilAAQjIAAhjg5QhQg/AAgjQAAhGBQguQBcg1BDAAQAKAAAVAHQAcAHAZAAQBRAADhgxQSZkEL+AAQEnAAC3BiQCpBcAABbQAAB/iNAAQhwAAiCgOQiUgPjWAAQmAAAmeAyQARAKALALQAmAjAcBKQH0hRF0AAQD2AADTCiQCiCMAAC0QAAChhtBYQiCBjjFAAIguAAQAgAYAcAgQB/CJAAEAIAAHeQAABYgSA7QA4BDBKBfQC3D2AACbQAACMiXBOQiwBinMAAQm4AAilh7gAJAQtIAAAtQAABtEMAAQDPAACQg0QB/g5AAhQQAAhqgqhKQgLASgOAKQhNBchfAAQi3AAgxh4QgOAAgLgDQjlgEhQAAQA7BYAACGgAikCwQBCA4AAAxQAACGioAjQnUBYjPARQAOBtCMAAQCXAAFyhUQJbiCE2AAQBtAABbAOQAAgOAEgOQAAgxADg8InMBRQiRAAhbg8QhKgqAAg1QAAg1AxgmQBDhAA1AAIAqAPQAZAACFgrQDChCDTgEIAAgbQAAhUhVAAQgtAAl5CBQiTA4hqAAQiLAAAAhzQAAhKAfg4QgcADgfAAQj+AAAAknIAAjaQg7ALg5AHQA8AjAAAmQAABqkkBGQhmAcAAAjQAAASBfASQEdAtAABKQgDA4gSAkQCUBGAAA+QAABVh/AAQgqAAh4gIQhRgHizAAQhbAAg8APQguAKAAASQAAAVAgA4QALAOADASQAcgEAugRQF8h0CFAAQB7AABcA/gAC+r9QAHBJAABYIARBxQAACihGBNQAxgECQgqIBKgYQhKg1AAguQAAhGBqgjQCTg5AAg/QAAgViMgxQiJgngEgcQg4ALg/AHgANatEQAHAAAHAEQCaA1AAA/QAABmkZA/QhiAZAAAjQAAARBbASQBjASA7ARQBKAEA8AYQADgcAWggQB+iaAAilQAAhHipAAQhNAAhNAHg");
	this.shape.setTransform(-284.175,-1.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF0000","#FFFF00","#00FF00","#00FFFF","#0000FF","#FF00FF","#FF0000"],[0,0.165,0.365,0.498,0.667,0.831,1],0,-166.6,0,166.7).s().p("A5XSRQAAj6GQg4QCNgcAyhbIAch/IAAgcIgPAAQkAAAh4hwQh0h4AAiwQAAhjgHirQgHiaAAj3QAAiMhQh7Qg9g5AAg+QAAiACbABQClgBB7BxQAygLBsgtQgjkWg7hRQg4hGgBgxQAAg/BAg8QBUhKBAAAQCrAACbDeQAxA4AdDPQB0gjBGAAQDJAACJCaQB9CJAAEBIAAKUQAABHgKA4QAnA1gBBXQABBxi6AuIh0AcQA7BQBHCHQBHCFAeB/QAVgZAfgWQBZhJEZgDQDhAAAAjlQAApqgnqOQgEiFgchUIgNAAQkrAAiphRQilhVAAhmQAAhGBbhAQBUgwBcAAQAKgBAcAIQAnAGAVAAQAnABESiRQCzhbB/AAQEyAAEAB+QCqBbgBB1QAACllDADQhYALhUAOQANAgALAjQBOESgBWMQAABlgcBDQDeADBwCmQBnCTAACVQAADEj+AAQgZAAiFg4Qh+gqiDAAQi2gBjaBDQiRAgg0AAQkagLhwiyQg0ChisAAQhRAAgqjTIgEAAQmbEdlOAAQoXAAABnCgA0+TGQAABXBiAAQBcAAESiQQgngKg0gZQhRgVhDAAQjhAAAABxgADTQgQgjAZAAAqQgBBUCqAAQBbABDvh8QAjgRAggOIhKgHQitgWhtABQh3AAg4AfgAoOImIAACpQgBClgiBqQAfgWAngVQAtgcAdgOQguj9gchjQAAgDgEgDQgSADgNAAgAxMoTIAAK6QAABmBcAKQgDnygVlVQgkARggAMgAo1sGQAZFtAKI1QAqgRAggLQADh7APirQAKjsAAkgQAAhfhVAAQgOAAgmALg");
	this.shape_1.setTransform(280.7,-4.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF0000","#FFFF00","#00FF00","#00FFFF","#0000FF","#FF00FF","#FF0000"],[0,0.165,0.365,0.498,0.667,0.831,1],0,-91.8,0,91.8).s().p("AIGMhQiCi9hygwQhfgthhAAQiEAAjLDNQi6CyimABQhTAAhHhBQhIhIAAhSQAAhLA6g0IAYgYQg1gJgngUQhMglAAgxQAAghAtgeQAYgPAZgEIAAgLQgBgzAOhqQAKheAAluQAAhqgphXQgVghgBgnQAAgwA7gTIBygjQA2gRAAgeQAAgWgpgkQglgaAAghQAAgeAdgTQAagVA2gBQBoAABcA9QBdA+AAA5QABAog3ATIjEBIQgmAPgBAaQAAAlASASQAUATAJAmQAogiAPAAQBIAAAzAnQApAgAAAhQAABGhmAXIhdAiIAAA6IAAA5QAZgRAOAAQBIAAA1AnQAnAeAAAiQAABFhmAXIhlAcIAADeIDmgrQghgJgYgcQgggqAAhDQAAhEAegOQgBAAATgKQAegMAshqQAYhBAKg8QhPgHAAhPQAAg8AShYQBFkeAAhJQgBgMgHgbQgBgQAYgQQAdgQAxAAQAzAAAjAcQAgAYgBAaIgCA/QAVgCA2gRQAcgKAIgWQAKgbAdAAQBEAAArAlQARAOAMANIAOgVQAlgrAcAAIAZAIQAKAAA1gcQB5gzBCAAQBWAAA7BBQBQBaAACuIAAMtQBGAtAAA3QAABci0ACIikAIQAZALAaAQQEGCUAABzQgBBUgmArQgjArhDABQicAAhIhmgApVIfIgVAVQg5BDAAAlQAAAnAxAAQBEAAB9iMIAggiQhwAIhUACgAjlD8IB6gYQBRgRBHgLQg7gchHg4IglgeQg1CBg2AlgAEKn3QArApAABFQAAELhDDSQgSA6gVAgQCsgVCIAAQAYAAAXACIAAh4QhPASgeAAQh1AAAAhVQAAhaB1gVIAgAAQAFgBAQgHQAfgMAZgIIAAiJQhPAageAAQh1AAAAhWQAAhYB1gYIAgAAQAFAAAOgJQAjgVAXgKIAAhNQABhGgwAAQgbAAhGAcQg3AVgTAAQhJAAgLg9QgaAWg1APQhwAmhfAFQgCAxgGA7QCqgzAkAAQA6AAAoAngAgik+IAAASQAACLg5ClQAjAIAdAAQAbAAAZhOQAxiMAAh9QAAgdgfAAQgZAAg0Aqg");
	this.shape_2.setTransform(-1,76.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 圖層_4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(15,1,1).p("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");
	this.shape_3.setTransform(0.025,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("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");
	this.shape_4.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// 圖層_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(30,1,1).p("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");
	this.shape_5.setTransform(0.025,0.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("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");
	this.shape_6.setTransform(0.025,0.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0000FF").ss(20,1,1).p("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");
	this.shape_7.setTransform(0.025,0.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("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");
	this.shape_8.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	// 圖層_1
	this.bg = new lib.logoBG();
	this.bg.name = "bg";
	this.bg.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = getMCSymbolPrototype(lib.TheLogo, new cjs.Rectangle(-800,-450,1600,900), null);


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
	this.btnS.setTransform(26.3,0,1,0.3399,0,0,0,0.2,0);
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

}).prototype = getMCSymbolPrototype(lib.theCheckbox, new cjs.Rectangle(-24.9,-20.7,183,38.7), null);


(lib.controlOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lebel
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACDBfIABgUQAQAGAGAAQAHADAGAAQAEAAAFgDQACgDAAgEIAAh7Ig6AAIAAgTIA6AAIAAgiIATAAIAAAiIAPAAIAAATIgPAAIAACBQAAANgLAGQgFAEgLAAQgPAAgYgIgAhgBDQgfAUgqAOIgKgTQAngJAdgSQgmglgNgwIgKAAIAAAcQgBA8gVAoIgRgHQANgaADgVQAEgWAAgdIAAhUQAAgFAFAAIClAAIAAATIiVAAIgCABIAAAbICEAAIANAIQgBANgEAMQgOAngiAgQAiAUAmAJIgMASQgngLglgYgAhlAnQADACADADIANgLQAdgdAFgfQgBgDgDAAIhbAAQANArAdAagAA5BjIAAgUQAWAHAGgEQAEgDAAgFIAAgdIgOAMQgMAKgPAHQgPAJgNAFIgMgQQAqgPAYgUIACgDIhAAIIgEgSIANgCIAAhnQAAgEAEAAIAaAAQAEgKABgHIARAEIgDANIAhAAQAEABAAADIAABJIAKgYIARAFQgJAZgSAcIAAA3QAAALgIAGQgGAEgMAAQgKAAgOgDgAAnAUIAygFIAAgOIgyAAgAAngQIAyAAIAAgRIgyAAgAAnhBIAAAOIAyAAIAAgOQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIgwAAIgBACgACGgKIASgFQAPAvACAOIgSAEQgGgggLgcg");
	this.shape.setTransform(1489.675,584.1006);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhkBQQAngBANgGQAJgFACgGIgsAAQgGgBAAgFIAAg2IABgDQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAfgBAfgGIAGARQgaAGgdAAIAAAAIAAACIAAAEIA6AAIAAAPIg6AAIAAAIQAAAEADAAICBAAQAEgBAAgDIAAgIIg+AAIAAgPIA+AAIAAgGQgBgDgDAAIg2AAIAAgOIBGAAQAFAAAAAEIAAA4QgBAGgFAAIgyAAIAAAHQAAAFADADQADADAEAAIAmAAIAFgCIABgDQABgDABgKIARAFIgGAXQgHAHgFAAIg3AAQgHgBgGgFQgFgGAAgGIAAgRIgeAAIgEALIgGAHQgTARgxACgAAUgOIAAgOIAyAAIAAAOgAhHgOIAAgOIAzAAIAAAOgAgJgPIAAgqIhFAAQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAABIAAAZIgRAAIAAgpQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAIBVAAIAAgJIhKAAIAAgPICkAAIAAAPIhJAAIAAAJIBNAAIAQAIQgCAPgIAXIgQgGIAGgUQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAIhGAAIAAAqgAATgjIAAgNIAyAAIAAANgAhHgjIAAgNIAzAAIAAANg");
	this.shape_1.setTransform(1335.825,572.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSBWIhOAOIgFgTIAqgHIAAgkIggAAQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBIAAhnQAAgBAAgBQABAAAAgBQAAAAABAAQAAAAABAAIAgAAIAAgbIATAAIAAAbIAfAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAABIAABnQAAABAAABQAAAAgBABQAAAAgBABQAAAAgBAAIgfAAIAAAgIASgDIgFgRIASgEIAIAgIApAAIAAiXIgpAAIAAgTIBlAAIAAATIgoAAIAACXIAqAAIAAATIhkAAIgSADIgCgOgAgoATIAOAAIABgBIAAhGIgBgBIgOAAgAhLg0IAABGIABABIAPAAIAAhIIgPAAIgBABg");
	this.shape_2.setTransform(1346.575,767.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhlBUQASgHAFgIQAFgFABgIIAAgnQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIgUAAIAAgSIAkAAQAFABAAADIAAA2QABAGAGAGQAGAJAQAFQATADBrgFIgEAVIhnABQgqgCgNgYQgEAHgJAJQgKAIgIAEgAAZBIIAAgSQARAEAPAAQAMgBADgDQADgGABgLIgBgBIgCgBIgeAAIgDgCIAAgCIAGgXIAAgCIgDgBIgUAAQgQAqgeAZIgNgPQARgLAKgOQAIgLAFgQIgdAAIAAgPIBWAAIAEACQAAAAABAAQAAABAAAAQABABAAABQAAAAAAABIgHAVIAAACIAcAAQAGABAAAFQgBAOgDALQgEATgKADQgJAEgMABQgNgBgRgEgAgygYQAggHAYgRIgxAAIAAgRIA5AAIAAgMQgdACgVgBIgCgQQBJAAAxgJIACARQgPADgiADIgFABIAAAMIA/AAIAAARIgzAAQAVAQAlAHIgKAQQgfgJgdgTIAAAVIgSAAIAAgSQggAVgYAGgAhigkIAIgRQARAHATAOIgJAQQgWgPgNgFgAhfhQIAIgRQARAHAVANIgKARQgWgOgOgGg");
	this.shape_3.setTransform(1562.475,750.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// ch
	this.chO8 = new lib.theCheckbox();
	this.chO8.name = "chO8";
	this.chO8.parent = this;
	this.chO8.setTransform(1368.3,568.9,1,1,0,0,0,67.2,-1.4);

	this.chO7 = new lib.theCheckbox();
	this.chO7.name = "chO7";
	this.chO7.parent = this;
	this.chO7.setTransform(1375.8,764.65,1,1,0,0,0,67.2,-1.4);

	this.chO6 = new lib.theCheckbox();
	this.chO6.name = "chO6";
	this.chO6.parent = this;
	this.chO6.setTransform(1592.45,748.85,1,1,0,0,0,67.2,-1.4);

	this.chO5 = new lib.theCheckbox();
	this.chO5.name = "chO5";
	this.chO5.parent = this;
	this.chO5.setTransform(1508.2,581.85,1,1,0,0,0,67.2,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.chO5},{t:this.chO6},{t:this.chO7},{t:this.chO8}]}).wait(1));

	// 圖層_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhthFIDbBFIjbBGg");
	this.shape_4.setTransform(1381.65,658.95,0.8985,0.8985,-40.078,0,0,-0.2,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhthFIDbBFIjbBGg");
	this.shape_5.setTransform(1410.5,571.05,0.8988,0.8988,-65.1556,0,0,-0.3,1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhthFIDbBFIjbBGg");
	this.shape_6.setTransform(1310.7,607.35,0.8987,0.8987,-119.8576,0,0,-0.6,0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhthFIDbBFIjbBGg");
	this.shape_7.setTransform(1375.25,763.1,0.8985,0.8985,137.9157,0,0,0.2,-0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhthFIDbBFIjbBGg");
	this.shape_8.setTransform(1511.4,708.85,0.8985,0.8985,37.8834,0,0,-2,-1.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhthFIDbBFIjbBGg");
	this.shape_9.setTransform(1301.05,639.3,0.9,0.9,0,0,0,0.4,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(3,1,1).p("AsJjyIj7myAobCwIjumiIHcAAILVDyImCKmIgBgBInpG6AobCwIEkjsAAlKlIpAn1AktjyIGrtrAGoAAIMOJOAy1jyIGsAA");
	this.shape_10.setTransform(1406.325,663.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#CCCCCC").ss(3,1,1).p("AH0AAQAADQiSCSQiSCSjQAAQjOAAiTiSQiSiSAAjQQAAjOCSiTQCTiSDOAAQDQAACSCSQCSCTAADOg");
	this.shape_11.setTransform(1402.5183,682.2183);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.controlOut, new cjs.Rectangle(1276.7,549.6,406.5999999999999,234.39999999999998), null);


(lib.controlNear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rb
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADbBzQgTgggBg3QACg2AXgfQATgXAiAAQAoAAARAeQATAdAAAxQAAA7gWAeQgUAcgiAAQgkAAgWgegAD0gjQgPAUAAArQAAAvAOAWQAMASAWAAQAVgBANgTQANgUAAgvQAAgqgNgTQgPgSgTAAQgTACgOAOgABNCBQgSgQAAgnIAAh7IgoAAIAAgdIAoAAIAAg5IAeAAIAAA5IBAAAIAAAdIhAAAIAAB7QABAXAJAKQAJAIAOAAQARAAAFgaIAdAAQgGAggOANQgMALgTAAQgcgCgRgOgAiNB9QgOgPAAgvIAAiPIAeAAIAACPQABAdAGAKQAGANANAAQAVAAANgQQAPgYACgcIAAgJIAAh2IAeAAIAAB2IAAAJQgBA4AJAlIgeAAQgEgPAAgOIgBABQgZAhgdAAQgcgCgOgSgAjKCMIgXhVIhLAAIgWBVIgeAAIBLkcIAdAAIBMEcgAjoAZIgehwIgfBwIA9AAg");
	this.shape.setTransform(1425.45,277.25);

	this.chAuto = new lib.theCheckbox();
	this.chAuto.name = "chAuto";
	this.chAuto.parent = this;
	this.chAuto.setTransform(1366.15,277.75);

	this.text = new cjs.Text("單線\n粗線\n全面", "36px ''", "#FFFFFF");
	this.text.lineHeight = 46;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(1392.15,306.15);

	this.rbRayFull = new lib.theRadioButton();
	this.rbRayFull.name = "rbRayFull";
	this.rbRayFull.parent = this;
	this.rbRayFull.setTransform(1366.15,417.15);

	this.rbRayThick = new lib.theRadioButton();
	this.rbRayThick.name = "rbRayThick";
	this.rbRayThick.parent = this;
	this.rbRayThick.setTransform(1366.15,369.2);

	this.rbRaySingle = new lib.theRadioButton();
	this.rbRaySingle.name = "rbRaySingle";
	this.rbRaySingle.parent = this;
	this.rbRaySingle.setTransform(1366.15,321.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rbRaySingle},{t:this.rbRayThick},{t:this.rbRayFull},{t:this.text},{t:this.chAuto},{t:this.shape}]}).wait(1));

	// 圖層_1
	this.btnDragBB = new lib.btnDragBB();
	this.btnDragBB.name = "btnDragBB";
	this.btnDragBB.parent = this;
	this.btnDragBB.setTransform(190.35,384.1);
	new cjs.ButtonHelper(this.btnDragBB, 0, 1, 2, false, new lib.btnDragBB(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnDragBB).wait(1));

}).prototype = getMCSymbolPrototype(lib.controlNear, new cjs.Rectangle(174.9,257,1349.3,179.2), null);


(lib.controlFar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.slFine = new lib.theSlider();
	this.slFine.name = "slFine";
	this.slFine.parent = this;
	this.slFine.setTransform(1356.9,357.3);

	this.slPosition = new lib.theSlider();
	this.slPosition.name = "slPosition";
	this.slPosition.parent = this;
	this.slPosition.setTransform(1356.9,309.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.slPosition},{t:this.slFine}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.controlFar, new cjs.Rectangle(1181.9,290.7,449,85.90000000000003), null);


(lib.control3D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rb
	this.text = new cjs.Text("平地\n懸崖", "36px ''", "#FFFFFF");
	this.text.lineHeight = 46;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(1392.15,297.45);

	this.rbSmallGround = new lib.theRadioButton();
	this.rbSmallGround.name = "rbSmallGround";
	this.rbSmallGround.parent = this;
	this.rbSmallGround.setTransform(1366.15,360.5);

	this.rbBigGround = new lib.theRadioButton();
	this.rbBigGround.name = "rbBigGround";
	this.rbBigGround.parent = this;
	this.rbBigGround.setTransform(1366.15,312.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rbBigGround},{t:this.rbSmallGround},{t:this.text}]}).wait(1));

	// 圖層_1
	this.slSun = new lib.theSlider();
	this.slSun.name = "slSun";
	this.slSun.parent = this;
	this.slSun.setTransform(1356.9,441.75);

	this.timeline.addTween(cjs.Tween.get(this.slSun).wait(1));

}).prototype = getMCSymbolPrototype(lib.control3D, new cjs.Rectangle(1181.9,291.9,449,169.20000000000005), null);


(lib.control2D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// controlOut
	this.controlOut = new lib.controlOut();
	this.controlOut.name = "controlOut";
	this.controlOut.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.controlOut).wait(1));

	// controlFar
	this.controlFar = new lib.controlFar();
	this.controlFar.name = "controlFar";
	this.controlFar.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.controlFar).wait(1));

	// controlNear
	this.controlNear = new lib.controlNear();
	this.controlNear.name = "controlNear";
	this.controlNear.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.controlNear).wait(1));

	// main
	this.btn3D = new lib.btn3D_1();
	this.btn3D.name = "btn3D";
	this.btn3D.parent = this;
	this.btn3D.setTransform(1489.95,70,0.7,0.7);
	new cjs.ButtonHelper(this.btn3D, 0, 1, 2, false, new lib.btn3D_1(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADFCFQhBAahAAJIgKgeQA8gHAjgMIAIgBQgigSgegTIALgdQAuAhArARQAugYAXgaQACgEgFAAIivAAIAAgdIDLAAIAVATQgZAsg3AiQA0AOA7AGIgOAgQhMgOg4gVgAlVCHQA0gFAZgOQAUgNABgaIAAgeIAgAAIAAAeQgCASgGAOQgCAHgFAEQgZAmhSAJgAiCCkQgNgCgKgJQgIgKAAgKIAAhXIAfAAIAABFQAAAIAEAFQAIAFAFAAIA0AAQAEAAAEgEQAFgBABgjIAfAHQgFAtgFAHQgMAMgKAAgAAICRQASgdAHgeQAFgYAAgnIAAidQAAgJAJAAIB5AAIAAgYIAfAAIAAAYICGAAIAAAdIg0AAIAAAgIA0AAIAAAdIg0AAIAAAqQgBANgOAAIiRAAQgOAAAAgNIAAgqIgnAAIAABVQgCBLgeAzgACKgfQgBAFAFAAIBmAAQAGAAAAgFIAAgWIhwAAgACKhSIBwAAIAAggIhwAAgABEhtIAAAbIAnAAIAAggIgkAAQgDAAAAAFgAg7BLQAJgeABgJQABgEgFAAIkAAAQAAAAgBABQAAAAgBAAQAAAAAAABQAAAAAAABIAAAuIgfAAIAAhJQAAgGAGAAIEnAAIAbAPQgEAdgNAngAkpgMQgFAAABgEIAAhOQgBgEAFAAIDoAAQAEAAAAAEIAABOQAAAEgEAAgAkQhGIAAAdQAAABAAAAQAAAAAAABQABAAAAAAQAAAAAAAAICzAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgdQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAAAIizAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAgAlUhzIAAgdICQAAIAAgXIAfAAIAAAXICMAAIAAAdg");
	this.shape.setTransform(1432.25,176.1,0.75,0.75,0,0,0,0.1,0.4);

	this.zoomPointer = new lib.zoomPointer();
	this.zoomPointer.name = "zoomPointer";
	this.zoomPointer.parent = this;
	this.zoomPointer.setTransform(1400.05,100.05);

	this.slIntensity = new lib.theSlider();
	this.slIntensity.name = "slIntensity";
	this.slIntensity.parent = this;
	this.slIntensity.setTransform(1356.95,212.6);

	this.btn2DNear = new lib.btn2DNear();
	this.btn2DNear.name = "btn2DNear";
	this.btn2DNear.parent = this;
	this.btn2DNear.setTransform(1310,69.95,0.7,0.7,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.btn2DNear, 0, 1, 2, false, new lib.btn2DNear(), 3);

	this.btn2DFar = new lib.btn2DFar();
	this.btn2DFar.name = "btn2DFar";
	this.btn2DFar.parent = this;
	this.btn2DFar.setTransform(1399.95,69.95,0.7,0.7,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.btn2DFar, 0, 1, 2, false, new lib.btn2DFar(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn2DFar},{t:this.btn2DNear},{t:this.slIntensity},{t:this.zoomPointer},{t:this.shape},{t:this.btn3D}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.control2D, new cjs.Rectangle(175.9,47.8,1507.3999999999999,736.2), null);


// stage content:
(lib.myAnimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Logo
	this.theLogo = new lib.TheLogo();
	this.theLogo.name = "theLogo";
	this.theLogo.parent = this;
	this.theLogo.setTransform(800,450);

	this.timeline.addTween(cjs.Tween.get(this.theLogo).wait(1));

	// control3D
	this.control3D = new lib.control3D();
	this.control3D.name = "control3D";
	this.control3D.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.control3D).wait(1));

	// control2D
	this.control2D = new lib.control2D();
	this.control2D.name = "control2D";
	this.control2D.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.control2D).wait(1));

	// UI
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(92.725,840.875);

	this.slCameraRR = new lib.theSlider();
	this.slCameraRR.name = "slCameraRR";
	this.slCameraRR.parent = this;
	this.slCameraRR.setTransform(1350.95,851.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.slCameraRR},{t:this.shape}]}).wait(1));

	// btn3D
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(101.2,875.708);

	this.btn3D = new lib.btn3D();
	this.btn3D.name = "btn3D";
	this.btn3D.parent = this;
	new cjs.ButtonHelper(this.btn3D, 0, 1, 2, false, new lib.btn3D(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn3D},{t:this.shape_1}]}).wait(1));

	// black
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("EgbVBGUMAAAiMnMA2rAAAMAAACMng");
	this.shape_2.setTransform(1425,450);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// drawBmp
	this.drawBmp = new lib.drawBmp();
	this.drawBmp.name = "drawBmp";
	this.drawBmp.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.drawBmp).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(800,450,883.3,450);
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