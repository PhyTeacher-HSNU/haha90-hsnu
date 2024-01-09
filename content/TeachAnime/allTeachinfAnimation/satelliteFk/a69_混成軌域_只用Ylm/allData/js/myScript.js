'use strict';//嚴格模式
var fps=60;//動畫fps
var log=console.log;//簡化log

//------------老師作的萬用半成品(2020.12.01)-----------//

//-------------------開始做我的動畫-------------------//
//-------------------開始做我的動畫-------------------//
//-------------------開始做我的動畫-------------------//
//--SOP：A.宣告全域變數，B.定義init，C.定義tick，D.執行init--//


//A.宣告全域變數
var courseMD=2;//1軌域觀察，2軌域轉換，3混成軌域
var world01;
var world02;


var tt=0;
var dt=0.1;




//B.定義init
function init(){

	stats.visible=true;
	ground.visible=false;


	world01=new World01();
	scene.add(world01);	

	world02=new World02();
	scene.add(world02);	

		

	world2D.slShapeAB.value=50;
	world2D.slShapeCC.value=80;


	//xx
	world01.visible=false;
	world2D.control01.visible=false;
	

	
	setInterval(tick,1000/fps);
}


//C.定義tick                                                                                                                       
function tick(){


	tt+=dt;


	if(courseMD===1){
		world01.update();
	}else if(courseMD===2){
		world02.update();
	}
	



	
	
	//3D
	world3D.render();
	//2D
	world2D.stage.update();
}






//resize
MyJS.myResize();


























/**
 * 一、軌域觀察
 */
class World01 extends THREE.Object3D{

	
	/**
	 * 
	 */
	constructor(){
		super();
		let t=this;
		

		t.atom=new SHObject();
		t.atom.nComposition=1;
		t.atom.composition[0]=1;
		t.atom.composition[1]='100';
		t.add(t.atom);

		t.control=world2D.control01;
		t.control.btnOrbital000.on('click',t.clickBtnOrbital);
		t.control.btnOrbital100.on('click',t.clickBtnOrbital);
		t.control.btnOrbital101.on('click',t.clickBtnOrbital);
		t.control.btnOrbital111.on('click',t.clickBtnOrbital);
		t.control.btnOrbital112.on('click',t.clickBtnOrbital);
		t.control.btnOrbital113.on('click',t.clickBtnOrbital);
		t.control.btnOrbital114.on('click',t.clickBtnOrbital);
		t.control.btnOrbital200.on('click',t.clickBtnOrbital);
		t.control.btnOrbital201.on('click',t.clickBtnOrbital);
		t.control.btnOrbital211.on('click',t.clickBtnOrbital);
		t.control.btnOrbital212.on('click',t.clickBtnOrbital);
		t.control.btnOrbital213.on('click',t.clickBtnOrbital);
		t.control.btnOrbital214.on('click',t.clickBtnOrbital);
		t.control.btnOrbital221.on('click',t.clickBtnOrbital);
		t.control.btnOrbital222.on('click',t.clickBtnOrbital);
		t.control.btnOrbital223.on('click',t.clickBtnOrbital);
		t.control.btnOrbital224.on('click',t.clickBtnOrbital);


	}

	/**
	 * update
	 */
	update(){
		let t=this;

		t.atom.A=1-world2D.slShapeAB.value/100;
		t.atom.B=world2D.slShapeAB.value/100;
		t.atom.C=world2D.slShapeCC.value/100;


		t.atom.calWaveFunction();
		t.atom.setGeo();
		t.atom.setMat();
	}



	/**
	 * 切換軌域
	 * @param {*} e 
	 */
	clickBtnOrbital(e){
		let str=e.target.name;
		let a=world01.atom;
		
		let newQL=str.charAt(10);
		let newQM=str.charAt(11);
		let newQN=str.charAt(12);

		if(newQM==='0'&&newQN==='1'){
			newQN='0';
		}

		if((newQL+newQM+newQN)!=a.composition[1]){
			a.composition[1]=(newQL+newQM+newQN);
		}

	}
}




/**
 * 二、軌域觀察
 */
class World02 extends THREE.Object3D{

	
	/**
	 * 
	 */
	constructor(){
		super();
		let t=this;
		

		t.atomC=new SHObject();
		t.atomL=new SHObject();
		t.atomR=new SHObject();
		t.atomC.nComposition=2;
		t.atomL.nComposition=1;
		t.atomR.nComposition=1;
		t.atomC.composition[0]=t.atomL.composition[0]=Math.SQRT1_2;
		t.atomC.composition[1]=t.atomL.composition[1]='111';
		t.atomC.composition[2]=t.atomR.composition[0]=Math.SQRT1_2;
		t.atomC.composition[3]=t.atomR.composition[1]='112';
		t.add(t.atomC).add(t.atomL).add(t.atomR);
		t.atomL.position.x=-40;
		t.atomR.position.x=40;
		t.atomR.scale.x=t.atomR.scale.y=t.atomR.scale.z=t.atomL.scale.x=t.atomL.scale.y=t.atomL.scale.z=0.5;
		t.atomC.scale.x=t.atomC.scale.y=t.atomC.scale.z=0.8;;

		t.control=world2D.control02;
		t.control.btnOrbital113.on('click',t.clickBtnOrbital);
		t.control.btnOrbital114.on('click',t.clickBtnOrbital);
		t.control.btnOrbital213.on('click',t.clickBtnOrbital);
		t.control.btnOrbital214.on('click',t.clickBtnOrbital);
		t.control.btnOrbital223.on('click',t.clickBtnOrbital);
		t.control.btnOrbital224.on('click',t.clickBtnOrbital);

		t.control.slComC1.minimum=-1;
		t.control.slComC1.maximum=1;
		t.control.slComC1.value=Math.SQRT1_2;
		t.control.slComC1.digitN=2;
		t.control.slComC2.minimum=-1;
		t.control.slComC2.maximum=1;
		t.control.slComC2.value=Math.SQRT1_2;
		t.control.slComC2.digitN=2;
	}

	/**
	 * update
	 */
	update(){
		let t=this;

		t.atomL.A=t.atomR.A=t.atomC.A=1-world2D.slShapeAB.value/100;
		t.atomL.B=t.atomR.B=t.atomC.B=world2D.slShapeAB.value/100;
		t.atomL.C=t.atomR.C=t.atomC.C=world2D.slShapeCC.value/100;

		t.atomC.composition[0]=t.control.slComC1.value;
		t.atomC.composition[2]=t.control.slComC2.value;

		t.atomL.calWaveFunction();
		t.atomL.setGeo();
		t.atomL.setMat();

		t.atomR.calWaveFunction();
		t.atomR.setGeo();
		t.atomR.setMat();

		t.atomC.calWaveFunction();
		t.atomC.setGeo();
		t.atomC.setMat();
	}



