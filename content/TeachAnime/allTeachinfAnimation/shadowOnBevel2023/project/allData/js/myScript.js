'use strict';var theWorldCon,fixedGround,mGround,mGroundY,mGroundX,mGroundZ,mGroundH,mGroundV,mWallB,mWallS,lights,lBarBall,lBarCar,ball,theCar,xBW,yBW,xCW,yCW,fps=60,log=console.log,ligTheta=0;const theta0=30*Math.PI/180;var gg=1.2,ax=-gg*Math.sin(theta0),ay=-gg*Math.cos(theta0),vx=0,vy=0,dt=.08,isCarPlay=!1,isRotateView=!1;const L0=200;var tt=200;function init(){theWorldCon=new THREE.Object3D,theWorldCon.rotation.z=theta0,scene.add(theWorldCon),mGroundY=new ObjCanvasPlane(200,20,"y","textureGroundY",4),theWorldCon.add(mGroundY);var a=new TEACHER.ObjPlane(200,2,6710886,"z");a.position.z=10,a.position.y=-1,theWorldCon.add(a);var a=new TEACHER.ObjPlane(200,2,6710886,"z");a.rotation.y=Math.PI,a.position.z=-10,a.position.y=-1,theWorldCon.add(a);var a=new TEACHER.ObjPlane(20,2,6710886,"x");a.position.x=100,a.position.y=-1,theWorldCon.add(a);var a=new TEACHER.ObjPlane(202,20,6710886,"y");a.rotation.x=Math.PI,a.position.y=-2,a.position.x=-1,theWorldCon.add(a),mGroundX=new ObjCanvasPlane(20,50,"x","textureGroundX",4),mGroundX.position.x=-100,mGroundX.position.y=25,theWorldCon.add(mGroundX);var a=new TEACHER.ObjPlane(2,52,6710886,"z");a.position.x=-101,a.position.y=24,a.position.z=10,theWorldCon.add(a);var a=new TEACHER.ObjPlane(2,52,6710886,"z");a.position.x=-101,a.position.y=24,a.position.z=-10,a.rotation.y=Math.PI,theWorldCon.add(a);var a=new TEACHER.ObjPlane(2,20,6710886,"y");a.position.x=-101,a.position.y=50,theWorldCon.add(a);var a=new TEACHER.ObjPlane(20,52,6710886,"x");a.position.x=-102,a.position.y=24,a.rotation.y=Math.PI,theWorldCon.add(a),fixedGround=new THREE.Object3D,fixedGround.rotation.z=-theta0,theWorldCon.add(fixedGround),groundA.position.y=groundB.position.y=-100*Math.sin(theta0)-2,groundA.scale.x=groundA.scale.z=2,groundB.scale.x=groundB.scale.z=2,groundA.position.z=60,groundB.position.z=-60;for(var b=-80;80>=b;b+=80){let a=(b+90)*Math.tan(theta0)-1;for(var c=0;2>c;c++){let d=new TEACHER.ObjBox(2,a,2,6710886);d.position.x=b,d.position.y=a/2+groundA.position.y-.5,d.position.z=.5>c?-8:8,fixedGround.add(d)}}fixedGround.add(groundA).add(groundB),fixedGround.add(skyBox),mGroundZ=new ObjCanvasPlane(200,160,"z","textureGroundZ",4),mGroundZ.position.z=-60,mGroundZ.position.y=-1,fixedGround.add(mGroundZ),mGroundH=new ObjCanvasPlane(200,20,"y","textureH",4),mGroundH.position.y=-100*Math.sin(theta0)-2,fixedGround.add(mGroundH),mGroundV=new ObjCanvasPlane(20,131,"x","textureV",4),mGroundV.position.x=100,mGroundV.position.y=13.5,mGroundV.rotation.z=Math.PI,fixedGround.add(mGroundV),lights=new THREE.Object3D;for(var d=0;19>d;d++){let a=new TEACHER.ObjArrow(2,6710886);a.position.x=-100+10*d+10,a.position.y=100,a.setArrow(0,-20,0),lights.add(a)}fixedGround.add(lights),lBarBall=new TEACHER.ObjBox(.5,200,.5,1118481),lBarBall.position.y=0,lBarCar=new TEACHER.ObjBox(.5,200,.5,1118481),lBarCar.position.y=0,lights.add(lBarCar).add(lBarBall);const e=new THREE.TorusGeometry(140,3,16,64),f=new THREE.MeshStandardMaterial({color:10066329}),g=new THREE.Mesh(e,f);lights.add(g);let h=new TEACHER.ObjBox(190,5,10,10066329);h.position.y=102.5,lights.add(h),theCar=new THREE.Object3D,theWorldCon.add(theCar),theCar.w=10,theCar.h=2,theCar.position.x=85+15*Math.sin(theta0),theCar.box=new TEACHER.ObjBox(theCar.w,2,theCar.w,255),theCar.box.position.y=theCar.h-1,theCar.add(theCar.box),theCar.wheels=[];for(var d=0;4>d;d++){let a=new TEACHER.ObjCylinder(2,1,26367,!1,"z");a.position.x=(.5*theCar.w-2)*(2>d?-1:1),a.position.z=(.5*theCar.w+.8)*(0==d%2?-1:1),a.position.y=2,theCar.add(a),theCar.wheels.push(a);let b=new TEACHER.ObjCylinder(.4,1.3,65535,!1,"z");b.position.x=1.2,a.add(b)}theCar.spring=new TEACHER.ObjSpring(5,2,.4,4,16776960),theCar.spring.position.y=theCar.h,theCar.add(theCar.spring),theCar.springTime=-1,ball=new TEACHER.ObjSphere(3,16711680),ball.rr=3,ball.position.y=theCar.h+2+3,theCar.add(ball),world2D.btnReset.on("click",clickBtnDrop),world2D.btnRelease.on("click",clickBtnDrop),world2D.btnShoot.on("click",clickBtnDrop),world2D.chFixedGround.checked=!0,world2D.rbGG.on("click",clickRB),world2D.rbAxy.on("click",clickRB),world2D.rbGG.checked=!0,world2D.slCameraRR.minimum=100,world2D.slCameraRR.maximum=320,world2D.slCameraRR.value=260,world2D.rbShadow01.on("click",clickShadowRB),world2D.rbShadow02.on("click",clickShadowRB),world2D.rbShadow03.on("click",clickShadowRB),world2D.rbShadow04.on("click",clickShadowRB),world2D.rbShadow04.checked=!0,world2D.slLight.minimum=-90,world2D.slLight.maximum=60,world2D.slLight.value=-30,setInterval(tick,1e3/fps)}function tick(){tt--,120>tt&&0<tt&&(world2D.title.x=800*(tt/120)+190*((120-tt)/120),world2D.title.y=450*(tt/120)+50*((120-tt)/120),world2D.title.scaleX=world2D.title.scaleY=2*(tt/120)+.6*((120-tt)/120)),dt=world2D.chSlow.checked?.08:.2,dt*=isCarPlay?1:0,theCar.position.x+=vx*dt+.5*ax*dt*dt;for(var a=0;4>a;a++){let b=theCar.wheels[a];b.rotation.z-=(vx*dt+.5*ax*dt*dt)/2}vx+=ax*dt,theCar.position.x<-96&&0>vx&&world2D.chRebound.checked?(vx*=-1,mGroundZ.g.reboundN++):theCar.position.x<-110&&resetCar(),0>theCar.springTime?(ball.position.y=theCar.h+2+3,theCar.spring.setSpring(0,3,0)):(ball.position.y+=vy*dt+.5*ay*dt*dt,vy+=ay*dt,theCar.spring.setSpring(0,5,0),ball.position.y<theCar.h+2+3&&0>vy&&(theCar.springTime=-1,vy=0,ball.position.y=theCar.h+2+3)),theCar.wheels[0].visible=theCar.wheels[1].visible=theCar.wheels[2].visible=theCar.wheels[3].visible=!world2D.chCarHide.checked,theCar.spring.visible=theCar.box.visible=!world2D.chCarHide.checked,lBarCar.visible=world2D.chLight.checked&&!world2D.chCarHide.checked,lBarBall.visible=world2D.chLight.checked,world2D.slLight.value=10*Math.round(world2D.slLight.value/10),ligTheta=.9*ligTheta+.1*world2D.slLight.value*Math.PI/180,lights.rotation.z=-ligTheta,lBarBall.position.x=(theCar.position.x-ball.position.y*Math.tan(theta0+ligTheta))*Math.cos(theta0+ligTheta),lBarCar.position.x=(theCar.position.x-theCar.h*Math.tan(theta0+ligTheta))*Math.cos(theta0+ligTheta),xBW=100+theCar.position.x*Math.cos(theta0)-ball.position.y*Math.sin(theta0),yBW=(100+theCar.position.x)*Math.sin(theta0)+ball.position.y*Math.cos(theta0)+2,xCW=100+theCar.position.x*Math.cos(theta0)-theCar.h*Math.sin(theta0),yCW=(100+theCar.position.x)*Math.sin(theta0)+theCar.h*Math.cos(theta0)+2,mGroundX.updateCanvasX(),mGroundY.updateCanvasY(),mGroundZ.updateCanvasZ(),mGroundH.updateCanvasH(),mGroundV.updateCanvasV(),isRotateView=world2D.chRotateView.checked,theWorldCon.rotation.z=.9*theWorldCon.rotation.z+.1*theta0*(isRotateView?0:1),fixedGround.visible=world2D.chFixedGround.checked,world3D.render(),world2D.stage.update()}MyJS.myResize();function clickBtnDrop(a){let b=a.target.name;isCarPlay&&0>theCar.springTime&&"btnShoot"===b?(theCar.springTime=1,vy=8):isCarPlay||"btnRelease"!==b?isCarPlay&&"btnReset"===b&&resetCar():isCarPlay=!0}function clickRB(a){let b=a.target.parent.name;"rbGG"===b?(world2D.rbGG.checked=!0,world2D.rbAxy.checked=!1):"rbAxy"===b&&(world2D.rbGG.checked=!1,world2D.rbAxy.checked=!0)}function clickShadowRB(a){let b=a.target.parent.name;world2D.rbShadow01.checked="rbShadow01"===b,world2D.rbShadow02.checked="rbShadow02"===b,world2D.rbShadow03.checked="rbShadow03"===b,world2D.rbShadow04.checked="rbShadow04"===b}function resetCar(){theCar.position.x=85+15*Math.sin(theta0),isCarPlay=!1,theCar.springTime=-1,vx=vy=0,mGroundZ.g.clear(),mGroundZ.g.linesN=0,mGroundZ.g.reboundN=0}var ObjCanvasPlane=class extends THREE.Object3D{constructor(a,b,c,d,e){super();let f=this,g=e;f.w=a||100,f.h=b||100,f.canvas=document.createElement("canvas"),f.canvas.width=f.w*g,f.canvas.height=f.h*g,f.stage=new createjs.Stage(f.canvas),f.groundTexture=new lib[d],f.groundTexture.scaleX=f.groundTexture.scaleY=g,f.stage.addChild(f.groundTexture),f.stage.update(),f.mapTexture=new THREE.Texture(f.canvas),f.mapTexture.needsUpdate=!0,f.mapMaterial=new THREE.MeshStandardMaterial({map:f.mapTexture,side:0,roughness:.6,transparent:!0}),f.mesh=new THREE.Mesh(new THREE.PlaneGeometry(f.w,f.h,1,1),f.mapMaterial),"y"===c?f.mesh.rotation.x=-Math.PI/2:"x"==c&&(f.mesh.rotation.y=Math.PI/2),f.add(f.mesh)}updateCanvasX(){let a=this,b=(100+theCar.position.x-ball.position.y*Math.tan(theta0+ligTheta))/Math.tan(theta0+ligTheta);a.groundTexture.shadowBall.y=50+b,a.groundTexture.shadowBall.x=10,a.groundTexture.shadowBall.scaleX=.6,a.groundTexture.shadowBall.scaleY=.6/Math.sin(theta0+ligTheta),a.groundTexture.shadowBall.visible=world2D.rbShadow01.checked||world2D.rbShadow03.checked;let c=(100+theCar.position.x-theCar.h*Math.tan(theta0+ligTheta))/Math.tan(theta0+ligTheta);a.groundTexture.shadowCar.y=50+c,a.groundTexture.shadowCar.x=10,a.groundTexture.shadowCar.scaleX=1,a.groundTexture.shadowCar.scaleY=1/Math.sin(theta0+ligTheta),a.groundTexture.shadowCar.visible=(world2D.rbShadow01.checked||world2D.rbShadow03.checked)&&!world2D.chCarHide.checked,a.stage.update(),a.mapTexture.needsUpdate=!0}updateCanvasY(){let a=this,b=100+theCar.position.x-ball.position.y*Math.tan(theta0+ligTheta);a.groundTexture.shadowBall.x=b,a.groundTexture.shadowBall.y=10,a.groundTexture.shadowBall.scaleY=.6,a.groundTexture.shadowBall.scaleX=.6/Math.cos(theta0+ligTheta),a.groundTexture.shadowBall.visible=world2D.rbShadow01.checked||world2D.rbShadow03.checked;let c=100+theCar.position.x-theCar.h*Math.tan(theta0+ligTheta);a.groundTexture.shadowCar.x=c,a.groundTexture.shadowCar.y=10,a.groundTexture.shadowCar.scaleY=1,a.groundTexture.shadowCar.scaleX=1/Math.cos(theta0+ligTheta),a.groundTexture.shadowCar.visible=(world2D.rbShadow01.checked||world2D.rbShadow03.checked)&&!world2D.chCarHide.checked,a.stage.update(),a.mapTexture.needsUpdate=!0}updateCanvasZ(){let a=this,b=100+theCar.position.x*Math.cos(theta0)-ball.position.y*Math.sin(theta0),c=79-theCar.position.x*Math.sin(theta0)-ball.position.y*Math.cos(theta0);a.hasGraphics?-100<ball.position.x&&isCarPlay&&(0===a.g.linesN?(a.g.setStrokeStyle(1),a.g.beginStroke("#FF0000"),a.g.oldX=b,a.g.oldY=c,a.g.linesN++):2<a.g.reboundN?(mGroundZ.g.clear(),mGroundZ.g.linesN=0,mGroundZ.g.reboundN=0):2e3>a.g.linesN&&(a.g.mt(a.g.oldX,a.g.oldY),a.g.lt(b,c),a.g.oldX=b,a.g.oldY=c,a.g.linesN++)):(a.hasGraphics=!0,a.g=new createjs.Graphics,a.shape=new createjs.Shape(a.g),a.groundTexture.addChild(a.shape),a.g.linesN=0,a.g.reboundN=0);for(var d=0;19>d;d++){let b=a.groundTexture["ars"+(9>d?"0"+(d+1):d+1+"")];b.visible=world2D.chVector.checked,b.arAx.alpha=b.arAy.alpha=.9*b.arAy.alpha+.1*(world2D.chRotateView.checked?1:.05),b.arGG.alpha=.9*b.arGG.alpha+.1*(world2D.chRotateView.checked?.05:1)}a.groundTexture.ar.visible=world2D.chVector.checked,a.groundTexture.tBall.x=b,a.groundTexture.tBall.y=c,a.stage.update(),a.mapTexture.needsUpdate=!0}updateCanvasH(){let a=this,b=xBW+yBW*Math.tan(-ligTheta);a.groundTexture.shadowBall.x=b,a.groundTexture.shadowBall.y=10,a.groundTexture.shadowBall.scaleY=.6,a.groundTexture.shadowBall.scaleX=.6/Math.cos(ligTheta),a.groundTexture.shadowBall.visible=world2D.rbShadow01.checked||world2D.rbShadow02.checked;let c=xCW+yCW*Math.tan(-ligTheta);a.groundTexture.shadowCar.x=c,a.groundTexture.shadowCar.y=10,a.groundTexture.shadowCar.scaleY=1,a.groundTexture.shadowCar.scaleX=1/Math.cos(ligTheta),a.groundTexture.shadowCar.visible=(world2D.rbShadow01.checked||world2D.rbShadow02.checked)&&!world2D.chCarHide.checked,a.stage.update(),a.mapTexture.needsUpdate=!0}updateCanvasV(){let a=this,b=yBW+(L0-xBW)/Math.tan(ligTheta);a.groundTexture.shadowBall.y=b,a.groundTexture.shadowBall.x=10,a.groundTexture.shadowBall.scaleX=.6,a.groundTexture.shadowBall.scaleY=.6/Math.sin(ligTheta),a.groundTexture.shadowBall.visible=world2D.rbShadow01.checked||world2D.rbShadow02.checked;let c=yCW+(L0-xCW)/Math.tan(ligTheta);a.groundTexture.shadowCar.y=c,a.groundTexture.shadowCar.x=10,a.groundTexture.shadowCar.scaleX=.6,a.groundTexture.shadowCar.scaleY=.6/Math.sin(ligTheta),a.groundTexture.shadowCar.visible=(world2D.rbShadow01.checked||world2D.rbShadow02.checked)&&!world2D.chCarHide.checked,a.stage.update(),a.mapTexture.needsUpdate=!0}},TEACHER={};TEACHER.ObjPlane=class extends THREE.Object3D{constructor(a,b,c,d,e){super();let f=this;f.mat=new TEACHER.MSMat(c,e),f.geo=new THREE.PlaneGeometry(a||10,b||10,1,1),f.mesh=new THREE.Mesh(f.geo,f.mat),"x"===d?f.mesh.rotation.y=.5*Math.PI:"y"==d&&(f.mesh.rotation.x=-.5*Math.PI),f.add(f.mesh)}},TEACHER.ObjCylinder=class extends THREE.Object3D{constructor(a,b,c,d,e,f){super();let g=this;g.mat=new TEACHER.MSMat(c,f),g.geo=new THREE.CylinderGeometry(a||10,a||10,b||10,32,2,d),g.mesh=new THREE.Mesh(g.geo,g.mat),"x"===e?g.mesh.rotation.z=-.5*Math.PI:"z"==e&&(g.mesh.rotation.x=.5*Math.PI),g.add(g.mesh)}},TEACHER.ObjSphere=class extends THREE.Object3D{constructor(a,b,c){super();let d=this;d.mat=new TEACHER.MSMat(b,c),d.geo=new THREE.SphereGeometry(a||10,32,16),d.mesh=new THREE.Mesh(d.geo,d.mat),d.add(d.mesh)}},TEACHER.ObjBox=class extends THREE.Object3D{constructor(a,b,c,d,e){super();let f=this;f.mat=new TEACHER.MSMat(d,e),f.geo=new THREE.BoxGeometry(a||10,b||10,c||10),f.mesh=new THREE.Mesh(f.geo,f.mat),f.add(f.mesh)}},TEACHER.MSMat=class extends THREE.MeshStandardMaterial{constructor(a,b){super({color:a||16711935,roughness:.4,side:b||0})}},TEACHER.ObjPicPlane=class extends THREE.Object3D{constructor(a,b,c,d,e){super();let f=this,g=new THREE.TextureLoader().load(c);f.mat=new THREE.MeshBasicMaterial({map:g,transparent:!0,side:e||0}),f.geo=new THREE.PlaneGeometry(a,b,1,1),f.mesh=new THREE.Mesh(f.geo,f.mat),"x"===d?f.mesh.rotation.y=.5*Math.PI:"y"==d&&(f.mesh.rotation.x=-.5*Math.PI),f.add(f.mesh)}},TEACHER.ObjPicCylinder=class extends THREE.Object3D{constructor(a,b,c,d,e,f){super();let g=this,h=new THREE.TextureLoader().load(c);g.mat=new THREE.MeshBasicMaterial({map:h,side:f||0}),g.geo=new THREE.CylinderGeometry(a||10,a||10,b||10,32,4,d),g.mesh=new THREE.Mesh(g.geo,g.mat),"x"===e?g.mesh.rotation.z=-.5*Math.PI:"z"===e?(g.mesh.rotation.y=.5*Math.PI,g.mesh.rotation.x=.5*Math.PI):"y"==e&&(g.mesh.rotation.y=.5*Math.PI),g.add(g.mesh)}},TEACHER.ObjPicSphere=class extends THREE.Object3D{constructor(a,b,c){super();let d=this,e=new THREE.TextureLoader().load(b);d.mat=new THREE.MeshBasicMaterial({map:e,side:c||0}),d.geo=new THREE.SphereGeometry(a||10,32,16),d.mesh=new THREE.Mesh(d.geo,d.mat),d.add(d.mesh)}},TEACHER.ObjArrow=class extends THREE.Object3D{constructor(a,b){super();let c=.5,d=new THREE.MeshStandardMaterial({color:b||16711935,roughness:.4}),e=new THREE.ConeGeometry(a||10,40,32);this.ArrowHead=new THREE.Mesh(e,d),this.ArrowHead.position.y=80,e=new THREE.CylinderGeometry((a||10)*c,(a||10)*c,60,32,2),this.ArrowBody=new THREE.Mesh(e,d),this.ArrowBody.position.y=30,this.rotX=new THREE.Object3D,this.rotY=new THREE.Object3D,this.add(this.rotY),this.rotY.add(this.rotX),this.rotX.add(this.ArrowBody),this.rotX.add(this.ArrowHead)}setArrow(a,b,c){let d=a*a+b*b+c*c,e=Math.sqrt(d);0<d?(this.rotX.visible=!0,this.rotX.scale.y=e/100):this.rotX.visible=!1,this.rotX.rotation.x=Math.acos(b/e),this.rotY.rotation.y=Math.atan2(a,c)}},TEACHER.ObjSpring=class extends THREE.Object3D{constructor(a,b,c,d,e){super();let f=a||20;this.L0=f;let g=[],h=d||5,j=b||5;g.push(new THREE.Vector3(0,0,0)),g.push(new THREE.Vector3(0,.05*f,0));for(var k=0;k<=16*h;k++)g.push(new THREE.Vector3(j*Math.cos(2*k*Math.PI/16),f*(.05+.9*k/h/16),j*Math.sin(2*k*Math.PI/16)));g.push(new THREE.Vector3(0,.95*f,0)),g.push(new THREE.Vector3(0,f,0));let l=new THREE.CatmullRomCurve3(g),m=new THREE.MeshStandardMaterial({color:e||16711935,roughness:.4}),n=new THREE.TubeGeometry(l,500,c||.5,12);this.mesh=new THREE.Mesh(n,m),this.rotX=new THREE.Object3D,this.rotY=new THREE.Object3D,this.add(this.rotY),this.rotY.add(this.rotX),this.rotX.add(this.mesh)}setSpring(a,b,c){let d=a*a+b*b+c*c,e=Math.sqrt(d);0<d?(this.rotX.visible=!0,this.rotX.scale.y=e/this.L0):this.rotX.visible=!1,this.rotX.rotation.x=Math.acos(b/e),this.rotY.rotation.y=Math.atan2(a,c)}},TEACHER.Points=class extends THREE.Points{constructor(a,b,c){let d=new THREE.Color(a||16711935),e=new THREE.BufferGeometry,f=[];e.setAttribute("position",new THREE.Float32BufferAttribute(f,3)),e.computeBoundingSphere();let g=new THREE.PointsMaterial({size:b||1,map:TEACHER.Points.createCanvasMaterial("#"+d.getHexString(),64),transparent:!0,depthWrite:!1});super(e,g);let h=this;h.nnMax=c||1e4,h.nnNow=0,h.geometry=e,h.positions=f}static createCanvasMaterial(a,b){var c=document.createElement("canvas");c.width=c.height=b;var d=c.getContext("2d");d.imageSmoothingEnabled=!1;var e=new THREE.Texture(c),f=b/2;return d.beginPath(),d.arc(f,f,b/2-3,0,2*Math.PI,!1),d.closePath(),d.fillStyle=a,d.fill(),e.needsUpdate=!0,e}addPoint(a,b,c){let d=this;d.nnNow<d.nnMax?d.nnNow++:(log("TEACHER.Points \u5230\u9054\u6700\u5927\u9EDE\u6578"),d.positions.shift(),d.positions.shift(),d.positions.shift()),d.positions.push(a,b,c)}clear(){let a=this;a.positions=[],a.nnNow=0,a.update()}setPoint(a,b,c,d){let e=this;a>e.nnMax?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Points \u6700\u5927\u9EDE\u6578 nnMax"):a>e.nnNow?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Points \u73FE\u5728\u9EDE\u6578 nnNow"):(e.positions[3*a]=b,e.positions[3*a+1]=c,e.positions[3*a+2]=d)}getPoint(a){let b=this,c=new THREE.Vector3;return a>b.nnMax?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Points \u6700\u5927\u9EDE\u6578 nnMax"):a>b.nnNow?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Points \u73FE\u5728\u9EDE\u6578 nnNow"):(c.x=b.positions[3*a],c.y=b.positions[3*a+1],c.z=b.positions[3*a+2]),c}update(){let a=this;a.geometry.setAttribute("position",new THREE.Float32BufferAttribute(a.positions,3)),a.geometry.computeBoundingSphere(),a.geometry.attributes.position.needsUpdate=!0}},TEACHER.Line=class extends THREE.Line2{constructor(a,b,c){let d=c||1e4;var e=new THREE.LineMaterial({color:a||16711935,linewidth:b||1});e.resolution.set(window.innerWidth,window.innerHeight);let f=new THREE.LineGeometry,g=new Float32Array(3*d);f.setPositions(g),super(f,e);let h=this;h.nnMax=d,h.lineWidth=b||1,h.nnNow=0,h.geometry=f,h.positions=g}addPoint(a,b,c){let d=this;if(d.nnNow<d.nnMax)d.nnNow++;else{log("TEACHER.Line \u5230\u9054\u6700\u5927\u9EDE\u6578");for(var e=0;e<d.nnMax-1;e++)d.positions[3*e]=d.positions[3*e+3],d.positions[3*e+1]=d.positions[3*e+4],d.positions[3*e+2]=d.positions[3*e+5]}for(var e=d.nnNow;e<=d.nnMax;e++)d.positions[3*(e-1)]=a,d.positions[3*(e-1)+1]=b,d.positions[3*(e-1)+2]=c}clear(){let a=this;a.positions=new Float32Array(3*a.nnMax);a.nnNow=0,a.update()}setPoint(a,b,c,d){let e=this;a>e.nnMax?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Line \u6700\u5927\u9EDE\u6578 nnMax"):a>e.nnNow?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Line \u73FE\u5728\u9EDE\u6578 nnNow"):(e.positions[3*a]=b,e.positions[3*a+1]=c,e.positions[3*a+2]=d)}getPoint(a){let b=this,c=new THREE.Vector3;return a>b.nnMax?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Line \u6700\u5927\u9EDE\u6578 nnMax"):a>b.nnNow?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Line \u73FE\u5728\u9EDE\u6578 nnNow"):(c.x=b.positions[3*a],c.y=b.positions[3*a+1],c.z=b.positions[3*a+2]),c}update(){let a=this,b=a.getPoint(a.nnNow-1);for(var c=a.nnNow;c<=a.nnMax;c++)a.positions[3*c]=b.x,a.positions[3*c+1]=b.y,a.positions[3*c+2]=b.z;a.geometry.setPositions(a.positions)}},TEACHER.ObjTextPlane=class extends THREE.Object3D{constructor(a,b,c,d,e,f){super();let g=this,h=Math.round(Math.log2(a/b)),i=$("<canvas>").attr("width",128*Math.pow(2,h)+"").attr("height","128");g.stage=new createjs.Stage(i[0]);let j=new createjs.Container;if(f){let a=new createjs.Shape,b=new THREE.Color(f);a.graphics.c().f("#"+b.getHexString()).dr(0,0,128*Math.pow(2,h),128),j.addChild(a)}g.ctext=new createjs.Text;let k=new THREE.Color(e||16777215);g.ctext.color="#"+k.getHexString(),g.ctext.font="96px Arial",g.ctext.text=c||"",g.ctext.textAlign="center",g.ctext.textBaseline="middle",g.ctext.x=128*Math.pow(2,h)/2,g.ctext.y=64,j.addChild(g.ctext),g.stage.addChild(j),g.stage.update(),g.texture=new THREE.Texture(i[0]);var l=new THREE.MeshBasicMaterial({map:g.texture,transparent:!0}),m=new THREE.PlaneGeometry(a||10,b||10,1,1);g.texture.needsUpdate=!0,g.plane1=new THREE.Mesh(m,l),g.plane2=new THREE.Mesh(m,l),g.plane2.rotation.y=Math.PI;let n=new THREE.Object3D;n.add(g.plane1).add(g.plane2),"x"===d?n.rotation.y=.5*Math.PI:"y"==d&&(n.rotation.x=-.5*Math.PI),g.add(n)}setText(a){let b=this;b.ctext.text=a,b.stage.update(),b.texture.needsUpdate=!0}},TEACHER.ObjGraph=class extends THREE.Object3D{constructor(a,b,c,d,e,f,g){super();let h=this;h.objCon=new THREE.Object3D,h._xMin=a||0,h._xMax=b||10,h._yMin=c||0,h._yMax=d||10,h.divXN=5,h.divYN=4,h.frameMat=new THREE.LineBasicMaterial({color:e||16777215});for(var i=[],j=0;j<=h.divXN;j++)i.push(new THREE.Vector3(-50+20*j,0,0)),i.push(new THREE.Vector3(-50+20*j,50,0));for(var k=0;k<=h.divYN;k++)i.push(new THREE.Vector3(-50,12.5*k,0)),i.push(new THREE.Vector3(50,12.5*k,0));let l=new THREE.BufferGeometry().setFromPoints(i);h.frame=new THREE.LineSegments(l,h.frameMat),h.objCon.add(h.frame),h.labelXMin=new TEACHER.ObjTextPlane(20,5,h._xMin+"","z",e||16777215),h.labelXMin.position.x=-50,h.labelXMin.position.y=-3,h.objCon.add(h.labelXMin),h.labelXMax=new TEACHER.ObjTextPlane(20,5,h._xMax+"","z",e||16777215),h.labelXMax.position.x=50,h.labelXMax.position.y=-3,h.objCon.add(h.labelXMax),h.labelYMin=new TEACHER.ObjTextPlane(20,5,h._yMin+"","z",e||16777215),h.labelYMin.position.x=-53,h.labelYMin.position.y=0,h.objCon.add(h.labelYMin),h.labelYMax=new TEACHER.ObjTextPlane(20,5,h._yMax+"","z",e||16777215),h.labelYMax.position.x=-53,h.labelYMax.position.y=50,h.objCon.add(h.labelYMax),h.labelX=new TEACHER.ObjTextPlane(24,7,"x","z",e||16777215),h.labelX.position.x=60,h.labelX.position.y=4,h.labelX.position.z=1,h.labelY=new TEACHER.ObjTextPlane(24,7,"y","z",e||16777215),h.labelY.position.x=-60,h.labelY.position.y=25,h.labelY.position.z=1,h.labelY.rotation.z=Math.PI/2,h.labelTitle=new TEACHER.ObjTextPlane(40,10,"y-x","z",e||16777215),h.labelTitle.position.y=53,h.labelTitle.position.z=1,h.objCon.add(h.labelX).add(h.labelY).add(h.labelTitle),h._lineColor=f,h._nnMax=g,h.line=new TEACHER.Line(h._lineColor||16776960,2,h._nnMax),h.objCon.add(h.line),h.changeScale(),h.add(h.objCon)}addPoint(a,b){let c=this;c.line.addPoint(a,b,0),c.line.update()}clear(){let a=this;a.line.clear()}changeScale(){let a=this;a.line.scale.x=100/(a._xMax-a._xMin),a.line.scale.y=50/(a._yMax-a._yMin),a.line.position.x=-50-a._xMin*a.line.scale.x,a.line.position.y=-a._yMin*a.line.scale.y,a.labelXMin.setText(a._xMin),a.labelXMax.setText(a._xMax),a.labelYMin.setText(a._yMin),a.labelYMax.setText(a._yMax)}setLabel(a,b,c){let d=this;d.labelTitle.setText(a||"y-x"),d.labelY.setText(b||"y"),d.labelX.setText(c||"x")}get xMin(){return this._xMin}set xMin(a){this._xMin=a,this.changeScale()}get xMax(){return this._xMax}set xMax(a){this._xMax=a,this.changeScale()}get yMin(){return this._yMin}set yMin(a){this._yMin=a,this.changeScale()}get yMax(){return this._yMax}set yMax(a){this._yMax=a,this.changeScale()}};var skyBox=new THREE.Object3D;skyBox.wallU=new TEACHER.ObjPicPlane(1e4,1e4,pics.wallU,"y",1),skyBox.wallD=new TEACHER.ObjPicPlane(1e4,1e4,pics.wallD,"y",0),skyBox.wallS=new TEACHER.ObjPicCylinder(5e3,1e4,pics.wallSide,!0,"y",1),skyBox.wallU.position.y=5e3,skyBox.wallD.position.y=-5e3,skyBox.add(skyBox.wallU).add(skyBox.wallD).add(skyBox.wallS);var groundA=new TEACHER.ObjPicPlane(100,50,pics.ground2,"y"),groundB=new TEACHER.ObjPicPlane(100,50,pics.ground2,"y"),logo=new TEACHER.ObjPicPlane(100,100/8,pics.logo,"z",2);logo.position.z=-50,logo.position.y=100/8/2;function getMouse3D(a){let b,c=a||"y",d=new THREE.Vector3;"x"===c?b=new THREE.Vector3(1,0,0):"y"===c?b=new THREE.Vector3(0,1,0):"z"===c?b=new THREE.Vector3(0,0,1):log("\u932F\u8AA4!!");let e=new THREE.Vector2;return e.x=2*(world2D.stage.mouseX/1600)-1,e.y=2*-(world2D.stage.mouseY/900)+1,world3D.raycaster.setFromCamera(e,world3D.camera),world3D.raycaster.ray.intersectPlane(new THREE.Plane(b),d),d}init();