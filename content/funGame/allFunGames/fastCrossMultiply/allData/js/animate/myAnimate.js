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


(lib.btnStartGame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-2.9,-2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(3,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#9966FF").ss(5,1,1).p("EgjJgKJMBGTAAAQCWAAAACWIAAPnQAACWiWAAMhGTAAAQiWAAAAiWIAAvnQAAiWCWAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#CC0000","#FF66CC"],[0,1],0,67,0,-67).s().p("EgjJAKKQiWAAAAiWIAAvnQAAiWCWAAMBGTAAAQCWAAAACWIAAPnQAACWiWAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#CC0000","#FFFFFF"],[0,1],0,67,0,-67).s().p("EgjJAKKQiWAAAAiWIAAvnQAAiWCWAAMBGTAAAQCWAAAACWIAAPnQAACWiWAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#CC0000","#FF66CC"],[0,1],0,-67,0,67).s().p("EgjJAKKQiWAAAAiWIAAvnQAAiWCWAAMBGTAAAQCWAAAACWIAAPnQAACWiWAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_4},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-242.5,-67.5,485,135);


(lib.btnChecker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(5,1,1).p("AllgTIhkCBIArCGIBEhXICYG6QAHAUAKAJQALAJAMgEQAMgEAIgRIJQxqIg3h0IouQpIiTmtQgKgagPgGQgQgHgOASg");
	this.shape.setTransform(0.2,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AixJ0QgLgJgGgUIiYm6IhDBXIgsiGIBkiBQAOgSAQAHQAPAGAKAaICTGtIItwpIA4B0IpPRqQgJARgMAEIgHACQgIAAgIgHg");
	this.shape_1.setTransform(0.2,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,0,255,0.008)").s().p("AuDOEIAA8HIcHAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-90,180,180);


(lib.btnBG2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000033").s("#66CCCC").ss(5,1,1).rr(-82.5,-37.5,165,75,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s("#00FFFF").ss(5,1,1).rr(-82.5,-37.5,165,75,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,0,255,0)").s().p("AuDHCIAAuDIcHAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-45,180,90);


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
	this.shape.graphics.f("#FFFFFF").s().p("AhNBOQggghAAgtQAAgsAgghQAhggAsAAQAuAAAhAgQAfAhAAAsQAAAtgfAhQghAgguAAQgsAAghggg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.checker2, new cjs.Rectangle(-11,-11,22,22), null);


(lib.numberMC_roman_yellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AiQDRQgwhVAAh4QAAhlAfhJQAfhKAzgkQAngcAqAAQBEAAA3BFQBEBXAACUQAABngeBIQgeBJguAhQgvAggqAAQhVAAg5hkgAgzj9QggAlgLBOQgMBOAABLQAAB7AfBOQAZBCAxAAQAXAAAagVQAZgWANgyQAVhMAAiIQAAhmgWhEQgPgzgZgVQgSgOgaAAQgdAAgXAag");
	this.shape.setTransform(0,-30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AhqEwIAAgQQAqgBANgGQAMgHAFgKQAFgMAAg1IAAlBQAAhAgFgTQgDgPgIgGQgIgHgLABQgRAAgdANIgGgNICQhHIAOAAIAAH2QAAAyAFANQAEALANAIQANAGAoABIAAAQg");
	this.shape_1.setTransform(0,-30.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AjDEwIAAgQQCaiOA/hZQA/hZAAhKQAAg5gjglQgigkgvAAQgsAAgkAaQgiAZgSAyIgPAAQAKhRAugrQAugsBDAAQBIAAAxAuQAwAvAAA/QAAAtgVAuQggBGhKBPQhsB4gbAYICaAAQAwAAAUgDQASgEAQgKQAPgLAMgTIAPAAIgpByg");
	this.shape_2.setTransform(0,-30.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AiTEmQgWgPABgRQAAgMAKgKQAKgKAPAAQAKAAAMAEQAHACAbAOQAaAOALACQAQAFASAAQAsAAAhgjQAigigBgwQAAgjgPghQgMgYgNgNQgTgRghgOQgggPgjAAIgNAAIAAgMQAigFAjgUQAjgVAPgdQAQgdAAgjQAAgtgcgcQgdgcgpAAQhEAAguBJIgOgHQAZg8AoggQAmghA5AAQBHAAAnAuQAdAjAAAnQAABBhSBGQA3AVAcAnQAcAoAAA2QAABOgxA4QhABKh5AAQg8AAgWgPg");
	this.shape_3.setTransform(0,-30);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AAyEwIAAidIj8AAIAAg4IEUmKIAwAAIAAGDIBRAAIAAA/IhRAAIAACdgAieBUIDQAAIAAkng");
	this.shape_4.setTransform(0,-30.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AiUEdQgZgSAAgWQAAgMAKgKQALgJAPAAQALAAAJADQAIAEAVAOQAhAXAiAAQAyAAAngnQAngnAAg4QAAg2gjguQgigug8gaQgwgThTgEIByjnIDVAAIgiBLIizAAIgnBQQB0ARBEBFQA6A8AABQQAAAvgTAoQgTAogdAcQgdAcgkARQgxAYg1AAQg2AAgYgSg");
	this.shape_5.setTransform(0,-29.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("AhoENQhThPAAh9QgBhPAhhIQAghIA7g4QA8g4A1gTQA3gTAvAAIAZAAIAAAQQg5AGglARQglARgjAkQgkAjgXAsQgXAsgQA8QA/grA/AAQA8AAAtAxQAuAwgBBNQAABLgtA+Qg2BKhZAAQg9AAgrgogAgngfQgUAHglAXQgIA6AAAlQAAAqAQAyQAPAxAfAdQAWAVAgAAQAmAAAegkQAegkAAhDQAAhLgeg3Qgdg2g3AAQgQAAgTAHg");
	this.shape_6.setTransform(0,-30);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("Ag7EwICxoYIijAAQgxAAgVAMQglAVgXAqIgMgFIA5iNIE+AAIAAARIjFJOg");
	this.shape_7.setTransform(0,-29.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("AiFEAQgmgrAAgyQAAgoAbgmQAagnBBguQhGg6gVgkQgUgjAAgmQAAg6AtgpQAsgqBLAAQBHAAAsAnQAsAnAAAyQAAAhgYAjQgYAjhLAvQBNA6AZAjQAiAtAAAxQAAA/gwAtQgwAshNAAQhVAAgvg1gAhWBTQgSAkAAAqQAAA4AgAjQAeAiAvAAQAwAAAcgbQAdgbAAgmQAAgggRgZQgfgvhehLQgkAfgSAlgAhIkBQgcAaAAAjQAAAWALAXQAMAXAVAVIBHA8QA1gwAOgbQAOgcAAgjQAAgugagaQgagagsAAQgsAAgcAag");
	this.shape_8.setTransform(0,-30);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AivE2IAAgQQA5gBAygaQAwgZAthBQAvhAARhNQhFAtg2AAQhAAAgsgxQgtgvAAhRQAAhOAtg9QA2hKBXAAQBIAAA0A8QBBBLAABvQAABigxBWQgxBWhWA4QhHAvhTAAgAhPj2QgeAjAABGQAABdAoAzQAcAmApAAQAUAAAcgKQAcgKAUgRQAJg4gBgjQAAgqgOgxQgPgygagbQgbgaghAAQgnAAgdAjg");
	this.shape_9.setTransform(0,-29.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF00").s().p("AgoEsIAAhTIBRAAIAABTgAgkCbIgBgWQAAgrANgfQAJgYATgWQAOgRAmghQAlghALgUQALgUAAgXQAAgrggggQgigfgvgBQguABgfAdQgeAcgKA+IhLgJQAKhTAygrQAygsBRAAQBWAAA0AuQA0AwAABDQgBAmgSAhQgSAhg1AtQgjAfgLAQQgLAOgFAUQgFATgBAsg");
	this.shape_10.setTransform(0,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

	// Layer_2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AiQDRQgwhVAAh4QAAhlAfhJQAfhKAzgkQAngcAqAAQBEAAA3BFQBEBXAACUQAABngeBIQgeBJguAhQgvAggqAAQhVAAg5hkgAgzj9QggAlgLBOQgMBOAABLQAAB7AfBOQAZBCAxAAQAXAAAagVQAZgWANgyQAVhMAAiIQAAhmgWhEQgPgzgZgVQgSgOgaAAQgdAAgXAag");
	this.shape_11.setTransform(3,-27);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AhqEwIAAgQQAqgBANgHQAMgGAFgLQAFgLAAg1IAAlBQAAhAgFgTQgDgPgIgGQgIgGgLgBQgRAAgdAOIgGgOICQhGIAOAAIAAH2QAAAyAFAMQAEANANAGQANAHAoABIAAAQg");
	this.shape_12.setTransform(3,-27.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AjEEwIAAgQQCciOA9haQBAhYAAhLQAAg4gjgkQgiglgwAAQgrAAgkAaQgiAagRAxIgQAAQAKhRAugsQAugrBEAAQBHAAAxAuQAwAvAAA/QAAAtgVAuQghBGhIBPQhtB4gbAYICbAAQAvABATgEQATgDAQgLQAPgLAMgUIAQAAIgqBzg");
	this.shape_13.setTransform(3,-27.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AiTEmQgVgPgBgRQAAgMALgKQAKgKAPAAQALAAALAEQAHACAbAOQAaAOAKACQAQAFATAAQAsAAAigjQAggiAAgwQAAgjgPghQgMgYgNgNQgTgRghgOQgggPgiAAIgPAAIAAgMQAjgFAjgUQAigVAQgdQAQgdAAgjQAAgtgcgcQgdgcgpAAQhEAAguBJIgPgHQAag8AnggQAnghA5AAQBIAAAmAuQAdAjAAAnQAABBhSBGQA3AVAcAnQAdAoAAA2QgBBOgxA4QhABKh5AAQg8AAgWgPg");
	this.shape_14.setTransform(3,-27);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AAyEwIAAieIj8AAIAAg4IEUmJIAwAAIAAGDIBQAAIAAA+IhQAAIAACegAifBUIDRAAIAAkng");
	this.shape_15.setTransform(3,-27.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AiUEdQgZgSAAgWQAAgMAKgKQALgJAPAAQALAAAJADQAIAEAVAOQAhAXAiAAQAyAAAngnQAngnAAg4QAAg2gjguQgigug8gaQgwgThTgEIByjnIDVAAIgiBLIizAAIgnBQQB0ARBEBFQA6A8AABQQAAAvgTAoQgTAogdAcQgdAcgkARQgxAYg1AAQg2AAgYgSg");
	this.shape_16.setTransform(3,-26.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AhoENQhUhPABh9QAAhPAghIQAghIA8g4QA7g4A1gTQA3gTAvAAIAZAAIAAAQQg6AGgkARQglARgjAkQgjAjgYAsQgYAsgPA8QA/grA+AAQA9AAAuAxQAsAwABBNQAABLguA+Qg2BKhZAAQg9AAgrgogAgngfQgUAHglAXQgIA6AAAlQAAAqAQAyQAQAxAeAdQAWAVAfAAQAnAAAegkQAegkAAhDQAAhLgeg3Qgeg2g2AAQgRAAgSAHg");
	this.shape_17.setTransform(3,-27);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("Ag7EwICxoYIijAAQgxAAgVAMQglAVgXAqIgMgFIA5iNIE+AAIAAARIjFJOg");
	this.shape_18.setTransform(3,-26.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AiFEAQgmgrAAgyQAAgoAbgmQAagnBBguQhGg6gVgkQgUgjAAgmQAAg6AtgpQAsgqBLAAQBHAAAsAnQAsAnAAAyQAAAhgYAjQgYAjhLAvQBNA6AZAjQAiAtAAAxQAAA/gwAtQgwAshNAAQhVAAgvg1gAhWBTQgSAkAAAqQAAA4AgAjQAeAiAvAAQAwAAAcgbQAdgbAAgmQAAgggRgZQgfgvhehLQgkAfgSAlgAhIkBQgcAaAAAjQAAAWALAXQAMAXAVAVIBHA8QA1gwAOgbQAOgcAAgjQAAgugagaQgagagsAAQgsAAgcAag");
	this.shape_19.setTransform(3,-27);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AivE2IAAgQQA5gBAxgaQAxgZAuhBQAthAAThNQhFAtg3AAQg/AAgtgxQgtgvAAhRQAAhOAtg9QA2hKBXAAQBJAAA0A8QBABLAABvQAABigxBWQgwBWhYA4QhFAvhUAAgAhPj2QgdAjAABGQAABdAmAzQAdAmApAAQAUAAAbgKQAcgKAWgRQAHg4AAgjQAAgqgOgxQgOgygbgbQgbgaggAAQgoAAgdAjg");
	this.shape_20.setTransform(3,-26.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgpEsIAAhSIBSAAIAABSgAgkCbIAAgWQAAgrALgfQAKgXASgYQAOgQAnghQAlgiALgTQAMgUAAgXQgBgrggggQghgfgxAAQgsAAggAcQgfAdgJA+IhKgJQAJhTAygsQAygrBRAAQBWAAAzAuQA0AwAABCQABAngTAhQgTAgg0AvQgjAegLAPQgLAQgFATQgGAUAAArg");
	this.shape_21.setTransform(3,-26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-60.9,41.6,64.9);


(lib.numberMC_roman_white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiQDRQgwhVAAh4QAAhlAfhJQAfhKAzgkQAngcAqAAQBEAAA3BFQBEBXAACUQAABngeBIQgeBJguAhQgvAggqAAQhVAAg5hkgAgzj9QggAlgLBOQgMBOAABLQAAB7AfBOQAZBCAxAAQAXAAAagVQAZgWANgyQAVhMAAiIQAAhmgWhEQgPgzgZgVQgSgOgaAAQgdAAgXAag");
	this.shape.setTransform(0,-30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhqEwIAAgQQAqgBANgGQAMgHAFgKQAFgMAAg1IAAlBQAAhAgFgTQgDgPgIgGQgIgHgLABQgRAAgdANIgGgNICQhHIAOAAIAAH2QAAAyAFANQAEALANAIQANAGAoABIAAAQg");
	this.shape_1.setTransform(0,-30.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjDEwIAAgQQCaiOA/hZQA/hZAAhKQAAg5gjglQgigkgvAAQgsAAgkAaQgiAZgSAyIgPAAQAKhRAugrQAugsBDAAQBIAAAxAuQAwAvAAA/QAAAtgVAuQggBGhKBPQhsB4gbAYICaAAQAwAAAUgDQASgEAQgKQAPgLAMgTIAPAAIgpByg");
	this.shape_2.setTransform(0,-30.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiTEmQgWgPABgRQAAgMAKgKQAKgKAPAAQAKAAAMAEQAHACAbAOQAaAOALACQAQAFASAAQAsAAAhgjQAigigBgwQAAgjgPghQgMgYgNgNQgTgRghgOQgggPgjAAIgNAAIAAgMQAigFAjgUQAjgVAPgdQAQgdAAgjQAAgtgcgcQgdgcgpAAQhEAAguBJIgOgHQAZg8AoggQAmghA5AAQBHAAAnAuQAdAjAAAnQAABBhSBGQA3AVAcAnQAcAoAAA2QAABOgxA4QhABKh5AAQg8AAgWgPg");
	this.shape_3.setTransform(0,-30);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAyEwIAAidIj8AAIAAg4IEUmKIAwAAIAAGDIBRAAIAAA/IhRAAIAACdgAieBUIDQAAIAAkng");
	this.shape_4.setTransform(0,-30.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiUEdQgZgSAAgWQAAgMAKgKQALgJAPAAQALAAAJADQAIAEAVAOQAhAXAiAAQAyAAAngnQAngnAAg4QAAg2gjguQgigug8gaQgwgThTgEIByjnIDVAAIgiBLIizAAIgnBQQB0ARBEBFQA6A8AABQQAAAvgTAoQgTAogdAcQgdAcgkARQgxAYg1AAQg2AAgYgSg");
	this.shape_5.setTransform(0,-29.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhoENQhThPAAh9QgBhPAhhIQAghIA7g4QA8g4A1gTQA3gTAvAAIAZAAIAAAQQg5AGglARQglARgjAkQgkAjgXAsQgXAsgQA8QA/grA/AAQA8AAAtAxQAuAwgBBNQAABLgtA+Qg2BKhZAAQg9AAgrgogAgngfQgUAHglAXQgIA6AAAlQAAAqAQAyQAPAxAfAdQAWAVAgAAQAmAAAegkQAegkAAhDQAAhLgeg3Qgdg2g3AAQgQAAgTAHg");
	this.shape_6.setTransform(0,-30);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag7EwICxoYIijAAQgxAAgVAMQglAVgXAqIgMgFIA5iNIE+AAIAAARIjFJOg");
	this.shape_7.setTransform(0,-29.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiFEAQgmgrAAgyQAAgoAbgmQAagnBBguQhGg6gVgkQgUgjAAgmQAAg6AtgpQAsgqBLAAQBHAAAsAnQAsAnAAAyQAAAhgYAjQgYAjhLAvQBNA6AZAjQAiAtAAAxQAAA/gwAtQgwAshNAAQhVAAgvg1gAhWBTQgSAkAAAqQAAA4AgAjQAeAiAvAAQAwAAAcgbQAdgbAAgmQAAgggRgZQgfgvhehLQgkAfgSAlgAhIkBQgcAaAAAjQAAAWALAXQAMAXAVAVIBHA8QA1gwAOgbQAOgcAAgjQAAgugagaQgagagsAAQgsAAgcAag");
	this.shape_8.setTransform(0,-30);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AivE2IAAgQQA5gBAygaQAwgZAthBQAvhAARhNQhFAtg2AAQhAAAgsgxQgtgvAAhRQAAhOAtg9QA2hKBXAAQBIAAA0A8QBBBLAABvQAABigxBWQgxBWhWA4QhHAvhTAAgAhPj2QgeAjAABGQAABdAoAzQAcAmApAAQAUAAAcgKQAcgKAUgRQAJg4gBgjQAAgqgOgxQgPgygagbQgbgaghAAQgnAAgdAjg");
	this.shape_9.setTransform(0,-29.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-60.9,38.6,61.9);


(lib.forPN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIC9IAAi0Ii0AAIAAgSIC0AAIAAizIASAAIAACzICzAAIAAASIizAAIAAC0g");
	this.shape.setTransform(0,0,1,1,0,0,0,-0.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ai/AKIAAgTIF/AAIAAATg");
	this.shape_1.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.7,-18.9,37.8,37.8);


(lib.mPointer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACHH3IAHgCQA/gRA3ggIABgBQA5ghAxgyIABgBIAFgEIACgDQAtgvAfg0IABgBQAig7ARhCIBOAVQgUBMgoBEIAAABIAAAAQgkA9g0A2IgDACIgFAGIgBABQg6A5hBAnIAAAAQhBAmhHAUIgJACgAksIJQg+glg3g2IgGgGIAAAAQg5g5gnhBIgBgBQgmhAgUhIIgCgJIBOgVIACAIQARA+AhA3IABACQAhA4AyAxIAAABIAEAEQAwAvA3AgQA7AjBCARIgVBOQhMgUhFgogABJEPIACAAQAjgKAegSIAAAAQAfgSAbgaIABgBIABgCIADgCQAYgZAQgdIABAAQASggAJgjIB1AfQgOAzgaAtIgBABQgYAogiAkIgDADIgDADIAAAAQgnAngrAZIAAAAQgsAagwANIgFABgAjIFbQgpgYgmglIgDgDIAAAAQgmgmgagrIAAgBQgagsgNgvIgBgGIB0gfIABADQAJAiASAeIABABQASAfAaAaIAAAAIACACQAaAaAeARQAgATAjAJIgfB0QgzgNgugbgAmChnQANgzAbguIAAAAQAXgoAigjIADgDIAEgEQAngmArgaIAAAAQApgZAugMIAKgDIAfB0IgHACQggAJgcARIAAAAQgfASgbAaIAAABIgDADIgDACQgXAZgQAbIAAABQgTAggJAjgAENhPQgJgggQgcQgTgfgagcIgGgFQgZgXgbgQIgBgBQgfgSgkgJIAfh0QAzANAuAbIAAAAQAoAXAjAiIAHAHQAmAmAaAsIAAAAQAZAqANAtIADAKIh1AfIgCgHgAH0iSQgRg8gfg2IgBAAQghg5gygyIgJgIQgugtg0gfIAAAAQg7gihDgRIAVhOQBNAUBEAoIAAAAQA8AkA2AzIAKAJQA5A6AnBBIAAABQAlA+ATBGIAEANIhOAVIgDgMgApEibQAUhNAohEIABgBQAjg7Azg2IADgDIAHgGIAAgBQA6g5BBgnIAAAAQA+gkBFgUIAOgEIAVBOIgNADQg7ARg1AfIgBAAQg4AigyAyIgBAAIgGAGIgCADQgsAugfA0IgBABQgiA7gRBCg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("ABoGDIAFgBQAwgNAsgaIAAAAQArgZAngnIAAAAIADgDIADgDQAigkAYgoIABgBQAagtAOgzIBzAfQgRBCgiA7IgBABQgfA0gtAvIgCADIgFAEIgBABQgxAyg5AhIgBABQg3Agg/ARIgHACgAkDHDQg3gggwgvIgEgEIAAgBQgygxghg4IgBgCQghg3gRg+IgCgIIB0gfIABAGQANAvAaAsIAAABQAaArAmAmIAAAAIADADQAmAlApAYQAuAbAzANIgfB0QhCgRg7gjgAGBhxQgNgtgZgqIAAAAQgagsgmgmIgHgHQgjgigogXIAAAAQgugbgzgNIAfh0QBDARA7AiIAAAAQA0AfAuAtIAJAIQAyAyAhA5IABAAQAfA2ARA8IADAMIhzAfIgDgKgAn2iGQARhCAig7IABgBQAfg0AsguIACgDIAGgGIABAAQAygyA4giIABAAQA1gfA7gRIANgDIAfB0IgKADQguAMgpAZIAAAAQgrAagnAmIgEAEIgDADQgiAjgXAoIAAAAQgbAugNAzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mPointer, new cjs.Rectangle(-58.1,-58.1,116.2,116.2), null);


(lib.checker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,0,0)","#FFFF00"],[0.525,1],0,0,0,0,0,49.9).s("#FF3300").ss(4,1,1).rr(-37.5,-37.5,75,75,10);
	this.shape.setTransform(0,0.3,2.554,2.554);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFF00").ss(6,1,1).rr(-39.2,-39.2,78.4,78.4,10);
	this.shape_1.setTransform(0,0,2.554,2.554);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(5,1,1).p("ArHgTIjICBIBYCGICFhXIEuG6QAOAUAWAJQAWAKAXgFQAXgEASgRISaxqIhvh0IxWQpIklmtQgSgagggGQgggGgbARg");
	this.shape_2.setTransform(0.1,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AlgJ0QgWgJgOgUIkum6IiFBXIhYiGIDIiBQAbgRAgAGQAgAGASAaIElGtIRWwpIBvB0IyaRqQgSARgXAEIgPACQgPAAgPgHg");
	this.shape_3.setTransform(0.1,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,0,255,0.008)").s().p("AuDOEIAA8HIcHAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape_4).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-90,180,180);


(lib.btnTop2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,255,0.008)").s().p("A8HOEIAA8HMA4PAAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnTop2, new cjs.Rectangle(-180,-90,360,180), null);


(lib.btnSquare_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF00FF").s().p("AnzH0IAAvnIPnAAIAAPng");
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.btnOK = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AjkI2QgagCAAgYIAAjCIA2AAIAACfQAAAHAKAAICnAAIAAjhIjBAAQgZgCAAgYIAAjCIA2AAIAACfQAAAHAJAAICbAAIAAjJIA1AAIAADJICaAAQAHAAAAgHIAAifIA2AAIAADCQgDAagXAAIi9AAIAADhIClAAQAIAAgBgHIAAifIA2AAIAADCQgBAagYAAgAkXhAQA2gSAQgVQAMgWAHgXIAAhgQAAgHgHAAIhEAAIAAgzIBxAAQAOACgBAJIAACKQAFAPAOAUQAMARAXAJQAwAWE2gOIgLA3IkAAAQh7gCgqhBQgKAVgcAYQgeAZgdAJgABIjmQgpBNhvAtIgcgvQBygjAchNIiLAAIAAgyICSAAIAAg/IhpAAIAAgqQgSAZgdARQgLgZgRgOQA+grAjhGIAqAcQgYAmgeAiQAAABAAABQAAAAgBAAQAAABAAAAQgBAAAAAAID7AAQgegogVgjQgEgCgDgBIh+AAIAAguICRAAQAJACACACQAwBVBBAqIgoAhQgVgMgRgVIAAAqIhtAAIAAA/ICaAAIAAAyIiNAAQAmBPB/AjIgcAyQh4gogzhXgAkUmNIAUguQA0ASA6ArIgaAtQg+grgqgRgAj7oGIAagvQAsASA7ArIgcAsQg7gsgqgOg");
	this.shape.setTransform(-0.3,-9.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AjkI2QgagCAAgYIAAjCIA2AAIAACfQAAAHAKAAICnAAIAAjhIjBAAQgagCABgXIAAjDIA2AAIAACfQgBAHAKAAICbAAIAAjKIA1AAIAADKICaAAQAHAAAAgHIAAifIA2AAIAADDQgDAZgXAAIi9AAIAADhIClAAQAIAAgBgHIAAifIA2AAIAADCQgBAagYAAgAkXhAQA2gSAQgVQAMgWAHgXIAAhgQAAgHgHAAIhEAAIAAgzIBxAAQAOACgBAJIAACKQAFAOAOAVQAMARAXAJQAvAWE3gPIgLA4IkAAAQh7gBgqhCQgKAVgcAYQgfAZgcAKgABIjmQgoBOhwAsIgcgvQBygjAchNIiLAAIAAgyICSAAIAAg/IhoAAIAAgqQgTAZgdARQgLgZgRgOQA+grAjhGIAqAcQgYAmgeAiQAAABAAABQAAAAgBAAQAAABAAAAQgBAAAAAAID7AAQgegogVgjQgEgCgDgBIh+AAIAAguICRAAQAJACACACQAvBVBCAqIgoAhQgVgMgRgVIAAAqIhuAAIAAA/ICbAAIAAAyIiMAAQAlBQB/AiIgcAyQh4gogzhXgAkUmNIAUguQA0ASA6ArIgZAtQhAgrgpgRgAj7oGIAagvQAsASA7ArIgcAsQg7gsgqgOg");
	this.shape_1.setTransform(2.5,-6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#66CCCC").ss(3,1,1).p("AkSrtIIlAAQBkAAAABkIAAUTQAABkhkAAIolAAQhkAAAAhkIAA0TQAAhkBkAAg");
	this.shape_2.setTransform(0,-6.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AkSLuQhkAAAAhkIAA0TQAAhkBkAAIIlAAQBkAAAABkIAAUTQAABkhkAAg");
	this.shape_3.setTransform(0,-6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnOK, new cjs.Rectangle(-39,-82.6,78,153), null);


(lib.btnFullScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("AK8q7IAAFeAFeq7IFeAAIleFeAq7ldIAAleIFeAAAq7q7IFeFeAq7K8IAAleAldK8IleAAAldFeIleFeAK8FeIAAFeIleAAAFeFeIFeFeAtRtRIajAAIAAajI6jAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(102,102,102,0.647)").s().p("AvnPoIAA/PIfPAAIAAfPg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnFullScreen, new cjs.Rectangle(-100,-100,200,200), null);


(lib.btnBG2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000033").s("#66CCCC").ss(5,1,1).rr(-172.5,-82.5,345,165,30);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s("#00FFFF").ss(5,1,1).rr(-172.5,-82.5,345,165,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).wait(1));

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,0,255,0)").s().p("AuDOEIAA8HIcHAAIAAcHg");
	this.shape_5.setTransform(0,0,2,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180,-90,360,180);


(lib.theInfoPanel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkMBxQAigOAOgYIgvAAIAAgVIA3AAIAAgOIgtAAIAAgTIAtAAIAAgRIgwAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAgBIAAguQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAIAwAAIAAgNIgYAAQgIgBAAgIIAAgYIgYAAIAAgUIAYAAIAAgOIAWAAIAAAOIApAAIAAgOIAWAAIAAAOIAcAAIAAAUIgcAAIAAAYQAAAJgJAAIgWAAIAAANIAxAAQAAAAABAAQABAAAAABQABAAAAABQAAAAAAABIAAAuQAAABAAABQAAAAgBAAQAAABgBAAQgBAAAAAAIgxAAIAAARIAzAAIAAATIgzAAIgCAOIA8AAIAAAVIgxAAIApAjIgQATQgTgVgbgYQgSAfgiAQgAi+gNIAdAAIABgBIAAgPIgBgBIgdAAgAjxgdIAAAQIAdAAIAAgRIgdAAQAAAAAAAAQgBAAAAAAQAAABABAAQAAAAAAAAgAjehTQAAABAAAAQAAABABAAQAAABABAAQAAAAABAAIAjAAQABAAABAAQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgLIgpAAgACbBnQgyAVgyAGIgIgXQAvgFAbgKIAHgBQgcgOgXgPIAJgXQAlAbAgANQAlgTARgVQAAAAABgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIiIAAIAAgXICdAAIARAOQgUAjgqAbQAoALAuAEIgLAZQg7gLgsgQgAhyCAQgHgBgBgIIAAipQgCAEgDABIgUgLQAcggAJgnIAXAFQgKAbgHAQIAkAAQANgcAFgUIAVAFQgEAUgKAXIAgAAIgDAWIggAAIAAAmIAiAAIAAAVIgiAAIAAApIAiAAIAAAVIgiAAIAAAqIAkAAIAAAWgAhkBnQABABAAAAQAAABABAAQAAABAAAAQAAAAABAAIAdAAIAAgqIggAAgAhkArIAgAAIAAgpIggAAgAhkg3IAAAkIAgAAIAAgmIgdAAIgDACgAAJBxQAOgXAFgXQADgUAAgeIAAh6QABgHAGAAIBfAAIAAgSIAYAAIAAASIBpAAIAAAXIgpAAIAAAYIApAAIAAAXIgpAAIAAAhQgBAKgLAAIhxAAQgLAAAAgKIAAghIgeAAIAABCQgBA6gYAogABugYQAAABAAAAQAAABAAAAQABABAAAAQABAAAAAAIBRAAQAEAAAAgDIAAgSIhXAAgABuhBIBXAAIAAgYIhXAAgAA3hVIAAAUIAeAAIAAgYIgbAAQgBAAgBAAQAAABgBAAQAAABAAAAQAAABAAABg");
	this.shape.setTransform(34.8,542.1);

	this.textLevel = new cjs.Text("ac<10\nbd<400\nhard", "28px 'Arial Narrow'", "#FFFFFF");
	this.textLevel.name = "textLevel";
	this.textLevel.lineHeight = 34;
	this.textLevel.lineWidth = 120;
	this.textLevel.parent = this;
	this.textLevel.setTransform(7.9,562.8);

	this.textCorrectRatio = new cjs.Text("98.25%", "28px 'Arial Narrow'", "#FFFFFF");
	this.textCorrectRatio.name = "textCorrectRatio";
	this.textCorrectRatio.lineHeight = 34;
	this.textCorrectRatio.lineWidth = 83;
	this.textCorrectRatio.parent = this;
	this.textCorrectRatio.setTransform(356.9,677.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AC/CGIAAgxIh3AAIAAgXIB3AAIAAgWIg3AGIgFgWIAZgDQAQgNASgUQgZgbgbgOQAHgKAEgLQAFABANAKQALgNAIgPIhtAAIAAgWIBzAAIAAgUIAZAAIAAAUIBuAAIAAAWIhyAAQgLASgSAZIATASQATgaAKgZIAVAKQgPAkgyA1IAxgHIgLgUIATgIQAVAeAMAfIgVAHIgIgSIghAEIAAAZIB0AAIAAAXIh0AAIAAAxgAhmB2IAAh9QgDACgBADIgPgMIAAB2QgBAIgHAAIglAAIAAAMIgXAAIAAh0IgGAOIgZgHQAfg3ADg5IgbAAIAAgYIBbAAIAAAYIgpAAQgDAdgIAlIAtAAQAIAAAAAHIAAADIABgBQAigbAVgoIgbAAQAAgBgBAAQAAAAAAAAQgBABAAAAQAAABAAABIAAAcIgXAAIAAgwQAAgFAFAAIA4AAIAHgTIAWAIIgEALIA5AAIAVAKQAAAVgKAcIgWgHIAGgaQAAgBAAgBQgBAAAAgBQAAAAgBAAQgBAAAAAAIg6AAQgKAVgVAcIApAAQAKgUAFgPIAUAKIgIAWIgCADIAxAAIgDAYIg0AAIAAAYIAzAAIAAAWIgzAAIAAAbIAzAAIAAAXIgzAAIAAAXIA3AAIAAAYIiJAAIgBAAQgIAAAAgJgAhOBkQAAABAAAAQAAABABAAQAAABABAAQAAAAABAAIApAAIAAgXIgsAAgAimgFIAABfIASAAQAFAAAAgFIAAhaQAAgEgFAAIgPAAQAAAAgBAAQgBABAAAAQAAABgBAAQAAABAAABgAhOA5IAsAAIAAgbIgsAAgAhOgNIAAAVIAsAAIAAgYIgpAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAABAAABgAn5B8IAAgYIAmAAIAAibIAaAAIAACbIA9AAIAAjDIhxAAIAAgZIDyAAIAAAZIhnAAIAABPIBiAAIAAAYIhiAAIAABcIBxAAIAAAYgABIAfQAxgdAYgXIARARQgaAXgxAegAHaAwIAAggIAgAAIAAAggAEGgDIAMgSQAbARAfAbIgPARQgigdgVgOgABVhCIARgPQARAQAUAbIgSAPQgVgdgPgOgAHagYIAAggIAgAAIAAAggAEBgtQAfgZANgSIAQAPQgRAWgbAVg");
	this.shape_1.setTransform(292.5,694);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("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");
	this.shape_2.setTransform(75.9,694.7);

	this.textQCount = new cjs.Text("50/50", "28px 'Arial Narrow'", "#FFFFFF");
	this.textQCount.name = "textQCount";
	this.textQCount.lineHeight = 34;
	this.textQCount.lineWidth = 68;
	this.textQCount.parent = this;
	this.textQCount.setTransform(143,678.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABjB8IAAgWIhUAAIAFARQghAMg1ADIgBgXQAngEAbgFIgcAAQgBAAgBAAQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAhkQgNAFgOAEIgMgUQAigLAUgLIgaAAIgCAHIgVgDIAHg1QABgFAEAAIBCAAIAAgMIhGAAIAAgUIBGAAIAAgMIAWAAIAAAMIA1AAIAAgOIAVAAIAAAOIBAAAQACgBADADIACAEIAAA0IgWAAIAAgGIgxAAIAAAOIBOAAQAGABAAAFIgCAmQgDAJgEABQgIAFgQgCIAABgQAAAEgFgBIgoAAIBMAJIgEAYgAgKBRQAAAAABABQAAAAAAAAQAAAAAAAAQABAAAAAAICMAAIABgBIAAgQIiPAAgAgKAuICPAAIAAgPIiPAAgAgKAMICPAAIAAgMIiPAAgABrgTIAuAAQAFAAAAADIABAAIAHAAQABAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAAAIABgOQAAAAAAgBQAAAAAAAAQgBgBAAAAQgBAAgBAAIg7AAgAgCgTIBYAAIAAgPIhHAAIgRAPgAAZg2IA9AAIAAgOIg2AAIgHAOgAgnhBIgDALIAsAAIADgHIAEgHIguAAIgBAAQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABgABrhYIAxAAIAAgKQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIguAAgAAhhYIA1AAIAAgMIg1AAgAF3B+IAAgaQARAGAGABIAOACQAGAAAFgEQACgDAAgFIAAhIIhyAAIAAgZIByAAIAAgbIhyAAIAAgYIBIAAIAAggIg/AAIAAgYIA/AAIAAgbIAZAAIAAAbIBAAAIAAAYIhAAAIAAAgIBHAAIAAAYIgeAAIAAAbIAcAAIAAAZIgcAAIAABOQAAASgNAHQgHAFgNAAQgQAAgZgHgAlqB+QACgEADgFQASgqgEgzIAYgBIAAAgIAAACQAIAQANAOIAAhOIg8AAIAAgVIB+AAIAAAVIgpAAIAAAcIAnAAIAAAXIgnAAIAAAnQATAHAggBICBAAIgHAXIhxAAQgZABgRgEQgqgFgcgfQgGAagIASgAoQCDIAAgwIhCAAIAAgYIBCAAIAAhhQgxBFg3AnIgTgSQBIgzAshJIhsAAIAAgZIBzAAIAAgkIAaAAIAAAkIBxAAIAAAZIhsAAQAnBHBNA1IgXARQhDg4gfgzIAABhIBAAAIAAAYIhAAAIAAAwgADdB4IAAjrQAAgIAJAAIA+AAQAKABAAAHIAADOQgCAJgIAAIguAAIAAAUgAD2BLIAZAAQAFAAAAgFIAAhFIgeAAgAD2hfIAABIIAeAAIAAhIQAAgDgEAAIgXAAQAAAAgBAAQgBAAAAABQgBAAAAABQAAABAAAAgAiaBNIAJgVQAWAKAbARIgOASQgZgSgTgGgAjtBRQAagIAUgRIAQARQgdAWgYAGgAFIAtIAUgMQAQAVANAeIgVAMQgPghgNgSgAjbA1QAAAAgBAAQAAAAAAgBQgBAAAAgBQAAgBAAgBIAAiDIACgCIAkAAQACgIABgIIACgEIgzAAIAAgUIB+AAIAAAUIg1AAIgGAUIAzAAQAAAAABAAQAAABABAAQAAAAAAAAQAAABAAAAIAACDQAAABAAABQAAABAAAAQgBABAAAAQgBAAAAAAgAjHAhIBDAAIABgCIAAgSIhEAAgAjHgGIBEAAIAAgUIhEAAgAjHguIBEAAIAAgSIhEAAgAJrAuIAAgfIAhAAIAAAfgAJrgaIAAggIAhAAIAAAggAlcgbQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAheQAAAAAAgBQABAAAAgBQAAAAAAAAQABAAAAAAIBlAAQABAAABAAQAAABABAAQAAAAAAAAQAAABAAAAIAABeQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAgAlHgvIA8AAIACgBIAAgUIg+AAgAlHhYIA+AAIAAgSIg+AAg");
	this.shape_3.setTransform(788.8,693);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABhB8IAAgWIhVAAIAGARQgiAMg0ADIgBgXQAngEAbgFIgdAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAhkQgNAEgOAFIgMgUQAhgLAVgLIgaAAIgCAHIgVgDIAHg1QABgFAEAAIBCAAIAAgMIhGAAIAAgUIBGAAIAAgMIAWAAIAAAMIA0AAIAAgOIAWAAIAAAOIBAAAQACgCADAEIACAEIAAA0IgWAAIAAgGIgxAAIAAAOIBOAAQAGAAAAAGIgCAmQgDAIgEACQgIAFgRgCIAABgQAAADgEAAIgoAAIBMAJIgEAYgAgMBRQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAABAAICMAAIABgBIAAgQIiPAAgAgMAuICPAAIAAgPIiPAAgAgMAMICPAAIAAgMIiPAAgABpgTIAuAAQAEgBAAAEIACAAIAHAAIACgCIABgOQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIg7AAgAgEgTIBXAAIAAgPIhHAAIgQAPgAAXg2IA8AAIAAgOIg2AAIgGAOgAgqhBIgCALIAsAAIADgHIAEgHIguAAIgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAABAAABgABphYIAxAAIAAgKQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIguAAgAAfhYIA0AAIAAgMIg0AAgAF1B9IAAgZIAXAHIAOACQAGAAAFgEQACgEAAgEIAAhIIhyAAIAAgZIByAAIAAgbIhyAAIAAgYIBIAAIAAggIhAAAIAAgZIBAAAIAAgaIAZAAIAAAaIBAAAIAAAZIhAAAIAAAgIBHAAIAAAYIgeAAIAAAbIAcAAIAAAZIgcAAIAABOQAAARgNAIQgIAFgNAAQgQAAgYgIgAoSCDIAAhYIh2AAIAAgZIB2AAIAAh2IhsAAIAAgaIDyAAIAAAaIhsAAIAAB2IB0AAIAAAZIh0AAIAABYgAjoB4IAAgfQA2ASASgHQANgGALgQQAKgUABgoQADhegDgGQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAIhoAAQgNAkgOAYIgYgJQAegwAFg0IAZACIgEAWIB4AAIAFAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAABQAEAIgEB1QgEAzgLAYQgKAVgVAIQgLAFgRAAQgYAAgigKgADbB4IAAjrQAAgIAIAAIA/AAQAJAAAAAIIAADOQgBAJgIAAIguAAIAAAUgAD0BLIAZAAQAFgBAAgEIAAhFIgeAAgAD0hfIAABIIAeAAIAAhIQAAgDgEAAIgXAAQgBAAAAAAQgBAAAAABQgBAAAAABQAAAAAAABgAltBfIAigSIAAhyIgdAAIAAgZIAdAAIAAhEIAZAAIAABEIAYAAIAAAZIgYAAIAABiQANgKAKgJIAQASQgcAbg2AcgAFFAtIAVgMQAQAVANAeIgWAMQgPghgNgSgAkCAqQBHgSAmgRIAKAWQgtAWhEAPgAJpAuIAAgfIAgAAIAAAfgAnUgHQAfgvALgdIAXAKQgOAigeAsgAp7hGIAVgNQAXAdAUAuIgWALQgWgxgUgYgAjvgUIAAgZIBVAAIAAAZgAJpgaIAAggIAgAAIAAAgg");
	this.shape_4.setTransform(535.4,694);

	this.textTimePassed = new cjs.Text("15.53s", "28px 'Arial Narrow'", "#FFFFFF");
	this.textTimePassed.name = "textTimePassed";
	this.textTimePassed.lineHeight = 34;
	this.textTimePassed.lineWidth = 198;
	this.textTimePassed.parent = this;
	this.textTimePassed.setTransform(862.9,676.5);

	this.textAverageTime = new cjs.Text("15.53s", "28px 'Arial Narrow'", "#FFFFFF");
	this.textAverageTime.name = "textAverageTime";
	this.textAverageTime.lineHeight = 34;
	this.textAverageTime.lineWidth = 114;
	this.textAverageTime.parent = this;
	this.textAverageTime.setTransform(608.4,677.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.textAverageTime},{t:this.textTimePassed},{t:this.shape_4},{t:this.shape_3},{t:this.textQCount},{t:this.shape_2},{t:this.shape_1},{t:this.textCorrectRatio},{t:this.textLevel},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.theInfoPanel, new cjs.Rectangle(5.9,529,1057.5,183.6), null);


(lib.ooxx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FFFF").ss(3,1,1).p("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");
	this.shape.setTransform(0,100);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("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");
	this.shape_1.setTransform(0,100);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFF00").ss(10,1,1).p("AXcAAQAAJum4G3Qm3G3ptAAQpsAAm4m3Qm3m3AApuQAApsG3m4QG4m3JsAAQJtAAG3G3QG4G4AAJsgAfQAAQAAM9pKJJQpJJKs9AAQs7AApKpKQpKpJAAs9QAAs7JKpKQJKpKM7AAQM9AAJJJKQJKJKAAM7g");
	this.shape_2.setTransform(0,-50);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("A2FWGQpKpJAAs9QAAs7JKpKQJKpKM7AAQM9AAJJJKQJKJKAAM7QAAM9pKJJQpJJKs9AAQs7AApKpKgAwkwkQm3G4AAJsQAAJtG3G4QG4G3JsAAQJtAAG3m3QG4m4AAptQAApsm4m4Qm3m3ptAAQpsAAm4G3g");
	this.shape_3.setTransform(0,-50);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFF00").ss(3,1,1).p("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");
	this.shape_4.setTransform(0,100);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("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");
	this.shape_5.setTransform(0,100);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#00FFFF").ss(3,1,1).p("AahxqIxrRqIRrRrIo2I2IxrxrIxqRrIo2o2IRrxrIxrxqII2o2IRqRrIRrxrg");
	this.shape_6.setTransform(0,-50);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0000FF").s().p("AAAI2IxqRrIo2o2IRrxrIxrxqII2o2IRqRrIRrxrII2I2IxrRqIRrRrIo2I2g");
	this.shape_7.setTransform(0,-50);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AAAgvIAAAvIAAAwg");
	this.shape_8.setTransform(200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205,-255,410.1,452.5);


(lib.btnSelectQN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.btnTop = new lib.btnChecker();
	this.btnTop.name = "btnTop";
	this.btnTop.parent = this;
	this.btnTop.setTransform(0,0,1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.btnTop).wait(5));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah5DVQgPgNgKgPQAnAaA5AAQAzAAAmgXIANgJQAPgMAOgRQAogxAAhEQAAg3gcgoQAMAIAKALQAuAsAABIQAABEgoAxQgwA9hTAAQhEAAgrgmgAhxCJQgMgLgIgRIAbgDQAEAaAKATQgLgFgKgJgAigAGIAHghIALABQAOgVAYgNQAIgFAJgDIgCALQAOgKAPgHIAJAAQAwAAAdAeQAJAKAHAMQgXgMgeAAQgdAAgYAOQgYANgOAUgAhmjoIDHAAIAAgSIAoAAIAAA6IjHAAIgOBGQgbAHgaASg");
	this.shape.setTransform(2.6,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhkDhIgQgMQgrgmgGg/IBAgGQAEAYAJATQAIARANALQAJAJALAFQATAKAYAAQArAAAfgiQAfghAAg4QAAgjgOgaQgGgMgKgJQgdgegvAAIgJAAQgPABgMAFQgJADgJAFQgYANgNAUIgMgBIgugGIAwkAID4AAIAAAoIAAASIjHAAIgbCHQAagSAbgHQAVgGAUAAQBCAAAtAtQAKAKAIALQAbAnAAA4QAABEgoAxQgNARgQAMIgNAJQgmAXgyAAQg5AAgngag");
	this.shape_1.setTransform(-2,-2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA5DMIgHgKQAiAWAvAAQAuAAAggUQANgHALgMQAcgcAPguQATg3AAhXQAAhKgMgsQgLgsgUgfIAAAAQAYAPAQAZQAUAfALAsQAMAsAABJQAABYgTA3QgSA2gkAdQgkAeg3AAQhIAAgqg0gAjSD3IAAgoIAVAAIAAnOIAoAAIAAH2gAA8B9QgdgpAAh7QAAh7AgguQAIgJAKgIQAJgIAKgFQAOgGAQAAQAsAAAdApIAFAIQgRgJgVAAQgqAAgZAkQggAuAAB6QAABxAYAsQgTgKgQgWgAlOh/IAZgOIANgIQAZgPAVgSIAABFIgTAMQgkAVgdAKg");
	this.shape_2.setTransform(2,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABaDqQgSgMgPgSQgxg/AAiNQAAhYASg2QASg2AlgdQAjgeA3AAQApAAAeARQAeAQAUAeIAAAAIAAAAQAUAfALAsQAMAsAABJQAABYgTA3QgPAugcAcIgLAJIgNAKQggAUguAAQgvAAgigWgACMjGQgWAIgPAWIAAAAQggAuAAB6QAAB8AdApQAQAWATAKQARAIATAAQArAAAdgpQAcgpAAh7QAAhvgXgsIgFgIQgdgpgsAAQgQAAgOAGgAiqD3IgoAAIAAlAIAAhFIAAgCQgTARgbASIgNAIIgZAOQgVALgTAGIAAg7QA0gYAngjQAmgiAQghIAoAAIAAAoIAAHOg");
	this.shape_3.setTransform(-2,-2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AB2DqQgTgMgOgSQgyg/AAiNQAAhYATg2QASg2AkgdQAkgeA3AAQAoAAAeARQAeAQAUAeIABAAQAUAfALAsQALAsAABJQAABYgSA3QgQAugcAcIgKAJIgNAKQghAUgtAAQgvAAgigWgACojGQgWAIgQAWIAAAAQgfAuAAB6QAAB8AdApQAPAWAUAKQAQAIAUAAQAqAAAdgpQAdgpAAh7QAAhvgXgsIgGgIQgdgpgrAAQgQAAgOAGgAk7D3IguAAQgBgWAIgUQANgiAcghQAbghA1grQBShCAdgnQAcgnAAgjQAAgUgHgRQgHgNgMgMQgagZgqAAQgtAAgaAbQgbAaAAAwIgRgCIgugFQAGhHAqglQArglBHAAQBIAAAqAoQAMAMAJANQAVAgAAAqQAAAegMAdQgMAdgdAgQgcAghDA4Qg3AugQARQgPAQgLARIBJAAICtAAIAAAoIAAATg");
	this.shape_4.setTransform(-2,-2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABVDGIgHgKQAiAWAvAAQAtAAAhgUQAMgHALgMQAcgcAQguQASg2AAhXQAAhLgLgsQgLgsgUgeQAXAPARAZQAUAeALAsQALAsAABLQAABXgSA2QgSA2gkAeQgkAdg3AAQhJAAgpg0gAlpDyQgBgVAHgTIEdAAIAAgTIAoAAIAAA7gABYB3QgdgpAAh6QAAh7AfguQAIgKAKgIQAJgHALgGQAOgFAQAAQArAAAdAoIAGAJQgSgJgUAAQgqAAgaAjQgfAuAAB8QAABvAYAsQgUgKgPgWgAk8CPQALgRAPgRQAQgQA3gvQBDg3AcggQAdggAMgdQAMgdAAgeQAAgqgVggQAKAGAJAJQAqAoAAA7QAAAegMAdQgMAdgdAgQgcAfhDA4QgtAngTASgAldhzQABgTAFgQIARABQAAgvAbgbQAagaAtAAQAqAAAaAZQAMALAHAOQgVgKgaAAQgtAAgaAaQgbAbAAAvg");
	this.shape_5.setTransform(2,2.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AkjDlQgIgFgIgIQgsgngGg/IA9gIQAGAaAIASQAJAUANAMQAKAJALAFQATAJAWAAQAsAAAegeQAegeAAgtQAAgagLgVQgGgMgLgKQgagbgqgBIgCAAQgSAAgaAHIAHg1IAKAAQAnAAAggUQAfgVAAgrQAAgQgFgOQgHgOgKgLQgYgXgkAAQgVABgQAHQgNAGgKAJIgBABQgWAWgIAsIgMgCIgxgIQAMg+AogiQAogiA7AAQApAAAiASQAiARATAdIAAABQATAfgBAiQAAAggRAbQgGAJgIAJQgQAPgVAKIAKADQAcAIATASQAGAGAFAGIAIAMQARAcAAApQAABBgwAvQgvAthKAAQg2AAgngbgAByDpQgTgMgPgRQgxg/AAiNQAAhYATg2QASg3AkgdQAkgdA3AAQAoAAAeARQAeAQAUAeIAAAAQAVAfALArQALAsAABKQAABYgSA2QgQAvgcAbIgLAKIgOAKQggATgsABQgwAAghgXgACjjHQgVAJgQAVIAAABQggAuABB6QAAB8AcApQAQAVAUAKQAQAJAUAAQAqAAAdgpQAcgpAAh7QAAhvgXgsIgFgJQgdgogrAAQgRAAgOAFg");
	this.shape_6.setTransform(-2,-2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ak2DTQgOgMgKgPQAnAbA2AAQBKAAAvguQAwguAAhBQAAgpgRgbQATALAOAQQAYAgAAAxQAABBgwAuQgvAuhKAAQhCAAgrgogABODGIgHgKQAhAWAwAAQAsAAAggTQANgHAMgNQAcgcAQguQASg2AAhXQAAhLgLgsQgLgsgVgeQAYAPARAZQATAeALAsQAMAsAABLQAABXgTA2QgRA2glAeQgjAdg4AAQhIAAgpg0gABQB3QgcgpAAh6QgBh7AgguQAIgKAKgIQAJgHAKgGQAOgFARAAQArAAAdAoIAFAJQgRgJgVAAQgqAAgZAjQgfAugBB8QAABvAZAsQgUgKgQgWgAkvCJQgNgMgJgUIAbgEQAFAeALAUQgLgGgKgIgAjEgBQgRAAgaAGIAGguQAqABAaAaQALALAGALQgVgJgbAAgAibhCIADgCQAQgKAIgQQAIgIAGgJQARgbAAggQABgigTgfIAAgBQAaAQAPAZQASAfAAAiQAAAggSAbQgMATgWAOQgTgTgcgJgAliiCQADgRAGgPIAMACQAIgsAWgWQALgJANgHQAQgIAVAAQAkAAAYAWQAKALAHAOQgRgHgUAAQgkAAgXAXQgYAWgIAtg");
	this.shape_7.setTransform(2.3,2.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABLDHIgHgKQAiAWAvAAQAuAAAggUQANgHALgMQAcgcAPguQATg2AAhXQAAhLgMgsQgLgsgUgeQAYAPAQAZQAUAeALAsQAMAsAABLQAABXgTA2QgSA2gkAeQgkAdg3AAQhIAAgqg0gAk5DVQgPgNgKgPQAnAaA5AAQA0AAAmgXIANgJQAPgMAOgRQAogxAAhEQAAg3gcgoQAMAIAKALQAuAsAABIQAABEgoAxQgwA9hUAAQhEAAgrgmgABOB4QgdgpAAh6QAAh7AgguQAIgKAKgIQAJgHAKgGQAOgFAQAAQAsAAAdAoIAFAJQgRgJgVAAQgqAAgZAjQggAuAAB8QAABvAYAsQgTgKgQgWgAkxCJQgMgLgIgRIAbgDQAEAaAKATQgLgFgKgJgAlgAGIAHghIALABQAOgVAYgNQAIgFAJgDIgCALQAOgKAPgHIAJAAQAwAAAeAeQAJAKAHAMQgXgMgfAAQgdAAgYAOQgYANgOAUgAkmjoIDIAAIAAgSIAoAAIAAA6IjIAAIgOBGQgbAHgaASg");
	this.shape_8.setTransform(2.6,2.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AByDqQgTgMgOgSQgyg/AAiNQAAhYATg2QASg2AkgdQAkgeA3AAQAoAAAeARQAeAQAUAeIABAAQAUAfALAsQALAsAABJQAABYgSA3QgQAugcAcIgKAJIgNAKQghAUgtAAQgvAAgigWgACkjGQgWAIgQAWIAAAAQgfAuAAB6QAAB8AdApQAPAWAUAKQAQAIAUAAQAqAAAdgpQAdgpAAh7QAAhvgXgsIgGgIQgdgpgrAAQgQAAgOAGgAkkDmIgQgMQgrgngGg/IBAgFQAEAYAJASQAIARANAMQAJAIALAGQATAJAYAAQAsAAAfghQAfgiAAg3QAAgkgOgZQgGgNgKgJQgdgegwAAIgJABQgPABgMAEQgJADgJAFQgYANgNAVIgMgCIgugGIAwkAID5AAIAAAoIAAATIjIAAIgbCGQAagRAbgIQAVgGAVAAQBCAAAtAtQAKAKAIAMQAbAnAAA3QAABEgoAyQgNARgQAMIgNAJQgmAXgzAAQg5AAgngag");
	this.shape_9.setTransform(-2,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

	// Layer 1
	this.btnBG = new lib.btnBG2();
	this.btnBG.name = "btnBG";
	this.btnBG.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.btnBG).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-45,180,90);


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
		/*
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
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btnS
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(22.2,0,0.8,0.34,0,0,0,0.3,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("ACWAAQAAA+gsAsQgsAsg+AAQg+AAgsgsQgrgsAAg+QAAg9ArgsQAsgsA+AAQA+AAAsAsQAsAsAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().p("AhpBqQgsgsAAg+QAAg9AsgsQArgsA+AAQA+AAArAsQAtAsAAA9QAAA+gtAsQgrAsg+AAQg+AAgrgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.label = new cjs.Text("文", "bold 30px 'Arial'", "#FFFF00");
	this.label.name = "label";
	this.label.lineHeight = 32;
	this.label.lineWidth = 34;
	this.label.parent = this;
	this.label.setTransform(21.8,-15.9);

	this.label2 = new cjs.Text("文", "bold 30px 'Arial'");
	this.label2.name = "label2";
	this.label2.lineHeight = 32;
	this.label2.lineWidth = 34;
	this.label2.parent = this;
	this.label2.setTransform(24,-13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.label2},{t:this.label}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.theRadioButton, new cjs.Rectangle(-19.1,-18,82,40.9), null);


(lib.numPairAnser = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btnS
	this.instance = new lib.btnSquare_1();
	this.instance.parent = this;
	this.instance.setTransform(0,-30,0.8,0.81,0,0,0,0.1,-0.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnSquare_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// checker
	this.checker = new lib.checker();
	this.checker.name = "checker";
	this.checker.parent = this;
	this.checker.setTransform(0,-30,0.389,0.389,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// Layer_1
	this.n1 = new lib.numberMC_roman_yellow();
	this.n1.name = "n1";
	this.n1.parent = this;
	this.n1.setTransform(-15,0.1,0.7,1,0,0,0,0,-0.1);

	this.n2 = new lib.numberMC_roman_yellow();
	this.n2.name = "n2";
	this.n2.parent = this;
	this.n2.setTransform(15,0.1,0.7,1,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.n2},{t:this.n1}]}).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66CCCC").ss(3,1,1).p("AkSl2IIlAAQBkAAAABkIAAIlQAABkhkAAIolAAQhkAAAAhkIAAolQAAhkBkAAg");
	this.shape.setTransform(0,-30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000033").s().p("AkSF3QhkAAAAhkIAAolQAAhkBkAAIIlAAQBkAAAABkIAAIlQAABkhkAAg");
	this.shape_1.setTransform(0,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.numPairAnser, new cjs.Rectangle(-40.1,-70.4,80,81), null);


(lib.numPair = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.n3 = new lib.numberMC_roman_white();
	this.n3.name = "n3";
	this.n3.parent = this;
	this.n3.setTransform(45,0.1,0.7,1,0,0,0,-0.1,-0.1);

	this.n1 = new lib.numberMC_roman_white();
	this.n1.name = "n1";
	this.n1.parent = this;
	this.n1.setTransform(-15,0.1,0.7,1,0,0,0,0,-0.1);

	this.n2 = new lib.numberMC_roman_white();
	this.n2.name = "n2";
	this.n2.parent = this;
	this.n2.setTransform(15,0.1,0.7,1,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.n2},{t:this.n1},{t:this.n3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.numPair, new cjs.Rectangle(-28.4,-60.7,87,61.9), null);


(lib.forPNAnser = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btnS
	this.instance = new lib.btnSquare_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.6,0.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnSquare_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// Layer_4
	this.checker = new lib.checker();
	this.checker.name = "checker";
	this.checker.parent = this;
	this.checker.setTransform(0,0,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(3));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKDWIgSAAQgLAAgHgHQgHgIAAgKIAAibIibAAQgKAAgIgHQgHgHAAgLIAAgSQAAgKAHgHQAIgIAKAAICbAAIAAiaQAAgKAHgHQAHgIALAAIASAAQAKAAAHAIQAIAHAAAKIAACaICaAAQAKAAAHAIQAIAHAAAKIAAASQAAALgIAHQgHAHgKAAIiaAAIAACbQAAAKgIAIQgHAHgKAAIAAAAg");
	this.shape.setTransform(0.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgIDWQgLAAgHgHQgHgIAAgKIAAibIibAAQgKAAgHgHQgIgHAAgLIAAgSQAAgKAIgHQAHgIAKAAICbAAIAAiaQAAgKAHgHQAHgIALAAIASAAQAKAAAIAIQAHAHAAAKIAACaICaAAQAKAAAIAIQAHAHAAAKIAAASQAAALgHAHQgIAHgKAAIiaAAIAACbQAAAKgHAIQgIAHgKAAg");
	this.shape_1.setTransform(2.1,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ADAAiIl/AAQgKABgIgIQgHgHAAgKIAAgTQAAgKAHgHQAIgIAKABIF/AAQAKgBAIAIQAHAHAAAKIAAATQAAAKgHAHQgIAHgKAAIAAAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ai/AjQgKgBgIgGQgHgIAAgKIAAgSQAAgLAHgHQAIgHAKAAIF/AAQALAAAHAHQAHAHAAALIAAASQAAAKgHAIQgHAGgLABg");
	this.shape_3.setTransform(2.1,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYC2IAAgyIAxAAIAAAygAgVBeIAAgOQAAgZAHgTQAFgOALgPQAJgJAXgUQAWgUAHgNQAIgMgBgOQABgZgVgUQgUgTgdAAQgbAAgTARQgSASgGAlIgtgEQAGgzAegbQAegaAwAAQA1AAAfAcQAgAdgBAoQABAYgMAUQgKAUghAbQgVATgHAJQgGAJgDAMQgDALgBAbg");
	this.shape_4.setTransform(-1,-1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYC2IAAgyIAxAAIAAAygAgWBeIAAgNQABgaAHgTQAFgOALgPQAJgJAXgUQAXgVAHgMQAGgLAAgOQAAgagUgTQgUgUgdAAQgbAAgSARQgUATgFAkIgtgEQAFgzAfgbQAegaAxAAQA0AAAfAdQAgAcgBAoQAAAYgLAUQgLAUggAbQgVATgHAJQgGAJgEAMQgDAMAAAag");
	this.shape_5.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	// Layer_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#00CC00").ss(3,1,1).p("AiukSIFdAAQBkAAAABkIAAFdQAABkhkAAIldAAQhkAAAAhkIAAldQAAhkBkAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006600").s().p("AiuETQhkAAAAhkIAAldQAAhkBkAAIFdAAQBkAAAABkIAAFdQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-30,60,60);


(lib.formulaUpB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.nPairC = new lib.numPair();
	this.nPairC.name = "nPairC";
	this.nPairC.parent = this;
	this.nPairC.setTransform(287.5,29.9);

	this.nPairB = new lib.numPair();
	this.nPairB.name = "nPairB";
	this.nPairB.parent = this;
	this.nPairB.setTransform(136.5,29.9);

	this.fPN2 = new lib.forPN();
	this.fPN2.name = "fPN2";
	this.fPN2.parent = this;
	this.fPN2.setTransform(235.5,10.4,1,1,0,0,0,0.1,-0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAeCwQgKgRgciCQhEB3gpAiQgbAWgZAAQgSAAgOgMQgLgLAAgPQAAgPAKgKQAJgKAPAAQAOABAPAOQAMAJAGABQAFgBAJgGQAUgRAkg3QAjg4ALgXQgbhrgCgHQgKgcgQgMQgRgLgfAAIgYABIAAgRIB2gUQAVAXAKAXQAIAPASBEIAng6QAPgVAWgUQAWgTARgHQAKgEANAAQATAAAMAKQALAKAAAPQAAAQgHAGQgMALgQAAQgJAAgLgDQgVgIgHAAQgKABgPALQgbAXgmBCIAkCWQAJAjAFAHQAGAHAGgBQAJAAAMgKQAYgUASghIAPAIQgcA0gqAjQgZATgQAAQgZAAgOgcg");
	this.shape.setTransform(188.3,8.9);

	this.fPN1 = new lib.forPN();
	this.fPN1.name = "fPN1";
	this.fPN1.parent = this;
	this.fPN1.setTransform(81.5,10.4,1,1,0,0,0,0.1,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhXCHIAAgHQBFg/AbgoQAdgnAAghQAAgZgPgQQgQgQgVAAQgTAAgPALQgQAMgIAWIgHAAQAFgkAUgUQAUgTAfAAQAfAAAWAVQAVAUAAAcQAAAVgJAUQgOAeghAkQgvA1gNALIBFAAQAVAAAIgCQAIgBAIgFQAGgFAFgJIAIAAIgTAzg");
	this.shape_1.setTransform(55.9,-17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAeCwQgKgRgciCQhEB3gpAiQgbAWgZAAQgSAAgOgMQgLgLAAgPQAAgPAKgKQAJgKAPAAQAOABAPAOQAMAJAGABQAFgBAJgGQAUgRAkg3QAjg4ALgXQgbhrgCgHQgKgcgQgMQgRgLgfAAIgYABIAAgRIB2gUQAVAXAKAXQAIAPASBEIAng6QAPgVAWgUQAWgTARgHQAKgEANAAQATAAAMAKQALAKAAAPQAAAQgHAGQgMALgQAAQgJAAgLgDQgVgIgHAAQgKABgPALQgbAXgmBCIAkCWQAJAjAFAHQAGAHAGgBQAJAAAMgKQAYgUASghIAPAIQgcA0gqAjQgZATgQAAQgZAAgOgcg");
	this.shape_2.setTransform(21.3,8.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.fPN1},{t:this.shape},{t:this.fPN2},{t:this.nPairB},{t:this.nPairC}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.formulaUpB, new cjs.Rectangle(0,-30.9,346,61.9), null);


(lib.formulaUpA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.nPairC = new lib.numPair();
	this.nPairC.name = "nPairC";
	this.nPairC.parent = this;
	this.nPairC.setTransform(344.5,29.9);

	this.nPairB = new lib.numPair();
	this.nPairB.name = "nPairB";
	this.nPairB.parent = this;
	this.nPairB.setTransform(193.5,29.9);

	this.nPairA = new lib.numPair();
	this.nPairA.name = "nPairA";
	this.nPairA.parent = this;
	this.nPairA.setTransform(28.5,29.9);

	this.fPN2 = new lib.forPN();
	this.fPN2.name = "fPN2";
	this.fPN2.parent = this;
	this.fPN2.setTransform(292.5,10.4,1,1,0,0,0,0.1,-0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAeCwQgKgRgciCQhEB3gpAiQgbAWgZAAQgSAAgOgMQgLgLAAgPQAAgPAKgKQAJgKAPAAQAOABAPAOQAMAJAGABQAFgBAJgGQAUgRAkg3QAjg4ALgXQgbhrgCgHQgKgcgQgMQgRgLgfAAIgYABIAAgRIB2gUQAVAXAKAXQAIAPASBEIAng6QAPgVAWgUQAWgTARgHQAKgEANAAQATAAAMAKQALAKAAAPQAAAQgHAGQgMALgQAAQgJAAgLgDQgVgIgHAAQgKABgPALQgbAXgmBCIAkCWQAJAjAFAHQAGAHAGgBQAJAAAMgKQAYgUASghIAPAIQgcA0gqAjQgZATgQAAQgZAAgOgcg");
	this.shape.setTransform(245.3,8.9);

	this.fPN1 = new lib.forPN();
	this.fPN1.name = "fPN1";
	this.fPN1.parent = this;
	this.fPN1.setTransform(138.5,10.4,1,1,0,0,0,0.1,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhWCHIAAgHQBEg/AbgoQAdgnAAghQAAgZgPgQQgQgQgUAAQgUAAgPALQgQAMgIAWIgHAAQAFgkAUgUQAVgTAeAAQAfAAAWAVQAVAUAAAcQAAAVgJAUQgOAeghAkQgvA1gNALIBEAAQAWAAAIgCQAIgBAHgFQAHgFAFgJIAHAAIgSAzg");
	this.shape_1.setTransform(112.9,-17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAeCwQgKgRgciCQhEB3gpAiQgbAWgZAAQgSAAgOgMQgLgLAAgPQAAgPAKgKQAJgKAPAAQAOABAPAOQAMAJAGABQAFgBAJgGQAUgRAkg3QAjg4ALgXQgbhrgCgHQgKgcgQgMQgRgLgfAAIgYABIAAgRIB2gUQAVAXAKAXQAIAPASBEIAng6QAPgVAWgUQAWgTARgHQAKgEANAAQATAAAMAKQALAKAAAPQAAAQgHAGQgMALgQAAQgJAAgLgDQgVgIgHAAQgKABgPALQgbAXgmBCIAkCWQAJAjAFAHQAGAHAGgBQAJAAAMgKQAYgUASghIAPAIQgcA0gqAjQgZATgQAAQgZAAgOgcg");
	this.shape_2.setTransform(78.3,8.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.fPN1},{t:this.shape},{t:this.fPN2},{t:this.nPairA},{t:this.nPairB},{t:this.nPairC}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.formulaUpA, new cjs.Rectangle(0,-30.9,403,61.9), null);


(lib.formulaDownB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah5GIQA3geAjgzQAhg0AShQQAQhQAAhWQAAhdgOhNQgLg9gQgkQgQglgbgiQgbghgugfIAAgTQBDAhAtAtQA+BAAiBXQAjBWgBBdQAACIhCBwQhCBwhuAxg");
	this.shape.setTransform(297.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AALFLQg/hAgihXQgihWAAheQAAiHBDhwQBChwBsgxIAAATQg2AegjA0QghAzgRBQQgSBPAABXQAABdAPBNQALA9AQAlQAQAkAcAiQAbAiAsAeIAAARQhCgigsgsg");
	this.shape_1.setTransform(68.1,0);

	this.nPairB = new lib.numPairAnser();
	this.nPairB.name = "nPairB";
	this.nPairB.parent = this;
	this.nPairB.setTransform(239.2,29.3);

	this.fPN1 = new lib.forPNAnser();
	this.fPN1.name = "fPN1";
	this.fPN1.parent = this;
	this.fPN1.setTransform(166.4,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAeCxQgKgSgciDQhEB4gpAiQgbAWgZAAQgSAAgOgNQgLgJAAgQQAAgPAKgKQAJgJAPAAQAOgBAPAOQAMAKAGAAQAFAAAJgGQAUgRAkg3QAjg4ALgXQgbhrgCgHQgKgcgQgLQgRgNgfAAIgYACIAAgQIB2gVQAVAXAKAXQAIAQASBDIAng7QAPgVAWgSQAWgUARgHQAKgEANAAQATAAAMAKQALAKAAAOQAAARgHAHQgMALgQgBQgJAAgLgDQgVgIgHABQgKgBgPAMQgbAYgmBBIAkCWQAJAjAFAHQAGAGAGAAQAJABAMgLQAYgUASghIAPAIQgcA0gqAjQgZATgQAAQgZAAgOgbg");
	this.shape_2.setTransform(110.7,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjsBaIAAglIHZAAIAAAlgAjsg1IAAgkIHZAAIAAAkg");
	this.shape_3.setTransform(23.7,-2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah5GIQA3geAjgzQAhg0AShQQARhQAAhWQAAhdgPhNQgLg9gQgkQgQglgbgiQgcghgtgfIAAgTQBEAhAsAtQA+BAAiBXQAiBWAABdQABCIhDBwQhCBwhuAxg");
	this.shape_4.setTransform(591.4,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AALFLQg/hAgihXQgihWAAheQAAiHBDhwQBChwBsgxIAAATQg2AegjA0QghAzgRBQQgSBPAABXQAABdAPBNQALA9AQAlQAQAkAcAiQAbAiAsAeIAAARQhCgigsgsg");
	this.shape_5.setTransform(362.1,0);

	this.nPairD = new lib.numPairAnser();
	this.nPairD.name = "nPairD";
	this.nPairD.parent = this;
	this.nPairD.setTransform(533.2,29.3);

	this.fPN2 = new lib.forPNAnser();
	this.fPN2.name = "fPN2";
	this.fPN2.parent = this;
	this.fPN2.setTransform(460.4,-1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAeCxQgKgSgciDQhEB4gpAiQgbAWgZAAQgSAAgOgNQgLgJAAgQQAAgPAKgKQAJgJAPAAQAOgBAPAOQAMAKAGAAQAFAAAJgGQAUgRAkg3QAjg4ALgXQgbhrgCgHQgKgcgQgLQgRgNgfAAIgYACIAAgQIB2gVQAVAXAKAXQAIAQASBDIAng7QAPgVAWgSQAWgUARgHQAKgEANAAQATAAAMAKQALAKAAAOQAAARgHAHQgMALgQgBQgJAAgLgDQgVgIgHABQgKgBgPAMQgbAYgmBBIAkCWQAJAjAFAHQAGAGAGAAQAJABAMgLQAYgUASghIAPAIQgcA0gqAjQgZATgQAAQgZAAgOgbg");
	this.shape_6.setTransform(404.7,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah+CbQgGABgFgFIgNgOQgEgEAAgGQAAgHAEgEIB0h0Ih0hzQgEgFAAgGQAAgGAFgFIANgNQAEgEAGAAQAHAAAEAEIBzB0IB0h0QAEgEAHAAQAGAAAFAEIANAOQAEAEAAAGQAAAHgEAEIh0BzIB0B0QAEAEAAAGQAAAHgEAEIgNAOQgFAEgGgBQgHABgEgEIh0h0IhzB0QgEAEgFAAIgCAAg");
	this.shape_7.setTransform(330.9,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.fPN2},{t:this.nPairD},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.fPN1},{t:this.nPairB},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.formulaDownB, new cjs.Rectangle(0,-40.8,603.6,81.8), null);


(lib.formulaDownA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjsBaIAAglIHZAAIAAAlgAjsg1IAAgkIHZAAIAAAkg");
	this.shape.setTransform(23.7,-2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah4GIQA2geAjgzQAig0ARhQQAQhQAAhWQAAhdgOhNQgLg9gPgkQgRglgbgiQgcghgsgfIAAgTQBCAhAtAtQA9BAAjBXQAiBWABBdQgBCIhDBwQhCBwhsAxg");
	this.shape_1.setTransform(751.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AALFLQg/hAgihXQgihWAAheQAAiHBDhwQBChwBsgxIAAATQg2AegjA0QghAzgRBQQgSBPAABXQAABdAPBNQALA9AQAlQAQAkAcAiQAbAiAsAeIAAARQhCgigsgsg");
	this.shape_2.setTransform(442.1,0);

	this.nPairD = new lib.numPairAnser();
	this.nPairD.name = "nPairD";
	this.nPairD.parent = this;
	this.nPairD.setTransform(693.2,29.3);

	this.fPN2 = new lib.forPNAnser();
	this.fPN2.name = "fPN2";
	this.fPN2.parent = this;
	this.fPN2.setTransform(620.4,-1.6);

	this.nPairC = new lib.numPairAnser();
	this.nPairC.name = "nPairC";
	this.nPairC.parent = this;
	this.nPairC.setTransform(498.2,29.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAeCxQgKgSgciDQhEB4gpAiQgbAWgZAAQgSAAgOgNQgLgJAAgQQAAgPAKgKQAJgJAPAAQAOgBAPAOQAMAKAGAAQAFAAAJgGQAUgRAkg3QAjg4ALgXQgbhrgCgHQgKgcgQgLQgRgNgfAAIgYACIAAgQIB2gVQAVAXAKAXQAIAQASBDIAng7QAPgVAWgSQAWgUARgHQAKgEANAAQATAAAMAKQALAKAAAOQAAARgHAHQgMALgQgBQgJAAgLgDQgVgIgHABQgKgBgPAMQgbAYgmBBIAkCWQAJAjAFAHQAGAGAGAAQAJABAMgLQAYgUASghIAPAIQgcA0gqAjQgZATgQAAQgZAAgOgbg");
	this.shape_3.setTransform(564.7,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah5GIQA3geAjgzQAhg0AShQQAQhQAAhWQAAhdgOhNQgLg9gQgkQgQglgbgiQgbghgugfIAAgTQBDAhAtAtQA+BAAiBXQAjBWgBBdQAACIhCBwQhCBwhuAxg");
	this.shape_4.setTransform(378.4,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AALFLQg/hAgihXQgihWAAheQAAiHBDhwQBChwBsgxIAAATQg2AegjA0QghAzgRBQQgSBPAABXQAABdAPBNQALA9AQAlQAQAkAcAiQAbAiAsAeIAAARQhCgigsgsg");
	this.shape_5.setTransform(69.1,0);

	this.nPairB = new lib.numPairAnser();
	this.nPairB.name = "nPairB";
	this.nPairB.parent = this;
	this.nPairB.setTransform(320.2,29.3);

	this.fPN1 = new lib.forPNAnser();
	this.fPN1.name = "fPN1";
	this.fPN1.parent = this;
	this.fPN1.setTransform(247.4,-1.6);

	this.nPairA = new lib.numPairAnser();
	this.nPairA.name = "nPairA";
	this.nPairA.parent = this;
	this.nPairA.setTransform(125.2,29.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAeCxQgKgSgciDQhEB4gpAiQgbAWgZAAQgSAAgOgNQgLgJAAgQQAAgPAKgKQAJgJAPAAQAOgBAPAOQAMAKAGAAQAFAAAJgGQAUgRAkg3QAjg4ALgXQgbhrgCgHQgKgcgQgLQgRgNgfAAIgYACIAAgQIB2gVQAVAXAKAXQAIAQASBDIAng7QAPgVAWgSQAWgUARgHQAKgEANAAQATAAAMAKQALAKAAAOQAAARgHAHQgMALgQgBQgJAAgLgDQgVgIgHABQgKgBgPAMQgbAYgmBBIAkCWQAJAjAFAHQAGAGAGAAQAJABAMgLQAYgUASghIAPAIQgcA0gqAjQgZATgQAAQgZAAgOgbg");
	this.shape_6.setTransform(191.7,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah+CbQgGABgFgFIgNgOQgEgEAAgGQAAgHAEgEIB0h0Ih0hzQgEgFAAgGQAAgGAFgFIANgNQAEgEAGAAQAHAAAEAEIBzB0IB0h0QAEgEAHAAQAGAAAFAEIANAOQAEAEAAAGQAAAHgEAEIh0BzIB0B0QAEAEAAAGQAAAHgEAEIgNAOQgFAEgGgBQgHABgEgEIh0h0IhzB0QgEAEgFAAIgCAAg");
	this.shape_7.setTransform(410.9,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.nPairA},{t:this.fPN1},{t:this.nPairB},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.nPairC},{t:this.fPN2},{t:this.nPairD},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.formulaDownA, new cjs.Rectangle(0,-40.8,763.6,81.8), null);


(lib.btnClear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.btnSquare_1();
	this.instance.parent = this;
	this.instance.setTransform(0,-30,0.8,0.81,0,0,0,0.1,-0.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnSquare_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AghJlIAAg5QAeAMAOAAQAhAIAPgKQAFgIAAgKIAAi2IiaAAIAAg1ICaAAIAAhBIhrAAIAAg0IEDAAIAAA0IhhAAIAABBICgAAIAAA1IigAAIAADFQAAAmgeARQgPAJgZAAQghAAgxgOgAkbJyIAAo4QADgFAAgCIAFAAICHAAIAlAWIgqCZQgIAjAKAKQAeAvAKAoQAPBBgeAoQgMASgXAHQgZAIg0gKIAACMgAjmBnIAAFFQAjAPARgCQAPgDADgHQAZgog/h4QgFgKADgSIAliOIhBAAgACmGvIAwgZQAqBDAoBpIgvAXQgthugmg8gAieIuQBJg8AohcIAxAbQg2BphLA/QgSgcgPgPgAh7CrQBLghAogZQAqgZAvg3IAmAcQgFACAAADQBQA8BkAoIgcAvQhmgqhVhGQgoAqgeASQgnAeg8AZgABlgmIAAg6QBJASARgKQANgKAAgPIAAgPIkGAAIAABaIg0AAIAAkvQACgMAKAAIFWAAQAMACAAAKIAAD6QAAAegZASQgVAMgmAAQgeAAgpgHgAg6iwIEGAAIAAgqIkGAAgAg6ktIAAAjIEGAAIAAgjQAAgFgDAAIj+AAQgFADAAACgAknhCQBIiRAXhcIA0APQgbBphGCOgAknmYIAbgwQAtAZA8AoIggAwQg8gwgogRgAiPl/IAAgyIC4AAIAAghIiaAAIAAgtICaAAIAAgjIiwAAIAAgtICwAAIAAgjIA3AAIAAAjIC0AAIAAAtIi0AAIAAAjICgAAIAAAtIigAAIAAAhIDGAAIAAAygAkgo4IAegwQAwAcA8AvIghAtQhBgygogWg");
	this.shape.setTransform(-1.5,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AghJlIAAg5QAeAMAOAAQAhAIAPgKQAFgIAAgKIAAi2IiaAAIAAg1ICaAAIAAhBIhrAAIAAg0IEDAAIAAA0IhhAAIAABBICgAAIAAA1IigAAIAADFQAAAmgeARQgPAJgaAAQggAAgxgOgAkbJyIAAo4QADgFAAgCIAFAAICHAAIAlAWIgqCZQgIAjAKAKQAeAvAKAoQAPBBgeAoQgMASgXAHQgZAIg0gKIAACMgAjmBnIAAFFQAjAPARgCQAPgDADgHQAZgog/h4QgFgKADgSIAliOIhBAAgACmGvIAwgZQAqBDAoBpIgvAXQgthugmg8gAieIuQBJg8AohcIAxAbQg2BphLA/QgSgcgPgPgAh7CrQBLghAogZQAqgZAvg3IAmAcQgFACAAADQBQA8BkAoIgcAvQhmgqhVhGQgoAqgeASQgnAeg8AZgABlgmIAAg6QBJASARgKQANgKAAgPIAAgPIkGAAIAABaIg0AAIAAkvQACgMAKAAIFWAAQAMACAAAKIAAD6QAAAegZASQgVAMgmAAQgeAAgpgHgAg6iwIEGAAIAAgqIkGAAgAg6ktIAAAjIEGAAIAAgjQAAgFgDAAIj+AAQgFADAAACgAknhCQBIiRAXhcIA0APQgbBphGCOgAknmYIAbgwQAtAZA8AoIggAwQg8gwgogRgAiPl/IAAgyIC4AAIAAghIiaAAIAAgtICaAAIAAgjIiwAAIAAgtICwAAIAAgjIA3AAIAAAjIC0AAIAAAtIi0AAIAAAjICgAAIAAAtIigAAIAAAhIDGAAIAAAygAkgo4IAegwQAwAcA8AvIghAtQhBgygogWg");
	this.shape_1.setTransform(1.5,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#66CCCC").ss(3,1,1).p("AkSsGIIlAAQBkAAAABkIAAVFQAABkhkAAIolAAQhkAAAAhkIAA1FQAAhkBkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AkSMHQhkAAAAhkIAA1FQAAhkBkAAIIlAAQBkAAAABkIAAVFQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnClear, new cjs.Rectangle(-40.1,-79,80,158), null);


(lib.allAnserBtns2PN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.btnAnsPNN = new lib.forPNAnser();
	this.btnAnsPNN.name = "btnAnsPNN";
	this.btnAnsPNN.parent = this;
	this.btnAnsPNN.setTransform(37.5,35.4,1.25,1.25);

	this.btnAnsPNP = new lib.forPNAnser();
	this.btnAnsPNP.name = "btnAnsPNP";
	this.btnAnsPNP.parent = this;
	this.btnAnsPNP.setTransform(-37.5,35.4,1.25,1.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnAnsPNP},{t:this.btnAnsPNN}]}).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(3,1,1).p("AqrkFIJuAAIA5kuIA4EuIJwAAQBkAAAABkIAAJ/QAAACgBADQgBAHgBAGQgOBEhTAAI1PAAQgDAAgCAAQhHgFgNg/QgBgGgBgHQAAgGgBgIIAAp2QAAhdBXgGQACgBADAAgAqwkFIAFAAAsHHwIAAgbAqrI0IgFAA");
	this.shape.setTransform(-0.2,21.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AqrI0IgFAAIAFAAIgFAAIAAAAQhHgFgNg/IgCgNIgBgOIAAp2QAAhdBXgGIAFgBIJuAAIA5kuIA4EuIJwAAQBkAAAABkIAAJ+IgBAGIgCANIACgNIABgGIAAATIgDAAQgOBEhTAAgAsHHwIAAgbIABAOIACANgAqwkFIAFAAIgFABg");
	this.shape_1.setTransform(-0.2,21.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.allAnserBtns2PN, new cjs.Rectangle(-79.2,-36.7,158.2,115.9), null);


(lib.allAnserBtns2Num = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.btnClear = new lib.btnClear();
	this.btnClear.name = "btnClear";
	this.btnClear.parent = this;
	this.btnClear.setTransform(280.4,81.1);

	this.btnAns00 = new lib.numPairAnser();
	this.btnAns00.name = "btnAns00";
	this.btnAns00.parent = this;
	this.btnAns00.setTransform(280,232.1);

	this.btnAns09 = new lib.numPairAnser();
	this.btnAns09.name = "btnAns09";
	this.btnAns09.parent = this;
	this.btnAns09.setTransform(200,232.1);

	this.btnAns08 = new lib.numPairAnser();
	this.btnAns08.name = "btnAns08";
	this.btnAns08.parent = this;
	this.btnAns08.setTransform(120,232.1);

	this.btnAns07 = new lib.numPairAnser();
	this.btnAns07.name = "btnAns07";
	this.btnAns07.parent = this;
	this.btnAns07.setTransform(40,232.1);

	this.btnAns06 = new lib.numPairAnser();
	this.btnAns06.name = "btnAns06";
	this.btnAns06.parent = this;
	this.btnAns06.setTransform(200,151);

	this.btnAns05 = new lib.numPairAnser();
	this.btnAns05.name = "btnAns05";
	this.btnAns05.parent = this;
	this.btnAns05.setTransform(120,151);

	this.btnAns04 = new lib.numPairAnser();
	this.btnAns04.name = "btnAns04";
	this.btnAns04.parent = this;
	this.btnAns04.setTransform(40,151);

	this.btnAns03 = new lib.numPairAnser();
	this.btnAns03.name = "btnAns03";
	this.btnAns03.parent = this;
	this.btnAns03.setTransform(200,70);

	this.btnAns02 = new lib.numPairAnser();
	this.btnAns02.name = "btnAns02";
	this.btnAns02.parent = this;
	this.btnAns02.setTransform(120,70);

	this.btnAns01 = new lib.numPairAnser();
	this.btnAns01.name = "btnAns01";
	this.btnAns01.parent = this;
	this.btnAns01.setTransform(40,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnAns01},{t:this.btnAns02},{t:this.btnAns03},{t:this.btnAns04},{t:this.btnAns05},{t:this.btnAns06},{t:this.btnAns07},{t:this.btnAns08},{t:this.btnAns09},{t:this.btnAns00},{t:this.btnClear}]}).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(3,1,1).p("A4NxKIdkAAIA6kuIA4EuIRFAAQBkAAAABkMAAAAj7QAABkhkAAMgwbAAAQhkAAAAhkMAAAgj7QAAhkBkAAg");
	this.shape.setTransform(160,104.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("A4NV5QhkAAAAhkMAAAgj7QAAhkBkAAIdkAAIA6kuIA4EuIRFAAQBkAAAABkMAAAAj7QAABkhkAAg");
	this.shape_1.setTransform(160,104.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.allAnserBtns2Num, new cjs.Rectangle(-6.5,-36.7,333,283.3), null);


(lib.allAnserBtns = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.btnOK = new lib.btnOK();
	this.btnOK.name = "btnOK";
	this.btnOK.parent = this;
	this.btnOK.setTransform(920,85);

	this.btnPNN = new lib.forPNAnser();
	this.btnPNN.name = "btnPNN";
	this.btnPNN.parent = this;
	this.btnPNN.setTransform(840,120,1.273,1.273);

	this.btn20 = new lib.numPairAnser();
	this.btn20.name = "btn20";
	this.btn20.parent = this;
	this.btn20.setTransform(760,150);

	this.btn19 = new lib.numPairAnser();
	this.btn19.name = "btn19";
	this.btn19.parent = this;
	this.btn19.setTransform(680,150);

	this.btn18 = new lib.numPairAnser();
	this.btn18.name = "btn18";
	this.btn18.parent = this;
	this.btn18.setTransform(600,150);

	this.btn17 = new lib.numPairAnser();
	this.btn17.name = "btn17";
	this.btn17.parent = this;
	this.btn17.setTransform(520,150);

	this.btn16 = new lib.numPairAnser();
	this.btn16.name = "btn16";
	this.btn16.parent = this;
	this.btn16.setTransform(440,150);

	this.btn15 = new lib.numPairAnser();
	this.btn15.name = "btn15";
	this.btn15.parent = this;
	this.btn15.setTransform(360,150);

	this.btn14 = new lib.numPairAnser();
	this.btn14.name = "btn14";
	this.btn14.parent = this;
	this.btn14.setTransform(280,150);

	this.btn13 = new lib.numPairAnser();
	this.btn13.name = "btn13";
	this.btn13.parent = this;
	this.btn13.setTransform(200,150);

	this.btn12 = new lib.numPairAnser();
	this.btn12.name = "btn12";
	this.btn12.parent = this;
	this.btn12.setTransform(120,150);

	this.btn11 = new lib.numPairAnser();
	this.btn11.name = "btn11";
	this.btn11.parent = this;
	this.btn11.setTransform(40,150);

	this.btn10 = new lib.numPairAnser();
	this.btn10.name = "btn10";
	this.btn10.parent = this;
	this.btn10.setTransform(760,70);

	this.btn09 = new lib.numPairAnser();
	this.btn09.name = "btn09";
	this.btn09.parent = this;
	this.btn09.setTransform(680,70);

	this.btn08 = new lib.numPairAnser();
	this.btn08.name = "btn08";
	this.btn08.parent = this;
	this.btn08.setTransform(600,70);

	this.btn07 = new lib.numPairAnser();
	this.btn07.name = "btn07";
	this.btn07.parent = this;
	this.btn07.setTransform(520,70);

	this.btn06 = new lib.numPairAnser();
	this.btn06.name = "btn06";
	this.btn06.parent = this;
	this.btn06.setTransform(440,70);

	this.btn05 = new lib.numPairAnser();
	this.btn05.name = "btn05";
	this.btn05.parent = this;
	this.btn05.setTransform(360,70);

	this.btn04 = new lib.numPairAnser();
	this.btn04.name = "btn04";
	this.btn04.parent = this;
	this.btn04.setTransform(280,70);

	this.btn03 = new lib.numPairAnser();
	this.btn03.name = "btn03";
	this.btn03.parent = this;
	this.btn03.setTransform(200,70);

	this.btn02 = new lib.numPairAnser();
	this.btn02.name = "btn02";
	this.btn02.parent = this;
	this.btn02.setTransform(120,70);

	this.btn01 = new lib.numPairAnser();
	this.btn01.name = "btn01";
	this.btn01.parent = this;
	this.btn01.setTransform(40,70);

	this.btnPNP = new lib.forPNAnser();
	this.btnPNP.name = "btnPNP";
	this.btnPNP.parent = this;
	this.btnPNP.setTransform(840,40,1.273,1.273);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnPNP},{t:this.btn01},{t:this.btn02},{t:this.btn03},{t:this.btn04},{t:this.btn05},{t:this.btn06},{t:this.btn07},{t:this.btn08},{t:this.btn09},{t:this.btn10},{t:this.btn11},{t:this.btn12},{t:this.btn13},{t:this.btn14},{t:this.btn15},{t:this.btn16},{t:this.btn17},{t:this.btn18},{t:this.btn19},{t:this.btn20},{t:this.btnPNN},{t:this.btnOK}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.allAnserBtns, new cjs.Rectangle(1,1,958,158), null);


(lib.btnPlayAgain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.btnTop = new lib.btnTop2();
	this.btnTop.name = "btnTop";
	this.btnTop.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.btnTop).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("An5H9IAAhwQCoAvAvgdQAcgOAAggIAAiIIqeAAIAAEeIhnAAIAAkeIh1AAIAAhoIB1AAIAAmyQAFgYASAAIFuAAIAAhsInnAAIAAhiIQjAAIAABiInVAAIAABsIFlAAQAcAFAAATIAAGyIBsAAIAABoIhsAAIAACyQgFBBgvAcQgsAghOAAQhIAAhlgbgAofCBIEZAAIAAiCIkZAAgAukCBIEeAAIAAiCIkeAAgAofhjIEZAAIAAh6QgEgFgFAAIkQAAgAukjdIAAB6IEeAAIAAh/IkZAAQgFAAAAAFgAEHGyQBUgOBVghQAugcAhgqQBLhsAEjSIAAhsIiMAAIAAhnIKnAAIAABnIjSAAIAAHZQAAAcAOAOQAYATASAAIAhAAQAOAAAOgOQAOgKAAgSQAAg0AFiNIBiAOQgJD+gTAcQgqAqghAAIiDAAQgrgFggghQgcgggBghIAAoWIh5AAIAABsQgFDXhGCDQgvBGg4ArQhHAuh1AdgAAhFLQBeghA8gcIAAlMIh1AAIAAhnIB1AAIAAkCIh5AAIAAhnIFkAAIAABnIiDAAIAAECIB5AAIAABnIh5AAIAAEZQBCgmAqghIA9BVQiNBdjmBZgAIEmrIAAhnIIuAAIAABng");
	this.shape.setTransform(-3.5,-3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("An5H9IAAhwQCpAvAugdQAcgOAAggIAAiIIqeAAIAAEeIhnAAIAAkeIh1AAIAAhoIB1AAIAAmyQAFgYATAAIFtAAIAAhsInoAAIAAhiIQkAAIAABiInVAAIAABsIFlAAQAcAFAAATIAAGyIBsAAIAABoIhsAAIAACyQgFBBgvAcQgsAghOAAQhIAAhlgbgAofCBIEZAAIAAiCIkZAAgAukCBIEeAAIAAiCIkeAAgAofhjIEZAAIAAh6QgEgFgFAAIkQAAgAukjdIAAB6IEeAAIAAh/IkZAAQgFAAAAAFgAEHGyQBUgOBUghQAvgcAhgqQBLhsAEjSIAAhsIiMAAIAAhnIKoAAIAABnIjTAAIAAHZQAAAcAOAOQAXATATAAIAhAAQAOAAAOgOQAOgKAAgSQAAg0AFiNIBiAOQgJD+gTAcQgqAqghAAIiDAAQgrgFggghQgcgggBghIAAoWIh5AAIAABsQgFDXhGCDQgvBGg4ArQhHAuh1AdgAAhFLQBdghA9gcIAAlMIh1AAIAAhnIB1AAIAAkCIh5AAIAAhnIFkAAIAABnIiDAAIAAECIB5AAIAABnIh5AAIAAEZQBCgmAqghIA8BVQiMBdjmBZgAIEmrIAAhnIIuAAIAABng");
	this.shape_1.setTransform(3.5,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.btnBG = new lib.btnBG2_1();
	this.btnBG.name = "btnBG";
	this.btnBG.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.btnBG).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnPlayAgain, new cjs.Rectangle(-180,-90,360,180), null);


(lib.theWelcome = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACjA7QgOgSAAgoQAAgZAFgPQAGgQAKgIQAKgIAQAAQALAAAJAEQAJAFAFAJQAGAIADANQADAMAAAVQAAAZgFAPQgFAQgKAJQgKAIgQAAQgVAAgMgPgACwgvQgJAOAAAiQAAAjAIAMQAIAMANAAQAMAAAIgMQAIgMAAgjQAAgigIgMQgIgMgNAAQgMAAgHAKgABVBKIApiTIAPAAIgqCTgAgEA9QgNgMAAgTQAAgOAHgJQAHgJAMgDQgKgEgFgIQgFgHAAgLQAAgPALgLQAKgKATAAQASAAAMALQALAKAAAQQAAAKgFAHQgFAIgLAEQANAEAHAJQAHAJAAAOQAAASgNAMQgNANgVAAQgVAAgMgNgAAIAJQgIAJAAAMQAAAIADAHQAEAHAHAEQAHAEAIAAQANAAAIgJQAIgIAAgMQAAgNgIgIQgJgJgMAAQgNAAgIAIgAAMgyQgGAGAAAJQAAAKAGAHQAHAGAKAAQAKAAAHgGQAGgHAAgJQAAgKgGgGQgHgHgKAAQgKAAgHAHgAjhA7QgPgSAAgoQAAgZAGgPQAFgQAKgIQALgIAPAAQAMAAAIAEQAJAFAGAJQAGAIADANQADAMAAAVQAAAZgFAPQgFAQgLAJQgKAIgQAAQgVAAgLgPgAjUgvQgJAOAAAiQAAAjAIAMQAIAMAMAAQAMAAAIgMQAJgMAAgjQAAgigJgMQgIgMgMAAQgMAAgHAKgAEZBIQABgRAGgYQAGgYAMgWQAMgWAOgPIhHAAIAAgRIBdAAIAAAOQgNAOgOAYQgNAYgIAZQgFASgCAWgAhQBIIAAhwQgGAHgKAFIgTAKIAAgRQAPgHALgKQALgKAFgJIALAAIAACPgAlhBIQAAgHACgGQAEgJAIgKQAHgJAQgNQAXgSAIgLQAIgLAAgKQAAgKgHgIQgIgHgMAAQgMAAgIAIQgIAHAAAOIgSgCQACgUAMgLQAMgKAVAAQAUAAANALQAMALAAARQAAAJgEAIQgEAJgIAIQgIAJgTAQQgQANgEAFIgIAKIBHAAIAAARg");
	this.shape.setTransform(44.3,10.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFF00").ss(3,1,1).p("Aq8AAIV5AA");
	this.shape_1.setTransform(202.8,497.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AEZBjQgYATgUAHIgPgSQAbgIAOgLIADgCQgQgQgQgWIAQgMQARAYAOANQARgSAHgUQACgHgFABIhGAAIAAgTIBVAAIAMAJQgKAkgOARQgGAHgEAGQASANAcAKIgNASQgagMgVgPgADBB8IAAgTIhbAKIgFgUIARgCIAAhjIgUAAIAAgVID6AAIAAAVIiBAAIAACCgACIBaIA5gGIAAgQIg5AAgACIAxIA5AAIAAgSIg5AAgACIAMIA5AAIAAgSIg5AAgAGBBiQBRACAtgQQgSgSgjgZQgWAIggAEIgJgWQBNgJAdgoQgxAUhPAHIgHgXQBFgCAqgQQgagWgegRIgfAKIgJgYQA6gKAYgeIAZAJIgEADIBcAAIARANQgKAUgaAZQgPAQgoAUIAXAGIgEAGIBMAAIAPAIQgIAigVAXIgBACQgTAWgdARQguAXhfABgAHiAdIASAQQATAPAOANQAkgUAPgmQABAAAAAAQAAAAgBgBQAAAAgBAAQgBAAgBAAIhPAAQgIAJgMAGgAG+hRIASAMQAWAOAPAMQAmgVARgWQABgFgDAAIhdAAIgPAKgAiiBaQgQgRAAgcQAAghASgeQASgfAfgTQAegUAdAAQAXAAALAKQAMAJAAAOQgBANgHAKQgHAHgIAAQgHAAgDgEQgFgFAAgGQAAgEACgDQABgEAFgEIAGgHIABgFQAAgEgEgDQgGgEgLAAQgVAAgUAOQgVAPgOAaQgRAgAAAgQAAAWANAMQAMANAUAAQARAAAQgIQAQgIATgWIAHAGQgXAagVANQgXAMgZAAQgdAAgSgRgAnvBmQgEgEAAgJQAAgKAEgRIAFgQQgcAkgXAOQgQALgQAAQgQAAgKgNQgMgNAAgWQAAghAVglQATglAfgWQAYgSAWAAQANAAAJAHQAIAHAEAPIAIgYIAigFIguChIgBAFQAAADACADQAAAAABABQABAAAAAAQABABAAAAQABAAAAAAQADAAAEgEQAJgGAOgTIAGAFQgOAWgQALQgPAMgNAAQgJAAgFgFgAoLhAQgUASgSAjQgQAiAAAcQAAAPAHAIQAHAIAKAAQAWAAAbgiQAkgtAAguQAAgSgGgIQgIgIgMAAQgNAAgQANgAkjAXIhLBKIgMgLIBLhLIhLhJIANgMIBKBKIBKhKIALAMIhJBJIBLBLIgNAMgACAglQgGAAABgHIAAhDQAAgFAFAAIC1AAQAFABAAAEIAABDQgBAHgEAAgACQg5IACABICRAAIABgBIAAgLIiUAAgACQhgIAAAJICUAAIAAgJIgBgBIiRAAIgCABg");
	this.shape_2.setTransform(205.6,477.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,1,1).p("Aq8AAIV5AA");
	this.shape_3.setTransform(205.8,500.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AEZBjQgYATgUAHIgPgSQAagIAPgLIACgCQgPgQgQgWIAQgMQAQAYAPANQARgSAIgUQACgHgHABIhFAAIAAgTIBVAAIALAJQgJAkgNARQgHAHgEAGQASANAdAKIgPASQgYgMgWgPgADBB8IAAgTIhcAKIgEgUIARgCIAAhjIgUAAIAAgVID6AAIAAAVIiBAAIAACCgACIBaIA5gGIAAgQIg5AAgACIAxIA5AAIAAgSIg5AAgACIAMIA5AAIAAgSIg5AAgAGCBiQBRACAsgQQgSgSgjgZQgWAIgfAEIgKgWQBNgJAdgoQgxAUhPAHIgHgXQBFgCAqgQQgagWgdgRIggAKIgKgYQA7gKAXgeIAaAJIgDADIBbAAIARANQgLAUgZAZQgQAQgmAUIAVAGIgCAGIBLAAIAPAIQgIAigUAXIgCACQgTAWgdARQgvAXheABgAHhAdIASAQQAVAPANANQAjgUARgmQAAAAAAAAQAAAAgBAAQAAgBgBAAQgBAAgBAAIhOAAQgJAJgNAGgAG+hRIASAMQAWAOAPAMQAmgVARgWQABgFgDAAIhdAAIgPAKgAihBaQgRgRAAgcQAAghASgeQASgfAegTQAegUAeAAQAXAAALAKQAMAJAAAOQAAANgJAKQgFAHgJAAQgGAAgFgEQgEgFAAgGQAAgEACgDQABgEAFgEIAGgHIABgFQAAgEgEgDQgGgEgLAAQgVAAgUAOQgVAPgNAaQgSAgAAAgQAAAWAMAMQAMANAWAAQAQAAAQgIQAQgIATgWIAGAGQgWAagWANQgWAMgZAAQgeAAgQgRgAnuBmQgFgEAAgJQAAgKAFgRIAEgQQgcAkgWAOQgRALgQAAQgPAAgMgNQgLgNAAgWQAAghAUglQAUglAggWQAXgSAWAAQANAAAIAHQAJAHAFAPIAHgYIAhgFIguChIAAAFQAAADACADQABAAAAABQABAAAAAAQABABAAAAQABAAABAAQACAAAEgEQAJgGAOgTIAHAFQgPAWgQALQgOAMgOAAQgJAAgEgFgAoKhAQgVASgSAjQgQAiAAAcQAAAPAHAIQAHAIAJAAQAYAAAbgiQAjgtABguQgBgSgGgIQgIgIgLAAQgOAAgPANgAkkAXIhKBKIgLgLIBKhLIhLhJIANgMIBKBKIBKhKIAMAMIhKBJIBLBLIgNAMgACAglQgFAAgBgHIAAhDQACgFAEAAIC0AAQAGABAAAEIAABDQgBAHgFAAgACRg5IABABICRAAIABgBIAAgLIiTAAgACRhgIAAAJICTAAIAAgJIgBgBIiRAAIgBABg");
	this.shape_4.setTransform(208.6,480.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#00FFFF").ss(3,1,1).p("Aq8AAIV5AA");
	this.shape_5.setTransform(529.2,497.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FFFF").s().p("AEXCHQgXATgUAHIgPgSQAagIAOgLIADgCQgPgQgQgWIAQgMQAQAYAOANQASgSAHgUQACgHgGABIhFAAIAAgTIBVAAIALAJQgJAkgOARQgGAHgEAGQASANAcAKIgOASQgZgMgWgPgADACgIAAgTIhcAKIgEgUIARgCIAAhkIgUAAIAAgVID5AAIAAAVIiAAAIAACDgACHB+IA5gGIAAgQIg5AAgACHBVIA5AAIAAgSIg5AAgACHAwIA5AAIAAgTIg5AAgAGACGQBRACAtgQQgSgSgjgZQgWAIggAEIgJgWQBNgJAdgpQgxAVhPAHIgHgYQBFgCAqgQQgagVgegRIgfAKIgKgYQA7gKAXgeIAZAJIgDADIBcAAIARANQgLAUgZAZQgQAQgnATIAWAGIgDAGIBMAAIAPAJQgJAigUAXIgBACQgUAWgcARQgvAXheABgAHgBBIASAQQAUAPAOANQAjgUAQgmQAAAAAAAAQAAAAAAgBQAAAAgBAAQgBAAgBAAIhPAAQgIAJgNAGgAG9gtIASAMQAVAOAQAMQAmgVARgWQABgFgDAAIheAAIgOAKgAhACKQgEgFAAgKQAAgMAGgUIAIgaQgeAvgZASQgRANgQAAQgQAAgMgOQgMgPAAgYQAAgfAUgkQAUgjAhgWQAagSAVAAQAMAAAIAFQAIAEAIALIAVhJIAEgMQABgJAAgFQAAgFgCgDQgEgDgHAAIgQABIAAgIIBHgMIhHD4QgGAUAAAGQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQAAABABAAQAAABAAAAQABAAAAAAQABAAAAAAQADAAAEgDQAHgFAQgUIAHAFQgOAVgQANQgPANgOAAQgHAAgFgFgAh2ACQgdAsAAAoQAAAPAHAJQAHAIAKAAQAWAAAhgvQAhgwAAgiQAAgOgIgIQgIgIgMAAQgaAAgdArgApiB3IBAjbQAHgaAAgEQAAgGgDgDQgFgDgJAAIgOABIAAgIIBJgMIgpCSQAUgVAPgIQAPgIAQAAQAYAAAOAQQAPAPAAAZQAAAigTAiQgUAhgdATQgdATgdAAQgfAAgigYgAoMgQQgTAQgIAbIgbBeQAVAMAQAAQASAAAUgOQAUgNAPggQAOghAAghQAAgSgJgLQgKgLgNAAQgTAAgTAQgAkkA8IhKBKIgMgMIBKhKIhKhKIAMgMIBLBKIBKhJIALALIhJBJIBKBLIgMAMgAB+gBQgFAAAAgHIAAhDQABgFAEAAIC1AAQAGABAAAEIAABDQgBAHgFAAgACPgVIABABICSAAIABgBIAAgLIiUAAgACPg8IAAAJICUAAIAAgJIgBgBIiSAAIgBABg");
	this.shape_6.setTransform(532.1,474);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(3,1,1).p("Aq8AAIV5AA");
	this.shape_7.setTransform(532.2,500.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AEXCHQgXATgUAHIgPgSQAagIAOgLIADgCQgPgQgQgWIAQgMQAQAYAOANQASgSAHgUQACgHgGABIhFAAIAAgTIBVAAIALAJQgJAkgOARQgGAHgEAGQASANAcAKIgOASQgZgMgWgPgADACgIAAgTIhcAKIgEgUIARgCIAAhkIgUAAIAAgVID5AAIAAAVIiAAAIAACDgACHB+IA5gGIAAgQIg5AAgACHBVIA5AAIAAgSIg5AAgACHAwIA5AAIAAgTIg5AAgAGACGQBRACAtgQQgSgSgjgZQgWAIggAEIgJgWQBNgJAdgpQgxAVhPAHIgHgYQBFgCAqgQQgagVgegRIgfAKIgKgYQA7gKAXgeIAZAJIgDADIBcAAIARANQgLAUgZAZQgQAQgnATIAWAGIgDAGIBMAAIAPAJQgJAigUAXIgBACQgUAWgcARQgvAXheABgAHgBBIASAQQAUAPAOANQAjgUAQgmQAAAAAAAAQAAAAAAAAQAAgBgBAAQgBAAgBAAIhPAAQgIAJgNAGgAG9gtIASAMQAVAOAQAMQAmgVARgWQABgFgDAAIheAAIgOAKgAhACKQgEgFAAgKQAAgMAGgUIAIgaQgeAvgZASQgRANgQAAQgQAAgMgOQgMgPAAgYQAAgfAUgkQAUgjAhgWQAagSAVAAQAMAAAIAFQAIAEAIALIAVhJIAEgMQABgJAAgFQAAgFgCgDQgEgDgHAAIgQABIAAgIIBHgMIhHD4QgGAUAAAGQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQADAAAEgDQAHgFAQgUIAHAFQgOAVgQANQgPANgOAAQgHAAgFgFgAh2ACQgdAsAAAoQAAAPAHAJQAHAIAKAAQAWAAAhgvQAhgwAAgiQAAgOgIgIQgIgIgMAAQgaAAgdArgApiB3IBAjbQAHgaAAgEQAAgGgDgDQgFgDgJAAIgOABIAAgIIBJgMIgpCSQAUgVAPgIQAPgIAQAAQAYAAAOAQQAPAPAAAZQAAAigTAiQgUAhgdATQgdATgdAAQgfAAgigYgAoMgQQgTAQgIAbIgbBeQAVAMAQAAQASAAAUgOQAUgNAPggQAOghAAghQAAgSgJgLQgKgLgNAAQgTAAgTAQgAkkA8IhKBKIgMgMIBKhKIhKhKIAMgMIBLBKIBKhJIALALIhJBJIBKBLIgMAMgAB+gBQgFAAAAgHIAAhDQABgFAEAAIC1AAQAGABAAAEIAABDQgBAHgFAAgACPgVIABABICSAAIABgBIAAgLIiUAAgACPg8IAAAJICUAAIAAgJIgBgBIiSAAIgBABg");
	this.shape_8.setTransform(535.1,477);

	this.rbAC10 = new lib.theRadioButton();
	this.rbAC10.name = "rbAC10";
	this.rbAC10.parent = this;
	this.rbAC10.setTransform(384.7,672.3,0.918,0.918,0,0,0,67.3,-1.1);

	this.rbAC09 = new lib.theRadioButton();
	this.rbAC09.name = "rbAC09";
	this.rbAC09.parent = this;
	this.rbAC09.setTransform(384.7,625.3,0.918,0.918,0,0,0,67.3,-1.2);

	this.rbAC08 = new lib.theRadioButton();
	this.rbAC08.name = "rbAC08";
	this.rbAC08.parent = this;
	this.rbAC08.setTransform(384.7,578.3,0.918,0.918,0,0,0,67.3,-1.2);

	this.rbAC07 = new lib.theRadioButton();
	this.rbAC07.name = "rbAC07";
	this.rbAC07.parent = this;
	this.rbAC07.setTransform(277.3,672,0.918,0.918,0,0,0,67.5,-1.2);

	this.rbAC06 = new lib.theRadioButton();
	this.rbAC06.name = "rbAC06";
	this.rbAC06.parent = this;
	this.rbAC06.setTransform(277.3,625.1,0.918,0.918,0,0,0,67.5,-1.3);

	this.rbAC05 = new lib.theRadioButton();
	this.rbAC05.name = "rbAC05";
	this.rbAC05.parent = this;
	this.rbAC05.setTransform(277.3,578.3,0.918,0.918,0,0,0,67.5,-1.2);

	this.rbAC04 = new lib.theRadioButton();
	this.rbAC04.name = "rbAC04";
	this.rbAC04.parent = this;
	this.rbAC04.setTransform(169.8,672,0.918,0.918,0,0,0,67.5,-1.2);

	this.rbAC03 = new lib.theRadioButton();
	this.rbAC03.name = "rbAC03";
	this.rbAC03.parent = this;
	this.rbAC03.setTransform(169.8,625.1,0.918,0.918,0,0,0,67.5,-1.3);

	this.rbAC02 = new lib.theRadioButton();
	this.rbAC02.name = "rbAC02";
	this.rbAC02.parent = this;
	this.rbAC02.setTransform(169.8,578.3,0.918,0.918,0,0,0,67.5,-1.2);

	this.rbBD04 = new lib.theRadioButton();
	this.rbBD04.name = "rbBD04";
	this.rbBD04.parent = this;
	this.rbBD04.setTransform(542.3,671.8,0.97,0.97,0,0,0,67.5,-1.1);

	this.rbBD03 = new lib.theRadioButton();
	this.rbBD03.name = "rbBD03";
	this.rbBD03.parent = this;
	this.rbBD03.setTransform(542.3,622.3,0.97,0.97,0,0,0,67.5,-1);

	this.rbBD02 = new lib.theRadioButton();
	this.rbBD02.name = "rbBD02";
	this.rbBD02.parent = this;
	this.rbBD02.setTransform(542.3,572.8,0.97,0.97,0,0,0,67.5,-1.1);

	this.rbBD01 = new lib.theRadioButton();
	this.rbBD01.name = "rbBD01";
	this.rbBD01.parent = this;
	this.rbBD01.setTransform(542.3,523.3,0.97,0.97,0,0,0,67.5,-1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00FFFF").s().p("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");
	this.shape_9.setTransform(548.7,597);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("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");
	this.shape_10.setTransform(550.7,599);

	this.rbAC01 = new lib.theRadioButton();
	this.rbAC01.name = "rbAC01";
	this.rbAC01.parent = this;
	this.rbAC01.setTransform(224.2,528.1,0.943,0.943,0,0,0,67.4,-1.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#00FFFF").ss(6,1,1).p("AuEjjIcJHHIAAmR");
	this.shape_11.setTransform(415.8,426.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(6,1,1).p("AuEjjIcJHHIAAmR");
	this.shape_12.setTransform(419.8,430.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFF00").ss(6,1,1).p("At9i/IAAGnIb7nP");
	this.shape_13.setTransform(312.7,427.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AYlEmQApgXAagnQAagnANg7QANg8AAhBQAAhFgLg6QgJgtgMgbQgMgbgUgaQgTgXgdgUIhrFwQgKAgAAAJQAAAEAEADQACADADAAQAEAAAGgEQAMgIAaggIALAHQgYAhgYAUQgYAVgVAAQgLAAgIgIQgHgIAAgPQAAgSAKggIANgoQgwBJgnAcQgbAUgZAAQgZAAgSgWQgTgXAAgmQAAgxAfg3QAgg3AzgjQApgcAhAAQASAAANAHQANAIAMAQIAghyIAGgTQAFgOAAgIQAAgHgFgFQgIgGgKAAQgIAAgRADIAAgNIBkgQIAAgCIADACIAKgCIgBAGQArAWAdAeQAvAwAZBBQAaBAAABGQAABmgyBUQgyBThSAlgAU3gyQguBEAAA+QAAAZALANQALANAQAAQAiAAAzhKQA0hKAAg3QAAgVgMgMQgMgNgTAAQgqAAgsBEgACSD3QgwgwgahAQgZhBAAhGQAAhlAyhUQAyhUBRgkIAAAOQgpAWgZAnQgbAngMA7QgNA8AABBQAABFALA6QAIAtANAcQAMAbAVAZQAUAaAhAXIAAAMQgxgZghgigAi+EmQAqgXAagnQAZgnANg7QANg8AAhBQAAhFgLg6QgJgtgMgbQgMgbgUgaQgVgZgigXIAAgOQAzAYAhAiQAvAwAaBBQAZBAAABGQAABmgyBUQgyBThSAlgA53D3QgwgwgZhAQgahBAAhGQAAhlAzhUQAyhUBRgkIAAAOQgpAWgaAnQgaAngNA7QgNA8AABBQAABFALA6QAJAtAMAcQAMAbAVAZQAUAaAiAXIAAAMQgygZghgigAK8CVQgHgNgVhiQgzBZgfAaQgVARgTAAQgMAAgLgKQgIgHAAgMQAAgLAHgHQAHgIALAAQALAAALALQAJAHAEAAQAEAAAHgFQAPgMAagqQAbgpAIgTIgWhTQgHgWgMgIQgNgJgXAAIgSABIAAgNIBYgPQAQARAIARQAGAMAOAyIAdgrQALgQARgOQAQgOANgGQAHgDAKAAQAPAAAIAHQAIAIAAALQAAAMgFAFQgJAIgMAAQgHAAgIgDQgPgFgGAAQgIAAgKAJQgVARgcAxIAbBxQAGAZAFAGQAEAFAEAAQAHAAAJgIQASgPANgYIAMAGQgVAmggAaQgSAPgMAAQgTAAgLgVgAEgCQQgbgbAAgsQAAgzAdgvQAcgxAwgeQAvgfAuAAQAkAAARAPQASAPAAAWQAAAUgNAPQgIALgOAAQgLAAgGgHQgHgGAAgKQAAgGADgGQACgFAIgIQAIgHABgDQACgEAAgDQAAgHgHgFQgJgGgRAAQghAAgfAXQgfAWgXAqQgbAyAAAyQAAAiATAUQATATAhAAQAZAAAagNQAYgMAfghIAJAIQgiApgiATQgjAUgoAAQguAAgagagAoMCFIBllYQALgoAAgHQAAgIgFgEQgIgHgPAAQgGAAgOADIAAgNIBxgSIhBDjQAgghAXgMQAYgMAaAAQAkAAAXAYQAXAYAAApQAAA0gfA1QgeA0gtAdQguAegsAAQgyAAg1glgAmGhPQgdAYgMAsIgrCTQAgASAaAAQAdAAAfgVQAfgVAXgzQAXgyAAgyQAAgfgPgRQgPgRgVAAQgeAAgeAZgAwnCVQgGgNgWhiQgzBZgfAaQgUARgTAAQgNAAgLgKQgIgHAAgMQAAgLAIgHQAGgIALAAQALAAALALQAJAHAFAAQAEAAAGgFQAPgMAbgqQAbgpAIgTIgXhTQgHgWgMgIQgMgJgYAAIgRABIAAgNIBXgPQAQARAJARQAGAMANAyIAdgrQALgQARgOQAQgOANgGQAIgDAKAAQAOAAAIAHQAJAIAAALQAAAMgGAFQgIAIgMAAQgHAAgIgDQgQgFgFAAQgIAAgLAJQgUARgdAxIAbBxQAGAZAFAGQAEAFAEAAQAIAAAIgIQATgPAMgYIAMAGQgUAmghAaQgSAPgMAAQgTAAgLgVgA1PCiQgHgGAAgOQAAgQAHgaIAHgZQgrA4gkAXQgaAQgZAAQgZAAgRgUQgSgUAAgjQAAg1Agg4QAgg6AwgjQAmgcAhAAQAUAAAOALQANAKAHAYIAMglIA0gIIhID8IAAAHQAAAFADAEQADADADAAQAFAAAHgFQAMgKAWgdIALAIQgWAhgZATQgYASgUAAQgOAAgHgIgA17hiQgiAcgZA3QgaA1AAAtQAAAXAKANQAMAMAOAAQAkAAAqg1QA4hGAAhJQAAgcgLgMQgLgNgSAAQgVAAgYAUgAP5BzIAAiiIijAAIAAgcICjAAIAAijIAbAAIAACjICkAAIAAAcIikAAIAACigArpBzIAAiiIikAAIAAgcICkAAIAAijIAaAAIAACjICkAAIAAAcIikAAIAACig");
	this.shape_14.setTransform(362.4,375.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("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");
	this.shape_15.setTransform(365.1,377.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(6,1,1).p("At9i/IAAGnIb7nP");
	this.shape_16.setTransform(315.7,430.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#FF0000","#FFFF00"],[0,0.875],-112.5,0,112.6,0).s().p("AkCNxIAAs3Qj0AbiaAAQjegBh9g9Qh5g8AAhMQAAg3BFgwQA8giBGgBQAHABAXAFQAYACAPAAQBOAAIIiRIAAi/QAAjohZhrQgzg7AAgfQAAiNCgAAQC4gBCmCRQByBjADGZQB1gPBmAAQEcAADqB6QCgBZAABsQAACSkrAGQkrAJkrAeIAANVQAAErkCAAQjlAAAAkNg");
	this.shape_17.setTransform(341.2,195.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#FF0000","#FFFF00"],[0,0.875],-116,0,116.1,0).s().p("Aq2OXQjiiHhYhUQgygNgigTQhEgwAAgZQABg7BFgoQBTgrA5AAIA7AAQAzAACSgnQEShQDtgyQhBhShfhGQhGgoAAgZQAAg0BuAAQB9AABwAtQBogyCThPQCehXAAgcQAAgdhPAAQidAAoKC4QiBA2hOAAQi9AAAAiBQAAgTALgZIgDAHQg6BjhPAAQhLABgtg/QgvhIAAglQAAgoAZhZQAqhxAAicQAAhGgUhBQgUgoAAgjQABhjBtgBQBFAABOB7QAZgBAsAKQAzALA0gBQBUABDPgwQhShXAAg5QAAi+DHABQBcAAB1BZQBZBLAbA8QD0g1C7AAQDqAADHCbQCbCGgBCnQAABZiQAuQh+Asi5AIIAFAFQBwBVAAByQAABwkLBgQjEBGixAeQAhAZAgAbQDHgZCnAAQEXAACpBfQCgBagBBUQABB6iCAAQhrAAh8gPQiPgHjMAAIhLAAQAPBIABBNQAADviPB4QhoBaihAAQjxgBm3jxgAnCKSQjMAohrAMQFECDDWAAQBoAAAogTQAtghAAhNQAAg+gIg3QjGAXjSAogAsVirQBkiJA4gIIA2AMQCPgcDKhGQG9h4DqBRQDdhPAHhRQANhwniBIQrQC3jVgtQAADLg8CBg");
	this.shape_18.setTransform(595.5,195.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#FF0000","#FFFF00"],[0,0.875],-114.5,0,114.6,0).s().p("AJBPzQj0jUjYicQh3B3iVBwQlOENi/AAQiWAAhrhrQhwhzAAhqQAAg/AyAAQARAAAXASQAgAMAwAAQCBAAEIikQCRhfB5huQjRiBizhLQgKAPgMAPQiPC4iIAAQjPAAAAjsQAAhGAvgvQCdh3B1iNQA3g/AAhGQAAgTgDgSQi9gIhrg0Qhtg7gBhJQAAgvA/goQA0geBBAAQAKAAATAFQAXAFASAAQBKAAHUiMQhLhWABhBQAAjIDRAAQB3AACdB4QA0AwAlAqQDngwC0AAQD3AADJBpQCMBNAABfQAAB8kDAGQiJAJiHAPQBoAoBiBDQEgDMAADAQABDxjlAAQg0AAhiiHQhLhZhFhMQgZCjidD0QBVAqBSA0QHoEcAAEhQAAC9izAAQiJAAijiLgAhbnCQiYAhiBAWQAOAtAAAvQAAB6hwDCQD3AWEKBhQCcjIAAhgQAAgYgOgWQgPgSgBgNQABhbCLgBQAgAAAbAGQh6hvhog5Qh1AVh0AYg");
	this.shape_19.setTransform(851.2,194.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#FF0000","#FFFF00"],[0,0.875],-41.4,0,41.5,0).s().p("AkKFKQhihQAAicIAAi7QAAg7gegoQgTgcgBgZQAAhPBGAAQBYAABjBIQAsAhASAxIA8gtQBPgxgBhGQADhDA6AAQAqAABeBBQBnBPgBBBQAAAthQAtQAfAnAqBFQBPCJAABXQAABLhKArQhXA2jhAAQjUAAhShIgACqg/QiXA8hoAgIAABBQAAA7BxAAQBOAAAxggQAwgoAAg0QAAg9gKgmQgKAFgNACg");
	this.shape_20.setTransform(1176.6,189.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#FF0000","#FFFF00"],[0,0.875],-112.1,0,112.2,0).s().p("AmPPfQh1hDg+gyQjgCxhGAAQj5AAAAkNQAAhPBNgVIAhgEQBZgVEQjHQBchAAogwQgmgRgKgjQiSBGigAAQjbgBAAioQAAiAC7hbQA+gZAAgZQAAgRhLgeQiGg3AAgvQAAhGBQAAQC6AACvBBQgNgjAAgUQAAhDBkAAQBwAABIA0QBLA+AABfIAAFKQA8AbAdA6IAAqdQkZAjkAAAQldAAAAjyQAAiGCxh4QDEh5FOgmQA8AAAAgjQAAgKgIgUQgMgMAAgPQAAgeAZgUQAggXBIAAQEUAACkBaQBhA6AABIQAABeiVAGIgFAAQAHAWAFAWQCqgjBcABQEUAADKBjQCLBAAABfQAAB6izAAQlfAAk1AaQADA4AABEIAAJoQDMAjFJCuQFQC0AADOQAADojAAAQhwAAhrh9QkBkFjJipIAAEMQAAFZjRgBQiNAAkui9gAliKoQhSBLhGA5QDoA7AeAAQBFABAAhQIAAkwQgxBLiCB1gAtyBNQAAAlAyAAQBpAAChgdIADhgQk/ArAAAtgAqwsIQikBIAAA/QAAAnA+AAQDDAAGChoIAUgFQgIhJgPhAQlJASiTA2g");
	this.shape_21.setTransform(1105.8,194.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("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");
	this.shape_22.setTransform(737.3,210.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("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");
	this.shape_23.setTransform(97.5,35.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#9933FF","#99CCFF"],[0,1],-80.1,0,80.1,0).s().p("AEzIoQhlgYiDguQg9gWhEgbQh/gvhMgiIAABMQABCRh9AAQhNgBiji/QizjdAAghQAAgGACgBIgCgNQAAgVA+gPQBugVBughIAAiKIgcAEQhuABhDggQg4gVAAgcQAAgbAjgWQAzgkAmABIAiAEQANAAA+gnIAagNQgCgXgGgVQgGgRgIgQQgUgkglgcQgrgkAAgaQABgsBogBIAfABQBKAGBEAgIATAJQBZAsgBBJIAAArQAyAJAtAWQBGAnAAArQABBAh2ABIgwALIAAByIBFgcQAngRAQAAQAkAAAAApQAABWigBZIAACyIFMA+QC6AhAfgBIAPgBQAjgGAAgqIAAoGQAAhUhDhAIj7AbQhfAAg8gcQgzgXAAgZQAAgZAhgSQAtgfAhAAIAjAEQAbABCAguQDMhKDZgBQBTAABFAaQASAGARAJQBKAoAAAuQAABAhtAFIgOAAIhsALQBCBHAADBIAAIPQAACciRAAQhKAAhugZgAopFCQAjABAAgkIAAhOQgyAJgugBQgvAAgpgOQB7B4AagBg");
	this.shape_24.setTransform(107.3,264);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#9933FF","#99CCFF"],[0,1],-25.1,0,25.1,0).s().p("AiuHgIgHtRQAAhTgtgmQgYgXAAgLQAAgyBMAAQBcAABTAzQA6AmAACcIAAArQAuAKBRBOQBBBEAAA+QAABOhMAAQhFAAgegyQgHgNgJgLIAHISQAABtiDAAQhuAAAAhfg");
	this.shape_25.setTransform(67.4,131);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#9933FF","#99CCFF"],[0,1],-9.9,0,10,0).s().p("Ag6DyQgpgpAAgzQAAgfAQg+QAThXAAhsQAAgfgOg8QAAgtBFAAQAqAAAiBQQAhBJAAEFQAABMgYAhQgaAaghAAQgsAAgfghg");
	this.shape_26.setTransform(37.2,121.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#9933FF","#99CCFF"],[0,1],-55,0,55,0).s().p("ADrH2QjLjYhihOQgaA8gbA4QiDD+iiAAQiJABAAiDQAAgvAlgPIAkgLQAvgRBVidQg/gJgugQQhSgeAAgnQAAgZAugWQAmgQAvAAIAWACIAhABQAQAABAgNQAfhYAQhoIgZACQhoAAg7ggQgxghAAguQAAggAcgWQAegPAhABQAfAKAdAAQAkgBA8gUQgHhAg6hBQgfggAAgPQAAg7BZgBQBWAABkBGQAyAlAUAyQA/gPAlgBQCZAAB7BAQBiAzAABQQAABChpCrQAbAHAcAJQAwATAWAXQATASAAAWQAAAVgTAOQgmAchyABQhZADhaAIIAhASQEHCcAjBRQAGANgBAKQABAagGAUQgZBeiHABQg7AAhNhRgAArjyQgIBtgZBqQBAgLA2gCQARghAhg2QAxhSAAghQABghgxgBQgcABhsAhg");
	this.shape_27.setTransform(133.1,130.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AEvTHQhkgYiDguQg+gWhDgaQiAgwhLghIAABLQAACRh8AAQhNAAikjAQiyjdAAggQAAgHABgBIgBgMQAAgWA+gPQBugVBuggIAAiMIgcAFQhuAAhDggQg4gVAAgbQAAgcAjgWQAygjAmAAIAiAFQAOAAA+gnIAagOQgCgXgHgVQgFgRgIgPQgUglglgcQgrgkAAgZQAAgtBpAAIAfABQBKAFBEAgIATAJQBYAsAABKIAAAqQAyAJAsAWQBHAnAAArQAABBh1AAIgwALIAAByIBFgcQAngRAQAAQAkAAAAApQAABXigBZIAACyIFMA+QC6AhAfAAIAOgBQAkgHAAgqIAAoHQAAhUhDhAIj7AbQhgAAg7gcQgzgWAAgZQAAgZAhgTQAtgfAgAAIAjAFQAcAAB/gtQDNhLDZAAQBTAABEAZQATAGARAJQBKApAAAtQAABBhuAEIgOAAIhrALQBCBHAADCIAAIPQAACdiRAAQhKAAhvgagAosPiQAjAAAAgjIAAhPQgyAJguAAQgvAAgpgPQB7B4AaAAgAHqijQjLjYhkhOQgZA7gcA5QiCD+ihAAQiKAAAAiDQAAguAlgPIAkgMQAwgRBUicQg+gJgugQQhTgeAAgnQAAgZAugWQAmgRAvAAIAWADIAhABQAQAABAgNQAfhaAPhnIgYABQhoAAg6gfQgyghAAguQAAggAcgWQAegPAhAAQAfAKAdAAQAkAAA8gVQgIhAg5hAQgfggAAgPQAAg8BYAAQBWAABkBGQA0AkATAyQA/gPAmAAQCZAAB6BAQBiAyAABQQAABChpCsQAcAHAbAKQAwATAWAWQATATAAAVQAAAVgTAPQgmAchyABQhYADhbAIIAhASQEHCcAjBRQAGAMAAALQAAAagGAUQgZBeiGAAQg8AAhMhQgAEpuMQgIBtgYBqQA/gLA2gDQARggAhg2QAyhSAAghQAAgigxAAQgbAAhtAigApAiyIgHtSQAAhTgtgmQgYgXAAgLQAAgyBMAAQBcAABUAzQA6AmAACcIAAArQAuALBRBNQBBBEAAA+QAABPhMAAQhFAAgegzQgHgNgJgLIAHITQAABtiEAAQhuAAAAhfgAr6n/QgpgpAAgzQAAgfAPg9QAThZAAhsQAAgfgNg8QAAgtBEAAQArAAAiBQQAhBJAAEGQAABMgYAhQgaAaggAAQgtAAgfghg");
	this.shape_28.setTransform(114.6,206.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("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");
	this.shape_29.setTransform(97,375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(5,1,1).p("EglKAAAMBKVAAA");
	this.shape_30.setTransform(1006.7,483.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AFyCJQgfAxg0AkIgfgcQA2giAohAQgihNgCgiIgGALIghgKIAABDQAAAFgGABIhgAAIgMAWICIAAIAAAiIg3AAQgbAogXASIA+AVQgNASgLANIhPgZIgtAOQgcAKgzABIgLgnQAWAAA5gIIgogNIgFgZQASgOAMgLIhAAAIAAgiIBiAAIAOgWIhVAAQgFgBAAgFIAAhQQACgGADABIBdAAIAAgRIhWAAQgGAAAAgGIAAg2IgcAAIAAgiIAcAAIAAg3QAAgFAGAAIBWAAIAAgVIAoAAIAAAVIBUAAQAFAAABAFIAAA3IAeAAIAAAiIgeAAIAAA2QgBAGgFAAIhUAAIAAARIBdAAQAGgBAAAGIAAAEQArhggChhIAoAAIgFA2IBvAAIAAAoIgaAAIAAAOQAABpgtBlQAfA4AqAzIgjAUQg1hFgGgTgABoCNQAAABgBAAQAAABAAAAQAAABAAAAQABABAAAAIAtANQAagPAWgcIhAAAQgMANgRANgAFegOQAJAlALAeQAahHAAhaIAAgOIgyAAQgKAvAOA9gACwAaIA7AAQABAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIAAgZQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAgBgBAAIg7AAgABMAAIAAAaIA8AAIAAgbIg8AAQAAAAgBABQAAAAAAAAQAAAAAAAAQABAAAAAAgACwhTIAwAAIACgBIAAgZIgyAAgABThUQAAAAABAAQAAAAAAABQAAAAABAAQAAAAABAAIAyAAIAAgaIg1AAgACwiPIAyAAIAAgaIgyAAgABTiPIA1AAIAAgaIg1AAgAnPDUQACgHAFgIQAfhFgHhWIAmgCIACA3IAAADQAOAbAVAWIAAiCIhlAAIAAgkIDSAAIAAAkIhEAAIAAAwIBCAAIAAAlIhCAAIAABBQAhALA0gBIDYAAIgMAnIi9AAQgpAAgegGQhFgJgugzQgLAsgMAdgAh1CCIAQgiQAjAPAuAeIgXAeQgsgegegLgAkBCJQAugMAhgdIAZAcQgwAkgnALgAjhBaQgDAAAAgFIAAjdQAAAAAAgBQABgBAAAAQABgBAAAAQABAAAAAAIA6AAQAGgOABgMIACgGIhUAAIAAghIDSAAIAAAhIhYAAIgJAgIBTAAQAEABAAACIAADdQAAAFgEAAgAi/A5IBuAAIACgCIAAgeIhwAAgAi/gIIBwAAIAAgiIhwAAgAi/hLIBwAAIAAgeIhwAAgAm5gsQgDAAAAgFIAAibQACgFABAAICqAAQAEACAAADIAACbQAAAFgEAAgAmWhNIBkAAIACgCIAAggIhmAAgAmWiRIBmAAIAAgdIhmAAg");
	this.shape_31.setTransform(1008.1,447.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("EglKAAAMBKVAAA");
	this.shape_32.setTransform(1010.7,487.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AFzCJQghAxgzAjIgfgcQA2ghAnhAQghhMgCgkIgFAMIgigKIAABDQgBAGgFgBIhfAAIgOAXICKAAIAAAiIg4AAQgbAngWATIA9AUQgNATgLANIhPgaIgtAQQgdAIgxACIgMgnQAWAAA5gHIgngOIgGgaQASgNALgLIg/AAIAAgiIBhAAIAQgXIhXAAQgDABAAgGIAAhQQABgFACgBIBeAAIAAgQIhWAAQgGAAAAgFIAAg3IgcAAIAAgiIAcAAIAAg2QAAgGAGAAIBWAAIAAgVIAnAAIAAAVIBUAAQAHAAgBAGIAAA2IAeAAIAAAiIgeAAIAAA3QABAFgHAAIhUAAIAAAQIBeAAQAFABABAFIAAAEQAqhggBhhIAnAAIgEA2IBwAAIAAAnIgbAAIAAAQQAABpgtBkQAfA4AqAzIgkAUQg0hFgFgTgABoCNQAAAAgBABQAAAAAAABQAAAAAAABQABAAAAABIAtANQAbgPAVgcIhBAAQgLANgRANgAFdgOQAKAlAMAeQAZhHAAhZIAAgQIgyAAQgJAwAMA9gACvAbIA9AAQAAAAAAgBQABAAAAAAQAAAAAAAAQABgBAAAAIAAgZQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIg9AAgABMAAIAAAbIA8AAIAAgbIg8AAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAgACvhTIAxAAIACgCIAAgYIgzAAgABUhVQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIAzAAIAAgaIg0AAgACviPIAzAAIAAgaIgzAAgABUiPIA0AAIAAgaIg0AAgAnPDUQACgHAGgIQAehFgHhXIAngBIACA2IAAAEQAMAaAXAWIAAiBIhlAAIAAgkIDSAAIAAAkIhGAAIAAAvIBEAAIAAAlIhEAAIAABCQAiAMA1gDIDXAAIgMAoIi9AAQgpAAgdgGQhHgJgsgzQgMArgNAfgAh1CCIAPgiQAlAPAsAeIgWAeQgrgegfgLgAkACJQAtgMAhgdIAYAdQguAjgoALgAjhBaQgDAAgBgFIAAjcQABgBAAgBQABgBAAAAQABgBAAAAQABAAAAAAIA7AAQAEgOADgNIACgFIhUAAIAAgiIDSAAIAAAiIhZAAIgJAgIBSAAQAGABAAADIAADcQAAAFgGAAgAjAA4IBvAAIADgBIAAgeIhyAAgAjAgIIByAAIAAgiIhyAAgAjAhMIByAAIAAgeIhyAAgAm5gsQgEAAABgFIAAicQABgEACAAICpAAQAGACAAACIAACcQAAAFgGAAgAmXhOIBlAAIADgBIAAggIhoAAgAmXiQIBoAAIAAgfIhoAAg");
	this.shape_33.setTransform(1012.1,451.2);

	this.btnQN5 = new lib.btnSelectQN();
	this.btnQN5.name = "btnQN5";
	this.btnQN5.parent = this;
	this.btnQN5.setTransform(1201.2,521.1,0.5,0.5);

	this.btnQN4 = new lib.btnSelectQN();
	this.btnQN4.name = "btnQN4";
	this.btnQN4.parent = this;
	this.btnQN4.setTransform(1103.9,521.1,0.5,0.5);

	this.btnQN3 = new lib.btnSelectQN();
	this.btnQN3.name = "btnQN3";
	this.btnQN3.parent = this;
	this.btnQN3.setTransform(1006.7,521.1,0.5,0.5);

	this.btnQN2 = new lib.btnSelectQN();
	this.btnQN2.name = "btnQN2";
	this.btnQN2.parent = this;
	this.btnQN2.setTransform(909.4,521.1,0.5,0.5);

	this.btnQN1 = new lib.btnSelectQN();
	this.btnQN1.name = "btnQN1";
	this.btnQN1.parent = this;
	this.btnQN1.setTransform(812.2,521.1,0.5,0.5);

	this.btnStartGame = new lib.btnStartGame();
	this.btnStartGame.name = "btnStartGame";
	this.btnStartGame.parent = this;
	this.btnStartGame.setTransform(1006.2,623.2);
	new cjs.ButtonHelper(this.btnStartGame, 0, 1, 2, false, new lib.btnStartGame(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnStartGame},{t:this.btnQN1},{t:this.btnQN2},{t:this.btnQN3},{t:this.btnQN4},{t:this.btnQN5},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.rbAC01},{t:this.shape_10},{t:this.shape_9},{t:this.rbBD01},{t:this.rbBD02},{t:this.rbBD03},{t:this.rbBD04},{t:this.rbAC02},{t:this.rbAC03},{t:this.rbAC04},{t:this.rbAC05},{t:this.rbAC06},{t:this.rbAC07},{t:this.rbAC08},{t:this.rbAC09},{t:this.rbAC10},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#006600","#66FF99"],[0,1],0,360,0,-360).s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape_34.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(1));

}).prototype = getMCSymbolPrototype(lib.theWelcome, new cjs.Rectangle(0,0,1280,720), null);


(lib.theGame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// OOXX
	this.ooxx = new lib.ooxx();
	this.ooxx.name = "ooxx";
	this.ooxx.parent = this;
	this.ooxx.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.ooxx).wait(1));

	// anserBtns2
	this.btnOK = new lib.btnOK();
	this.btnOK.name = "btnOK";
	this.btnOK.parent = this;
	this.btnOK.setTransform(1224.6,295.5,1,1,0,0,0,0,-6.1);

	this.allAnserBtns2PN = new lib.allAnserBtns2PN();
	this.allAnserBtns2PN.name = "allAnserBtns2PN";
	this.allAnserBtns2PN.parent = this;
	this.allAnserBtns2PN.setTransform(453.2,377.6,1.4,1.4);

	this.allAnserBtns2Num = new lib.allAnserBtns2Num();
	this.allAnserBtns2Num.name = "allAnserBtns2Num";
	this.allAnserBtns2Num.parent = this;
	this.allAnserBtns2Num.setTransform(300.9,376,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.allAnserBtns2Num},{t:this.allAnserBtns2PN},{t:this.btnOK}]}).wait(1));

	// info
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(1181.1,692.7);

	this.theInfoPanel = new lib.theInfoPanel();
	this.theInfoPanel.name = "theInfoPanel";
	this.theInfoPanel.parent = this;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#9966CC","#FF6600"],[0,1],-4.8,0,4.9,0).s().p("AgvAOIANgwQAwAJAjAMIgPAwIhRgVg");
	this.shape_1.setTransform(33.6,36.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#9966CC","#FF6600"],[0,1],-6.9,0,6.9,0).s().p("AgUCSQAAg2AEg1QgYgBgPgSQgNgOAAgaQAAgzAOgmIAtAKQgMAngCAiQAAAFADACQACADAFAAQAFhEAJhCIAxAGQgHA7gFA+QALgDAKgFIAKA3IgjAKQgDA6gBA7g");
	this.shape_2.setTransform(13.6,24.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#9966CC","#FF6600"],[0,1],-10.6,0,10.7,0).s().p("AhUCPIAHgqIgXADIgGg2IAngFIAUhlIgcALIgTg3QAMgFAggIIAQgDIAJgmIA0ALIgFAWIABAAQAeAAASARQASARAAAYIAAAHQAAAXgGAkIgHAgIAaAAIAFA2QhAAAg/AGIgLA8gAgKAnIAZgCQAIgYADgVQAFgcAAgRQAAgGgFgDQgGgDgJAAIgBAAIgUBog");
	this.shape_3.setTransform(28.1,23.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#9966CC","#FF6600"],[0,1],-16.1,0,16.2,0).s().p("AgECJIgIg8QAaAEASAAQAMAAAGgKQAIgIAAgUQAAgngHgZQgIgfgMgYIg3gFIAFAxIgkABIADAbIAZgIIARA0QgRAIgSAGIAGA7Ig/AHIgFgxIgiAHIgOg3IApgJIgFgnIgkAGIgGg3QASgEASgDIgFgpIBAgHIAFApIAjgBIAJgzQBcAEBXAKIgGA9Ig4gFIAGAUQAMAhAAA+QAAAxgSAVQgWAagkAAQgdAAgRgEg");
	this.shape_4.setTransform(59.2,25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#9966CC","#FF6600"],[0,1],-15.9,0,16,0).s().p("AgxCZQABhIAEhDQg2ADg2AGIgHg+QA7gHA9gEQAGg3AIg2IBBAIQgHAwgEAxQA8gCBAAAIAHA+QhFAAhEAEQgFBJgCBNg");
	this.shape_5.setTransform(95,24.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#9966CC","#FF6600"],[0,1],-16.4,0,16.5,0).s().p("AgQCGQAfgNAIgVQhQAFhRALIgGgzQBMgLBRgFQgOgOgbgFIAcgiQALABAJADQALgFAJgGQAAgBABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgCgIAAQg0AChEAcIgDgOIguAOQgUg1gKg4IAzgQIADASQAmgNAqgHQgHgNgGgQIA4gWQAIAWANAUIA0gDQAjAAAUAJQAVAMABAZQAAAUgLAjIgvgGIABAKQAAARgMAKQgNALgRAKQAHAHAEALQAqgCAqAAIAGAzQgrAAgrACQgFArgvAZgAhkgwIAGARQBPgeA5AAQAdAAAQAJQAJAEAEAIQAGgQABgLQAAgOggAAQhgAHhPAag");
	this.shape_6.setTransform(130.8,24.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#9966CC","#FF6600"],[0,1],-12.1,0,12.2,0).s().p("AhvAyIAhgoIgrgJIASg3IBFARQAbgcAagXIAyAgQgTASgSATQAuANAsAPIgRA4Qg6gVg4gQQgZAegWAfg");
	this.shape_7.setTransform(169.7,31.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#9966CC","#FF6600"],[0,1],-15.5,0,15.6,0).s().p("AibBIQAZgmAYgdIglAGIgFg3QA5gJA4gGQgGgLgEgMIA3gWQAIAUANAUQA5gFA2gBIAGA5Ig0ABQAjAWAZAgIgnAnQgggfgtghIAagcQhGAEhGAIIAbARQghApgaAug");
	this.shape_8.setTransform(167,18.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#9966CC","#FF6600"],[0,1],-5.6,0,5.7,0).s().p("Ag3AWQAegKAagIIAAgCQgagCgbAAIAEgwQAWAAAWACIgBgHIAzgGQADAKADAmQAFAvgBAOIg0AGIgBgJIgoANg");
	this.shape_9.setTransform(193.9,26.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#9966CC","#FF6600"],[0,1],-6,0,6.1,0).s().p("AgDA9QgbAAgPgOQgPgQAAgdQABgaAMgkIAwALIgDANIAogMIARAmIg+ASQADAEAHAAQAKAAAngIIAJAyQgoAHgOAAg");
	this.shape_10.setTransform(212.9,27);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#9966CC","#FF6600"],[0,1],-15.6,0,15.7,0).s().p("AiMBuIB1gpIgGhwIh+gHIAIgzIBzAFIgBgMIhfAFIgEgwQB6gJCJAAIAFAwQg3AAg2ACIABARQA/AEA+AFIgFA0Ih1gHIAICmIAIgpQA7AGA3ALIgEAzIh1gSIABAPIg3AGIgBgfIhjAjg");
	this.shape_11.setTransform(203.1,24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.theInfoPanel},{t:this.shape}]}).wait(1));

	// formulaB
	this.formulaDownB = new lib.formulaDownB();
	this.formulaDownB.name = "formulaDownB";
	this.formulaDownB.parent = this;
	this.formulaDownB.setTransform(157.9,294.6,1.6,1.6,0,0,0,0.4,0.4);

	this.formulaUpB = new lib.formulaUpB();
	this.formulaUpB.name = "formulaUpB";
	this.formulaUpB.parent = this;
	this.formulaUpB.setTransform(328.6,124,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.formulaUpB},{t:this.formulaDownB}]}).wait(1));

	// formulaA
	this.formulaUpA = new lib.formulaUpA();
	this.formulaUpA.name = "formulaUpA";
	this.formulaUpA.parent = this;
	this.formulaUpA.setTransform(277.5,124.3,1.8,1.8,0,0,0,0.1,0.2);

	this.formulaDownA = new lib.formulaDownA();
	this.formulaDownA.name = "formulaDownA";
	this.formulaDownA.parent = this;
	this.formulaDownA.setTransform(105.6,294,1.4,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.formulaDownA},{t:this.formulaUpA}]}).wait(1));

	// anserBtns
	this.allAnserBtns = new lib.allAnserBtns();
	this.allAnserBtns.name = "allAnserBtns";
	this.allAnserBtns.parent = this;
	this.allAnserBtns.setTransform(40.2,440.2,1.25,1.25,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.allAnserBtns).wait(1));

	// bg
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#006600","#003399","#000066","#006600"],[0,0.357,0.702,1],0,351.6,0,-351.7).s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape_12.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

}).prototype = getMCSymbolPrototype(lib.theGame, new cjs.Rectangle(0,0,1280,720), null);


(lib.theGameOver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.btnPlayagain = new lib.btnPlayAgain();
	this.btnPlayagain.name = "btnPlayagain";
	this.btnPlayagain.parent = this;
	this.btnPlayagain.setTransform(963,442.1);

	this.textCorrectRatio = new cjs.Text("98.25%", "60px 'Arial'", "#FFFFFF");
	this.textCorrectRatio.name = "textCorrectRatio";
	this.textCorrectRatio.lineHeight = 69;
	this.textCorrectRatio.lineWidth = 269;
	this.textCorrectRatio.parent = this;
	this.textCorrectRatio.setTransform(479.4,462.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGCEQIAAhkIjxAAIAAguIDxAAIAAgtIhwALQgCgUgHgWIAzgIQAfgbAlgoQgzg3g2gdQAOgUAJgWQAJADAbAUQAXgbAQgdIjdAAIAAguIDpAAIAAgpIAyAAIAAApIDfAAIAAAuIjnAAQgWAkglAyIAnAkQAng0AUgyIAqATQgeBIhmBsIBjgNQgPgegHgKIAmgSQAsA+AXA+IgpAQIgRglIhEAHIAAA0IDtAAIAAAuIjtAAIAABkgAjPDuIAAj+QgHAFgCAHIgegaIAADxQgDAQgNAAIhLAAIAAAZIguAAIAAjrIgNAbIgygNQA9hxAHh0Ig3AAIAAgwIC4AAIAAAwIhSAAQgGA7gQBLIBbAAQAQAAAAAOIAAAGQAAAAAAAAQAAAAAAgBQABAAAAAAQABAAAAAAQBEg3AshSIg3AAQgEgDAAAHIAAA6IguAAIAAhiQAAgKAJABIByAAQAHgTAHgVIAtAQQgHAOgCAKIB1AAIAqAUQAAApgVA5IgrgOQALgtAAgHQAAgHgHAAIh1AAQgVArgrA5IBUAAQAVgpAJgeIAqAVQgFAOgMAdQgCAFgCACIBjAAIgFAwIhqAAIAAAyIBoAAIAAAtIhoAAIAAA2IBoAAIAAAuIhoAAIAAAwIBxAAIAAAwIkXAAIgCAAQgQAAAAgTgAigDKQAAAHAIAAIBRAAIAAgwIhZAAgAlRgLIAADAIAkAAQAJAAAAgJIAAi3QAAgHgJAAIgeAAQgGAAAAAHgAigBzIBZAAIAAg2IhZAAgAiggcIAAAsIBZAAIAAgyIhRAAQgIAAAAAGgAv/D8IAAgyIBLAAIAAk5IA1AAIAAE5IB9AAIAAmLIjmAAIAAgyIHqAAIAAAyIjQAAIAACfIDHAAIAAAyIjHAAIAAC6IDkAAIAAAygACRA/QBkg8AwgvIAiAjQg1AvhiA9gAPABhIAAhAIBAAAIAABAgAIRgHIAaglQA3AkA9A3IgeAiQhEg7gsgdgACsiHIAigdQAiAgAqA2IglAfQgsg8gdgcgAPAgyIAAhAIBAAAIAABAgAIJhdQA9gyAcglIAfAgQgiArg3Arg");
	this.shape.setTransform(347.3,496.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(317.9,317.7);

	this.textQCount = new cjs.Text("50/50", "60px 'Arial'", "#FFFFFF");
	this.textQCount.name = "textQCount";
	this.textQCount.lineHeight = 69;
	this.textQCount.lineWidth = 267;
	this.textQCount.parent = this;
	this.textQCount.setTransform(479.4,284.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ADED7IABgsIisAAIALAjQhFAWhpAHIgDgtQBRgJA2gKIg8AAQgGAAAAgHIAAjMQgZALgeAJIgWgqQBCgVArgXIg2AAIgDAOIgsgHIAOhrQADgJAIAAICGAAIAAgZIiPAAIAAgpICPAAIAAgXIAuAAIAAAXIBoAAIAAgbIAuAAIAAAbICAAAQAEgCAHAGQACADACAHIAABoIgtAAIAAgLIhiAAIAAAcICdAAQAMABAAAKQgDA5gCAUQgEASgJADQgRAKgigCIAADBQAAAHgHAAIhSAAICZATIgHAvgAgYCkQAAAAAAABQAAAAABABQAAAAAAAAQABAAABAAIEdAAIACgCIAAggIkiAAgAgYBdIEiAAIAAgdIkiAAgAgYAZIEiAAIAAgZIkiAAgADWgoIBdAAQAHAAAAAHIAFAAIANAAQAFgDAAgCQADgHgBgUQAAgFgHAAIh2AAgAgIgoICwAAIAAgeIiPAAQgZAVgIAJgAAwhuIB4AAIAAgcIhtAAIgLAcgAhViFIgGAXIBbAAIAGgOQAFgIADgGIhdAAIgDAAQgDAAAAAFgADWizIBiAAIAAgVQAAgEgHAAIhbAAgABAizIBoAAIAAgZIhoAAgAL0D/IAAg0QAgALAOADIAdAEQALAAAKgJQAEgHAAgJIAAiSIjmAAIAAgyIDmAAIAAg4IjmAAIAAgwICSAAIAAhCIiBAAIAAgwICBAAIAAg2IAyAAIAAA2ICBAAIAAAwIiBAAIAABCICQAAIAAAwIg8AAIAAA4IA3AAIAAAyIg3AAIAACfQABAigcARQgPAKgbAAQggAAgxgPgAwyEIIAAiyIjwAAIAAgyIDwAAIAAjwIjbAAIAAgzIHpAAIAAAzIjaAAIAADwIDsAAIAAAyIjsAAIAACygAnXDzIAAg9QBuAkAkgPQAbgMAVgiQAUgmADhTQAGi+gGgOQAAgCgIAAIjTAAQgZBLgeAwIgwgSQA+hiAIhpIAzAEIgGAsIDxAAQAIAAADACQAFAAACAHQAHAQgJDuQgIBmgWAxQgUArgqAQQgXALgiAAQgwAAhGgVgAG8DzIAAndQAAgQAQAAIB/AAQATAAAAAQIAAGiQgDATgQAAIhdAAIAAAogAHuCZIAzAAQALgDgBgJIAAiLIg9AAgAHujBIAACSIA9AAIAAiSQABgHgKAAIgtAAQgHAAAAAHgArkC/IBFgkIAAjnIg8AAIAAgzIA8AAIAAiJIAyAAIAACJIAyAAIAAAzIgyAAIAADHQAbgSAVgUIAfAkQg5A2htA5gAKTBbIAqgZQAgArAcA9IguAYQgehDgagkgAoLBVQCPgjBOglIAVAuQhcAuiLAdgATiBdIAAhAIBAAAIAABAgAu1gPQBAheAWg9IAuAVQgbBGg+BYgA0GiPIArgbQAtA9AqBcIguAYQgrhkgpgygAnkgqIAAgzICtAAIAAAzgATig2IAAhAIBAAAIAABAg");
	this.shape_2.setTransform(317.6,406.9);

	this.textAverageTime = new cjs.Text("15.53s", "60px 'Arial'", "#FFFFFF");
	this.textAverageTime.name = "textAverageTime";
	this.textAverageTime.lineHeight = 69;
	this.textAverageTime.lineWidth = 272;
	this.textAverageTime.parent = this;
	this.textAverageTime.setTransform(479.4,373.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00FFFF").ss(2,1,1).p("AZpCiQB7ACBMipQACgEgBgFQgBgEgDgEIh7h9QgEgEgFgBQgGAAgEADQgFADgBAGQgTBLggADQgegBgtgkQg4gshCAAQiKgChRDTQgCAFACAFQABAFAFADICGBSQAEADAEgBQAFAAAEgDQADgDACgFQAIgfARgWIAAAAQAOgTANgBQAYABAzAjIAAAAQA9ArBFgBgAIZn2QADA8AZBoQjTgQjagKQgGAAgEAEQgEADgBAGIgeCkQgBAEACAEQABAEAEADQADACAFAAQAPABAOABQhBEmgFFBQAAAGAEAEQADAFAGAAIC7ATQAEABAEgCQAEgCACgDQACgEAAgEQAGiwAWinQAMgCAOgCQAeABATALQARATAAAzQAABPg2B2QgCAFABAEQAAAFAEADQADADAFABICzAbQAFABAEgCQAEgDADgEQALgXAKgXIB7BwQADADAEABQAEABAEgBQADgCADgDQA7hEA7hCQA8BlA+BQQADAEAFABQAFABAFgCICvhaQAEgCACgEQACgDAAgFQAAgEgCgEQhfiKhCh2QAxg4Axg1QAEgEAAgHQAAgGgEgEIh/h5QgEgEgGAAQgGAAgFAEQgZAZgYAbQgUgygSgxQBeAIBgAIQAGABAFgEQAFgEAAgGIANiqQABgGgEgFQgEgFgGAAQgWgCgXgCIBKhKQAEgEAAgGQABgGgEgEQhChRhjg2QgEgCgFABQgGAAgDAEIhsByQgDADgBAEQgBAEACAEQABAFAEACQA2AnAtAoQg5gFg6gFQgihzgOhcQgBgFgFgEQgFgEgGABIitAUQgGABgEAEQgEAFAAAGgALcCoQhFBQhHBVQARhAABhCIAAgvQgDhpg9g1Qg0gwhuAAQgZAAgZACQAKg0ALgzQCCALCIALQAyCZA9CQgAwhAGICYhHIgBAJQgBAFABADQACAEAEADQADADAEAAQDpASEAAUQlfAKlAAmQgGABgEAFQgEAEABAGIATC3QAAAHAFAEQAFAEAHgBQAzgGA0gGQgaBpgPBuQgBAGADAFQADAFAGABIDFAqQAEABAEgBQAEgCACgDQADgDABgEQAWiYAoiCQA9gEA/gEQgIArgBAlIAAABQAABtA8A6QAAABAAAAQA6A1BoAAIAqAAQA/gCCqgoQAGgBADgFQAEgFgBgGIgii4QgBgEgDgEQgDgDgEgBQgEgBgEABQiiApgtAAQgPAAgGgHQAAAAAAgBQgGgJgBgVQAIgeAJgcQBtgEBsAAQAEAAAEgCQADgCACgEQACgEAAgEIgSi3QAAgGgFgEQgEgDgGAAQhJAAhIACQABgCAAgCIAGhMQACABACAAIC4AWQAFAAAFgDQAEgCACgGQApiBAChMQAAgBAAAAQgEhfhOgvQgBgBAAAAQhHgjh9AAIAAAAQhcADhYAHQghgxgUg2QgBgEgDgCQgDgDgEAAQgFgBgDACIjBBPQgGADgCAFQgCAGACAFQAJAZALAXQhwAWhoAfQgDgMgDgOQgBgEgDgDQgEgDgEgBQgEgBgEACIitBHQgFACgCAFQgDAFABAFQAjCqBBCFQACAFAGACQAGACAGgDgA2MCiQB7ACBMipQACgEgBgFQgBgEgDgEIh7h9QgEgEgFgBQgGAAgEADQgFADgBAGQgTBLggADQgegBgtgkQg4gshCAAQiKgChRDTQgCAFACAFQABAFAFADICGBSQAEADAEgBQAFAAAEgDQADgDACgFQAIgfARgWIAAAAQAOgTANgBQAYABAzAjIAAAAQA9ArBFgBgAuOihQALgDAMgDIgIAtQgIgTgHgUgAlqkEQABAAAAAAQBkABADAaQgGAqgUA5IAEguQAAgGgEgFQgEgFgGAAQirgQi1gNQCIgYCUgLg");
	this.shape_3.setTransform(640,200);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("ANSFRQgCgEgFgDQgEgCgFABQgFACgDADIh6CLIhshjQBThkBRhdQADgEABgEQAAgEgBgEQhAiYg1ihQgBgFgEgDQgDgCgFgBIkhgXQgGAAgFADQgEAEgBAFIgbCHQgBAFACAEQACAEAEADQAEACAEAAQAigDAiAAQBgAAAuAnQAzAvADBbIAAAtQgCBwgxBmIiUgXQAxhxAAhOQAAhFgcgYIgCgBQgZgSgrAAIgBAAQgVACgSAEQgFABgDAEQgEADAAAFQgXCmgHCvIicgQQAGlBBDkkQABgEgBgEQgCgFgEgCQgDgDgFAAIgegCIAZiGQDdAKDWAQQAFABAEgDQAEgDACgEQACgFgBgEQgahngFg+ICRgRQAQBcAiByQABAEADADQAEADAFABICpAPQAFAAAEgCQAFgDACgEQACgEgBgFQgBgFgEgDQg1gzhEgyIBYhdQBRAuA5BBIhXBWQgEAFgBAGQAAAGAEAEQAEAFAGAAIA+AGIgLCMIjGgRQgFgBgFADQgEADgCAFQgBAFABAFQAZBIAfBIQACAEAFADQAEACAGAAQAFgBADgEQAagdAcgcIBpBkQgwA0gwA3QgDADAAAFQgBAFACAEQBBB2BdCIIiVBMQg+hRg8hogAluHtQhaAAgzgtIABAAQgzgzAAhfIAAAAQACgrAKgzQABgFgCgEQgCgFgEgCQgEgCgFAAIiZAJQgFABgEACQgDADgCAFQgoCBgYCXIingkQARhwAbhqQABgFgCgFQgCgFgEgCQgEgDgFABIhuAMIgQiZQGjgxHagBIAPCZQhqAAhqAEQgEAAgEADQgEADgBAEQgMAigKAmIAAAEQAAAkANAOIgBAAQANAUAgAAQAuAACagmIAcCaQiaAkg7ACgAX4BfIAAAAQg+gqgeABQgbgCgYAiIAAAAQgPATgKAZIhqhBQBIiwBygCQA4AAAwAlQA4AtAlgBQAvACAahOIBiBkQhCCLhlABQg8AAg1glgA39BfIAAAAQg+gqgfABQgagCgYAiIAAAAQgPATgKAZIhqhBQBIiwBygCQA4AAAwAlQA4AtAmgBQAuACAahOIBiBkQhCCLhlABQg8AAg1glgAtqhDIAUh3QABgFgCgEQgDgFgFgCQgEgCgGABIg+ATQgEABgDADQgDADAAAEQgBAEABAEIAdBHIiNBEQg4h5ggiWICQg8IAFAYQABAFADADQADADAEABQAEABAFgBQB2gmCCgXQAEgBAEgDQADgEABgEQABgFgDgEQgMgZgKgZICkhEQAWA1AiAxQADAEADABQAEACAEAAQBbgIBggDQB0AABCAgQA+AmAEBOIAAABQgDBGgjByIiZgSQAbhJAGgyIABgCQADg5iJAAIgBAAQjUAPi6ArQgGACgDAEQgDAEAAAGQAAAGAFADQADAEAGABQDnAODYAVIgLCRQkigZkFgUg");
	this.shape_4.setTransform(640.1,200);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("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");
	this.shape_5.setTransform(640,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.textAverageTime},{t:this.shape_2},{t:this.textQCount},{t:this.shape_1},{t:this.shape},{t:this.textCorrectRatio},{t:this.btnPlayagain}]}).wait(1));

	// bg
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#009999").ss(5,1,1).p("EhOOgqLMCcdAAAQCjAABzB1QBzB1AACmMAAABH3QAAClhzB2QhzB1ijAAMicdAAAQijAAhzh1Qhzh2AAilMAAAhH3QAAimBzh1QBzh1CjAAg");
	this.shape_6.setTransform(640,360);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#000066","#0000CC"],[0,1],254.3,283.9,-254.3,-284).s().p("EhOOAqMQiiAAh0h2Qhzh0AAimMAAAhH3QAAilBzh2QB0h1CiAAMCcdAAAQCjAAByB1QB0B2AAClMAAABH3QAACmh0B0QhyB2ijAAg");
	this.shape_7.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.theGameOver, new cjs.Rectangle(97.5,87.5,1085,545), null);


// stage content:
(lib.myAnimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mPointer
	this.btnFullScreen = new lib.btnFullScreen();
	this.btnFullScreen.name = "btnFullScreen";
	this.btnFullScreen.parent = this;
	this.btnFullScreen.setTransform(1240,40,0.333,0.333);

	this.mPointer = new lib.mPointer();
	this.mPointer.name = "mPointer";
	this.mPointer.parent = this;
	this.mPointer.setTransform(-93.4,267.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mPointer},{t:this.btnFullScreen}]}).wait(1));

	// theWelcome
	this.theWelcome = new lib.theWelcome();
	this.theWelcome.name = "theWelcome";
	this.theWelcome.parent = this;
	this.theWelcome.setTransform(640,360,1,1,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get(this.theWelcome).wait(1));

	// theGameOver
	this.theGameover = new lib.theGameOver();
	this.theGameover.name = "theGameover";
	this.theGameover.parent = this;
	this.theGameover.setTransform(640,360,1,1,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get(this.theGameover).wait(1));

	// theGame
	this.theGame = new lib.theGame();
	this.theGame.name = "theGame";
	this.theGame.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.theGame).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(488.5,360,1431.6,720);
// library properties:
lib.properties = {
	id: '81610D6FAF4FB2409348D85E8F05CCB2',
	width: 1280,
	height: 720,
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
an.compositions['81610D6FAF4FB2409348D85E8F05CCB2'] = {
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