	/**
	 * 切換軌域
	 * @param {*} e 
	 */
	clickBtnOrbital(e){
		let str=e.target.name;
		let aR=world02.atomR;
		let aL=world02.atomL;
		let aC=world02.atomC;
		let control=world2D.control02;
		
		let newQL=str.charAt(10);
		let newQM=str.charAt(11);
		let newQN=str.charAt(12);log((newQL+newQM+newQN))

		if((newQL+newQM+newQN)==='113'){//px
			aC.composition[1]=aL.composition[1]='111';
			aC.composition[3]=aR.composition[1]='112';
			control.slComC1.value=Math.SQRT1_2;
			control.slComC2.value=Math.SQRT1_2;
		}else if((newQL+newQM+newQN)==='114'){//py
			aC.composition[1]=aL.composition[1]='111';
			aC.composition[3]=aR.composition[1]='112';
			control.slComC1.value=Math.SQRT1_2;
			control.slComC2.value=-Math.SQRT1_2;
		}else if((newQL+newQM+newQN)==='213'){//dxz
			aC.composition[1]=aL.composition[1]='211';
			aC.composition[3]=aR.composition[1]='212';
			control.slComC1.value=Math.SQRT1_2;
			control.slComC2.value=Math.SQRT1_2;
		}else if((newQL+newQM+newQN)==='214'){//dyz
			aC.composition[1]=aL.composition[1]='211';
			aC.composition[3]=aR.composition[1]='212';
			control.slComC1.value=Math.SQRT1_2;
			control.slComC2.value=-Math.SQRT1_2;
		}else if((newQL+newQM+newQN)==='223'){//dxy
			aC.composition[1]=aL.composition[1]='221';
			aC.composition[3]=aR.composition[1]='222';
			control.slComC1.value=Math.SQRT1_2;
			control.slComC2.value=Math.SQRT1_2;
		}else if((newQL+newQM+newQN)==='224'){//dxx-yy
			aC.composition[1]=aL.composition[1]='221';
			aC.composition[3]=aR.composition[1]='222';
			control.slComC1.value=Math.SQRT1_2;
			control.slComC2.value=-Math.SQRT1_2;
		}

	}
}
















































































































































































































































































































































































//class SHObject
class SHObject extends THREE.Object3D{

	constructor(){
		super();

		var t=this;
		let sq=Math.sqrt;

		t.A=0;//R0
		t.B=1;//Probebility = wf^2
		t.C=0.5;//vibration = Re(wf)
		
		t.segWH=64;


		t.geo=new THREE.PlaneGeometry( 50,50, t.segWH, t.segWH );

		//mat
		t.matCanvas2D = document.createElement('canvas');
		t.matCanvas2D.width = t.matCanvas2D.height = t.canvasWH=64;
		// create exture object from canvas.
		t.mapTexture = new THREE.Texture(t.matCanvas2D);
		// need to set needsUpdate
		t.mapTexture.needsUpdate = true;
		var mapMaterial = new THREE.MeshBasicMaterial({
			map: t.mapTexture,
		});
		
		t.mesh=new THREE.Mesh(t.geo , mapMaterial);
		t.add(t.mesh);

		//canvasBG
		t.ctx = t.matCanvas2D.getContext("2d");
		t.imageData = t.ctx.getImageData(0, 0, t.canvasWH, t.canvasWH);
		t.cc=new THREE.Color();

		t.YlmDataS=new Float32Array(t.canvasWH+1);
		t.YlmDataP0=new Float32Array(t.canvasWH+1);
		t.YlmDataP1=new Float32Array(t.canvasWH+1);


		//wavefunction [R,I,R,I...],[lmn] l=s0,p1,d2...  m=0,1,...,l   n=1+m, 2-m, 3+, 4-
		t.nComposition=7;
		t.composition=[0.5,'000',-0.5,'113',+0.5,'114',-0.5,'100',0,'113',0,'113',0,'113'];
		t.wfNow=new Float32Array(2*(t.canvasWH+1)*(t.canvasWH+1));

	}	
	

	/**set Ylm Data */
	setYlmData(_ql,_qm){
		let t=this;
		t.ql=_ql;
		t.qm=_qm;

		for(var i=0;i<=t.canvasWH;i++){
			var theta=Math.PI*i/t.canvasWH;
			t.YlmDataS[i]=t.getSPHYlm(0,0,theta);
			t.YlmDataP0[i]=t.getSPHYlm(1,0,theta);
			t.YlmDataP1[i]=t.getSPHYlm(1,1,theta);
		}
	}



	/**
	 * set Geo
	 */
	setGeo(){

		let t=this;

		//wavefunction
		let ll=t.segWH;
	//	t.calWaveFunction(_l,_m);
		
		//Geo
		var positions = t.geo.attributes.position.array;
		for(var iy=0;iy<=ll;iy++){

			let theta=Math.PI*iy/ll;
		
			for(var ix=0;ix<=ll;ix++){

				let phi=2*Math.PI*ix/ll-Math.PI;
				

				let wfRe=t.wfNow[(iy*t.canvasWH/ll*(t.canvasWH+1)+ix*t.canvasWH/ll)*2+0];
				let wfIm=t.wfNow[(iy*t.canvasWH/ll*(t.canvasWH+1)+ix*t.canvasWH/ll)*2+1];
				
				
				let rrrm=t.waveFunctionToGeo(wfRe,wfIm);

				positions[(iy*(ll+1)+ix)*3+0]=rrrm*Math.sin(theta)*Math.sin(phi);
				positions[(iy*(ll+1)+ix)*3+1]=rrrm*Math.cos(theta);
				positions[(iy*(ll+1)+ix)*3+2]=rrrm*Math.sin(theta)*Math.cos(phi);


			}

		}

		t.geo.attributes.position.needsUpdate = true;
		t.geo.computeBoundingBox();
		t.geo.computeBoundingSphere();

	}

	
	/**
	 * set Mat
	 */
	setMat(){

		let t=this;

		let ll=t.canvasWH;
	
		//Mat
		//canvasBG
		let d=t.imageData.data;

		for(var iy=0;iy<ll;iy++){
			
			for(var ix=0;ix<ll;ix++){
				
		
				let wfRe=t.wfNow[(iy*(ll+1)+ix)*2+0];
				let wfIm=t.wfNow[(iy*(ll+1)+ix)*2+1];
				t.waveFunctionToMat(wfRe,wfIm);
			
			

				d[(iy*ll+ix)*4+0]= t.cc.r*255;
				d[(iy*ll+ix)*4+1]= t.cc.g*255;
				d[(iy*ll+ix)*4+2]= t.cc.b*255;
				d[(iy*ll+ix)*4+3]= 255;


				
				
		
				

			}

		}
		t.ctx.putImageData(t.imageData, 0, 0);


		//grid
/*		t.ctx.strokeStyle = '#000000';
		t.ctx.lineWidth = 1;
		t.ctx.beginPath();
		for(var iy=0;iy<ll;iy+=32){
			t.ctx.moveTo(0, iy);
			t.ctx.lineTo(ll, iy);
			
		}		
		for(var ix=0;ix<ll;ix+=32){
			t.ctx.moveTo(ix, 0);
			t.ctx.lineTo(ix, ll);
		
		}
		t.ctx.stroke();
*/

		t.mapTexture.needsUpdate = true;

	}

	/**
	 * wave function to geometry
	 * @param {number} _re 
	 * @param {number} _im 
	 * @returns
	 */
	waveFunctionToGeo(_re,_im){
		let t=this;
		
		let pw=Math.pow;
		
		
		
		let rrrm=t.A*20;
		let wf2=_re*_re+_im*_im;
		rrrm+=t.B*30*pw(wf2,1/4);
		rrrm+=t.C*10*_re;
		return rrrm;
	}

	/**
	 * wave function to mat (set t.cc)
	 * @param {number} _re
	 * @param {number} _im
	 */
	waveFunctionToMat(_re,_im){
		let t=this;
		let pn=_re>0?1:-1;
		let rrrm=1.0*Math.pow(_re*_re+_im*_im,1/4);
		
		let hue=360*(1/3+Math.atan(-pn*rrrm)*2/3);

		t.cc.setHSL(1/3+Math.atan(-pn*rrrm)*2/3, 1, 0.5);
	}



