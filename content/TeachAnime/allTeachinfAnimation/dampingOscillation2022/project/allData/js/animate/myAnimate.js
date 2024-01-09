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


(lib.btnStop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFKB/QgcATgvAVIgSgbQAsgQAagRQgcgbgZgvIAZgOQAVArAeAbQArgjAKgqIgBgDIgHgBIh5AAIAAgdICSAAIARAOQgLBEg0AwQAfATAyAJIgPAeQg5gRghgXgAmxChIAAgcICUAAIAAgRIiDAAIAAgcICDAAIAAgUIh0AAQgEAAAAgEIAAh3QAAgDAEAAIB0AAIAAgTIiXAAIAAgcICXAAIAAgRQhFADgvgBIgCggQA7ACBNgFQBQgFAogFIAEAdQgfAHhIAEIgIABIAAATICVAAIAAAcIiVAAIAAATIByAAQAEAAAAADIAAB3QAAAEgEAAIhyAAIAAAUICBAAIAAAcIiBAAIAAARICSAAIAAAcgAj+AoIBXAAIABgBIAAgUIhYAAgAl3AnQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIBZAAIAAgVIhaAAgAj+gIIBYAAIAAgWIhYAAgAl3gIIBaAAIAAgWIhaAAgABwCeIAAh6QABgJAJAAIBiAAQAKAAAAAJIAABhQAAAKgKAAIhPAAIAAAPgACNA8IAAA2IA2AAQAFgBAAgEIAAgxQAAgFgEAAIgyAAQgFAAAAAFgAB3AKIAAgbIBmAAIAAAbgADpg0IAMgIQAYgVAAgnIAAgeQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBIAEgBIBlAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAIADAFIAABLQAAAIACABQACAFAJgBIADAAIAIgDQADgBAAgIIAAgYIAbADIgCAoQgDAIgEAFQgKAJgKgBIgZAAQgOABgGgJQgIgKAAgKIAAg+QAAgEgEAAIgzAAQgBABAAAAQgBABAAAAQAAAAgBAAQAAABAAAAIAAAOQgBA3gsAbgAB3giIAAgcIBmAAIAAAcgABnhPIAAgdICHAAIAAAdgAB4h9IAAgeIBnAAIAAAeg");
	this.shape.setTransform(0.075,0.7);

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


(lib.btnPlay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AD3CQQA2gmAVgWIAIgKQghg1gGg/IgKAUIgfgIQAjhAAChHIAfABIgFAnIB8AAIAAAfIgbAAQAABegrBIQAgAqAmAfIgcAVQgpgogRgWIgEgFQgqAtgiAXgAFeAtQAUgkAFgiQAGgbgBgqIhAAAQADBYAfAzgAjbCkIAAgpIhUAAIAAgcIBUAAIAAgXIhHAAIAAgcIAmAAIgHgcIgsAAIAAgbIBUAAIAAgVIhJAAIAAgaIBJAAIAAgVIhLAAQgDAAAAgEIAAhFQABgEACAAIC0AAQAEAAAAAEIAABFQAAAEgEAAIhLAAIAAAVIBLAAIAAAaIhLAAIAAAVIBWAAIAAAbIgtAAIgDAPIgEANIAqAAIAAAcIhMAAIAAAXIBWAAIAAAcIhWAAIAAApgAjgAsIAmAAIAIgcIg0AAQAEAPACANgAikhmIAYAAQABAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAIAAgbQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAIgYAAgAjYhmIAaAAIAAgeIgaAAgAkNiCIAAAcIAbAAIAAgeIgbAAQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAABABgAl+CkIAAhxIgBAEQgOAggOASIgZgJQAeguARgwIgrAAIAAgbIAyAAIAAhjIgoACIgFgaQA+gEAvgIIAEAaIgoAIIAABlIAmAAIAAAbIgkAAQAZAbAVAaIgVATQgMgSgPgTIAAB/gACfCcIgCgjQAUAHAKACQANACABgFQAGgEAEgOQADgHAAgOQAFhogEgGIgEgBIgoAAQgEAtgFAnQgQBGgOAbIgfgHQAphYAAhpIAAg0IgjAAIAAgfIBAAAIAAgoIAfAAIAAAoIBAAAIAAAfIhdAAIAAAnIA+AAIAHACQAEACAAANIgBBoQgDBLgXARQgHAFgNAAQgQAAgYgHgAmrhmIAYgGQAJAbAEAlIgZAFQgGgpgGgWgAlagvQAIghABghIAaADQgGAngGAdg");
	this.shape.setTransform(-0.125,0.7);

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


(lib.theSliderBB = function(mode,startPosition,loop) {
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
	this.shape.setTransform(-102.275,2.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("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");
	this.shape_1.setTransform(-102.275,2.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("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");
	this.shape_2.setTransform(-102.275,2.725);

	this.valueText = new cjs.Text("0", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(172,-14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.valueText},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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

}).prototype = getMCSymbolPrototype(lib.theSliderBB, new cjs.Rectangle(-184,-37.6,458,80.7), null);


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


// stage content:
(lib.myAnimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// helper
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AWsjoIAAAgIgDADIllAAIAAgjgAREkQIAAggIFoAAIAAAggAXqidIAAi+QAAgDgJgEInVAAQgDAAgDAHIAAC+QAAAKAGAAIHVAAQAJAAAAgKgAU+ACQg7BEhIAjQgMADgQAJIAmAyQBwg4BOhtIBLAAQADAAADAGQAEAJAAAyQgEANgJAMQglAThIgcIgDBFQBOASAvgJQAVgJAQgQQAWgcAAh/QAAgWgJgGQgKgDgDAAImQAAQADgKANgPIGQAAIAAg2Io8AAIAAA2IBqAAQglAyhVAhIAfAvQAygWAsgfIBeAAQhUA4gjAQQgJAAgGAGQggAJglAKIAZA4QCQgpBwhwgAUpExIAAhCIB9AAQAJAAAAAKIAAA4gANdExIgsAAIAAA4ILlAAIAAg4IgpAAIAAhnQAAgTgVgDIppAAQgSAAAAAWgAJNBZQgMhUgDgrIC4AAIAAhCImgAAIAAioQAAgKAKAAIGDAAIAAhBIm7AAQgTAAAAASIAAFFQAABggQBCQgTBFg4BUIA8AcQBgiDAAjCIAAg0IAsAAIAAFHQglAKgvAGIAMBBQCggVBngsIgWg/QgvANg4ATIAAk4IA4AAQAJDEBxCGQAcAgAsAuIA7goQhwhegmhUQBYgyA+gyIgog0QgvAnhVAygANHk8QAvAWA8A1IAlg1Qg4gygygZgAMuisQAoAWA/AyIAlg2Qg3gugvgZgAOShIQgcBghIBRIA5AiQBBhFAph8gAOcExIAAg4QAAgKAFAAIB+AAIAABCgARdExIAAhCICNAAIAABCgAF/jeIAAA+IFOAAIAAg+gABvALQgyAcgvATIAjA7QAcgMAigTIAAC1QAAANgGAJQgNAKhEgWIAABEQBUAWAigSQAggTADgvIAAjnQA4gcAWgTIgmg3QgMAJgcAQIAAiQIBIAAIAAhFIhIAAIAAiDIhCAAIAACDIhaAAIAABFIBaAAgAqNkHQAAgJAJAAIHnAAQANAAAAAJIAABLQAAANgNAAInwAAgAhnlVIpTAAQgVAAgEAZIAAFHQAAC1g+CAIBFAgQAWgpAQhOQAVheAEhkIAAiSIImAAQAcAAAAgcIAAi1QAAgWgcgDgAn0COQD3g4CihIIgchAQiNBAjwA8IAAiMIhJAAIAAE0QAABCAmAcQATANAfAAIE8AAQAfAAATgEQAMgDAWgZQATgcADiMIhIgNQAABqgMAQQgKATglAAIkHAAQgcAAgJgNQgDgJgDgZgAyuiKIAAiDQAAgKAKAAIDbAAQAJAAAAAKIAACDgAzyEbIhLAAIAABFIH3AAIAAhFIg1AAIAApgQAAgWgZAAIlIAAQgWAAAAAWgAyuBKIAAiPIDuAAIAACPgAyuEbIAAiNIDuAAIAACNgA1vkgQASAAgGAQIg+CoIAAAEQAAADAAADQBEByAHA5QAAAcgNAWQgJAMgTADQgpAKgogcIAAmZQAAgDADAAgA3QDDQBBATAwgJQAbgKAZgcQAmgygWhdQgMg4gvg7QgDgJADgTIBIjIIgvgjIjPAAQgCAAgEAEQgDADAAADIAALHIBFAAg");
	this.shape.setTransform(185.7,66.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AJ2EkQhxiGgJjEIg5AAIAAE4QA5gTAugNIAXA/QhoAsifAVIgNhBQAvgGAmgKIAAlHIgsAAIAAA0QAADChhCDIg7gcQA4hUAThFQAPhCABhgIAAlFQgBgSAUAAIG7AAIAABBImDAAQgKAAAAAKIAACoIGgAAIAABCIi4AAQADArAMBUQBUgyAwgnIAoA0Qg+AyhYAyQAmBUBwBeIg7AoIhIhOgA4VFvIAArHQAAgDADgDQAEgEADAAIDOAAIAvAjIhIDIQgEATAEAJQAvA7AMA4QAWBdglAyQgaAcgbAKQgwAJhBgTIAACsgA3QkdIAAGZQApAcAogKQATgDAKgMQAMgWAAgcQgGg5hFhyIAAgGIAAgEIA/ioQAFgQgSAAIheAAQgBAAAAAAQgBABAAAAQgBAAAAABQAAABAAAAgAMxFpIAAg4IAsAAIAAhnQAAgWATAAIJoAAQAVADAAATIAABnIApAAIAAA4gAUpExICFAAIAAg4QAAgKgJAAIh8AAgARdExICNAAIAAhCIiNAAgAObD5IAAA4ICDAAIAAhCIh9AAQgFAAgBAKgAAXFZIAAhEQBFAWAMgKQAHgJAAgNIAAi1QgjATgcAMIgig7QAvgTAygcIAAi0IhbAAIAAhFIBbAAIAAiDIBBAAIAACDIBIAAIAABFIhIAAIAACQQAdgQAMgJIAlA3QgVATg5AcIAADnQgDAvgfATQgQAIgaAAQgfAAgugMgAsRFAQA/iAgBi1IAAlHQAEgZAVAAIJSAAQAcADAAAWIAAC1QAAAcgcAAIomAAIAACSQgDBkgWBeQgQBOgVApgAqOkHIAABYIHxAAQANAAAAgNIAAhLQAAgJgNAAInoAAQgJAAAAAJgA09FgIAAhFIBLAAIAApgQAAgWAVAAIFJAAQAZAAAAAWIAAJgIA1AAIAABFgAytEbIDtAAIAAiNIjtAAgAytBKIDtAAIAAiPIjtAAgAytkNIAACDIDtAAIAAiDQAAgKgJAAIjbAAQgJAAAAAKgAnlFdQgfAAgTgNQgmgcAAhCIAAk0IBIAAIAACMQDxg8CMhAIAdBAQijBIj3A4IAABYQAEAZADAJQAJANAcAAIEGAAQAmAAAJgTQANgQAAhqIBIANQgDCMgTAcQgWAZgNADQgSAEgfAAgASfB1QAQgJAMgDQBIgjA7hEIhUAAQhwBwiRApIgZg4QAmgKAggJQAFgGAKAAQAjgQBUg4IheAAQgsAfgyAWIgfgvQBUghAmgyIhrAAIAAg2II9AAIAAA2ImRAAQgMAPgDAKIGQAAIANADQAIAGABAWQgBB/gVAcQgQAQgVAJQgvAJhPgSIADhFQBJAcAlgTQAJgMAEgNQgBgygDgJQgDgGgDAAIhLAAQhOBthxA4gAMuBpQBIhRAchgIA+ASQgoB8hBBFgAMuisIAlg1QAwAZA4AuIgmA2Qg+gygpgWgAQMiTQgGAAgBgKIAAi+QAEgHADAAIHUAAQAKAEAAADIAAC+QAAAKgKAAgAREjFIFlAAIACgDIAAggIlnAAgAREkQIFnAAIAAggIlnAAgAF/igIAAg+IFOAAIAAA+gANHk8IAlg1QAyAZA5AyIglA1Qg8g1gvgWg");
	this.shape_1.setTransform(185.7,66.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AJ2EkQhxiGgJjEIg5AAIAAE4QA5gTAugNIAXA/QhoAsifAVIgNhBQAvgGAmgKIAAlHIgsAAIAAA0QAADChhCDIg7gcQA4hUAThFQAPhCABhgIAAlFQgBgSAUAAIG7AAIAABBImDAAQgKAAAAAKIAACoIGgAAIAABCIi4AAQADArAMBUQBUgyAwgnIAoA0Qg+AyhYAyQAmBUBwBeIg7AoIhIhOgA4VFvIAArHQAAgDADgDQAEgEADAAIDOAAIAvAjIhIDIQgEATAEAJQAvA7AMA4QAWBdglAyQgaAcgbAKQgwAJhBgTIAACsgA3QkdIAAGZQApAcAogKQATgDAKgMQAMgWAAgcQgGg5hFhyIAAgGIAAgEIA/ioQAFgQgSAAIheAAQgBAAAAAAQgBABAAAAQgBAAAAABQAAABAAAAgAMxFpIAAg4IAsAAIAAhnQAAgWATAAIJoAAQAVADAAATIAABnIApAAIAAA4gAUpExICFAAIAAg4QAAgKgJAAIh8AAgARdExICNAAIAAhCIiNAAgAObD5IAAA4ICDAAIAAhCIh9AAQgFAAgBAKgAAXFZIAAhEQBFAWAMgKQAHgJAAgNIAAi1QgjATgcAMIgig7QAvgTAygcIAAi0IhbAAIAAhFIBbAAIAAiDIBBAAIAACDIBIAAIAABFIhIAAIAACQQAdgQAMgJIAlA3QgVATg5AcIAADnQgDAvgfATQgQAIgaAAQgfAAgugMgAsRFAQA/iAgBi1IAAlHQAEgZAVAAIJSAAQAcADAAAWIAAC1QAAAcgcAAIomAAIAACSQgDBkgWBeQgQBOgVApgAqOkHIAABYIHxAAQANAAAAgNIAAhLQAAgJgNAAInoAAQgJAAAAAJgA09FgIAAhFIBLAAIAApgQAAgWAVAAIFJAAQAZAAAAAWIAAJgIA1AAIAABFgAytEbIDtAAIAAiNIjtAAgAytBKIDtAAIAAiPIjtAAgAytkNIAACDIDtAAIAAiDQAAgKgJAAIjbAAQgJAAAAAKgAnlFdQgfAAgTgNQgmgcAAhCIAAk0IBIAAIAACMQDxg8CMhAIAdBAQijBIj3A4IAABYQAEAZADAJQAJANAcAAIEGAAQAmAAAJgTQANgQAAhqIBIANQgDCMgTAcQgWAZgNADQgSAEgfAAgASfB1QAQgJAMgDQBIgjA7hEIhUAAQhwBwiRApIgZg4QAmgKAggJQAFgGAKAAQAjgQBUg4IheAAQgsAfgyAWIgfgvQBUghAmgyIhrAAIAAg2II9AAIAAA2ImRAAQgMAPgDAKIGQAAIANADQAIAGABAWQgBB/gVAcQgQAQgVAJQgvAJhPgSIADhFQBJAcAlgTQAJgMAEgNQgBgygDgJQgDgGgDAAIhLAAQhOBthxA4gAMuBpQBIhRAchgIA+ASQgoB8hBBFgAMuisIAlg1QAwAZA4AuIgmA2Qg+gygpgWgAQMiTQgGAAgBgKIAAi+QAEgHADAAIHUAAQAKAEAAADIAAC+QAAAKgKAAgAREjFIFlAAIACgDIAAggIlnAAgAREkQIFnAAIAAggIlnAAgAF/igIAAg+IFOAAIAAA+gANHk8IAlg1QAyAZA5AyIglA1Qg8g1gvgWg");
	this.shape_2.setTransform(185.7,66.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AJ2EkQhxiGgJjEIg5AAIAAE4QA5gTAugNIAXA/QhoAsifAVIgNhBQAvgGAmgKIAAlHIgsAAIAAA0QAADChhCDIg7gcQA4hUAThFQAPhCABhgIAAlFQgBgSAUAAIG7AAIAABBImDAAQgKAAAAAKIAACoIGgAAIAABCIi4AAQADArAMBUQBUgyAwgnIAoA0Qg+AyhYAyQAmBUBwBeIg7AoIhIhOgA4VFvIAArHQAAgDADgDQAEgEADAAIDOAAIAvAjIhIDIQgEATAEAJQAvA7AMA4QAWBdglAyQgaAcgbAKQgwAJhBgTIAACsgA3QkdIAAGZQApAcAogKQATgDAKgMQAMgWAAgcQgGg5hFhyIAAgGIAAgEIA/ioQAFgQgSAAIheAAQgBAAAAAAQgBABAAAAQgBAAAAABQAAABAAAAgAMxFpIAAg4IAsAAIAAhnQAAgWATAAIJoAAQAVADAAATIAABnIApAAIAAA4gAUpExICFAAIAAg4QAAgKgJAAIh8AAgARdExICNAAIAAhCIiNAAgAObD5IAAA4ICDAAIAAhCIh9AAQgFAAgBAKgAAXFZIAAhEQBFAWAMgKQAHgJAAgNIAAi1QgjATgcAMIgig7QAvgTAygcIAAi0IhbAAIAAhFIBbAAIAAiDIBBAAIAACDIBIAAIAABFIhIAAIAACQQAdgQAMgJIAlA3QgVATg5AcIAADnQgDAvgfATQgQAIgaAAQgfAAgugMgAsRFAQA/iAgBi1IAAlHQAEgZAVAAIJSAAQAcADAAAWIAAC1QAAAcgcAAIomAAIAACSQgDBkgWBeQgQBOgVApgAqOkHIAABYIHxAAQANAAAAgNIAAhLQAAgJgNAAInoAAQgJAAAAAJgA09FgIAAhFIBLAAIAApgQAAgWAVAAIFJAAQAZAAAAAWIAAJgIA1AAIAABFgAytEbIDtAAIAAiNIjtAAgAytBKIDtAAIAAiPIjtAAgAytkNIAACDIDtAAIAAiDQAAgKgJAAIjbAAQgJAAAAAKgAnlFdQgfAAgTgNQgmgcAAhCIAAk0IBIAAIAACMQDxg8CMhAIAdBAQijBIj3A4IAABYQAEAZADAJQAJANAcAAIEGAAQAmAAAJgTQANgQAAhqIBIANQgDCMgTAcQgWAZgNADQgSAEgfAAgASfB1QAQgJAMgDQBIgjA7hEIhUAAQhwBwiRApIgZg4QAmgKAggJQAFgGAKAAQAjgQBUg4IheAAQgsAfgyAWIgfgvQBUghAmgyIhrAAIAAg2II9AAIAAA2ImRAAQgMAPgDAKIGQAAIANADQAIAGABAWQgBB/gVAcQgQAQgVAJQgvAJhPgSIADhFQBJAcAlgTQAJgMAEgNQgBgygDgJQgDgGgDAAIhLAAQhOBthxA4gAMuBpQBIhRAchgIA+ASQgoB8hBBFgAMuisIAlg1QAwAZA4AuIgmA2Qg+gygpgWgAQMiTQgGAAgBgKIAAi+QAEgHADAAIHUAAQAKAEAAADIAAC+QAAAKgKAAgAREjFIFlAAIACgDIAAggIlnAAgAREkQIFnAAIAAggIlnAAgAF/igIAAg+IFOAAIAAA+gANHk8IAlg1QAyAZA5AyIglA1Qg8g1gvgWg");
	this.shape_3.setTransform(185.7,66.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("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");
	this.shape_4.setTransform(1351,774.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("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");
	this.shape_5.setTransform(1351,774.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("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");
	this.shape_6.setTransform(1351,774.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// UI
	this.btnStop = new lib.btnStop();
	this.btnStop.name = "btnStop";
	this.btnStop.parent = this;
	this.btnStop.setTransform(1447.9,207.4);
	new cjs.ButtonHelper(this.btnStop, 0, 1, 2, false, new lib.btnStop(), 3);

	this.btnPlay = new lib.btnPlay();
	this.btnPlay.name = "btnPlay";
	this.btnPlay.parent = this;
	this.btnPlay.setTransform(1417.75,207.4);
	new cjs.ButtonHelper(this.btnPlay, 0, 1, 2, false, new lib.btnPlay(), 3);

	this.slCameraRR = new lib.theSlider();
	this.slCameraRR.name = "slCameraRR";
	this.slCameraRR.parent = this;
	this.slCameraRR.setTransform(1350,850);

	this.sl01 = new lib.theSliderBB();
	this.sl01.name = "sl01";
	this.sl01.parent = this;
	this.sl01.setTransform(1350,122.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sl01},{t:this.slCameraRR},{t:this.btnPlay},{t:this.btnStop}]}).wait(1));

	// btn3D
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("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");
	this.shape_7.setTransform(101.2,875.708);

	this.btn3D = new lib.btn3D();
	this.btn3D.name = "btn3D";
	this.btn3D.parent = this;
	new cjs.ButtonHelper(this.btn3D, 0, 1, 2, false, new lib.btn3D(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn3D},{t:this.shape_7}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(800,450,824,450);
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