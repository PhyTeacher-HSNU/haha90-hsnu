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


(lib.checker2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhNBOQggghAAgtQAAgtAgggQAgggAtAAQAtAAAgAgQAhAgAAAtQAAAtghAhQggAggtAAQgtAAggggg");

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

}).prototype = getMCSymbolPrototype(lib.title, new cjs.Rectangle(-269.9,-45.7,539.9,91.5), null);


(lib.textureWaveX = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjSBQIAAggIGlAAIAAAggAjSgvIAAggIGlAAIAAAgg");
	this.shape.setTransform(126.925,46.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag9CwIAAgKQAZAAAHgEQAHgEADgGQACgGAAgfIAAi5QAAglgCgLQgCgIgEgEQgFgEgHAAQgJAAgRAIIgEgIIBTgpIAIAAIAAEiQAAAdADAHQACAHAIAEQAHAEAYAAIAAAKg");
	this.shape_1.setTransform(91.275,61.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaCdQgIgQgZhzQg8BqglAeQgYAUgWAAQgQAAgNgMQgJgIAAgPQAAgNAJgIQAIgJAMAAQANAAAOAMQALAKAFgBQAEAAAIgGQASgOAggyQAggxAKgVIgbhlQgJgZgPgLQgOgKgcAAIgVABIAAgOIBpgSQATAUAJAUQAGAOAQA8IAjgzQAOgUATgQQAUgRAPgHQAJgDAMAAQAQAAAKAJQAKAIAAANQAAAPgGAFQgLAKgOAAQgIAAgJgDQgTgHgGAAQgJAAgOAMQgXAUgiA6IAgCFQAIAgAEAFQAFAHAFAAQAJAAAKgKQAWgRAPgdIAOAHQgYAtgmAfQgWASgOAAQgXAAgNgZg");
	this.shape_2.setTransform(59,56.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhxCwIAAgKQBahRAkg0QAkgzAAgrQAAghgUgVQgUgVgbAAQgZAAgUAPQgVAPgJAdIgKAAQAHgvAagaQAagZAoAAQAoAAAdAbQAcAbAAAlQAAAagNAaQgSAogrAuQg+BFgPAOIBYAAQAcAAALgCQALgCAJgGQAJgGAGgMIAKAAIgYBDg");
	this.shape_3.setTransform(90.875,61.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_3},{t:this.shape}]},1).wait(1));

	// 圖層_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABMEDQgWgYgShSIgjiYIiDERIhGAAICzlwIgGgiQgMg4gTgUQgUgUgZAAQgVAAgRAQQgQAQgFAkIgOAAQABg9AdglQAUgbAeAAQAaAAATAVQAcAgASBQIA+ESQAOA9ARATQATATAXAAQAXAAAOgQQAPgPADgiIAPAAIABAQQgBAzgZAfQgTAYgfAAQgcAAgVgXg");
	this.shape_4.setTransform(346.2716,50.075,1,1.0526,0,18.1904,0);

	this.ttt = new cjs.Text("10.5", "80px 'Arial'", "#FFFFFF");
	this.ttt.name = "ttt";
	this.ttt.textAlign = "right";
	this.ttt.lineHeight = 91;
	this.ttt.lineWidth = 157;
	this.ttt.parent = this;
	this.ttt.setTransform(310.25,4.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF0000").ss(1,1,1).p("A/PnzMA+fAAAIAAPnMg+fAAAg");
	this.shape_5.setTransform(200,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.ttt},{t:this.shape_4}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.2,-1,410.2,102);


(lib.texture2DPlane = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


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


(lib.slTime = function(mode,startPosition,loop) {
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
		sl.len = 50;
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
	this.shape.graphics.f("#FFFFFF").s().p("AAyCWIAAkrIBkAAIAAErgAiVCWIAAkrIBkAAIAAErg");
	this.shape.setTransform(-35.0243,-0.0068,0.8667,0.8667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah3iVIDvCVIjvCWg");
	this.shape_1.setTransform(85,0);

	this.valueText = new cjs.Text("0", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(172,-14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.valueText},{t:this.shape_1},{t:this.shape}]}).wait(1));

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
	this.btnS.setTransform(24.95,0,0.8,0.3);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// line
	this.bgLine = new lib.sliderBGLine();
	this.bgLine.name = "bgLine";
	this.bgLine.parent = this;
	this.bgLine.setTransform(0,0,0.3333,1);

	this.timeline.addTween(cjs.Tween.get(this.bgLine).wait(1));

}).prototype = getMCSymbolPrototype(lib.slTime, new cjs.Rectangle(-48,-16.5,322,33.1), null);


