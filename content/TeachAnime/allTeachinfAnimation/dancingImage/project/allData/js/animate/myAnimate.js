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


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgfH0IAApwQAAgEgEgEQgEgCgHAAIhTAAICCltICBFtIhSAAQgGAAgEACQgFAEAAAEIAAJwg");
	this.shape.setTransform(0,50);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("AgfH0IAApwQAAgEgEgEQgEgCgHAAIhTAAICCltICBFtIhSAAQgGAAgEACQgFAEAAAEIAAJwg");
	this.shape_1.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// 圖層_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("Agfh8QAAgEgEgEQgFgCgGAAIhTAAICCltICBFtIhSAAQgGAAgEACQgFAEAAAEIAAJwIhAAAg");
	this.shape_2.setTransform(0,50);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfH0IAApwQAAgEgEgEQgEgCgHAAIhTAAICCltICBFtIhSAAQgGAAgEACQgFAEAAAEIAAJwg");
	this.shape_3.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-1.5,29,103);


(lib.btnObjB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AhFBdIAAi5IBFAAQAVAAANAGQANAFAHAMQAHALAAANQAAANgGAKQgHALgNAGQARAFAJALQAJAMAAAQQAAANgFAMQgGAKgIAGQgIAHgMADQgMADgSAAgAgtBHIAuAAIARgBQAIgCAGgDQAFgDAEgHQAEgHAAgJQAAgKgGgIQgFgIgJgDQgKgDgRAAIgrAAgAgtgOIApAAQAPAAAHgCQAKgDAEgGQAFgHAAgJQAAgKgEgHQgFgHgIgCQgIgDgTAAIgmAAg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(3,1,1).p("ACCAAQAAA2gmAmQgmAmg2AAQg1AAgngmQglgmAAg2QAAg1AlgmQAngmA1AAQA2AAAmAmQAmAmAAA1g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AhcBcQglgmAAg2QAAg1AlgmQAngmA1AAQA2AAAmAmQAmAmAAA1QAAA2gmAmQgmAmg2AAQg1AAgngmg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00FFFF").ss(3,1,1).p("ACMAAQAAA6gpApQgpApg6AAQg5AAgqgpQgogpAAg6QAAg5AogpQAqgpA5AAQA6AAApApQApApAAA5g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AhjBiQgogoAAg6QAAg5AogoQAqgqA5AAQA6AAAoAqQAqAoAAA5QAAA6gqAoQgoAqg6AAQg5AAgqgqg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFF00").ss(3,1,1).p("ACCAAQAAA2gmAmQgmAmg2AAQg1AAgngmQglgmAAg2QAAg1AlgmQAngmA1AAQA2AAAmAmQAmAmAAA1g");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AhcBcQglgmAAg2QAAg1AlgmQAngmA1AAQA2AAAmAmQAmAmAAA1QAAA2gmAmQgmAmg2AAQg1AAgngmg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF00FF").s().p("AhpBpQgsgrAAg+QAAg9AsgrQAsgtA9AAQA+AAArAtQAtArAAA9QAAA+gtArQgrAtg+AAQg9AAgsgtg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,31,31);


(lib.btnObjA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AA7BdIgWg4IhNAAIgUA4IgaAAIBHi5IAaAAIBMC5gAgMglIgUA1IA+AAIgUgyQgJgYgDgPQgEASgGASg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(3,1,1).p("ACCAAQAAA2gmAmQgmAmg2AAQg1AAgngmQglgmAAg2QAAg1AlgmQAngmA1AAQA2AAAmAmQAmAmAAA1g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AhcBcQglgmAAg2QAAg1AlgmQAngmA1AAQA2AAAmAmQAmAmAAA1QAAA2gmAmQgmAmg2AAQg1AAgngmg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00FFFF").ss(3,1,1).p("ACMAAQAAA6gpApQgpApg6AAQg5AAgqgpQgogpAAg6QAAg5AogpQAqgpA5AAQA6AAApApQApApAAA5g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AhjBiQgogoAAg6QAAg5AogoQAqgqA5AAQA6AAAoAqQAqAoAAA5QAAA6gqAoQgoAqg6AAQg5AAgqgqg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFF00").ss(3,1,1).p("ACCAAQAAA2gmAmQgmAmg2AAQg1AAgngmQglgmAAg2QAAg1AlgmQAngmA1AAQA2AAAmAmQAmAmAAA1g");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AhcBcQglgmAAg2QAAg1AlgmQAngmA1AAQA2AAAmAmQAmAmAAA1QAAA2gmAmQgmAmg2AAQg1AAgngmg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF00FF").s().p("AhpBpQgsgrAAg+QAAg9AsgrQAsgtA9AAQA+AAArAtQAtArAAA9QAAA+gtArQgrAtg+AAQg9AAgsgtg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,31,31);


