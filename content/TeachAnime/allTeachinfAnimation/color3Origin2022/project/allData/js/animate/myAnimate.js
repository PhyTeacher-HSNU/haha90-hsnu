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
	this.shape.graphics.f("#999999").s().p("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");
	this.shape.setTransform(1562.45,26.55,1,1,0,0,0,0.2,-5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(401.325,100.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("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");
	this.shape_2.setTransform(1200.9,100);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF00FF").s().p("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");
	this.shape_3.setTransform(1017.175,751.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("Ao4CbIAKggIh/AAIAMAbQgyAUhLAQIgFgiQBBgNAngQIhDAAQgFAAAAgEIAAiDQAAgEAFAAIB/AAIAAgVIioAAIAAgfIFuAAIAAAfIikAAIAAAVIB9AAQAEAAAAAEIAACDQAAAEgEAAIhGAAQBBAQAqAQIgNAfQg8gZg0gGgApdBeIBdAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBIAAgZIhfAAgArhBeIBiAAIAAgbIhiAAgApdAlIBfAAIAAgXQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAgBAAIhdAAgArhAOIAAAXIBiAAIAAgZIhiAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAgAFVBtQgbgcAAg0QAAg5AggcQAagXAnAAQArAAAbAcQAbAcAAAxQAAAogMAXQgMAXgXAMQgXANgbAAQgrAAgbgcgAFwgeQgSAUAAAnQAAAnASAUQAQAUAbAAQAaAAASgUQARgUAAgpQAAglgRgUQgSgUgaAAQgbAAgQAUgAg5BtQgbgcAAgzQAAgzAbgdQAbgdAqAAQApAAAbAcQAaAdABAyIgBAKIiZAAQACAiARASQARASAZAAQAUAAANgKQAOgKAIgXIAkAFQgIAggYARQgXASgkAAQgsAAgbgcgAgbgiQgRAQgBAbIBzAAQgDgagLgNQgRgUgbAAQgXAAgQAQgALDCEIgpieIgqCeIglAAIhAjOIAlAAIAtCjIALgrIAhh4IAkAAIAqCfIAvifIAiAAIhADOgADtCEIAAkdIAjAAIAAEdgACUCEIAAkdIAjAAIAAEdgAj+CEIAAh5IhvikIAvAAIA4BWQAQAYANAZQANgXATgcIA3hUIAsAAIhyCkIAAB5gArDhTQgMAAAAgOIAAgoIhLAAIAAgdIBLAAIAAgTIAiAAIAAATIB8AAIAAgTIAiAAIAAATIBKAAIAAAdIhKAAIAAAoQAAAOgOAAgAqth2QAAAGAEAAIBxAAQAHAAAAgGIAAgTIh8AAg");
	this.shape_4.setTransform(1008,800.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FFFF").s().p("ABRC/IgEghQALADAJAAQAMAAAHgEQAHgEAFgHQACgFAIgVIADgJIhOjOIAmAAIArB2QAIAYAGAZQAHgYAIgYIAth3IAjAAIhQDRQgMAjgHANQgJARgNAIQgLAIgSAAQgKAAgMgEgAnCCpIAAglQA0APALgJQAJgEAAgMIAAgGIjfAAIAAA5IgjAAIAAi+QACgIAGAAIETAAQAKACgBAGIAACaQgBAWgQAIQgMAKgZAAQgVAAgfgIgApZBYIDfAAIAAgcIjfAAgApZAHIAAAZIDfAAIAAgZQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAIjbAAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAABAAAAgAiYBhQgegTgPgkQgPgjAAgoQAAgtARghQARgiAfgRQAggRAmAAQArAAAdAVQAcAXAMAnIgkAJQgKgfgTgOQgTgPgdAAQggAAgXAQQgWAQgJAbQgJAaAAAdQAAAjALAcQAKAbAWANQAXAOAbAAQAfAAAXgTQAVgTAHgjIAmAJQgMAvgeAZQgfAYgtAAQguAAgcgTgAEhBjQgSgQAAgaQgBgQAIgMQAGgNAMgHQALgJAOgDQAKgCAVgCQAqgGAVgHIAAgJQAAgWgKgIQgNgMgbAAQgZAAgMAJQgMAIgFAWIgjgEQAFgXALgNQAKgNAVgIQAVgHAaAAQAaAAARAGQARAHAHAJQAIAKAEAOQACAJAAAXIAAAuQAAAxABANQADANAGAMIgkAAQgGgLgCgPQgTARgSAHQgSAHgUgBQgjAAgSgQgAFlAUQgVAEgKADQgJAEgEAIQgFAHAAAKQAAANAKAKQALAJAVAAQAUAAAQgJQAPgIAIgQQAGgMAAgXIAAgNQgTAHgnAGgAJ+BvIAAh9QAAgVgFgLQgDgLgLgGQgLgHgNABQgXgBgQAOQgQAPAAAnIAABxIgjAAIAAjOIAfAAIAAAdQAXgiArAAQATAAAPAGQAQAIAIAKQAIALADAPQACAKAAAZIAAB+gAqggsIAAgfICmAAIAAgTIiFAAIAAgbICFAAIAAgRIiXAAIAAgfICXAAIAAgZIAiAAIAAAZICVAAIAAAfIiVAAIAAARICGAAIAAAbIiGAAIAAATICiAAIAAAfg");
	this.shape_5.setTransform(994.65,700.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000FF").s().p("ApdC1IAAgfIAWAAIAAg9QACgLAJAAIExAAQAKAAABALIAAA9IAVAAIAAAfgAljCWIBBAAIAAglQABgDgFAAIg9AAgAnECWIBAAAIAAgoIhAAAgAomByIAAAkIBCAAIAAgoIg9AAQgFAAAAAEgAG6CYQgbgdAAgyQAAg1AbgbQAbgdAqAAQAqAAAbAcQAaAbAAA0IAAAJIibAAQACAiASASQARATAaAAQATAAANgLQAOgKAJgWIAkAEQgJAggXASQgYARgjAAQguAAgagbgAHYAIQgSAQgBAbIB0AAQgCgagMgNQgQgTgbAAQgZAAgPAPgADwCsQgQgHgHgKQgIgLgEgPQgCgLAAgWIAAiAIAkAAIAAByQAAAcACAJQADAOALAIQALAIAQAAQAQAAANgIQAOgIAGgOQAFgOABgbIAAhuIAjAAIAADPIggAAIAAgfQgYAjgqAAQgSAAgQgHgAByCvIAAkeIAjAAIAAEegAiUCvIAAkeIBsAAQAgAAAUAJQATAJALASQALASAAAUQAAASgKAQQgJAPgVAKQAaAIAOASQAOATABAZQgBAUgIARQgJARgMAKQgNAJgSAFQgSAFgcAAgAhuCNIBHAAIAagBQANgDAIgFQAJgGAGgKQAFgLABgNQAAgQgJgMQgIgMgOgFQgOgEgbAAIhDAAgAhuAJIA+AAQAZAAALgEQANgEAIgJQAIgKgBgPQAAgOgGgLQgIgLgLgEQgNgEgeAAIg6AAgApKA9QgKgBAAgKIAAiVQAAgJAKAAICyAAIgDAcIhFAAIAAARIA+AAQAKAAAAAKIAAA4QAAAIgKAAIg+AAIAAAWIBIAAIAAAcgAo4AcQgBAFAFAAIA4AAIAAgWIg8AAgAo4gOICBAAQAAAAABAAQABAAAAgBQABAAAAAAQAAAAAAgBIAAgRQAAgBgBgBQAAAAgBgBQAAAAgBAAQAAAAAAAAIiBAAgAo4hNIAAAOIA7AAIAAgRIg3AAIgCgBQAAAAgBABQAAAAAAAAQAAABAAABQgBAAAAABgAluAnIAAgfIB4AAIAAAfgAmPgQQAbglABg5IAgACIgEAcIBmAAIAAAfIhrAAQgLAbgMATgAlph0IAAgRIh6AAIAAARIghAAIAAgRIhWAAIAAgfIBWAAIAAgQIAhAAIAAAQIB6AAIAAgQIAhAAIAAAQIBaAAIAAAfIhaAAIAAARg");
	this.shape_6.setTransform(209.35,796.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00FF00").s().p("Aq5C5IAAisIgxAIQgEgOgGgOIAcgFQATgRAQgcQghgbgegOIAMgcIAQAGQASgeANgiIAbAOQgLAbgXAnIAaAUQASghAIghIAfAIQgMA0g4BIIAqgIIgIgYIAegHQARA4AFAWIgdAFIgGgWIgaAFIAACwgAotCzIAAgiQAkALAJgHQADgEAAgHIAAimIhkAAIAAgfICLAAIAGgZIhyAAQgMAAABgLIAVhNQADgGAGAAICGAAQAMAAgBALIgZBsIA4AAIAAAfIhcAAQAMA3AQAjQAWAoAsAvIggASQgjgpgcg6IAABOQgCAYgQAJQgHAGgQAAQgQAAgYgGgAonhyIBdAAIAIgiIheAAgAjqCXQgigSgSgjQgSgiAAgqQAAgpASgkQASgkAggSQAhgRAqAAQAfAAAaAKQAZAKAOASQAOASAIAdIgjAJQgGgWgKgMQgJgNgSgHQgSgIgVAAQgaAAgTAIQgTAIgLANQgNANgFAPQgMAbAAAeQAAAmAOAaQANAZAZANQAZAMAcAAQAZAAAXgJQAYgJAMgLIAAg2IhUAAIAAghIB5AAIAABqQgcAWgeAMQgdALggAAQgpAAgjgSgAF9CNQgbgdAAgyQAAg1AbgbQAbgdArAAQAqAAAbAcQAaAbAAA0IAAAJIibAAQACAiASASQAQATAaAAQAUAAANgLQAPgKAHgWIAkAEQgIAggXASQgXARglAAQgtAAgbgbgAGcgCQgSAPgBAbIB0AAQgCgagMgNQgQgTgbAAQgYAAgQAQgACgCNQgbgdAAgyQAAg1AbgbQAbgdAqAAQAqAAAbAcQAaAbAAA0IAAAJIibAAQACAiASASQAQATAbAAQATAAANgLQAOgKAJgWIAkAEQgJAggXASQgYARgjAAQguAAgagbgAC9gCQgQAPgCAbIB0AAQgDgagLgNQgQgTgbAAQgZAAgQAQgAp8CMQA3gcAlgxIAZAVQgwA7gvAYgALSCkIAAh+QAAgWgEgKQgFgKgKgGQgLgHgOAAQgWAAgQAOQgRAOAAAnIAAByIgjAAIAAjPIAgAAIAAAeQAXgiArAAQATAAAPAGQAQAHAIALQAIALADAOQACAKAAAYIAACAgAALCkIAAjPIAgAAIAAAgQAMgWAKgHQAKgHANAAQARAAATALIgNAhQgNgIgMAAQgMAAgJAHQgJAGgEAMQgGATAAAWIAABtgArxCdQALg+AAg0IAeADQgFBFgGAvgAqIAtIAbgFIAKBIIgbAFgAm7AiQAYgeAMgTIAaAQQgOAXgZAcgApRAAIAagOQAWAiAJAUIgbAMQgMgZgSgbg");
	this.shape_7.setTransform(224.15,747.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AnqC5IAAitIhDAJQgCgOgGgSIAigEIAhgkQgigfghgTQAJgOAGgOQAEAAAOALQASggAQgiQAOAIAOAJQgLAbgcAnQAOAMAQALQAagoAOgrIAgALQgQA0hCBMIBAgHQgLgcgBgHIAfgJQAZBDAGAYIggAIQgCgOgFgLIgqAGIAACygAmOCtIAAgjIBZAAIAAkFIhOAAIAAgiIC9AAIAAAiIhNAAIAAEFIBTAAIAAAjgAo3CYQARg4AKg+IAhAJIgbB3gAGwCUQgVgOgMgYQgLgZAAggQAAgfAKgYQALgZAUgOQAVgNAaAAQASAAAPAIQAPAHAJANIAAhnIAjAAIAAEeIghAAIAAgaQgUAegmAAQgZAAgUgNgAG4gGQgQASAAApQAAAoARAUQARAUAXAAQAXAAAQgTQAQgTAAgnQAAgqgRgTQgQgUgYAAQgXAAgQATgADCCGQgbgdAAgyQAAg1AbgbQAbgdArAAQApAAAbAcQAaAbAAA0IAAAJIibAAQACAiASASQARATAaAAQATAAAOgLQAOgKAIgWIAkAEQgJAggXASQgXARgkAAQguAAgagbgADggJQgRAPgCAbIB0AAQgCgagLgMQgRgUgbAAQgYAAgQAQgABjCdIgmg8QgQgagLgNQgLgOgIgFQgJgGgHgCIgVgBIgsAAIAAB/IgmAAIAAkeIB+AAQAmAAAUAIQAUAIAMATQAMAUAAAYQAAAegUAUQgUAVgpAFQAPAIAIAHQAQAPAPAXIAyBOgAhCgCIBQAAQAaAAAPgFQAOgGAIgMQAIgMAAgNQAAgVgPgNQgPgNggAAIhZAAgAm6AtIAfgLIAVBaIgfAIg");
	this.shape_8.setTransform(205.225,697.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// UI
	this.sl03 = new lib.theSlider();
	this.sl03.name = "sl03";
	this.sl03.parent = this;
	this.sl03.setTransform(323.45,801.8);

	this.sl02 = new lib.theSlider();
	this.sl02.name = "sl02";
	this.sl02.parent = this;
	this.sl02.setTransform(323.45,750);

	this.sl01 = new lib.theSlider();
	this.sl01.name = "sl01";
	this.sl01.parent = this;
	this.sl01.setTransform(323.45,698.15);

	this.sl06 = new lib.theSlider();
	this.sl06.name = "sl06";
	this.sl06.parent = this;
	this.sl06.setTransform(1175.25,801.8);

	this.sl05 = new lib.theSlider();
	this.sl05.name = "sl05";
	this.sl05.parent = this;
	this.sl05.setTransform(1175.25,750);

	this.sl04 = new lib.theSlider();
	this.sl04.name = "sl04";
	this.sl04.parent = this;
	this.sl04.setTransform(1175.25,698.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sl04},{t:this.sl05},{t:this.sl06},{t:this.sl01},{t:this.sl02},{t:this.sl03}]}).wait(1));

	// btn3D
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("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");
	this.shape_9.setTransform(101.2,875.708);

	this.btn3D = new lib.btn3D();
	this.btn3D.name = "btn3D";
	this.btn3D.parent = this;
	new cjs.ButtonHelper(this.btn3D, 0, 1, 2, false, new lib.btn3D(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn3D},{t:this.shape_9}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(800,450,800,450);
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