(lib.slSlitDD = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AmsBmQAjgOAfgTQghgigNgqIgEAAIAAAEQgBBKgjAxIgTgMQAhgxAAg3IAAhdQAAgGAGAAIA/AAIAAgZIAWAAIAAAZIA6AAIASALQgCAXgNAWIgTgGQAHgQABgJQAAgBAAgBQAAgBAAAAQAAAAgBAAQAAgBgBABIgwAAIAAAsIAyAAIAMALQgOAugTAXIgRASQAbASAkAOIgMATQgngNgbgZQgkAdgfAKgAlqAmIAPASQAdgbAMggQACgFgHABIhLAAQAIAZAQAUgAmchGIAAApIAvAAIAAgsIgsAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAABAAABgAh7BzIAAgYIAPAGQAMACADgDQACgEAAgEIAAhAIgzAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAhZQAAgBAAgBQAAAAABgBQAAAAABAAQABAAAAAAIAwAAIAAgTIg+AAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAABAAABIAABgQAAA/giAsIgTgJQAUgcAFgWQAHgWAAggIAAhtQAAgGAGAAICjAAIAAAWIg8AAIAAATIAyAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAABIAABZQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIgwAAIAABGQAAAQgMAHQgFADgIAAQgLAAgSgFgAh8ADIABABIBTAAIABgBIAAgOIhVAAgAh8gfIBVAAIAAgUIhVAAgAA5B3IAAh0IgCAFQgMAegMASIgVgHQASgaAMgaQAHgRAHgaIgnAAIAAgWIAqAAIAAgzIAXAAIAAAzIAmAAIAAAWIglAAQAXAkAUAmIgVALQgKgYgNgaIAACCgADfB2IAAgMIhIAAIAAAMIgXAAIAAjjQAAAAABgBQAAgBAAAAQABAAAAgBQABAAABAAIBsAAQAFAAAAAEIAADigACXBTIBIAAIAAgoIhIAAgACXAUIBIAAIAAgqIhIAAgACXhWIAAApIBIAAIAAgpQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIhCAAQgEAAABADgAEOBgQAFgDAHgBIAAhgIAVAAIAABbIAPgFIAAhpIgjAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBAAAAIAAhTQAAAAAAgBQAAgBABAAQAAAAABgBQAAAAABAAIBXAAQABAAAAAAQABABAAAAQABAAAAABQAAABAAAAIAABTQAAAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAIgeAAIAAAcIAjAAIAAAVIgjAAIAAAyIAfgLIAIAUQgMAHgcAIQgmAMgYAEgAEtgtIABABIAxAAIABgBIAAguIgzAAgAj5BqQAdgsAEgxIAVACQgKA+gWAlgAn8BoQAegoAHgvIAWAEQgMA7gYAigAGDBoIAAjPQABgIAIAAIBuAAIgCAWIhcAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAABAAABIAAAmIBUAAQAHABAAAGIAABVQAAAHgHAAIhUAAIAAAkQAAABAAABQAAAAABABQAAAAABAAQAAAAABAAIBgAAIAAAWIhwAAIgCAAQgHAAAAgIgAGZAdIBEAAQAAABABAAQAAAAABgBQAAAAAAAAQAAgBAAgBIAAgzQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAIhEAAgAiqBhQAagjAMgYIATALQgNAbgZAigAg2AwIAUgJQAPAXANAlIgVAJQgOgngNgVgAn8ggIAMgUQAVAKAaATIgMATQgcgTgTgJgAj4gkIANgSQATALAVAUIgOARQgXgUgQgKgAn3hfIAMgUQAVAKAcAUIgNATQgcgUgUgJgAj0hhIAMgTQATALAXAUIgPASQgXgVgQgJg");
	this.shape.setTransform(-80,0.025);

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

}).prototype = getMCSymbolPrototype(lib.slSlitDD, new cjs.Rectangle(-130.8,-16.5,404.8,33.1), null);


(lib.slPhi0 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ai6B2IgBgZQAZAIAGgEQAGgDAAgHIAAgXIhCAAIAAA2IgWAAIAAijQAAgIAHAAIBgAAQAHABABAHIAACMQgCAPgKAGQgHAFgOAAQgLAAgPgDgAjYAqIBCAAIAAgaIhCAAgAjYgeIAAAZIBCAAIAAgZIgCgCIg/AAIgBACgAhaByIAAgXQAPAFAFABQASAEAGgGQACgDAAgEIAAiRIAWAAIAACXQAAAPgMAHQgHAFgMAAQgPAAgWgHgAF6B4IAAhHIhQAAIAAALIgYAAIAAh/QACgIAHAAIBfAAIAAgrIAWAAIAAArIBeAAQAIABAAAHIAAB/IgXAAIAAgLIhPAAIAABHgAGQAaIBPAAIAAhKQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAIhMAAgAEqgwIAABKIBQAAIAAhNIhNAAQgBAAAAAAQgBAAAAABQgBAAAAABQAAAAAAABgAB9B4IAAgwQg6AhgwAGIgJgVQA3gIAugaIhiAAIAAgUIBwAAIAAgPIhMAAQgIAAAAgHIAAhKIgRAQIgRgNQAggaAQgkIASAJIgIAPIA+AAQAJgPACgJIAVAKIgHAOIBSAAIgCATIhVAAIAAAPIBRAAIAAATIhRAAIAAANIBSAAIAAATIhSAAIAAAMIBXAAIAAATIhXAAIAAAPIBhAAIAAAUIhaAAQAqAaA3AJIgLAUIgLgDQgngLgrgWIAAAtgAA/AAQAAAAAAAAQAAABAAAAQABABAAAAQABAAAAAAIA8AAIAAgMIg+AAgAA/gdIA+AAIAAgNIg+AAgAA/hJIAAAMIA+AAIAAgPIg8AAQAAAAgBABQAAAAgBAAQAAABAAAAQAAABAAAAgAlkBzIgBgZQAZAHAMAAQAHAAADgDQAHgEAAgHIAAiZQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAgBgBAAIirAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAAAAAAAIAAC7IgXAAIAAjKQABgIAHAAIBPAAIAPgaIAUAMIgIAOIBjAAQAIABAAAHIAACwQABAQgMAHQgIAGgRAAQgQAAgYgFgAhlBKIAAh5IAWAAIAAB5gAnCBFQgEAAAAgEIAAhnQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABAAIB2AAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIAABnQAAAEgDAAgAmvgSIAAA/IABABIBOAAIABgBIAAg/IgBgBIhOAAIgBABgAj3hFIAAgWIBFAAQgGgLgFgHIAUgLQAIALAHASIA4AAQAJgQADgMIAUAJIgGATIA6AAIAAAWg");
	this.shape.setTransform(-80,0.0036);

	this.valueText = new cjs.Text("0", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(308.15,-13);

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

}).prototype = getMCSymbolPrototype(lib.slPhi0, new cjs.Rectangle(-130.2,-16,540.4,34.1), null);


