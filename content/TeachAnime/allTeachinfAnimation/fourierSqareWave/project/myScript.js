var canvas, stage, exportRoot;

var mcArray=[];
var mcMax=6;

function init() {
	canvas = document.getElementById("canvas");
	//exportRoot = new lib.a05();

	stage = new createjs.Stage(canvas);
	
	stage.addChild(new lib.bg());

	for(var i=0;i<mcMax;i++){
		var mc=new lib.a01MC();
		mc.init2();
		mc.setNMax(i+1);
		mc.x=300;
		mc.y=120+160*i;
		stage.addChild(mc);
		
		mcArray.push(mc);
	}


	stage.update();


	//tick
	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", myshow);
	
}

function myshow(){

	for(var i=0;i<mcMax;i++){
		var mc=mcArray[i];
		mc.update();
	}
	stage.update();
}


//-------修改類別-------//
//lib.a01MC
var p=lib.a01MC.prototype;
//array
p.init2=function(){

	this.nMax=10;//10
	this.r0=50;
	this.omega0=0.02;
	this.rrArray=[];//半徑
	this.omegaArray=[];//omega
	this.thetaArray=[];//theta
	this.circleArray=[];//放 shape
	this.circleArray2=[];//放 shape
	this.yArray=[0];//plot wave
	this.colorArray=["#FFFFFF","#FFFF00","#00FFFF","#00FF00","#FF00FF","#FFFF00","#FFFF66","#66FFFF","#66FF66","#FF66FF"];

	for(var i=0;i<10;i++){
		var rr=this.r0/(2*i+1);
		var circle=new createjs.Shape();
		var circle2=new createjs.Shape();
		var omega=this.omega0*(2*i+1);
		var theta=0;
		circle.graphics.ss(2).s(this.colorArray[i]).dc(0,0,rr).mt(0,0).lt(rr,0);
		circle2.graphics.ss(2).s(this.colorArray[i]).dc(0,0,rr).mt(0,0).lt(rr,0);
		circle2.x=-120;

		this.rrArray.push(rr);
		this.thetaArray.push(theta);
		this.omegaArray.push(omega);
		this.circleArray.push(circle);
		this.circleArray2.push(circle2);

		this.addChild(circle);
		this.addChild(circle2);

	}

	//wave2
	this.wave2=new createjs.Shape();
	this.wave2.x=100;
	this.addChild(this.wave2);

	//wave
	this.wave=new createjs.Shape();
	this.wave.x=100;
	this.addChild(this.wave);
}
//update
p.update=function(){
	var len=this.nMax;
	for(var i=0;i<len;i++){
		//var		
		this.thetaArray[i]+=this.omegaArray[i];
			//circle
		var circle=this.circleArray[i];
		var circle2=this.circleArray2[i];
		circle.x=0;
		circle.y=0;
		
		for(var j=0;j<i;j++){
			circle.x+=this.rrArray[j]*Math.cos(this.thetaArray[j]);
			circle.y-=this.rrArray[j]*Math.sin(this.thetaArray[j]);
		}
		circle.rotation=-this.thetaArray[i]*180/Math.PI;
		circle2.rotation=-this.thetaArray[i]*180/Math.PI;
	}
	//wave
	var xx=this.circleArray[len-1].x+this.rrArray[len-1]*Math.cos(this.thetaArray[len-1]);
	var yy=this.circleArray[len-1].y-this.rrArray[len-1]*Math.sin(this.thetaArray[len-1]);
	this.yArray.push(yy);
	len=Math.min(700,this.yArray.length);
	if(this.yArray.length>700){this.yArray.shift();}

	//wave2
	var gg=this.wave2.graphics;
	var rrr=this.r0*Math.PI/4;
	gg.clear();
	gg.moveTo(0,this.yArray[len-1]>0?rrr:-rrr);
	gg.setStrokeStyle(2);
	gg.beginStroke("#aaaaaa");
	for(i=0;i<len;i++){
		gg.lineTo(i/2,this.yArray[len-i-1]>0?rrr:-rrr);
	}

	//wave
	gg=this.wave.graphics;
	gg.clear();
	gg.moveTo(-100+xx,this.yArray[len-1]);
	gg.setStrokeStyle(3);
	gg.beginStroke("#FFFFFF");
	gg.lineTo(0,this.yArray[len-1]);
	gg.setStrokeStyle(1.5);
	gg.beginStroke(this.colorArray[this.nMax-1]);
	for(i=0;i<len;i++){
		gg.lineTo(i/2,this.yArray[len-i-1]);
	}

}

//set nMax
p.setNMax=function(_nMax){
	this.nMax=_nMax;
	for (var i = 0; i < 10; i++) {
		this.circleArray[i].visible=(i<this.nMax);
		this.circleArray2[i].visible=(i==this.nMax-1);
	}

	//equation
	this.equation.tt1.text=2*this.nMax-1;
	this.equation.tt2.text=2*this.nMax-1;
}