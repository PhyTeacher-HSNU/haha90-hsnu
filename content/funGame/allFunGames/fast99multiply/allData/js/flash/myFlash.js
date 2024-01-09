(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 30,
	color: "#000000",
	manifest: []
};



// symbols:



(lib.btnStartGame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-3,-2.4,1.2,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(3,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#CC0000","#FF66CC"],[0,1],0,67,0,-67).s("#9966FF").ss(5,1,1).rr(-240,-65,480,130,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#CC0000","#FFFFFF"],[0,1],0,67,0,-67).s("#9966FF").ss(5,1,1).rr(-240,-65,480,130,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#CC0000","#FF66CC"],[0,1],0,-67,0,67).s("#9966FF").ss(5,1,1).rr(-240,-65,480,130,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-242.5,-67.5,485,135);


(lib.btnChecker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AlgJ0QgWgJgNgUIkum7IiGBYIhXiGIDHiAQAcgSAgAGQAfAHATAZIElGtIRVwoIBuBzIyZRqQgRAQgXAFIgPABQgQAAgPgGg");
	this.shape.setTransform(0.1,-1.6);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,0,255,0.008)").s().p("AuDOEIAA8HIcHAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2));

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


(lib.numberMC_yellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AkjIMQiAihAAlrQAAjjAwiLQAviLBdhMQBchLCLAAQBnAABPAqQBOApAzBPQAzBOAdByQAdBwAAC+QAADjgvCLQguCLhdBNQhdBLiNAAQi5AAhqiFgAiumxQhSB2AAE7QAAE9BLBqQBKBoBrAAQBtAABKhpQBKhqAAk8QAAk8hKhpQhKhphtAAQhtAAhBBdg");
	this.shape.setTransform(-0.6,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("ABPKGIAAvuQg5A3hbA2QhdA3hKAbIAAiZQCFg+BjhZQBihZAphTIBmAAIAAULg");
	this.shape_1.setTransform(-6.7,-2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AmoKGQgCg5AUg1QAhhXBIhUQBHhUCHhvQDQiqBKhlQBKhlAAhZQAAhehDhBQhDhBhtAAQhwAAhEBFQhFBFgBB5IiigRQAQi2BthfQBthfC2AAQC5AABtBmQBsBnAACYQAABOggBKQggBLhJBRQhJBSirCQQiMB4gpArQgoAqgbArIJ2AAIAACYg");
	this.shape_2.setTransform(-2,-2.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AkkItQhxhmgPigICegVQAbCGBCA8QBBA7BeAAQBtAABOhOQBNhNAAhyQgBhthGhHQhIhHhuAAQgrAAhDASIASiJIAZACQBkAABQg1QBRg1AAhuQAAhXg6g5Qg7g5hcAAQhcAAg9A6Qg+A6gSB0IidgcQAcifBnhXQBnhYCZAAQBnAABZAuQBZAtAvBOQAvBOAABYQAABTgtBFQgtBEhXApQByAaA/BSQBABSAAB9QAACph7B2Qh8B1i6AAQiqAAhvhlg");
	this.shape_3.setTransform(-0.3,-1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("ABxKEIAAk1IotAAIAAiRIJKtBICBAAIAANBICuAAIAACRIiuAAIAAE1gAkhC+IGSAAIAApDg");
	this.shape_4.setTransform(-3.2,-2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AkqIjQhwhigQijICngNQASB5BEA9QBDA9BeAAQBxAABPhWQBPhXAAiOQAAiHhMhNQhMhOh5AAQhNABg9AiQg+AjgjA1IiUgTIB8qUIJ/AAIAACXIoAAAIhFFbQB0hRB9AAQCpgBB0B2QB0BzAAC3QAACvhmCAQh8CcjVAAQivAAhvhjg");
	this.shape_5.setTransform(0.1,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("AkrIAQh9iSAAlOQAAlzCKiqQB5iTDKAAQCYAABhBVQBhBVATCWIidANQgVhegngqQhAhDheAAQhKAAg5AqQhKA2grBpQgrBogCDCQA5hXBSgqQBTgrBZAAQCdAABwB1QBvByAAC5QAAB5g0BpQg1BnhbA4QhbA3h1AAQjDAAh9iRgAinARQhLBMAAB9QAABSAkBKQAhBLA/AnQA+AnBDAAQBkAABIhRQBIhRAAiKQAAiGhHhMQhHhMhsAAQhpAAhLBMg");
	this.shape_6.setTransform(-0.7,-1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("AjrJ7QACiXA5jYQA5jXBsjGQBojIB5iJIp1AAIAAiZINAAAIAAB8Qh8CDh4DZQh5DXhADmQgwChgNDAg");
	this.shape_7.setTransform(0.2,-1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("AkyIhQh1hyAAioQAAh+BAhUQBAhUB1geQhjglguhCQgwhDAAhdQAAiNBlhgQBlhfCoAAQCmAABoBiQBmBhAACNQAABaguBDQgwBBhfAlQB2AmA/BUQA9BWAAB4QAAClh1BxQh1Bwi+AAQi9AAh1hwgAi6BPQhLBKABBuQgBBEAhA/QAgBAA/AjQBAAiBGAAQByAABKhJQBJhJABhwQAAhzhNhKQhMhLhwAAQhvAAhJBKgAiVnUQg9A6AABQQAABcA8A6QA6A6BdAAQBbAAA6g5QA7g6AAhUQgBhXg7g7Qg9g7hYAAQhaAAg7A6g");
	this.shape_8.setTransform(-0.3,-1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AkbI+QhghVgTiYICYgOQATBrA3AxQA2AwBVAAQBHAAA4ghQA2giAjg3QAjg4AYhfQAYhfAAhjIgBgfQgvBLhSAwQhTAuheAAQigAAhuh0QhvhyAAi9QAAjEB0h4QBzh3CuAAQB8AABoBDQBoBEA3B+QA1B8AADuQAAD1g1CSQg2CShpBNQhrBMiMAAQiXAAhghTgAi1m3QhOBWAACJQAAB7BKBNQBKBLBtAAQBsAABHhLQBGhNAAiIQAAiJhIhQQhJhQhmAAQhnAAhOBXg");
	this.shape_9.setTransform(-0.2,-1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF00").s().p("AhYKPIAAi0ICyAAIAAC0gAhOFRIgBgvQAAhdAahEQATgzApg0QAggjBThJQBRhIAZgsQAZgrAAgzQAAhchIhFQhIhHhpAAQhjAAhEBAQhDA/gWCGIiigTQAWi0BthgQBshgCwAAQC9AABxBnQBwBnAACSQAABUgnBHQgoBIhzBkQhNBEgYAhQgYAggLAqQgMArgBBeg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.6,-66.9,84.1,131.6);


(lib.numberMC_white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkjIMQiAihAAlrQAAjjAwiLQAviLBdhMQBchLCLAAQBnAABPAqQBOApAzBPQAzBOAdByQAdBwAAC+QAADjgvCLQguCLhdBNQhdBLiNAAQi5AAhqiFgAiumxQhSB2AAE7QAAE9BLBqQBKBoBrAAQBtAABKhpQBKhqAAk8QAAk8hKhpQhKhphtAAQhtAAhBBdg");
	this.shape.setTransform(-0.6,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABPKGIAAvuQg5A3hbA2QhdA3hKAbIAAiZQCFg+BjhZQBihZAphTIBmAAIAAULg");
	this.shape_1.setTransform(-6.7,-2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AmoKGQgCg5AUg1QAhhXBIhUQBHhUCHhvQDQiqBKhlQBKhlAAhZQAAhehDhBQhDhBhtAAQhwAAhEBFQhFBFgBB5IiigRQAQi2BthfQBthfC2AAQC5AABtBmQBsBnAACYQAABOggBKQggBLhJBRQhJBSirCQQiMB4gpArQgoAqgbArIJ2AAIAACYg");
	this.shape_2.setTransform(-2,-2.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkkItQhxhmgPigICegVQAbCGBCA8QBBA7BeAAQBtAABOhOQBNhNAAhyQgBhthGhHQhIhHhuAAQgrAAhDASIASiJIAZACQBkAABQg1QBRg1AAhuQAAhXg6g5Qg7g5hcAAQhcAAg9A6Qg+A6gSB0IidgcQAcifBnhXQBnhYCZAAQBnAABZAuQBZAtAvBOQAvBOAABYQAABTgtBFQgtBEhXApQByAaA/BSQBABSAAB9QAACph7B2Qh8B1i6AAQiqAAhvhlg");
	this.shape_3.setTransform(-0.3,-1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABxKEIAAk1IotAAIAAiRIJKtBICBAAIAANBICuAAIAACRIiuAAIAAE1gAkhC+IGSAAIAApDg");
	this.shape_4.setTransform(-3.2,-2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkqIjQhwhigQijICngNQASB5BEA9QBDA9BeAAQBxAABPhWQBPhXAAiOQAAiHhMhNQhMhOh5AAQhNABg9AiQg+AjgjA1IiUgTIB8qUIJ/AAIAACXIoAAAIhFFbQB0hRB9AAQCpgBB0B2QB0BzAAC3QAACvhmCAQh8CcjVAAQivAAhvhjg");
	this.shape_5.setTransform(0.1,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AkrIAQh9iSAAlOQAAlzCKiqQB5iTDKAAQCYAABhBVQBhBVATCWIidANQgVhegngqQhAhDheAAQhKAAg5AqQhKA2grBpQgrBogCDCQA5hXBSgqQBTgrBZAAQCdAABwB1QBvByAAC5QAAB5g0BpQg1BnhbA4QhbA3h1AAQjDAAh9iRgAinARQhLBMAAB9QAABSAkBKQAhBLA/AnQA+AnBDAAQBkAABIhRQBIhRAAiKQAAiGhHhMQhHhMhsAAQhpAAhLBMg");
	this.shape_6.setTransform(-0.7,-1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjrJ7QACiXA5jYQA5jXBsjGQBojIB5iJIp1AAIAAiZINAAAIAAB8Qh8CDh4DZQh5DXhADmQgwChgNDAg");
	this.shape_7.setTransform(0.2,-1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AkyIhQh1hyAAioQAAh+BAhUQBAhUB1geQhjglguhCQgwhDAAhdQAAiNBlhgQBlhfCoAAQCmAABoBiQBmBhAACNQAABaguBDQgwBBhfAlQB2AmA/BUQA9BWAAB4QAAClh1BxQh1Bwi+AAQi9AAh1hwgAi6BPQhLBKABBuQgBBEAhA/QAgBAA/AjQBAAiBGAAQByAABKhJQBJhJABhwQAAhzhNhKQhMhLhwAAQhvAAhJBKgAiVnUQg9A6AABQQAABcA8A6QA6A6BdAAQBbAAA6g5QA7g6AAhUQgBhXg7g7Qg9g7hYAAQhaAAg7A6g");
	this.shape_8.setTransform(-0.3,-1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AkbI+QhghVgTiYICYgOQATBrA3AxQA2AwBVAAQBHAAA4ghQA2giAjg3QAjg4AYhfQAYhfAAhjIgBgfQgvBLhSAwQhTAuheAAQigAAhuh0QhvhyAAi9QAAjEB0h4QBzh3CuAAQB8AABoBDQBoBEA3B+QA1B8AADuQAAD1g1CSQg2CShpBNQhrBMiMAAQiXAAhghTgAi1m3QhOBWAACJQAAB7BKBNQBKBLBtAAQBsAABHhLQBGhNAAiIQAAiJhIhQQhJhQhmAAQhnAAhOBXg");
	this.shape_9.setTransform(-0.2,-1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhYKPIAAi0ICyAAIAAC0gAhOFRIgBgvQAAhdAahEQATgzApg0QAggjBThJQBRhIAZgsQAZgrAAgzQAAhchIhFQhIhHhpAAQhjAAhEBAQhDA/gWCGIiigTQAWi0BthgQBshgCwAAQC9AABxBnQBwBnAACSQAABUgnBHQgoBIhzBkQhNBEgYAhQgYAggLAqQgMArgBBeg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.6,-66.9,84.1,131.6);


(lib.numberMC_red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AkjIMQiAihAAlrQAAjjAwiLQAviLBdhMQBchLCLAAQBnAABPAqQBOApAzBPQAzBOAdByQAdBwAAC+QAADjgvCLQguCLhdBNQhdBLiNAAQi5AAhqiFgAiumxQhSB2AAE7QAAE9BLBqQBKBoBrAAQBtAABKhpQBKhqAAk8QAAk8hKhpQhKhphtAAQhtAAhBBdg");
	this.shape.setTransform(-0.6,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("ABPKGIAAvuQg5A3hbA2QhdA3hKAbIAAiZQCFg+BjhZQBihZAphTIBmAAIAAULg");
	this.shape_1.setTransform(-6.7,-2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AmoKGQgCg5AUg1QAhhXBIhUQBHhUCHhvQDQiqBKhlQBKhlAAhZQAAhehDhBQhDhBhtAAQhwAAhEBFQhFBFgBB5IiigRQAQi2BthfQBthfC2AAQC5AABtBmQBsBnAACYQAABOggBKQggBLhJBRQhJBSirCQQiMB4gpArQgoAqgbArIJ2AAIAACYg");
	this.shape_2.setTransform(-2,-2.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AkkItQhxhmgPigICegVQAbCGBCA8QBBA7BeAAQBtAABOhOQBNhNAAhyQgBhthGhHQhIhHhuAAQgrAAhDASIASiJIAZACQBkAABQg1QBRg1AAhuQAAhXg6g5Qg7g5hcAAQhcAAg9A6Qg+A6gSB0IidgcQAcifBnhXQBnhYCZAAQBnAABZAuQBZAtAvBOQAvBOAABYQAABTgtBFQgtBEhXApQByAaA/BSQBABSAAB9QAACph7B2Qh8B1i6AAQiqAAhvhlg");
	this.shape_3.setTransform(-0.3,-1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("ABxKEIAAk1IotAAIAAiRIJKtBICBAAIAANBICuAAIAACRIiuAAIAAE1gAkhC+IGSAAIAApDg");
	this.shape_4.setTransform(-3.2,-2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AkqIjQhwhigQijICngNQASB5BEA9QBDA9BeAAQBxAABPhWQBPhXAAiOQAAiHhMhNQhMhOh5AAQhNABg9AiQg+AjgjA1IiUgTIB8qUIJ/AAIAACXIoAAAIhFFbQB0hRB9AAQCpgBB0B2QB0BzAAC3QAACvhmCAQh8CcjVAAQivAAhvhjg");
	this.shape_5.setTransform(0.1,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AkrIAQh9iSAAlOQAAlzCKiqQB5iTDKAAQCYAABhBVQBhBVATCWIidANQgVhegngqQhAhDheAAQhKAAg5AqQhKA2grBpQgrBogCDCQA5hXBSgqQBTgrBZAAQCdAABwB1QBvByAAC5QAAB5g0BpQg1BnhbA4QhbA3h1AAQjDAAh9iRgAinARQhLBMAAB9QAABSAkBKQAhBLA/AnQA+AnBDAAQBkAABIhRQBIhRAAiKQAAiGhHhMQhHhMhsAAQhpAAhLBMg");
	this.shape_6.setTransform(-0.7,-1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AjrJ7QACiXA5jYQA5jXBsjGQBojIB5iJIp1AAIAAiZINAAAIAAB8Qh8CDh4DZQh5DXhADmQgwChgNDAg");
	this.shape_7.setTransform(0.2,-1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AkyIhQh1hyAAioQAAh+BAhUQBAhUB1geQhjglguhCQgwhDAAhdQAAiNBlhgQBlhfCoAAQCmAABoBiQBmBhAACNQAABaguBDQgwBBhfAlQB2AmA/BUQA9BWAAB4QAAClh1BxQh1Bwi+AAQi9AAh1hwgAi6BPQhLBKABBuQgBBEAhA/QAgBAA/AjQBAAiBGAAQByAABKhJQBJhJABhwQAAhzhNhKQhMhLhwAAQhvAAhJBKgAiVnUQg9A6AABQQAABcA8A6QA6A6BdAAQBbAAA6g5QA7g6AAhUQgBhXg7g7Qg9g7hYAAQhaAAg7A6g");
	this.shape_8.setTransform(-0.3,-1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AkbI+QhghVgTiYICYgOQATBrA3AxQA2AwBVAAQBHAAA4ghQA2giAjg3QAjg4AYhfQAYhfAAhjIgBgfQgvBLhSAwQhTAuheAAQigAAhuh0QhvhyAAi9QAAjEB0h4QBzh3CuAAQB8AABoBDQBoBEA3B+QA1B8AADuQAAD1g1CSQg2CShpBNQhrBMiMAAQiXAAhghTgAi1m3QhOBWAACJQAAB7BKBNQBKBLBtAAQBsAABHhLQBGhNAAiIQAAiJhIhQQhJhQhmAAQhnAAhOBXg");
	this.shape_9.setTransform(-0.2,-1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AhYKPIAAi0ICyAAIAAC0gAhOFRIgBgvQAAhdAahEQATgzApg0QAggjBThJQBRhIAZgsQAZgrAAgzQAAhchIhFQhIhHhpAAQhjAAhEBAQhDA/gWCGIiigTQAWi0BthgQBshgCwAAQC9AABxBnQBwBnAACSQAABUgnBHQgoBIhzBkQhNBEgYAhQgYAggLAqQgMArgBBeg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.6,-66.9,84.1,131.6);


(lib.numberMC_blcck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkjIMQiAihAAlrQAAjjAwiLQAviLBdhMQBchLCLAAQBnAABPAqQBOApAzBPQAzBOAdByQAdBwAAC+QAADjgvCLQguCLhdBNQhdBLiNAAQi5AAhqiFgAiumxQhSB2AAE7QAAE9BLBqQBKBoBrAAQBtAABKhpQBKhqAAk8QAAk8hKhpQhKhphtAAQhtAAhBBdg");
	this.shape.setTransform(-0.6,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABPKGIAAvuQg5A3hbA2QhdA3hKAbIAAiZQCFg+BjhZQBihZAphTIBmAAIAAULg");
	this.shape_1.setTransform(-6.7,-2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AmoKGQgCg5AUg1QAhhXBIhUQBHhUCHhvQDQiqBKhlQBKhlAAhZQAAhehDhBQhDhBhtAAQhwAAhEBFQhFBFgBB5IiigRQAQi2BthfQBthfC2AAQC5AABtBmQBsBnAACYQAABOggBKQggBLhJBRQhJBSirCQQiMB4gpArQgoAqgbArIJ2AAIAACYg");
	this.shape_2.setTransform(-2,-2.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AkkItQhxhmgPigICegVQAbCGBCA8QBBA7BeAAQBtAABOhOQBNhNAAhyQgBhthGhHQhIhHhuAAQgrAAhDASIASiJIAZACQBkAABQg1QBRg1AAhuQAAhXg6g5Qg7g5hcAAQhcAAg9A6Qg+A6gSB0IidgcQAcifBnhXQBnhYCZAAQBnAABZAuQBZAtAvBOQAvBOAABYQAABTgtBFQgtBEhXApQByAaA/BSQBABSAAB9QAACph7B2Qh8B1i6AAQiqAAhvhlg");
	this.shape_3.setTransform(-0.3,-1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABxKEIAAk1IotAAIAAiRIJKtBICBAAIAANBICuAAIAACRIiuAAIAAE1gAkhC+IGSAAIAApDg");
	this.shape_4.setTransform(-3.2,-2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AkqIjQhwhigQijICngNQASB5BEA9QBDA9BeAAQBxAABPhWQBPhXAAiOQAAiHhMhNQhMhOh5AAQhNABg9AiQg+AjgjA1IiUgTIB8qUIJ/AAIAACXIoAAAIhFFbQB0hRB9AAQCpgBB0B2QB0BzAAC3QAACvhmCAQh8CcjVAAQivAAhvhjg");
	this.shape_5.setTransform(0.1,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AkrIAQh9iSAAlOQAAlzCKiqQB5iTDKAAQCYAABhBVQBhBVATCWIidANQgVhegngqQhAhDheAAQhKAAg5AqQhKA2grBpQgrBogCDCQA5hXBSgqQBTgrBZAAQCdAABwB1QBvByAAC5QAAB5g0BpQg1BnhbA4QhbA3h1AAQjDAAh9iRgAinARQhLBMAAB9QAABSAkBKQAhBLA/AnQA+AnBDAAQBkAABIhRQBIhRAAiKQAAiGhHhMQhHhMhsAAQhpAAhLBMg");
	this.shape_6.setTransform(-0.7,-1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AjrJ7QACiXA5jYQA5jXBsjGQBojIB5iJIp1AAIAAiZINAAAIAAB8Qh8CDh4DZQh5DXhADmQgwChgNDAg");
	this.shape_7.setTransform(0.2,-1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AkyIhQh1hyAAioQAAh+BAhUQBAhUB1geQhjglguhCQgwhDAAhdQAAiNBlhgQBlhfCoAAQCmAABoBiQBmBhAACNQAABaguBDQgwBBhfAlQB2AmA/BUQA9BWAAB4QAAClh1BxQh1Bwi+AAQi9AAh1hwgAi6BPQhLBKABBuQgBBEAhA/QAgBAA/AjQBAAiBGAAQByAABKhJQBJhJABhwQAAhzhNhKQhMhLhwAAQhvAAhJBKgAiVnUQg9A6AABQQAABcA8A6QA6A6BdAAQBbAAA6g5QA7g6AAhUQgBhXg7g7Qg9g7hYAAQhaAAg7A6g");
	this.shape_8.setTransform(-0.3,-1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AkbI+QhghVgTiYICYgOQATBrA3AxQA2AwBVAAQBHAAA4ghQA2giAjg3QAjg4AYhfQAYhfAAhjIgBgfQgvBLhSAwQhTAuheAAQigAAhuh0QhvhyAAi9QAAjEB0h4QBzh3CuAAQB8AABoBDQBoBEA3B+QA1B8AADuQAAD1g1CSQg2CShpBNQhrBMiMAAQiXAAhghTgAi1m3QhOBWAACJQAAB7BKBNQBKBLBtAAQBsAABHhLQBGhNAAiIQAAiJhIhQQhJhQhmAAQhnAAhOBXg");
	this.shape_9.setTransform(-0.2,-1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhYKPIAAi0ICyAAIAAC0gAhOFRIgBgvQAAhdAahEQATgzApg0QAggjBThJQBRhIAZgsQAZgrAAgzQAAhchIhFQhIhHhpAAQhjAAhEBAQhDA/gWCGIiigTQAWi0BthgQBshgCwAAQC9AABxBnQBwBnAACSQAABUgnBHQgoBIhzBkQhNBEgYAhQgYAggLAqQgMArgBBeg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.6,-66.9,84.1,131.6);


(lib.btnTopCircle = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoRISQjbjcAAk2QAAk1DbjcQDcjcE1ABQE2gBDcDcQDcDcgBE1QABE2jcDcQjcDbk2AAQk1AAjcjbgAnKnKQi/C+ABEMQgBEMC/C/QC/C/ELgBQENABC+i/QC+i/AAkMQAAkMi+i+Qi+i+kNAAQkLAAi/C+gAlgFhQiTiTAAjOQAAjOCTiSQCTiTDNAAQDPAACSCTQCTCSAADOQAADOiTCTQiSCTjPAAQjNAAiTiTgAj2j3QhnBnAACQQAACQBnBnQBnBnCPAAQCRAABnhnQBlhnABiQQgBiQhlhnQhnhliRgBQiPABhnBlg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AnKHLQi/i/ABkMQgBkMC/i+QC/i+ELAAQENAAC+C+QC+C+AAEMQAAEMi+C/Qi+C/kNgBQkLABi/i/gAlglgQiTCSAADOQAADOCTCTQCTCTDNAAQDPAACSiTQCTiTAAjOQAAjOiTiSQiSiTjPAAQjNAAiTCTg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75,-75,150,150);


(lib.btnFullScreen = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("AK8q7IAAFeAFeq7IFeAAIleFeAq7ldIAAleIFeAAAq7q7IFeFeAq7K8IAAleAldK8IleAAAldFeIleFeAK8FeIAAFeIleAAAFeFeIFeFeAtRtRIajAAIAAajI6jAAg");

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(102,102,102,0.647)").s().p("AvmPnIAA/NIfNAAIAAfNg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-100,-100,200,200);


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


(lib.btnBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000033").s("#66CCCC").ss(5,1,1).rr(-82.5,-82.5,165,165,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s("#00FFFF").ss(5,1,1).rr(-82.5,-82.5,165,165,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,0,255,0)").s().p("AuDOEIAA8HIcHAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-90,180,180);


(lib.theInfoPanel = function() {
	this.initialize();

	// Layer 1
	this.textCorrectRatio = new cjs.Text("98.25%", "36px 'Arial Narrow'", "#FFFFFF");
	this.textCorrectRatio.name = "textCorrectRatio";
	this.textCorrectRatio.lineHeight = 38;
	this.textCorrectRatio.lineWidth = 142;
	this.textCorrectRatio.setTransform(569,48.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADuCnIAAg9IiVAAIAAgdICVAAIAAgbIhFAHQgCgNgEgOIAfgFQAUgQAWgXQgfgjghgRQAIgNAGgNQAFACARAMQAOgQAKgTIiIAAIAAgcICPAAIAAgZIAfAAIAAAZICKAAIAAAcIiOAAQgOAWgXAgIAYAWQAYghANgfIAZAMQgSAtg/BCIA9gJQgJgRgFgHIAYgKQAbAlAOAmIgZAKIgKgXIgqAFIAAAfICSAAIAAAdIiSAAIAAA9gAh/CTIAAicQgEADgCAEIgSgQIAACUQgCAKgIAAIguAAIAAAPIgdAAIAAiRIgIARIgfgIQAmhFAEhHIghAAIAAgeIBxAAIAAAeIgyAAQgEAkgKAuIA4AAQAKABAAAIIAAAEQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAqgiAbgyIgiAAQgCgCAAAEIAAAjIgdAAIAAg8QAAgGAGABIBGAAIAJgZIAcAKIgGAPIBHAAIAaAMQAAAagNAjIgbgJQAHgcAAgFQAAgDgEAAIhHAAQgNAagaAkIA0AAQAMgaAGgSIAZAMIgJAbIgDAFIA8AAIgDAdIhAAAIAAAdIA+AAIAAAcIg+AAIAAAhIA+AAIAAAdIg+AAIAAAeIBEAAIAAAdIirAAIgBAAQgKAAAAgLgAhiB8QAAAEAFABIAyAAIAAgeIg3AAgAjPgGIAAB2IAWAAQAGgBAAgFIAAhwQAAgEgGgBIgSAAQgEABAAAEgAhiBGIA3AAIAAghIg3AAgAhigQIAAAZIA3AAIAAgdIgyAAQgFAAAAAEgAp3CbIAAgfIAvAAIAAjAIAgAAIAADAIBNAAIAAjzIiOAAIAAgeIEvAAIAAAeIiAAAIAABjIB6AAIAAAdIh6AAIAABzICMAAIAAAfgABZAnQA+gmAdgbIAVAWQggAbg9AmgAJQA7IAAgnIAoAAIAAAngAFGgDIAQgXQAiAVAmAiIgTAVQgqglgbgQgABqhSIAVgTQAVAVAZAhIgWASQgbgkgSgRgAJQgeIAAgnIAoAAIAAAngAFBg5QAmgfARgWIATATQgVAbgiAbg");
	this.shape.setTransform(491.6,65.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(473.5,20);

	this.textQCount = new cjs.Text("50/50", "36px 'Arial Narrow'", "#FFFFFF");
	this.textQCount.name = "textQCount";
	this.textQCount.lineHeight = 38;
	this.textQCount.lineWidth = 142;
	this.textQCount.setTransform(569,3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AB7CaIABgbIhqAAIAHAWQgqAOhBAEIgBgcQAxgGAigGIglAAQgEAAAAgEIAAh8QgPAFgTAFIgOgYQApgNAbgOIgiAAIgBAIIgbgEIAIhCQACgGAFAAIBRAAIAAgPIhWAAIAAgZIBWAAIAAgOIAdAAIAAAOIBAAAIAAgRIAcAAIAAARIBPAAQADgCAEAEQACACABAEIAABBIgcAAIAAgHIg9AAIAAARIBhAAQAHABAAAGIgCAvQgDAMgGABQgKAFgVgBIAAB3QAAAEgEAAIgzAAIBfAMIgFAdgAgLBlQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAICvAAIACgBIAAgUIiyAAgAgLA5ICyAAIAAgSIiyAAgAgLAPICyAAIAAgPIiyAAgACGgYIA6AAQAEAAAAAEIADAAIAIAAQABAAABAAQAAgBAAAAQABAAAAgBQAAAAAAAAQACgFAAgMQAAgDgFAAIhJAAgAgBgYIBrAAIAAgSIhYAAIgTASgAAghDIBKAAIAAgRIhDAAIgHARgAgxhRIgDAOIA2AAIAEgJIAFgIIg4AAIgCgBQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAABgACGhuIA9AAIAAgMQAAgBAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAIg5AAgAAqhuIBAAAIAAgPIhAAAgAHVCdIAAggQAUAHAIABIASADQAHAAAGgGQADgEAAgGIAAhaIiOAAIAAgeICOAAIAAgiIiOAAIAAgdIBaAAIAAgpIhQAAIAAgeIBQAAIAAghIAfAAIAAAhIBQAAIAAAeIhQAAIAAApIBYAAIAAAdIgkAAIAAAiIAiAAIAAAeIgiAAIAABjQAAAVgRAKQgKAGgQAAQgUAAgegJgAnDCdQABgGAEgFQAXg0gFhBIAdgBIABAoIAAADQAKAUARARIAAhhIhMAAIAAgaICdAAIAAAaIg0AAIAAAjIAzAAIAAAcIgzAAIAAAxQAaAJAngCICiAAIgJAeIiOAAQgfAAgWgEQg0gHgigmQgJAggJAWgAqUCjIAAg7IhRAAIAAgfIBRAAIAAh5Qg8BXhFAwIgYgXQBag/A3hbIiHAAIAAgfICPAAIAAgtIAhAAIAAAtICOAAIAAAfIiHAAQAwBZBhBBIgdAVQhUhGgng/IAAB5IBQAAIAAAfIhQAAIAAA7gAEUCWIAAklQAAgKAKAAIBPAAQALAAAAAKIAAEAQgBAMgKAAIg6AAIAAAZgAEzBeIAfAAQAHgCAAgFIAAhWIgmAAgAEzh2IAABaIAmAAIAAhaQAAgEgFAAIgcAAQgFAAAAAEgAi/BfIALgZQAbALAhAXIgQAWQghgWgWgJgAkpBlQAigKAZgVIATAVQgkAbgdAIgAGZA4IAagQQAUAbARAmIgcAOQgTgpgQgWgAkRBCQgDAAAAgFIAAikQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAsAAQAEgKABgKIACgEIhAAAIAAgaICeAAIAAAaIhCAAIgHAYIA+AAQABAAABAAQAAABABAAQAAAAAAABQABAAAAAAIAACkQAAAFgEAAgAj4AoIBTAAIACgBIAAgXIhVAAgAj4gHIBVAAIAAgZIhVAAgAj4g6IBVAAIAAgWIhVAAgAMGA5IAAgnIAoAAIAAAngAMGggIAAgoIAoAAIAAAogAmzgiQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAgBAAgBIAAh1QAAAAAAgBQABAAAAgBQAAAAABAAQAAAAAAAAIB/AAQAEABAAABIAAB1QAAAEgEAAgAmZg7IBMAAIABgBIAAgYIhNAAgAmZhuIBNAAIAAgWIhNAAg");
	this.shape_2.setTransform(84.4,20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AB5CaIABgbIhrAAIAHAWQgqAOhAAEIgCgcQAygGAhgGIgkAAQgFAAAAgEIAAh8QgPAFgTAFIgNgYQApgNAagOIghAAIgCAIIgbgEIAIhCQACgGAFAAIBRAAIAAgPIhWAAIAAgZIBWAAIAAgOIAdAAIAAAOIBBAAIAAgRIAcAAIAAARIBPAAQACgCAEAEQACACABAEIAABBIgcAAIAAgHIg8AAIAAARIBhAAQAGABAAAGIgCAvQgDAMgGABQgKAFgUgBIAAB3QAAAEgFAAIgyAAIBeAMIgEAdgAgOBlQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAICuAAIACgBIAAgUIiyAAgAgOA5ICyAAIAAgSIiyAAgAgOAPICyAAIAAgPIiyAAgACEgYIA5AAQAFAAAAAEIADAAIAIAAQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAAAQACgFAAgMQAAgDgEAAIhJAAgAgEgYIBsAAIAAgSIhZAAIgTASgAAdhDIBLAAIAAgRIhEAAIgHARgAg0hRIgDAOIA3AAIAEgJIAEgIIg4AAIgCgBQAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAABgACEhuIA8AAIAAgMQAAgBAAgBQAAAAgBAAQAAgBgBAAQgBAAgBAAIg4AAgAAnhuIBBAAIAAgPIhBAAgAHSCdIAAggQAUAHAIABIASADQAIAAAGgGQACgEAAgGIAAhaIiOAAIAAgeICOAAIAAgiIiOAAIAAgdIBaAAIAAgpIhQAAIAAgeIBQAAIAAghIAfAAIAAAhIBQAAIAAAeIhQAAIAAApIBYAAIAAAdIgkAAIAAAiIAiAAIAAAeIgiAAIAABjQAAAVgRAKQgJAGgRAAQgUAAgegJgAqXCjIAAhuIiTAAIAAgfICTAAIAAiTIiHAAIAAgfIEvAAIAAAfIiHAAIAACTICSAAIAAAfIiSAAIAABugAkhCWIAAgmQBDAWAXgJQAQgHANgVQAMgYACgzQAEh0gEgJQAAAAAAAAQgBAAAAgBQgBAAgBAAQAAAAgCAAIiCAAQgPAugTAeIgdgLQAlg9AGhAIAfACIgEAbICVAAQAGAAABABQADAAABAFQAEAKgFCRQgFA/gOAeQgMAbgZAKQgPAGgVAAQgeAAgqgMgAESCWIAAklQAAgKAKAAIBOAAQAMAAAAAKIAAEAQgCAMgKAAIg6AAIAAAZgAEwBeIAfAAQAIgCgBgFIAAhWIgmAAgAEwh2IAABaIAmAAIAAhaQABgEgGAAIgcAAQgEAAgBAEgAnIB2IArgXIAAiNIglAAIAAgfIAlAAIAAhVIAeAAIAABVIAgAAIAAAfIggAAIAAB5QASgLAMgMIAUAWQgkAihDAjgAGWA4IAagQQAUAbARAmIgcAOQgTgpgQgWgAlCA0QBZgWAvgWIANAcQg4AchWASgAMEA5IAAgnIAnAAIAAAngApJgIQAng6APgmIAcANQgRArgmA1gAsZhXIAbgRQAbAmAaA4IgcAOQgbg8gZgfgAkqgZIAAgfIBrAAIAAAfgAMEggIAAgoIAnAAIAAAog");
	this.shape_3.setTransform(84.7,69);

	this.textTimePassed = new cjs.Text("15.53s", "36px 'Arial Narrow'", "#FFFFFF");
	this.textTimePassed.name = "textTimePassed";
	this.textTimePassed.lineHeight = 38;
	this.textTimePassed.lineWidth = 216;
	this.textTimePassed.setTransform(183,3.2);

	this.textAverageTime = new cjs.Text("15.53s", "36px 'Arial Narrow'", "#FFFFFF");
	this.textAverageTime.name = "textAverageTime";
	this.textAverageTime.lineHeight = 38;
	this.textAverageTime.lineWidth = 216;
	this.textAverageTime.setTransform(183,52.1);

	this.addChild(this.textAverageTime,this.textTimePassed,this.shape_3,this.shape_2,this.textQCount,this.shape_1,this.shape,this.textCorrectRatio);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3,3.2,712,93.8);


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
	this.shape_2.graphics.f().s("#FFFF00").ss(10,1,1).p("AXbAAQAAJtm3G3Qm3G4ptAAQpsAAm3m4Qm4m3AAptQAApsG4m3QG3m4JsAAQJtAAG3G4QG3G3AAJsgAfQAAQAAM8pKJKQpKJKs8AAQs7AApKpKQpKpKAAs8QAAs7JKpKQJKpKM7AAQM8AAJKJKQJKJKAAM7g");
	this.shape_2.setTransform(0,-50);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("A2FWFQpKpJAAs8QAAs7JKpJQJKpLM7ABQM8gBJKJLQJKJJAAM7QAAM8pKJJQpKJLs8gBQs7ABpKpLgAwjwjQm4G3AAJsQAAJtG4G3QG3G4JsAAQJtAAG3m4QG3m3AAptQAApsm3m3Qm3m4ptAAQpsAAm3G4g");
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
	this.shape_8.graphics.f("#FF0000").s().p("AAAguIAAAuIAAAvg");
	this.shape_8.setTransform(200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205,-255,410.1,452.5);


(lib.btnSelectQN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.btnTop = new lib.btnChecker();
	this.btnTop.setTransform(0,0,1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.btnTop).wait(5));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah5DVQgOgNgLgPQAoAaA5AAQAxAAAmgYIANgIQAQgMANgRQAogyAAhEQAAg1gbgoQALAIALAKQAtAsAABHQAABEgoAyQgwA9hRAAQhFAAgrgmgAhwCJQgNgMgIgRIAbgCQAEAaAKATQgLgGgJgIgAifAFIAGggIAMACQANgWAYgNQAJgFAJgDIgDALQAPgKAPgHIAJAAQAwAAAbAfQAKAJAGANQgXgNgcAAQgeAAgYAOQgYANgNAUgAhmjnIDGAAIAAgTIAoAAIAAA7IjGAAIgOBFQgbAIgaARg");
	this.shape.setTransform(2.6,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhkDhIgPgMQgsgngGg/IBBgFQAEAYAIASQAJARAMAMQAKAIALAGQATAJAXAAQArAAAeghQAfgiAAg3QAAgkgNgZQgHgNgJgHQgegfguAAIgJAAQgOACgNAEQgJADgIAFQgYANgOAUIgLgCIgvgGIAxj/ID3AAIAAAoIAAATIjGAAIgbCGQAagRAbgIQAUgGAUAAQBBAAAtAtQAKAKAIAMQAcAmAAA3QAABEgoAyQgOARgPAMIgNAIQgmAYgyAAQg5AAgngag");
	this.shape_1.setTransform(-2,-2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABZDpQgSgMgOgSQgyg+AAiNQAAhXATg2QASg3AkgdQAkgdA3AAQAoAAAeAQQAeAQAUAeIABABQAUAeALAsQALAsAABJQAABYgSA2QgQAugcAcIgKAKIgOAJQggAUgtAAQgvAAgjgWgACMjGQgWAIgQAWIAAABQgfAuAAB5QAAB7AdApQAPAWAUAKQAQAJAUAAQAqAAAdgpQAdgpAAh7QAAhvgXgrIgGgJQgdgogrAAQgQAAgOAFgAiqD3IgoAAIAAk/IAAhFIAAgCQgSARgcASIgMAHIgZAOQgWALgSAHIAAg8QA0gYAmgiQAngjAQggIAoAAIAAAoIAAHNg");
	this.shape_2.setTransform(-2,-2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA5DLIgIgKQAjAWAvAAQAtAAAggUQANgHALgMQAcgcAQguQASg2AAhWQAAhLgLgsQgLgsgUgeIgBgBQAYAPARAaQAUAeALAsQALAsAABJQAABYgSA2QgSA2gkAeQgkAdg3AAQhJAAgpg0gAjSD3IAAgoIAWAAIAAnNIAoAAIAAH1gAA8B8QgdgpAAh5QAAh7AfguQAIgKAKgIQAJgHALgGQAOgFAQAAQArAAAdAoIAGAJQgSgJgUAAQgqAAgaAjQgfAuAAB6QAABwAYAsQgUgKgPgWgAlNh/IAZgOIAMgHQAZgPAVgSIAABFIgSALQgkAVgdALg");
	this.shape_3.setTransform(2,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AB1DpQgSgMgPgSQgxg+AAiNQAAhXASg2QASg3AlgdQAjgdA3AAQApAAAeAQQAeAQAUAeIAAAAIAAABQAUAeALAsQAMAsAABJQAABYgTA2QgPAugcAcIgLAKIgNAJQggAUguAAQgvAAgigWgACnjGQgWAIgPAWIAAABQggAuAAB5QAAB7AdApQAQAWATAKQARAJATAAQArAAAdgpQAcgpAAh7QAAhugXgsIgFgJQgdgogsAAQgQAAgOAFgAk6D3IgvAAQAAgWAIgVQAMgiAcghQAcggA1gsQBRhAAdgnQAdgoAAgjQAAgUgIgQQgHgOgLgLQgbgZgqAAQgsAAgbAaQgaAbgBAvIgRgBIgugFQAHhHAqglQAqglBIAAQBIAAAqAoQAMALAJAOQAVAgAAAqQAAAegMAdQgNAdgcAeQgdAghCA4Qg3AvgQAQQgQARgKARIBIAAICuAAIAAAoIAAATg");
	this.shape_4.setTransform(-2,-2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABUDGIgHgKQAiAWAvAAQAuAAAggUQANgHALgMQAcgcAPguQATg3AAhWQAAhKgMgsQgLgsgUgfIAAAAQAYAPAQAZQAUAfALAsQAMAsAABKQAABWgTA3QgSA2gkAdQgkAeg3AAQhIAAgqg0gAlpDxQAAgUAHgUIEdAAIAAgTIAoAAIAAA7gABXB3QgdgpAAh6QAAh7AgguQAIgJAKgIQAJgIAKgFQAOgGAQAAQAsAAAdApIAFAIQgRgJgVAAQgqAAgZAkQggAuAAB7QAABvAYAsQgTgKgQgWgAk7COQAKgRAQgQQAQgRA3guQBCg2AdggQAcghANgdQAMgdAAgeQAAgqgVggQAKAHAJAIQAqAoAAA7QAAAegMAdQgNAdgcAhQgdAehCA4QguAmgTASgAldhzQACgTAEgQIARACQABgwAagaQAbgbAsAAQAqAAAbAZQALAMAHANQgUgKgbAAQgsAAgbAbQgaAagBAwg");
	this.shape_5.setTransform(2,2.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ak2DTQgOgNgJgPQAmAbA3AAQBJAAAvgtQAxguAAhCQAAgogRgbQASALAOAQQAZAggBAwQAABCgvAuQgwAthKAAQhCAAgrgngABNDGIgHgKQAiAWAvAAQAtAAAggUQANgHAMgMQAbgcAQguQATg3AAhWQAAhKgMgsQgLgsgUgfIAAAAQAYAPAQAZQAUAfALAsQALAsAABKQAABWgSA3QgSA2gkAdQgkAeg3AAQhJAAgpg0gABQB3QgdgpAAh6QAAh7AfguQAJgJAJgIQAKgIAKgFQAOgGAQAAQArAAAeApIAFAIQgSgJgUAAQgqAAgaAkQgfAuAAB7QAABvAYAsQgTgKgQgWgAkuCIQgOgMgIgUIAagDQAGAdAKAUQgKgFgKgJgAjDgBQgRAAgbAFIAHgtQApABAaAbQALAKAGALQgUgJgbAAgAibhBIAEgDQAPgKAIgPQAJgIAFgKQASgaAAghQAAgigSgeIAAgBQAZAQAPAZQASAeAAAiQAAAhgSAaQgMAUgVANQgTgTgdgIgAliiCQAEgRAFgOIANACQAHgsAXgXQAKgJANgGQAQgIAWAAQAkAAAXAWQALALAGAOQgQgHgVAAQgjAAgYAWQgYAXgHAtg");
	this.shape_6.setTransform(2.3,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AkiDkQgJgFgHgHQgsgngHg/IA+gIQAFAZAJASQAIAVAOAMQAKAIAKAFQATAJAXAAQAsAAAdgdQAegeAAgtQAAgagLgVQgGgNgLgKQgagbgpAAIgDAAQgRgBgaAIIAGg0IALAAQAnAAAfgVQAfgUABgrQgBgRgFgOQgGgOgLgLQgXgWgkAAQgWAAgQAIQgMAFgKAJIgBABQgXAXgHAsIgNgCIgwgIQALg/AoghQAogjA8AAQApAAAiASQAiARATAeIAAABQASAeAAAjQAAAggSAaQgFAKgJAIQgPAPgWAKIAKADQAdAIATARQAGAGAFAHIAIAMQARAcAAApQAABBgxAuQgvAuhJAAQg3gBgmgbgABxDpQgSgMgPgSQgxg/gBiMQABhXASg2QASg3AlgdQAjgdA3gBQAoAAAeARQAfAQATAeIABAAIAAAAQAUAfALAsQAMAsAABJQAABXgTA3QgQAugbAcIgLAKIgOAKQggATgtAAQgvAAgigWgACjjGQgWAIgQAWIAAABQgfAtAAB6QAAB7AdApQAQAWATAKQARAJATgBQAqAAAegoQAcgpAAh7QAAhvgXgsIgFgIQgegogrAAQgQgBgOAGg");
	this.shape_7.setTransform(-2,-2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABLDHIgHgKQAiAWAvAAQAtAAAhgUQAMgHALgMQAcgcAQguQASg3AAhWQAAhKgLgsQgLgsgUgfIAAAAQAXAPARAZQAUAfALAsQALAsAABKQAABWgSA3QgSA2gkAdQgkAeg3AAQhJAAgpg0gAk5DVQgOgNgKgPQAnAaA5AAQAzAAAmgXIANgJQAQgMANgRQAogyAAhEQAAg1gbgoQALAIALAKQAtAsAABHQAABEgoAyQgwA9hTAAQhFAAgrgmgABOB4QgdgpAAh6QAAh7AfguQAIgJAKgIQAJgIALgFQAOgGAQAAQArAAAdApIAGAIQgSgJgUAAQgqAAgaAkQgfAuAAB7QAABvAYAsQgUgKgPgWgAkwCJQgNgMgIgRIAbgCQAEAaAKATQgLgGgJgIgAlfAFIAGggIAMACQANgWAYgNQAJgFAJgDIgDALQAPgKAPgGIAJgBQAwAAAdAfQAKAJAGANQgXgNgeAAQgeAAgYAOQgYANgNAUgAkmjnIDIAAIAAgTIAoAAIAAA7IjIAAIgOBFQgbAIgaARg");
	this.shape_8.setTransform(2.6,2.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABxDpQgSgMgPgSQgxg+AAiNQAAhXASg2QASg3AlgdQAjgdA3AAQApAAAeAQQAeAQAUAeIAAAAIAAABQAUAeALAsQAMAsAABJQAABYgTA2QgPAugcAcIgLAKIgNAJQggAUguAAQgvAAgigWgACjjGQgWAIgPAWIAAABQggAuAAB5QAAB7AdApQAQAWATAKQARAJATAAQArAAAdgpQAcgpAAh7QAAhugXgsIgFgJQgdgogsAAQgQAAgOAFgAkkDlIgPgMQgsgmgGg/IBBgGQAEAYAJATQAIARAMALQAKAJALAFQATAKAXAAQAtAAAegiQAfghAAg4QAAgjgNgaQgHgMgJgJQgegdgwAAIgJAAQgOABgNAFQgJADgIAFQgYANgOATIgLgBIgvgGIAxj/ID5AAIAAAoIAAASIjIAAIgbCHQAagSAbgHQAUgGAWAAQBBAAAtAtQAKAKAIALQAcAmAAA4QAABEgoAxQgOARgPAMIgNAJQgmAXg0AAQg5AAgngag");
	this.shape_9.setTransform(-2,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

	// Layer 1
	this.btnBG = new lib.btnBG2();

	this.timeline.addTween(cjs.Tween.get(this.btnBG).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-45,180,90);


(lib.btnSelectAll = function() {
	this.initialize();

	// Layer 3
	this.btnTop = new lib.btnChecker();
	this.btnTop.setTransform(0,0,1,0.5);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AAVDkQAugMARgOQAOgQAHgXIAAhhQAAgHgHAAIhCAAIAAgzIBuAAQAOACABAKIAACMQABAOAWARQASAQAjAJQA3AOEggOIgMA5Ij7AAQiFgFgsgxQgKATgfAQQggAVgYACgAo2D+IAAg0ID0AAIAAhgIi1AAIAAgzIC1AAIAAheIibAAIAAg0IFwAAIAAA0IifAAIAABeIC1AAIAAAzIi1AAIAABgID0AAIAAA0gAGqCgIARgsQA1ALBCAkIgTAqQhIgjgtgKgADECZQA7gFA0gjIAXAtQhHAlg6AHIgFgxgAC2BtIAAgvIBlAAIAAgmIhXAAIAAgtIBXAAIAAgeIg4AAQgRAAgOgOQgMgOAAgOIAAidQADgMAJAAICRAAQAOACAAAKIAABiQAAAOgOAAIhyAAIAAAaQgCAHAGAHQAFAFAHAAIA7AAIALgFQAIgFgBgcIArAHQACAxgOAKQgMAJgJADIAAAgIBZAAIAAglQgMgFgOgJQgLgOAAgOIAAibQABgMAKAAICWAAQAOADAAAJIAABgQAAAOgOAAIh3AAIAAAaQgDAHAHAHQAFAFAHAAIBLAAIAMgFQAHgFAAgeIAnAHQAFAzgOAKQgQAOgQAAIhDAAIAAAlIBaAAIAAAtIhaAAIAAAmIBqAAIAAAvgAFKA+IBZAAIAAgmIhZAAgADjjVIAAAhIBQAAQAGAAAAgHIAAgcQAAgFgGAAIhKAAQgGAAAAAHgAGojaIAAAfIBUAAQAHAAAAgHIAAgaQAAgFgHAAIhOAAQgGAAAAAHgAAXhnIAagsQApAXA5AmIgfAsQg4gsglgRgAo/huQDQhLA7hbIAxAJQgEAFgBAHQBoBXCOAxIgeAxQiKg6hshcQhJBNiyBQgAAZjlIAcgtQAtAaA4AtIgfAqQg8gvgmgVg");
	this.shape.setTransform(-0.9,-2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAUDkQAwgMAPgOQAPgQAHgXIAAhhQAAgHgHAAIhCAAIAAgzIBvAAQAOACAAAKIAACMQABAOAWARQATAQAiAJQA2AOEhgOIgMA5Ij7AAQiFgFgtgxQgJATgeAQQgiAVgXACgAo2D+IAAg0ID0AAIAAhgIi1AAIAAgzIC1AAIAAheIibAAIAAg0IFwAAIAAA0IifAAIAABeIC0AAIAAAzIi0AAIAABgIDzAAIAAA0gAGqCgIAQgsQA2ALBCAkIgTAqQhIgjgtgKgADECZQA7gFAzgjIAYAtQhHAlg6AHIgFgxgAC2BtIAAgvIBlAAIAAgmIhXAAIAAgtIBXAAIAAgeIg5AAQgPAAgPgOQgLgOAAgOIAAidQACgMAJAAICRAAQAPACAAAKIAABiQAAAOgPAAIhzAAIAAAaQgCAHAIAHQAEAFAHAAIA7AAIALgFQAIgFAAgcIApAHQADAxgOAKQgMAJgJADIAAAgIBZAAIAAglQgMgFgOgJQgMgOABgOIAAibQACgMAJAAICWAAQAOADAAAJIAABgQAAAOgOAAIh4AAIAAAaQgCAHAHAHQAFAFAHAAIBLAAIAMgFQAGgFAAgeIApAHQAEAzgOAKQgQAOgRAAIhBAAIAAAlIBZAAIAAAtIhZAAIAAAmIBpAAIAAAvgAFKA+IBZAAIAAgmIhZAAgADijVIAAAhIBQAAQAIAAgBgHIAAgcQABgFgIAAIhJAAQgGAAgBAHgAGnjaIAAAfIBVAAQAHAAAAgHIAAgaQAAgFgHAAIhOAAQgHAAAAAHgAAXhnIAagsQAqAXA4AmIgfAsQg3gsgmgRgAo/huQDRhLA6hbIAxAJQgFAFABAHQBmBXCPAxIgeAxQiKg6hshcQhJBNiyBQgAAZjlIAcgtQAtAaA4AtIgeAqQg+gvglgVg");
	this.shape_1.setTransform(1,2.3);

	// Layer 1
	this.btnBG = new lib.btnBG2();

	this.addChild(this.btnBG,this.shape_1,this.shape,this.btnTop);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-90,-45,180,90);


(lib.oneNumberInQuestion = function() {
	this.initialize();

	// Layer 2
	this.n1 = new lib.numberMC_yellow();
	this.n1.setTransform(-0.6,-1.2,1,1,0,0,0,-0.6,-1.2);

	// Layer 1
	this.n2 = new lib.numberMC_red();
	this.n2.setTransform(5,5,1,1,0,0,0,-0.6,-1.2);

	this.addChild(this.n2,this.n1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.6,-66.9,89.7,137.8);


(lib.oneNumberInAnser = function() {
	this.initialize();

	// Layer 2
	this.n1 = new lib.numberMC_white();
	this.n1.setTransform(-0.6,-1.2,1,1,0,0,0,-0.6,-1.2);

	// Layer 1
	this.n2 = new lib.numberMC_blcck();
	this.n2.setTransform(5,5,1,1,0,0,0,-0.6,-1.2);

	this.addChild(this.n2,this.n1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.6,-66.9,89.7,137.8);


(lib.btnTop2 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,255,0.008)").s().p("A8HOEIAA8HMA4PAAAIAAcHg");

	// Layer 3
	this.circle = new lib.btnTopCircle();

	this.addChild(this.circle,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-180,-90,360,180);


(lib.btnTop = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,255,0.008)").s().p("AuDOEIAA8HIcHAAIAAcHg");

	// Layer 1
	this.circle = new lib.btnTopCircle();

	this.addChild(this.circle,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-90,-90,180,180);


(lib.btnNumber = function() {
	this.initialize();

	// Layer 3
	this.btnTop = new lib.btnTop();

	// Layer 2
	this.numberMC = new lib.oneNumberInAnser();
	this.numberMC.setTransform(2.2,1.9,1,1,0,0,0,2.2,1.9);

	// Layer 1
	this.btnBG = new lib.btnBG();

	this.addChild(this.btnBG,this.numberMC,this.btnTop);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-90,-90,180,180);


(lib.btnPlayAgain = function() {
	this.initialize();

	// Layer 3
	this.btnTop = new lib.btnTop2();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("An4H9IAAhxQCoAvAvgcQAcgOAAghIAAiIIqfAAIAAEeIhnAAIAAkeIh1AAIAAhnIB1AAIAAmyQAFgXATAAIFtAAIAAhsInnAAIAAhjIQkAAIAABjInVAAIAABsIFkAAQAcAEAAATIAAGyIBsAAIAABnIhsAAIAACyQgEBCgvAcQgtAghOAAQhIAAhkgbgAoeCBIEZAAIAAiBIkZAAgAukCBIEeAAIAAiBIkeAAgAoehjIEZAAIAAh6QgFgEgEAAIkQAAgAukjdIAAB6IEeAAIAAh+IkZAAQgEAAgBAEgAEGGyQBUgOBVghQAugcAigrQBKhrAFjRIAAhsIiNAAIAAhnIKoAAIAABnIjTAAIAAHXQABAcAOAPQAXASASAAIAhAAQAOAAAOgOQAOgJABgTQgBgzAFiNIBiAOQgID9gUAcQgqAqggAAIiEAAQgqgEggghQgdghAAghIAAoUIh6AAIAABsQgEDVhGCEQgwBGg4AqQhGAvh1AcgAAhFLQBdghA9gcIAAlLIh1AAIAAhnIB1AAIAAkCIh6AAIAAhnIFlAAIAABnIiEAAIAAECIB6AAIAABnIh6AAIAAEXQBCglAqghIA9BUQiNBejlBZgAIDmrIAAhnIIuAAIAABng");
	this.shape.setTransform(-3.5,-3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("An4H9IAAhxQCoAvAvgcQAcgOAAghIAAiIIqfAAIAAEeIhmAAIAAkeIh1AAIAAhnIB1AAIAAmyQAFgXASAAIFtAAIAAhsInnAAIAAhjIQkAAIAABjInVAAIAABsIFkAAQAcAEAAATIAAGyIBsAAIAABnIhsAAIAACyQgFBCgvAcQgsAghOAAQhIAAhkgbgAoeCBIEZAAIAAiBIkZAAgAukCBIEeAAIAAiBIkeAAgAoehjIEZAAIAAh6QgEgEgFAAIkQAAgAukjdIAAB6IEeAAIAAh+IkYAAQgGAAAAAEgAEGGyQBVgOBUghQAugcAigrQBLhrAEjRIAAhsIiMAAIAAhnIKnAAIAABnIjSAAIAAHXQAAAcAOAPQAXASASAAIAiAAQAOAAANgOQAPgJAAgTQgBgzAFiNIBiAOQgJD9gSAcQgqAqghAAIiDAAQgrgEggghQgdghAAghIAAoUIh5AAIAABsQgFDVhGCEQgwBGg4AqQhGAvh2AcgAAhFLQBdghA9gcIAAlLIh1AAIAAhnIB1AAIAAkCIh6AAIAAhnIFlAAIAABnIiEAAIAAECIB6AAIAABnIh6AAIAAEXQBCglAqghIA9BUQiMBejmBZgAIDmrIAAhnIIuAAIAABng");
	this.shape_1.setTransform(3.5,3);

	// Layer 1
	this.btnBG = new lib.btnBG2_1();

	this.addChild(this.btnBG,this.shape_1,this.shape,this.btnTop);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-180,-90,360,180);


(lib.btnNumberSelector = function() {
	this.initialize();

	// Layer 3
	this.btnTop = new lib.btnChecker();

	// Layer 2
	this.numberMC = new lib.oneNumberInAnser();
	this.numberMC.setTransform(2.2,1.9,1,1,0,0,0,2.2,1.9);

	// Layer 1
	this.btnBG = new lib.btnBG();

	this.addChild(this.btnBG,this.numberMC,this.btnTop);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-90,-90,180,180);


(lib.btnWord = function() {
	this.initialize();

	// Layer 3
	this.btnTop = new lib.btnTop2();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgzA1QgXgXAAgeQAAgdAXgXQAWgWAdABQAegBAXAWQAVAXAAAdQAAAegVAXQgXAWgegBQgdABgWgWg");
	this.shape.setTransform(135.5,48.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ag0A0QgVgVgBgfQABgeAVgVQAXgXAdAAQAfAAAVAXQAXAVAAAeQAAAfgXAVQgVAXgfAAQgdAAgXgXg");
	this.shape_1.setTransform(140.5,52.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AmZIfIAAhsQCIAhAhgTQAXgTAAgbIAAgdInsAAIAACpIhiAAIAAo1QAFgXASAAIKDAAQAXAEAAATIAAHTQAAA4gvAgQgoAZhJAAQg4AAhLgPgArFEdIHsAAIAAhQInsAAgArFAzIAABBIHsAAIAAhBQABgKgFAAIneAAQgKAFAAAFgAIYIRIAAhsQA4AYAdAAQA8ANAdgSQAJgOAAgTIAAlWIkjAAIAAhhIEjAAIAAh5IjKAAIAAhjIHoAAIAABjIi3AAIAAB5IEsAAIAABhIksAAIAAFyQAABGg4AhQgbARgxAAQg8AAhegagABDIpIAAwnQAFgJAAgFIAKAAID9AAIBGAqIhQEfQgOBBATATQA4BZATBJQAcB6g4BLQgYAggqAPQgvANhjgSIAAEHgAClmpIAAJfQBCAcAhgFQAcgEAFgOQAvhLh1jfQgKgTAFghIBGkLIh5AAgAyCHrQCIkPAqiuIBiAcQgzDFiDELgAOPC7IBZgvQBQB+BLDFIhaAqQhTjOhHhwgAEuGqQCHhxBMitIBdAzQhnDFiNB1QgggzgcgcgAyCiVIAzhZQBVAvBwBLIg9BZQhwhZhLghgAtkhmIAAhdIFbAAIAAg+IkjAAIAAhUIEjAAIAAhCIlNAAIAAhUIFNAAIAAhCIBnAAIAABCIFRAAIAABUIlRAAIAABCIEsAAIAABUIksAAIAAA+IFyAAIAABdgAFvkrQCNg9BLgvQBPguBahoIBGA0QgKAFAAAFQCWBwC8BLIgzBZQjAhQigiDQhLBQg5AgQhKA5hxAugAx0nBIA4hZQBZA0BwBZIg8BUQh6hehLgqg");
	this.shape_2.setTransform(-3,-3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AmZIfIAAhsQCIAhAhgTQAYgTgBgbIAAgdInsAAIAACpIhjAAIAAo1QAFgXATAAIKCAAQAYAEAAATIAAHTQAAA4gvAgQgoAZhJAAQg4AAhLgPgArFEdIHsAAIAAhQInsAAgArFAzIAABBIHsAAIAAhBQAAgKgEAAInfAAQgJAFAAAFgAIYIRIAAhsQA4AYAcAAQA+ANAcgSQAJgOAAgTIAAlWIkjAAIAAhhIEjAAIAAh5IjKAAIAAhjIHoAAIAABjIi3AAIAAB5IEsAAIAABhIksAAIAAFyQAABGg5AhQgaARgxAAQg8AAhegagABDIpIAAwnQAFgJAAgFIAJAAID+AAIBGAqIhQEfQgOBBATATQA4BZATBJQAcB6g4BLQgXAggrAPQgvANhigSIAAEHgACmmpIAAJfQBCAcAggFQAcgEAFgOQAvhLh1jfQgKgTAFghIBGkLIh6AAgAyCHrQCIkPAqiuIBjAcQg0DFiEELgAOPC7IBZgvQBQB+BLDFIhZAqQhUjOhHhwgAEuGqQCHhxBLitIBfAzQhoDFiMB1QghgzgcgcgAyCiVIA0hZQBUAvBwBLIg8BZQhxhZhLghgAtkhmIAAhdIFbAAIAAg+IkjAAIAAhUIEjAAIAAhCIlNAAIAAhUIFNAAIAAhCIBnAAIAABCIFRAAIAABUIlRAAIAABCIEsAAIAABUIksAAIAAA+IFyAAIAABdgAFvkrQCNg9BLgvQBQguBZhoIBGA0QgJAFAAAFQCWBwC7BLIg0BZQi/hQigiDQhLBQg4AgQhMA5hwAugAx0nBIA4hZQBaA0BvBZIg8BUQh6hehLgqg");
	this.shape_3.setTransform(3,3);

	// Layer 1
	this.btnBG = new lib.btnBG2_1();

	this.addChild(this.btnBG,this.shape_3,this.shape_2,this.shape_1,this.shape,this.btnTop);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-180,-90,360,180);


(lib.theGameOver = function() {
	this.initialize();

	// Layer 2
	this.btnPlayagain = new lib.btnPlayAgain();
	this.btnPlayagain.setTransform(963,442.1);

	this.textCorrectRatio = new cjs.Text("98.25%", "60px 'Arial'", "#FFFFFF");
	this.textCorrectRatio.name = "textCorrectRatio";
	this.textCorrectRatio.lineHeight = 62;
	this.textCorrectRatio.lineWidth = 269;
	this.textCorrectRatio.setTransform(477.4,460.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGCEQIAAhkIjyAAIAAguIDyAAIAAgtIhwALQgDgVgGgWIAygIQAggaAkgnQgyg3g2geQANgUAJgVQAJADAcATQAXgaAQgeIjdAAIAAguIDoAAIAAgpIAyAAIAAApIDfAAIAAAuIjmAAQgXAkgkAzIAnAkQAng1AUgyIApATQgeBJhmBrIBkgOQgQgdgHgKIAngRQAsA9AWA+IgpAPIgQglIhEAIIAAA0IDsAAIAAAuIjsAAIAABkgAjPDtIAAj8QgGAEgDAHIgegaIAADwQgCARgNAAIhMAAIAAAZIguAAIAAjrIgNAbIgygOQA+hvAGh0Ig2AAIAAgxIC4AAIAAAxIhSAAQgHA7gQBKIBcAAQAPAAAAAOIAAAHQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQBEg4ArhSIg3AAQgEgCAAAHIAAA5IguAAIAAhiQAAgJAKAAIBxAAQAIgTAGgUIAtAQQgGAOgDAJIB1AAIApAVQAAApgUA4IgsgNQALguAAgHQAAgHgGAAIh0AAQgVAsgrA5IBUAAQAUgpAKgeIApAVQgFAOgLAdQgCAFgDACIBjAAIgFAwIhpAAIAAAwIBmAAIAAAtIhmAAIAAA2IBmAAIAAAvIhmAAIAAAwIBvAAIAAAvIkVAAIgDABQgQAAAAgUgAifDJQAAAHAHABIBSAAIAAgwIhZAAgAlRgLIAADAIAlAAQAJAAAAgJIAAi3QAAgHgJAAIgeAAQgHAAAAAHgAifByIBZAAIAAg2IhZAAgAifgbIAAAqIBZAAIAAgwIhSAAQgHAAAAAGgAv/D8IAAgzIBMAAIAAk4IA0AAIAAE4IB9AAIAAmKIjmAAIAAgyIHqAAIAAAyIjPAAIAACgIDGAAIAAAwIjGAAIAAC6IDjAAIAAAzgACQA/QBlg8AvguIAiAjQg0AuhiA9gAPABgIAAhAIBAAAIAABAgAIRgGIAZglQA3AjA+A3IgeAiQhEg8gsgbgACsiGIAigeQAiAhApA2IgkAeQgsg7gdgcgAPAgyIAAg/IBAAAIAAA/gAIIhdQA+gxAbglIAgAfQgiArg3Asg");
	this.shape.setTransform(347.3,496.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(317.9,317.7);

	this.textQCount = new cjs.Text("50/50", "60px 'Arial'", "#FFFFFF");
	this.textQCount.name = "textQCount";
	this.textQCount.lineHeight = 62;
	this.textQCount.lineWidth = 267;
	this.textQCount.setTransform(477.4,282.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ADED6IABgsIisAAIALAjQhEAXhqAGIgDgtQBRgJA2gKIg7AAQgGAAAAgGIAAjLQgaAJgdAJIgXgpQBCgVArgWIg2AAIgDANIgsgGIAPhrQACgKAJAAICFAAIAAgZIiOAAIAAgoICOAAIAAgXIAtAAIAAAXIBpAAIAAgcIAuAAIAAAcICAAAQAEgDAGAHQADACACAHIAABpIgtAAIAAgLIhiAAIAAAbICcAAQAMACAAAJQgCA5gCAUQgFATgJACQgQAKgigDIAADCQAAAGgIAAIhRAAICZATIgIAwgAgYCjQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIEcAAIADgDIAAgfIkiAAgAgYBdIEiAAIAAgeIkiAAgAgYAYIEiAAIAAgYIkiAAgADWgnIBcAAQAIAAAAAGIAEAAIAOAAQAEgCAAgCQADgHAAgVQAAgEgHAAIh2AAgAgHgnICvAAIAAgeIiPAAQgZAVgHAJgAAvhuIB5AAIAAgbIhuAAIgLAbgAhViFIgFAXIBaAAIAGgOQAFgHACgGIhbAAIgDgBQgEAAAAAFgADWizIBiAAIAAgUQAAgFgHAAIhbAAgAA/izIBpAAIAAgZIhpAAgAL0D+IAAg0QAgAMANACIAdAEQAMAAAKgJQADgGAAgKIAAiSIjmAAIAAgxIDmAAIAAg4IjmAAIAAgvICTAAIAAhCIiCAAIAAgxICCAAIAAg2IAxAAIAAA2ICCAAIAAAxIiCAAIAABCICQAAIAAAvIg7AAIAAA4IA3AAIAAAxIg3AAIAACgQAAAigbAQQgQAKgaAAQggAAgxgPgAwyEIIAAiyIjvAAIAAgzIDvAAIAAjvIjbAAIAAgyIHqAAIAAAyIjbAAIAADvIDtAAIAAAzIjtAAIAACygAnWDzIAAg+QBuAlAkgQQAagLAVgiQAVgnADhTQAGi9gGgNQAAgCgIAAIjUAAQgZBKgeAwIgvgSQA9hiAJhoIAyAEIgGAsIDxAAQAJAAADABQAFAAABAIQAHAQgJDtQgHBmgWAwQgUArgqARQgYAKgiAAQgwAAhFgUgAG7DzIAAncQABgQAQAAIB+AAQAUAAgBAQIAAGhQgCASgRAAIhcAAIAAApgAHuCYIAyAAQALgCAAgJIAAiMIg9AAgAHujBIAACSIA9AAIAAiSQAAgGgJAAIgtAAQgHAAAAAGgArjC/IBEgkIAAjnIg7AAIAAgyIA7AAIAAiJIAzAAIAACJIAxAAIAAAyIgxAAIAADGQAbgSAUgUIAgAlQg5A2huA4gAKSBbIArgaQAgArAbA+IguAXQgdhCgbgkgAoKBUQCPgjBNgkIAVAuQhbAtiLAdgATiBdIAAhAIBAAAIAABAgAu1gOQBBheAWg9IAuAUQgcBHg+BXgA0FiOIArgbQAtA9ApBbIguAXQgrhigogygAnjgqIAAgyICsAAIAAAygATig1IAAhAIBAAAIAABAg");
	this.shape_2.setTransform(317.6,406.9);

	this.textAverageTime = new cjs.Text("15.53s", "60px 'Arial'", "#FFFFFF");
	this.textAverageTime.name = "textAverageTime";
	this.textAverageTime.lineHeight = 62;
	this.textAverageTime.lineWidth = 272;
	this.textAverageTime.setTransform(477.4,371.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00FFFF").ss(2,1,1).p("AZpCiQB6ACBNioQABgFAAgEQgBgFgDgDIh7h+QgEgEgGAAQgFgBgFAEQgEADgCAFQgTBMggACQgegBgtgjQg4gthCAAQiJgChSDSQgCAGACAFQACAFAFADICFBSQAEACAFAAQAFAAADgDQAEgDABgFQAJgfARgXIAAAAQANgSANgCQAYACAzAiIAAAAQA+ArBFAAgAIZn2QADA8AZBoQjTgPjagKQgGAAgEADQgFAEgBAFIgdCkQgBAFABAEQACAEAEACQADADAEAAQAQABAOABQhCEkgFFCQAAAGAEAEQAEAEAGABIC6ATQAEAAAEgCQAEgBACgEQADgDAAgFQAFivAXioQAMgCANgBQAfAAASAMQASATAAAzQgBBOg2B3QgCAEABAFQABAEADAEQAEADAFABICzAbQAEAAAFgCQAEgCACgEQAMgXAJgXIB7BwQADADAEABQAEABAEgCQAEgBADgDQA7hFA6hCQA8BlA+BQQADAEAGACQAFABAFgDICvhZQADgCADgEQACgEAAgEQAAgEgDgEQheiKhCh3QAwg3Ayg1QAEgFAAgGQAAgGgFgEIh+h4QgFgFgGAAQgGABgEAEQgZAZgYAbQgVgygSgyQBeAJBhAIQAGAAAFgEQAEgEABgGIANipQAAgHgEgEQgEgFgGgBQgVgCgXgCIBJhJQAEgEABgGQAAgGgEgFQhChQhig2QgFgDgFABQgFABgEAEIhsBxQgDADAAAFQgBAEABAEQACAEAEADQA2AnAtAnQg6gFg6gFQghhzgPhbQgBgGgFgEQgFgDgFAAIiuAUQgGABgEAFQgEAEABAGgALcCoQhGBPhGBVQAQg/ABhDIAAguQgChqg+g0Qg0gvhuAAQgZAAgYABQAKgzAKgzQCDALCIAKQAyCYA9CRgAwhAGICZhHIgCAKQgBAEACAEQABAEAEACQADADAFAAQDpASD/AUQlfAJk/AmQgHABgDAFQgEAFAAAGIATC3QABAGAFAEQAFAEAGgBQAzgFA1gGQgaBogQBvQgBAGAEAEQADAFAGACIDEAqQAEABAEgCQAEgBADgEQACgDABgEQAWiXApiDQA9gEA/gEQgIArgBAmIAAAAQAABtA7A7QAAAAABAAQA5A2BoAAIArAAQA/gDCqgoQAGgBADgFQADgFgBgGIgii4QgBgEgCgDQgDgDgEgBQgEgCgEABQiiAqguAAQgOAAgGgIQgBAAAAAAQgGgJAAgVQAIgfAJgcQBsgDBsAAQAFAAADgCQAEgDACgDQACgEgBgFIgRi3QgBgFgEgEQgFgCgFAAQhJAAhIABQAAgCAAgBIAGhNQACABADAAIC4AWQAFABAEgDQAFgDACgFQAoiBADhNQAAAAAAgBQgFhfhNgvQgBAAgBgBQhGgih9AAIgBAAQhcAChXAIQghgygUg1QgCgEgDgDQgDgCgEgBQgEAAgEABIjABQQgGACgCAGQgDAFACAGQAKAYALAYQhxAVhoAgQgDgNgCgNQgBgFgEgDQgDgDgEgBQgFgBgEACIisBIQgFACgDAEQgDAFACAFQAjCrBACEQADAFAGACQAGACAFgDgA2LCiQB6ACBNioQABgFAAgEQgBgFgDgDIh7h+QgEgEgGAAQgFgBgFAEQgEADgCAFQgTBMggACQgegBgtgjQg4gthCAAQiJgChSDSQgCAGACAFQACAFAFADICFBSQAEACAFAAQAFAAADgDQAEgDABgFQAJgfARgXIAAAAQANgSANgCQAYACAzAiIAAAAQA+ArBFAAgAuOigQAMgEAMgDIgIAuQgIgTgIgUgAlpkDQAAAAABAAQBkAAACAbQgGApgTA5IADgtQABgHgEgEQgEgFgGgBQisgQi0gMQCHgYCVgLg");
	this.shape_3.setTransform(640,200);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("ANRFQQgCgEgFgCQgEgCgFABQgFABgDAEIh5CKIhshiQBThlBRhdQADgDAAgFQABgEgCgEQhAiXg0ihQgCgEgDgDQgEgDgEAAIkigXQgFgBgFAEQgFADgBAGIgbCHQgBAEACAEQACAFAEACQAEADAFgBQAhgCAiAAQBgAAAuAlQA0AwACBbIAAAtQgCBwgwBlIiVgWQAyhygBhNQABhGgdgYIgCgBQgZgRgqAAIgCAAQgVACgSAEQgFAAgDAEQgDAEgBAEQgWCngHCuIidgQQAGlABDkkQACgEgCgEQgCgEgDgDQgEgCgEgBIgegBIAYiHQDdALDWAQQAFAAAEgCQAEgDACgEQACgFgBgFQgZhngFg+ICRgQQAPBbAiByQABAFAEADQAEADAEAAICqAPQAFABAEgDQAEgCACgFQACgEgBgFQgBgEgDgEQg1gyhEgzIBYhcQBQAuA5BBIhXBWQgEAEAAAGQAAAGAEAEQAEAFAGABIA9AGIgKCMIjHgSQgFAAgEADQgFADgBAEQgCAFACAFQAZBIAfBHQACAFAEACQAFADAFgBQAFgBAEgEQAagcAbgcIBqBkQgxA0gvA2QgDAEgBAFQgBAEADAEQBBB2BcCJIiUBMQg+hSg9hogAltHtQhbAAgyguIAAABQgyg0AAheIAAgBQABgrAKgzQABgEgCgFQgCgEgEgDQgEgCgEAAIiaAKQgFAAgDADQgEADgBAEQgpCCgXCXIiogkQARhxAchqQABgFgCgFQgCgEgFgDQgEgCgFAAIhtAMIgRiZQGkgwHagBIAOCZQhpAAhqADQgFAAgDADQgEADgCAEQgLAjgKAmIAAAEQAAAjAMAPIAAgBQAMAVAhAAQAtAACagnIAdCbQibAjg6ADgAX3BfIAAgBQg+gqgeABQgagBgYAiIAAgBQgPAUgKAZIhqhBQBHiwBzgCQA4AAAvAmQA4AsAmgBQAvADAahOIBiBjQhCCKhmACQg7AAg2glgA39BfIAAgBQg+gqgeABQgagBgZAiIAAgBQgOAUgKAZIhqhBQBHiwBzgCQA4AAAvAmQA4AsAmgBQAvADAahOIBhBjQhBCKhlACQg8AAg2glgAtqhDIAVh2QABgFgDgFQgCgFgFgCQgFgCgFACIg+ASQgEABgDADQgDADgBAFQgBAEACAEIAdBHIiOBDQg3h4ghiXICQg8IAGAZQABAEADADQADADAEABQAEABAEgBQB3glCBgYQAFAAADgEQAEgDAAgFQABgEgCgFQgMgYgLgaIClhEQAWA2AiAxQACADAEACQADACAEgBQBbgIBggCQB0AABCAfQA/AnAEBNIAAABQgDBGgkBzIiYgSQAahJAHgyIAAgCQADg5iJAAIgBAAQjUAPi6ArQgFABgDAFQgEAEABAGQAAAFAEAEQAEAEAFAAQDnAPDZAUIgMCRQkhgYkGgVg");
	this.shape_4.setTransform(640.1,200);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("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");
	this.shape_5.setTransform(640,200);

	// bg
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s("#009999").ss(5,1,1).rr(-550,-270,1100,540,40);
	this.shape_6.setTransform(640,360);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.textAverageTime,this.shape_2,this.textQCount,this.shape_1,this.shape,this.textCorrectRatio,this.btnPlayagain);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(87.5,87.5,1105,545);


(lib.theWelcome = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(97.5,24);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#9933FF","#99CCFF"],[0,1],-80.1,0,80.1,0).s().p("AEyInQhlgYiCguQg+gVhDgbQh/gvhLgiIAABLQAACRh8AAQhNAAikjAQizjcAAghQABgGABgCIgCgMQABgVA9gPQBugVBvghIAAiKIgcAFQhuAAhDggQg4gUAAgcQgBgcAkgWQAygjAmAAIAiAFQAOAAA+gnIAZgOQgBgXgHgVQgGgRgHgPQgUgkglgdQgrgkAAgZQAAgtBoAAIAgABQBKAGBEAgIATAJQBYArAABKIAAArQAxAIAtAWQBHAoAAAqQAABBh1AAIgwAMIAABxIBEgcQAngRAQAAQAkAAAAAqQAABUifBZIAACyIFLA+QC6AhAfAAIAOgBQAjgHAAgqIAAoEQABhVhDhAIj7AbQhfAAg7gcQgzgWAAgZQAAgZAhgSQAtggAgAAIAjAFQAbAAB/gtQDMhLDZAAQBTAABFAZQATAGARAJQBJApAAAuQABBAhuAEIgOAAIhrAMQBCBHAADBIAAIOQAACciRAAQhKAAhvgagAooFCQAjAAAAgjIAAhOQgzAIgtAAQgwAAgpgPQB8B4AaAAg");
	this.shape_1.setTransform(107.3,264);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#9933FF","#99CCFF"],[0,1],-25.1,0,25.1,0).s().p("AiuHfIgHtPQAAhTgsgnQgZgXAAgKQAAgzBMAAQBdAABSA0QA5AlAACcIAAArQAuALBRBOQBCBDAAA+QAABNhMAAQhFABgfgyQgHgMgIgLIAGIRQAABtiCAAQhugBAAhfg");
	this.shape_2.setTransform(67.4,131);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#9933FF","#99CCFF"],[0,1],-9.9,0,10,0).s().p("Ag5DxQgpgpAAgzQAAgfAPg9QAThXAAhsQAAgfgNg7QAAgtBEAAQApAAAiBQQAhBIAAEEQAABNgYAgQgaAbgggBQgrABgfgig");
	this.shape_3.setTransform(37.2,121.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#9933FF","#99CCFF"],[0,1],-55,0,55,0).s().p("ADrH2QjLjYhhhOQgaA7gcA5QiCD+iiAAQiJAAgBiDQAAgvAlgOIAkgMQAwgRBUicQg+gJgugRQhTgdABgnQgBgZAvgXQAmgQAuAAIAXADIAgABQAQAABAgNQAghYAQhoIgZACQhpAAg6gfQgxghgBguQABggAbgWQAegPAhAAQAfAKAeAAQAkAAA8gVQgHhAg7hAQgfggABgPQgBg8BaAAQBVAABlBGQAxAkATAyQBAgPAlAAQCZAAB6BAQBiAyAABQQAABChpCsQAcAHAcAIQAwATAVAWQAUATgBAVQABAVgUAOQglAdhzABQhYAChaAJIAgASQEICcAiBQQAGANAAALQAAAagGAUQgZBeiGAAQg8AAhMhQgAAqjxQgHBsgZBrQBAgMA1gCQARghAhg1QAyhSAAghQAAgigxAAQgbAAhtAig");
	this.shape_4.setTransform(133.1,130.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AEvTGQhlgYiCgtQg+gWhDgbQh/gvhLgiIAABLQAACRh8AAQhOAAiji/QizjdAAghQAAgGACgBIgCgNQAAgVA+gPQBugVBughIAAiMIgbAFQhuAAhDgfQg5gVAAgcQAAgbAkgXQAygjAmAAIAiAFQAOAAA+gnIAZgNQgBgXgHgWQgGgQgHgQQgVgkgkgcQgrglAAgZQAAgtBoAAIAfABQBLAGBEAgIATAJQBYArAABKIAAArQAxAJAtAWQBHAnAAAqQAABBh2AAIgvAMIAABxIBEgbQAngSAQAAQAkAAAAAqQAABXifBZIAACxIFLA/QC5AgAgAAIAOgBQAjgHAAgqIAAoGQAAhUhDhAIj7AaQheAAg8gbQgygXAAgZQAAgZAggSQAuggAgAAIAjAFQAbAAB/gtQDMhLDZAAQBTAABFAZQASAHARAIQBKApAAAuQAABAhtAEIgOAAIhrAMQBBBHAADBIAAIQQAACciQAAQhLAAhugagAorPhQAiAAAAgjIAAhOQgyAIguAAQgvAAgpgPQB8B4AaAAgAHpiiQjLjZhjhNQgaA7gbA5QiDD+igAAQiJAAAAiDQAAgvAkgPIAkgLQAwgRBVidQg/gIgugRQhSgeAAgmQAAgZAugXQAmgQAvAAIAWACIAhACQAPAABBgNQAdhaAQhoIgZACQhnAAg6ggQgxggAAguQAAghAbgVQAfgPAgAAQAfAKAeAAQAkAAA6gVQgHhAg4hAQgfggAAgPQAAg8BXAAQBWAABkBGQAzAkATAyQBAgPAlAAQCZAAB6BAQBiAyAABQQAABChoCrQAbAIAcAKQAwATAWAWQATATAAAVQAAAVgTAOQgmAchzACQhYAChaAJIAgASQEICcAjBQQAFANAAALQAAAZgFAVQgZBeiHAAQg8AAhMhQgAEpuLQgIBsgZBrQBAgMA1gCQASghAgg1QAyhTAAggQAAgigwAAQgcAAhsAigApAixIgHtSQAAhTgsgnQgZgWAAgLQAAgyBMAAQBdAABUAzQA5AlAACdIAAAqQAuALBRBOQBCBDAAA/QAABPhMAAQhFAAgfg0QgHgMgIgLIAGITQAABtiEAAQhuAAAAhfgAr6n+QgpgpAAgzQAAggAQg9QAThZAAhrQAAgfgOg8QAAgtBFAAQArAAAiBQQAhBIAAEHQAABMgYAgQgaAbghAAQgtAAgfghg");
	this.shape_5.setTransform(114.6,206.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FF0000","#FFFF00"],[0,1],-115.5,0,115.6,0).s().p("ADTPzQiTh1AAj1QAAiKEErnQAohsAAgdQAAg8hQAAQg5AAiKBFIigBOQhEEliOFPQk+MbjgAAQiDAAhtiCQhbhpAAg5QAAhCA1gMQDmgUDtpOQAvh2AohrQkSBxhmAAQhbAAhDhFQg+g8AAhDQAAhBBUhVQBVhIA8AAQASAAAWAJQAbANANAAQAmAAB/g+QCAg/BwgwQAaiVAAiMQAAhEguhiQgWgtAAgdQAAhbBsAAQB/AACJBsQBgBLAACUQAAA+gGA/QD4hTCIAAQCQAACUB7QCAB1AACTQAAAQgLAoQAhAjAoBeQEqKmAADVQAADIiFCCQiHBzjLAAQk9AAiciCgAIKHwQgjB6AAAfQAACBDFAAQCrAAAAixQAAlKhQlaQgQhDgKgyQhDDdigHTg");
	this.shape_6.setTransform(335.2,187.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FF0000","#FFFF00"],[0,1],-115.5,0,115.6,0).s().p("ADTPzQiTh1AAj1QAAiKEErnQAohsAAgdQAAg8hQAAQg5AAiKBFIigBOQhEEliOFPQk+MbjgAAQiDAAhtiCQhbhpAAg5QAAhCA1gMQDmgUDtpOQAvh2AohrQkSBxhmAAQhbAAhDhFQg+g8AAhDQAAhBBUhVQBVhIA8AAQASAAAWAJQAbANANAAQAmAAB/g+QCAg/BwgwQAaiVAAiMQAAhEguhiQgWgtAAgdQAAhbBsAAQB/AACJBsQBgBLAACUQAAA+gGA/QD4hTCIAAQCQAACUB7QCAB1AACTQAAAQgLAoQAhAjAoBeQEqKmAADVQAADIiFCCQiHBzjLAAQk9AAiciCgAIKHwQgjB6AAAfQAACBDFAAQCrAAAAixQAAlKhQlaIgah1QhDDdigHTg");
	this.shape_7.setTransform(591.2,187.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FF0000","#FFFF00"],[0,1],-41.6,0,41.6,0).s().p("AkMFKQhhhPAAieIAAi6QAAg7gegpQgTgbgBgZQAAhQBGAAQBXAABkBIQAtAhATAyIA7gtQBOgyAAhGQADhDA6AAQAqAABeBAQBnBQABBBQAAAthQAuQAdAoArBDQBQCKAABXQgBBMhLAqQhXA3jhAAQjVAAhThJgACqg+QiYA8hnAeIAABBQAAA9BxAAQBOAAAygiQAvgoABg0QAAg8gLgmQgJAGgOACg");
	this.shape_8.setTransform(918.3,183.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FF0000","#FFFF00"],[0,1],-112.6,0,112.6,0).s().p("AmQPiQh1hDg/gyQjgCxhHAAQj6AAAAkNQABhQBMgUIAhgGQBbgUEQjIQBchBAogvQgmgRgKgkQiTBHigAAQjcAAAAirQAAh/C7hbQBAgYgBgZQAAgShLgeQiHg3AAgwQAAhFBQAAQC7AACvBBQgMgkABgUQAAhDBkAAQBwAABIA0QBMA/AABfIAAFLQA7AbAeA5IAAqeQkbAjkBAAQleAAABjzQAAiHCwh4QDFh6FQgmQA8AAAAgiQAAgLgHgUQgNgMAAgPQAAgeAYgUQAhgXBKAAQESAACmBbQBhA5ABBIQAABgiXAEIgFAAQAIAXAEAWQCqgiBdAAQEVAADLBkQCNBBAABfQgBB6izAAQlhAAk3AZQAEA6AABDIAAJqQDMAjFJCvQFTC0AADPQgBDpjAAAQhwAAhrh9QkCkHjKipIAAENQgBFajSAAQiMAAkvi/gAljKqQhSBLhHA5QDpA8AeAAQBGAAAAhQIAAkwQgxBLiDB1gAt0BNQgBAlAyAAQBpAACigdIAEhgQlBArABAtgAqysLQilBJAAA+QAAAoA+AAQDEAAGDhoIATgFQgGhJgPhBQlLASiTA2g");
	this.shape_9.setTransform(847.3,188.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FF0000","#FFFF00"],[0,1],-117,0,117,0).s().p("AvSP5Qi/jxABjqQAAh2B+ilQBdhrAAhGQAAgShLg2QiQhrAAhmQAAh8CQijQB0hzAAg4QgBgfhAgzQilh4AAhGQAAi+C0AAQCJAADICwQCHB3AAB9QAAA+hQBKIAIIZQAHARADAPQAGgGAIgEQA8ggBBgBQAHABAYAFQAYAFAQAAQAxAAFOiMIAJiwQhXANhBABQjOAAhyg9Qhug2AAhMQgBgsBBgrQAyghBCAAQAKAAAUAFQAWAGASAAQAvgBEtiCQgIhXglhTQgrhSAAgwQAAhtCTAAQCrAABrBSQBdBIAQBsQAcgDAZAAQD4AADNBrQCKBPAABfQAAB9kEAEQjGAQjFAnIgJCTQAYgCAUAAQD+AADVBrQCPBOAABiQAACFkOACQkyAWkuBHQgUAlggAwIj0EzQhABJAABcQAAArCJAAQCRAAF8jZQhXi/g3hQQgrgoAAgZQAAgyA9ABQCkgBFIEiQDkDYAADDQgBD5izAAQiuAAhSjDIgUg0QglAYgoAVQlFCvmaAAQmEAAAAk2QAAjSDmkxQAKgMAIgVQiWgHheguQgxgZgZgYIAIJpQAACyg1BwQgvBbhGAAQiIAAh8iZgArmESQiwCvAABdQAACdB4AAQBaAAAAi0QACiTAIiFQgXASgVARgArRnEQh1BOAAAuQAAAsBSA9QAqAdAmAcQAKi0ASiZQgiAWgnAZg");
	this.shape_10.setTransform(1104.7,187.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("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");
	this.shape_11.setTransform(729.7,205.2);

	this.btnSelectAll = new lib.btnSelectAll();
	this.btnSelectAll.setTransform(427.8,438.2,0.6,0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("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");
	this.shape_12.setTransform(144.6,438.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AFyCIQggAxgzAkIgggcQA3giAng/QghhNgCgiIgGALIgigKIAABDQAAAFgFAAIhgAAIgNAXICJAAIAAAiIg3AAQgcAngWASIA9AVQgNASgLAOIhOgaIgtAPQgdAJgyACIgLgnQAWAAA4gIIgngOIgGgZQATgOALgKIg/AAIAAgiIBhAAIAPgXIhWAAQgEAAAAgFIAAhPQACgGACAAIBdAAIAAgRIhWAAQgFABAAgGIAAg2IgcAAIAAgiIAcAAIAAg3QAAgFAFgBIBWAAIAAgUIAoAAIAAAUIBUAAQAGABAAAFIAAA3IAeAAIAAAiIgeAAIAAA2QAAAGgGgBIhUAAIAAARIBeAAQAFAAAAAGIAAADQArhggChgIAoAAIgEA2IBvAAIAAAnIgbAAIAAAPQABBpguBkQAgA4AqAzIgkAUQg1hGgFgTgABoCNQgBAAAAABQAAAAAAABQAAAAAAABQAAAAABABIAtAMQAagPAWgbIhBAAQgMANgQANgAFdgOQAKAlALAeQAahGAAhaIAAgPIgzAAQgJAvANA9gACvAaIA8AAQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAIAAgZQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIg8AAgABLAAIAAAaIA8AAIAAgaIg8AAQAAAAAAAAQgBAAAAAAQAAAAABAAQAAAAAAAAgACvhSIAxAAIABgCIAAgYIgyAAgABThUQAAAAAAABQAAAAABAAQAAAAAAAAQABABAAAAIAyAAIAAgaIg0AAgACviOIAyAAIAAgaIgyAAgABTiOIA0AAIAAgaIg0AAgAnPDTQACgHAGgHQAehGgGhWIAmgCIACA3IAAAEQANAaAWAWIAAiBIhlAAIAAgjIDSAAIAAAjIhFAAIAAAvIBDAAIAAAlIhDAAIAABBQAiAMA0gCIDXAAIgLAoIi9AAQgpAAgegHQhGgIgtgzQgLArgNAegAh0CBIAPghQAkAOAtAfIgXAeQgrgegegMgAkACIQAtgMAhgcIAZAcQgvAkgoALgAjgBaQgEAAAAgGIAAjbQAAgBABgBQAAAAABgBQAAAAABAAQAAgBABAAIA6AAQAFgNACgNIACgFIhUAAIAAgiIDSAAIAAAiIhYAAIgKAfIBTAAQAFACAAACIAADbQAAAGgFAAgAi/A4IBvAAIACgBIAAgeIhxAAgAi/gHIBxAAIAAgjIhxAAgAi/hLIBxAAIAAgeIhxAAgAm4grQgEAAAAgGIAAibQACgFACABICpAAQAFABAAADIAACbQAAAGgFAAgAmWhNIBlAAIACgBIAAghIhnAAgAmWiQIBnAAIAAgeIhnAAg");
	this.shape_13.setTransform(630.9,436.9);

	this.btnQN5 = new lib.btnSelectQN();
	this.btnQN5.setTransform(1131,439.6,0.5,0.5);

	this.btnQN4 = new lib.btnSelectQN();
	this.btnQN4.setTransform(1033.7,439.6,0.5,0.5);

	this.btnQN3 = new lib.btnSelectQN();
	this.btnQN3.setTransform(936.5,439.6,0.5,0.5);

	this.btnQN2 = new lib.btnSelectQN();
	this.btnQN2.setTransform(839.2,439.6,0.5,0.5);

	this.btnQN1 = new lib.btnSelectQN();
	this.btnQN1.setTransform(742,439.6,0.5,0.5);

	this.btnStartGame = new lib.btnStartGame();
	this.btnStartGame.setTransform(882,592,1.6,1.6);
	new cjs.ButtonHelper(this.btnStartGame, 0, 1, 2, false, new lib.btnStartGame(), 3);

	this.btnS09 = new lib.btnNumberSelector();
	this.btnS09.setTransform(429.3,650,0.65,0.65);

	this.btnS08 = new lib.btnNumberSelector();
	this.btnS08.setTransform(309.3,650,0.65,0.65);

	this.btnS07 = new lib.btnNumberSelector();
	this.btnS07.setTransform(189.3,650,0.65,0.65);

	this.btnS06 = new lib.btnNumberSelector();
	this.btnS06.setTransform(69.3,650,0.65,0.65);

	this.btnS05 = new lib.btnNumberSelector();
	this.btnS05.setTransform(429.3,530,0.65,0.65);

	this.btnS04 = new lib.btnNumberSelector();
	this.btnS04.setTransform(309.3,530,0.65,0.65);

	this.btnS03 = new lib.btnNumberSelector();
	this.btnS03.setTransform(189.3,530,0.65,0.65);

	this.btnS02 = new lib.btnNumberSelector();
	this.btnS02.setTransform(69.3,530,0.65,0.65);

	// bg
	this.btnFullScreen = new lib.btnFullScreen();
	this.btnFullScreen.setTransform(1240,40,0.333,0.333);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#006600","#66FF99"],[0,1],0,360,0,-360).s().p("Ehj/A4QMAAAhwfMDH+AAAMAAABwfg");
	this.shape_14.setTransform(640,360);

	this.addChild(this.shape_14,this.btnFullScreen,this.btnS02,this.btnS03,this.btnS04,this.btnS05,this.btnS06,this.btnS07,this.btnS08,this.btnS09,this.btnStartGame,this.btnQN1,this.btnQN2,this.btnQN3,this.btnQN4,this.btnQN5,this.shape_13,this.shape_12,this.btnSelectAll,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.theGame = function() {
	this.initialize();

	// info
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEkCXQBRgcBLgbIgHiVIipgKIALhEQBOADBMAFIgBgSQg/ADhAAFIgGhAQCjgNC5AAIAFBAQhJAAhIADIACAXQBUAFBSAHIgGBFIidgKIAMDeIAKg2QBPAHBIAPIgFBDIibgYIACAVIhMAHIgCgpQg1AUhOAbgAtzC6IAShBQBCAMAtAPIgTBCIhugcgAxZDJQABhIAEhGQgegBgVgYQgRgTAAgjQAAhDATg0IA8AOQgRA0gCAuQAAAGADADQADAEAHABQAGhcANhYIBDAIQgKBPgHBSQAPgDAOgGIAMBHQgXAJgXAFQgEBNgCBPgAvtC6IAJg5IgeAFIgIhIIA0gHQANhFAOhBQgSAFgUAJIgZhKQARgGApgKIAWgFIAMgyIBHAPIgHAdIACAAQAoAAAYAWQAXAYAAAfIAAAJQAAAfgIAxIgIAqIAhgBIAHBIQhVAAhWAIIgOBQgAuKAvIAjgCQAKghAEgcQAHglAAgXQAAgHgHgEQgHgFgNAAIgBAAIgcCLgAL3B8QA7gKAzgQIAXBJQgyAUhAAIgARUCtQg6ATgqAAIgRAAQgnAAgUgWQgVgVAAgiQAHgoASglIgdADIgHhJQAzgFAygEIgGg2IhJgCIAHhLIA4ABIgEgkIBQgKIAGAxQAuADAuAEIgIBLIhKgGIAGAuIBUgCIAIBJQhHAAhFAFQgbAlgNAkQAAASAeAAQASAAASgFIgcgcIA0gvQA1AoAnBDIg1AxQgHgNgJgLgAnkDAIgKhRQAkAGAYAAQAQAAAIgMQALgMAAgbQAAgzgJgiQgLgpgQggIhLgGIAHBBIgwABIAEAiIAhgJIAWBFQgWALgYAIIAJBPIhVAJIgHhBIgtAJIgThJIA3gNIgGgyIgxAIIgIhLQAYgFAYgDQgCgdgEgaIBVgKIAGA4QAYgBAXAAIAMhGQB9AHBzAOIgIBQIhKgGIAIAaQAQArAABUQAABAgYAdQgeAigvAAQgnAAgZgFgACDCdIALhKQgOAMgZAAQgyAAgagoQgWgiAAg0QAAg9AggrQAkguA8AAQA5AAAlA2Ig9A0QgWgfgSAAQgWAAgMAfQgLAYAAAbQAAAQAGAKQAIARANAAQAaAAATghQAOgaAFgcIA/AcQgLBagMB5gAhrCdIALhKQgOAMgZAAQgyAAgagoQgWgiAAg0QAAg9AggrQAkguA8AAQA5AAAlA2Ig9A0QgWgfgSAAQgWAAgMAfQgLAYAAAbQAAAQAGAKQAIARANAAQAaAAATghQAOgaAFgcIA/AcQgLBagMB5gAJdB1QgkAAgSgUQgUgUAAgnQABgkAPguIBCAOQgEAJgCAIIA3gOIAWAwIhUAZQAFAFAKAAQAOAAA0gKIALBCQg0AJgTABgAEbA5QAogOAkgLIAAgBQgkgEglgBIAGg9QAeAAAeACIgBgKIBFgIQADANAEAxQAGBAAAATIhGAIIAAgLIg4AQgAL3AjQgRgVAAgVQAAgZAkgXIArgeQALgHAAgFQAAgIgRgGIg4gSIAcg2QAZABA+AbQApAWAAAeQAAAbgcATQgiAWgNALQgQAJAAAIQAAANBKARIgdA6Qg4gEg2gqg");
	this.shape.setTransform(592.4,30.9);

	this.ooxx = new lib.ooxx();
	this.ooxx.setTransform(360,360);

	this.theInfoPanel = new lib.theInfoPanel();
	this.theInfoPanel.setTransform(651,658.9,1,1,0,0,0,634.5,44.6);

	// QNA
	this.btnNumClear = new lib.btnWord();
	this.btnNumClear.setTransform(1090,630);

	this.btnNum0 = new lib.btnNumber();
	this.btnNum0.setTransform(820,630);

	this.btnNum9 = new lib.btnNumber();
	this.btnNum9.setTransform(1180,450);

	this.btnNum8 = new lib.btnNumber();
	this.btnNum8.setTransform(1000,450);

	this.btnNum7 = new lib.btnNumber();
	this.btnNum7.setTransform(820,450);

	this.btnNum6 = new lib.btnNumber();
	this.btnNum6.setTransform(1180,270);

	this.btnNum5 = new lib.btnNumber();
	this.btnNum5.setTransform(1000,270);

	this.btnNum4 = new lib.btnNumber();
	this.btnNum4.setTransform(820,270);

	this.btnNum3 = new lib.btnNumber();
	this.btnNum3.setTransform(1180,90);

	this.btnNum2 = new lib.btnNumber();
	this.btnNum2.setTransform(1000,90);

	this.btnNum1 = new lib.btnNumber();
	this.btnNum1.setTransform(820,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADOGnIjOlQIjNFQQgQAagZAAQgWAAgTgRQgQgPAAgWQAAgNAHgPIDsl8IjZlgQgKgQAAgPQAAgUATgQQAQgQAUAAQAeAAAOAaIC8E0IC8k0QAPgaAeAAQAUAAARARQASAPAAAUQAAAPgKAQIjZFgIDsF8QAHAPAAANQAAAWgRAQQgSAQgWAAQgZAAgQgag");
	this.shape_1.setTransform(190.4,257.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ADOGnIjOlQIjNFQQgQAagZAAQgWAAgTgRQgQgPAAgWQAAgNAHgPIDsl8IjZlgQgKgQAAgPQAAgUATgQQAQgQAVAAQAdAAAPAaIC7E0IC9k0QAOgaAdAAQAVAAASARQARAPAAAUQAAAPgKAQIjZFgIDsF8QAHAPAAANQAAAWgSAQQgRAQgWAAQgZAAgQgag");
	this.shape_2.setTransform(195.4,262.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkNDtQg1AAAAg2QAAg1A1AAIIcAAQA0AAAAA1QAAA2g0AAgAkNiCQg1AAAAg2QAAg0A1AAIIcAAQA0AAAAA0QAAA2g0AAg");
	this.shape_3.setTransform(395.9,257.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AkODtQg0AAAAg2QAAg1A0AAIIdAAQA0AAAAA1QAAA2g0AAgAkOiCQg0AAAAg2QAAg0A0AAIIdAAQA0AAAAA0QAAA2g0AAg");
	this.shape_4.setTransform(400.9,262.5);

	this.aNumB = new lib.oneNumberInQuestion();
	this.aNumB.setTransform(599.8,260,1,1,0,0,0,2.2,1.9);

	this.aNumA = new lib.oneNumberInQuestion();
	this.aNumA.setTransform(502.1,260,1,1,0,0,0,2.2,1.9);

	this.qNumB = new lib.oneNumberInQuestion();
	this.qNumB.setTransform(294.7,260,1,1,0,0,0,2.2,1.9);

	this.qNumA = new lib.oneNumberInQuestion();
	this.qNumA.setTransform(91,260,1,1,0,0,0,2.2,1.9);

	// bg
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("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");
	this.shape_5.setTransform(97.5,24);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("EgrvA4QMAAAhwfMBXeAAAMAAABwfg");
	this.shape_6.setTransform(1000,360);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#000066","#0000FF"],[0,1],363,0,-363,0).s().p("Eg4PAKKIAA0SMBwfAAAIAAUSg");
	this.shape_7.setTransform(360,655);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape_8.setTransform(640,360);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.qNumA,this.qNumB,this.aNumA,this.aNumB,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.btnNum1,this.btnNum2,this.btnNum3,this.btnNum4,this.btnNum5,this.btnNum6,this.btnNum7,this.btnNum8,this.btnNum9,this.btnNum0,this.btnNumClear,this.theInfoPanel,this.ooxx,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1280.1,720.1);


// stage content:
(lib.myFlash = function() {
	this.initialize();

	// theWelcome
	this.theWelcome = new lib.theWelcome();
	this.theWelcome.setTransform(640,360,1,1,0,0,0,640,360);

	// theGameOver
	this.theGameover = new lib.theGameOver();
	this.theGameover.setTransform(640,360,1,1,0,0,0,640,360);

	// theGame
	this.theGame = new lib.theGame();

	this.addChild(this.theGame,this.theGameover,this.theWelcome);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(640,360,1280.1,720.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;