	/**
	 * calculate wave function
	 */
	calWaveFunction(){
		let t=this;


		let ll=t.canvasWH;
		//let len=t.composition.length/2;//共 len 個組成
		let len=t.nComposition;//共 len 個組成
		for(var i=0;i<len;i++){

			let coefficient=t.composition[i*2+0];
			let orbitalName=t.composition[i*2+1];

			let ql=parseInt(orbitalName.charAt(0));
			let qm=parseInt(orbitalName.charAt(1));
			let qn=parseInt(orbitalName.charAt(2));


			//開始計算
			//wavefunction
			for(var iy=0;iy<=ll;iy++){
				var theta=Math.PI*iy/ll;
				var ylm=t.getSPHYlm(ql,qm,theta);
				

				for(var ix=0;ix<=ll;ix++){
					var phi=2*Math.PI*ix/ll-Math.PI;
					
					let re,im;//wavefunction Re Im
					if(qn===1||qn===2){//1+, 2-
						re=ylm*Math.cos(qm*phi*(qn<1.5?1:-1)-tt);
						im=ylm*Math.sin(qm*phi*(qn<1.5?1:-1)-tt);
					}else if(qn===3){//3+, 4-
						re=ylm*(Math.cos(qm*phi-tt)+Math.cos(-qm*phi-tt))*Math.SQRT1_2;
						im=ylm*(Math.sin(qm*phi-tt)+Math.sin(-qm*phi-tt))*Math.SQRT1_2;
					}else if(qn===4){//3+, 4-
						re=ylm*(Math.cos(qm*(phi-Math.PI/2/qm)-tt)+Math.cos(-qm*(phi-Math.PI/2/qm)-tt))*Math.SQRT1_2;
						im=ylm*(Math.sin(qm*(phi-Math.PI/2/qm)-tt)+Math.sin(-qm*(phi-Math.PI/2/qm)-tt))*Math.SQRT1_2;
					//	re=ylm*(Math.sin(qm*phi-tt)-Math.sin(-qm*phi-tt))*Math.SQRT1_2;
					//	im=ylm*(Math.cos(qm*phi-tt)-Math.cos(-qm*phi-tt))*Math.SQRT1_2;
					}else if(qn===0&&qm===0){
						re=ylm*Math.cos(-tt);
						im=ylm*Math.sin(-tt);
					}else{
						log('qn錯誤!!!');
					}
					
					//wfMat
					if(i===0){
						t.wfNow[(iy*(ll+1)+ix)*2+0]=re*coefficient;
						t.wfNow[(iy*(ll+1)+ix)*2+1]=im*coefficient;
					}else{
						t.wfNow[(iy*(ll+1)+ix)*2+0]+=re*coefficient;
						t.wfNow[(iy*(ll+1)+ix)*2+1]+=im*coefficient;
					}

				}
			}
			
		}

		
	}


















	



























	




	//Spherical Harmonics
	getSPHYlm(_l,_m,_theta){
		let s=Math.sin(_theta);
		let c=Math.cos(_theta);
		let pi=Math.PI;
		let sq=Math.sqrt;
		let pw=Math.pow;
		let ab=Math.abs;
		let ylm=0;//return value


		if(_l===0){
			ylm=sq(1/pi)/2;
		}else if(_l===1){
			if(ab(_m)===1){
				ylm=sq(3/2/pi)/2*s;
			}else if(_m===0){
				ylm=sq(3/pi)/2*c;
			}
		}else if(_l===2){
			if(ab(_m)===2){
				ylm=sq(15/2/pi)/4*pw(s,2);
			}else if(ab(_m)===1){
				ylm=sq(15/2/pi)/2*s*c;
			}else if(_m===0){
				ylm=sq(5/pi)/4*(3*pw(c,2)-1);
			}
		}else if(_l===3){
			if(ab(_m)===3){
				ylm=sq(35/pi)/8*pw(s,3);
			}else if(ab(_m)===2){
				ylm=sq(105/2/pi)/4*pw(s,2)*c;
			}else if(ab(_m)===1){
				ylm=sq(21/pi)/8*s*(5*pw(c,2)-1);
			}else if(_m===0){
				ylm=sq(7/pi)/4*(5*pw(c,3)-3*c);
			}
		}else if(_l===4){
			if(ab(_m)===4){
				ylm=sq(35/2/pi)*3/16*pw(s,4);
			}else if(ab(_m)===3){
				ylm=sq(35/pi)*3/8*pw(s,3)*c;
			}else if(ab(_m)===2){
				ylm=sq(5/2/pi)*3/8*pw(s,2)*(7*pw(c,2)-1);
			}else if(ab(_m)===1){
				ylm=sq(5/pi)*3/8*s*(7*pw(c,3)-3*c);
			}else if(_m===0){
				ylm=sq(1/pi)*3/16*(35*pw(c,4)-30*pw(c,2)+3);
			}
		}else if(_l===5){
			if(ab(_m)===5){
				ylm=sq(77/pi)*3/32*pw(s,5);
			}else if(ab(_m)===4){
				ylm=sq(385/2/pi)*3/16*pw(s,4)*c;
			}else if(ab(_m)===3){
				ylm=sq(385/pi)*1/32*pw(s,3)*(9*pw(c,2)-1);
			}else if(ab(_m)===2){
				ylm=sq(1155/2/pi)*1/8*pw(s,2)*(3*pw(c,3)-c);
			}else if(ab(_m)===1){
				ylm=sq(165/2/pi)*1/16*s*(21*pw(c,4)-14*pw(c,2)+1);
			}else if(_m===0){
				ylm=sq(11/pi)*1/16*(63*pw(c,5)-70*pw(c,3)+15*c);
			}
		}else if(_l===6){
			if(ab(_m)===6){
				ylm=sq(3003/pi)/64*pw(s,6);
			}else if(ab(_m)===5){
				ylm=sq(1001/pi)*3/32*pw(s,5)*c;
			}else if(ab(_m)===4){
				ylm=sq(91/2/pi)*3/32*pw(s,4)*(11*pw(c,2)-1);
			}else if(ab(_m)===3){
				ylm=sq(1635/pi)/32*pw(s,3)*(11*pw(c,3)-3*c);
			}else if(ab(_m)===2){
				ylm=sq(1365/pi)/64*pw(s,2)*(33*pw(c,4)-18*pw(c,2)+1);
			}else if(ab(_m)===1){
				ylm=sq(273/2/pi)/16*s*(33*pw(c,5)-30*pw(c,3)+5*c);
			}else if(_m===0){
				ylm=sq(13/pi)/32*(231*pw(c,6)-315*pw(c,4)+105*pw(c,2)-5);
			}
		}else if(_l===7){
			if(ab(_m)===7){
				ylm=sq(715/2/pi)*3/64*pw(s,7);
			}else if(ab(_m)===6){
				ylm=sq(5005/pi)*3/64*pw(s,6)*c;
			}else if(ab(_m)===5){
				ylm=sq(385/2/pi)*3/64*pw(s,5)*(13*pw(c,2)-1);
			}else if(ab(_m)===4){
				ylm=sq(385/2/pi)*3/32*pw(s,4)*(13*pw(c,3)-3*c);
			}else if(ab(_m)===3){
				ylm=sq(35/2/pi)*3/64*pw(s,3)*(143*pw(c,4)-66*pw(c,2)+3);
			}else if(ab(_m)===2){
				ylm=sq(35/pi)*3/64*pw(s,2)*(143*pw(c,5)-110*pw(c,3)+15*c);
			}else if(ab(_m)===1){
				ylm=sq(105/2/pi)/64*s*(429*pw(c,6)-495*pw(c,4)+135*pw(c,2)-5);
			}else if(_m===0){
				ylm=sq(15/pi)/32*(429*pw(c,7)-693*pw(c,5)+315*pw(c,3)-35*c);
			}
		}else if(_l===8){
			if(ab(_m)===8){
				ylm=sq(12155/2/pi)*3/256*pw(s,8);
			}else if(ab(_m)===7){
				ylm=sq(12155/2/pi)*3/64*pw(s,7)*c;
			}else if(ab(_m)===6){
				ylm=sq(7293/pi)/128*pw(s,6)*(15*pw(c,2)-1);
			}else if(ab(_m)===5){
				ylm=sq(17017/2/pi)*3/64*pw(s,5)*(5*pw(c,3)-c);
			}else if(ab(_m)===4){
				ylm=sq(1309/2/pi)*3/128*pw(s,4)*(65*pw(c,4)-26*pw(c,2)+1);
			}else if(ab(_m)===3){
				ylm=sq(19635/2/pi)/64*pw(s,3)*(39*pw(c,5)-26*pw(c,3)+3*c);
			}else if(ab(_m)===2){
				ylm=sq(595/pi)*3/128*pw(s,2)*(143*pw(c,6)-143*pw(c,4)+33*pw(c,2)-1);
			}else if(ab(_m)===1){
				ylm=sq(17/2/pi)*3/64*s*(715*pw(c,7)-1001*pw(c,5)+385*pw(c,3)-35*c);
			}else if(_m===0){
				ylm=sq(17/pi)/256*(6435*pw(c,8)-12012*pw(c,6)+6930*pw(c,4)-1260*pw(c,2)+35);
			}
		}else if(_l===9){
			if(ab(_m)===9){
				ylm=sq(230945/pi)/512*pw(s,9);
			}else if(ab(_m)===8){
				ylm=sq(230945/2/pi)*3/256*pw(s,8)*c;
			}else if(ab(_m)===7){
				ylm=sq(13585/pi)*3/512*pw(s,7)*(17*pw(c,2)-1);
			}else if(ab(_m)===6){
				ylm=sq(40755/pi)/128*pw(s,6)*(17*pw(c,3)-3*c);
			}else if(ab(_m)===5){
				ylm=sq(2717/pi)*3/256*pw(s,5)*(85*pw(c,4)-30*pw(c,2)+1);
			}else if(ab(_m)===4){
				ylm=sq(95095/2/pi)*3/128*pw(s,4)*(17*pw(c,5)-10*pw(c,3)+c);
			}else if(ab(_m)===3){
				ylm=sq(21945/pi)/256*pw(s,3)*(221*pw(c,6)-195*pw(c,4)+39*pw(c,2)-1);
			}else if(ab(_m)===2){
				ylm=sq(1045/pi)*3/128*pw(s,2)*(221*pw(c,7)-273*pw(c,5)+91*pw(c,3)-7*c);
			}else if(ab(_m)===1){
				ylm=sq(95/2/pi)*3/256*s*(2431*pw(c,8)-4004*pw(c,6)+2002*pw(c,4)-308*pw(c,2)+7);
			}else if(_m===0){
				ylm=sq(19/pi)/256*(12155*pw(c,9)-25740*pw(c,7)+18018*pw(c,5)-4620*pw(c,3)+315*c);
			}
		}


		return ylm;
	}



