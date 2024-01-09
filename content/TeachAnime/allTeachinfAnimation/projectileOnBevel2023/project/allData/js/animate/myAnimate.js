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
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(8,1,1).p("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");
	this.shape_1.setTransform(0.025,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("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");
	this.shape_2.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.title, new cjs.Rectangle(-287.6,-48,575.3,96.1), null);


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


(lib.textureBall2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgFAPIgNANIAFgPIgOAGIANgPIgSgCIASgFIgLgLIAPAEIgEgPIAMALIAEgSIAEARIANgMIgGAPIAPgFIgMANIARADIgSAFIALALIgPgDIAEAOIgMgLIgEASg");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.textureBall2, new cjs.Rectangle(-3.3,-3.3,6.6,6.699999999999999), null);


(lib.textureBall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAOQgGgFAAgJQAAgIAGgFQAFgGAIAAQAIAAAGAGQAGAFAAAIQAAAJgGAFQgGAGgIAAQgIAAgFgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.textureBall, new cjs.Rectangle(-2,-2,4,4), null);


(lib.btnDrop03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACaDJQgggkgRg4QgahHgGhFIhqAAIAAB/IAPgEIBSgVIALAoQhBAYhyARIgLgrQATgEAWgCIAAkeQAAgLALAAQCGAEB8gcIARApQgzALg4AGQgCAvAGApIBwAAIAAApIhsAAQAPB3AhA6QAOAXABAAQAGgCAAgGQACgSgCgtIAnAJQAABTgWAWQgIAIgHABQgRgBgNgTgABGhIQgGgnAAgtQgxACguAAQgDAAABAFIAABNIBnAAIAAAAgAiiDcIAAj3QgJARgMAKIglgQQBFhcARhwIAoAHQgOA7gNApIAAFNgAhbDWIAAgpIDMAAIAAApg");
	this.shape.setTransform(0.025,0.025);

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


(lib.btnDrop02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTDdIAAiDIiSAAIAAAVIgsAAIAAjsQACgPANAAICvAAIAAhQIAqAAIAABQICsAAQAPACAAANIAADsIgrAAIAAgVIiQAAIAACDgAAXAvICQAAIAAiKQAAgFgGAAIiKAAgAilhbIAACKICSAAIAAiPIiNAAQgGAAABAFg");
	this.shape.setTransform(0,0.025);

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


(lib.btnDrop01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABkDaIgCglIjSAAQgFAAAAgGIAAhnQAAgGAFAAIDjAAQAFAAAAAGIAABnIgBAGQAaAFAHgFQALgGAAgNIAAh4QAAgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIk+AAQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAABIAACyIgqAAIAAjQQACgKAIAAIGBAAQAMACAAAIIAACnQgDAagSALQgMAIgXAAQgVAAgcgGgAhPBoIAAApICgAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAgnQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIigAAQgBAAAAAAQAAAAAAAAQAAAAAAABQAAAAABABgAiRgRQgFAAgBgGIAAhfQABgGAFAAIElAAQAGAAAAAGIAABfQAAAGgGAAgAhthXIAAAiIDcAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAggQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIjcAAQgBAAAAAAQgBAAAAAAQAAAAABABQAAAAABAAgAjYiWIAAgoIDHAAIAAghIAnAAIAAAhIDDAAIAAAog");
	this.shape.setTransform(0,0.0268);

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


(lib.textureGroundY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.tBall = new lib.textureBall();
	this.tBall.name = "tBall";
	this.tBall.parent = this;
	this.tBall.setTransform(185.35,20);

	this.timeline.addTween(cjs.Tween.get(this.tBall).wait(1));

	// 圖層_1
	this.instance = new lib.textureBall2();
	this.instance.parent = this;
	this.instance.setTransform(-14.25,-5.75);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AvnBkIAAjHIfPAAIAADHg");
	this.shape.setTransform(100,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.textureGroundY, new cjs.Rectangle(-17.6,-9.1,217.6,31.1), null);


(lib.textureGroundX = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.tBall = new lib.textureBall();
	this.tBall.name = "tBall";
	this.tBall.parent = this;
	this.tBall.setTransform(2,20.9);

	this.timeline.addTween(cjs.Tween.get(this.tBall).wait(1));

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AhjD6IAAnzIDHAAIAAHzg");
	this.shape.setTransform(10,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.textureGroundX, new cjs.Rectangle(0,0,20,50), null);


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
	this.btnS.setTransform(27,0,0.9919,0.3399,0,0,0,0.2,0);
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

}).prototype = getMCSymbolPrototype(lib.chSlow, new cjs.Rectangle(-23.8,-20.7,101.2,38.7), null);


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
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah1CnIAAiaIghAiIgVgYQBEgzAWg7QACgGgGAAIhPAAIAAgeIAsAAIAAgrIAfAAIAAArIAdAAIAQANQgOAzgeAmIAAC8gAk9CiIAAgfQAlAIAIgFQADgFAAgFIAAgiIh5AAIAAgbIB5AAIAAgTIAdAAIAAATIAsAAIAAAbIgsAAIAAApQgBAVgOAIQgIAGgRAAQgPAAgWgEgAF2CfIAAggQAnAOAKgJQADgEAAgGIAAh9Ig4AAIAAgeIBGAAQgegfgagVIAUgVQAIAJAVASQAjgZARgXQABAAAAAAQAAgBAAAAQgBAAAAAAQgBAAgCAAIhtAAIAAgcICHAAIATAPQgWAsgzAmIAQAPIgPALIAzAAIAUANQgIA2gSAnIgdgHQANgZAEgNQAKgagEgEIgDgBIgiAAIAACGQAAAVgRAKQgIAEgOAAQgRAAgbgHgAhBCLQAVgHAOgIQArgaAAgnIAAgKIghAAQgEAAAAgEIAAjHQAAgEAEAAICeAAQAEAAAAAEIAADHQAAAEgEAAIgmAAIAABCQAAAHAEAGQAGAEAFAAIANAAIAIgDQACgCABgeIAcAGQgDAqgEAEQgLALgJAAIgoAAQgLgBgKgIQgJgKAAgKIAAhSIgcAAIAAAKQAAAOgFAOQgTA0hCAbgAAEAUQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAAAAAIBqAAIACgBIAAgeIhtAAgAAEgmIBtAAIAAghIhtAAgAAEhjIBtAAIAAgfIhtAAgAnaCmIAAgtIg0AAIAAgcIA0AAIAAgXIgpAAQgEAAAAgEIAAiVQAAgEAEAAIApAAIAAgUIgyAAIAAgcIAyAAIAAgfIAaAAIAAAfIAtAAIAAAcIgtAAIAAAUIApAAQAEAAAAAEIAACVQAAAEgEAAIgpAAIAAAXIAxAAIAAAcIgxAAIAAAtgAnAAqIARAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIAAglIgTAAgAntApQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAABAAIARAAIAAgmIgTAAgAnAgVIATAAIAAgmQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAgBABIgRAAgAntgVIATAAIAAgmIgTAAgAC/CHIBJgKIAAgqIg/AAIAAgcIA/AAIAAgmIg7AAQgEAAAAgEIAAikQAAgEAEAAICUAAQAEAAAAAEIAACkQAAAEgEAAIg8AAIAAAmIBAAAIAAAcIhAAAIAAAmIBCgKIAEAeIilAYgAElgKIAjAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBIAAgqIgkAAgADlgKIAjAAIAAgsIgjAAgAElhSIAkAAIAAgtIgkAAgADlhSIAjAAIAAgtIgjAAgAlyBxIATgTQAPANAOAVIgWARQgQgXgKgJgAjgAmIiiAKIgDgZIBMgFIAAgSIhAAAQgEAAAAgFIAAhfQAAgEAEAAIBAAAIAAgOIhMAAIAAgaIBMAAIAAgWIAcAAIAAAWIBSAAIAAAaIhSAAIAAAOIBHAAQAEAAAAAEIAABfQgBAFgCAAQAJAQAIAZIgXAKIgFgNgAkdARIAzgDIgGgLIAKgDIg3AAgAkdgYIAvAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBIAAgPIgwAAgAljgaQAAABAAAAQAAAAAAAAQABABAAAAQAAAAAAAAIApAAIAAgRIgqAAgAkdhBIAwAAIAAgOQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAIgvAAgAljhPIAAAOIAqAAIAAgQIgpAAQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABgAhSgKIAWgQQAVAaAJASIgYANQgOgZgOgQg");
	this.shape_2.setTransform(82.025,0.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,1,1).p("AGqgDIAAB9QAAAGgDAEQgKAJgngOIAAAgQAwANASgKQARgKAAgVIAAiGIAiAAQABAAACABQAEAEgKAaQgEANgNAZIAdAHQASgnAIg2IgUgNIgzAAIAPgLQgJgIgHgHQAzgmAWgsIgTgPIiHAAIAAAcIBtAAQAGAAgDABQgRAXgjAZQgVgSgIgJIgUAVQAaAVAeAfIhGAAIAAAegABGAxIAABSQAAAKAJAKQAKAIALABIAoAAQAJAAALgLQAEgEADgqIgcgGQgBAegCACQgEACgEABIgNAAQgFAAgGgEQgEgGAAgHIAAhCIAmAAQAEAAAAgEIAAjHQAAgEgEAAIieAAQgEAAAAAEIAADHQAAAEAEAAIAhAAIAAAKQAAAngrAaQgOAIgVAHIARAbQBCgbATg0QAFgOAAgOIAAgKgAAEhjIAAgfIBtAAIAAAfgABxgKIAAAeIgCABIhqAAQgBAAAAgBIAAgegAAEgmIAAghIBtAAIAAAhgAElh/IAkAAIAAAtIgkAAgAEIB9IhJAKIAHAeIClgYIgEgeIhCAKIAAgmIBAAAIAAgcIhAAAIAAgmIA8AAQAEAAAAgEIAAikQAAgEgEAAIiUAAQgEAAAAAEIAACkQAAAEAEAAIA7AAIAAAmIg/AAIAAAcIA/AAgAEIhSIgjAAIAAgtIAjAAgAEIgKIgjAAIAAgsIAjAAgAElg2IAkAAIAAAqQAAACgBAAIgjAAgAjgAmQABAEAEAJIAXgKQgIgZgJgQQACAAABgFIAAhfQAAgEgEAAIhHAAIAAgOIBSAAIAAgaIhSAAIAAgWIgcAAIAAAWIhMAAIAAAaIBMAAIAAAOIhAAAQgEAAAAAEIAABfQAAAFAEAAIBAAAIAAASIhMAFIADAZgAkdhRIAvAAQABAAAAACIAAAOIgwAAgAk5hBIgqAAIAAgOQAAgCABAAIApAAgAnaB5IAAAtIAaAAIAAgtIAxAAIAAgcIgxAAIAAgXIApAAQAEAAAAgEIAAiVQAAgEgEAAIgpAAIAAgUIAtAAIAAgcIgtAAIAAgfIgaAAIAAAfIgyAAIAAAcIAyAAIAAAUIgpAAQgEAAAAAEIAACVQAAAEAEAAIApAAIAAAXIg0AAIAAAcgAk5gYIgpAAQgBAAAAgCIAAgPIAqAAgAjwADQACAEAEAHIgzADIAAgRIA3AAgAkdgpIAwAAIAAAPQAAACgBAAIgvAAgAkNBaIAAAiQAAAFgDAFQgIAFglgIIAAAfQAvAKAPgMQAOgIABgVIAAgpIAsAAIAAgbIgsAAIAAgTIgdAAIAAATIh5AAIAAAbgAh1ANIAACaIAdAAIAAi8QAegmAOgzIgQgNIgdAAIAAgrIgfAAIAAArIgsAAIAAAeIBPAAQAGAAgCAGQgWA7hEAzIAVAYQARgTAQgPgAhSgKQAOAQAOAZIAYgNQgJgSgVgagAlyBxQAKAJAQAXIAWgRQgOgVgPgNgAnagVIgTAAIAAgmIATAAgAnAg7IARAAQACgCAAACIAAAmIgTAAgAnaAqIgRAAQgCAAAAgBIAAglIATAAgAnAAEIATAAIAAAlQAAABgCAAIgRAAg");
	this.shape_3.setTransform(82.025,0.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah1CnIAAiaIghAiIgVgYQBEgzAWg7QACgGgGAAIhPAAIAAgeIAsAAIAAgrIAfAAIAAArIAdAAIAQANQgOAzgeAmIAAC8gAk9CiIAAgfQAlAIAIgFQADgFAAgFIAAgiIh5AAIAAgbIB5AAIAAgTIAdAAIAAATIAsAAIAAAbIgsAAIAAApQgBAVgOAIQgIAGgRAAQgPAAgWgEgAF2CfIAAggQAnAOAKgJQADgEAAgGIAAh9Ig4AAIAAgeIBGAAQgegfgagVIAUgVQAIAJAVASQAjgZARgXQABAAAAAAQAAgBAAAAQgBAAgBAAQAAAAgCAAIhtAAIAAgcICHAAIATAPQgWAsgzAmIAQAPIgPALIAzAAIAUANQgIA2gSAnIgdgHQANgZAEgNQAKgagEgEIgDgBIgiAAIAACGQAAAVgRAKQgIAEgOAAQgRAAgbgHgAhBCLQAVgHAOgIQArgaAAgnIAAgKIghAAQgEAAAAgEIAAjHQAAgEAEAAICeAAQAEAAAAAEIAADHQAAAEgEAAIgmAAIAABCQAAAHAEAGQAGAEAFAAIANAAIAIgDQACgCABgeIAcAGQgDAqgEAEQgLALgJAAIgoAAQgLgBgKgIQgJgKAAgKIAAhSIgcAAIAAAKQAAAOgFAOQgTA0hCAbgAAEAUQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAAAAAIBqAAIACgBIAAgeIhtAAgAAEgmIBtAAIAAghIhtAAgAAEhjIBtAAIAAgfIhtAAgAnaCmIAAgtIg0AAIAAgcIA0AAIAAgXIgpAAQgEAAAAgEIAAiVQAAgEAEAAIApAAIAAgUIgyAAIAAgcIAyAAIAAgfIAaAAIAAAfIAtAAIAAAcIgtAAIAAAUIApAAQAEAAAAAEIAACVQAAAEgEAAIgpAAIAAAXIAxAAIAAAcIgxAAIAAAtgAnAAqIARAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIAAglIgTAAgAntApQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAABAAIARAAIAAgmIgTAAgAnAgVIATAAIAAgmQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAgBABIgRAAgAntgVIATAAIAAgmIgTAAgAC/CHIBJgKIAAgqIg/AAIAAgcIA/AAIAAgmIg7AAQgEAAAAgEIAAikQAAgEAEAAICUAAQAEAAAAAEIAACkQAAAEgEAAIg8AAIAAAmIBAAAIAAAcIhAAAIAAAmIBCgKIAEAeIilAYgAElgKIAjAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBIAAgqIgkAAgADlgKIAjAAIAAgsIgjAAgAElhSIAkAAIAAgtIgkAAgADlhSIAjAAIAAgtIgjAAgAlyBxIATgTQAPANAOAVIgWARQgQgXgKgJgAjgAmIiiAKIgDgZIBMgFIAAgSIhAAAQgEAAAAgFIAAhfQAAgEAEAAIBAAAIAAgOIhMAAIAAgaIBMAAIAAgWIAcAAIAAAWIBSAAIAAAaIhSAAIAAAOIBHAAQAEAAAAAEIAABfQgBAFgCAAQAJAQAIAZIgXAKIgFgNgAkdARIAzgDQgEgHgCgEIAKgDIg3AAgAkdgYIAvAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBIAAgPIgwAAgAljgaQAAABAAAAQAAAAAAAAQABABAAAAQAAAAAAAAIApAAIAAgRIgqAAgAkdhBIAwAAIAAgOQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAIgvAAgAljhPIAAAOIAqAAIAAgQIgpAAQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABgAhSgKIAWgQQAVAaAJASIgYANQgOgZgOgQg");
	this.shape_4.setTransform(82.025,0.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.chRotateView, new cjs.Rectangle(-23.8,-20.7,165.8,39.3), null);


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
	this.tBall = new lib.textureBall();
	this.tBall.name = "tBall";
	this.tBall.parent = this;
	this.tBall.setTransform(138.9,89.7);

	this.timeline.addTween(cjs.Tween.get(this.tBall).wait(1));

	// 圖層_3
	this.ar = new lib.theArrow();
	this.ar.name = "ar";
	this.ar.parent = this;
	this.ar.setTransform(163.15,83.85,0.3,0.3,0,0,0,0.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.ar).wait(1));

	// 圖層_1
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

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("AEslFIEsitIBkCtIEsitAhjlFIEritIBkCtIBkCuABkAVIEsisIEsiuAnzlFIEsitIBkCtIBjCuIEsiuAnzlFIBkCuIBkCsIErisIBkCsAuDlFIEsitIBkCtApXDCIBkCtIEsitIAAAAIEritArXEMICAhKIEsitIBkCtAq7AVIBkCtAq7AVIEsisIEsiuArXHzIIQkxAq7AVIhkitIEsitAq7AVIksCt");
	this.shape.setTransform(-60,78.95,1,1,0,0,0,-136.6,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0000FF").ss(1,1,1).p("AvnAAIfPAA");
	this.shape_1.setTransform(99.9623,78.9866,1,1,-29.9999);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AvnMgIAA4/IfPAAIAAY/g");
	this.shape_2.setTransform(100,80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.ars18},{t:this.ars17},{t:this.ars16},{t:this.ars12},{t:this.ars07},{t:this.ars03},{t:this.ars10},{t:this.ars11},{t:this.ars06},{t:this.ars09},{t:this.ars05},{t:this.ars15},{t:this.ars14},{t:this.ars01},{t:this.ars04},{t:this.ars08},{t:this.ars13},{t:this.ars19},{t:this.ars02}]}).wait(1));

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
	this.chLight = new lib.chLight();
	this.chLight.name = "chLight";
	this.chLight.parent = this;
	this.chLight.setTransform(1426.95,480.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("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");
	this.shape.setTransform(1528.0886,21.0878,1.4367,1.4367);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("ACdAmQgHgLAAgcQAAgbAHgKQAEgHALAAQAIAAAGAHQAHAKAAAbQAAAagHAMQgFAJgJAAQgLAAgEgIgACkgfQgFAIAAAWQAAAZAFAIQADAFAFAAQAEAAADgFQAEgJAAgYQAAgWgEgIQgEgFgDAAQgFAAgDAFgAgQAoQgGgHgBgMIAKAAQAAAHADAEQADAFAHAAQAHAAAEgFQADgFAAgJQABgIgFgEQgGgEgHAAIAAgIQAHAAADgFQAFgEAAgGQgBgGgDgFQgDgEgEAAQgFAAgDAFQgEAEgBAHIgJgDQADgKAFgGQAGgGAIAAQAIAAAFAGQAHAGAAAMQAAAKgHAHQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIAEADQAIAFAAANQAAAOgHAHQgIAHgJAAQgKAAgGgGgAh/AmQgGgLAAgcQAAgbAGgKQAFgHAKAAQAIAAAHAHQAGAKAAAbQAAAagGAMQgGAJgJAAQgKAAgFgIgAh4gfQgEAIAAAWQAAAZAEAIQADAFAFAAQAEAAADgFQAFgJAAgYQAAgWgFgIQgDgFgEAAQgFAAgDAFgABfAtIAAgJIAPAAIAAhDIgQAHIAAgKIAZgKIAABQIAOAAIAAAJgAhOAtIAAgHQAAgRASgQQASgOAAgLQAAgHgCgEQgEgFgFAAQgHAAgCAEQgFAFAAAKIgJAAQAAgOAHgIQAGgGAKAAQAJAAAGAGQAGAHAAAMQAAAPgVASQgPAOAAAJIAkAAIAAAJgAjAAtIAAgHQAAgRASgQQATgOAAgLQAAgHgDgEQgEgFgFAAQgGAAgDAEQgFAFAAAKIgJAAQAAgOAGgIQAHgGAKAAQAKAAAFAGQAGAHAAAMQAAAPgVASQgQAOAAAJIAkAAIAAAJgAAxAnIAAgNIAOAAIAAANg");
	this.shape_1.setTransform(1564.0127,48.6648,1.4367,1.4367);

	this.chSlow = new lib.chSlow();
	this.chSlow.name = "chSlow";
	this.chSlow.parent = this;
	this.chSlow.setTransform(1486.65,429.3,1,1,0,0,0,59.1,-1.8);

	this.chFixedGround = new lib.chFixedGround();
	this.chFixedGround.name = "chFixedGround";
	this.chFixedGround.parent = this;
	this.chFixedGround.setTransform(1486.3,379.75,1,1,0,0,0,59.1,-1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABXBdIAAifIhMAAIAAgRIC1AAIAAARIhXAAIAAAYQAnAYAlAbIgLAQIgFgDQgZgVgjgXIAABzgAgmBdIAAgJIhFAAIAAAJIgRAAIAAg+QAAgBAAAAQABgBAAAAQAAAAABAAQABAAAAAAIBgAAQABAAABAAQAAAAABAAQAAABABAAQAAABAAABIAAA9gAhrAvIAAAVIBFAAIAAgWQAAAAAAgBQAAAAAAAAQgBAAAAAAQgBgBAAAAIhBAAQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAAAABgAi/BRQAXgZAHgfIAQAGQgMAngTATgAiPAOQAdgHATgHIAGgCIgZgTQgKAJgOAIIgIgQQAPgGAHgHQAKgIAKgRIAQADIgCAFIA8AAIAMAKQgOAWgYARQAVAIAfAFIgHAQQgOgCgNgEQgQgFgOgHIgEgDQgRAIgSAHIgdAJgAhmghQAQAPANAIQASgMAMgLIgBgCIg4AAIgCACgAi9gEIAIgPQAPAHATAOIgKAOQgUgPgMgFgAi3gpIAIgQQAOAHATAMIgJAQQgUgOgMgFgAiPg1IAAgMIguAAIAAgQIAuAAIAAgLIARAAIAAALIA5AAIAAgLIARAAIAAALIAtAAIAAAQIgtAAIAAAJIgRAAIAAgJIg5AAIAAAMg");
	this.shape_2.setTransform(1458.975,551.15);

	this.btnDrop03 = new lib.btnDrop03();
	this.btnDrop03.name = "btnDrop03";
	this.btnDrop03.parent = this;
	this.btnDrop03.setTransform(1458.95,768.05);
	new cjs.ButtonHelper(this.btnDrop03, 0, 1, 2, false, new lib.btnDrop03(), 3);

	this.btnDrop02 = new lib.btnDrop02();
	this.btnDrop02.name = "btnDrop02";
	this.btnDrop02.parent = this;
	this.btnDrop02.setTransform(1458.95,688.35);
	new cjs.ButtonHelper(this.btnDrop02, 0, 1, 2, false, new lib.btnDrop02(), 3);

	this.btnDrop01 = new lib.btnDrop01();
	this.btnDrop01.name = "btnDrop01";
	this.btnDrop01.parent = this;
	this.btnDrop01.setTransform(1458.95,608.65);
	new cjs.ButtonHelper(this.btnDrop01, 0, 1, 2, false, new lib.btnDrop01(), 3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(3,1,1).p("ADz0TIBrAAQBkAAAABkMAAAAlfQAABkhkAAIq7AAQhkAAAAhkMAAAglfQAAhkBkAAIBxAA");
	this.shape_3.setTransform(1458.95,681.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.298)").s().p("AldUUQhkAAAAhkMAAAglfQAAhkBkAAIByAAIA3AAQANAGAJgDIAKgDIBFAAIAJACIASAFIADgHICtAAIABABIAAgBIB2AAIBrAAQBkAAAABkMAAAAlfQAABkhkAAg");
	this.shape_4.setTransform(1458.95,681.1);

	this.rbGG = new lib.rbGG();
	this.rbGG.name = "rbGG";
	this.rbGG.parent = this;
	this.rbGG.setTransform(1252.75,750.2);

	this.rbAxy = new lib.rbAxy();
	this.rbAxy.name = "rbAxy";
	this.rbAxy.parent = this;
	this.rbAxy.setTransform(1251.5,794.1);

	this.chRotateView = new lib.chRotateView();
	this.chRotateView.name = "chRotateView";
	this.chRotateView.parent = this;
	this.chRotateView.setTransform(1451.4,299.95,1.6,1.6,0,0,0,59.1,-1.8);

	this.slCameraRR = new lib.theSlider();
	this.slCameraRR.name = "slCameraRR";
	this.slCameraRR.parent = this;
	this.slCameraRR.setTransform(1350,850);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.slCameraRR},{t:this.chRotateView},{t:this.rbAxy},{t:this.rbGG},{t:this.shape_4},{t:this.shape_3},{t:this.btnDrop01},{t:this.btnDrop02},{t:this.btnDrop03},{t:this.shape_2},{t:this.chFixedGround},{t:this.chSlow},{t:this.shape_1},{t:this.shape},{t:this.chLight}]}).wait(1));

	// btn3D
	this.chVector = new lib.chVector();
	this.chVector.name = "chVector";
	this.chVector.parent = this;
	this.chVector.setTransform(1221.7,702.95);

	this.instance = new lib.textureGroundZ();
	this.instance.parent = this;
	this.instance.setTransform(-866.95,156.25);

	this.instance_1 = new lib.textureGroundX();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-907.95,203.8);

	this.instance_2 = new lib.textureGroundY();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-896.7,68.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("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");
	this.shape_5.setTransform(101.2,875.708);

	this.btn3D = new lib.btn3D();
	this.btn3D.name = "btn3D";
	this.btn3D.parent = this;
	new cjs.ButtonHelper(this.btn3D, 0, 1, 2, false, new lib.btn3D(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn3D},{t:this.shape_5},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.chVector}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.3,450,1738.3,450);
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