(lib.slLambda = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AEIBsQg5gYgrhEIgiAAIAABLIAPgDQAdgGASgHIAIAWQgvAQhGAHIgIgWIAhgEIAAhOIgfAAIAAgVIAiAAIAAhnQgBgFAHAAICzAAIAAAWIigAAQgBAAgBAAQAAAAAAAAQgBABAAAAQAAABABABIAAALICaAAIAAAVIiaAAIAAAPICaAAIAAAWIiaAAIAAAOICyAAIAAAVIh5AAQAPAYATASQAegUAWgRIAMAUIguAgQAaAQAvAKIgMAWQgXgGgRgHgAjrBmQAkgOAegTQghgigNgqIgEAAIAAAEQgBBKgjAxIgUgMQAigxAAg3IAAhdQAAgGAGAAIA/AAIAAgZIAWAAIAAAZIA6AAIASALQgDAXgMAWIgTgGQAHgQABgJQAAgBAAgBQAAgBAAAAQAAAAgBAAQAAgBgBABIgwAAIAAAsIAyAAIAMALQgOAugUAXIgQASQAbASAkAOIgMATQgmgNgcgZQglAdgeAKgAipAmIAPASQAcgbAMggQADgFgGABIhMAAQAIAZAQAUgAjbhGIAAApIAvAAIAAgsIgsAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAABAAABgAk6BoQAdgoAHgvIAVAEQgLA7gYAigAk6ggIALgUQAVAKAZATIgLATQgcgTgSgJgAk2hfIAMgUQAVAKAcAUIgMATQgdgUgUgJg");
	this.shape.setTransform(-90,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAdBhQgIgJgHgfIgOg5IgwBnIgaAAIBDiJIgCgNQgFgVgHgIQgIgHgJAAQgIAAgGAGQgGAGgCANIgFAAQAAgXALgOQAIgKALAAQAKAAAHAIQAKAMAHAeIAWBmQAGAXAGAHQAHAHAJAAQAIAAAGgFQAFgGABgNIAGAAIAAAGQAAATgJAMQgHAJgMAAQgKAAgIgJg");
	this.shape_1.setTransform(-37.1361,0.025,1,1.0597,0,19.3262,0);

	this.valueText = new cjs.Text("0", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(172,-14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.valueText},{t:this.shape_1},{t:this.shape}]}).wait(1));

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

}).prototype = getMCSymbolPrototype(lib.slLambda, new cjs.Rectangle(-121.5,-16.5,395.5,33.1), null);


(lib.slIntRatio = function(mode,startPosition,loop) {
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
		sl.len = 50;
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
	this.shape.graphics.f("#FFFFFF").s().p("AhPBrIAAjVICaAAIAAAZIh+AAIAABCIB2AAIAAAYIh2AAIAABJICDAAIAAAZg");
	this.shape.setTransform(-39.975,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiIB2IAAjWICaAAIAAAZIh+AAIAABCIB2AAIAAAYIh2AAIAABJICDAAIAAAagAAtAWQAAgGACgFQAEgKAHgIQAIgJAPgMQAXgTAIgLQAIgLAAgJQAAgKgIgIQgHgHgMAAQgMAAgHAIQgIAHAAANIgSgCQACgTAMgKQAMgKAUAAQAUAAAMALQALALAAAQQAAAIgDAJQgEAHgIAKQgIAIgSAQIgUASIgHAIIBEAAIAAAQg");
	this.shape_1.setTransform(90.025,-2);

	this.valueText = new cjs.Text("0", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(172,-14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.valueText},{t:this.shape_1},{t:this.shape}]}).wait(1));

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
	this.btnS.setTransform(24.95,0,0.8,0.3);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// line
	this.bgLine = new lib.sliderBGLine();
	this.bgLine.name = "bgLine";
	this.bgLine.parent = this;
	this.bgLine.setTransform(0,0,0.3333,1);

	this.timeline.addTween(cjs.Tween.get(this.bgLine).wait(1));

}).prototype = getMCSymbolPrototype(lib.slIntRatio, new cjs.Rectangle(-48,-16.5,322,33.1), null);


(lib.slDeltaPhi = function(mode,startPosition,loop) {
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
		sl.len = 50;
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
	this.shape.graphics.f("#FFFFFF").s().p("AA1B3IAAhzIgCAFQgMAdgMASIgVgHQASgZAMgbQAHgRAHgZIgoAAIAAgXIArAAIAAgyIAWAAIAAAyIAnAAIAAAXIglAAQAXAjATAnIgUAKQgKgXgOgbIAACCgAhfB0IgCgZQAXAGAMABQAGAAAEgEQAHgDAAgHIAAitIgCgBIipAAIgBABIAADOIgWAAIAAjdQgBgIAJAAIDIAAQAIgBAAAJIAADEQgBAPgKAGQgJAGgTAAQgOAAgTgDgADbB2IAAgMIhIAAIAAAMIgXAAIAAjiQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAIBtAAQAFAAAAAEIAADhgACTBUIBIAAIAAgpIhIAAgACTAVIBIAAIAAgrIhIAAgACThWIAAAqIBIAAIAAgqQAAAAgBgBQAAgBAAAAQgBAAAAgBQgBAAAAAAIhCAAQgEAAABADgAi6BHQgGAAAAgGIAAhWQAAgGAGAAIBuAAQAGAAAAAGIAABWQAAAGgGAAgAipgFIAAA1IABABIBLAAIABgBIAAg1IgBgBIhLAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAAAABAAgAjJgwIAAgWICLAAIAAAWg");
	this.shape.setTransform(-45.005,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhuBPQglAYgxAQIgMgWQAugLAjgVQgtgsgPg5IgMAAIAAAhQgBBIgaAuIgUgIQAPgeAEgaQAFgaAAgiIAAhjQAAgGAGAAIDCAAIAAAWIivAAIgCACIAAAgICbAAIAQAKQgCAPgEANQgQAvgpAmQAoAYAuAKIgPAVQgugNgsgcgAh0AuQAEACADAEIAPgNQAjgiAGglQgBgEgEAAIhrAAQAPA0AiAegAA8B2IAAhzIgCAFQgNAdgMASIgUgHQARgZAMgbQAHgRAIgZIgoAAIAAgXIArAAIAAgyIAWAAIAAAyIAnAAIAAAXIglAAQAWAjAUAnIgVAKQgKgXgNgbIAACCgADhB1IAAgMIhIAAIAAAMIgWAAIAAjiQAAgBAAgBQAAAAAAgBQABAAAAAAQABAAABAAIBsAAQAFAAAAAEIAADhgACZBTIBIAAIAAgpIhIAAgACZAUIBIAAIAAgrIhIAAgACZhXIAAAqIBIAAIAAgqQAAAAAAgBQAAgBAAAAQgBAAAAgBQgBAAgBAAIhCAAQgEAAABADg");
	this.shape_1.setTransform(95.025,0.025);

	this.valueText = new cjs.Text("0", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(172,-14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.valueText},{t:this.shape_1},{t:this.shape}]}).wait(1));

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
	this.btnS.setTransform(24.95,0,0.8,0.3);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// line
	this.bgLine = new lib.sliderBGLine();
	this.bgLine.name = "bgLine";
	this.bgLine.parent = this;
	this.bgLine.setTransform(0,0,0.3333,1);

	this.timeline.addTween(cjs.Tween.get(this.bgLine).wait(1));

}).prototype = getMCSymbolPrototype(lib.slDeltaPhi, new cjs.Rectangle(-69,-16.5,343,33.1), null);