	//radial part rnl
	getRadialRnl(_n,_l,_rInA0) {

		//https://www.theochem.ru.nl/~pwormer/Knowino/knowino.org/wiki/Hydrogen-like_atom.html
		let r=2*_rInA0/_n;
		let sq=Math.sqrt;
		let pw=Math.pow;
		let ep=Math.exp;
		let rnl=0;//return value

		if(_n===1){
			rnl=2;
		}else if(_n===2){
			if(_l===1){
				rnl=1/2/(6)*r;
			}else if(_l===0){
				rnl=1/2/sq(2)*(2-r);
			}
		}else if(_n===3){
			if(_l===2){
				rnl=1/9/sq(30)*pw(r,2);
			}else if(_l===1){
				rnl=1/9/sq(6)*r*(4-r);
			}else if(_l===0){
				rnl=1/9/sq(3)*(6-6*r+pw(r,2));
			}
		}else if(_n===4){
			if(_l===3){
				rnl=1/96/sq(35)*pw(r,3);
			}else if(_l===2){
				rnl=1/96/sq(5)*pw(r,2)*(6-r);
			}else if(_l===1){
				rnl=1/32/sq(15)*r*(20-10*r+pw(r,2));
			}else if(_l===0){
				rnl=1/96*(24-36*r+12*pw(r,2)-pw(r,3));
			}
		}else if(_n===5){
			if(_l===4){
				rnl=1/900/sq(70)*pw(r,4);
			}else if(_l===3){
				rnl=1/300/sq(70)*pw(r,3)*(8-r);
			}else if(_l===2){
				rnl=1/150/sq(70)*pw(r,2)*(42-14*r+pw(r,2));
			}else if(_l===1){
				rnl=1/150/sq(30)*r*(120-90*r+18*pw(r,2)-pw(r,3));
			}else if(_l===0){
				rnl=1/300/sq(5)*(120-240*r+120*pw(r,2)-20*pw(r,3)+pw(r,4));
			}
		}
		
		rnl*=ep(-r/2);
		return rnl;
	}

}























































































































































































































































































































































































































































































































































































































































































































































































































































//--以下都是老師幫你寫的，可以參考，不要修改--//
//--以下都是老師幫你寫的，可以參考，不要修改--//
//--以下都是老師幫你寫的，可以參考，不要修改--//
//--以下都是老師幫你寫的，可以參考，不要修改--//


//TEACHER.Obj 老師幫你產生Object3D
//TEACHER.Obj 老師幫你產生Object3D
//TEACHER.Obj 老師幫你產生Object3D
//TEACHER.Obj 老師幫你產生Object3D
var TEACHER={};
//平面
/**
 * 老師幫你寫的平面，繼承自 THREE.Object3D
 */
TEACHER.ObjPlane=class extends THREE.Object3D{
	/**
	* @constructor TEACHER.ObjPlane
	* @param {number} _w 寬，預設10
	* @param {number} _h 高，預設10
	* @param {number} _color 顏色，預設洋紅0xFF00FF 
	* @param {string} _dir 方向，"x","y","z", 預設"z" 
	* @param {number} _side 顯示哪一面，0正面，1背面，2雙面，預設0正面 
	*/
	constructor(_w,_h,_color,_dir,_side){
		super();
		let t=this;
		t.mat = new TEACHER.MSMat(_color , _side);
		t.geo = new THREE.PlaneGeometry(_w||10,_h||10,1,1);
		t.mesh=new THREE.Mesh(t.geo , t.mat);
		if(_dir==="x"){
			t.mesh.rotation.y=0.5*Math.PI;
		}else if(_dir==="y"){
			t.mesh.rotation.x=-0.5*Math.PI;
		}
		t.add(t.mesh);
	}
}
//圓柱
/**
 * 老師幫你寫的圓柱，繼承自 THREE.Object3D
 */