(lib.btnLenB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhFBdIAAi5IBFAAQAVAAANAGQANAFAHAMQAHALAAANQAAANgGAKQgHALgNAGQARAFAJALQAJAMAAAQQAAANgFAMQgGAKgIAGQgIAHgMADQgMADgSAAgAgtBHIAuAAIARgBQAIgCAGgDQAFgDAEgHQAEgHAAgJQAAgKgGgIQgFgIgJgDQgKgDgRAAIgrAAgAgtgOIApAAQAPAAAHgCQAKgDAEgGQAFgHAAgJQAAgKgEgHQgFgHgIgCQgIgDgTAAIgmAAg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(3,1,1).p("ACCAAQAAA2gmAmQgmAmg2AAQg1AAgngmQglgmAAg2QAAg1AlgmQAngmA1AAQA2AAAmAmQAmAmAAA1g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AhcBcQglgmAAg2QAAg1AlgmQAngmA1AAQA2AAAmAmQAmAmAAA1QAAA2gmAmQgmAmg2AAQg1AAgngmg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00FFFF").ss(3,1,1).p("ACMAAQAAA6gpApQgpApg6AAQg5AAgqgpQgogpAAg6QAAg5AogpQAqgpA5AAQA6AAApApQApApAAA5g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AhjBiQgogoAAg6QAAg5AogoQAqgqA5AAQA6AAAoAqQAqAoAAA5QAAA6gqAoQgoAqg6AAQg5AAgqgqg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFF00").ss(3,1,1).p("ACCAAQAAA2gmAmQgmAmg2AAQg1AAgngmQglgmAAg2QAAg1AlgmQAngmA1AAQA2AAAmAmQAmAmAAA1g");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AhcBcQglgmAAg2QAAg1AlgmQAngmA1AAQA2AAAmAmQAmAmAAA1QAAA2gmAmQgmAmg2AAQg1AAgngmg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF00FF").s().p("AhpBpQgsgrAAg+QAAg9AsgrQAsgtA9AAQA+AAArAtQAtArAAA9QAAA+gtArQgrAtg+AAQg9AAgsgtg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,31,31);


