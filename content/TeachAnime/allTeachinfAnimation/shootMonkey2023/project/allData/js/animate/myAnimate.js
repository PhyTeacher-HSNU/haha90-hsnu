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
	this.shape.graphics.f("#FFFFFF").s().p("AhQBRQgigiAAgvQAAgvAighQAigiAuAAQAwAAAhAiQAiAhAAAvQAAAvgiAiQghAigwAAQguAAgigig");
	this.shape.setTransform(-0.05,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.checker2, new cjs.Rectangle(-11.5,-11.6,23,23), null);


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


(lib.btnShoot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEfDQIACgrQAhALAOACQAQAGAOAAQAHAAALgIQAEgFAAgIIAAkPIh+AAIAAgpIB+AAIAAhJIApAAIAABJIAiAAIAAApIgiAAIAAEaQAAAdgWANQgNAJgXAAQggAAg0gRgAkJC6QAtgMAcgNQgcgWgXgoIAkgQQAYArAZARQAwgdATgnQACgHgIABIiSAAIAAglICyAAIAVAVQgVA4gcAcQgRANgNANQApARA+ACIgJAnQhPgFgygeQgEADgGACQgvAZgeAHgAB8DYIAAgrQAwAPAOgIQAJgHAAgMIAAg+IggAbQgYAUgiARQgiATgcALIgYgjQBaggA0gtIAGgGIiNARIgHgnIAagEIAAjiQACgJAHAAIA6AAQAIgVACgRIAlAJIgFAdIBHAAQAJABAAAIIAACfIAVg0IAlALQgSA2goA9IAAB6QAAAXgSANQgNAIgaAAQgWAAgfgGgABUAtIBvgLIAAggIhvAAgABUgkIBvAAIAAgkIhvAAgABUiPIAAAgIBvAAIAAggQAAgBAAgBQAAgBgBAAQAAgBAAAAQAAAAgBAAIhpAAQgEACAAACgAmfDUIgEgpQBAAUAWgHQAPgGAGgLQAEgaAAgeQAAgIgGAAIhPAAIgEARQgSgEgRgFIAPhnQACgNALAAIBlAAIAAghQAAgEgFAAIhiAAIAAgXIgpAMIgPgkQAtgJAcgIQgYgWgXgMIAYgeQAiAXAcAWQAkgYARgWQACgGgGACIhSAAIAAgmIB2AAIAUATQghBRhcAjIBfAAQAKACAAAIIAABtIgmAAIAAgLIhHAAQgIACgBAHIgEAdIBpAAQANABAAAGIgGBnQgFARgNANIgIAEQgPAJgcAAQgdAAgqgJgAEkgVIAogMQAgBoAFAeIgnAIQgNhGgZg8gAkGgDQAPgFAGgGQANgNAAgXIAAgeIACgFIAGgCIBuAAQAEAAACACIACAFIAAAzQACAIAAAFQADAEAMAAIADAAQAEgCAGAAQAEAAAAgLIAAgVIAhAGIgDAnQgCAJgGABQgLAMgLAAIgiAAQgRAAgIgMQgLgHAAgQIAAgkQAAgDgFAAIgsAAQgFgCAAAFIAAAOQAAAPgGALQgLAZgeANgAjmi1IAVgiIAkAkQAagaANgRIAYAaQgHALgcAdIAYAQIArgtIAZAdIgZAaQgEAFgFACQAiARAnALIgYAkQhxgvhPhLg");
	this.shape.setTransform(0.025,0.0082);

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


(lib.btnReset = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABJDeIAAj6QgKAPgLANIgmgTQBJhaAXhwIAnALQgQBAgUAtIAAFDgAiZDeIAAiQIgoAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAABIAAB0IglAAIAAiQQAAgIAHAAIBIAAIAAgwIg+AAQgBAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAIAAApIgmAAIAAhHQAAgFAGAAIDMAAIAeAPQAAAdgNAjIgjgJIAJghQAAgEgGAAIg4AAIAAAwIBHAAQAKAAAAAIIAABuQAAAXgTALQgPALgqgFIgDgqQARAGAHAAQAGAAACgCQAJgFAAgMIAAhDQgBgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgnAAIAACQgAnPCvIAcAAIAAhyIAmAAIAABxIAfgEIAAiNIhBAAQgMAAABgLIAAjGQgCgJALAAIA3AAQAJgTACgLIAkALIgHATIA5AAQAKACAAAHIAABNQAAAJgMAAIh+AAIAAAZICCAAQALAAAAALIAABKQAAANgLAAIgxAAIAAAmIA+AAIAAAlIg+AAIAAA8QAogHAcgIIAMAoQhSAUh8AIgAmZgHQgBADAFAAIBiAAQADAAAAgFIAAgZQgBgDgCAAIhmAAgAmZiaIAAAdIBiAAQAFABABgFIAAgZQgBgDgFAAIheAAQgBAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAgAB/DTIAAgpIDHAAQAliFARh9IAnAIQgYCJgcBxIBhAAIAAApgAChhLIAogJQAdBbALCDIgpAHQgPiMgYhQgAjlg6IAAgiICLAAQAEgCAAgBIAAgVIirAAIAAgiICrAAIAAgTIgEgBIiLAAIAAgiICpAAQALAAAAALIAAArIAhAAIAAAiIghAAIAAAvQAAALgLAAgACOh8IAAgpIB/AAIAAg4IAsAAIAAA4ICQAAIAAApg");
	this.shape.setTransform(0,0.025);

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


(lib.slV0 = function(mode,startPosition,loop) {
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

	// js
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAJBsQAYgJAHgKQAGgJADgLIAAgvQAAAAgBgBQAAgBAAAAQgBAAAAgBQgBAAgBAAIgaAAIAAgXIAvAAQAGABAAADIAABDQACAJAHAIQAIAJARAHQAXAHCMgHIgFAaIiEAAQg0gDgRgeQgEAKgNALQgNALgNAFgAjaCCIAAh0IgkAeIgPgTQA/gpAXguQAAAAAAgBQAAAAgBgBQAAAAgBAAQgBAAgBAAIhIAAIAAgYIAoAAIAAgoIAXAAIAAAoIAeAAIANALQgPAkgbAhIAAALIA2AsIgQATQgQgRgWgSIAABjgAixBxQBJg5ACiMIAAgNIgrAAIAAgYIB4AAIAGABQADACAAAKIgBB4QgEBZgeAUQgQAKgvgKIgCgdQAoAMALgHQAKgHAGgRQAIgUABgsQABhlgBgEIgEgBIgjAAIAAANQAAA6gQA4QgVA+goAkgACiBcIAAhBQgfAmgdAQIgQgRQAngXAagiIg4AAQgBAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAhFQAAgBAAgBQAAAAABgBQAAAAABgBQABAAABAAIBDAAIAAgTIhJAAIAAgXIBJAAIAAgSIAYAAIAAASIBMAAIAAAXIhMAAIAAATIBEAAQABAAABAAQAAABABAAQAAABAAAAQABABAAABIAABFQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAIg7AAQAcAkAuAYIgSARQgmgagbgeIAABAgAC6gOIAvAAIABgBIAAggIgwAAgABygPQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAIAvAAIAAghIgwAAgAiyAAQAWgXAIgOIASAOQgLASgUAUgAANgvIAMgUQAWAJAXAVIgOAUQgagWgRgIgAAShoIAMgUQAWAKAaATIgOAVQgbgUgTgKg");
	this.shape.setTransform(-55.15,0.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// text
	this.valueText = new cjs.Text("0", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(172,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.valueText).wait(1));

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

}).prototype = getMCSymbolPrototype(lib.slV0, new cjs.Rectangle(-82.1,-16.5,356.1,33.1), null);


(lib.slTheta0 = function(mode,startPosition,loop) {
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

	// js
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AC0B9IAAgbQAvAMAKgHQADgCAAgKIAAgaIitAAQgLAlgOAcIgYgKQAagyABgkIAAhbIgPAIIgMgXQA0gWAUgkIAVAJQgDAEgBAFIBhAAIAOANQgIARgRANIBAAAQAHACAAAGIAACgQgBAPgIAIQgIAIgRABQgTgBgfgFgAClAqIBLAAIAAghIhLAAgABGAqIBHAAIAAghIhHAAgAClgNIBLAAIAAgdQAAgBAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAIhIAAgABGgqIAAAdIBHAAIAAghIhFAAQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAABgABAhFIBcAAQAUgKALgLIhhAAQgNAOgNAHgAhnCAIAAjwQABgGAEAAIBQAAQAGABAAAFIAAC/QgBAQgLAGQgMAKghgHIgCgaQAYAGAFgEQAGgDAAgIIAAiiIgCgBIgoAAIgBABIAADdgAjmCAIAAiOIgKAQIgXgJQAmg2AKhCIAXAFQgIAjgHAYIAAC/gAjKBSQAKgCALgEIAAi7QAAgGAHAAQAaABAbgJIANAUQgZAKgXAAQAAAAgBAAQAAABAAAAQAAAAAAABQAAABAAAAIAACgIAggNIAKAWQgcAOgyANg");
	this.shape.setTransform(-54.225,0.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// text
	this.valueText = new cjs.Text("0", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(172,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.valueText).wait(1));

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

}).prototype = getMCSymbolPrototype(lib.slTheta0, new cjs.Rectangle(-80.6,-16.5,354.6,33.1), null);


(lib.rbCamera2 = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(19.4,0,0.7705,0.3399,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsAsQgrAsg/AAQg9AAgsgsQgsgsAAg+QAAg+AsgsQAsgrA9AAQA/AAArArQAsAsAAA+g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhqBqQgrgsAAg+QAAg9ArgtQAtgrA9AAQA/AAArArQAsAtAAA9QAAA+gsAsQgrAsg/AAQg9AAgtgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABIBSQgTAqgxAYIgPgWQA1gVALgtIg6AAIAAgZIA9AAIAAglIgeAAQgIAPgLALIgUgPQALgNAGgNQAFgKAEgXIAaADQgBAMgEAIIBrAAIAAAZIg7AAIAAAlIBAAAIAAAZIg3AAQAFAnA1AbIgSAWQgsgbgPgngAguCUIAAiyQgFAFgBAEIgTgJQASBYgTA0QgIAYgPAHQgMAFgjgMIACgbQAbALAHgEQAJgFAEgQQAIgegDguQgUAagUAPIgUgTQAkgZATgfQgEgWgFgQQgOAMgPAMIgRgVQAUgPAPgQQgMgWgQgXIAXgOQAMARAJASQAKgPAJgYIAZAJQgNAlgTAXQAJAVAEASQAngxAMg7IAYAGQgKAmgNAcIAADegAgBg3IAAgZIBeAAIAAgdQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAAAgBAAIhIAAIAAgZIBeAAQAGACAAAFIAAAyIAcAAIAAAZg");
	this.shape_2.setTransform(39.825,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbCamera2, new cjs.Rectangle(-20.2,-18,79,36), null);


(lib.rbCamera1 = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(19.4,0,0.7705,0.3399,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsAsQgrAsg/AAQg9AAgsgsQgsgsAAg+QAAg+AsgsQAsgrA9AAQA/AAArArQAsAsAAA+g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhqBqQgrgsAAg+QAAg9ArgtQAtgrA9AAQA/AAArArQAsAtAAA9QAAA+gsAsQgrAsg/AAQg9AAgtgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhqCVIAAiKQgLAagIAQIgYgFQAegvALg9IgjAAIAAgaIAlAAIAAg8IAaAAIAAA8IAdAAIAAAaIgdAAIAAAGQAWAgATAhIgWANQgIgRgLgSIAACggABsCTIAAgOIhZAAIAAAOIgZAAIAAhOQAAgEAFAAIB/AAQAHAAAAAEIAABOgAATBcIAAASIBZAAIAAgSQAAgEgFAAIhSAAQgBAAAAAAQgBAAAAABQgBAAAAABQAAABABABgAhFCBQAjgnAAg0IAAhSQAAgJAJAAICVAAQAJAAABAJIAABTQgCALgIgBIiGAAQgCAdgMAeQgJAWgPAPgAgJAbIByAAQADAAABgEIAAgPIh2AAgAgJgbIAAANIB2AAIAAgNQgBgEgDAAIhvAAQgDAAAAAEgAgzhXQBDgeATggIAZAFQgCABgCADQAoAfA2AUIgPAXIgkgSIAAARIhnAAIAAgRIgeATgABWhbQgTgLgXgTQgOAOgYAQIBQAAIAAAAg");
	this.shape_2.setTransform(39.9,0.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbCamera1, new cjs.Rectangle(-20.2,-18,79,36), null);


(lib.rbCamera0 = function(mode,startPosition,loop) {
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
	this.btnS.setTransform(19.4,0,0.7705,0.3399,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsAsQgrAsg/AAQg9AAgsgsQgsgsAAg+QAAg+AsgsQAsgrA9AAQA/AAArArQAsAsAAA+g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhqBqQgrgsAAg+QAAg9ArgtQAtgrA9AAQA/AAArArQAsAtAAA9QAAA+gsAsQgrAsg/AAQg9AAgtgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AADCRQgLAAgIgFQgPgMABgYIAAhuIgZAKIgNgYIAmgSIAAhNIAcAAIAABCIAogTIAAhMIAcAAIAABBIA5gZIATAJIAABuQAAAJgFALQgGAMgJAEQgNAGgegDIgBgaQANACAHAAQAKgBAFgIQADgGAAgLIAAhFQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAIguAUIAACCIgcAAIAAh2IgoATIAAB0IACANQADAGALgBIBUAAQAPgCAFgFQADgIgCghIAcADQAAAygFAKQgJAKgFACIgUABgAiSBlQAXgJAPgHIAAh8IgiAAIAAgcIAiAAIAAhJIAbAAIAABJIAeAAIAAAcIgeAAIAABtQAOgJAJgIIARAVQggAZg5Aag");
	this.shape_2.setTransform(39.575,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbCamera0, new cjs.Rectangle(-20.2,-18,79,36), null);


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
	this.shape_2.graphics.f("#FFFFFF").s().p("AFdB6QgoARg2ABIgGgYQAiABAZgFQAEgCAHgBIgjgWIANgTQAdAUAXAKQAJgDALgIQAWgKAMgMQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBgBgBAAIh7AAIAAgWICYAAQAKAHAHAEQAAABAAAAQABABAAAAQAAABgBAAQAAAAAAABQgTAcgvAaQAeAGAqAAIgHAZQg1gDgqgPgADNCMIAAkWIAXAAIAAEWgAA0CJIgEgeQAfAJAHgHQAGgHAFgOQAEgRAAgnQAChYgCgDIgDgCIgcAAQgDASgBAVQgEAtgJAnQgLA1gMAXIgagFQAhhQAIhyIgYAAIAAgZIAZAAIAAgTIAAgfIAaAAIAAAfQgBAIAAALIAvAAIAGABQADACAAALIgBBtQgCBQgXARQgHAFgPAAQgLAAgQgCgAjpCIIAAgNIi/AAIAAANIgaAAIAAjnQAAgJAJAAIBVAAQAKgVAEgOIAYAJIgJAaIBvAAQAJAAAAAJIAADngAmoBiIC/AAIAAgnIi/AAgAmoAhIC/AAIAAgqIi/AAgAmohLIAAApIC/AAIAAgpQAAAAAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAIi4AAQgFAAABADgAiMBvIBDgFIAAgUIg+AAIAAgWIA+AAIAAgRIg9AAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAgBIAAhaIADgCIA9AAIAAgSIhBAAIAAgVIBBAAIAAgRQgkACgWAAIgDgWQBWAAAxgLIADAXQgQAEglADIgBAAIAAASIA8AAIAAAVIg8AAIAAASIA3AAQABAAABABQAAAAABAAQAAABABAAQAAAAAAAAIAABaQAAABAAABQgBAAAAABQgBAAAAAAQgBABgBAAIg3AAIAAARIA3AAIAAAWIg3AAIAAARIAzgDIABAXIiLALgAgyAZIAjAAIABgBIAAgPIgkAAgAhxAZIAoAAIAAgQIgoAAgAgygMIAkAAIAAgQIgkAAgAhxgMIAoAAIAAgQIgoAAgACrAdQAHgwAAg5IAUABQgDBLgEAfgAELAdQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAgBIAAg9QABgBAAgBQAAAAABgBQAAAAAAAAQABAAAAgBICyAAQABABAAAAQABAAAAAAQABABAAAAQAAABAAABIAAA9QAAABAAABQAAAAgBABQAAAAgBAAQAAABgBAAgAGJAJIAfAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIAAgaIgBgBIgfAAgAFWAJIAcAAIAAgdIgcAAgAEggTIAAAcIAeAAIAAgdIgeAAQgBAAAAABQAAAAAAAAQAAAAAAAAQAAAAABAAgADshOIAUgDIADBPIgUABgAEWgzQAAAAgBAAQAAAAAAgBQAAAAgBgBQAAgBAAgBIAAhMQABgBAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAICaAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAABIAABMQAAABAAABQAAABgBAAQAAABgBAAQAAAAgBAAgAEshHIBvAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIAAgMIhwAAgAEshxIAAALIBwAAIAAgLQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAAAIhvAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAABABAAg");
	this.shape_2.setTransform(71.875,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chSlow, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


(lib.chBG = function(mode,startPosition,loop) {
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AnQCBQAYgVAPgiIAXANQgSAngcAXQgJgPgHgFgAAnCQIgCgfQAnALAJgHQAHgEAAgJIAAgMIizAAIAAA0IgbAAIAAinQABgIAFAAIDcAAQAIAAAAAIIAACLQgBARgNAIQgLAHgVAAQgPAAgUgEgAhXBCICzAAIAAgWIizAAgAhXgCIAAAUICzAAIAAgUQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAIivAAIgCADgAELCOIAAgcQAhAKAJgHQACgEAAgFIAAgpIhlAAQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAg3QAAgEAEAAIDhAAQAEAAAAAEIAAA3QAAAEgEAAIhgAAIAAAxQAAASgPAJQgHAFgNAAQgPAAgWgGgADoArQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAABAAICxAAIABgBIAAgQIi0AAgAjmBTIAWgMQATAZAQAlIgWANQgTgogQgXgAksBSIAZgFQANApACAXIgZADQgEgXgLgngAlsCOQAAgmgEgXIAagCIADBAgAF7BgIANgYQAyAbAYATIgPAVQgjgZglgSgACxBxQA2gWAcgUIAMAWQggAYgxAUgAnGA/IAAgaIAqAAIAAg2IgqAAIAAgaIAqAAIAAg1IgBADQgQAVgTALIgRgUQARgMANgRQAKgMALgaIAZAIIgGAPIDXAAIAAAbIghAAIAAA3IAnAAIAAAaIgnAAIAAA2IAjAAIAAAagAkQAlIAhAAIAAg2IghAAgAlJAlIAfAAIAAg2IgfAAgAmBAlIAeAAIAAg2IgeAAgAkQgrIAhAAIAAg3IghAAgAlJgrIAfAAIAAg3IgfAAgAmBgrIAeAAIAAg3IgeAAgACzgKIAAgZICCAAIAAgLIhiAAQgEAAAAgEIAAhXQAAgEAEAAIDfAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAABIAABXQAAAEgDAAIhiAAIAAALICBAAIAAAZgADqhGQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAABAAICvAAIABgCIAAgPIixAAgADqhqICxAAIAAgMIixAAgAiQhEQA5gEAvgLIAAgTIheAAIAAgZIBeAAIAAgVIAbAAIAABnIgbAAIAAgMQhBAMggAEgAAngqQgKAAgJgJQgIgJAAgIIAAhQIAbAAIAAAbQA3gJAfgMIAKAYQgkANg8AJIAAAOQAAAGAFAEQACAEAIAAIA8AAQADABAEgEQADgBABgaIAZAGQgDAkgDAEQgKAKgJAAg");
	this.shape_2.setTransform(72.025,0.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chBG, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


// stage content:
(lib.myAnimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// UI
	this.chBG = new lib.chBG();
	this.chBG.name = "chBG";
	this.chBG.parent = this;
	this.chBG.setTransform(1433,658.25,1,1,0,0,0,59.1,-1.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("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");
	this.shape.setTransform(426.925,89.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(12,1,1).p("EAsiAEkQAAA5g1AAQgoAAg5hkQgjhCg3hBIADA1QAEBHAAAFQAABmhAAAQgqAAgXgjQgUgeAAgtQAAhlAEhkIAGi4QAAitgRgfQgNgZAAgLQAAgtA5AAQBpAAAADWIAACTQAdgVAfgjQA4hCARgyQAPgpAdAAQAUAAAUAUQATAVAAAlQAABAhpBlQgTATglAhQA2AuA/BgQAwBKAABAgEA0HgADQAABPhWAAIi+AAQAKCgBMAAQAvAAAohQQAbg3AbAAQAiAAAAAyQAABMg3BAQgyA6hGAAQhkAAg4hOQhChdAAiQQAAh0AshXQA3hwBrAAQBOAAA6BKQBGBaAABygEA7lgCvQAAA5guCgQhNEMh5BgQghAZgiAAQgVAAgmgbQgmgZAAgUQAAgiAvgMQBFgRA4heIgDgCQgbgggYhfIgZhgQghiHgigrQgTgRAAgOQAAgtBAAAQBEAAAdB5IA1DTQACAJAGAOQAOgnAMgpQAahgAAg/QAAgQgKgcQgIgbAAgLQAAgmAhAAQAjAAArAiQAiAaAAAugEAyEgAzQAAgxgdgnQgVgcgZAAQg2AAgPCGIB5AAQAXAAAAgSgEAlDAEgQAAAYgRATQgSASgYAAQgqAAgUgaQgYgfAAg7QAAg2AHhWQAHhhAAghQAAhLgLgUQgNgSgRAAQgTAAgjAhIgVATQAADKACAyQACAxAAA7QAABXg7AAQgpAAgYgeQgXgbAAgpQAAgJALhkQAFg7AAhTQAAiZgRgzQgOgoAAgCQAAgpAmAAQAwAAAmArIAIAIQBJgtA7AAQAjAAAeAaQAuAmAMA6QAJA5gCCSIgDCHQgBApAJAkQAGAPAAARgAWlD3QAAAqgQAgQgUAognAAQgxAAAAiPIAAlkQgDAAgQBjIg0FPQgJA9gkAAQgzAAgGg7QgsmegLAAQgPAAAAB1IAAC3QAAClgqAAQgXAAgPgcQgZgtAAhYQAAg3AGhtQAJh9AAhCQAAhpgDgaQgFgjAAgPQAAgbAagZQAbgUASAAQBVAAASB6IA3GHIAymHQAQh6BBAAQBiAAAAB9IAAFdQAAA1ADA/QAEBBAAAMgAdjAiQAACWhNBgQg4BFhNAAQhRAAgyhLQhAhgAAiTQAAjHBghOQAsgjA3AAQBMAAAvA3QAMAPANAEQAQAGAJAcQAHAVAAAWQAAAegIATQAmAtAABGgAn0C8QAABCgwAwQgvAvhCAAQhPAAgpg0QgmgvAAhSQAAgXARijIAIhMQgYAGgMAAQhaAAAAg2QAAgbAkgVQAPgIAJAAIAIABQAEACADAAQAJAAAOgFIAhgNQgDhcgTgrQgTgnAAgGQAAgmApAAQAsAAAzA0QAkAmAABYIAAABQATgBAPAAQBlAAAABGQAAAaggAUQgoAbhHACIgHBKQgPCnAAgGQAABeAqAAQAdAAAMgmQAFgTACgrQAEhBAXAAQARAAAWAeQAgAuAAA4gAgWEcQAAAXgPAPQgaAbgmAAQgbAAgaghQgdgwAAhZQAAgxAKhwQAGhBAAgfQAAhEgjAAQgUAAggAaIgXASIAAEZQAACqhAAAQggAAgXgXQgfgfAAhFQAAiJAFiAIAHjBQAAhtgQgZQgHgNAAgLQAAgpAxAAQA5AAAlA7QASAaAABQIAAAPQA2geAwAAQBEAAAmA7QAgAxAABIQAAAJgDAmQgCAlgBAfIgBB8QgBBTAMAVQALASAAAYgAHHgDQAABPhWAAIi+AAQAKCgBMAAQAvAAAohQQAbg3AbAAQAiAAAAAyQAABMg3BAQgyA6hGAAQhkAAg4hOQhChdAAiQQAAh0AshXQA3hwBrAAQBOAAA6BKQBGBaAABygAFEgzQAAgxgdgnQgVgcgZAAQg2AAgPCGIB5AAQAXAAAAgSgAbrAsQAAgrgNgrQgIgdAAgLQAAgSALgHQggg8gkAAQgYAAgSAjQgeA8AABqQAABgAcA7QASAoAdAAQAXAAAPgYQAlg5AAhogEgl8AAiQAACWhNBgQg4BFhNAAQhRAAgyhLQhAhgAAiTQAAjHBghOQAsgjA3AAQBMAAAvA3QAMAPANAEQAQAGAJAcQAHAVAAAWQAAAegIATQAmAtAABGgA20C8QAABCgwAwQgvAvhCAAQhPAAgpg0QgmgvAAhSQAAgXARijIAIhMQgYAGgMAAQhaAAAAg2QAAgbAkgVQAPgIAJAAIAIABQAEACADAAQAJAAAOgFIAhgNQgDhcgTgrQgTgnAAgGQAAgmApAAQAsAAAzA0QAkAmAABYIAAABQATgBAPAAQBlAAAABGQAAAaggAUQgoAbhHACIgHBKQgPCnAAgGQAABeAqAAQAdAAAMgmQAFgTACgrQAEhBAXAAQARAAAWAeQAgAuAAA4gA+cAiQAACWhNBgQg4BFhNAAQhRAAgyhLQhAhgAAiTQAAjHBghOQAsgjA3AAQBMAAAvA3QAMAPANAEQAQAGAJAcQAHAVAAAWQAAAegIATQAmAtAABGgEg0nACKQAABphKA/Qg9AzhWAAQheAAhHhhQg7hRAAhvQAAg5ApAAQAXAAAgBNQA3CFBJAAQBLAAAAhTQAAhRh0g3QhUgpgpg2QglgyAAhKQAAhUA3g9QA2g9BTAAQAzAAAvAZQAfAQAJAAQAVAAAeAtQAcAtAAAiQAAAYgQAPQgLAOgZAAQgaAAg3guQg0gggZAAQg/AAAABHQAAA5CFA/QCbBHAACfgEgtWAEcQAAAXgPAPQgaAbgmAAQgbAAgaghQgdgwAAhZQAAgxAKhwQAGhBAAgfQAAhEgjAAQgUAAggAaIgXASIAAEZQAACqhAAAQggAAgXgXQgfgfAAhFQAAiJAFiAIAHjBQAAhtgQgZQgHgNAAgLQAAgpAxAAQA5AAAlA7QASAaAABQIAAAPQA2geAwAAQBEAAAmA7QAgAxAABIQAAAJgDAmQgCAlgBAfIgBB8QgBBTAMAVQALASAAAYgEgn0AAsQAAgrgNgrQgIgdAAgLQAAgSALgHQggg8gkAAQgYAAgSAjQgeA8AABqQAABgAcA7QASAoAdAAQAXAAAPgYQAlg5AAhogEggUAAsQAAgrgNgrQgIgdAAgLQAAgSALgHQggg8gkAAQgYAAgSAjQgeA8AABqQAABgAcA7QASAoAdAAQAXAAAPgYQAlg5AAhog");
	this.shape_1.setTransform(426.925,89.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("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");
	this.shape_2.setTransform(426.925,89.3);

	this.rbCamera2 = new lib.rbCamera2();
	this.rbCamera2.name = "rbCamera2";
	this.rbCamera2.parent = this;
	this.rbCamera2.setTransform(1116.55,850.6,1,1,0,0,0,19.2,0);

	this.rbCamera1 = new lib.rbCamera1();
	this.rbCamera1.name = "rbCamera1";
	this.rbCamera1.parent = this;
	this.rbCamera1.setTransform(1025.35,850.6,1,1,0,0,0,19.2,0);

	this.rbCamera0 = new lib.rbCamera0();
	this.rbCamera0.name = "rbCamera0";
	this.rbCamera0.parent = this;
	this.rbCamera0.setTransform(934.25,850.6,1,1,0,0,0,19.2,0);

	this.btnReset = new lib.btnReset();
	this.btnReset.name = "btnReset";
	this.btnReset.parent = this;
	this.btnReset.setTransform(1448.55,778.75);
	new cjs.ButtonHelper(this.btnReset, 0, 1, 2, false, new lib.btnReset(), 3);

	this.btnShoot = new lib.btnShoot();
	this.btnShoot.name = "btnShoot";
	this.btnShoot.parent = this;
	this.btnShoot.setTransform(1411.05,778.75);
	new cjs.ButtonHelper(this.btnShoot, 0, 1, 2, false, new lib.btnShoot(), 3);

	this.chSlow = new lib.chSlow();
	this.chSlow.name = "chSlow";
	this.chSlow.parent = this;
	this.chSlow.setTransform(1441.1,706.15,1,1,0,0,0,67.2,-1.4);

	this.slV0 = new lib.slV0();
	this.slV0.name = "slV0";
	this.slV0.parent = this;
	this.slV0.setTransform(1350,604.85);

	this.slTheta0 = new lib.slTheta0();
	this.slTheta0.name = "slTheta0";
	this.slTheta0.parent = this;
	this.slTheta0.setTransform(1350,556.35);

	this.slCameraRR = new lib.theSlider();
	this.slCameraRR.name = "slCameraRR";
	this.slCameraRR.parent = this;
	this.slCameraRR.setTransform(1350,850);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.slCameraRR},{t:this.slTheta0},{t:this.slV0},{t:this.chSlow},{t:this.btnShoot},{t:this.btnReset},{t:this.rbCamera0},{t:this.rbCamera1},{t:this.rbCamera2},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.chBG}]}).wait(1));

	// btn3D
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AknCnIAAiaIghAhIgUgYQBDgzAXg7QABgFgGAAIhOAAIAAgeIArAAIAAgrIAfAAIAAArIAdAAIAQANQgOAzgeAlIAAC9gADECfIAAggQAoAOAJgJQADgEAAgGIAAh9Ig4AAIAAgeIBGAAQgegfgagVIAUgVIAdAbQAjgZARgXQABAAAAAAQAAgBAAAAQAAAAgBAAQgBAAgBAAIhvAAIAAgdICHAAIAVAQQgXAsgzAmIAPAPIgNALIAyAAIAUANQgJA2gQAnIgegHQAMgZAFgNQAJgbgDgDIgEgBIghAAIAACGQAAAVgRAKQgIAEgNAAQgSAAgbgHgAjzCLQAVgHAOgIQArgaAAgnIAAgKIghAAQgEAAgBgEIAAjHQABgEAEAAICeAAQAFAAAAAEIAADHQAAAEgFAAIglAAIAABCQAAAHAEAGQAFAEAGAAIANAAIAIgDQACgCABgeIAdAGQgDAqgFAEQgLALgIAAIgpAAQgMgBgJgJQgJgJAAgKIAAhSIgcAAIAAAKQAAAOgGAOQgSA0hEAbgAitAUQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAIBpAAIABgBIAAgeIhsAAgAitgmIBsAAIAAghIhsAAgAithjIBsAAIAAgfIhsAAgAANCHIBJgKIAAgqIg/AAIAAgcIA/AAIAAgmIg7AAQgEAAAAgEIAAikQAAgEAEAAICUAAQAEAAAAAEIAACkQAAAEgEAAIg9AAIAAAmIBBAAIAAAcIhBAAIAAAmIBDgKIADAeIikAYgABygKIAjAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBIAAgqIglAAgAAzgKIAjAAIAAgsIgjAAgAByhSIAlAAIAAgtIglAAgAAzhSIAjAAIAAgtIgjAAgAkEgKIAWgQQAVAaAJASIgYANQgOgZgOgQg");
	this.shape_3.setTransform(843.2,850.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("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");
	this.shape_4.setTransform(101.2,875.708);

	this.btn3D = new lib.btn3D();
	this.btn3D.name = "btn3D";
	this.btn3D.parent = this;
	new cjs.ButtonHelper(this.btn3D, 0, 1, 2, false, new lib.btn3D(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn3D},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

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