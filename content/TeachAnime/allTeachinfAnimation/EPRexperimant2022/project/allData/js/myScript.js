'use strict';var detectorA,detectorB,pA,pB,sline0,skyBoxEPR,fps=60,log=console.log,gameMD=0,motionMD=0,flyX=0,isPlay=!1,nextStopX=10,dataQM=[],dataEPR=[],hasRecordQM=!1,hasRecordEPR=!1;function init(){ground.visible=!1;var a=new TEACHER.ObjPicPlane(100,10,"allData/pics/ground.png","y");a.position.y=-4,scene.add(a),initPlayers();for(var b=0;180>=b;b+=15)dataQM.push([0,0]),dataEPR.push([0,0]);world2D.btnShoot1.on("click",clickAction),world2D.btnShoot2.on("click",clickAction),world2D.btnShoot3.on("click",clickAction),world2D.btnShoot1.visible=!0,world2D.btnShoot2.visible=!1,world2D.btnShoot3.visible=!1,world2D.btn100.on("click",click100),world2D.btnClear.on("click",clickClear),world2D.rbEPR.on("click",clickRB),world2D.rbQM.on("click",clickRB),world2D.rbA01.on("click",clickRB),world2D.rbA02.on("click",clickRB),world2D.rbA03.on("click",clickRB),world2D.slThetaA.minimum=0,world2D.slThetaA.maximum=180,world2D.slThetaA.value=0,world2D.rbEPR.checked=1===gameMD,world2D.rbQM.checked=0===gameMD,world2D.rbA01.checked=0===motionMD,world2D.rbA02.checked=1===motionMD,world2D.rbA03.checked=2===motionMD,world2D.btnMid.on("click",clickDetectorAPOS),world2D.btnRight.on("click",clickDetectorAPOS),world2D.btnLeft.on("click",clickDetectorAPOS),setInterval(tick,1e3/fps)}function tick(){world2D.logo.gotoAndStop(gameMD),world2D.slThetaA.value=15*Math.round(world2D.slThetaA.value/15),1<Math.abs(world2D.slThetaA.value-180*detectorA.rotation.x/Math.PI)&&(log("reset"),resetShoot(),detectorA.rotation.x=world2D.slThetaA.value*Math.PI/180),flyX+=isPlay?2===motionMD?2:0===motionMD?1:.2:0,pA.position.x=flyX,pB.position.x=-flyX,0===gameMD?checkQMSpin():checkEPRSpin(),flyX>=nextStopX&&1===motionMD&&(isPlay=!1,world2D.btnShoot2.visible=!0,nextStopX=10>=nextStopX?Math.min(detectorA.position.x,-detectorB.position.x)+5:nextStopX<=Math.min(detectorA.position.x,-detectorB.position.x)+5?1<detectorA.position.x+detectorB.position.x?Math.max(detectorA.position.x,-detectorB.position.x)+5:Math.max(detectorA.position.x,-detectorB.position.x)+1e4:Math.max(detectorA.position.x,-detectorB.position.x)+1e4),flyX>Math.max(detectorA.position.x,-detectorB.position.x)+10&&resetShoot(),sline0.scale.x=(detectorA.position.x-detectorB.position.x)/60,sline0.position.x=(detectorA.position.x+detectorB.position.x)/2,showData(),skyBox.visible=0===gameMD,skyBoxEPR.visible=1===gameMD;var a=15*world2D.slCameraRR.value/80;world3D.cameraTarget.y=-a*Math.sin(world3D.cameraTheta),world3D.cameraTarget.x=a*Math.cos(world3D.cameraTheta)*Math.sin(world3D.cameraPhi),world3D.cameraTarget.z=a*Math.cos(world3D.cameraTheta)*Math.cos(world3D.cameraPhi),world3D.render(),world2D.stage.update()}MyJS.myResize();function clickAction(a){var b=a.target.name;"btnShoot1"===b?(isPlay=!0,world2D.btnShoot1.visible=!1,2===motionMD&&(world2D.btnShoot3.visible=!0)):"btnShoot2"===b&&(isPlay=!0,world2D.btnShoot2.visible=!1)}function clickDetectorAPOS(a){var b=a.target.parent.name;"btnRight"===b?(40!==detectorA.position.x&&resetShoot(),detectorA.position.x=40):"btnLeft"===b?(20!==detectorA.position.x&&resetShoot(),detectorA.position.x=20):"btnMid"===b&&(30!==detectorA.position.x&&resetShoot(),detectorA.position.x=30)}function clickRB(a){var b=a.target.parent.name;"rbEPR"===b||"rbQM"===b?(world2D.rbEPR.checked="rbEPR"===b,world2D.rbQM.checked="rbQM"===b,gameMD="rbEPR"===b?1:0,resetShoot()):("rbA01"===b||"rbA02"===b||"rbA03"===b)&&(world2D.rbA01.checked="rbA01"===b,world2D.rbA02.checked="rbA02"===b,world2D.rbA03.checked="rbA03"===b,resetShoot())}function resetShoot(){flyX=0,nextStopX=10,hasRecordEPR=hasRecordQM=!1,pA.arrow.visible=pB.arrow.visible=pA.sured=pB.sured=pA.measured=pB.measured=!1,pB.rotation.x=pA.rotation.x=0,world2D.rbA01.checked?(motionMD=0,world2D.btnShoot1.visible=!0,world2D.btnShoot2.visible=!1,world2D.btnShoot3.visible=!1,isPlay=!1):world2D.rbA02.checked?(motionMD=1,world2D.btnShoot1.visible=!0,world2D.btnShoot2.visible=!1,world2D.btnShoot3.visible=!1,isPlay=!1):world2D.rbA03.checked&&(motionMD=2,world2D.btnShoot1.visible=!1,world2D.btnShoot2.visible=!1,world2D.btnShoot3.visible=!1,isPlay=!0)}function showData(){var a=0===gameMD?dataQM:dataEPR,b=a[Math.round(180*detectorA.rotation.x/Math.PI/15)][0],c=a[Math.round(180*detectorA.rotation.x/Math.PI/15)][1];world2D.screen.tt00.text=Math.round(180*detectorA.rotation.x/Math.PI),world2D.screen.tt01.text=b,world2D.screen.tt02.text=c,world2D.screen.tt03.text=b+" - "+c,world2D.screen.tt04.text=b+" + "+c,world2D.screen.tt05.text=digit2((b-c)/(b+c));for(var d=0;180>=d;d+=15){var e=world2D.screen.theChart.barDotsQM[Math.round(d/15)],b=dataQM[Math.round(d/15)][0],c=dataQM[Math.round(d/15)][1],f=(b-c)/(b+c),g=Math.sqrt((b*(1-f)*(1-f)+c*(-1-f)*(-1-f))/(b+c)/(b+c-1));e.y=150-150*f,e.barU.y=300*(g/2)/2,e.barD.y=300*(-g/2)/2,e.barM.scaleY=300*(g/2)/100,e.visible=!isNaN(f),e.barU.visible=e.barD.visible=e.barM.visible=0<g;var e=world2D.screen.theChart.barDotsEPR[Math.round(d/15)],b=dataEPR[Math.round(d/15)][0],c=dataEPR[Math.round(d/15)][1],f=(b-c)/(b+c),g=Math.sqrt((b*(1-f)*(1-f)+c*(-1-f)*(-1-f))/(b+c)/(b+c-1));e.y=150-150*f,e.barU.y=300*(g/2)/2,e.barD.y=300*(-g/2)/2,e.barM.scaleY=300*(g/2)/100,e.visible=!isNaN(f),e.barU.visible=e.barD.visible=e.barM.visible=0<g}world2D.screen.theChart.scaleX=world2D.screen.theChart.scaleY=1.3,world2D.screen.theChart.x=450,world2D.screen.theChart.y=30,world2D.btnClear.x=1050,world2D.btnClear.y=835}function initPlayers(){detectorA=new OneDetector("R"),detectorB=new OneDetector("L"),detectorA.position.x=20,detectorB.position.x=-30,detectorB.rotation.y=Math.PI,scene.add(detectorA).add(detectorB),pA=new OneParticle("R"),pB=new OneParticle("L"),pA.position.x=15,pB.position.x=-15,scene.add(pA).add(pB),pA.pair=pB,pB.pair=pA;var a=new TEACHER.ObjCylinder(2,5,16737894,!1,"x");scene.add(a),sline0=new TEACHER.Line(43690,2,2),sline0.addPoint(-30,0,0),sline0.addPoint(30,0,0),sline0.update(),scene.add(sline0),skyBoxEPR=new THREE.Object3D,skyBoxEPR.wallU=new TEACHER.ObjPicPlane(1e4,1e4,"allData/pics/skyEPR/sU.png","y",1),skyBoxEPR.wallD=new TEACHER.ObjPicPlane(1e4,1e4,"allData/pics/skyEPR/sD.png","y",0),skyBoxEPR.wallS=new TEACHER.ObjPicCylinder(5e3,1e4,"allData/pics/skyEPR/sM.png",!0,"y",1),skyBoxEPR.wallU.position.y=5e3,skyBoxEPR.wallD.position.y=-5e3,skyBoxEPR.add(skyBoxEPR.wallU).add(skyBoxEPR.wallD).add(skyBoxEPR.wallS),world3D.scene.add(skyBoxEPR),world2D.screen.theChart.gg=new createjs.Graphics,world2D.screen.theChart.gg.setStrokeStyle(3),world2D.screen.theChart.gg.beginStroke("#666666"),world2D.screen.theChart.gg.moveTo(0,300),world2D.screen.theChart.gg.lineTo(500,0),world2D.screen.theChart.gg.beginStroke("#FF6666"),world2D.screen.theChart.gg.moveTo(0,300);for(var b=0;500>=b;b+=10)world2D.screen.theChart.gg.lineTo(b,150+150*Math.cos(b/500*Math.PI));world2D.screen.theChart.shape=new createjs.Shape(world2D.screen.theChart.gg),world2D.screen.theChart.addChild(world2D.screen.theChart.shape),world2D.screen.theChart.barDotsEPR=[],world2D.screen.theChart.barDotsQM=[];for(var c,d=0;180>=d;d+=15){c=new OneBarDot("#ff0000"),c.x=500*(d/180)-2.5,world2D.screen.theChart.addChild(c),world2D.screen.theChart.barDotsQM.push(c);var c=new OneBarDot("#111111");c.x=500*(d/180)+2.5,c.y=100,world2D.screen.theChart.addChild(c),world2D.screen.theChart.barDotsEPR.push(c)}}class OneDetector extends THREE.Object3D{constructor(a){super();let b=this;b.name=a;var c=new THREE.BoxGeometry(2,2,4,1,1,2);c.vertices[4].y-=2,c.vertices[10].y-=2;var d=new TEACHER.MSMat(255);b.magnetN=new THREE.Mesh(c,d),b.magnetN.position.y=4,b.magnetN.position.x=1;var e=new THREE.BoxGeometry(2,3,4,1,1,2),d=new TEACHER.MSMat(16711680);e.vertices[1].y-=1,e.vertices[7].y-=1,b.magnetS=new THREE.Mesh(e,d),b.magnetS.position.y=-2,b.magnetS.position.x=1,b.add(b.magnetN).add(b.magnetS);var d=new THREE.LineMaterial({color:43690,linewidth:2});d.resolution.set(window.innerWidth,window.innerHeight);var f=new THREE.LineGeometry,g=new THREE.LineGeometry;let h=10,j=new Float32Array(30),k=new Float32Array(30);for(var l=0;l<h;l++)j[3*l+0]=k[3*l+0]=10*l/h,j[3*l+1]=1.5*Math.pow(l/h,2),k[3*l+1]=-j[3*l+1],j[3*l+2]=k[3*l+2]=0;f.setPositions(j),g.setPositions(k),b.line0U=new THREE.Line2(f,d),b.line0D=new THREE.Line2(g,d);var d=new THREE.LineMaterial({color:65535,linewidth:5});d.resolution.set(window.innerWidth,window.innerHeight),b.line1U=new THREE.Line2(f,d),b.line1D=new THREE.Line2(g,d),b.add(b.line0U).add(b.line0D).add(b.line1U).add(b.line1D),b.dScreen0U=new TEACHER.ObjPicPlane(8,4,"allData/pics/detector0U.png","x",2),b.dScreen0D=new TEACHER.ObjPicPlane(8,4,"allData/pics/detector0D.png","x",2),b.dScreen0U.position.y=2,b.dScreen0D.position.y=-2,b.dScreen0D.rotation.x=Math.PI,b.dScreen0U.position.x=b.dScreen0D.position.x=9.5,b.dScreen1U=new TEACHER.ObjPicPlane(10,5,"allData/pics/detector1U.png","x",2),b.dScreen1D=new TEACHER.ObjPicPlane(10,5,"allData/pics/detector1D.png","x",2),b.dScreen1U.position.y=2.5,b.dScreen1D.position.y=-2.5,b.dScreen1D.rotation.x=Math.PI,b.dScreen1U.position.x=b.dScreen1D.position.x=9.5,b.add(b.dScreen0U).add(b.dScreen0D).add(b.dScreen1U).add(b.dScreen1D)}}class OneParticle extends THREE.Object3D{constructor(a){super();var b=this;b.name=a,b.sured=!1,b.measured=!1,b.ball=new TEACHER.ObjSphere(.8,6750054),b.add(b.ball),b.arrow=new TEACHER.ObjArrow(.4,16776960),b.arrow.setArrow(0,5,0),b.add(b.arrow),b.qBall=new TEACHER.ObjPicSphere(1.2,"allData/pics/questionM.png"),b.add(this.qBall)}}function checkQMSpin(){detectorA.position.x===-detectorB.position.x?flyX>=detectorA.position.x&&!pA.sured&&!pB.sured&&(.5>Math.random()?(pA.rotation.x=detectorA.rotation.x+Math.PI*(.5>Math.random()?1:0),pB.rotation.x=pA.rotation.x+Math.PI,pB.rotation.x=detectorB.rotation.x+Math.PI*(Math.random()<Math.pow(Math.cos(.5*(pB.rotation.x-detectorB.rotation.x)),2)?0:1)):(pB.rotation.x=detectorB.rotation.x+Math.PI*(.5>Math.random()?1:0),pA.rotation.x=pB.rotation.x+Math.PI,pA.rotation.x=detectorA.rotation.x+Math.PI*(Math.random()<Math.pow(Math.cos(.5*(pA.rotation.x-detectorA.rotation.x)),2)?0:1)),pA.sured=pB.sured=pA.measured=pB.measured=!0):detectorA.position.x<-detectorB.position.x?!(flyX>=detectorA.position.x)||pA.sured||pA.measured?flyX>=-detectorB.position.x&&!pB.measured&&(pB.rotation.x=detectorB.rotation.x+Math.PI*(Math.random()<Math.pow(Math.cos(.5*(pB.rotation.x-detectorB.rotation.x)),2)?0:1),pB.measured=!0):(pA.rotation.x=detectorA.rotation.x+Math.PI*(.5>Math.random()?1:0),pB.rotation.x=pA.rotation.x+Math.PI,pA.sured=pB.sured=pA.measured=!0):!(flyX>=-detectorB.position.x)||pB.sured||pB.measured?flyX>=detectorA.position.x&&!pA.measured&&(pA.rotation.x=detectorA.rotation.x+Math.PI*(Math.random()<Math.pow(Math.cos(.5*(pA.rotation.x-detectorA.rotation.x)),2)?0:1),pA.measured=!0):(pB.rotation.x=detectorB.rotation.x+Math.PI*(.5>Math.random()?1:0),pA.rotation.x=pB.rotation.x+Math.PI,pB.sured=pA.sured=pB.measured=!0),pA.visible=pA.position.x<detectorA.position.x+10,pB.visible=-pB.position.x<-detectorB.position.x+10,pA.arrow.visible=pA.sured,pB.arrow.visible=pB.sured,pA.qBall.visible=!pA.sured,pB.qBall.visible=!pB.sured,detectorA.dScreen1U.visible=detectorA.line1U.visible=pA.measured&&0<Math.cos(pA.rotation.x-detectorA.rotation.x),detectorA.dScreen1D.visible=detectorA.line1D.visible=pA.measured&&0>Math.cos(pA.rotation.x-detectorA.rotation.x),detectorB.dScreen1U.visible=detectorB.line1U.visible=pB.measured&&0<Math.cos(pB.rotation.x-detectorB.rotation.x),detectorB.dScreen1D.visible=detectorB.line1D.visible=pB.measured&&0>Math.cos(pB.rotation.x-detectorB.rotation.x),detectorA.dScreen0U.visible=!detectorA.dScreen1U.visible,detectorA.dScreen0D.visible=!detectorA.dScreen1D.visible,detectorB.dScreen0U.visible=!detectorB.dScreen1U.visible,detectorB.dScreen0D.visible=!detectorB.dScreen1D.visible,pA.measured&&pB.measured&&!hasRecordQM&&(hasRecordQM=!0,detectorA.line1U.visible&&detectorB.line1U.visible||detectorA.line1D.visible&&detectorB.line1D.visible?dataQM[Math.round(180*detectorA.rotation.x/Math.PI/15)][0]++:(detectorA.line1U.visible&&detectorB.line1D.visible||detectorA.line1D.visible&&detectorB.line1U.visible)&&dataQM[Math.round(180*detectorA.rotation.x/Math.PI/15)][1]++)}function checkEPRSpin(){2>=flyX&&(pA.rotation.x=(15*Math.round(360*Math.random()/15)+7.5)*Math.PI/180,pB.rotation.x=pA.rotation.x+Math.PI),pA.qBall.visible=pB.qBall.visible=!1,pA.arrow.visible=pB.arrow.visible=2<flyX,pA.measured=pA.position.x>detectorA.position.x,pB.measured=-pB.position.x>-detectorB.position.x,pA.visible=pA.position.x<detectorA.position.x+10,pB.visible=-pB.position.x<-detectorB.position.x+10,detectorA.dScreen1U.visible=detectorA.line1U.visible=pA.measured&&0<Math.cos(pA.rotation.x-detectorA.rotation.x),detectorA.dScreen1D.visible=detectorA.line1D.visible=pA.measured&&0>Math.cos(pA.rotation.x-detectorA.rotation.x),detectorB.dScreen1U.visible=detectorB.line1U.visible=pB.measured&&0<Math.cos(pB.rotation.x-detectorB.rotation.x),detectorB.dScreen1D.visible=detectorB.line1D.visible=pB.measured&&0>Math.cos(pB.rotation.x-detectorB.rotation.x),detectorA.dScreen0U.visible=!detectorA.dScreen1U.visible,detectorA.dScreen0D.visible=!detectorA.dScreen1D.visible,detectorB.dScreen0U.visible=!detectorB.dScreen1U.visible,detectorB.dScreen0D.visible=!detectorB.dScreen1D.visible,pA.measured&&pB.measured&&!hasRecordEPR&&(hasRecordEPR=!0,detectorA.line1U.visible&&detectorB.line1U.visible||detectorA.line1D.visible&&detectorB.line1D.visible?dataEPR[Math.round(180*detectorA.rotation.x/Math.PI/15)][0]++:(detectorA.line1U.visible&&detectorB.line1D.visible||detectorA.line1D.visible&&detectorB.line1U.visible)&&dataEPR[Math.round(180*detectorA.rotation.x/Math.PI/15)][1]++)}function click100(){var a,b;if(0===gameMD)for(var c=0;100>c;c++).5>Math.random()?(a=detectorA.rotation.x+Math.PI*(.5>Math.random()?1:0),b=a+Math.PI,b=detectorB.rotation.x+Math.PI*(Math.random()<Math.pow(Math.cos(.5*(b-detectorB.rotation.x)),2)?0:1)):(b=detectorB.rotation.x+Math.PI*(.5>Math.random()?1:0),a=b+Math.PI,a=detectorA.rotation.x+Math.PI*(Math.random()<Math.pow(Math.cos(.5*(a-detectorA.rotation.x)),2)?0:1)),0<Math.cos(a-detectorA.rotation.x)*Math.cos(b-detectorB.rotation.x)?dataQM[Math.round(180*detectorA.rotation.x/Math.PI/15)][0]++:dataQM[Math.round(180*detectorA.rotation.x/Math.PI/15)][1]++;else for(var c=0;100>c;c++)a=(15*Math.round(360*Math.random()/15)+7.5)*Math.PI/180,b=a+Math.PI,0<Math.cos(a-detectorA.rotation.x)*Math.cos(b-detectorB.rotation.x)?dataEPR[Math.round(180*detectorA.rotation.x/Math.PI/15)][0]++:dataEPR[Math.round(180*detectorA.rotation.x/Math.PI/15)][1]++}function clickClear(){for(var a=0;180>=a;a+=15)dataEPR[Math.round(a/15)][0]=0,dataEPR[Math.round(a/15)][1]=0,dataQM[Math.round(a/15)][0]=0,dataQM[Math.round(a/15)][1]=0}class OneBarDot extends createjs.Container{constructor(a){super();var b=this,c=a||"#ff00ff";b.dot=new createjs.Shape,b.dot.graphics.beginFill(c),b.dot.graphics.drawCircle(0,0,7),b.addChild(b.dot),b.barU=new createjs.Shape,b.barD=new createjs.Shape,b.barM=new createjs.Shape,b.barU.graphics.setStrokeStyle(2),b.barU.graphics.beginStroke(c),b.barU.graphics.moveTo(-10,0),b.barU.graphics.lineTo(10,0),b.barD.graphics.setStrokeStyle(2),b.barD.graphics.beginStroke(c),b.barD.graphics.moveTo(-10,0),b.barD.graphics.lineTo(10,0),b.barM.graphics.setStrokeStyle(2),b.barM.graphics.beginStroke(c),b.barM.graphics.moveTo(0,-50),b.barM.graphics.lineTo(0,50),b.addChild(b.barU),b.addChild(b.barD),b.addChild(b.barM)}}function digit2(a){var b=Math.round(100*a)/100+"";return isNaN(a)&&(b="??"),b}var TEACHER={};TEACHER.ObjPlane=class extends THREE.Object3D{constructor(a,b,c,d,e){super();let f=this;f.mat=new TEACHER.MSMat(c,e),f.geo=new THREE.PlaneGeometry(a||10,b||10,1,1),f.mesh=new THREE.Mesh(f.geo,f.mat),"x"===d?f.mesh.rotation.y=.5*Math.PI:"y"==d&&(f.mesh.rotation.x=-.5*Math.PI),f.add(f.mesh)}},TEACHER.ObjCylinder=class extends THREE.Object3D{constructor(a,b,c,d,e,f){super();let g=this;g.mat=new TEACHER.MSMat(c,f),g.geo=new THREE.CylinderGeometry(a||10,a||10,b||10,32,2,d),g.mesh=new THREE.Mesh(g.geo,g.mat),"x"===e?g.mesh.rotation.z=-.5*Math.PI:"z"==e&&(g.mesh.rotation.x=.5*Math.PI),g.add(g.mesh)}},TEACHER.ObjSphere=class extends THREE.Object3D{constructor(a,b,c){super();let d=this;d.mat=new TEACHER.MSMat(b,c),d.geo=new THREE.SphereGeometry(a||10,32,16),d.mesh=new THREE.Mesh(d.geo,d.mat),d.add(d.mesh)}},TEACHER.ObjBox=class extends THREE.Object3D{constructor(a,b,c,d,e){super();let f=this;f.mat=new TEACHER.MSMat(d,e),f.geo=new THREE.BoxGeometry(a||10,b||10,c||10),f.mesh=new THREE.Mesh(f.geo,f.mat),f.add(f.mesh)}},TEACHER.MSMat=class extends THREE.MeshStandardMaterial{constructor(a,b){super({color:a||16711935,roughness:.4,side:b||0})}},TEACHER.ObjPicPlane=class extends THREE.Object3D{constructor(a,b,c,d,e){super();let f=this,g=new THREE.TextureLoader().load(c);f.mat=new THREE.MeshBasicMaterial({map:g,transparent:!0,side:e||0}),f.geo=new THREE.PlaneGeometry(a,b,1,1),f.mesh=new THREE.Mesh(f.geo,f.mat),"x"===d?f.mesh.rotation.y=.5*Math.PI:"y"==d&&(f.mesh.rotation.x=-.5*Math.PI),f.add(f.mesh)}},TEACHER.ObjPicCylinder=class extends THREE.Object3D{constructor(a,b,c,d,e,f){super();let g=this,h=new THREE.TextureLoader().load(c);g.mat=new THREE.MeshBasicMaterial({map:h,side:f||0}),g.geo=new THREE.CylinderGeometry(a||10,a||10,b||10,32,4,d),g.mesh=new THREE.Mesh(g.geo,g.mat),"x"===e?g.mesh.rotation.z=-.5*Math.PI:"z"===e?(g.mesh.rotation.y=.5*Math.PI,g.mesh.rotation.x=.5*Math.PI):"y"==e&&(g.mesh.rotation.y=.5*Math.PI),g.add(g.mesh)}},TEACHER.ObjPicSphere=class extends THREE.Object3D{constructor(a,b,c){super();let d=this,e=new THREE.TextureLoader().load(b);d.mat=new THREE.MeshBasicMaterial({map:e,side:c||0}),d.geo=new THREE.SphereGeometry(a||10,32,16),d.mesh=new THREE.Mesh(d.geo,d.mat),d.add(d.mesh)}},TEACHER.ObjArrow=class extends THREE.Object3D{constructor(a,b){super();let c=.35,d=.5,e=new THREE.MeshStandardMaterial({color:b||16711935,roughness:.4}),f=new THREE.ConeGeometry(a||10,35,32);this.ArrowHead=new THREE.Mesh(f,e),this.ArrowHead.position.y=100*(1-.5*c)-30,f=new THREE.CylinderGeometry((a||10)*d,(a||10)*d,65,32,2),this.ArrowBody=new THREE.Mesh(f,e),this.ArrowBody.position.y=50*(1-c)-30,this.rotX=new THREE.Object3D,this.rotY=new THREE.Object3D,this.add(this.rotY),this.rotY.add(this.rotX),this.rotX.add(this.ArrowBody),this.rotX.add(this.ArrowHead)}setArrow(a,b,c){let d=a*a+b*b+c*c,e=Math.sqrt(d);0<d?(this.rotX.visible=!0,this.rotX.scale.y=e/100):this.rotX.visible=!1,this.rotX.rotation.x=Math.acos(b/e),this.rotY.rotation.y=Math.atan2(a,c)}},TEACHER.ObjSpring=class extends THREE.Object3D{constructor(a,b,c,d,e){super();let f=a||20;this.L0=f;let g=[],h=d||5,j=b||5,k=c||.5;g.push(new THREE.Vector3(0,0,0)),g.push(new THREE.Vector3(0,.05*f,0));for(var l=0;l<=16*h;l++)g.push(new THREE.Vector3(j*Math.cos(2*l*Math.PI/16),f*(.05+.9*l/h/16),j*Math.sin(2*l*Math.PI/16)));g.push(new THREE.Vector3(0,.95*f,0)),g.push(new THREE.Vector3(0,f,0));let m=new THREE.CatmullRomCurve3(g),n=new THREE.MeshStandardMaterial({color:e||16711935,roughness:.4}),o=new THREE.TubeGeometry(m,200,k,12);this.mesh=new THREE.Mesh(o,n),this.rotX=new THREE.Object3D,this.rotY=new THREE.Object3D,this.add(this.rotY),this.rotY.add(this.rotX),this.rotX.add(this.mesh),this.nn=h,this.rB=j,this.rS=k,this.bar1=new TEACHER.ObjCylinder(k,100,e||16711935,!1,"y"),this.bar2=new TEACHER.ObjCylinder(k,100,e||16711935,!1,"x"),this.bar3=new TEACHER.ObjCylinder(k,100,e||16711935,!1,"x"),this.bar4=new TEACHER.ObjCylinder(k,100,e||16711935,!1,"y"),this.rotX.add(this.bar1).add(this.bar2).add(this.bar3).add(this.bar4)}setSpring(a,b,c){let d=a*a+b*b+c*c,e=Math.sqrt(d);0<d?(this.rotX.visible=!0,this.rotX.scale.y=e/this.L0):this.rotX.visible=!1,this.rotX.rotation.x=Math.acos(b/e),this.rotY.rotation.y=Math.atan2(a,c)}setSpringNew(a,b,c){let d=a*a+b*b+c*c,e=Math.sqrt(d);if(0<d){this.rotX.visible=!0;let a=e,b=[],c=this.nn,d=this.rB,g=this.rS;b.push(new THREE.Vector3(0,0,0)),b.push(new THREE.Vector3(0,.05*a,0));for(var f=0;f<=16*c;f++)b.push(new THREE.Vector3(d*Math.cos(2*f*Math.PI/16),a*(.05+.9*f/c/16),d*Math.sin(2*f*Math.PI/16)));b.push(new THREE.Vector3(0,.95*a,0)),b.push(new THREE.Vector3(0,a,0));let h=new THREE.CatmullRomCurve3(b),i=new THREE.TubeGeometry(h,500,g,12);this.mesh.geometry=i}else this.rotX.visible=!1;this.rotX.rotation.x=Math.acos(b/e),this.rotY.rotation.y=Math.atan2(a,c)}setSpringNew222(a,b,c){let d=a*a+b*b+c*c,e=Math.sqrt(d);if(0<d){this.rotX.visible=!0;let a=this.nn,b=this.rB,c=this.rS;const d=this.mesh.geometry.attributes.position.array;for(var f=0;201>f;f++)for(var g=2*(f/200*a)*Math.PI,h=b*Math.cos(g),k=.8*e*f/200+.1*e,l=b*Math.sin(g),m=0;13>m;m++){var n=-2*Math.PI/12*m+Math.PI,o=h+c*Math.cos(n)*Math.cos(g),p=k+c*Math.sin(n),q=l+c*Math.cos(n)*Math.sin(g);d[3*(13*f)+3*m]=o,d[3*(13*f)+3*m+1]=p,d[3*(13*f)+3*m+2]=q}this.bar1.scale.y=this.bar4.scale.y=.1*e/100,this.bar2.scale.x=this.bar3.scale.x=b/100,this.bar1.position.y=.1*e/2,this.bar4.position.y=e*(1-.1/2),this.bar2.position.y=.1*e,this.bar3.position.y=e*(1-.1),this.bar2.position.x=this.bar3.position.x=.5*b}else this.rotX.visible=!1;this.rotX.rotation.x=Math.acos(b/e),this.rotY.rotation.y=Math.atan2(a,c),this.mesh.geometry.attributes.position.needsUpdate=!0,this.mesh.geometry.computeVertexNormals()}},TEACHER.Points=class extends THREE.Points{constructor(a,b,c){let d=new THREE.Color(a||16711935),e=new THREE.BufferGeometry,f=[];e.setAttribute("position",new THREE.Float32BufferAttribute(f,3)),e.computeBoundingSphere();let g=new THREE.PointsMaterial({size:b||1,map:TEACHER.Points.createCanvasMaterial("#"+d.getHexString(),64),transparent:!0,depthWrite:!1});super(e,g);let h=this;h.nnMax=c||1e4,h.nnNow=0,h.geometry=e,h.positions=f}static createCanvasMaterial(a,b){var c=document.createElement("canvas");c.width=c.height=b;var d=c.getContext("2d");d.imageSmoothingEnabled=!1;var e=new THREE.Texture(c),f=b/2;return d.beginPath(),d.arc(f,f,b/2-3,0,2*Math.PI,!1),d.closePath(),d.fillStyle=a,d.fill(),e.needsUpdate=!0,e}addPoint(a,b,c){let d=this;d.nnNow<d.nnMax?d.nnNow++:(log("TEACHER.Points \u5230\u9054\u6700\u5927\u9EDE\u6578"),d.positions.shift(),d.positions.shift(),d.positions.shift()),d.positions.push(a,b,c)}clear(){let a=this;a.positions=[],a.nnNow=0,a.update()}setPoint(a,b,c,d){let e=this;a>e.nnMax?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Points \u6700\u5927\u9EDE\u6578 nnMax"):a>e.nnNow?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Points \u73FE\u5728\u9EDE\u6578 nnNow"):(e.positions[3*a]=b,e.positions[3*a+1]=c,e.positions[3*a+2]=d)}getPoint(a){let b=this,c=new THREE.Vector3;return a>b.nnMax?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Points \u6700\u5927\u9EDE\u6578 nnMax"):a>b.nnNow?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Points \u73FE\u5728\u9EDE\u6578 nnNow"):(c.x=b.positions[3*a],c.y=b.positions[3*a+1],c.z=b.positions[3*a+2]),c}update(){let a=this;a.geometry.setAttribute("position",new THREE.Float32BufferAttribute(a.positions,3)),a.geometry.computeBoundingSphere(),a.geometry.attributes.position.needsUpdate=!0}},TEACHER.Line=class extends THREE.Line2{constructor(a,b,c){let d=c||1e4;var e=new THREE.LineMaterial({color:a||16711935,linewidth:b||1});e.resolution.set(window.innerWidth,window.innerHeight);let f=new THREE.LineGeometry,g=new Float32Array(3*d);f.setPositions(g),super(f,e);let h=this;h.nnMax=d,h.lineWidth=b||1,h.nnNow=0,h.geometry=f,h.positions=g}addPoint(a,b,c){let d=this;if(d.nnNow<d.nnMax)d.nnNow++;else{log("TEACHER.Line \u5230\u9054\u6700\u5927\u9EDE\u6578");for(var e=0;e<d.nnMax-1;e++)d.positions[3*e]=d.positions[3*e+3],d.positions[3*e+1]=d.positions[3*e+4],d.positions[3*e+2]=d.positions[3*e+5]}for(var e=d.nnNow;e<=d.nnMax;e++)d.positions[3*(e-1)]=a,d.positions[3*(e-1)+1]=b,d.positions[3*(e-1)+2]=c}clear(){let a=this;a.positions=new Float32Array(3*a.nnMax);a.nnNow=0}setPoint(a,b,c,d){let e=this;a>e.nnMax?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Line \u6700\u5927\u9EDE\u6578 nnMax"):a>e.nnNow?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Line \u73FE\u5728\u9EDE\u6578 nnNow"):(e.positions[3*a]=b,e.positions[3*a+1]=c,e.positions[3*a+2]=d)}getPoint(a){let b=this,c=new THREE.Vector3;return a>b.nnMax?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Line \u6700\u5927\u9EDE\u6578 nnMax"):a>b.nnNow?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Line \u73FE\u5728\u9EDE\u6578 nnNow"):(c.x=b.positions[3*a],c.y=b.positions[3*a+1],c.z=b.positions[3*a+2]),c}update(){let a=this,b=a.getPoint(a.nnNow-1);for(var c=a.nnNow;c<=a.nnMax;c++)a.positions[3*c]=b.x,a.positions[3*c+1]=b.y,a.positions[3*c+2]=b.z;a.geometry.setPositions(a.positions)}},TEACHER.ObjTextPlane=class extends THREE.Object3D{constructor(a,b,c,d,e,f){super();let g=this,h=Math.round(Math.log2(a/b)),i=$("<canvas>").attr("width",128*Math.pow(2,h)+"").attr("height","128");g.stage=new createjs.Stage(i[0]);let j=new createjs.Container;if(f){let a=new createjs.Shape,b=new THREE.Color(f);a.graphics.c().f("#"+b.getHexString()).dr(0,0,128*Math.pow(2,h),128),j.addChild(a)}g.ctext=new createjs.Text;let k=new THREE.Color(e||16777215);g.ctext.color="#"+k.getHexString(),g.ctext.font="96px Arial",g.ctext.text=c||"",g.ctext.textAlign="center",g.ctext.textBaseline="middle",g.ctext.x=128*Math.pow(2,h)/2,g.ctext.y=64,j.addChild(g.ctext),g.stage.addChild(j),g.stage.update(),g.texture=new THREE.Texture(i[0]);var l=new THREE.MeshBasicMaterial({map:g.texture,transparent:!0}),m=new THREE.PlaneGeometry(a||10,b||10,1,1);g.texture.needsUpdate=!0,g.plane1=new THREE.Mesh(m,l),g.plane2=new THREE.Mesh(m,l),g.plane2.rotation.y=Math.PI;let n=new THREE.Object3D;n.add(g.plane1).add(g.plane2),"x"===d?n.rotation.y=.5*Math.PI:"y"==d&&(n.rotation.x=-.5*Math.PI),g.add(n)}setText(a){let b=this;b.ctext.text=a,b.stage.update(),b.texture.needsUpdate=!0}},TEACHER.ObjGraph=class extends THREE.Object3D{constructor(a,b,c,d,e,f,g){super();let h=this;h.objCon=new THREE.Object3D,h._xMin=a||0,h._xMax=b||10,h._yMin=c||0,h._yMax=d||10,h.divXN=5,h.divYN=4,h.frameMat=new THREE.LineBasicMaterial({color:e||16777215});for(var i=[],j=0;j<=h.divXN;j++)i.push(new THREE.Vector3(-50+20*j,0,0)),i.push(new THREE.Vector3(-50+20*j,50,0));for(var k=0;k<=h.divYN;k++)i.push(new THREE.Vector3(-50,12.5*k,0)),i.push(new THREE.Vector3(50,12.5*k,0));let l=new THREE.BufferGeometry().setFromPoints(i);h.frame=new THREE.LineSegments(l,h.frameMat),h.objCon.add(h.frame),h.labelXMin=new TEACHER.ObjTextPlane(20,5,h._xMin+"","z",e||16777215),h.labelXMin.position.x=-50,h.labelXMin.position.y=-3,h.objCon.add(h.labelXMin),h.labelXMax=new TEACHER.ObjTextPlane(20,5,h._xMax+"","z",e||16777215),h.labelXMax.position.x=50,h.labelXMax.position.y=-3,h.objCon.add(h.labelXMax),h.labelYMin=new TEACHER.ObjTextPlane(20,5,h._yMin+"","z",e||16777215),h.labelYMin.position.x=-53,h.labelYMin.position.y=0,h.objCon.add(h.labelYMin),h.labelYMax=new TEACHER.ObjTextPlane(20,5,h._yMax+"","z",e||16777215),h.labelYMax.position.x=-53,h.labelYMax.position.y=50,h.objCon.add(h.labelYMax),h.labelX=new TEACHER.ObjTextPlane(24,7,"x","z",e||16777215),h.labelX.position.x=60,h.labelX.position.y=4,h.labelX.position.z=1,h.labelY=new TEACHER.ObjTextPlane(24,7,"y","z",e||16777215),h.labelY.position.x=-60,h.labelY.position.y=25,h.labelY.position.z=1,h.labelY.rotation.z=Math.PI/2,h.labelTitle=new TEACHER.ObjTextPlane(40,10,"y-x","z",e||16777215),h.labelTitle.position.y=53,h.labelTitle.position.z=1,h.objCon.add(h.labelX).add(h.labelY).add(h.labelTitle),h._lineColor=f,h._nnMax=g,h.line=new TEACHER.Line(h._lineColor||16776960,2,h._nnMax),h.objCon.add(h.line),h.changeScale(),h.add(h.objCon)}addPoint(a,b){let c=this;c.line.addPoint(a,b,0),c.line.update()}clear(){let a=this;a.line.clear()}changeScale(){let a=this;a.line.scale.x=100/(a._xMax-a._xMin),a.line.scale.y=50/(a._yMax-a._yMin),a.line.position.x=-50-a._xMin*a.line.scale.x,a.line.position.y=-a._yMin*a.line.scale.y,a.labelXMin.setText(a._xMin),a.labelXMax.setText(a._xMax),a.labelYMin.setText(a._yMin),a.labelYMax.setText(a._yMax)}setLabel(a,b,c){let d=this;d.labelTitle.setText(a||"y-x"),d.labelY.setText(b||"y"),d.labelX.setText(c||"x")}get xMin(){return this._xMin}set xMin(a){this._xMin=a,this.changeScale()}get xMax(){return this._xMax}set xMax(a){this._xMax=a,this.changeScale()}get yMin(){return this._yMin}set yMin(a){this._yMin=a,this.changeScale()}get yMax(){return this._yMax}set yMax(a){this._yMax=a,this.changeScale()}};var skyBox=new THREE.Object3D;skyBox.wallU=new TEACHER.ObjPicPlane(1e4,1e4,pics.wallU,"y",1),skyBox.wallD=new TEACHER.ObjPicPlane(1e4,1e4,pics.wallD,"y",0),skyBox.wallS=new TEACHER.ObjPicCylinder(5e3,1e4,pics.wallSide,!0,"y",1),skyBox.wallU.position.y=5e3,skyBox.wallD.position.y=-5e3,skyBox.add(skyBox.wallU).add(skyBox.wallD).add(skyBox.wallS),world3D.scene.add(skyBox);var ground=new TEACHER.ObjPicPlane(100,100,pics.ground,"y");world3D.scene.add(ground);var logo=new TEACHER.ObjPicPlane(100,100/8,pics.logo,"z",2);logo.position.z=-50,logo.position.y=100/8/2;function getMouse3D(a){let b,c=a||"y",d=new THREE.Vector3;"x"===c?b=new THREE.Vector3(1,0,0):"y"===c?b=new THREE.Vector3(0,1,0):"z"===c?b=new THREE.Vector3(0,0,1):log("\u932F\u8AA4!!");let e=new THREE.Vector2;return e.x=2*(world2D.stage.mouseX/1600)-1,e.y=2*-(world2D.stage.mouseY/900)+1,world3D.raycaster.setFromCamera(e,world3D.camera),world3D.raycaster.ray.intersectPlane(new THREE.Plane(b),d),d}TEACHER.CCC=class{constructor(a){this.name=a}},init();