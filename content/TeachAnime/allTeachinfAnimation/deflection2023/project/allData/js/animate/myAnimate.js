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


(lib.btnReset = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AD+CnIAAhzQhEBChDAeIgUgcQBagoBBhJIAAhjIiLAAIAAgfICLAAIAAgrIAfAAIAAArICKAAIAAAfIiKAAIAABjQA5BFBfAqIgXAaQhPgogyg0IAABzgAmxCiIAAgcICUAAIAAgRIiDAAIAAgcICDAAIAAgUIh0AAQgEAAAAgEIAAh3QAAgEAEAAIB0AAIAAgSIiXAAIAAgcICXAAIAAgRQhFADgvgCIgCgfQA7ACBNgFQBQgFAogGIAEAeQgfAHhIAEIgIABIAAATICVAAIAAAcIiVAAIAAASIByAAQAEAAAAAEIAAB3QAAAEgEAAIhyAAIAAAUICBAAIAAAcIiBAAIAAARICSAAIAAAcgAj+ApIBXAAIABgCIAAgTIhYAAgAl3AnQAAABAAAAQAAAAAAAAQAAABABAAQAAAAAAAAIBZAAIAAgVIhaAAgAj+gHIBYAAIAAgXIhYAAgAl3gHIBaAAIAAgXIhaAAgABlAjQAxgxAVhAIAdAKQgIARgEAOIAuAsIgVAXQgPgVgXgVQgWAngaAZgAFcgQQgNAUgJANIgdgQQAfgjANgsIAeAJIgMAdQAoAhAjAiIgUAWQgcgfgmgig");
	this.shape.setTransform(0.025,0.025);

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
	this.shape.graphics.f("#FFFFFF").s().p("AEaDUIAAmmICOAAIAAGmgAABDUIAAmmICOAAIAAGmgAmnjRIFoDRIloDSg");
	this.shape.setTransform(0.525,0);

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
	this.shape.graphics.f("#FFFFFF").s().p("AjRB5IAAgiIglAAIAAgUIAlAAIAAgPIggAAQgBAAgBAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIAAhuQAAAAAAgBQAAgBABAAQAAAAABgBQABAAABAAIAgAAIAAgRIgjAAIAAgVIAjAAIAAgSIATAAIAAASIAiAAIAAAVIgiAAIAAARIAhAAQABAAABAAQAAABABAAQAAAAAAABQAAABAAAAIAABuQAAABAAAAQAAABAAAAQgBAAAAABQgBAAgBAAIghAAIAAAPIAkAAIAAAUIgkAAIAAAigAi+AgIAQAAIABgBIAAgbIgRAAgAjiAfIABABIAQAAIAAgcIgRAAgAi+gPIARAAIAAgdQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIgQAAgAjigPIARAAIAAgdIgRAAgAg6B3IgBgEIgLAAIAAhDIgQAAIAABDIgTAAIAAhDIgSAAIAABIIgUAAIAAiXQgBgGAGAAIB2AAQAGgBAAAHIAACCQAAAMgKAGQgGADgLAAIgRgBgAgzBkQAJABACgBQAFgDABgHIAAgqIgRAAgAgzAbIARAAIAAgqIgDgBIgOAAgAhWAbIAQAAIAAgrIgQAAgAh7gPIAAAqIASAAIAAgrIgRAAIgBABgAAIBgQAGgDAHgBIAAhgIAUAAIAABbIAQgFIAAhpIgjAAQgBAAgBAAQAAgBgBAAQAAAAAAgBQAAgBAAAAIAAhTQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAABAAIBXAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABIAABTQAAAAgBABQAAABAAAAQgBAAAAABQgBAAAAAAIgfAAIAAAcIAjAAIAAAVIgjAAIAAAyIAggLIAIAUQgMAHgdAIQgmAMgYAEgAAogtIAAABIAxAAIACgBIAAguIgzAAgAB+BoIAAjPQABgIAHAAIBvAAIgDAWIhcAAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAABAAABIAAAmIBTAAQAIABgBAGIAABVQABAHgIAAIhTAAIAAAkQAAABAAABQAAAAAAABQABAAAAAAQABAAAAAAIBhAAIAAAWIhxAAIgCAAQgGAAAAgIgACUAdIBDAAQABABAAAAQABAAAAAAQAAgBAAAAQABgBAAgBIAAgzQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBAAgBAAIhDAAgAh/gyIAAgRQgIAFgJAEIgNgTQA3gUAPgWIATADIgCAEQAZAWAlAMIgNATIgPgIIAAARgAgqhGQgTgKgWgQQgPANgXANIBPAAIAAAAg");
	this.shape.setTransform(-53.1,0.725);

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

}).prototype = getMCSymbolPrototype(lib.slDD, new cjs.Rectangle(-77.8,-16.5,351.8,33.1), null);


