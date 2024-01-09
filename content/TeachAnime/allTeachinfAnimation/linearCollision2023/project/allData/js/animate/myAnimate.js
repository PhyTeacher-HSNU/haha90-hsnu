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


(lib.timeBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(3,1,1).p("AAAXcMAAAgu3");
	this.shape.setTransform(0,150);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.timeBar, new cjs.Rectangle(-1.5,-1.5,3,303), null);


(lib.checker2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhRBQQghggAAgwQAAgvAhgjQAiggAvAAQAwAAAgAgQAjAjAAAvQAAAwgjAgQggAjgwAAQgvAAgigjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.checker2, new cjs.Rectangle(-11.5,-11.5,23,23), null);


(lib.btnSquare_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFF00").ss(1,1,1).p("AnznzIPnAAIAAPnIvnAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF00FF").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-51,102,102);


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


(lib.theChart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.timeBar = new lib.timeBar();
	this.timeBar.name = "timeBar";
	this.timeBar.parent = this;
	this.timeBar.setTransform(250,0);

	this.timeline.addTween(cjs.Tween.get(this.timeBar).wait(3));

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AAYAmQgIgMAAgSQABgOAEgKQAEgLAIgEQAFgFAHAAQAJAAAIAKQAKAMAAAVQABAPgFAKQgEALgHAFQgGAFgHgBQgMAAgIgOgAAlgcQgEAFgCAMQgCALAAAKQAAASAEALQAEAKAHAAQADAAAEgDQAEgEACgHQADgLAAgTQAAgPgDgJQgCgIgEgDQgCgBgFAAQgEAAgDADgAguAnQgDg+gHgPQgDgFgFAAIgHABIgBgEIAcgFIAGAOQACALABAPIADAgIAOgRIAPgTQADgGAAgDIACgGQAAgDgEgDQgEgDgBgEQABgDADgDQACgCACAAQAEgBADAEQADAEABAFQAAAEgCAFQgCAHgIALQgGAKgPARIgWAYg");
	this.shape.setTransform(-15.3358,101.337,1.469,1.469);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AAyBIIAAhvQgHAGgKAGQgKAGgIADIAAgRQAOgHALgKQALgKAFgJIALAAIAACPgAhCAdIAAgSIA2AAIAAASg");
	this.shape_1.setTransform(-12.575,286.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("ABJBIIAAhvQgHAGgKAGQgLAGgHADIAAgRQAOgHALgKQALgKAEgJIAMAAIAACPgAgyAxIAAgoIgnAAIAAgPIAnAAIAAgnIARAAIAAAnIAlAAIAAAPIglAAIAAAog");
	this.shape_2.setTransform(-14.85,12.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AggA6QgNgSAAgoQAAgZAEgPQAGgPAKgJQAKgIAPAAQALAAAJAFQAJAEAGAJQAFAIAEANQACAMAAAVQABAZgGAQQgEAPgLAIQgLAJgPAAQgTAAgNgPgAgSgvQgJANAAAiQAAAjAIAMQAIAMALAAQAMAAAIgMQAJgMgBgjQABgjgJgLQgIgLgMAAQgMAAgGAKg");
	this.shape_3.setTransform(-10.5,200.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#666666").ss(3,1,1).p("EAnEAH0IAAPoMhOHAAAIAAvoIAAvnIAAvoMBOHAAAgEgnDgHzIBkAAEgnDAH0MBOHAAA");
	this.shape_4.setTransform(250,150);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#666666").ss(1,1,1).p("AgmAAIBNAA");
	this.shape_5.setTransform(-26.0488,50.9231,0.7,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgdCHIAAgDQAYgVAJgPQAJgOABgLQAAgJgGgFQgFgGgHAAQgHAAgFAEQgFAEgEAHIgCAAQACgMAHgHQAHgGAKgBQALAAAHAIQAIAHAAAKQAAAHgDAHQgGALgKAMQgQATgFADIAXAAIAKAAIAGgCIAEgFIADAAIgHASgAgPgoIAAgCQAHAAACgBQABAAAAgBQAAAAABAAQAAgBAAAAQAAAAABgBQABgCAAgIIAAgyIgBgNIgCgDIgDgBIgHACIgBgCIAWgLIABAAIAABOQAAAIABACQABABAAAAQAAAAAAABQABAAAAAAQABABAAAAQACABAGAAIAAACg");
	this.shape_6.setTransform(-26.2588,51.1331,0.7,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AAnAgQgCgqgFgLQgBgEgEAAIgFABIgBgCIAUgFIADALQACAHABALIACAWIAKgMIALgNIADgHIAAgEQAAgBgDgDQgDgCAAgDQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQADAAACADQACACAAAEIgBAGIgHANIgPATIgPAQgAgKAeQAAAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBIACgNIAHgVIACgIIAAgDIgBgDIgCAAQgCAAgEACQgJAJgIAPQgGAKgEAQIgLAAIAMgoIACgJIgBgDIgCgBIgFACQgEADgGAIQgHAJgDAHIgIAYIgKAAIAOgxIAAgCIgBgCQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAIgFABIgBgCIAYgFIgJAfIAKgQQAGgJAGgDQAEgDAEAAQADAAADADQACACAAADIgCAJIgEAQQALgUAKgIQAFgFAFAAQADAAACADQACACAAAEIgBAJIgIAZIgBAKIAAABIAAABIADgBQAEgDADgFIACABIgGAIIgGAGIgGACQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBg");
	this.shape_7.setTransform(-13.725,50.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgHAyQgCgDAAgHQAAgGACgGQACgHAFgEQACgCADAAQAEAAACADQACADAAAGQAAAFgCAFQgBAGgEAEIgFAFIgDAAQgDAAgCgCgAACARQgCACAAADIgEAKQgCAIAAAGIABAEIADABIACgBQADgDACgHQAEgLAAgHQAAgBAAAAQAAgBAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIgDABgAgMgOIAAgBQAMgMAFgHQACgDAAgEQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgDAAgCAEIgBgBQABgDADgCQABgCADAAQAEAAADACQABADAAADIAAAEIgFAHQgFAGgIAIIAIAAIAEgBIACgCIABAAIgDAHg");
	this.shape_8.setTransform(-3.85,50.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#666666").ss(3,1,1).p("EAnEAPoIAAH0MhOHAAAIAAn0IAA/PIAAn0MBOHAAAgEgnDgPnIBkAAEgnDAPoMBOHAAA");
	this.shape_9.setTransform(250,150);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#666666").ss(3,1,1).p("EgnDAAAIAA3bMBOHAAAIAAXbIAAXcMhOHAAAIAA3cMBOHAAA");
	this.shape_10.setTransform(250,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3,p:{x:-10.5,y:200.7}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_3,p:{x:-10.75,y:250.25}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_10},{t:this.shape_3,p:{x:-11.4,y:150.85}}]},1).wait(1));

	// 圖層_3
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.8)").s().p("EgpZAXcMAAAgu3MBSzAAAMAAAAu3g");
	this.shape_11.setTransform(235,150);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-1.5,531.5,303);


(lib.slV2 = function(mode,startPosition,loop) {
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
	this.valueText = new cjs.Text("0.0", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(-57.55,-14.85);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADDCLIAAgEQALgBAEgBIAEgFQABgDAAgOIAAhTQAAgRgBgFQgBgEgCgBQgCgBgDAAQgEAAgIADIgBgDIAlgSIAEAAIAACBQAAANABAEQABADAEACQADABALABIAAAEgAliCLIAAgEQAoglARgYQAQgXAAgTQAAgPgJgJQgJgJgNAAQgLAAgJAGQgJAGgFANIgEAAQADgVAMgKQAMgLARAAQATAAANAMQANALAAAQQAAAMgGAMQgIASgTAVQgdAfgHAGIApAAIARAAQAFgBAEgDQAEgDADgFIAEAAIgLAegAjEB1ICHj/IAPAAIiGD/gAA7BzQgEhvgOgaQgEgJgKAAIgNABIgBgGIAzgLQAFANAEAOQAEAUADAaIAEA6QAWgYAEgGIAbglQAGgJACgHQACgFAAgFQAAgEgIgGQgIgGAAgHQAAgGAEgEQAFgFAGAAQAHAAAGAGQAGAGAAAJQAAAJgDAIQgFANgMATQgNATgcAhIgnAogAnSBzQgEhvgNgaQgFgJgKAAIgMABIgCgGIAzgLQAGANADAOQAFAUADAaIAEA6QAWgYAEgGIAbglQAFgJADgHQACgFAAgFQAAgEgIgGQgJgGAAgHQAAgGAFgEQAEgFAGAAQAIAAAFAGQAGAGAAAJQAAAJgDAIQgEANgNATQgMATgcAhIgnAogAFDAuIAAgOIC+AAIAAAOgAFDgKIAAgOIC+AAIAAAOg");
	this.shape.setTransform(-117.075,-1.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.valueText}]}).wait(1));

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

}).prototype = getMCSymbolPrototype(lib.slV2, new cjs.Rectangle(-168.3,-16.8,334.3,33), null);