TEACHER.ObjCylinder=class extends THREE.Object3D{
	/**
	 * 老師幫你寫的圓柱，繼承自 THREE.Object3D
	 * @constructor TEACHER.ObjCylinder
	 * @param {number} _r 半徑，預設10
	 * @param {number} _h 柱高，預設10
	 * @param {number} _color 顏色，預設洋紅0xFF00FF 
	 * @param {boolean} _openEnd 是否兩端開，預設false
	 * @param {string} _dir 方向，"x","y","z", 預設"y" 
	 * @param {number} _side 顯示哪一面，0正面，1背面，2雙面，預設0正面 
	 */

	constructor(_r,_h,_color,_openEnd,_dir,_side){
		super();
		let t=this;
		t.mat = new TEACHER.MSMat(_color , _side);
		t.geo = new THREE.CylinderGeometry(_r||10, _r||10, _h||10, 32, 2, _openEnd);
		t.mesh=new THREE.Mesh(t.geo , t.mat);
		if(_dir==="x"){
			t.mesh.rotation.z=-0.5*Math.PI;
		}else if(_dir==="z"){
			t.mesh.rotation.x=0.5*Math.PI;
		}
		t.add(t.mesh);
	}
}
//圓球
/**
 * 老師幫你寫的圓球，繼承自 THREE.Object3D
 */
TEACHER.ObjSphere=class extends THREE.Object3D{
	/**
	 * 老師幫你寫的圓球，繼承自 THREE.Object3D
	 * @constructor TEACHER.ObjSphere
	 * @param {number} _r 半徑，預設10
	 * @param {number} _color 顏色，預設洋紅0xFF00FF 
	 * @param {number} _side 顯示哪一面，0正面，1背面，2雙面，預設0正面 
	 */
	constructor(_r,_color,_side){
		super();
		let t=this;
		t.mat = new TEACHER.MSMat(_color , _side);
		t.geo = new THREE.SphereGeometry(_r||10, 32, 16);
		t.mesh=new THREE.Mesh(t.geo , t.mat);
		t.add(t.mesh);
	}
}

//長方體
/**
 * 老師幫你寫的長方體，繼承自 THREE.Object3D
 */
TEACHER.ObjBox=class extends THREE.Object3D{
	/**
	 * 老師幫你寫的長方體，繼承自 THREE.Object3D
	 * @constructor TEACHER.ObjBox
	 * @param {number} _w 寬，預設10
	 * @param {number} _h 高，預設10
	 * @param {number} _d 深，預設10
	 * @param {number} _color 顏色，預設洋紅0xFF00FF 
	 * @param {number} _side 顯示哪一面，0正面，1背面，2雙面，預設0正面 
	 */

	constructor(_w,_h,_d,_color,_side){
		super();
		let t=this;
		t.mat = new TEACHER.MSMat(_color , _side);
		t.geo = new THREE.BoxGeometry(_w||10,_h||10,_d||10);
		t.mesh=new THREE.Mesh(t.geo , t.mat);
		t.add(t.mesh);
	}
}
//---------------------------------------------
//老師的MSMat，繼承自 THREE.MeshStandardMaterial
TEACHER.MSMat=class extends THREE.MeshStandardMaterial{
	constructor(_color,_side){
		super({ color: _color||0xFF00FF , roughness: 0.4 , side:_side||0});
	}
}


//圖片平面
/**
* 老師幫你寫的圖片平面，繼承自 THREE.Object3D
*/
TEACHER.ObjPicPlane=class extends THREE.Object3D{

	/**
	 * 老師幫你寫的圖片平面，繼承自 THREE.Object3D
	 * @constructor TEACHER.ObjPicPlane
	 * @param {number} _w 寬，預設10
	 * @param {number} _h 高，預設10
	 * @param {string} _pic base64 image string，讀取自pics.js，轉檔自https://www.base64-image.de/
	 * @param {string} _dir 方向，"x","y","z", 預設"z" 
	 * @param {number} _side 顯示哪一面，0正面，1背面，2雙面，預設0正面 
	 */

	constructor(_w,_h,_pic,_dir,_side){
		super();
		let t=this;
		let texture = new THREE.TextureLoader().load( _pic );
		t.mat = new THREE.MeshBasicMaterial({ map: texture ,transparent:true, side:_side||0 });
		t.geo = new THREE.PlaneGeometry(_w,_h,1,1);	
		t.mesh=new THREE.Mesh(t.geo , t.mat);
		if(_dir==="x"){
			t.mesh.rotation.y=0.5*Math.PI;
		}else if(_dir==="y"){
			t.mesh.rotation.x=-0.5*Math.PI;
		}
		t.add(t.mesh);
	}
}
//圖片圓柱
/**
 * 老師幫你寫的圖片圓柱，繼承自 THREE.Object3D
 * @constructor TEACHER.ObjPicCylinder
 * @param {number} _r 半徑，預設10
 * @param {number} _h 柱高，預設10
 * @param {string} _pic base64 image string，讀取自pics.js，轉檔自https://www.base64-image.de/
 * @param {boolean} _openEnd 是否兩端開，預設false
 * @param {string} _dir 方向，"x","y","z", 預設"y" 
 * @param {number} _side 顯示哪一面，0正面，1背面，2雙面，預設0正面 
 */
TEACHER.ObjPicCylinder=class extends THREE.Object3D{
	constructor(_r,_h,_pic,_openEnd,_dir,_side){
		super();
		let t=this;
		let texture = new THREE.TextureLoader().load( _pic );
		t.mat = new THREE.MeshBasicMaterial({ map: texture , side:_side||0 });
		t.geo = new THREE.CylinderGeometry(_r||10, _r||10, _h||10, 32, 4, _openEnd);
		t.mesh=new THREE.Mesh(t.geo , t.mat);
		if(_dir==="x"){
			t.mesh.rotation.z=-0.5*Math.PI;
		}else if(_dir==="z"){
			t.mesh.rotation.y=0.5*Math.PI;
			t.mesh.rotation.x=0.5*Math.PI;
		}else if(_dir==="y"){
			t.mesh.rotation.y=0.5*Math.PI;
		}
		t.add(t.mesh);
	}
}
//圖片圓球
/**
 * 老師幫你寫的圖片圓球，繼承自 THREE.Object3D
 */
TEACHER.ObjPicSphere=class extends THREE.Object3D{
	/**
	 * 老師幫你寫的圖片圓球，繼承自 THREE.Object3D
	 * @constructor TEACHER.ObjPicSphere
	 * @param {number} _r 半徑，預設10
	 * @param {string} _pic base64 image string，讀取自pics.js，轉檔自https://www.base64-image.de/
	 * @param {number} _side 顯示哪一面，0正面，1背面，2雙面，預設0正面 
	 */

	constructor(_r,_pic,_side){
		super();
		let t=this;
		let texture = new THREE.TextureLoader().load( _pic );
		t.mat = new THREE.MeshBasicMaterial({ map: texture , side:_side||0 });
		t.geo = new THREE.SphereGeometry(_r||10, 32, 16);
		t.mesh=new THREE.Mesh(t.geo , t.mat);
		t.add(t.mesh);
	}
}


//箭頭
/**
 * 老師幫你寫的箭頭，繼承自 THREE.Object3D
 */