(lib.btnLenA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA7BdIgWg4IhNAAIgUA4IgaAAIBHi5IAaAAIBMC5gAgMglIgUA1IA+AAIgUgyQgJgYgDgPQgEASgGASg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(3,1,1).p("ACCAAQAAA2gmAmQgmAmg2AAQg1AAgngmQglgmAAg2QAAg1AlgmQAngmA1AAQA2AAAmAmQAmAmAAA1g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AhcBcQglgmAAg2QAAg1AlgmQAngmA1AAQA2AAAmAmQAmAmAAA1QAAA2gmAmQgmAmg2AAQg1AAgngmg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00FFFF").ss(3,1,1).p("ACMAAQAAA6gpApQgpApg6AAQg5AAgqgpQgogpAAg6QAAg5AogpQAqgpA5AAQA6AAApApQApApAAA5g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AhjBiQgogoAAg6QAAg5AogoQAqgqA5AAQA6AAAoAqQAqAoAAA5QAAA6gqAoQgoAqg6AAQg5AAgqgqg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFF00").ss(3,1,1).p("ACCAAQAAA2gmAmQgmAmg2AAQg1AAgngmQglgmAAg2QAAg1AlgmQAngmA1AAQA2AAAmAmQAmAmAAA1g");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AhcBcQglgmAAg2QAAg1AlgmQAngmA1AAQA2AAAmAmQAmAmAAA1QAAA2gmAmQgmAmg2AAQg1AAgngmg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF00FF").s().p("AhpBpQgsgrAAg+QAAg9AsgrQAsgtA9AAQA+AAArAtQAtArAAA9QAAA+gtArQgrAtg+AAQg9AAgsgtg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

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


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AAcFjQifgqhfg6QgLAqgVApQgeA+gwAAQhAAAAAhPQAAgWAQgbQAphFAAhEQgBgJgCgTQgEgTgBgNQAAgqAuAAQAgAAAcAiQASAWAFAhQASAOAWANQCfhJCMhyQBehOAAglQAAgNgYAAQgaAAkpBoQhNAdhAAAQg1AAgZgWQgegXgBgnQAAgjAmgmQAognCFgsQAggJAAgPQAAgIgTgPQgbgRAAgTQAAgQAXgKQAWgRAaABQA4AABEAtQAwAkgBAjQAAAZgKANQBqgfAwABQBNAAAxAvQAqApABA+QgBBainBzQiSBlhxASIAEACQCNAoDuAUQBPAHAAA4QAAAggjAXQgjATguABQhZAAiogtgAj7jOQglAOAAATQAAAUAhAAQAfABB6gqQAsgRAmgMIgigDQgYgDgsAAQg7AAhGAXg");
	this.shape.setTransform(41.6364,24.7011,0.4,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0000FF").ss(5,1,1).p("Ah2mPQA4AABEAuQAvAkAAAjQAAAZgKANQBrgfAvAAQBNAAAxAwQArApAAA+QAABaioBzQiSBlhxASQADABABABQCOAoDtAVQBPAGAAA5QAAAfgjAXQgjAUguAAQhZAAiogtQiggqhfg6QgKArgUAoQgfA+gxAAQg/AAAAhPQAAgWAQgbQAphFAAhEQAAgJgDgSQgFgUAAgNQAAgqAuAAQAgAAAcAhQASAXAFAgQASAQAWAMQCghJCLhyQBehPAAgjQAAgPgYAAQgaAAkpBpQhNAdhAAAQg0AAgagWQgfgYAAgmQAAgjAmgmQApgnCEgsQAggJAAgPQAAgJgTgPQgbgQAAgUQAAgPAXgKQAWgRAaAAgAkAiYQAgAAB6gqQAsgRAmgLQgQgCgRgCQgZgDgsAAQg7AAhGAXQgkAOAAASQAAAWAfAAg");
	this.shape_1.setTransform(41.6364,24.7011,0.4,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FFFF").s().p("AAcFjQifgqhfg6QgLAqgVApQgeA+gwAAQhAAAAAhPQAAgWAQgbQAphFAAhEQgBgJgCgTQgEgTgBgNQAAgqAuAAQAgAAAcAiQASAWAFAhQASAOAWANQCfhJCMhyQBehOAAglQAAgNgYAAQgaAAkpBoQhNAdhAAAQg1AAgZgWQgegXgBgnQAAgjAmgmQAognCFgsQAggJAAgPQAAgIgTgPQgbgRAAgTQAAgQAXgKQAWgRAaABQA4AABEAtQAwAkgBAjQAAAZgKANQBqgfAwABQBNAAAxAvQAqApABA+QgBBainBzQiSBlhxASIAEACQCNAoDuAUQBPAHAAA4QAAAggjAXQgjATguABQhZAAiogtgAj7jOQglAOAAATQAAAUAhAAQAfABB6gqQAsgRAmgMIgigDQgYgDgsAAQg7AAhGAXg");
	this.shape_2.setTransform(41.6364,24.7011,0.4,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("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");
	this.shape_3.setTransform(-5.1,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(5,1,1).p("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");
	this.shape_4.setTransform(-5.1,0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("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");
	this.shape_5.setTransform(-5.1,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-145.2,-43.2,280.2,86.5), null);


(lib.btnBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("Eh8/BGUMAAAiMnMD5/AAAMAAACMng");
	this.shape.setTransform(800,450);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1600,900);


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


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#006699","#003366","#006633","#003300"],[0.247,0.471,0.514,0.82],-0.5,-785.1,-0.5,804.1).s().p("Eh8/B9AMAAAj5/MD5/AAAMAAAD5/g");
	this.shape.setTransform(800,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,-800,1600,1600), null);


(lib.theRadioButton2 = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(35.45,0,1.1393,0.3399,0,0,0,0.2,0);
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
	this.label = new cjs.Text("文字", "26px 'Microsoft JhengHei'", "#FFFFFF");
	this.label.name = "label";
	this.label.lineHeight = 37;
	this.label.lineWidth = 63;
	this.label.parent = this;
	this.label.setTransform(24,-18.6);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

}).prototype = getMCSymbolPrototype(lib.theRadioButton2, new cjs.Rectangle(-22.7,-20.6,115.9,38.6), null);


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
	this.label.setTransform(24,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

}).prototype = getMCSymbolPrototype(lib.theCheckbox, new cjs.Rectangle(-23.8,-20.7,181.9,41.8), null);


(lib.lensA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(0,0.5,0.2502,3.1);
	this.btnS.alpha = 0.0117;
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(4));

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("ABkAAQAAJwgdGzQgdG5gqAAQgpAAgdm5QgdmzAApwQAApvAdm4QAdm0ApAAQAqAAAdG0QAdG4AAJvg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(83,83,83,0.6)").s().p("AhGQjQgdm0AApvQAApvAdm4QAdm0ApAAQAqAAAdG0QAdG4AAJvQAAJvgdG0QgdG5gqAAQgpAAgdm5g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,1,1).p("ABk3bIjHAAQAdABAVG2QAVG3AAJtQAAJtgVG3QgVG3gdABIDHAAQgdgBgWm3QgUm3AAptQAAptAUm3QAWm2AdgBg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(83,83,83,0.6)").s().p("AhjXcQAegCAUm2QAVm3AAptQAApsgVm4QgUm2gegBIDHAAQgdABgWG2QgUG4AAJsQAAJtAUG3QAWG2AdACg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[]},1).wait(2));

	// 圖層_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag5B3IAAjtIBzAAIAAAZIhbAAIAABNIBFAAIAAAYIhFAAIAABvg");
	this.shape_4.setTransform(150,28);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag5B3IAAjtIBzAAIAAAZIhbAAIAABNIBFAAIAAAYIhFAAIAABvg");
	this.shape_5.setTransform(-150,28);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAAhjIAADH");
	this.shape_6.setTransform(-300,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAAhjIAADH");
	this.shape_7.setTransform(-150,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAAhjIAADH");
	this.shape_8.setTransform(300,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAAhjIAADH");
	this.shape_9.setTransform(150,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(3,1,1).p("Eg+fAAAMB8/AAA");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-401.5,-156,803,313.1);


// stage content:
(lib.myAnimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(1449.35,70.95,0.9,0.9,0,0,0,-20,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// btns
	this.iimg = new lib.arrow();
	this.iimg.name = "iimg";
	this.iimg.parent = this;
	this.iimg.setTransform(591.6,482.55);

	this.obj = new lib.arrow();
	this.obj.name = "obj";
	this.obj.parent = this;
	this.obj.setTransform(400,350);

	this.btnObjB = new lib.btnObjB();
	this.btnObjB.name = "btnObjB";
	this.btnObjB.parent = this;
	this.btnObjB.setTransform(499.95,349.95,1.1538,1.1538);
	new cjs.ButtonHelper(this.btnObjB, 0, 1, 2, false, new lib.btnObjB(), 3);

	this.btnObjA = new lib.btnObjA();
	this.btnObjA.name = "btnObjA";
	this.btnObjA.parent = this;
	this.btnObjA.setTransform(299.95,349.95,1.1538,1.1538);
	new cjs.ButtonHelper(this.btnObjA, 0, 1, 2, false, new lib.btnObjA(), 3);

	this.btnLenB = new lib.btnLenB();
	this.btnLenB.name = "btnLenB";
	this.btnLenB.parent = this;
	this.btnLenB.setTransform(699.95,599.95,1.1538,1.1538);
	new cjs.ButtonHelper(this.btnLenB, 0, 1, 2, false, new lib.btnLenB(), 3);

	this.btnLenA = new lib.btnLenA();
	this.btnLenA.name = "btnLenA";
	this.btnLenA.parent = this;
	this.btnLenA.setTransform(699.95,299.95,1.1538,1.1538);
	new cjs.ButtonHelper(this.btnLenA, 0, 1, 2, false, new lib.btnLenA(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnLenA},{t:this.btnLenB},{t:this.btnObjA},{t:this.btnObjB},{t:this.obj},{t:this.iimg}]}).wait(1));

	// btnMain
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJgBzQAYgKAHgKQAHgIABgLIAAg1QAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAIgbAAIAAgZIAxAAQAHABAAAEIAABJQABAJAJAIQAIAMAVAHQAaAFCTgIIgFAdIiOABQg5gDgSggQgFAJgMAMQgOALgLAFgApPBzQAYgKAHgKQAHgIABgLIAAg1QAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAIgbAAIAAgZIAxAAQAHABAAAEIAABJQABAJAJAIQAIAMAVAHQAaAFCTgIIgFAdIiOABQg5gDgSggQgFAJgMAMQgOALgLAFgAtqCDQgKAAAAgKIAAiHQABgLAIAAIArAAQAFAAAAgFIAAhfQABgFAFAAICLAAQAHAAAAAHIAABfQAAABAAAAQABABAAAAQABABAAAAQABAAABAAIApAAQALAAAAALIAACIQgCAJgIAAgAtZAHIAABbQABAGAEAAIDIAAQAGABAAgHIAAhbQAAgGgFAAIgqAAQgHAAAAgGIAAheQAAgEgFAAIhdAAQgEAAAAAEIAABfQgBAFgFAAIgsAAQgFABAAAFgAFECAQgIAAAAgJIAAjvQABgIAHAAIBXAAQAJABAAAIIAABiQAAABAAAAQABABAAAAQABABAAAAQABAAABAAIAwAAQAAAAABAAQAAAAABgBQAAAAAAgBQAAAAAAgBIAAhiQABgJAIAAIBVAAQAKAAAAAKIAADrQAAALgKAAgAFXhgIAADBQAAAEAEAAIDIAAQAEAAAAgFIAAi/QACgGgHAAIgpAAQgGABAAAFIAABfQAAAHgJAAIhWAAQgIAAAAgHIAAhfQgCgGgEAAIgrAAQgEAAAAAFgAMNBiIAAgZQAWAHAVAAQARgCADgEQAFgJABgPIgBgBIgDgBIgoAAIgFgCQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAIggIAAgCIgDgBIgcAAQgWA5gqAhIgRgTQAWgQAOgTQALgOAIgWIgpAAIAAgVIB2AAIAGACQACACAAAEIgJAdIAAADIAnAAQAIABAAAHQgBAUgFAPQgFAZgOAEQgLAGgSAAQgRAAgXgGgAmiBiIAAgZQAWAHAVAAQARgCADgEQAFgJABgPIgBgBIgDgBIgoAAIgFgCQAAgBgBgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAIggIAAgCIgDgBIgcAAQgWA5gqAhIgRgTQAWgQAOgTQALgOAIgWIgpAAIAAgVIB2AAIAGACQACACAAAEIgJAdIAAADIAnAAQAIABAAAHQgBAUgFAPQgFAZgOAEQgMAGgRAAQgRAAgXgGgAKlghQArgLAjgWIhFAAIAAgWIBQAAIAAgRQgpADgdgBIgDgXQBlAABDgLIADAWQgVAFguADIgHABIAAASIBWAAIAAAWIhFAAQAcAVAyALIgNAVQgrgMgngaIAAAcIgYAAIAAgYQguAdghAHgAoKghQArgLAjgWIhFAAIAAgWIBQAAIAAgRQgpADgdgBIgDgXQBlAABDgLIADAWQgVAFguADIgHABIAAASIBWAAIAAAWIhFAAQAcAVAyALIgNAVQgrgMgngaIAAAcIgYAAIAAgYQguAdghAHgAJjgyIAMgXQAXAJAaATIgNAWQgdgUgTgHgApMgyIAMgXQAXAJAaATIgNAWQgdgUgTgHgAJohtIAKgYQAYAKAcARIgNAYQgegUgTgHgApHhtIAKgYQAYAKAcARIgNAYQgegUgTgHg");
	this.shape.setTransform(1491.625,195.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(1435.7,721.85);

	this.chImage = new lib.theCheckbox();
	this.chImage.name = "chImage";
	this.chImage.parent = this;
	this.chImage.setTransform(1380.45,767.95);

	this.chTrace = new lib.theCheckbox();
	this.chTrace.name = "chTrace";
	this.chTrace.parent = this;
	this.chTrace.setTransform(1380.45,721.75);

	this.rbLenB = new lib.theRadioButton2();
	this.rbLenB.name = "rbLenB";
	this.rbLenB.parent = this;
	this.rbLenB.setTransform(1496.25,193.6);

	this.rbLenA = new lib.theRadioButton2();
	this.rbLenA.name = "rbLenA";
	this.rbLenA.parent = this;
	this.rbLenA.setTransform(1377.6,193.6);

	this.chRay = new lib.theCheckbox();
	this.chRay.name = "chRay";
	this.chRay.parent = this;
	this.chRay.setTransform(1380.45,675.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Al/CMIAAhVIgnARIgPgYQAhgLAVgKIAAhTIgUAAQgFAngFAOIgZgEQAPgvAAg5IAAgRIAYAAIAAARIgCAdIASAAIAAg4IAaAAIAAA4IAaAAIAAAaIgaAAIAABIQAOgJAJgHIAOAVQgQALgVALIAABhgAFsCIIgEgdQAfAIAHgHQAGgGAEgOQAFgSAAgmQABhZgBgDIgEgCIgcAAQgCATgBAUQgEAugJAnQgLA1gMAWIgagEQAghQAJhzIgYAAIAAgZIAZAAIAAgTIAAgeIAaAAIAAAeQgCAJAAAKIAwAAIAFABQAEADAAALIgBBsQgCBQgXASQgHAFgPAAQgMAAgPgDgAiIByQAXgHAHgLQAJgLABgOIAAgyQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgBgBAAIgdAAIAAgYIAzAAQAHABAAAFIAABQQADAGAGAGQAIAIAUAIQAaAFCRgEIgGAcIh9gBQhDAAgVggQgEAJgOALQgNALgOAEgAkCCEIgBgfQAqAOAKgIQAKgFAEgSQAGgTABgoQAChggCgEIgDgBIgNAAQgBA7gaA9QgZAzgxAjIgUgTQBdg3ADiEIgTAAQgBASgEARQgMA8g8A9IgWgPQAqgqARghQALgYAFgqIgWAAQgOAngPAXIgYgKQAjg0AHg9IAZADQgDASgEAOIBzAAIAHABQADACAAALIgBB0QgCBWgcATQgKAFgPAAQgRAAgZgGgACrBuIBCgEIAAgUIg+AAIAAgXIA+AAIAAgRIg8AAQgBAAgBAAQAAAAAAgBQgBAAAAgBQAAgBAAAAIAAhaIADgDIA8AAIAAgRIhAAAIAAgWIBAAAIAAgRQgjADgWAAIgDgWQBWAAAygLIADAWQgSAEgkADIgBAAIAAASIA9AAIAAAWIg9AAIAAARIA4AAQABABABAAQAAABABAAQAAAAAAAAQABABAAAAIAABaQAAAAgBABQAAABAAAAQgBABAAAAQgBAAgBAAIg4AAIAAARIA4AAIAAAXIg4AAIAAARIA0gEIABAYIiMALgAEFAZIAjAAIABgBIAAgPIgkAAgADGAZIAnAAIAAgQIgnAAgAEFgMIAkAAIAAgQIgkAAgADGgMIAnAAIAAgQIgnAAgAAYBrIAAgbIhSAAIAAgYIBSAAIAAgQIhCAAQAAAAgBAAQgBAAAAgBQgBAAAAgBQAAgBAAgBIAAhWQAAAAAAgBQAAgBABAAQAAgBABAAQABAAAAAAIBCAAIAAgPIg2AAIAAgWIA2AAIAAgSIg9AAIgDACIAAAjIgYAAIAAg2QABgFADAAIC4AAIAUALQgBAXgLAdIgYgHQAJgZAAgGQAAAAAAgBQAAgBAAAAQAAgBgBAAQgBAAAAAAIhDAAIAAASIA6AAIAAAWIg6AAIAAAPIBDAAQAAAAABAAQABAAAAABQABAAAAABQAAABAAAAIAABWQAAABAAABQAAABgBAAQAAABgBAAQgBAAAAAAIhDAAIAAAQIBXAAIAAAYIhXAAIAAAbgAAwATIAsAAIABgCIAAgPIgtAAgAgVARQAAABABAAQAAAAAAABQAAAAAAAAQAAAAABAAIArAAIAAgRIgtAAgAAwgRIAtAAIAAgPIgtAAgAgVgRIAtAAIAAgPIgtAAgAiDg2IAPgVQAUANAZAVIgRAVQgZgYgSgKgAh9huIAOgXQAUALAYAVIgOAVQgagWgSgIg");
	this.shape_2.setTransform(1450.75,260.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("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");
	this.shape_3.setTransform(1465.7,352.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("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");
	this.shape_4.setTransform(1465.7,552.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("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");
	this.shape_5.setTransform(1450.825,460.9);

	this.chLenMove = new lib.theCheckbox();
	this.chLenMove.name = "chLenMove";
	this.chLenMove.parent = this;
	this.chLenMove.setTransform(1380.45,461.5);

	this.rbLen03 = new lib.theRadioButton();
	this.rbLen03.name = "rbLen03";
	this.rbLen03.parent = this;
	this.rbLen03.setTransform(1412.35,591.75);

	this.rbLen02 = new lib.theRadioButton();
	this.rbLen02.name = "rbLen02";
	this.rbLen02.parent = this;
	this.rbLen02.setTransform(1412.35,550.8);

	this.rbLen01 = new lib.theRadioButton();
	this.rbLen01.name = "rbLen01";
	this.rbLen01.parent = this;
	this.rbLen01.setTransform(1412.35,509.8);

	this.chObjMove = new lib.theCheckbox();
	this.chObjMove.name = "chObjMove";
	this.chObjMove.parent = this;
	this.chObjMove.setTransform(1380.45,261.25);

	this.rbObj03 = new lib.theRadioButton();
	this.rbObj03.name = "rbObj03";
	this.rbObj03.parent = this;
	this.rbObj03.setTransform(1412.35,391.5);

	this.rbObj02 = new lib.theRadioButton();
	this.rbObj02.name = "rbObj02";
	this.rbObj02.parent = this;
	this.rbObj02.setTransform(1412.35,350.55);

	this.rbObj01 = new lib.theRadioButton();
	this.rbObj01.name = "rbObj01";
	this.rbObj01.parent = this;
	this.rbObj01.setTransform(1412.35,309.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#999999").ss(2,1,1).p("AvnAAIfPAA");
	this.shape_6.setTransform(1457.6,140.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.rbObj01},{t:this.rbObj02},{t:this.rbObj03},{t:this.chObjMove},{t:this.rbLen01},{t:this.rbLen02},{t:this.rbLen03},{t:this.chLenMove},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.chRay},{t:this.rbLenA},{t:this.rbLenB},{t:this.chTrace},{t:this.chImage},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// ball
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("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");
	this.shape_7.setTransform(1515.4,858.2,1,1,0,0,0,47.2,-16.1);

	this.btnRight = new lib.btnRight();
	this.btnRight.name = "btnRight";
	this.btnRight.parent = this;
	this.btnRight.setTransform(1911.05,1065.5);
	new cjs.ButtonHelper(this.btnRight, 0, 1, 2, false, new lib.btnRight(), 3);

	this.btnDown = new lib.btnDown();
	this.btnDown.name = "btnDown";
	this.btnDown.parent = this;
	this.btnDown.setTransform(1831.05,1065.5);
	new cjs.ButtonHelper(this.btnDown, 0, 1, 2, false, new lib.btnDown(), 3);

	this.btnLeft = new lib.btnLeft();
	this.btnLeft.name = "btnLeft";
	this.btnLeft.parent = this;
	this.btnLeft.setTransform(1751.05,1065.5);
	new cjs.ButtonHelper(this.btnLeft, 0, 1, 2, false, new lib.btnLeft(), 3);

	this.btnUp = new lib.btnUp();
	this.btnUp.name = "btnUp";
	this.btnUp.parent = this;
	this.btnUp.setTransform(1831.05,985.5);
	new cjs.ButtonHelper(this.btnUp, 0, 1, 2, false, new lib.btnUp(), 3);

	this.btn02 = new lib.btn01();
	this.btn02.name = "btn02";
	this.btn02.parent = this;
	this.btn02.setTransform(1936.45,896.8);
	new cjs.ButtonHelper(this.btn02, 0, 1, 2, false, new lib.btn01(), 3);

	this.btn01 = new lib.btn01();
	this.btn01.name = "btn01";
	this.btn01.parent = this;
	this.btn01.setTransform(1781.05,896.8);
	new cjs.ButtonHelper(this.btn01, 0, 1, 2, false, new lib.btn01(), 3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#000000","rgba(0,0,0,0.6)"],[0,1],-150,0,150,0).s().p("EgXbBOIMAAAicPMAu3AAAMAAACcPg");
	this.shape_8.setTransform(1470,480);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.btn01},{t:this.btn02},{t:this.btnUp},{t:this.btnLeft},{t:this.btnDown},{t:this.btnRight},{t:this.shape_7}]}).wait(1));

	// drawBmpRay
	this.drawBmpRay = new lib.drawBmp();
	this.drawBmpRay.name = "drawBmpRay";
	this.drawBmpRay.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.drawBmpRay).wait(1));

	// drawBmp
	this.drawBmp = new lib.drawBmp();
	this.drawBmp.name = "drawBmp";
	this.drawBmp.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.drawBmp).wait(1));

	// len
	this.lensA = new lib.lensA();
	this.lensA.name = "lensA";
	this.lensA.parent = this;
	this.lensA.setTransform(700,450);

	this.timeline.addTween(cjs.Tween.get(this.lensA).wait(1));

	// btnBG
	this.btnBG = new lib.btnBG();
	this.btnBG.name = "btnBG";
	this.btnBG.parent = this;
	new cjs.ButtonHelper(this.btnBG, 0, 1, 2, false, new lib.btnBG(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnBG).wait(1));

	// bg
	this.bg = new lib.bg();
	this.bg.name = "bg";
	this.bg.parent = this;
	this.bg.setTransform(0,450);

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

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAABpQAQgUAHgaQAHgaAAgvIAAheIBOAAIAADMQAAAIgGAFQgGAEgSAAIgOAAIgFgPIAXACQANAAAAgHIAAg+Ig2AAQgEAvgZAkgAAqARIA1AAIAAgwIg0AAQAAAWgBAagAArgtIA0AAIAAgxIg0AAgAhnBnQAYgWAPgZIALAIQgPAZgYAXgAgiBCIAJgJQAOAPALARIgMAIQgIgQgOgPgAhrAwIAAgNIAaAAIAAhqIgWAAIAAgNIAWAAIAAgdIAOAAIAAAdIAxAAIAAgdIAOAAIAAAdIAWAAIAAANIgWAAIAABqIATAAIAAANgAhDAjIAxAAIAAgcIgxAAgAhDgFIAxAAIAAgbIgxAAgAhDgtIAxAAIAAgaIgxAAg");
	this.shape_9.setTransform(1212.475,351.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhzBoQAkggANgzIgnAAIAAgMQAUgYASgcIgtAAIAAgMIA+AAIAAAMQgTAbgUAZIAlAAIAAAMQgGAZgMAXQAOAOATAGQATAHAXAAIBvABIgFANIhngBQgcgBgVgHQgVgIgOgNQgOATgQAPgAgwBIQAQgoAAg/IAAhMICFAAIAACkQAAALgFAFQgFAGgRAAIgPgBIgGgNQAdgBADgBQADgCAAgFIAAhNIhrAAQAAA+gRAmgAApghIAvAAIAAgaIgvAAgAgSghIAuAAIAAgaIguAAgAAphHIAvAAIAAgYIgvAAgAgShHIAuAAIAAgYIguAAgAAAAxIAAg0IBDAAIAAA0gAAMAkIAqAAIAAgbIgqAAgAhphoIAJgJQAYATANASIgKAJQgPgVgVgQg");
	this.shape_10.setTransform(1187.025,351.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAfBRQgfgSgQgkIAMgFQANAaARANQAbgOAbgYIAKAIQgSATgiAUQAgASAqAJIgIAMQgqgKgfgSgAhSBgQAFgCAAgEIAAhQIgjAAIAAgLIApAAIAAhrICpAAIAAAMIibAAIAAAXICNAAIAAANIiNAAIAAAXICNAAIAAAMIiNAAIAAAYICqAAIAAALIixAAIAABRQAagHAhgNIADANQgoAPgjAKg");
	this.shape_11.setTransform(1213.025,250.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAmBMQgVAUgtATIgIgMQApgQAXgTQgcgagQgxIgJAAQgBBCgbA3IgNgIQAcg0AAhKIAAhEIA+AAIAAgZIANAAIAAAZIBJAAQgCAagLAdIgOgEQAIgVADgQIg5AAIAAA2IA2AAIAAANQgTAwgZAaQAbAVApANIgGAOQgvgTgYgUgAAlA6QAXgYAQgpIhOAAQANArAaAWgAgYgUIAwAAIAAg2IgwAAgAhyBnQAZgqATgtIALAIQgUAxgYAmgAhvgmIAJgKQAZAQAUASIgKAKQgVgUgXgOgAhphoIAJgKQAaARATASIgKAKQgUgTgYgQg");
	this.shape_12.setTransform(1186.95,250);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABYByIAAgQIhbAAIAAAQIgNAAIAAhyIB1AAIAABygAAwBWIAoAAIAAgfIgoAAgAgDBWIAlAAIAAgfIglAAgAAwAqIAoAAIAAgeIgoAAgAgDAqIAlAAIAAgeIglAAgAhNByIAAirIgTAAIAAB7IgMAAIAAiJIAfAAIAAgpIANAAIAAApIAfAAIAAB1QAAARgWgCIgFgOIAJAAQAGAAAAgFIAAhjIgTAAIAACrgAgHgTIAAg2IBgAAIAAA2gAAGggIBGAAIAAgdIhGAAgAgcheIAAgNICJAAIAAANg");
	this.shape_13.setTransform(1213.375,150);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAqAIIAMgDQAGAVAIARQANgJARgWIAJAKQgOARgTAPQAKAVAfAdIgLAKQgwgsgOg+gAg2BpQAYgqAAhWIAAhVICIAAIAAANIh7AAIAAAeIBxAAIAAANIhxAAIAAAiICAAAIAAANIhgAAIAABhQARgHAVgMIAAAOQgaAQgYAJIgEgOQACgEAAgFIAAheIgSAAQgFBOgUAogAhmBwIgFgNIAVAAQAIAAAAgHIAAhIIggAMIgEgMIAkgNIAAg9IghAAIAAgNIAhAAIAAguIANAAIAAAuIAaAAIAAANIgaAAIAAA2IAYgJIAEALIgcAMIAABPQAAASgUABIgJABIgIgBg");
	this.shape_14.setTransform(1187.125,150.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.textAA},{t:this.textLambda},{t:this.textTT},{t:this.bg}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(800,100,1198,1150);
// library properties:
lib.properties = {
	id: '98EA1A955B63F6489D0F00F6BFD1C4DE',
	width: 1600,
	height: 900,
	fps: 30,
	color: "#999999",
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