(lib.slM2 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AEpCLIAAgEQALgBAEgBIAEgFQABgDAAgOIAAhTQAAgRgBgFQgBgEgCgBQgCgBgDAAQgFAAgHADIgCgDIAmgSIAEAAIAACBQAAANABAEQABADADACQAEABALABIAAAEgAlhCLIAAgEQApglAQgYQARgXAAgTQAAgPgKgJQgJgJgMAAQgMAAgJAGQgIAGgFANIgEAAQADgVALgKQANgLARAAQATAAANAMQAMALAAAQQABAMgGAMQgIASgTAVQgdAfgHAGIAoAAIARAAQAFgBAEgDQAEgDAEgFIAEAAIgLAegAjCB1ICHj/IAOAAIiGD/gADABvQgEgEgBgGQABgJAHgZIAQg4IAFgVIABgHQAAgEgCgCQgCgDgCAAQgIAAgIAIQgYAVgVAoQgOAbgNApIgaAAIAehqQAFgQAAgGQAAgFgCgCQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgFAAgHAEQgKAHgRAVQgRAXgJAUQgFAKgQA0IgaAAIAlh/IABgFQAAgEgDgDQgEgDgFAAIgNACIgCgHIA9gLIgXBOQAQgcAKgNQARgVAQgKQAJgGAKAAQAJAAAGAGQAFAFAAAJQAAAJgDAOIgNArQAdg0AZgWQAOgMAOAAQAJAAAFAGQAFAFAAAMQAAAKgDALIgUBEIgGAZQAAAAAAABQAAAAABABQAAABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAAAABAAQAAAAABAAQABAAAEgDQAKgIAKgNIAFAEQgEAHgLAMQgLANgJAEQgHAEgHAAQgGAAgEgEgAmxBvQgEgEAAgGQAAgJAHgZIAQg4IAGgVIABgHQgBgEgBgCQgCgDgDAAQgIAAgIAIQgYAVgVAoQgOAbgMApIgaAAIAehqQAEgQAAgGQAAgFgCgCQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgGAAgHAEQgKAHgRAVQgQAXgKAUQgEAKgRA0IgaAAIAlh/IABgFQAAgEgDgDQgEgDgFAAIgMACIgCgHIA8gLIgWBOQAPgcALgNQARgVAPgKQAKgGAJAAQAKAAAFAGQAGAFAAAJQAAAJgEAOIgMArQAcg0AagWQAOgMAOAAQAIAAAFAGQAGAFgBAMQAAAKgCALIgUBEIgGAZQAAAAAAABQAAAAAAABQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAQACAAAEgDQAKgIAJgNIAGAEQgEAHgMAMQgLANgIAEQgHAEgIAAQgGAAgEgEgAGnAqIAAgPIC9AAIAAAPgAGngPIAAgOIC9AAIAAAOg");
	this.shape.setTransform(-126.35,-1.425);

	this.valueText = new cjs.Text("0.0", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(-57.55,-14.85);

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

}).prototype = getMCSymbolPrototype(lib.slM2, new cjs.Rectangle(-187.6,-16.8,353.6,33), null);


(lib.slEE = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-120.85,-0.275);

	this.valueText = new cjs.Text("0.0", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(-57.55,-14.25);

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

}).prototype = getMCSymbolPrototype(lib.slEE, new cjs.Rectangle(-172,-16.2,338,33), null);


(lib.screen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chart
	this.chart = new lib.theChart();
	this.chart.name = "chart";
	this.chart.parent = this;
	this.chart.setTransform(100,-90,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.chart).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.4)").s().p("Eh8/Au4MAAAhdvMD5/AAAMAAABdvg");
	this.shape.setTransform(800,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.screen, new cjs.Rectangle(0,-120,1600,600), null);