TEACHER.ObjArrow=class extends THREE.Object3D{
	/**
	 * 老師幫你寫的箭頭，繼承自 THREE.Object3D
	 * @constructor TEACHER.ObjArrow
	 * @param {number} _r 半徑，預設10
	 * @param {number} _color 顏色，預設洋紅0xFF00FF 
	 */
	constructor(_r,_color){
		super();
		let ratioHead=0.4;//頭佔全長
		let ratioBody=0.5;//身寬佔全長
		let material = new THREE.MeshStandardMaterial({ color: _color||0xFF00FF , roughness: 0.4 });
		let geometry = new THREE.ConeGeometry( _r||10, 100*ratioHead, 32 );
		this.ArrowHead=new THREE.Mesh(geometry,material);
		this.ArrowHead.position.y=100*(1-0.5*ratioHead);
		geometry = new THREE.CylinderGeometry( (_r||10)*ratioBody,(_r||10)*ratioBody, 100*(1-ratioHead), 32,2 );
		this.ArrowBody=new THREE.Mesh(geometry,material);
		this.ArrowBody.position.y=100*0.5*(1-ratioHead);
		this.rotX=new THREE.Object3D();//in rotation.x for theta
		this.rotY=new THREE.Object3D();//out rotation.y for phi
		this.add(this.rotY);
		this.rotY.add(this.rotX);
		this.rotX.add(this.ArrowBody);
		this.rotX.add(this.ArrowHead);
	}
	/**
     * setArrow 設定箭頭指向
     * @param {number} _x x
     * @param {number} _y y
     * @param {number} _z z
     */
	setArrow (_x,_y,_z){
		let len2=_x*_x+_y*_y+_z*_z;
		let len=Math.sqrt(len2);
		if(len2>0){
			this.rotX.visible=true;
			this.rotX.scale.y=len/100;
		}else{
			this.rotX.visible=false;
		}
		this.rotX.rotation.x=Math.acos(_y/len);
		this.rotY.rotation.y=Math.atan2(_x,_z);
	}
}
//彈簧
/**
 * 老師幫你寫的彈簧，繼承自 THREE.Object3D
 */
TEACHER.ObjSpring=class extends THREE.Object3D{
	/**
	 * 老師幫你寫的彈簧，繼承自 THREE.Object3D
	 * @constructor TEACHER.ObjSpring
	 * @param {number} _len 長度，預設20
	 * @param {number} _rB 大半徑，預設5
	 * @param {number} _rS 小半徑，預設0.5
	 * @param {number} _nn 圈數，預設8
	 * @param {number} _color 顏色，預設洋紅0xFF00FF 
	 */	
	constructor(_len,_rB,_rS,_nn,_color){
		super();
		//curve
		let dd=_len||20;
		this.L0=dd;
		let arr=[];
		let nn=_nn||5;
		let rB=_rB||5;
		let rS=_rS||0.5;
		arr.push(new THREE.Vector3( 0, 0, 0 ));
		arr.push(new THREE.Vector3( 0, dd*0.05 ,0));
		for(var i=0;i<=nn*16;i++){
			arr.push(new THREE.Vector3( rB*Math.cos(i*2*Math.PI/16), dd*(0.05+0.9*i/nn/16) ,rB*Math.sin(i*2*Math.PI/16)));
		}
		arr.push(new THREE.Vector3( 0, dd*0.95 ,0));
		arr.push(new THREE.Vector3( 0, dd ,0));
		
		let myClosedSpline = new THREE.CatmullRomCurve3( arr );
		let material = new THREE.MeshStandardMaterial({ color: _color||0xFF00FF , roughness: 0.4 });
		let geometry=new THREE.TubeGeometry( myClosedSpline, 500, rS, 12 );
		this.mesh = new THREE.Mesh(geometry, material );
		this.rotX=new THREE.Object3D();//in rotation.x for theta
		this.rotY=new THREE.Object3D();//out rotation.y for phi
		this.add(this.rotY);
		this.rotY.add(this.rotX);
		this.rotX.add(this.mesh);
	}
	/**
	 * 設定彈簧xyz
     * @param {number} _x x
     * @param {number} _y y
     * @param {number} _z z
	 */	
	setSpring(_x,_y,_z){
		let len2=_x*_x+_y*_y+_z*_z;
		let len=Math.sqrt(len2);
		if(len2>0){
			this.rotX.visible=true;
			this.rotX.scale.y=len/this.L0;
		}else{
			this.rotX.visible=false;
		}
		this.rotX.rotation.x=Math.acos(_y/len);
		this.rotY.rotation.y=Math.atan2(_x,_z);
	}
}


//粒子系統
/**
 * 老師幫你寫的粒子系統，繼承自 THREE.Points
 */
TEACHER.Points=class extends THREE.Points{
	
	/**
	 * 老師幫你寫的粒子系統，繼承自 THREE.Points
	 * @constructor TEACHER.Points
	 * @param {number} _color 顏色，預設洋紅0xFF00FF 
	 * @param {number} _size 半徑，預設1
	 * @param {number} _nnMax 最大點數，預設10000 
	 */
	constructor(_color,_size,_nnMax){
		



		let ss=_size||1;
		let color=_color||0xFF00FF;
		let tColor=new THREE.Color(color);
		let nnMax=_nnMax||10000;
		let geometry = new THREE.BufferGeometry();
		let positions = [];
		geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) );
		geometry.computeBoundingSphere();
		let material = new THREE.PointsMaterial({
			size: ss,
			map: TEACHER.Points.createCanvasMaterial('#'+tColor.getHexString(), 64),
			  transparent: true,
			  depthWrite: false
		});
		
		
		
		super(geometry, material);
		let tp=this;	
		tp.nnMax=nnMax;
		tp.nnNow=0;
		tp.geometry = geometry;
		tp.positions = positions;
		
		
	}

	//createCanvasMaterial
	static createCanvasMaterial(color , size){
		var matCanvas = document.createElement('canvas');
		matCanvas.width = matCanvas.height = size;
		var matContext = matCanvas.getContext('2d');
		matContext.imageSmoothingEnabled= false;
		// create exture object from canvas.
		var texture = new THREE.Texture(matCanvas);
		// Draw a circle
		var center = size / 2;
		matContext.beginPath();
		matContext.arc(center, center, size/2-3, 0, 2 * Math.PI, false);
		matContext.closePath();
		matContext.fillStyle = color;
		matContext.fill();
		// need to set needsUpdate
		texture.needsUpdate = true;
		// return a texture made from the canvas
		return texture;
	}

		
	//addPoint
	addPoint(_x , _y , _z){
		let tp=this;
		if(tp.nnNow<tp.nnMax){
			tp.nnNow++;
		}else{
			log('TEACHER.Points 到達最大點數');
			tp.positions.shift();
			tp.positions.shift();
			tp.positions.shift();
		}
		tp.positions.push(_x,_y,_z);
	}

	//clear
	clear(){
		let tp=this;
		tp.positions=[];
		tp.nnNow=0;
		tp.update();
	}

	//setPoint
	setPoint(_n, _x , _y , _z){
		let tp=this;
		if(_n>tp.nnMax){
			log('輸入的n值大於TEACHER.Points 最大點數 nnMax');
		}else if(_n>tp.nnNow){
			log('輸入的n值大於TEACHER.Points 現在點數 nnNow');
		}else{
			tp.positions[_n*3]=_x;	
			tp.positions[_n*3+1]=_y;	
			tp.positions[_n*3+2]=_z;	
		}
	}

	//getPoint
	getPoint(_n){
		let tp=this;
		let pt = new THREE.Vector3();
		if(_n>tp.nnMax){
			log('輸入的n值大於TEACHER.Points 最大點數 nnMax');
		}else if(_n>tp.nnNow){
			log('輸入的n值大於TEACHER.Points 現在點數 nnNow');
		}else{
			pt.x=tp.positions[_n*3];	
			pt.y=tp.positions[_n*3+1];	
			pt.z=tp.positions[_n*3+2];	
		}
		return pt;
	}

	//update
	update(){
		let tp=this;
		tp.geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( tp.positions, 3 ) );
		tp.geometry.computeBoundingSphere();
		tp.geometry.attributes.position.needsUpdate = true;
	}

}