(lib.chPredict = function(mode,startPosition,loop) {
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
	this.shape_2.graphics.f("#FFFFFF").s().p("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");
	this.shape_2.setTransform(79.125,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chPredict, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


(lib.chLine = function(mode,startPosition,loop) {
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
	this.shape_2.graphics.f("#FFFFFF").s().p("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");
	this.shape_2.setTransform(80.1,-0.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chLine, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


(lib.chFollow = function(mode,startPosition,loop) {
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AE/BnQAUgFAHgHQAIgHAAgJIAAgzIgCgCIgKAAQAAAagLAKQgGAHgJABQgKAAgPgEIAAA7IgUAAIAAjqQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAIACgBIAyAAIANAIIgLA+QgDAQAEAEQAHAQAEAMIAgAAQAGgBAAAGIAABBIAAACQABAFAGAGQAFAHAHAEQAUAFBfgEIgFAWIhZAAQgkgCgMgSQgGAHgLAHQgNAIgMABgAEjhfIAACGQAJAIAKAAQAFAAABgDQACgBADgJQABgVgQgqQgBgCAAgHIALg6IgYAAIgBABgAizBlQAogIAbgMQgUgRgKgQQgQAUgTAMIgPgQQAVgQAQgUQAHgKAKgSIgjACIgGgUIAkgEQAJgGAKgKQgZgVgagMIAJgUQAHACAPAKQAQgTANgXIASANQgKARgUAYIAUAPIABgCQAdgcANgdIAUAKQgQAggxAsIA4gGIgMgSIATgMQAaAjANAYIgTAJIgLgRIhNAHIgGANIBVAAIAMALQgOAhgeAZIgEADQAaALAkAFIgIAWQgpgFgigTQgrAUgiAGgAhhBCIAFAFQAYgRAMgSQACgEgEAAIhFAAQANAWARAMgABVBlIAfgIIAAjJQAAgGAGAAIBtAAQAFAAAAAHIAABlQABAGgIAAIgyAAQAEAXAHAQQAfgTAPgPIAOARQgUASgfASQANAYAmAXIgRAPIgSgOQgvgpgJhBIgWAAIAABWQAWgIANgHIALATQggASg5ANgACJgUIBMAAQAAAAABAAQAAgBABAAQAAAAAAgBQABgBAAAAIAAgXIhPAAgACJhXIAAAVIBPAAIAAgVQAAgFgGAAIhEAAQgFABAAAEgAjZB5IAAhnIgQAPIgSgQQAogcATgrIAVAJIgYAnIAAB/gAmRB5IAAgjIhsAAIAAgVIBsAAIAAgUIhUAAQgHAAAAgGIAAhdQAAgGAHAAIBUAAIAAgUIhkAAIAAgWIBkAAIAAgSIAXAAIAAASIBjAAIAAAWIhjAAIAAAUIBUAAQAHAAAAAGIAABdQAAAGgHAAIhUAAIAAAUIBrAAIAAAVIhrAAIAAAjgAl6AXIBCAAIABgBIAAgUIhDAAgAnUAWIABABIBCAAIAAgVIhDAAgAl6gSIBDAAIAAgUIgBgBIhCAAgAnUgmIAAAUIBDAAIAAgVIhCAAIgBABgAAHBgQAFgDAGAAIAAhjIAUAAIAABdIAPgFIAAhrIghAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAhSQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAIBPAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABIAABSQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAIgaAAIAAAiIAcAAIAAAUIgcAAIAAAuIAZgLIAIATQgdARg+AQgAAlguIArAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBABAAIAAgtIgtAAgAHGBbIgBgWQAVAFAEgDQAFgDABgGIAAgGIhEAAIAAAgIgUAAIAAhjQAAgEAEAAIBiAAQAGAAAAAEIAABRQAAAMgKAGQgHAFgOAAIgTgCgAGgAoIBEAAIAAgNIhEAAgAGgABIAAAKIBEAAIAAgKIgDgBIhAAAIgBABgAFLgsIAOgPQAMAKANARIgNAOQgQgTgKgHgAFyglQAYgWARgbIgbAAIAAgTIAkAAIAFgQIAUAHIgEAJIA/AAIAAATIhHAAIgIAMIBJAAIAAAQIgjAAIAAAOIArAAIAAATIhqAAIAAgNIgMAOgAGVgsIAmAAIAAgOIgbAAQgGAHgFAHgAj5gxQAhgdATgpIAUAJQgXAygfAZgAFWhfIANgOQANAJAOATIgQANQgOgSgKgJg");
	this.shape_2.setTransform(79,-0.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chFollow, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


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

	// UI
	this.chPredict = new lib.chPredict();
	this.chPredict.name = "chPredict";
	this.chPredict.parent = this;
	this.chPredict.setTransform(1441,446.55,1,1,0,0,0,67.2,-1.4);

	this.btnReset = new lib.btnReset();
	this.btnReset.name = "btnReset";
	this.btnReset.parent = this;
	this.btnReset.setTransform(1424.55,734.25);
	new cjs.ButtonHelper(this.btnReset, 0, 1, 2, false, new lib.btnReset(), 3);

	this.btnPlayStop = new lib.btnPlayStop();
	this.btnPlayStop.name = "btnPlayStop";
	this.btnPlayStop.parent = this;
	this.btnPlayStop.setTransform(1424.55,659.5);
	new cjs.ButtonHelper(this.btnPlayStop, 0, 1, 2, false, new lib.btnPlayStop(), 3);

	this.slDD = new lib.slDD();
	this.slDD.name = "slDD";
	this.slDD.parent = this;
	this.slDD.setTransform(1413.1,388.4,1,1,0,0,0,49.5,0);

	this.slCameraRR = new lib.theSlider();
	this.slCameraRR.name = "slCameraRR";
	this.slCameraRR.parent = this;
	this.slCameraRR.setTransform(1350,850);

	this.chLine = new lib.chLine();
	this.chLine.name = "chLine";
	this.chLine.parent = this;
	this.chLine.setTransform(1441,562.7,1,1,0,0,0,67.2,-1.4);

	this.chFollow = new lib.chFollow();
	this.chFollow.name = "chFollow";
	this.chFollow.parent = this;
	this.chFollow.setTransform(1441,504.6,1,1,0,0,0,67.2,-1.4);

	this.sl03 = new lib.theSlider();
	this.sl03.name = "sl03";
	this.sl03.parent = this;
	this.sl03.setTransform(1837.8,283.45);

	this.sl02 = new lib.theSlider();
	this.sl02.name = "sl02";
	this.sl02.parent = this;
	this.sl02.setTransform(1837.8,202.95);

	this.sl01 = new lib.theSlider();
	this.sl01.name = "sl01";
	this.sl01.parent = this;
	this.sl01.setTransform(1837.8,122.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sl01},{t:this.sl02},{t:this.sl03},{t:this.chFollow},{t:this.chLine},{t:this.slCameraRR},{t:this.slDD},{t:this.btnPlayStop},{t:this.btnReset},{t:this.chPredict}]}).wait(1));

	// btn3D
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("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");
	this.shape.setTransform(1522.55,38.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("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");
	this.shape_1.setTransform(209.9,66.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(8,1,1).p("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");
	this.shape_2.setTransform(209.9,66.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AmYFSQhLgugTgXQgDBHgHAWQgNArgoAAQgVAAgQgIQhSAAgfAJQglAGgXAAQhEAAgdgfQghgqAAhMQAAhcADgsQADgxAAhYQAAg2gIgqQgKggAAglQAAgsBehDQAlgZAAgSQABgPgOgPQgNgNgBgRQAAgJARgMQAOgMAoAAQA+AAAxAWQAzAbAAAhQAAAjhPAVQi4AwABA9IAAAEIAKADQAHAAAWgLQBTgpAuAAQBNAAA0A0QAvA0AABmQAACngDBeIADAAQAOAAAaAKQB8A2BXAAQAWAAAHgVQAJggAAhPIAAkFQAAglgTAAQgRAAgcAOQhZArguAAQguAAgdgbQgagZAAgfQAAhBBchOQAjgZAAgXQABgSgQgQQgPgRABgKQgBgMANgLQAQgOAcAAQBBAAA5AdQAvAZABAZQAAAmg9AcQizBWgBAjQABAIAGAAQAPAAAigSQCKhIA5AAQA8AAAdArQAbAvAABjIAADuQgDCggZAxQgbA1guAAQhYAAighlgAsHEHQAAAiA/AAQAQAAAagIIAagGIAEiSIAAgEQgZAFgbAIQgnALgVAAIgUgBQgDAtAAA+gAsOhPQAOAhAAAkIAABHIAbgPQAjgUAZAAQAXAAAVAEIABhwQgBglgsAAQgZAAhMAogAYoFOQhfhPAAgaQAAgDAIAAQACAAALAFQB7A9AOAAQAXAAgBghIAAmAIgVAEQgdAGgVACIAJAZQAoBnAABhQAABuhPAAQgXAAgMheQgUidgLhSQgWgDgRgFIAABlIABABQAdAbAAAjQAAAbgeAeIAADgQAAA1gUAXQgcAZgyAAQg5AAhagsIg0gdIgOALQgvAogVAAQhKAAAAhWQgBgQAOgJIAPgFQAOgFBthTQgsARgWAAQgfAAgbgUQgYgSAAgPQAAgtAqAAQAHAAALgCIAAjmQAAgugNhHQgFgcAAgbQgBgZAVgUQASgTBFgYQAQgFAAgIQAAgFgPgDIghgDQgMgDAAgJQAAgMARgJQAXgJApAAQBKAAAjATQAbANAAAVQAAAdg/AOIhZATQg2AMAAAbQABAHACAHIACAAQAOgBAigOQB2gsAzAAQA2AAAeAqQARAcAHA2IAIAAIAJABIAKACQAAgeAlAAQAJAAANAQIA7gTQAigNAegEQgEg+gQgwQgJgXABgPQAAgiAtAAQAtAAAtAxQAbAiAHBtQASAGARAIQAnAXAAAbQAAAihHADIAAG0QAACEhHAAQgzAAhqhdgASeFOQAWAEAaAAQBtAAAAgxIAAhZgATrAUQgpANgaABIAAAxQAxgQA9gYQAWgJAPAAIAAgeQgoAEgoAMgATnhfQgnAMgYABIAAAqIAngOQAugQAgAAQAPAAAPABIAAgtQgqAGgqANgASmjLIgPAFQAJASAEAXIAmgNQAqgRAeAAQAVAAAUAFQgBgZgEgNQgIgMgJAAQgdAAhiAdgAJVFeQgagNgTgMQgEAlgGARQgOAmgoAAQgiAAgYgbQgggkAAgnQgBgbAMgxQAXhZAAh2QAAiPgNgiQgKgWAAgUQAAhkC0g/QAtgLAAgQQAAgIgKgJQgFgHAAgHQAAgaBTAAQBKAAA4AfQAtAZAAAeQABAqiAALIjAAoQg7AMAAA4QAAASAMANQAOARAKAWQAYgIBFghQA6gdApAAQBLAABAAgQApAXAAAcQAAAnhOADIgXACQArBVACEtQAABlhDAAQgrAAiQhNgAIyAgQAACjgGBZQA3ARAmAAQApAAAAg5IAAjiQAAgfgIgYIgDABQg7ATgjAAIgZgBQACAWAAAcgAB5EnQheiYAAgXIAAgEQgFgIAAgKQAAgUAjgNQA6gTA7gbIAAh0IgnAIQgwAAgdgTQgYgNAAgQQAAgRAPgMQAYgVARAAIAPAAQAIAAAqgcIATgMIAAgBQAAhNgigvQgQgaAAgTQAAghA4AAQAxAAAsAjQAqAhAAA3IAAAwQAhAFAbASQAiAaAAAcQAAAtg4AAIgmAHIAABGIAfgWQAUgOAJAAQATAAAAAaQAABHhPBIIAAD2QAABshEAAQgpAAhViEgACaDwQAUAAAAgaIAAgzQgeAJgbAAQgXAAgSgIQBABMAOAAgA8mGKQghgjABglQAAghAWAAQALADAHAAQAfAAA+hTQA2hCAAgtQAAgOgFgOIgsABQhHAAgogUQgngSAAgaQAAgQAXgQQASgMAXAAIAJACQAHACAHAAQAfAADcg1IgBg9QhFBBgfAAQhIAAg6g/QhJhQAAgoQAAhXBLAAQAiAAAaAyIAeA4QATAlATAAQAWAAA/g3IAMgIIAAgFQAAgkgPgkQgPgbAAgRQAAgpA1AAQA6AAAmAdQAVARAJAWQBXgqBIAAQA9AAA1AgQA6AfAAAbQAABUhoBhIgDAEQA2AIAxAZQAxAbAAAhQAAAtheACIgDAAQASApAZA9QA2B+AAA7QAAA3grAnQgoAhhfAAQh/AAg+gzQhBgzABhPIAAhtQgBgtgMgZQgFgLgBgHIgTADIhDAJQALAXAAAiQAABnhGBoQhOBsg+AAQgxAAgfghgA0oAYQAXAbAAAvIAAB0QAABHBOAAQBYAAAAgvQgBg6gZiqQhSAFhRAJgA1mkhIAACnQAtgIAqgEIAgg/QAig7AAg2QAAgXgiAAQg2AAhBAsgAl0C+QgzhsgaggQgLgHAAgGQAAghApAAQAmAABMA/QAzAvAAArQAABLgzAAQgvAAgUgqg");
	this.shape_3.setTransform(209.9,66.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("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");
	this.shape_4.setTransform(101.2,875.708);

	this.btn3D = new lib.btn3D();
	this.btn3D.name = "btn3D";
	this.btn3D.parent = this;
	new cjs.ButtonHelper(this.btn3D, 0, 1, 2, false, new lib.btn3D(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn3D},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(800,450,1311.8000000000002,450);
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