(lib.rbLookG = function(mode,startPosition,loop) {
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
	this.btnS = new lib.btnSquare_1();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(46.4,0,1.3671,0.3399,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsArQgrAtg/AAQg+AAgsgtQgrgrAAg+QAAg+ArgsQAsgrA+AAQA/AAArArQAsAsAAA+g");
	this.shape.setTransform(0,0.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBqQgsgsAAg+QAAg+AsgsQArgrA+AAQA/AAAqArQAtAsAAA+QAAA+gtAsQgqAsg/AAQg+AAgrgsg");
	this.shape_1.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiMCUIAAgLIiVAAIAAALIgbAAIAAiDQgRAPgjAWIgRgUQAzgfAigiIhTAAIAAgZIBnAAIAKgOIheAAIAAgZIBtAAIAHgNQhCACgqAAIgDgaQA4ABBLgFQBNgEAlgHIAEAaQgeAGhEAFIgIAAIgJAPIB3AAIAAAZIiFAAIgKAOICfAAIAAAZIiyAAIgNAPICiAAQAGAAAAAFIAACfgAkhBwICVAAIAAgSIiVAAgAkhBFICVAAIAAgRIiVAAgAkhAMIAAAPICVAAIAAgPQAAgBAAgBQgBAAAAgBQgBAAAAgBQgBAAgBAAIiNAAQgFAAABAEgADzCOQgNAAgHgFQgPgNABgXIAAhvIgZALIgOgYIAngSIAAhNIAbAAIAABCIAqgTIAAhMIAbAAIAABBIA6gZIASAJIAABuQAAAJgFALQgGALgJAFQgMAGgegDIgBgbQAMADAIAAQAKgBAFgIQACgGAAgLIAAhFQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIguAUIAACBIgbAAIAAh2IgqATIAAB1IADANQAEAFALgBIBUAAQAPgBAFgFQACgIgBghIAbACQAAAygFALQgIAKgFACIgUABgABdBiQAWgJAPgHIAAh8IgiAAIAAgcIAiAAIAAhJIAcAAIAABJIAeAAIAAAcIgeAAIAABtQANgJAJgJIASAWQghAZg4Aag");
	this.shape_2.setTransform(69.125,-0.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,1,1).p("AkhCJICVAAIAAALIAbAAIAAifQAAgFgGAAIiiAAQABgBAMgOICyAAIAAgZIifAAQABgBAJgNICFAAIAAgZIh3AAQAEgHAFgIQADAAAFAAQBEgFAegGIgEgaQglAHhNAEQhLAFg4gBIADAaQAqAABCgCQgDAHgEAGIhtAAIAAAZIBeAAQgEAFgGAJIhnAAIAAAZIBTAAQgiAigzAfIARAUQAjgWARgPIAACDIAbAAgACCBSQgPAHgWAJIAQAYQA4gaAhgZIgSgWQgJAJgNAJIAAhtIAeAAIAAgcIgeAAIAAhJIgcAAIAABJIgiAAIAAAcIAiAAgADRgKIAABvQgBAXAPANQAHAFANAAIBpAAQAMAAAIgBQAFgCAIgKQAFgLAAgyIgbgCQABAhgCAIQgFAFgPABIhUAAQgLABgEgFQgBgDgCgKIAAh1IAqgTIAAB2IAbAAIAAiBIAugUQACgBABABQABAAAAADIAABFQAAALgCAGQgFAIgKABQgIAAgMgDIABAbQAeADAMgGQAJgFAGgLQAFgLAAgJIAAhuIgSgJIg6AZIAAhBIgbAAIAABMIgqATIAAhCIgbAAIAABNIgnASIAOAYgAkhAbIAAgPQgBgEAFAAICNAAQAEAAAAAEIAAAPgAkhBFIAAgRICVAAIAAARgAiMBeIAAASIiVAAIAAgSg");
	this.shape_3.setTransform(69.125,-0.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiMCUIAAgLIiVAAIAAALIgbAAIAAiDQgRAPgjAWIgRgUQAzgfAigiIhTAAIAAgZIBnAAIAKgOIheAAIAAgZIBtAAIAHgNQhCACgqAAIgDgaQA4ABBLgFQBNgEAlgHIAEAaQgeAGhEAFIgIAAIgJAPIB3AAIAAAZIiFAAIgKAOICfAAIAAAZIiyAAIgNAPICiAAQAGAAAAAFIAACfgAkhBwICVAAIAAgSIiVAAgAkhBFICVAAIAAgRIiVAAgAkhAMIAAAPICVAAIAAgPQAAgBAAgBQgBAAAAgBQgBAAAAgBQgBAAgBAAIiNAAQgFAAABAEgADzCOQgNAAgHgFQgPgNABgXIAAhvIgZALIgOgYIAngSIAAhNIAbAAIAABCIAqgTIAAhMIAbAAIAABBIA6gZIASAJIAABuQAAAJgFALQgGALgJAFQgMAGgegDIgBgbQAMADAIAAQAKgBAFgIQACgGAAgLIAAhFQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIguAUIAACBIgbAAIAAh2IgqATIAAB1IADANQAEAFALgBIBUAAQAPgBAFgFQACgIgBghIAbACQAAAygFALQgIAKgFACIgUABgABdBiQAWgJAPgHIAAh8IgiAAIAAgcIAiAAIAAhJIAcAAIAABJIAeAAIAAAcIgeAAIAABtQANgJAJgJIASAWQghAZg4Aag");
	this.shape_4.setTransform(69.125,-0.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbLookG, new cjs.Rectangle(-23.2,-18,138.7,36), null);


(lib.rbLookC = function(mode,startPosition,loop) {
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
	this.btnS = new lib.btnSquare_1();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(46.4,0,1.3671,0.3399,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsArQgrAtg/AAQg+AAgsgtQgrgrAAg+QAAg+ArgsQAsgrA+AAQA/AAArArQAsAsAAA+g");
	this.shape.setTransform(0,0.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBqQgsgsAAg+QAAg+AsgsQArgrA+AAQA/AAAqArQAtAsAAA+QAAA+gtAsQgqAsg/AAQg+AAgrgsg");
	this.shape_1.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiPCUIAAgLIiUAAIAAALIgcAAIAAiDQgQAPgjAWIgSgUQA0gfAhgiIhSAAIAAgZIBmAAIAKgOIhdAAIAAgZIBsAAIAIgNQhCACgrAAIgCgaQA4ABBLgFQBMgEAmgHIADAaQgeAGhDAFIgJAAIgJAPIB3AAIAAAZIiEAAIgKAOICeAAIAAAZIixAAIgOAPICjAAQAGAAAAAFIAACfgAkjBwICUAAIAAgSIiUAAgAkjBFICUAAIAAgRIiUAAgAkjAMIAAAPICUAAIAAgPQAAgBAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAIiOAAQgFAAACAEgADMCSQgNAAgHgFQgPgMAAgaIAAjiIAdAAIAADdQABAKABAEQAEAFALAAIBFAAQAPAAAEgIQADgFACgHQABgIgBgwIAcAFQACAzgEATQgBAKgFAHQgJAKgFABQgIACgMAAgABbBsQAYh9gBhPIAbADQACBWgYB3gAFDhmIAagGQAdBWALB8IgcAFQgPiFgXhMgADgiMIAbgGQAZBMAJBwIgbAFQgMh2gWhFg");
	this.shape_2.setTransform(69.375,-0.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,1,1).p("AkjCJICUAAIAAALIAcAAIAAifQAAgFgGAAIijAAQABgBANgOICxAAIAAgZIieAAQABgBAJgNICEAAIAAgZIh3AAQAEgHAFgIQAEAAAFAAQBDgFAegGIgDgaQgmAHhMAEQhLAFg4gBIACAaQArAABCgCQgEAHgEAGIhsAAIAAAZIBdAAQgDAFgHAJIhmAAIAAAZIBSAAQghAig0AfIASAUQAjgWAQgPIAACDIAcAAgAFDhmQAXBMAPCFIAcgFQgLh8gdhWgADgiMQAWBFAMB2IAbgFQgJhwgZhMgACph7IAADiQAAAaAPAMQAHAFANAAIBaAAQAMAAAIgCQAFgBAJgKQAFgHABgKQAEgTgCgzIgcgFQABAwgBAIQgCAHgDAFQgEAIgPAAIhFAAQgLAAgEgFQgBgEgBgKIAAjdgAByhgQABBPgYB9IAcAEQAYh3gChWgAkjAbIAAgPQgCgEAFAAICOAAQADAAAAAEIAAAPgAkjBFIAAgRICUAAIAAARgAiPBeIAAASIiUAAIAAgSg");
	this.shape_3.setTransform(69.375,-0.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiPCUIAAgLIiUAAIAAALIgcAAIAAiDQgQAPgjAWIgSgUQA0gfAhgiIhSAAIAAgZIBmAAIAKgOIhdAAIAAgZIBsAAIAIgNQhCACgrAAIgCgaQA4ABBLgFQBMgEAmgHIADAaQgeAGhDAFIgJAAIgJAPIB3AAIAAAZIiEAAIgKAOICeAAIAAAZIixAAIgOAPICjAAQAGAAAAAFIAACfgAkjBwICUAAIAAgSIiUAAgAkjBFICUAAIAAgRIiUAAgAkjAMIAAAPICUAAIAAgPQAAgBAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAIiOAAQgFAAACAEgADMCSQgNAAgHgFQgPgMAAgaIAAjiIAdAAIAADdQABAKABAEQAEAFALAAIBFAAQAPAAAEgIQADgFACgHQABgIgBgwIAcAFQACAzgEATQgBAKgFAHQgJAKgFABQgIACgMAAgABbBsQAYh9gBhPIAbADQACBWgYB3gAFDhmIAagGQAdBWALB8IgcAFQgPiFgXhMgADgiMIAbgGQAZBMAJBwIgbAFQgMh2gWhFg");
	this.shape_4.setTransform(69.375,-0.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbLookC, new cjs.Rectangle(-23.2,-18,138.7,36), null);


(lib.rbLookB = function(mode,startPosition,loop) {
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
	this.btnS = new lib.btnSquare_1();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(46.4,0,1.3671,0.3399,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsArQgrAtg/AAQg+AAgsgtQgrgrAAg+QAAg+ArgsQAsgrA+AAQA/AAArArQAsAsAAA+g");
	this.shape.setTransform(0,0.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBqQgsgsAAg+QAAg+AsgsQArgrA+AAQA/AAAqArQAtAsAAA+QAAA+gtAsQgqAsg/AAQg+AAgrgsg");
	this.shape_1.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag+CUIAAgLIiUAAIAAALIgbAAIAAiDQgRAPgjAWIgRgUQAzgfAhgiIhSAAIAAgZIBnAAIAKgOIheAAIAAgZIBsAAIAIgNQhCACgrAAIgCgaQA4ABBLgFQBNgEAlgHIADAaQgeAGhDAFIgIAAIgJAPIB3AAIAAAZIiFAAIgKAOICfAAIAAAZIiyAAIgOAPICjAAQAGAAAAAFIAACfgAjSBwICUAAIAAgSIiUAAgAjSBFICUAAIAAgRIiUAAgAjSAMIAAAPICUAAIAAgPQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBAAgBAAIiOAAQgEAAABAEgACzB+IAAgUQAAgvA1guQAxgpAAggQABgUgIgLQgMgMgMAAQgTAAgIALQgNAPAAAaIgaAAQAAgoATgUQARgTAeAAQAZAAAQATQARASgBAhQABAsg6A0QgtAoAAAXIBlAAIAAAbg");
	this.shape_2.setTransform(61.25,-0.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,1,1).p("AjSCJICUAAIAAALIAcAAIAAifQAAgFgGAAIijAAQABgBANgOICxAAIAAgZIieAAQABgBAJgNICEAAIAAgZIh3AAQAEgHAFgIQAEAAAFAAQBDgFAegGIgDgaQgmAHhMAEQhLAFg4gBIACAaQArAABCgCQgEAHgEAGIhsAAIAAAZIBdAAQgDAFgHAJIhmAAIAAAZIBSAAQghAig0AfIASAUQAjgWAQgPIAACDIAcAAgACzB+ICAAAIAAgbIhmAAQAAgXAtgoQA6g0AAgsQAAghgQgSQgRgTgZAAQgeAAgRATQgTAUAAAoIAaAAQAAgaANgPQAJgLASAAQANAAALAMQAIALAAAUQAAAggyApQg1AuAAAvQAAALAAAJgAjSAbIAAgPQgCgEAFAAICOAAQADAAAAAEIAAAPgAjSBFIAAgRICUAAIAAARgAg+BeIAAASIiUAAIAAgSg");
	this.shape_3.setTransform(61.25,-0.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag+CUIAAgLIiUAAIAAALIgbAAIAAiDQgRAPgjAWIgRgUQAzgfAhgiIhSAAIAAgZIBnAAIAKgOIheAAIAAgZIBsAAIAIgNQhCACgrAAIgCgaQA4ABBLgFQBNgEAlgHIADAaQgeAGhDAFIgIAAIgJAPIB3AAIAAAZIiFAAIgKAOICfAAIAAAZIiyAAIgOAPICjAAQAGAAAAAFIAACfgAjSBwICUAAIAAgSIiUAAgAjSBFICUAAIAAgRIiUAAgAjSAMIAAAPICUAAIAAgPQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBAAgBAAIiOAAQgEAAABAEgACzB+IAAgUQAAgvA1guQAxgpAAggQABgUgIgLQgMgMgMAAQgTAAgIALQgNAPAAAaIgaAAQAAgoATgUQARgTAeAAQAZAAAQATQARASgBAhQABAsg6A0QgtAoAAAXIBlAAIAAAbg");
	this.shape_4.setTransform(61.25,-0.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbLookB, new cjs.Rectangle(-23.2,-18,138.7,36), null);


(lib.rbLookA = function(mode,startPosition,loop) {
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
	this.btnS = new lib.btnSquare_1();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(46.4,0,1.3671,0.3399,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsArQgrAtg/AAQg+AAgsgtQgrgrAAg+QAAg+ArgsQAsgrA+AAQA/AAArArQAsAsAAA+g");
	this.shape.setTransform(0,0.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBqQgsgsAAg+QAAg+AsgsQArgrA+AAQA/AAAqArQAtAsAAA+QAAA+gtAsQgqAsg/AAQg+AAgrgsg");
	this.shape_1.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag4CUIAAgLIiVAAIAAALIgbAAIAAiDQgRAPgjAWIgRgUQA0gfAhgiIhSAAIAAgZIBmAAIAKgOIhdAAIAAgZIBsAAIAIgNQhDACgqAAIgDgaQA4ABBMgFQBMgEAmgHIADAaQgeAGhEAFIgIAAIgJAPIB3AAIAAAZIiEAAIgKAOICeAAIAAAZIiyAAIgNAPICiAAQAGAAABAFIAACfgAjNBwICVAAIAAgSIiVAAgAjNBFICVAAIAAgRIiVAAgAjNAMIAAAPICVAAIAAgPQAAgBAAgBQAAAAgBgBQAAAAgBgBQgBAAgBAAIiNAAQgFAAABAEgADBB+IAAgbIAqAAIAAi9IgtATIAAgaIBHgeIAADiIApAAIAAAbg");
	this.shape_2.setTransform(60.7,-0.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,1,1).p("AjNCJICVAAIAAALIAbAAIAAifQAAgFgGAAIiiAAQABgBAMgOICyAAIAAgZIifAAQABgBAJgNICFAAIAAgZIh3AAQAEgHAFgIQADAAAFAAQBEgFAegGIgEgaQglAHhNAEQhLAFg4gBIADAaQAqAABCgCQgDAHgEAGIhtAAIAAAZIBeAAQgEAFgGAJIhnAAIAAAZIBTAAQgiAigzAfIARAUQAjgWARgPIAACDIAbAAgADrBjIgqAAIAAAbIBtAAIAAgbIgpAAIAAjiIhHAeIAAAaIAtgTgAjNAbIAAgPQgBgEAFAAICNAAQAEAAAAAEIAAAPgAjNBFIAAgRICVAAIAAARgAg4BeIAAASIiVAAIAAgSg");
	this.shape_3.setTransform(60.7,-0.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag4CUIAAgLIiVAAIAAALIgbAAIAAiDQgRAPgjAWIgRgUQA0gfAhgiIhSAAIAAgZIBmAAIAKgOIhdAAIAAgZIBsAAIAIgNQhDACgqAAIgDgaQA4ABBMgFQBMgEAmgHIADAaQgeAGhEAFIgIAAIgJAPIB3AAIAAAZIiEAAIgKAOICeAAIAAAZIiyAAIgNAPICiAAQAGAAABAFIAACfgAjNBwICVAAIAAgSIiVAAgAjNBFICVAAIAAgRIiVAAgAjNAMIAAAPICVAAIAAgPQAAgBAAgBQAAAAgBgBQAAAAgBgBQgBAAgBAAIiNAAQgFAAABAEgADBB+IAAgbIAqAAIAAi9IgtATIAAgaIBHgeIAADiIApAAIAAAbg");
	this.shape_4.setTransform(60.7,-0.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbLookA, new cjs.Rectangle(-23.2,-18,138.7,36), null);


(lib.rbChartVT = function(mode,startPosition,loop) {
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
	this.btnS = new lib.btnSquare_1();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(46.4,0,1.3671,0.3399,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsArQgrAtg/AAQg+AAgsgtQgrgrAAg+QAAg+ArgsQAsgrA+AAQA/AAArArQAsAsAAA+g");
	this.shape.setTransform(0,0.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBqQgsgsAAg+QAAg+AsgsQArgrA+AAQA/AAAqArQAtAsAAA+QAAA+gtAsQgqAsg/AAQg+AAgrgsg");
	this.shape_1.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AC4CyQgJgJAAgNQAAgRALgkIA0i2IgwAAIADgNQAjgJAYgTQAXgTAdgvIANAAIgZBXIAzAAIgGAUIgxAAIg3C6QgJAeAAAJQAAAFACADQADADAEAAQAHAAANgLQAIgGAbghIAKAIQgdAqgaASQgSAMgSAAQgOAAgJgJgAkDC7QgHjIgYgyQgJgQgSAAQgHAAgQADIgBgLIBbgUQAKAYAGAYQAIAkAGAwQACAZAFBQQAogsAHgLIAxhCQAKgQAEgNQADgJABgJQAAgIgPgLQgPgLAAgNQAAgKAIgIQAJgIALAAQANAAAKALQAKALAAAQQAAAQgFAPQgJAYgWAiQgXAjgyA6IhGBKgAgyA7IANgqICkAAIgNAqg");
	this.shape_2.setTransform(61.75,-3.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,1,1).p("AlWhXIBcgUQAKAYAGAYQAIAkAGAwQACAZAFBQQAngsAIgLQAqg4AGgKQALgQAEgNQAEgJAAgJQAAgIgPgLQgPgLAAgNQAAgKAJgIQAHgIALAAQANAAALALQAKALAAAQQAAAQgFAPQgJAYgWAiQgXAjgyA6QgGAIhABCIgMAAQgIjIgYgyQgIgQgSAAQgIAAgPADgAB/ARIgOAqIijAAIANgqgAE+i6IgZBXIAyAAIgGAUIgxAAIg3C6QgJAeAAAJQAAAFADADQACADAEAAQAHAAANgLQAIgGAbghIAKAIQgdAqgaASQgSAMgSAAQgOAAgJgJQgJgJAAgNQAAgRAKgkIA1i2IgwAAIADgNQAjgJAYgTQAXgTAcgvg");
	this.shape_3.setTransform(61.75,-3.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AC4CyQgJgJAAgNQAAgRAKgkIA1i2IgvAAIACgNQAkgJAXgTQAXgTAcgvIAPAAIgaBXIAzAAIgGAUIgxAAIg3C6QgJAeAAAJQAAAFADADQACADADAAQAJAAANgLQAHgGAbghIAKAIQgdAqgaASQgSAMgSAAQgOAAgJgJgAkCC7QgJjIgYgyQgHgQgTAAQgIAAgOADIgCgLIBbgUQAKAYAGAYQAJAkAFAwQADAZAEBQQAogsAHgLIAwhCQALgQAEgNQADgJAAgJQAAgIgOgLQgPgLAAgNQAAgKAIgIQAIgIALAAQAOAAAKALQAKALAAAQQAAAQgFAPQgJAYgWAiQgWAjgyA6IhHBKgAgyA7IANgqICkAAIgOAqg");
	this.shape_4.setTransform(61.75,-3.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbChartVT, new cjs.Rectangle(-23.2,-23.8,138.7,41.8), null);


(lib.rbChartNone = function(mode,startPosition,loop) {
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
	this.btnS = new lib.btnSquare_1();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(46.4,0,1.3671,0.3399,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsArQgrAtg/AAQg+AAgsgtQgrgrAAg+QAAg+ArgsQAsgrA+AAQA/AAArArQAsAsAAA+g");
	this.shape.setTransform(0,0.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBqQgsgsAAg+QAAg+AsgsQArgrA+AAQA/AAAqArQAtAsAAA+QAAA+gtAsQgqAsg/AAQg+AAgrgsg");
	this.shape_1.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhOBzIAsgCQANA9gCA7IgvAEQAAhCgIg4gAjgDPQAtgyAZgzIAoAVQAIAJgOACQgkBCgiAhgABvCEIAhgYQApAgAqA7IgmAdQgggtgugzgAASB5IAqgNQARApATBBIguAOQgRhDgPgogAjiBcIAAgpIBTAAIAAhIIhZAAIAAgoIBZAAIAAhIQgeAqgbARIgagjQA+gxAdhOIAqANQAJAIgPACIgTAmIFCAAIAAAoIgtAAIAABKIBKAAIAAAoIhKAAIAABIIBEAAIAAApgABIAzIAtAAIAAhIIgtAAgAgPAzIAtAAIAAhIIgtAAgAhlAzIAsAAIAAhIIgsAAgABIg9IAtAAIAAhKIgtAAgAgPg9IAtAAIAAhKIgtAAgAhlg9IAsAAIAAhKIgsAAg");
	this.shape_2.setTransform(53.625,-4.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,1,1).p("Ah2ivIFCAAIAAAoIgtAAIAABKIBKAAIAAAoIhKAAIAABIIBEAAIAAApInFAAIAAgpIBTAAIAAhIIhZAAIAAgoIBZAAIAAhIQgeAqgbARIgagjQA+gxAdhOIAqANQAJAIgPACgAgPiHIAABKIAtAAIAAhKgAhlg9IAsAAIAAhKIgsAAgAhlgVIAABIIAsAAIAAhIgAgPgVIAABIIAtAAIAAhIgABIiHIAABKIAtAAIAAhKgABIAzIAtAAIAAhIIgtAAgAC9DkQgggtgugzIAhgYQApAgAqA7gAAyDkQgRhDgPgoIAqgNQARApATBBgAhyB/QAIAJgOACQgkBCgiAhIgigeQAtgyAZgzgAgiBxQANA9gCA7IgvAEQAAhCgIg4g");
	this.shape_3.setTransform(53.625,-4.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhOBzIAsgCQANA9gCA7IgvAEQAAhCgIg4gAjgDPQAtgyAZgzIAoAVQAIAJgOACQgkBCgiAhgABvCEIAhgYQApAgAqA7IgmAdQgggtgugzgAASB5IAqgNQARApATBBIguAOQgRhDgPgogAjiBcIAAgpIBTAAIAAhIIhZAAIAAgoIBZAAIAAhIQgeAqgbARIgagjQA+gxAdhOIAqANQAJAIgPACIgTAmIFCAAIAAAoIgtAAIAABKIBKAAIAAAoIhKAAIAABIIBEAAIAAApgABIAzIAtAAIAAhIIgtAAgAgPAzIAtAAIAAhIIgtAAgAhlAzIAsAAIAAhIIgsAAgABIg9IAtAAIAAhKIgtAAgAgPg9IAtAAIAAhKIgtAAgAhlg9IAsAAIAAhKIgsAAg");
	this.shape_4.setTransform(53.625,-4.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbChartNone, new cjs.Rectangle(-23.2,-30.1,138.7,50.5), null);


(lib.rbChartFT = function(mode,startPosition,loop) {
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
	this.btnS = new lib.btnSquare_1();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(46.4,0,1.3671,0.3399,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsArQgrAtg/AAQg+AAgsgtQgrgrAAg+QAAg+ArgsQAsgrA+AAQA/AAArArQAsAsAAA+g");
	this.shape.setTransform(0,0.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBqQgsgsAAg+QAAg+AsgsQArgrA+AAQA/AAAqArQAtAsAAA+QAAA+gtAsQgqAsg/AAQg+AAgrgsg");
	this.shape_1.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AD9DSQgJgIAAgOQAAgRALgjIA1i3IgwAAIADgNQAjgJAXgTQAXgTAdguIAOAAIgZBWIAyAAIgGAUIgxAAIg3C6QgJAeAAAJQAAAGADADQACADAEAAQAIAAANgMQAHgGAbghIAKAIQgdArgaARQgSAMgSAAQgOAAgJgJgAmbDTIAFgLQAYgBAJgDQAMgGAGgJQAJgOAMgoIBLkCQAKggAAgRQAAgIgFgHQgEgFgIgEQgIgCgYAAIAEgMIFNAAIggBtIgLAAQADgTAAgOQAAgVgLgMQgMgMgSgFQgNgDgsAAIhUAAIgzCqIA4AAQAmABATgMQATgMAUgnIAMAAIgtCdIgMAAQAFgUAAgMQAAgUgNgKQgNgKgjABIg6AAIglCAQgKAjAAALQAAAMAJAGQAIAGAiADIgEALgAASBcIANgrIClAAIgNArg");
	this.shape_2.setTransform(65.675,-6.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,1,1).p("Ai3jDIgzCrIA4AAQAmAAATgNQATgLAUgnIAMAAIgtCdIgMAAQAFgTAAgNQAAgTgNgLQgNgKgjAAIg6AAIglCBQgKAjAAALQAAAMAJAGQAIAHAiACIgEAMIiqAAIAFgMQAYgBAJgDQAMgGAGgJQAJgNAMgpIBLkCQAKggAAgSQAAgIgFgFQgEgHgIgDQgIgCgYAAIAEgMIFNAAIggBtIgLAAQADgUAAgMQAAgWgLgLQgMgNgSgFQgNgDgsAAgAGDiaIgZBXIAyAAIgGAUIgxAAIg3C6QgJAfAAAIQAAAGADADQACADAEAAQAIAAANgMQAHgGAbghIAKAIQgdArgaARQgSAMgSAAQgOAAgJgIQgJgJAAgOQAAgRALgjIA1i3IgwAAIADgMQAjgKAXgTQAXgTAdgvgADEAyIgNAqIilAAIANgqg");
	this.shape_3.setTransform(65.675,-6.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AD9DSQgJgIAAgOQAAgRALgjIA1i3IgwAAIADgNQAjgJAXgTQAXgTAdguIAOAAIgZBWIAyAAIgGAUIgxAAIg3C6QgJAeAAAJQAAAGADADQACADAEAAQAIAAANgMQAHgGAbghIAKAIQgdArgaARQgSAMgSAAQgOAAgJgJgAmbDTIAFgLQAYgBAJgDQAMgGAGgJQAJgOAMgoIBLkCQAKggAAgRQAAgIgFgHQgEgFgIgEQgIgCgYAAIAEgMIFNAAIggBtIgLAAQADgTAAgOQAAgVgLgMQgMgMgSgFQgNgDgsAAIhUAAIgzCqIA4AAQAmABATgMQATgMAUgnIAMAAIgtCdIgMAAQAFgUAAgMQAAgUgNgKQgNgKgjABIg6AAIglCAQgKAjAAALQAAAMAJAGQAIAGAiADIgEALgAASBcIANgrIClAAIgNArg");
	this.shape_4.setTransform(65.675,-6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbChartFT, new cjs.Rectangle(-23.2,-30.3,138.7,48.3), null);


(lib.rbChartET = function(mode,startPosition,loop) {
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
	this.btnS = new lib.btnSquare_1();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(46.4,0,1.3671,0.3399,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsArQgrAtg/AAQg+AAgsgtQgrgrAAg+QAAg+ArgsQAsgrA+AAQA/AAArArQAsAsAAA+g");
	this.shape.setTransform(0,0.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBqQgsgsAAg+QAAg+AsgsQArgrA+AAQA/AAAqArQAtAsAAA+QAAA+gtAsQgqAsg/AAQg+AAgrgsg");
	this.shape_1.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AD8DSQgJgIAAgOQAAgRALgjIA1i3IgwAAIADgNQAjgJAXgTQAYgTAcguIAOAAIgZBWIAyAAIgGAUIgxAAIg2C6QgJAeAAAJQAAAGACADQADADADAAQAIAAANgMQAIgGAaghIALAIQgdArgaARQgTAMgRAAQgOAAgKgJgAmaDTIAEgLQAZgBAJgDQAMgGAGgJQAIgOAMgpIBLkDQAKgfgBgQQAAgMgIgHQgJgHgYAAIgGAAIADgMIE1AAIgaBoIgMAAQADgPAAgKQAAgQgJgMQgLgOgVgIQgOgFg4gBIg2AAIgxCqIAoAAQArABATgNQAUgOAOgkIALAAIgsCbIgMAAQAGgTAAgOQAAgOgGgIQgFgIgKgEQgKgDgfAAIgpAAIgpCNQgHAVAAALQAAAIAJAGQAEAFAXAAIAlAAQA+AAAlgWQAmgWAeg2IALAAIgpB3gAASBcIAMgrIClAAIgNArg");
	this.shape_2.setTransform(65.75,-6.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,1,1).p("Ai5jCIgxCqIAoAAQArAAATgOQAUgNAOgkIALAAIgsCcIgMAAQAFgUAAgOQAAgNgFgJQgGgIgJgEQgKgDgfAAIgpAAIgqCOQgGAUAAALQAAAIAIAHQAFAEAWAAIAnAAQA9AAAmgWQAlgWAdg2IAMAAIgpB4IlMAAIAEgMQAZgBAIgDQANgGAGgJQAIgNAMgqIBLkDQAKgfAAgRQAAgMgJgGQgJgHgYAAIgHAAIAEgMIE1AAIgaBoIgMAAQADgPAAgKQAAgRgJgLQgKgPgVgHQgPgFg4AAgAGCiaIgZBXIAyAAIgFAUIgyAAIg2C6QgJAfAAAIQAAAGACADQADADADAAQAIAAANgMQAIgGAaghIALAIQgdArgaARQgTAMgRAAQgOAAgJgIQgKgJAAgOQAAgRALgjIA1i3IgwAAIADgMQAjgKAXgTQAXgTAdgvgADDAyIgNAqIikAAIAMgqg");
	this.shape_3.setTransform(65.75,-6.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AD8DSQgJgIAAgOQAAgRALgjIA1i3IgwAAIADgNQAjgJAXgTQAYgTAcguIAOAAIgZBWIAyAAIgGAUIgxAAIg2C6QgJAeAAAJQAAAGACADQADADADAAQAIAAANgMQAIgGAaghIALAIQgdArgaARQgTAMgRAAQgOAAgKgJgAmaDTIAEgLQAZgBAJgDQAMgGAGgJQAIgOAMgpIBLkDQAKgfgBgQQAAgMgIgHQgJgHgYAAIgGAAIADgMIE1AAIgaBoIgMAAQADgPAAgKQAAgQgJgMQgLgOgVgIQgOgFg4gBIg2AAIgxCqIAoAAQArABATgNQAUgOAOgkIALAAIgsCbIgMAAQAGgTAAgOQAAgOgGgIQgFgIgKgEQgKgDgfAAIgpAAIgpCNQgHAVAAALQAAAIAJAGQAEAFAXAAIAlAAQA+AAAlgWQAmgWAeg2IALAAIgpB3gAASBcIAMgrIClAAIgNArg");
	this.shape_4.setTransform(65.75,-6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbChartET, new cjs.Rectangle(-23.2,-30.3,138.7,48.3), null);


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
	this.btnS.setTransform(24.1,0,0.8735,0.3399,0,0,0,0.1,0);
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AApCCQgqARg6ACIgFgZQAjAAAbgFQAEgDAHgBIgkgXIANgUQAfAUAYAMQAKgEALgIQAYgLAMgMQAAgBAAAAQAAgBgBAAQAAAAgBgBQgBAAAAAAIiDAAIAAgYIChAAQALAIAHAEQAAAAABABQAAAAAAABQAAAAAAABQgBAAAAAAQgUAegyAcQAfAHAuAAIgIAbQg5gDgsgQgAhwCVIAAkpIAZAAIAAEpgAiVAeQAIgyAAg+IAWACQgDBQgFAggAguAeQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAAhBQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAAAIC9AAQAEAAAAAEIAABBQAAAEgEAAgABYAJIAgAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBIAAgbQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAIggAAgAAhAJIAeAAIAAgfIgeAAgAgYgUIAAAdIAgAAIAAgfIggAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABgAhPhUIAWgDIADBUIgWABgAgig3QAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIAAhRQAAgBABgBQAAgBAAAAQABgBAAAAQAAAAAAAAICjAAQAEAAAAAEIAABRQAAAEgEAAgAgLhNIB2AAIABgBIAAgMIh3AAgAgLh6IAAANIB3AAIAAgNIgBgBIh2AAQAAAAAAAAQgBAAAAABQAAAAABAAQAAAAAAAAg");
	this.shape_2.setTransform(45.95,-0.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,1,1).p("Ag5hXIgWADIADBSIAVgBgAhwiUIAAEpIAZAAIAAkpgAiNhSQAAA+gIAyIAWACQAFggAChQgACFg7IAAhRQAAgEgEAAIijAAQgBAAgBAEIAABRQAAAEACAAICjAAQAEAAAAgEgABshaIAAAMQAAABgBAAIh2AAIAAgNgAAIAJIggAAIAAgdQgBgCABAAIAgAAgACTAaIAAhBQAAgEgEAAIi9AAQgBAAgCAEIAABBQAAAEADAAIC9AAQAEAAAAgEgAgLhtIAAgNQgBgBABAAIB2AAQABAAAAABIAAANgABYgWIAgAAQACAAAAACIAAAbQAAACgCAAIggAAgAA/AJIgeAAIAAgfIAeAAgAAoCCQAtAQA5ADIAHgbQgtAAgfgHQAygcAUgeQABgBgBgCQgIgEgKgIIihAAIAAAYICCAAQAEAAAAADQgNAMgXALQgMAIgKAEQgXgMgfgUIgNAUQAUANAQAKQgHABgEADQgbAFgkAAIAGAZQA6gCApgRg");
	this.shape_3.setTransform(45.95,-0.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AApCCQgqARg6ACIgFgZQAjAAAbgFQAEgDAHgBIgkgXIANgUQAfAUAYAMQAKgEALgIQAYgLAMgMQAAgBAAAAQAAgBgBAAQAAAAgBgBQgBAAAAAAIiDAAIAAgYIChAAQALAIAHAEQAAAAABABQAAAAAAABQAAAAAAABQgBAAAAAAQgUAegyAcQAfAHAuAAIgIAbQg5gDgsgQgAhwCVIAAkpIAZAAIAAEpgAiVAeQAIgyAAg+IAWACQgDBQgFAggAguAeQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAAhBQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAAAIC9AAQAEAAAAAEIAABBQAAAEgEAAgABYAJIAgAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBIAAgbQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAIggAAgAAhAJIAeAAIAAgfIgeAAgAgYgUIAAAdIAgAAIAAgfIggAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABgAhPhUIAWgDIADBUIgWABgAgig3QAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIAAhRQAAgBABgBQAAgBAAAAQABgBAAAAQAAAAAAAAICjAAQAEAAAAAEIAABRQAAAEgEAAgAgLhNIB2AAIABgBIAAgMIh3AAgAgLh6IAAANIB3AAIAAgNIgBgBIh2AAQAAAAAAAAQgBAAAAABQAAAAABAAQAAAAAAAAg");
	this.shape_4.setTransform(45.95,-0.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.chSlow, new cjs.Rectangle(-20.6,-20.7,89.30000000000001,38.7), null);


(lib.chMC = function(mode,startPosition,loop) {
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
	this.shape_2.graphics.f("#FFFFFF").s().p("Ai/CAIAFgWIhlAAIAGAVQgoAPg5AJIgHgbQA0gKAhgIIg0AAQgGAAAAgIIAAiGQABgGAFAAIB8AAIgSgSQAYgUAAgWIAAgjQAAgKAJABQA3ABAugFIAGAZQglAEgxAAQgEAAAAAFIAAAIIBqAAIAAAZIgwAAIAAAkIgbAAIAAgkIghAAQgFASgTAXIBjAAQAHABAAAFIAACGQAAAIgHAAIgtAAQAgAGArAMIgHAbQg4gTgjgEgAlLBRIC6AAIACgCIAAgPIi8AAgAlLAqIC8AAIAAgSIi8AAgAlLgQIAAASIC8AAIAAgSQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIi6AAQAAAAAAAAQgBAAAAAAQAAAAABABQAAAAAAAAgADMCPQgMAAgIgFQgPgLAAgaIAAjjIAdAAIAADeQABAKACADQADAFAMAAIBEAAQAPAAAEgHQAEgFABgIQABgHgBgxIAdAFQABAzgEATQgBAKgFAIQgJAKgFABQgHABgNAAgABcBqQAYh+gChOIAcACQABBWgYB3gAFDhpIAagGQAdBWALB8IgbAFQgPiEgYhNgADgiOIAcgGQAZBMAJBvIgcAFQgLh1gXhFgAmEgwQASgYAAgYIAAgoQAAgJAIAAQA7AAApgFIAHAZQguAFgnAAQgDAAAAAFIAAAHIBvAAIAAAZIg1AAIAAAkIgaAAIAAgkIgiAAQgFAcgQAYg");
	this.shape_2.setTransform(68.825,0.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,1,1).p("Ak3hTIAAAkIAaAAIAAgkIA1AAIAAgZIhvAAIAAgHQAAgFADAAQAnAAAugFIgHgZQgpAFg7AAQgIAAAAAJIAAAoQAAAYgSAYIAWARQAQgYAFgcgAi6BqIgFAWQAjAEA4ATIAHgbQgrgMgggGIAtAAQAHAAAAgIIAAiGQAAgFgHgBIhjAAQATgXAFgSIAhAAIAAAkIAbAAIAAgkIAwAAIAAgZIhqAAIAAgIQAAgFAEAAQAxAAAlgEIgGgZQguAFg3gBQgJgBAAAKIAAAjQAAAWgYAUIASASIh8AAQgFAAgBAGIAACGQAAAIAGAAIA0AAQghAIg0AKIAHAbQA5gJAogPIgGgVgAlLACIAAgSQgBgBABAAIC6AAQACAAAAABIAAASgAFDhpQAYBNAPCEIAbgFQgLh8gdhWgADgiOQAXBFALB1IAcgFQgJhvgZhMgACph+IAADjQAAAaAPALQAIAFAMAAIBaAAQANAAAHgBQAFgBAJgKQAFgIABgKQAEgTgBgzIgdgFQABAxgBAHQgBAIgEAFQgEAHgPAAIhEAAQgMAAgDgFQgCgDgBgKIAAjegAByhiQACBOgYB+IAbADQAYh3gBhWgAiPBAIAAAPIgCACIi6AAIAAgRgAlLAqIAAgSIC8AAIAAASg");
	this.shape_3.setTransform(68.825,0.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ai/CAIAFgWIhlAAIAGAVQgoAPg5AJIgHgbQA0gKAhgIIg0AAQgGAAAAgIIAAiGQABgGAFAAIB8AAIgSgSQAYgUAAgWIAAgjQAAgKAJABQA3ABAugFIAGAZQglAEgxAAQgEAAAAAFIAAAIIBqAAIAAAZIgwAAIAAAkIgbAAIAAgkIghAAQgFASgTAXIBjAAQAHABAAAFIAACGQAAAIgHAAIgtAAQAgAGArAMIgHAbQg4gTgjgEgAlLBRIC6AAIACgCIAAgPIi8AAgAlLAqIC8AAIAAgSIi8AAgAlLgQIAAASIC8AAIAAgSQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIi6AAQAAAAAAAAQgBAAAAAAQAAAAABABQAAAAAAAAgADMCPQgMAAgIgFQgPgLAAgaIAAjjIAdAAIAADeQABAKACADQADAFAMAAIBEAAQAPAAAEgHQAEgFABgIQABgHgBgxIAdAFQABAzgEATQgBAKgFAIQgJAKgFABQgHABgNAAgABcBqQAYh+gChOIAcACQABBWgYB3gAFDhpIAagGQAdBWALB8IgbAFQgPiEgYhNgADgiOIAcgGQAZBMAJBvIgcAFQgLh1gXhFgAmEgwQASgYAAgYIAAgoQAAgJAIAAQA7AAApgFIAHAZQguAFgnAAQgDAAAAAFIAAAHIBvAAIAAAZIg1AAIAAAkIgaAAIAAgkIgiAAQgFAcgQAYg");
	this.shape_4.setTransform(68.825,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.chMC, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


(lib.chGround = function(mode,startPosition,loop) {
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AE1BiQgbAZgqAbIgUgTQAogXAfgeQgogzgEhIIgHAAIAAAnQgBBZgrBAIgYgMQAZgmAJgiQAIgfAAgtIAAh0QAAgIAHAAICfAAIAAAbIiIAAQgBABgBAAQgBAAAAABQgBAAAAAAQAAABAAAAIAAAkIB6AAIAPAKQgKBRgpA5IAJAKQATAVAjAYIgXASQgpgggQgUgAEoAoQAFAIAIAJQAhgvAIgwIgBgGIgIgBIhDAAQADAvATAmgACJCUIAAiHQgKAdgLASIgZgGQAhgzALg7IgnAAIAAgbIApAAIAAg/IAbAAIAAA/IAmAAIAAAbIgmAAIAAACQAXAkAUAkIgWAOQgJgVgMgUIAACdgAjuCNQgMAAgIgGQgPgMABgYIAAhuIgZALIgNgZIAmgRIAAhNIAcAAIAABBIApgSIAAhMIAcAAIAABBIA5gaIATAJIAABuQAAAKgFALQgGALgJAFQgNAGgegDIgBgbQANADAHgBQAKgBAFgHQADgHAAgKIAAhGQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAABAAAAIguAUIAACBIgcAAIAAh2IgpATIAAB1IACANQAEAFALgBIBUAAQAPgCAFgEQADgIgCgiIAcADQAAAygFALQgJAKgFACIgUABgAmEBhQAXgJAPgIIAAh8IgiAAIAAgbIAiAAIAAhKIAbAAIAABKIAeAAIAAAbIgeAAIAABuQAOgJAJgJIARAVQggAag5Aag");
	this.shape_2.setTransform(68.775,0.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,1,1).p("AleBRQgPAHgXAJIAQAYQA5gaAggZIgRgWQgJAJgOAJIAAhuIAeAAIAAgbIgeAAIAAhKIgbAAIAABKIgiAAIAAAbIAiAAgAkQgLIAABvQgBAXAPANQAIAFAMAAIBpAAQANAAAHgBQAFgCAJgKQAFgLAAgyIgcgCQACAhgDAIQgFAFgPABIhUAAQgLABgEgFQgBgDgBgKIAAh1IApgTIAAB2IAcAAIAAiBIAugUQABgCABACQACAAAAACIAABGQAAALgDAGQgFAIgKABQgHAAgNgDIABAbQAeADANgGQAJgFAGgLQAFgLAAgJIAAhvIgTgJIg5AZIAAhBIgcAAIAABNIgpASIAAhCIgcAAIAABOIgmARIANAZgACkgJQAMAUAJAVIAWgOQgUglgXgjIAAgCIAmAAIAAgcIgmAAIAAg+IgbAAIAAA+IgpAAIAAAcIAnAAQgLA7ghA0IAZAGQALgTAKgdIAACHIAbAAgAD3gtQAEBIAoAzQgfAegoAXIAUATQAqgbAbgZQAQAUApAgIAXgSQgjgYgTgVQgFgFgEgFQApg4AKhSIgPgKIh6AAIAAgkQAAgCAEgBICIAAIAAgbIifAAQgHAAAAAHIAAB0QAAAugIAfQgJAigZAnIAYALQArhAABhZIAAgngAEoAoQgTgmgDgvIBDAAQAFAAADABQABACAAADQgIAxghAvQgIgJgFgIg");
	this.shape_3.setTransform(68.775,0.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AE1BiQgbAZgqAbIgUgTQAogXAfgeQgogzgEhIIgHAAIAAAnQgBBZgrBAIgYgMQAZgmAJgiQAIgfAAgtIAAh0QAAgIAHAAICfAAIAAAbIiIAAQgBABgBAAQgBAAAAABQgBAAAAAAQAAABAAAAIAAAkIB6AAIAPAKQgKBRgpA5IAJAKQATAVAjAYIgXASQgpgggQgUgAEoAoQAFAIAIAJQAhgvAIgwIgBgGIgIgBIhDAAQADAvATAmgACJCUIAAiHQgKAdgLASIgZgGQAhgzALg7IgnAAIAAgbIApAAIAAg/IAbAAIAAA/IAmAAIAAAbIgmAAIAAACQAXAkAUAkIgWAOQgJgVgMgUIAACdgAjuCNQgMAAgIgGQgPgMABgYIAAhuIgZALIgNgZIAmgRIAAhNIAcAAIAABBIApgSIAAhMIAcAAIAABBIA5gaIATAJIAABuQAAAKgFALQgGALgJAFQgNAGgegDIgBgbQANADAHgBQAKgBAFgHQADgHAAgKIAAhGQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAABAAAAIguAUIAACBIgcAAIAAh2IgpATIAAB1IACANQAEAFALgBIBUAAQAPgCAFgEQADgIgCgiIAcADQAAAygFALQgJAKgFACIgUABgAmEBhQAXgJAPgIIAAh8IgiAAIAAgbIAiAAIAAhKIAbAAIAABKIAeAAIAAAbIgeAAIAABuQAOgJAJgJIARAVQggAag5Aag");
	this.shape_4.setTransform(68.775,0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.chGround, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


// stage content:
(lib.myAnimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// helper
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("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");
	this.shape.setTransform(138.35,47.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(5,1,1).p("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");
	this.shape_1.setTransform(138.35,47.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("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");
	this.shape_2.setTransform(138.35,47.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("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");
	this.shape_3.setTransform(1527.4,35.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// UI
	this.btnGo = new lib.btnGo();
	this.btnGo.name = "btnGo";
	this.btnGo.parent = this;
	this.btnGo.setTransform(1418.45,715.4,1.4,1.4);
	new cjs.ButtonHelper(this.btnGo, 0, 1, 2, false, new lib.btnGo(), 3);

	this.btnPlayStop = new lib.btnPlayStop();
	this.btnPlayStop.name = "btnPlayStop";
	this.btnPlayStop.parent = this;
	this.btnPlayStop.setTransform(1453.45,715.4,1.4,1.4);
	new cjs.ButtonHelper(this.btnPlayStop, 0, 1, 2, false, new lib.btnPlayStop(), 3);

	this.btnReset = new lib.btnReset();
	this.btnReset.name = "btnReset";
	this.btnReset.parent = this;
	this.btnReset.setTransform(1494.05,715.4,1.4,1.4);
	new cjs.ButtonHelper(this.btnReset, 0, 1, 2, false, new lib.btnReset(), 3);

	this.chSlow = new lib.chSlow();
	this.chSlow.name = "chSlow";
	this.chSlow.parent = this;
	this.chSlow.setTransform(1454.55,789.65);

	this.rbLookA = new lib.rbLookA();
	this.rbLookA.name = "rbLookA";
	this.rbLookA.parent = this;
	this.rbLookA.setTransform(1304.5,395.55);

	this.rbLookB = new lib.rbLookB();
	this.rbLookB.name = "rbLookB";
	this.rbLookB.parent = this;
	this.rbLookB.setTransform(1457.3,395.55);

	this.rbLookC = new lib.rbLookC();
	this.rbLookC.name = "rbLookC";
	this.rbLookC.parent = this;
	this.rbLookC.setTransform(1304.45,442.55);

	this.rbLookG = new lib.rbLookG();
	this.rbLookG.name = "rbLookG";
	this.rbLookG.parent = this;
	this.rbLookG.setTransform(1457.3,442.55);

	this.chMC = new lib.chMC();
	this.chMC.name = "chMC";
	this.chMC.parent = this;
	this.chMC.setTransform(1116.5,395.55);

	this.chGround = new lib.chGround();
	this.chGround.name = "chGround";
	this.chGround.parent = this;
	this.chGround.setTransform(1116.5,442.55);

	this.slV2 = new lib.slV2();
	this.slV2.name = "slV2";
	this.slV2.parent = this;
	this.slV2.setTransform(1397.25,576.95);

	this.slM2 = new lib.slM2();
	this.slM2.name = "slM2";
	this.slM2.parent = this;
	this.slM2.setTransform(1397.25,524.3);

	this.slEE = new lib.slEE();
	this.slEE.name = "slEE";
	this.slEE.parent = this;
	this.slEE.setTransform(1397.25,630.55);

	this.rbChartVT = new lib.rbChartVT();
	this.rbChartVT.name = "rbChartVT";
	this.rbChartVT.parent = this;
	this.rbChartVT.setTransform(202.3,853.45,0.8,0.8,0,0,0,0,0.1);

	this.rbChartNone = new lib.rbChartNone();
	this.rbChartNone.name = "rbChartNone";
	this.rbChartNone.parent = this;
	this.rbChartNone.setTransform(73.5,853.45,0.8,0.8,0,0,0,0.1,0.1);

	this.rbChartFT = new lib.rbChartFT();
	this.rbChartFT.name = "rbChartFT";
	this.rbChartFT.parent = this;
	this.rbChartFT.setTransform(460.15,853.35,0.8,0.8);

	this.rbChartET = new lib.rbChartET();
	this.rbChartET.name = "rbChartET";
	this.rbChartET.parent = this;
	this.rbChartET.setTransform(331.2,853.45,0.8,0.8,0,0,0,0,0.1);

	this.slCameraRR = new lib.theSlider();
	this.slCameraRR.name = "slCameraRR";
	this.slCameraRR.parent = this;
	this.slCameraRR.setTransform(1350,939.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.slCameraRR},{t:this.rbChartET},{t:this.rbChartFT},{t:this.rbChartNone},{t:this.rbChartVT},{t:this.slEE},{t:this.slM2},{t:this.slV2},{t:this.chGround},{t:this.chMC},{t:this.rbLookG},{t:this.rbLookC},{t:this.rbLookB},{t:this.rbLookA},{t:this.chSlow},{t:this.btnReset},{t:this.btnPlayStop},{t:this.btnGo}]}).wait(1));

	// btn3D
	this.btn3D = new lib.btn3D();
	this.btn3D.name = "btn3D";
	this.btn3D.parent = this;
	new cjs.ButtonHelper(this.btn3D, 0, 1, 2, false, new lib.btn3D(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn3D).wait(1));

	// 圖層_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.6)").s().p("A+WNjIAA7FMA8tAAAIAAbFg");
	this.shape_4.setTransform(1388.525,574.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// screen
	this.screen = new lib.screen();
	this.screen.name = "screen";
	this.screen.parent = this;
	this.screen.setTransform(0,450);

	this.timeline.addTween(cjs.Tween.get(this.screen).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(800,450,824,509);
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