//線條系統
/**
* 老師幫你寫的線條系統，繼承自 THREE.Line2(可設線寬)
*/
TEACHER.Line=class extends THREE.Line2{
	
	
	/**
	* 老師幫你寫的線條系統，繼承自 THREE.Line2(可設線寬)
	* @constructor TEACHER.Line
	* @param {number} _color 顏色，預設洋紅0xFF00FF 
	* @param {number} _lineWidth 線寬，預設1 
	* @param {number} _nnMax 最大點數，預設10000 
	*/
	constructor(_color , _lineWidth , _nnMax){
		


		let nnMax=_nnMax||10000;
		let lineWidth=_lineWidth||1;

		var material = new THREE.LineMaterial( { color: _color||0xFF00FF, linewidth: _lineWidth||1 } );
		material.resolution.set( window.innerWidth, window.innerHeight );
		
		let geometry = new THREE.LineGeometry();
		let positions = new Float32Array(nnMax*3);
		geometry.setPositions( positions);




		super(geometry, material );
		let ln=this;
		ln.nnMax=nnMax;
		ln.lineWidth=lineWidth;
		ln.nnNow=0;
		
		
		ln.geometry = geometry;
		ln.positions = positions;
		

	}

	//addPoint
	addPoint(_x , _y , _z){
		let ln=this;
		if(ln.nnNow<ln.nnMax){
			ln.nnNow++;
		}else{
			log('TEACHER.Line 到達最大點數');
			for(var i=0;i<ln.nnMax-1;i++){
				ln.positions[i*3]=ln.positions[i*3+3];	
				ln.positions[i*3+1]=ln.positions[i*3+4];	
				ln.positions[i*3+2]=ln.positions[i*3+5];	
			}
		}
		for(var i=ln.nnNow;i<=ln.nnMax;i++){
			ln.positions[(i-1)*3] = _x;
			ln.positions[(i-1)*3+1] = _y;
			ln.positions[(i-1)*3+2] = _z;
		}
		
	}
	//clear
	clear(){
		let ln=this;
		ln.positions=new Float32Array(ln.nnMax*3);;
		ln.nnNow=0;
		ln.update();
	}
	//setPoint
	setPoint(_n , _x , _y , _z){
		let ln=this;
		if(_n>ln.nnMax){
			log('輸入的n值大於TEACHER.Line 最大點數 nnMax');
		}else if(_n>ln.nnNow){
			log('輸入的n值大於TEACHER.Line 現在點數 nnNow');
		}else{
			ln.positions[_n*3]=_x;	
			ln.positions[_n*3+1]=_y;	
			ln.positions[_n*3+2]=_z;	
		}
	}
	//getPoint
	getPoint(_n){
		let ln=this;
		let pt = new THREE.Vector3();
		if(_n>ln.nnMax){
			log('輸入的n值大於TEACHER.Line 最大點數 nnMax');
		}else if(_n>ln.nnNow){
			log('輸入的n值大於TEACHER.Line 現在點數 nnNow');
		}else{
			pt.x=ln.positions[_n*3];	
			pt.y=ln.positions[_n*3+1];	
			pt.z=ln.positions[_n*3+2];	
		}
		return pt;
	}
	//update
	update(){
		let ln=this;
		let pt = ln.getPoint(ln.nnNow-1);
		for(var i=ln.nnNow;i<=ln.nnMax;i++){
			ln.positions[i*3] = pt.x;
			ln.positions[i*3+1] = pt.y;
			ln.positions[i*3+2] = pt.z;
		}
		ln.geometry.setPositions( ln.positions);
	}

}


//文字平面
/**
 * 老師幫你寫的文字平面，繼承自 THREE.Object3D
 */
TEACHER.ObjTextPlane=class extends THREE.Object3D{
	
	/**
	* 老師幫你寫的文字平面，繼承自 THREE.Object3D
	* @constructor TEACHER.ObjTextPlane
	* @param {number} _w 寬(最好設為高的1,2,4,8倍)，預設20
	* @param {number} _h 高，預設10
	* @param {string} _text 文字內容
	* @param {string} _dir 方向，"x","y","z", 預設"z" 
	* @param {number} _textColor 文字顏色，預設白色0xffffff
	* @param {number} _bgColor 背景顏色，不輸入則為透明
	*/
	constructor(_w,_h,_text,_dir,_textColor,_bgColor){
		super();
		let t=this;
		//texture
		let ratio=Math.round(Math.log2(_w/_h));
		let canvas = $("<canvas>").attr('width',String(128*Math.pow(2,ratio))).attr('height','128');
		t.stage = new createjs.Stage(canvas[0]);
		let container = new createjs.Container();
		if(_bgColor){   
			let rectShape = new createjs.Shape();
			let bgColor=new THREE.Color( _bgColor );
			rectShape.graphics.c().f("#"+bgColor.getHexString()).dr(0, 0, 128*Math.pow(2,ratio), 128);
			container.addChild(rectShape);
		}
		t.ctext = new createjs.Text();
		let textColor=new THREE.Color(_textColor||0xffffff);
		t.ctext.color = "#"+textColor.getHexString();
		t.ctext.font = '96px Arial';
		t.ctext.text = _text||"";
	
		t.ctext.textAlign = 'center';
		t.ctext.textBaseline = 'middle';
		t.ctext.x = 128*Math.pow(2,ratio) / 2;
		t.ctext.y = 128 / 2;
	
		container.addChild(t.ctext);
		t.stage.addChild(container);
		t.stage.update();
		
		//plane
		t.texture = new THREE.Texture(canvas[0]);
		   var material = new THREE.MeshBasicMaterial({ map: t.texture , transparent: true });
		   var geometry = new THREE.PlaneGeometry(_w||10,_h||10,1,1);
		   t.texture.needsUpdate = true;
		   t.plane1 = new THREE.Mesh( geometry, material );
		   t.plane2 = new THREE.Mesh( geometry, material );
		t.plane2.rotation.y=Math.PI;
		let objCon=new THREE.Object3D();
		objCon.add(t.plane1).add(t.plane2);
		if(_dir==="x"){
			objCon.rotation.y=0.5*Math.PI;
		}else if(_dir==="y"){
			objCon.rotation.x=-0.5*Math.PI;
		}
		
		t.add(objCon);
	}
	
	setText (_text){
		let t=this;
		t.ctext.text = _text;
		t.stage.update();
		t.texture.needsUpdate = true;
	}
}



//曲線圖
/**
 * 老師幫你寫的曲線圖，繼承自 THREE.Object3D
 */