(lib.slColor = function(mode,startPosition,loop) {
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
		sl.len = 50;
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
	this.shape.graphics.f("#FFFFFF").s().p("AgIBkQBDgXAug9IARANIgCADQgvA8hFAcgAhCB4IAAhKQgQAdgVATIgSgOQAhgcAQghIgsAAIAAgUIAyAAIAAgUIAWAAIAAAUIAsAAIAAAUIgnAAQAWAVAWAaIgQAOIghgnIAABPgAAMAFQAvgRAlgkIAPAPQguAsgpANgAgjgbQASgiAHgZIARAIQgGAbgSAhgAh2hGIATgHQALAUAHAeIgTAGQgIgegKgTgAhAgjIgEgsIATgCQAFAiAAAMgAAMhFQAvgSAfgfIAPAPQgsAqglAMgAhxhsQBMgCAngJIAEAVQgsAKhHABg");
	this.shape.setTransform(90,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABMBqQgtgYgMgfQgVAshAAZIgMgVQAWgHARgKQAvgeAAguIAAhLIAXAAIAAA9QAAABAAAAQgBABAAAAQAAABABABQAAAAAAABQABAWADANIAAACQAMApBLAbIgRASQgTgIgKgGgAh4BoQAegjABhbIAAg9IgYAAIAAgWIAYAAIAAgOIAXAAIAAAOICzAAIAAAWIizAAIAAA9QgCBageAwgAA1AMQAYgtAJgeIAUAIQgIAhgYArgAg6g1IAUgIQAQAeAKArIgUAHQgOgtgMgbg");
	this.shape_1.setTransform(-40,0.025);

	this.valueText = new cjs.Text("0", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(172,-14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.valueText},{t:this.shape_1},{t:this.shape}]}).wait(1));

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
	this.btnS.setTransform(24.95,0,0.8,0.3);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// line
	this.bgLine = new lib.sliderBGLine();
	this.bgLine.name = "bgLine";
	this.bgLine.parent = this;
	this.bgLine.setTransform(0,0,0.3333,1);

	this.timeline.addTween(cjs.Tween.get(this.bgLine).wait(1));

}).prototype = getMCSymbolPrototype(lib.slColor, new cjs.Rectangle(-52.1,-16.5,326.1,33.1), null);


(lib.slAmp = function(mode,startPosition,loop) {
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
		sl.len = 50;
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
	this.shape.graphics.f("#FFFFFF").s().p("AgKB0IAAhPIhrAAIAAgXIBrAAIAAhqIhhAAIAAgXIDZAAIAAAXIhiAAIAABqIBqAAIAAAXIhqAAIAABPgAAtgIQAcgqAKgbIAUAJQgMAggbAmgAhphBIATgMQAVAbASApIgUAKQgUgsgSgWg");
	this.shape.setTransform(-40,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiGBQQgRgOgCgXIAXgDQAEATAJAJQAKAIANAAQARAAALgLQALgLAAgRQAAgPgKgLQgLgKgQAAQgGAAgKADIADgTIADAAQAPAAAMgIQALgHAAgQQAAgNgIgIQgJgIgNAAQgNAAgJAIQgJAIgDARIgXgEQAFgXAOgMQAPgNAWAAQAQAAAMAGQANAHAHALQAHAMAAAMQAAAMgHAKQgGAKgNAGQARAEAJALQAJAMAAASQAAAYgSARQgSARgbAAQgYAAgQgPgAAABcIAAi5IBAAAQAWAAALACQAQAEALAKQAPAMAHATQAIAUAAAZQAAAUgFAQQgFARgIAKQgIALgJAGQgJAGgNAEQgNADgRAAgAAYBGIAoAAQATAAAKgEQALgDAGgGQAJgJAEgPQAFgPAAgUQAAgdgJgQQgKgPgOgGQgJgDgWAAIgoAAg");
	this.shape_1.setTransform(85.025,0.025);

	this.valueText = new cjs.Text("0", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(172,-14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.valueText},{t:this.shape_1},{t:this.shape}]}).wait(1));

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
	this.btnS.setTransform(24.95,0,0.8,0.3);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// line
	this.bgLine = new lib.sliderBGLine();
	this.bgLine.name = "bgLine";
	this.bgLine.parent = this;
	this.bgLine.setTransform(0,0,0.3333,1);

	this.timeline.addTween(cjs.Tween.get(this.bgLine).wait(1));

}).prototype = getMCSymbolPrototype(lib.slAmp, new cjs.Rectangle(-51.8,-16.5,325.8,33.1), null);


