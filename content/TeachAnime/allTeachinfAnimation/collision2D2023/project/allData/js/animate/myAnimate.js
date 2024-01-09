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


(lib.slBB = function(mode,startPosition,loop) {
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
									var localY = e.stageY - sl.y;
									setValue(sl,localY);
								});
		sl.on('pressmove',function(e){
									//拖曳設值
									var localY = e.stageY - sl.y;
									setValue(sl,localY);
								});
		//setValue from localY
		var setValue = function(who,localY){
			var ly=localY;
			if(ly<0){ly=0;}
			else if(ly>who.len){ly=who.len;}
			who.btn.y=ly;
			who.val = who.min+ly/who.len*(who.max-who.min);
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
												    sl.btn.y=sl.len*(sl.val-sl.min)/(sl.max-sl.min);
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
										        sl.bgLine.scaleY=sl.len/150;
										        sl.btn.y=sl.len*(sl.val-sl.min)/(sl.max-sl.min);
										        //btnS
										        sl.btnS.scaleY=(sl.len+30)/100;
												sl.btnS.y=sl.len/2;
												sl.valueText.y = sl.len+20;
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
	this.shape.graphics.f("#FFFFFF").s().p("AheIaQgKgBAAgJIAAh/IAVAAIAAByQABAFAEAAIC+AAIAAASgAhAH+QgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBAAAAIAAhnQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIA3AAIAAgLIhsAAIAAgSIBsAAIAAgMIheAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBIAAgtQABgBAAgBQAAAAABgBQAAAAAAAAQAAAAABAAIDQAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAABIAAAtQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAIheAAIAAAMIBrAAIAAASIhrAAIAAALIBWAAQABAAABAAQAAABABAAQAAAAAAABQAAAAAAABIAABnQAAAAAAABQAAABAAAAQgBAAAAABQgBAAgBAAgAguHrIABABIB7AAIABgBIAAgOIh9AAgAguHMIB9AAIAAgMIh9AAgAguGvIB9AAIAAgMIh9AAgAArFWIAsAAIAAgBIAAgOIAAgBIgsAAgAgUFWIAsAAIAAgQIgsAAgAhVFHIAAAPIAuAAIAAgQIguAAQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAABAAgAhaEGIAAiIIgLAQIgUgLQAngwANg9IAVAGQgJAigKAZIAACvgAg8EAIAAgWIBqAAQAVhIAJhEIAVAEQgMBLgQA9IA1AAIAAAWgAgpBlIAVgFQAQAyAFBHIgVAEQgJhMgMgsgAg0BKIAAgWIBEAAIAAgeIAYAAIAAAeIBOAAIAAAWgAgngVIABgVQAWAKAJgDQAFAAACgDQACgDABgGIh5AAIAAgSIB4AAIgBgKIhiAAIAAgQIBeAAIgFgJQgtADgeAAIgCgRIBWgEIARgBIgIgSQAUgEAMgEIgSgQIALgNQAQAOAKAHQASgMAFgHQABgEgEAAIg7AAIAAgRIBQAAIAJAIQgJAVgZAVQATAJAaADIgIASQgWgFgQgHIACAPQgUAFgsAEIgBAAIAEAKIBTAAIAAAQIhOAAIABAKIBhAAIAAASIhgAAQACAJgFAKQgDAGgFADQgHAEgKAAQgPAAgUgGgAA2iBQgQAGgNADIAvgGQgGgFgGgBIgGADgAhoh3QgIgBABgGIAAgSIARAAIAAAIQAAABAAAAQAAABAAAAQABAAAAABQABAAAAAAIAeAAIAAgPIg3AAIAAgOIA3AAIAAgGIgsAAIgCgCIAAg0IACgCIAsAAIAAgGIg1AAIAAgQIA1AAIAAgMIASAAIAAAMIAyAAIAAAQIgyAAIAAAGIArAAQABAAAAABQAAAAAAAAQABABAAAAQAAAAAAAAIAAA0QAAABAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAIgrAAIAAAGIAzAAIAAAOIgzAAIAAAPIAeAAQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBIAAgIIAQAAIAAASQAAAHgGAAgAgsi1IAaAAIABgBIAAgHIgbAAgAhai1IAcAAIAAgIIgcAAgAgsjKIAbAAIAAgIIgBgBIgaAAgAhajSIAAAIIAcAAIAAgJIgcAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAgAAHjTIALgGQAIgHgBgKIAAgMIABgDIAEgBIA5AAIACABIACADIAAAUQAAAFACABQAAACAFAAIABAAIAFgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQABgBAAgBIgBgHIARACQgCAVgDABQgGAGgFAAIgPAAQgHgBgFgFQgFgFAAgHIAAgMQAAAAAAgBQAAgBgBAAQAAAAgBgBQAAAAgBAAIgZAAIgCACIAAACQAAAIgCAGQgGAOgRAHgAh4ktIACgXQAIAFAJABIAEgBQADgDAAgEIAAg8QgHAEgHABIgMgSIAagKIAAg+IgZAAIAAgWIAZAAIAAgpIAWAAIAAApIATAAIAAAWIgTAAIAAAyIANgJIANATQgKAHgNAGIgDACIAABMQAAAPgMAHQgEADgGAAQgKAAgQgGgAgzktIAAgUIBJAAIAAgNIhBAAIAAgTIBBAAIAAgOIg5AAQgEAAAAgGIAAhLQABgFADAAICJAAQAEABAAAEIAABLQgBAGgDAAIg8AAIAAAOIBDAAIAAATIhDAAIAAANIBPAAIAAAUgAAqmBIArAAIABgBIAAgQIgsAAgAgTmCIABABIAoAAIAAgRIgpAAgAAqmkIAsAAIAAgOIgBgBIgrAAgAgTmyIAAAOIApAAIAAgPIgoAAIgBABgAgunRIAAgVIAnAAIgFgTIgfAAIAAgTIBCAAIAAgNIAVAAIAAANIBHAAIAAATIgjAAIgFATIAtAAIAAAVgAAOnmIAoAAIAFgTIgyAAg");
	this.shape.setTransform(-37.1,74.625);

	this.valueText = new cjs.Text("0.0", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(-217.55,83.9);

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
	this.btnS.setTransform(0,75.2,1.8,0.3,89.9854,0,0,0.1,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// line
	this.bgLine = new lib.sliderBGLine();
	this.bgLine.name = "bgLine";
	this.bgLine.parent = this;
	this.bgLine.setTransform(0,0,1,1,89.9948);

	this.timeline.addTween(cjs.Tween.get(this.bgLine).wait(1));

}).prototype = getMCSymbolPrototype(lib.slBB, new cjs.Rectangle(-219.5,-16,235.5,182), null);


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
	this.shape_2.graphics.f("#FFFFFF").s().p("ADFCTQBBgwABh3IAAhOIg3AAIAAgcIBSAAIAAglIAfAAIAAAlIBUAAIAAAcIg5AAIAADlQgCAVgOAJQgOAKgsgKIAAgfQAhAKAIgGQADgEAAgGIAAjeIgZAAIAABOQgCA9gSA0QgUAsgfAegAkTCUQA9g3ABiKIAAgqIggAAIAAgfIAgAAIAAgtIAfAAIAAAtIAtAAQALgBAAAMIAADgQgBAGAEAEQAEAEAEAAIACAAIAHgCQADgFAAgEIAAhDIAfAFQgDBCgCANQgEANgIAFQgKAHgNAAIgMAAQgRgDgKgOQgGgHAAgMIAAjPQAAgGgEAAIgVAAIAAAqIgEA9QgOBigvA1gAlYCnIAAg1Ig+AAIAAgdIA+AAIAAgVIg0AAQgEAAAAgEIAAiSQAAgEAEAAIA0AAIAAgUIg8AAIAAgdIA8AAIAAgbIAeAAIAAAbIA+AAIAAAdIg+AAIAAAUIA1AAQAEAAAAAEIAACSQAAAEgEAAIg1AAIAAAVIA8AAIAAAdIg8AAIAAA1gAk6AiIAcAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIAAggIgdAAgAl0AiIAcAAIAAghIgcAAgAk6gcIAdAAIAAgfIgBgBIgcAAgAl0gcIAcAAIAAggIgcAAgABFCGQAHgDAJgBIAAiBIAaAAIAAB6QAKgEAKgCIAAiXIgqAAQgEAAAAgEIAAhwQAAgFAEAAIBpAAQAEAAAAAFIAABwQAAAEgEAAIgjAAIAAAxIAlAAIAAAcIglAAIAABCQAVgHANgGIALAcQgnAUhVASgABxg+IA4AAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIAAg/Ig5AAgAF8BjQgEhPgOhTIAagDQARBTACBSgAC6BUQAkhIAAhNIAdACQgGBfgfA7g");
	this.shape_2.setTransform(70.075,0.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,1,1).p("AE+hiIAADeQAAAGgDAEQgIAGghgKIAAAfQAsAKAOgKQAOgJACgVIAAjlIA5AAIAAgcIhUAAIAAglIgfAAIAAAlIhSAAIAAAcIA3AAIAABOQgBB3hBAwIAZAUQAfgeAUgsQASg0ACg9IAAhOgABVCCQgJABgHADIALAcQBVgSAngUIgLgcQgNAGgVAHIAAhCIAlAAIAAgcIglAAIAAgxIAjAAQAEAAAAgEIAAhwQAAgFgEAAIhpAAQgEAAAAAFIAABwQAAAEAEAAIAqAAIAACXQgKACgKAEIAAh6IgaAAgABxh+IA5AAIAAA/QAAABgBAAIg4AAgADehBQAABNgkBIIAcAHQAfg7AGhfgAFqg/QAOBTAEBPIAbAAQgChSgRhTgAlYByIAAA1IAeAAIAAg1IA8AAIAAgdIg8AAIAAgVIA1AAQAEAAAAgEIAAiSQAAgEgEAAIg1AAIAAgUIA+AAIAAgdIg+AAIAAgbIgeAAIAAAbIg8AAIAAAdIA8AAIAAAUIg0AAQgEAAAAAEIAACSQAAAEAEAAIA0AAIAAAVIg+AAIAAAdgAi2hXIAVAAQAEAAAAAGIAADPQAAAMAGAHQAKAOARADIAMAAQANAAAKgHQAIgFAEgNQACgNADhCIgfgFIAABDQAAAEgDAFQgEABgDABIgCAAQgEAAgEgEQgEgEABgGIAAjgQAAgMgLABIgtAAIAAgtIgfAAIAAAtIggAAIAAAfIAgAAIAAAqQgBCKg9A3IAcATQAvg1AOhiQABgeADgfgAk6g8IAcAAIABABIAAAfIgdAAgAk6ABIAdAAIAAAgQAAABgBAAIgcAAgAlYgcIgcAAIAAggIAcAAgAlYAiIgcAAIAAghIAcAAg");
	this.shape_3.setTransform(70.075,0.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ADFCTQBBgwABh3IAAhOIg3AAIAAgcIBSAAIAAglIAfAAIAAAlIBUAAIAAAcIg5AAIAADlQgCAVgOAJQgOAKgsgKIAAgfQAhAKAIgGQADgEAAgGIAAjeIgZAAIAABOQgCA9gSA0QgUAsgfAegAkTCUQA9g3ABiKIAAgqIggAAIAAgfIAgAAIAAgtIAfAAIAAAtIAtAAQALgBAAAMIAADgQgBAGAEAEQAEAEAEAAIACAAIAHgCQADgFAAgEIAAhDIAfAFQgDBCgCANQgEANgIAFQgKAHgNAAIgMAAQgRgDgKgOQgGgHAAgMIAAjPQAAgGgEAAIgVAAIAAAqIgEA9QgOBigvA1gAlYCnIAAg1Ig+AAIAAgdIA+AAIAAgVIg0AAQgEAAAAgEIAAiSQAAgEAEAAIA0AAIAAgUIg8AAIAAgdIA8AAIAAgbIAeAAIAAAbIA+AAIAAAdIg+AAIAAAUIA1AAQAEAAAAAEIAACSQAAAEgEAAIg1AAIAAAVIA8AAIAAAdIg8AAIAAA1gAk6AiIAcAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIAAggIgdAAgAl0AiIAcAAIAAghIgcAAgAk6gcIAdAAIAAgfIgBgBIgcAAgAl0gcIAcAAIAAggIgcAAgABFCGQAHgDAJgBIAAiBIAaAAIAAB6QAKgEAKgCIAAiXIgqAAQgEAAAAgEIAAhwQAAgFAEAAIBpAAQAEAAAAAFIAABwQAAAEgEAAIgjAAIAAAxIAlAAIAAAcIglAAIAABCQAVgHANgGIALAcQgnAUhVASgABxg+IA4AAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIAAg/Ig5AAgAF8BjQgEhPgOhTIAagDQARBTACBSgAC6BUQAkhIAAhNIAdACQgGBfgfA7g");
	this.shape_4.setTransform(70.075,0.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.chTrace, new cjs.Rectangle(-23.8,-20.7,165.8,39.2), null);


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


(lib.chArrow = function(mode,startPosition,loop) {
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AD4CLQAjgFAegVIAPAbQgmAWgmAGQAAgRgEgMgAjPCfIAAgeQAsALAKgJQACgEAAgFIAAiXIAgAAIAACfQgBAVgQAKQgKAGgQAAQgSAAgbgIgAFvCPIAMgaQAZAIAiAQIgLAaQglgSgXgGgAlnCfIgBgfQAZAHANAAIAMgCQAGgGAAgIIAAgNIhbAAIAAA1IgdAAIAAiwQABgJAJgBICCAAQAKABAAAJIAACSQAAAUgOAJQgIAGgUAAQgRAAgagFgAmLBOIBbAAIAAgZIhbAAgAmLACIAAAWIBbAAIAAgWQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBgBAAAAIhXAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABAAAAgABmCAQA1gHAfgIQAPgvAFggIAcAHQgFAcgJAjIAegKIAMAcQg9AWhZANgAB2AtIAegHQAMAdAFAnIgeAHQgGgqgLgagAEVBwQgDAAAAgFIAAjIQAAgDADAAIAoAAQALgZACgFIg/AAIAAgdICmAAIAAAdIhKAAQgCAHgEAJQgEAIgBAGIBJAAQAEAAAAADIAADIQAAAFgEAAgAEuBUIBdAAQABAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAIAAggIhfAAgAEuAXIBfAAIAAgfIhfAAgAEugkIBfAAIAAggIhfAAgAjrBvIAAh7IAeAAIAAB7gAB0AXQgFAAABgEIAAhzQgBgFAFAAIB6AAQAEAAAAAFIAABzQAAAEgEAAgACNgFQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAAAAAIBGAAIABgBIAAhEIhIAAgAmygnIAAgdIBtAAIgBgEQgFgMAAgFIAdgFQACANAFANIA/AAQAHgNAFgRIAaALIgHATIBkAAIAAAdgAjCh3IgpAAIAAABQgLARgKAKIgZgRQAZgZANgiIAbAKIgEAKIBvAAIAAAcIg1AAIALATIgYANQgKgUgJgMgAm1hvQAggWARgiIAaAOIgEAGIBVAAIAAAcIgsAAIAJARIgbALQgHgTgFgJIgdAAIgfAdgABqh+IAAgdICQAAIAAAdg");
	this.shape_2.setTransform(73.95,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,1,1).p("AEtgkIAAghIBgAAIAAAhgAGpBsIAAjJQAAgEgEAAIhJAAQACgGADgHQAFgJABgHIBKAAIAAgdIinAAIAAAdIBAAAQgCAFgLAYIgnAAQgFAAAAAEIAADJQAAAEAFAAICPAAQAEAAAAgEgAGNAzIAAAgQAAAAgBAAIhfAAIAAgggAEtAXIAAgfIBgAAIAAAfgABqibIAAAdICQAAIAAgdgADzATIAAh0QAAgEgFAAIh6AAQgFAAAAAEIAAB0QAAAEAFAAIB6AAQAFAAAAgEgAB2AtQAKAaAHAqIAegHQgFgngMgdgACNhJIBIAAIAABDIgCACIhEAAQgCAAAAgCgAC6BxQgfAIg1AHIAJAdQBagNA9gXIgMgcQgNAFgRAFQAKgiAEgcIgcgHQgFAfgPAwgAE5BxQgeAVgjAEQAEANAAARQAmgFAmgXgAFwCPQAWAFAkASIAMgZQgigRgZgGgAjCh3QAIAMAKAUIAZgNQgFgKgGgJIA0AAIAAgdIhvAAQABgEADgFIgagKQgNAhgZAaIAZARQAKgKALgRIAAgBgAjohFIg/AAQgFgMgCgNIgdAFQAAAFAFAMIABADIhuAAIAAAeIFOAAIAAgeIhkAAQAFgMACgGIgbgLQgEARgHAMgAlkh3QAGAJAHATIAagMQgEgIgEgIIAsAAIAAgdIhVAAQACgEABgBIgZgOQgRAhggAXIAWAVQABgBAegcgAmLBqIBbAAIAAANQAAAJgHAFQgEABgHABQgNAAgZgHIABAfQA3AKAQgLQAOgKAAgUIAAiRQAAgKgKAAIiCAAQgJAAgCAKIAACwIAeAAgAmLAYIAAgWQAAgCADAAIBXAAQABAAAAACIAAAWgAmLBOIAAgZIBbAAIAAAZgAjrgNIAAB7IAeAAIAAh7gAiXgdIAACWQAAAHgCADQgKAJgsgMIAAAfQAzAOATgMQARgKAAgVIAAifg");
	this.shape_3.setTransform(73.95,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AD4CLQAjgFAegVIAPAbQgmAWgmAGQAAgRgEgMgAjPCfIAAgeQAsALAKgJQACgEAAgFIAAiXIAgAAIAACfQgBAVgQAKQgKAGgQAAQgSAAgbgIgAFvCPIAMgaQAZAIAiAQIgLAaQglgSgXgGgAlnCfIgBgfQAZAHANAAIAMgCQAGgGAAgIIAAgNIhbAAIAAA1IgdAAIAAiwQABgJAJgBICCAAQAKABAAAJIAACSQAAAUgOAJQgIAGgUAAQgRAAgagFgAmLBOIBbAAIAAgZIhbAAgAmLACIAAAWIBbAAIAAgWQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBgBAAAAIhXAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABAAAAgABmCAQA1gHAfgIQAPgvAFggIAcAHQgFAcgJAjIAegKIAMAcQg9AWhZANgAB2AtIAegHQAMAdAFAnIgeAHQgGgqgLgagAEVBwQgDAAAAgFIAAjIQAAgDADAAIAoAAQALgZACgFIg/AAIAAgdICmAAIAAAdIhKAAQgCAHgEAJQgEAIgBAGIBJAAQAEAAAAADIAADIQAAAFgEAAgAEuBUIBdAAQABAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAIAAggIhfAAgAEuAXIBfAAIAAgfIhfAAgAEugkIBfAAIAAggIhfAAgAjrBvIAAh7IAeAAIAAB7gAB0AXQgFAAABgEIAAhzQgBgFAFAAIB6AAQAEAAAAAFIAABzQAAAEgEAAgACNgFQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAAAAAIBGAAIABgBIAAhEIhIAAgAmygnIAAgdIBtAAIgBgEQgFgMAAgFIAdgFQACANAFANIA/AAQAHgNAFgRIAaALIgHATIBkAAIAAAdgAjCh3IgpAAIAAABQgLARgKAKIgZgRQAZgZANgiIAbAKIgEAKIBvAAIAAAcIg1AAIALATIgYANQgKgUgJgMgAm1hvQAggWARgiIAaAOIgEAGIBVAAIAAAcIgsAAIAJARIgbALQgHgTgFgJIgdAAIgfAdgABqh+IAAgdICQAAIAAAdg");
	this.shape_4.setTransform(73.95,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.chArrow, new cjs.Rectangle(-23.8,-20.7,165.8,39.2), null);


// stage content:
(lib.myAnimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// helper
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AERA5QgOgRAAglQAAgoAPgTQANgQAXAAQARAAALAJQALAJACASIgSABQgCgLgEgEQgHgIgLAAQgIAAgHAFQgIAGgFAMQgFALAAAVQAHgJAJgEQAJgGAKAAQASABAMANQAMALAAAVQAAAOgFALQgGAMgKAGQgLAGgNAAQgVAAgOgQgAEfACQgIAIAAAOQAAAJAEAIQAEAJAHAEQAHAFAHgBQALABAIgKQAIgIAAgQQAAgPgIgIQgHgIgMAAQgMAAgJAIgACjA6QgOgSAAgoQAAgZAFgPQAFgPAKgJQALgIAPAAQAMAAAIAEQAJAFAGAJQAFAJAEAMQADANAAAUQAAAZgFAPQgFAQgLAJQgKAIgQAAQgUAAgMgPgACwgwQgJAOAAAiQAAAjAIAMQAIALAMAAQAMAAAJgLQAIgMAAgjQAAgigIgMQgJgMgMAAQgMABgHAJgAgDA+QgMgLgCgTIARgCQADAQAHAGQAHAGALAAQAMAAAJgIQAIgJAAgMQAAgNgIgHQgIgIgMAAIgMABIACgOIADAAQALAAAJgFQAJgGAAgMQAAgKgHgGQgGgHgLAAQgKAAgHAHQgHAGgCANIgQgDQADgSAMgJQAKgKARAAQAMAAAKAFQAJAFAGAJQAFAIAAAKQAAAJgFAIQgFAIgKAEQANADAHAIQAHAJAAAOQAAATgOANQgNANgVAAQgTAAgMgLgAjhA6QgOgSAAgoQAAgZAFgPQAGgPAKgJQAKgIAQAAQALAAAJAEQAJAFAFAJQAGAJADAMQADANAAAUQAAAZgFAPQgFAQgKAJQgLAIgPAAQgVAAgMgPgAjUgwQgJAOAAAiQAAAjAIAMQAJALAMAAQAMAAAIgLQAIgMAAgjQAAgigIgMQgIgMgMAAQgNABgHAJgABnBHIAAgVIAUAAIAAAVgAiCBHQAAgHACgGQADgKAIgJQAIgJAPgMQAYgTAIgLQAIgLAAgKQAAgKgHgHQgIgIgMAAQgMAAgIAIQgIAHAAAOIgSgCQACgUAMgKQAMgLAVAAQAUAAAMALQAMAMAAAQQAAAJgDAJQgEAHgIAJQgIAJgTAQIgUASIgIAKIBGAAIAAARgAlgBHQAAgHACgGQADgKAIgJQAIgJAPgMQAYgTAIgLQAIgLAAgKQAAgKgHgHQgIgIgMAAQgMAAgIAIQgIAHAAAOIgSgCQACgUAMgKQAMgLAVAAQAUAAAMALQAMAMAAAQQAAAJgDAJQgEAHgIAJQgIAJgTAQIgUASIgIAKIBGAAIAAARg");
	this.shape.setTransform(1556.075,53.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("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");
	this.shape_1.setTransform(1527.4,22.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// UI
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("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");
	this.shape_2.setTransform(296.8,75.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(10,1,1).p("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");
	this.shape_3.setTransform(296.8,75.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("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");
	this.shape_4.setTransform(296.8,75.8);

	this.chArrow = new lib.chArrow();
	this.chArrow.name = "chArrow";
	this.chArrow.parent = this;
	this.chArrow.setTransform(1104.25,811.25);

	this.chGround = new lib.chGround();
	this.chGround.name = "chGround";
	this.chGround.parent = this;
	this.chGround.setTransform(926.5,858.25);

	this.chTrace = new lib.chTrace();
	this.chTrace.name = "chTrace";
	this.chTrace.parent = this;
	this.chTrace.setTransform(1104.25,858.25);

	this.slBB = new lib.slBB();
	this.slBB.name = "slBB";
	this.slBB.parent = this;
	this.slBB.setTransform(84.35,375.5);

	this.btnGo = new lib.btnGo();
	this.btnGo.name = "btnGo";
	this.btnGo.parent = this;
	this.btnGo.setTransform(1418.45,669.15,1.4,1.4);
	new cjs.ButtonHelper(this.btnGo, 0, 1, 2, false, new lib.btnGo(), 3);

	this.btnPlayStop = new lib.btnPlayStop();
	this.btnPlayStop.name = "btnPlayStop";
	this.btnPlayStop.parent = this;
	this.btnPlayStop.setTransform(1453.45,669.15,1.4,1.4);
	new cjs.ButtonHelper(this.btnPlayStop, 0, 1, 2, false, new lib.btnPlayStop(), 3);

	this.btnReset = new lib.btnReset();
	this.btnReset.name = "btnReset";
	this.btnReset.parent = this;
	this.btnReset.setTransform(1494.05,669.15,1.4,1.4);
	new cjs.ButtonHelper(this.btnReset, 0, 1, 2, false, new lib.btnReset(), 3);

	this.chSlow = new lib.chSlow();
	this.chSlow.name = "chSlow";
	this.chSlow.parent = this;
	this.chSlow.setTransform(1454.55,743.4);

	this.rbLookA = new lib.rbLookA();
	this.rbLookA.name = "rbLookA";
	this.rbLookA.parent = this;
	this.rbLookA.setTransform(1310.75,811.25);

	this.rbLookB = new lib.rbLookB();
	this.rbLookB.name = "rbLookB";
	this.rbLookB.parent = this;
	this.rbLookB.setTransform(1463.55,811.25);

	this.rbLookC = new lib.rbLookC();
	this.rbLookC.name = "rbLookC";
	this.rbLookC.parent = this;
	this.rbLookC.setTransform(1310.7,858.25);

	this.rbLookG = new lib.rbLookG();
	this.rbLookG.name = "rbLookG";
	this.rbLookG.parent = this;
	this.rbLookG.setTransform(1463.55,858.25);

	this.chMC = new lib.chMC();
	this.chMC.name = "chMC";
	this.chMC.parent = this;
	this.chMC.setTransform(926.5,811.25);

	this.slM2 = new lib.slM2();
	this.slM2.name = "slM2";
	this.slM2.parent = this;
	this.slM2.setTransform(1397.25,548.35);

	this.slCameraRR = new lib.theSlider();
	this.slCameraRR.name = "slCameraRR";
	this.slCameraRR.parent = this;
	this.slCameraRR.setTransform(1350,939.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.slCameraRR},{t:this.slM2},{t:this.chMC},{t:this.rbLookG},{t:this.rbLookC},{t:this.rbLookB},{t:this.rbLookA},{t:this.chSlow},{t:this.btnReset},{t:this.btnPlayStop},{t:this.btnGo},{t:this.slBB},{t:this.chTrace},{t:this.chGround},{t:this.chArrow},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// btn3D
	this.btn3D = new lib.btn3D();
	this.btn3D.name = "btn3D";
	this.btn3D.parent = this;
	new cjs.ButtonHelper(this.btn3D, 0, 1, 2, false, new lib.btn3D(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn3D).wait(1));

	// 圖層_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.6)").s().p("EBTbAUkIAAtnMA8uAAAIAANngEiQIAQ2MAAAglZMA8uAAAMAAAAlZg");
	this.shape_5.setTransform(660.3,462.325);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(537.8,450,1086.2,509);
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