TEACHER.ObjGraph=class extends THREE.Object3D{

	/**
	* 老師幫你寫的曲線圖，繼承自 THREE.Object3D
	* @constructor TEACHER.ObjGraph
	* @param {number} _xMin x最小值，預設0
	* @param {number} _xMax x最大值，預設10
	* @param {number} _yMin y最小值，預設0
	* @param {number} _yMax y最大值，預設10
	* @param {number} _frameColor 框線顏色，預設 0xffffff
	* @param {number} _lineColor 曲線顏色，預設 0xffff00
	* @param {number} _nnMax 最大點數，預設10000 (TEACHER.Line)
	*/
	constructor(_xMin,_xMax,_yMin,_yMax,_frameColor,_lineColor,_nnMax){
		
		super();
		let t=this;
		t.objCon=new THREE.Object3D();
		
		//var
		t._xMin = _xMin||0;
		t._xMax = _xMax||10;
		t._yMin = _yMin||0;
		t._yMax = _yMax||10;
		t.divXN=5;
		t.divYN=4;
	
		//frame	
		t.frameMat = new THREE.LineBasicMaterial( { color: _frameColor||0xffffff } );
		var points = [];
		for(var ix=0;ix<=t.divXN;ix++){
			points.push( new THREE.Vector3( -50+ix*20, 0, 0 ) );
			points.push( new THREE.Vector3( -50+ix*20, 50, 0 ) );
		}
		for(var iy=0;iy<=t.divYN;iy++){
			points.push( new THREE.Vector3( -50, iy*12.5, 0 ) );
			points.push( new THREE.Vector3( 50, iy*12.5, 0 ) );
		}
		let geo = new THREE.BufferGeometry().setFromPoints( points );
		t.frame = new THREE.LineSegments(geo, t.frameMat);
		t.objCon.add(t.frame);
	
		//tick label
		t.labelXMin = new TEACHER.ObjTextPlane(20,5,String(t._xMin),"z",_frameColor||0xffffff);
		t.labelXMin.position.x=-50;
		t.labelXMin.position.y=-3;
		t.objCon.add(t.labelXMin);
		t.labelXMax = new TEACHER.ObjTextPlane(20,5,String(t._xMax),"z",_frameColor||0xffffff);
		t.labelXMax.position.x=50;
		t.labelXMax.position.y=-3;
		t.objCon.add(t.labelXMax);
		t.labelYMin = new TEACHER.ObjTextPlane(20,5,String(t._yMin),"z",_frameColor||0xffffff);
		t.labelYMin.position.x=-53;
		t.labelYMin.position.y=0;
		t.objCon.add(t.labelYMin);
		t.labelYMax = new TEACHER.ObjTextPlane(20,5,String(t._yMax),"z",_frameColor||0xffffff);
		t.labelYMax.position.x=-53;
		t.labelYMax.position.y=50;
		t.objCon.add(t.labelYMax);
	
		//axes label
		t.labelX = new TEACHER.ObjTextPlane(24,7,"x","z",_frameColor||0xffffff);
		t.labelX.position.x=60;
		t.labelX.position.y=4;
		t.labelX.position.z=1;
		t.labelY = new TEACHER.ObjTextPlane(24,7,"y","z",_frameColor||0xffffff);
		t.labelY.position.x=-60;
		t.labelY.position.y=25;
		t.labelY.position.z=1;
		t.labelY.rotation.z=Math.PI/2;
		t.labelTitle = new TEACHER.ObjTextPlane(40,10,"y-x","z",_frameColor||0xffffff);
		t.labelTitle.position.y=53;
		t.labelTitle.position.z=1;
		t.objCon.add(t.labelX).add(t.labelY).add(t.labelTitle);
		
		//line
		t._lineColor = _lineColor;
		t._nnMax = _nnMax;
		t.line = new TEACHER.Line(t._lineColor||0xffff00 ,2, t._nnMax);
		t.objCon.add(t.line);
		t.changeScale();
	
		
		t.add(t.objCon);
	}



	//methods

	
	//addPoint
	addPoint(_x , _y){
		let tg=this;
		tg.line.addPoint(_x,_y,0);
		tg.line.update();
	}
	//clear
	clear(){
		let tg=this;
		tg.line.clear();	
	}
	//changeScale
	changeScale(){
		let tg=this;
		
		tg.line.scale.x = 100/(tg._xMax-tg._xMin);
		tg.line.scale.y = 50/(tg._yMax-tg._yMin);
		tg.line.position.x=-50-tg._xMin*tg.line.scale.x;
		tg.line.position.y=-tg._yMin*tg.line.scale.y;

		tg.labelXMin.setText(tg._xMin);
		tg.labelXMax.setText(tg._xMax);
		tg.labelYMin.setText(tg._yMin);
		tg.labelYMax.setText(tg._yMax);
	}
	//setLabel
	/**
	 * @method TEACHER.ObjGraph
	 * @param {string} _title 標題，預設 y-x
	 * @param {string} _y 標題，預設 y
	 * @param {string} _x 標題，預設 x
	 */
	setLabel(_title , _y , _x){
		let tg = this;

		tg.labelTitle.setText(_title||'y-x');
		tg.labelY.setText(_y||'y');
		tg.labelX.setText(_x||'x');
	}


	//getter setter
	get xMin(){
        return this._xMin;
    }
    set xMin(value){
		this._xMin = value;
		this.changeScale();
    }

	//xMax
	get xMax(){
		return this._xMax;
	}
	set xMax(value){
		this._xMax = value;
		this.changeScale();
	}

	//yMin
	get yMin(){
        return this._yMin;
    }
    set yMin(value){
		this._yMin = value;
		this.changeScale();
    }
	
	//yMax
    get yMax(){
        return this._yMax;
    }
    set yMax(value){
		this._yMax = value;
		this.changeScale();
    }
}



  



	

//--老師幫你產生天空盒，地板--//
//--老師幫你產生天空盒，地板--//
//--老師幫你產生天空盒，地板--//
//skyBox天空盒
var skyBox=new THREE.Object3D();
skyBox.wallU=new TEACHER.ObjPicPlane(10000,10000,pics.wallU,'y',1);
skyBox.wallD=new TEACHER.ObjPicPlane(10000,10000,pics.wallD,'y',0);
skyBox.wallS=new TEACHER.ObjPicCylinder(5000,10000,pics.wallSide,true,'y',1);
skyBox.wallU.position.y=5000;
skyBox.wallD.position.y=-5000;
skyBox.add(skyBox.wallU).add(skyBox.wallD).add(skyBox.wallS);
world3D.scene.add(skyBox);

//ground地板
var ground=new TEACHER.ObjPicPlane(100,100,pics.ground,'y');
world3D.scene.add(ground);

var logo=new TEACHER.ObjPicPlane(100,100/8,pics.logo,'z',2);
logo.position.z=-50;
logo.position.y=100/8/2;
world3D.scene.add(logo);


//取得滑鼠3D位置
/**
 * @function getMouse3D 取得滑鼠3D位置
 * @param {string} _plane 平面名稱 "x","y,'z"，預設為"y"
 * @param {number} _c 截距，預設為0 
 */
function getMouse3D(_plane , _c){

	let p=_plane||"y";
	let vecN;
	let vecM=new THREE.Vector3();//mouse3D to return
	if(p==="x"){vecN=new THREE.Vector3(1,0,0);}
	else if(p==="y"){vecN=new THREE.Vector3(0,1,0);}
	else if(p==="z"){vecN=new THREE.Vector3(0,0,1);}
	else{log('錯誤!!');}
	let mouse = new THREE.Vector2();
	mouse.x = ( world2D.stage.mouseX / 1600 ) * 2 - 1;
	mouse.y = - ( world2D.stage.mouseY / 900 ) * 2 + 1;
	world3D.raycaster.setFromCamera( mouse, world3D.camera );
	world3D.raycaster.ray.intersectPlane ( new THREE.Plane(vecN) ,vecM);

	return vecM;
}







TEACHER.CCC=class ccc{
	constructor(_a){
		this.name=_a;
	}
}


//D.執行init，程式開始
init();