(lib.rb12 = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(29.95,0,1.0002,0.3399,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABXB4IAAgSQgBgsAygsQAvgmAAgeQAAgSgHgLQgKgLgNAAQgRAAgIAKQgMAOAAAYIgZAAQABglARgTQAQgRAcAAQAYAAAPARQAPARAAAfQAAAqg2AvQgpAmAAAXIBeAAIAAAYgAjMB4IAAgYIAnAAIAAiyIgqASIAAgZIBCgcIAADVIAnAAIAAAYgAgRBNIAAg9Ig5AAIAAgVIA5AAIAAg3IAVAAIAAA3IA/AAIAAAVIg/AAIAAA9g");
	this.shape.setTransform(50,-0.55);

	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checker},{t:this.shape}]}).wait(1));

	// box
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA/grArQgsAsg/AAQg9AAgsgsQgsgrAAg/QAAg+AsgrQAsgsA9AAQA/AAAsAsQArArAAA+g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AhpBqQgsgrAAg/QAAg+AsgrQAsgsA9AAQA/AAArAsQAsArAAA+QAAA/gsArQgrAsg/AAQg9AAgsgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rb12, new cjs.Rectangle(-21.1,-18,102,36), null);


(lib.rb02 = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(29.95,0,1.0002,0.3399,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhDCDIAAgbIAQAGQAOACAEgDQACgEAAgFIAAhKIg6AAQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAgBAAAAIAAhnQAAgBAAgBQABgBAAAAQABgBAAAAQABAAABAAIA3AAIAAgWIhIAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAABAAABIAABwQAABJgnAyIgWgLQAWgfAHgaQAHgaAAgkIAAh+QAAgHAHAAIC7AAIAAAZIhEAAIAAAWIA5AAQABAAABAAQAAAAABABQAAAAABABQAAABAAABIAABnQAAAAAAABQgBABAAAAQgBABAAAAQgBAAgBAAIg2AAIAABRQAAASgOAIQgGADgJAAQgNAAgUgFgAhEACQAAAAAAAAQAAAAAAABQAAAAAAAAQABAAAAAAIBeAAIABgBIAAgRIhgAAgAhEgmIBgAAIAAgWIhgAAgAjUB4QAggyAFg4IAZACQgMBHgaArgAh6BuQAegoAOgcIAXANQgQAfgdAngAAKA1IAYgKQARAbAQAqIgZALQgQgtgQgZgABcByIAAgSQAAgsAygrQAvgnAAgdQAAgTgHgLQgLgLgMAAQgRAAgIAKQgMAOAAAZIgZAAQAAgmASgSQAQgSAcAAQAYAAAPASQAPAQAAAgQAAApg2AwQgqAlAAAXIBfAAIAAAYgAjTgrIAOgVQAWANAZAWIgRAUQgbgXgRgLgAjQhyIAOgVQAXAMAZAXIgQAVQgbgZgTgKg");
	this.shape.setTransform(50.025,-0.002);

	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checker},{t:this.shape}]}).wait(1));

	// box
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA/grArQgsAsg/AAQg9AAgsgsQgsgrAAg/QAAg+AsgrQAsgsA9AAQA/AAAsAsQArArAAA+g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AhpBqQgsgrAAg/QAAg+AsgrQAsgsA9AAQA/AAArAsQAsArAAA+QAAA/gsArQgrAsg/AAQg9AAgsgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rb02, new cjs.Rectangle(-21.2,-18,102,36), null);


(lib.rb01 = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(29.95,0,1.0002,0.3399,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag+CDIAAgbIARAGQAOACADgDQADgEgBgFIAAhKIg6AAQgBAAgBAAQAAAAgBgBQAAAAAAgBQgBgBAAAAIAAhnQAAgBABgBQAAgBAAAAQABgBAAAAQABAAABAAIA3AAIAAgWIhHAAQgBAAgBAAQgBAAAAAAQgBABAAAAQAAABAAABIAABwQAABJgnAyIgWgLQAWgfAIgaQAGgaABgkIAAh+QAAgHAGAAIC7AAIAAAZIhEAAIAAAWIA5AAQABAAABAAQABAAAAABQABAAAAABQAAABAAABIAABnQAAAAAAABQAAABgBAAQAAABgBAAQgBAAgBAAIg2AAIAABRQAAASgOAIQgFADgKAAQgNAAgUgFgAg/ACQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIBeAAIACgBIAAgRIhhAAgAg/gmIBhAAIAAgWIhhAAgAjPB4QAhgyAEg4IAZACQgMBHgZArgAh1BuQAfgoAOgcIAWANQgPAfgeAngAAQA1IAXgKQARAbAQAqIgZALQgQgtgPgZgABqByIAAgYIAmAAIAAixIgoARIAAgYIBBgdIAADVIAnAAIAAAYgAjOgrIAOgVQAXANAYAWIgRAUQgbgXgRgLgAjLhyIAPgVQAWAMAZAXIgPAVQgbgZgUgKg");
	this.shape.setTransform(50,-0.002);

	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checker},{t:this.shape}]}).wait(1));

	// box
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA/grArQgsAsg/AAQg9AAgsgsQgsgrAAg/QAAg+AsgrQAsgsA9AAQA/AAAsAsQArArAAA+g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AhpBqQgsgrAAg/QAAg+AsgrQAsgsA9AAQA/AAArAsQAsArAAA+QAAA/gsArQgrAsg/AAQg9AAgsgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rb01, new cjs.Rectangle(-21.1,-18,102,36), null);


