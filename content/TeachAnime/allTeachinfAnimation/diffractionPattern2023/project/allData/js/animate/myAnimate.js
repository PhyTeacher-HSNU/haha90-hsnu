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


(lib.btnPlus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgxDIIAAiWIiWAAIAAhjICWAAIAAiWIBjAAIAACWICWAAIAABjIiWAAIAACWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000066","#0066FF"],[0,1],30,30,30,-29.9).s("#00FFFF").ss(3,1,1).rr(-30,-30,60,60,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000066","#00FFFF"],[0,1],30,30,30,-29.9).s("#00FFFF").ss(3,1,1).rr(-30,-30,60,60,10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF00FF").s("#FF00FF").ss(3,1,1).rr(-30,-30,60,60,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2,p:{rotation:0}}]},1).to({state:[{t:this.shape_2,p:{rotation:180}}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-31.5,63,63);


(lib.btnMinus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnzBkIAAjHIPnAAIAADHg");
	this.shape.setTransform(0,0,0.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000066","#0066FF"],[0,1],30,30,30,-29.9).s("#00FFFF").ss(3,1,1).rr(-30,-30,60,60,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000066","#00FFFF"],[0,1],30,30,30,-29.9).s("#00FFFF").ss(3,1,1).rr(-30,-30,60,60,10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF00FF").s("#FF00FF").ss(3,1,1).rr(-30,-30,60,60,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2,p:{rotation:0}}]},1).to({state:[{t:this.shape_2,p:{rotation:180}}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-31.5,63,63);


(lib.checker2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhXBYQglgkAAg0QAAgzAlgkQAkglAzAAQA0AAAkAlQAlAkAAAzQAAA0glAkQgkAlg0AAQgzAAgkglg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.checker2, new cjs.Rectangle(-12.5,-12.5,25,25), null);


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


(lib.screenBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgxvnIBjAAIAAfPIhjAAg");
	this.shape.setTransform(5,100);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgxPoIAA/PIBjAAIAAfPg");
	this.shape_1.setTransform(5,100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.screenBar, new cjs.Rectangle(-1,-1,12,202), null);


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


(lib.controlNSlit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.textNN = new cjs.Text("20", "36px 'Arial'", "#FFFFFF");
	this.textNN.name = "textNN";
	this.textNN.textAlign = "center";
	this.textNN.lineHeight = 42;
	this.textNN.lineWidth = 50;
	this.textNN.parent = this;
	this.textNN.setTransform(1464,518.05);

	this.btnPlus = new lib.btnPlus();
	this.btnPlus.name = "btnPlus";
	this.btnPlus.parent = this;
	this.btnPlus.setTransform(1513.3,533.8,0.6,0.6,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btnPlus, 0, 1, 2, false, new lib.btnPlus(), 3);

	this.btnMinus = new lib.btnMinus();
	this.btnMinus.name = "btnMinus";
	this.btnMinus.parent = this;
	this.btnMinus.setTransform(1414.8,533.8,0.6,0.6,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btnMinus, 0, 1, 2, false, new lib.btnMinus(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnMinus},{t:this.btnPlus},{t:this.textNN}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.controlNSlit, new cjs.Rectangle(1395.7,514.8,136.5999999999999,45.5), null);


(lib.slSS = function(mode,startPosition,loop) {
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
		sl.len = 80;
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
	this.shape.graphics.f("#FFFFFF").s().p("AhwBQQAegVALgNIAFgFQgTgdgDgjIgFALIgRgFQATgjABgoIARABIgCAWIBEAAIAAARIgOAAQAAA0gZAoQASAXAVASIgPALQgXgWgJgMIgDgDQgXAZgTANgAg3AZQALgUADgSQADgPgBgYIgjAAQACAyARAbgACnBTQg1gpgPgtIgCAIQgWA2g5AeIgMgNQBEgiAPhKIhNAAIAAgSIBOAAIABgJIAAgfIATAAIAAAfIgBAJIBOAAIAAASIhMAAIAEAVQAQAxA/AoIgQANIgLgIgAihBXIgBgUQALAFAFAAQAHABABgDQADgBADgJQABgDAAgIQADg6gCgDIgCAAIgWAAIgGAuQgIAngIAPIgRgEQAWgyAAg5IAAgdIgTAAIAAgRIAkAAIAAgXIARAAIAAAXIAjAAIAAARIgzAAIAAAWIAiAAIAEABQACACAAAHIgBA4QgBAqgNAKQgEADgHAAQgJAAgNgEg");
	this.shape.setTransform(-42.425,0.25);

	this.valueText = new cjs.Text("0", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(-7,377);

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
	this.btnS.setTransform(40,0,1.1,0.3);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// line
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(5,1,1).p("AmPAAIMfAA");
	this.shape_1.setTransform(40,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.slSS, new cjs.Rectangle(-61.8,-16,157.8,424.1), null);


(lib.slScreenDistance = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AjFBkQALgDAKgHQATgNAEgTIgrAAIAAgVIAsAAIAAglIgjAAIAAgUIAjAAQgHgMgJgLIAOgJIgwAAIAAAwQAAAngKAkQgFAfgJAQIgWgKQAXgxAAhIIAAhhQABgIAHAAIDBAAQAJABAAAHIAAAxQAAAJgJAAIggAAIANAJIgQAXIAqAAIAAAUIgjAAIAAAlIAqAAIAAAVIgqAAIAAA8IgWAAIAAg8Ig4AAQgIAogtAVgAiBAlIA3AAIAAglIg3AAgAhKgUIgIgGQAGgHAMgTIhVAAQAIAIANATIgJAFIA/AAgAjKhcIAAASIChAAQAEAAAAgEIAAgOQAAgDgEAAIifAAQAAAAgBAAQAAAAgBABQAAAAAAAAQAAABAAABgAAKBdQAHgDAGgBIAAhgIAVAAIAABbIAQgFIAAhpIgkAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBAAAAIAAhTQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIBXAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABIAABTQAAAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAIgfAAIAAAcIAkAAIAAAVIgkAAIAAAyIAggLIAJAUQgNAHgdAIQglAMgZAEgAAqgwIABABIAxAAIABgBIAAguIgzAAgACBBlIAAjPQABgIAGAAIBwAAIgDAWIhcAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAABAAABIAAAmIBUAAQAHABAAAGIAABVQAAAHgHAAIhUAAIAAAkQAAABAAABQAAAAABABQAAAAABAAQAAAAABAAIBgAAIAAAWIhxAAIgBAAQgGAAAAgIgACWAaIBEAAQAAABABAAQAAAAAAAAQABgBAAAAQAAgBAAgBIAAgzQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAIhEAAg");
	this.shape.setTransform(-46.75,-0.075);

	this.valueText = new cjs.Text("0", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(120.95,-14);

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
	this.btnS.setTransform(50.15,0,1.3,0.3,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// line
	this.bgLine = new lib.sliderBGLine();
	this.bgLine.name = "bgLine";
	this.bgLine.parent = this;
	this.bgLine.setTransform(0,0,0.6667,1);

	this.timeline.addTween(cjs.Tween.get(this.bgLine).wait(1));

}).prototype = getMCSymbolPrototype(lib.slScreenDistance, new cjs.Rectangle(-71.7,-16,294.7,33.1), null);


(lib.slInt = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ACOBgQgvATguAGIgIgVQAsgFAagJIAGgBQgagNgVgOIAIgVQAiAYAeANQAhgSARgTQACgCgEAAIh+AAIAAgVICTAAIAPANQgTAggoAZQAmAKArAEIgKAXQg3gKgpgPgAj2BhQAmgDASgKQAOgJABgUIAAgVIAXAAIAAAVQgCAOgEAKQgBAFgEADQgSAbg6AGgAheB2QgJgBgHgHQgGgHAAgHIAAg/IAWAAIAAAyQAAAGADADQAGAEAEAAIAmAAQACAAADgDQAEgBABgYIAWAFQgEAggEAEQgIAJgHAAgAAGBpQAOgVADgWQAFgSAAgbIAAhyQAAgGAFAAIBZAAIAAgRIAWAAIAAARIBgAAIAAAVIglAAIAAAXIAlAAIAAAVIglAAIAAAeQgBAKgKAAIhpAAQgKAAAAgKIAAgeIgcAAIAAA9QgBA2gVAlgABkgWQAAABAAABQAAAAAAAAQABABAAAAQABAAAAAAIBKAAQAFAAAAgDIAAgQIhRAAgABkg7IBRAAIAAgXIhRAAgAAxhPIAAAUIAcAAIAAgXIgZAAQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAABgAgqA2QAGgWABgGQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBAAgBAAIi4AAIgCACIAAAhIgXAAIAAg0QAAgEAFAAIDUAAIAUAKQgCAVgLAcgAjWgJQgBAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAgBIAAg4QAAAAABgBQAAgBAAAAQABAAAAgBQABAAABAAICnAAQABAAABAAQAAABABAAQAAAAAAABQABABAAAAIAAA4QAAABgBABQAAAAAAAAQgBABAAAAQgBAAgBAAgAjEgyIAAAVIABABICBAAIABgBIAAgVIgBgBIiBAAIgBABgAj1hTIAAgVIBoAAIAAgQIAWAAIAAAQIBmAAIAAAVg");
	this.shape.setTransform(-44.8,0.375);

	this.valueText = new cjs.Text("0", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(119,-14.5);

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
	this.btnS.setTransform(50.15,0,1.3,0.3,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// line
	this.bgLine = new lib.sliderBGLine();
	this.bgLine.name = "bgLine";
	this.bgLine.parent = this;
	this.bgLine.setTransform(0,0,0.6667,1);

	this.timeline.addTween(cjs.Tween.get(this.bgLine).wait(1));

}).prototype = getMCSymbolPrototype(lib.slInt, new cjs.Rectangle(-69.6,-16.5,290.6,33.1), null);


(lib.slDD = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AiyBnQASgGAHgIQAFgFABgJIAAg+QAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAgBAAIgLAAIAAgRIAeAAQAEABAAAEIAABIIAAACIABACQAJAaAqgBIACAAIAAgaIgrAAIAAgSIArAAIAAgOIgnAAIAAgTIAnAAIAAgQIgrAAIAAgRIArAAIAAgTIAUAAIAAATIApAAIAAARIgpAAIAAAQIApAAIAAATIgpAAIAAAOIAvAAIAAASIgvAAIAAAZIAwgEIgGAXIhMABQgkgDgMgSQgDAHgLAHQgMAIgJABgAjWB2IAAhtIgcAEIgFgSIARgCQAJgLAJgQQgRgSgTgKIAKgSIAIAFQAKgUAKgZIASAJQgIAUgPAcIAOAMQAIgTAGgSIAUAFQgHAdggArIATgDIgDgLIASgEQAGATADAYIgTADIgBgMIgKABIAABwgAAKBhQAHgDAGgBIAAhgIAVAAIAABbIAQgFIAAhpIgkAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBAAAAIAAhTQAAAAAAgBQAAgBABAAQAAAAABgBQAAAAABAAIBXAAQABAAAAAAQABABAAAAQABAAAAABQAAABAAAAIAABTQAAAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAIgfAAIAAAcIAkAAIAAAVIgkAAIAAAyIAggLIAJAUQgNAHgdAIQglAMgZAEgAAqgsIABABIAxAAIABgBIAAguIgzAAgACBBpIAAjPQABgIAGAAIBwAAIgDAWIhcAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAABAAABIAAAmIBUAAQAHABAAAGIAABVQAAAHgHAAIhUAAIAAAkQAAABAAABQAAAAABABQAAAAABAAQAAAAABAAIBgAAIAAAWIhxAAIgBAAQgGAAAAgIgACWAeIBEAAQAAABABAAQAAAAAAgBQABAAAAAAQAAgBAAgBIAAgzQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAgBAAIhEAAgAj3BmQAGgtAAgcIATABQABAggJArgAi2BSIgFg0IATgBQAEAjAAASgAg9gsQgSANghANIgMgSQAegJAUgMQgKgJgJgMQgJALgKAJIgNgNQAMgJAHgJQAHgLAGgSIATAAIgCAHIAvAAIANAJQgMAbgTATQARALAaAJIgNASQgYgKgUgQgAg9hDIAAgBQAIgGALgPQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAAAAAAAIgnAAQALAPAKAKgAipguIAMgQQANAJAQAPIgMAQQgTgRgKgHgAinhfIAMgRQAPAJAPARIgMAPQgSgRgMgHg");
	this.shape.setTransform(-50,0.025);

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

}).prototype = getMCSymbolPrototype(lib.slDD, new cjs.Rectangle(-74.9,-16.5,348.9,33.1), null);


(lib.slCDD = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhQB2QgJgBgHgHQgGgIAAgIIAAjTIAWAAIAADGQABAGAEAEQADADAGAAIAXAAQADACAEgEQADgDAAgGIABg5IAYACIgDBEQgCAJgEAEQgJAJgHAAgAAJBgQAGgDAGgBIAAhgIAWAAIAABbIAPgFIAAhpIgjAAQgBAAgBAAQAAgBgBAAQAAAAAAgBQgBgBAAAAIAAhTQAAgBABAAQAAgBAAAAQABAAAAgBQABAAABAAIBWAAQABAAABAAQAAABABAAQAAAAAAABQABAAAAABIAABTQAAAAgBABQAAABAAAAQgBAAAAABQgBAAgBAAIgeAAIAAAcIAkAAIAAAVIgkAAIAAAyIAfgLIAJAUQgNAHgcAIQgmAMgYAEgAApgtIABABIAwAAIABgBIAAguIgyAAgAjqBlIABgaQALAGAOADIASAEIAKgFQAIgEADgKQAJgTgMgmQgqAKgaAEIgHgWIBAgMQgIgNgKgMIgEgFQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBIAsgtQABgBAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAIgBgBIhMAAIAAgYIBpAAIAOARIg3A3QgDAFAEAFIALASIAmgLIAHAVQgNAEgXAGQALAdAAATQgBARgGANQgJAQgIAHQgJAFgNAAQgUAAgcgLgAB/BoIAAjPQABgIAHAAIBvAAIgDAWIhbAAQgBAAgBAAQAAAAgBAAQAAABAAAAQAAABAAABIAAAmIBUAAQAGABABAGIAABVQgBAHgGAAIhUAAIAAAkQAAABAAABQAAAAAAABQABAAAAAAQABAAABAAIBgAAIAAAWIhxAAIgCAAQgGAAAAgIgACVAdIBDAAQABABAAAAQABAAAAAAQAAgBAAAAQAAgBAAgBIAAgzQABgBAAAAQAAgBgBAAQAAAAAAAAQgBAAgBAAIhDAAg");
	this.shape.setTransform(-48.3,0.625);

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

}).prototype = getMCSymbolPrototype(lib.slCDD, new cjs.Rectangle(-73.1,-16.5,347.1,33.1), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("Ai0BnQASgGAGgIQAGgFAAgJIAAg+QABAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAIgLAAIAAgRIAdAAQAFABAAAEIAABIIAAACIABACQAIAaArgBIACAAIAAgaIgrAAIAAgSIArAAIAAgOIgoAAIAAgTIAoAAIAAgQIgrAAIAAgRIArAAIAAgTIAUAAIAAATIApAAIAAARIgpAAIAAAQIAoAAIAAATIgoAAIAAAOIAuAAIAAASIguAAIAAAZIAvgEIgFAXIhMABQgkgDgMgSQgEAHgLAHQgMAIgIABgAANBiQAsgBAQgKQAMgJABgKIgoAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAhgQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAICrAAQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABIAABgQAAABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIg7AAIAAAQQAAAFAEAEQADAEAFAAIAeAAQgLgJgHgDIAKgPQAKAFAOAKIgJAMIARAAIAFgDQACgCABgSIAUAEQgCAcgDADQgJAIgFAAIhLAAQgHgBgIgGQgGgHAAgIIAAgbIgdAAQgEAXgQANQgWANgwADgABBAxIABABICDAAIABgBIAAgLIiFAAgABBAUICFAAIAAgKIiFAAgABBgGICFAAIAAgKIiFAAgAjYB2IAAhtIgcAEIgGgSIASgCQAJgLAJgQQgRgSgUgKIAKgSIAJAFQAJgUAKgZIASAJQgHAUgPAcIANAMQAJgTAGgSIAUAFQgIAdgfArIATgDIgDgLIARgEQAHATACAYIgSADIgCgMIgKABIAABwgAj6BmQAHgtAAgcIATABQABAggJArgAi4BSIgFg0IATgBQADAjAAASgAg/gsQgSANgiANIgLgSQAdgJAUgMQgJgJgKgMQgJALgKAJIgMgNQAMgJAHgJQAGgLAGgSIATAAIgCAHIAvAAIAOAJQgNAbgSATQARALAZAJIgMASQgYgKgUgQgAg/hDIAAgBQAIgGALgPQAAgBgBgBQAAAAAAgBQAAAAAAAAQAAAAAAAAIgoAAQAMAPAKAKgAirguIALgQQAOAJAQAPIgNAQQgTgRgJgHgABSgoIAAgJIgkAAIAAgSIAkAAIAAgMIAVAAIAAAMIAzAAIAAgMIAUAAIAAAMIApAAIAAASIgpAAIAAAIIgUAAIAAgIIgzAAIAAAJgADcg0QAJgXgBgEQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBAAAAAAIi9AAQAAgBAAAAQgBAAAAABQAAAAAAAAQAAABAAABIAAAhIgWAAIAAg0QABgEAEAAIBlAAIAAgQIAWAAIAAAQIBcAAIASAKQgCAUgJAbgAiphfIALgRQAPAJAQARIgNAPQgSgRgLgHg");
	this.shape.setTransform(-50,0.025);

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

}).prototype = getMCSymbolPrototype(lib.slBB, new cjs.Rectangle(-75.2,-16.5,349.2,33.1), null);


(lib.slAA = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAmB4IAAhtIgMAMIgTgOQAkgcAQgoIAUAJQgKAVgKAPIAACGgAhRB2QgKgBgGgHQgIgIAAgIIAAjTIAYAAIAADGQgBAGAFAEQADADAGAAIAYAAQACACAEgEQAEgDAAgGIABg5IAXACIgDBEQgCAJgDAEQgKAJgGAAgABLByIAAgWIBNAAIAAgzIhFAAIAAgWICfAAIAAAWIhFAAIAAAzIBNAAIAAAWgAjtBlIADgaQAKAGAOADIASAEIAKgFQAHgEAFgKQAHgTgMgmQgpAKgZAEIgIgWIBAgMQgIgNgKgMIgEgFQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAIAtgtQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIgBgBIhOAAIAAgYIBqAAIAOARIg4A3QgCAFADAFIANASIAlgLIAHAVQgNAEgWAGQAKAdAAATQgBARgHANQgIAQgJAHQgIAFgNAAQgUAAgdgLgABagcQgHgIADgDQANgTAFgbIAWAIIgRAmQgDACADAEQAKALANAYIgUAMQgKgYgMgSgACQgYQgJgMADgDQAOgUAFgbIAWAIQgJAVgJASQgBABAAAAQAAAAAAABQAAAAAAABQAAAAABABQAKANAQAWIgTAMQgLgYgNgMgADEgcQgHgJADgDQANgUAHgZIAVAIQgKAWgIAQQgBABAAAAQAAAAAAABQAAAAAAABQAAAAABABQAIAKAPAZIgTALQgLgagMgNgAAHg+QAegZAOggIAUAJQgUApgZAVgABUhbIAAgWICeAAIAAAWg");
	this.shape.setTransform(-48.75,0.625);

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

}).prototype = getMCSymbolPrototype(lib.slAA, new cjs.Rectangle(-73.7,-16.5,347.7,33.1), null);


(lib.rbG02 = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(23.25,0,0.9002,0.3399,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA/gsAsQgrArg/AAQg+AAgsgrQgrgsAAg/QAAg+ArgrQAsgsA+AAQA/AAArAsQAsArAAA+g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBqQgsgrAAg/QAAg+AsgrQArgsA+AAQA/AAArAsQAsArAAA+QAAA/gsArQgrAsg/AAQg+AAgrgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABuCRIAAgNIjbAAIAAANIgaAAIAAkXQABgJAIAAID+AAQAIAAAAAJIAAEXgABiBdIgHAOIATAAIAAjfQAAgBAAAAQAAgBgBAAQAAAAgBAAQgBgBgBAAIjTAAQgEABAAAEIAADdIAVAAIgFgOQAegJAUgHIgtAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAgBAAgBIAAhxIACgCICxAAQABAAABABQAAAAABAAQAAAAAAABQABAAAAAAIAABxQAAAEgEAAIgmAAQAcAIATAIgABEBrQgbgMgLgBIAGgRIhFAAIAHARQgNAIgQAFIB7AAIAAAAgAhBA5ICDAAIACgBIAAgNIiFAAgAhBAXICFAAIAAgNIiFAAgAhBgJICFAAIAAgNIiFAAgAhQg1QgBAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAgBIAAgwQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABAAICkAAQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAAAIAAAwQAAABAAABQgBAAAAABQAAAAgBAAQAAABAAAAgAg8hLQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIB6AAIAAgNIh7AAg");
	this.shape_2.setTransform(39.875,-0.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbG02, new cjs.Rectangle(-22.9,-18,92,36), null);


(lib.rbG01 = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(23.25,0,0.9002,0.3399,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA/gsAsQgrArg/AAQg+AAgsgrQgrgsAAg/QAAg+ArgrQAsgsA+AAQA/AAArAsQAsArAAA+g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBqQgsgrAAg/QAAg+AsgrQArgsA+AAQA/AAArAsQAsArAAA+QAAA/gsArQgrAsg/AAQg+AAgrgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXCHIABgjQAdALAUAEQAjAGATgXQAKgLAAgbQADhAgCgFIgDgDIiKAAQgPBpg6A1IgXgTQBEgzACh/IAAgeIhEAAIAAgcICDAAIAAgmIAcAAIAAAmICCAAIAAAcIjBAAIAAAeIAAAKICeAAQAFAAABACQAEABAAAEQAEALgEBWQgCAngNATQgKAPgUAHQgLAFgRAAQgcAAgrgNg");
	this.shape_2.setTransform(39.775,-0.7901);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbG01, new cjs.Rectangle(-22.9,-18,92,36), null);


(lib.control02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.slCDD = new lib.slCDD();
	this.slCDD.name = "slCDD";
	this.slCDD.parent = this;
	this.slCDD.setTransform(1219.15,491);

	this.nsNC = new lib.controlNSlit();
	this.nsNC.name = "nsNC";
	this.nsNC.parent = this;
	this.nsNC.setTransform(1298.9,401.5,1,1,0,0,0,1464,537.6);

	this.slAA = new lib.slAA();
	this.slAA.name = "slAA";
	this.slAA.parent = this;
	this.slAA.setTransform(1219.15,448.65);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADHBKQgQAbgcATIgSgPQAegTAWgiQgTgqgBgSIgDAGIgSgFIAAAjQAAABAAABQAAAAgBABQAAAAgBABQgBAAAAAAIg0AAIgHAMIBKAAIAAASIgeAAQgOAVgNAKIAiAMIgNARIgrgOIgZAIQgPAFgcABIgFgVQAMAAAegEIgVgIIgDgOQAKgHAGgGIgiAAIAAgSIA1AAIAHgMIguAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIAAgqQAAgBABgBQAAAAAAgBQAAAAABAAQAAAAAAAAIAzAAIAAgJIgvAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIAAgeIgPAAIAAgSIAPAAIAAgeQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAvAAIAAgLIAVAAIAAALIAtAAQABAAABAAQAAABABAAQAAAAAAABQABAAAAABIAAAeIAQAAIAAASIgQAAIAAAeQAAABgBAAQAAABAAAAQgBAAAAABQgBAAgBAAIgtAAIAAAJIAzAAQAAAAABAAQABAAAAAAQABABAAAAQAAABAAABIAAACQAXg0gBg1IAVAAIgBAeIA8AAIAAAVIgPAAIAAAIQAAA5gYA2QARAeAXAcIgUALQgdgmgDgKgAA3BMQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAZAHQAOgIAMgPIgjAAQgGAHgKAHgAC9gHQAFATAFAQQAPglAAgxIAAgIIgbAAQgGAZAIAigABeAOIAhAAIAAgBIAAgNIAAAAIghAAgAAoAAIAAAOIAhAAIAAgOIghAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAgABegtIAaAAIABgBIAAgNIgbAAgAAsguIABABIAcAAIAAgOIgdAAgABehNIAbAAIAAgOIgbAAgAAshNIAdAAIAAgOIgdAAgAhSB2QgJgBgHgHQgHgIAAgIIAAjTIAXAAIAADGQAAAGAEAEQAEADAFAAIAYAAQADACAEgEQADgDAAgGIABg5IAYACIgEBEQgCAJgDAEQgJAJgHAAgAjtBlIACgaQALAGANADIASAEIAKgFQAIgEAEgKQAIgTgMgmQgqAKgZAEIgIgWIBAgMQgHgNgLgMIgDgFQgBgBAAAAQAAgBABAAQAAgBAAAAQABAAABgBIAsgtQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIgBgBIhNAAIAAgYIBqAAIANARIg3A3QgDAFAEAFIAMASIAmgLIAHAVQgNAEgXAGQALAdAAATQgCARgGANQgIAQgJAHQgJAFgNAAQgTAAgdgLg");
	this.shape.setTransform(1192.45,398.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.slAA},{t:this.nsNC},{t:this.slCDD}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.control02, new cjs.Rectangle(1145.4,378.8,347.79999999999995,128.8), null);


(lib.control01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.slDDY = new lib.slDD();
	this.slDDY.name = "slDDY";
	this.slDDY.parent = this;
	this.slDDY.setTransform(1218.7,658.55);

	this.slBBY = new lib.slBB();
	this.slBBY.name = "slBBY";
	this.slBBY.parent = this;
	this.slBBY.setTransform(1218.7,616.05);

	this.nsNY = new lib.controlNSlit();
	this.nsNY.name = "nsNY";
	this.nsNY.parent = this;
	this.nsNY.setTransform(1308.8,563.85,1,1,0,0,0,1464,537.6);

	this.slDDX = new lib.slDD();
	this.slDDX.name = "slDDX";
	this.slDDX.parent = this;
	this.slDDX.setTransform(1218.7,490.65);

	this.slBBX = new lib.slBB();
	this.slBBX.name = "slBBX";
	this.slBBX.parent = this;
	this.slBBX.setTransform(1218.7,448.15);

	this.nsNX = new lib.controlNSlit();
	this.nsNX.name = "nsNX";
	this.nsNX.parent = this;
	this.nsNX.setTransform(1306.25,401,1,1,0,0,0,1464,537.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAlB2QgLAAAAgKIAAilIAWAAIAACVQACAFAEAAIDAAAIAAAVgAgoB1IAAgLIhBAAIAAALIgWAAIAAhqQAAgEAEAAIBkAAQAEABAAAEIAABpgAhpAfIAAA2IBBAAIAAg2QAAgBAAgBQAAAAAAgBQgBAAAAAAQgBAAAAAAIg9AAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAABAAABgAj1BaIAqgDIAAhKIgoAAIAAgUIAoAAIAAgXIgeAAIAAgUIBQAAIAAAUIgdAAIAAAXIAjAAIAAAUIgjAAIAABHQAdgEAKgDIADAWQg6ALguABgABHBRQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIAAiLQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAIA3AAIAAgQIhsAAIAAgVIBsAAIAAgPIAWAAIAAAPIBkAAIAAAVIhkAAIAAAQIBOAAQADAAAAAEIAACLQAAABAAAAQAAABAAAAQgBAAgBABQAAAAgBAAgABbA7IBzAAIABgBIAAgUIh0AAgABbARIB0AAIAAgUIh0AAgABbgqIAAASIB0AAIAAgSIgBgBIhzAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABABgAjyAfIAVgFQAGAUADAcIgTAEQgFgfgGgQgAiuA/QAIgWAAgPIASAEQgDAVgGATgAiPgMQAVggADgjIAWADQgIAvgTAZgAgzhZIgCgBIg4AAIAAgVIBGAAQAHAAAAAHQAFA3AXAlIgVAHQgTgigHgygAj3hKQApgWAMgVIAUACIgCADQATAPAVAMIgPAQIgigbQgNARgfAUg");
	this.shape.setTransform(1194.5,561.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AB5B3IAAhPIhrAAIAAgWIBrAAIAAhrIhiAAIAAgWIDaAAIAAAWIhiAAIAABrIBrAAIAAAWIhrAAIAABPgAi/BsIABgXIAYAHQAUAEAHgEQACgCAAgGIAAjKIAWAAIAAAfIADAJQAWBZBSBJIgUAOQhAhCgXg2IAABwQAAAQgLAHQgHAFgMAAQgRAAgdgKgAj5BHQAbgZAWgcQAYgnADgYQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQgCgCgFAAIg/AAIAAgYIBVAAIAGAHQgBAPgDANQgRBHg3A3gACwgFQAcgpALgcIAUAKQgMAfgbAngAAag9IATgNQAVAcASAoIgVALQgTgsgSgWgAhUgdQAjgnAPgZIASAMQgTAggfAig");
	this.shape_1.setTransform(1194.65,397.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.nsNX},{t:this.slBBX},{t:this.slDDX},{t:this.nsNY},{t:this.slBBY},{t:this.slDDY}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.control01, new cjs.Rectangle(1143.5,378.3,349.20000000000005,296.8), null);


// stage content:
(lib.myAnimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// helper
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("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");
	this.shape.setTransform(1513.3291,38.4713,0.3345,0.3345);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("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");
	this.shape_1.setTransform(368.175,71.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(8,1,1).p("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");
	this.shape_2.setTransform(368.175,71.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("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");
	this.shape_3.setTransform(368.175,71.325);

	this.screenBar = new lib.screenBar();
	this.screenBar.name = "screenBar";
	this.screenBar.parent = this;
	this.screenBar.setTransform(1023.45,50);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(3,1,1).p("Eh1LAAAMDqXAAA");
	this.shape_4.setTransform(799.95,250);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag8A+IANgQQAVAmAWAAQAMAAALgJQAIgLABgNQgCgUgkgZQgrgegBgbQgBgUANgPQAMgSAZAAQAhAAAWApIgPAQQgIgTgHgHQgJgKgQAAQgMAAgHAJQgJAJABAOQAAASApAcQAoAaAAAeQAAAXgQAQQgPAPgWAAQgiAAgWgrgAEkBnIgyhTIgTAAIAABTIgVAAIAAjNIA0AAQAZAAAPASQAPARAAAgQAAAbgQAPQgLALgQABIAzBUgADfgBIAYAAQAVAAAJgJQAKgJAAgQQAAgXgKgLQgJgMgVAAIgYAAgABKBnIAAjNIBkAAIAAAVIhPAAIAABFIA3AAIAAAVIg3AAIAABJIBPAAIAAAVgAhcBnIgRg+Ig2AAIgQA+IgVAAIA2jNIAVAAIA3DNgAhxAUIgWhRIgWBRIAsAAgAk8BnIAAjNIAWAAIAAC4IBQAAIAAAVg");
	this.shape_5.setTransform(1440.9,184.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(2,1,1).p("A3bnzMAu3AAAIAAPnMgu3AAAg");
	this.shape_6.setTransform(1325,150);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("A3bH0IAAvnMAu3AAAIAAPngARKGZQAWAqAiAAQAXAAAPgPQAQgQAAgXQAAgegogaQgqgdAAgSQgBgOAJgJQAHgIAMgBQARABAJAJQAHAHAIATIAPgQQgWgpgiAAQgZAAgMASQgNAQABATQABAcArAeQAlAZACAUQgBAOgIAKQgLAJgNAAQgWAAgVglgAV5FuIAyBTIAZAAIgzhUQAQgBALgLQAQgPAAgcQAAgggPgRQgPgSgZAAIg0AAIAADOIAVAAIAAhTgATRHBIBkAAIAAgVIhPAAIAAhJIA3AAIAAgWIg3AAIAAhEIBPAAIAAgWIhkAAgARAHBIg3jOIgVAAIg2DOIAVAAIAQg+IA2AAIARA+IAWAAgANKHBIBmAAIAAgVIhQAAIAAi5IgWAAgAPpFuIAWhSIAWBSgAVmFYIAAhPIAYAAQAVAAAJAMQAKAKAAAXQAAARgKAIQgJAJgVAAg");
	this.shape_7.setTransform(1325,150);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(2,1,1).p("AhjkrIDHAAIAAJXIjHAAg");
	this.shape_8.setTransform(1165,150);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AhjEsIAApXIDHAAIAAJXg");
	this.shape_9.setTransform(1165,150);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(2,1,1).p("AhKnzICVAAIAAPnIiVAAg");
	this.shape_10.setTransform(1050,150);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AhKH0IAAvnICVAAIAAPng");
	this.shape_11.setTransform(1050,150);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,0,0)","#FFFF00","rgba(255,255,0,0.8)","rgba(255,255,0,0)"],[0,0.063,0.89,1],-481.7,-154.8,481.7,-154.8).s().p("EhLQgPfMCWhAPfMiWhAPgg");
	this.shape_12.setTransform(551.725,149.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.screenBar},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// control02
	this.control02 = new lib.control02();
	this.control02.name = "control02";
	this.control02.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.control02).wait(1));

	// control01
	this.control01 = new lib.control01();
	this.control01.name = "control01";
	this.control01.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.control01).wait(1));

	// UI
	this.rbG02 = new lib.rbG02();
	this.rbG02.name = "rbG02";
	this.rbG02.parent = this;
	this.rbG02.setTransform(1224.95,322,1,1,0,0,0,23.1,0);

	this.rbG01 = new lib.rbG01();
	this.rbG01.name = "rbG01";
	this.rbG01.parent = this;
	this.rbG01.setTransform(1117.7,322,1,1,0,0,0,23.1,0);

	this.slSS = new lib.slSS();
	this.slSS.name = "slSS";
	this.slSS.parent = this;
	this.slSS.setTransform(962.2,649.85);

	this.slSD = new lib.slScreenDistance();
	this.slSD.name = "slSD";
	this.slSD.parent = this;
	this.slSD.setTransform(437.6,861.85);

	this.slCameraRR = new lib.theSlider();
	this.slCameraRR.name = "slCameraRR";
	this.slCameraRR.parent = this;
	this.slCameraRR.setTransform(1350,964.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.slCameraRR},{t:this.slSD},{t:this.slSS},{t:this.rbG01},{t:this.rbG02}]}).wait(1));

	// screen
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(9,1,1).p("A3/3/MAv/AAAMAAAAv/Mgv/AAAg");
	this.shape_13.setTransform(903.6,453.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFF00").s().p("AtdLIIAA2QIa7AAIAAWQg");
	this.shape_14.setTransform(1100.029,150.0231,0.6374,0.1754);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgyBnQARgGAHgIQAGgFAAgJIAAg+QABAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAIgLAAIAAgRIAdAAQAEABAAAEIAABIIAAACIABACQAIAaArgBIACAAIAAgaIgrAAIAAgSIArAAIAAgOIgoAAIAAgTIAoAAIAAgQIgrAAIAAgRIArAAIAAgTIAUAAIAAATIApAAIAAARIgpAAIAAAQIAoAAIAAATIgoAAIAAAOIAuAAIAAASIguAAIAAAZIAvgEIgFAXIhMABQgkgDgLgSQgEAHgKAHQgNAIgIABgAhWB2IAAhtIgcAEIgGgSIASgCQAIgLAKgQQgRgSgUgKIALgSIAIAFQAKgUAJgZIASAJQgHAUgQAcIAOAMQAJgTAGgSIAUAFQgIAdgfArIATgDIgDgLIARgEQAHATACAYIgSADIgCgMIgKABIAABwgAh4BmQAHgtAAgcIATABQAAAggIArgAg2BSIgFg0IATgBQADAjAAASgABCgsQgSANgiANIgLgSQAdgJAUgMQgJgJgKgMQgJALgKAJIgMgNQAMgJAHgJQAHgLAFgSIATAAIgCAHIAvAAIAOAJQgMAbgTATQAQALAaAJIgNASQgXgKgUgQgABChDIAAgBQAIgGALgPQAAgBgBgBQAAAAAAgBQAAAAAAAAQAAAAAAAAIgoAAQAMAPAKAKgAgpguIAMgQQAMAJARAPIgNAQQgTgRgJgHgAgnhfIALgRQAPAJAPARIgMAPQgSgRgLgHg");
	this.shape_15.setTransform(790.9,277.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAjAnQgVA0gzAcIgQgQQA/gfAMhBIgQAJQgGgOgJgPQgKAXgKANIgSgIIABAHQAAAngHAZQgIAWgMAHQgMAFgdgKIACgYQAXAKAGgEQAIgDAEgSQAEgXgBgiQgSAXgTAMIgRgQQAggUATgaQgDgTgGgRQgLAOgPANIgQgQQAVgPAMgQQgKgRgNgRIASgNQALANAHAOIACgCQAEgLAHgSIAUAHQgJAagMATQAOAmADAqQAYgmAGgpIAUADIgEAcIAXAmQACgJAAgKIAAg7Ig9AAIAAgWIA9AAIAAgVIAWAAIAAAVIBFAAIAAAWIhFAAIAAA7IgBAAIAAAFIABALQAFA9BGAvIgSAOQg4grgMgngABSgNQgHARgFAMIgVgGQAWgjABgpIAUABQgBAPgDANQASAYARAYIgTAMIgWgkg");
	this.shape_16.setTransform(764.95,277.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgKB6IAAg1Ig2AAQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAAAAAIAAAnIgVAAIAAgzQgLAFgNAEIgJgTQAfgIAYgQIg1AAIAAgTIBOAAIAMgKIhAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAhDQAAgBAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIAjAAIAAgJIg+AAIAAgVIA+AAIAAgNIAVAAIAAANIBGAAIAAgNIAWAAIAAANIA+AAIAAAVIg+AAIAAAJIAkAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAABIAABDQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAIheAAIgKAKICDAAIAAATIg3AAIACABQAWAQAhAHIgLASIgWgHIAAAdQAAANgKAHQgPAJgigGIgDgYQAdAGAHgEQAFgEAAgGIAAgJIgBgBIg4AAIAAA1gABFAxQgUgMgOgNIhDAAQgPANgWAMIA7AAIAAgSIAUAAIAAASIA7AAIAAAAgAhJgXIABABICQAAIABgBIAAgKIiSAAgAhJg8IAAAKICSAAIAAgKIgBgBIiQAAIgBABgAgkhOIBGAAIAAgJIhGAAg");
	this.shape_17.setTransform(135,277.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhDBkQAMgDAIgHQAUgNAEgTIgrAAIAAgVIAsAAIAAglIgjAAIAAgUIAjAAQgHgMgJgLIAOgJIgwAAIAAAwQAAAngKAkQgFAfgJAQIgXgKQAYgxAAhIIAAhhQABgIAHAAIDAAAQAJABAAAHIAAAxQAAAJgJAAIggAAIANAJIgRAXIArAAIAAAUIgjAAIAAAlIAqAAIAAAVIgqAAIAAA8IgVAAIAAg8Ig4AAQgIAogtAVgAAAAlIA4AAIAAglIg4AAgAA4gUIgJgGQAHgHALgTIhUAAQAIAIAMATIgIAFIA/AAgAhIhcIAAASICgAAQAEAAAAgEIAAgOQAAgDgEAAIidAAQgBAAgBAAQAAAAgBAAQAAABAAAAQAAABAAABg");
	this.shape_18.setTransform(108.65,278.125);

	this.slInt = new lib.slInt();
	this.slInt.name = "slInt";
	this.slInt.parent = this;
	this.slInt.setTransform(163.6,861.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(9,1,1).p("Egn/gn/MBP/AAAMAAABP/MhP/AAAg");
	this.shape_19.setTransform(351,555.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.slInt},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(1));

	// BG
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#000000","#006600"],[0,1],0,-324.9,0,325).s().p("Eh8/AyyMAAAhljMD5/AAAMAAABljg");
	this.shape_20.setTransform(801.9,575);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#000000","#000066"],[0,1],-0.1,130.1,-0.1,-124.9).s().p("Eh9EATiMAAAgnDMD6JAAAMAAAAnDg");
	this.shape_21.setTransform(801.9,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20}]}).wait(1));

	// btn3D
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("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");
	this.shape_22.setTransform(101.2,875.708);

	this.btn3D = new lib.btn3D();
	this.btn3D.name = "btn3D";
	this.btn3D.parent = this;
	this.btn3D.setTransform(6.2,1040.25);
	new cjs.ButtonHelper(this.btn3D, 0, 1, 2, false, new lib.btn3D(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn3D},{t:this.shape_22}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(801.4,450,822.6,1490.3);
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