(lib.chWaveSD = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(29.95,0,1.0002,0.3399,0,0,0,0.1,0);
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
	this.shape_2.graphics.f("#FFFFFF").s().p("ABnB2QApgQAjgWQgngogNgwIgGAAIAAAEQAABWgoA4IgYgNQAng5AAg/IAAhsQAAgHAHAAIBIAAIAAgdIAaAAIAAAdIBDAAIAWANQgEAbgPAaIgVgHQAHgUACgKQABgEgEAAIg3AAIAAAzIA6AAIAOANQgRA2gWAZQgIALgKALQAeAVAqAPIgOAWQgtgPgfgcQgqAhgkALgACzAsIASAVQAggfAPgmQACgFgHABIhXAAQAJAdASAXgAB5hRIAAAvIA2AAIAAgzIgyAAQgBAAgBABQAAAAgBAAQAAABAAAAQgBABAAABgAjfCHIgBgYQAmAIAEgFQAKgIABgMQACgSgBg2QAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAgBAAIhmAAQAAAAgBAAQgBAAAAgBQgBAAAAgBQAAgBAAAAIAAiNQAAgGAEAAIB0AAIAAAWIgrAAIAAAUIAoAAIAAAWIgoAAIAAAWIApAAIAAAVIgpAAIAAAWIAzAAQAEABAAADQABBLgFAbQgDAQgLAKQgHAHgUAAQgNAAgSgDgAkAgBIAfAAIAAgWIgfAAgAkAgsIAfAAIAAgWIgfAAgAkAhpIAAARIAfAAIAAgUIgcAAQgBAAgBABQgBAAAAAAQAAABAAAAQAAAAAAABgAiRCGIAAgZIA2AAIAAhVIgsAAIAAgYIAsAAIAAhGIgzAAIAAgZIA6AAQgOgRgKgIIASgTQAOANASAVIgMAKIA5AAIAAAZIg2AAIAABGIAzAAIAAAYIgzAAIAABVIA6AAIAAAZgAALB3QAjgtAIg2IAZAEQgNBEgdAngAkgCBQAGg6gBgiIAWABQABAogIA0gAj7BzQAAgrgFghIAWgBQAEAqAAAjgAjlAlIAUgDQAIAuACAOIgVACQgCgegHgdgAjMAkIASgGQAJAYADATIgTADQgEgTgHgVgAALgmIAOgWQAYAMAeAVIgOAWQgggWgWgLgAAShuIAMgWQAZALAfAXIgNAWQgigXgVgLg");
	this.shape_2.setTransform(50,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chWaveSD, new cjs.Rectangle(-21.1,-20.7,102,38.7), null);


(lib.chWaveFront = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(29.95,0,1.0002,0.3399,0,0,0,0.1,0);
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AjCB2QApgPAjgXQgmgngPgxIgEAAIAAAFQgBBWgpA4IgXgOQAng4AAhAIAAhrQAAgIAHAAIBJAAIAAgcIAZAAIAAAcIBDAAIAVANQgDAbgPAaIgVgHQAHgTACgLQABgEgDABIg4AAIAAAzIA6AAIAOANQgRA2gWAZQgIALgLAKQAfAWAqAOIgOAXQgsgQgggbQgrAhgjALgAh2AsIASAVQAggeAOgmQADgGgHABIhXAAQAJAdASAXgAivhRIAAAwIA2AAIAAgzIgzAAQgBAAgBAAQAAAAgBABQAAAAAAABQAAABAAAAgADGCEIAAgbQARAGAHABQAUAFAHgHQADgEgBgEIAAioIAaAAIAACuQAAASgOAIQgIAGgOAAQgRAAgagIgABYCJIgCgeQAdAJAIgEQAGgDABgJIAAgaIhNAAIAAA/IgaAAIAAi+QAAgIAJgBIBuAAQAKACgBAHIAACjQgBARgMAHQgIAFgQAAQgNAAgRgCgAA1AxIBNAAIAAgfIhNAAgAA1gjIAAAeIBNAAIAAgeQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAIhJAAIgBACgAkeB4QAigtAIg2IAaAEQgOBEgcAngAC6BVIAAiMIAaAAIAACMgAkeglIAOgWQAYAMAeAUIgPAXQgfgXgWgKgAkYhuIANgWQAZALAgAXIgPAXQgggYgXgLgAAShQIAAgZIBPAAQgGgNgHgIIAXgNQAKANAIAVIBAAAQALgTAEgOIAXAKIgJAXIBEAAIAAAZg");
	this.shape_2.setTransform(50,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chWaveFront, new cjs.Rectangle(-21.1,-20.7,102,38.7), null);


(lib.chLineNode = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(29.95,0,1.0002,0.3399,0,0,0,0.1,0);
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
	this.shape_2.graphics.f("#FFFFFF").s().p("ACSCGIAAgaQAhAKAFgFQACgDAAgFIAAhxIg9AAQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBIAAhlQAAgBABgBQAAAAAAgBQABAAAAAAQABgBABAAIAxAAQAIgPAAgIIAaAIQgCAIgEAHIBFAAQABAAABABQABAAAAAAQABABAAAAQAAABAAABIAABlQAAABAAABQAAAAgBABQAAAAgBAAQgBAAgBAAIg4AAQAHAaAHATQAYgTAOgPIAQATQgQARgaATQARAcAfAaIgWAOQgighgWgqIAAA8QgBARgMAHQgGAFgMAAQgNAAgVgGgACRgeIBqAAQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIAAgTIhrAAgACRhcIAAAUIBrAAIAAgUQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAIhqAAQAAAAAAAAQgBAAAAAAQAAAAABABQAAAAAAAAgAA3CIIAAh/IgnAGQgCgLgFgLIAagDQAKgMAKgPQgWgUgXgMIALgUIALAGQAOgaAMgdIAVALQgKAWgTAjQAJAGAHAIQAOgaAGgWIAXAGQgJAiglAxIAagFIgFgPIAWgGQAKAgADAVIgUAEQgDgGAAgHIgQACIAACDgAiDCIIAAi/QACgIAHAAIBgAAQAIABAAAHIAACUQgBAPgIAFQgTANgogMIgDgdQAlAKAHgEQACgDAAgHIAAh0QAAAAAAgBQAAgBgBAAQAAgBAAAAQgBAAAAAAIg6AAQAAAAgBAAQgBAAAAABQgBAAAAABQAAABAAAAIAACrgAkgBvIAQgEIAAihQAAgHAHAAIBoAAQAHAAAAAHIAABkQAAAIgHAAIhXAAIAAAvIA9gLQgFgMgHgIIAVgNQASAYATAoIgVAMIgMgVIhsAXgAj4AfIBCAAQABAAABAAQAAAAABgBQAAAAAAgBQABgBAAgBIAAgTIhGAAgAj4gfIAAAQIBGAAIAAgRQABgFgIAAIg4AAIgCAAQgFAAAAAGgAAMB2QAJglABg0IAXADQgDAtgHAtgABsBoQAhgfANgfQAAgGgEAAIgZAAIAAgYIAsAAIAMAHQgIAagIATQgNAYgZAggABWAhIAXgDIAJA8IgWABQgCgcgIgegAkghRQAZgZAMghIAWAIIgDAJIBRAAIAAAXIgqAAQAFAOABAMIgXACIgHgcIgaAAQgEADgBAEIgUAagAiehOQAXgcAHggIAXAGIgDAJIBfAAIAAAYIgxAAIAJAVIgYAIQgGgSgGgLIgbAAQgJAUgKALg");
	this.shape_2.setTransform(50,0.0006);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chLineNode, new cjs.Rectangle(-21.1,-20.7,102,38.7), null);


(lib.chLineAmp = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(29.95,0,1.0002,0.3399,0,0,0,0.1,0);
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
	this.shape_2.graphics.f("#FFFFFF").s().p("ACTCGIAAgaQAhAKAFgFQACgDAAgFIAAhxIg9AAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAgBIAAhlQAAgBAAgBQABAAAAgBQABAAAAAAQABgBABAAIAxAAQAHgPABgIIAZAIQgBAIgEAHIBFAAQABAAABABQAAAAABAAQAAABABAAQAAABAAABIAABlQAAABAAABQgBAAAAABQgBAAAAAAQgBAAgBAAIg5AAQAHAaAIATQAYgTAOgPIAQATQgQARgaATQAQAcAgAaIgWAOQgighgWgqIAAA8QgCARgLAHQgGAFgMAAQgOAAgUgGgACSgeIBpAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIAAgTIhrAAgACShcIAAAUIBrAAIAAgUQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIhpAAQgBAAAAAAQAAAAAAAAQAAAAAAABQAAAAABAAgAhiBvQgoATgrAIIgLgYQAngHAZgHQAFgDAFgCQgWgSgPgVQgQASgKAJIgSgSQAhgaAPghIgUAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBIAAhVQgHAJgIAHIgMgMIAADFQgBAIgFAEQgDAFgHAAIgggBIgCgZQAVAEADgBIADgCIAAhEIgbAAQgCAvgLAtIgagGQAQg0AAg6IAAiUQgBgFAHAAIA9AAIAEABIACAEIAAAoQAIgIAHgKQAGgLAHgVIAYAGIgEALICJAAIAAAYIiSAAIgKANICNAAQABAAAAABQABAAAAAAQABAAAAABQAAAAAAAAIAABWQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIhgAAQgFAJgBAHIBiAAIAOALQgPAjgoAeQAEACAFABQAWAKAjADIgJAZQgwgJgggTgAhuBIQAHAHAHAFQAegUALgPQACgFgEABIhNAAQANARALAKgAj5ATIAaAAIAAgxIgaAAgAiWgOIBjAAIABgBIAAgOIhkAAgAiWgxIBkAAIAAgPIhkAAgAj5htIAAA3IAaAAIAAg3IgCgCIgWAAIgBAAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAABAAAAgAA4CIIAAh/IgnAGQgCgLgFgLIAagDQAJgMALgPQgXgUgWgMIALgUIALAGQAOgaAMgdIAUALQgJAWgTAjQAIAGAIAIQANgaAHgWIAXAGQgKAigkAxIAagFIgFgPIAVgGQALAgADAVIgVAEQgCgGAAgHIgRACIAACDgAANB2QAJglABg0IAWADQgCAtgHAtgABsBoQAigfAMgfQABgGgEAAIgZAAIAAgYIArAAIANAHQgIAagIATQgNAYgaAggABXAhIAXgDIAJA8IgWABQgDgcgHgeg");
	this.shape_2.setTransform(50.025,0.0006);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chLineAmp, new cjs.Rectangle(-21.1,-20.7,102,38.7), null);


(lib.chDeltaX = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(30,0,1.0002,0.3399,0,0,0,0.2,0);
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AA5CLIAAh5QgIAXgQAaIgXgHQAegsAMgxIgkAAIAAgZIApAAIAAgpQgUAEgPAAIgFgXQA9gIAggJIAFAXIgiAJIAAAtIAkAAIAAAZIgkAAIAAAHQAXAXASAZIgSAQIgXggIAACFgAjDB2QApgQAjgWQgngogOgwIgFAAIAAAEQgBBWgoA4IgXgNQAng5AAg/IAAhsQAAgHAHAAIBIAAIAAgdIAaAAIAAAdIBDAAIAVANQgDAbgPAaIgWgIQAIgSACgLQABgEgEAAIg3AAIAAAzIA6AAIAOANQgRA2gWAZQgIALgLALQAfAVAqAPIgOAWQgtgPgfgcQgrAhgjALgAh3AsIARAVQAhgfAOgmQADgFgHABIhXAAQAIAdATAXgAixhRIAAAvIA2AAIAAgzIgyAAQgBAAgBABQAAAAgBAAQAAABgBAAQAAABAAABgAB1CFIAAgZIBIAAIAAgoIhMAAIAAgYIBMAAIAAgmIg9ABIgEgXQBiAAA4gPIAHAZQggAGgnADIAAApIBKAAIAAAYIhKAAIAAAoIBHAAIAAAZgAkfB3QAigtAIg2IAZAFQgNBEgcAmgAkfglIANgXQAZAMAdAVIgOAWQgggWgVgKgACFgrQgEAAAAgDIAAhQQAAgEAEAAICPAAQABAAAAAAQABAAAAABQABAAAAABQAAABAAABIAABQQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAgACZhCIBmAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIAAgnIhnAAgAkZhuIANgXQAZAMAfAXIgOAWQghgXgWgLg");
	this.shape_2.setTransform(50.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chDeltaX, new cjs.Rectangle(-21.2,-20.7,102,38.7), null);


// stage content:
(lib.myAnimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// helper
	this.title = new lib.title();
	this.title.name = "title";
	this.title.parent = this;
	this.title.setTransform(799.85,449.85,2.5,2.5);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1));

	// UI
	this.slTime = new lib.slTime();
	this.slTime.name = "slTime";
	this.slTime.parent = this;
	this.slTime.setTransform(1450.05,789.6);

	this.chWaveSD = new lib.chWaveSD();
	this.chWaveSD.name = "chWaveSD";
	this.chWaveSD.parent = this;
	this.chWaveSD.setTransform(1356.2,341.6);

	this.slColor = new lib.slColor();
	this.slColor.name = "slColor";
	this.slColor.parent = this;
	this.slColor.setTransform(1450.05,738.55);

	this.chWaveFront = new lib.chWaveFront();
	this.chWaveFront.name = "chWaveFront";
	this.chWaveFront.parent = this;
	this.chWaveFront.setTransform(1480.35,341.6);

	this.chLineNode = new lib.chLineNode();
	this.chLineNode.name = "chLineNode";
	this.chLineNode.parent = this;
	this.chLineNode.setTransform(1480.35,282.85);

	this.chLineAmp = new lib.chLineAmp();
	this.chLineAmp.name = "chLineAmp";
	this.chLineAmp.parent = this;
	this.chLineAmp.setTransform(1480.35,224.15);

	this.instance = new lib.textureWaveX();
	this.instance.parent = this;
	this.instance.setTransform(-1857,442.1);

	this.rb12 = new lib.rb12();
	this.rb12.name = "rb12";
	this.rb12.parent = this;
	this.rb12.setTransform(1480.35,72.1);

	this.rb02 = new lib.rb02();
	this.rb02.name = "rb02";
	this.rb02.parent = this;
	this.rb02.setTransform(1480.45,156.2);

	this.rb01 = new lib.rb01();
	this.rb01.name = "rb01";
	this.rb01.parent = this;
	this.rb01.setTransform(1480.35,114.15);

	this.chDeltaX = new lib.chDeltaX();
	this.chDeltaX.name = "chDeltaX";
	this.chDeltaX.parent = this;
	this.chDeltaX.setTransform(1356.25,282.85);

	this.slPhi0 = new lib.slPhi0();
	this.slPhi0.name = "slPhi0";
	this.slPhi0.parent = this;
	this.slPhi0.setTransform(1349.35,517.35);

	this.slIntRatio = new lib.slIntRatio();
	this.slIntRatio.name = "slIntRatio";
	this.slIntRatio.parent = this;
	this.slIntRatio.setTransform(1450.05,687.5);

	this.instance_1 = new lib.texture2DPlane();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-849.3,291.45,1,1,0,0,0,50.2,50);

	this.slAmp = new lib.slAmp();
	this.slAmp.name = "slAmp";
	this.slAmp.parent = this;
	this.slAmp.setTransform(1450.05,636.45);

	this.slDeltaPhi = new lib.slDeltaPhi();
	this.slDeltaPhi.name = "slDeltaPhi";
	this.slDeltaPhi.parent = this;
	this.slDeltaPhi.setTransform(1450.05,585.4);

	this.slCameraRR = new lib.theSlider();
	this.slCameraRR.name = "slCameraRR";
	this.slCameraRR.parent = this;
	this.slCameraRR.setTransform(1350,850);

	this.slLambda = new lib.slLambda();
	this.slLambda.name = "slLambda";
	this.slLambda.parent = this;
	this.slLambda.setTransform(1350,470.35);

	this.slSlitDD = new lib.slSlitDD();
	this.slSlitDD.name = "slSlitDD";
	this.slSlitDD.parent = this;
	this.slSlitDD.setTransform(1350,421.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.slSlitDD},{t:this.slLambda},{t:this.slCameraRR},{t:this.slDeltaPhi},{t:this.slAmp},{t:this.instance_1},{t:this.slIntRatio},{t:this.slPhi0},{t:this.chDeltaX},{t:this.rb01},{t:this.rb02},{t:this.rb12},{t:this.instance},{t:this.chLineAmp},{t:this.chLineNode},{t:this.chWaveFront},{t:this.slColor},{t:this.chWaveSD},{t:this.slTime}]}).wait(1));

	// btn3D
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(101.2,875.708);

	this.btn3D = new lib.btn3D();
	this.btn3D.name = "btn3D";
	this.btn3D.parent = this;
	new cjs.ButtonHelper(this.btn3D, 0, 1, 2, false, new lib.btn3D(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn3D},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1066.2,450,2825.7,450);
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